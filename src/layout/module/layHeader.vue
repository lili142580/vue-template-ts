<template>
    <section>
        <a-layout-header class="layout-heard">
            <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
            <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
        </a-layout-header>
    </section>
</template>

<script setup lang="ts">
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons-vue';
import { layoutStore } from '@store/modules/layout'
import { storeToRefs } from 'pinia'
const $store = layoutStore()
const { collapsed } = storeToRefs($store)
console.log($store)
</script>

<style lang="less" scoped>
.layout-heard {
    background: #ffffff;

    .trigger {}
}
</style>