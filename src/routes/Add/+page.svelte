<script>
// @ts-nocheck

    import { NewNote, gotoMain } from "$lib/Functions";
    import { notes, courses} from "../../fetch";
    let savedNotes = [];
    let selectedOption = ""
    let newNote = ""
    let savedNote = false;

    let defaultValue = "Select a course"

    let options;
    courses.subscribe(data => {
        options = data.map(course => ({value: course.name}))
    })

</script>

<h3>Add new notes for course</h3>

<!-- Listataan kurssit dropdown valikkoon, jos on tallennettu muistiinpano, lukitaan valintamahdollisuus -->
<label for="courses">Course:</label>
<select name="courses" bind:value={selectedOption} disabled={savedNote}>
    {#if defaultValue}
        <option value="" disabled selected>{defaultValue}</option>
    {/if}
    {#each options as option}
        <option value={option.value}>{option.value}</option>
    {/each}
</select>


<section>
    <label for="noteinput">Add notes</label>
    <textarea name="" id="" cols="40" rows="10" placeholder="Add notes here" bind:value={newNote}></textarea>
</section>




<!-- save nappi tallentaa uuden muistiinpanon ja tyhjentää kentän, jos kurssia ei ole valittu, nappi ei toimi, samalla tallennetaan savedNote muuttujaan että onko tallennettu -->
<button id="save" on:click={() => {NewNote(newNote, selectedOption); savedNotes=[...savedNotes, newNote]; newNote = ""; savedNote = true}} disabled= {selectedOption === ""}>Save</button>
<!-- Back nappi vie päävsivulle, ja resettaa "session", jonka jälkeen voi taas valita uuden kurssin -->
<button id="back" on:click={() => {gotoMain(); savedNote = false; savedNotes = []}}>Back</button>


{#each savedNotes as note}
    <div class="noteDisplay">{note}</div>
{/each}


<style>
    section label{
        display: block;
        margin-top: 20px;
    }
    #back{
        margin-left: 20px;
    }
    .noteDisplay{
        margin-top: 5px;
        margin-bottom: 5px;
    }
</style>