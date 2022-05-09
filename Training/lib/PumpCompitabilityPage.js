class PumpCompitabilityPage{
    constructor(mobile){
        this.mobile = mobile;
        this.message1 = "id|com.medtronic.minimed.ngp:id/do_you_see_this_text";
        this.message2 = "id|com.medtronic.minimed.ngp:id/pair_pump_compatibility_screen_text";
        this.btn = "id|com.medtronic.minimed.ngp:id/pair_pump_compatibility_screen_has_symbol_button";
    }

    getExpectedPageData(){
        return{
            message1:"Do you see this symbol?",
            message2:"To make sure your pump is compatible, look for the symbol shown above on the front of the pump.",
            btn:"Yes, my pump has this symbol"
        }
    }

    getActualPageData(){
        return{
            message1:this.mobile.waitForElement(this.message1, 10).getAttribute("text"),
            message2:this.mobile.waitForElement(this.message2, 10).getAttribute("text"),
            btn:this.mobile.waitForElement(this.btn, 10).getAttribute("text")
        }
    }

    clickYesBtn(){
        this.mobile.waitForElement(this.btn, 10).click()
    }
}