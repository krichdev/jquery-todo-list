$(document).ready(function(){

	$('button').click(function(){
		var todoItem = $('#userInput').val();
		$("#userlist").append("<li class='list-group-item'>"+todoItem+"<span class='inactive glyphicon glyphicon-remove-circle'>");
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
	// Allows the tasks to be sortable
	$(".sortable").sortable();
});

