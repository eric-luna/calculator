$(document).ready(function(){
    var testNumLength = function(number) {
        if (number.length > 17) {
            display.text(number.substr(number.length-18,17));
            // if (number.length > 15) {
            //     number = "";
            //     display.text("Err");
            // }
        } 
    };
	$('.clear').click(function(){
		$('#display').empty();
	});
	
	// Numbers
	$("#zero").click(function(){
		$('#display').text($('#display').text() + 0);
    });
	$("#one").click(function(){
		$('#display').text($('#display').text() + 1);
    });
    $("#two").click(function(){
		$('#display').text($('#display').text() + 2);
    });
    $("#three").click(function(){
		$('#display').text($('#display').text() + 3);
    });
    $("#four").click(function(){
		$('#display').text($('#display').text() + 4);
    });
    $("#five").click(function(){
		$('#display').text($('#display').text() + 5);
    });
    $("#six").click(function(){
		$('#display').text($('#display').text() + 6);
    });
    $("#seven").click(function(){
		$('#display').text($('#display').text() + 7);
    });
    $("#eight").click(function(){
		$('#display').text($('#display').text() + 8);
    });
    $("#nine").click(function(){
		$('#display').text($('#display').text() + 9);
    });

	// Operations
	$('#add').click(function() {
  		$('#display').text($('#display').text() + '+');
	});
	$('#subtract').click(function() {
  		$('#display').text($('#display').text() + '-');
	});
	$('#multiply').click(function() {
  		$('#display').text($('#display').text() + '*');
	});
	$('#divide').click(function() {
  		$('#display').text($('#display').text() + '/');
	});
	$('#decimal').click(function() {
  		$('#display').text($('#display').text() + '.');
	});
	$('#equal').click(function() {
  		$('#display').text(eval($('#display').text()));
	});
});