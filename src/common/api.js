
// 模拟ajax
export function getList(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let data = [
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
      ]
      resolve(data)

    },Math.round(Math.random()*500))
  })  
}
