let bulb = document.querySelector("#bulb");
let btn = document.querySelector("button");
btn.innerHTML = "OF"
let flag = 0
btn.addEventListener("click",function(){
    if(flag == 0){
        bulb.style.backgroundColor = "yellow"
        console.log("Cliocked")
        btn.innerHTML = "ON"
        btn.style.backgroundColor = "yellow"
        btn.style.color = "black"
        flag = 1
    }else{
        bulb.style.backgroundColor = "white"
        console.log("Again clieckedf")
        btn.innerHTML = "OF"
        btn.style.backgroundColor = "white"
        btn.style.color = "black"
        flag = 0
    }
})