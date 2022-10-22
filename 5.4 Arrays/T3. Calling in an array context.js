let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // ?


// Result is 3 because array is treated like object. We have two values plus the function.
