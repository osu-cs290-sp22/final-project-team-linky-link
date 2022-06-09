console.log("== document:", document)

/* Referenced:  https://www.youtube.com/watch?v=y_5P8KuxnbY&t=66s for image sliders */
/* image slider for shirts */ 
var imgbtn = document.querySelector('.shirt-image');
var images = ['shirt-one.PNG', 'shirt-two.PNG', 'shirt-three.PNG', 
'shirt-four.PNG', 'shirt-five.PNG', 'shirt-six.PNG', 'shirt-seven.PNG', 
'shirt-eight.PNG', 'shirt-nine.PNG'];
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

/*
 * This function gets the closet ID from the current URL.  For example, if the
 * current URL path is  "/closet/shirts", this function will return "shirts".
 */
function getClosetIdFromURL() {
  var path = window.location.pathname
  var pathParts = path.split('/')
  if (pathParts[1] === "closet") {
    return pathParts[2]
  } else {
    return null
  }
}

/* when the user clicks add, close the modal and add shirt */
function handleModalAcceptClick() {
  var shirtId = document.getElementById('shirt-id-input').value.trim()
  var shirtURL = document.getElementById('shirt-url-input').value.trim()
    if(!shirtId || !shirtURL){
        alert("You must fill in all of the fields!")
    }
    else{
        var reqUrl = "/closet/addShirt"
        fetch(reqUrl, {
          method: 'POST',
          body: JSON.stringify({
            id: shirtId,
            url: shirtURL
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(function (res) {
          if (res.status === 200) {
            var shirtTemplate = Handlebars.templates.shirt({
              id: shirtId,
              url: shirtURL
            })
            var shirtContainer = document.querySelector('.shirt-container')
            shirtContainer.insertAdjacentHTML('beforeend', shirtTemplate)
            return res.text()
          } else {
            alert("An error occurred adding your shirt")
          }
        // }).then(function (body) {
        //   console.log("== response body:", body)
        }).catch(function (err) {
          //  alert("An error occurred adding your shirt from catch() clause")
       })

        hideModal()
        window.location.href = reqUrl
  }

}


function showModal() {

  var modal = document.getElementById('add-shirt-modal')
  var modalBackdrop = document.getElementById('modal-backdrop')

  modal.classList.remove('hidden')
  modalBackdrop.classList.remove('hidden')

}


function clearModalInputs() {

  var modalInputElements = document.querySelectorAll('#add-shirt-modal input')
  for (var i = 0; i < modalInputElements.length; i++) {
    modalInputElements[i].value = ''
  }

}


function hideModal() {

  var modal = document.getElementById('add-shirt-modal')
  var modalBackdrop = document.getElementById('modal-backdrop')

  modal.classList.add('hidden')
  modalBackdrop.classList.add('hidden')

  clearModalInputs()

}


/*
 * Wait until the DOM content is loaded, and then hook up UI interactions, etc.
 */
window.addEventListener('DOMContentLoaded', function () {

  var addShirtButton = document.getElementById('add-shirt-button')
  addShirtButton.addEventListener('click', showModal)

  var modalAcceptButton = document.getElementsByClassName('modal-accept-button')[0]
  modalAcceptButton.addEventListener('click', handleModalAcceptClick)

  var modalHideButtons = document.getElementsByClassName('modal-hide-button')[0]
  for (var i = 0; i < modalHideButtons.length; i++) {
    modalHideButtons[i].addEventListener('click', hideModal)
  }

})