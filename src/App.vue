<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import { ref } from 'vue';
import { RouterView } from 'vue-router'
const locale = ref(zhCN)
const a = {}
console.log(a)
</script>

<template>
    <a-config-provider :locale="locale">
        <RouterView />
    </a-config-provider>
</template>
<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>