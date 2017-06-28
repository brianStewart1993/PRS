function myFunction() {
//alert("hi");
var ProjectName = document.getElementById("ProjectName").value;
var ProjectDescription = document.getElementById("ProjectDescription").value;
var ProjectLeader = document.getElementById("ProjectLeader").value;
var ProjectType = document.getElementById("ProjectType").value;
var client = document.getElementById("client").value;
var Budget = document.getElementById("Budget").value;
var StartDate = document.getElementById("StartDate").value;
var EndDate = document.getElementById("EndDate").value;
//alert("data recieved");

// Returns successful data submission message when the entered information is stored in database.
var dataString = 'ProjectName=' + ProjectName + '&ProjectDescription=' + ProjectDescription + '&ProjectLeader=' + ProjectLeader+ '&ProjectType=' + ProjectType + '&client=' + client 
+ '&Budget=' + Budget + '&StartDate=' + StartDate + '&EndDate=' + EndDate;

if (ProjectName == '' || ProjectDescription == '' || ProjectLeader == '' || ProjectType == '' || client == '' || Budget == '' || StartDate == '' || EndDate == '') {
alert("Please Fill All Fields");
} else {
// AJAX code to submit form.
$.ajax({
type: "POST",
url: "http://testing.unicoreonline.com/CreateProjectPrs.php",
data: dataString,
cache: false,
success: function(html) {
alert(html);
}
});
}
return false;
}


function getProjects() {
alert("hi");
var Proj = "something" 

// Returns successful data submission message when the entered information is stored in database.
var dataString = 'Proj=' + Proj;
alert("hi again");
alert(dataString);
alert("ajax time");
// AJAX code to submit form.
$.ajax({
type: "POST",
url: "http://testing.unicoreonline.com/getProjects.php",
datatype: "json",
data: dataString,
cache: false,
success: function(html) {
alert(html);

//var select, option;
//select = document.getElementById("ProjectLeader");
// option = document.createElement( 'option' );
  //      option.value = option.text = html;
      //  select.add( option );
	//	}
	
	var dataItems = "";
$.each(html, function (index, itemData) {
    dataItems += index + ": " + itemData + "\n";
	alert(dataItems);
});
}
});

return false;
}

function getProgress() {
alert("hi");
var ProjectName = "First" ;

// Returns successful data submission message when the entered information is stored in database.
var dataString = 'ProjectName=' + ProjectName;
alert("ajax time");
// AJAX code to submit form.
$.ajax({
type: "POST",
url: "http://testing.unicoreonline.com/getProjectProgress.php",
datatype: "json",
data: dataString,
cache: false,
success: function(html) {
alert(html);
var a = parseInt(html)
var max = 350;
var totpx = a/100 * max;
alert("hi");
 $this = $('span');
 $this.css('color','#3498db');
         $this.css('text-align','center');
         $this.css('border','1px solid #ededed');
		 $this.width(totpx);
}
});

return false;
}

function setProgress()
{
alert("hi");
 $this = $('span');
 $this.css('color','#3498db');
         $this.css('text-align','center');
         $this.css('border','1px solid #ededed');
		 $this.width(350);
};

function getEmployees()
{ var comp =  "test";
  var dataString = 'company=' + comp; 
$.ajax({
url: "http://testing.unicoreonline.com/getProjectLeaders.php", // Url to which the request is send
type: "POST",            // Type of request to be send, called as method
data: dataString, // Data sent to server, a set of key/value pairs (i.e. form fields and values)
contentType: false,       // The content type used when sending data to the server.
cache: false,             // To unable request pages to be cached
processData:false,        // To send DOMDocument or non processed data file it is set to false
success: function(data)   // A function to be called if request succeeds
{
 getClients();
$("#ProjectLeader").html(data);
}
});
};

function getClients()
{ var comp =  "test";
  var dataString = 'company=' + comp; 
$.ajax({
url: "http://testing.unicoreonline.com/getClients.php", // Url to which the request is send
type: "POST",            // Type of request to be send, called as method
data: dataString, // Data sent to server, a set of key/value pairs (i.e. form fields and values)
contentType: false,       // The content type used when sending data to the server.
cache: false,             // To unable request pages to be cached
processData:false,        // To send DOMDocument or non processed data file it is set to false
success: function(data)   // A function to be called if request succeeds
{
$("#client").html(data);
}
});
};

window.onload = getEmployees();
