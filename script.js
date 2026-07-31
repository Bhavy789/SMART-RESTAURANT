/* ==========================
   BOOKING FORM
========================== */

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const guests = document.getElementById("guests").value.trim();
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if(
        name==="" ||
        email==="" ||
        phone==="" ||
        guests==="" ||
        date==="" ||
        time===""){

        alert("Please fill all fields.");
        return;
    }

    alert("🎉 Table Reserved Successfully!");

    bookingForm.reset();

});


/* ==========================
   DARK MODE
========================== */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

});