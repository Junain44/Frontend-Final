function createUsers(){
    let form = document.getElementById("register")
    const inputs = form.getElementsByTagName("input");

    let user = {
        name: inputs[0].value, 
        email: inputs[1].value,
        password: inputs[2].value,
    }

    console.log(user);

    fetch("https://glacial-sierra-17146.herokuapp.com/add_user/",{
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    })                            
    .then((response) => response.json())
    .then((json) => {
        alert("User has been created");
        console.log(json);
        document.getElementById("register").reset();
    });
}