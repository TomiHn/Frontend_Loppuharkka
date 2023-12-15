<script>
    import Dropdown from "../Components/Dropdown.svelte";
</script>

<h3>Add new notes for course</h3>

<Dropdown/>
<section>
    <label for="noteinput">Add notes</label>
    <textarea name="" id="" cols="40" rows="10" placeholder="Add notes here"></textarea>
</section>



<button id="back">Back</button>
<button id="save">Save</button>




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