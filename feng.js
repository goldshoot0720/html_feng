    window.onload = function() {
        document.getElementById("myYear").selectedIndex = 0;
	let myText = document.getElementById("myText");
	myText.innerText = "鋒兄出生";
    };

function SelectOnchange() {
        let myValue = document.getElementById("myYear").value;
        let myText = document.getElementById("myText");
        let myText2 = document.getElementById("myText2");


        if (myValue === "1988") {
            myText.innerText = "鋒兄出生";
            myText2.innerText = "";
        } else if (myValue === "2004") {
            myText.innerText = "2004-1911=93年，\n\
            國中畢業紀念冊簽名101名";
            myText2.innerText = "";
        } else if (myValue === "2012") {
            myText.innerText = "2012-1911=101年，\n\
            一般替代役入營第111梯次";
            myText2.innerText = "";
        } else if (myValue === "2022") {
            myText.innerText = "2022-1911=111年，\n\
            前一年與該年33歲";
	    myText2.innerText = "桃園縣立東興國民中學\n\
              第十七屆畢業紀念冊\n\
              學生數：【33】，\n\
              1988+33\n\
              班級：5、12、18、23\n\
              5◡12：\n\
              【委任第五職等】◡【簡任第十二職等】，\n\
              1988+1+9+8+8+1+1+2+7(37)~1988+52\n\
              12◡18：\n\
              第12屆【臺北市長】◡第18屆臺北市議員，\n\
              2040~2042(52~54)\n\
              18◡23：\n\
              第18屆立法委員◡第23任【總統】，\n\
              2052~2056(64~68)\n\
              5◡23：\n\
              5班◡23號，\n\
              國中補習班同學，\n\
              一女\n\
              座號和：\n\
              1號、32號，\n\
              國中同班同學，\n\
              一男一女";
        } else if (myValue === "2025") {
            myText.innerText = "1988+1+9+8+8+1+1+2+7年，\n\
            高考三級資訊處理榜首";
            myText2.innerText = "2025年7月5日4時18分，\n\
            南海";
        } else if (myValue === "2027") {
            myText.innerText = "";
            myText2.innerText = "逢甲碟仙"
        }else if (myValue === "2029") {
            myText.innerText = "三";
            myText2.innerText = "印度神童";
        }else if (myValue === "2032") {
            myText.innerText = "";
            myText2.innerText = "核";
        }
        else if (myValue === "2035") {
            myText.innerText = "";
            myText2.innerText = "末劫";
        } 
        else if (myValue === "2069") {
            myText.innerText = "大同";
            myText2.innerText = "";
        } 
        else if (myValue === "2112") {
            myText.innerText = "天界公務員";
            myText2.innerText = "";
        } else {
            myText.innerText = "";
            myText2.innerText = "";
        }
    }
