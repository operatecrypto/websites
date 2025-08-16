class OperateIdMembersClass {
    constructor() {
        this.init();
    }
    navigateToAppByIdentityUrl() {
        var identityUrl = document.querySelector('.text_identity').value.trim();
        if (identityUrl == "") return;
        identityUrl = identityUrl.toLowerCase();
        if (!identityUrl.includes(".acme")) identityUrl = identityUrl + ".acme";
        const adi = operateIdMembers._parseAdi2(identityUrl);

        const links = document.querySelectorAll('.member-link-app-identity-url');
        links.forEach(link => {
            const urlTemplate = link.getAttribute('href_template');
            var url = urlTemplate.replace("@identityName", adi.name);
            url = url.replace("@identityPath", adi.subPath);
            //operateIdMembers._navigateToUrl(url, link);
            //window.open(url, "_blank");
            operateIdMembers.openWindow(url);
        });
    }
    navigateToQrCode() {
        var identityUrl = document.querySelector('.text_identity').value.trim();
        if (identityUrl == "") return;
        identityUrl = identityUrl.toLowerCase();
        if (!identityUrl.includes(".acme")) identityUrl = identityUrl + ".acme";
        const adi = operateIdMembers._parseAdi2(identityUrl);

        const links = document.querySelectorAll('.member-link-app-identity-url');
        links.forEach(link => {
            const urlTemplate = link.getAttribute('href_template');
            var url = urlTemplate.replace("@identityName", adi.name);
            url = url.replace("@identityPath", adi.subPath);

            url = operateIdMembers._replaceNetwork(url);
            url = url.replace(/\?$/, '');//remove trailing ?
            url = url.replace(/\/$/, ''); //remove trailing /            
            url = url.replace(/\?$/, '');//remove trailing ?
            url = url.replace(/\/$/, ''); //remove trailing /  
            
            url = "https://www.CertifiedItems.com/website/QRCodeGenerator.html?barcodeData=" + url;
            window.open(url, "_blank"); //operateIdMembers.openWindow(url);
        });
    }

    navigateToAppByRecordId() {
        const text_record_id = document.querySelector('.text_record_id').value.trim();
        if (text_record_id == "") return;
        const links = document.querySelectorAll('.member-link-app-record-id');
        links.forEach(link => {
            const urlTemplate = link.getAttribute('href_template');
            var url = urlTemplate.replace("@record-id", text_record_id);
            operateIdMembers.openWindow(url); //operateIdMembers._navigateToUrl(url, link);
        });
    }
    openWindow(url) {
        url = operateIdMembers._replaceNetwork(url);
        window.open(url, "_blank");
    }
    //_navigateToUrl(url, link) {
    //    url = operateIdMembers._replaceNetwork(url);
    //    link.setAttribute('href', url);
    //    console.log("Navigating to");
    //    console.log(url);
    //    link.click();
    //}
    _replaceNetwork(url) {
        var network = document.querySelector('.select-network').value.trim();
        if (network != "") {
            network = "&current-network=" + network
        }
        return url.replace("@network", network);
    }

    init() {
        // Add click handlers to each link element
        document.querySelectorAll('.member-link-app-identity-url').forEach(link => {
            link.addEventListener('click', this.navigateToAppByIdentityUrl);
        });

        document.querySelectorAll('.member-link-app-record-id').forEach(link => {
            link.addEventListener('click', this.navigateToAppByRecordId);
        });

        document.querySelectorAll('.member-link-app-identity-qr-code').forEach(link => {
            link.addEventListener('click', this.navigateToQrCode);
        });
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


var operateIdMembers = new OperateIdMembersClass(); 