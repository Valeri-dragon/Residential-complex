/*$(document).ready(function () {
  var windowModal = $(".modal");
  var btnCloseModal = $(".modal-close-button");
  var buttonPrimary = $(".button-primary");
  var currentFloor = 2; //переменная где хранится текущая переменная с этажом
  var counterUp = $(".counter-up"); //кнопка увеличения этажа
  var counterDown = $(".counter-down"); //кнопка умеьшения этажа
  var floorPath = $(".home-image path"); //каждый отдельный этаж в svg
  //функция при наведении мышью на этаж
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
    currentFloor = $(this).attr("data-floor"); //получаем значние текущего этажа
    $(".main-count__counter").text(currentFloor); //записываем значение этажа в спан
  });
   function toggleModal() {
     windowModal.toggleClass("is-open");
   }
  floorPath.on("click", toggleModal);
  btnCloseModal.on("click", toggleModal);
  buttonPrimary.on("click", toggleModal);

  counterUp.on("click", function () {
    if (currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString("es-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      $(".main-count__counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).addClass("current-floor");
    }
  });
  counterDown.on("click", function () {
    if (currentFloor > 1) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("es-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      $(".main-count__counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).addClass("current-floor");
    }
  });
 
}); */
const floor = () => {
  let currentFloor = 2;
  let mainCountCounter = document.querySelector(".main-count__counter");
  const homeImagePath = document.querySelectorAll(".home-image path");
  const counterUp = document.querySelector(".counter-up");
  const counterDown = document.querySelector(".counter-down");
  const mainImage = document.querySelector(".main-image");
  const windowModal = document.querySelector(".modal");
  const modalDialog = document.querySelector(".modal-dialog");
  const modalImage = document.querySelector(".modal-image");
  const modalInfo = document.querySelector(".modal-info");

  const btnCloseModal = modalDialog.querySelector(".modal-close-button");
  const buttonPrimary = document.querySelector(".button-primary");
  let mainCountCounter2 = document.querySelector(
    ".modal-title .main-count__counter"
  );
  const modalOpen = () => {
    if (!windowModal.classList.contains("is-open")) {
      windowModal.classList.add("is-open");
    }
  };
  const modalClose = () => {
    if (windowModal.classList.contains("is-open")) {
      windowModal.classList.remove("is-open");
    }
  };

  windowModal.addEventListener("click", (ev) => {
    if (ev.target == modalImage || ev.target == modalInfo) {
      ev.stopPropagation();
    } else {
      modalClose();
    }
  });
  if (btnCloseModal) {
    btnCloseModal.addEventListener("click", (event) => {
      console.log(event.target);
      if (event.target == modalImage || event.target == modalInfo) {
        event.stopPropagation();
      } else {
        modalClose();
      }
    });
  }
  homeImagePath.forEach((item) => {
    mainImage.addEventListener("mouseover", (event) => {
      if ((currentFloor = item.getAttribute("data-floor"))) {
        if (item.classList.contains("current-floor")) {
          item.classList.remove("current-floor");

          mainCountCounter.innerHTML = currentFloor;
        }
      }
    });

    item.addEventListener("click", () => {
      if (!item.classList.contains("current-floor")) {
        item.classList.add("current-floor");
        mainCountCounter2.innerHTML = item.getAttribute("data-floor");
        mainCountCounter.innerHTML = item.getAttribute("data-floor");
        modalOpen();
      }
    });
  });
  counterUp.addEventListener("click", () => {
    if (currentFloor == 18) {
      currentFloor = 1;
    }
    currentFloor++;

    homeImagePath.forEach((elem) => {
      if (currentFloor == elem.getAttribute("data-floor")) {
        if (!elem.classList.contains("current-floor")) {
          elem.classList.add("current-floor");
          if (currentFloor < 10 && currentFloor > 1) {
            mainCountCounter.innerHTML = "0" + currentFloor;
          } else if (currentFloor > 9 && currentFloor < 19) {
            mainCountCounter.innerHTML = currentFloor;
          }
        }
      } else {
        elem.classList.remove("current-floor");
      }
    });
  });
  buttonPrimary.addEventListener("click", () => {
    homeImagePath.forEach((ele) => {
      if (currentFloor == ele.getAttribute("data-floor")) {
        mainCountCounter2.innerHTML = ele.getAttribute("data-floor");
      }
      modalOpen();
    });
  });
  counterDown.addEventListener("click", () => {
    if (currentFloor == 2) {
      currentFloor = 19;
    }
    currentFloor--;
    homeImagePath.forEach((elem1) => {
      if (currentFloor == elem1.getAttribute("data-floor")) {
        if (!elem1.classList.contains("current-floor")) {
          elem1.classList.add("current-floor");
          if (currentFloor < 10 && currentFloor > 1) {
            mainCountCounter.innerHTML = "0" + currentFloor;
          } else if (currentFloor > 9 && currentFloor < 19) {
            mainCountCounter.innerHTML = currentFloor;
          }
        }
      } else {
        elem1.classList.remove("current-floor");
      }
    });
  });
};
floor();
