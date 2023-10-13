import { Convertir } from "./Temperature.js";

//Get Buttons
const CloseList = document.getElementById('CloseSideBar');
const BtnTemperature = document.getElementById('TempConverter');
const BtnLength = document.getElementById('LenConverter');
const BtnMass = document.getElementById('MassConverter');
const BtnTime = document.getElementById('TimeConverter');

//Get Inputs
const sltFrom = document.getElementById('ListFrom');
const sltTo = document.getElementById('ListTo');
const inpFrom = document.getElementById('NumberFrom');
const inpTo = document.getElementById('NumberTo');
const ListSide = document.getElementById('sidebar');



const UnitsTem = ['Choose...', 'K', 'ºC', 'ºR', 'ºF'];
const UnitsLen = ['Choose...', 'm', 'km', 'Mile', 'Yard', 'Cubit'];
const UnitsTime = ['Choose...', 'sec', 'min', 'hour'];
const UnitsMass = ['Choose...', 'kg', 'lb', '@', 'g', 'oz'];
const Converted = 0;

CloseList.addEventListener('click', function(){
    ListSide.classList = '';
  })

BtnTemperature.addEventListener('click', function(){
    sltFrom.innerHTML = '';
    sltTo.innerHTML = '';
    ListSide.classList.toggle('active');
    UnitsTem.forEach(function(x){
      sltFrom.innerHTML += `'<option value ='${x}'>${x}</option>`;
      sltTo.innerHTML += `'<option value ='${x}'>${x}</option>`;
    });
})

BtnLength.addEventListener('click', function(){
  sltFrom.innerHTML = '';
  sltTo.innerHTML = '';
  ListSide.classList.toggle('active');
  UnitsLen.forEach(function(x){
    sltFrom.innerHTML += `'<option value ='${x}'>${x}</option>`;
    sltTo.innerHTML += `'<option value ='${x}'>${x}</option>`;
  });
})

BtnTime.addEventListener('click', function(){
  sltFrom.innerHTML = '';
  sltTo.innerHTML = '';
  ListSide.classList.toggle('active');
  UnitsTime.forEach(function(x){
    sltFrom.innerHTML += `'<option value ='${x}'>${x}</option>`;
    sltTo.innerHTML += `'<option value ='${x}'>${x}</option>`;
  });
})

BtnMass.addEventListener('click', function(){
  sltFrom.innerHTML = '';
  sltTo.innerHTML = '';
  ListSide.classList.toggle('active');
  UnitsMass.forEach(function(x){
    sltFrom.innerHTML += `'<option value ='${x}'>${x}</option>`;
    sltTo.innerHTML += `'<option value ='${x}'>${x}</option>`;
  });
})
  