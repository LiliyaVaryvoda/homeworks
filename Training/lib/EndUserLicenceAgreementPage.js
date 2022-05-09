class EndUserLicenceAgreementPage{
    constructor(mobile){
        this.mobile = mobile;
        this.title = "id|test";
        this.btn = "id|com.medtronic.minimed.ngp:id/eula_screen_agree_button";

    }

    getExpectedPageData(){
        return{
            title:"END USER LICENSE AGREEMENT FOR United Kingdom",
            btn:"Agree"
        }
    }

    getActualPageData(){
        return{
            title:this.mobile.waitForElement(this.title, 10).getAttribute("text"),
            btn:this.mobile.waitForElement(this.btn, 10).getAttribute("text")
        }
    }

    clickAgreeBtn(){
        this.mobile.waitForElement(this.btn, 10).click()
    }
}