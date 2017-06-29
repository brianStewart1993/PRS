function getUsers()
{
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
  alert(dataString);
$.ajax({
url: "http://testing.unicoreonline.com/sendMessage.php", // Url to which the request is send
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
alert(data);
//else alert("error");

}
});
};

function sendRequest(){
    $.ajax({
        url: "http://testing.unicoreonline.com/getMessages.php",
        success: 
          function(result){
           $('#messageinfo').html(result); //insert text of test.php into your div
           setTimeout(function(){
          sendRequest(); //this will send request again and again;
           }, 1000);
        }});
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
    scroll.call(wtf, height, this);
  });
});


window.onload = getUsers();
