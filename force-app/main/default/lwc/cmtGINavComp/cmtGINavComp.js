import { LightningElement, track } from 'lwc';
import gallium_Resource from "@salesforce/resourceUrl/Gallium_Resource";

export default class CmtGINavComp extends LightningElement {
    navLogo = gallium_Resource + '/GalliumLogo.svg';

    @track isMenuOpen = false;
    @track isDropdownOpen = false;

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }

    toggleDropdown(event) {
        const dropdown = event.target.nextElementSibling;
        dropdown.classList.toggle('open');
    }
}