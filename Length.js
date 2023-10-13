let Result = '';
let Conversion = 0;

const UnitsLen = ['m', 'km', 'mi', 'yd', 'cb'];
const toMeter = [1, 1000, 1609.34, 0.9144, 0.445];
const MeterTo = [1, 0.001, 0.000621371, 1.09361, 2.2471];

function Convertir(Num, Type1, Type2){
    let IndFrom = UnitsLen.indexOf(Type1);
    let IndTo = UnitsLen.indexOf(Type2);
    Conversion = Num*toMeter[IndFrom]*MeterTo[IndTo];
    if(Conversion % 1 == 0){
        Conversion = Conversion.toFixed(0)
    }else{
        Conversion = Conversion.toFixed(3)
    }
    Result = Num + ' ' + Type1 + ' = ' + Conversion + ' ' + Type2;
    return Result;
}

export {Convertir};