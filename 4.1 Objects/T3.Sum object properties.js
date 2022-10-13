
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

 let sum = 0;
 for (let key in salaries){
    sum += (+salaries[key]);
 };

alert(sum);





// https://stackoverflow.com/questions/16449295/how-to-sum-the-values-of-a-javascript-object 
