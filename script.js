diced=()=>{
    const player1= Math.floor(Math.random()*6)+1;
    const player1Dice=`./images/dice${player1}.png`;
    document.getElementById('check1').setAttribute('src',player1Dice)

    const player2= Math.floor(Math.random()*6)+1;
    const player2Dice=`./images/dice${player2}.png`;
    document.getElementById('check2').setAttribute('src',player2Dice)

    if(player1>player2) {
        document.querySelector('h1').innerHTML="Player 1 Won!"
    }

    else if(player2>player1){
        document.querySelector('h1').innerHTML="Player 2 Won!"
    }


    else{
        document.querySelector('h1').innerHTML="DRAW"
    }
}





