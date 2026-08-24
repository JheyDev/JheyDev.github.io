/* =====================================================
   ELEMENTOS
====================================================== */

const body =
  document.body;

const loadingScreen =
  document.querySelector(
    "#loadingScreen"
  );

const welcomeMessage =
  document.querySelector(
    "#welcomeMessage"
  );

const menuToggle =
  document.querySelector(
    ".menu-toggle"
  );

const nav =
  document.querySelector(
    ".nav"
  );

const navLinks =
  document.querySelectorAll(
    ".nav a"
  );

const sections =
  document.querySelectorAll(
    "main section[id]"
  );

const projectGrid =
  document.querySelector(
    "#projectGrid"
  );

const showMoreProjects =
  document.querySelector(
    "#showMoreProjects"
  );

const aboutPhoto =
  document.querySelector(
    ".about-photo"
  );


/* =====================================================
   PREFERÊNCIA DE MOVIMENTO
====================================================== */

const prefersReducedMotion =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;


/* =====================================================
   LOADING → WELCOME → HOME
====================================================== */

const startLoading = () => {

  /*
   * A página começa bloqueada.
   */

  body.classList.add(
    "loading"
  );


  /*
   * Tempo da assinatura Jhey.
   */

  const loadingDuration =
    prefersReducedMotion
      ? 700
      : 2200;


  /*
   * Espera o loading terminar.
   */

  setTimeout(() => {


    /*
     * PRIMEIRO:
     *
     * coloca o Welcome acima
     * de absolutamente tudo.
     *
     * A Home continua invisível
     * para o usuário.
     */

    if (welcomeMessage) {

      welcomeMessage.classList.add(
        "show"
      );

    }


    /*
     * DEPOIS:
     *
     * retira o loading.
     *
     * Como o Welcome já está acima,
     * não existe intervalo mostrando
     * a Home.
     */

    if (loadingScreen) {

      loadingScreen.classList.add(
        "hide"
      );

    }


    /*
     * Tempo total do Welcome.
     */

    const welcomeDuration =
      prefersReducedMotion
        ? 500
        : 2300;


    /*
     * Depois do Welcome,
     * libera a Home.
     */

    setTimeout(() => {


      if (welcomeMessage) {

        welcomeMessage.classList.remove(
          "show"
        );

      }


      /*
       * Libera a rolagem.
       */

      body.classList.remove(
        "loading"
      );


    }, welcomeDuration);


  }, loadingDuration);

};


/* =====================================================
   INICIAR
====================================================== */

if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    startLoading
  );

} else {

  startLoading();

}


/* =====================================================
   MENU MOBILE
====================================================== */

if (
  menuToggle &&
  nav
) {


  menuToggle.addEventListener(
    "click",
    () => {

      const isOpen =
        nav.classList.toggle(
          "open"
        );


      menuToggle.classList.toggle(
        "open",
        isOpen
      );


      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );


      menuToggle.setAttribute(
        "aria-label",
        isOpen
          ? "Fechar menu"
          : "Abrir menu"
      );

    }
  );


  /*
   * Fecha o menu ao clicar
   * em qualquer item.
   */

  navLinks.forEach(
    (link) => {

      link.addEventListener(
        "click",
        () => {

          nav.classList.remove(
            "open"
          );


          menuToggle.classList.remove(
            "open"
          );


          menuToggle.setAttribute(
            "aria-expanded",
            "false"
          );


          menuToggle.setAttribute(
            "aria-label",
            "Abrir menu"
          );

        }
      );

    }
  );

}


/* =====================================================
   NAVEGAÇÃO ATIVA
====================================================== */

if (
  sections.length &&
  navLinks.length
) {


  const sectionObserver =
    new IntersectionObserver(
      (entries) => {

        entries.forEach(
          (entry) => {

            if (
              !entry.isIntersecting
            ) {

              return;

            }


            navLinks.forEach(
              (link) => {

                const target =
                  link.getAttribute(
                    "href"
                  );


                link.classList.toggle(
                  "active",
                  target ===
                    `#${entry.target.id}`
                );

              }
            );

          }
        );

      },
      {
        rootMargin:
          "-35% 0px -55% 0px",

        threshold: 0
      }
    );


  sections.forEach(
    (section) => {

      sectionObserver.observe(
        section
      );

    }
  );

}


/* =====================================================
   PROJETOS — MOSTRAR MAIS
====================================================== */

if (
  projectGrid &&
  showMoreProjects
) {


  const extraProjects =
    projectGrid.querySelectorAll(
      ".project-extra"
    );


  if (
    extraProjects.length === 0
  ) {

    showMoreProjects.hidden =
      true;

  }


  showMoreProjects.addEventListener(
    "click",
    () => {

      const showingAll =
        projectGrid.classList.toggle(
          "show-all"
        );


      showMoreProjects.textContent =
        showingAll
          ? "Mostrar menos"
          : "Mais projetos";


      showMoreProjects.setAttribute(
        "aria-expanded",
        String(showingAll)
      );

    }
  );

}


/* =====================================================
   ANO AUTOMÁTICO
====================================================== */

const footerYear =
  document.querySelector(
    ".footer span:last-child"
  );


if (footerYear) {

  footerYear.textContent =
    `© ${new Date().getFullYear()}`;

}


/* =====================================================
   PARALLAX DA FOTO
====================================================== */

if (
  aboutPhoto &&
  !prefersReducedMotion &&
  window.innerWidth > 900
) {


  aboutPhoto.addEventListener(
    "mousemove",
    (event) => {

      const rect =
        aboutPhoto.getBoundingClientRect();


      const x =
        event.clientX -
        rect.left;


      const y =
        event.clientY -
        rect.top;


      const moveX =
        (
          x /
          rect.width -
          0.5
        ) * 8;


      const moveY =
        (
          y /
          rect.height -
          0.5
        ) * 8;


      aboutPhoto.style.transform =
        `translate(${moveX}px, ${moveY}px)`;

    }
  );


  aboutPhoto.addEventListener(
    "mouseleave",
    () => {

      aboutPhoto.style.transform =
        "translate(0, 0)";

    }
  );

}


/* =====================================================
   ESC FECHA MENU
====================================================== */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key !== "Escape"
    ) {

      return;

    }


    if (
      nav &&
      menuToggle
    ) {

      nav.classList.remove(
        "open"
      );


      menuToggle.classList.remove(
        "open"
      );


      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );


      menuToggle.setAttribute(
        "aria-label",
        "Abrir menu"
      );

    }

  }
);