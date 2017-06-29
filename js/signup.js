function myFunction() {
//alert("hi");
var name = document.getElementById("username").value;
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
var userType = document.getElementById("userType").value;
//alert("data recieved");
// Returns successful data submission message when the entered information is stored in database.
var dataString = 'username=' + name + '&email=' + email + '&password=' + password + '&userType=' + userType;
if (name == '' || email == '' || password == '' || userType == '') {
alert("Please Fill All Fields");
} else {
// AJAX code to submit form.
$.ajax({
type: "POST",
url: "http://testing.unicoreonline.com/signupprs.php",
data: dataString,
cache: false,
success: function(html) {
alert(html);
}
});
}
return false;
}
