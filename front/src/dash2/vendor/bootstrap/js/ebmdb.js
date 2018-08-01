$(document).ready(function() {

    console.log("ready!");
    
    $('input:checkbox').change(function() { 
        
        if ($(this).is(':checked')) {

            alert('checked'); 
        }
        if ($(this).is(':unchecked')) {

            alert('unchecked'); 
        }
   
    });
});
