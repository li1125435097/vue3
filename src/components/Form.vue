<script setup>
import { defineProps } from 'vue';
defineProps({
  handle: {
    type: Function,
    required: true
  }
})
</script>

<template>
  <form action="" @submit.prevent="handle">
    名字：<input type="text" name="name" placeholder="请输入名称">
    年龄：<input type="text" name="age" placeholder="请输入年龄">
    地址：<input type="text" name="address" placeholder="请输入地址">
    &emsp;<button>提交</button>
  </form>
</template>

<style scoped></style>

