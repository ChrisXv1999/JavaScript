interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

interface Triangle {
  kind: "triangle";
  sideLength: number;
}
// ---cut---
type Shape = Circle | Square | Triangle;
type GetAreaFunction = {
  (shape:Shape):number,
}
const getArea:GetAreaFunction = (shape)=> {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    case "triangle": 
      return  shape.sideLength ** 2 / 2
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}


function longest<Type extends { length: number }>(a: Type, b: Type):Type {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}
let tagName:keyof HTMLElementTagNameMap= "blockquote"

