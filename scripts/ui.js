import { buttonData } from "./constant.js"
const buttonArea = document.getElementById('buttons')

export function renderMenuItems(menuItems,menuList){
    console.log(menuItems)
    // dizideki her bir elamanı için
    //bir menu html'i oluşturup bunu
    //ekrana basmak
    menuList.innerHTML = menuItems
    .map((item) => `

    <a id="card" href="/detail.html?id=${item.id}" class="d-flex flex-column flex-md-row text-decoration-none text-dark gap-3">
    <img class="rounded shadow img-fluid" src="${item.img}">

    <div>
        <div class="d-flex justify-content-between">
            <h5>${item.title}</h5>
            <p class="text-success fw-bold">${(item.price * 30).toFixed()}₺</p>
        </div>
        <p class="lead">
        ${item.desc.slice(0, 80)+'...'}</p>
    </div>
</a>
    `)
    .join(" ")
}

//ekrana butonları basar

// ekrana butonları basar
export function renderButtons(activeText) {
    // eski eklenen butonları html'den temizle
    buttonArea.innerHTML = '';
  
    // yeni butonları oluşturma
    buttonData.forEach((btn) => {
      // button elementi oluşturma
      const buttonEle = document.createElement('button');
  
      // class belirleme
      buttonEle.className = 'btn btn-outline-dark';

    
  
      // data-id belirleme
      buttonEle.dataset.category = btn.value;
  
      // eğerki eleman aktifse bu klası ver
      if (btn.text === activeText) {
        buttonEle.classList.add('btn-dark', 'text-white');
      }
  
      // içindeki yazıyı belirleme
      buttonEle.innerText = btn.text;
      // butonu html'e gönderme
      buttonArea.appendChild(buttonEle);
    });
  }
