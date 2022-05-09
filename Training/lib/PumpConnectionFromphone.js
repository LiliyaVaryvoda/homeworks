class PumpConnectionFromPhone{
    constructor(mobile){
        this.mobile = mobile;
        this.title = "id|com.medtronic.minimed.ngp:id/title";
        this.diagnosticLogs = "id|com.medtronic.minimed.ngp:id/pair_pump_screen_diagnostic_logs_button";
    }

    getExpectedPageData(){
        return{
            title:"MiniMed™ Mobile",
            diagnosticLogs:"Yes, my pump has this symbol"
        }
    }

    getActualPageData(){
        return{
            title:this.mobile.waitForElement(this.title, 10).getAttribute("text"),
            diagnosticLogs:this.mobile.waitForElement(this.diagnosticLogs, 10).getAttribute("Diagnostic Logs")
        }
    }

    clickDiagnosticLogs(){
        this.mobile.waitForElement(this.diagnosticLogs, 10).click()
    }
}