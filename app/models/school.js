import DS from 'ember-data';
let attr = DS.attr;
export default DS.Model.extend({
    Name: attr('string'),
    City: attr('string'),
    Location:attr('string'),
    Zoom:attr('number'),
    Address: attr('string'),
    CP: attr('string'),
    Responsible:attr('string'),
    AmountStudents:attr('number')
});
