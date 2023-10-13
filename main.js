import { Convertir as ConvertTem } from "./Temperature.js";
import { Convertir as ConvertTime } from "./Time.js";
import { Convertir as ConvertMass } from "./Mass.js";
import { Convertir as ConvertLen } from "./Length.js";

//Get Buttons
const CloseList = document.getElementById('CloseSideBar');
const BtnTemperature = document.getElementById('TempConverter');
const BtnLength = document.getElementById('LenConverter');
const BtnMass = document.getElementById('MassConverter');
const BtnTime = document.getElementById('TimeConverter');

//Get Inputs
const sltFrom = document.getElementById('ListFrom');
sltFrom.addEventListener('change', Convert)
const sltTo = document.getElementById('ListTo');
sltTo.addEventListener('change', Convert)
const inpFrom = document.getElementById('NumberFrom');
inpFrom.addEventListener('keyup', Convert)
const Result = document.getElementById('Result');
const ListSide = document.getElementById('sidebar');
const NameConvert = document.getElementById('NameList');

const UnitsTem = ['Choose...', 'K', '°C', '°R', '°F'];
const UnitsTem2 = ['', 'Kelvin', 'Celsius Degrees', 'Rankine', 'Farenheit Degrees'];
const UnitsLen = ['Choose...', 'm', 'km', 'mi', 'yd', 'cb'];
const UnitsLen2 = ['', 'Meter', 'Kilometer', 'Miles', 'Yards', 'Cubits'];
const UnitsTime = ['Choose...', 'sec', 'min', 'hr'];
const UnitsTime2 = ['', 'Seconds', 'Minutes', 'Hours'];
const UnitsMass = ['Choose...', 'g', 'lb', '@', 'kg', 'oz'];
const UnitsMass2 = ['', 'Grams', 'Pounds', 'Arrobas', 'Kilograms', 'Ounce'];
let Mood = 0;

CloseList.addEventListener('click', function(){
    ListSide.classList = '';
  })

BtnTemperature.addEventListener('click', function(){
  NameConvert.innerHTML = 'Temperature Converter'
  Result.innerHTML = '--'
  inpFrom.value = ''
  Mood = 1;
  sltFrom.innerHTML = '';
  sltTo.innerHTML = '';
  ListSide.classList.toggle('active');
  for(let i=0; i<UnitsTem.length; i++){
    sltFrom.innerHTML += `'<option value ='${UnitsTem[i]}'>${UnitsTem[i]} - ${UnitsTem2[i]}</option>`;
    sltTo.innerHTML += `'<option value ='${UnitsTem[i]}'>${UnitsTem[i]} - ${UnitsTem2[i]}</option>`;
  }
})

BtnLength.addEventListener('click', function(){
  NameConvert.innerHTML = 'Length Converter'
  Result.innerHTML = '--'
  inpFrom.value = ''
  Mood = 2;
  sltFrom.innerHTML = '';
  sltTo.innerHTML = '';
  ListSide.classList.toggle('active');
  for(let i=0; i<UnitsLen.length; i++){
    sltFrom.innerHTML += `'<option value ='${UnitsLen[i]}'>${UnitsLen[i]} - ${UnitsLen2[i]}</option>`;
    sltTo.innerHTML += `'<option value ='${UnitsLen[i]}'>${UnitsLen[i]} - ${UnitsLen2[i]}</option>`;
  }
})

BtnTime.addEventListener('click', function(){
  NameConvert.innerHTML = 'Time Converter'
  Result.innerHTML = '--'
  inpFrom.value = ''
  Mood = 3;
  sltFrom.innerHTML = '';
  sltTo.innerHTML = '';
  ListSide.classList.toggle('active');
  for(let i=0; i<UnitsTime.length; i++){
    sltFrom.innerHTML += `'<option value ='${UnitsTime[i]}'>${UnitsTime[i]} - ${UnitsTime2[i]}</option>`;
    sltTo.innerHTML += `'<option value ='${UnitsTime[i]}'>${UnitsTime[i]} - ${UnitsTime2[i]}</option>`;
  }
})

BtnMass.addEventListener('click', function(){
  NameConvert.innerHTML = 'Mass Converter'
  Result.innerHTML = '--'
  inpFrom.value = ''
  Mood = 4;
  sltFrom.innerHTML = '';
  sltTo.innerHTML = '';
  ListSide.classList.toggle('active');
  for(let i=0; i<UnitsMass.length; i++){
    sltFrom.innerHTML += `'<option value ='${UnitsMass[i]}'>${UnitsMass[i]} - ${UnitsMass2[i]}</option>`;
    sltTo.innerHTML += `'<option value ='${UnitsMass[i]}'>${UnitsMass[i]} - ${UnitsMass2[i]}</option>`;
  }
})

function Convert(){
  Result.innerHTML = '--'
  if(inpFrom.value == '' || sltFrom.value == 'Choose...' || sltTo.value == 'Choose...'){
    return;
  }
  console.log(inpFrom.value, sltFrom.value, sltTo.value)
  switch(Mood){
    case 1:
      Result.innerHTML = ConvertTem(inpFrom.value, sltFrom.value, sltTo.value)
      break;
    case 2:
      Result.innerHTML = ConvertLen(inpFrom.value, sltFrom.value, sltTo.value)
      return
    case 3:
      Result.innerHTML = ConvertTime(inpFrom.value, sltFrom.value, sltTo.value)
      return
    case 4:
      Result.innerHTML = ConvertMass(inpFrom.value, sltFrom.value, sltTo.value)
      return
  }
}