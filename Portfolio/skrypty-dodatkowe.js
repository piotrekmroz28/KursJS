window.onload = function() {
    /*oMnie();*/
    $("#szkolyDiv").click(function() {
        usuwanieTresci();
        szkoly();
    });

    $("#oMnieClick").click(function() {
        usuwanieTresci()
        oMnie();
    });

    $("#kursyDiv").click(function() {
        usuwanieTresci()
        kursy();
    });

    $("#pracaDiv").click(function() {
        usuwanieTresci()
        praca();
    });

};

function praca() {
    let dane = [];
    dane[0] = [];
    dane[1] = [];
    dane[2] = [];
    dane[0][0] = ikonaStanPlus;
    dane[1][0] = opisPracaStanPlus;
    dane[0][1] = ikonaEtronika;
    dane[1][1] = opisPracaEtronika;
    tworzenieTabeli(dane);
    dane = undefined;
};

function kursy() {
    let dane = [];
    dane[0] = [];
    dane[1] = [];
    dane[2] = [];
    dane[0][0] = ikonaAutocad;
    dane[1][0] = opisSzkolAutoCAD;
    dane[2][0] = certyfAutoCad;
    dane[0][1] = ikonaEdgeCam1;
    dane[1][1] = opisSzkolEdgeCam1;
    dane[2][1] = certyfEdgeCam1;
    dane[0][2] = ikonaFundaProg;
    dane[1][2] = opisSzkolFundaProg;
    dane[2][2] = certyfFundaProg;
    dane[0][3] = ikonaEdgeCam1;
    dane[1][3] = opisSzkolEdgeCam2;
    dane[2][3] = certyfEdgeCam2;
    dane[0][4] = ikonaBazaSQLSK;
    dane[1][4] = opisSzkolBazaSQLSK;
    dane[2][4] = certyfBazaSQLSK;
    dane[0][5] = ikonaJSWprow;
    dane[1][5] = opisSzkolJSWprow;
    dane[2][5] = certyfJSWprow;
    dane[0][6] = ikonaJSUdemy1;
    dane[1][6] = opisSzkolJSUdemy1;
    dane[2][6] = certyfJSUdemy1;
    dane[0][7] = ikonaHTML5_1;
    dane[1][7] = opisHTML5_1;
    dane[2][7] = certyfHTML5_1;
    dane[0][8] = ikona4coursesin1;
    dane[1][8] = opis4coursesin1;
    dane[2][8] = certy4coursesin1;
    console.log(dane);
    tworzenieTabeli(dane);
    dane = undefined;
};

function szkoly() {
    let dane = [];
    dane[0] = [];
    dane[1] = [];
    dane[2] = [];
    dane[0][0] = ikonaSzkolaSrednia;
    dane[1][0] = opisSzkolaSr;
    dane[0][1] = ikonaSzkolaWyzsza1;
    dane[1][1] = opisSzkolaWyz1;
    dane[0][2] = ikonaSzkolaWyzsza2;
    dane[1][2] = opisSzkolaWyz2;
    console.log(dane);
    tworzenieTabeli(dane);
    dane = undefined;
};

function oMnie() {
    let dane = [];
    dane[0] = [];
    dane[1] = [];
    dane[2] = [];
    dane[0][0] = ikonaKomputera;
    dane[1][0] = opisOMnie;
    dane[0][1] = ikonaCV;
    dane[1][1] = opisCV;
    tworzenieTabeli(dane);
    dane = undefined;
};

function usuwanieTresci() {
    $("#dataId").html('');
};

function tworzenieTabeli(dane) {
    let tabela = document.createElement("table");
    let tr, td, trdod;
    trdod = document.createElement("tr");
    trdod.className = "miedzyTabelowe";
    tabela.appendChild(trdod);
    if (dane[2][0]) {
        for (let i = dane[0].length - 1; i >= 0; i--) {
            tabela.appendChild(trdod);
            tr = document.createElement("tr");
            tabela.appendChild(tr);
            td = document.createElement("td");
            td.className = "Zdjecie";
            td.innerHTML = dane[0][i];
            tr.appendChild(td);
            td = undefined;
            td = document.createElement("td");
            td.innerHTML = dane[1][i];
            td.className = "tdOpisowe";
            tr.appendChild(td);
            td = undefined;
            td = document.createElement("td");
            td.id = dane[2][i];
            td.innerHTML = dane[2][i];
            td.className = "Zdjecie1";
            tr.appendChild(td);
            td = undefined;
            tr = undefined;
        }
    } else {
        for (let i = dane[0].length; i > 0; i = i - 2) {
            if (dane[0][i - 1]) {
                tabela.appendChild(trdod);
                tr = document.createElement("tr");
                tabela.appendChild(tr);
                td = document.createElement("td");
                td.className = "Zdjecie";
                td.innerHTML = dane[0][i - 1];
                tr.appendChild(td);
                td = undefined;
                td = document.createElement("td");
                td.innerHTML = dane[1][i - 1];
                td.colSpan = "2";
                td.className = "tdOpisowe";
                tr.appendChild(td);
                td = undefined;
                tr = undefined;

            }
            if (dane[0][i - 2]) {
                tabela.appendChild(trdod);
                tr = document.createElement("tr");
                tabela.appendChild(tr);
                td = document.createElement("td");
                td.innerHTML = dane[1][i - 2];
                td.colSpan = "2";
                td.className = "tdOpisowe";
                tr.appendChild(td);
                td = undefined;
                td = document.createElement("td");
                td.className = "Zdjecie";
                td.innerHTML = dane[0][i - 2];
                tr.appendChild(td);
                td = undefined;
                tr = undefined;
            }
            tabela.appendChild(trdod);
            console.log(dane);
        }
    }
    document.getElementById("dataId").appendChild(tabela);
    let ZbiorCertyfikatow = document.getElementsByClassName('Zdjecie1');
    console.log(ZbiorCertyfikatow);
    for (let l = 0; l < ZbiorCertyfikatow.length; l++) {
        let tekstPrzejsciowy = ZbiorCertyfikatow[l].id.substr(19);
        let nazwa = tekstPrzejsciowy.substr(0, tekstPrzejsciowy.indexOf("-"));
        let tymczasowy = document.getElementById(ZbiorCertyfikatow[l].id);
        tymczasowy.addEventListener("click", function() {
            let div = document.createElement("div");
            div.className = "upperbody";
            div.id = "upperbody";
            let nazwaZdjecia = "<img src='graphics/" + nazwa + ".png' >";
            console.log(nazwaZdjecia);
            div.innerHTML = nazwaZdjecia;
            document.getElementById("dataId").appendChild(div);
            let wylacznikTym = document.getElementById("upperbody");
            wylacznikTym.addEventListener("click", function() {
                document.getElementById("dataId").removeChild(document.getElementById("upperbody"));
            });
        });
    }
    tabela = undefined;
};