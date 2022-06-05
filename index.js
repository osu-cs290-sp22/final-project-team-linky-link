/*
 * Add your JavaScript to this file to complete the assignment.  Don't forget
 * to add your name and @oregonstate email address below.
 *
 * Name: Aileen Abril Castro-Guzman
 * Email: castroga@oregonstate.edu
 */

console.log("== document:", document)

/* Referenced:  https://www.youtube.com/watch?v=y_5P8KuxnbY&t=66s for image sliders */
/* image slider for shirts */ 
var imgbtn = document.querySelector('.shirt-image');
var images = ['shirt-one.PNG', 'shirt-two.PNG', 'shirt-three.PNG', 
'shirt-four.PNG', 'shirt-five.PNG', 'shirt-six.PNG', 'shirt-seven.PNG', 
'shirt-eight.PNG', 'shirt-nine.PNG', 'shirt-ten.PNG'];
var i = 0;

function prev() {
  if(i <= 0) i = images.length;
  i--;
  return setImg();
}

function next() {
  if(i >= images.length - 1) i = -1;
  i++;
  return setImg();
}

function setImg() {
  return imgbtn.setAttribute('src', 'images/' + images[i]);
}

/* image slider for bottoms */ 
var imgbtnB = document.querySelector('.bottoms-image');
var imagesB = ['bottoms-one.PNG', 'bottoms-two.PNG', 'bottoms-three.PNG', 
'bottoms-four.PNG', 'bottoms-five.PNG', 'bottoms-six.PNG', 'bottoms-seven.PNG'];
var j = 0;

function prevB() {
  if(j <= 0) j = imagesB.length;
  j--;
  return setImgB();
}

function nextB() {
  if(j >= imagesB.length - 1) j = -1;
  j++;
  return setImgB();
}

function setImgB() {
  return imgbtnB.setAttribute('src', 'images/' + imagesB[j]);
}

/* Referenced:  https://www.w3schools.com/howto/howto_css_modals.asp for unhiding modal */
/* get the modal */ 
var modal = document.getElementById("create-outfit-modal")
var modalBack = document.getElementById("modal-backdrop")

/* get the button that opens the modal */
var btn = document.getElementById("create-outfit-button")

/* get the <span> element that closes the modal */
var span = document.getElementsByClassName("modal-close-button")[0]

/* get the cancel button that closes the modal */
var cancel = document.getElementsByClassName("modal-cancel-button")[0]

var outfitInput = document.getElementById('name-text-input')


/* when the user clicks on the button, open the modal */
btn.onclick = function() {
  modal.style.display = "block"
  modalBack.style.display = "block"
  outfitInput.value = ""
}

/* when the user clicks on <span> (x), close the modal */
span.onclick = function() {
  modal.style.display = "none"
  modalBack.style.display = "none"
}

/* when the user clicks cancel, close the modal */
cancel.onclick = function() {
    modal.style.display = "none"
    modalBack.style.display = "none"
}

// /* when the user clicks anywhere outside of the modal, close it */
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none"
//     modalBack.style.display = "none"
//   }
// }


var closetContainer = document.querySelector(".closet-container")

// function createNewOutfit(outfit) {
//     var closetSection = document.createElement('article')
//     closetSection.classList.add('shirts')

//     var closetContainerDiv = document.createElement('div')
//     closetContainerDiv.classList.add('twit-icon')
//     closetSection.appendChild(closetContainerDiv)

//     var fas = document.createElement('i')
//     fas.classList.add('fas')
//     fas.classList.add('fa-bullhorn')
//     twitContainerDiv.appendChild(fas)

//     var contentDiv = document.createElement('div')
//     contentDiv.classList.add('outfit-content')
//     outfitSection.appendChild(contentDiv)

//     var outfitText = document.createElement('p')
//     outfitText.classList.add('outfit-text')
//     outfitText.outfitContent = outfit
//     contentDiv.appendChild(twitText)

//     closetContainer.appendChild(closetSection)

//     console.log("== closetSection:", closetSection)
// }

/* get the button that adds the outfit */
var add = document.getElementsByClassName("modal-accept-button")[0]

var outfitWords = []

function handleOutfitWordsEntered(event) {
  console.log("== handleOutfitWordsEntered() called")
  outfitWords = event.currentTarget.value
  console.log("  - outfit:", outfitWords)
}

outfitInput.addEventListener('change', handleOutfitWordsEntered)


/* when the user clicks add, close the modal and add twit */
add.onclick = function() {
    if(outfitInput.value == ""){
        alert("Input cannot be left blank")
    }
    else{
        modal.style.display = "none"
        modalBack.style.display = "none"
        //createNewOutfit(outfitWords)
    }
}