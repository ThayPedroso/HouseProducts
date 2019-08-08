app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'This Month\'s Best Sales'; 
  $scope.promo = 'Home Style - The most popular decorative objects this month.';
  $scope.products = [
  	{ 
    	name: 'Fox', 
			price: 19, 
			discount: 40,
    	description: 'Decorative Winter Boho sand 9 cm', 
    	cover: 'img/fox.jpg',
      likes: 0,
      dislikes: 0
  	}, 
  	{ 
    	name: 'Elefant', 
			price: 8, 
			discount: 10,
    	description: 'Decorative Camp Apo 16 cm', 
    	cover: 'img/elefant.jpg',
      likes: 0,
      dislikes: 0
  	},
    { 
    	name: 'Giraffe', 
			price: 20, 
			discount: 5,
    	description: 'Decorative Explorer Montauk 35 cm', 
    	cover: 'img/giraffe.jpg',
      likes: 0,
      dislikes: 0
  	},
    { 
    	name: 'Horse', 
			price: 8,
			discount: 5, 
    	description: 'Lounge Akiiki 25 cm', 
    	cover: 'img/horse.jpg',
      likes: 0,
      dislikes: 0
		},
		{
			name: 'Turtle', 
			price: 10,
			discount: 12,
			description: 'Decorative Camp Bel 9 cm',
			cover: 'img/turtle.jpg',
      likes: 0,
      dislikes: 0
		},
		{
			name: 'Donkey', 
			price: 12,
			discount: 5,
			description: 'Decorative Beach & Country 13 cm',
			cover: 'img/donkey.jpg',
      likes: 0,
      dislikes: 0
		}
  ]
  $scope.plusOne = function(index) {
    $scope.products[index].likes += 1;
  }
  $scope.minusOne = function(index) {
    $scope.products[index].dislikes += 1;
  }
}]);
