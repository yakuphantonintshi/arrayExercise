//Question 1
let data = ['Yakupha', 4, 6, 9, 11, 'Ntonintshi']

//Question 2
data.push(21)
console.log(data)

//Question 3
let filteredArray = data.filter(value => typeof value == 'number')
console.log(filteredArray)

//Question 4
console.log(data.find(value => value == 11));

//Question 5
console.log(data.findIndex(value => value == 11))

//Question 6
let sum = filteredArray.reduce((a,b) => a + b)
console.log(sum);

//Question 7 - concat method and spread operator

//Question 8
console.log(data.slice(1 , 4));

