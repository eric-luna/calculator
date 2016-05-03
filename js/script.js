$(document).ready(function(){
	var number=0;
	var total=0;
	var things=$('.stuff').text();
	var stuff=[];

	$('.clear').click(function(){
		$('.stuff').empty();
	})
	// Numbers
	$('.zero').click(function(){
		$('.stuff').append(0);
		stuff.push(0);
	})
	$('.one').click(function(){
		$('.stuff').append(1);
	})
	$('.two').click(function(){
		$('.stuff').append(2);
	})
	$('.three').click(function(){
		$('.stuff').append(3);
	})
	$('.four').click(function(){
		$('.stuff').append(4);
	})
	$('.five').click(function(){
		$('.stuff').append(5);
	})
	$('.six').click(function(){
		$('.stuff').append(6);
	})
	$('.seven').click(function(){
		$('.stuff').append(7);
	})
	$('.eight').click(function(){
		$('.stuff').append(8);
	})
	$('.nine').click(function(){
		$('.stuff').append(9);
	})
	// Operations
	$('.plus').click(function(){
		things=Number($('.stuff').text());
	})
	$('.subtract').click(function(){
		$('.stuff').append("-");
	})
	$('.multiply').click(function(){
		$('.stuff').append("*");
	})
	$('.dot').click(function(){
		$('.stuff').append(".");
	})
	$('.equal').click(function(){
		$('.stuff').empty();
		$('.stuff').append(total);
		alert(stuff);
	})
	$('.division').click(function(){
		$('.stuff').append("/");
	})

});