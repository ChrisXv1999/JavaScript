

const list = [1];
list.length = 10000;

type ForEach<T> = (list: T[], callBack: (item: T, index?: number,list?:T[]) => void) => void;

const numberForEach:ForEach<Number> = (list,callBack)=>{
    const {length: len} = list;
    let key = 0;
    while(key < len){
        if(key in list){
            callBack(list[key],key,list);
        }
        key++;
    }
}
numberForEach(list,(item,index)=>{
    console.log(item,index);
})
