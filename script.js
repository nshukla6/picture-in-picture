const videoElement = document.getElementById("video");
const button = document.getElementById("button");



async function selectMediaStream(){
    try{
        // program will wait here for user selection the media
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        // then that media stream will be provided to the video element
        videoElement.srcObject = mediaStream;
        // when video has loaded metadata then we will play the video
        videoElement.onloadedmetadata = () => videoElement.play()
    }catch(err){
        console.log("Error Thrown ", err);
    }
}

button.addEventListener("click", async() => {
    // disable the button
    button.disabled = true;
    // start picture in picture
    await videoElement.requestPictureInPicture();
    button.disabled = false;
})

selectMediaStream();