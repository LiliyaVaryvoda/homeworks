// class MinimedMobilePage{
//     constructor(mobile){
//         this.mobile = mobile;
//         this.titleMiniMed = "id|com.medtronic.minimed.ngp:id/title";
//         this.message = "id|com.medtronic.minimed.ngp:id/intro1_screen_text";
//         this.btn = "id|com.medtronic.minimed.ngp:id/intro1_screen_next_button";

//     }

//     getExpectedPageData(){
//         return{
//             title:"MiniMed™ Mobile",
//             message:"MiniMed™ Mobile links your compatible MiniMed™ Pump to your mobile device, allowing you to see your pump and sensor information.",
//             btn:"Next"
//         }
//     }


//     getActualPageData(){
//         return{
//             title:this.mobile.waitForElement(this.titleMiniMed, 10).getAttribute("text"),
//             message:this.mobile.waitForElement(this.screenText, 10).getAttribute("text"),
//             btn:this.mobile.waitForElement(this.btn, 10).getAttribute("text")
//         }
//     }

//     clickNextBtn(){
//         this.mobile.waitForElement(this.btn, 10).click()
//     }
// }


//export default MinimedMobilePage()