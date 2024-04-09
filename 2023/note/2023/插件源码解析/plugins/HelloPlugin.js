/**
 * @method apply
 */
class HelloPlugin{
    constructor(){}
    apply(compiler){
        // compiler.hooks.emit.tap|tapAsync 异步必须要有callback






        
        console.log(compiler);
    }
}
module.exports = HelloPlugin