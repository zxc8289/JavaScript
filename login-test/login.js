$(function() {
    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});


// 회원가입 하기

// 1. 회원가입 버튼 함수 만들기

function register() {
    // 내용 체크 하기
    const checkResult = checkJoinFields();

    if(!checkResult){
        return;
    }
    

    // 회원가입 진행
    const usernameElement = document.getElementById("username");
    const emailElement = document.getElementById("email");
    const passwordElement = document.getElementById("password");

    const newUser = {
        username: usernameElement.value,
        email: emailElement.value,
        password: passwordElement.value
    }
    
    const user = JSON.stringify(newUser);
    console.log(user)
    localStorage.setItem('user', user);
    // window.localStorage.setItem('user' , JSON.stringify(newUser)); // 로컬스토리지 저장
    // console.log(newUser);

    // 회원가입 완료 메시지
    alert("회원가입 완료.")


    // 페이지 이동.


    //window.location.href = "이동할 페이지 주소 입력"


}

// 2. 회원가입 내용 체크 함수 만들기
function checkJoinFields(){
    // username
    // email
    // password
    // confirm-password

    const usernameElement = document.getElementById("username");
    const emailElement = document.getElementById("email");
    const passwordElement = document.getElementById("password");
    const confirmPasswordElement = document.getElementById("confirm-password");

    // 유저네임이 없으면 안됨
    if(usernameElement.value == ""){
        alert("아이디를 입력해주세요.");
        usernameElement.focus();
        return false;
    }

    // 이메일이 없으면 안됨
    if(emailElement.value == ""){
        alert("이메일을 입력해주세요.");
        emailElement.focus();
        return false;
    }

    // 비밀번호가 없으면 안됨
    if(passwordElement.value == ""){
        alert("비밀번호를 입력해주세요.");
        passwordElement.focus();
        return false;
    }

    // 비밀번호 확인이 없으면 안됨
    if(confirmPasswordElement.value == ""){
        alert("비밀번호 확인을 입력해주세요.");
        confirmPasswordElement.focus();
        return false;
    }

    // 비밀번호와 비밀번호 확인이 동일해야함
    if(passwordElement.value != confirmPasswordElement.value){
        alert("비밀번호가 일치하지 않습니다.");
    }

    // 모두 통과함
    return true;
    
}



// 로그인 하기

// 1. 로그인 버튼 함수 만들기
function login(){
    // 로그인 내용 체크
    const loginCk = loginCheck();
    
    if(!loginCk){
        return;
    }

    const loginUsernameElement = document.getElementById("loginUsername");
    const loginPasswordElement = document.getElementById("loginPassword");
    const userData = JSON.parse(localStorage.getItem('user'));

    // console.log("1" + loginUsernameElement.value);
    // console.log("2" + userData.username);

    if(userData.username == loginUsernameElement.value && userData.password == loginPasswordElement.value){
        alert("로그인 성공");
    }
    
    else if(userData.username != loginUsernameElement.value && userData.password == loginPasswordElement.value){
        alert("아이디가 일치하지 않습니다.");
    }
    
    else if(userData.username == loginUsernameElement.value && userData.password != loginPasswordElement.value){
        alert("비밀번호가 일치하지 않습니다.");
    }
    else {
        alert("로그인 실패");
    }
}

// 2. 로그인 내용 체크 함수 만들기
function loginCheck(){
    const loginUsernameElement = document.getElementById("loginUsername");
    const loginPasswordElement = document.getElementById("loginPassword");

    if(loginUsernameElement.value == ""){
        alert("아이디를 입력해주세요.");
        return false;
    }

    if(loginPasswordElement.value == ""){
        alert("비밀번호를 입력해주세요.");
        return false;
    }

    return true;
}