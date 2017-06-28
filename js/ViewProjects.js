function myFunction() {
var ProjectName = "Proj";

//alert("data recieved");
// Returns successful data submission message when the entered information is stored in database.
var dataString = 'ProjectName=' + ProjectName; 


if (ProjectName == '') {
alert("Please Fill All Fields");
} else {
// AJAX code to submit form.
$.ajax({
type: "POST",
url: "http://testing.unicoreonline.com/getProjects.php",
data: dataString,
cache: false,
	success: function(html) {
		var obj = JSON.parse(html);
		for(var i = 0; i<obj.length; i++)
		{
			var hexColor = "";
			if(obj[i].isFinished=="true")
			{
				hexColor = "#4AAD52";
			}else
			{
			hexColor = "#BA1200";
			}
			
			var template = "<div class='card' data-projectId="+obj[i].Projectid+">"+
								"<div class='project-content'>"+
									"<p class='project-title'>"+
										obj[i].ProjectName+
									"</p>"+
									"<p class='project-leader'>"+
										obj[i].ProjectLeader+
									"<p/>"+
									"<p class='project-client'>"+
										obj[i].client+
									"<p/>"+
									"<p class='project-budget'>"+
										obj[i].Budget+
									"<p/>"+
									"</div>"+
									"<div class='status' style='background-color:"+hexColor+"'>"+
									"</div>"+
							"</div>"
							
			$("#example-table").append(template);
		}
		
		$(".card").click(function(){
			
			saveProjectSelection($(this).attr("data-projectId"))
		});
	}
});
}
return false;
};

function saveProjectSelection(projectId)
{
	var dataString = "ProjectId="+projectId
	$.ajax({
	type: "POST",
	url: "http://testing.unicoreonline.com/CreateSession.php",
	data: dataString,
	cache: false,
	success: function(html) {
	if(html == "session Created")
	{
	 window.location.href = "ViewTasks.html";
	}
	else alert("error");
	}
	});
};


window.onload = myFunction();
