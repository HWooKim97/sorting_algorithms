const radioSelf = document.querySelector(".radio-self");
const radioRan = document.querySelector(".radio-ran");
const self = document.querySelector(".self");
const ran = document.querySelector(".ran");

function handleRadio(event){
    if(this.value === `1`){
        self.classList.remove("hiding");
        self.classList.add("showing");
        ran.classList.remove("showing");
        ran.classList.add("hiding");
    } else if(this.value === `2`){
        self.classList.remove("showing");
        self.classList.add("hiding");
        ran.classList.remove("hiding");
        ran.classList.add("showing");
    }
}

function radioInit(){
    radioSelf.onclick = handleRadio;
    radioRan.onclick = handleRadio;
}

radioInit();