let url="https://meme-api.com/gimme/";
let text=document.getElementById("text");
let img=document.getElementById("img");
let btn=document.getElementById("btn");

function getMeme(){
    

    let subreddits=["catmemes","dogmemes","whomemes","me_irl"];
    let randomSubreddits=subreddits[Math.floor(Math.random()*4)]
    // console.log(randomSubreddits);
    fetch(url+randomSubreddits)
    .then(res=>res.json())
    .then(item=>{
        console.log(item)
        let memeImg =new Image();
        memeImg.onload=()=>{
            
        }
            text.innerHTML=item.title;
            img.src=item.url;
    })

    
}

btn.addEventListener("click",getMeme);
window.addEventListener("load",getMeme)
