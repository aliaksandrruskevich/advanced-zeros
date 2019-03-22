module.exports = function getZerosCount(number, base) { 
  var memory = 0; 
  var massiv1 = []; 
  var sum = 0; 
  var massiv = []; 
  var result = 0; 
  var perebor = 1; 
  for ( var i=2;i<=256;i++) 
  { 
  if (base%i==0) { 
  do 
  { 
  base = base/i; 
  massiv.push(i);} 
  while (base%i == 0) 
  } 
  } 
  for ( var a = 0; a < massiv.length; a++) { 
  memory = massiv[a]; 
  do { sum += Math.floor(number/memory); 
  memory = memory * massiv[a];} 
  while( memory <= number ) 
  massiv1.push(sum); 
  sum = 0; 
  } 
  for (var b = 0; b < massiv1.length; b++) { 
  if (massiv1[b] == massiv1[b+1]) { 
  perebor = perebor + 1; 
  } 
  } 
  for (var c = 0; c < massiv1.length; c++) { 
  if (massiv1[c] == massiv1[c+1]) { 
  massiv1[c] = Math.floor(massiv1[c]/perebor); 
  } 
  } 
  for (var d = 0; d < massiv1.length; d++) { 
  result = Math.min.apply(null, massiv1); 
  } 
  return result; 
  }