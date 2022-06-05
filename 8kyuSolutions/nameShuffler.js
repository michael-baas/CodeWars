// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

function nameShuffler(str){
    //Shuffle It
    const name = str.split(' ');
    let rev = [];
    for(i=0; i < name.length; i++){
      rev.unshift(name[i])
    }
    return rev.join(' ')
  }