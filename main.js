import "./src/sass/styles.scss"

Array.from(document.querySelectorAll(".tab__buttons")).forEach(tabButtons => {
  tabButtons.addEventListener("click", (e) => {
    const tabPages = tabButtons.nextElementSibling;
    const currentButton = e.target;
    const currentTabPage = currentButton.dataset.num

    const pageMap = {
      one: 1,
      two: 2
    }

    if (currentButton.classList.contains("tab__button--active")) {
      return
    }
  
    tabButtons.querySelector(".tab__button--active").classList.remove("tab__button--active")
    tabButtons.querySelector("span").style.left = `${(pageMap[currentTabPage] - 1) * 50}%`;
    currentButton.classList.add("tab__button--active")
  
    tabPages.querySelector(".tab__page--active").classList.remove("tab__page--active")
    tabPages.querySelector(".tab__page--" + currentTabPage).classList.add("tab__page--active")
  })
})

Array.from(document.querySelectorAll(".accordeon__button")).forEach(accordeonButtonEl => {
    // let timeoutId;
    accordeonButtonEl.addEventListener("click", e => {
        const accordeonEl = accordeonButtonEl.parentElement;
        const accordeonContentEl = accordeonButtonEl.previousElementSibling;

        if (accordeonEl.classList.contains("accordeon--open")) {
            let accordeonContentHeight = accordeonContentEl.offsetHeight;
            accordeonContentEl.style.height = accordeonContentHeight + "px";
            accordeonEl.classList.remove("accordeon--open")
            accordeonButtonEl.querySelector("span").innerHTML = "View info"
            // timeoutId = setTimeout(() => accordeonContentEl.style.height = "")
            accordeonContentEl.style.height = ""
        } else {
            // clearTimeout(timeoutId)
            accordeonEl.classList.add("accordeon--open");
            accordeonContentEl.style.height = accordeonContentEl.scrollHeight + "px";
            accordeonButtonEl.querySelector("span").innerHTML = "Hide info"
            // accordeonContentEl.addEventListener("transitionend", () => {
              // if (timeoutId) {
              //     return
              // }
            // }, { once: true })
            accordeonContentEl.style.height = "auto"
        }
    })
})

if (document.querySelector(".buy-sub__button")) {
  document.querySelector(".buy-sub__button").addEventListener("click", (e) => {
    Array.from(document.querySelectorAll("._preview")).forEach(preivewEl => preivewEl.remove())
    Array.from(document.querySelectorAll("._hide")).forEach(hideEl => hideEl.classList.remove("_hide"))
  })
}