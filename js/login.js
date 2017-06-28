function myFunction() {
    alert('Form has been submitted');
};

function loginFunc() {

	var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
// Returns successful data submission message when the entered information is stored in database.
var dataString = 'username=' + username + '&password=' + password;
if (username == '' || password == '') {
alert("Please Fill All Fields");
} else {
// AJAX code to submit form.
$.ajax({
type: "POST",
url: "http://testing.unicoreonline.com/loginprs.php",
data: dataString,
cache: false,
success: function(html) 
{
	if(html == "Employee")
	window.location.href = "http://testing.unicoreonline.com/ViewProjects.html";
	else if (html == "Client") window.location.href = "http://testing.unicoreonline.com/ViewProjectsClients.html";
	else if (html == "Login Unsuccessful") alert(html);
	
}
});
}
return false;
};


