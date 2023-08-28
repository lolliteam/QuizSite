<script>
    import { score, fname, lname, email }  from '../store.js'
</script>

<style>
    #fakeForm {
        display: none;
    }
</style>

<form id="fakeForm">
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname" value={$fname}><br>
    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname" value={$lname}><br>
    <label for="email">Email:</label>
    <input type="text" id="email" name="email" value={$email}><br>

    <label for="points">Points:</label>
    <input type="text" id="points" name="points" value={$score * 100}><br>
    <label for="result">Result:</label>
    <input type="text" id="result" name="result" value={(($score * 100) >= 200) ? (($score * 100) == 400) ? 'Student' : 'Hedonist' : 'Adventurer'}>
    
    <input type="submit" id="submitForm" value="Submit">
</form>
