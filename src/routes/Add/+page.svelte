<script>
    import Dropdown from "../Components/Dropdown.svelte";
    import { gotoMain } from "$lib/Functions";

</script>

<h3>Add new notes for course</h3>

<Dropdown/>
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