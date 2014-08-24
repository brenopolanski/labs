var APP = (function() {
	'use strict';

	var db = new PouchDB('objects');

	var APP = {
		init: function() {
			APP.eventBtn();
		},

		addContact: function() {
			var _date = String(new Date().getTime()),
				_people = { name: 'Breno Polanski', age: '25' },
				_phone = [];

			var phone1 = { number: '1111-1111' };
			var phone2 = { number: '2222-2222' };

			_phone.push(phone1);
			_phone.push(phone2);

			var contact = {
				_id: _date,
				people: _people,
				phone: _phone
			};

			db.put(contact, function(err, res) {
				if(!err) {
					alert('Ok!');
					document.location.reload();
				}
				else {
					console.log(err.message);
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
