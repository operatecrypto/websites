var operateAppSettings = {
    enableDev:true,
    appIdentityUrlTemplate:"https://@identityName.AmlOnChain.com/@identityPath?@network",
}

var appLinkAdiHelper = new AppLinkAdiClass(operateAppSettings.appIdentityUrlTemplate);
$(document).ready(function () {
    setTimeout(async () => {
        debugger;
        await ProductListingUIServiceClass.process(eRecordType.amlOnChain,".app-product-listing-section");
    }, 100);
});