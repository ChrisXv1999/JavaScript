var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var obj = {
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
function queryLevelByChildren(obj) {
    var _a;
    var maxLen = ((_a = obj.children) === null || _a === void 0 ? void 0 : _a.length) || 0;
    function dfs(obj, target, currentLevel) {
        if (currentLevel === void 0) { currentLevel = 0; }
        currentLevel++;
        (obj.children || []).forEach(function (child, index) {
            if (child.children && child.children.length > maxLen) {
                maxLen = child.children.length;
                target = { level: currentLevel, index: index };
            }
            target = dfs(child, __assign({}, target), currentLevel);
        });
        return target;
    }
    return dfs(obj, { level: 0, index: 0 });
}
console.log(obj);
console.log(queryLevelByChildren(obj));
