export const leadsSelectors = {
  module: 'Leads',
  routes: {
    list: '#Leads',
    create: '#Leads/create',
  },
  nav: {
    tab: 'a[href="#Leads"], a[aria-label="Leads"]',
    createMenu: 'a[href="#Leads/create"]',
  },
  actions: {
    save: 'button[name="save"], .detail-button-container .btn-primary[name="save"]',
    cancel: 'a[href="javascript: void(0)"], .detail-button-container .btn-default',
    edit: 'a[href$="/edit"], [data-action="edit"]',
    delete: '[data-action="delete"], .detail-button-container .btn-danger',
  },
  form: {
    lastName: '[name="lastName"]',
    firstName: '[name="firstName"]',
    status: '[name="status"]',
  },
  feedback: {
    validationError: 'div.alert.alert-danger, div.alert-danger',
    unsavedChanges: 'div.alert.alert-warning, div.alert-warning',
    confirmLeave: 'a.alert-btn-confirm',
    cancelLeave: 'a.alert-btn-cancel',
  },
};
