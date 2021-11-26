
        var video = document.querySelector("video");
        function startWebCam() {
            if (navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia({ video: true })
                    .then(function (stream) {
                        video.srcObject = stream;
                    })
                    .catch(function (err0r) {
                        console.log("Something went wrong!");
                    });
            }
        }
        startWebCam();
    
     // drag and drop
//image1

let image = document.getElementById('image');
let str = document.getElementById('myImage');

str.onmousedown = function(event) {
//by using getBoundingClientRect, it will return the size of the image
//and position it to the viewport
  let shiftX = event.clientX - str.getBoundingClientRect().left;
  let shiftY = event.clientY - str.getBoundingClientRect().top;

 str.style.position = 'absolute';
  document.body.append(str);
    str.style.index = 1000;
  moveAt(event.pageX, event.pageY);

  // moves the image at (pageX, pageY) coordinates
  // taking initial shifts into account
  function moveAt(pageX, pageY) {
   str.style.left = pageX - shiftX + 'px';
    str.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // move the image on mousemove 
  //so it can be moved from left to top
  document.addEventListener('mousemove', onMouseMove);

  // drop the image, remove unneeded handlers
  str.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
   str.onmouseup = null;
  };
 };
//unable the mouse to move the clone of the image
str.ondragstart = function() {
  return false;
};


//image 2

let photo = document.getElementById('main');
let str2 = document.getElementById('myPhoto');

str2.onmousedown = function(event) {
//by using getBoundingClientRect, it will return the size of the image
//and position it to the viewport
  let shiftX = event.clientX - str2.getBoundingClientRect().left;
  let shiftY = event.clientY - str2.getBoundingClientRect().top;

 str2.style.position = 'absolute';
  document.body.append(str2);
 str2.style.index = 1000;
  moveAt(event.pageX, event.pageY);

  // moves the image at (pageX, pageY) coordinates
  // taking initial shifts into account
  function moveAt(pageX, pageY) {
   str2.style.left = pageX - shiftX + 'px';
    str2.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // move the image on mousemove 
  //so it can be moved from left to top
  document.addEventListener('mousemove', onMouseMove);

  // drop the image, remove unneeded handlers
  str2.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
   str2.onmouseup = null;
  };
 };
//unable the mouse to move the clone of the image
str2.ondragstart = function() {
  return false;
};

