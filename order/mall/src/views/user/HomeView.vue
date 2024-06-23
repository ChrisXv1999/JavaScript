<script setup>
import { RouterView, RouterLink } from 'vue-router';
import ShoppingList from '@/components/ShoppingList.vue'
import { computed, ref } from 'vue'
import { UserOutlined, TaobaoOutlined, ShopOutlined, QqOutlined, PhoneOutlined, WechatOutlined, MailOutlined, ShoppingCartOutlined } from '@ant-design/icons-vue';
import LoginView from '../LoginView.vue';
import { clearUserConfig, getConfig } from '@/util/user';
import { updateUserStatus, isLogin, userConfig } from './composition/user'
import { getSystemConfig } from '@/service/user';

const loginName = computed(() => {
    return userConfig.value.username
})
const open = ref(false);
const onLogin = () => {
    open.value = true;
}
const confirmLogin = () => {
    open.value = false;
    updateUserStatus();
}

const logout = () => {
    clearUserConfig()
    updateUserStatus();
}

const systemName = ref('')
init()
async function init() {
    updateUserStatus();
    const { data: config } = await getSystemConfig();
    systemName.value = config.systemName;
}
</script>

<template>
    <header class="header">
        <div class="left-nav">
            <ShopOutlined />
            <span>{{ systemName }}</span>
        </div>
        <nav>
            <RouterLink to="/">首页</RouterLink>
            <a-divider type="vertical" />
            <RouterLink to="/goods">全部产品</RouterLink>
            <a-divider type="vertical" />
            <RouterLink to="/about">关于我们</RouterLink>
        </nav>
        <div class="user">
            <template v-if="isLogin">
                <a-popover title="">
                    <template #content>
                        <ShoppingList></ShoppingList>
                    </template>
                    <span>
                        <ShoppingCartOutlined /> &nbsp;订单
                    </span>
                </a-popover>

                <a-divider type="vertical" />
                <a-popover title="" placement="bottomRight">
                    <template #content>
                        <div style="cursor: pointer;" @click="logout">
                            退出登陆
                        </div>
                    </template>
                    <span>
                        <UserOutlined />&nbsp;&nbsp;{{ loginName }}
                    </span>
                </a-popover>

            </template>
            <template v-else>
                游客1234 <span @click="onLogin">点击登录</span>
            </template>
        </div>
    </header>
    <RouterView></RouterView>

    <footer class="foot">
        <div class="foot-content">
            <dl>
                <dt>选购及了解</dt>
                <dd>商店</dd>
                <dd>苹果</dd>
                <dd>三星</dd>
                <dd>华为</dd>
            </dl>
            <dl>
                <dt>热门机型</dt>
                <dd>iphone 13 Pro Max</dd>
                <dd>华为mate70</dd>
                <dd>小米13</dd>
                <dd>三星S27</dd>
            </dl>
            <dl>
                <dt>合作商家</dt>
                <dd>京东</dd>
                <dd>
                    <TaobaoOutlined />淘宝
                </dd>
                <dd>拼多多</dd>
                <dd>转转</dd>
            </dl>
            <dl>
                <dt>联系我们</dt>
                <dd><a href="mailto:123456@example.com">
                        <MailOutlined /> ：123456@example.com
                    </a></dd>
                <dd>
                    <WechatOutlined /> ：chris
                </dd>
                <dd>
                    <QqOutlined /> ：13912341234
                </dd>
                <dd>
                    <PhoneOutlined /> ：13912341234
                </dd>
            </dl>
        </div>
        <div style="text-align: center;margin: 12px 0;"><img src="@/assets/images/footer.png" alt=""></div>

    </footer>
    <a-modal v-model:open="open" title="欢迎登陆" :footer="null">
        <LoginView @confirm="confirmLogin"></LoginView>

    </a-modal>
</template>
<style scoped lang="scss">
.header {
    height: 50px;
    width: 100%;

    z-index: 999;
    font-size: 16px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    box-shadow: 1px 1px 3px #333;
    background-color: #fff;

    .left-nav {
        display: flex;
        align-items: center;

        span {
            margin-left: 12px;
        }
    }

    nav {
        padding: 0 10%;
        flex: 1;

        a+a {
            margin-left: 20px;
        }
    }

    .user>*:hover {
        cursor: pointer;
        color: #f99;
    }
}

.foot {
    padding: 20px;
    font-size: 16px;
    border-top: 1px dashed #ccc;

    .foot-content {
        display: flex;
        justify-content: center;
    }

    .copy {
        text-align: center;
    }

    dt {
        color: #333;
        font-weight: bolder;
        font-weight: bold;
    }

    dl+dl {
        margin-left: 100px;
    }

    dd:hover {
        cursor: pointer;
        color: #f99;
    }
}
</style>
