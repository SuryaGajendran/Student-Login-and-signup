let value1 = document.getElementById("value1")
value1.addEventListener("focusout",function(){
    if(value1.value === ""){
        let sp1 = document.getElementById("sp1")
        sp1.textContent="*pleaseEnterusername*"

        
    }
})
let value2 = document.getElementById("value2")
value2.addEventListener("focusout",function(){
    if(value2.value === ""){
        let sp2 = document.getElementById("sp2")
        sp2.textContent="*pleaseEnteremail*"
    }
})
let value3 = document.getElementById("value3")
value3.addEventListener("focusout",function(){
    if(value3.value === ""){
        let sp3 = document.getElementById("sp3")
        sp3.textContent="*pleaseEnterpassword*"
    }
})
let value4 = document.getElementById("value4")
value4.addEventListener("focusout",function(){
    if(value4.value === ""){
        let sp4 = document.getElementById("sp4")
        sp4.textContent="*pleaseEnterpassword*"
        sp4.style.color="red"
    }
    
   if(value3.value === value4.value){
    let sp4 = document.getElementById("sp4")
        sp4.textContent="*passwordMatched*"
        sp4.style.color="green"

   }
   if(value3.value != value4.value){
    let sp4 = document.getElementById("sp4")
    sp4.textContent="*DismatchPassword*"
    sp4.style.color="red"
}
})

let eye = document.getElementById("eye")
eye.addEventListener("click",function(){
    value4.setAttribute("type","text")

})