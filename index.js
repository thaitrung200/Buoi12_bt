
var readlineSync = require("readline-sync");
const shortid = require("shortid");
let studentDB = [
  { id: shortid.generate(), name: "Tung", age: '27', sex: "male" },
  { id: shortid.generate(), name: "Nam", age: '22', sex: "male" },
]
var showMenu = function () {
  console.log("               Student Managerment                  ");
  console.log("====================================================");
  console.log(" 1. Show all student ");
  console.log(" 2.Create student and return Menu");
  console.log(" 3.Delete student");
  console.log(" 4.Edit student");
  console.log(" 5.Find student by name");
  console.log(" 6.Sort student by name ascending");
  console.log(" 7.Sort student by age ascending");
  console.log(" 8.Delete all student");
  console.log(" 9. Sum student age");
  console.log(" 10.Exit");
};

showMenu();
var studentStr = "";
let choise = readlineSync.question("Your choise? ");

let showStudent = function(){
  console.log(studentDB);
}

let sexIndex = ["male", "female"];

let createStudent = function() {
  let name = readlineSync.question("Name? ");
  let age = readlineSync.question("Age? ");
  let sex = readlineSync.keyInSelect(sexIndex, "sex? male/female: 0/1 ");
  studentDB.push({
      id: shortid.generate(),
      name: name,
      age: age,
      sex: sexIndex[sex]
  });
}

let deleteStudent = function() {
  let nameDelete = readlineSync.question("Name? ");
  for (let i = 0; i < studentDB.length; i++) {
      if (studentDB[i].name == nameDelete) {
          studentDB.splice(i, 1);
      }
  }
}

let editStudent = function() {
  let nameWantToEdit = readlineSync.question("Name  want to Edit? ");
  let nameEdit = readlineSync.question("Name Edit ");
  let ageEdit = readlineSync.question("Age Edit? ");
  let sexEdit = readlineSync.keyInSelect(sexIndex, "sex? male/female: 0/1 ");
  for (let i = 0; i < studentDB.length; i++) {
      if (studentDB[i].name == nameWantToEdit) {
          studentDB[i].name = nameEdit;
          studentDB[i].age = ageEdit;
          studentDB[i].sex = sexIndex[sexEdit];
      }
  }
}

let findStudent = function() {
  let findStudentDB = [];
  let nameFind = readlineSync.question("Name Find? ");
  for (let i = 0; i < studentDB.length; i++) {
      if (studentDB[i].name == nameFind) {
          findStudentDB.push({
              id: studentDB[i].id,
              name: studentDB[i].name,
              age: studentDB[i].age,
              sex: studentDB[i].sex
          });
      }
  }
  console.log(findStudentDB);
}

let sortNameAsc = function() {
  studentDB.sort((a, b) => (a.name > b.name) ? 1 : -1);
  console.log(studentDB);
}

let sortAgeAsc = function() {
  studentDB.sort((a, b) => (a.age > b.age) ? 1 : -1);
  console.log(studentDB);
}

let deleteAllStudent = function() {
  for (let i = 0; i < studentDB.length; i++) {
      studentDB.splice(0, studentDB.length);
  }
}

let sumAge = function() {
  let sumAgeAvg = studentDB.reduce((accumalator, element) => {
      return accumalator + +element.age
  }, 0);
  console.log(sumAgeAvg);
}



while (true) {
  switch (parseInt(choise)) {
      case 1:
          showStudent();
          break;
      case 2:
          createStudent();
          break;
      case 3:
          deleteStudent();
          break;
      case 4:
          editStudent();
          break;
      case 5:
          findStudent()
          break;
      case 6:
          sortNameAsc();
          break;
      case 7:
          sortAgeAsc();
          break;
      case 8:
          deleteAllStudent();
          break;
      case 9:
          sumAge();
          break;
      case 10:
          console.log("Exit");
          break;
  }
  showMenu();
  yourchoise = readlineSync.question('YourChoise? ');
}