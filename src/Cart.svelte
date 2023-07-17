<script>
    function track_msdynmkt_testtrigger_090959945(obj) {
        window["msdynmkt"].setUser({ authId: "<customer-id>"});   // ID, e-mail or phone number - see instructions
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
    }

    let obj = {
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

<button on:click={() => track_msdynmkt_testtrigger_090959945(obj)}>Test Trigger Script</button>