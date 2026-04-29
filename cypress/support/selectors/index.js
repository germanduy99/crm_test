import { leadsSelectors } from './leads';
import { contactsSelectors } from './contacts';
import { accountsSelectors } from './accounts';
import { roomsSelectors } from './rooms';
import { quotesSelectors } from './quotes';
import { classesSelectors } from './classes';
import { meetingsSelectors } from './meetings';

export {
  leadsSelectors,
  contactsSelectors,
  accountsSelectors,
  roomsSelectors,
  quotesSelectors,
  classesSelectors,
  meetingsSelectors,
};

export const crmSelectors = {
  leads: leadsSelectors,
  contacts: contactsSelectors,
  accounts: accountsSelectors,
  rooms: roomsSelectors,
  quotes: quotesSelectors,
  classes: classesSelectors,
  meetings: meetingsSelectors,
};
