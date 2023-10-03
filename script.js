let reg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W)(?=.*[A-Za-z0-9\W]).{8,}$/;


let error = document.getElementById("error");

const data = {};


function submitHandler(event) {
    event.preventDefault();
    console.log(event.srcElement.length);
    for(let i = 0; i < 7;i++) {
        data[event.srcElement[i].name] = event.srcElement[i].value;
    }
    validate(data,event.srcElement);
}

function validate(data,form) {
    let username = /^[a-zA-Z0-9]{4,}$/;
    let name = /^[a-zA-Z\ ]+$/;
    let email = /^[a-z0-9\.]+@[a-z0-9]+\.[a-z]{2,6}$/;
    if(!username.test(data.username)) {
        form[0].style.border = "2px solid red";
        error.textContent = "Username must contain atleast 4 charectors and no special symbols!";
        return;
    } else {
        form[0].style.border = "2px solid green";
        error.textContent = "";
    }
    if(!name.test(data.fname)) {
        form[1].style.border = "2px solid red";
        error.textContent = "First name cannot be empty an cannot contain special symbols!";
        return;
    } else {
        form[1].style.border = "2px solid green";
        error.textContent = "";
    }
    if(!name.test(data.lname)) {
        form[2].style.border = "2px solid red";
        error.textContent = "Last name cannot be empty an cannot contain special symbols!";
        return;
    } else {
        form[2].style.border = "2px solid green";
        error.textContent = "";
    }
    if(!email.test(data.email)) {
        form[3].style.border = "2px solid red";
        error.textContent = "Please provide a valid email address!";
        return;
    } else {
        form[3].style.border = "2px solid green";
        error.textContent = "";
    }
}

