import axios from "axios";
function getOrderList() {
    return axios.get('/api/order')
}
function updateOrder(data) {
    return axios.put(`/api/order/${data.id}`, data)
}


function getUserList(params={}) {
    return axios.get('/api/user',{params})
}
function addUser(data) {
    return axios.post('/api/user',data)
}
function updateUser(data){
    return axios.put(`/api/user/${data.id}`, data)
}

function getGoodsList(params={}) {
    return axios.get('/api/goods',{params})
}
function addGoods(data) {
    return axios.post('/api/goods',data)
}
function deleteGoods(id) {
    return axios.delete(`/api/goods/${id}`)
}
function updateGoods(data){
    return axios.put(`/api/goods/${data.id}`, data)
}


function getTagList(params={}) {
    return axios.get('/api/tag',{params})
}
function addTag(data) {
    return axios.post('/api/tag',data)
}
function deleteTag(id) {
    return axios.delete(`/api/tag/${id}`)
}

function getCarouselList(params={}) {
    return axios.get('/api/carousel',{params})
}
function updateCarouselList(data){
    return axios.put(`/api/carousel/${data.id}`, data)
}
function getSystemConfig(params={}) {
    return axios.get('/api/config',{params})
}
function updateSystemConfig(data){
    return axios.put(`/api/config`, data)
}
export {
    getOrderList,
    updateOrder,
    getUserList,
    addUser,
    updateUser,
    getGoodsList,
    addGoods,
    updateGoods,
    deleteGoods,
    getTagList,
    addTag,
    deleteTag,
    getCarouselList,
    updateCarouselList,
    getSystemConfig,
    updateSystemConfig
}