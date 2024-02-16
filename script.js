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

function adjustPortions() {
  let previousValue = parseFloat(document.getElementById("previousServing").value);
  let newValue = parseFloat(document.getElementById("portionInput").value);

  // Überprüfen, ob newValue im zulässigen Bereich liegt
  if (isNaN(newValue) || newValue < 1 || newValue > 30) {
    alert("Bitte geben Sie eine gültige Anzahl zwischen 1 und 30 ein.");
    return;
  }

  if (previousValue && newValue) {
    let quantityElements = document.querySelectorAll('.t-left span');
    quantityElements.forEach(function (element) {
      let content = element.textContent.trim();
      let numberPart = parseFloat(content);
      if (!isNaN(numberPart)) {
        let unitPart = content.replace(numberPart, '').trim();
        let newNumber = numberPart * (newValue / previousValue);
        element.textContent = newNumber + " " + unitPart;
      }
    });
    document.getElementById("previousServing").value = newValue;
  }
}

function toggleNavBar() {
  var navBar = document.querySelector('.navBar');
  navBar.classList.toggle('active');
}