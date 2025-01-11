point1=0;
point2=0;
document.querySelector(".points1").innerHTML=`Your Score: ${point1}`
document.querySelector(".points2").innerHTML=`Computer Score: ${point2}`
function computer(){
    let probab=Math.random();
    if(probab<0.33){
        return 'rock';
    }
    else if(probab>=0.33 && probab<=0.66){
        return 'paper';
    }
    else{
        return 'scissor';
    }
}
function playerchoice(){
    document.querySelector(".rock").addEventListener("click",()=>{
        check("rock");
    })
    document.querySelector(".paper").addEventListener("click",()=>{
        check("paper");
    })
    document.querySelector(".scissor").addEventListener("click",()=>{
        check("scissor");
    })
}
function priority(c1,c2){
    if((c1=="rock"&&c2=="scissor")||(c1=="paper"&& c2=="rock")||(c1=="scissor"&& c2=="paper")){
        return 1;
    }
    else if(c1==c2){
        return 0;
    }
    else{
        return -1;
    }
}
function check(choice){
    let choice1=choice;
    let choice2=computer();
    console.log(choice1);
    console.log(choice2);
    let n=priority(choice1,choice2);
    if(n==1){
        point1++;
        document.querySelector(`.${choice}`).parentNode.style.backgroundColor="rgb(162, 243, 162)";
        choice2=choice2+"1";
        document.querySelector(`.${choice2}`).parentNode.style.backgroundColor="rgb(162, 243, 162)";
    }
    else if(n==0){
        document.querySelector(`.${choice}`).parentNode.style.backgroundColor="rgb(156, 185, 247)";
        choice2=choice2+"1";
        document.querySelector(`.${choice2}`).parentNode.style.backgroundColor="rgb(156, 185, 247)";
    }
    else{
        point2++;
        document.querySelector(`.${choice}`).parentNode.style.backgroundColor="rgb(240, 155, 155)";
        choice2=choice2+"1";
        document.querySelector(`.${choice2}`).parentNode.style.backgroundColor="rgb(240, 155, 155)";
    }
    document.querySelector(".points1").innerHTML=`Your Score: <b>${point1}</b>`
    document.querySelector(".points2").innerHTML=`Computer Score: <b>${point2}</b>`
    let timeout=setTimeout(()=>{
        document.querySelector(`.${choice}`).parentNode.style.backgroundColor="white";
        document.querySelector(`.${choice2}`).parentNode.style.backgroundColor="white";
        result()
    },1000)
}
function result(){
    if(point1 ==3){
        document.querySelector(".title").style.backgroundColor="rgb(162, 243, 162)";
        document.querySelector(".result").innerHTML="YOU WIN !!!";
        document.querySelector(".result").style.color="green";
        
    }
    else if(point2==3){
        document.querySelector(".title").style.backgroundColor="rgb(240, 155, 155)";
        document.querySelector(".result").innerHTML="YOU LOST :(";
        document.querySelector(".result").style.color="red";
    }
    if(point1==3 || point2==3){
        document.querySelector(".buttonimg").addEventListener("click",()=>{
            alert("GAME OVER !!!")
        })
        if (!document.querySelector(".playagain")) {
         let but=document.createElement("button");
         but.innerHTML="PLAY AGAIN";
         but.setAttribute("class","playagain")
         but.addEventListener("click",()=>{
            location.reload();
         })
         but.setAttribute("style","border:1.5px solid blue; border-radius:20px; background-color:rgb(140, 184, 221);color:rgb(3, 3, 117);padding:5px;font-size:25px;font-family:Kanit;height:50px;width:180px;font-weight:800;")
         document.querySelector(".button1").append(but);
        }
    }
}
playerchoice()