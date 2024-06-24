<template>
    <div class="goods-list">
        <div class="content">
            <a-button type="primary" style="cursor: pointer;" @click="onAdd">添加商品</a-button>
            <a-spin :spinning="spinning" tip="加载中..." size="large"> <a-table :dataSource="goodsList" :columns="columns"
                    :pagination="false" :scroll="{ y: 500 }">
                    <template #bodyCell="{ column, record }">
                        <template v-if="column.key === 'describe'">
                            <a-tooltip placement="top">
                                <template #title>
                                    <span>{{ record.describe }}</span>
                                </template>
                                <div class="overflow-hidden">{{ record.describe }}</div>
                            </a-tooltip>

                        </template>
                        <template v-if="column.key === 'action'">
                            <EditOutlined @click="onEdit(record)" />

                            <DeleteOutlined @click="onDelete(record)" />
                        </template>
                        <template v-if="column.key === 'onlineTimeStamp'">
                            {{ formatTime(record.onlineTimeStamp) }}
                        </template>
                        <template v-if="column.key === 'online'">
                            <a-switch :checked="record.online" @change="onEnable(record)" checked-children="已上架"
                                un-checked-children="已下架"></a-switch></template>
                    </template>

                </a-table></a-spin>
            <a-modal v-model:open="open" :title="title" ok-text="确认" cancel-text="取消" @ok="onConfirm" :centered="true">
               <div style="overflow-y: auto; height: 500px;">
                <a-form :model="goodsConfig" :label-col="{ span: 6 }" :wrapper-col="{ style: { width: '150px' } }"
                    layout="horizontal" style="max-width: 600px">

                    <a-form-item label="商品名称" name="goodsName">
                        <a-input v-model:value="goodsConfig.goodsName" />
                    </a-form-item>
                    <a-form-item label="标签" name="tagId">
                        <a-select v-model:value="goodsConfig.tagId">
                            <a-select-option v-for="tag of tagList" :value="tag.id">{{ tag.label }}</a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item label="发布时间" name="onlineTimeStamp">
                        <a-date-picker :value="goodsConfig.onlineTimeStampLabel" show-time :format="dateFormat"
                            defaultValue="2024-06-18 11:00:00" @change="changeTime" />
                    </a-form-item>
                    <a-form-item label="价格" name="goodsPrice">
                        <a-input-number min="0" v-model:value="goodsConfig.goodsPrice" />
                    </a-form-item>
                    <a-form-item label="折扣" name="discount">
                        <a-input-number max="100" min="10" v-model:value="goodsConfig.discount" />
                    </a-form-item>
                    <a-form-item label="商品描述" name="describe">
                        <a-textarea :rows="4" v-model:value="goodsConfig.describe" />
                    </a-form-item>
                    <a-form-item label="是否上架" name="online">
                        <a-switch v-model:checked="goodsConfig.online" />
                    </a-form-item>
                    <a-form-item label="商品封面">
                      
                        <a-input v-model:value="goodsConfig.href" />
                        <a-image :width="100" v-show="goodsConfig.href"
                            :src="goodsConfig.href" 
                            fallback="data:image/png;base64,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"
                            />
                       
                    </a-form-item>
                </a-form>
               </div>
            </a-modal>
        </div>
    </div>
</template>
<script setup>
import { reactive, ref, h } from 'vue';
import dayjs, { Dayjs } from 'dayjs';
import { message } from 'ant-design-vue';
import { getGoodsList, updateGoods, addGoods, deleteGoods, getTagList } from '@/service/admin';
import { formatTime } from '@/util/helper';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons-vue';
const goodsList = ref([]);
const tagList = ref([]);
const columns = ref([
    { title: '商品名称', key: 'goodsName', dataIndex: 'goodsName', width: 180, },
    { title: '商品单价', key: 'goodsPrice', dataIndex: 'goodsPrice', width: 120, sorter: (a, b) => a.goodsPrice - b.goodsPrice },
    { title: '发售时间', key: 'onlineTimeStamp', dataIndex: 'onlineTimeStamp', width: 200, sorter: (a, b) => a.orderTimeStamp - b.orderTimeStamp },
    {
        title: '商品状态',
        key: 'online',
        dataIndex: 'online',
        width: 120,
    }, {
        title: '商品介绍',
        key: 'describe',
        dataIndex: 'describe'
    },
    {
        title: '操作',
        key: 'action',
        fixed: 'right',
        width: 100,
        align: 'center'
    },
])

const onEnable = async (row) => {
    const data = { ...row, online: !row.online };
    await updateGoods(data);
    message.success('操作成功')
    updateTable();
}
const spinning = ref(false);
async function updateTable() {
    spinning.value = true;
    const { data } = await getGoodsList();
    goodsList.value = data;
    spinning.value = false;
    const { data: list } = await getTagList();
    tagList.value = list
}
updateTable();
const open = ref(false);
const title = ref('添加商品');
const goodsConfig = reactive({});
const dateFormat = 'YYYY-MM-DD HH:mm'
const onEdit = async (config) => {
    spinning.value = true;
    title.value = '编辑商品';
    const { data } = await getGoodsList({ id: config.id });
    const goods = data[0];
    goods.onlineTimeStampLabel = dayjs(goods.onlineTimeStamp)
    Object.assign(goodsConfig, data[0])
    open.value = true;
    spinning.value = false;
}

const defaultConfig = {
    goodsName: '未命名商品',
    goodsPrice: 9999,
    online: true,
    tagId: "2",
    discount: 100,
    onlineTimeStamp: dayjs('2024-06-18 11:00:00').valueOf(),
    onlineTimeStampLabel: dayjs('2024-06-18 11:00:00'),
    describe: "这是一个好手机"
}
const onAdd = () => {
    open.value = true;
    Object.assign(goodsConfig, defaultConfig);
}
const onConfirm = async () => {
    open.value = false;
    if (goodsConfig.id) {
        await updateGoods(goodsConfig);
        message.success('编辑成功');
    } else {
        await addGoods(goodsConfig);
        message.success('添加成功');
    }
    delete goodsConfig.id;

    updateTable()
}
const onDelete = async (config) => {
    await deleteGoods(config.id);
    message.success('删除成功');
    updateTable();
}
const changeTime = (time) => {
    goodsConfig.onlineTimeStamp = dayjs(time).valueOf();
    goodsConfig.onlineTimeStampLabel = dayjs(goodsConfig.onlineTimeStamp)
}

</script>
<style lang="scss" scoped>
.goods-list {
    box-sizing: border-box;
    display: flex;
    height: calc(100% - 50px);
    padding: 8px 24px;
    flex-direction: column;

    .content {
        flex: 1;

        .overflow-hidden {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            cursor: pointer;
        }

        .anticon {
            cursor: pointer;
        }

        .anticon+.anticon {
            margin-left: 10px;
        }
    }

    .ant-pagination {
        margin: 0 auto;
    }
}
</style>