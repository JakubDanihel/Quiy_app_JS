//objekt s otazkamy a odpovedami a spravnymi moznostiami
const otazkyData = [
    {
        otazka: "Kedy bola vydana prva hra zo serie Doom?",
        a:      "1993",
        b:      "2016",
        c:      "1995",
        d:      "2004",
        odpoved: "a"
    }, {
        otazka: "Kedy bola vydana prva hra zo serie Wolfenstein?",
        a:      "2009",
        b:      "1981",
        c:      "1997",
        d:      "2019",
        odpoved: "b"
    }, {
        otazka: "Ktora bola najpredavanejsia hra v roku 2020?",
        a:      "Madden NFL21",
        b:      "Call of duty: Black Ops: Cold War",
        c:      "Warcraft III: Reforged",
        d:      "Cyberpunk 2077",
        odpoved: "b"
    }, {
        otazka: "Aka so vola hlavna postava z hernej serie Witcher?",
        a:      "Hlupy Jano",
        b:      "Jeneffer",
        c:      "Gerald",
        d:      "Doomslayer",
        odpoved: "c"
    }, {
        otazka: "Ktora spolocnost vydala hernu seriu Devil May Cry?",
        a:      "Activision and Blizzard",
        b:      "Bethesda",
        c:      "Capcom",
        d:      "CD Project Red",
        odpoved: "c"
    }
]

let sucasnaOtazka = 0;
let spravne = 0;

//nacitanie moznost do html
const a_txt = document.getElementById("a_txt");
const b_txt = document.getElementById("b_txt");
const c_txt = document.getElementById("c_txt");
const d_txt = document.getElementById("d_txt");

//nacitanie miesta na otazku z html
const otazka_ele = document.getElementById("otazka");

//zobratie tlacidla z html
const odoslatBtn = document.getElementById("odoslatBtn");

//spustenie quizu
spustenieQuiz();

function spustenieQuiz() {
    //vybratie otazky
    const otazka_vlozena = otazkyData[sucasnaOtazka];

    //vlozenie textu z otazkyData do html na poziciu otazky a odpovedi
    otazka_ele.innerText = otazka_vlozena.otazka;
    a_txt.innerText = otazka_vlozena.a;
    b_txt.innerText = otazka_vlozena.b;
    c_txt.innerText = otazka_vlozena.c;
    d_txt.innerText = otazka_vlozena.d;    

}

//overenie ci odpoved bola zvolena spravna
function moznostZvolene(){
    //ulozenie odpovedi
    const odpovedEle = document.querySelectorAll(".odpoved");

    let odpoved = undefined;

    //ulozenie odpovede
    odpovedEle.forEach((odpovedEle) => {
        if(odpovedEle.checked){
            odpoved = odpovedEle.id;
        }
    });

    //vratenie ak odpoved nebola zvolena
    return odpoved;
}


//zobratie tlacidla a pridanie EL
odoslatBtn.addEventListener("click", () => {

    //nacitanie odpovede
    const odpoved =  moznostZvolene();

    if (odpoved){
        //overenie ci odpoved je spravna a pridanie bodu
        if(odpoved == otazkyData[sucasnaOtazka].odpoved){
            spravne++;
        }

        //nacitanie dalsej otazky
        sucasnaOtazka++;

        //zistenie ci je este dalsia otazka a spustenie dalsej otazky inak vypise koniec a pocet spravnych odpovedi
        if(sucasnaOtazka<otazkyData.length){
            spustenieQuiz();
        }else{
            alert(`Koniec quizu! pocet spravnych odpovedi je ${spravne}`);
        }

    }
})
