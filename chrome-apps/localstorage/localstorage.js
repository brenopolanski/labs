$(function(){
	if (localStorage.getItem('data'))
		$('p').html(localStorage.getItem('data'));

	$('#btn').on('click', function(){
		localStorage.setItem('data', 'Hello Chrome Apps');
	});
});