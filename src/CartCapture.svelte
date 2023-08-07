<h1>Cart Capture Form</h1>

<style>
    #fakeform2 > label {
        display: none;
    }
</style>

<form id="fakeform2">
    <label for="email">Email:</label>
    <input type="text" name="email" placeholder="email" id="email" />

    <label for="fname">First name:</label>
    <input type="text" name="fname" on:change={() => document.querySelector('#submitForm2').click() } placeholder="fname" id="fname"  />

    <label for="lname">Last name:</label>
    <input type="text" name="lname" placeholder="lname" id="lname" />

    <input type="submit" id="submitForm2" value="Submit">
</form>