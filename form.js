let sparaKnapp = document.getElementById('sparaknapp'); //hämtar knappen
sparaKnapp.addEventListener('click', function(e){ //lyssnar på click och callback >
    
    e.preventDefault(); //Denna rad pga förhindra att sidan laddas om
    
    let frontText = document.getElementById('front'); // hämtar framsidns input
    let framsidaKort = document.getElementById('framsida1'); // hämtar diven som framsidans input ska in i.

    let bakText = document.getElementById('bak'); // hämtar baksidans input
    let baksidaKort = document.getElementById('baksida1'); // hämtar diven som baksidans input ska in i.

    framsidaKort.innerHTML = frontText.value; //skrier/sätter ut inputen med innerhtml av framsidans value
    baksidaKort.innerHTML = bakText.value; // skriver/sätter ut inputen med innerhtml av baksidans value
    baksidaKort.style.display = "none";
});

console.log("hej");
