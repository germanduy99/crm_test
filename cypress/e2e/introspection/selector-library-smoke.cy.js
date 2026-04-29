import {
  crmSelectors,
  leadsSelectors,
  contactsSelectors,
  accountsSelectors,
  roomsSelectors,
  quotesSelectors,
  classesSelectors,
  meetingsSelectors,
} from '../../support/selectors';

describe('selector library smoke', () => {
  it('exposes selector modules with route and action metadata', () => {
    expect(crmSelectors.leads.routes.create).to.eq('#Leads/create');
    expect(leadsSelectors.actions.save).to.include('save');
    expect(contactsSelectors.routes.list).to.eq('#Contacts');
    expect(accountsSelectors.form.name).to.eq('[name="name"]');
    expect(roomsSelectors.routes.create).to.eq('#C_Rooms/create');
    expect(quotesSelectors.nav.tab).to.include('#Quotes');
    expect(classesSelectors.routes.list).to.eq('#J_Class');
    expect(meetingsSelectors.routes.create).to.eq('#Meetings/create');
  });
});
