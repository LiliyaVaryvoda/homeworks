// class CareLinkUploadsPage{
//     constructor(mobile){
//         this.mobile = mobile;
//         this.titleCareLinkUploads = "com.medtronic.minimed.ngp:id/title";
//         this.message = "com.medtronic.minimed.ngp:id/intro2_screen_text";
//         this.btn = "id|com.medtronic.minimed.ngp:id/intro2_screen_next_button";

//     }

//     getExpectedPageData(){
//         return{
//             title:"CareLink™ Uploads",
//             message:"The app automatically sends information to CareLink™ so you do not have to upload your pump on your own.&#10;You can turn this off from the Sync to CareLink™ screen if needed.",
//             btn:"Next"
//         }
//     }


//     getActualPageData(){
//         return{
//             title:this.mobile.waitForElement(this.titleCareLinkUploads, 10).getAttribute("text"),
//             message:this.mobile.waitForElement(this.message, 10).getAttribute("text"),
//             btn:this.mobile.waitForElement(this.btn, 10).getAttribute("text")
//         }
//     }

//     clickNextBtn(){
//         this.mobile.waitForElement(this.btn, 10).click()
//     }
// }


//export default CareLinkUploadsPage