Username = document.getElementById("username")value;

function adduser()
{
    localStorage.setItem(Username);
    window.location = "kwitter.html";
}

localStorage.getItem("username")
Username = document.getElementById("user_name").innerHTML = "Welcome " + Username + "!";
