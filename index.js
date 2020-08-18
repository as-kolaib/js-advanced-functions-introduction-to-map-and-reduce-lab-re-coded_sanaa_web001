// Your code here
function mapToNegativize(sourceArray) {
  return sourceArray.map(a => a * -1);
}
function mapToNoChange(sourceArray) {
  return sourceArray.map(a => a );
}
function mapToDouble(sourceArray) {
  return sourceArray.map(a => a * 2 );
}
function mapToSquare(sourceArray) {
  return sourceArray.map(a => a *  a);
}
function reduceToTotal(sourceArray, startingPoint = 0){ 
  return sourceArray.reduce((acc ,cur ) => acc + cur , startingPoint );
}

// function reduceToAllTrue(sourceArray) {
//   for(const element in sourceArray) {
//     if(!sourceArray[element]) return false;
//   }
//   return true;
// }

function reduceToAllTrue(sourceArray) {
sourceArray.reduce((acc,val) => { if(!acc &&  Boolean(val)) return false;
  return true;} , true )
}

function reduceToAnyTrue(sourceArray) {
  for(const element in sourceArray) {
    if(sourceArray[element]) return true;
  }
  return false;
}
