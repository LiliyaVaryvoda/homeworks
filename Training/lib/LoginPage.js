class LoginPage{
    constructor(mobile){
        this.mobile = mobile;
        this.username = "xpath|//android.widget.EditText[@resource-id='username']";
        this.password = "xpath|//android.widget.EditText[@resource-id='password']";
        this.btn = "xpath|//android.widget.Button[@text='Log in']";

    }

    getExpectedPageData(){
        return{
            btn:"Log in"
        }
    }

    getActualPageData(){
        return{
            btn:this.mobile.waitForElement(this.btn, 30).getAttribute("text")
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