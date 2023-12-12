const url1= 'https://api.openweathermap.org/data/2.5/forecast?lat=14.6407&lon=-90.5133&appid=fa6783d745be2327802e22b3f198c7c9&units=imperial';
const weather1=document.querySelector("#weather");
const date2=new Date();
const dateHtml=document.querySelector(".date");
dateHtml.innerHTML= `${date.toLocaleDateString()}`;
async function apiFetch() 
{
    try
    {
        const response= await fetch(url1);
        if(response.ok)
        {
            const data= await response.json();
            displayWeatherResults(data.list);
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

function displayWeatherResults(data)
{
    for (let i = 1; i < 4; i++) {
        let date3= document.createElement('h4');
        let currentDate=new Date(date2);
        currentDate.setDate(date2.getDate() + i);
        let container=document.createElement('div');
        container.classList.add("container");
        let icon= document.createElement('img');
        let iconsrc1= `https://openweathermap.org/img/wn/${data[i].weather[0].icon}.png`;
        let p=document.createElement('p');
        let temperature=document.createElement('span');
        let description=document.createElement('span');
        date3.innerHTML=`${currentDate.toLocaleDateString()}`;
        temperature.innerHTML=`${data[i].main.temp}&deg;F`;
        description.innerHTML=` - ${data[i].weather[0].description}`;
        icon.setAttribute("src", iconsrc1)
        icon.setAttribute("alt", description);
        p.appendChild(temperature);
        p.appendChild(description);
        container.appendChild(date3);
        container.appendChild(icon);
        container.appendChild(p);
        weather1.appendChild(container);
      }
}