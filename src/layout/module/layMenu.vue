<template>
    <section>
        <div class="logo" />
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline" @click="menuClick">
            <a-menu-item :key="item.path" v-for="item in menuList">
                <user-outlined />
                <span>{{ item.meta?.title }}</span>
            </a-menu-item>
        </a-menu>
    </section>
</template>

<script setup lang="ts">
import { menuList } from '@router/menuList'
import type { MenuProps } from 'ant-design-vue';
import { ref } from 'vue'
import {
    UserOutlined,
} from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';
const $useRouter  = useRouter()
const selectedKeys = ref<string[]>(['/home'])
const menuClick: MenuProps['onClick'] = (item) => {
    $useRouter.push({
        path:item.key as string
    })
}
</script>

<style scoped></style>