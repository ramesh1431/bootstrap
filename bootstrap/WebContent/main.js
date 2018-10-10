
var validation;
(function () {
	
'use strict';
window.addEventListener('load', function() {
var forms = document.getElementsByClassName('needs-validation');
	validation = Array.prototype.filter.call(forms, function (form) {
		
form.addEventListener('submit', function(event) { /*  mouseleave */
	
	if (form.checkValidity() === false) {
		
		event.preventDefault();

		event.stopPropagation();

		
	} else {  }

	form.classList.add('was-validated');
	
	
}, false);
	
});
	
}, false);
	
})();

function welcome() {
	swal("WELCOME TO IRCTC REGISTRATION", "click OK proced", "success")

}
 

function selectChange(element) {

if (element.options[element.selectedIndex].value != 'IN' && element.options[element.selectedIndex].value != '') {

document.getElementById("message").innerHTML = "<hr class='bg-danger'><strong style='color:red'>Info!</strong>International/NRI users with ISD code other than 91 have to pay Registration fees after successful registration i.e. on first login. Please note that the Registration fee for International/NRI users is Rs. 100 + GST.";

} else {

document.getElementById("message").innerHTML = "";

}



}
var myVar = setInterval(myTimer, 1000);

function myTimer() {




	var d = new Date();
	document.getElementById("time").innerHTML = d.toLocaleTimeString();

	myDate();


}
function myDate(){

	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1; //January is 0!
	var yyyy = today.getFullYear();

	if (dd < 10) {
		dd = '0' + dd
	}

	if (mm < 10) {
		mm = '0' + mm
	}

	today = "<font color='red'>" + mm + "<font>" + '-' + "<font color='green'>" + dd + "<font>" + '-' + "<font color='blue'>"+ yyyy+"</font>";
	document.getElementById("date").innerHTML = today;


	

}


function goBack() {
	window.history.back();
}




function myFunction() {
	var x = document.getElementById("pwd");
	if (x.type === "text") {
		x.type = "password";
	} else {
		x.type = "text";
	}
}

					
