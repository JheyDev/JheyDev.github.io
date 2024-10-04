window.addEventListener('DOMContentLoaded', () => { // Ensure DOM is loaded

    class MobileNavbar {
      constructor(mobileMenu, navList, navLinks) {
        // Use optional chaining to handle potential null values
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
  
        this.handleClick = this.handleClick.bind(this); // Bind 'this' context
      }
  
      animateLinks() {
        this.navLinks.forEach((link, index) => {
          link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
      }
  
      handleClick() {
        if (this.navList) { // Check if navList exists before accessing
          this.navList.classList.toggle(this.activeClass);
          this.mobileMenu.classList.toggle(this.activeClass);
          this.animateLinks();
        } else {
          console.error("navList element not found"); // Handle missing element
        }
      }
  
      addClickEvent() {
        if (this.mobileMenu) { // Check if mobileMenu exists before adding event listener
          this.mobileMenu.addEventListener("click", this.handleClick);
        } else {
          console.error("mobileMenu element not found"); // Handle missing element
        }
      }
  
      Init() {
        if (this.mobileMenu) {
          this.addClickEvent();
        }
        return this;
      }
    }
  
    const mobileNavbar = new MobileNavbar(
      ".mobile-menu",
      ".nav-list",
      ".nav-list li",
    );
    mobileNavbar.Init();
  });