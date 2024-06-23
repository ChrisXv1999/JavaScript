<template>
  <div >
    <a-carousel autoplay>
      <div v-for="item of carouselList" :key="item.id">
        <img :src="item.href">
      </div>
    </a-carousel>
   <div class="content" >
    <h2>
      热门推荐
    </h2>
    <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
      <a-col class="gutter-row" :span="6" v-for="goods of goodsList.filter(item=>item.isHot)" :key="goods.id">
        <GoodsCard v-bind="goods"></GoodsCard>
      </a-col>
    </a-row>
    <h2>
      更多产品
    </h2>
    <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
      <a-col class="gutter-row" :span="6" v-for="goods of goodsList" :key="goods.id">
        <GoodsCard v-bind="goods"></GoodsCard>
      </a-col>
    </a-row>
   </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { getCarouselList,getGoodsList } from '@/service/user'
import GoodsCard from '@/components/GoodsCard.vue';
const carouselList = ref([]);
const goodsList= ref([]);
init();
async function init() {
  const { data } = await getCarouselList();
  carouselList.value = data;
  const { data:list } = await getGoodsList();
  goodsList.value = list;
}
</script>
<style scoped lang="scss">
:deep(.slick-slide) {
  text-align: center;
  height: 320px;
  overflow: hidden;

  img {
    height: 320px;
    width: 100%;
  }

  .label {
    color: #fff;
  }
}
.content {
  padding: 0 5%;
  background-color: #fefefe;
  h2 {
    margin-top: 12px;
    margin-bottom: 12px;
    text-align: center;
    line-height: 36px;
    font-size: 24px;
    color: #333;
    font-weight: 500;
  }
}
</style>
