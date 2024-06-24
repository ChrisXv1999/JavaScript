<template>
    <div class="goods-list">
        <div class="flex" style="height: 24px;margin-bottom: 20px;"> <p>已有标签：</p>
            <div class="flex">
                <a-input v-model:value="tagName" size="small"></a-input> &nbsp;&nbsp;&nbsp;&nbsp;
                <a-button type="primary" @click="onAdd" size="small">添加标签</a-button>
            </div>
        </div>
        <div>
            <a-tag color="processing" v-for="tag of tagList" :key="tag.id" closable @close="onDelete(tag)">{{ tag.label
                }}</a-tag>
        </div>
    </div>
</template>
<script setup>
import { reactive, ref, h } from 'vue';
import { message } from 'ant-design-vue';
import { getTagList, addTag, deleteTag } from '@/service/admin';
const tagList = ref([]);
const tagName = ref('');
const onAdd = async()=>{
    if(tagName.value === ''){
        return message.warning('请输入标签名')
    }
    await addTag({label:tagName.value});
    tagName.value = '';
    updateTable()
}

async function updateTable() {
    const { data } = await getTagList();
    tagList.value = data;
}
updateTable();
const onDelete = async (config) => {
    debugger
    await deleteTag(config.id);
    message.success('删除成功');
    updateTable();
}
</script>
<style lang="scss" scoped>
.goods-list {
    box-sizing: border-box;
    display: flex;
    height: calc(100% - 50px);
    padding: 8px 24px;
    flex-direction: column;

    .flex {
        display: flex;
        justify-content: space-between;
    }
}
</style>