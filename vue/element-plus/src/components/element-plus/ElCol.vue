<script setup>
import { computed, inject } from 'vue';
const props =defineProps({
    span: {
        type: Number,
        default: 24,
        validator: (val) => {
            return val > 0 && val <= 24
        }
    },
    offset: {
        type: Number,
        validator: (val) => {
            return val > 0 && val <= 24
        }
    },
    push: {
        type: Number,
        validator: (val) => {
            return val > 0 && val <= 24
        }
    },
    pull: {
        type: Number,
        validator: (val) => {
            return val > 0 && val <= 24
        }
    },
    xs: Number,
    sm: Number,
    md: Number,
    lg: Number,
    xl: Number,
});
const gutter = inject('gutter');
const computedStyle = computed(() => {
    if (gutter === 0) return {};
    return {
        paddingLeft: `${gutter / 2}px`,
        paddingRight: `${gutter / 2}px`,
    }
});
const classList = computed(()=>{
    return ['offset','pull','push','xs','sm','md','lg','xl'].reduce((list,type)=>{
        if(!Number.isInteger(props[type] || !props[type]))return list;
        list.push(`el-col-${type}-${props[type]}`);
        return list
    },['el-col', `el-col-${props.span}`])
})

</script>
<template>
    <div :class="classList" :style="computedStyle">
        <slot></slot>
    </div>
</template>
<style scoped lang="scss">
</style>
