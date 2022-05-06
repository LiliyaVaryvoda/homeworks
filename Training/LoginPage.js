class LoginPage{
    constructor(mobile){
        this.mobile = mobile;
        //this.title = "id|com.medtronic.minimed.ngp:id/title";
        //this.message = "id|com.medtronic.minimed.ngp:id/intro3_screen_text";
        this.username = "xpath|//android.widget.EditText[@resource-id='username']";
        this.password = "xpath|//android.widget.EditText[@resource-id='password']";
        this.btn = "xpath|//android.widget.Button[@text='Log in']";

    }

    getExpectedPageData(){
        return{
            //title:"Care Partner Sharing",
            //message:"Care partners can see pump and sensor information using the CareLink™ Connect app." + "/n" + "/n" + "Go to the Sync to CareLink™ screen to approve care partner requests.",
            btn:"Log in"
        }
    }


    getActualPageData(){
        return{
            //title:this.mobile.waitForElement(this.title, 10).getAttribute("text"),
            //message:this.mobile.waitForElement(this.message, 10).getAttribute("text"),
            btn:this.mobile.waitForElement(this.btn, 10).getAttribute("text")
        }
    }

    enterLogInfo(){
        this.mobile.waitForElement(this.username, 10).inputText("mapp_test_1")
        this.mobile.waitForElement(this.password, 10).inputText("testing123")
    }

    clickLogInBtn(){
        this.mobile.waitForElement(this.btn, 30).click()
    }
}