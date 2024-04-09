const comments: string[] = [
  "登高",
  "唐",
  "杜甫",
  "风急天高猿啸哀",
  "渚清沙白鸟飞回",
  "无边落木萧萧下，不尽长江滚滚来",
  "万里悲秋常作客，百年多病独登台",
  "艰难苦恨繁霜鬓",
  "潦倒新停浊酒杯","风急天高猿啸哀",
  "渚清沙白鸟飞回",
  "无边落木萧萧下，不尽长江滚滚来",
  "万里悲秋常作客，百年多病独登台",
  "艰难苦恨繁霜鬓",
  "潦倒新停浊酒杯","风急天高猿啸哀",
  "渚清沙白鸟飞回",
  "无边落木萧萧下，不尽长江滚滚来",
  "万里悲秋常作客，百年多病独登台",
  "艰难苦恨繁霜鬓",
  "潦倒新停浊酒杯",
];
class CommentGenerate {
    speed:number= 10
    instance:HTMLElement
    moveTimer?:number
    constructor(private className:string,private text:string){
        this.instance = this.generate(className,text);
    }
    generate(className:string,text:string):HTMLElement{
        const span = document.createElement('span');
        span.textContent = text;
        span.className = className;
        return span
    }
    mvTo(start:number,end:number,cb?:Function,idx:number):Promise<boolean>{
        return new Promise((res)=>{
            this.moveTimer = setInterval(()=>{         
                start -= this.speed   
                this.instance.style.left = start + 'px'; 
                
                if(400 - start > this.instance.offsetWidth) {
                    res(idx)
                }
                if(start < end){
                    clearInterval(this.moveTimer);
                    typeof cb === 'function' &&(cb())
                };
            },100)
        })
    }
    bindEvent(target:HTMLElement){
        target.addEventListener('click',()=>{
            console.log('我被点了');
        })
    }
}
// 容器类 设置弹幕 滚动区域 
class RealTimeComment {
    containerWidth:number
    containerHeight:number
    visibleHeight:number
    rowOffsetTop: number[]
    commentElementList:CommentGenerate[]=[]
    /**
     * 
     * @param el 容器元素
     * @param visibleHeight 滚动区域高度
     */
  constructor(private el:HTMLElement, visibleHeight:number|string,private comments:string[]=[],private className:string){
    this.containerWidth = el.offsetWidth;
    this.containerHeight = el.offsetHeight;
    if(typeof visibleHeight === 'string' && visibleHeight.endsWith('%')) {
        this.visibleHeight = this.containerHeight * (Number(visibleHeight.slice(0,-1)) / 100);
    }
    this.visibleHeight = parseInt(visibleHeight as string);
    
    const temp = new CommentGenerate(className,'comment').instance;
    temp.style.opacity = '0';
    document.body.appendChild(temp);
    const commentHeight = temp.offsetHeight;
    temp.remove();
    this.rowOffsetTop = Array.from({length:Math.floor(this.visibleHeight/(commentHeight + 5))}).map((_,idx)=>(commentHeight+5)*idx)
  }
  start(){
    if(this.comments.length && this.visibleHeight >0) {
        this.rowOffsetTop.forEach(async (text,idx) =>{
            this.loop(idx)
        })
       ;
    }
  }

  async loop(idx:number){
    if(this.comments.length === 0 )return;
    const comment = new CommentGenerate(this.className,this.comments.shift()) ;
    comment.instance.style.left = this.containerWidth + 'px';
    comment.instance.style.top = this.rowOffsetTop[idx] + 'px';
    this.el.appendChild(comment.instance);
    this.commentElementList.push(comment);
    const width = comment.instance.offsetWidth;
    const index =  await comment.mvTo(this.containerWidth,-width,()=>{
        comment.instance.remove()
    },idx)
    this.loop(idx)
  }
  stop(){}
}
const wrapper = document.getElementById("real-time-comment") as HTMLElement;
const instance =  new RealTimeComment(wrapper,200,comments,'comment');
instance.start();
console.log(instance);
