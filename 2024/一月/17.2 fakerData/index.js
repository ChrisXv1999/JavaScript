const extraKpi = [
  {
    kpi: "_clientSyn",
    name: "发送SYN包数",
    unit: "个",
    range: [5, 15],
  },
  {
    kpi: "_serverSyn",
    name: "接收SYN包数",
    unit: "个",
    range: [5, 15],
  },
  {
    kpi: "_clientAck",
    name: "发送SYN-ACK包数",
    unit: "个",
    range: [5, 15],
  },
  {
    kpi: "_serverAck",
    name: "接收SYN-ACK包数",
    unit: "个",
    range: [5, 15],
  },
  {
    kpi: "_clientRst",
    name: "发送RST包数",
    unit: "个",
    range: [5, 15],
  },
  {
    kpi: "_serverRst",
    name: "接收RST包数",
    unit: "个",
    range: [5, 15],
  },
  {
    kpi: "_peaKDelayTime",
    name: "峰值网络延时",
    unit: "ms",
    range: [0.5, 2],
  },
];
const filterKpi = [
  "_clientSyn",
  "_serverSyn",
  "_clientAck",
  "_serverAck",
  "_clientRst",
  "_serverRst",
  "_peaKDelayTime",
];
function countTimesToCall(fn, times) {
  let time = 0;
  let result = null;
  return (...rest) => {
    if (time % times === 0) {
      result = fn(...rest);
    }
    time++;
    return result;
  };
}
function generateNum(range, format = parseInt) {
  let r = Math.random() * (range[1] - range[0]) + range[0];
  return format(r);
}
function generateChartDataItem(kpiList) {
  return kpiList.reduce((target, kpi) => {
    target[kpi] =
      kpi === "_peaKDelayTime"
        ? generateNum([0.5, 2], parseFloat)
        : generateNum([5, 15]);
    return target;
  }, {});
}
const generateChartDataItem8 = countTimesToCall(generateChartDataItem, 8);
function generateChartInitData(kpiList) {
  let list = Array.from({ length: 60 }).map((_, index) => {
    let item = generateChartDataItem8(kpiList);
    return item;
  });
  return list;
}

const generateChartFakeData = (() => {
  let key = undefined;
  let cache = [];
  return (kpiList, peak) => {
    if (peak) return cache[cache.length - 1];
    if (key === kpiList.join("") && cache.length > 0) {
      cache.shift();
      cache.push(generateChartDataItem8(kpiList));
    } else {
      key = kpiList.join("");
      cache = generateChartInitData(kpiList);
    }
    const beginTimeStamp = parseInt(new Date() / 1000) * 1000 - 60 * 1000;
    cache = cache.map((item, i) => {
      return { ...item, utc: beginTimeStamp + i * 1000 };
    });
    return cache;
  };
})();

if (
  extra.length &&
  result.data &&
  result.data.list &&
  result.data.list.length
) {
  const list = generateChartFakeData(extra).map((item, index) => {
    let data = Object.entries(result.data.list[index]).reduce(
      (target, [key, value]) => {
        if (key) {
          target[key] = value;
        }
        return target;
      },
      {}
    );
    return Object.assign({}, item, data);
  });
  const kpi = Object.assign({},result.data.kpi,extra.reduce((target,kpi)=>{
    let {name,unit} = extraKpi.find(item=>item.kpi === kpi);
    target[kpi] = {
        name,
        unit
    }
    return target
  },{}));
  e.chartData = Object.assign(result.data,{list,kpi})
} else {
  e.chartData = result.data;
}
if(extra.length) {
 Promise.resolve().then(()=>{
   e.chartData = Object.assign({},generateChartFakeData(extra,true),result.data)
 })
}else {
  e.chartData = result.data;
}
