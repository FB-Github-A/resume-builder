"use strict";
window.addEventListener('load', () => {
    let name = localStorage.getItem("name");
    let jobtitle = localStorage.getItem("jobtitle");
    let phone = localStorage.getItem("phone");
    let email = localStorage.getItem("email");
    let address = localStorage.getItem("address");
    let pass1 = localStorage.getItem("pass1");
    let degree1 = localStorage.getItem("degree1");
    let uni1 = localStorage.getItem("uni1");
    let pass2 = localStorage.getItem("pass2");
    let degree2 = localStorage.getItem("degree2");
    let uni2 = localStorage.getItem("uni2");
    let pass3 = localStorage.getItem("pass3");
    let degree3 = localStorage.getItem("degree3");
    let uni3 = localStorage.getItem("uni3");
    let pass4 = localStorage.getItem("pass4");
    let degree4 = localStorage.getItem("degree4");
    let uni4 = localStorage.getItem("uni4");
    let skill1 = localStorage.getItem("skill1");
    let skill2 = localStorage.getItem("skill2");
    let skill3 = localStorage.getItem("skill3");
    let skill4 = localStorage.getItem("skill4");
    let skill5 = localStorage.getItem("skill5");
    let language1 = localStorage.getItem("language1");
    let language2 = localStorage.getItem("language2");
    let styear = localStorage.getItem("styear");
    let endyear = localStorage.getItem("endyear");
    let company = localStorage.getItem("company");
    let jobtitle1 = localStorage.getItem("jobtitle1");
    let achievement1 = localStorage.getItem("achievement1");
    let achievement2 = localStorage.getItem("achievement2");
    let achievement3 = localStorage.getItem("achievement3");
});
let print_btn = document.getElementById("print_btn");
print_btn?.addEventListener("click", () => {
    window.print();
});
