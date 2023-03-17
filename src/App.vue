<script setup>
import { computed,onMounted } from 'vue';

import List from './components/List.vue'
import Form from './components/Form.vue'
import Fade from './components/Fade.vue'

import { getList } from './common/api'
import { DataElf } from './common/dataElf'
import { DataCache } from './common/dataCache'

// 响应式全局数据定义
let list = DataCache.set('list')
DataCache.set('total',computed(()=>{ return list.value.length }),null)
DataCache.set('handle',handle,null)

// 获取异步数据
onMounted(async ()=>{
  list.value = await getList()
})


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
      <List></List>
      <Form></Form>
      <Fade></Fade>
    </main>
</template>

<style scoped></style>
