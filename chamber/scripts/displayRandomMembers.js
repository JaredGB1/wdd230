const linksURL="https://jaredgb1.github.io/wdd230/chamber/data/members.json";
const baseURL="https://jaredgb1.github.io/wdd230";
const memberGrid = document.querySelector('.membersGrid');
let silverGoldMembers=[];
async function getMembers ()
{
    const response=await fetch(linksURL);
    const data=await response.json();
    displayMembers(data.members);
}
getMembers();

const displayMembers= (data) =>
{   
    data.forEach(member => {
        if (member.membership == "Gold" || member.membership == "Silver")
        {
            silverGoldMembers.push(member);
        }
    } )
    const randomIndices = [];
        while (randomIndices.length < 3) {
            const randomIndex = Math.floor(Math.random() * silverGoldMembers.length);
            if (!randomIndices.includes(randomIndex)) {
                randomIndices.push(randomIndex);
            }
        }
    for(let i=0; i<3 ; i++)
    {
        let section=document.createElement('section');
        let img = document.createElement('img');
        let name =document.createElement('h3');
        let address=document.createElement('p');
        let phone=document.createElement('p');
        let website=document.createElement('a');
        let membership=document.createElement('p');
        let description=document.createElement('p');
        img.setAttribute("src", silverGoldMembers[randomIndices[i]].icon);
        img.setAttribute("alt", `${silverGoldMembers[randomIndices[i]].name} logo`);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '153');
        img.setAttribute('height', '96');
        name.innerHTML=`${silverGoldMembers[randomIndices[i]].name}`;
        address.innerHTML=`${silverGoldMembers[randomIndices[i]].address}`;
        phone.innerHTML=`${silverGoldMembers[randomIndices[i]].phone}`;
        website.innerHTML=`${silverGoldMembers[randomIndices[i]].websiteurl}`;
        website.setAttribute("href", silverGoldMembers[randomIndices[i]].websiteurl);
        membership.innerHTML=`${silverGoldMembers[randomIndices[i]].membership}`;
        description.innerHTML=`${silverGoldMembers[randomIndices[i]].description}`;
        section.appendChild(img);
        section.appendChild(name);
        section.appendChild(address);
        section.appendChild(phone);
        section.appendChild(website);
        section.appendChild(membership);
        section.appendChild(description);
        memberGrid.appendChild(section);
    }    
}