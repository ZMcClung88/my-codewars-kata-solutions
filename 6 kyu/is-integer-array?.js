const isIntArray = arr => {
  if(arr === null || arr === undefined || (typeof arr !== 'object')){
    return false;
  }
  if(arr.length === 0){
    return true;
  }
  if(!isNaN(arr) || typeof arr === 'number'){
    return false;
  }

  return arr.every(x => !isNaN(x) && x % 1 === 0);
}
