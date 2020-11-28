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

function klik(shtoklik) {
    var x = document.getElementById(shtoklik);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

var count = [];
var n;
function likes(kade, n){
    if(count[n] == null){
        count[n] = 0;
    }
    count[n]++;
    document.getElementById(kade).innerHTML = count[n] + " likes";
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


var komentari = "";
var n;
function comment(kade, komentar){
    var koj = ime;
    var kom = document.getElementById(komentar).value;
    kom.value = "";
    komentari += "<li>"+koj+": "+kom+"</li>";
    document.getElementById(kade).innerHTML = komentari;
}