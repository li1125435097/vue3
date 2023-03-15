<script setup>
import { ref,Transition } from 'vue';
import {DataElf} from '../common/dataElf'

  const show = ref(false)
  function handle(){
    show.value = !show.value
    DataElf.emit('data','fade组件发信息了',{name:'张三',age:18})
  }

  DataElf.on('data',(...args)=>{console.log(args,'我是fade子组件',DataElf.elist)})
</script>

<template>
  <button @click="handle">Toggle</button>
  <Transition>
    <p v-if="show">hello</p>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

