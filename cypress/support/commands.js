// ✅ Lấy body trong iframe
Cypress.Commands.add('getIframeBody', (iframeSelector) => {
  return cy
    .get(iframeSelector)
    .its('0.contentDocument.body').should('not.be.empty')
    .then(cy.wrap);
});

// ✅ Chọn option random trong dropdown (fix duplicate value)
Cypress.Commands.add('selectRandomOption', (iframeSelector, dropdownSelector, label) => {
  cy.getIframeBody(iframeSelector).find(dropdownSelector).then($select => {
    const $options = $select.find('option');

    // lọc option hợp lệ
    const validOptions = $options.toArray().filter(o => {
      const val = (o.value || '').trim();
      return val !== '' && !o.disabled && Cypress.$(o).is(':visible');
    });

    if (!validOptions.length) {
      cy.log(`⚠️ [${label}] Không có option hợp lệ để chọn`);
      return;
    }

    // random 1 option trong danh sách hợp lệ
    const randomOption = Cypress._.sample(validOptions);
    const index = $options.index(randomOption); // lấy index tuyệt đối trong select

    // chọn option bằng index để tránh bug duplicate value
    cy.wrap($select).then($el => {
      $el[0].selectedIndex = index;
      $el[0].dispatchEvent(new Event('change', { bubbles: true }));
    });

    cy.log(`🔀 [${label}] chọn random → index=${index}, value="${randomOption.value}", text="${randomOption.innerText}"`);
  });
});

// ✅ Random time slot (08:00 → 18:00)
Cypress.Commands.add('getRandomSlot', () => {
  const hours = Math.floor(Math.random() * (18 - 8)) + 8; // 08h–17h
  const minutes = Math.random() > 0.5 ? 0 : 30;

  const startTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

  let endH = hours, endM = minutes + 30;
  if (endM >= 60) { endM -= 60; endH++; }
  endH += 1;
  const endTime = `${String(endH).padStart(2, '0')}:${String(endM).padStart(2, '0')}`;

  cy.log(`⏰ Random Slot: ${startTime} - ${endTime}`);

  // ✅ Dùng cy.wrap để trả về vào chain
  return cy.wrap({ startTime, endTime });
});

Cypress.Commands.add('logToFile', (message) => {
  const now = new Date();
  const fileName = `${now.toISOString().split('T')[0]}.log`; // e.g. 2025-09-10.log

  const time = now.toLocaleTimeString('en-GB');
  const timestampedMessage = `[${time}] ${message}`;

  cy.task('writeLogToFile', {
    fileName,
    content: timestampedMessage,
  });
});