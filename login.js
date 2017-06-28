function myFunc() {
var username = document.getElementById("username").value;
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;

// Returns successful data submission message when the entered information is stored in database.
var dataString = 'name1=' + name + '&email1=' + email + '&password1=' + password;
if (name == '' || email == '' || password == '') {
alert("Please Fill All Fields");
} else {
// AJAX code to submit form.
$.ajax({
type: "POST",
url: "loginprs.php",
data: dataString,
cache: false,
success: function(html) {
alert(html);
}
});
}
return false;
}