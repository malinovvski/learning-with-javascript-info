//T1 - What's the result of OR?

alert( null || 2 || undefined ); // result is 2, that's the first truthy value

//T2 - What's the result of OR'ed alerts?

alert( alert(1) || 2 || alert(3) ); // result is 1 from alert(1) then 2

//T3 - What is the result of AND?

alert( 1 && null && 2 ); // result is null, that's the first falsy value 

//T4 - What is the result of AND'ed alerts?

alert( alert(1) && alert(2) ); // result is 1 from alert(1) then undefined

//T5 - The result of OR AND OR

alert( null || 2 && 3 || 4 ); // the result is 3