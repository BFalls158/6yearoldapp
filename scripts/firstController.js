app.controller('firstController', function($scope){
	$scope.currentWords = [];

	var subjects = [
	"man", "mountain", "state", "ocean", "daddy", "mommy",
	"country", "building", "cat", "dog", "Walt Disney", "barney", "love",
	"happy", "plant", "bike", "ice cream", "face", "clock",
	"mouth", "dad", "mom", "sister", "brother", "aunt", "uncle", "grandma",
	"grandpa", "cousin"
	];

	var adjectives = [
	"good", "new", "first", "last", "long",
	"great", "little", "own", "other", "old",
	"right", "big", "high", "different", "small",
	"large", "next", "early", "young", "important",
	"few", "public", "bad", "same", "able"
	];

	var verbs = [
	"is", "are", "was", "were", "sound", "feels", "seems",
	"tastes", "smell"
	];

	var fancy = [
	"underline", "pink","circle",
	 "red", "green", "blue",
	"bubble", "shadow", "large", "small",
	"dotted"
	];

	var = nextWord = 0;

	$scope.addWord = function(x, b) {
		if (b) {
			for(var i = 0; i < x; i++) {
				if(nextWord === 0){
					$scope.currentWords.push({text: subjects[Math.floor(Math.random()*subjects.length)], isFancy: $scope.getRandom()});					nextWord++;
				} else if (nextWord === 1) {
					$scope.currentWords.push({text: verbs[Math.floor(Math.random()*verbs.length)], isFancy: $scope.getRandom()});
					nextWord++;
				} else if (nextWord === 2){
					$scope.currentWords.push({text: adjectives[Math.floor(Math.random()*adjectives.length)], isFancy: $scope.getRandom()});
					nextWord = 0;
				};
			};
		} else {
			for(var i = 0; i < x; i++) {
				if (nextWord === 0){
					$scope.currentWords.push({text: subjects[Math.floor(Math.random()*subjects.length)], isFancy: "none"});
					nextWord++;
				} else if (nextWord === 1){
					$scope.currentWords.push({text: verbs[Math.floor(Math.random()*verbs.length)], isFancy: "none"});
					nextWord++;
				} else if (nextWord === 2){
					$scope.currentWords.push({text: adjectives[Math.floor(Math.random()*adjectives.length)], isFancy: "none"});
					nextWord === 0;
				};
			};
		};
	};

	$scope.getRandom = function(){
		return fancy[Math.floor(Math.random()*fancy.length)];
	};
});