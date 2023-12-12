const linksURL="https://jaredgb1.github.io/wdd230/chamber/data/members.json";
const baseURL="https://jaredgb1.github.io/wdd230";
const memberGrid = document.querySelector('.membersGrid');
async function getMembers ()
{
    const response=await fetch(linksURL);
    const data=await response.json();
    displayLinks(data.members);
}
getMembers();

const displayLinks= (data) =>
{   
    data.forEach(member => {
        let section=document.createElement('section');
        let img = document.createElement('img');
        let name =document.createElement('h3');
        let address=document.createElement('p');
        let phone=document.createElement('p');
        let website=document.createElement('a');
        let membership=document.createElement('p');
        let description=document.createElement('p');
        img.setAttribute("src", member.icon);
        img.setAttribute("alt", `${member.name} logo`);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '153');
        img.setAttribute('height', '96');
        name.innerHTML=`${member.name}`;
        address.innerHTML=`${member.address}`;
        phone.innerHTML=`${member.phone}`;
        website.innerHTML=`${member.websiteurl}`;
        website.setAttribute("href", member.websiteurl);
        membership.innerHTML=`${member.membership}`;
        description.innerHTML=`${member.description}`;
        section.appendChild(img);
        section.appendChild(name);
        section.appendChild(address);
        section.appendChild(phone);
        section.appendChild(website);
        section.appendChild(membership);
        section.appendChild(description);
        memberGrid.appendChild(section);
    });
}