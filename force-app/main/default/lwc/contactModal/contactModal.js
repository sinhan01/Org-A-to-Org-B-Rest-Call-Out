import { LightningElement,api } from 'lwc';

export default class ContactModal extends LightningElement {

    @api contactDetails
    closeModal(){
        const customEvent = new CustomEvent('close')
        this.dispatchEvent(customEvent)
    }
}