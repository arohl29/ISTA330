/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/
function funct(n){
    let mid = n.sort().length;
    let midsort= n.sort();
    if (mid%2 == 0){
   var  mid1 = mid/2;
  	ar = (midsort[mid1] + midsort[mid1-1])/2;
    return ar;
        }
      else{
        var mid1 = Math.floor(mid/2)
        return midsort[mid1];
      }
        }
