<template>
<div class="login-wrapper">
    <div :class="['login-box',adminPage ?'admin-login':'']">
        <h1 v-if="adminPage">在线商城后台管理系统</h1>
        <a-form :model="formState" name="normal_login" class="login-form" :label-col="{ span: 4 }" @finish="onFinish">
            <a-form-item v-if="!adminPage">
                <a-radio-group v-model:value="type" >
                    <a-radio-button value="login">登陆</a-radio-button>
                    <a-radio-button value="register">注册</a-radio-button>
                </a-radio-group>
            </a-form-item>
            <a-form-item label="用户名" name="username" :rules="rules.username">
                <a-input v-model:value="formState.username">
                    <template #prefix>
                        <UserOutlined class="site-form-item-icon" />
                    </template>
                </a-input>
            </a-form-item>

            <a-form-item label="密码" name="password" :rules="rules.password">
                <a-input-password v-model:value="formState.password">
                    <template #prefix>
                        <LockOutlined class="site-form-item-icon" />
                    </template>
                </a-input-password>
            </a-form-item>
            <a-form-item label="确认密码" name="confirm_password" :rules="rules.confirm_password"
                v-show="type === 'register'">
                <a-input-password v-model:value="formState.confirm_password">
                    <template #prefix>
                        <LockOutlined class="site-form-item-icon" />
                    </template>
                </a-input-password>
            </a-form-item>

            <a-form-item>
                <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
                    {{ confirmLabel }}
                </a-button>
            </a-form-item>
        </a-form>
    </div>
</div>
</template>
<script setup>
import { reactive, computed, ref } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { useRouter, useRoute } from 'vue-router';
import { setUserConfig, setAdminConfig } from '@/util/user';
import { addUser, getUserList } from '@/service/admin';
import { message } from 'ant-design-vue';
const emits = defineEmits('confirm')
const router = useRouter();
const route = useRoute();
const adminPage = computed(() => {
    return route.meta.adminPage
})

const type = ref('login')
const formState = reactive({
    username: '',
    password: '',
    confirm_password: ''
});
const rules = computed(() => {
    return {
        username: [{ required: true, message: '请输入用户名!' }, { min: 3, max: 12, message: '请输入3-12位的用户名' }],
        password: [{ required: true, message: '请输入密码!' }, { min: 6, max: 12, message: '请输入6-12位的密码' }],
        confirm_password: type.value === 'login' ? [] : [{ required: true, message: '' }, {
            validator: (_, value) => {
                if (value !== formState.password) {
                    return Promise.reject();
                }
                return Promise.resolve();
            }, message: '两次密码不一致'
        }],
    }
})
const confirmLabel = computed(() => {
    return type.value === 'login' ? '登陆' : '注册'
})
const onFinish = async (values) => {
    const { username, password } = values;
    if (type.value === 'login') {
        const {data} = await getUserList({username});
        if(data.length === 0) {
            return message.warning(`${username}尚未注册`)
        }
        const {password:pd,operation} = data[0];
        if (adminPage.value) {
            if(operation !== 'admin'){
                return message.warning(`${username}权限不足`)
            }
            if(pd !== password){
                return message.warning(`${username}密码错误 请从新输入`)
            }
            setAdminConfig({ username });
            router.push({ path: '/admin/home' })
        } else {
            if(pd !== password){
                return message.warning(`${username}密码错误 请从新输入`)
            }
            setUserConfig({ username });
            emits('confirm')
        }
    } else {
        addUser({username, password,operation:'user', createTime: +new Date(),enabled:true})
        emits('confirm')
        setUserConfig({ username });
    }

};

const disabled = computed(() => {
    return !(formState.username && formState.password && (type.value === 'login' || formState.confirm_password));
});
</script>
<style scoped lang="scss">
.login-wrapper:has(.admin-login) {
    height: 100%;
    background: url('https://pic2.zhimg.com/v2-a68a06e72dc5ed506184c48e4dee4e49_r.jpg?source=1940ef5c');
}
.admin-login {
    position: relative;
    top: 40%;
    transform: translateY(-50%);
    h1 {
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        line-height: 48px;
    }

}
.login-box {
    max-width: 450px;
    margin: 0 auto;

    .login-form {
        text-align: center;

        &-button {
            width: 100%;
        }
    }
}
</style>