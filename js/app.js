var Cat = function() {
	this.count = ko.observable(0);
	this.name = ko.observable("Marcio");
	this.cats = ko.observableArray([
		{"Name":"Gato 1"},
		{"Name":"Gato 2"},
		{"Name":"Gato 3"},
		{"Name":"Gato 4"},
		{"Name":"Gato 5"}]);
	this.borns = ko.observableArray([
		{"name": "Marcio"},
		{"name": "Chiquim"},
		{"name": "Antoim"},
		{"name": "Pereclinho"},
		{"Name": "Gato"}
	]);
	console.log(this.borns()[0].name);
	console.log("Actual born:");
	this.actualBorn = ko.observable("");
	console.log(this.actualBorn());
	this.img = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80';
	this.stepsCounter = ko.observable(1);
	
	this.actualBornIndex = ko.observable(0);
//	this.incrementCounter = function(){
//		this.count(this.count()+1);
//		console.log(this.stepsCounter());
//		if(this.stepsCounter()==10){
//			this.actualBorn(this.borns()[this.actualBornIndex()].name);
//			console.log(this.actualBorn());
//			
//			if(this.borns().length -1 == this.actualBornIndex()){
//				console.log("Last born");
//				this.actualBornIndex(0);
//			}
//			else {
//				this.actualBornIndex(this.actualBornIndex()+1);
//			}
//		}
//		this.stepsCounter(this.stepsCounter()+1);
//	}
};
var ViewModel = function(){
	this.currentCat = ko.observable(new Cat());
	console.log(this.currentCat().count());
	this.incrementCounter = function(){
		this.currentCat().count(this.currentCat().count()+1);
		console.log(this.currentCat().count());
		if(this.currentCat().stepsCounter()==10){
			this.currentCat().actualBorn(this.currentCat().borns()[this.currentCat().actualBornIndex()].name);
			this.currentCat().stepsCounter(1);
			if(this.currentCat().borns().length -1 == this.currentCat().actualBornIndex()){
				this.currentCat().actualBornIndex(0);
			}
			else {
				this.currentCat().actualBornIndex(this.currentCat().actualBornIndex()+1);
			}
		}
		this.currentCat().stepsCounter(this.currentCat().stepsCounter()+1);
	}
};
ko.applyBindings(new ViewModel());
