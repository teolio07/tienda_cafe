const btnAvatar = document.getElementById('btn-avatar')
const avatarUser = document.getElementById('avatarUser')





var uploadAvatar = cloudinary.createUploadWidget({
  cloudName: 'tienda-cafe', 
  uploadPreset: 'preset_img'}, (error, result) => { 
    if (!error && result && result.event === "success") { 
        console.log('Done! Here is the image info: ', result.info); 
        avatarUrl = result.info.secure_url;
        avatarUser.style.width = '80px'
        avatarUser.style.height = '80px'

        avatarUser.src = avatarUrl; 
    }
  }
)


btnAvatar.addEventListener("click", function(){
    uploadAvatar.open();
}, false);
