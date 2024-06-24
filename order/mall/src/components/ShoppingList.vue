<template>
    <div class="shopping-list">
        <a-empty description="暂无订单" v-if="!orderList.length"/>
    <a-list item-layout="horizontal" :data-source="orderList" v-else>
    <template #renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta
          :description="formatDescription(item)"
        >
          <template #title>
            {{ item.goodsName }}
          </template>
          <template #avatar>
            <a-avatar :src="item.href" />
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
    </div>
</template>
<script setup>
import {ref,onUpdated} from 'vue';
import emitter from '@/util/emitter';
import { getOrderList } from '@/service/user';
import { userConfig } from '@/views/user/composition/user';
import { formatTime } from '@/util/helper';
updateOrderList();
const orderList = ref([]);
function formatDescription({status,deliveryTimeStamp,orderTimeStamp}){
    return `订单状态：${status?'已发货':'未发货'}  ` + (status ? `  发货时间：${formatTime(deliveryTimeStamp)}` : `  下单时间：${ formatTime(orderTimeStamp) }`)
}
async function updateOrderList(){
 const {data} = await getOrderList({username: userConfig.value.username});
 orderList.value = data;
}
emitter.on('update-order',updateOrderList)

</script>
<style lang="scss" scoped>
.shopping-list {
    width: 450px;
    .label-top{
        font-size: 12px;
    }
}
</style>