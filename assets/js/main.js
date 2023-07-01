import Subcription from './service/SubscriptionService.js'

(function () {
    const mobilePath = "/images/illustration-sign-up-mobile.svg"
    const desktopPath = "/images/illustration-sign-up-desktop.svg"
    const imageCon = document.getElementById('sign-up-image-con')

    if (window.innerWidth <= 400) {
        imageCon.src = mobilePath
    } else {
        imageCon.src = desktopPath
    }
}())

const subcriptionForm = document.getElementById("subscription-form")
const error = document.getElementById("subscription-form")
const successModel = document.querySelector(".success-model")

subcriptionForm.addEventListener('submit', async (el) => {
    el.preventDefault();
    const userEmail = subcriptionForm['email'].value;
    const formData = {
        email: userEmail
    };
    validateEmail(email)
    try {
        const response = await Subcription.subcribe(formData)
        const data = await response.json();
        console.log(data);
        successMedelUI()
    } catch (error) {
        console.log('Error:', error.message);
    }
});


// subcriptionForm.addEventListener('submit', async (el) => {
//     el.preventDefault();
//     const userEmail = subcriptionForm['email'].value;
//     const formData = {
//         email: userEmail
//     };
//     validateEmail(email)
//     try {
//         const response = await fetch('http://localhost:5000/api/v1/subscribe', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(formData)
//         });
//         if (response.ok) {
//             console.log('Email sent successfully');
//         } else {
//             console.log('Failed with the status ' + response.status);

//         }
//     } catch (error) {
//         console.log('Error:', error.message);
//     }
// });
function validateEmail(email) {
    if (email) {

    } else {
        error.innerText = 'Valid email required'
    }
    return false
}

function successMedelUI() {
    document.querySelector('.newsletter-container').style.display = 'none'
    successModel.style.display = 'block'
}





