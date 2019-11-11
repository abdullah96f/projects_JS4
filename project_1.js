
//Q1
function Check(ar, check){
     for(let i=0;i<ar.length;i++){
          if(ar[i]==check){
          return true; }
     } 
     return false
}
console.log(Check([1,5,3,4,4,2,4,6],4))


//Q2
function ConvertToSeconds(h,m){
   let s=0;
    if(typeof h == 'number')
    s = h*60*60;
    if(typeof m == 'number')
    s += m*60
    return s;
}
console.log(ConvertToSeconds(2,4))


//Q3
var  aquarium = {
    filledWithWater: true,
    capacityInGallons: 12,
    numberOfRocks: 5,
    fish: [
            {
                type: 'goldfish' ,
                size: '3.5 inches',
                color: 'golden'
            },
            {
                type: 'puffer',
                size: '4 inches',
                color: 'tan'
            },
            {
                type: 'clown',
                size: '3 inches',
                color: 'orange'
            }
        ]
}
//1
console.log(aquarium['capacityInGallons'])
//2
aquarium['numberOfRocks'] += 2;
console.log(aquarium['numberOfRocks'])
//3
for(let i=0; i<aquarium.fish.length;i++)
 if(aquarium.fish[i].type == 'clown')
console.log(aquarium.fish[i].type)
//4
for(let i=0; i<aquarium.fish.length;i++)
 if(aquarium.fish[i].type == 'puffer')
console.log(aquarium.fish[i].size)
//5
for(let i=0; i<aquarium.fish.length;i++)
 if(aquarium.fish[i].type == 'goldfish'){
  aquarium.fish[i].size = '4 inches'
  console.log(aquarium.fish[i].size)
 }
//6
aquarium.fish.push({type:'starfish', size: '5 inch',color:'blue'})
console.log(aquarium.fish[aquarium.fish.length-1])


//Q4
const temp = require('./data')
const data = JSON.parse(temp)
let logData = function() { //4
 console.log(data.people)
} 
let logNames = function() { //5
    for(i in data.people)
    console.log(data.people[i].name)
};
let logNameEyes = function() { //6
    for(i in data.people)
    console.log(`name: ${data.people[i].name} eye: ${data.people[i].eye_color}`)
};
let logByMass = function() { //7
    for(i in data.people){
        if(data.people[i].mass > 75)
        console.log(data.people[i].name)
    }
};

logData()
logNames()
logNameEyes()
logByMass()



//Bonus Questions:

//1
function getRandomNum(num){

    num = Math.floor(Math.random()*(num+1));
    return num
}
console.log(getRandomNum(6))

function isLeap(y){
     
  if( y%4==0 && y%100>0){
      return true;
  }
  if(y%400==0){
      return true
  }
  if( y%4==0 && y%100==0){
      return false
  }

  return false

}
console.log(isLeap(2020))  // Exactly divided by 4 and not by 100.
console.log(isLeap(1800)) // Exactly divided by 4, but is also exactly divided by 100.
console.log(isLeap(2000)) // Exactly divided by 400.
console.log(isLeap(2019)) // It can't be exactly divided by 400 or by 4.