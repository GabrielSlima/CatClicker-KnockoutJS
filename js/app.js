var Cat = function(name, catId, img) {
	
	this.catId = ko.observable(catId);

	this.count = ko.observable(0);
	
	this.name = ko.observable(name);
	
	this.borns = ko.observableArray([
		{"name": "Marcio"},
		{"name": "Chiquim"},
		{"name": "Antoim"},
		{"name": "Pereclinho"},
		{"Name": "Gato"}
	]);
		
	this.actualBorn = ko.observable("");
		
	this.img = ko.observable(img);
	
	this.stepsCounter = ko.observable(1);
	
	this.actualBornIndex = ko.observable(0);

};

var ViewModel = function(){
	
	this.texxt = ko.observable('asdas');
	this.allCats = ko.observableArray([
		{'Name': 'Marcio','id': 1, 'img': 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'},
		{'Name': 'Jemima', 'id': 2, 'img': 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'},
		{'Name': 'Jota', 'id': 3, 'img': 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'},
		{'Name': 'Davi', 'id': 4, 'img': 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'},
		{'Name': 'Josué', 'id': 5, 'img': 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'}
	]);

	var gatosObjetos = ko.observable([]);
	
	for(var i = 0; i < this.allCats().length; i++) {
		gatosObjetos().push(ko.observable(new Cat(this.allCats()[i].Name, this.allCats()[i].id,this.allCats()[i].img))); 	
	}
	
	var teste = ko.observable(null);

	console.log(teste());
	if(teste() == null) {
		console.log('fois');
		teste(new Cat('Null', '1'));
	}
	
	console.log(teste());
	
	console.log('sss');
	
	this.currentCat = ko.observable(new Cat('Nome', 'ID', 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'));
	this.currentCat(new Cat('novo ob', 'ID', 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'));
	// console.log(this.currentCat().img());

	this.incrementCounter = function(){
	
		this.currentCat().count(this.currentCat().count()+1);
		
		console.log(this.currentCat().count());
		
		if(this.currentCat().stepsCounter() == 10){
		
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
	};

	this.getCurrentCat = function(object) {
	
		console.log(object());
		
		console.log('This object on allCats');
		
		console.log(gatosObjetos()[object()]().name());
		
		currentCat = gatosObjetos()[object()];
		
		console.log(currentCat().name());

		this.texxt(gatosObjetos()[object()].name, gatosObjetos()[object()].id, gatosObjetos()[object()].img);
	
	};
	console.log('opa');
	console.log(this.currentCat());
};

ko.applyBindings(new ViewModel());
