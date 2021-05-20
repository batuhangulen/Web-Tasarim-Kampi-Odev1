// görev 1
    let btn1 = document.querySelector(".sutun2 > #gorev1 > button");
    var h2ler = document.getElementsByTagName("h2");
    var dizi1 = [h2ler[0].innerHTML,h2ler[1].innerHTML,h2ler[2].innerHTML];
    var liste1 = document.querySelector(".sutun2 > #gorev1 > #liste1");
    btn1.onclick=function()
    {
        for( var i = 0; i < dizi1.length; i++)
        {
            var li = document.createElement("li");
            li.textContent = dizi1[i];
            liste1.appendChild(li);
        }
        //dizi1[0].style.cssText = "color: red";
        //dizi1[1].style.cssText = "color: red";
        //dizi1[2].style.cssText = "color: red";
    };
// görev 2
    let btn2 = document.querySelector(".sutun2 > #gorev2 > button");
    var h2_adedi = document.getElementsByTagName("h2");
    adet = h2_adedi.length;
    btn2.onclick=function()
    {
        let text2 = document.getElementById("text2");
        text2.value = adet;
    };
// görev 3
    let btn3 = document.querySelector(".sutun2 > #gorev3 > button");
    var h1ler = document.getElementsByTagName("h1");
    var h1 = [h1ler[0].innerHTML];
    btn3.onclick=function()
    {
        let text3 = document.getElementById("text3");
        text3.value = h1
    }
// görev 4
    let btn4 = document.querySelector(".sutun2 > #gorev4 > button");
    var p_adedi = document.getElementsByTagName("p");
    var p = p_adedi.length;
    btn4.onclick = function()
    {
        for (var j = 0; j < p-1; j++)
        {
            var metin = [p_adedi[j].innerHTML];
            yenimetin = [metin[0].length];
            h2ler[j].textContent += " ( " + yenimetin + " karakter )";
        } 
    }
// görev 5
    let btn5 = document.querySelector(".sutun2 > #gorev5 > button");
    btn5.onclick = function()
    {
        for (var f = 0; f < adet-1; f++) //h2 tagına sahip olanları zaten ikinci soruda çekmiştik.
        {
            if (f % 2 == 1)
            {
                h2_adedi[f].style.cssText = "color: orange";
            }
            else
            {
                h2_adedi[f].style.cssText = "color: blue";
            } 
        }
        h1ler[0].style.cssText = "color: red"; //h1 tagına sahip olanları zaten üçüncü soruda çekmiştik.
    }
// görev 6
    let btn6 = document.querySelector(".sutun2 > #gorev6 > button");
    btn6.onclick = function()
    {
        $(h1ler[0]).fadeOut(1000); //h1 tagına sahip olanları zaten üçüncü soruda çekmiştik.
    }
// görev 7
    let btn7 = document.querySelector(".sutun2 > #gorev7 > button");
    var liste2 = document.querySelector(".sutun2 > #gorev7 > #liste2 ");
    btn7.onclick = function()
    {
        var baslik = document.getElementsByTagName("h2");
        for (var r = 0; r < baslik.length-1; r++)
        {
            var can_ıceren = $("h2:contains('can')");
            var li2 = document.createElement("li");
            li2.textContent = can_ıceren[r].innerHTML;
            liste2.appendChild(li2);
        }
    };  
// görev 8
    let btn8 = document.querySelector(".sutun2 > #gorev8 > button");
    btn8.onclick = function() 
    {
        $(".satir > .sutun > article > h1").append("<br> <br> Lorem");
        $.ajax
        (
            {
                url: "lorem.html",
                type: "get",
                success: function(yazi)
                {
                    $(".satir > .sutun > article > h1").append("<h6>" + yazi + "</h6>");
                }
            }
        )
    }
// görev 9
    let text9 = document.getElementById("text9");
    $(h1ler).mouseover(function()
    {
        text9.value = h1;
    });
    if ($(h2ler[0]).mouseover(function()
    {
        text9.value = h2ler[0].innerHTML;
    }));
    if ($(h2ler[1]).mouseover(function()
    {
        text9.value = h2ler[1].innerHTML;
    }));
    if ($(h2ler[2]).mouseover(function()
    {
        text9.value = h2ler[2].innerHTML;
    }));
    if ($(h2ler[3]).mouseover(function()
    {
        text9.value = h2ler[3].innerHTML;
    }));
    if ($(h2ler[4]).mouseover(function()
    {
        text9.value = h2ler[4].innerHTML;
    }));
    if ($(h2ler[5]).mouseover(function()
    {
        text9.value = h2ler[5].innerHTML;
    }));
    if ($(h2ler[6]).mouseover(function()
    {
        text9.value = h2ler[6].innerHTML;
    }));
    if ($(h2ler[7]).mouseover(function()
    {
        text9.value = h2ler[7].innerHTML;
    }));
    if ($(h2ler[8]).mouseover(function()
    {
        text9.value = h2ler[8].innerHTML;
    }));
    if ($(h2ler[9]).mouseover(function()
    {
        text9.value = h2ler[9].innerHTML;
    }));
    if ($(h2ler[10]).mouseover(function()
    {
        text9.value = h2ler[10].innerHTML;
    }));
    if ($(h2ler[11]).mouseover(function()
    {
        text9.value = h2ler[11].innerHTML;
    }));
    if ($(h2ler[12]).mouseover(function()
    {
        text9.value = h2ler[12].innerHTML;
    }));
    if ($(h2ler[13]).mouseover(function()
    {
        text9.value = h2ler[13].innerHTML;
    }));
    if ($(h2ler[14]).mouseover(function()
    {
        text9.value = h2ler[14].innerHTML;
    }));
// görev 10
    let btn10 = document.querySelector(".sutun2 > #gorev10 > button");
    btn10.onclick = function()
    {
        checkresimi = document.getElementsById("#resim");
        checkresimi.style.cssText = "visibility: visible";
    }