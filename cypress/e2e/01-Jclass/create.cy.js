/// <reference types="cypress" />

describe('Create-Class', () => {
  before(() => {
    cy.visit('https://stagingcrm.scotsenglish.edu.vn');
    cy.get('input[name="username"]').type('anhtt@scotsenglish.com', { force: true });
    cy.get('input[name="password"]').type('Tienanh23997@', { force: true });
    cy.get('a[name="login_button"]').click({ force: true });
    cy.wait(3000);

    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      return false;
    });
  });

  it('Create_Class', () => {
    cy.get('i.far.fa-id-card-alt.moduleIcon').should('be.visible');
    cy.wait(3000);
    cy.get('i.far.fa-users-class.moduleIcon').click({ force: true });
    cy.get('a.btn.btn-primary[rel="tooltip"]').click();

    cy.task('queryDb', 'SELECT MAX(CAST(SUBSTRING_INDEX(name, ".", -1) AS UNSIGNED)) AS lastNum FROM j_class WHERE name LIKE "Cypress.Automation_Test.%"')
      .then(result => {
        const lastNum = result[0].lastNum || -1;
        const newNum = lastNum + 1;
        const className = `Cypress.Automation_Test.${newNum}`;

        const log = (action, message) => {
          const now = new Date();
          const date = now.toISOString().split('T')[0]; // YYYY-MM-DD
          const time = now.toLocaleTimeString('vi-VN');
          const content = `[${date} ${time}] [${action}] ${message}`;
          cy.task('writeLogToFile', {
            fileName: `${date}.log`,
            content,
          });
        };

        log('INFO', `Bắt đầu tạo class: ${className}`);

        cy.getIframeBody('iframe#bwc-frame')
          .find('input#name[title="Class Name"]')
          .should('be.visible')
          .clear()
          .type(className, { force: true });

        cy.selectRandomOption('iframe#bwc-frame', 'select#class_type', 'Class Type');
        cy.selectRandomOption('iframe#bwc-frame', 'select#teaching_method', 'Teaching Method');
        cy.selectRandomOption('iframe#bwc-frame', 'select#kind_of_course', 'Kind Of Course');
        cy.selectRandomOption('iframe#bwc-frame', 'select#level', 'Level');

        // Random ngày
        const dayMap = { 0: 'Sun', 1: 'Mon', 2: 'Tue', 3: 'Wed', 4: 'Thu', 5: 'Fri', 6: 'Sat' };
        function getRandomFutureDate() {
          const today = new Date();
          const daysToAdd = Math.floor(Math.random() * 10) + 1;
          today.setDate(today.getDate() + daysToAdd);
          return today;
        }

        const randomDate = getRandomFutureDate();
        const dd = String(randomDate.getDate()).padStart(2, '0');
        const mm = String(randomDate.getMonth() + 1).padStart(2, '0');
        const yyyy = randomDate.getFullYear();
        const formattedDate = `${dd}/${mm}/${yyyy}`;
        const weekday = randomDate.getDay();
        const mainDay = dayMap[weekday];

        cy.getIframeBody('iframe#bwc-frame')
          .find('input#start_date')
          .clear()
          .type(formattedDate, { force: true })
          .then(() => {
            log('INFO', `Ngày bắt đầu random: ${formattedDate} (${mainDay})`);

            // Weekly schedule
            const allDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
            const numDays = Math.floor(Math.random() * 7) + 1;
            let selectedDays = [mainDay];
            const otherDays = allDays.filter(d => d !== mainDay);
            const shuffled = otherDays.sort(() => 0.5 - Math.random());
            selectedDays = selectedDays.concat(shuffled.slice(0, numDays - 1));

            log('INFO', `Weekly Schedule: ${selectedDays.join(', ')}`);

            selectedDays.forEach(day => {
              cy.getIframeBody('iframe#bwc-frame')
                .find('ul#ct_date li')
                .contains(day)
                .click({ force: true });
            });

            const tsId = `#TS_${mainDay}`;

            cy.getRandomSlot().then(({ startTime, endTime }) => {
              log('INFO', `Time Slot: ${startTime} - ${endTime}`);

              cy.getIframeBody('iframe#bwc-frame')
                .find(tsId)
                .should('be.visible')
                .within(() => {
                  cy.get('select.select-activity').then($select => {
                    const allOptions = [...$select.find('option')];
                    const validOptions = allOptions.filter(o => {
                      const val = (o.value || '').toString().trim();
                      return val !== '' && !o.disabled && Cypress.$(o).is(':visible');
                    });

                    if (validOptions.length) {
                      const chosen = Cypress._.sample(validOptions);
                      const absoluteIndex = allOptions.indexOf(chosen);

                      cy.wrap($select).then($sel => {
                        $sel[0].selectedIndex = absoluteIndex;
                        $sel.trigger('change');
                      });

                      log('INFO', `Activity chọn: ${chosen.innerText} (value=${chosen.value})`);
                    } else {
                      log('WARN', 'Không tìm thấy activity hợp lệ');
                    }
                  });

                  cy.get('input.time.start').clear().type(startTime, { force: true });
                  cy.get('input.time.end').clear().type(endTime, { force: true });
                  cy.get('button.copy-to-all').click({ force: true });
                });

              cy.waitUntil(() =>
                cy.getIframeBody('iframe#bwc-frame').find('button.btn.btn-blue').should('be.visible'),
                { timeout: 10000, interval: 500 }
              );

              cy.getIframeBody('iframe#bwc-frame').find('button.btn.btn-blue').click({ force: true });

              cy.getIframeBody('iframe#bwc-frame')
                .find('input#SAVE_FOOTER.button.primary')
                .should('be.visible')
                .click({ force: true });

              log('SUCCESS', `Class đã được lưu: ${className}`);
            });
          });
      });
  });
});
