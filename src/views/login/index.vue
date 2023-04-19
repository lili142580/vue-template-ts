<template>
    <div class="login">
        <div class="login-card">
            <div class="login-title">用户登录</div>
            <a-form :model="formState" ref="formRef" class="card-form" :label-col="{ span: 4 }" :wrapper-col="{ span: 24 }"
                :rules="rules">
                <a-form-item label="账号" name="username">
                    <a-input v-model:value="formState.username" placeholder="请输入账号" />
                </a-form-item>

                <a-form-item label="密码" name="password">
                    <a-input-password v-model:value="formState.password" placeholder="请输入密码" />
                </a-form-item>

                <a-form-item >
                    <a-button type="primary" @click="submit" class="submit-button">登录</a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>
<script lang="ts" setup>
import type { Rule } from 'ant-design-vue/es/form';
import { getLogin } from '@src/api/index'
import { useForm } from '@hooks/useForm'
import { useRouter } from 'vue-router';
const $router = useRouter()
const { formState, submit, formRef } = useForm({
    api: getLogin,
    callback: () => {
        $router.push('/home')
    }
})
const rules: Record<string, Rule[]> = {
    username: [
        { required: true, message: '请输入账号!' }
    ],
    password: [
        { required: true, message: '请输入密码!' }
    ]
}
</script>
<style lang="less" scoped>
.login {
    background: #f5f4f4;
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;

    justify-content: center;
    align-items: center;

    .card-form {
        width: 100%;
        padding: 0 20px;
        margin-top: 20px;
    }

    &-title {
        padding: 20px 0;
        width: 100%;
        text-align: center;
        font-size: 28px;
        font-weight: 500;
        border-bottom: 1px solid #a8a8a8;
    }

    &-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 350px;
        border-radius: 10px;
        background: #ffffff;

    }
    .submit-button{
        width: 100%;
    }
}
</style>
