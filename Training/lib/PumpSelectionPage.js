class PumpSelectionPage{
    constructor(mobile){
        this.mobile = mobile;
        this.message = "id|com.medtronic.minimed.ngp:id/select_pump_type_screen_select_pump_text";
        this.btn = "id|com.medtronic.minimed.ngp:id/select_pump_type_screen_ahcl_pump_button";
        this.btn2 = "id|com.medtronic.minimed.ngp:id/select_pump_type_screen_pre_ahcl_pump_button"
    }

    getExpectedPageData(){
        return{
            message:"Which pump do you have?",
            btn:"Select"
        }
    }

    getActualPageData(){
        return{
            message:this.mobile.waitForElement(this.message, 10).getAttribute("text"),
            btn:this.mobile.waitForElement(this.btn, 10).getAttribute("text")
        }
    }

    clickSelectBtn(){
        this.mobile.waitForElement(this.btn, 10).click()
    }

    clickSelectBtn2(){
        this.mobile.waitForElement(this.btn2,10).click()
    }
}