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

	const contactName = document.getElementById("contact-form-name");
	const modalName = document.getElementById("modal-form-name");	
	const name = contactName == null ? modalName.value : contactName.value;
	
	const contactEmail = document.getElementById("contact-form-email");
	const modalEmail = document.getElementById("modal-form-email");	
	const email = contactEmail == null ? modalEmail.value : contactEmail.value;

	const contactPhone = document.getElementById("contact-form-phn");
	const modalPhone = document.getElementById("modal-form-phn");	
	const phone = contactPhone == null ? modalPhone.value : contactPhone.value;
	
	const contactMsg = document.getElementById("contact-form-msg");
	const modalMsg = document.getElementById("modal-form-msg");	
	const remarks = contactMsg == null ? modalMsg.value : contactMsg.value;
	
	const res = await fetch(`${BASE_URL}/api/addUser`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ name, email, phone, remarks })
	});

	const data = await res.json();
	alert(data.message+ "Thank you !!!");		
	e.target.reset();
}
);