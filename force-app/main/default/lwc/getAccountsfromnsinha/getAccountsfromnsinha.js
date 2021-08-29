import { LightningElement, wire } from 'lwc';
import getAccountFromNsinha from '@salesforce/apex/SalesforceConnectRestService.getAccountFromNsinha'
export default class GetAccountsfromnsinha extends LightningElement {

    Accounts
    clicked = false
    clickedAccount = []
    clickedAccountId
    contactDetails = []
    @wire(getAccountFromNsinha)
    getAccounts({data,error}){
        if(data){           
            this.Accounts = JSON.parse(data).map(item=>{
                return {

                    // 'Name': item.Name,
                    // 'AccountNumber' : item.AccountNumber,
                    // 'Phone': item.Phone,
                    // 'AnnualRevenue': item.AnnualRevenue,
                    // 'Rating':item.Rating,
                    // 'Id':item.Id,
                    // 'contacts': item.Contacts[records] === item.Contacts[records] ? item.Contacts[records].map(contact=>{
                    //     return {
                    //         'contactName': contact.Name,
                    //         'contactEmail': contact.Email,
                    //         'contactPhone': contact.Phone,
                    //         'contactTitle': contact.Title
                    //     }
                    // }) : ''
                    'Name': item.Name,
                    'AccountNumber' : item.AccountNumber,
                    'Phone': item.Phone,
                    'AnnualRevenue': item.AnnualRevenue,
                    'Rating':item.Rating,
                    'Id':item.Id,
                    'contacts': item.Contacts
                    }
            })

            //console.log('data', data)
            console.log('this.Accounts',this.Accounts)
        }
        if(error){
            console.log(error)
        }
    }

    getContactHandler(event){
        //console.log(event.target.dataset.id)
        this.clickedAccountId = event.target.dataset.id
        this.clickedAccount = this.Accounts.filter(item => item.Id === this.clickedAccountId)
        // if(this.clickedAccount.contacts){
        //     this.contactDetails = this.clickedAccount[0].contacts.records.map(item=>{
        //         return {
        //             'contactName': item.Name,
        //             'contactEmail': item.Email,
        //             'contactPhone': item.Phone,
        //             'contactTitle': item.Title   
        //         }
             
        //     })
        // }
       
        this.contactDetails = this.clickedAccount[0].contacts ? this.clickedAccount[0].contacts.records : ''
        console.log('this.clickedAccount', this.clickedAccount)
        console.log('this.contactDetails', this.contactDetails)
        this.clicked = true

    }

    hideModal(){
        this.clicked = false
    }


}