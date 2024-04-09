const fetchFn = function(query) {
  const delay = 1000;
  return new Promise((resolve) => {
    setTimeout(() => resolve(query), delay);
  });
}

const queryList = Array.from({ length: 100 }).map((d, i) => i);


const promiseConcurrency = function({ fetchFn, queryList, limit }) {
  const queryListCopy = [...queryList];
  const taskQueue = [];
  const pendingQueue = [];
  
  const runTask = function(query) {
    const fetch = fetchFn(query);
    pendingQueue.push(fetch);
    
    return fetch.then(() => {
      if (queryListCopy.length) {
        return runTask(queryListCopy.shift());
      }
    });
  }
  
  for (let i = 0; i < limit; i++) {
    taskQueue.push(runTask(queryListCopy.shift()));
  }
  
  return {
    taskQueue,
    pendingQueue,
  }
}

const {
  taskQueue,
  pendingQueue,
} = promiseConcurrency({ fetchFn, queryList, limit: 10 });

console.log(taskQueue, pendingQueue)


/**
 *
 * @param fetchFn {function} 请求方法
 * @param queryList {array} 参数列表
 * @param limit {number} 并发数
 */
function promiseConcurrency1({ fetchFn, queryList, limit }) {
  // 通过并发数，穿件队列
  const fetchQueue = [];
  
  const loop = (...rest) => {
    return fetchFn(rest)
      .then(() => {
        if (queryList.length) {
          return loop(queryList.shift());
        }
        return '';
      })
  }
  
  for (const queue of limit) {
    fetchQueue.push(loop(queryList.shift()));
  }
  
  return {
    fetchQueue
  }
}
