import { cookie, startTime, endTime } from "./config.js";
import http from "http";
import fs from "fs";
import { Document, Packer, Paragraph, TextRun, ExternalHyperlink } from "docx";
const url = "http://zentao.dclingcloud.com:8090/zentao/my-task-finishedBy.html";
const cookieList = cookie.replaceAll(" ", "").split(";");
const options = {
  hostname: "58.20.30.214",
  port: 8090,
  path: "/zentao/my-task-finishedBy.html",
  method: "GET",
  headers: {
    Cookie: cookieList,
  },
};

http.get(options).on("response", (res) => {
  res.setEncoding("utf8");
  let responseData = "";
  res.on("data", (chunk) => {
    responseData += chunk;
  });

  res.on("end", () => {
    generateWord(generateTaskList({ htmlStr: responseData }));
  });
});

function generateTaskList({ htmlStr, sTime = startTime, eTime = endTime }) {
  const taskIdRegex = /value=['"](\d+)['"]/;
  const taskNameRegex = /title=['"](.+)['"]/;
  const tdContentRegex = /<td.*>(.*)<\/td>/;
  function generateTaskInfo(trHtml) {
    const tdRegex = /<td.*?>(.*?)<\/td>/gs;
    const tdHtmlList = trHtml.match(tdRegex);
    const taskId = tdHtmlList[0].match(taskIdRegex)[1];
    const taskName = tdHtmlList[3].match(taskNameRegex)[1];
    const consumeTime = tdHtmlList[8].match(tdContentRegex)[1];
    const completeTime = tdHtmlList[10].match(tdContentRegex)[1];
    return {
      taskId,
      taskName,
      consumeTime,
      completeTime: +new Date(completeTime),
      url: `http://zentao.dclingcloud.com:8090/zentao/task-view-${taskId}.html`,
    };
  }

  const tbodyRegex = /<tbody.*?>(.*?)<\/tbody>/gs;
  const tbodyHtml = htmlStr.toString().match(tbodyRegex);
  const trRegex = /<tr.*?>(.*?)<\/tr>/gs;

  const trHtmlList = tbodyHtml[0].match(trRegex);
  const taskList = trHtmlList.map((trHtml) => generateTaskInfo(trHtml));
  const startIdx = taskList.findIndex(
    ({ completeTime }) =>
      !Number.isNaN(completeTime) &&
      completeTime > sTime &&
      completeTime < eTime
  );
  const endIdx = taskList.findLastIndex(
    ({ completeTime }) =>
      !Number.isNaN(completeTime) &&
      completeTime > sTime &&
      completeTime < eTime
  );
  return taskList.slice(startIdx, endIdx);
}

function generateWord(taskList) {
  const children = taskList.map((task, index) => {
    return new Paragraph({
      children: [
        new ExternalHyperlink({
          children: [
            new TextRun({
              text: `${task.taskName}`,
              style: "Hyperlink",
            }),
          ],
          link: task.url,
        }),

        new TextRun({
          text: `\t耗时 ${task.consumeTime}h`,
        }),
      ],
    });
  });
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: children,
      },
    ],
  });

  Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("export.docx", buffer);
  });
}
