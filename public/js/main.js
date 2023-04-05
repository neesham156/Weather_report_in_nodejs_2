const submitbtn=document.getElementById('submitbtn')
const cityname=document.getElementById('cityName')
const city_name=document.getElementById('city_name')
const temp=document.getElementById('temp_real')
const temp_stat=document.getElementById('temp_status')
const datahide=document.querySelector('.middle_layer')
const curDay=document.getElementById("day");


const getInfo=async(event)=>{
  event.preventDefault();
let cityval=cityname.value;


if(cityval==""){
    city_name.innerText=`Plz write the name before search`;
    datahide.classList.add('data_hide');



}
else{
    try{
    let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=2334ba0a5599a729fb0e842e9df89ec2`
    const res= await fetch(url);
    const data=await res.json();
    const arrData=[data];
  

    city_name.innerText=`${arrData[0].name} ,${arrData[0].sys.country}`;
temp.innerHTML=arrData[0].main.temp;
const temp_status=arrData[0].weather[0].main;
if(temp_status=="Clear")
{
    temp_stat.innerHTML="  <i class='fas fa-sun' style='color:#eccc68'></i>";
}
else if(temp_status=="Clouds")
{
    temp_stat.innerHTML="  <i class='fas fa-cloud' style='color:#f1f2f6'></i>";
}
else  if(temp_status=="Rain")
{
    temp_stat.innerHTML="  <i class='fas fa-cloud-rain' style='color:#a4b0be'></i>";
}
else
{
    temp_stat.innerHTML="  <i class='fas fa-cloud' style='color:#44c3de'></i>";
}




datahide.classList.remove('data_hide');
    }


    catch{
        city_name.innerText=`Plz enter the city name proper`
        datahide.classList.add('data_hide');
    }
}

}



submitbtn.addEventListener('click',getInfo);