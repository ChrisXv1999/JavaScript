var list = [[2,3,1],[4,5,1],[1,5,2]];
var findMinimumTime = function (tasks) {
    var timeMap = {};
    tasks.forEach(function (_a) {
        var start = _a[0], end = _a[1];
        for (var i = start; i <= end; i++) {
            timeMap[i] = (timeMap[i] || 0) + 1;
        }
    });
    var timeList = Object.entries(timeMap).sort(function (_a, _b) {
        var k1 = _a[0], v1 = _a[1];
        var k2 = _b[0], v2 = _b[1];
        return v2 - v1;
    });
    var useTimeMap = {};
    console.log(timeList);
    tasks.forEach(function (task) {
        var start = task[0], end = task[1], duration = task[2];
        var i = 0;
        while (duration) {
            if (+timeList[i][0] >= start && +timeList[i][0] <= end) {
                if (!useTimeMap[timeList[i][0]]) {
                    useTimeMap[timeList[i][0]] = true;
                }
                duration--;
            }
            i++;
        }
    });
    return Object.keys(useTimeMap).length;
};
console.log(findMinimumTime(list));
