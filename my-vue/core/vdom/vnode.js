export default class VNode{
    constructor(tag,el,children,text,data,parent,nodeType){
        this.tag = tag;
        this.el = el;
        this.children = children;
        this.text = text;
        this.data = data;
        this.parent = parent;
        this.nodeType = nodeType;
        this.env = {};
        this.direction = {};
        this.template = ''; 
    }
}