

    class Student {
        constructor(name, dob, major, course, birthplace, gender) {
            this.name = name;
            this.dob = new Date(dob);
            this.major = major;
            this.course = course;
            this.birthplace = birthplace; // Thêm nơi sinh
            this.gender = gender;
        }

        get age() {
            const today = new Date();
            return today.getFullYear() - this.dob.getFullYear();
        }
    }

    let students = [];

    function display(studentsToShow) {
        let result = "<table><tr style='background-color: green; color: white'>" +
            "<th>Họ tên</th>" +
            "<th>Ngày sinh</th>" +
            "<th>Tuổi</th>" +
            "<th>Ngành học</th>" +
            "<th>Khóa học</th>" +
            "<th>Nơi sinh</th>" + // Cột mới cho nơi sinh
            "<th>Giới tính</th>" +
            "<th>Hành động</th>" +
            "</tr>";

        for (let i = 0; i < studentsToShow.length; i++) {
            result += "<tr>";
            result += `<td>${studentsToShow[i].name}</td>`;
            result += `<td>${studentsToShow[i].dob.toLocaleDateString()}</td>`;
            result += `<td>${studentsToShow[i].age}</td>`;
            result += `<td>${studentsToShow[i].major}</td>`;
            result += `<td>${studentsToShow[i].course}</td>`;
            result += `<td>${studentsToShow[i].birthplace}</td>`; // Hiển thị nơi sinh
            result += `<td>${studentsToShow[i].gender}</td>`;
            result += `<td><button onclick="deleteStudent(${i})">Xóa</button></td>`;
            result += "</tr>";
        }
        result += "</table>";
        document.getElementById("result").innerHTML = result;
    }

    function deleteStudent(index) {
        if (confirm(`Bạn có chắc muốn xóa sinh viên ${students[index].name}?`)) {
            students.splice(index, 1);
            display(students);
            alert("Xóa thành công");
        }
    }

    document.getElementById("add").addEventListener("click", function () {
        const name = document.getElementById("studentAddName").value;
        const dob = document.getElementById("studentAddDob").value;
        const major = document.getElementById("studentAddMajor").value;
        const course = document.getElementById("studentAddCourse").value;
        const birthplace = document.getElementById("studentAddBirthplace").value; // Lấy nơi sinh
        const gender = document.getElementById("studentAddGender").value;

        if (!name || !dob || !major || !course || !birthplace || !gender) {
            alert("Vui lòng điền đầy đủ thông tin");
            return;
        }

        const student = new Student(name, dob, major, course, birthplace, gender);
        students.push(student);
        display(students);
        document.getElementById("alertProcess").innerHTML = "Thêm sinh viên thành công!";
        document.getElementById("studentAddName").value = "";
        document.getElementById("studentAddDob").value = "";
        document.getElementById("studentAddMajor").value = "";
        document.getElementById("studentAddCourse").value = "";
        document.getElementById("studentAddBirthplace").value = ""; // Xóa thông tin nơi sinh
        document.getElementById("studentAddGender").value = "";
    });

    document.getElementById("search").addEventListener("click", function () {
        const searchName = document.getElementById("studentSearch").value;
        const searchAge = parseInt(document.getElementById("studentSearchAge").value);
        const searchCourse = document.getElementById("studentSearchCourse").value;
        const searchBirthplace = document.getElementById("studentSearchBirthplace").value; // Tìm kiếm theo nơi sinh

        const filteredStudents = students.filter(student => {
            const matchesName = student.name.includes(searchName);
            const matchesAge = isNaN(searchAge) || student.age === searchAge;
            const matchesCourse = student.course.includes(searchCourse);
            const matchesBirthplace = student.birthplace.includes(searchBirthplace); // Tìm kiếm theo nơi sinh
            return matchesName && matchesAge && matchesCourse && matchesBirthplace;
        });

        display(filteredStudents);
    })

    students.push(new Student("Nguyễn Văn An", "2004-11-01", "Công nghệ thông tin", "K16", "Hà Nội", "Nam"));
    students.push(new Student("Nguyễn Nhật Hạ", "2003-06-25", "Tài chính ngân hàng", "K15", "Phú Thọ", "Nam"));
    students.push(new Student("Phạm Trần Lam Giang", "2005-09-21", "Marketing", "K17", "Thanh Hoá","Nữ"));
    students.push(new Student("Lê Mai Khanh", "2004-10-06", "Ngôn ngữ Anh", "K16", "Hà Tĩnh","Nữ"));
    students.push(new Student("Lê Trần Thảo Linh", "2003-01-01", "Kế toán", "K15", "Điện Biên","Nữ"));
    students.push(new Student("Đặng Bình An", "2003-05-15", "Thiết kế đồ hoạ", "K15","Bắc Giang","Nam"));
    students.push(new Student("Lâm Hải An", "2005-07-30", "Truyền thông đa phương tiện", "K17", "Hải Dương","Nam"));
    students.push(new Student("Võ Cát Hải Đường", "2005-01-01", "Công nghệ bán dẫn", "K17", "Hải Phòng","Nữ"));
    students.push(new Student("Antaram Đặng", "2004-05-08", "Điện tử viễn thông", "K16", "America","Nữ"));
    students.push(new Student("Nguyễn Thành Đạt", "2004-12-22", "Công nghệ kỹ thuật ô tô", "K16", "Quảng Ninh","Nam"));
display(students)


