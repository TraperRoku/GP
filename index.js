const characters = ["A","B","C","D","E","F","G",
"H","I","J","K","L","M","N","O","P","Q","R","S",
"T","U","V","W","X","Y","Z","a","b","c","d","e",
"f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z", "0", "1", 
"2", "3", "4", "5", "6", "7", "8", "9","~","`",
"!","@","#","$","%","^","&","*","(",")","_","-",
"+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let HmL = 0 



let hasloel = document.getElementById("haslo-EL");
let haslo2el = document.getElementById("haslo2-EL");

function restart(){
    hasloel.textContent = ""
    haslo2el.textContent = ""
}




function create(){
    restart()
    HmL = document.getElementById("myText").value;
    if(HmL!=0)
    {
         
    for(let i=0;i<HmL;i++)
    {   let newPassword = Math.floor(Math.random()*characters.length)
        let newPassword2 = Math.floor(Math.random()*characters.length)
        hasloel.textContent += characters[newPassword]
        haslo2el.textContent += characters[newPassword2]
    }
}else{
    hasloel.textContent = "Podaj --->"
    haslo2el.textContent = "<--- liczbe"
}
}








