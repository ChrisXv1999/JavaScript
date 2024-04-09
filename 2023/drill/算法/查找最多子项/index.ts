interface demoData {
  id: string;
  name: string;
  children?: demoData[];
}

interface level {
  level: number;
  index: number;
}

const obj: demoData = {
  id: "1",
  name: "节点1",
  children: [
    {
      id: "1-1",
      name: "节点1-1",
      children: [
        {
          id: "1-1-1",
          name: "节点1-1-1",
        },
        {
          id: "1-1-2",
          name: "节点1-1-2",
        },
      ],
    },
  ],
};
function queryLevelByChildren(obj: demoData): level {
  let maxLen = obj.children?.length || 0;
  function dfs(obj: demoData, target: level, currentLevel: number = 0): level {
    currentLevel++;
    (obj.children || []).forEach((child: demoData, index: number) => {
      if (child.children && child.children.length > maxLen) {
        maxLen = child.children.length;
        target = { level: currentLevel, index };
      }
      target = dfs(child, { ...target }, currentLevel);
    });
    return target;
  }
  return dfs(obj, { level: 0, index: 0 });
}
console.log(obj);

console.log(queryLevelByChildren(obj));


