# Probability

git### Installation:
```
npm install probabilityjs --save
```


#### Methods:
- **`singleChoose`**
> when you are computing probability of selecting set A from set S
here you have one type of selection, such as selecting odd numbers in rolling dice.
**Examples:**
calculate probability of even numbers in rolling dice
```javascript
let A = [2, 4, 6]
let S = [1, 2, 3, 4, 5, 6]
let p = probablity.singleChoose(A, S)
console.log(p)
// 0.5
```
your are rolling dice, 3 times, calculate probability of that result is smaller than 5
```javascript
let A = [1, 2, 3, 4]
let S = [1, 2, 3, 4, 5, 6]
p  =  probablity.singleChoose(A, S, {
	select:  3 //number of rolling dice
})

console.log(p)
//0.2
```

calculate probability of 1 and 6 in rolling dice
```javascript
let A = [1, 6]
let S = [1, 2, 3, 4, 5, 6]
p  =  probablity.singleChoose(A, S, {
	decimals: 8 
})

console.log(p)
//0.33333333
```
#### Methods:
- **`multiChoose`**
> choosing a items among different type of it, such as choosing 4 red cards from 12 red card and 20 black card

**Examples:**
calculate probability of choosing 1 red card from 26 red and 26 black card
```javascript
let  A  = [
	{
		name:  'red',
		count:  1
	}
]
  
let  S  = [
	{
		name:  'red',
		count:  26
	},
	{
		name:  'black',
		count:  26
	}
]
let  p  =  probablity.multiChoose(A, S)
console.log(p)
//0.5
```
Choosing 2 red cards at the same time from 26 red and 26 black card
```javascript
let  A  = [
	{
		name:  'red',
		count:  1
	}
]
  
let  S  = [
	{
		name:  'red',
		count:  26
	},
	{
		name:  'black',
		count:  26
	}
]
let  p  =  probablity.multiChoose(A, S)
console.log(p)
//0.24509803921568626
```

choosing 1 red card and then choose 1 red card again from 26 red and 26 black card
```javascript
let  A  = [
	{
		name:  'red',
		count:  1
	},
	{
		name:  'red',
		count:  1
	}
]
  
let  S  = [
	{
		name:  'red',
		count:  26
	},
	{
		name:  'black',
		count:  26
	}
]
let  p  =  probablity.multiChoose(A, S)
console.log(p)
//0.2549019607843137
```
choosing 2 black card and then 1 red card from 26 red and 26 black card
```javascript
let  A  = [
	{
		name:  'black',
		count:  2
	},
	{
		name:  'red',
		count:  1
	}
]
  
let  S  = [
	{
		name:  'red',
		count:  26
	},
	{
		name:  'black',
		count:  26
	}
]
let  p  =  probablity.multiChoose(A, S)
console.log(p)
//0.12745098039215685
```
choosing 1 blue card from 100 blue card, 5 red card and 6 yellow card
```javascript
let  A  = [
	{
		name:  'blue',
		count:  1
	}
]
  
let  S  = [
	{
		name:  'blue',
		count:  100
	},
	{
		name:  'red',
		count:  5
	},
	{
		name:  'yellow',
		count:  6
	}
]
let  p  =  probablity.multiChoose(A, S)
console.log(p)
//0.9009009009009009
```
any question ?
[Ask It :)](http://mrfarhad.ir/#!/contact)

made with :heart: for you