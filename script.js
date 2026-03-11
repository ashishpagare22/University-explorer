let universities = [];
let currentPage = 1;
const perPage = 12;

function handleKey(event){
if(event.key === "Enter"){
searchUniversities();
}
}

async function searchUniversities(){

const country = document.getElementById("searchInput").value;

const response = await fetch(
`https://universities.hipolabs.com/search?country=${country}`
);

universities = await response.json();

currentPage = 1;

displayUniversities();

}

function displayUniversities(){

const resultsDiv = document.getElementById("results");
const paginationDiv = document.getElementById("pagination");

resultsDiv.innerHTML = "";

const start = (currentPage - 1) * perPage;
const end = start + perPage;

const pageData = universities.slice(start, end);

pageData.forEach(university => {

const image = `https://source.unsplash.com/400x200/?university,campus`;

resultsDiv.innerHTML += `

<div class="card">

<img src="${image}">

<div class="card-content">

<h3>${university.name}</h3>

<p><strong>Country:</strong> ${university.country}</p>

<a href="${university.web_pages[0]}" target="_blank">
Visit Website
</a>

</div>

</div>

`;

});

createPagination();

}

function createPagination(){

const paginationDiv = document.getElementById("pagination");

paginationDiv.innerHTML = "";

const totalPages = Math.ceil(universities.length / perPage);

for(let i = 1; i <= totalPages; i++){

paginationDiv.innerHTML += `
<button onclick="goToPage(${i})">${i}</button>
`;

}

}

function goToPage(page){

currentPage = page;

displayUniversities();

}