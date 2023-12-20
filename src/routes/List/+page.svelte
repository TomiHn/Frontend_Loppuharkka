<script>
// @ts-nocheck
    
    import { DeleteNote, gotoMain } from "$lib/Functions";
    import { notes, courses} from "../../fetch";
    let selectedOption = "all"
    let noteSelect = []
    
    let defaultValue = "Select a course"

    let options;

    // $: console.log(notes)
    courses.subscribe(data => {
        options = data.map(course => ({value: course.name}))
    })
    $: {if (selectedOption !== "all"){
        notes.subscribe(data => { noteSelect = data.filter(note => note.course.name === selectedOption);})
    }
    else{
        notes.subscribe(data => {
            noteSelect = data;
        })
    }
}

</script>

<h3>List notes for courses</h3>

<!-- Listataan kurssit dropdown valikkoon -->
<label for="courses">Course:</label>
<select name="courses" bind:value={selectedOption}>
    {#if defaultValue}
        <option value="all" disabled selected>{defaultValue}</option>
    {/if}
    {#each options as option}
        <option value={option.value}>{option.value}</option>
    {/each}
</select>
<button id="back" on:click={gotoMain}>Back</button>

<!-- Jos on muistiinpanoja kurssille, listataan ne -->
{#if noteSelect.length > 0}
    {#each noteSelect as note}
        <div class="noteList">
            <div>{note.course.name}, id[{note.course.id}]: {note.text} <br>Timestamp: {note.timestamp}</div>
            <button on:click={() => DeleteNote(note.id)}>Delete</button>
        </div>
    {/each}
<!-- Jos ei, näytetään viesti -->
{:else}
    <p>Ei muistiinpanoja!</p>
{/if}

<style>
    .noteList{
        border: 1px solid black;
        width: 500px;
        /* height: 50px; */
        margin-top: 10px;
        font-size: 1.2em;
    }
    .noteList button{
        margin-bottom: 5px;
    }
</style>

