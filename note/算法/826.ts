function maxProfitAssignment(difficulty: number[], profit: number[], worker: number[]): number {
    type profitItemType = typeof profit[0];
    type profitEntryType = [string,profitItemType]
    const sortProfitList:[typeof difficulty[0],profitItemType][]= Object.entries(profit).sort((a:profitEntryType,b:profitEntryType)=>b[1]-a[1]).map(([key,value])=>{
        return [difficulty[+key],value]
    });
    let maxProfit:number = 0;
    const len:number = sortProfitList.length;
    for(let ability of worker){
       let idx = 0;
        while(idx < len){
            if(ability >= sortProfitList[idx][0]){
                maxProfit += sortProfitList[idx][1]
                break
            }
            idx++;
        }
    }
    return maxProfit
};
console.log(maxProfitAssignment([13,37,58],[4,90,96],[34,73,45]));

