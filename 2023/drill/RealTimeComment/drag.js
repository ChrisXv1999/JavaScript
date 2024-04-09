// const container = document.querySelector(".container");
// let X = 0;
// let Y = 0;
// container.addEventListener("mousedown", (event) => {
//   const { target, offsetY, offsetX } = event;
//   if (target.className !== "item") return;
//   if (!X || !Y) {
//     const { left, top } = target.getBoundingClientRect();
//     X = left;
//     Y = top;
//   }
//   const move = (event) => {
//     target.style.setProperty("--x", event.x - X - offsetX + "px");
//     target.style.setProperty("--y", event.y - Y - offsetY + "px");
//   };
//   document.body.addEventListener("mousemove", move);
//   document.body.addEventListener("mouseup", (event) => {
//     document.body.removeEventListener("mousemove", move);
//   });
// });

/**
 * 
 * @param list  [[],[]]
 * @name 导出名称
 * @autoCol 自适应列宽
 */
function exportList2Excel({list,name='export',autoCol=true}){
    const sheet = XLSX.utils.aoa_to_sheet(list);
    if(autoCol) {
        const cols = [];
        const zhReg = /[^\x00-\xff]/g;
        for(let i = 0; i <list[0].length; i++) {
           const w = Math.max(Sting(list[0][i]).replace(zhReg,'aa').length, Sting(list[1][i]).replace(zhReg,'aa').length,10);
           cols.push({width: w + 2})
        }
        sheet['!cols'] = cols;
    }
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, sheet, "Sheet1");
    const excelBase64 = XLSX.write(wb, {
        bookType:'xlsx',
        type:'base64'
    });

    const downloadLink = document.createElement("a");
    downloadLink.href = "data:application/octet-stream;base64," + excelBase64;
    downloadLink.download = `${name}.xlsx`;
    downloadLink.click();
    downloadLink.remove();
}