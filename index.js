const input =document.getElementById("input")
const error =document.querySelector(".error")

document.getElementById("button").addEventListener("click" , function (){
    const inputValue = input.value.trim()
    console.log(inputValue)

    if(!isEmail(inputValue)){
        error.style.display="block";
        input.style.border="1px solid hsl(354, 100%, 66%)";
        

    }else{
        error.style.display="none";
        input.style.border="1px solid hsl(223, 100%, 88%)"
    }

})

function isEmail(input){
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input)
}