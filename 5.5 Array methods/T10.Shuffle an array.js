function shuffle(array){
array.sort(() => 0.5 - Math.random());
}


/* if we really need to shuffle an array and have a truly random distribution of items , we need to implement the Fisher-Yates algorithm 


function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}


source : https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj

*/

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...