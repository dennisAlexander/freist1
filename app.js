// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
// select span
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");

  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  // console.log(linksContainer.getBoundingClientRect());
});

// ********** fixed navbar ************

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // setup back to top link

  if (scrollHeight > 500) {
    console.log("helo");

    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});
// calculate heights

//random intro text




var quotes = [
  
  "Between stimulus and response there is a space. In that space is our power to choose our response. In our response lies our growth and our freedom.",
  "Whoever will be free must make himself free. Freedom is no fairy gift to fall into a man’s lap. What is freedom? To have the will to be responsible for one’s self.", 
  "Objects and their functions no longer had any significance. All I perceived was perception itself, the hell of forms and figures devoid of human emotion and detached from the reality of my unreal environment. I was an instrument in a virtual world that constantly renewed its own meaningless image in a living world that was itself perceived outside of nature. And since the appearance of things was no longer definitive but limitless, this paradisiacal awareness freed me from the reality external to myself. The fire and the rose, as it were, became one.",
  "But we, to claim our freedom, to take advantage of the tiny moment between immense abysses of unknowability, perhaps death, perhaps other reincarnations, perhaps transitions into other life forms, these things we don't know, but in the moment of being human we have the unique opportunity to figure things out.",
  "We must begin to send out ideological visions rather than be the consumers of them. We need to turn off the metaphorical televisions which are hooking us into the network of cultural assumptions ", 
  "You measure democracy by the freedom it gives its dissidents, not the freedom it gives its assimilated conformists.",
  "You are precisely as big as what you love and precisely as small as what you allow to annoy you.",
  "It is a mistake to consider any belief more liberated than another. It is the possibility of change which is important. Every new form of liberation is destined to eventually become another form of enslavement for most of its adherents. There is no freedom from duality on this plane of existence, but one may at least aspire to choice of duality.", 
  "What good will it be for a man if she gains the whole world, yet forfeits her freedom? Or what can a woman give in exchange for his freedom?",
  "Doesnt matter if you’re crazy or not, just be sure to laugh all the time!",
  "Let us at least make the experiment; let us free ourselves from complicity in these awful crimes, let us set ourselves to try, each in our own small circle, to bring nearer that bright time of peace and love which is the dream and the earnest desire of every true-hearted and thinking man.", 
  "Let us be lazy in everything, except in loving and drinking, except in being lazy."

];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('intro').innerHTML = quotes[randomNumber];
}

window.addEventListener('load', newQuote, true);
