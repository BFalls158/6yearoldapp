app.controller('firstController', function($scope){
	$scope.currentWords = [];

	$scope.subjects = [
	"man", "mountain", "state", "ocean", "daddy", "mommy",
	"country", "building", "cat", "dog", "Walt Disney", "barney", "love",
	"happy", "plant", "bike", "ice cream", "face", "clock",
	"mouth", "dad", "mom", "sister", "brother", "aunt", "uncle", "grandma",
	"grandpa", "cousin"
	];

	$scope.adjectives = [
	"good", "new", "first", "last", "long",
	"great", "little", "own", "other", "old",
	"right", "big", "high", "different", "small",
	"large", "next", "early", "young", "important",
	"few", "public", "bad", "same", "able"
	];

	$scope.verbs = [
	"is", "are", "was", "were", "sound", "feels", "seems",
	"tastes", "smell"
	];

	$scope.fancy = [
	"underline", "pink","circle",
	 "red", "green", "blue",
	"bubble", "shadow", "large", "small",
	"dotted"
	];

	$scope.nextWord = 0;

	$scope.addWord = function(x, b) {
		if (b) {
			for(var i = 0; i < x; i++) {
				if($scope.nextWord === 0){
					$scope.currentWords.push({text: $scope.subjects[Math.floor(Math.random()*$scope.subjects.length)], isFancy: true});
					$scope.nextWord++;
				} else if ($scope.nextWord === 1) {
					$scope.currentWords.push({text: $scope.verbs[Math.floor(Math.random()*$scope.verbs.length)], isFancy: true});
					$scope.nextWord++;
				} else {
					$scope.currentWords.push({text: $scope.adjectives[Math.floor(Math.random()*$scope.adjectives.length)], isFancy: true});
					$scope.nextWord = 0;
				};
			};
		} else {
			for(var i = 0; i < x; i++) {
				if ($scope.nextWord === 0){
					$scope.currentWords.push({text: $scope.subjects[Math.floor(Math.random()*$scope.subjects.length)], isFancy: false});
					$scope.nextWord++;
				} else if ($scope.nextWord === 1){
					$scope.currentWords.push({text: $scope.verbs[Math.floor(Math.random()*$scope.verbs.length)], isFancy: false});
					$scope.nextWord++;
				} else {
					$scope.currentWords.push({text: $scope.adjectives[Math.floor(Math.random()*$scope.adjectives.length)], isFancy: false});
					$scope.nextWord === 0;
				};
			};
		};
	};

	$scope.getRandom = function(){
		return $scope.fancy[Math.floor(Math.random()*$scope.fancy.length)];
	};
});