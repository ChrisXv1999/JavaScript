<template>
    <div class="home">
        <header>
            <div><img /> <span style="font-weight:bold; font-size: 24px;">后台管理系统</span></div>
            <div>
                {{ currentTime }} &nbsp;&nbsp;<a-divider type="vertical" />
                <a-dropdown>
                    <span>
                        <UserOutlined />&nbsp;&nbsp;{{ username }}
                    </span>
                    <a-divider type="vertical" />
                    <template #overlay>
                        <a-menu>
                            <a-menu-item key="0" @click="logout">
                                退出登陆
                            </a-menu-item>
                        </a-menu>
                    </template>
                </a-dropdown>

            </div>
        </header>
        <main>
            <a-menu v-model:selectedKeys="state.selectedKeys" v-model:openKeys="state.openKeys" style="width: 256px" mode="inline" :items="items"
                triggerSubMenuAction="click" @click="onClick"></a-menu>
            <div>
                <a-page-header :title="selectedLabel" />
                <RouterView></RouterView>
            </div>
        </main>
    </div>
</template>
<script setup>
import { computed, h, ref, reactive } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import { MailOutlined, AppstoreOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';
import { clearAdminConfig, getConfig } from '@/util/user';
import { formatTime } from '@/util/helper';
const router = useRouter();
const username = computed(() => {
    return getConfig('admin').username
})
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = reactive([
    getItem('订单管理', 'sub1', () => h(MailOutlined), [
        getItem('订单列表', 'order-list')
    ]),
    getItem('商品管理', 'sub2', () => h(AppstoreOutlined), [
        getItem('商品列表', 'goods-manage'),
        getItem('标签管理', 'tag-manage'),
        getItem('热门管理', 'hot-manage'),
    ]),
    getItem('用户管理', 'sub3', () => h(SettingOutlined), [
        getItem('用户管理', 'user-manage'),
    ]),
    getItem('系统配置', 'sub4', () => h(SettingOutlined), [
        getItem('系统配置', 'system-manage'),
    ])
]);
const state = reactive({
    rootSubmenuKeys: ['sub1', 'sub2', 'sub3'],
    openKeys: ['sub1', 'sub2', 'sub3'],
    selectedKeys: ['order-list'],
});
const selectedLabel = computed(()=>{
    const labelMap = {
        'order-list': '订单列表',
        'goods-manage': '商品列表',
        'tag-manage': '标签管理',
        'user-manage': '用户管理',
        'system-manage':'系统配置',
        'hot-manage':'热门管理',
    }
    return labelMap[state.selectedKeys[0]]
})
function onClick(item){
    router.push({path: `/admin/home/${item.key}`})
}
const currentTime = ref('');

function updateTime() {
   currentTime.value = formatTime(+new Date())
    requestAnimationFrame(updateTime)
}

updateTime();

function logout() {
    clearAdminConfig();
    router.push({ path: '/admin/login' })
}
</script>

<style lang="scss" scoped>
.home {
    height: 100%;
    width: 100%;
}
header {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    line-height: 48px;
    border-bottom: 1px solid #ccc;
}

main {
    display: flex;
    height: calc(100% - 53px);
    width: 100%;
    .ant-page-header {
        padding: 4px 24px !important;
        border-bottom: 1px dashed #ccc;
    }
    &>div {
        height: 100%;
        width: 100%;
    }
}
</style>