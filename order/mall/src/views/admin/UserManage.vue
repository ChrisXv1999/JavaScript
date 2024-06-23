<template>
    <div class="user-list">
        <div class="content">
            <a-spin :spinning="spinning" tip="加载中..." size="large"> <a-table :dataSource="userList" :columns="columns"
                    :pagination="false" :scroll="{ y: 500 }">
                    <template #bodyCell="{ column, record }">
                        <template v-if="column.key === 'createTime'">
                            {{ record.createTime && formatTime(record.createTime) }}
                        </template>
                        <template v-if="column.key === 'enabled'">
                            <a-switch :checked="record.enabled" @change="onEnable(record)" checked-children="启用"
                                un-checked-children="禁用"></a-switch></template>
                    </template>

                </a-table></a-spin>

        </div>
    </div>
</template>
<script setup>
import { reactive, ref, h } from 'vue';
import { message } from 'ant-design-vue';
import { getUserList, addUser, updateUser } from '@/service/admin';
import { getConfig } from '@/util/user'
import { formatTime } from '@/util/helper';
const userList = ref([]);
const columns = ref([
    { title: '用户名称', key: 'username', dataIndex: 'username' },
    {
        title: '用户权限',
        key: 'operation',
        dataIndex: 'operation'
    },
    {
        title: '创建时间',
        key: 'createTime',
        dataIndex: 'createTime', sorter: (a, b) => a.createTime - b.createTime
    },
    {
        title: '状态',
        key: 'enabled',
        dataIndex: 'enabled'
    }
])
const onEnable = async (row) => {
    const { username } = getConfig('admin');
    if(username === row.username){
        message.warning('不能禁用自身')
        return
    }
    const data = { ...row, enabled: !row.enabled };
    await updateUser(data);
    message.success('操作成功')
    updateTable();
}
const spinning = ref(false);
async function updateTable() {
    spinning.value = true;
    const { data } = await getUserList();
    userList.value = data;
    spinning.value = false;
}
updateTable();

</script>
<style lang="scss" scoped>
.user-list {
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