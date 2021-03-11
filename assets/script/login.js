let users = [];


fetch("https://glacial-sierra-17146.herokuapp.com/show/")
    .then((response) =>response.json())
    .then((data) => {
    console.log(data);
    users = data;
});

function userLogin(){
    const form = document.getElementById("login")
    let inputs = form.getElementsByTagName("input");
    
    let email = inputs[0].value;
    let password = inputs[1].value;
    console.log(email,password)

    let log = users.filter(user => {
        return user.email == email && user.password == password ?true : false;
    })

    console.log(log);

    if (log.length > 0) {
        alert("You have successfully logged in");
        window.location.href = "./landing-page.html";
    }else{
        alert("Please enter a valid username and password");
    }
}
    