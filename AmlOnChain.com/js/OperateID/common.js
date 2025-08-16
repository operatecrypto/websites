class eRecordType {

    static qoboto = 10000;
    static metial = 10100;
    static bankOnLedger = 10200;
    static dataProofLabs = 10300;
    static onLedgerIoT = 10400;
    static ledgerDocuments = 10500;
    static operateDAO = 10600;
    static businessNetworks = 10700;
    
    static nftWorkspace = 10800;
    static rwaSimplified = 10900;
    static amlOnChain = 11000;
    static kycOnChain = 11100;
    static certifiedItems = 11200;
    static chainOfCommands = 11300;
    static promotions = 11400;
    static bizFirstAiAgents = 11500;
    static bizFirstAiDataStores = 11600;
    static organization = 11700;

}  
function IsEmpty(obj) {
    if (obj === undefined) return true;
    if (obj == null) return true;
    return false;
}
function IsEmptyString(obj) {
    if (obj === undefined) return true;
    if (obj == null) return true;
    if (obj == "") return true;
    return false;
}
class AppLinkAdiClass {
    constructor(urlTemplate) {
        this.urlTemplate = urlTemplate;
    }
    openAppByIdentityUrl(identityUrl) {
        var appUrl= this.getUrl(identityUrl);
        this.openAppByAppUrl(appUrl) 
    }
    openAppByAppUrl(appUrl) {
        window.open(appUrl, "_blank");
    }
    getUrl(identityUrl) {
        if (identityUrl == "") return;
        identityUrl = identityUrl.toLowerCase();
        if (!identityUrl.includes(".acme")) identityUrl = identityUrl + ".acme";
        const adi = this._parseAdi2(identityUrl);
        var url = this.urlTemplate.replace("@identityName", adi.name);
        url = url.replace("@identityPath", adi.subPath);

        url = operateIdMembers._replaceNetwork(url);
        url = url.replace(/\?$/, '');//remove trailing ?
        url = url.replace(/\/$/, ''); //remove trailing /            
        return  url;
           // url = "https://www.bankonledger.com/website/QRCodeGenerator.html?barcodeData=" + url;
    }
    _parseAdi2(adiUrl) {
        var adi = {}
        adi.url = adiUrl.toLowerCase();
        if (adi.url.startsWith("acc://")) {
            adi.path = adi.url.substring(6);
        }
        else {
            adi.path = adi.url;
        }
        var arr1 = adi.path.split(".");
        adi.name = arr1[0];
        var arr_remaining = arr1[1];
        adi.rootUrl = "acc://" + adi.name + ".acme";
        adi.subPath = arr_remaining.length > 5 ? arr_remaining.substring(5) : "";
        return adi;
    }
} 