$('#button').click(function(){

	$.ajax({
		url: "/Inscription",
		type : "POST",
		data: {
			username : $('#prenom').val(),
			mdp : $('#password').val(),
			prenom : $('#name').val(),
			email : $('#email').val(),
			date : $('#date').val(),
			gender: $('#gender'),

		}

	}).done(function (res) {
		if (typeof res.redirect == 'string'){
			// window.location = res.redirect;
			alert("Vous êtes identifié!");
		}else{
			alert("Vous n'êtes pas identifié!");
		}
	});

});
