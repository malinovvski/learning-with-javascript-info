function unique(arr) {
    return arr
    .filter((item, index, str) => {
    return str.indexOf(item) === index;
    })
    
    }
    
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  

  
  alert( unique(strings) ); // Hare, Krishna, :-O



