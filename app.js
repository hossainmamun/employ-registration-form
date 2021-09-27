const registration_part = document.querySelector('#registration-part');
const registrationForm = document.querySelector('#registration-form');
const firstName = document.querySelector('#fast-name');
const lastName = document.querySelector('#last-name');
const address = document.querySelector('#address');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const department = document.querySelector('#department');
const bloodGroup = document.querySelector('#blood-group');
const file = document.querySelector('#file');


// select result section element
const targetImg = document.querySelector('#target-img');
const employId = document.querySelector('#employ-id')
const showName = document.querySelector('#show-name')
const show_address = document.querySelector('#show-address');
const show_email = document.querySelector('#show-email');
const show_phone = document.querySelector('#show-phone');
const show_department = document.querySelector('#show-department');
const show_blood = document.querySelector('#show-blood');
const completeReg = document.querySelector('#complete-reg')

// add event listener to the form 
registrationForm.addEventListener('submit', (e) => {
    e.preventDefault()
    showName.innerHTML = `FullName : ${firstName.value} ${lastName.value}`;
    show_address.innerHTML = `Address : ${address.value}`;
    show_email.innerHTML = `Email : ${email.value}`;
    show_phone.innerHTML = `Phone : +88 ${phone.value}`;

    // onchange event handler function [department]
    function changeDepartment(){
        const getDepartment = department.value;
        show_department.innerHTML = `Department : ${getDepartment}`;
    }
    changeDepartment();

    // onchange event handler function [blood group]
    function changeBloodGroup(){
        const getBloodGroup = bloodGroup.value;
        show_blood.innerHTML = `Blood Group : ${getBloodGroup}`;
    }
    changeBloodGroup()

    employId.innerHTML = `HM-${Math.round(Math.random() * 900000)}`

    registration_part.style.display = 'none';
    targetImg.style.display = "block";
    completeReg.style.display = "block";
})

// add event listener input[type='file']
file.addEventListener('change', (event) => {
    targetImg.src = URL.createObjectURL(event.target.files[0])
})


/* function loadFile(event) {
    targetImg.src = URL.createObjectURL(event.target.files[0])
} */




