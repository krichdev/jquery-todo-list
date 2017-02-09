$(document).ready(function(){

	$('button').click(function(){
		var todoItem = $('#userInput').val();
		var removeStr = todoItem.replace("tomorrow", " ");
		if (todoItem.includes('tomorrow')){
			$("#tomorrowList").append("<li id='task' class='list-group-item'>"+removeStr+"<span class='inactive glyphicon glyphicon-remove-circle'>");
		} else {
			$("#userlist").append("<li id='task' class='list-group-item'>"+todoItem+"<span class='inactive glyphicon glyphicon-remove-circle'>");
		}
		resetForm();
		removeToDo();
	})
	//Reset the input value and return the focus
	function resetForm(){
		$('#userInput').val("").focus();
	}
	// Remove individual task items
	function removeToDo(){
		$(".inactive").click(function(){
			$(this).parent().remove();
		})
	}
	// Allows the tasks to be sortable + droppable!
	$(".sortable").sortable();

});

