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
const dishImage = document.getElementById("dishImage");

if (dishImage) {
  dishImage.addEventListener("click", function () {
    if(this.style.transform === "scale(1.2)"){
        this.style.transform = "scale(1)";
    } else{
        this.style.transform = "scale(1.2)";
    }
  });
}
