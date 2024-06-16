<script setup>
import { computed, provide } from 'vue';

const props = defineProps({
    gutter: {
        type: Number,
        default: 0
    },
    justify: {
        type: String,
        default: 'start',
        validator: (val) => {
            return ['start', 'end', 'center', 'space-around', 'space-between', 'space-evenly'].includes(val)
        }
    },
    algin:{
        type:String,
        validator: (val)=>{
            return ['top' , 'middle' , 'bottom'].includes(val)
        }
    }
});
const style = computed(() => {
    return props.gutter ? {
        marginLeft: `-${props.gutter / 2}px`,
        marginRight: `-${props.gutter / 2}px`,
    } : {}
});

provide('gutter', props.gutter)
</script>
<template>
    <div :class="['el-row', `is-justify-${justify}`]" :style="style">
        <slot></slot>
    </div>
</template>
