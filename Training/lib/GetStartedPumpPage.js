class GetStartedPumpPage{
    constructor(mobile){
        this.mobile = mobile;
        this.title = "id|com.medtronic.minimed.ngp:id/title";
        this.message = "id|com.medtronic.minimed.ngp:id/getting_started_screen_text";
        this.btn = "id|com.medtronic.minimed.ngp:id/getting_started_screen_get_started_button";
    }

    getExpectedPageData(){
        return{
            title:"MiniMed™ Mobile",
            message:"Before you get started, make sure:",
            btn:"Get started"
        }
    }

    getActualPageData(){
        return{
            title:this.mobile.waitForElement(this.title, 10).getAttribute("text"),
            message:this.mobile.waitForElement(this.message, 10).getAttribute("text"),
            btn:this.mobile.waitForElement(this.btn, 10).getAttribute("text")
        }
    }

    clickGetStartedBtn(){
        this.mobile.waitForElement(this.btn, 10).click()
    }
}