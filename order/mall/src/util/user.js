function getConfig(type='user'){
    let config = sessionStorage.getItem('user-config');
    if(!config) return {}
    config = JSON.parse(config);
    return config[type] || {};
}
function setConfig(type,config){
    let localConfig = sessionStorage.getItem('user-config') || '{}';
    localConfig = JSON.parse(localConfig);
    localConfig[type] = config;
    sessionStorage.setItem('user-config',JSON.stringify(localConfig))
}
function setUserConfig(config){
    setConfig('user',config)
}
function clearUserConfig(){
    setConfig('user',{});
}
function setAdminConfig(config){
    setConfig('admin',config)
}
function clearAdminConfig(){
    setConfig('admin',{});
}
function isLogin(){
    const {username} = getConfig('admin');
    return !!username
}

export {
    getConfig,
    isLogin,
    setUserConfig,
    clearUserConfig,
    setAdminConfig,
    clearAdminConfig
}