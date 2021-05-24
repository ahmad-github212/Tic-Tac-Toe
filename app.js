const boxes = Array.from(document.getElementsByClassName("box"));

const rstbtn = document.getElementById('restart-btn');


const  X_text = "X" ;
const  O_text = "O" ;
let currentPlayer=O_text ; 


let spaces = ["", "", "", "", "", "", "", "", ""];
let playText = document.getElementById('playText');

boxes.forEach((box)=>{
    box.addEventListener('click',boxClicked);
});


function boxClicked(e){
    let id = e.target.id ;
   
    if(!spaces[id]){
        spaces[id] = currentPlayer ;
         e.target.innerText = currentPlayer;
         if(playerWin(currentPlayer)){
            playText.innerHTML = `${currentPlayer} Wins!!!` ;      
            return ;
        } 
         currentPlayer = currentPlayer===O_text ? X_text : O_text;        
    }
   
}
console.log(spaces);

function playerWin(player){
if(spaces[0]===player){
   if(spaces[1]===player && spaces[2]===player) {
    return true;
   }
   if(spaces[3]===player && spaces[6]===player) {
    return true;
   }
   if(spaces[4]===player && spaces[8]===player) {
    return true;
   }
}

if(spaces[8]===player){
   if(spaces[5]===player && spaces[2]===player) {
    return true;
   }
   if(spaces[7]===player && spaces[6]===player) {
    return true;
   }
}

if(spaces[4]===player){
   if(spaces[6]===player && spaces[2]===player) {
    return true;
   }
   if(spaces[7]===player && spaces[1]===player) {
    return true;
   }
   if(spaces[3]===player && spaces[5]===player) {
    return true;
   }
}
}

rstbtn.addEventListener('click', restart);

function restart(){
  spaces.forEach((space,index)=>{
      spaces[index]="";
  });
  boxes.forEach((box,index)=>{
      box.innerHTML = "";
  });
  playText.innerHTML = "";
 
  currentPlayer = O_text;  

  
}

function reset_interval(){
 spaces.forEach((space,index)=>{
      spaces[index]="";
  });
  boxes.forEach((box,index)=>{
      box.innerHTML = "";
  });
  currentPlayer = O_text;  
}

