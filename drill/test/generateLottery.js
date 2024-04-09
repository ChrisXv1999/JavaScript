// function generateLotteryNumbers() {
//     var lotteryNumbers = new Set();

//     while (lotteryNumbers.size < 5) {
//       var number = Math.floor(Math.random() * 35) + 1;
//       lotteryNumbers.add(number);
//     }
    
//     while (lotteryNumbers.size < 7) {
//       var number = Math.floor(Math.random() * 12) + 1;
//       lotteryNumbers.add(number);
//     }
    
//     return Array.from(lotteryNumbers);
//   }

//   function chunk(array,size) {
//     const target = [];
//     while(array.length){
//       target.push(array.splice(0,size));
//     }
//     return target
//   }
//   console.log(chunk(generateLotteryNumbers(),5));


function countedNames(version1, version2){
    const v1 = version1.split(".")
     const  v2 = version2.split(".") 
     // console.log(22,JSON.parse(v1[0]),v2)
     for(let i =0;i < v1.length; i++){
       for(let j =0;i < v2.length; j++){
         console.log(33,JSON.parse(v1[i]),JSON.parse(v2[j]))
         const pp = JSON.parse(v1[i])
         const mm =JSON.parse(v2[j])
         if(pp > mm){
               return 1
             }else if(pp < mm){
               return 2
             }else{
               
             }
       }
     }
     return 0
   }
   const output = countedNames("1.2.3.4", "1.2.3.4");
   console.log(111,output)