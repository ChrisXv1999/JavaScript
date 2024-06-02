interface CallOrConstruct {
    (n?: number): string;
    new (s: string): Date;
  }
  // const fn:CallOrConstruct = (s:number|string):string|Date=>{
  //   if(typeof s === 'number'){
  //       return s.toString()
  //   }else {
  //       return new Date(s)
  //   }
  // }