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
	var self = this;
	self.texxt = ko.observable();
	self.allCats = ko.observableArray([
		{'Name': 'Marcio','id': 1, 'img': 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'},
		{'Name': 'Jemima', 'id': 2, 'img': 'https://wallpapercave.com/wp/5zDmqug.jpg'},
		{'Name': 'Jota', 'id': 3, 'img': 'http://images.unsplash.com/photo-1500259571355-332da5cb07aa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'},
		{'Name': 'Davi', 'id': 4, 'img': 'https://i.pinimg.com/originals/10/26/2c/10262c0b978632f219819445b11939c0.jpg'},
		{'Name': 'Josué', 'id': 5, 'img': 'https://i.ytimg.com/vi/69Zo05WeIF0/maxresdefault.jpg'}
	]);

	var gatosObjetos = ko.observable([]);
	
	for(var i = 0; i < self.allCats().length; i++) {
		gatosObjetos().push(ko.observable(new Cat(self.allCats()[i].Name, self.allCats()[i].id,self.allCats()[i].img))); 	
	}
	
	var teste = ko.observable(null);

	console.log(teste());
	if(teste() == null) {
		console.log('fois');
		teste(new Cat('Null', '1'));
	}
	
	console.log(teste());
	
	console.log('sss');
	
	self.currentCat = ko.observable(new Cat('Nome', 'ID', 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'));
	self.currentCat(new Cat('novo ob', 'ID', 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'));
	console.log('Falhei');
	console.log(self.currentCat());

	self.incrementCounter = function(){
	
		self.currentCat().count(self.currentCat().count()+1);
		
		console.log(self.currentCat().count());
		
		if(self.currentCat().stepsCounter() == 10){
		
			self.currentCat().actualBorn(self.currentCat().borns()[self.currentCat().actualBornIndex()].name);
			
			self.currentCat().stepsCounter(1);
			
			if(self.currentCat().borns().length -1 == self.currentCat().actualBornIndex()){
				self.currentCat().actualBornIndex(0);
			}
			else {
				self.currentCat().actualBornIndex(self.currentCat().actualBornIndex()+1);
			}
		}
		self.currentCat().stepsCounter(self.currentCat().stepsCounter()+1);		
	};

	self.getCurrentCat = function(object) {
	
		console.log(object());
		
		console.log('self object on allCats');
		
		console.log(gatosObjetos()[object()]().name());
		
		currentCat = gatosObjetos()[object()];
		
		console.log(currentCat());

		self.currentCat(currentCat());
	
	};
	console.log('opa');
	console.log(self.currentCat());
};

ko.applyBindings(new ViewModel());
