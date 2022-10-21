const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


const containerOne = document.getElementById("cont-1"); 
const containerTwo = document.getElementById("cont-2"); 
let posImage = 0 ;






// CICLE FOR START THE IMAGES 
for(let i = 0 ; i < images.length ; i++){

    let card = document.createElement('div'); 
    let img = document.createElement('img');
    let img_2 = document.createElement('img');
    let title = document.createElement('h2'); 
    let text = document.createElement('p');
    let card_2 = document.createElement('div');  
    
    card.classList.add("main_card");
    card.classList.add("d-rel");
    title.classList.add("d-abs");
    title.classList.add("title");
    text.classList.add("d-abs"); 
    text.classList.add("subtitle"); 
    if(i>0){
        card.classList.add("d-none")
    }

    img.src = images[i].image; 
    img_2.src = images[i].image; 
    title.innerHTML = images[i].title; 
    text.innerText = images[i].text; 

   
    card.appendChild(img)
    card.appendChild(title)
    card.appendChild(text)
    containerOne.append(card)

//    Container Two 
     
     card_2.classList.add("card"); 
     card_2.appendChild(img_2);

     if(i>0){
        card_2.classList.add("opacity-1")
     }
    
     if(i===0 || i === images.length-1){

        card_2.classList.add("d-rel"); 
       let btn = document.createElement('i');
       btn.classList.add("fa-solid"); 
       btn.classList.add("btn");
        
       
       if(i===0){
        btn.classList.add("fa-angle-left");
        btn.classList.add("btn-left"); 
        btn.addEventListener('click' , ChangeImagesLeft);
       }
       else{
        btn.classList.add("fa-angle-right");
        btn.classList.add("btn-right"); 
        btn.addEventListener('click' , ChangeImagesRight);  
       }

      card_2.appendChild(btn); 
     }

     containerTwo.append(card_2)

}


const ArrayImages = document.getElementsByClassName("main_card"); 
const ArrayLittleDownImages = document.getElementsByClassName("card")

function ChangeImagesRight(){

if(posImage >=0 && posImage < ArrayImages.length-1) {

        ArrayImages[posImage].classList.add("d-none")
        ArrayLittleDownImages[posImage].classList.add("opacity-1")
        posImage++
        ArrayImages[posImage].classList.remove("d-none")
        ArrayLittleDownImages[posImage].classList.remove("opacity-1")

     }
    else if(posImage === ArrayImages.length-1){

    ArrayImages[posImage].classList.add("d-none"); 
    ArrayLittleDownImages[posImage].classList.add("opacity-1")
    posImage = 0; 
    ArrayImages[posImage].classList.remove("d-none");
    ArrayLittleDownImages[posImage].classList.remove("opacity-1")
 }

}


function ChangeImagesLeft(){

    if(posImage > 0 && posImage <= ArrayImages.length-1) {

        ArrayImages[posImage].classList.add("d-none")
        ArrayLittleDownImages[posImage].classList.add("opacity-1")
        posImage--
        ArrayImages[posImage].classList.remove("d-none")
        ArrayLittleDownImages[posImage].classList.remove("opacity-1")

     }
    else if(posImage === 0){
    ArrayImages[posImage].classList.add("d-none"); 
    ArrayLittleDownImages[posImage].classList.add("opacity-1")
    posImage = ArrayImages.length-1; 
    ArrayImages[posImage].classList.remove("d-none");
    ArrayLittleDownImages[posImage].classList.remove("opacity-1") 
 }

}


