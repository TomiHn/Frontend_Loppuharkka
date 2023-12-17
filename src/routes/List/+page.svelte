<script>
// @ts-nocheck
    
    import { gotoMain } from "$lib/Functions";
    import { notes, courses} from "../../fetch";
    let selectedOption = "all"

    
    let defaultValue = "Select a course"

    let options;

    // $: console.log(notes)


    courses.subscribe(data => {
        options = data.map(course => ({value: course.name}))
    })
</script>

<h3>List notes for courses</h3>

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


{#each $notes as note (note.id)}
    <pre>{JSON.stringify(note, null, 2)}</pre>
    <!-- <div>{note.text}</div> -->
{/each}
