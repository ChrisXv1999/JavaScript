function getErr(err = "server internal error", errCode = 500) {
    return {
        code: errCode,
        msg: err,
        data: null
    }
}
function getResult(result) {
    return {
        code: 0,
        msg: '',
        data: result
    }
}
module.exports = {
    getErr,
    getResult
}