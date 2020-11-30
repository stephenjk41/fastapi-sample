$("button").click(function(){
    $.get("/test", function(data, status){
     console.log(data)
    });
  });