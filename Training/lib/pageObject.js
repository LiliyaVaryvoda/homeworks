class BasePage{
    constructor(mobile){
        this.mobile = mobile
    }

    formatMsg(msg){
        return msg.replace(/\u2060/g, "").replace(/\xa0/g, " ").replace(/%s/, "").replace(/\s+/g, " ").replace(/\&#10;/g, " ").trim()
    }

    isElementPresent(locator){
        let element = this.mobile.waitForElement(locator, 10);
        if (element.isNull()){
            return false
        }
        return true
    }
}


class MinimedMobilePage extends BasePage{
    constructor(mobile){
        super(mobile)
        this.mobile = mobile;
        this.titleMinimedMobilePage = "id|com.medtronic.minimed.ngp:id/title";
        this.messageMinimedMobilePage = "id|com.medtronic.minimed.ngp:id/intro1_screen_text";
        this.btn = "id|com.medtronic.minimed.ngp:id/intro1_screen_next_button";
    }

    waitforFullyLoad(){
        this.mobile.waitForElement(this.titleMinimedMobilePage, 10)
    }

    getExpectedPageData(){
        return{
            titleMinimedMobilePage:"MiniMed™ Mobile",
            messageMinimedMobilePage:"MiniMed™ Mobile links your compatible MiniMed™ Pump to your mobile device, allowing you to see your pump and sensor information.",
            btn:"Next"
        }
    }

    getActualPageData(){
        return{
            titleMinimedMobilePage:this.mobile.waitForElement(this.titleMinimedMobilePage, 10).getAttribute("text"),
            messageMinimedMobilePage:this.formatMsg(this.mobile.waitForElement(this.messageMinimedMobilePage, 10).getAttribute("text")),
            btn:this.mobile.waitForElement(this.btn, 10).getAttribute("text")
        }
    }

    clickNextBtn(){
        this.mobile.waitForElement(this.btn, 10).click()
    }

    waitforFullyLoad(){
        this.mobile.waitForElement(this.titlemessageMinimedMobilePage, 20)
    }
}

class CareLinkUploadsPage extends BasePage{
    constructor(mobile){
        super(mobile)
        this.mobile = mobile;
        this.title = "id|com.medtronic.minimed.ngp:id/title";
        this.message = "id|com.medtronic.minimed.ngp:id/intro2_screen_text";
        this.btn = "id|com.medtronic.minimed.ngp:id/intro2_screen_next_button";
        this.toolbar = "id|com.medtronic.minimed.ngp:id/toolbar"
    }

    getExpectedPageData(){
        return{
            title:"CareLink™ Uploads",
            message:this.formatMsg("The app automatically sends information to CareLink™ so you do not have to upload your pump on your own.&#10;You can turn this off from the Sync to CareLink™ screen if needed."),
            btn:"Next",
            toolbar:true
        }
    }


    getActualPageData(){
        return{
            title:this.mobile.waitForElement(this.title, 10).getAttribute("text"),
            message:this.formatMsg(this.mobile.waitForElement(this.message, 10).getAttribute("text")),
            btn:this.mobile.waitForElement(this.btn, 10).getAttribute("text"),
            toolbar:this.isElementPresent(this.toolbar)
        }
    }

    clickNextBtn(){
        this.mobile.waitForElement(this.btn, 10).click()
    }
}

class CarePartnerSharingPage extends BasePage{
    constructor(mobile){
        super(mobile)
        this.mobile = mobile;
        this.title = "id|com.medtronic.minimed.ngp:id/title";
        this.message = "id|com.medtronic.minimed.ngp:id/intro3_screen_text";
        this.btn = "id|com.medtronic.minimed.ngp:id/intro3_screen_next_button";
    }

    getExpectedPageData(){
        return{
            title:"Care Partner Sharing",
            message:"Care partners can see pump and sensor information using the CareLink™ Connect app." + "\n" + "\n" + "Go to the Sync to CareLink™ screen to approve care partner requests.",
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

    waitforFullyLoad(){
        this.mobile.waitForElement(this.title, 20)
    }
}

class SelectCountryPage extends BasePage{
    constructor(mobile){
        super(mobile)
        this.mobile = mobile;
        this.title = "xpath|//android.widget.TextView[@text = 'Select Country']";
        this.btn = "xpath|//android.widget.Button[@text = 'Log In']";

    }

    getExpectedPageData(){
        return{
            //title:"Select Country",
            btn:"Log In"
        }
    }

    getActualPageData(){
        return{
            //title:this.mobile.waitForElement(this.title, 10).getAttribute("text"),
            btn:this.mobile.waitForElement(this.btn, 40).getAttribute("text")
        }
    }

    clickLogInBtn(){
        this.mobile.waitForElement(this.btn, 40).click()
    }

    waitforFullyLoad(){
        this.mobile.waitForElement(this.title, 30)
    }
}


class LoginPage extends BasePage{
    constructor(mobile){
        super(mobile)
        this.mobile = mobile;
        this.title = "xpath|//android.widget.TextView[@title = 'Log in to']"
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
        this.mobile.waitForElement(this.username, 30).inputText("mapp_test_1")
        this.mobile.waitForElement(this.password, 30).inputText("testing123")
    }

    clickLogInBtn(){
        this.mobile.waitForElement(this.btn, 40).click()
    }

    waitforFullyLoad(){
        this.mobile.waitForElement(this.title, 30)
    }
}



class EndUserLicenceAgreementPage extends BasePage{
    constructor(mobile){
        super(mobile)
        this.mobile = mobile;
        this.title = "xpath|//android.widget.TextView[@text='END USER LICENSE AGREEMENT FOR United Kingdom']";
        this.btn = "id|com.medtronic.minimed.ngp:id/eula_screen_agree_button";

    }

    getExpectedPageData(){
        return{
            //title:"END USER LICENSE AGREEMENT FOR United Kingdom",
            btn:"Agree"
        }
    }

    getActualPageData(){
        return{
            //title:this.mobile.waitForElement(this.title, 30).getAttribute("text"),
            btn:this.mobile.waitForElement(this.btn, 30).getAttribute("text")
        }
    }

    clickAgreeBtn(){
        this.mobile.waitForElement(this.btn, 30).click()
    }

    waitforFullyLoad(){
        this.mobile.waitForElement(this.title, 30)
    }
}



class TermsAndConditionsPopup extends BasePage{
    constructor(mobile){
        super(mobile)
        this.mobile = mobile;
        this.title = "id|com.medtronic.minimed.ngp:id/alertTitle"
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

    waitforFullyLoad(){
        this.mobile.waitForElement(this.title, 20)
    }
}


class GetStartedPumpPage extends BasePage{
    constructor(mobile){
        super(mobile)
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

    waitforFullyLoad(){
        this.mobile.waitForElement(this.title, 30)
    }
}



class PumpCompitabilityPage extends BasePage{
    constructor(mobile){
        super(mobile)
        this.mobile = mobile;
        this.title = "id|com.medtronic.minimed.ngp:id/title"
        this.message1 = "id|com.medtronic.minimed.ngp:id/do_you_see_this_text";
        this.message2 = "id|com.medtronic.minimed.ngp:id/pair_pump_compatibility_screen_text";
        this.btn = "id|com.medtronic.minimed.ngp:id/pair_pump_compatibility_screen_has_symbol_button";
    }

    getExpectedPageData(){
        return{
            message1:"Do you see this symbol?",
            message2:"To make sure your pump is compatible, look for the symbol shown above on the front of the pump.",
            btn:"Yes, my pump has this symbol"
        }
    }

    getActualPageData(){
        return{
            message1:this.mobile.waitForElement(this.message1, 10).getAttribute("text"),
            message2:this.mobile.waitForElement(this.message2, 10).getAttribute("text"),
            btn:this.mobile.waitForElement(this.btn, 10).getAttribute("text")
        }
    }

    clickYesBtn(){
        this.mobile.waitForElement(this.btn, 10).click()
    }

    waitforFullyLoad(){
        this.mobile.waitForElement(this.title, 20)
    }
}


class PumpSelectionPage extends BasePage{
    constructor(mobile){
        super(mobile)
        this.mobile = mobile;
        this.title = "id|com.medtronic.minimed.ngp:id/title"
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

    waitforFullyLoad(){
        this.mobile.waitForElement(this.title, 20)
    }
}



class PumpConnectionFromPhone extends BasePage{
    constructor(mobile){
        super(mobile)
        this.mobile = mobile;
        this.title = "id|com.medtronic.minimed.ngp:id/title";
        this.diagnosticLogs = "id|com.medtronic.minimed.ngp:id/pair_pump_screen_diagnostic_logs_button";
    }

    getExpectedPageData(){
        return{
            title:"MiniMed™ Mobile",
            diagnosticLogs:"Diagnostic Logs"
        }
    }

    getActualPageData(){
        return{
            title:this.mobile.waitForElement(this.title, 10).getAttribute("text"),
            diagnosticLogs:this.mobile.waitForElement(this.diagnosticLogs, 10).getAttribute("text")
        }
    }

    clickDiagnosticLogs(){
        this.mobile.waitForElement(this.diagnosticLogs, 10).click()
    }

    waitforFullyLoad(){
        this.mobile.waitForElement(this.title, 30)
    }
}

class DiagnosticLogs extends BasePage{
    constructor(mobile){
        super(mobile)
        this.mobile = mobile
        this.title = "id|com.medtronic.minimed.ngp:id/title"
        this.btn = "id|com.medtronic.minimed.ngp:id/diagnostic_logs_screen_auto_upload_switch"
    }

    clickAutoUploads(){
        this.mobile.waitForElement(this.btn, 10).click()
    }

    waitforFullyLoad(){
        this.mobile.waitForElement(this.title, 30)
    }
}


class AutoUploadLogs extends BasePage{
    constructor(mobile){
        super(mobile)
        this.mobile=mobile
        this.title = "id|com.medtronic.minimed.ngp:id/alertTitle"
        this.btn = "id|android:id/button1"
    }

    clickUpload(){
        this.mobile.waitForElement(this.btn, 10).click()
    }

    waitforFullyLoad(){
        this.mobile.waitForElement(this.title, 30)
    }
}