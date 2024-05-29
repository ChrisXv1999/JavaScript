interface Name {
    name:string
  }
  interface Age {
    age:number
  }
  type Person = Name & Age;
  const p:Person = {
    name: 'chris',
    age: 1
  }
  const getName = <T,K extends keyof T>(person:T,key:K):T[K]=>person[key];
  getName({name:''},'name');

enum Direction {
  TOP,
  BOTTOM,
  LEFT,
  RIGHT,
  TOP_LEFT,
  TOP_RIGHT,
  BOTTOM_LEFT,
  BOTTOM_RIGHT,
}
