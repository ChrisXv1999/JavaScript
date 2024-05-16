function minimumRounds(tasks: number[]): number {
    const validKeys = [...tasks] as const; 
    const countMap: { [key in typeof validKeys[number]]?: number } = {};
    for (const task of tasks) {
        countMap[task] = countMap[task] ? countMap[task] + 1 : 1
    }
    const values = Object.values(countMap);
    if (values.some(v => v! < 2)) {
        return -1
    }
    return values.reduce((acc: number, cur?: number) => (acc + Math.ceil(cur! / 3)), 0)
};
minimumRounds([1,2,3])


const validKeys = ['a', 'b', 'c'] as const; // 使用 as const 将数组变为只读元组

type ValidKeys = typeof validKeys[number]; // 定义一个类型，表示有效的键类型

// 定义一个类型，表示对象的键必须为有效的键类型
type ObjectWithValidKeys = {
  [key in ValidKeys]: any;
};

// 使用对象的类型
const myObject: Partial<ObjectWithValidKeys> = {
};


