  
  window.addEventListener('load', () =>{
    
    let name = localStorage.getItem("name");
  
    let designation = localStorage.getItem("designation");

    let Phone =  localStorage.getItem("Phone");

    let email =  localStorage.getItem("email");

    let address =  localStorage.getItem("address");

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

    let skill5 =  localStorage.getItem("skill5");

    let language1 = localStorage.getItem("language1");

    let language2 = localStorage.getItem("language2");

    let styear = localStorage.getItem("styear");

    let endyear = localStorage.getItem("endyear");

    let company = localStorage.getItem("company");

    let jobTitle = localStorage.getItem("jobTitle");

    let achievement1 = localStorage.getItem("achievement1");

    let achievement2 = localStorage.getItem("achievement2");

    let achievement3 = localStorage.getItem("achievement3");
  
    let resName : any = document.getElementById('resName')
    resName.textContent = name

    let resDesignation : any = document.getElementById('resDesignation')
    resDesignation.textContent = designation

    let resPhone : any = document.getElementById('resPhone')
    resPhone.textContent = Phone

    let resEmail : any = document.getElementById('resEmail')
    resEmail.textContent = email

    let resAddress: any = document.getElementById('resAddress')
    resAddress.textContent = address

    let resPass1: any = document.getElementById('resPass1')
    resPass1.textContent = pass1

    let resDegree1: any = document.getElementById('resDegree1')
    resDegree1.textContent = degree1

    let resUni1: any = document.getElementById('resUni1')
    resUni1.textContent = uni1

    let resPass2: any = document.getElementById('resPass2')
    resPass2.textContent = pass2

    let resDegree2: any = document.getElementById('resDegree2')
    resDegree2.textContent = degree2

    let resUni2: any = document.getElementById('resUni2')
    resUni2.textContent = uni2

    let resPass3: any = document.getElementById('resPass3')
    resPass3.textContent = pass3

    let resDegree3: any = document.getElementById('resDegree3')
    resDegree3.textContent = degree3

    let resUni3: any = document.getElementById('resUni3')
    resUni3.textContent = uni3

    let resPass4: any = document.getElementById('resPass4')
    resPass4.textContent = pass4

    let resDegree4: any = document.getElementById('resDegree4')
    resDegree4.textContent = degree4

    let resUni4: any = document.getElementById('resUni4')
    resUni4.textContent = uni4

    let reSkill1: any = document.getElementById('reSkill1')
    reSkill1.textContent = skill1

    let reSkill2: any = document.getElementById('reSkill2')
    reSkill2.textContent = skill2

    let reskill3: any = document.getElementById('reSkill3')
    reSkill1.textContent = skill3

    let reSkill4: any = document.getElementById('reSkill4')
    reSkill4.textContent = skill4

    let resSkill5: any = document.getElementById('resSkill5')
    resSkill5.textContent = skill5

    let resLanguage1: any = document.getElementById('resLanguage1')
    resLanguage1.textContent = language1

    let resLanguage2: any = document.getElementById('resLanguage2')
    resLanguage2.textContent = language2

    let resStartYear: any = document.getElementById('resStartYear')
    resStartYear.textContent = styear

    let resEndYear: any = document.getElementById('resEndYear')
    resEndYear.textContent = endyear

    let resCompany: any = document.getElementById('resCompany')
    resCompany.textContent = company
    
    let resJobTitle: any = document.getElementById('resJobTitle')
    resJobTitle.textContent = jobTitle

    let resAchievement1: any = document.getElementById('resAchievement1')
    resAchievement1.textContent = achievement1

    let resAchievement2: any = document.getElementById('resAchievement2')
    resAchievement2.textContent = achievement1

    let resAchievement3: any = document.getElementById('resAchievement3')
    resAchievement3.textContent = achievement1

  







    
  
  







  })
  
  
  
  
  
  
  



  let print_btn = document.getElementById("print_btn")

  print_btn?.addEventListener("click", () =>{
    window.print()
  });