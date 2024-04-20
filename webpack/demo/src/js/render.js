function createElement(tag, children) {
    const oElement = document.createElement(tag);
    typeof children === 'string' ? (oElement.textContent = children) : appendChild(children,oElement)
    return oElement
}
function appendChild(children,parent=document.body){
    parent.appendChild(children);
}
export {
    createElement,
    appendChild,
}