 const uploadedImage = document.getElementById('avatar-upload');
const avatar = document.querySelector('.avatar');
const timeEl = document.getElementById("currentTime");
 uploadedImage.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      avatar.src = imageURL;
    }
  });

  function updateTime() {
  timeEl.textContent = Date.now();
}
updateTime();
setInterval(updateTime, 1000);