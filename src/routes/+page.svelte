<script>
// @ts-nocheck
    
	import { FetchData, courses, notes } from "../fetch";

    let disable;
    $: if ($courses.length === 0){
        disable = true;
    }
    else{
        disable = false;
    }
    let apiNotes = "https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes"
    let apiCourses = "https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses"


</script>

<div class="links">
    {#if !disable}
        <a href="./Add">Create notes</a>
    {/if}

    
    <a href="./List">List notes</a>
    <a href="./CourseAdd">Add courses</a>
</div>

<button on:click={() => {FetchData(apiNotes, notes); FetchData(apiCourses, courses)}}>Fetch data from API</button>




<style>
    .links{
        display: inline-block;
    }
    button{
        display: block;
        margin-top: 10px;
    }
</style>