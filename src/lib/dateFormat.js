// @ts-nocheck

//Päivämäärän formatting funktio
export function formatDate(date) {
    //Otetaan koko päivämäärä talteen 
    let year = date.getFullYear();
    //Rikotaan päivämäärä osiin
    let month = date.getMonth() + 1; //+1 koska alkaa nollasta
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    //Nollia eteen jos on tarve
    month = month.toString().padStart(2, "0");
    day = day.toString().padStart(2, "0"); 
    hour = hour.toString().padStart(2, "0");
    minute = minute.toString().padStart(2, "0");
    second = second.toString().padStart(2, "0");

    //Luodaan formatoitu stringi
    let formattedDate = `${year}-${month}-${day} ${hour}:${minute}:${second}`; // "2022-10-23 13:13:13"

    return formattedDate;
}