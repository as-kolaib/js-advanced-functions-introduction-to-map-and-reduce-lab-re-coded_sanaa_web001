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
function reduceToAllTrue(src) {
  src.reduce((acc ,bol) => {
    if(acc && bol) {return false;
  }
  return true;
  })
}

// function reduceToAnyTrue(src) {
//   for (let i = 0; i < src.length; i++ ) {
//     if (src[i]) return true
//   }
//   return false
// }
