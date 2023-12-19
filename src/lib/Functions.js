// @ts-nocheck
import { goto } from "$app/navigation";
import { courses, notes } from "../fetch";

export function gotoMain(){
    goto("/");
}

//Kurssin lisäys
export function NewCourse(newCourse){
    //Onko kenttä tyhjä
    if (!newCourse.trim()){
        return;
    }
    //Haetaan kurrseista suurin id arvo ja kasvatetaan sitä yhdellä, näin uudella kurssilla on aina uusi id
    let largest = 0
    courses.update(currentCourses => {
        largest = Math.max(...currentCourses.map(course => course.id));
        return currentCourses;
    });
    let newCourseObj = {id: largest + 1,
                    name: newCourse};
    courses.update(currentCourses => { return [...currentCourses, newCourseObj]});
    return newCourseObj;
};