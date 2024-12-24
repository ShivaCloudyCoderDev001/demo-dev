import { LightningElement } from 'lwc';
import getMetaData from '@salesforce/apex/EmailTemplateController.getMetaData'

export default class Email_Template_Com extends LightningElement {

    richtext;

    htmlString = `
        <table class="MsoTableGrid" style="width:611px; border-collapse:collapse; border:none" width="611">
            <tr>
                <td style="width:305px; padding:0cm 9px 0cm 9px; background-color:#def0eb"><span style="font-size:11pt">Net loan</span></td>
                <td style="width:305px; padding:0cm 9px 0cm 9px; background-color:white"><span style="font-size:11pt">£{{{Opportunity.Net_Loan_Amount__c}}}</span></td>
            </tr>
            <!-- More rows here -->
        </table>
    `;

    connectedCallback() {
        // Parse the HTML string into a DOM structure
        const parser = new DOMParser();
        const doc = parser.parseFromString(this.htmlString, 'text/html');
        
        // Select the table rows where you want to add columns
        const rows = doc.querySelectorAll('tr');

        rows.forEach((row) => {
            // Create new columns (td)
            const newCol1 = document.createElement('td');
            newCol1.innerHTML = '<span style="font-size:11pt">New Data 1</span>';
            const newCol2 = document.createElement('td');
            newCol2.innerHTML = '<span style="font-size:11pt">New Data 2</span>';
            const newCol3 = document.createElement('td');
            newCol3.innerHTML = '<span style="font-size:11pt">New Data 3</span>';

            // Append new columns to the row
            row.appendChild(newCol1);
            row.appendChild(newCol2);
            row.appendChild(newCol3);
        });

        // Serialize the DOM structure back to a string
        this.htmlString = doc.body.innerHTML;

        console.log(this.htmlString); // Updated HTML string with added columns
    }
}