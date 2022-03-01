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
	let nameInput = document.querySelector("#name");
	let emailInput = document.querySelector("#email");
	let subjectInput = document.querySelector("#subject");
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
	let a = document.createElement("a");
	

	span.textContent = `From ${nameInput.value} `;
	p.textContent = `Message : ${subjectInput.value}`;
	a.href = `mailto:${emailInput.value}`;
	a.textContent = `${nameInput.value}'s Email`;


	deleteBtn.classList.add("deleteBtn");
	deleteBtn.textContent = 'Delete';

		
	messages.appendChild(span);
	messages.appendChild(p);
	messages.appendChild(a);
	messages.appendChild(deleteBtn)
	
	nameInput.value = "";
	emailInput.value = "";
	subjectInput.value = "";


	deleteBtn.addEventListener("click", () => {
		messages.removeChild(span);
		messages.removeChild(p);
		messages.removeChild(deleteBtn);
		messages.removeChild(a);

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
