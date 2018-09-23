function Validate() {	
	this.invalid = function(entity) {
		$(entity).toggleClass('err', true);
		$(entity).siblings().toggleClass('err-msg', true);
	},
	this.valid = function(entity) {
		$(entity).toggleClass('err', false);
		$(entity).siblings().toggleClass('err-msg', false);
	},
	this.isEmpty = function(value) {
		return value.length == 0;
	},
	this.validName = function(value) {
		return value.match(/^[a-zA-Z ]+$/);
	},
	this.validNumber = function(value, maxLimit = 1000, minLimit = 1) {
		var regex = new RegExp("^[0-9]{"+minLimit+","+maxLimit+"}");
		return value.match(regex);
	},
	this.validEmail = function(value) {
		var regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-_]+\.[a-z]{2,7}/;
		return value.match(regex);
	},
	this.validDate = function(value) {
		return value.trim().length > 0;
	},
	this.validFile = function(value) {
		return value.match(/\.pdf$/);
	}
}