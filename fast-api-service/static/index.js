$("button").click(function(){
    $.get("/test", function(data, status){
      alert("Data: " + data + "\nStatus: " + status);
    });
  });