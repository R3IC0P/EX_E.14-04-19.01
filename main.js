function price(){
    let _nrKawy = Math.floor(document.getElementById("nr-kawy").value);
    let _wagaDg = Math.floor(document.getElementById("waga-dg").value);
    let _endVal = "Koszt zamównienia wynosi ";

    switch(_nrKawy){
        case 1:
            _endVal += 5*_wagaDg + " zł";
            break;
        case 2:
            _endVal += 7*_wagaDg + " zł";
            break;
        case 3:
            _endVal += 6*_wagaDg + " zł";
            break;
    
        default:
            _endVal += "0 zł";
            break;
    }

    document.querySelector("#wynik").innerHTML = `<p>${_endVal}</p>`;
};