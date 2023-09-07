//your JS code here. If required.
let count = 1;
const h1 = document.getElementById("h1");
const circles = document.getElementsByClassName('circle'); 
const next = document.getElementById("next");
const previous = document.getElementById("prev");

next.addEventListener("click",(e)=>{
	count++;
	if(count>1){
		previous.removeAttribute("disabled")	
	}
	if(count >= 5){
		next.setAttribute("disabled",true)	
	}
	for (let i = 0; i < count; i++) {
		circles[i].classList.add("active");
	}
	// h1.innerText = count;
})
previous.addEventListener("click",(e)=>{
	if(count<5){
		next.removeAttribute("disabled")	
	}
	if(count == 1){
		previous.setAttribute("disabled",true)	
	}else{
		count--;
	}
	circles[count].classList.remove("active");
	// h1.innerText = count;
})