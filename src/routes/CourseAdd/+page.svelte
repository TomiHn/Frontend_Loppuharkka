<script>
// @ts-nocheck

	import { NewCourse, gotoMain } from "$lib/Functions";
	import { notes, courses } from "../../fetch";
    
    let message = "";
    let newCourse = "";


</script>

<h3>Add new courses</h3>

<section>
    <input type="text" placeholder="Add a course" bind:value={newCourse}>
</section>


<!-- Nappi tallentaa uuden kurssin, ja samalla luo tekstin uudesta kurssista joka näytetään alla -->
<button id="save" on:click={()=> {let saved = NewCourse(newCourse); newCourse = ""; if (saved){message = `Opintojakso ${saved.name} lisätty id:llä ${saved.id}`;}}}>Save</button>
<button id="back" on:click={gotoMain}>Back</button>

<div class="message">{message}</div>

<!-- <pre>{JSON. stringify($courses, null, 2)}</pre> -->

<style>
    .message{
        margin-top: 10px;
        font-size: 1.2em;
    }
    
</style>