

//first I named and created the arrays to be used in the functions belowg
//var dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"]
//var planeteerCalls = ["earth", "wind", "fire", "water", "heart"]
//var shortWords = ["wind", "fire"]
//only to later realize this was not necessary


function dwarfRollCall(dwarves) { 
  let listDwarves = [] 
  for(let i = 0; i < dwarves.length; i++){
   
   listDwarves.push(`${i+1}. ${dwarves[i]} `)
  
  }
  return listDwarves.join("");//The join() method joins all elements of an array (or an array-like object) into a string and returns this string.
}


function summonCaptainPlanet(planeteerCalls){
  let upperCasePlaneteerCalls = []
  for (let i = 0; i < planeteerCalls.length; i++) {
    let exclamation = "!"
    upperCasePlaneteerCalls.push(`${planeteerCalls[i]}${exclamation}`.toUpperCase())
  }
  return upperCasePlaneteerCalls
}

function longPlaneteerCalls(words) {
}

function findTheCheese (foods) {
}
