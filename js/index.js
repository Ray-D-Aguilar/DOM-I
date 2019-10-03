const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

//IMages
let logo = document.getElementById("logo-img");
logo.src = "img/logo.png";

const mainImg = document.querySelector("#cta-img");
mainImg.src = "img/header-img.png";

const middleImg = document.querySelector("#middle-img");
middleImg.src = "img/mid-page-accent.jpg";

//Nav Bar

const navBar = document.querySelectorAll("a");
navBar[0].textContent = "Services";
navBar[1].textContent = "Product";
navBar[2].textContent = "Vision";
navBar[3].textContent = "Features";
navBar[4].textContent = "About";
navBar[5].textContent = "Contact";

console.log(navBar[2].textContent); //Vision

// "nav": {
//   "nav-item-1": "Services",
//   "nav-item-2": "Product",
//   "nav-item-3": "Vision",
//   "nav-item-4": "Features",
//   "nav-item-5": "About",
//   "nav-item-6": "Contact",
//   "img-src": "img/logo.png"
// },

//Main Content
const headerOne = document.querySelector(".cta-text h1");
headerOne.textContent = "DOM is Awesome";

const btn = document.querySelector(".cta-text button");
btn.textContent = "Get Started";

const topHeader = document.querySelectorAll(".top-content .text-content h4");
const topParagraph = document.querySelectorAll(".top-content .text-content p");
console.log(topHeader);
console.log(topParagraph);
topHeader[0].textContent = "Features";
topHeader[1].textContent = "About"


topParagraph[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
topParagraph[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const bottomHeader = document.querySelectorAll(".bottom-content .text-content h4");
const bottomPara = document.querySelectorAll(".bottom-content .text-content p");
console.log(bottomHeader);
console.log(bottomPara);

