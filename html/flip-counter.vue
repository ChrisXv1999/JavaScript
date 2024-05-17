<script setup>
import { ref, watch } from 'vue'
const props = defineProps({
    value: {
        type: Number,
        default: 0
    },
    width: {
        type: String,
        default: '60px'
    },
    height: {
        type: String,
        default: '120px'
    }
})
const oldValue = ref(props.value);
const isChange = ref(false);
watch(() => props.value, (_, oVal) => {
    oldValue.value = oVal;
    isChange.value = true;
    setTimeout(() => {
        isChange.value = false;
    }, 300);
})
</script>
<template>
    <div :class="['flip-counter', isChange ? 'is-change' : '']"
        :style="{ width: width, height: height, lineHeight: height }">
        {{ value }}
        <div class="flip-counter-top">
            {{ oldValue }}
        </div>
        <div class="flip-counter-bottom">
            {{ oldValue }}
        </div>
        <div class="flip-counter-next">
            <div class="flip-counter-next-content">
                {{ value }}
            </div>
        </div>
    </div>
</template>
<style>
.flip-counter {
    --bg-color: red;
    position: relative;
    text-align: center;
    overflow: hidden;
    font-size: 36px;
    color: #fff;
    perspective: 1000px;
    transform-style: preserve-3d;
    background: var(--bg-color);
}


.flip-counter-top {
    position: absolute;
    top: 0;
    width: 100%;
    height: 50%;
    overflow: hidden;
    background: var(--bg-color);
    z-index: 4;
}

.flip-counter-bottom {
    position: absolute;
    top: 0;
    width: 100%;
    overflow: hidden;
    background: var(--bg-color);
    z-index: 8;
}

.flip-counter-next {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bg-color);
    z-index: 2;
    overflow: hidden;
}

.flip-counter-next-content {
    transform: rotateX(180deg)
}


.flip-counter.is-change .flip-counter-bottom {
    z-index: 2;
    transition: transform 0.5s;
    transform: rotateX(90deg);
}

.flip-counter.is-change .flip-counter-next {
    animation: nextTransition 1s;
}

@keyframes nextTransition {
    0% {
        z-index: 3;
        transform: rotateX(0deg);
    }

    50% {
        height: 50%;
    }

    51% {
        height: 50%;
    }

    100% {
        transform: rotateX(180deg);
    }
}
</style>