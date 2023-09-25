const accessKey = "UmvhrU4Y7sFNGfbj_IlZ25PEwS6GAO8XADCaDb7ApIE";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

// Check if previous search results are stored in sessionStorage
const previousResults = sessionStorage.getItem("searchResults");
if (previousResults) {
    searchResult.innerHTML = previousResults;
}

async function searchImages() {
    keyword = searchBox.value;
    const perPage = 12; // Number of images per page
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=${perPage}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    results.forEach((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    });

    showMoreBtn.style.display = "block";

    // Store the search results in sessionStorage
    sessionStorage.setItem("searchResults", searchResult.innerHTML);
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchResult.innerHTML = ""; // Clear previous results
    sessionStorage.removeItem("searchResults"); // Remove stored results
    searchImages();
});

showMoreBtn.addEventListener("click", () => {
    page++;
    searchImages();
});