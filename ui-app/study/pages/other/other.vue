<template>
	<view>
		<text>{{title}}</text>
		<button @click="goHome" :hidden="true">home</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:'other'
			};
		},
		methods: {
			goHome(){
				uni.navigateTo({
					url:'/pages/index/index'
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
