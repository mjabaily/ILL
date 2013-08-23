//Matt Jabaily
//Scripts for new user registration
//Last Updated 7/27/2013


//Initializes Variables
var campus = ""; 			//The campus that the patron attends
var patronStatus = "";		//The status of the patron (undergrad, grad, faculty, or staff)
var campusPlusSatus = "";	//A combination of the campus and status
var department="";			//The department to which the patron belongs


//This function looks at the campus and status dropdowns and fills form accordingly
function test()
{
//If either setting is changed to "blank" the form resets.  This prevents outdated information
//from staying if user accidentally chooses a wrong value and corrects the mistake.
if (campus=="blank" || patronStatus=="blank"){
clearFill();
clearDeliveryNote();
}

//If both drop downs are set, three functions are run.  The first fills for the campus
//the second sets loan delivery the third adds a note under the loan delivery method
//and limits values in loan delivery method.
else if (campus=="Lam" && patronStatus=="und"){
lambuthFill();
setMail();
lambuthDeliveryNote();
}
else if (campus=="Lam" && patronStatus=="grad"){
lambuthFill();
setMail();
lambuthDeliveryNote();
}
else if (campus=="Lam" && patronStatus=="staf"){
lambuthFill();
setMail();
lambuthDeliveryNote();
}
else if (campus=="Lam" && patronStatus=="fac"){
lambuthFill();
setMail();
lambuthDeliveryNote();
}
else if (campus=="Mem" && patronStatus=="und"){
localFill();
setHold();
umNonFacultyDeliveryNote();
}
else if (campus=="Mem" && patronStatus=="grad"){
localFill();
setHold();
umNonFacultyDeliveryNote();
}
else if (campus=="Mem" && patronStatus=="staf"){
localFill();
setHold();
umNonFacultyDeliveryNote();
}
else if (campus=="Mem" && patronStatus=="fac"){
localFill();
setMail();
umFacultyDeliveryNote();
}
else if (campus=="e" && patronStatus=="und"){
ecampusFill();
setMail();
ecampusDeliveryNote();
}
else if (campus=="e" && patronStatus=="grad"){
ecampusFill();
setMail();
ecampusDeliveryNote();
}
else if (campus=="e" && patronStatus=="staf"){
ecampusFill();
setMail();
ecampusDeliveryNote();
}
else if (campus=="e" && patronStatus=="fac"){
ecampusFill();
setMail();
ecampusDeliveryNote();
}
else{

}

//If both campus and patron status have values, this function combines them.
if (campus != "" && campus != "blank" && patronStatus !="" && patronStatus !="blank") {
	campusPlusStatus = campus + "" + patronStatus;
	
	document.getElementById(campusPlusStatus).selected=true;
}
//If either value is not filled, the blank status group value is selected.
else{
	document.getElementById("statusGroupBlank").selected=true;
}
}

//Fills the address for the Lambuth Campus (all items delivered to library)
function lambuthFill()
{
document.getElementById("Address").value="Lambuth University Library";
document.getElementById("Address2").value="705 Lambuth Blvd";
document.getElementById("City").value="Jackson";
document.getElementById("State").value="TN";
document.getElementById("Zip").value="38301";
}

//Sets delivery method to "hold for pickup"
function setHold()
{
document.getElementById("hold").selected=true;	
}

//Clears the address for off-campus users.  These patrons enter their home addresses.
function ecampusFill()
{
document.getElementById("Address").value="";
document.getElementById("Address2").value="";
document.getElementById("City").value="";
document.getElementById("State").value="";
document.getElementById("Zip").value="";
}
//Clears address for UM patrons.  Patrons put in their own addresses
//even if they are restricted to hold for pickup.
function localFill()
{
document.getElementById("Address").value="";
document.getElementById("Address2").value="";
document.getElementById("City").value="";
document.getElementById("State").value="";
document.getElementById("Zip").value="";

}

//Sets load delivery method to "Deliver to Address"
function setMail()
{
document.getElementById("mail").selected=true;
}

//Clears the address and loan delivery method; resets form.
function clearFill()
{
document.getElementById("Address").value="";
document.getElementById("Address2").value="";
document.getElementById("City").value="";
document.getElementById("State").value="";
document.getElementById("Zip").value="";
document.getElementById("empty").selected=true;
}

//This function is used to set the address as the department office.
//This option is offered to faculty members only.
function setDepartment()
{
//If the patron is a UM Faculty Member and wants delivery to the department office,
//The department name is entered in the address with an indication it is the main campus.
if (patronStatus=="fac" && campus=="Mem" && document.getElementById("mail").selected){
document.getElementById("Address").value=department;
document.getElementById("Address2").value="Departmental Admin Office";
document.getElementById("City").value="Memphis";
document.getElementById("State").value="TN";
document.getElementById("Zip").value="38152";
}
else{

}
}

//Resets the delivery note text and re-enables loan delivery method dropdown.
function clearDeliveryNote()
{
document.getElementById("deliveryNote").innerHTML="";
document.getElementById("mail").removeAttribute('disabled');
document.getElementById("hold").removeAttribute('disabled');
}

//Sets Lambuth note and disables hold for pickup option.  
//Redundancy for disabling is in order to accomodate different browsers.
function lambuthDeliveryNote()
{
document.getElementById("deliveryNote").innerHTML='<br />You will be notified when your items have been delivered to the Lambuth Campus Library.';
document.getElementById("hold").disabled=true;
document.getElementById("mail").removeAttribute('disabled');
document.getElementById("LoanDeliveryGroup").options[1].disabled=true;
}

//Sets UM Faculty Note note enables choice for pickup.  
function umFacultyDeliveryNote()
{
document.getElementById("deliveryNote").innerHTML='<br />Select "Deliver to Address" for item delivery to Department Admin Office OR select "Hold for Pickup" to pickup at McWherter Library.';
document.getElementById("mail").removeAttribute('disabled');
document.getElementById("hold").removeAttribute('disabled');
}

//Sets UM Non-Faculty note and disables delivery option.  
//Redundancy for disabling is in order to accomodate different browsers.
function umNonFacultyDeliveryNote()
{
document.getElementById("deliveryNote").innerHTML='<br />You will be notified when your items are ready to pickup at McWherter Library.';
document.getElementById("mail").disabled=true;
document.getElementById("LoanDeliveryGroup").options[2].disabled=true;
document.getElementById("hold").removeAttribute('disabled');
}

//Sets Off Campus Users Note note enables choice for pickup. 
function ecampusDeliveryNote()
{
document.getElementById("deliveryNote").innerHTML='<br />Users who live over 30 miles from the Memphis campus and who do not come to the Memphis campus for courses may select "Deliver to Address" to have items mailed.  Others should select "Hold for Pickup" to receive items at McWherter Library.';
document.getElementById("mail").removeAttribute('disabled');
document.getElementById("hold").removeAttribute('disabled');

}

//This function looks at the campus and status dropdowns and fills form accordingly
//This is similar to the test() function but is used by the Change User Information form.

function changeFill()
{
if (campus=="blank" || patronStatus=="blank"){
clearDeliveryNote();
}
else if (campus=="Lam" && patronStatus=="und"){
lambuthFill();
setMail();
lambuthDeliveryNote();
}
else if (campus=="Lam" && patronStatus=="grad"){
lambuthFill();
setMail();
lambuthDeliveryNote();
}
else if (campus=="Lam" && patronStatus=="staf"){
lambuthFill();
setMail();
lambuthDeliveryNote();
}
else if (campus=="Lam" && patronStatus=="fac"){
lambuthFill();
setMail();
lambuthDeliveryNote();
}
else if (campus=="Mem" && patronStatus=="und"){
setHold();
umNonFacultyDeliveryNote();
}
else if (campus=="Mem" && patronStatus=="grad"){
setHold();
umNonFacultyDeliveryNote();
}
else if (campus=="Mem" && patronStatus=="staf"){
setHold();
umNonFacultyDeliveryNote();
}
else if (campus=="Mem" && patronStatus=="fac"){
//localFill();
setMail();
umFacultyDeliveryNote();
}
else if (campus=="e" && patronStatus=="und"){
setMail();
ecampusDeliveryNote();
}
else if (campus=="e" && patronStatus=="grad"){
setMail();
ecampusDeliveryNote();
}
else if (campus=="e" && patronStatus=="staf"){
setMail();
ecampusDeliveryNote();
}
else if (campus=="e" && patronStatus=="fac"){
setMail();
ecampusDeliveryNote();
}
else{

}


if (campus != "" && campus != "blank" && patronStatus !="" && patronStatus !="blank") {
	campusPlusStatus = campus + "" + patronStatus;
	
	document.getElementById(campusPlusStatus).selected=true;
}

else{
	document.getElementById("statusGroupBlank").selected=true;
}
}