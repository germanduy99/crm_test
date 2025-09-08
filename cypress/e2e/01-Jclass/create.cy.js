// ✅ Hàm custom để lấy body trong iframe
Cypress.Commands.add('getIframeBody', (iframeSelector) => {
  return cy
    .get(iframeSelector)
    .its('0.contentDocument.body').should('not.be.empty')
    .then(cy.wrap);
});

// ✅ Hàm random time slot (1.5h)
function getRandomSlot() {
  const hours = Math.floor(Math.random() * (18 - 8)) + 8; // 08h–17h
  const minutes = Math.random() > 0.5 ? 0 : 30;           // 00 hoặc 30

  const startHours = String(hours).padStart(2, '0');
  const startMinutes = String(minutes).padStart(2, '0');
  const startTime = `${startHours}:${startMinutes}`;

  // end = start + 1h30
  let endH = hours;
  let endM = minutes + 30;
  if (endM >= 60) {
    endM -= 60;
    endH++;
  }
  endH += 1;

  const endHours = String(endH).padStart(2, '0');
  const endMinutes = String(endM).padStart(2, '0');
  const endTime = `${endHours}:${endMinutes}`;

  return { startTime, endTime };
}

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

    // ✅ Input Class_name
    cy.getIframeBody('iframe#bwc-frame')
      .find('input#name[title="Class Name"]')
      .should('be.visible')
      .clear()
      .type('Class_name_Anhtt_Test_1', { force: true });

    // ✅ Chọn dropdowns
    cy.getIframeBody('iframe#bwc-frame').find('select#class_type').select('Group Class', { force: true });
    cy.getIframeBody('iframe#bwc-frame').find('select#teaching_method').select('Offline', { force: true });
    cy.getIframeBody('iframe#bwc-frame').find('select#kind_of_course').select('ACADEMIC STARTER', { force: true });
    cy.getIframeBody('iframe#bwc-frame').find('select#level').select('ACADEMIC STARTER_B', { force: true });

    // ✅ Random Start Date
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
        cy.log(`Random start date: ${formattedDate} → weekday: ${mainDay}`);

        const allDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        const numDays = Math.floor(Math.random() * 7) + 1;
        let selectedDays = [mainDay];
        const otherDays = allDays.filter(d => d !== mainDay);
        const shuffled = otherDays.sort(() => 0.5 - Math.random());
        selectedDays = selectedDays.concat(shuffled.slice(0, numDays - 1));

        cy.log(`Weekly Schedule sẽ chọn: ${selectedDays.join(', ')}`);

        selectedDays.forEach(day => {
          cy.getIframeBody('iframe#bwc-frame')
            .find('ul#ct_date li')
            .contains(day)
            .click({ force: true });
        });

        // ✅ Điền Time Slot cho mainDay
        const tsId = `#TS_${mainDay}`;
        const { startTime, endTime } = getRandomSlot();

        cy.getIframeBody('iframe#bwc-frame')
          .find(tsId)
          .should('be.visible')
          .within(() => {
            cy.get('select.select-activity')
              .find('option')
              .then(options => {
                const validValues = [...options].map(o => o.value).filter(v => v.trim() !== '');
                const randomValue = Cypress._.sample(validValues);
                cy.get('select.select-activity').select(randomValue, { force: true });
              });

            cy.get('input.time.start').clear().type(startTime, { force: true });
            cy.get('input.time.end').clear().type(endTime, { force: true });

            cy.get('button.copy-to-all').click({ force: true });
          });
  cy.wait(3000); // Chờ 1 giây để popup xuất hiện
// ✅ Sau khi click Copy to all
cy.get('div.jconfirm-box')        // container của popup
  .should('be.visible');

cy.get('button.btn.btn-blue')     // nút OK
  .should('be.visible')
  .click({ force: true });
      });
  });
});