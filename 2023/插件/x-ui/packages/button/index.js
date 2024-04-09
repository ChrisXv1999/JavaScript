import _XButton from './Button.vue'
_XButton.install = (app) => {
    app.component("XButton",_XButton);
}
export const XButton = _XButton;
export default _XButton;