const elementsArray=[{id:1,backgroundImg:"./images/richard-brutyo-Sg3XwuEpybU-unsplash.jpg",title:"Dog",text:"A",audio:"./mixkit-dog-barking-twice-1.wav"},
{id:2,backgroundImg:"./images/alexander-london-mJaD10XeD7w-unsplash.jpg",title:"Cat",text:"B",audio:"./mixkit-angry-cartoon-kitty-meow-94.wav"},
{id:3,backgroundImg:"./images/maxime-agnelli-bhD6TGRjnWc-unsplash.jpg",title:"Goat",text:"C",audio:"./mixkit-baby-goat-baa-1764.wav"},
{id:4,backgroundImg:"./images/francesco-ZxNKxnR32Ng-unsplash.jpg",title:"Lion",text:"D",audio:"./mixkit-big-wild-lion-growl-95.wav"},

{id:5,backgroundImg:"./images/jamie-haughton-Z05GiksmqYU-unsplash.jpg",title:"Monkey",text:"E",audio:"./mixkit-cartoon-monkey-laugh-100.wav"},
{id:6,backgroundImg:"./images/luke-stackpoole-RxHhxWnXmNs-unsplash.jpg",title:"Cow",text:"F",audio:"./mixkit-cow-moo-1744.wav"},
{id:7,backgroundImg:"./images/aarn-giri-3lGi0BXJ1W0-unsplash.jpg",title:"Bird",text:"G",audio:"./mixkit-double-little-bird-chirp-21.wav"},

{id:8,backgroundImg:"./images/wolfgang-hasselmann-uMfSHeycnYQ-unsplash.jpg",title:"Chicken",text:"H",audio:"./mixkit-rooster-crowing-in-the-morning-2462.wav"},
{id:9,backgroundImg:"./images/silje-midtgard-0F9oVQ3x2ak-unsplash.jpg",title:"Horse",text:"I",audio:"./mixkit-scared-stallion-horse-30.wav"},
{ id:10,backgroundImg:"./images/marc-olivier-jodoin-tauPAnOIGvE-unsplash.jpg",title:"Wolf",text:"J",audio:"./mixkit-wolf-howling-1775.wav"},

{id:11,backgroundImg:"./images/ekamelev-sZIjgg4Peu0-unsplash.jpg",title:"Mosquito",text:"K",audio:"./mixkit-annoying-mosquito-sound-330.wav"},

{id:12,backgroundImg:"./images/lucia-macedo-4gyYf1ItdHI-unsplash.jpg",title:"Pig",text:"L",audio:"./mixkit-pig-grunting-3.wav"},

]


const backgroundContainer=document.getElementById("backgroudContainer");


function eachbutton(eachObj){
    const{backgroundImg,title,text,audio,id}=eachObj

    const divContainer=document.createElement("div");
    divContainer.style.setProperty("background-image",`url("${backgroundImg}")`);
    divContainer.id=`btn${id}`;
    divContainer.classList.add("divContainer")
    backgroundContainer.appendChild(divContainer);
    
    const innerContainer=document.createElement("div");
    innerContainer.classList.add("innerContainer")
    divContainer.appendChild(innerContainer)



    const textEle=document.createElement("kbd");
    textEle.textContent=text;
    textEle.classList.add("textEle")
    innerContainer.appendChild(textEle);

    const titleEle=document.createElement("span");
    titleEle.textContent=title;
    titleEle.classList.add("titleEle")
    innerContainer.appendChild(titleEle);

    const audioEle=document.createElement("audio");
    audioEle.id=id;
    audioEle.src=audio;
    document.body.appendChild(audioEle);


}

elementsArray.forEach(eachObj=>{
    eachbutton(eachObj)
})






function removeTransition(e) {
    if(e.propertyName != 'transform') return; 
    this.classList.remove('playing');
  }


window.addEventListener("keypress",(event)=>{
    const selectedBtn=elementsArray.find((each)=>event.key.toLocaleLowerCase()===each.text.toLocaleLowerCase())
    const {id}=selectedBtn
    const clickedBtn=document.getElementById(`btn${id}`);
    clickedBtn.classList.add("playing");

    clickedBtn.addEventListener('transitionend', removeTransition)

    const audio=document.getElementById(id)
    audio.currentTime=0;
    audio.play();
    
})