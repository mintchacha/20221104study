import Data from './data01.json'
import Data02 from './data02.json'

console.log(Data)
console.log(Data.array)
console.log(Data.object.a)

// json -> 전역객체 -> JSON
const color = {
  title:"red",
  sample:"apple",
  no:123
}
// 일반적인 객체 -> JSON
const str = JSON.stringify(color)
console.log(str)

const obj = JSON.parse(str)
console.log(obj)