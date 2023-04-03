<template>
    <div>
        <a-button v-authority="'sts:add'">新增</a-button>
        <a-button v-authority="'sts:delete'">删除</a-button>
        <span @click="test">测试 {{ count }}</span>
    </div>
</template>
<script lang="ts" setup>
import { getTestAPI } from '@src/api/index'
import { useCountStore } from '@store/modules/counter'
import { storeToRefs } from 'pinia'
const $store = useCountStore()
const { count } = storeToRefs($store)
const test = async () => {
    $store.count = 2
    const { data } = await getTestAPI()
    console.log(data, '===>')
}
</script>
