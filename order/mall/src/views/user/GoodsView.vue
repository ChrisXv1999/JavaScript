<template>
  <div class="content">
    <h2>
      全部产品
    </h2>
    <div class="flex">
      <div style="font-size: 16px;font-weight: bold;margin-top: 12px;">产品分类: <a-checkable-tag style="font-size: 16px;" color="processing" v-for="tag of tagList" :key="tag.id" :checked="tag.id === selectId" @change="checked => handleChange(tag, checked)">{{ tag.label
          }}</a-checkable-tag></div>
      <div><a-input placeholder="根据名称搜索" v-model:value="query" size="small"></a-input></div>
    </div>
    <a-empty  v-if="!displayList.length" description="" style="height: 500px;line-height: 500px;"/>
    <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
      <a-col class="gutter-row" :span="6" v-for="goods of displayList" :key="goods.id">
        <GoodsCard v-bind="goods"></GoodsCard>
      </a-col>
    </a-row>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import { getGoodsList, getTagList } from '@/service/user';
import GoodsCard from '@/components/GoodsCard.vue';

const query = ref('');
const selectId = ref('');
function handleChange(tag,checked){
  if(checked){
    selectId.value = tag.id;
  }else {
    selectId.value = '';
  }
}
const tagList = ref([]);
const goodsList = ref([]);
const displayList = computed(() => {
  const list = query.value ? goodsList.value.filter(({ goodsName }) => goodsName.includes(query.value)) : goodsList.value;
  return selectId.value ? list.filter(({tagId})=>tagId===selectId.value) : list;
})
init();
async function init() {
  const { data } = await getTagList();
  tagList.value = data;
  const { data: list } = await getGoodsList();
  goodsList.value = list;
}
</script>
<style lang="scss" scoped>
.content {
  padding: 0 5%;
  background-color: #fefefe;

  .flex {
    display: flex;
    justify-content: space-between;
  }

  h2 {
    line-height: 36px;
    font-size: 24px;
    color: #333;
    font-weight: 500;
  }
}
</style>
