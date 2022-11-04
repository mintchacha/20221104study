// 구조분해 배열형

const color = ['red','blue','green']
const [a,b,c,d='data'] = color
console.log(a,b,c,d)
console.log(a)

// 제와하고

const word = ['moon','flower','cat','dog']
const [,no01,,no02] = word
console.log(no01)