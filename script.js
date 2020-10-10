import galleryItems from "./gallery-items.js";


    
    
const list = document.querySelector('.js-gallery');
const div = document.querySelector('.js-lightbox');
const modalImg = document.querySelector('.lightbox__image');
const closeBtn = document.querySelector('button[data-action=close-lightbox]');

console.dir(modalImg);


galleryItems.map((item, index) => {
  // console.log(item);

  // добавляем image и все его атрибуты
  const img = document.createElement('img');
  // console.log(img);
  img.classList.add('gallery__image')
  // img.src = item.preview;
  img.setAttribute('data-source', item.original);
  img.setAttribute('data-index', index)
  img.setAttribute('src', item.preview)
  img.alt = item.description;

  // добавляем ссылку и все ее атрибуты
  const link = document.createElement('a');
  // console.log(link);
  link.classList.add('gallery__link')
  link.href = item.original

  // вставляем ссылку в image
  link.append(img);

  // создаем li с классом
  const li = document.createElement('li');
  li.classList.add('gallery__item');
  
  // вставляем в li ссылку с image
  li.append(link)

  list.append(li)
})

list.addEventListener('click', (e) =>{
  e.preventDefault();
  console.log(e.target);
  console.log(e.target.dataset.sourse);
  let modalLink = e.target.dataset.source;
  div.classList.add('is-open')
  modalImg.src = modalLink;
  modalImg.dataset.index = e.target.dataset.index
})

closeBtn.addEventListener('click', (e) => {
  div.classList.remove('is-open')
  modalImg.src = '';
})

window.addEventListener('keydown', (e) => {
  if(e.code ==='Escape'){
    clearOverlay()
  }
  if(e.key === 'ArrowLeft'){
    arrowLeft()
  }
  if(e.key === 'ArrowRight'){
    arrowRight()
  }
  
})

function setNewSrc (step, index){
  modalImg.dataset.index = `${index + step}`
  modalImg.src = galleryItems[index + step].original
}

function arrowLeft (){
  let index = +modalImg.dataset.index
  if(index === 0 ) {
    setNewSrc(0, galleryItems.length -1)
    return
  }
  console.log(index);
  setNewSrc(-1, index)

}
function arrowRight (){
  let index = +modalImg.dataset.index
  if (index === galleryItems.length - 1 ) {
    setNewSrc(0, 0)
    return
  }
  console.log(index);
  setNewSrc(1, index)

}





