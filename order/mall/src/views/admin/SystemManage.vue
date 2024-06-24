<template>
    <div class="system-content">
        <div class="flex" style="margin-bottom: 12px;">
            <div ><span>系统名称：</span><a-input size="small" style="width: 240px;" v-model:value="systemConfig.systemName"></a-input></div><a-button style="padding: 0 20px;" size="small" type="primary" @click="onUpdate">更新</a-button>
        </div>
        <div class="flex">
            <h2>轮播图配置</h2> 
        </div>
        <div class="item flex" v-for="carousel of carouselList" :key="carousel.id">
            <a-image :width="200" :height="32" :src="carousel.href" /><a-input v-model:value="carousel.href"></a-input>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { getCarouselList ,updateCarouselList,getSystemConfig,updateSystemConfig} from '@/service/admin';
import { message } from 'ant-design-vue';
const carouselList = ref([]);
const systemConfig = ref({})
init()
async function init() {
    const { data } = await getCarouselList();
    carouselList.value = data;
    const {data:config} = await getSystemConfig();
    systemConfig.value = config;
}
async function onUpdate(){
    updateSystemConfig(systemConfig.value)
    await Promise.all(carouselList.value.map(c=>updateCarouselList(c)))
    message.success('更新成功')
}
</script>
<style scoped lang="scss">
.system-content {
    padding: 20px;

    h2 {
        font-size: 16px;
        line-height: 24px;
    }

    .item {
        margin-top: 12px;
        :deep(.ant-image ){
            margin-right: 20px;
        }
    }

    .flex {
        display: flex;
        justify-content: space-between;
    }
}
</style>
