
exports.min = function min (array) {
    if(!Array.isArray(array) || (array.length <= 0)){
        return 0;
    }
minValue=array[0];
for(let i=1;i<array.length;i++)
        if(array[i]<minValue)
        {minValue=array[i];}
    return minValue;
}

exports.max = function max (array) {
    
    if(!Array.isArray(array) || (array.length <= 0)){
        return 0;
    }
    maxValue=array[0];
    for(let i=1;i<array.length;i++)
        if(array[i]>maxValue)
        {maxValue=array[i];}
    return maxValue;
}

exports.avg = function avg (array) {
    if(!Array.isArray(array) || (array.length <= 0)){
        return 0;
    }
    let avgValue = array.reduce((avgValue, current) => avgValue + current, 0);
  return avgValue/array.length;
}
