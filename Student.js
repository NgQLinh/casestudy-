// Định nghĩa lớp Student
class Student {
    constructor(name, birthdate, course, classYear, hometown, gender, imageUrl) {
        this.name = name;
        this.birthdate = new Date(birthdate);
        this.course = course;
        this.classYear = classYear;
        this.hometown = hometown;
        this.gender = gender;
        this.imageUrl = imageUrl;
    }
}

let students = [];

// Dữ liệu mẫu
students.push(new Student("Nguyễn Văn An", "2004-11-01", "Công nghệ thông tin", "K16", "Hà Nội", "Nam", "https://via.placeholder.com/100"));
students.push(new Student("Nguyễn Nhật Hạ", "2003-06-25", "Tài chính ngân hàng", "K15", "Phú Thọ", "Nam", "https://via.placeholder.com/100"));
students.push(new Student("Phạm Trần Lam Giang", "2005-09-21", "Marketing", "K17", "Thanh Hoá", "Nữ", "https://via.placeholder.com/100"));
students.push(new Student("Lê Mai Khanh", "2004-10-06", "Ngôn ngữ Anh", "K16", "Hà Tĩnh", "Nữ", "https://via.placeholder.com/100"));
students.push(new Student("Lê Trần Thảo Linh", "2003-01-01", "Kế toán", "K15", "Điện Biên", "Nữ", "https://via.placeholder.com/100"));
students.push(new Student("Đặng Bình An", "2003-05-15", "Thiết kế đồ hoạ", "K15", "Bắc Giang", "Nam", "https://via.placeholder.com/100"));
students.push(new Student("Lâm Hải An", "2005-07-30", "Truyền thông đa phương tiện", "K17", "Hải Dương", "Nam", "https://via.placeholder.com/100"));
students.push(new Student("Võ Cát Hải Đường", "2005-01-01", "Công nghệ bán dẫn", "K17", "Hải Phòng", "Nữ", "https://via.placeholder.com/100"));
students.push(new Student("Antaram Đặng", "2004-05-08", "Điện tử viễn thông", "K16", "America", "Nữ", "https://via.placeholder.com/100"));
students.push(new Student("Nguyễn Thành Đạt", "2004-12-22", "Công nghệ kỹ thuật ô tô", "K16", "Quảng Ninh", "Nam", "https://via.placeholder.com/100"));

function display(studentList) {
    const studentContainer = document.getElementById("studentContainer");
    studentContainer.innerHTML = "";
    studentList.forEach(student => {
        const studentRow = document.createElement("tr");
        studentRow.innerHTML = `
            <td>${student.name}</td>
            <td>${student.gender}</td>
            <td>${student.birthdate.toLocaleDateString()}</td>
            <td>${student.course}</td>
            <td>${student.classYear}</td>
            <td>${student.hometown}</td>
            <td><img src="${student.imageUrl}" alt="${student.name}" style="width: 50px; height: 50px; object-fit: cover;"></td>
            <td>
                <button onclick="editStudent('${student.name}')">Sửa</button>
                <button onclick="deleteStudent('${student.name}')">Xóa</button>
            </td>
        `;
        studentContainer.appendChild(studentRow);
    });
}

function addStudent() {
    const name = document.getElementById("studentAddName").value;
    const birthdate = document.getElementById("studentAddDob").value;
    const course = document.getElementById("studentAddMajor").value;
    const classYear = document.getElementById("studentAddCourse").value;
    const hometown = document.getElementById("studentAddBirthplace").value;
    const gender = document.getElementById("studentAddGender").value;
    const imageUrl = document.getElementById("studentAddImage").value;

    const newStudent = new Student(name, birthdate, course, classYear, hometown, gender, imageUrl);
    students.push(newStudent);
    display(students);
}

function editStudent(name) {
    const student = students.find(s => s.name === name);
    if (student) {
        alert("Chức năng sửa chưa được thực hiện.");
    }
}

function deleteStudent(name) {
    students = students.filter(s => s.name !== name);
    display(students);
}

function searchStudent() {
    const searchValue = document.getElementById("studentSearch").value.toLowerCase();
    const filteredStudents = students.filter(student => student.name.toLowerCase().includes(searchValue));
    display(filteredStudents);
}

document.getElementById("add").onclick = addStudent;
document.getElementById("search").onclick = searchStudent;

window.onload = () => display(students);
