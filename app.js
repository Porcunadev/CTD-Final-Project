fetch('https://api.github.com/users/Porcunadev/repos')
		.then(response => response.json()) //Converting the response to a JSON object
		.then( data => getProjectData(data))
		.catch( error => console.error(error));


function getProjectData(data) {
	for(project of data) {
		addToPage(project)
			console.log(project.name)
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

function currentDate() {
	let footerTextDiv = document.querySelector(".footer-text");
	let span = document.querySelector("#currentDate");
	span.textContent = new Date().getFullYear();

	footerTextDiv.appendChild(p);

}

currentDate();
