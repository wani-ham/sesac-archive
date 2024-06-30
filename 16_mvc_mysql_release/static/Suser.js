
// TODO: [Register] 버튼 클릭시 서버에 회원가입 요청하기
// POST /user/signup
function register() {
    console.log("Register button clicked!");
    const form = document.forms['form_register'];
    console.log(form);
    axios({
        method: 'post',
        url: './signup',
        data: {
            id: form.userid.value,
            pw: form.pw.value,
            name: form.name.value
        }
    })
}

// TODO: [Login] 버튼 클릭시 서버에 로그인 요청하기
// POST /user/signin
function login() {
    console.log('Login button clicked!');
    const form = document.forms['form_login'];
    axios({
        method: 'post',
        url: './signin',
        data: {
            id: form.userid.value,
            pw: form.pw.value
        }
    }).then((res) => {
        console.log(res.data);
    })
}

// TODO: [Login] 버튼 클릭시 서버에 회원 정보 수정 요청하기
function profileEdit() {
    const form = document.forms['form_profile'];
    axios ({
        method: 'PATCH',
        url: '/profile/edit',
        data: {
        id: form.id.value,
        pw: form.pw.value,
        name: form.name.value
        }
    }).then(res => {
    console.log(res.data);
        if (res.data.result) alert('Edited!');  
    });
}

// TODO: [Login] 버튼 클릭시 서버에 회원 정보 삭제 요청하기
function profileDelete() {
    axios({
        method: 'DELETE',
        url: '/profile/delete',
        data: {
            id: document.getElementById('id').value
        }
    })
    .then((res) => {
        console.log(res.data)
        if (res.data.result) {
            alert('Deleted!');
            document.location.href = '/';
        }
    });
};
    