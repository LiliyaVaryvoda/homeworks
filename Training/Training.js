const basePage = new BasePage(mobile)
const minimedMobilePage = new MinimedMobilePage(mobile)
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
const diagnosticLogs = new DiagnosticLogs(mobile)
const autoUploadLogs = new AutoUploadLogs(mobile)
const deviceResource = resources;

const whiteListEndPoint = "/api/connect/v2/client/config/blengp/android/whitelist"
const zipEULA = "/eula/EULA.zip"
const consentsUrl = "/users/me/consents"
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

Note('MinimedMmobile page')

Verify('Verify that MiniMed Mobile page is the same as in requirements', {
    actual: mobile.takeScreenshot(),
    expected: deviceResource.minimedMobilePage
});

Verify('Verify MiniMed Mobile screen is displayed with correct text', {
    actual: minimedMobilePage.getActualPageData(),
    expected: minimedMobilePage.getExpectedPageData()
});

Step('Click Next button on Minimed Mobile page and navigate to CareLink Uploads page', function(){
    minimedMobilePage.clickNextBtn()
    careLinkUploadsPage.waitforFullyLoad()
});

Note("Carelink Uploads page")

Verify('Verify that Carelink Uploads screen is the same as in requirements', {
    actual: mobile.takeScreenshot(),
    expected: deviceResource.careLinkUploadsPage
});

Verify('Verify CareLink Uploads screen is displayed with correct elements and text', {
    actual: careLinkUploadsPage.getActualPageData(),
    expected: careLinkUploadsPage.getExpectedPageData()
});

Step('Click Next button on Carelink Uploads page and navigate to CarePartner Sharing page', function(){
    careLinkUploadsPage.clickNextBtn()
    carePartnerSharingPage.waitforFullyLoad()
});

Note("CarePartner Sharing page")

Verify('Verify that CarePartner Sharing page is the same as in requirements', {
    actual: mobile.takeScreenshot(),
    expected: deviceResource.carePartnerSharingPage
});

Verify('Verify CarePartner Sharing screen is displayed with correct elements and text', {
    actual: carePartnerSharingPage.getActualPageData(),
    expected: carePartnerSharingPage.getExpectedPageData()
});

Step('Click Next button on CarePartner Sharing page and navigate to Select Country page', function(){
    carePartnerSharingPage.clickNextBtn()
    selectSountryPage.waitforFullyLoad()
});

Note("Select Country page")

Verify('Verify that Select Country page is the same as in requirements', {
    actual: mobile.takeScreenshot(),
    expected: deviceResource.selectSountryPage
});

Verify('Verify Select Counrty screen is displayed with correct elements and text', {
    actual: selectSountryPage.getActualPageData(),
    expected: selectSountryPage.getExpectedPageData()
});

Step('Click Log in button on Select Country page', function(){
    selectSountryPage.clickLogInBtn()
    loginpage.waitforFullyLoad()
});


Note("CareLink Login page")

Verify('Verify that CareLink Login page is the same as in requirements', {
    actual: mobile.takeScreenshot(),
    expected: deviceResource.loginpage
});


Verify('Verify Login screen is displayed with correct elements and text', {
    actual: loginpage.getActualPageData(),
    expected: loginpage.getExpectedPageData()
});

Step('Enter Login info on CareLink Login page', function(){
    loginpage.enterLogInfo()
});

Step('Click Log in on CareLink Login page', function(){
    websim.StartCapturing()
    loginpage.clickLogInBtn()
    endUserLicenceAgreementPage.waitforFullyLoad()
    websim.StopCapturing()
    logs = websim.GetCapturedLogs()
    logs.SaveToFile("Click on login")
});

// Verify('Verify that EULA request was sent to correct endpoint', {
//     actual: logs.records[2].Url,
//     expected: zipEULA
// });

// Verify('Verify that responce from server was received', {
//     actual: logs.records[3].StatusCode,
//     expected: 200
// });

// Verify('Verify IFU version json file field that contains info about last updated data', {
//     actual: logs.records[0].Data.lastUpdated,
//     expected: "2019-08-21"
// });


Note("End User Licence Agreement page ")

Verify('Verify that End User Licence Agreement page is the same as in requirements', {
    actual: mobile.takeScreenshot(),
    expected: deviceResource.endUserLicenceAgreementPage
});


Verify('Verify End User Licence Agreement screen is displayed with correct elements and text', {
    actual: endUserLicenceAgreementPage.getActualPageData(),
    expected: endUserLicenceAgreementPage.getExpectedPageData()
});

Step('Click Agree option on End User Licence Agreement page', function(){
    endUserLicenceAgreementPage.clickAgreeBtn()
    termsAndConditionsPopup.waitforFullyLoad()
});

Note("Agree Terms and Conditions pop-up")

Verify('Verify that Agree Terms and Conditions pop-up is the same as in requirements', {
    actual: mobile.takeScreenshot(),
    expected: deviceResource.termsAndConditionsPopup
});

Verify('Verify Agree Terms and Conditions pop-up is displayed with correct elements and text', {
    actual: termsAndConditionsPopup.getActualPageData(),
    expected: termsAndConditionsPopup.getExpectedPageData()
});

Step('Click Agree option on Agree Terms and Conditions pop-up', function(){
    websim.StartCapturing()
    termsAndConditionsPopup.clickAgreeBtn()
    getStartedPumpPage.waitforFullyLoad()
    websim.StopCapturing()
    logs = websim.GetCapturedLogs()
    logs.SaveToFile("Agree terms and conditions")
});

Verify('Verify that consents request was sent to correct endpoint', {
    actual: logs.records[0].Url,
    expected: consentsUrl
});

Verify('Verify that responce from server was received', {
    actual: logs.records[1].StatusCode,
    expected: 200
});

Note("Getting started pump page")

Verify('Verify that Getting started pump screen is the same as in requirements', {
    actual: mobile.takeScreenshot(),
    expected: deviceResource.getStartedPumpPage
});

Verify('Verify Getting started pump screen is displayed with correct elements and text', {
    actual: getStartedPumpPage.getActualPageData(),
    expected: getStartedPumpPage.getExpectedPageData()
});

Step('Click Get started button', function(){
    getStartedPumpPage.clickGetStartedBtn()
    pumpCompitabilityPage.waitforFullyLoad()
});


Note("Pump Compitability page")

Verify('Verify that Pump compitability screen is the same as in requirements', {
    actual: mobile.takeScreenshot(),
    expected: deviceResource.pumpCompitabilityPage
});


Verify('Verify Pump Compitability screen is displayed with correct elements and text', {
    actual: pumpCompitabilityPage.getActualPageData(),
    expected: pumpCompitabilityPage.getExpectedPageData()
});

Step('Click on confirmation of compitability', function(){
    pumpCompitabilityPage.clickYesBtn()
    pumpSelectionPage.waitforFullyLoad()
});

Note("Pump Selection page")

Verify('Verify that Pump selection screen is the same as in requirements', {
    actual: mobile.takeScreenshot(),
    expected: deviceResource.pumpSelectionPage
});


Verify('Verify Pump Selection screen is displayed with correct elements and text', {
    actual: pumpSelectionPage.getActualPageData(),
    expected: pumpSelectionPage.getExpectedPageData()
});

Step('Click on Select pump option', function(){
    pumpSelectionPage.clickSelectBtn()
    pumpConnectionFromPhone.waitforFullyLoad()
});


Note("Pump Connection from phone")

Verify('Verify that Pump connection from phone screen is the same as in requirements', {
    actual: mobile.takeScreenshot(),
    expected: deviceResource.pumpConnectionFromPhone
});

Verify('Verify Pump Connection from phone screen is displayed with correct elements and text', {
    actual: pumpConnectionFromPhone.getActualPageData(),
    expected: pumpConnectionFromPhone.getExpectedPageData()
});


Step('Click on Diagnostic logs on Pump Connection from phone screen', function(){
    pumpConnectionFromPhone.clickDiagnosticLogs()
    diagnosticLogs.waitforFullyLoad()
});

Note("Diagnostic logs page")


Verify('Verify that Diagnostic logs screen is the same as in requirements', {
    actual: mobile.takeScreenshot(),
    expected: deviceResource.diagnosticLogs
});

Step('Click on Auto Uploads logs option on Diagnostic logs screen', function(){
    diagnosticLogs.clickAutoUploads()
    autoUploadLogs.waitforFullyLoad()
})


Note("Auto Upload logs popup")

Verify('Verify that Auto Uploads logs pop up is the same as in requirements', {
    actual: mobile.takeScreenshot(),
    expected: deviceResource.autoUploadLogs
});

Step('Click on Auto Uploads logs option on Diagnostic logs screen', function(){
    autoUploadLogs.clickUpload()
})

Note("Auto Upload Logs Switched page")

Verify('Verify that Auto Upload Logs Switched page is the same as in requirements', {
    actual: mobile.takeScreenshot(),
    expected: deviceResource.autoUploadLogsSwitched
});



