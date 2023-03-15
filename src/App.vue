<script setup>
import { ref,computed } from 'vue';

// import list from './components/List.vue'
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
  list.value.push({id:list.value.pop.id++,name,age,address})
  // console.log(name, age, address, list.value.data)
}

</script>

<template>
  <main>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        名称：{{ item.name }} 年龄：{{ item.age }} 地址：{{ item.address }}
      </li>
    </ul>
    <div>个数：{{ total }}</div>
    <form action="" @submit.prevent="handle">
      名字：<input type="text" name="name" placeholder="请输入名称">
      年龄：<input type="text" name="age" placeholder="请输入年龄">
      地址：<input type="text" name="address" placeholder="请输入地址">
      &emsp;<button>提交</button>
    </form>
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
