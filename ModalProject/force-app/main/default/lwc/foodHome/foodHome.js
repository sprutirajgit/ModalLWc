import { LightningElement,api } from 'lwc';
import My_Resource from '@salesforce/resourceUrl/food';

export default class FoodHome extends LightningElement {
    @api recordId;
    food =My_Resource;
    navigateToNewCamptPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'Menu_Display'
            },
        });
    }
    }
