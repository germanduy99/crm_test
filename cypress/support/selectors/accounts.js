export const accountsSelectors = {
  module: 'Accounts',
  routes: {
    list: '#Accounts',
    create: '#Accounts/create',
  },
  nav: {
    tab: 'a[href="#Accounts"], a[aria-label="Accounts"]',
    createMenu: 'a[href="#Accounts/create"]',
    importMenu: 'a[href*="import_module=Accounts"]',
  },
  actions: {
    save: 'button[name="save"], .detail-button-container .btn-primary[name="save"]',
    cancel: '.detail-button-container .btn-default, a:contains("Cancel")',
    edit: 'a[href*="#Accounts/"][href$="/edit"], [data-action="edit"]',
    delete: '[data-action="delete"], .detail-button-container .btn-danger',
  },
  form: {
    name: '[name="name"]',
    assignedUser: '[name="assignedUserId"]',
    website: '[name="website"]',
    officePhone: '[name="officePhone"]',
  },
  feedback: {
    validationError: 'div.alert.alert-danger, div.alert-danger',
    unsavedChanges: 'div.alert.alert-warning, div.alert-warning',
    confirmLeave: 'a.alert-btn-confirm',
    cancelLeave: 'a.alert-btn-cancel',
  },
};
