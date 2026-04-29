export const quotesSelectors = {
  module: 'Quotes / Sale Orders',
  routes: {
    list: '#Quotes',
    create: '#Quotes/create',
  },
  nav: {
    tab: 'a[href="#Quotes"], a[aria-label="Sale Orders"]',
    createMenu: 'a[href="#Quotes/create"]',
    reportsMenu: 'a[href="#Reports?filterModule=Quotes"]',
  },
  actions: {
    save: 'button[name="save"], .detail-button-container .btn-primary[name="save"]',
    cancel: '.detail-button-container .btn-default, a:contains("Cancel")',
    edit: 'a[href*="#Quotes/"][href$="/edit"], [data-action="edit"]',
    delete: '[data-action="delete"], .detail-button-container .btn-danger',
  },
  form: {
    name: '[name="name"]',
    assignedUser: '[name="assignedUserId"]',
    billingAccount: '[name="billingAccountName"]',
  },
  notes: 'Quote flows may jump into BWC/iframe areas. Validate selectors in-module before using for write-heavy CRUD.',
  feedback: {
    validationError: 'div.alert.alert-danger, div.alert-danger',
    unsavedChanges: 'div.alert.alert-warning, div.alert-warning',
    confirmLeave: 'a.alert-btn-confirm',
    cancelLeave: 'a.alert-btn-cancel',
  },
};
