function createUsers(){
    const inputs = document.getElementsByTagName("input");

    fetch("http://127.0.0.1:5000/add_user/",{
        method: 'POST',
        body: JSON.stringify({
            name: inputs[0].value, 
            email: inputs[1].value,
            password: inputs[2].value,
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    })                            
    .then((response) => response.json())
    .then((json) => {
        alert("User has been created");
        document.getElementById("register").reset();
    });
}