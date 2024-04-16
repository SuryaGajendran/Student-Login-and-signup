let value1 = document.getElementById("value1")
value1.addEventListener("focusout",function(){
    if(value1.value === ""){
        let sp1 = document.getElementById("sp1")
        sp1.textContent="*pleaseEnterusername*"
        

    }

    // if(value1.value === Number){
    //     value1.nextSibling.textContent="*invalid*"
    // }
})
let value2 = document.getElementById("value2")
value2.addEventListener("focusout",function(){
    if(value2.value === ""){
        let sp2 = document.getElementById("sp2")
        sp2.textContent="*pleaseEnterpassword*"

    }

})
let eye = document.getElementById("eye")
eye.addEventListener("click",function(){
    value2.setAttribute("type","text")

})