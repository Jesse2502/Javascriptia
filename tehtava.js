function sortNumbers() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);
    
    var sortedNumbers = [num1, num2, num3].sort(function(a, b){return a - b});

    document.getElementById("result").innerText = "Järjestetyt numerot: " + sortedNumbers.join(", ");
   
}

function tehtava2() {
    var l1, l2, l3, l4, l5, suurin;
    l1 = parseInt(document.getElementById("luku1").value);
    l2 = parseInt(document.getElementById("luku2").value);
    l3 = parseInt(document.getElementById("luku3").value);
    l4 = parseInt(document.getElementById("luku4").value);
    l5 = parseInt(document.getElementById("luku5").value);
    if (l1 < l2 && l3<l2 && l4 <l2 && l5<l2)
    {
        suurin = 12;
    }
    else if (l1 <l3 &&l4 < l3 && l5<l3)
    {
        suurin = l3;
    }
    else if(l1< l4 && l5 <l4)
    {
        suurin = l4;

    }
    else if (l1 < l5)
    {
        suurin = l5;
    }
    else{
        suurin =  l1;
    }
    document.write("Annoit luvut : " + l1+ " "+ l2+ " " + l3+ " "+ l4 + " " + l5);
    document.write("<br> suurin niistä on: " + suurin);
}
function tehtava3(){
    var luku;
    luku = parseInt(document.getElementById("arvo").value);
    document.write("Antamasi luku on:" + luku);
    if(luku%2 == 0){
        document.write("<br> Antamasi luku on parillinen.");
    }
    else{
        document.write("<br> Antamasi luku on pariton.");
    }
}