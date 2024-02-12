function sendMail(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  fetch("https://formspree.io/f/xdoqeavd", {
    method: "POST",
    body: new FormData(event.target),
    headers: {
      'Accept': 'application/json'
    }
  }).then(() => {
    window.location.href = "./index_mail.html";
  }).catch((error) => {
    console.log(error);
  });
}

function openPopup() {
  let popup = document.getElementById("popup");
  popup.style.display = "block";
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
}

function closePopup() {
  let popup = document.getElementById("popup");
  popup.style.display = "none";
  document.body.style.backgroundColor = "";
  document.getElementsByName("email")[0].value = "";
  document.getElementsByName("message")[0].value = "";
}

function sendMail(event) {
  event.preventDefault();
  openPopup();
}

