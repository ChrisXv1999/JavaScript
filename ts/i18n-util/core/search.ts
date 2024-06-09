type searchTarget = {
    key: string,
    path: string
}
export function searchKey(key:string,m:Map<string,Map<string,string>>):Array<searchTarget>{
   const entriesIter = m.entries();
   let next = true;
   let target:searchTarget[] = []
   while(next){
        let {value,done} = entriesIter.next();
        next = !done;
        if(value) {
            const [path,map] = value;
            const val =  map.get(key);
            if(val){
                target.push({
                    key: val,
                    path
                })
            }
        }
   }
   return target 
}