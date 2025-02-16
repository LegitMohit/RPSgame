let btn=document.querySelector("button");
let currMode="light";
btn.addEventListener("click",()=>{
    if(currMode=="light"){
        document.body.setAttribute("class","light");
        currMode="dark";
    }
    else{
        document.body.setAttribute("class","dark");
        currMode="light";
    }
})