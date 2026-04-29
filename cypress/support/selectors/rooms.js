export const roomsSelectors = {
  module: 'Rooms',
  routes: {
    list: '#C_Rooms',
    create: '#C_Rooms/create',
  },
  nav: {
    tab: 'a[href="#C_Rooms"], a[aria-label="Rooms"]',
    createMenu: 'a[href="#C_Rooms/create"]',
    importMenu: 'a[href*="import_module=C_Rooms"]',
  },
  actions: {
    save: 'button[name="save"], .detail-button-container .btn-primary[name="save"]',
    cancel: '.detail-button-container .btn-default, a:contains("Cancel")',
    edit: 'a[href*="#C_Rooms/"][href$="/edit"], [data-action="edit"]',
    delete: '[data-action="delete"], .detail-button-container .btn-danger',
  },
  form: {
    name: '[name="name"]',
    capacity: '[name="capacity"]',
    status: '[name="status"]',
  },
  feedback: {
    validationError: 'div.alert.alert-danger, div.alert-danger',
    unsavedChanges: 'div.alert.alert-warning, div.alert-warning',
    confirmLeave: 'a.alert-btn-confirm',
    cancelLeave: 'a.alert-btn-cancel',
  },
};
