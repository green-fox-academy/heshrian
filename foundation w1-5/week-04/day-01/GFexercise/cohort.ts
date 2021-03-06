'use strict';
import Student from "./student";
import Mentor from "./mentor";
class Cohort {
    name: string;
    students: Student[];
    mentors: Mentor[];

    constructor(name: string) {
        this.name = name;
        this.students = []
        this.mentors = []
    }

    addStudent(name: Student):void {
        this.students.push(name)
    }

    addMentor(name: Mentor):void {
        this.mentors.push(name)
    }

    info():void {
        console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors`)
    }
}

export default Cohort;