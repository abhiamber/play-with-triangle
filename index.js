var input = document.querySelectorAll(".input-value");
var submitBtn = document.querySelector("#submit-btn");
var output = document.querySelector("#output");

// var sumofangle =
//   Number(input[0].value) + Number(input[1].value) + Number(input[2].value);

// function trianglevalidation(sumofangles) {
//   if (sumofangles === 180) {
//     // console.log("hello");
//     output.innerText = "You are correct ";
//   } else {
//     // console.log("abhi");
//     output.innerText =
//       "The angle provided by you is not an example of triangle";
//   }
// }
function anglecalculation() {
  var sumofangle =
    Number(input[0].value) + Number(input[1].value) + Number(input[2].value);
//   trianglevalidation(sumofangle);
//   console.log(sumofangle, "......");
if (sumofangle === 180) {
    // console.log("hello");
    output.innerText = "You are correct ";
  } else {
    // console.log("abhi");
    output.innerText =
      "The angle provided by you is not an example of triangle";
  }
}

submitBtn.addEventListener("click", anglecalculation);
