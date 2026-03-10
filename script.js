function handleKey(event){

if(event.key === "Enter"){
searchUniversities();
}

}

async function searchUniversities(){

const country = document.getElementById("searchInput").value;

const response = await fetch(
`http://universities.hipolabs.com/search?country=${country}`
);

const data = await response.json();

const resultsDiv = document.getElementById("results");

resultsDiv.innerHTML = "";

data.forEach(university => {

resultsDiv.innerHTML += `
<div class="card">

<h3>${university.name}</h3>

<p><strong>Country:</strong> ${university.country}</p>

<p>
<a href="${university.web_pages[0]}" target="_blank">
Visit Website
</a>
</p>

</div>
`;

});

}