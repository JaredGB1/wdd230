const input=document.querySelector('#favchap');
const button=document.querySelector('button');
const list=document.querySelector('#list');
button.addEventListener('click', function()
{
    if (input.value != "")
    {
        const li =document.createElement('li');
        const deleteB =document.createElement('button');
        li.textContent= input.value;
        deleteB.textContent="❌";
        li.append(deleteB);
        list.append(li);
        deleteB.addEventListener('click', function ()
        {
            list.removeChild(li);
            input.focus();   
        })
        input.focus();
        input.value="";
    }
    else
    {
        alert("Please enter the book and the chapter to add it to the list");
    }
})