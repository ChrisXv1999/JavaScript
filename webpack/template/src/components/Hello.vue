<script setup>
    import ZRN from '@/assets/images/zrn.png';
    const name = `欢迎使用${author}的template`;
</script>
<template>
    <div class="content">
       <p>{{name}}</p>
       <img :src="ZRN" alt="" width="200px">
    </div>
</template>
<style lang="scss" scoped>
    .content {
       position: absolute;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%);
        text-align: center;
    }
</style>