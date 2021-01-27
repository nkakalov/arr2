//2.Задание 
let arr2 = ["cat", "dog", "parrot", "horse", "fish", "chicken", "lion"]
console.log(arr2)
//найдем под каким индексом находится fish и cat
console.log('fish:',arr2.indexOf("fish",0))
console.log('cat:',arr2.indexOf("cat",0))
arr2.splice(4,1) 
//delete arr2[0]
//delete arr2[4]
console.log(arr2)
arr2.shift()// так как cat находится на 0 индексе то мы можем воспользоваться shift()
console.log(arr2)
arr2.pop()//извлекаем последний элемент массива 
arr2.pop()//извлекаем опять последний элемент массива тем самым избавилис от 2х последних элементов 
console.log(arr2)