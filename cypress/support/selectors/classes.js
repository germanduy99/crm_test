export const classesSelectors = {
  module: 'J_Class / Classes',
  routes: {
    list: '#J_Class',
    create: '#J_Class/create',
  },
  nav: {
    tab: 'a[href="#J_Class"], a[aria-label="Classes"]',
    createMenu: 'a[href="#J_Class/create"]',
    calendarMenu: 'a[href*="module=Calendar"][href*="view=week"]',
  },
  actions: {
    save: 'button[name="save"], .detail-button-container .btn-primary[name="save"]',
    cancel: '.detail-button-container .btn-default, a:contains("Cancel")',
    edit: 'a[href*="#J_Class/"][href$="/edit"], [data-action="edit"]',
    delete: '[data-action="delete"], .detail-button-container .btn-danger',
  },
  form: {
    name: '[name="name"]',
    status: '[name="status"]',
    assignedUser: '[name="assignedUserId"]',
  },
  notes: 'Class create/edit can involve complex business rules. Treat these as candidate selectors and verify before automating save flows.',
  feedback: {
    validationError: 'div.alert.alert-danger, div.alert-danger',
    unsavedChanges: 'div.alert.alert-warning, div.alert-warning',
    confirmLeave: 'a.alert-btn-confirm',
    cancelLeave: 'a.alert-btn-cancel',
  },
};
