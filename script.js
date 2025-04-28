// your code here
let form=document.querySelector("form");
form.addEventListener("submit",(e)=>{
	e.preventDefault();
	let Name=document.getElementById("name").value;
	let Year=document.getElementById("year").value;
	let h3=document.getElementById("url");

	h3.innerText+=`name=${Name}&year=${Year}`
})