export const contactAdd = contact => ({
  type: 'CONTACT_ADD',
  contact
});

export const contactDelete = index => ({
  type: 'CONTACT_DELETE',
  index
});
