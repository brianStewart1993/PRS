function getUsers()
{ var userid =  "1";
  var dataString = 'userid=' + userid; 
$.ajax({
url: "http://testing.unicoreonline.com/SelectUsersForMessages.php", // Url to which the request is send
type: "POST",            // Type of request to be send, called as method
data: dataString, // Data sent to server, a set of key/value pairs (i.e. form fields and values)
contentType: false,       // The content type used when sending data to the server.
cache: false,             // To unable request pages to be cached
processData:false,        // To send DOMDocument or non processed data file it is set to false
success: function(data)   // A function to be called if request succeeds
{
$("#texterr").html(data);
}
});
};


function getOut()
{ 
  var textpartner = document.getElementById("texterr").value;
//var userid =  "1";
  var dataString = 'textpartner=' + textpartner; 
  //alert(dataString);
$.ajax({
type: "POST",
url: "http://testing.unicoreonline.com/CreateSessionTexter.php",
data: dataString,
cache: false,     // To send DOMDocument or non processed data file it is set to false
success: function(data)   // A function to be called if request succeeds
{
  window.location.href = "MessagePage.html";
}
});
};

window.onload = getUsers();
