<template>
    <button :class="className">
        <slot></slot>
        <slot name="icon"></slot>
    </button>
</template>
<script setup>
import { computed, toRefs } from 'vue';
const props = defineProps({
    type: {
        type: String,
        default: 'default'
    },
    size: {
        type: String,
        default: 'middle'
    }
})
const className = computed(() => {
    return `x-button x-button--${props.type} x-button--${props.size}`
})
</script>