<script>
    // @ts-nocheck
        let selected = "";
        let defaultValue = "Select a course"
        let options = [
            {label: "Course 1", value:"Course1"}
        ]
    </script>
    
    <label for="courses">Course:</label>
    <select name="courses" bind:value={selected}>
        {#if defaultValue}
            <option value="" disabled selected>{defaultValue}</option>
        {/if}
        {#each options as option}
            <option value={option.value}>{option.label}</option>
        {/each}
    </select>