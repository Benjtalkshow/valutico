const menu = document.querySelector('.menu'); const close = document.querySelector('.close')
const navbar = document.querySelector('#navbar'); const ul = document.querySelector('#ul-list')
const list_items = document.querySelectorAll('#list'); const darksection = document.querySelector('.darksection');

menu.addEventListener('click',()=> {
  menu.classList.remove('max-md:block');
 close.classList.remove('hidden');
 ul.classList.remove('hidden');
  navbar.classList.remove('shadow-md','bg-white');
})

close.addEventListener('click',()=> {
  menu.classList.add('max-md:block'); 
  close.classList.add('hidden');
  ul.classList.add('hidden'); 
  navbar.classList.add('shadow-md','bg-white');
})

    

    // Function to handle the intersection of the observed elements
    class BootStrapAnimation {
      #section;
      constructor(section) {
        this.#section = section;
        this.#observeIntersection();
      }
    
      #handleIntersection(entries, observer) {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }
      }
    
      #observeIntersection() {
        const observerOptions = {
          root: null,
          rootMargin: "0px",
          threshold: 0.3,
        };
    
        const observer = new IntersectionObserver(
          this.#handleIntersection,
          observerOptions
        );
        observer.observe(this.#section);
      }
    }
    
    function animateOnIt() {
      const sections = document.querySelectorAll(".lazy-section");
      for (const section of sections) {
        new BootStrapAnimation(section);
      }
    }
    
    animateOnIt();