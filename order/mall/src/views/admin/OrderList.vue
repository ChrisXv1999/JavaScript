<template>
    <div class="order-list">
        <div class="content">
            <a-spin :spinning="spinning" tip="加载中..." size="large"> <a-table :dataSource="orderList" :columns="columns" :pagination="false" :scroll="{ y: 500 }">
                    <template #bodyCell="{ column, record }">
                        <template v-if="column.key === 'orderTimeStamp'">
                            {{ formatTime(record.orderTimeStamp) }}
                        </template>
                        <template v-if="column.key === 'operation'">
                            <a-switch :checked="record.status" @change="onDelivery(record)" :disabled="record.status"
                                checked-children="已发货" un-checked-children="未发货"></a-switch></template>

                        <template v-if="column.key === 'deliveryTimeStamp'">
                            {{ record.deliveryTimeStamp && formatTime(record.deliveryTimeStamp) }}
                        </template>
                    </template>

                </a-table></a-spin>

            </div>
    </div>
</template>
<script setup>
import { reactive, ref, h } from 'vue';
import { message } from 'ant-design-vue';
import { getOrderList ,updateOrder} from '@/service/admin';
import { formatTime } from '@/util/helper';
const orderList = ref([]);
const columns = ref([
    { title: '商品名称', key: 'goodsName', dataIndex: 'goodsName' },
    { title: '商品总价', key: 'goodsPrice', dataIndex: 'goodsPrice', sorter: (a, b) => a.goodsPrice - b.goodsPrice },
    { title: '下单用户', key: 'username', dataIndex: 'username' },
    { title: '下单时间', key: 'orderTimeStamp', dataIndex: 'orderTimeStamp', sorter: (a, b) => a.orderTimeStamp - b.orderTimeStamp },
    {
        title: '订单状态',
        key: 'operation',
        dataIndex: 'operation'
    },
    {
        title: '发货时间',
        key: 'deliveryTimeStamp',
        dataIndex: 'deliveryTimeStamp', sorter: (a, b) => a.deliveryTimeStamp - b.deliveryTimeStamp
    }
])

const onDelivery = async(row) => {
   const data = {...row,status:true,deliveryTimeStamp: +new Date()};
   await updateOrder(data);
   message.success('发货成功')
   updateTable();
}
const spinning = ref(false);
async function updateTable() {
    spinning.value = true;
    const { data } = await getOrderList();
    orderList.value = data;
    spinning.value = false;
}
updateTable();

</script>
<style lang="scss" scoped>
.order-list {
    box-sizing: border-box;
    display: flex;
    height: calc(100% - 50px);
    padding: 8px 24px;
    flex-direction: column;

    .content {
        flex: 1;
    }

    .ant-pagination {
        margin: 0 auto;
    }
}
</style>