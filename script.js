console.log("Hello kavi");
const API = "https://65260bd067cfb1e59ce7d705.mockapi.io/Users";
// selecting the dom elements
const studentList = document.querySelector("#student-list");
let editId;
//updateData
function updateData(updatedStudent) {
    fetch(`${API}/${editId}`, {
      method: "PUT",
      body: JSON.stringify(updatedStudent),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => location.reload())
      .catch((err) => console.log("Error", err));
  }

  function ReadAllData() {
    fetch(API, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => renderAllStudents(data))
      .catch((err) => console.log("Error", err));
  }
  ReadAllData();
  // render students data
function renderStudents(stud) {
    const studentDiv = document.createElement("div");
    studentDiv.className = "card";
    studentDiv.innerHTML += `
   <h2>${stud.name}</h2>
   <p> <span>Batch</span> -${stud.batch}</p>
    <p><span>Age</span> -${stud.age}</p>
   <div class="btn-group">
   <button class="del-btn">Delete</button>
   </div>
    `;
    studentList.append(studentDiv);
  }
  
  // render array of students card
  function renderAllStudents(students) {
    students.forEach((student) => {
      renderStudents(student);
    });
  }
  
 