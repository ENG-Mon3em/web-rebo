function goToSignIn() {
  window.location.href = "SignInPage.html";
}
function check_email_password() {
  let e_mail1 = "valt@gmail.com";
  let password1 = "1234";
  let e_mail2 = "mon3em@gmail.com";
  let password2 = "12345";
  let e_mail3 = "ahmed@gmail.com";
  let password3 = "12346";

  let mal = document.getElementById("e").value;
  let pass = document.getElementById("p").value;

  if (e_mail1 == mal) {
    if (password1 == pass) {
      alert("successful sign in");
    } else {
      alert("Incorrect password");
    }
  } else {
    alert("Failed to sign in");
  }
}
if (e_mail2 == mal) {
  if (password2 == pass) {
    alert("successful sign in");
  } else {
    alert("Incorrect password");
  }
} else {
  alert("Failed to sign in");
}

if (e_mail3 == mal) {
  if (password3 == pass) {
    alert("successful sign in");
  } else {
    alert("Incorrect password");
  }
} else {
  alert("Failed to sign in");
}
