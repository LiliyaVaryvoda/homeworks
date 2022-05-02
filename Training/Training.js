const btn = "id|com.medtronic.minimed.ngp:id/intro1_screen_next_button"
const titleMiniMed = "id|com.medtronic.minimed.ngp:id/title";
const NextButtonCareLink = "id|com.medtronic.minimed.ngp:id/intro2_screen_next_button"
const next_Button = "id|com.medtronic.minimed.ngp:id/intro3_screen_next_button"
const titleCarelink = "id|com.medtronic.minimed.ngp:id/title"
const titleCarePartner = "id|com.medtronic.minimed.ngp:id/title"
const loginBtn = "xpath|//android.widget.Button[@text = 'Log In']"
const okButton = "id|com.medtronic.minimed.ngp:id/app_notification_button"
const usernameField = "xpath|//android.widget.EditText[@resource-id='username']"
const passwordField = "xpath|//android.widget.EditText[@resource-id='password']"
const logButton = "xpath|//android.widget.Button[@text='Log in']"
const agreeendUserLicense = "id|com.medtronic.minimed.ngp:id/eula_screen_agree_button"
const agreePopup = "id|android:id/button1"
const getStartedPump = "id|com.medtronic.minimed.ngp:id/getting_started_screen_get_started_button"
const pumpCompitabilityYes = "id|com.medtronic.minimed.ngp:id/pair_pump_compatibility_screen_has_symbol_button"

const deviceResource = resources;

Step('Launch app', function(){
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

Verify('Verify that title text of MiniMed Mobile page is the same as in requirements', {
    actual: mobile.waitForElement(titleMiniMed, 10).getAttribute("text"),
    expected: "MiniMed™ Mobile"
});

Step('Click Next button on Minimed Mobile page', function(){
    mobile.waitForElement(btn, 10).click()
});

// Carelink Uploads page

Verify('Verify that Carelink Uploads page is the same as in requirements', {
    actual: mobile.takeScreenshot(),
    expected: deviceResource.intro_2
});


Verify('Verify that Carelink Uploads page title text is the same as in requirements', {
    actual: mobile.waitForElement(titleCarelink, 10).getAttribute("text"),
    expected: "CareLink™ Uploads"
});

Step('Click Next button on Carelink Uploads page', function(){
    mobile.waitForElement(NextButtonCareLink, 10).click()
});

// CarePartner Sharing page

Verify('Verify that CarePartner Sharing page is the same as in requirements', {
    actual: mobile.takeScreenshot(),
    expected: deviceResource.intro_3
});

Verify('Verify that  CarePartner Sharing page title text is the same as in requirements', {
    actual: mobile.waitForElement(titleCarePartner, 10).getAttribute("text"),
    expected: "Care Partner Sharing"
});

Step('Click Next button on CarePartner Sharing page', function(){
    mobile.waitForElement(next_Button, 10).click()
});

// Select Country page

Verify('Verify that Select Country page is the same as in requirements', {
    actual: mobile.takeScreenshot(),
    expected: deviceResource.intro_4
});

mobile.wait(10)

Step('Click Log in button on Select Country page', function(){
    mobile.waitForElement(loginBtn, 10).click()
});

// CareLink Login page

mobile.wait(10)

Verify('Verify that CareLink Login page is the same as in requirements', {
    actual: mobile.takeScreenshot(),
    expected: deviceResource.intro_5
});

Step('Navigate to username field on CareLink Login page', function(){
    mobile.waitForElement(usernameField, 10).inputText("mapp_test_1")
    mobile.waitForElement(passwordField, 10).inputText("testing123")
});

mobile.wait(10)

Step('Click Log in on CareLink Login page', function(){
    mobile.waitForElement(logButton, 10).click()
});

mobile.wait(40)

// End User Licence Agreement page 

Verify('Verify that End User Licence Agreement page is the same as in requirements', {
    actual: mobile.takeScreenshot(),
    expected: deviceResource.intro_6
});

Step('Click Agree button on End User Licence Agreement page', function(){
    mobile.waitForElement(agreeendUserLicense, 10).click()
});


// Agree Terms and Conditions pop-up

Verify('Verify that Agree Terms and Conditions pop-up is the same as in requirements', {
    actual: mobile.takeScreenshot(),
    expected: deviceResource.intro_7
});


Step('Click Agree on Agree Terms and Conditions pop-up', function(){
    mobile.waitForElement(agreePopup, 10).click()
});


// Getting started pump page

Verify('Verify that Getting started pump page is the same as in requirements', {
    actual: mobile.takeScreenshot(),
    expected: deviceResource.intro_8
});

Step('Click Get started button', function(){
    mobile.waitForElement(getStartedPump, 10).click()
});


// Pump compitability page

Verify('Verify that Pump compitability page is the same as in requirements', {
    actual: mobile.takeScreenshot(),
    expected: deviceResource.intro_9
});

Step('Click on confirmation of compitability', function(){
    mobile.waitForElement(pumpCompitabilityYes, 10).click()
});

// Pump selection page

Verify('Verify that Pump selection page is the same as in requirements', {
    actual: mobile.takeScreenshot(),
    expected: deviceResource.intro_10
});



