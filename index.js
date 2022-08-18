// store input value of Inches in local storage. make the submit button work. Not working.

//function handlesubmit () {
 //   const inche = document.getElementById('inche').value;

//    localStorage.setItem("inche", inche);
//    return;
//}

// main function to convert the inputed value.


 //let inche = handlesubmit();
let inches = parseInt(prompt("plz enter inches"));
let pixel = inches / 96;
// it's showing 'pixel' is declared but its value is never read.ts(6133). what to do? problem solved.

 console.log("pixel: "+ pixel);