$(document).ready(function(){
   			
		
		
        $("dd").hide();
		//Questions are clickable with styles 
        $("dt") .addClass('question') .click(function() {
          $(this).next().toggle();
        });
		//Show all definition descrptions
        $("#show").click(function () {
          $("dd").toggle(); 
        });
        //Show all definition descriptions
        $("#show_dd").click(function () {  
          $("dd").show(); 
        });
        //Show all definition descriptions
        $("#hide_dd").click(function () {  
          $("dd").hide(); 
        });
		
	 });
	