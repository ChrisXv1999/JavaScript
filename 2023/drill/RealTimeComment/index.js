var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var comments = [
    "登高",
    "唐",
    "杜甫",
    "风急天高猿啸哀",
    "渚清沙白鸟飞回",
    "无边落木萧萧下，不尽长江滚滚来",
    "万里悲秋常作客，百年多病独登台",
    "艰难苦恨繁霜鬓",
    "潦倒新停浊酒杯", "风急天高猿啸哀",
    "渚清沙白鸟飞回",
    "无边落木萧萧下，不尽长江滚滚来",
    "万里悲秋常作客，百年多病独登台",
    "艰难苦恨繁霜鬓",
    "潦倒新停浊酒杯", "风急天高猿啸哀",
    "渚清沙白鸟飞回",
    "无边落木萧萧下，不尽长江滚滚来",
    "万里悲秋常作客，百年多病独登台",
    "艰难苦恨繁霜鬓",
    "潦倒新停浊酒杯",
];
var CommentGenerate = /** @class */ (function () {
    function CommentGenerate(className, text) {
        this.className = className;
        this.text = text;
        this.speed = 10;
        this.instance = this.generate(className, text);
    }
    CommentGenerate.prototype.generate = function (className, text) {
        var span = document.createElement('span');
        span.textContent = text;
        span.className = className;
        return span;
    };
    CommentGenerate.prototype.mvTo = function (start, end, cb, idx) {
        var _this = this;
        return new Promise(function (res) {
            _this.moveTimer = setInterval(function () {
                start -= _this.speed;
                _this.instance.style.left = start + 'px';
                if (400 - start > _this.instance.offsetWidth) {
                    res(idx);
                }
                if (start < end) {
                    clearInterval(_this.moveTimer);
                    typeof cb === 'function' && (cb());
                }
                ;
            }, 100);
        });
    };
    CommentGenerate.prototype.bindEvent = function (target) {
        target.addEventListener('click', function () {
            console.log('我被点了');
        });
    };
    return CommentGenerate;
}());
// 容器类 设置弹幕 滚动区域 
var RealTimeComment = /** @class */ (function () {
    /**
     *
     * @param el 容器元素
     * @param visibleHeight 滚动区域高度
     */
    function RealTimeComment(el, visibleHeight, comments, className) {
        if (comments === void 0) { comments = []; }
        this.el = el;
        this.comments = comments;
        this.className = className;
        this.commentElementList = [];
        this.containerWidth = el.offsetWidth;
        this.containerHeight = el.offsetHeight;
        if (typeof visibleHeight === 'string' && visibleHeight.endsWith('%')) {
            this.visibleHeight = this.containerHeight * (Number(visibleHeight.slice(0, -1)) / 100);
        }
        this.visibleHeight = parseInt(visibleHeight);
        var temp = new CommentGenerate(className, 'comment').instance;
        temp.style.opacity = '0';
        document.body.appendChild(temp);
        var commentHeight = temp.offsetHeight;
        temp.remove();
        this.rowOffsetTop = Array.from({ length: Math.floor(this.visibleHeight / (commentHeight + 5)) }).map(function (_, idx) { return (commentHeight + 5) * idx; });
    }
    RealTimeComment.prototype.start = function () {
        var _this = this;
        if (this.comments.length && this.visibleHeight > 0) {
            this.rowOffsetTop.forEach(function (text, idx) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.loop(idx);
                    return [2 /*return*/];
                });
            }); });
        }
    };
    RealTimeComment.prototype.loop = function (idx) {
        return __awaiter(this, void 0, void 0, function () {
            var comment, width, index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.comments.length === 0)
                            return [2 /*return*/];
                        comment = new CommentGenerate(this.className, this.comments.shift());
                        comment.instance.style.left = this.containerWidth + 'px';
                        comment.instance.style.top = this.rowOffsetTop[idx] + 'px';
                        this.el.appendChild(comment.instance);
                        this.commentElementList.push(comment);
                        width = comment.instance.offsetWidth;
                        return [4 /*yield*/, comment.mvTo(this.containerWidth, -width, function () {
                                comment.instance.remove();
                            }, idx)];
                    case 1:
                        index = _a.sent();
                        this.loop(idx);
                        return [2 /*return*/];
                }
            });
        });
    };
    RealTimeComment.prototype.stop = function () { };
    return RealTimeComment;
}());
var wrapper = document.getElementById("real-time-comment");
var instance = new RealTimeComment(wrapper, 200, comments, 'comment');
instance.start();
console.log(instance);
