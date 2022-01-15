
//hw 2-1
function convertElements(arr) {
   var arr3 = [];
   for (var i = 0; i < arr.length; i++) {
      arr[i] = String(arr[i]);
      arr3.push(arr[i]);
   }
   return arr3
}

console.log(convertElements([1, 2, "x", "z"]));
console.log(convertElements(["pdf", 123, "def", 456]));
console.log(convertElements([1, 2, 3, 17, 24, 3, "a", "123b"]));
console.log(convertElements([]));


//hw 2-2
function numericTrue(arr) {
   var arr2 = [];
   for (var i = 0; i < arr.length; i++) {
      if (arr[i] == true) {
         arr2.push(arr[i]);
      }
   }
   return arr2.length;
}
console.log(numericTrue([true, false, false, true, false]));
console.log(numericTrue([false, false, false, false]));
console.log(numericTrue([]));


//hw2-3


function highLow(num) {
   // var maxMinNum = [maxNumber, minNumber];
   // maxNum.push(Math.max(1, 2, 3, 4, 5));
   // maxNum.push(Math.min(1, 2, 3, 4, 5));
   // maxNum.push(Math.max(1, 2, -3, 4, 5));
   // maxNum.push(Math.min(1, 2, -3, 4, 5));
   // maxNum.push(Math.max(1, 9, 3, 4, -5));
   // maxNum.push(Math.min(1, 9, 3, 4, -5));
   // maxNum.push(Math.max(13));
   // maxNum.push(Math.min(13));

   for (var i = 0; i < num.length; i++) {

      var maxNumber = Math.max.apply(Math, num);
      var minNumber = Math.min.apply(Math, num);
      // maxNum.push(Math.max.apply(Math, num[i]));
      // maxMinNum.push(maxNumber);
      // maxMinNum.push(minNumber);
      // // maxMinNum.pop();
      // var num;
      // var maxNumber = Math.max(...num);
      // var minNumber = Math.min(...num);
      // maxMinNum.push(maxNumber);
      // maxMinNum.push(minNumber);
      // maxMinNum.push(Math.max(num[i]));
      // maxMinNum.push(Math.min(num[i]));
      var maxMinNum = [maxNumber, minNumber];
   }
   return maxMinNum;
}
console.log(highLow([1, 2, 3, 4, 5]));
console.log(highLow([1, 2, -3, 4, 5]));
console.log(highLow([1, 9, 3, 4, -5]));
console.log(highLow([13]));

