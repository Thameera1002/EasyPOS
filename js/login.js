const users = [{user:'nimal',password:'123',avatar:'https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1666888122~exp=1666888722~hmac=2c2ad41ee211d11d12d0e2caaaf0fc0123833855e043e726bb104ee0ba4014d2'},
               {user:'kamal',password:'123',avatar:'https://img.freepik.com/free-vector/modern-anonymous-concept-with-flat-design_23-2147885144.jpg?w=740&t=st=1666888161~exp=1666888761~hmac=ecde443694b11cb0f750ed6e625ef62d48c579823cf45b441d473eb589efd501'}
            ];

const login=()=>{
    let userName = $('#userName').val();
    let password = $('#password').val();

    console.log(userName);
    console.log(password);


    if(userName.trim().length!==0 || password.trim().length!==0){
        for(const tempUser of users){
            if(tempUser.user === userName){
                if(tempUser.password === password){
                    localStorage.setItem('user',JSON.stringify({name:userName,avatar:tempUser.avatar}));
                    window.location.href='Pages/dashbord.html';
                    return;
                }else{
                    alert('Password is incorrect !');
                     return;
                }
            }
        }
        alert('User name is incorrect !');
    }else{
        alert('User name or password is required !')
        
    }
}
