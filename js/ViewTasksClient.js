function myFunction() {
getProgress();
var ProjectName = "Proj";

// Returns successful data submission message when the entered information is stored in database.
var dataString = 'ProjectName=' + ProjectName; 


if (ProjectName == '') {
alert("Error");
} 
else 
{
// AJAX code to submit form.
	$.ajax({
	type: "POST",
	url: "http://testing.unicoreonline.com/getTasksForProject.php",
	cache: false,
	success: function(html) {
		var obj = JSON.parse(html);
		var template = "";
		var hexColor = "";
		
		for (var i = 0; i<obj.length; i++)
		{
			if(obj[i].isFinished=="true")
			{
				hexColor = "#4AAD52";
			}else
			{
				hexColor = "#BA1200";
			}
			template = "<div class='card' data-taskId="+obj[i].Taskid+">"+
						   "<div class='task-content'>"+
								"<p class='task-name'>"+obj[i].TaskName+"</p>"+
								"<p class='start-time'>"+obj[i].StartTime+"</p>"+
								"<p class='end-time'>"+obj[i].EndTime+"</p>"+
							"</div>"+
						"<div class='status' style='background-color:"+hexColor+"'/>"+
						"</div>"
						
			$("#example-table").append(template);
		}
	}
	});
}
return false;
}

function saveTaskId(taskId)
{
	var dataString = "TaskId="+taskId
	$.ajax({
	type: "POST",
	url: "http://testing.unicoreonline.com/createSessionTask.php",
	data: dataString,
	cache: false,
	success: function(html) {
	if(html == "session Created")
	{
	 window.location.href = "CompleteTask.html";
	}
	else alert("error");
	}
	});
}

function getProgress() {
//alert("hi");
var ProjectName = "proj";

// Returns successful data submission message when the entered information is stored in database.
var dataString = 'ProjectName=' + ProjectName;
//alert("ajax time");
// AJAX code to submit form.
$.ajax({
type: "POST",
url: "http://testing.unicoreonline.com/getProjectProgress.php",
datatype: "json",
data: dataString,
cache: false,
success: function(html) {
 $this = $('span');
 $this.css('color','#3498db');
         $this.css('text-align','center');
         $this.css('border','1px solid #ededed');
		 $this.width(html);
}
});

return false;
}


window.onload = myFunction();