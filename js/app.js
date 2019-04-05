var ViewModel = function() {
	this.count = ko.observable(0);
	this.name = ko.observable("Marcio");
	this.img = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80';
	this.incrementCounter = function(){
		this.count(this.count()+1);
	}
};

ko.applyBindings(new ViewModel());
