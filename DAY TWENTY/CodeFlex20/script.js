let profile = document.getElementById("student-profile");
let title = document.getElementById("heading");
title.innerHTML = "STUDENT PROFILE";
 
const record = {
    name: "Joy David",
    age: 22,
    course: "Frontend Development",
    grade: "A",
    status: "Enrolled",
};

let myName = "name"; 
let nameIs =document.createElement("span");
nameIs.innerHTML= `<strong>Name:</strong> <P>${record[myName]} </p>`

let ageIs =document.createElement("span");
ageIs.innerHTML = `<strong>Age:</strong> <P>${record.age}</p>`

let courseIs =document.createElement("span");
courseIs.innerHTML = `<strong>Course:</strong> <P>${record.course} </p>`

let gradeIs =document.createElement("span");
gradeIs.innerHTML = `<strong>Grade:</strong> <P>${record.grade} </p>`

let statusIs =document.createElement("span");
statusIs.innerHTML = `<strong>Enrolled:</strong> <P>${record.status == "Enrolled"} </p>`

profile.appendChild(nameIs);
profile.append(ageIs);
profile.append(courseIs);
profile.append(gradeIs);
profile.append(statusIs);

