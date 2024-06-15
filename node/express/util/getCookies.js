module.exports = function getCookies(request) {
    if(!request.headers.cookie)return {};
    return request.headers['cookie'].split(';').reduce((target, cur) => {
        const [key, value] = cur.split("=");
        target[key] = value;
        return target
    }, {})
}
