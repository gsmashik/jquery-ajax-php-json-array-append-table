$(document).ready(function(){
    var gname = $("#name").val();
    $.ajax({
        url: 'ajaxfile.php',
        type: 'POST',
        data:{'id':'ashik',},

        success: function(response){
            var len = response.length;
            for(var i=0; i<len; i++){
                var id = response[i].id;
                var username = response[i].username;
                var name = response[i].name;
                var email = response[i].email;

                var tr_str = "<tr>" +
                    "<td align='center'>" + (i+1) + "</td>" +
                    "<td align='center'>" + username + "</td>" +
                    "<td align='center'>" + name + "</td>" +
                    "<td align='center'>" + email + "</td>" +
                    "</tr>";

                $("#userTable tbody").append(tr_str);
            }

        }
    });
});