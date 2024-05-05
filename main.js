import './sass/styles.scss'

document.querySelector(".page__people-tab-buttons").addEventListener("click", (e) => {
  const tabPanel = e.currentTarget;
  const tabContent = tabPanel.nextElementSibling;
  const currentButton = e.target;
  const currentPeopleList = currentButton.dataset.peopleList

  let counter = 0;
  let index = 0;

  tabPanel.querySelectorAll("button").forEach(button => {
    if (button === currentButton) {
      index = counter
    } else {
      counter++
    }
  });

  tabPanel.querySelector(".page__people-tab-button--active").classList.remove("page__people-tab-button--active")
  tabPanel.querySelector("span").style.left = `${index * 50}%`;
  currentButton.classList.add("page__people-tab-button--active")

  tabContent.querySelector(".page__people-list--active").classList.remove("page__people-list--active")
  tabContent.querySelector(".page__people-list--" + currentPeopleList).classList.add("page__people-list--active")
})

