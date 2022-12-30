function showm(){
    var firstName1 = document.getElementById('firstName1');
    var lastName2 = document.getElementById('lastName2');
    var emailId3 = document.getElementById('emailId3');

    if (firstName1 &&  lastName2 && emailId3 ){
        alert("form Submited")
        
    }else {
        document.getElementById('message').style.opacity = '1';
    }
}