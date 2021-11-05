// ==UserScript==
// @name         Okcupid nik211105
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  press automatically pass button if % less than 80% and age <38
// @author       Nikos Siolios
// @match        https://www.okcupid.com/home
// @icon         none
// @grant        none
// ==/UserScript==

   setInterval(function(){
     var firstdigit = document.getElementsByClassName("match-percentage match-percentage--circle")[0].innerHTML[0];
     document.getElementsByClassName("card-content-header__text")[0].innerHTML=firstdigit;
     if (!(firstdigit=="8") && !(firstdigit=="9"))
        {
          document.getElementsByClassName("dt-action-buttons-button pass")[0].click();
       }
        else{
            var age= document.getElementsByClassName("card-content-header__location")[0].innerHTML;
            if (age<"38"){
              document.getElementsByClassName("dt-action-buttons-button pass")[0].click();
            }
            else{
               document.getElementsByClassName("dt-action-buttons-button like")[0].click();
            }
            }
    }, 1000);