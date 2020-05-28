for (var i =0; i<document.querySelectorAll(".drum").length;i++) {

	document.querySelectorAll(".drum")[i].addEventListener("click",function() {

		var buttonInnerHtml = this.innerHTML;

		makeSound(buttonInnerHtml);

		buttonAnimation(buttonInnerHtml);

		});

}

	document.addEventListener("keypress", function(event) {

		makeSound(event.key);

		buttonAnimation(event.key);


	});


	function makeSound(key) {

	switch (key) {
			case "w":
				var First = new Audio ("sounds/Filhaal.mp3");
				First.play();
				break;
				
			case "a":
				var Second = new Audio ("sounds/Krishna.mp3");
				Second.play();
				break;

			case "s":
				var Third = new Audio ("sounds/let.mp3");
				Third.play();
				break;

			case "d":
				var Fourth = new Audio ("sounds/Radha.mp3");
				Fourth.play();
				break;

			case "j":
				var Fifth = new Audio ("sounds/Shape.mp3");
				Fifth.play();
				break;

			case "k":
				var Sixth = new Audio ("sounds/Star.mp3");
				Sixth.play();
				break;

			case "l":
				var Seventh = new Audio ("sounds/L.mp3");
				Seventh.play();
				break;

			default: console.log(buttonInnerHtml);
	
		}


	}

	function buttonAnimation(currentKey) {

		var activeButton= document.querySelector("."+ currentKey);

		activeButton.classList.add("pressed");

		setTimeout(function(){
			activeButton.classList.remove("pressed");
		},100);

	}
