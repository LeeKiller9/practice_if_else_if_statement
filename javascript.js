function login() {
    let userName = prompt("Who's there?", '');
    if (userName === 'Admin') {
        let pass = prompt('Password?', '');
        if (pass === 'TheMaster') {
            alert('Welcome!');
        } else if (pass == null) {
            alert('Canceled.');
        } else {
            alert('Wrong password');
        }
    } else if (userName == null) { //Khi ng dùng nhấn cancel thì gtrị trả về là null
        alert('Canceled');
    } else {
        alert("I don't know you");  //Khi ng dùng nhấn ok thì gtrị trong ô nhập liệu sẽ dc trả về, ng dùng ko nhập gì thì gtrị trả về là 1 chuỗi rỗng ""
    }
}