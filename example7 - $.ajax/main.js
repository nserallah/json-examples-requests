/*global $, console*/

$(document).ready(function () {
    
  'use strict';

  $('#myButton').click(function () {
    $.ajax({
      url: "https://api.github.com/users/hadley/repos",
      dataType: "json",
      cache: false,
      success: function(data, status) {
        let content = "";
        for (let x in data) {
          console.log(data[x]);
          content += "<div>" + data[x].node_id + "</div>";
        }

        $('#show').html(content)
    
        console.log(status)

        if(status === 'success') {
          console.log(status);
          $('#status').html( "<div>" + "status: " + "is " + status + "</div>") 
        }
    
      }
  })
  
})



});