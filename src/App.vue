<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { ref } from 'vue'
import { RouterView } from 'vue-router'
const locale = ref(zhCN)
</script>

<template>
    <a-config-provider :locale="locale">
        <RouterView />
    </a-config-provider>
</template>
