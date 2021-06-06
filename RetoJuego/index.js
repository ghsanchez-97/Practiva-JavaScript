
function GameOver(){
    var choice = 3;

    if(choice === 1){
        console.log("Tijera gana a Papel");
    }else if(choice === 2){
        console.log("Piedra gana a Tijera");
    }else if(choice === 3){
        console.log("Papel gana a Piedra")
    }else{
        console.log("Empate");
    }
}
console.log(GameOver());