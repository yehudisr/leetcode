function areThereDuplicates(...args) {
    // good luck. (supply any arguments you deem necessary.)
    // set one pointer to beginning
    // create a loop starting at second index, compare two points
    // if two points are equal print true
     
  //   var i = 0
  //   for (var j = 1; j< args.length; j++){
  //       if (args[i] !== args[j]){
  //           i++
  //       }
  //       return true
  //   }
  
  const lookup = {}
  
  for (let i = 0; i<args.length; i++){
      let num = args[i]
      lookup[num] ? lookup[num] += 1 : lookup[num] = 1
      if(lookup[num] > 1) return true
  }
  
  return false
    
  }