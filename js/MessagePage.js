function getUsers()
{
	gotobottom();
	sendRequest();
	var userid =  "1";
  var dataString = 'userid=' + userid; 
$.ajax({
url: "http://testing.unicoreonline.com/getMessages.php", // Url to which the request is send
type: "POST",            // Type of request to be send, called as method
data: dataString, // Data sent to server, a set of key/value pairs (i.e. form fields and values)
contentType: false,       // The content type used when sending data to the server.
cache: false,             // To unable request pages to be cached
processData:false,        // To send DOMDocument or non processed data file it is set to false
success: function(data)   // A function to be called if request succeeds
{
//alert(data);
$("#messageinfo").html(data);
}
});
};


function getOut()
{ 
  var textpartner = document.getElementById("textbuddy").value;
//var userid =  "1";
  var dataString = 'textpartner=' + textpartner; 
$.ajax({
url: "http://testing.unicoreonline.com/SelectUsersForMessages.php", // Url to which the request is send
type: "POST",            // Type of request to be send, called as method
data: dataString, // Data sent to server, a set of key/value pairs (i.e. form fields and values)
contentType: false,       // The content type used when sending data to the server.
cache: false,             // To unable request pages to be cached
processData:false,        // To send DOMDocument or non processed data file it is set to false
success: function(data)   // A function to be called if request succeeds
{
$("#message").html(data);
}
});
};

function send() {
//alert("hi");
var ProjectName = "hi";
var messagetext = document.getElementById("messagetxt").value;

//alert("data recieved");

// Returns successful data submission message when the entered information is stored in database.
var dataString = 'ProjectName=' + ProjectName + '&messagetext=' + messagetext;

if (ProjectName == '' || messagetext == '' ) {
alert("Please Fill All Fields");
} else {
// AJAX code to submit form.
$.ajax({
type: "POST",
url: "http://testing.unicoreonline.com/sendMessage.php",
data: dataString,
cache: false,
success: function(html) {
if(html == "Message Successfully Sent")
{
	document.getElementById("messagetxt").value = "";
 // location.reload();
}
else alert("error");
}
});
}
return false;
};


function sendMessage()
{ 
  var textMessage = document.getElementById("messagetxt").value;
//var userid =  "1";
  var dataString = 'messagetxt=' + textMessage; 
$.ajax({
url: "http://testing.unicoreonline.com/getMessagesCount.php", // Url to which the request is send
type: "POST",            // Type of request to be send, called as method
data: dataString, // Data sent to server, a set of key/value pairs (i.e. form fields and values)
contentType: false,       // The content type used when sending data to the server.
cache: false,             // To unable request pages to be cached
processData:false,        // To send DOMDocument or non processed data file it is set to false
success: function(data)   // A function to be called if request succeeds
{
//if(data == "Message Successfully Sent")
//{
  //location.reload();
//}
//else alert("error");

 //localStorage.setItem("lastmessage", data);
 var a = localStorage.getItem("lastmessage")
 if(a !== null)
 {
	 if(data == a )
	 {
	 }
	 else
	 {
		 gotobottom();
		 localStorage.setItem("lastmessage", data);
	 }
 }
 
 else localStorage.setItem("lastmessage", data);
 
 

 
}
});
};
 function scroll(height, ele) {
    this.stop().animate({
      scrollTop: height
    }, 1000, function() {
      var dir = height ? "top" : "bottom";
      $(ele).html("scroll to " + dir).attr({
        id: dir
      });
    });
  };

function sendRequest(){
    $.ajax({
        url: "http://testing.unicoreonline.com/getMessages.php",
        success: 
          function(result){
			  sendMessage();
           $('#messageinfo').html(result); //insert text of test.php into your div
           setTimeout(function(){
          sendRequest(); //this will send request again and again;
           }, 1000);
        }});
};

function gotobottom() {
	var height = 0;
	var dir = height ? "top" : "bottom";
	var wtf = $('#scroll');

	
	height = height < wtf[0].scrollHeight ? wtf[0].scrollHeight : 0;
	for(i=0;i<100; i++)
	{
		height = height + height;
        scroll.call(wtf, height, this);
	}

};


$(function() {
  var height = 0;

  function scroll(height, ele) {
    this.stop().animate({
      scrollTop: height
    }, 1000, function() {
      var dir = height ? "top" : "bottom";
      $(ele).html("scroll to " + dir).attr({
        id: dir
      });
    });
  };
  var wtf = $('#scroll');
  $("#bottom, #top").click(function() {
    height = height < wtf[0].scrollHeight ? wtf[0].scrollHeight : 0;
    //scroll.call(wtf, height, this);
  });
});


$(document).ready(function() {
   // process the form
    $('#sendMessageForm').submit(function(event) {
var ProjectName = "hi";
var messagetext = document.getElementById("messagetxt").value;

//alert("data recieved");

// Returns successful data submission message when the entered information is stored in database.
var dataString = 'ProjectName=' + ProjectName + '&messagetext=' + messagetext;

if (ProjectName == '' || messagetext == '' ) {
alert("Please Fill All Fields");
} else {
// AJAX code to submit form.
$.ajax({
type: "POST",
url: "http://testing.unicoreonline.com/sendMessage.php",
data: dataString,
cache: false,
success: function(html) {
if(html == "Message Successfully Sent")
{
	document.getElementById("messagetxt").value = "";
 // location.reload();
}
else alert("error");
}
});
}   // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });

});


window.onload = getUsers();
