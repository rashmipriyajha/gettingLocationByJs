const button = document.getElementById("get-location-button");


async function getData(lat, long){
    const promise = await fetch(
     `http://api.weatherapi.com/v1/current.json?key=47556af9a0b84302a9d40531240502&q=${lat},${long}&aqi=yes`
     );
     return await promise.json()
 }


async function gotlocation(position){
   const result = await getData(position.coords.latitude,position.coords.longitude);
   console.log(result);
}

function failedToGot(){
    console.log("There was some issue");
}

button.addEventListener("click",async()=>{
    const result = navigator.geolocation.getCurrentPosition(gotlocation, failedToGot)
});


// 6 min 