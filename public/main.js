$(document).on('ready', function(){
	var resultsScript = $('#results-template').html()
	$('#search-form').on('submit', function(){
		$.post('/search', {formData: $('#searchValue').val()}, function(res){
			console.log(res);
		})
		return false;
	})
})