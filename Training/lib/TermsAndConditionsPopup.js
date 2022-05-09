class TermsAndConditionsPopup{
    constructor(mobile){
        this.mobile = mobile;
        this.message = "id|android:id/message";
        this.btn = "id|android:id/button1";
    }

    getExpectedPageData(){
        return{
            message:"I agree to the terms and conditions." + "\n" + "\n" + "By accepting, you authorize your personal and health data to be transmitted and shared wirelessly with those individuals you designate in the Software.",
            btn:"AGREE"
        }
    }

    getActualPageData(){
        return{
            message:this.mobile.waitForElement(this.message, 10).getAttribute("text"),
            btn:this.mobile.waitForElement(this.btn, 10).getAttribute("text")
        }
    }

    clickAgreeBtn(){
        this.mobile.waitForElement(this.btn, 10).click()
    }
}