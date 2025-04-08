// Object in js 

// key value pairs 

const StudentProfile = {

Name: "Manish Kumar",
Course: "PGDCA",
MobileNumber: 9852154785,
city: "Ujjain"

}

document.getElementById('para1').innerHTML = "Student Name: " + StudentProfile.Name + "<br>";

document.getElementById('para1').innerHTML += "Student Course: " + StudentProfile.Course;


// console.log(StudentProfile.Name)