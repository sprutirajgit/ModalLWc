import { LightningElement,track,wire,api } from 'lwc';
import getEvent from '@salesforce/apex/LwcEvent.getEvent';

export default class Event extends LightningElement {
    @api recordId;
    @track contacts;
    @track columns = [
        {fieldName: 'Subject',type:'url',typeAttributes:{
         label:{fieldName: 'Subject'}
        }
        },
    
        {  fieldName: 'EndDate', type: 'Date' },
        { fieldName: 'StartDateTime' ,type:'DateTime'}
    ];

    @wire(getEvent, {accId: '$recordId'}) 
    WireContactRecords({error, data}){
        if(data){
            this.contacts = data;
            this.error = undefined;
        }else{
            this.error = error;
            this.contacts = undefined;
        }
    }
    connectedCallback(){
        getEvent().then(response => {
            this.lstEvents = response;
            if(this.lstEvents){
                this.lstEvents.forEach(item => item['Subject'] = '/lightning/r/Event/' +item['Id'] +'/Edit');
                
            }
        }).catch(error => {
            console.log('Error: ' +error);
        });
    }
}