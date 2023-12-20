// @ts-nocheck
import { goto } from "$app/navigation";
import { courses, notes } from "../fetch";
import { formatDate } from "./dateFormat";

export function gotoMain(){
    goto("/");
}

//Kurssin lisäys
export function NewCourse(newCourse){
    //Onko kenttä tyhjä
    if (!newCourse.trim()){
        return;
    }

    let largest = 0;   //Haetaan kurrseista suurin id arvo ja kasvatetaan sitä yhdellä, näin uudella kurssilla on aina uusi id
    courses.update(currentCourses => {
        largest = Math.max(...currentCourses.map(course => course.id));
        return currentCourses;
    });

    //Luodaan uusi kurssi objekti
    let newCourseObj = {id: largest + 1,
                    name: newCourse};
    courses.update(currentCourses => { return [...currentCourses, newCourseObj]});
    return newCourseObj;
};

//Muistiinpanon lisäys
export function NewNote(newNote, courseName){
    //Onko kenttä tyhjä
    if(!newNote.trim()){
        return;
    }
    //Etsitään valikossa oleva kurssi kurssilistasta
    let courseFind = null;
    courses.update(currentCourses => { courseFind = currentCourses.find(course => course.name === courseName);
        return currentCourses;});
    //jos löytyy, luodaan uusi muistiinpano
    if(courseFind){
        let date = new Date();
        let newNoteAdd = {id: courseFind.id,
                          text: newNote,
                          course: courseFind,
                          timestamp: formatDate(date)};
                          
        //lisätään uusi muistiinpano notes storeen
        notes.update(currentNotes => {return [...currentNotes, newNoteAdd];})
        return newNoteAdd;
        
    } else {
        return null; //jos ei löydy, palautetaan null
    }
}

//Muistiinpanon poisto
export function DeleteNote(noteId){
    notes.update(currentNotes => {
        return currentNotes.filter(note => note.id !== noteId);
    });
}