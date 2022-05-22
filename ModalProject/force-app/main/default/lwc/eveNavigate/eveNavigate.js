import { LightningElement ,api} from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class EveNavigate extends NavigationMixin(LightningElement)  {
    @api recordId;
    HandelClick(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.recordId,
                objectApiName: 'Event',
                actionName: 'home'
            },
        });
    }
    }
