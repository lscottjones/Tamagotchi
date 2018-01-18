//function to create the pet object
var createPet = function (){
  var pet = {
    food: 5,
    energy: 5,
    happiness: 5,
 }
  //alert (pet)
 };
//global variables
var pet = createPet()
alert(pet)

//play function //////
var play = function (){
    pet.food = pet.food -1
    pet.energy = pet.energy -1
    pet.happiness = pet.happiness +3
  alert('You played with your pet.')
  var newPet = pet
  alert(newPet)
  isAlive()
}

//feed function
var feed = function (){
    pet.food = pet.food +2
    pet.energy = pet.energy -1
    pet.happiness = pet.happiness +1
  con('You fed your pet.')
    var newPet = pet
  alert(newPet)
  isAlive()
}

//sleep function
var sleep = function (){
get_random = function (list) {
  return list[Math.floor((Math.random()*list.length))];
} 

get_random([-2,-3,-5])
var thisfood = get_random
    pet.food = thisfood +4
    pet.energy = pet.energy +3
    pet.happiness = pet.happiness +2
  alert('Your pet has slept.') 
  var newPet = pet
  alert(newPet)
  isAlive()
}


createPet()



