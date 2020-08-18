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

function reduceToAllTrue(sourceArray) {
    return sourceArray.reduce((acc, val) => acc && Boolean(val), true);
}

function reduceToAnyTrue(sourceArray) {
    return sourceArray.reduce((acc, val) => acc || Boolean(val));
}