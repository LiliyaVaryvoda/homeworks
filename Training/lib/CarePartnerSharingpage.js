class CarePartnerSharingPage{
    constructor(mobile){
        this.mobile = mobile;
        this.title = "id|com.medtronic.minimed.ngp:id/title";
        this.message = "id|com.medtronic.minimed.ngp:id/intro3_screen_text";
        this.btn = "id|com.medtronic.minimed.ngp:id/intro3_screen_next_button";

    }

    getExpectedPageData(){
        return{
            title:"Care Partner Sharing",
            message:"Care partners can see pump and sensor information using the CareLink™ Connect app." + "/n" + "/n" + "Go to the Sync to CareLink™ screen to approve care partner requests.",
            btn:"Next"
        }
    }


    getActualPageData(){
        return{
            title:this.mobile.waitForElement(this.title, 10).getAttribute("text"),
            message:this.mobile.waitForElement(this.message, 10).getAttribute("text"),
            btn:this.mobile.waitForElement(this.btn, 10).getAttribute("text")
        }
    }

    clickNextBtn(){
        this.mobile.waitForElement(this.btn, 10).click()
    }
}