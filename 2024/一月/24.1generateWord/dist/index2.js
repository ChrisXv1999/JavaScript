import fs from "fs";
function generateTaskList({
  htmlStr,
  startTime = 1672531200000,
  endTime = 1704067200000,
}) {
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
      completeTime > startTime &&
      completeTime < endTime
  );
  const endIdx = taskList.findLastIndex(
    ({ completeTime }) =>
      !Number.isNaN(completeTime) &&
      completeTime > startTime &&
      completeTime < endTime
  );
  return taskList.slice(startIdx, endIdx);
}
fs.readFile("./result.html", (err, data) => {
  const taskList = generateTaskList({ htmlStr: data });
  generateWord(taskList);
});

import { Document, Packer, Paragraph, TextRun, ExternalHyperlink } from "docx";
function generateWord(taskList) {
  const children = taskList.map((task) => {
    return new Paragraph({
      children: [
        new ExternalHyperlink({
          children: [
            new TextRun({
              text: `[${task.taskId}]`,
              bold: true,
              style: "Hyperlink",
            }),
          ],
          link: "https://docx.js.org",
        }),
        new TextRun({
          text: `\t${task.taskName}`,
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
    fs.writeFileSync("My Document.docx", buffer);
  });
}
