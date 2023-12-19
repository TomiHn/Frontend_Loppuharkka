<script>
// @ts-nocheck

    import { gotoMain } from "$lib/Functions";
    import { notes, courses} from "../../fetch";
    let selectedOption = "all"

    let defaultValue = "Select a course"

    let options;
    courses.subscribe(data => {
        options = data.map(course => ({value: course.name}))
    })

</script>

<h3>Add new notes for course</h3>

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

<section>
    <label for="noteinput">Add notes</label>
    <textarea name="" id="" cols="40" rows="10" placeholder="Add notes here"></textarea>
</section>



<button id="save">Save</button>
<button id="back" on:click={gotoMain}>Back</button>




<style>
    section label{
        display: block;
        margin-top: 20px;
    }
    /* section textarea{
        height: 200px;
        width: 400px;
        
    } */
    #back{
        margin-left: 20px;
    }
</style>