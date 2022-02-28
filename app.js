fetch('https://api.github.com/users/Porcunadev/repos')
		.then(response => response.json()) //Converting the response to a JSON object
		.then( data => getProjectData(data))
		.catch( error => console.error(error));


function getProjectData(data) {
	for(project of data) {
		addToPage(project)
	}
}


function addToPage(project) {
	let projectUl = document.querySelector(".project-ul");
	let li = document.createElement("li");
	let a = document.createElement("a");
	
	a.href = project.html_url;
	a.textContent = project.name;

	li.classList.add("project-lists");
	li.appendChild(a);
	
	projectUl.appendChild(li)
}


let submitBtn = document.querySelector(".btn");

function messages(e) {
	e.preventDefault();
	let messages = document.querySelector(".messages");
	let nameInput = document.querySelector("#name").value;
	let emailInput = document.querySelector("#email").value;
	let subjectInput = document.querySelector("#subject").value;
	let deleteBtn = document.createElement("button");

	if(nameInput === "") {
		return alert("please enter your name");
	}

	if(emailInput === "") {
		return alert("please enter your email");
	}

	if(subjectInput === "") {
		return alert("please enter your message");
	}
	let span = document.createElement("span");
	let p = document.createElement("p");
	
	span.textContent = `From ${nameInput} |`;
	p.textContent = `Message : ${subjectInput}`;
	
	deleteBtn.classList.add("deleteBtn");
	deleteBtn.textContent = 'Delete';

		
	messages.appendChild(span);
	messages.appendChild(p);
	messages.appendChild(deleteBtn)
	
	deleteBtn.addEventListener("click", () => {
		console.log("hi")
		messages.removeChild(span);
		messages.removeChild(p);
		messages.removeChild(deleteBtn);
	});
}

submitBtn.addEventListener("click",messages);




function currentDate() {
	let footerTextDiv = document.querySelector(".footer-text");
	let span = document.querySelector("#currentDate");
	span.textContent = new Date().getFullYear();

	footerTextDiv.appendChild(span);

}

currentDate();
