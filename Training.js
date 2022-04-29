//-----------------------------------------------------------------------------
//  Start of Page not tested (0)

// mobile.launchApp()
// mobile.touch("53.00%", "101.03%")
// mobile.takeSource("D:/mysourceNottested.txt")
// let titleNotTested = mobile.element("id|com.medtronic.minimed.ngp:id/app_notification_header")
// let titleNotTestedText = titleNotTested.getAttribute("text")
// console.log(titleNotTestedText)
// let screenNottested = mobile.element("id|com.medtronic.minimed.ngp:id/app_notification_message")
// let screenNottestedText = screenNottested.getAttribute("text")
// console.log(screenNottestedText)
// let okBtn = mobile.element("id|com.medtronic.minimed.ngp:id/app_notification_button")
// let okBtntext = okBtn.getAttribute("text")
// console.log(okBtntext)
// element not found !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// End of Start of Page not tested (0)



// Start of Minimed Mobile page (1)

// mobile.launchApp()
// let title = mobile.element("id|com.medtronic.minimed.ngp:id/title")
// let titleText = title.getAttribute("text")
// console.log(titleText)
// let screen = mobile.element("id|com.medtronic.minimed.ngp:id/intro1_screen_text")
// let screenText = screen.getAttribute("text")
// console.log(screenText)
// let requirementText = "MiniMed™ Mobile links your compatible MiniMed™ Pump to your mobile device, allowing you to see your pump and sensor information."
// console.log(screenText === requirementText)
// let NextBtn = mobile.element("id|com.medtronic.minimed.ngp:id/intro1_screen_next_button")
// NextBtn.click()

// End of Minimed Mobile page (1)



// Start of CareLinks Uploads page (2)

// mobile.takeScreenshot().SaveToFile("D:/LilyCarelinkUploads.png")
// mobile.takeSource("D:/CarelinkUploads.txt")

// let titleCarelink = mobile.element("id|com.medtronic.minimed.ngp:id/title")
// let titleCarelinkText = titleCarelink.getAttribute("text")
// console.log(titleCarelinkText)
// let screenCarelink = mobile.element("id|com.medtronic.minimed.ngp:id/intro2_screen_text")
// let screenCarelinkText = screenCarelink.getAttribute("text")
// console.log(screenCarelinkText)
// let NextButton = mobile.element("id|com.medtronic.minimed.ngp:id/intro2_screen_next_button")
// NextButton.click()

// End of CareLinks Uploads page (2)


// Start of CareLink Partner Sharing page (3)

// mobile.takeScreenshot().SaveToFile("D:/CarePartnersharing.png")
// mobile.takeSource("D:/CarePartnerSharing.txt")
// let titleCarePartner = mobile.element("id|com.medtronic.minimed.ngp:id/title")
// let titleCarePartnerText = titleCarePartner.getAttribute("text")
// console.log(titleCarePartnerText)
// let next_Button = mobile.element("id|com.medtronic.minimed.ngp:id/intro3_screen_next_button")
// next_Button.click()

// End of CareLink Partner Sharing page (3)



// // Start of Select country page (4)

// mobile.takeSource("D:/select_country.txt")
// // no text"", what to choose?
// mobile.touch("9.00%", "20.56%")

// not working for log in button
// let loginBtn = mobile.element("id|com.medtronic.minimed.ngp:id/carelink_sign_in_screen")
// loginBtn.click()

// End of Select country page (4) 


//  Start of Registration page (5)
//no resource-id for page title
// mobile.takeSource("D:/registration.txt")
// mobile.takeScreenshot().SaveToFile("D:/Registration.png")
// let submitBtn = mobile.element("id|submitRegistrationBtn")
// submitBtn.click()

// element Submit not found
// mobile.touch("22.00%", "14.58%")

// let loginBtn = mobile.element("id|com.medtronic.minimed.ngp:id/carelink_sign_in_screen")
// loginBtn.click()
// no results

// //  End of Registration page (5)


// Start of login to CareLink page(6)

// mobile.takeSource("D:/LoginToCarelink.txt")
// mobile.takeScreenshot().SaveToFile("D:/LoginToCare.png")
// let titleLogin = mobile.element("id|banner-label")
// let titleLoginText = titleLogin.getAttribute("text")
// console.log(titleLoginText)
// log in button has no resource-id

// "password" and "username" id - elements not found
// let logBtn = mobile.element("id|password")
// let logBtntext = logBtn.getAttribute("focused")
// console.log(logBtntext);

// End of login to CareLink page(6)


//-----------------------------------------------------------------------------


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// start of new syntax


//Scenario 1 = "Check Minimed Mobile Page"

// let btn = mobile.element("id|com.medtronic.minimed.ngp:id/intro1_screen_next_button");
// let title = mobile.element("id|com.medtronic.minimed.ngp:id/title");
// let titleText = title.getAttribute("text");
// let requirementText = "MiniMed™ Mobile links your compatible MiniMed™ Pump to your mobile device, allowing you to see your pump and sensor information."

// Step('Launch app', function(){
//     mobile.launchApp()
// });

// Verify('Verify that title text is the same as in requirements', {
//     actual: titleText,
//     expected: requirementText
// });

// Step('Navigate to next button', function(){
//     mobile.waitForElement(btn, 10).click()
// });

// Verify('Verify next button', {
//     actual: mobile.waitForElement(btn, 10).getAttribute("text"),
//     expected:"Next"
// });


// Scenario 2 = "CareLinks Uploads page"

// let titleCarelink = mobile.element("id|com.medtronic.minimed.ngp:id/title")
// let titleCarelinkText = titleCarelink.getAttribute("text")
// let requirementCareLinkTitle = "CareLink™ Uploads"
// let NextButtonCareLink = mobile.element("id|com.medtronic.minimed.ngp:id/intro2_screen_next_button")


// Verify('Verify that title text is the same as in requirements', {
//     actual: titleCarelinkText,
//     expected: requirementCareLinkTitle
// });

// Step('Navigate to next button', function(){
//     mobile.waitForElement(NextButtonCareLink, 10).click()
// });

// Verify('Verify next button', {
//     actual: mobile.waitForElement(NextButtonCareLink, 10).getAttribute("text"),
//     expected:"Next"
// });


// Scenario 3 = "CareLink Partner Sharing page"

// let titleCarePartner = mobile.element("id|com.medtronic.minimed.ngp:id/title")
// let titleCarePartnerText = titleCarePartner.getAttribute("text")
// let requirementCareTitle = "Care Partner Sharing"
// let next_Button = mobile.element("id|com.medtronic.minimed.ngp:id/intro3_screen_next_button")

// Verify('Verify that title text is the same as in requirements', {
//     actual: titleCarePartnerText,
//     expected: requirementCareTitle
// });

// Step('Navigate to next button', function(){
//     mobile.waitForElement(NextButtonCareLink, 10).click()
// });

// Verify('Verify next button', {
//     actual: mobile.waitForElement(next_Button, 10).getAttribute("text"),
//     expected:"Next"
// });



// Scenario 4 = "Select country page"

// no text values
// login button - cant find, no results
// let loginBtn = mobile.element("id|com.medtronic.minimed.ngp:id/carelink_sign_in_screen")
// loginBtn.click()



// Scenario 5 = "Login to CareLink page"

//"password" and "username" id - elements not found
//let userField = mobile.element("id|username")
//let passField = mobile.element("id|password")

// let titleLogin = mobile.element("id|banner-label")
// let titleLoginText = titleLogin.getAttribute("text")

// let requirementLoginTitle = "CareLink ™"

// Verify('Verify that title text is the same as in requirements', {
//     actual: titleLoginText,
//     expected: requirementLoginTitle
// });


//-----------------------------------------------------------------------------





//-----------------------------------------------------------------------------
// captured part starts here
//-----------------------------------------------------------------------------
