class BasePage{
    constructor(mobile){
        this.mobile = mobile
    }

    formatMsg(msg){
        return this.formatMsg.replace(/\u2060/g, "").replace(/\xa0/g, " ").replace(/%s/, "").replace(/\s+/g, " ").replace(/\&#10;/g, " ").trim()
    }

    isElementPresent(locator){
        let element = this.mobile.waitForElement(locator, 10);
        if (element.isNull()){
            return false
        }
        return true
    }
}