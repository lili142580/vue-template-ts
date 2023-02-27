<template>
    <span @click="test">测试</span>
</template>
<script lang="ts" setup>
import { getTestAPI } from "@src/api/index";
const test = async () => {
    let { data } = await getTestAPI();
    console.log(data, "===>");
};
</script>
