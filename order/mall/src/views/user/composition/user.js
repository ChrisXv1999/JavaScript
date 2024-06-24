import { ref, onMounted, reactive } from 'vue';
import { getConfig} from '@/util/user'
const isLogin = ref(false);
const userConfig = ref({})
function setLoginStatus(bool) {
    isLogin.value = bool;
}
function updateUserStatus() {
    const config = getConfig();
    userConfig.value = config;
    setLoginStatus(!!config.username)
}
export {
    isLogin,
    setLoginStatus,
    userConfig,
    updateUserStatus
}