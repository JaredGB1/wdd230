const visitsDisplay = document.querySelector("#lastVisits");
const msToDays = 84600000;
const today=Date.now();
const lastVisit= localStorage.getItem('lastVisit') || 0;
const numberOfDaysLastVisit= lastVisit/msToDays;
const numberOfDaysToday=today/msToDays;
const days=numberOfDaysToday-numberOfDaysLastVisit;
const roundedDays=Math.round(days);
if(lastVisit==0)
{
    visitsDisplay.textContent="Welcome! Let us know if you have any questions.";
}
else if(days<1)
{
    visitsDisplay.textContent="Back so soon! Awesome!";
}
else
{
    if(days<2)
    {
        visitsDisplay.textContent="You last visited 1 day ago";
    }
    else
    {
        visitsDisplay.textContent="You last visited "+roundedDays+" days ago";
    }
}
localStorage.setItem('lastVisit',Date.now());