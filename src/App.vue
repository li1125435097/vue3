<script setup>
import { ref,computed } from 'vue';

import List from './components/List.vue'
import Form from './components/Form.vue'
let list = ref([
  {
    id: 1,
    name: 'John',
    age: 20,
    address: 'New York No. 1 Lake Park',
  },
  {
    id: 2,
    name: 'Jim',
    age: 30,
    address: 'London No. 1 Lake Park',
  },
  {
    id: 3,
    name: 'Joe',
    age: 28,
    address: 'Sidney No. 1 Lake Park'
  }
])


const total = computed(()=>{ return list.value.length })

function handle(e) {
  let formdata = new FormData(e.target)
  let [name, age, address] = [formdata.get('name'), formdata.get('age'), formdata.get('address')]
  let maxId = Math.max(...list.value.map(v=>v.id))
  list.value.push({id:++maxId,name,age,address})
  console.log(list.value)
}

</script>

<template>
  <main>
    <List :list=list :total=total></List>
    <Form :handle=handle></Form>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
