import galleryItems from "./gallery-items.js";


{/* <li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
      />
      </a>
    </li> */}
    
    
const list = document.querySelector('.js-gallery');
const div = document.querySelector('.js-lightbox');
const modalImg = document.querySelector('.lightbox__image');
const closeBtn = document.querySelector('button[data-action=close-lightbox]');

console.log(modalImg);


galleryItems.map((item) => {
  // console.log(item);

  // добавляем image и все его атрибуты
  const img = document.createElement('img');
  // console.log(img);
  img.classList.add('gallery__image')
  img.src = item.preview;
  img.setAttribute('data-source', item.original);
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
})

closeBtn.addEventListener('click', (e) => {
  div.classList.remove('is-open')
  modalImg.src = '';
})





