export const meetingsSelectors = {
  module: 'Meetings / Schedules',
  routes: {
    list: '#Meetings',
    create: '#Meetings/create',
  },
  nav: {
    tab: 'a[href="#Meetings"], a[aria-label="Schedules"]',
    createMenu: 'a[href="#Meetings/create"]',
    placementTestMenu: 'a[href*="module=Meetings"][href*="type=PT"]',
    demoMenu: 'a[href*="module=Meetings"][href*="type=Demo"]',
  },
  actions: {
    save: 'button[name="save"], .detail-button-container .btn-primary[name="save"]',
    cancel: '.detail-button-container .btn-default, a:contains("Cancel")',
    edit: 'a[href*="#Meetings/"][href$="/edit"], [data-action="edit"]',
    delete: '[data-action="delete"], .detail-button-container .btn-danger',
  },
  form: {
    name: '[name="name"]',
    status: '[name="status"]',
    assignedUser: '[name="assignedUserId"]',
    dateStart: '[name="dateStart"]',
  },
  notes: 'Meeting flows may branch into specialized BWC pages. Prefer read-only navigation/assertion selectors unless you have module-specific fixtures.',
  feedback: {
    validationError: 'div.alert.alert-danger, div.alert-danger',
    unsavedChanges: 'div.alert.alert-warning, div.alert-warning',
    confirmLeave: 'a.alert-btn-confirm',
    cancelLeave: 'a.alert-btn-cancel',
  },
};
