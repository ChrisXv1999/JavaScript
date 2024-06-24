<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const jumpDetail = (id)=>{
  router.push({path:`/detail/${id}`})
}
defineProps({
  goodsName: String,
  goodsPrice: Number,
  discount: {
    type: Number,
    default: 100
  },
  describe: String,
  href:String,
  id: String,
})
</script>
<template>
  <a-card hoverable style="width: 100%;margin: 12px 0;" @click="jumpDetail(id)">
    <template #cover>
      <img alt="example"
        :src="href" />
    </template>
    <a-card-meta>
      <template #description>
        <div class="goods-name">
          {{ goodsName }}
        </div>
        <div class="goods-describe overflow-hidden">
          {{ describe }}
        </div>
        <div class="goods-price">
          <span class="current">
            {{ parseInt(goodsPrice / 100 * discount) }}元
          </span>
          <span class="origin" v-show="discount<100">
            {{ goodsPrice }}元
          </span>
        </div>
      </template>
    </a-card-meta>
  </a-card>
</template>
<style scoped lang="scss">
.goods-name {
  text-align: center;
  font-weight: bolder;
  font-size: 16px;
  color: #333;
}

.overflow-hidden {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
}
.goods-describe {
  text-align: center;
}

.goods-price {
  text-align: center;
  color: #ff6700;
  .origin {
    color: #b0b0b0;
    text-decoration: line-through;
  }
}
</style>