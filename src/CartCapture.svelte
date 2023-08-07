<h1>Cart Capture Form</h1>

<style>
    #fakeform2 > label {
        display: none;
    }
</style>

<form id="fakeform2">
    <label for="productid">Product Id:</label>
    <input type="number" name="productid" placeholder="productid" id="boh5"  />

    <label for="productname">Product name:</label>
    <input type="text" name="productname" placeholder="productname" id="boh6"  />
    
    <label for="date">Date:</label>
    <input type="datetime-local" name="date" placeholder="date" id="boh"  />
    
    <label for="laststep">Last Step:</label>
    <input type="text" name="laststep" placeholder="laststep" id="boh4"  />
    
    <label for="state">State:</label>
    <input type="text" name="state" placeholder="state" id="boh7"  />
    
    <label for="totalamount">Total Amount:</label>
    <input type="text" name="totalamount" placeholder="totalamount" id="boh8"  />
    
    <label for="url">URL:</label>
    <input type="text" name="url" placeholder="url" id="boh9"  />
    
    <label for="bindingid">Binding ID:</label>
    <input type="text" name="bindingid" placeholder="bindingid" id="boh10"  />

    <label for="email">Email:</label>
    <input type="text" name="email" placeholder="email" id="bohEmail" />

    <label for="fname">First name:</label>
    <input type="text" name="fname" on:change={() => document.querySelector('#submitForm2').click() } placeholder="fname" id="boh2"  />

    <label for="lname">Last name:</label>
    <input type="text" name="lname" placeholder="lname" id="boh3" />

    <input type="submit" id="submitForm2" value="Submit">
</form>