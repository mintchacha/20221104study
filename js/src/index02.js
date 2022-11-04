// const num = {
//   a1:10,
//   a2:20,
//   a3:30
// }
const {a1,a2,a3} = {
  a1:10,
  a2:20,
  a3:30
}
console.log(a1)
const book = {
  type:'it',
  title:'html',
  price:'20,000'
}
const {type,title,price,level = 0} = book;
console.log(type)
console.log(level)

// 1. 키의 변경
const num = type;
console.log(num)
// 2. 속성을 만들어서 사용
// 두가지방법 = 클론, as
const graphic = {
  name : 'paint',
  title2 : 'painter'
}
const {name:subtitle,title2} = graphic
console.log(subtitle)
console.log(name)