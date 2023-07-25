const form = document.querySelector('.form');

const handleForm = (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let date = document.getElementById('date').value;
    let sex = document.querySelector('input[name="sex"]:checked').value;
    let course1 = document.getElementById('course1').checked ? "Đã đăng ký Javascript" : "";
    let course2 = document.getElementById('course2').checked ? "Đã đăng ký NodeJs" : "";
    let course3 = document.getElementById('course3').checked ? "Đã đăng ký MongoDB" : "";

    console.log(`
        Họ và tên: ${name}
        Số điện thoại: ${phone}
        Email: ${email}
        Ngày sinh: ${date}
        Giới tính: ${sex === 'nam' ? 'Nam' : 'Nữ'}
        Khóa học: 
         ${course1}
         ${course2}
         ${course3}
    `);
}

form.addEventListener('submit', handleForm);


