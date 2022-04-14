$(() => {
  $('#form').dxForm({
    items: [{
    }, {
      itemType: 'group',
      items: [{
        itemType: 'tabbed',
        tabs: [{
          title: 'email',
          items: ['Phone'],
        }, {
          title: 'Skype',
          items: ['Skype'],
        }, {
          title: 'Email',
          items: ['Email'],
        }],
      }],
    }],
  });
});


const employees = {

  Phone: '',
  Email: '',
  Skype: '',
};
