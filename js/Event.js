// Event
function toggleEvent(header){
  header.nextElementSibling.classList.toggle("open");
}
function calc(){
  const book = document.querySelector('input[name="book"]:checked');
  const qty = parseInt(document.getElementById('qty').value);
  if(!book){
    alert("Choose a book first");
    return;
  }
  const price = parseFloat(book.value);
  const total = price * qty;
  const discount = total * 0.1;
  const box = document.getElementById('buyResult');
  box.style.display='block';
  box.innerHTML =
    "Total: $" + total.toFixed(2) +
    "<br>Discount: -$" + discount.toFixed(2) +
    "<br><b>Final: $" + (total-discount).toFixed(2) + "</b>";
}
//  Math Quiz
let a, b, correct;
document.addEventListener("DOMContentLoaded", function () {
  a = Math.floor(Math.random()*10) + 1;
  b = Math.floor(Math.random()*10) + 1;
  correct = a + b;
  document.getElementById('question').innerHTML =
    a + " + " + b + " = ?";
});
function check(){
  const user = parseInt(document.getElementById('answer').value);
  const box = document.getElementById('quizResult');
  box.style.display='block';
  if(user === correct)
    box.innerHTML = "Correct ✅";
  else
    box.innerHTML = "Wrong ❌ Correct answer is " + correct;
}
