import axios from "axios";
function getCarouselList() {
    return axios.get('/api/carousel')
}
function getGoodsList(params={}) {
    return axios.get('/api/goods',{params:{...params,online:true}})
}
function getTagList(params={}) {
    return axios.get('/api/tag',{params})
}
function getOrderList(params={}) {
    return axios.get('/api/order',{params})
}
function addOrder(data) {
    return axios.post(`/api/order`, data)
}

function getSystemConfig(params={}) {
    return axios.get('/api/config',{params})
}
export {
    getCarouselList,
    getGoodsList,
    getTagList,
    getOrderList,
    addOrder,
    getSystemConfig
}