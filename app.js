let gameSeq=[];
let userSeq=[];
let colors=["red","blue","orange","purple"];
let start=false;
let level=0;
let levelCount=document.querySelector("#levelCount");
let body=document.querySelector("body");

 
    document.addEventListener("keypress",()=>{
        if(start==false)
        {
        start=true;    
        levelup();
        };
    });



function btnFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(()=>{btn.classList.remove("flash")},250);
}

function greenFlash()
{
    body.classList.add("greenflash");
    setTimeout(()=>{body.classList.remove("greenflash")},250);
}

function redFlash()
{
    body.classList.add("redflash");
    setTimeout(()=>{body.classList.remove("redflash")},250);
}


function levelup()
{
    // console.log(userSeq)
    userSeq=[];
    level++;
    levelCount.innerText=`Level ${level}`; 
    let randInd=Math.floor(Math.random()*4);
    let randColor=colors[randInd];
    let btn=document.querySelector(`.${randColor}`);
    let gamePress=btn.getAttribute("id");
    gameSeq.push(gamePress);
    // console.log(gameSeq);
    btnFlash(btn);
}


function checkSeq(index)
{
    // index=level-1;
   if(gameSeq[index]===userSeq[index])
    {
        greenFlash();
        if(index==level-1)
        setTimeout(levelup,1000);
    }
    else
    {
    redFlash();
    levelCount.innerText=`Game Over at level ${level}.Press any key to restart`;
    reset();
    }   
}
function reset()
{
    level=0;
    start=false;
    gameSeq=[];
    userSeq=[];
}


function btnPress()
{
    let pressedBtn=this;
    btnFlash(pressedBtn);
    let userBtn=pressedBtn.getAttribute("id");
    userSeq.push(userBtn);
    // console.log(userSeq);
    checkSeq(userSeq.length-1)
}



let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns)
{   
    btn.addEventListener("click",btnPress);
}

  

