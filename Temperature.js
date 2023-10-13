let Result = '';
let Conversion = 0;

function Convertir(Num, Type1, Type2){
    if(Type1 == Type2){
        Result = Num + ' ' + Type1 + ' = ' + Num+ ' ' + Type2
    }else{
        let Celsius = 0
        if(Type1 == 'K'){
            Celsius = Num - 273.15;
        }else if(Type1 == '°F'){
            Celsius = (Num -32) * 5/9;
        }else if(Type1 == '°R'){
            Celsius = (Num - 491.67) * 5/9
        }else{
            Celsius = Num;
        }

        switch(Type2){
            case 'K':
                Conversion = Celsius +273.15
                break          
            case '°F':
                Conversion = (Celsius * 9/5) + 32
                break
            case '°R':
                Conversion = (Celsius * 9/5) + 491.67
                break
            case '°C':
                Conversion = Celsius
                break
        }
        if(Conversion % 1 == 0){
            Conversion = Conversion.toFixed(0)
        }else{
            Conversion = Conversion.toFixed(3)
        }
        Result = Num + ' ' + Type1 + ' = ' + Conversion + ' ' + Type2
    }
    return Result
}

export {Convertir};