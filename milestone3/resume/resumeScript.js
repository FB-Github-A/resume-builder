"use strict";
window.addEventListener("load", () => {
    let name = localStorage.getItem("name");
    let desig = localStorage.getItem("desig");
    let Phone = localStorage.getItem("Phone");
    let email = localStorage.getItem("email");
    let address = localStorage.getItem("address");
    let pass = localStorage.getItem("pass");
    let deg = localStorage.getItem("deg");
    let uni = localStorage.getItem("uni");
    let pass1 = localStorage.getItem("pass1");
    let deg1 = localStorage.getItem("deg1");
    let uni1 = localStorage.getItem("uni1");
    let pass2 = localStorage.getItem("pass2");
    let deg2 = localStorage.getItem("deg2");
    let uni2 = localStorage.getItem("uni2");
    let pass3 = localStorage.getItem("pass3");
    let deg3 = localStorage.getItem("deg3");
    let uni3 = localStorage.getItem("uni3");
    let skill1 = localStorage.getItem("skill1");
    let skill2 = localStorage.getItem("skill2");
    let skill3 = localStorage.getItem("skill3");
    let skill4 = localStorage.getItem("skill4");
    let skill5 = localStorage.getItem("skill5");
    let language1 = localStorage.getItem("lang1");
    let language2 = localStorage.getItem("lang2");
    let styear = localStorage.getItem("styear");
    let endyear = localStorage.getItem("endyear");
    let company = localStorage.getItem("company");
    let jobTitle = localStorage.getItem("jobTitle");
    let achv1 = localStorage.getItem("achv1");
    let achv2 = localStorage.getItem("achv2");
    let achv3 = localStorage.getItem("achv3");
    let resName = document.getElementById("resName");
    resName.textContent = name;
    let resDesig = document.getElementById("resDesig");
    resDesig.textContent = desig;
    let resPhone = document.getElementById("resPhone");
    resPhone.textContent = Phone;
    let resEmail = document.getElementById("resEmail");
    resEmail.textContent = email;
    let resAddress = document.getElementById("resAddress");
    resAddress.textContent = address;
    let resPass = document.getElementById("resPass");
    resPass.textContent = pass;
    let resDeg = document.getElementById("resDeg");
    resDeg.textContent = deg;
    let resUni = document.getElementById("resUni");
    resUni.textContent = uni;
    let resPass1 = document.getElementById("resPass1");
    resPass1.textContent = pass1;
    let resDeg1 = document.getElementById("resDeg1");
    resDeg1.textContent = deg1;
    let resUni1 = document.getElementById("resUni1");
    resUni1.textContent = uni1;
    let resPass2 = document.getElementById("resPass2");
    resPass2.textContent = pass2;
    let resDeg2 = document.getElementById("resDeg2");
    resDeg2.textContent = deg2;
    let resUni2 = document.getElementById("resUni2");
    resUni2.textContent = uni2;
    let resPass3 = document.getElementById("resPass3");
    resPass3.textContent = pass3;
    let resDeg3 = document.getElementById("resDeg3");
    resDeg3.textContent = deg3;
    let resUni3 = document.getElementById("resUni3");
    resUni3.textContent = uni3;
    let resSkill1 = document.getElementById("resSkill1");
    resSkill1.textContent = skill1;
    let resSkill2 = document.getElementById("resSkill2");
    resSkill2.textContent = skill2;
    let resSkill3 = document.getElementById("resSkill3");
    resSkill3.textContent = skill3;
    let resSkill4 = document.getElementById("resSkill4");
    resSkill4.textContent = skill4;
    let resSkill5 = document.getElementById("resSkill5");
    resSkill5.textContent = skill5;
    let resLang1 = document.getElementById("resLang1");
    resLang1.textContent = language1;
    let resLang2 = document.getElementById("resLang2");
    resLang2.textContent = language2;
    let resStartYear = document.getElementById("resStartYear");
    resStartYear.textContent = styear;
    let resEndYear = document.getElementById("resEndYear");
    resEndYear.textContent = endyear;
    let resCompany = document.getElementById("resCompany");
    resCompany.textContent = company;
    let resJobTitle = document.getElementById("resJobTitle");
    resJobTitle.textContent = jobTitle;
    let resAchv1 = document.getElementById("resAchv1");
    resAchv1.textContent = achv1;
    let resAchv2 = document.getElementById("resAchv2");
    resAchv2.textContent = achv2;
    let resAchv3 = document.getElementById("resAchv3");
    resAchv3.textContent = achv3;
});
let print_btn = document.getElementById("print_btn");
print_btn?.addEventListener("click", () => {
    window.print();
});
