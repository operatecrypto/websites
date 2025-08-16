var operateAppSettings = {
    enableDev:true,
    appIdentityUrlTemplate:"https://@identityName.CertifiedItems.com/@identityPath?@network",
}

var appLinkAdiHelper = new AppLinkAdiClass(operateAppSettings.appIdentityUrlTemplate);
$(document).ready(function () {
    setTimeout(async () => {
        await ProductListingUIServiceClass.process(eRecordType.certifiedItems);
    }, 100);
});