<h1>Cart Capture Form</h1>

<form id="fakeform2">
    <input type="number" name="productid" placeholder="productid" id="boh5"  />
    <input type="text" name="productname" placeholder="productname" id="boh6"  />
    
    <input type="datetime-local" name="date" placeholder="date" id="boh"  />
    
    <input type="text" name="laststep" placeholder="laststep" id="boh4"  />
    
    <input type="text" name="state" placeholder="state" id="boh7"  />
    <input type="text" name="totalamount" placeholder="totalamount" id="boh8"  />
    <input type="text" name="url" placeholder="url" id="boh9"  />
    <input type="text" name="bindingid" placeholder="bindingid" id="boh10"  />

    <input type="text" name="email" placeholder="email" id="bohEmail" />
    <input type="text" name="fname" on:change={() => document.querySelector('#submitForm2').click() } placeholder="fname" id="boh2"  />
    <input type="text" name="lname" placeholder="lname" id="boh3" />

    <input type="submit" id="submitForm2" value="Submit">
</form>