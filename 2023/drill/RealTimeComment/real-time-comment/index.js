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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
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
    "潦倒新停浊酒杯",
];
var CommentGenerate = /** @class */ (function () {
    function CommentGenerate(className, text) {
        this.className = className;
        this.text = text;
        this.moveConfig = {
            start: 0,
            end: 0,
            duration: 60,
            index: 0,
            speed: 1,
            space: 20,
        };
        this.offsetX = 0;
        this.offsetY = 0;
        // mousedown=(event:MouseEvent)=>{
        //     // this.offsetX = this.instance.offsetParent.offsetParent.offsetTop;
        //     // this.offsetY = this.instance.offsetParent.offsetParent.offsetLeft; 
        //     this.offsetX = event.clientX - this.instance.offsetLeft;
        //     this.offsetY = event.clientY - this.instance.offsetTop;
        //     document.body.addEventListener('mousemove',this.mousemove)
        // }
        // mouseup=()=>{        
        //     document.body.removeEventListener('mousemove',this.mousemove);
        // }
        // mousemove=(event:MouseEvent)=>{           
        //     this.instance.style.left = event.clientX - this.offsetX + 'px';
        //     this.instance.style.top = event.clientY - this.offsetY+'px';
        //     this.moveConfig.start =  event.clientX - this.offsetX;
        // }
        this.mouseenter = function (event) {
            console.log(event.target);
            console.log(111);
        };
        this.instance = this.generate(className, text);
        // this.instance.addEventListener('mousedown',this.mousedown)
        // document.body.addEventListener('mouseup',this.mouseup)
        this.instance.addEventListener('dragenter', this.mouseenter);
    }
    CommentGenerate.prototype.generate = function (className, text) {
        var span = document.createElement('span');
        span.textContent = text;
        span.className = className;
        span.setAttribute('draggable', 'true');
        return span;
    };
    CommentGenerate.prototype.moveTo = function (moveConfig) {
        var _this = this;
        var width = this.instance.offsetWidth;
        return new Promise(function (resolve) {
            Object.assign(_this.moveConfig, moveConfig);
            var duration = moveConfig.duration, cb = moveConfig.cb, start = moveConfig.start, index = moveConfig.index;
            _this.moveTimer = setInterval(function () {
                _this.moveConfig.start = _this.moveConfig.start + _this.moveConfig.speed;
                _this.instance.style.left = _this.moveConfig.start + 'px';
                if (start - _this.moveConfig.start > width + _this.moveConfig.space) {
                    resolve(index);
                }
                if (_this.moveConfig.start - _this.moveConfig.end < 0) {
                    clearInterval(_this.moveTimer);
                    typeof cb === 'function' && (cb());
                    _this.instance.remove();
                }
            }, duration);
        });
    };
    CommentGenerate.prototype.stopMove = function () {
        clearInterval(this.moveTimer);
    };
    CommentGenerate.prototype.startMove = function () {
        this.moveTo(this.moveConfig);
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
        var _this = this;
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
        var div = document.createElement('div');
        div.style.width = this.containerWidth + 'px';
        div.style.height = this.visibleHeight + 'px';
        div.style.position = 'absolute';
        div.style.top = '0';
        div.style.left = '0';
        this.commentsEl = div;
        this.el.addEventListener('mousedown', function () {
            _this.commentElementList.forEach(function (comment) { return comment.stopMove(); });
        });
        document.body.addEventListener('mouseup', function () {
            _this.commentElementList.forEach(function (comment) { return comment.startMove(); });
        });
    }
    RealTimeComment.prototype.start = function () {
        var _this = this;
        this.el.appendChild(this.commentsEl);
        if (this.comments.length && this.visibleHeight > 0) {
            this.comments.slice(0, this.rowOffsetTop.length).forEach(function (text, idx) {
                _this.loop(idx);
            });
        }
    };
    RealTimeComment.prototype.loop = function (idx) {
        return __awaiter(this, void 0, void 0, function () {
            var comment, width, index;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.comments.length === 0)
                            return [2 /*return*/];
                        comment = new CommentGenerate(this.className, this.comments.shift());
                        comment.instance.style.left = this.containerWidth + 'px';
                        comment.instance.style.top = this.rowOffsetTop[idx] + 'px';
                        this.commentsEl.appendChild(comment.instance);
                        this.commentElementList.push(comment);
                        width = comment.instance.offsetWidth;
                        return [4 /*yield*/, comment.moveTo({ start: this.containerWidth, end: -width, duration: 10, speed: -1, index: idx, space: 20, cb: function () {
                                    _this.commentElementList = _this.commentElementList.filter(function (c) { return c !== comment; });
                                }
                            })];
                    case 1:
                        index = _a.sent();
                        this.loop(index);
                        return [2 /*return*/];
                }
            });
        });
    };
    RealTimeComment.prototype.stop = function () {
        this.el.removeChild(this.commentsEl);
    };
    RealTimeComment.prototype.pushComment = function (text) {
        this.comments.push(text);
        if (this.commentElementList.length === 0) {
            this.start();
        }
    };
    return RealTimeComment;
}());
var wrapper = document.getElementById("real-time-comment");
var instance = new RealTimeComment(wrapper, 400, __spreadArray([], comments, true), 'comment');
instance.start();
for (var i = 0; i < 1000; i++) {
    instance.pushComment(comments[Math.floor(Math.random() * 9)]);
}
