<h1>Cart Capture Form</h1>

<style>
    #fakeform3 > label {
        display: none;
    }
</style>

<form id="fakeform2" style="display:none;">
    <!-- <label for="productid">Product Id:</label>
    <input type="number" name="productid" placeholder="productid" id="productid"  />

    <label for="productname">Product name:</label>
    <input type="text" name="productname" placeholder="productname" id="productname"  />
    
    <label for="date">Date:</label>
    <input type="datetime-local" name="date" placeholder="date" id="date"  />
    
    <label for="laststep">Last Step:</label>
    <input type="text" name="laststep" placeholder="laststep" id="laststep"  />
    
    <label for="state">State:</label>
    <input type="text" name="state" placeholder="state" id="state"  />
    
    <label for="totalamount">Total Amount:</label>
    <input type="text" name="totalamount" placeholder="totalamount" id="totalamount"  />
    
    <label for="url">URL:</label>
    <input type="text" name="url" placeholder="url" id="url"  />
    
    <label for="bindingid">Binding ID:</label>
    <input type="text" name="bindingid" placeholder="bindingid" id="bindingid"  /> -->

    <label for="email">Email:</label>
    <input type="text" name="email" placeholder="email" id="email" />

    <label for="fname">First name:</label>
    <input type="text" name="fname" on:change={() => document.querySelector('#submitForm3').click() } placeholder="fname" id="fname"  />

    <label for="lname">Last name:</label>
    <input type="text" name="lname" placeholder="lname" id="lname" />

    <input type="submit" id="submitForm2" value="Submit">
</form>

<form id="fakeform3">
    <label for="productid">Product Id:</label>
    <input type="number" name="productid" placeholder="productid" id="productid"  />

    <label for="productname">Product name:</label>
    <input type="text" name="productname" placeholder="productname" id="productname"  />
    
    <label for="date">Date:</label>
    <input type="datetime-local" name="date" placeholder="date" id="date"  />
    
    <label for="laststep">Last Step:</label>
    <input type="text" name="laststep" placeholder="laststep" id="laststep"  />
    
    <label for="state">State:</label>
    <input type="text" name="state" placeholder="state" id="state"  />
    
    <label for="totalamount">Total Amount:</label>
    <input type="text" name="totalamount" placeholder="totalamount" id="totalamount"  />
    
    <label for="url">URL:</label>
    <input type="text" name="url" placeholder="url" id="url"  />
    
    <label for="bindingid">Binding ID:</label>
    <input type="text" name="bindingid" placeholder="bindingid" id="bindingid"  />

    <label for="email">Email:</label>
    <input type="text" name="email" placeholder="email" id="email" />

    <label for="fname">First name:</label>
    <input type="text" name="fname" on:change={() => document.querySelector('#submitForm2').click() } placeholder="fname" id="fname"  />

    <label for="lname">Last name:</label>
    <input type="text" name="lname" placeholder="lname" id="lname" />

    <input type="submit" id="submitForm3" value="Submit">
</form>