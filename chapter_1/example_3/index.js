const items = document.querySelectorAll("li");
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", () => {
    alert(i);
  });
}
