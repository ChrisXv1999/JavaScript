<template>
   <div class="test">
     <x-button type="primary" size="small" @click="onClick">点击</x-button>
   </div>
</template>
<script setup>
const onClick = ()=> {
    alert('我被点击了')
}
</script>