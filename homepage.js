document.addEventListener('DOMContentLoaded', function() {
    let cardImg = document.querySelector('#perfCard');
    let cardText = document.querySelectorAll('.card-text');
    let cardTextPage = document.querySelector('#cardText');
    let cardArray = [cardText[0].textContent, cardText[1].textContent, cardText[2].textContent, cardText[3].textContent];

    let PageText = document.querySelector('#PageText');
    let textBox = document.querySelectorAll('.infotext');
    let textArray = [textBox[0].textContent, textBox[1].textContent, textBox[2].textContent, textBox[3].textContent];
    let leftButton = document.querySelector('.leftButton');
    let rightButton = document.querySelector('.rightButton');
    let images = ['images/multicore.webp', 'images/compile.png', 'images/3dmark.png', 'images/spiderman.webp'];
    let index = 0;
    let max = textArray.length - 1;

    leftButton.style.visibility = "hidden";

    function update() {
        PageText.textContent = textArray[index];
        cardTextPage.textContent = cardArray[index]
        cardImg.src = images[index];


        if (index == 0) {
            leftButton.style.visibility = "hidden";
        } else {
            leftButton.style.visibility = "visible";
        }

        if (index == max) {
            rightButton.style.visibility = "hidden";
        } else {
            rightButton.style.visibility = "visible";
        }
    }

    function newGraphL() {
        if (index > 0) {
            index--;
            update();
        }
    }

    function newGraphR() {
        if (index < max) {
            index++;
            update();
        }
    }

    leftButton.addEventListener('click', newGraphL);
    rightButton.addEventListener('click', newGraphR);
});
