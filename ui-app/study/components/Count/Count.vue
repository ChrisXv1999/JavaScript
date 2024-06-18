<template>
	<view>
		{{num}}
		<button @click="onAdd">+1</button>
		<button @click="onDecrease">-1</button>
	</view>
</template>

<script lang="ts" setup>
	import {ref} from 'vue'
	const props = defineProps({
		count:{
			type: Number,
			default: 0,
		}
	})
	const num = ref<number>(props.count);
	const onAdd = ()=>{
		num.value = num.value + 1;
	};
	const onDecrease = ()=>{
		num.value = num.value -1;
	}
</script>

<style>

</style>