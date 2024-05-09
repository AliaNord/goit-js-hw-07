// function () {
//     const quantityCategories =
//     return quantityCategories
// }

const mainUl = document.querySelector("#categories");
const liItems = document.querySelectorAll(".item");

console.log(`Number of categories: ${liItems.length}`);

liItems.forEach((category) => {
  const nameCategory = category.querySelector("#categories .item h2");
  const elements = category.querySelectorAll("#categories .item ul li");
  console.log(`Category: ${nameCategory.textContent}`);
  console.log(`Elements: ${elements.length}`);
});
