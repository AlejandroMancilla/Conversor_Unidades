let Result = '';
let Conversion = 0;

const UnitsMass = ['g', 'lb', '@', 'kg', 'oz'];
const toG = [1, 453.59, 11339.81, 1000, 28.35];
const GTo = [1, 0.0022, 0.000088, 0.001, 0.0352];

function Convertir(Num, Type1, Type2){
    let IndFrom = UnitsMass.indexOf(Type1);
    let IndTo = UnitsMass.indexOf(Type2);
    Conversion = Num * toG[IndFrom] * GTo[IndTo];
    if(Conversion % 1 == 0){
        Conversion = Conversion.toFixed(0)
    }else{
        Conversion = Conversion.toFixed(3)
    }
    Result = Num + ' ' + Type1 + ' = ' + Conversion + ' ' + Type2;
    return Result;
}

export {Convertir};