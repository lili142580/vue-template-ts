<template>
    <a-layout class="layout">
        <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
            <LayMenu />
        </a-layout-sider>
        <a-layout>
            <LayHeader />
            <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
                <RouterView />
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script lang="ts" setup>
import { RouterView } from 'vue-router'

import LayMenu from './module/layMenu.vue'
import LayHeader from './module/layHeader.vue'
import { layoutStore } from '@store/modules/layout'
import { storeToRefs } from 'pinia'
const $store = layoutStore()
const { collapsed } = storeToRefs($store)
</script>
<style lang="less" scoped>
.layout {
    min-height: 100%;
}
</style>
  