const frontCard = document.querySelector("#framsida");
const backCard = document.querySelector("#baksida");
const submitBtn = document.querySelector("#submitBtn");

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
