var operateAppSettings = {
    enableDev:true,
    appIdentityUrlTemplate:"https://@identityName.ledgerDocuments.com/@identityPath?@network",
}

var appLinkAdiHelper = new AppLinkAdiClass(operateAppSettings.appIdentityUrlTemplate);
$(document).ready(function () {
    setTimeout(async () => {
        await ProductListingUIServiceClass.process(eRecordType.ledgerDocuments);
        
    }, 100);
}); 