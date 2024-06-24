<template>
    <div class="hot-list">
        <a-checkbox v-for="goods of goodsList" v-model:checked="goods.isHot" @change="updateGoods(goods)">{{ goods.goodsName }}</a-checkbox>
    </div>
</template>
<script setup>
import { reactive, ref, h } from 'vue';
import { message } from 'ant-design-vue';
import { getGoodsList, updateGoods } from '@/service/admin';
const goodsList = ref([]);
async function updateTable() {
    const { data } = await getGoodsList();
    goodsList.value = data;
}
updateTable();
</script>
<style lang="scss" scoped>
.hot-list {
    box-sizing: border-box;
    height: calc(100% - 50px);
    padding: 20px 24px;
}
</style>