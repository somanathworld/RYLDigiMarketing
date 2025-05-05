// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(19.8135, 85.8312),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

//animatied Button
function startProgress() {
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = '100%';
    setTimeout(() => {
        progressBar.style.width = '0';
    }, 2000);
}


//Submit button interaction;
document.getElementById("freeConsultantForm").addEventListener("submit", async function(e) {
	e.preventDefault();

	const BASE_URL = "https://usersexpressdb.vercel.app"; // ← Replace with your deployed base URL

	const name = document.getElementById("contact-form-name").value;
	const email = document.getElementById("contact-form-email").value;
	const phone = document.getElementById("contact-form-phn").value;
	const remarks = document.getElementById("contact-form-msg").value;

	const res = await fetch(`${BASE_URL}/api/addUser`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ name, email, phone, remarks })
	});

	const data = await res.json();
	alert(data.message || "Our team will call you for further discussion!");
	e.target.reset();
}
);