<h1>Cart Capture Form</h1>

<style>
    #fakeform3 > label {
        display: none;
    }
</style>

<script>
    function formSubmit() {
        //document.querySelector('#submitForm3').click();
        MsCrmMkt.MsCrmFormLoader.sendFormCaptureToCrm(document.getElementById('fakeform3')).then(() => {
            console.log('Submission Complete')    
        });
    }

    //window.addEventListener('beforeunload', (event) => {
    window.addEventListener('unload', (event) => {
        event.preventDefault();
        if(obj.email ) track_msdynmkt_abandoncarttrigger_142637121(); 
        event.returnValue = '';
    });

    function track_msdynmkt_abandoncarttrigger_142637121() {
        window["msdynmkt"].setUser({ authId: obj.email});   // ID, e-mail or phone number - see instructions
        window["msdynmkt"].trackEvent({
            name: "msdynmkt_abandoncarttrigger_142637121", //Trigger title: Abandon Cart Trigger
            ingestionKey : "c5eb70d46f704ec2a29bd75d30423e1a-2b4924c6-64f1-4752-b2b7-caf7ee263843-7455",
            version: "1.0.0" ,
        properties: {
         "date" : obj.date,
         "firstname" : obj.fname,
         "lastname" : obj.lname,
         "laststep" : obj.laststep,
         "productid" : obj.productid,
         "productname" : obj.productname,
         "state" : obj.state,
         "totalamount" : obj.totalamount,
         "bindingid" : obj.bindingid
        }
        });
    }

    let obj = {
        email : '',
        date : '',
        fname : '',
        lname : '',
        laststep : '',
        productid : '',
        productname : '',
        state : '',
        totalamount : '',
        // url : '',
        bindingid : '',
    }
</script>

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
    <input type="text" name="fname" on:change={() => document.querySelector('#submitForm2').click() } placeholder="fname" id="fname"  />

    <label for="lname">Last name:</label>
    <input type="text" name="lname" placeholder="lname" id="lname" />

    <input type="submit" id="submitForm2" value="Submit">
</form>

<form id="fakeform3" action="#">
    <label for="productid">Product Id:</label>
    <input type="number" name="productid" placeholder="productid" id="productid" bind:value={obj.productid} />

    <label for="productname">Product name:</label>
    <input type="text" name="productname" placeholder="productname" id="productname" bind:value={obj.productname} />
    
    <label for="date">Date:</label>
    <input type="datetime-local" name="date" placeholder="date" id="date"  bind:value={obj.date} />
    
    <label for="laststep">Last Step:</label>
    <input type="text" name="laststep" placeholder="laststep" id="laststep" bind:value={obj.laststep}  />
    
    <label for="state">State:</label>
    <input type="text" name="state" placeholder="state" id="state" bind:value={obj.state}  />
    
    <label for="totalamount">Total Amount:</label>
    <input type="text" name="totalamount" placeholder="totalamount" id="totalamount" bind:value={obj.totalamount} />
    
    <label for="url">URL:</label>
    <input type="text" name="url" placeholder="url" id="url" bind:value={obj.url} />
     
    <label for="bindingid">Binding ID:</label>
    <input type="text" name="bindingid" placeholder="bindingid" id="bindingid" bind:value={obj.bindingid}  />

    <label for="email">Email:</label>
    <input type="text" name="email" placeholder="email" id="email" bind:value={obj.email}/>

    <label for="fname">First name:</label>
    <input type="text" name="fname" on:change={formSubmit} placeholder="fname" id="fname"  bind:value={obj.fname} />

    <label for="lname">Last name:</label>
    <input type="text" name="lname" placeholder="lname" id="lname" bind:value={obj.lname} />

    <input type="submit" style="display:none;" id="submitForm3" value="Submit">
</form>