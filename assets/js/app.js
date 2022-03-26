// console.log('hwllo ')
const errMobile = document.getElementById('err-mobile1');
// console.log(errMobile.innerHTML);

const errMobile2 = document.getElementById('err-mobile2');
// console.log(errMobile2.innerHTML);

function showError() {
    const email1 = document.getElementById('email1').value;
    console.log(email1)
    if (email1.includes('@')) {
        errMobile.innerHTML = 'Subscription successful'
        errMobile.style.color = '#3c9f8f';
        errMobile.style.display = 'block';
        // console.log('success')
    }
    else {
        errMobile.innerHTML = 'Please check your email'
        errMobile.style.color = '#ff4242';
        errMobile.style.display = 'block';
    }

}

function showError2() {
    const email2 = document.getElementById('email2').value;
    console.log(email2)
    if (email2.includes('@')) {
        errMobile2.innerHTML = 'Subscription successful'
        errMobile2.style.color = '#3c9f8f';
        errMobile2.style.display = 'block';
        // console.log('success')
    }
    else {
        errMobile2.innerHTML = 'Please check your email'
        errMobile2.style.color = '#fff';
        errMobile2.style.display = 'block';
    }

}