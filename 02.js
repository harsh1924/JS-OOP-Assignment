class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.courses = [];
    };

    enrollCourse(course) {
        this.courses.push(course);
        console.log(`${this.name} has been enrolled in ${course}`);
    };

    showCourse() {
        console.log(`${this.name}'s enrolled course: ${this.courses}`);
    }
};

class Admission {
    constructor() {
        this.students = []
    };

    enrollStudent(name) {
        this.students.push(name);
        console.log(`${name.name} has been enrolled`);
    }

    assignCourse(student, course) {
        if (student instanceof Student && student.email && course) {
            student.enrollCourse(course);
        } else {
            console.log('Invalid student or course information.');
        }
    };

    showEnrolledStudents() {
        console.log('Enrolled students:');
        this.students.forEach(student => {
            console.log(`Student Name: ${student.name}, Student Email: ${student.email}`);
        });
    };
};

let office = new Admission();
let student1 = new Student("Harsh", "harsh@test.com");
let student2 = new Student("Piyush", "piyush@test.com");

office.enrollStudent(student1);  // OUTPUT: Harsh has been enrolled
office.enrollStudent(student2);  // OUTPUT:  Piyush has been enrolled                           

office.assignCourse(student1, "Full Stack Web Development");  // OUTPUT: Harsh has been enrolled in Full Stack Web Development
office.assignCourse(student2, "DSA with Java");               // OUTPUT: Piyush has been enrolled in DSA with Java

student1.showCourse();  // OUTPUT: Harsh's enrolled course: Full Stack Web Development
student2.showCourse();  // OUTPUT: Piyush's enrolled course: DSA with Java

office.showEnrolledStudents();  // OUTPUT: Enrolled students:
// Student Name: Harsh, Student Email: harsh@test.com
// Student Name: Piyush, Student Email: piyush@test.com

