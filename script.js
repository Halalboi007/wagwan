/// Looping
    
/*for (var i = 0; i <= 10; i++) {
    console.log(i);
}*
/
    
var Halal_Boi = {
    firstName: 'Abdulhameed',
    secondName: 'Abubakar',
    lastName: 'Muhammad',
    colour: 'Blue',
    family: ['Hafsat', 'nizam', 'hauwa', 'agadas', 'sadiq', 'umma', 'leemo', 'datti', 'ado', 'abba', 'nana', 'daddyo'],
    jod: 'none',
    bestNumber: '7',
  };
  console.log(Halal_Boi);

  var firstName = 'Abdulhameed';
    console.log(firstName);

    
var firstName = 'Halal';
console.log(firstName);
var lastName = 'boi';
console.log(lastName);

var age = 22;
console.log(age);

for (var i = 0; i <= 100; i += 1) {
  console.log(i);
}
alert ('this is the second example');
*/



/*/Bucket sort

function bucketsort (arr, bucketsize) {
    if (arr) return (arr);
}

const unsortedArray = [3, 5, 0, 2, 8, 1, 7];
const sortedArray = bucketsort (unsortedArray, 0);
console.log(sortedArray);
*/

function bucketSort(arr, numBuckets) {
  const buckets = new Array(numBuckets || 1).fill().map(() => []);

  const min = Math.min(...arr);
  const range = (Math.max(...arr) - min + 1) / numBuckets;

  arr.forEach(item => {
      const index = Math.floor((item - min) / range);
      buckets[index].push(item);
  });

  return buckets.map(bucket => bucket.sort((a, b) => a - b)).flat();
}

  const unsortedArray = [3, 5, 0, 2, 8, 1, 7];
  const sortedArray = bucketSort(unsortedArray, 3);
  console.log(sortedArray);

for (var i = 1; i <= 100; i += 1){
  if(i % 3 == 0 & i % 5 == 0){
    console.log ('fizzbuzz')
  } else if (i % 3 == 0){
    console.log ('fizz')
  } else if (i % 5 == 0){
    console.log ('buzz')
  }
}

/*/////

var numberOffizz = ['3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99'];
var numberOfBuzz = ['5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100'];
var numberOfFizzBuzz = ['15, 30, 45, 60, 75, 90'];

for (var i = 0; i <= 100; i += 1) {
  if ( i = numberOffizz) {
    return string(Fizz);
  } else {
  
   }
};
console.log(i);
*/






















