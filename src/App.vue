<script setup>
import { ref,computed,onMounted } from 'vue';

import List from './components/List.vue'
import Form from './components/Form.vue'
import Fade from './components/Fade.vue'

import { getList } from './common/api'
import { DataElf } from './common/dataElf'

// 响应式数据定义
let list = ref([])

// 获取异步数据
onMounted(async ()=>{
  list.value = await getList()
})

// 博客篇数统计
const total = computed(()=>{ return list.value.length })

// 表单提交函数
function handle(e) {
  let formdata = new FormData(e.target)
  let [name, age, address] = [formdata.get('name'), formdata.get('age'), formdata.get('address')]
  let maxId = Math.max(...list.value.map(v=>v.id))
  list.value.push({id:++maxId,name,age:+age,address})
  console.log(list.value)
}

DataElf.on('data',(...args)=>{console.log(args)})

</script>

<template>
    <main>
      <List :list=list :total=total></List>
      <Form :handle=handle></Form>
      <Fade></Fade>
    </main>
</template>

<style scoped></style>
