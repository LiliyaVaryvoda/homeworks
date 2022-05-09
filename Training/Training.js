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
        this.title = "id|com.medtronic.minimed.ngp:id/title";
        this.message = "id|com.medtronic.minimed.ngp:id/intro1_screen_text";
        this.btn = "id|com.medtronic.minimed.ngp:id/intro1_screen_next_button";

    }

    waitforFullyLoad(){
        this.mobile.waitForElement(this.title, 10)
    }
    getExpectedPageData(){
        return{
            title:"MiniMed™ Mobile",
            message:"MiniMed™ Mobile links your compatible MiniMed™ Pump to your mobile device, allowing you to see your pump and sensor information.",
            btn:"Next"
        }
    }


    getActualPageData(){
        return{
            title:this.mobile.waitForElement(this.title, 10).getAttribute("text"),
            message:this.formatMsg(this.mobile.waitForElement(this.message, 10).getAttribute("text")),
            btn:this.mobile.waitForElement(this.btn, 10).getAttribute("text")
        }
    }

    clickNextBtn(){
        this.mobile.waitForElement(this.btn, 10).click()
        return new CareLinkUploadsPage(this.mobile)
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
}


class SelectCountryPage extends BasePage{
    constructor(mobile){
        super(mobile)
        this.mobile = mobile;
        //this.title = "xpath|//android.widget.TextView[@text = 'Select Country']";
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
}


class LoginPage extends BasePage{
    constructor(mobile){
        super(mobile)
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



class EndUserLicenceAgreementPage extends BasePage{
    constructor(mobile){
        super(mobile)
        this.mobile = mobile;
        //this.title = "id|test";
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
}



class TermsAndConditionsPopup extends BasePage{
    constructor(mobile){
        super(mobile)
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
}



class PumpCompitabilityPage extends BasePage{
    constructor(mobile){
        super(mobile)
        this.mobile = mobile;
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
}


class PumpSelectionPage extends BasePage{
    constructor(mobile){
        super(mobile)
        this.mobile = mobile;
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
}


const minimedMobilePage = new MinimedMobilePage(mobile);
const careLinkUploadsPage = new CareLinkUploadsPage(mobile);
const carePartnerSharingPage = new CarePartnerSharingPage(mobile);
const selectSountryPage = new SelectCountryPage(mobile);
const loginpage = new LoginPage(mobile);
const endUserLicenceAgreementPage = new EndUserLicenceAgreementPage(mobile);
const termsAndConditionsPopup = new TermsAndConditionsPopup(mobile);
const getStartedPumpPage = new GetStartedPumpPage(mobile);
const pumpCompitabilityPage = new PumpCompitabilityPage(mobile)
const pumpSelectionPage = new PumpSelectionPage(mobile)
const pumpConnectionFromPhone = new PumpConnectionFromPhone(mobile)
const deviceResource = resources;

const whiteListEndPoint = "/api/connect/v2/client/config/blengp/android/whitelist"
let logs;

Step('Start application', function(){
    websim.StartCapturing()
    mobile.launchApp()
    minimedMobilePage.waitforFullyLoad()
    websim.StopCapturing()
    logs = websim.GetCapturedLogs()
    logs.SaveToFile("Scenario 1")
});

// Step for motorola phone
// Step('Launch app', function(){
//     mobile.waitForElement(okButton, 10).click()
// });

//  MinimedMmobile page


Verify('Verify that white list request was sent to correct endpoint', {
    actual: logs.records[0].Url,
    expected: whiteListEndPoint
});

Verify('Verify that responce from server was received', {
    actual: logs.records[1].StatusCode,
    expected: 200
});

Verify('Verify that whitelist contains [appVersion] fields with correct data', {
    actual: logs.records[1].Data[0].appVersion,
    expected: [
        "2.0.*",
        "1.3.*",
        "1.2.*",
        "1.1.*",
        "1.0.*",
        "0.9.*"
    ]
});

Verify('Verify that whitelist contains blacklist', {
    actual: logs.records[1].Data[0].hasOwnProperty("BLACKLIST"),
    expected: true
});

mobile.wait(5)

Verify('Verify that MiniMed Mobile page is the same as in requirements', {
    actual: mobile.takeScreenshot(),
    expected: deviceResource.intro_1
});

Verify('Verify MiniMed Mobile screen is displayed with correct text', {
    actual: minimedMobilePage.getActualPageData(),
    expected: minimedMobilePage.getExpectedPageData()
});

Step('Click Next button on Minimed Mobile page and navigate to CareLink Uploads page', function(){
    minimedMobilePage.clickNextBtn()
});

// Carelink Uploads page

Verify('Verify that Carelink Uploads screen is the same as in requirements', {
    actual: mobile.takeScreenshot(),
    expected: deviceResource.intro_2
});

Verify('Verify CareLink Uploads screen is displayed with correct elements and text', {
    actual: careLinkUploadsPage.getActualPageData(),
    expected: careLinkUploadsPage.getExpectedPageData()
});

Step('Click Next button on Carelink Uploads page and navigate to CarePartner Sharing page', function(){
    careLinkUploadsPage.clickNextBtn()
});

// CarePartner Sharing page

Verify('Verify that CarePartner Sharing page is the same as in requirements', {
    actual: mobile.takeScreenshot(),
    expected: deviceResource.intro_3
});

Verify('Verify CarePartner Sharing screen is displayed with correct elements and text', {
    actual: carePartnerSharingPage.getActualPageData(),
    expected: carePartnerSharingPage.getExpectedPageData()
});

mobile.takeScreenshot().SaveToFile("D:/Carepartner!!!!!.png")

Step('Click Next button on CarePartner Sharing page and navigate to Select Country page', function(){
    carePartnerSharingPage.clickNextBtn()
});

// Select Country page

Verify('Verify that Select Country page is the same as in requirements', {
    actual: mobile.takeScreenshot(),
    expected: deviceResource.intro_4
});


Verify('Verify Select Counrty screen is displayed with correct elements and text', {
    actual: selectSountryPage.getActualPageData(),
    expected: selectSountryPage.getExpectedPageData()
});


mobile.wait(10)

Step('Click Log in button on Select Country page', function(){
    selectSountryPage.clickLogInBtn()
});


// CareLink Login page

mobile.wait(10)

Verify('Verify that CareLink Login page is the same as in requirements', {
    actual: mobile.takeScreenshot(),
    expected: deviceResource.intro_5
});


Verify('Verify Login screen is displayed with correct elements and text', {
    actual: loginpage.getActualPageData(),
    expected: loginpage.getExpectedPageData()
});

Step('Enter Login info on CareLink Login page', function(){
    loginpage.enterLogInfo()
});

mobile.wait(20)

Step('Click Log in on CareLink Login page', function(){
    loginpage.clickLogInBtn()
});

mobile.wait(40)

// End User Licence Agreement page 

Verify('Verify that End User Licence Agreement page is the same as in requirements', {
    actual: mobile.takeScreenshot(),
    expected: deviceResource.intro_6
});


Verify('Verify End User Licence Agreement screen is displayed with correct elements and text', {
    actual: endUserLicenceAgreementPage.getActualPageData(),
    expected: endUserLicenceAgreementPage.getExpectedPageData()
});

Step('Click Agree option on End User Licence Agreement page', function(){
    endUserLicenceAgreementPage.clickAgreeBtn()
});


// Agree Terms and Conditions pop-up

Verify('Verify that Agree Terms and Conditions pop-up is the same as in requirements', {
    actual: mobile.takeScreenshot(),
    expected: deviceResource.intro_7
});

Verify('Verify Agree Terms and Conditions pop-up is displayed with correct elements and text', {
    actual: termsAndConditionsPopup.getActualPageData(),
    expected: termsAndConditionsPopup.getExpectedPageData()
});

Step('Click Agree option on Agree Terms and Conditions pop-up', function(){
    termsAndConditionsPopup.clickAgreeBtn()
});


// Getting started pump page

Verify('Verify that Getting started pump screen is the same as in requirements', {
    actual: mobile.takeScreenshot(),
    expected: deviceResource.intro_8
});

Verify('Verify Getting started pump screen is displayed with correct elements and text', {
    actual: getStartedPumpPage.getActualPageData(),
    expected: getStartedPumpPage.getExpectedPageData()
});

Step('Click Get started button', function(){
    getStartedPumpPage.clickGetStartedBtn()
});


// Pump Compitability page

Verify('Verify that Pump compitability screen is the same as in requirements', {
    actual: mobile.takeScreenshot(),
    expected: deviceResource.intro_9
});


Verify('Verify Pump Compitability screen is displayed with correct elements and text', {
    actual: pumpCompitabilityPage.getActualPageData(),
    expected: pumpCompitabilityPage.getExpectedPageData()
});

Step('Click on confirmation of compitability', function(){
    pumpCompitabilityPage.clickYesBtn()
});

// Pump Selection page

Verify('Verify that Pump selection screen is the same as in requirements', {
    actual: mobile.takeScreenshot(),
    expected: deviceResource.intro_10
});


Verify('Verify Pump Selection screen is displayed with correct elements and text', {
    actual: pumpSelectionPage.getActualPageData(),
    expected: pumpSelectionPage.getExpectedPageData()
});

Step('Click on Select pump option', function(){
    pumpSelectionPage.clickSelectBtn()
});

mobile.wait(20)

// Pump Connection from phone

Verify('Verify that Pump connection from phone screen is the same as in requirements', {
    actual: mobile.takeScreenshot(),
    expected: deviceResource.intro_11
});

Verify('Verify Pump Connection from phone screen is displayed with correct elements and text', {
    actual: pumpConnectionFromPhone.getActualPageData(),
    expected: pumpConnectionFromPhone.getExpectedPageData()
});


Step('Click on Diagnostic logs on Pump Connection from phone screen', function(){
    pumpConnectionFromPhone.clickDiagnosticLogs()
});

// Diagnostic logs page


Verify('Verify that Diagnostic logs screen is the same as in requirements', {
    actual: mobile.takeScreenshot(),
    expected: deviceResource.intro_12
});

