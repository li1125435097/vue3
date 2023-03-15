// 实现一个简易的事件发布订阅模型
export class DataElf{
  static Event = {}
  
  static on(event, callback){
    this.Event[event] ? this.Event[event].push(callback) : (this.Event[event] = [callback])
  }

  static emit(event,...args){
    this.Event[event]? this.Event[event].forEach(callback => callback(...args)) : null  
  }

  static get elist(){
    return Object.keys(this.Event)
  }
}
