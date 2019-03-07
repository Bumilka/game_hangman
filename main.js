var haslo = "Bez pracy nie ma kołaczy";
var haslo1 = "";
var dlugosc = haslo.length;
var litery = new Array(35);
var ile_skuch = 0;
var litery = ["A","Ą","B", "C", "Ć","D", "E", "Ę", "F", "G", "H", "I", "J", "K", "L", "Ł", "M", "N","Ń", "O","Ó", "P","Q","R", "S","Ś", "T", "U", "V","W", "X", "Y", "Z", "Ź", "Ż"];
var yes = new Audio("click.wav");
var no = new Audio("click.wav");

for (i=0; i<dlugosc; i++){
    if( haslo.charAt(i) == " ") haslo1 = haslo1 + " ";
        else haslo1 = haslo1 + "-";
}

haslo = haslo.toUpperCase(); // hasło napisane wielkimi literami

function wypisz_haslo (params) {
    document.getElementById("plansza").innerHTML = haslo1;
}
window.onload = start;


function start(){
    var tresc_diva="";

    for (i=0; i<=34; i++){

        var element = "lit" + i;
        tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>';
        //((i+1) % 7==0) to samo co : i == 6, i == 13, i == 20, i == 27;
        if ((i+1) % 7==0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>'
    }

    document.getElementById("alfabet").innerHTML= tresc_diva;

    wypisz_haslo();
}

String.prototype.ustawZnak = function(miejsce, znak) {
    if(miejsce > this.length -1 ) return this.toString();
    else return this.substr(0, miejsce) + znak + this.substr(miejsce +1);
}

function sprawdz(nr){
var trafiona = false;

    for(i=0; i<dlugosc; i++){
        if(haslo.charAt(i) == litery[nr]){
            haslo1 = haslo1.ustawZnak(i, litery[nr]);
            trafiona = true;
        }
    }
    if(trafiona == true){
        yes.play();
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border =  "3px solid #00C000";
        document.getElementById(element).style.cursor =  "default";
        wypisz_haslo();
    }
    else{
        no.play();
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border =  "3px solid #C00000";
        document.getElementById(element).style.cursor =  "default";
        document.getElementById(element).setAttribute("onclick",";");


//skucha
        ile_skuch++
        var obraz = "img/s"+ile_skuch + ".jpg"
        document.getElementById("szubienica").innerHTML='<img src="'+obraz+'" alt=""/>'
    }
//wygrana
    if(haslo == haslo1)
    document.getElementById("alfabet").innerHTML="Tak jest! Podano prawidłowe hasło:" +haslo+'<br/><br/><span class="reset" onclick="location.reload()"> JESZCZE RAZ?</span> '

//przegrana
    if(ile_skuch >= 9)
    document.getElementById("alfabet").innerHTML="Przegrana! Prawidłowe hasło: " +haslo+'<br/><br/><span class="reset" onclick="location.reload()"> JESZCZE RAZ?</span> '

}
