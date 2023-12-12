const currentTemp= document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weatherIcon');
const weatherDesc= document.querySelector('#weatherDescription');
const url= 'https://api.openweathermap.org/data/2.5/weather?lat=14.6407&lon=-90.5133&appid=fa6783d745be2327802e22b3f198c7c9&units=imperial';

async function apiFetch() 
{
    try
    {
        const response= await fetch(url);
        if(response.ok)
        {
            const data= await response.json();
            console.log(data);
            displayResults(data);
        }
        else
        {
            throw Error(await response.text());
        }
    }
    catch (error)
    {
        console.log(error);
    }
}
apiFetch();

function displayResults(data)
{
    currentTemp.innerHTML= `${data.main.temp}&deg;F`;
    const iconsrc= `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let desc =data.weather[0].description;
    weatherIcon.setAttribute('src',iconsrc);
    weatherIcon.setAttribute('alt',desc);
    weatherDesc.textContent= `${desc}`;
}