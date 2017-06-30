function pressEffect(e){
	let b = document.querySelector(`#${e}`);
	b.classList.add("button-hover");
	setTimeout((_b =b) =>{_b.classList.remove("button-hover")},150);
}

var keys={
	"a" : ["clap.wav","b0"],
	"s" : ["hihat.wav","b1"],
	"d" : ["kick.wav","b2"],
	"f" : ["openhat.wav","b3"],
	"g" : ["boom.wav","b4"],
	"h" : ["ride.wav","b5"],
	"j" : ["snare.wav","b6"],
	"k" : ["tom.wav","b7"],
	"l" : ["tink.wav","b8"],
}

window.addEventListener("keypress", function makeSound(_key ){
	if(keys[_key.key] != undefined){
		let track = `sounds/${keys[_key.key][0]}`;
		var audio = new Audio(track);
		audio.play();
		pressEffect(keys[_key.key][1]);
	}
} );
