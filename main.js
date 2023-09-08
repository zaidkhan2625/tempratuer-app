const Accesskey="dc40bb18c41ce1454c7f081b597c3356";
const inputValue=document.querySelector("#serchinput");
const serchButton = document.querySelector("#serch_button"); 
let cityName="";

async function showTempratuer(){
    cityName=inputValue.value;

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${Accesskey}`;
    const response = await  fetch(url);
    const data = await response.json();
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp;
    document.querySelector(".humidity").innerHTML=data.main.humidity;
    document.querySelector(".wind").innerHTML=data.wind.speed;



    console.log(data);
}
serchButton.addEventListener('click',()=>{
    showTempratuer();
});