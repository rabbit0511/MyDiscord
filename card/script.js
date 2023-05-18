var selectedCards = [];
var maxSelectedCards = 5;
var imgFolder = "img";
var ImgList = [
    'ace-cups.jpg', 'ace-pentacles.jpg', 'ace-swords.jpg', 'ace-wands.jpg', 'chariot.jpg',
    'death.jpg', 'devil.jpg', 'eight-cups.jpg', 'eight-pentacles.jpg', 'eight-swords.jpg',
    'eight-wands.jpg', 'emperor.jpg', 'empress.jpg', 'five-cups.jpg', 'five-pentacles.jpg',
    'five-swords.jpg', 'five-wands.jpg', 'fool.jpg', 'fortune-wheel.jpg', 'four-cups.jpg',
    'four-pentacles.jpg', 'four-swords.jpg', 'four-wands.jpg', 'hanged-man.jpg', 'hermit.jpg',
    'hierophant.jpg', 'high-priestess.jpg', 'judgement.jpg', 'justice.jpg', 'king-cups.jpg',
    'king-pentacles.jpg', 'king-swords.jpg', 'king-wands.jpg', 'knight-cups.jpg', 'knight-pentacles.jpg',
    'knight-swords.jpg', 'knight-wands.jpg', 'lovers.jpg', 'magician.jpg', 'moon.jpg', 'nine-cups.jpg',
    'nine-pentacles.jpg', 'nine-swords.jpg', 'nine-wands.jpg', 'page-cups.jpg', 'page-pentacles.jpg',
    'page-swords.jpg', 'page-wands.jpg', 'queen-cups.jpg', 'queen-pentacles.jpg', 'queen-swords.jpg',
    'queen-wands.jpg', 'seven-cups.jpg', 'seven-pentacles.jpg', 'seven-swords.jpg', 'seven-wands.jpg',
    'six-cups.jpg', 'six-pentacles.jpg', 'six-swords.jpg', 'six-wands.jpg', 'stars.jpg', 'strength.jpg',
    'sun.jpg', 'temperance.jpg', 'ten-cups.jpg', 'ten-pentacles.jpg', 'ten-swords.jpg', 'ten-wands.jpg',
    'three-cups.jpg', 'three-pentacles.jpg', 'three-swords.jpg', 'three-wands.jpg', 'tower.jpg',
    'two-cups.jpg', 'two-pentacles.jpg', 'two-swords.jpg', 'two-wands.jpg', 'world.jpg']
function flipCard(cardId, card) {
    if (selectedCards.length < maxSelectedCards || true) {
        var RandomInt = getRandomInt(1, 2)
        var card = document.getElementById(cardId);
        selectedCards.push({ cardId, RandomInt });
        updateSelectedCards(RandomInt);
        card.parentNode.removeChild(card); // 移除被點擊的卡片
    } else {
        alert("已达到最大卡片数量！");
    }
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max) + 1;
    return Math.floor(Math.random() * (max - min) + min)
}
function updateSelectedCards() {
    var selectedCardsContainer = document.getElementById("selectedCards");
    selectedCardsContainer.innerHTML = "";
    console.log(selectedCards);
    for (var i = 0; i < selectedCards.length; i++) {
        var cardData = selectedCards[i];
        var cardId = cardData.cardId;
        var RandomInt = cardData.RandomInt;

        var cardElement = document.createElement("div");
        cardElement.className = "selectedCard";
        cardElement.style.backgroundImage = `url(img${RandomInt}/${ImgList[cardId]})`;

        var cardNameElement = document.createElement("div");
        cardNameElement.className = "cardName";
        cardNameElement.textContent = ImgList[cardId].replace(".jpg", "");

        cardElement.appendChild(cardNameElement);
        selectedCardsContainer.appendChild(cardElement);
    }
}
function restoreCards() {
    selectedCards = [];
    updateSelectedCards();

    var deckElement = document.getElementById("deck");
    deckElement.innerHTML = "";

    shuffledCardIds = shuffleArray(shuffledCardIds); // Shuffle the card IDs

    for (var i = 0; i < shuffledCardIds.length; i++) {
        var cardId = shuffledCardIds[i];
        var cardElement = document.createElement("div");
        cardElement.className = "card";
        cardElement.id = cardId;
        cardElement.style.left = (i * 20) + "px"; // Adjust horizontal spacing
        cardElement.onclick = function () {
            flipCard(this.id);
        };
        cardElement.style.backgroundImage = "url(card_back.jpg)"; // Add card back image
        deckElement.appendChild(cardElement);
    }
}

function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        // Pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // Swap it with the current element
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
var cardIds = [];
for (var i = 0; i < 78; i++) {
    cardIds.push(i);
}

var shuffledCardIds = shuffleArray(cardIds);
var deckElement = document.getElementById("deck");
for (var i = 0; i < shuffledCardIds.length; i++) {
    var cardId = shuffledCardIds[i];
    var cardElement = document.createElement("div");
    cardElement.className = "card";
    cardElement.id = cardId;
    cardElement.style.left = (i * 20) + "px"; // 調整卡片水平間距
    cardElement.onclick = function () {
        flipCard(this.id, this);
    };
    cardElement.style.backgroundImage = "url(card_back.jpg)"; // 添加卡片背面图像
    deckElement.appendChild(cardElement);
}
