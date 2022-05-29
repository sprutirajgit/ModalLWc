import { LightningElement,api} from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

import campe from '@salesforce/resourceUrl/campa';
import lop from '@salesforce/resourceUrl/lo';
import sal from '@salesforce/resourceUrl/salesC';
import con from '@salesforce/resourceUrl/Conta';
import opp from '@salesforce/resourceUrl/oppoppp';

export default class SalesHome extends NavigationMixin(LightningElement) {
    @api recordId;
    campa = campe;
    lo = lop;
    salesC=sal;
    Conta=con;
    oppoppp=opp;
    navigateToNewCamptPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Campaign',
                actionName: 'new'
            },
        });
    }
}