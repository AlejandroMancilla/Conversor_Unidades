let Result = '';
let Conversion = 0;

const UnitsTime = ['sec', 'min', 'hr'];
const toSec = [1, 60, 3600];
const SecTo = [1, 0.016666666666666666, 0.0002777777777777778];

function Convertir(Num, Type1, Type2){
    let IndFrom = UnitsTime.indexOf(Type1);
    let IndTo = UnitsTime.indexOf(Type2);
    Conversion = Num * toSec[IndFrom] * SecTo[IndTo];
    if(Conversion % 1 == 0){
        Conversion = Conversion.toFixed(0)
    }else{
        Conversion = Conversion.toFixed(3)
    }
    Result = Num + ' ' + Type1 + ' = ' + Conversion + ' ' + Type2;
    return Result;
}

export {Convertir};