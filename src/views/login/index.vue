<template>
	<span @click="test">测试 {{ count }}</span>
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
