var search=document.getElementById('search');
//console.log(search);
search.addEventListener('keyup',(e)=>{
    if (e.keyCode===13) {         //13  is the keycode for enter to avoais
        var getcityname=e.target.value;
    }
    getWeather(getcityname);
});

function getWeather(getcityname) {
   //console.log(getcityname);
   const weatherApi=
   `http://api.openweathermap.org/data/2.5/weather?q=${getcityname}&&mode=json&units=metric&APPID=f4f941b9d88166c4a35efbc142f1606f`;
   window
   .fetch(weatherApi)
   .then(data=>{
       data
       .json()              //end result should be in json hence need to be converted
       .then(weather=>{
        //    console.log(weather);
        //    console.log(weather.coord.lon);
        //    console.log(weather.coord.lat);
            var weatherData=weather.weather;
            var output=[];
            //array here
            for (let x of weatherData) {
                output+=`
                    <div class="col-md-4 offset-4 mt-4 card">
                        <div class="card-body">
                            <h1 style="color:white">${weather.name}</h1>
                            <span class="icon"><img src="http://openweathermap.org/img/wn/${x.icon}.png"/></span>
                            <p>
                                <span style="color:white">temp:</span>
                                <span class="temp">${weather.main.temp}&deg;c</span>
                            </p>

                            <span class="des float-left">${x.description}</span>
                            <span class="des float-right">${x.main}</p>    
                        </div>
                    </div>
                    `;
                document.getElementById('template').innerHTML=output;
                // console.log(x);
                // console.log(x.id);
                // console.log(x.main);
                // console.log(x.description);
                // console.log(x.icon);
              
            }
       })
   })
   .catch(err=>console.log(err))
   .catch(err=>console.log(err));
}