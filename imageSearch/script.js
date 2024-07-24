accessKey = "zXjPxDWtkhiVKf7_TvGIxPEjjKMineBzrtnEj-Mi8Dc";
searchForm = document.getElementById("search-form");
searchInput = document.getElementById("search-input");
searchBtn = document.getElementById("search-btn");
showmoreBtn = document.getElementById("show-more-btn");
searchResult = document.getElementById("result");

url = "https://api.unsplash.com/search/photos?client_id=zXjPxDWtkhiVKf7_TvGIxPEjjKMineBzrtnEj-Mi8Dc&page=1&query=office";

let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchInput.value;
    const url = `https://api.unsplash.com/search/photos?client_id=${accessKey}&page=${page}&query=${keyword}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    results.map((result) => {
            const image = document.createElement("img");
            image.src = result.urls.small;
            const imageLink = document.createElement("a");
            imageLink.href = result.links.html;
            imageLink.target = "_blank";

            imageLink.appendChild(image);
            searchResult.appendChild(imageLink);  
    })

        showmoreBtn.style.display = "block";
};

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page=1;
    searchResult.innerHTML = "";
    searchImages();
})

showmoreBtn.addEventListener("click", () => {
    page++;
    searchImages();
});