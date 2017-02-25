import Ember from 'ember';
import CTABLE from 'ember-cli-crudtable/mixins/crud-controller';

let CrudTable = CTABLE('school');
export default Ember.Controller.extend(CrudTable,{
    fieldDefinition:{
        Name:{Label:'School'},
        Responsible:{
            Label:'Manager',
            Type:'text',
            Search: true
        },
        Location:{
            Label:'Google Map',
            Type:'googlemap',
            Display:'City',
            Zoom:'Zoom'
        },
    }
});
