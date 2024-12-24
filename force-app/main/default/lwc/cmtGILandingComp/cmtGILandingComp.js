import { LightningElement } from 'lwc';
import gallium_Resource from "@salesforce/resourceUrl/Gallium_Resource";

export default class CmtGILandingComp extends LightningElement {
    gallium_Resource = gallium_Resource;
    logo1 = gallium_Resource + '/GalliumLogo.svg';
    logo2 = gallium_Resource + '/digitalLedgerWhite.svg';
    logo3 = gallium_Resource + '/quantitativeAdvisory.svg';
    logo4 = gallium_Resource + '/consultancyWhite.svg';
    headerBgImage = gallium_Resource + '/HeroIcebergImage.png';

    connectedCallback(){
        console.log('gallium_Resource>>> '+ gallium_Resource);
        
        // this.headerBgImage = this.gallium_Resource + '/HeroIcebergImage.png';
    }
}