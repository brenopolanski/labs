import uuid from 'uuid';

export const contactAdd = contact => ({
  type: 'CONTACT_ADD',
  contact: {
    id: uuid.v4(),
    ...contact
  }
});

export const contactEdit = contact => ({
  type: 'CONTACT_EDIT',
  contact
});

export const contactDelete = index => ({
  type: 'CONTACT_DELETE',
  index
});
