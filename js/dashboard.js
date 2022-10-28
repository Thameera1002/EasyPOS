loadUserDetails=()=>{
    let userDetails=JSON.parse(localStorage.getItem('user'));
    $('.user-name').html(userDetails.name);
    $('#avatar').attr('src',userDetails.avatar);
}

setUI=(address)=>{
    $('#container').load(address);
}