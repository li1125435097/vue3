<script setup>
import { DataCache } from '../common/dataCache';

let list = DataCache.get('list')
let total = DataCache.get('total')
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

