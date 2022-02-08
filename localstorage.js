const frontCard = document.querySelector("#front");
const backCard = document.querySelector("#bak");
const submitBtn = document.querySelector("#sparaknapp");

const cardArr = () => {
  if(frontCard.value === "" || backCard.value === "") {
    alert("Please complete the card.")
  } else {
    const cards = (() => {
      const cardValue = localStorage.getItem('card');
      return cardValue === null
        ? []
        : JSON.parse(cardValue);
    })();

    cards.push({"frontside": frontCard.value, "backside": backCard.value});

    localStorage.setItem('card', JSON.stringify(cards));
  }
}

const clearFields = () => {
  frontCard.value = "";
  backCard.value = "";
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  cardArr();
  clearFields();

})
