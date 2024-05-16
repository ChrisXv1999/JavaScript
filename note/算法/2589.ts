var findMinimumTime = function(tasks: number[][]):number{
    const timeMap:{[key:string]:number} = {};
    tasks.forEach(([start,end]) => {
        for(let i:number = start;i<=end;i++){
            timeMap[i] = (timeMap[i] || 0) + 1;
        }
    })
    const timeList = Object.entries(timeMap).sort(([k1,v1],[k2,v2]) =>v2-v1);
    const useTimeMap:{[key:string]:boolean} = {};
    console.log(tasks);
    
tasks.sort((t1,t2)=>t1[2]-t2[2]).forEach(task => {
        let [start,end,duration] = task;
        let i = 0;
        while(duration){
            if(+timeList[i][0] >= start && +timeList[i][0] <= end){
                if(!useTimeMap[timeList[i][0]]){
                    useTimeMap[timeList[i][0]] = true;
                }
                duration--
            }
            i++;
        }
    })
    return Object.keys(useTimeMap).length
}

function numberOfWeeks(milestones: number[]): number {
    const max:number = Math.max(...milestones);
    const acc:number = milestones.reduce((acc, cur) => acc + cur, 0);
    return acc - max >= max-1 ? acc : (acc-max) *2 + 1
};
