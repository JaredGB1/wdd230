const currentYear= new Date().getFullYear();
const lastModified=document.lastModified;
const date=new Date();
document.querySelector('#currentYear').textContent=currentYear;
document.querySelector('#lastModified').textContent=`Last modified: ${lastModified}`;