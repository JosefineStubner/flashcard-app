const framsidaKort = document.getElementById('framsida1');
const baksidaKort = document.getElementById('baksida1');

const switchBtn = document.querySelector("#switch1");

switchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if(baksidaKort.style.display = "none") {
    baksidaKort.style.display = "block";
    framsidaKort.style.display = "none";
  } 
})