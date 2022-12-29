import {getnavbar,getdata} from "./compoents.js";

// get navbar
let navconainer = document.getElementById("nav");
navconainer.innerHTML = getnavbar();

  //Sliding Show
  const images = document.querySelectorAll("img");
let i = 0;
setInterval(function () {
  if (i == 0) {
    images[i].className = "fade-in-image";
  } else if (i == images.length) {
    images[i - 1].className = "fade-out-image";
    images[0].className = "fade-in-image";
    i = 0;
  } else {
    images[i - 1].className = "fade-out-image";
    images[i].className = "fade-in-image";
  }
  i++;
}, 2000);
// let load = async () => {
//     let data = await getdata("https://www.themealdb.com/api/json/v1/1/search.php?s=");
//     console.log(data)
// }
// load();

// async function load() {
//     try {
//         // var input = document.getElementById("movie").value;
//         let data = await getdata(`https://www.themealdb.com/api/json/v1/1/search.php?s=a`);

//       console.log(data);
//       appendData(data.meals);
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   load();
//   function appendData(dataarr) {
//     document.getElementById("box").innerText="";
//     let container = document.getElementById("box");
//     dataarr.forEach((ele) => {
//       let strMeal = document.createElement("h3");
//       strMeal.innerText = ele.strMeal;
//       let strMealThumb = document.createElement("img");
//       strMealThumb.src = ele.strMealThumb;
//       let div = document.createElement("div");
//       div.append(strMealThumb, strMeal);
//       container.append(div);
//     });
//   }


//   //Debounce code
// async function load1() {
//    document.getElementById("box").innerHTML="";
//  var Foods=document.getElementById("food1").value;
//   let data = await getdata(`https://www.themealdb.com/api/json/v1/1/search.php?s=${Foods}`);
//   console.log(data.meals);
//   if(data.meals==null){
//       NofoodFound();
// }
// else{
//   appendata(data.meals);
// }
// }
// document.getElementById("search").addEventListener("click",load1);

// function appendata(data){
// let box = document.getElementById("box");
// document.getElementById("box").innerHTML="";
// console.log(data);
// data.forEach(ele => {
//     let strMeal = document.createElement("h3");
//     strMeal.innerText = ele.strMeal;

//     let strMealThumb = document.createElement("img");
//     strMealThumb.src = ele.strMealThumb;

//     let div = document.createElement("div");
//     div.append(strMealThumb,strMeal)
//     box.append(div);
// })
// }

// function NofoodFound(){
// document.getElementById("box").innerHTML="";
// let box = document.getElementById("box");
// let message = document.createElement("h3");
// message.innerText = "No Food found with the given name.";
// box.append(message);
// }


// var id;
// function debounce () {
// if (id) {
//   clearInterval(id);
// }

// id = setTimeout(function () {
//   console.log("hello");
//   load1();
// }, 500);
// }

// document.getElementById("food1").addEventListener("input",debounce);

