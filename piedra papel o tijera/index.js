function inicioDelJuego(){
    const options_of_games = ['Piedra', 'Papel', 'Tijera'];
    const option = Math.round(Math.random() * 2)

    const user_options = prompt('escribe una opcion');
    const computer_options = options_of_games[option].toLowerCase();

    if(user_options === computer_options){
        console.log('empate');
 
    }

    else if (user_options === 'piedra'){
        if(computer_options === 'tijera'){
            console.log('la piedra le gana a la tijera');
            console.log('user gano');
        } else{
            console.log('el papel le gana a la piedra');
            console.log('computer gano')
        }
    }
    else if (user_options === 'tijera'){
        if(computer_options === 'papel'){
            console.log('La tijera le gana a papel');
            console.log('user gano');
        } else{
            console.log('La piedra le gana a tijera');
            console.log('computer gano')
        }
    }
    else if (user_options === 'papel'){
        if(computer_options === 'piedra'){
            console.log('El papel le gana a la piedra');
            console.log('user gano');
        } else{
            console.log('La tijera le gana al papel');
            console.log('computer gano')
        }
    }
}