import { ref } from "vue"

// 实现一个简易的状态管理
export class DataCache{
  static Cache = {}
  
  static set(key,val='',isRef=1){
    this.Cache[key] = isRef ? ref(val) : val
    return this.Cache[key]
  }

  static get(key){
    return this.Cache[key] ? this.Cache[key] : this.set(key)
  }

  static rm(key){
    delete this.Cache[key]
  }

  static get list(){
    return this.Cache
  }
}




