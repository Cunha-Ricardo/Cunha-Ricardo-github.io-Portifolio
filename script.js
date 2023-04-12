var typed = new Typed(".multiple-text", {
    strings: ["Desenvolvedor Frontend", "Estudante de T.I"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
})

/**************MOUSE  ***********/
let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e){
    let x = e.clientX;
    let y = e.clientY;
    //console.log(x,y);
    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));

console.log(links);

links.forEach((links)=>{
    links.addEventListener("mouseover", () => {
        innerCursor.classList.add("grow");
    });
    links.addEventListener("mouseleave", () => {
        innerCursor.classList.remove("grow");
    });
});

/************************Mouse scroll animação*/

const header = document.querySelector("header");

      window.addEventListener("scroll", function() {
        if (window.scrollY > 100) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      });

      
      const navLinks = document.querySelectorAll("nav a");

      
      navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
          event.preventDefault();
          const sectionId = this.getAttribute("href");
          const section = document.querySelector(sectionId);
          section.scrollIntoView({ behavior: "smooth" }); 
        });
      });
