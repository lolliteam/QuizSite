<script>
    function track_msdynmkt_testtrigger_090959945() {

        
        window["msdynmkt"].setUser({ authId: "mlolli@comtrade.com"});   // ID, e-mail or phone number - see instructions
        window["msdynmkt"].trackEvent({
            name: "msdynmkt_testtrigger_090959945", //Trigger title: Test trigger
            ingestionKey : "d526b9ddda844126893515798c13fc49-bc8ca8d2-f6f6-4e69-b6f8-59c361488449-7573",
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
                "url" : obj.url,
                "bindingid" : obj.bindingid
            }
        });

        document.querySelectorAll('input').forEach((e) => { e.value = '' });
    }

    export let obj = {
        date : '',
        fname : '',
        lname : '',
        laststep : '',
        productid : '',
        productname : '',
        state : '',
        totalamount : '',
        url : '',
        bindingid : '',
    }
</script>

<h1>Cart Script</h1>

<input type="datetime-local" name="date" placeholder="date" id="boh"   bind:value={obj.date} />
<input type="text" name="fname" placeholder="fname" id="boh2" bind:value={obj.fname} />
<input type="text" name="lname" placeholder="lname" id="boh3" bind:value={obj.lname} />
<input type="text" name="laststep" placeholder="laststep" id="boh4" bind:value={obj.laststep} />
<input type="number" name="productid" placeholder="productid" id="boh5" bind:value={obj.productid} />
<input type="text" name="productname" placeholder="productname" id="boh6" bind:value={obj.productname} />
<input type="text" name="state" placeholder="state" id="boh7" bind:value={obj.state} />
<input type="text" name="totalamount" placeholder="totalamount" id="boh8" bind:value={obj.totalamount} />
<input type="text" name="url" placeholder="url" id="boh9" bind:value={obj.url} />
<input type="text" name="bindingid" placeholder="bindingid" id="boh10" bind:value={obj.bindingid} />

<button on:click={() => track_msdynmkt_testtrigger_090959945() }>Test Trigger Script</button>