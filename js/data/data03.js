const color = {
  title:"red",
  sample:"apple",
  no:['no01','no02'],
}

// localStorage.setItem
localStorage.setItem('book','photoshop')
// localStorage.setItem('color',color)
const str = JSON.stringify(color)
// console.log(str)
localStorage.setItem('color',str)
const num01 = localStorage.getItem('book')
// console.log(num01)
// const num02 = localStorage.getItem('color')
const num02 = localStorage.getItem('color')
const str02 = JSON.parse(num02)

console.log(str02)