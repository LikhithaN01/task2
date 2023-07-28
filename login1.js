var aUser=[{
    username : "Smith",password: "12345"
},
{
    username :"Nishitha" ,password : "1234"
}
]
function getInfo(){
    var username =document.getElementById("username").value;
    var password =document.getElementById("password").value;
    console.log("Usernam is: "+ username+"password is :" +password)
for(i=0;i<aUser.length;i++){
    if(username==aUser[i].username && password==aUser[i].password ){
        console.log(username+" Logged in!")
        alert ("succesfully logged in!!!"  )
        window.location.replace("index.html")
        
        return
        
    }
    alert ("unsuccesful logged in!!!"  )
}
console.log("incorrect username or passsword!!");
}
