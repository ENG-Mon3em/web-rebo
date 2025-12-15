  let a = Math.floor(Math.random()*10)+1;
  let b = Math.floor(Math.random()*10)+1;
  let correct = a + b;

  document.getElementById('question').innerHTML =
    a + " + " + b + " = ?";

  function check(){
    const user = parseInt(document.getElementById('answer').value);
    const box = document.getElementById('quizResult');
    box.style.maxHeight = "10px";

    if(user === correct)
      box.innerHTML = "Correct ";
    else
      box.innerHTML = "Wrong , Correct answer is " + correct;
  }