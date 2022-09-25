$(document).ready(function(){
    $("#sign-up").validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            },
            sname:{
                required:true,
                minlength:4 
            }
        }
        

    })
})