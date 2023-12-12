const gridbutton = document.querySelector("#gridBtn");
const listbutton = document.querySelector("#listBtn");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
	display.classList.add("membersGrid");
	display.classList.remove("membersList");
});

listbutton.addEventListener("click", showList); 

function showList() {
	display.classList.add("membersList");
	display.classList.remove("membersGrid");
}