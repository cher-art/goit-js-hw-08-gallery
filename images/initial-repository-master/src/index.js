import css from "./css/style.css";
import template from './templates/post.hbs';
console.log(template);
import posts from './data/posts.json';
console.log(posts)

// получаем доступ к кеонтейнеру, куда надо встраивать посты
const postsList = document.querySelector(".posts")
console.log(postsList)

// генерируем элемент по шаблону
const postItem = template(posts);
console.log(postItem)

// встраиваем сгенерированные посты в контейнер 
postsList.insertAdjacentHTML('afterbegin', postItem)