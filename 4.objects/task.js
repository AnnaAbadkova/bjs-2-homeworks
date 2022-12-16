function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}


Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks ) {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
  if (this.marks && this.marks.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];
  }
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
}

let student1 = new Student("Анна", "женский", 32);
let student2 = new Student("Василиса", "женский", 19);
student1.addMarks(4, 5, 5);
student2.addMarks(5, 5, 5);
