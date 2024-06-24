function createVisitor() {
    // console.log("EFDAWEF");
    const form = document.forms['visitor-form'];

    axios({
        method: 'post',
        url: '/visitor',
        data: {
            name: form.name.value,
            comment: form.comment.value,
        }
    }).then((res) => {
        console.log(res);
    })
}