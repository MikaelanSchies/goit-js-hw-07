
const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll(".item");


console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((item) => {
    const categoryTitle = item.querySelector("h2").textContent;
    const elementsCount = item.querySelectorAll("ul li").length;
    
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${elementsCount}`);
});
