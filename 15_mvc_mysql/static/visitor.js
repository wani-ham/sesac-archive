const tbody = document.querySelector('tbody');

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
        const { data } = res;
        const html = `
            <tr id="tr_<%= data[i].id %>">
                <td>${data[i].id}</td>
                <td>${data[i].name}</td>
                <td>${data[i].comment}</td>
                <td><button type="button">수정</button></td>
                <td><button type="button">삭제</button></td>
            </tr>        
        `
        tbody.insertAdjacentHTML('beforeend', html);
    })
}