//import CareLinkUploadsPage from "./CareLinkUploadsPage"
//import MinimedMobilePage from "./MinimedMobilePage"
class MinimedMobilePage{
    constructor(mobile){
        this.mobile = mobile;
        this.title = "id|com.medtronic.minimed.ngp:id/title";
        this.message = "id|com.medtronic.minimed.ngp:id/intro1_screen_text";
        this.btn = "id|com.medtronic.minimed.ngp:id/intro1_screen_next_button";

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
            message:this.mobile.waitForElement(this.message, 10).getAttribute("text"),
            btn:this.mobile.waitForElement(this.btn, 10).getAttribute("text")
        }
    }

    clickNextBtn(){
        this.mobile.waitForElement(this.btn, 10).click()
    }
}



//    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1



class CareLinkUploadsPage{
    constructor(mobile){
        this.mobile = mobile;
        this.title = "id|com.medtronic.minimed.ngp:id/title";
        this.message = "id|com.medtronic.minimed.ngp:id/intro2_screen_text";
        this.btn = "id|com.medtronic.minimed.ngp:id/intro2_screen_next_button";

    }

    getExpectedPageData(){
        return{
            title:"CareLink™ Uploads",
            message:"The app automatically sends information to CareLink™ so you do not have to upload your pump on your own." + "\n" + "You can turn this off from the Sync to CareLink™ screen if needed.",
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


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



class CarePartnerSharingPage{
    constructor(mobile){
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



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11


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



//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1



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



//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

class EndUserLicenceAgreementPage{
    constructor(mobile){
        this.mobile = mobile;
        //this.title = "id|com.medtronic.minimed.ngp:id/title";
        //this.message = "id|com.medtronic.minimed.ngp:id/intro3_screen_text";
        this.btn = "id|com.medtronic.minimed.ngp:id/eula_screen_agree_button";

    }

    getExpectedPageData(){
        return{
            //title:"Care Partner Sharing",
            //message:"Care partners can see pump and sensor information using the CareLink™ Connect app." + "/n" + "/n" + "Go to the Sync to CareLink™ screen to approve care partner requests.",
            btn:"Agree"
        }
    }


    getActualPageData(){
        return{
            //title:this.mobile.waitForElement(this.title, 10).getAttribute("text"),
            //message:this.mobile.waitForElement(this.message, 10).getAttribute("text"),
            btn:this.mobile.waitForElement(this.btn, 10).getAttribute("text")
        }
    }

    clickAgreeBtn(){
        this.mobile.waitForElement(this.btn, 10).click()
    }
}


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!111111


class TermsAndConditionaPopup{
    constructor(mobile){
        this.mobile = mobile;
        //this.title = "id|com.medtronic.minimed.ngp:id/title";
        //this.message = "id|com.medtronic.minimed.ngp:id/intro3_screen_text";
        this.btn = "id|android:id/button1";
    }

    getExpectedPageData(){
        return{
            //title:"Care Partner Sharing",
            //message:"Care partners can see pump and sensor information using the CareLink™ Connect app." + "/n" + "/n" + "Go to the Sync to CareLink™ screen to approve care partner requests.",
            btn:"AGREE"
        }
    }


    getActualPageData(){
        return{
            //title:this.mobile.waitForElement(this.title, 10).getAttribute("text"),
            //message:this.mobile.waitForElement(this.message, 10).getAttribute("text"),
            btn:this.mobile.waitForElement(this.btn, 10).getAttribute("text")
        }
    }

    clickAgreeBtn(){
        this.mobile.waitForElement(this.btn, 10).click()
    }
}


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


class GetStartedPumpPage{
    constructor(mobile){
        this.mobile = mobile;
        //this.title = "id|com.medtronic.minimed.ngp:id/title";
        //this.message = "id|com.medtronic.minimed.ngp:id/intro3_screen_text";
        this.btn = "id|com.medtronic.minimed.ngp:id/getting_started_screen_get_started_button";
    }

    getExpectedPageData(){
        return{
            //title:"Care Partner Sharing",
            //message:"Care partners can see pump and sensor information using the CareLink™ Connect app." + "/n" + "/n" + "Go to the Sync to CareLink™ screen to approve care partner requests.",
            btn:"Get started"
        }
    }


    getActualPageData(){
        return{
            //title:this.mobile.waitForElement(this.title, 10).getAttribute("text"),
            //message:this.mobile.waitForElement(this.message, 10).getAttribute("text"),
            btn:this.mobile.waitForElement(this.btn, 10).getAttribute("text")
        }
    }

    clickGetStartedBtn(){
        this.mobile.waitForElement(this.btn, 10).click()
    }
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11

class PumpCompitabilityPage{
    constructor(mobile){
        this.mobile = mobile;
        //this.title = "id|com.medtronic.minimed.ngp:id/title";
        //this.message = "id|com.medtronic.minimed.ngp:id/intro3_screen_text";
        this.btn = "id|com.medtronic.minimed.ngp:id/pair_pump_compatibility_screen_has_symbol_button";
    }

    getExpectedPageData(){
        return{
            //title:"Care Partner Sharing",
            //message:"Care partners can see pump and sensor information using the CareLink™ Connect app." + "/n" + "/n" + "Go to the Sync to CareLink™ screen to approve care partner requests.",
            btn:"Yes, my pump has this symbol"
        }
    }


    getActualPageData(){
        return{
            //title:this.mobile.waitForElement(this.title, 10).getAttribute("text"),
            //message:this.mobile.waitForElement(this.message, 10).getAttribute("text"),
            btn:this.mobile.waitForElement(this.btn, 10).getAttribute("text")
        }
    }

    clickYesBtn(){
        this.mobile.waitForElement(this.btn, 10).click()
    }
}


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

class PumpSelectionPage{
    constructor(mobile){
        this.mobile = mobile;
        //this.title = "id|com.medtronic.minimed.ngp:id/title";
        //this.message = "id|com.medtronic.minimed.ngp:id/intro3_screen_text";
        this.btn = "id|com.medtronic.minimed.ngp:id/select_pump_type_screen_ahcl_pump_button";
    }

    getExpectedPageData(){
        return{
            //title:"Care Partner Sharing",
            //message:"Care partners can see pump and sensor information using the CareLink™ Connect app." + "/n" + "/n" + "Go to the Sync to CareLink™ screen to approve care partner requests.",
            btn:"Select"
        }
    }


    getActualPageData(){
        return{
            //title:this.mobile.waitForElement(this.title, 10).getAttribute("text"),
            //message:this.mobile.waitForElement(this.message, 10).getAttribute("text"),
            btn:this.mobile.waitForElement(this.btn, 10).getAttribute("text")
        }
    }

    clickSelectBtn(){
        this.mobile.waitForElement(this.btn, 10).click()
    }
}

const minimedMobilePage = new MinimedMobilePage(mobile)
const careLinkUploadsPage = new CareLinkUploadsPage(mobile)
const carePartnerSharingPage = new CarePartnerSharingPage(mobile)
const selectSountryPage = new SelectCountryPage(mobile)
const loginpage = new LoginPage(mobile)
const endUserLicenceAgreementPage = new EndUserLicenceAgreementPage(mobile)
const termsAndConditionaPopup = new TermsAndConditionaPopup(mobile)
const getStartedPumpPage = new GetStartedPumpPage(mobile)
const pumpCompitabilityPage = new PumpCompitabilityPage(mobile)
const pumpSelectionPage = new PumpSelectionPage(mobile)

const okButton = "id|com.medtronic.minimed.ngp:id/app_notification_button"

//const agreePopup = "id|android:id/button1"
//const getStartedPump = "id|com.medtronic.minimed.ngp:id/getting_started_screen_get_started_button"
//const pumpCompitabilityYes = "id|com.medtronic.minimed.ngp:id/pair_pump_compatibility_screen_has_symbol_button"

const deviceResource = resources;

Step('Start application', function(){
    mobile.launchApp()
});


// Step for motorola phone
// Step('Launch app', function(){
//     mobile.waitForElement(okButton, 10).click()
// });


//  MinimedMmobile page

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

Verify('Verify that Carelink Uploads page is the same as in requirements', {
    actual: mobile.takeScreenshot(),
    expected: deviceResource.intro_2
});

Verify('Verify CareLink Uploads screen is displayed with correct elements and text', {
    actual: careLinkUploadsPage.getActualPageData(),
    expected: careLinkUploadsPage.getExpectedPageData()
});


Step('Click Next button on Carelink Uploads page', function(){
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

Step('Click Next button on CarePartner Sharing page', function(){
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

mobile.wait(10)

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

Step('Click Agree button on End User Licence Agreement page', function(){
    endUserLicenceAgreementPage.clickAgreeBtn()
});


// Agree Terms and Conditions pop-up

Verify('Verify that Agree Terms and Conditions pop-up is the same as in requirements', {
    actual: mobile.takeScreenshot(),
    expected: deviceResource.intro_7
});

Verify('Verify Agree Terms and Conditions pop-up is displayed with correct elements and text', {
    actual: termsAndConditionaPopup.getActualPageData(),
    expected: termsAndConditionaPopup.getExpectedPageData()
});

Step('Click Agree on Agree Terms and Conditions pop-up', function(){
    termsAndConditionaPopup.clickAgreeBtn()
});


// Getting started pump page

Verify('Verify that Getting started pump page is the same as in requirements', {
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


// Pump compitability page

Verify('Verify that Pump compitability page is the same as in requirements', {
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

// Pump selection page

Verify('Verify that Pump selection page is the same as in requirements', {
    actual: mobile.takeScreenshot(),
    expected: deviceResource.intro_10
});


Verify('Verify Pump Selection screen is displayed with correct elements and text', {
    actual: pumpSelectionPage.getActualPageData(),
    expected: pumpSelectionPage.getExpectedPageData()
});

Step('Click on Select pump', function(){
    pumpSelectionPage.clickSelectBtn()
});

mobile.wait(20)

// Pump connection from phone

Verify('Verify that  page is the same as in requirements', {
    actual: mobile.takeScreenshot(),
    expected: deviceResource.intro_11
});
