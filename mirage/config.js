export default function() {
  this.get('/schools', () => {
    return {
      school: [
        {id: 1, Name: 'Zelda', City: "Some City", Location: 'kuk', Zoom: 'kuk2', Address: 'kuk2', CP: 'kuk2', Responsible: 'kuk2', AmountStudents: 'kuk2'}
      ]
    };
  });
}
