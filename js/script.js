//reservation

const reservationForm = document.getElementById("reservationForm");
if (reservationForm) {
  reservationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const guests = document.getElementById("guests").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (!name || !email || !phone || !guests || !date || !time) {
      alert("All fields are required!");
    } else {
      alert("your table has benn reserved successfully");
    }
  });
}

//Dish-Image-Zoom
$(document).ready(function () {
  $("#dishImage").click(function () {
    $(this).toggleClass("zoomed");
  });
});

//current-time-date

const dateTime = document.getElementById("dateTime");

if (dateTime) {
  const now = new Date();

  const time = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const date = now.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  dateTime.innerHTML = `
    <div class="fw-bold text-dark">${time}</div>
    <div class="fw-bold text-danger">${date}</div>
  `;
}
