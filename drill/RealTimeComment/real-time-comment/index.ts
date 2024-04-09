const comments: string[] = [
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
type MoveConfig = {
    start: number
    end: number
    duration?: number
    index:number
    speed?: number
    space?:number
    cb?: Function
}
class CommentGenerate {
    instance: HTMLElement
    moveTimer?: number
    moveConfig: MoveConfig = {
        start: 0,
        end: 0,
        duration: 60,
        index:0,
        speed: 1,
        space:20,
    }
    offsetX=0
    offsetY=0
    constructor(private className: string, private text: string) {
        this.instance = this.generate(className, text);
        // this.instance.addEventListener('mousedown',this.mousedown)
        // document.body.addEventListener('mouseup',this.mouseup)
        this.instance.addEventListener('dragenter',this.mouseenter)
    }
    generate(className: string, text: string): HTMLElement {
        const span = document.createElement('span');
        span.textContent = text;
        span.className = className;
        span.setAttribute('draggable','true')
        return span
    }
    moveTo(moveConfig: MoveConfig) {
        const width = this.instance.offsetWidth;
        return new Promise<number>(resolve => {
            Object.assign(this.moveConfig,moveConfig);
            const { duration, cb, start,index} = moveConfig
            this.moveTimer = setInterval(() => {
                this.moveConfig.start = this.moveConfig.start +  this.moveConfig.speed;
                this.instance.style.left = this.moveConfig.start + 'px';
                if(start - this.moveConfig.start > width + this.moveConfig.space) {
                    resolve(index)
                }
                if (this.moveConfig.start - this.moveConfig.end < 0) {
                    clearInterval(this.moveTimer);
                    typeof cb === 'function' && (cb())
                    this.instance.remove();
                }
            }, duration)
        })
    }
    stopMove() {
        clearInterval(this.moveTimer);
    }
    startMove() {
        this.moveTo(this.moveConfig)
    }
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
    mouseenter=(event:MouseEvent)=>{
        console.log(event.target);
        
        console.log(111);
    }
}
// 容器类 设置弹幕 滚动区域 
class RealTimeComment {
    containerWidth: number
    containerHeight: number
    visibleHeight: number
    commentsEl: HTMLElement
    rowOffsetTop: number[]
    commentElementList: CommentGenerate[] = []
    /**
     * 
     * @param el 容器元素
     * @param visibleHeight 滚动区域高度
     */
    constructor(private el: HTMLElement, visibleHeight: number | string, private comments: string[] = [], private className: string) {
        this.containerWidth = el.offsetWidth;
        this.containerHeight = el.offsetHeight;
        if (typeof visibleHeight === 'string' && visibleHeight.endsWith('%')) {
            this.visibleHeight = this.containerHeight * (Number(visibleHeight.slice(0, -1)) / 100);
        }
        this.visibleHeight = parseInt(visibleHeight as string);

        const temp = new CommentGenerate(className, 'comment').instance;
        temp.style.opacity = '0';
        document.body.appendChild(temp);
        const commentHeight = temp.offsetHeight;
        temp.remove();
        this.rowOffsetTop = Array.from({ length: Math.floor(this.visibleHeight / (commentHeight + 5)) }).map((_, idx) => (commentHeight + 5) * idx)
        const div = document.createElement('div');
        div.style.width = this.containerWidth + 'px';
        div.style.height = this.visibleHeight + 'px';
        div.style.position = 'absolute';
        div.style.top = '0';
        div.style.left = '0';
        this.commentsEl = div;
        this.el.addEventListener('mousedown', () => {
            this.commentElementList.forEach(comment => comment.stopMove());
        })
        document.body.addEventListener('mouseup', () => {
            this.commentElementList.forEach(comment => comment.startMove());
        })
    }
    start() {
        this.el.appendChild(this.commentsEl);
        if (this.comments.length && this.visibleHeight > 0) {
            this.comments.slice(0, this.rowOffsetTop.length).forEach((text, idx) => {
               this.loop(idx)
            });
        }
    }
    async loop(idx:number) {
        if(this.comments.length === 0) return;        
        const comment = new CommentGenerate(this.className, this.comments.shift());
        comment.instance.style.left = this.containerWidth + 'px';
        comment.instance.style.top = this.rowOffsetTop[idx] + 'px';
        this.commentsEl.appendChild(comment.instance);
        this.commentElementList.push(comment);
        const width = comment.instance.offsetWidth;
        const index = await comment.moveTo({start: this.containerWidth, end: -width, duration: 10, speed: -1,index:idx,space:20, cb: () => {
                this.commentElementList = this.commentElementList.filter(c => c !== comment)
            }
        })
        this.loop(index);
    }

    stop() {
        this.el.removeChild(this.commentsEl)
    }
    pushComment(text:string){
        this.comments.push(text);
        if(this.commentElementList.length === 0) {
            this.start()
        }
    }
}
const wrapper = document.getElementById("real-time-comment") as HTMLElement;
const instance = new RealTimeComment(wrapper, 400, [...comments], 'comment');
instance.start();

for(let i = 0; i< 1000; i++){
    instance.pushComment(comments[Math.floor(Math.random()*9)])
}