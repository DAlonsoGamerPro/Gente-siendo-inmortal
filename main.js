const apiurl = "http://api.open-notify.org/astros.json";

fetch(apiurl)
    .then(response => response.json())
    .then(data => {
        const peopleList = document.getElementById("people-list");

        data.people.forEach(person =>{
            const listItem = document.createElement("li");
            const nameHeading = document.createElement("h2");
            nameHeading.textContent = person.name;

            const craftParagraph = document.createElement("p");
            
            craftParagraph.textContent = `Craft: ${person.craft}`;
            listItem.appendChild(nameHeading);
            listItem.appendChild(craftParagraph);
            peopleList.appendChild(listItem);
        });
    });