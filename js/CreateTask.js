function myFunction() {
var TaskName = document.getElementById("TaskName").value;
var ProjectName = document.getElementById("ProjectName").value;
var Resources = document.getElementById("Resources").value;
var EndTime = document.getElementById("EndTime").value;
var StartTime = document.getElementById("StartTime").value;
//alert("data recieved");

// Returns successful data submission message when the entered information is stored in database.
var dataString = 'ProjectName=' + ProjectName + '&TaskName=' + TaskName + '&Resources=' + Resources+ '&StartTime=' + StartTime + '&EndTime=' + EndTime; 


if (ProjectName == '' || TaskName == '' || Resources == '' || EndTime == '' || StartTime == '') {
alert("Please Fill All Fields");
} else {
// AJAX code to submit form.
$.ajax({
type: "POST",
url: "http://testing.unicoreonline.com/CreateTaskPrs.php",
data: dataString,
cache: false,
success: function(html) {
alert(html);
}
});
}
return false;
};

function getProjectNames()
{ var comp =  "test";
  var dataString = 'company=' + comp; 
$.ajax({
url: "http://testing.unicoreonline.com/getProjectName.php", // Url to which the request is send
type: "POST",            // Type of request to be send, called as method
data: dataString, // Data sent to server, a set of key/value pairs (i.e. form fields and values)
contentType: false,       // The content type used when sending data to the server.
cache: false,             // To unable request pages to be cached
processData:false,        // To send DOMDocument or non processed data file it is set to false
success: function(data)   // A function to be called if request succeeds
{
$("#ProjectName").html(data);
}
});
};

window.onload = getProjectNames();
