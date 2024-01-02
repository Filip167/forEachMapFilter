/*Exercise 1
        Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled 

     function doubleValues(arr) {
  return arr.map(value => value * 2);
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5];
const doubledArray = doubleValues(originalArray);
console.log(doubledArray);


*/
 /* Exercise 2 
        Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function 


  function onlyEvenValues(arr) {
    return arr.filter(value => value % 2 === 0);
  }

  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenValues = onlyEvenValues(values);
  console.log(evenValues);

*/
 /* Exercise 3 
        Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

  function showFirstAndLast(arr) {
    return arr.map(string => string[0] + string[string.length - 1]);
  }

    const strings = ["colt", "matt", "tim", "test"];
    const firstAndLastChars = showFirstAndLast(strings);
    console.log(firstAndLastChars);

*/
 /*Exercise 4 
        Write a function called addKeyAndValue which accepts an array of objects, a key, 
        and a value and returns the array passed to the function with the new key and value added for each object 

    function addKeyAndValue(arr, key, value) {
        return arr.map(obj => {
          return { ...obj, [key]: value };
        });
      }
      
      const arrayOfObjects = [
        { name: 'Elie'},
        { name: 'Tim'},
        { name: 'Matt'}, 
        { name: 'Colt'}
      ];
      
      const updatedArray = addKeyAndValue(arrayOfObjects, 'title', 'instructor');
      console.log(updatedArray);

*/
 /*Exercise 5 
        Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel 
        and the values as the number of times the vowel appears in the string. 
        This function should be case insensitive so a lowercase letter and uppercase letter should count */
/*
      function vowelCount(str) {
        const vowels = 'aeiou';
        const lowercaseStr = str.toLowerCase();
        const count = {};
      
        for (let char of lowercaseStr) {
          if (vowels.includes(char)) {
            count[char] = (count[char] || 0) + 1;
          }
        }
      
        return count;
      }
      
      const result = vowelCount('Hello World');
      console.log(result);

      

 /*Exercise 6 
        Write a function called doubleValuesWithMap which accepts an array and 
        returns a new array with all the values in the array passed to the function doubled 
       
       function doubleValuesWithMap(arr) {
        return arr.map(value => value * 2);
      }
      
      */

 /*Exercise 7 
        Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

      function valTimesIndex(arr) {
        return arr.map((value, index) => value * index);
      }
      */


 /*Exercise 8
        Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

      function extractKey(arrOfObjects, key) {
        return arrOfObjects.map(obj => obj[key]);
      }
      */

 /*Exercise 7
        Write a function called extractFullName which accepts an array of objects 
        and returns a new array with the value of the key with a name of “first” and the value of a key with the name of “last” in each object,
        concatenated together with a space.


      function extractFullName(arrOfObjects) {
        return arrOfObjects.map(obj => `${obj['first']} ${obj['last']}`);
      }
      */

 /*Exercise 8
        Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

        function filterByValue(arrOfObjects, key) {
  return arrOfObjects.filter(obj => obj.hasOwnProperty(key));
}


*/
    /*Exercise 9

        Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined
         if the value is not found in the array.


    function findInObj(arrOfObjects, key, value) {
  return arrOfObjects.find(obj => obj[key] === value);
}

*/
    /*Exercise 10
        Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

        function findInObj(arrOfObjects, key, value) {
  return arrOfObjects.find(obj => obj[key] === value);
}


*/

    /*Exercise 11
        Write a function called removeVowels which accepts a string and returns a new string with all of the vowels 
        (both uppercased and lowercased) removed. Every character in the new string should be lowercased.


        function removeVowels(str) {
  return str.toLowerCase().replace(/[aeiou]/gi, '');
}

*/

        /*Exercise 12
        Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled 
        (HINT - you can use map and fitler to double and then filter the odd numbers).

        function doubleOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0).map(oddNum => oddNum * 2);
}
*/