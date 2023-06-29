import Subcription from './service/subscriptionService.js'

(function () {
    const mobilePath = "/assets/images/illustration-sign-up-mobile.svg"
    const desktopPath = "/assets/images/illustration-sign-up-desktop.svg"
    const imageCon = document.getElementById('sign-up-image-con')

    if (window.innerWidth <= 400) {
        imageCon.src = mobilePath
    } else {
        imageCon.src = desktopPath
    }
}())
