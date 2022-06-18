let data = [
  {
    name: "Baked Brick Lipstick",
    img: "https://4.imimg.com/data4/QI/AY/GLADMIN-3792183/2-250x250.jpg",
  },
  {
    name: "Cerise Pink Lipstick",
    img: "https://4.imimg.com/data4/RR/NW/GLADMIN-3792183/1-250x250.jpg",
  },
  {
    name: "Coral Red Lipstick",
    img: "https://4.imimg.com/data4/QI/AY/GLADMIN-3792183/2-250x250.jpg",
  },
];

function append(data) {
  let container = document.getElementById("container");
  data.forEach((element) => {
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.textContent = element.name;

    let img = document.createElement("img");
    img.setAttribute("src", element.img);

    let a = document.createElement("a");
    a.textContent = "Get Latest Price";
    // adding bootstrap attributes inorder to toggle modal
    a.setAttribute("data-bs-toggle", "modal");
    a.setAttribute("data-bs-target", "#exampleModal");

    // on clicking anchor tag storing element name and img in local storage
    a.addEventListener("click", function () {
      storeElement(element);
    });

    let btn = document.createElement("button");
    btn.textContent = "Ask For Details";
    // adding bootstrap attributes inorder to toggle modal
    btn.setAttribute("data-bs-toggle", "modal");
    btn.setAttribute("data-bs-target", "#exampleModal");

    // on clicking button storing element name and img in local storage
    btn.addEventListener("click", function () {
      storeElement(element);
    });

    div.append(p, img, a, btn);
    container.append(div);
  });
}

append(data);

import { bsorder } from "./components/bsorder.js";

document.getElementById("bootstrap").innerHTML = bsorder();

// on clicking button or anchor tag passing  particular element as parameter;
function storeElement(element) {
  let obj = {
    image: element.img,
    name: element.name,
  };

  let image = document.querySelector(".image_img");
  image.innerHTML = null;
  let order_img = document.createElement("img");
  order_img.setAttribute("src", obj.image);

  let order_name = document.createElement("p");
  order_name.textContent = obj.name;

  image.append(order_img, order_name);

  // for modal 2
  let image1 = document.querySelector(".image1_img");
  image1.innerHTML = null;
  let order1_img = document.createElement("img");
  order1_img.setAttribute("src", obj.image);

  let order1_name = document.createElement("p");
  order1_name.textContent = obj.name;

  image1.append(order1_img, order1_name);

  // for modal 3
  let image2 = document.querySelector(".image2_img");
  image2.innerHTML = null;
  let order2_img = document.createElement("img");
  order2_img.setAttribute("src", obj.image);

  let order2_name = document.createElement("p");
  order2_name.textContent = obj.name;

  image2.append(order2_img, order2_name);
}
