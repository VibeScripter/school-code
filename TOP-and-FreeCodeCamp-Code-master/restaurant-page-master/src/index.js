import createHomeDisplay from './createHomeDisplay';
import createMenuDisplay from './createMenuDisplay';
import createContactDisplay from './createContactDisplay';

// nodes
const navBtns = document.querySelectorAll(".nav-item");
const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactBtn = document.querySelector("#contact-btn");
const contentDiv = document.querySelector("#content");

const selectNavBtn = (clickedButton) => {
    navBtns.forEach(btn => {
        if(btn == clickedButton) {
            btn.classList.add("nav-item-selected");
        } else {
            btn.classList.remove("nav-item-selected");
        }
    })
}

// event handlers
homeBtn.addEventListener('click', function() {
    selectNavBtn(this);
    createHomeDisplay();
});
menuBtn.addEventListener('click', function() {
    selectNavBtn(this);
    createMenuDisplay();
});
contactBtn.addEventListener('click', function() {
    selectNavBtn(this);
    createContactDisplay();
});
contentDiv.addEventListener('animationend', function() {
    this.classList.remove("down-enter-active");
})

createHomeDisplay();
            