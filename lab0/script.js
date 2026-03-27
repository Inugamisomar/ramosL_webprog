// 1. Create Student Class [cite: 20]
class Student {
    constructor(name) {
        this.name = name;
        this.isPresent = null; // null = undecided, true = Present, false = Absent
    }
}

const studentInput = document.getElementById('studentInput');
const addBtn = document.getElementById('addBtn');
const studentList = document.getElementById('studentList');

// 2. Capture input and add student [cite: 15, 16]
addBtn.addEventListener('click', () => {
    const name = studentInput.value.trim();
    
    // Alert if empty [cite: 54, 56]
    if (name === "") {
        alert("Please enter a student name.");
        return;
    }

    // Instantiate new Student object [cite: 21]
    const newStudent = new Student(name);
    console.log(newStudent); // Log to console [cite: 22]

    renderStudent(newStudent);
    studentInput.value = ""; // Clear input
});

function renderStudent(student) {
    const li = document.createElement('li');
    li.className = 'student-item';
    
    // Create text container
    const nameSpan = document.createElement('span');
    nameSpan.textContent = student.name;
    
    // Create button container [cite: 18]
    const btnGroup = document.createElement('div');

    const presBtn = document.createElement('button');
    presBtn.textContent = "Mark Present";
    presBtn.className = "btn-present";

    const absBtn = document.createElement('button');
    absBtn.textContent = "Mark Absent";
    absBtn.className = "btn-absent";

    const remBtn = document.createElement('button');
    remBtn.textContent = "Remove";
    remBtn.className = "btn-remove";

    // Event Listeners for status/removal
    presBtn.onclick = () => {
        student.isPresent = true;
        nameSpan.innerHTML = `${student.name} <span class="present-text">(Present)</span>`;
        console.log(student);
    };

    absBtn.onclick = () => {
        student.isPresent = false;
        nameSpan.innerHTML = `${student.name} <span class="absent-text">(Absent)</span>`;
        console.log(student);
    };

    remBtn.onclick = () => {
        li.remove();
        console.log(`Removed: ${student.name}`);
    };

    btnGroup.append(presBtn, absBtn, remBtn);
    li.append(nameSpan, btnGroup);
    studentList.appendChild(li);
}