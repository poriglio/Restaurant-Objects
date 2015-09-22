angular.module('RestaurantModule', [])

angular.module('RestaurantModule').controller('restaurantController', ['$scope', function($scope) {

//==============PART 1=============//
// var FoodItem = function(name, calories, vegan, glutenFree, citrusFree) {
// 	this.name = name;
// 	this.calories = calories;
// 	this.vegan = vegan;
// 	this.glutenFree = glutenFree;
// 	this.citrusFree	= citrusFree;

// }

// FoodItem.prototype.stringify = function() {
// 	return this.name + ' has: \n' +
// 		    'Calories: ' + this.calories + 
// 		   	'\nVegan: ' + this.vegan + 
// 		   	'\nGluten Free: ' + this.glutenFree +
// 		   	'\nCitrus Free: ' + this.citrusFree
// }

// var cajunLasagna = new FoodItem('Cajun Lasagna', 900, false, false, true)

// var filetEnBleu = new FoodItem('Filet en Bleu', 1200, false, true, true)

// var breakfastBurrito = new FoodItem('Breakfast Burrito', 600, false, true, true)

// console.log(cajunLasagna.stringify())
// console.log(filetEnBleu.stringify())
// console.log(breakfastBurrito.stringify())

//==============PART 2=============//

var menuItem = function (type,name,description,price,ingredients){
	this.type        = type
	this.name        = name
	this.description = description
	this.price       = price
	this.ingredients = ingredients
}

var Order = function ( plates ) {
	this.plates = plates
}

var Menu = function ( plates ) {
	this.plates = plates
}

var Restaurant = function (name, description, menu){
	this.name        = name 
	this.description = description
	this.menu        = menu
}

var Customer = function(preference){
	this.preference = preference
}

menuItem.prototype.stringify = function(){
	var ingredients = "";
	for (var x = 0; x < this.ingredients.length; x++){
		if(x === this.ingredients.length -1 ){
			ingredients += "and " + this.ingredients[x]
		}
		else{
		ingredients += this.ingredients[x] + ", ";
		}
	}
	return this.type + ": " + this.name + "\n" + this.description + "\nPrice: " + this.price + "\nIngredients: " + ingredients
}

// var newItem = new menuItem ("thing","thing",100,["thing","thing","thing"])

// console.log(newItem.stringify())

Order.prototype.stringify = function(){
	var plates = "";
	for (var x = 0; x < this.plates.length; x++){
	if(x === this.plates.length -1 ){
			plates += "and " + this.plates[x]
		}
		else{
		plates += this.plates[x] + ", ";
		}
	}
	return "You ordered " + plates
}

// var myOrder = new Order (["pepperoni pizza","cajun lasagna","Oreo cookie sundae","dirt and worms cup","three beers","Cabernet"]);

// console.log(myOrder.stringify());

Menu.prototype.stringify = function(){
	var output = "Menu"
	for(var x = 0; x < this.plates.length; x++){
		output += "\n  " + this.plates[x]
	}
	return output
}

// var myMenu = new Menu (["lasagna","cheese","cheesecake","cheeseballz","cheesesundae"])

// console.log(myMenu.stringify())

Restaurant.prototype.stringify = function(){
	var menu = "Menu"
	for(var x = 0; x < this.menu.length; x++){
		menu += "\n  " + this.menu[x]
	}
	return this.name + "\n" + this.description + "\n" + menu
}

// var cheesetopia = new Restaurant ("Cheesetopia","Cheese, cheese, cheese!!!!!!!!!!",["lasagna","cheese","cheesecake","cheeseballz","cheesesundae"])

// console.log(cheesetopia.stringify())

Customer.prototype.stringify = function () {
	return "This customer's dietary needs are: " + this.preference + "."
}

var paula = new Customer ("gluten free")

console.log(paula.stringify())

}])










