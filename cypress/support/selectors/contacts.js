export const contactsSelectors = {
  module: 'Contacts/Students',
  routes: {
    list: '#Contacts',
    create: '#Contacts/create',
  },
  nav: {
    tab: 'a[href="#Contacts"], a[aria-label="Students"]',
    createMenu: 'a[href="#Contacts/create"]',
    importMenu: 'a[href*="import_module=Contacts"]',
  },
  actions: {
    save: 'button[name="save"], .detail-button-container .btn-primary[name="save"]',
    cancel: '.detail-button-container .btn-default, a:contains("Cancel")',
    edit: 'a[href*="#Contacts/"][href$="/edit"], [data-action="edit"]',
    delete: '[data-action="delete"], .detail-button-container .btn-danger',
  },
  form: {
    lastName: '[name="lastName"]',
    firstName: '[name="firstName"]',
    status: '[name="status"]',
    assignedUser: '[name="assignedUserId"]',
  },
  feedback: {
    validationError: 'div.alert.alert-danger, div.alert-danger',
    unsavedChanges: 'div.alert.alert-warning, div.alert-warning',
    confirmLeave: 'a.alert-btn-confirm',
    cancelLeave: 'a.alert-btn-cancel',
  },
};
