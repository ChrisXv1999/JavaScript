import fs from "fs";
import path from "path";
import csv from "csv-parser";
import Excel from "exceljs";
let rowList = [];
fs.createReadStream("./NGPM-Bug1.csv")
  .pipe(csv())
  .on("data", (row) => {
    rowList.push(row);
  })
  .on("end", () => {
    const userList = ['徐阳','吕晶晶','吴冬','韦亚鹏'];
    const userBugList = userList.reduce((t,user)=>{
      t[user] = [];
      return t;
    },{});

    // 创建 Excel 工作簿
    rowList = rowList.filter(a=>+a['激活次数']>0)
    rowList.forEach((row)=>{
      const user = row['解决者'];
      if(userList.includes(user)){
        userBugList[user].push(row)    
      }
    });
    rowList = Object.values(userBugList).map(l=>{
      l.sort((a,b)=>a['严重程度'] - b['严重程度'])
      return l;
    }).flat(1);
    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet("Sheet1");
    const header = ["Bug编号", "激活次数","Bug标题", "严重程度", "优先级","Bug类型","解决者","解决方案", "相关需求"];
    const storyIdRegex = /#(\d+)/;
    worksheet.columns = [
      { header: "Bug编号", key: "Bug编号", width: 8 },
      { header: "激活次数", key: "激活次数", width: 8 },
      { header: "Bug标题", key: "Bug标题", width: 64 },
      { header: "严重程度", key: "严重程度", width: 12 },
      { header: "优先级", key: "优先级", width: 12 },
      { header: "Bug类型", key: "Bug类型", width: 12 },
      { header: "解决者", key: "解决者", width: 12 },
      { header: "解决方案", key: "解决方案", width: 12 },
      { header: "相关需求", key: "相关需求", width: 12 },
    ];

    const rows = rowList.map((row) => {
      return header.reduce((target, key) => {
        if (key === "Bug标题") {
          target[key] = {
            text: row[key],
            hyperlink: `http://zentao.dclingcloud.com:8090/zentao/bug-view-${row["Bug编号"]}.html`,
            tooltip: `http://zentao.dclingcloud.com:8090/zentao/bug-view-${row["Bug编号"]}.html`,
          };
        } else if (key === "相关需求" && row[key] !=='') {
            const storyId = row[key].match(storyIdRegex)[1];
            target[key] = {
                text:storyId,
                hyperlink: `http://zentao.dclingcloud.com:8090/zentao/story-view-${storyId}.html`,
                tooltip: `http://zentao.dclingcloud.com:8090/zentao/story-view-${storyId}.html`,
              };
        } else {
          target[key] = row[key];
        }
        return target;
      }, {});
    });
    worksheet.addRows(rows);
    workbook.xlsx.writeFile("NGPM重复激活-Bug.xlsx");
  });
