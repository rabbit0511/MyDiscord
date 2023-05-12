var selectedCards = [];
var maxSelectedCards = 5;

function flipCard(cardId, card) {


    if (selectedCards.length < maxSelectedCards || true) {
        var card = document.getElementById(cardId);
        card.style.backgroundImage = `url(img/${cardId}.jpg)`;
        selectedCards.push(cardId);
        updateSelectedCards();
        card.parentNode.removeChild(card); // 移除被點擊的卡片
    } else {
        alert("已达到最大卡片数量！");
    }
}

function updateSelectedCards() {
    var selectedCardsContainer = document.getElementById("selectedCards");
    selectedCardsContainer.innerHTML = "";

    for (var i = 0; i < selectedCards.length; i++) {
        var cardId = selectedCards[i];
        var cardElement = document.createElement("div");
        cardElement.className = "selectedCard";
        cardElement.style.backgroundImage = `url(img/${cardId}.jpg)`;
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

    // While there remain elements to shuffle
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
for (var i = 1; i <= 54; i++) {
    cardIds.push("card" + i);
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
    console.log(i)
    deckElement.appendChild(cardElement);
}
