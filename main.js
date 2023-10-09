import { renderMenuItems, renderButtons } from "./scripts/ui.js";

//html ' den gelenker
const buttonsArea = document.getElementById("buttons");
const menuList = document.querySelector("#menu-list");

//sayfanın yüklenme anını izleme
document.addEventListener("DOMContentLoaded", () => {
  renderButtons(), fetchMenu();
});

//datayı global scope'da tanımlama
let data;

//menü verilerini json dosyasından ceker
async function fetchMenu() {
  const res = await fetch("./db.json");
  data = await res.json();
  renderMenuItems(data.menu, menuList);
}

//tıklanılan kategoriyi belirlme

buttonsArea.addEventListener("click", (e) => {
  if (e.target.id !== "buttons") {
    renderButtons(e.target.innerText);
  }
  const selected = e.target.dataset.category;
  
  if(selected === "all"){
    renderMenuItems(data.menu, menuList)

  }else{
    const filtred = data.menu.filter((i) => i.category === selected);
    renderMenuItems(filtred, menuList)
  }

  
});
