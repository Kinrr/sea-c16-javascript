
var stringDelimiter = function(sampleInput, delimiter) {
  delmtArr = [];
  while (sampleInput.indexOf(delimiter) !== -1) {
    var leadDel = sampleInput.indexOf(delimiter),
        leadSub = sampleInput.substring(0, leadDel),
        ldSubAndDel = sampleInput.substring(0, leadDel + 1); 
      if (leadSub) {
        delmtArr.push(leadSub);
      }
    sampleInput = sampleInput.replace(ldSubAndDel, '');
  }
  if (sampleInput){
    delmtArr.push(sampleInput);
  }
  return delmtArr;
};
