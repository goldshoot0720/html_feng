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
            前一年與該年33歲，\n\
            1988-93=臺灣民主國，\n\
            1988-101=福建臺灣省(定案)，\n\
            1988-111=臺北府知府，\n\
            首都基輔=首輔，\n\
            喬治亞引導石";
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
            高考三級資訊處理榜首，\n\
            委任第五職等(桃園市政府)，\n\
            簡任第十二職等(臺北資訊局代理局長)，\n\
            臺北市長(臺北府知府)，\n\
            臺灣首相(首輔，實權)\n\
            兼任\n\
            臺灣最高元首(虛位)\n\
            兼任\n\
            紫微聖人";
            myText2.innerText = "2025年7月5日4時18分，\n\
            開第一槍，爆發南海(包含太平島)戰爭，\n\
            解放軍大獲全勝，留下龍樹諒訊息給後人";
        } else if (myValue === "2027") {
            myText.innerText = "鋒兄版本一，\n\
            (111-93=18大→21大=2027，三=before ww3)，\n\
            https://imgur.com/DtviqIT\n\
	    鋒兄版本二，\n\
	    1988+1+9+8+8+1+1+2+7年~1988+1+9+8+9+0+8+3+1年(鋒兄初戀)";
            myText2.innerText = "同年台灣回歸(和平解放，空戰不轟炸，無陸戰，海戰結束)，\n\
            留下逢甲碟仙訊息給後人"
        }else if (myValue === "2029") {
            myText.innerText = "鋒兄版本(111→118=2029，三=ww3)，\n\
            https://imgur.com/a/KmIQKNp";
            myText2.innerText = "同年爆發第三次世界大戰(歐洲戰場：波蘭，德國)，\n\
            留下印度神童訊息給後人";
        }else if (myValue === "2032") {
            myText.innerText = "";
            myText2.innerText = "聯合國就地解散，核戰爭爆發可能性不為零";
        }
        else if (myValue === "2035") {
            myText.innerText = "紫微聖人";
            myText2.innerText = "末劫年或封神榜，\n\
            留下五公經和聖經啟示錄訊息給後人，\n\
            The Second Advent，海平面上升可能性不為零\n\
            參考資料：\n\
            http://www.boder.idv.tw/ghud006.htm\n\
            https://www.chinesebible.org.tw/?p=5968";
        } 
        else if (myValue === "2069") {
            myText.innerText = "世界政府，世界大同";
            myText2.innerText = "天堂人口無上限，\n\
            地獄人口無上限，\n\
            人間人口總量管制並分流，參考指標五億，\n\
            請抽號碼牌，請按號碼排隊投胎，\n\
            新地球伺服器A~新地球伺服器Z，人口總數130億人";
        } 
        else if (myValue === "2112") {
            myText.innerText = "天界公務員，\n\
            天二代，來人間歷練，\n\
            有資格掌管天界，\n\
            5%約等於人間公務員，\n\
	    再5%等於天界公務員(不含地府)\n";
            myText2.innerText = "";
        } else {
            myText.innerText = "";
            myText2.innerText = "";
        }
    }
