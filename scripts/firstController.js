app.controller('firstController', function($scope){
	$scope.currentWords = [];

	$scope.words = [
	"bad","easy","lol",
	"code","hate","ice",
	"fire","icecream","hangman",
	"destroy","computer","book",
	"dictionary","technology",
	"power","thunder","controller",
	"dexterity","keyboard","thunderous",
	"blizzard","hazardous","algorithm",
	"destruction","operation","assignment",
	"despicable", "play", "happy",
	"sad"
	];

	$scope.fancy = [
	"underline", "pink","circle"
	, "red", "green", "blue",
	"bubble", "shadow", "large", "small",
	"dotted"
	];

	$scope.addWord = function(x, b) {
		if (b) {
			for(var i = 0; i < x; i++) {
				$scope.currentWords.push({text: $scope.words[Math.floor(Math.random()*$scope.words.length)], isFancy: true});
			};
		} else {
			for(var i = 0; i < x; i++) {
				$scope.currentWords.push({text: $scope.words[Math.floor(Math.random()*$scope.words.length)], isFancy: false});
			};
		};
	};

	$scope.getRandom = function(){
		return $scope.fancy[Math.floor(Math.random()*$scope.fancy.length)];
	};
});