class MinimedMobilePage extends BasePage{
    constructor(mobile){
        super(mobile)
        this.mobile = mobile;
        this.title = "id|com.medtronic.minimed.ngp:id/title";
        this.message = "id|com.medtronic.minimed.ngp:id/intro1_screen_text";
        this.btn = "id|com.medtronic.minimed.ngp:id/intro1_screen_next_button";
    }
    
    getExpectedPageData(){
        return{
            title:"MiniMedâ„¢ Mobile",
            message:"MiniMedâ„¢ Mobile links your compatible MiniMedâ„¢ Pump to your mobile device, allowing you to see your pump and sensor information.",
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
    