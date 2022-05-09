class SelectCountryPage{
    constructor(mobile){
        this.mobile = mobile;
        this.title = "xpath|//android.widget.TextView[@text = 'Select Country']";
        this.btn = "xpath|//android.widget.Button[@text = 'Log In']";

    }

    getExpectedPageData(){
        return{
            title:"Select Country",
            btn:"Log In"
        }
    }

    getActualPageData(){
        return{
            title:this.mobile.waitForElement(this.title, 10).getAttribute("text"),
            btn:this.mobile.waitForElement(this.btn, 40).getAttribute("text")
        }
    }

    clickLogInBtn(){
        this.mobile.waitForElement(this.btn, 40).click()
    }
}