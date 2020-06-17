import "./styles.scss";
import "./tablet.scss";
import "./mobile.scss";

const toggleBurger = () => {
  if (window.dropdown.style.display !== "none") {
    window.dropdown.style.display = "none";
  } else {
    window.dropdown.style.display = "unset";
  }
};

window.burger.onclick = toggleBurger;

const services = [
  {
    title: "Grooming",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, praesentium dignissimos nam voluptate tempore ea."
  },
  {
    title: "Healthcare",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, praesentium dignissimos nam voluptate tempore ea."
  },
  {
    title: "Walking",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, praesentium dignissimos nam voluptate tempore ea."
  },
  {
    title: "Training",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, praesentium dignissimos nam voluptate tempore ea."
  }
];

const container = window.services;

const handleClick = (content, service) => e => {
  if (content.style.display !== "none") {
    content.style.display = "none";
    service.classList.remove("blue");
    content.classList.remove("hr");
  } else {
    content.style.display = "unset";
    service.classList.add("blue");
    content.classList.add("hr");
  }
};

services.forEach(e => {
  const service = document.createElement("div");
  service.className = "service";
  const title = document.createElement("h3");
  const hr = document.createElement("hr");
  const img = document.createElement("img");
  img.src = `/img/${e.title.toLowerCase()}.png`;
  title.appendChild(img);
  title.appendChild(document.createTextNode(e.title));
  service.appendChild(title);

  const content = document.createElement("div");
  content.appendChild(document.createTextNode(e.content));
  content.style.display = "none";
  service.appendChild(content);
  content.appendChild(hr);
  service.appendChild(hr);

  title.onclick = handleClick(content, service);

  container.appendChild(service);
});

const products = [
  {
    title: "Eukanuba Active",
    content: "Adult Large Bread",
    price: "€ 45.00",
    img: "/img/dog-food.png"
  },
  {
    title: "Confort Dog House",
    price: "€ 102.99",
    img: "/img/dog-house.png"
  },
  {
    title: "Wild Knots Bears",
    price: "€ 4.99",
    img: "/img/dog-toys.png"
  },
  {
    title: "6 x Barkov Chew",
    content: "Bones with Filling",
    price: "€ 5.79",
    img: "/img/dog-bouns.png"
  },
  {
    title: "Barkoo Filled Chew",
    content: "Bone with Mint",
    price: "€ 8.69",
    img: "/img/dog-candy.png"
  },
  {
    title: "Dog Bag",
    price: "€ 54.99",
    img: "/img/dog-bag.png"
  },
  {
    title: "Spring Pet Coats",
    price: "€ 11.99",
    img: "/img/dog-dress.png"
  },
  {
    title: "Litte Mat",
    price: "€ 10.99",
    img: "/img/dog-litter-mat.png"
  },
  {
    title: "FronLine",
    price: "€ 4.99",
    img: "/img/dog-frontline.jpg"
  },
  {
    title: "Leash",
    price: "€ 3.99",
    img: "/img/dog-leash.png"
  }
];

const carousel = (container, elements, n = 4) => {
  const length = elements.length - 1;
  let i = 0;

  const render = () => {
    if (i < 0) {
      i = length;
    }
    if (i > length) {
      i = 0;
    }
    container.innerHTML = "";
    for (let j = i; j <= n + i; j++) {
      const k = j > length ? j - length : j;
      const element = elements[k];
      const div = document.createElement("div");
      const img = document.createElement("img");
      img.src = element.img;
      div.appendChild(img);
      const title = document.createElement("div");
      title.innerText = element.title;
      title.className = "title";
      div.appendChild(title);
      const price = document.createElement("div");
      price.innerText = element.price;
      price.className = "price";
      div.appendChild(price);
      container.appendChild(div);
    }
  };

  render(i);

  return [
    () => {
      i--;
      render();
    },
    () => {
      i++;
      render();
    }
  ];
};

const [left, right] = carousel(window.carousel, products);

window.carouselLeft.onclick = left;
window.carouselRight.onclick = right;
