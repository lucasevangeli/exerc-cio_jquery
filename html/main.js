

$(document).ready(function() {
    
    
    $("#addTaskButton").click(function() {
        
      
      const taskInputValue = $("#taskInput").val();
      
      if (taskInputValue.trim() !== "") {
        
        $("#taskList").append("<li>" + taskInputValue + "</li>");

        
        $("#taskInput").val("");
      }
    });
});
    $(document).ready(function() {
        $('#taskList').click(function() {
        $(this).css('text-decoration', 'line-through');
        });
});