var komentari = [];
var count = [];
sessionStorage.ime = "";

function start(){
    if(sessionStorage.boja == "1"){
        document.getElementsByTagName("BODY")[0].style.backgroundColor = "rgb(48, 48, 48)";
        document.getElementsByClassName("mjheader")[0].style.backgroundColor = "white";
        document.getElementsByClassName("mjheader")[0].style.boxShadow = "-4px 4px 10px 10px black";
        var p = document.getElementsByTagName("p");
        for(i=0; i<p.length; i++){
            p[i].style.color = "lightgray";
        }
        document.getElementById("ChangeColor").src = "images/turnOn.svg";
    }
    else{
        sessionStorage.setItem("boja", "0");
    }

    if(sessionStorage.nav == "block"){
        x = document.getElementById("navigacija");
        x.style.display = "block";
    }
    else{
        sessionStorage.setItem("nav", "none");
    }
}
function DarkMode(){
    var boja = sessionStorage.getItem("boja");
    if(boja == "0"){
        document.getElementsByTagName("BODY")[0].style.backgroundColor = "rgb(48, 48, 48)";
        document.getElementsByClassName("mjheader")[0].style.backgroundColor = "white";
        document.getElementsByClassName("mjheader")[0].style.boxShadow = "-4px 4px 10px 10px black";
        var p = document.getElementsByTagName("p");
        for(i=0; i<p.length; i++){
            p[i].style.color = "lightgray";
        }
        document.getElementById("ChangeColor").src = "images/turnOn.svg";
        sessionStorage.setItem("boja", "1");
    }
    else{
        document.body.style.backgroundColor = "white";
        document.getElementsByClassName("mjheader")[0].style.boxShadow = "-4px 4px 10px 10px gray";
        var p = document.getElementsByTagName("p");
        for(i=0; i<p.length; i++){
            p[i].style.color = "black";
        }
        document.getElementById("ChangeColor").src = "images/turnOff.svg";
        sessionStorage.setItem("boja", "0");
    }
}

function blog(kade, naslov, ime, prezime, email, text) {
    var currentTime = new Date ( );
    var a = document.getElementById(naslov).value;
    var b = document.getElementById(ime).value;
    var c = document.getElementById(prezime).value;
    var d = document.getElementById(text).value;
    var naslovin = "<section style='color: white; font-size: 35px;'>"+a+"</section>";
    var koj = "<section style='color: rgb(207, 207, 207); font-size: 15px;'>"+b+" "+c+", Датум: "+currentTime.getDate ( )+"-"+(currentTime.getMonth ()+1) +"-"+currentTime.getFullYear ( )+"</section>";
    var content="<p style='color: white; font-size: 18px;'>"+d+"</p>";
    document.getElementById(kade).innerHTML = naslovin + koj + content + "<hr style='color: white';>";
}

function klik() {
    var nav = sessionStorage.getItem("nav") 
    x = document.getElementById("navigacija");
    if (nav == "none") {
        x.style.display = "block";
        sessionStorage.setItem("nav", "block");
    } else {
        x.style.display = "none";
        sessionStorage.setItem("nav", "none");
    }
}

function click(shtoklik) {
    var x = document.getElementById(shtoklik);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

            
function load(event){
    document.getElementById('newimage').innerHTML = "<section style='padding-top: 30px;'>"+
        "<section>"+
        "<a href='https://www.instagram.com/joveskim'>"+
        "<section class='usernameslika'>"+
            "joveskim"+
        "</section>"+
            "<img src='images/slika1.jpg' alt='profilna' width='40' height='40' style='border-radius: 100%; border: 2px solid white;'>"+
                        "</a>"+
                        "<p>"+
                            "<img id='output' alt='slika1' width='450' height='450'>"+
                        "</p>"+
                        "<section style='overflow: hidden;''>"+
                            "<section class='comment'>"+
                                "<input id='shtonew' type='text' placeholder='Comment...'>"+
                                "<button id='commentb' type='button'>Send</button>"+
                            "</section>"+
                            "<section class='like'>"+
                                "<input id='likeb' type='image' src='images/like.png' width='30' height='30' style='z-index: 2;'>"+
                            "</section>"+
                            "<br><br>"+             
                        "</section>"+
                        "<section id='kadenew' style='color: white; padding-top: 5px;'></section>"+
                        "<section style='padding-top: 5px;'>"+
                            "<details>"+
                                "<summary style='color: rgb(107, 107, 107);'>View all comments...</summary>"+
                                "<ul style='color: white;'>"+
                                    "<div id='komentarnew'></div>"+
                                "</ul>"+
                            "</details>"+
                        "</section>"+
                    "</section>"+
                    "<p style='padding-top: 1px'>"+
                        "<hr class='hr'>"+
                    "</p>"+
                "</section>"
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
}

function startinsta(){
    if(sessionStorage.boja == "1"){
        document.getElementsByTagName("BODY")[0].style.backgroundColor = "rgb(48, 48, 48)";
        document.getElementsByClassName("mjheader")[0].style.backgroundColor = "white";
        document.getElementsByClassName("mjheader")[0].style.boxShadow = "-4px 4px 10px 10px black";
        document.getElementById("martinID").style.color = "white";
        document.getElementById("martinID2").style.color = "white";
        var p = document.getElementsByTagName("p");
        for(i=0; i<p.length; i++){
            p[i].style.color = "lightgray";
        }
        document.getElementById("ChangeColor").src = "images/turnOn.svg";
    }
    else{
        sessionStorage.setItem("boja", "0");
    }

    if(sessionStorage.nav == "block"){
        x = document.getElementById("navigacija");
        x.style.display = "block";
    }
    else{
        sessionStorage.setItem("nav", "none");
    }

    for(var i=1; i<=6; i++){
        if(sessionStorage.getItem(i) != null){
            for(var j=0; j<sessionStorage.getItem(i); j++){
                if(sessionStorage.getItem(i*100+j) != null){
                    var kadeStart = "komentar" + i;
                    var comzStart = sessionStorage.getItem(i*100+j);
                    var com = document.createElement("LI");
                    com.innerHTML = comzStart+"<img id="+(i*100+j)+" src='images/deleteComment.svg' onclick='deleteComment("+(i*100+j)+")' alt='Delete Comment' width='auto' height='30px'>";
                    document.getElementById(kadeStart).append(com);
                }
            }
            komentari[i] = sessionStorage.getItem(i);
        }
    }

    for(var i=1; i<=6; i++){
        if(sessionStorage.getItem(i+10000) != null){
            count[i] = sessionStorage.getItem(10000+i);
            var kadeLikes = "kade" + i;
            document.getElementById(kadeLikes).innerHTML = count[i]+" likes";
        }
    }
}
function DarkModeinsta(){
    var boja = sessionStorage.getItem("boja");
    if(boja == "0"){
        document.getElementsByTagName("BODY")[0].style.backgroundColor = "rgb(48, 48, 48)";
        document.getElementsByClassName("mjheader")[0].style.backgroundColor = "white";
        document.getElementsByClassName("mjheader")[0].style.boxShadow = "-4px 4px 10px 10px black";
        document.getElementById("martinID").style.color = "white";
        document.getElementById("martinID2").style.color = "white";
        var p = document.getElementsByTagName("p");
        for(i=0; i<p.length; i++){
            p[i].style.color = "lightgray";
        }
        document.getElementById("ChangeColor").src = "images/turnOn.svg";
        sessionStorage.setItem("boja", "1");
    }
    else{
        document.body.style.backgroundColor = "white";
        document.getElementsByClassName("mjheader")[0].style.boxShadow = "-4px 4px 10px 10px gray";
        document.getElementById("martinID").style.color = "black";
        document.getElementById("martinID2").style.color = "black";
        var p = document.getElementsByTagName("p");
        for(i=0; i<p.length; i++){
            p[i].style.color = "black";
        }
        document.getElementById("ChangeColor").src = "images/turnOff.svg";
        sessionStorage.setItem("boja", "0");
    }
}

var m;
function comment(kade, komentar, m){
    if(komentari[m] == null){
        komentari[m] = 0;
    }
    var koj = sessionStorage.ime;
    var kom = document.getElementById(komentar).value;
    
    document.getElementById(komentar).value = "";
    
    var stotka = m*100;
    var komBR = stotka + komentari[m];
    komentari[m]++;
    
    var com = document.createElement("LI");
    com.innerHTML = koj + ": " + kom + "<img id="+komBR+" src='images/deleteComment.svg' onclick='deleteComment("+komBR+", "+m+")' alt='Delete Comment' width='auto' height='30px'>";
    
    var comz = koj + ": " + kom;
    
    sessionStorage.setItem(m, komentari[m]);
    sessionStorage.setItem(komBR, comz);
    
    document.getElementById(kade).append(com);
}

var k;
function deleteComment(k, m){
    console.log("Deleting from picture "+m+", on position "+k)
    sessionStorage.removeItem(k);
    $(document).ready(function(){
        $("#"+k).click(function(){
          $(this).hide();
        });
    });
    // window.location.reload();
}

var n;
function likes(kade, n){
    if(count[n] == null){
        count[n] = 0;
    }
    count[n]++;
    sessionStorage.setItem(10000+n, count[n]);
    document.getElementById(kade).innerHTML = count[n] + " likes";
}