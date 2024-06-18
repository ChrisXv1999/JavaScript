<template>
	<view class="content">
		{{title}}
		<rich-text :nodes="richText"></rich-text>
		<progress :percent="percent" show-info />
		<input type="text" v-model="title" />
		<button @click="goToOterPage">click</button>
		<icon type="success" size="16"></icon>
		<slider @change="sliderChange" />
		<navigator url="../other/other">go to other</navigator>
		<Count></Count>
		<button @click="fetchData">获取数据</button>
	</view>
</template>

<script setup lang="ts">
	import {
		ref
	} from 'vue';
	const title = "Hello";
	const richText = "<div>hello world</div>";
	const percent = ref<number>(10);


	function sliderChange(e) {
		percent.value = e.detail.value;
	};

	function goToOterPage() {
		uni.navigateTo({
			url: '/pages/other/other'
		})
	}

	function fetchData() {
		uni.request({
			url:'http://localhost:6001/api/user'
		}).then(res=>{
			console.log(res);
		})
	}
</script>

<style>
	.swiper-item {
		height: 200px;
	}
</style>