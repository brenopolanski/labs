var APP = (function() {
	'use strict';

	var db = new PouchDB('notebook');

	var APP = {
		init: function() {
			APP.eventBtn();
		},

		addContact: function() {
			var _name = document.querySelector('#name').value,
				_email = document.querySelector('#email').value,
				_phone = document.querySelector('#phone').value;

			var contact = {
				_id: _email,
				name: _name,
				phone: _phone
			};

			db.put(contact, function(err, res) {
				if(!err) {
					alert('Contact successfully registered!');
					document.location.reload();
				}
			});
		},

		eventBtn: function() {
			var btn = document.querySelector('#btn-save');

			btn.addEventListener('click', this.addContact, false);
		}
	};

	return APP;

}());
