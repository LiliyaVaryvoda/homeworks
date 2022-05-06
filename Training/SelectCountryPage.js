class SelectCountryPage{
    constructor(mobile){
        this.mobile = mobile;
        //this.title = "id|com.medtronic.minimed.ngp:id/title";
        //this.message = "id|com.medtronic.minimed.ngp:id/intro3_screen_text";
        this.btn = "xpath|//android.widget.Button[@text = 'Log In']";

    }

    getExpectedPageData(){
        return{
            //title:"Care Partner Sharing",
            //message:"Care partners can see pump and sensor information using the CareLink™ Connect app." + "/n" + "/n" + "Go to the Sync to CareLink™ screen to approve care partner requests.",
            btn:"Log In"
        }
    }


    getActualPageData(){
        return{
            //title:this.mobile.waitForElement(this.title, 10).getAttribute("text"),
            //message:this.mobile.waitForElement(this.message, 10).getAttribute("text"),
            btn:this.mobile.waitForElement(this.btn, 40).getAttribute("text")
        }
    }

    clickLogInBtn(){
        this.mobile.waitForElement(this.btn, 40).click()
    }
}