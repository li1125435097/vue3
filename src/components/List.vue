<script setup>
import { defineProps } from 'vue';
defineProps({
  list: {
    type: Array,
    required: true
  },
  total:{
    type: Number,
    required: true
  }
})
</script>

<template>
  <ul>
    <li v-for="(item, index) in list" :key="index">
      名称：{{ item.name }} 年龄：{{ item.age }} 地址：{{ item.address }}
    </li>
  </ul>
  <div>个数：{{ total }}</div>
</template>

<style scoped></style>

