# Selector library usage

Repo now exposes reusable selectors under `cypress/support/selectors/`.

## Available modules

- `leads.js`
- `contacts.js`
- `accounts.js`
- `rooms.js`
- `quotes.js`
- `classes.js`
- `meetings.js`
- `index.js` for re-export

## Import examples

### Import one module

```js
import { accountsSelectors } from '../../support/selectors/accounts';

cy.visit(accountsSelectors.routes.create);
cy.get(accountsSelectors.form.name).type('Auto Account');
cy.get(accountsSelectors.actions.save).click();
```

### Import from the index file

```js
import { contactsSelectors, roomsSelectors } from '../../support/selectors';

cy.get(contactsSelectors.nav.tab).click();
cy.get(roomsSelectors.nav.createMenu).click();
```

## Recommended usage pattern

1. Use `routes` for direct navigation.
2. Use `nav` for menu/tab entry points.
3. Use `form` for field-level interaction.
4. Use `actions` for save/edit/delete/cancel buttons.
5. Use `feedback` for validation or unsaved-change assertions.

## Notes

- These selectors are based on the current collector output in `docs/selector-library.json` and `docs/selector-library.md`.
- Some modules (`quotes`, `classes`, `meetings`) still include **candidate selectors** because their create/edit flows may switch into more complex BWC/iframe screens.
- Prefer adding assertions around visibility/existence before performing destructive actions.
- Keep test-level fallback selectors close to the spec if a module changes unexpectedly.

## Suggested test style

```js
import { leadsSelectors } from '../../support/selectors';

describe('Lead create smoke', () => {
  it('opens create lead page', () => {
    cy.visit(leadsSelectors.routes.create);
    cy.get(leadsSelectors.form.lastName).should('be.visible');
    cy.get(leadsSelectors.actions.save).should('exist');
  });
});
```
