# Selector Library

Generated at: 2026-04-29T03:29:20.673Z
Base URL: https://stagingcrm.scotsenglish.edu.vn/index.php#Home
Pages captured: 25
Notes: Collector only reads/navigates UI and may open menus/dialogs without submitting forms. | Create/edit/delete/detail-like routes are intentionally skipped when they look risky.

## 1. Teacher Dashboard ‹ Home | Scots CRM
- URL: https://stagingcrm.scotsenglish.edu.vn/index.php#Home
- Headings: Teacher Dashboard Create Cancel Delete Save Cancel Save
- Elements captured: 481

| Kind | Label/Text | Role/Type | Candidate selectors |
|---|---|---|---|
| navigation | main module navigation | navigation | ul[role="navigation"]<br>ul[aria-label="main module navigation"]<br>ul.nav<br>ul.megamenu |
| link-or-menu | Home |  | a[aria-label="Home"]<br>a[href="#Home"]<br>a.cube<br>a.btn |
| button | Home - More | button | button[aria-label="Home - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Dashboard Activity Stream Manage Dashboards | menu | ul[role="menu"] |
| link-or-menu | Create Dashboard |  | a[href="#Home/create"]<br>a.ellipsis_inline<br>a:contains("Create Dashboard") |
| link-or-menu | Activity Stream |  | a[href="#activities"]<br>a.ellipsis_inline<br>a:contains("Activity Stream") |
| link-or-menu | Manage Dashboards |  | a[href="#Dashboards?moduleName=Home"]<br>a.ellipsis_inline<br>a:contains("Manage Dashboards") |
| link-or-menu | Calendar |  | a[aria-label="Calendar"]<br>a[href="#bwc/index.php?module=Calendar&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Calendar") |
| button | Calendar - More | button | #Calendar<br>button[aria-label="Calendar - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Meeting Schedule Call Create Task Today | menu | ul[role="menu"] |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Schedule Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Call") |
| link-or-menu | Create Task |  | a[href="#Tasks/create"]<br>a.ellipsis_inline<br>a:contains("Create Task") |
| link-or-menu | Today |  | a[href="#bwc/index.php?module=Calendar&action=index&view=day"]<br>a.ellipsis_inline<br>a:contains("Today") |
| link-or-menu | Targets |  | a[aria-label="Targets"]<br>a[href="#Prospects"]<br>a.btn<br>a.module-name<br>a:contains("Targets") |
| button | Targets - More | button | #Prospects<br>button[aria-label="Targets - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Target Create Target From vCard View Targets Import Targets | menu | ul[role="menu"] |
| link-or-menu | Create Target |  | a[href="#Prospects/create"]<br>a.ellipsis_inline<br>a:contains("Create Target") |
| link-or-menu | Create Target From vCard |  | a[href="#Prospects/vcard-import"]<br>a.ellipsis_inline<br>a:contains("Create Target From vCard") |
| link-or-menu | View Targets |  | a[href="#Prospects"]<br>a.ellipsis_inline<br>a:contains("View Targets") |
| link-or-menu | Import Targets |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Prospects&return_module=Prospects&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Targets") |
| link-or-menu | Leads |  | a[aria-label="Leads"]<br>a[href="#Leads"]<br>a.btn<br>a.module-name<br>a:contains("Leads") |
| button | Leads - More | button | #Leads<br>button[aria-label="Leads - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Lead View Leads View Lead Reports Import Leads | menu | ul[role="menu"] |
| link-or-menu | Create Lead |  | a[href="#Leads/create"]<br>a.ellipsis_inline<br>a:contains("Create Lead") |
| link-or-menu | View Leads |  | a[href="#Leads"]<br>a.ellipsis_inline<br>a:contains("View Leads") |
| link-or-menu | View Lead Reports |  | a[href="#Reports?filterModule=Leads"]<br>a.ellipsis_inline<br>a:contains("View Lead Reports") |
| link-or-menu | Import Leads |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Leads&return_module=Leads&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Leads") |
| link-or-menu | Students |  | a[aria-label="Students"]<br>a[href="#Contacts"]<br>a.btn<br>a.module-name<br>a:contains("Students") |
| button | Students - More | button | #Contacts<br>button[aria-label="Students - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Student View Students View Student Reports Import Students Send SMS | menu | ul[role="menu"] |
| link-or-menu | Create Student |  | a[href="#Contacts/create"]<br>a.ellipsis_inline<br>a:contains("Create Student") |
| link-or-menu | View Students |  | a[href="#Contacts"]<br>a.ellipsis_inline<br>a:contains("View Students") |
| link-or-menu | View Student Reports |  | a[href="#Reports?filterModule=Contacts"]<br>a.ellipsis_inline<br>a:contains("View Student Reports") |
| link-or-menu | Import Students |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Contacts&return_module=Contacts&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Students") |
| link-or-menu | Send SMS |  | a[href="#bwc/index.php?module=C_SMS&action=sendSMS"]<br>a.ellipsis_inline<br>a:contains("Send SMS") |
| link-or-menu | Sale Orders |  | a[aria-label="Sale Orders"]<br>a[href="#Quotes"]<br>a.btn<br>a.module-name<br>a:contains("Sale Orders") |
| button | Sale Orders - More | button | #Quotes<br>button[aria-label="Sale Orders - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Sale Order View Sale Orders View Sale Order Reports | menu | ul[role="menu"] |
| link-or-menu | Create Sale Order |  | a[href="#Quotes/create"]<br>a.ellipsis_inline<br>a:contains("Create Sale Order") |
| link-or-menu | View Sale Orders |  | a[href="#Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Orders") |
| link-or-menu | View Sale Order Reports |  | a[href="#Reports?filterModule=Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Order Reports") |
| link-or-menu | Classes |  | a[aria-label="Classes"]<br>a[href="#J_Class"]<br>a.btn<br>a.module-name<br>a:contains("Classes") |
| button | Classes - More | button | #J_Class<br>button[aria-label="Classes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Class View Classes View on Calendar Import Scheduler | menu | ul[role="menu"] |
| link-or-menu | Create Class |  | a[href="#J_Class/create"]<br>a.ellipsis_inline<br>a:contains("Create Class") |
| link-or-menu | View Classes |  | a[href="#J_Class"]<br>a.ellipsis_inline<br>a:contains("View Classes") |
| link-or-menu | View on Calendar |  | a[href="#bwc/index.php?module=Calendar&action=index&view=week"]<br>a.ellipsis_inline<br>a:contains("View on Calendar") |
| link-or-menu | Import Scheduler |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Meetings&return_module=Meetings&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Scheduler") |
| link-or-menu | Schedules |  | a[aria-label="Schedules"]<br>a[href="#Meetings"]<br>a.btn<br>a.module-name<br>a:contains("Schedules") |
| button | Schedules - More | button | #Meetings<br>button[aria-label="Schedules - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Placement Test Schedule Demo Schedule Meeting | menu | ul[role="menu"] |
| link-or-menu | Schedule Placement Test |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=PT"]<br>a.ellipsis_inline<br>a:contains("Schedule Placement Test") |
| link-or-menu | Schedule Demo |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=Demo"]<br>a.ellipsis_inline<br>a:contains("Schedule Demo") |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Reports |  | a[aria-label="Reports"]<br>a[href="#Reports"]<br>a.btn<br>a.module-name<br>a:contains("Reports") |
| button | Reports - More | button | #Reports<br>button[aria-label="Reports - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Report View Reports Report Schedules | menu | ul[role="menu"] |
| link-or-menu | Create Report |  | a[href="#bwc/index.php?module=Reports&report_module=&action=index&page=report&Create+Custom+Report=Create+Custom+Report"]<br>a.ellipsis_inline<br>a:contains("Create Report") |
| link-or-menu | View Reports |  | a[href="#Reports"]<br>a.ellipsis_inline<br>a:contains("View Reports") |
| link-or-menu | Report Schedules |  | a[href="#ReportSchedules"]<br>a.ellipsis_inline<br>a:contains("Report Schedules") |
| link-or-menu | Loyalty |  | a[aria-label="Loyalty"]<br>a[href="#J_Loyalty"]<br>a.btn<br>a.module-name<br>a:contains("Loyalty") |
| button | Loyalty - More | button | #J_Loyalty<br>button[aria-label="Loyalty - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Loyalty View Loyalty Import Loyalty | menu | ul[role="menu"] |
| link-or-menu | Create Loyalty |  | a[href="#J_Loyalty/create"]<br>a.ellipsis_inline<br>a:contains("Create Loyalty") |
| link-or-menu | View Loyalty |  | a[href="#J_Loyalty"]<br>a.ellipsis_inline<br>a:contains("View Loyalty") |
| link-or-menu | Import Loyalty |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Loyalty&return_module=J_Loyalty&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Loyalty") |
| link-or-menu | Teachers |  | a[aria-label="Teachers"]<br>a[href="#C_Teachers"]<br>a.btn<br>a.module-name<br>a:contains("Teachers") |
| button | Teachers - More | button | #C_Teachers<br>button[aria-label="Teachers - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Create TA View Teachers Import Teachers | menu | ul[role="menu"] |
| link-or-menu | Create Teacher |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=Teacher"]<br>a.ellipsis_inline<br>a:contains("Create Teacher") |
| link-or-menu | Create TA |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=TA"]<br>a.ellipsis_inline<br>a:contains("Create TA") |
| link-or-menu | View Teachers |  | a[href="#C_Teachers"]<br>a.ellipsis_inline<br>a:contains("View Teachers") |
| link-or-menu | Import Teachers |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Teachers&return_module=C_Teachers&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teachers") |
| link-or-menu | Approval Processes |  | a[aria-label="Approval Processes"]<br>a[href="#ApprovalProcesses"]<br>a.btn<br>a.module-name<br>a:contains("Approval Processes") |
| button | Approval Processes - More | button | #ApprovalProcesses<br>button[aria-label="Approval Processes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Approval Processes | menu | ul[role="menu"] |
| link-or-menu | Approval Processes |  | a[href="#ApprovalProcesses/layout/approvalList"]<br>a.ellipsis_inline<br>a:contains("Approval Processes") |
| link-or-menu | Accounts |  | a[aria-label="Accounts"]<br>a[href="#Accounts"]<br>a.btn<br>a.module-name<br>a:contains("Accounts") |
| button | Accounts - More | button | #Accounts<br>button[aria-label="Accounts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Account View Accounts View Account Reports Import Accounts | menu | ul[role="menu"] |
| link-or-menu | Create Account |  | a[href="#Accounts/create"]<br>a.ellipsis_inline<br>a:contains("Create Account") |
| link-or-menu | View Accounts |  | a[href="#Accounts"]<br>a.ellipsis_inline<br>a:contains("View Accounts") |
| link-or-menu | View Account Reports |  | a[href="#Reports?filterModule=Accounts"]<br>a.ellipsis_inline<br>a:contains("View Account Reports") |
| link-or-menu | Import Accounts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Accounts"]<br>a.ellipsis_inline<br>a:contains("Import Accounts") |
| link-or-menu | Rooms |  | a[aria-label="Rooms"]<br>a[href="#C_Rooms"]<br>a.btn<br>a.module-name<br>a:contains("Rooms") |
| button | Rooms - More | button | #C_Rooms<br>button[aria-label="Rooms - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Room View Rooms Import Rooms | menu | ul[role="menu"] |
| link-or-menu | Create Room |  | a[href="#C_Rooms/create"]<br>a.ellipsis_inline<br>a:contains("Create Room") |
| link-or-menu | View Rooms |  | a[href="#C_Rooms"]<br>a.ellipsis_inline<br>a:contains("View Rooms") |
| link-or-menu | Import Rooms |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Rooms&return_module=C_Rooms&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Rooms") |
| link-or-menu | Teacher Contracts |  | a[aria-label="Teacher Contracts"]<br>a[href="#J_Teachercontract"]<br>a.btn<br>a.module-name<br>a:contains("Teacher Contracts") |
| button | Teacher Contracts - More | button | #J_Teachercontract<br>button[aria-label="Teacher Contracts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Contract View Teacher Contracts Import Teacher Contracts | menu | ul[role="menu"] |
| link-or-menu | Create Teacher Contract |  | a[href="#J_Teachercontract/create"]<br>a.ellipsis_inline<br>a:contains("Create Teacher Contract") |
| link-or-menu | View Teacher Contracts |  | a[href="#J_Teachercontract"]<br>a.ellipsis_inline<br>a:contains("View Teacher Contracts") |
| link-or-menu | Import Teacher Contracts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Teachercontract&return_module=J_Teachercontract&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teacher Contracts") |
| link-or-menu | Kind Of Courses |  | a[aria-label="Kind Of Courses"]<br>a[href="#J_Kindofcourse"]<br>a.btn<br>a.module-name<br>a:contains("Kind Of Courses") |
| button | Kind Of Courses - More | button | #J_Kindofcourse<br>button[aria-label="Kind Of Courses - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Kind Of Course View Kind Of Courses Import Kind Of Courses | menu | ul[role="menu"] |
| link-or-menu | Create Kind Of Course |  | a[href="#J_Kindofcourse/create"]<br>a.ellipsis_inline<br>a:contains("Create Kind Of Course") |
| link-or-menu | View Kind Of Courses |  | a[href="#J_Kindofcourse"]<br>a.ellipsis_inline<br>a:contains("View Kind Of Courses") |
| link-or-menu | Import Kind Of Courses |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Kindofcourse&return_module=J_Kindofcourse&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Kind Of Courses") |
| link-or-menu | Activities |  | a[aria-label="Activities"]<br>a[href="#M_Activities"]<br>a.btn<br>a.module-name<br>a:contains("Activities") |
| button | Activities - More | button | #M_Activities<br>button[aria-label="Activities - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Activities View Activities Import Syllabus | menu | ul[role="menu"] |
| link-or-menu | Create Activities |  | a[href="#M_Activities/create"]<br>a.ellipsis_inline<br>a:contains("Create Activities") |
| link-or-menu | View Activities |  | a[href="#M_Activities"]<br>a.ellipsis_inline<br>a:contains("View Activities") |
| link-or-menu | Import Syllabus |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Syllabus&query=true&report_module=M_Activities"]<br>a.ellipsis_inline<br>a:contains("Import Syllabus") |
| link-or-menu | Work permit |  | a[aria-label="Work permit"]<br>a[href="#J_Workpermit"]<br>a.btn<br>a.module-name<br>a:contains("Work permit") |
| button | Work permit - More | button | #J_Workpermit<br>button[aria-label="Work permit - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Work permit View Work permit | menu | ul[role="menu"] |
| link-or-menu | Create Work permit |  | a[href="#J_Workpermit/create"]<br>a.ellipsis_inline<br>a:contains("Create Work permit") |
| link-or-menu | View Work permit |  | a[href="#J_Workpermit"]<br>a.ellipsis_inline<br>a:contains("View Work permit") |
| link-or-menu | Gallery |  | a[aria-label="Gallery"]<br>a[href="#C_Gallery"]<br>a.btn<br>a.module-name<br>a:contains("Gallery") |
| button | Gallery - More | button | #C_Gallery<br>button[aria-label="Gallery - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gallery View Gallery | menu | ul[role="menu"] |
| link-or-menu | Create Gallery |  | a[href="#C_Gallery/create"]<br>a.ellipsis_inline<br>a:contains("Create Gallery") |
| link-or-menu | View Gallery |  | a[href="#C_Gallery"]<br>a.ellipsis_inline<br>a:contains("View Gallery") |
| link-or-menu | Gradebooks |  | a[aria-label="Gradebooks"]<br>a[href="#J_Gradebook"]<br>a.btn<br>a.module-name<br>a:contains("Gradebooks") |
| button | Gradebooks - More | button | #J_Gradebook<br>button[aria-label="Gradebooks - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | View Gradebooks | menu | ul[role="menu"] |
| link-or-menu | View Gradebooks |  | a[href="#J_Gradebook"]<br>a.ellipsis_inline<br>a:contains("View Gradebooks") |
| link-or-menu | Gradebook Settings |  | a[aria-label="Gradebook Settings"]<br>a[href="#J_GradebookConfig"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Settings") |
| button | Gradebook Settings - More | button | #J_GradebookConfig<br>button[aria-label="Gradebook Settings - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting View Gradebook Settings | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting |  | a[href="#J_GradebookConfig/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting") |
| link-or-menu | View Gradebook Settings |  | a[href="#J_GradebookConfig"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Settings") |
| link-or-menu | Gradebook Setting Groups |  | a[aria-label="Gradebook Setting Groups"]<br>a[href="#J_GradebookSettingGroup"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Setting Groups") |
| button | Gradebook Setting Groups - More | button | #J_GradebookSettingGroup<br>button[aria-label="Gradebook Setting Groups - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting Group View Gradebook Setting Groups | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting Group |  | a[href="#J_GradebookSettingGroup/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting Group") |
| link-or-menu | View Gradebook Setting Groups |  | a[href="#J_GradebookSettingGroup"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Setting Groups") |
| link-or-menu | Admin Hours |  | a[aria-label="Admin Hours"]<br>a[href="#bwc/index.php?module=C_Timesheet&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Admin Hours") |
| link-or-menu | Campaigns |  | a[aria-label="Campaigns"]<br>a[href="#bwc/index.php?module=Campaigns&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Campaigns") |
| button | Campaigns - More | button | #Campaigns<br>button[aria-label="Campaigns - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Campaign (Wizard) Create Campaign (Classic) View Campaigns View Newsletters Create Email Template View Email Temp | menu | ul[role="menu"] |
| link-or-menu | Create Campaign (Wizard) |  | a[href="#bwc/index.php?module=Campaigns&action=WizardHome&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Wizard)") |
| link-or-menu | Create Campaign (Classic) |  | a[href="#bwc/index.php?module=Campaigns&action=EditView&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Classic)") |
| link-or-menu | View Campaigns |  | a[href="#bwc/index.php?module=Campaigns&action=index&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Campaigns") |
| link-or-menu | View Newsletters |  | a[href="#bwc/index.php?module=Campaigns&action=newsletterlist&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Newsletters") |
| link-or-menu | Create Email Template |  | a[href="#bwc/index.php?module=EmailTemplates&action=EditView&return_module=EmailTemplates&return_action=DetailView"]<br>a.ellipsis_inline<br>a:contains("Create Email Template") |
| link-or-menu | View Email Templates |  | a[href="#bwc/index.php?module=EmailTemplates&action=index"]<br>a.ellipsis_inline<br>a:contains("View Email Templates") |
| link-or-menu | Set Up Email |  | a[href="#bwc/index.php?module=Campaigns&action=WizardEmailSetup&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Set Up Email") |
| link-or-menu | View Diagnostics |  | a[href="#bwc/index.php?module=Campaigns&action=CampaignDiagnostic&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Diagnostics") |
| link-or-menu | Create Lead Form |  | a[href="#bwc/index.php?module=Campaigns&action=WebToLeadCreation&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Lead Form") |
| link-or-menu | Calls |  | a[aria-label="Calls"]<br>a[href="#Calls"]<br>a.btn<br>a.module-name<br>a:contains("Calls") |
| button | Calls - More | button | #Calls<br>button[aria-label="Calls - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Log Call View Calls Import Calls Activities Report | menu | ul[role="menu"] |
| link-or-menu | Log Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Log Call") |

## 2. Activity Stream | Scots CRM
- URL: https://stagingcrm.scotsenglish.edu.vn/index.php#activities
- Headings: Activity Stream | No dashboard configured.
- Elements captured: 388

| Kind | Label/Text | Role/Type | Candidate selectors |
|---|---|---|---|
| navigation | main module navigation | navigation | ul[role="navigation"]<br>ul[aria-label="main module navigation"]<br>ul.nav<br>ul.megamenu |
| link-or-menu | Home |  | a[aria-label="Home"]<br>a[href="#Home"]<br>a.cube<br>a.btn |
| button | Home - More | button | button[aria-label="Home - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Dashboard Activity Stream Manage Dashboards | menu | ul[role="menu"] |
| link-or-menu | Create Dashboard |  | a[href="#Home/create"]<br>a.ellipsis_inline<br>a:contains("Create Dashboard") |
| link-or-menu | Activity Stream |  | a[href="#activities"]<br>a.ellipsis_inline<br>a:contains("Activity Stream") |
| link-or-menu | Manage Dashboards |  | a[href="#Dashboards?moduleName=Home"]<br>a.ellipsis_inline<br>a:contains("Manage Dashboards") |
| link-or-menu | Calendar |  | a[aria-label="Calendar"]<br>a[href="#bwc/index.php?module=Calendar&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Calendar") |
| button | Calendar - More | button | #Calendar<br>button[aria-label="Calendar - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Meeting Schedule Call Create Task Today | menu | ul[role="menu"] |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Schedule Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Call") |
| link-or-menu | Create Task |  | a[href="#Tasks/create"]<br>a.ellipsis_inline<br>a:contains("Create Task") |
| link-or-menu | Today |  | a[href="#bwc/index.php?module=Calendar&action=index&view=day"]<br>a.ellipsis_inline<br>a:contains("Today") |
| link-or-menu | Targets |  | a[aria-label="Targets"]<br>a[href="#Prospects"]<br>a.btn<br>a.module-name<br>a:contains("Targets") |
| button | Targets - More | button | #Prospects<br>button[aria-label="Targets - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Target Create Target From vCard View Targets Import Targets | menu | ul[role="menu"] |
| link-or-menu | Create Target |  | a[href="#Prospects/create"]<br>a.ellipsis_inline<br>a:contains("Create Target") |
| link-or-menu | Create Target From vCard |  | a[href="#Prospects/vcard-import"]<br>a.ellipsis_inline<br>a:contains("Create Target From vCard") |
| link-or-menu | View Targets |  | a[href="#Prospects"]<br>a.ellipsis_inline<br>a:contains("View Targets") |
| link-or-menu | Import Targets |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Prospects&return_module=Prospects&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Targets") |
| link-or-menu | Leads |  | a[aria-label="Leads"]<br>a[href="#Leads"]<br>a.btn<br>a.module-name<br>a:contains("Leads") |
| button | Leads - More | button | #Leads<br>button[aria-label="Leads - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Lead View Leads View Lead Reports Import Leads | menu | ul[role="menu"] |
| link-or-menu | Create Lead |  | a[href="#Leads/create"]<br>a.ellipsis_inline<br>a:contains("Create Lead") |
| link-or-menu | View Leads |  | a[href="#Leads"]<br>a.ellipsis_inline<br>a:contains("View Leads") |
| link-or-menu | View Lead Reports |  | a[href="#Reports?filterModule=Leads"]<br>a.ellipsis_inline<br>a:contains("View Lead Reports") |
| link-or-menu | Import Leads |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Leads&return_module=Leads&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Leads") |
| link-or-menu | Students |  | a[aria-label="Students"]<br>a[href="#Contacts"]<br>a.btn<br>a.module-name<br>a:contains("Students") |
| button | Students - More | button | #Contacts<br>button[aria-label="Students - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Student View Students View Student Reports Import Students Send SMS | menu | ul[role="menu"] |
| link-or-menu | Create Student |  | a[href="#Contacts/create"]<br>a.ellipsis_inline<br>a:contains("Create Student") |
| link-or-menu | View Students |  | a[href="#Contacts"]<br>a.ellipsis_inline<br>a:contains("View Students") |
| link-or-menu | View Student Reports |  | a[href="#Reports?filterModule=Contacts"]<br>a.ellipsis_inline<br>a:contains("View Student Reports") |
| link-or-menu | Import Students |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Contacts&return_module=Contacts&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Students") |
| link-or-menu | Send SMS |  | a[href="#bwc/index.php?module=C_SMS&action=sendSMS"]<br>a.ellipsis_inline<br>a:contains("Send SMS") |
| link-or-menu | Sale Orders |  | a[aria-label="Sale Orders"]<br>a[href="#Quotes"]<br>a.btn<br>a.module-name<br>a:contains("Sale Orders") |
| button | Sale Orders - More | button | #Quotes<br>button[aria-label="Sale Orders - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Sale Order View Sale Orders View Sale Order Reports | menu | ul[role="menu"] |
| link-or-menu | Create Sale Order |  | a[href="#Quotes/create"]<br>a.ellipsis_inline<br>a:contains("Create Sale Order") |
| link-or-menu | View Sale Orders |  | a[href="#Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Orders") |
| link-or-menu | View Sale Order Reports |  | a[href="#Reports?filterModule=Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Order Reports") |
| link-or-menu | Classes |  | a[aria-label="Classes"]<br>a[href="#J_Class"]<br>a.btn<br>a.module-name<br>a:contains("Classes") |
| button | Classes - More | button | #J_Class<br>button[aria-label="Classes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Class View Classes View on Calendar Import Scheduler | menu | ul[role="menu"] |
| link-or-menu | Create Class |  | a[href="#J_Class/create"]<br>a.ellipsis_inline<br>a:contains("Create Class") |
| link-or-menu | View Classes |  | a[href="#J_Class"]<br>a.ellipsis_inline<br>a:contains("View Classes") |
| link-or-menu | View on Calendar |  | a[href="#bwc/index.php?module=Calendar&action=index&view=week"]<br>a.ellipsis_inline<br>a:contains("View on Calendar") |
| link-or-menu | Import Scheduler |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Meetings&return_module=Meetings&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Scheduler") |
| link-or-menu | Schedules |  | a[aria-label="Schedules"]<br>a[href="#Meetings"]<br>a.btn<br>a.module-name<br>a:contains("Schedules") |
| button | Schedules - More | button | #Meetings<br>button[aria-label="Schedules - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Placement Test Schedule Demo Schedule Meeting | menu | ul[role="menu"] |
| link-or-menu | Schedule Placement Test |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=PT"]<br>a.ellipsis_inline<br>a:contains("Schedule Placement Test") |
| link-or-menu | Schedule Demo |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=Demo"]<br>a.ellipsis_inline<br>a:contains("Schedule Demo") |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Reports |  | a[aria-label="Reports"]<br>a[href="#Reports"]<br>a.btn<br>a.module-name<br>a:contains("Reports") |
| button | Reports - More | button | #Reports<br>button[aria-label="Reports - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Report View Reports Report Schedules | menu | ul[role="menu"] |
| link-or-menu | Create Report |  | a[href="#bwc/index.php?module=Reports&report_module=&action=index&page=report&Create+Custom+Report=Create+Custom+Report"]<br>a.ellipsis_inline<br>a:contains("Create Report") |
| link-or-menu | View Reports |  | a[href="#Reports"]<br>a.ellipsis_inline<br>a:contains("View Reports") |
| link-or-menu | Report Schedules |  | a[href="#ReportSchedules"]<br>a.ellipsis_inline<br>a:contains("Report Schedules") |
| link-or-menu | Loyalty |  | a[aria-label="Loyalty"]<br>a[href="#J_Loyalty"]<br>a.btn<br>a.module-name<br>a:contains("Loyalty") |
| button | Loyalty - More | button | #J_Loyalty<br>button[aria-label="Loyalty - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Loyalty View Loyalty Import Loyalty | menu | ul[role="menu"] |
| link-or-menu | Create Loyalty |  | a[href="#J_Loyalty/create"]<br>a.ellipsis_inline<br>a:contains("Create Loyalty") |
| link-or-menu | View Loyalty |  | a[href="#J_Loyalty"]<br>a.ellipsis_inline<br>a:contains("View Loyalty") |
| link-or-menu | Import Loyalty |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Loyalty&return_module=J_Loyalty&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Loyalty") |
| link-or-menu | Teachers |  | a[aria-label="Teachers"]<br>a[href="#C_Teachers"]<br>a.btn<br>a.module-name<br>a:contains("Teachers") |
| button | Teachers - More | button | #C_Teachers<br>button[aria-label="Teachers - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Create TA View Teachers Import Teachers | menu | ul[role="menu"] |
| link-or-menu | Create Teacher |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=Teacher"]<br>a.ellipsis_inline<br>a:contains("Create Teacher") |
| link-or-menu | Create TA |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=TA"]<br>a.ellipsis_inline<br>a:contains("Create TA") |
| link-or-menu | View Teachers |  | a[href="#C_Teachers"]<br>a.ellipsis_inline<br>a:contains("View Teachers") |
| link-or-menu | Import Teachers |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Teachers&return_module=C_Teachers&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teachers") |
| link-or-menu | Approval Processes |  | a[aria-label="Approval Processes"]<br>a[href="#ApprovalProcesses"]<br>a.btn<br>a.module-name<br>a:contains("Approval Processes") |
| button | Approval Processes - More | button | #ApprovalProcesses<br>button[aria-label="Approval Processes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Approval Processes | menu | ul[role="menu"] |
| link-or-menu | Approval Processes |  | a[href="#ApprovalProcesses/layout/approvalList"]<br>a.ellipsis_inline<br>a:contains("Approval Processes") |
| link-or-menu | Accounts |  | a[aria-label="Accounts"]<br>a[href="#Accounts"]<br>a.btn<br>a.module-name<br>a:contains("Accounts") |
| button | Accounts - More | button | #Accounts<br>button[aria-label="Accounts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Account View Accounts View Account Reports Import Accounts | menu | ul[role="menu"] |
| link-or-menu | Create Account |  | a[href="#Accounts/create"]<br>a.ellipsis_inline<br>a:contains("Create Account") |
| link-or-menu | View Accounts |  | a[href="#Accounts"]<br>a.ellipsis_inline<br>a:contains("View Accounts") |
| link-or-menu | View Account Reports |  | a[href="#Reports?filterModule=Accounts"]<br>a.ellipsis_inline<br>a:contains("View Account Reports") |
| link-or-menu | Import Accounts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Accounts"]<br>a.ellipsis_inline<br>a:contains("Import Accounts") |
| link-or-menu | Rooms |  | a[aria-label="Rooms"]<br>a[href="#C_Rooms"]<br>a.btn<br>a.module-name<br>a:contains("Rooms") |
| button | Rooms - More | button | #C_Rooms<br>button[aria-label="Rooms - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Room View Rooms Import Rooms | menu | ul[role="menu"] |
| link-or-menu | Create Room |  | a[href="#C_Rooms/create"]<br>a.ellipsis_inline<br>a:contains("Create Room") |
| link-or-menu | View Rooms |  | a[href="#C_Rooms"]<br>a.ellipsis_inline<br>a:contains("View Rooms") |
| link-or-menu | Import Rooms |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Rooms&return_module=C_Rooms&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Rooms") |
| link-or-menu | Teacher Contracts |  | a[aria-label="Teacher Contracts"]<br>a[href="#J_Teachercontract"]<br>a.btn<br>a.module-name<br>a:contains("Teacher Contracts") |
| button | Teacher Contracts - More | button | #J_Teachercontract<br>button[aria-label="Teacher Contracts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Contract View Teacher Contracts Import Teacher Contracts | menu | ul[role="menu"] |
| link-or-menu | Create Teacher Contract |  | a[href="#J_Teachercontract/create"]<br>a.ellipsis_inline<br>a:contains("Create Teacher Contract") |
| link-or-menu | View Teacher Contracts |  | a[href="#J_Teachercontract"]<br>a.ellipsis_inline<br>a:contains("View Teacher Contracts") |
| link-or-menu | Import Teacher Contracts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Teachercontract&return_module=J_Teachercontract&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teacher Contracts") |
| link-or-menu | Kind Of Courses |  | a[aria-label="Kind Of Courses"]<br>a[href="#J_Kindofcourse"]<br>a.btn<br>a.module-name<br>a:contains("Kind Of Courses") |
| button | Kind Of Courses - More | button | #J_Kindofcourse<br>button[aria-label="Kind Of Courses - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Kind Of Course View Kind Of Courses Import Kind Of Courses | menu | ul[role="menu"] |
| link-or-menu | Create Kind Of Course |  | a[href="#J_Kindofcourse/create"]<br>a.ellipsis_inline<br>a:contains("Create Kind Of Course") |
| link-or-menu | View Kind Of Courses |  | a[href="#J_Kindofcourse"]<br>a.ellipsis_inline<br>a:contains("View Kind Of Courses") |
| link-or-menu | Import Kind Of Courses |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Kindofcourse&return_module=J_Kindofcourse&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Kind Of Courses") |
| link-or-menu | Activities |  | a[aria-label="Activities"]<br>a[href="#M_Activities"]<br>a.btn<br>a.module-name<br>a:contains("Activities") |
| button | Activities - More | button | #M_Activities<br>button[aria-label="Activities - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Activities View Activities Import Syllabus | menu | ul[role="menu"] |
| link-or-menu | Create Activities |  | a[href="#M_Activities/create"]<br>a.ellipsis_inline<br>a:contains("Create Activities") |
| link-or-menu | View Activities |  | a[href="#M_Activities"]<br>a.ellipsis_inline<br>a:contains("View Activities") |
| link-or-menu | Import Syllabus |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Syllabus&query=true&report_module=M_Activities"]<br>a.ellipsis_inline<br>a:contains("Import Syllabus") |
| link-or-menu | Work permit |  | a[aria-label="Work permit"]<br>a[href="#J_Workpermit"]<br>a.btn<br>a.module-name<br>a:contains("Work permit") |
| button | Work permit - More | button | #J_Workpermit<br>button[aria-label="Work permit - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Work permit View Work permit | menu | ul[role="menu"] |
| link-or-menu | Create Work permit |  | a[href="#J_Workpermit/create"]<br>a.ellipsis_inline<br>a:contains("Create Work permit") |
| link-or-menu | View Work permit |  | a[href="#J_Workpermit"]<br>a.ellipsis_inline<br>a:contains("View Work permit") |
| link-or-menu | Gallery |  | a[aria-label="Gallery"]<br>a[href="#C_Gallery"]<br>a.btn<br>a.module-name<br>a:contains("Gallery") |
| button | Gallery - More | button | #C_Gallery<br>button[aria-label="Gallery - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gallery View Gallery | menu | ul[role="menu"] |
| link-or-menu | Create Gallery |  | a[href="#C_Gallery/create"]<br>a.ellipsis_inline<br>a:contains("Create Gallery") |
| link-or-menu | View Gallery |  | a[href="#C_Gallery"]<br>a.ellipsis_inline<br>a:contains("View Gallery") |
| link-or-menu | Gradebooks |  | a[aria-label="Gradebooks"]<br>a[href="#J_Gradebook"]<br>a.btn<br>a.module-name<br>a:contains("Gradebooks") |
| button | Gradebooks - More | button | #J_Gradebook<br>button[aria-label="Gradebooks - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | View Gradebooks | menu | ul[role="menu"] |
| link-or-menu | View Gradebooks |  | a[href="#J_Gradebook"]<br>a.ellipsis_inline<br>a:contains("View Gradebooks") |
| link-or-menu | Gradebook Settings |  | a[aria-label="Gradebook Settings"]<br>a[href="#J_GradebookConfig"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Settings") |
| button | Gradebook Settings - More | button | #J_GradebookConfig<br>button[aria-label="Gradebook Settings - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting View Gradebook Settings | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting |  | a[href="#J_GradebookConfig/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting") |
| link-or-menu | View Gradebook Settings |  | a[href="#J_GradebookConfig"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Settings") |
| link-or-menu | Gradebook Setting Groups |  | a[aria-label="Gradebook Setting Groups"]<br>a[href="#J_GradebookSettingGroup"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Setting Groups") |
| button | Gradebook Setting Groups - More | button | #J_GradebookSettingGroup<br>button[aria-label="Gradebook Setting Groups - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting Group View Gradebook Setting Groups | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting Group |  | a[href="#J_GradebookSettingGroup/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting Group") |
| link-or-menu | View Gradebook Setting Groups |  | a[href="#J_GradebookSettingGroup"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Setting Groups") |
| link-or-menu | Admin Hours |  | a[aria-label="Admin Hours"]<br>a[href="#bwc/index.php?module=C_Timesheet&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Admin Hours") |
| link-or-menu | Campaigns |  | a[aria-label="Campaigns"]<br>a[href="#bwc/index.php?module=Campaigns&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Campaigns") |
| button | Campaigns - More | button | #Campaigns<br>button[aria-label="Campaigns - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Campaign (Wizard) Create Campaign (Classic) View Campaigns View Newsletters Create Email Template View Email Temp | menu | ul[role="menu"] |
| link-or-menu | Create Campaign (Wizard) |  | a[href="#bwc/index.php?module=Campaigns&action=WizardHome&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Wizard)") |
| link-or-menu | Create Campaign (Classic) |  | a[href="#bwc/index.php?module=Campaigns&action=EditView&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Classic)") |
| link-or-menu | View Campaigns |  | a[href="#bwc/index.php?module=Campaigns&action=index&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Campaigns") |
| link-or-menu | View Newsletters |  | a[href="#bwc/index.php?module=Campaigns&action=newsletterlist&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Newsletters") |
| link-or-menu | Create Email Template |  | a[href="#bwc/index.php?module=EmailTemplates&action=EditView&return_module=EmailTemplates&return_action=DetailView"]<br>a.ellipsis_inline<br>a:contains("Create Email Template") |
| link-or-menu | View Email Templates |  | a[href="#bwc/index.php?module=EmailTemplates&action=index"]<br>a.ellipsis_inline<br>a:contains("View Email Templates") |
| link-or-menu | Set Up Email |  | a[href="#bwc/index.php?module=Campaigns&action=WizardEmailSetup&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Set Up Email") |
| link-or-menu | View Diagnostics |  | a[href="#bwc/index.php?module=Campaigns&action=CampaignDiagnostic&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Diagnostics") |
| link-or-menu | Create Lead Form |  | a[href="#bwc/index.php?module=Campaigns&action=WebToLeadCreation&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Lead Form") |
| link-or-menu | Calls |  | a[aria-label="Calls"]<br>a[href="#Calls"]<br>a.btn<br>a.module-name<br>a:contains("Calls") |
| button | Calls - More | button | #Calls<br>button[aria-label="Calls - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Log Call View Calls Import Calls Activities Report | menu | ul[role="menu"] |
| link-or-menu | Log Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Log Call") |

## 3. Dashboards | Scots CRM
- URL: https://stagingcrm.scotsenglish.edu.vn/index.php#Dashboards?moduleName=Home
- Headings: Dashboards (4)
- Elements captured: 443

| Kind | Label/Text | Role/Type | Candidate selectors |
|---|---|---|---|
| navigation | main module navigation | navigation | ul[role="navigation"]<br>ul[aria-label="main module navigation"]<br>ul.nav<br>ul.megamenu |
| link-or-menu | Home |  | a[aria-label="Home"]<br>a[href="#Home"]<br>a.cube<br>a.btn |
| button | Home - More | button | button[aria-label="Home - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Dashboard Activity Stream Manage Dashboards | menu | ul[role="menu"] |
| link-or-menu | Create Dashboard |  | a[href="#Home/create"]<br>a.ellipsis_inline<br>a:contains("Create Dashboard") |
| link-or-menu | Activity Stream |  | a[href="#activities"]<br>a.ellipsis_inline<br>a:contains("Activity Stream") |
| link-or-menu | Manage Dashboards |  | a[href="#Dashboards?moduleName=Home"]<br>a.ellipsis_inline<br>a:contains("Manage Dashboards") |
| link-or-menu | Calendar |  | a[aria-label="Calendar"]<br>a[href="#bwc/index.php?module=Calendar&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Calendar") |
| button | Calendar - More | button | #Calendar<br>button[aria-label="Calendar - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Meeting Schedule Call Create Task Today | menu | ul[role="menu"] |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Schedule Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Call") |
| link-or-menu | Create Task |  | a[href="#Tasks/create"]<br>a.ellipsis_inline<br>a:contains("Create Task") |
| link-or-menu | Today |  | a[href="#bwc/index.php?module=Calendar&action=index&view=day"]<br>a.ellipsis_inline<br>a:contains("Today") |
| link-or-menu | Targets |  | a[aria-label="Targets"]<br>a[href="#Prospects"]<br>a.btn<br>a.module-name<br>a:contains("Targets") |
| button | Targets - More | button | #Prospects<br>button[aria-label="Targets - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Target Create Target From vCard View Targets Import Targets | menu | ul[role="menu"] |
| link-or-menu | Create Target |  | a[href="#Prospects/create"]<br>a.ellipsis_inline<br>a:contains("Create Target") |
| link-or-menu | Create Target From vCard |  | a[href="#Prospects/vcard-import"]<br>a.ellipsis_inline<br>a:contains("Create Target From vCard") |
| link-or-menu | View Targets |  | a[href="#Prospects"]<br>a.ellipsis_inline<br>a:contains("View Targets") |
| link-or-menu | Import Targets |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Prospects&return_module=Prospects&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Targets") |
| link-or-menu | Leads |  | a[aria-label="Leads"]<br>a[href="#Leads"]<br>a.btn<br>a.module-name<br>a:contains("Leads") |
| button | Leads - More | button | #Leads<br>button[aria-label="Leads - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Lead View Leads View Lead Reports Import Leads | menu | ul[role="menu"] |
| link-or-menu | Create Lead |  | a[href="#Leads/create"]<br>a.ellipsis_inline<br>a:contains("Create Lead") |
| link-or-menu | View Leads |  | a[href="#Leads"]<br>a.ellipsis_inline<br>a:contains("View Leads") |
| link-or-menu | View Lead Reports |  | a[href="#Reports?filterModule=Leads"]<br>a.ellipsis_inline<br>a:contains("View Lead Reports") |
| link-or-menu | Import Leads |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Leads&return_module=Leads&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Leads") |
| link-or-menu | Students |  | a[aria-label="Students"]<br>a[href="#Contacts"]<br>a.btn<br>a.module-name<br>a:contains("Students") |
| button | Students - More | button | #Contacts<br>button[aria-label="Students - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Student View Students View Student Reports Import Students Send SMS | menu | ul[role="menu"] |
| link-or-menu | Create Student |  | a[href="#Contacts/create"]<br>a.ellipsis_inline<br>a:contains("Create Student") |
| link-or-menu | View Students |  | a[href="#Contacts"]<br>a.ellipsis_inline<br>a:contains("View Students") |
| link-or-menu | View Student Reports |  | a[href="#Reports?filterModule=Contacts"]<br>a.ellipsis_inline<br>a:contains("View Student Reports") |
| link-or-menu | Import Students |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Contacts&return_module=Contacts&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Students") |
| link-or-menu | Send SMS |  | a[href="#bwc/index.php?module=C_SMS&action=sendSMS"]<br>a.ellipsis_inline<br>a:contains("Send SMS") |
| link-or-menu | Sale Orders |  | a[aria-label="Sale Orders"]<br>a[href="#Quotes"]<br>a.btn<br>a.module-name<br>a:contains("Sale Orders") |
| button | Sale Orders - More | button | #Quotes<br>button[aria-label="Sale Orders - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Sale Order View Sale Orders View Sale Order Reports | menu | ul[role="menu"] |
| link-or-menu | Create Sale Order |  | a[href="#Quotes/create"]<br>a.ellipsis_inline<br>a:contains("Create Sale Order") |
| link-or-menu | View Sale Orders |  | a[href="#Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Orders") |
| link-or-menu | View Sale Order Reports |  | a[href="#Reports?filterModule=Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Order Reports") |
| link-or-menu | Classes |  | a[aria-label="Classes"]<br>a[href="#J_Class"]<br>a.btn<br>a.module-name<br>a:contains("Classes") |
| button | Classes - More | button | #J_Class<br>button[aria-label="Classes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Class View Classes View on Calendar Import Scheduler | menu | ul[role="menu"] |
| link-or-menu | Create Class |  | a[href="#J_Class/create"]<br>a.ellipsis_inline<br>a:contains("Create Class") |
| link-or-menu | View Classes |  | a[href="#J_Class"]<br>a.ellipsis_inline<br>a:contains("View Classes") |
| link-or-menu | View on Calendar |  | a[href="#bwc/index.php?module=Calendar&action=index&view=week"]<br>a.ellipsis_inline<br>a:contains("View on Calendar") |
| link-or-menu | Import Scheduler |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Meetings&return_module=Meetings&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Scheduler") |
| link-or-menu | Schedules |  | a[aria-label="Schedules"]<br>a[href="#Meetings"]<br>a.btn<br>a.module-name<br>a:contains("Schedules") |
| button | Schedules - More | button | #Meetings<br>button[aria-label="Schedules - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Placement Test Schedule Demo Schedule Meeting | menu | ul[role="menu"] |
| link-or-menu | Schedule Placement Test |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=PT"]<br>a.ellipsis_inline<br>a:contains("Schedule Placement Test") |
| link-or-menu | Schedule Demo |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=Demo"]<br>a.ellipsis_inline<br>a:contains("Schedule Demo") |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Reports |  | a[aria-label="Reports"]<br>a[href="#Reports"]<br>a.btn<br>a.module-name<br>a:contains("Reports") |
| button | Reports - More | button | #Reports<br>button[aria-label="Reports - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Report View Reports Report Schedules | menu | ul[role="menu"] |
| link-or-menu | Create Report |  | a[href="#bwc/index.php?module=Reports&report_module=&action=index&page=report&Create+Custom+Report=Create+Custom+Report"]<br>a.ellipsis_inline<br>a:contains("Create Report") |
| link-or-menu | View Reports |  | a[href="#Reports"]<br>a.ellipsis_inline<br>a:contains("View Reports") |
| link-or-menu | Report Schedules |  | a[href="#ReportSchedules"]<br>a.ellipsis_inline<br>a:contains("Report Schedules") |
| link-or-menu | Loyalty |  | a[aria-label="Loyalty"]<br>a[href="#J_Loyalty"]<br>a.btn<br>a.module-name<br>a:contains("Loyalty") |
| button | Loyalty - More | button | #J_Loyalty<br>button[aria-label="Loyalty - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Loyalty View Loyalty Import Loyalty | menu | ul[role="menu"] |
| link-or-menu | Create Loyalty |  | a[href="#J_Loyalty/create"]<br>a.ellipsis_inline<br>a:contains("Create Loyalty") |
| link-or-menu | View Loyalty |  | a[href="#J_Loyalty"]<br>a.ellipsis_inline<br>a:contains("View Loyalty") |
| link-or-menu | Import Loyalty |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Loyalty&return_module=J_Loyalty&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Loyalty") |
| link-or-menu | Teachers |  | a[aria-label="Teachers"]<br>a[href="#C_Teachers"]<br>a.btn<br>a.module-name<br>a:contains("Teachers") |
| button | Teachers - More | button | #C_Teachers<br>button[aria-label="Teachers - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Create TA View Teachers Import Teachers | menu | ul[role="menu"] |
| link-or-menu | Create Teacher |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=Teacher"]<br>a.ellipsis_inline<br>a:contains("Create Teacher") |
| link-or-menu | Create TA |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=TA"]<br>a.ellipsis_inline<br>a:contains("Create TA") |
| link-or-menu | View Teachers |  | a[href="#C_Teachers"]<br>a.ellipsis_inline<br>a:contains("View Teachers") |
| link-or-menu | Import Teachers |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Teachers&return_module=C_Teachers&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teachers") |
| link-or-menu | Approval Processes |  | a[aria-label="Approval Processes"]<br>a[href="#ApprovalProcesses"]<br>a.btn<br>a.module-name<br>a:contains("Approval Processes") |
| button | Approval Processes - More | button | #ApprovalProcesses<br>button[aria-label="Approval Processes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Approval Processes | menu | ul[role="menu"] |
| link-or-menu | Approval Processes |  | a[href="#ApprovalProcesses/layout/approvalList"]<br>a.ellipsis_inline<br>a:contains("Approval Processes") |
| link-or-menu | Accounts |  | a[aria-label="Accounts"]<br>a[href="#Accounts"]<br>a.btn<br>a.module-name<br>a:contains("Accounts") |
| button | Accounts - More | button | #Accounts<br>button[aria-label="Accounts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Account View Accounts View Account Reports Import Accounts | menu | ul[role="menu"] |
| link-or-menu | Create Account |  | a[href="#Accounts/create"]<br>a.ellipsis_inline<br>a:contains("Create Account") |
| link-or-menu | View Accounts |  | a[href="#Accounts"]<br>a.ellipsis_inline<br>a:contains("View Accounts") |
| link-or-menu | View Account Reports |  | a[href="#Reports?filterModule=Accounts"]<br>a.ellipsis_inline<br>a:contains("View Account Reports") |
| link-or-menu | Import Accounts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Accounts"]<br>a.ellipsis_inline<br>a:contains("Import Accounts") |
| link-or-menu | Rooms |  | a[aria-label="Rooms"]<br>a[href="#C_Rooms"]<br>a.btn<br>a.module-name<br>a:contains("Rooms") |
| button | Rooms - More | button | #C_Rooms<br>button[aria-label="Rooms - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Room View Rooms Import Rooms | menu | ul[role="menu"] |
| link-or-menu | Create Room |  | a[href="#C_Rooms/create"]<br>a.ellipsis_inline<br>a:contains("Create Room") |
| link-or-menu | View Rooms |  | a[href="#C_Rooms"]<br>a.ellipsis_inline<br>a:contains("View Rooms") |
| link-or-menu | Import Rooms |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Rooms&return_module=C_Rooms&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Rooms") |
| link-or-menu | Teacher Contracts |  | a[aria-label="Teacher Contracts"]<br>a[href="#J_Teachercontract"]<br>a.btn<br>a.module-name<br>a:contains("Teacher Contracts") |
| button | Teacher Contracts - More | button | #J_Teachercontract<br>button[aria-label="Teacher Contracts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Contract View Teacher Contracts Import Teacher Contracts | menu | ul[role="menu"] |
| link-or-menu | Create Teacher Contract |  | a[href="#J_Teachercontract/create"]<br>a.ellipsis_inline<br>a:contains("Create Teacher Contract") |
| link-or-menu | View Teacher Contracts |  | a[href="#J_Teachercontract"]<br>a.ellipsis_inline<br>a:contains("View Teacher Contracts") |
| link-or-menu | Import Teacher Contracts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Teachercontract&return_module=J_Teachercontract&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teacher Contracts") |
| link-or-menu | Kind Of Courses |  | a[aria-label="Kind Of Courses"]<br>a[href="#J_Kindofcourse"]<br>a.btn<br>a.module-name<br>a:contains("Kind Of Courses") |
| button | Kind Of Courses - More | button | #J_Kindofcourse<br>button[aria-label="Kind Of Courses - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Kind Of Course View Kind Of Courses Import Kind Of Courses | menu | ul[role="menu"] |
| link-or-menu | Create Kind Of Course |  | a[href="#J_Kindofcourse/create"]<br>a.ellipsis_inline<br>a:contains("Create Kind Of Course") |
| link-or-menu | View Kind Of Courses |  | a[href="#J_Kindofcourse"]<br>a.ellipsis_inline<br>a:contains("View Kind Of Courses") |
| link-or-menu | Import Kind Of Courses |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Kindofcourse&return_module=J_Kindofcourse&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Kind Of Courses") |
| link-or-menu | Activities |  | a[aria-label="Activities"]<br>a[href="#M_Activities"]<br>a.btn<br>a.module-name<br>a:contains("Activities") |
| button | Activities - More | button | #M_Activities<br>button[aria-label="Activities - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Activities View Activities Import Syllabus | menu | ul[role="menu"] |
| link-or-menu | Create Activities |  | a[href="#M_Activities/create"]<br>a.ellipsis_inline<br>a:contains("Create Activities") |
| link-or-menu | View Activities |  | a[href="#M_Activities"]<br>a.ellipsis_inline<br>a:contains("View Activities") |
| link-or-menu | Import Syllabus |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Syllabus&query=true&report_module=M_Activities"]<br>a.ellipsis_inline<br>a:contains("Import Syllabus") |
| link-or-menu | Work permit |  | a[aria-label="Work permit"]<br>a[href="#J_Workpermit"]<br>a.btn<br>a.module-name<br>a:contains("Work permit") |
| button | Work permit - More | button | #J_Workpermit<br>button[aria-label="Work permit - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Work permit View Work permit | menu | ul[role="menu"] |
| link-or-menu | Create Work permit |  | a[href="#J_Workpermit/create"]<br>a.ellipsis_inline<br>a:contains("Create Work permit") |
| link-or-menu | View Work permit |  | a[href="#J_Workpermit"]<br>a.ellipsis_inline<br>a:contains("View Work permit") |
| link-or-menu | Gallery |  | a[aria-label="Gallery"]<br>a[href="#C_Gallery"]<br>a.btn<br>a.module-name<br>a:contains("Gallery") |
| button | Gallery - More | button | #C_Gallery<br>button[aria-label="Gallery - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gallery View Gallery | menu | ul[role="menu"] |
| link-or-menu | Create Gallery |  | a[href="#C_Gallery/create"]<br>a.ellipsis_inline<br>a:contains("Create Gallery") |
| link-or-menu | View Gallery |  | a[href="#C_Gallery"]<br>a.ellipsis_inline<br>a:contains("View Gallery") |
| link-or-menu | Gradebooks |  | a[aria-label="Gradebooks"]<br>a[href="#J_Gradebook"]<br>a.btn<br>a.module-name<br>a:contains("Gradebooks") |
| button | Gradebooks - More | button | #J_Gradebook<br>button[aria-label="Gradebooks - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | View Gradebooks | menu | ul[role="menu"] |
| link-or-menu | View Gradebooks |  | a[href="#J_Gradebook"]<br>a.ellipsis_inline<br>a:contains("View Gradebooks") |
| link-or-menu | Gradebook Settings |  | a[aria-label="Gradebook Settings"]<br>a[href="#J_GradebookConfig"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Settings") |
| button | Gradebook Settings - More | button | #J_GradebookConfig<br>button[aria-label="Gradebook Settings - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting View Gradebook Settings | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting |  | a[href="#J_GradebookConfig/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting") |
| link-or-menu | View Gradebook Settings |  | a[href="#J_GradebookConfig"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Settings") |
| link-or-menu | Gradebook Setting Groups |  | a[aria-label="Gradebook Setting Groups"]<br>a[href="#J_GradebookSettingGroup"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Setting Groups") |
| button | Gradebook Setting Groups - More | button | #J_GradebookSettingGroup<br>button[aria-label="Gradebook Setting Groups - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting Group View Gradebook Setting Groups | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting Group |  | a[href="#J_GradebookSettingGroup/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting Group") |
| link-or-menu | View Gradebook Setting Groups |  | a[href="#J_GradebookSettingGroup"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Setting Groups") |
| link-or-menu | Admin Hours |  | a[aria-label="Admin Hours"]<br>a[href="#bwc/index.php?module=C_Timesheet&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Admin Hours") |
| link-or-menu | Campaigns |  | a[aria-label="Campaigns"]<br>a[href="#bwc/index.php?module=Campaigns&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Campaigns") |
| button | Campaigns - More | button | #Campaigns<br>button[aria-label="Campaigns - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Campaign (Wizard) Create Campaign (Classic) View Campaigns View Newsletters Create Email Template View Email Temp | menu | ul[role="menu"] |
| link-or-menu | Create Campaign (Wizard) |  | a[href="#bwc/index.php?module=Campaigns&action=WizardHome&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Wizard)") |
| link-or-menu | Create Campaign (Classic) |  | a[href="#bwc/index.php?module=Campaigns&action=EditView&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Classic)") |
| link-or-menu | View Campaigns |  | a[href="#bwc/index.php?module=Campaigns&action=index&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Campaigns") |
| link-or-menu | View Newsletters |  | a[href="#bwc/index.php?module=Campaigns&action=newsletterlist&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Newsletters") |
| link-or-menu | Create Email Template |  | a[href="#bwc/index.php?module=EmailTemplates&action=EditView&return_module=EmailTemplates&return_action=DetailView"]<br>a.ellipsis_inline<br>a:contains("Create Email Template") |
| link-or-menu | View Email Templates |  | a[href="#bwc/index.php?module=EmailTemplates&action=index"]<br>a.ellipsis_inline<br>a:contains("View Email Templates") |
| link-or-menu | Set Up Email |  | a[href="#bwc/index.php?module=Campaigns&action=WizardEmailSetup&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Set Up Email") |
| link-or-menu | View Diagnostics |  | a[href="#bwc/index.php?module=Campaigns&action=CampaignDiagnostic&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Diagnostics") |
| link-or-menu | Create Lead Form |  | a[href="#bwc/index.php?module=Campaigns&action=WebToLeadCreation&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Lead Form") |
| link-or-menu | Calls |  | a[aria-label="Calls"]<br>a[href="#Calls"]<br>a.btn<br>a.module-name<br>a:contains("Calls") |
| button | Calls - More | button | #Calls<br>button[aria-label="Calls - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Log Call View Calls Import Calls Activities Report | menu | ul[role="menu"] |
| link-or-menu | Log Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Log Call") |

## 4. Dashboards | Scots CRM
- URL: https://stagingcrm.scotsenglish.edu.vn/index.php#bwc/index.php?module=Calendar&action=index&bwcFrame=1&bwcRedirect=1
- Elements captured: 366

| Kind | Label/Text | Role/Type | Candidate selectors |
|---|---|---|---|
| navigation | main module navigation | navigation | ul[role="navigation"]<br>ul[aria-label="main module navigation"]<br>ul.nav<br>ul.megamenu |
| link-or-menu | Home |  | a[aria-label="Home"]<br>a[href="#Home"]<br>a.cube<br>a.btn |
| button | Home - More | button | button[aria-label="Home - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Dashboard Activity Stream Manage Dashboards | menu | ul[role="menu"] |
| link-or-menu | Create Dashboard |  | a[href="#Home/create"]<br>a.ellipsis_inline<br>a:contains("Create Dashboard") |
| link-or-menu | Activity Stream |  | a[href="#activities"]<br>a.ellipsis_inline<br>a:contains("Activity Stream") |
| link-or-menu | Manage Dashboards |  | a[href="#Dashboards?moduleName=Home"]<br>a.ellipsis_inline<br>a:contains("Manage Dashboards") |
| link-or-menu | Calendar |  | a[aria-label="Calendar"]<br>a[href="#bwc/index.php?module=Calendar&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Calendar") |
| button | Calendar - More | button | #Calendar<br>button[aria-label="Calendar - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Meeting Schedule Call Create Task Today | menu | ul[role="menu"] |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Schedule Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Call") |
| link-or-menu | Create Task |  | a[href="#Tasks/create"]<br>a.ellipsis_inline<br>a:contains("Create Task") |
| link-or-menu | Today |  | a[href="#bwc/index.php?module=Calendar&action=index&view=day"]<br>a.ellipsis_inline<br>a:contains("Today") |
| link-or-menu | Targets |  | a[aria-label="Targets"]<br>a[href="#Prospects"]<br>a.btn<br>a.module-name<br>a:contains("Targets") |
| button | Targets - More | button | #Prospects<br>button[aria-label="Targets - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Target Create Target From vCard View Targets Import Targets | menu | ul[role="menu"] |
| link-or-menu | Create Target |  | a[href="#Prospects/create"]<br>a.ellipsis_inline<br>a:contains("Create Target") |
| link-or-menu | Create Target From vCard |  | a[href="#Prospects/vcard-import"]<br>a.ellipsis_inline<br>a:contains("Create Target From vCard") |
| link-or-menu | View Targets |  | a[href="#Prospects"]<br>a.ellipsis_inline<br>a:contains("View Targets") |
| link-or-menu | Import Targets |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Prospects&return_module=Prospects&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Targets") |
| link-or-menu | Leads |  | a[aria-label="Leads"]<br>a[href="#Leads"]<br>a.btn<br>a.module-name<br>a:contains("Leads") |
| button | Leads - More | button | #Leads<br>button[aria-label="Leads - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Lead View Leads View Lead Reports Import Leads | menu | ul[role="menu"] |
| link-or-menu | Create Lead |  | a[href="#Leads/create"]<br>a.ellipsis_inline<br>a:contains("Create Lead") |
| link-or-menu | View Leads |  | a[href="#Leads"]<br>a.ellipsis_inline<br>a:contains("View Leads") |
| link-or-menu | View Lead Reports |  | a[href="#Reports?filterModule=Leads"]<br>a.ellipsis_inline<br>a:contains("View Lead Reports") |
| link-or-menu | Import Leads |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Leads&return_module=Leads&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Leads") |
| link-or-menu | Students |  | a[aria-label="Students"]<br>a[href="#Contacts"]<br>a.btn<br>a.module-name<br>a:contains("Students") |
| button | Students - More | button | #Contacts<br>button[aria-label="Students - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Student View Students View Student Reports Import Students Send SMS | menu | ul[role="menu"] |
| link-or-menu | Create Student |  | a[href="#Contacts/create"]<br>a.ellipsis_inline<br>a:contains("Create Student") |
| link-or-menu | View Students |  | a[href="#Contacts"]<br>a.ellipsis_inline<br>a:contains("View Students") |
| link-or-menu | View Student Reports |  | a[href="#Reports?filterModule=Contacts"]<br>a.ellipsis_inline<br>a:contains("View Student Reports") |
| link-or-menu | Import Students |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Contacts&return_module=Contacts&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Students") |
| link-or-menu | Send SMS |  | a[href="#bwc/index.php?module=C_SMS&action=sendSMS"]<br>a.ellipsis_inline<br>a:contains("Send SMS") |
| link-or-menu | Sale Orders |  | a[aria-label="Sale Orders"]<br>a[href="#Quotes"]<br>a.btn<br>a.module-name<br>a:contains("Sale Orders") |
| button | Sale Orders - More | button | #Quotes<br>button[aria-label="Sale Orders - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Sale Order View Sale Orders View Sale Order Reports | menu | ul[role="menu"] |
| link-or-menu | Create Sale Order |  | a[href="#Quotes/create"]<br>a.ellipsis_inline<br>a:contains("Create Sale Order") |
| link-or-menu | View Sale Orders |  | a[href="#Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Orders") |
| link-or-menu | View Sale Order Reports |  | a[href="#Reports?filterModule=Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Order Reports") |
| link-or-menu | Classes |  | a[aria-label="Classes"]<br>a[href="#J_Class"]<br>a.btn<br>a.module-name<br>a:contains("Classes") |
| button | Classes - More | button | #J_Class<br>button[aria-label="Classes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Class View Classes View on Calendar Import Scheduler | menu | ul[role="menu"] |
| link-or-menu | Create Class |  | a[href="#J_Class/create"]<br>a.ellipsis_inline<br>a:contains("Create Class") |
| link-or-menu | View Classes |  | a[href="#J_Class"]<br>a.ellipsis_inline<br>a:contains("View Classes") |
| link-or-menu | View on Calendar |  | a[href="#bwc/index.php?module=Calendar&action=index&view=week"]<br>a.ellipsis_inline<br>a:contains("View on Calendar") |
| link-or-menu | Import Scheduler |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Meetings&return_module=Meetings&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Scheduler") |
| link-or-menu | Schedules |  | a[aria-label="Schedules"]<br>a[href="#Meetings"]<br>a.btn<br>a.module-name<br>a:contains("Schedules") |
| button | Schedules - More | button | #Meetings<br>button[aria-label="Schedules - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Placement Test Schedule Demo Schedule Meeting | menu | ul[role="menu"] |
| link-or-menu | Schedule Placement Test |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=PT"]<br>a.ellipsis_inline<br>a:contains("Schedule Placement Test") |
| link-or-menu | Schedule Demo |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=Demo"]<br>a.ellipsis_inline<br>a:contains("Schedule Demo") |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Reports |  | a[aria-label="Reports"]<br>a[href="#Reports"]<br>a.btn<br>a.module-name<br>a:contains("Reports") |
| button | Reports - More | button | #Reports<br>button[aria-label="Reports - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Report View Reports Report Schedules | menu | ul[role="menu"] |
| link-or-menu | Create Report |  | a[href="#bwc/index.php?module=Reports&report_module=&action=index&page=report&Create+Custom+Report=Create+Custom+Report"]<br>a.ellipsis_inline<br>a:contains("Create Report") |
| link-or-menu | View Reports |  | a[href="#Reports"]<br>a.ellipsis_inline<br>a:contains("View Reports") |
| link-or-menu | Report Schedules |  | a[href="#ReportSchedules"]<br>a.ellipsis_inline<br>a:contains("Report Schedules") |
| link-or-menu | Loyalty |  | a[aria-label="Loyalty"]<br>a[href="#J_Loyalty"]<br>a.btn<br>a.module-name<br>a:contains("Loyalty") |
| button | Loyalty - More | button | #J_Loyalty<br>button[aria-label="Loyalty - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Loyalty View Loyalty Import Loyalty | menu | ul[role="menu"] |
| link-or-menu | Create Loyalty |  | a[href="#J_Loyalty/create"]<br>a.ellipsis_inline<br>a:contains("Create Loyalty") |
| link-or-menu | View Loyalty |  | a[href="#J_Loyalty"]<br>a.ellipsis_inline<br>a:contains("View Loyalty") |
| link-or-menu | Import Loyalty |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Loyalty&return_module=J_Loyalty&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Loyalty") |
| link-or-menu | Teachers |  | a[aria-label="Teachers"]<br>a[href="#C_Teachers"]<br>a.btn<br>a.module-name<br>a:contains("Teachers") |
| button | Teachers - More | button | #C_Teachers<br>button[aria-label="Teachers - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Create TA View Teachers Import Teachers | menu | ul[role="menu"] |
| link-or-menu | Create Teacher |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=Teacher"]<br>a.ellipsis_inline<br>a:contains("Create Teacher") |
| link-or-menu | Create TA |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=TA"]<br>a.ellipsis_inline<br>a:contains("Create TA") |
| link-or-menu | View Teachers |  | a[href="#C_Teachers"]<br>a.ellipsis_inline<br>a:contains("View Teachers") |
| link-or-menu | Import Teachers |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Teachers&return_module=C_Teachers&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teachers") |
| link-or-menu | Approval Processes |  | a[aria-label="Approval Processes"]<br>a[href="#ApprovalProcesses"]<br>a.btn<br>a.module-name<br>a:contains("Approval Processes") |
| button | Approval Processes - More | button | #ApprovalProcesses<br>button[aria-label="Approval Processes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Approval Processes | menu | ul[role="menu"] |
| link-or-menu | Approval Processes |  | a[href="#ApprovalProcesses/layout/approvalList"]<br>a.ellipsis_inline<br>a:contains("Approval Processes") |
| link-or-menu | Accounts |  | a[aria-label="Accounts"]<br>a[href="#Accounts"]<br>a.btn<br>a.module-name<br>a:contains("Accounts") |
| button | Accounts - More | button | #Accounts<br>button[aria-label="Accounts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Account View Accounts View Account Reports Import Accounts | menu | ul[role="menu"] |
| link-or-menu | Create Account |  | a[href="#Accounts/create"]<br>a.ellipsis_inline<br>a:contains("Create Account") |
| link-or-menu | View Accounts |  | a[href="#Accounts"]<br>a.ellipsis_inline<br>a:contains("View Accounts") |
| link-or-menu | View Account Reports |  | a[href="#Reports?filterModule=Accounts"]<br>a.ellipsis_inline<br>a:contains("View Account Reports") |
| link-or-menu | Import Accounts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Accounts"]<br>a.ellipsis_inline<br>a:contains("Import Accounts") |
| link-or-menu | Rooms |  | a[aria-label="Rooms"]<br>a[href="#C_Rooms"]<br>a.btn<br>a.module-name<br>a:contains("Rooms") |
| button | Rooms - More | button | #C_Rooms<br>button[aria-label="Rooms - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Room View Rooms Import Rooms | menu | ul[role="menu"] |
| link-or-menu | Create Room |  | a[href="#C_Rooms/create"]<br>a.ellipsis_inline<br>a:contains("Create Room") |
| link-or-menu | View Rooms |  | a[href="#C_Rooms"]<br>a.ellipsis_inline<br>a:contains("View Rooms") |
| link-or-menu | Import Rooms |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Rooms&return_module=C_Rooms&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Rooms") |
| link-or-menu | Teacher Contracts |  | a[aria-label="Teacher Contracts"]<br>a[href="#J_Teachercontract"]<br>a.btn<br>a.module-name<br>a:contains("Teacher Contracts") |
| button | Teacher Contracts - More | button | #J_Teachercontract<br>button[aria-label="Teacher Contracts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Contract View Teacher Contracts Import Teacher Contracts | menu | ul[role="menu"] |
| link-or-menu | Create Teacher Contract |  | a[href="#J_Teachercontract/create"]<br>a.ellipsis_inline<br>a:contains("Create Teacher Contract") |
| link-or-menu | View Teacher Contracts |  | a[href="#J_Teachercontract"]<br>a.ellipsis_inline<br>a:contains("View Teacher Contracts") |
| link-or-menu | Import Teacher Contracts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Teachercontract&return_module=J_Teachercontract&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teacher Contracts") |
| link-or-menu | Kind Of Courses |  | a[aria-label="Kind Of Courses"]<br>a[href="#J_Kindofcourse"]<br>a.btn<br>a.module-name<br>a:contains("Kind Of Courses") |
| button | Kind Of Courses - More | button | #J_Kindofcourse<br>button[aria-label="Kind Of Courses - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Kind Of Course View Kind Of Courses Import Kind Of Courses | menu | ul[role="menu"] |
| link-or-menu | Create Kind Of Course |  | a[href="#J_Kindofcourse/create"]<br>a.ellipsis_inline<br>a:contains("Create Kind Of Course") |
| link-or-menu | View Kind Of Courses |  | a[href="#J_Kindofcourse"]<br>a.ellipsis_inline<br>a:contains("View Kind Of Courses") |
| link-or-menu | Import Kind Of Courses |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Kindofcourse&return_module=J_Kindofcourse&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Kind Of Courses") |
| link-or-menu | Activities |  | a[aria-label="Activities"]<br>a[href="#M_Activities"]<br>a.btn<br>a.module-name<br>a:contains("Activities") |
| button | Activities - More | button | #M_Activities<br>button[aria-label="Activities - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Activities View Activities Import Syllabus | menu | ul[role="menu"] |
| link-or-menu | Create Activities |  | a[href="#M_Activities/create"]<br>a.ellipsis_inline<br>a:contains("Create Activities") |
| link-or-menu | View Activities |  | a[href="#M_Activities"]<br>a.ellipsis_inline<br>a:contains("View Activities") |
| link-or-menu | Import Syllabus |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Syllabus&query=true&report_module=M_Activities"]<br>a.ellipsis_inline<br>a:contains("Import Syllabus") |
| link-or-menu | Work permit |  | a[aria-label="Work permit"]<br>a[href="#J_Workpermit"]<br>a.btn<br>a.module-name<br>a:contains("Work permit") |
| button | Work permit - More | button | #J_Workpermit<br>button[aria-label="Work permit - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Work permit View Work permit | menu | ul[role="menu"] |
| link-or-menu | Create Work permit |  | a[href="#J_Workpermit/create"]<br>a.ellipsis_inline<br>a:contains("Create Work permit") |
| link-or-menu | View Work permit |  | a[href="#J_Workpermit"]<br>a.ellipsis_inline<br>a:contains("View Work permit") |
| link-or-menu | Gallery |  | a[aria-label="Gallery"]<br>a[href="#C_Gallery"]<br>a.btn<br>a.module-name<br>a:contains("Gallery") |
| button | Gallery - More | button | #C_Gallery<br>button[aria-label="Gallery - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gallery View Gallery | menu | ul[role="menu"] |
| link-or-menu | Create Gallery |  | a[href="#C_Gallery/create"]<br>a.ellipsis_inline<br>a:contains("Create Gallery") |
| link-or-menu | View Gallery |  | a[href="#C_Gallery"]<br>a.ellipsis_inline<br>a:contains("View Gallery") |
| link-or-menu | Gradebooks |  | a[aria-label="Gradebooks"]<br>a[href="#J_Gradebook"]<br>a.btn<br>a.module-name<br>a:contains("Gradebooks") |
| button | Gradebooks - More | button | #J_Gradebook<br>button[aria-label="Gradebooks - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | View Gradebooks | menu | ul[role="menu"] |
| link-or-menu | View Gradebooks |  | a[href="#J_Gradebook"]<br>a.ellipsis_inline<br>a:contains("View Gradebooks") |
| link-or-menu | Gradebook Settings |  | a[aria-label="Gradebook Settings"]<br>a[href="#J_GradebookConfig"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Settings") |
| button | Gradebook Settings - More | button | #J_GradebookConfig<br>button[aria-label="Gradebook Settings - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting View Gradebook Settings | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting |  | a[href="#J_GradebookConfig/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting") |
| link-or-menu | View Gradebook Settings |  | a[href="#J_GradebookConfig"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Settings") |
| link-or-menu | Gradebook Setting Groups |  | a[aria-label="Gradebook Setting Groups"]<br>a[href="#J_GradebookSettingGroup"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Setting Groups") |
| button | Gradebook Setting Groups - More | button | #J_GradebookSettingGroup<br>button[aria-label="Gradebook Setting Groups - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting Group View Gradebook Setting Groups | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting Group |  | a[href="#J_GradebookSettingGroup/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting Group") |
| link-or-menu | View Gradebook Setting Groups |  | a[href="#J_GradebookSettingGroup"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Setting Groups") |
| link-or-menu | Admin Hours |  | a[aria-label="Admin Hours"]<br>a[href="#bwc/index.php?module=C_Timesheet&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Admin Hours") |
| link-or-menu | Campaigns |  | a[aria-label="Campaigns"]<br>a[href="#bwc/index.php?module=Campaigns&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Campaigns") |
| button | Campaigns - More | button | #Campaigns<br>button[aria-label="Campaigns - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Campaign (Wizard) Create Campaign (Classic) View Campaigns View Newsletters Create Email Template View Email Temp | menu | ul[role="menu"] |
| link-or-menu | Create Campaign (Wizard) |  | a[href="#bwc/index.php?module=Campaigns&action=WizardHome&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Wizard)") |
| link-or-menu | Create Campaign (Classic) |  | a[href="#bwc/index.php?module=Campaigns&action=EditView&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Classic)") |
| link-or-menu | View Campaigns |  | a[href="#bwc/index.php?module=Campaigns&action=index&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Campaigns") |
| link-or-menu | View Newsletters |  | a[href="#bwc/index.php?module=Campaigns&action=newsletterlist&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Newsletters") |
| link-or-menu | Create Email Template |  | a[href="#bwc/index.php?module=EmailTemplates&action=EditView&return_module=EmailTemplates&return_action=DetailView"]<br>a.ellipsis_inline<br>a:contains("Create Email Template") |
| link-or-menu | View Email Templates |  | a[href="#bwc/index.php?module=EmailTemplates&action=index"]<br>a.ellipsis_inline<br>a:contains("View Email Templates") |
| link-or-menu | Set Up Email |  | a[href="#bwc/index.php?module=Campaigns&action=WizardEmailSetup&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Set Up Email") |
| link-or-menu | View Diagnostics |  | a[href="#bwc/index.php?module=Campaigns&action=CampaignDiagnostic&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Diagnostics") |
| link-or-menu | Create Lead Form |  | a[href="#bwc/index.php?module=Campaigns&action=WebToLeadCreation&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Lead Form") |
| link-or-menu | Calls |  | a[aria-label="Calls"]<br>a[href="#Calls"]<br>a.btn<br>a.module-name<br>a:contains("Calls") |
| button | Calls - More | button | #Calls<br>button[aria-label="Calls - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Log Call View Calls Import Calls Activities Report | menu | ul[role="menu"] |
| link-or-menu | Log Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Log Call") |

## 5. Dashboards | Scots CRM
- URL: https://stagingcrm.scotsenglish.edu.vn/index.php#bwc/index.php?module=Calendar&action=index&view=day
- Elements captured: 366

| Kind | Label/Text | Role/Type | Candidate selectors |
|---|---|---|---|
| navigation | main module navigation | navigation | ul[role="navigation"]<br>ul[aria-label="main module navigation"]<br>ul.nav<br>ul.megamenu |
| link-or-menu | Home |  | a[aria-label="Home"]<br>a[href="#Home"]<br>a.cube<br>a.btn |
| button | Home - More | button | button[aria-label="Home - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Dashboard Activity Stream Manage Dashboards | menu | ul[role="menu"] |
| link-or-menu | Create Dashboard |  | a[href="#Home/create"]<br>a.ellipsis_inline<br>a:contains("Create Dashboard") |
| link-or-menu | Activity Stream |  | a[href="#activities"]<br>a.ellipsis_inline<br>a:contains("Activity Stream") |
| link-or-menu | Manage Dashboards |  | a[href="#Dashboards?moduleName=Home"]<br>a.ellipsis_inline<br>a:contains("Manage Dashboards") |
| link-or-menu | Calendar |  | a[aria-label="Calendar"]<br>a[href="#bwc/index.php?module=Calendar&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Calendar") |
| button | Calendar - More | button | #Calendar<br>button[aria-label="Calendar - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Meeting Schedule Call Create Task Today | menu | ul[role="menu"] |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Schedule Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Call") |
| link-or-menu | Create Task |  | a[href="#Tasks/create"]<br>a.ellipsis_inline<br>a:contains("Create Task") |
| link-or-menu | Today |  | a[href="#bwc/index.php?module=Calendar&action=index&view=day"]<br>a.ellipsis_inline<br>a:contains("Today") |
| link-or-menu | Targets |  | a[aria-label="Targets"]<br>a[href="#Prospects"]<br>a.btn<br>a.module-name<br>a:contains("Targets") |
| button | Targets - More | button | #Prospects<br>button[aria-label="Targets - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Target Create Target From vCard View Targets Import Targets | menu | ul[role="menu"] |
| link-or-menu | Create Target |  | a[href="#Prospects/create"]<br>a.ellipsis_inline<br>a:contains("Create Target") |
| link-or-menu | Create Target From vCard |  | a[href="#Prospects/vcard-import"]<br>a.ellipsis_inline<br>a:contains("Create Target From vCard") |
| link-or-menu | View Targets |  | a[href="#Prospects"]<br>a.ellipsis_inline<br>a:contains("View Targets") |
| link-or-menu | Import Targets |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Prospects&return_module=Prospects&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Targets") |
| link-or-menu | Leads |  | a[aria-label="Leads"]<br>a[href="#Leads"]<br>a.btn<br>a.module-name<br>a:contains("Leads") |
| button | Leads - More | button | #Leads<br>button[aria-label="Leads - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Lead View Leads View Lead Reports Import Leads | menu | ul[role="menu"] |
| link-or-menu | Create Lead |  | a[href="#Leads/create"]<br>a.ellipsis_inline<br>a:contains("Create Lead") |
| link-or-menu | View Leads |  | a[href="#Leads"]<br>a.ellipsis_inline<br>a:contains("View Leads") |
| link-or-menu | View Lead Reports |  | a[href="#Reports?filterModule=Leads"]<br>a.ellipsis_inline<br>a:contains("View Lead Reports") |
| link-or-menu | Import Leads |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Leads&return_module=Leads&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Leads") |
| link-or-menu | Students |  | a[aria-label="Students"]<br>a[href="#Contacts"]<br>a.btn<br>a.module-name<br>a:contains("Students") |
| button | Students - More | button | #Contacts<br>button[aria-label="Students - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Student View Students View Student Reports Import Students Send SMS | menu | ul[role="menu"] |
| link-or-menu | Create Student |  | a[href="#Contacts/create"]<br>a.ellipsis_inline<br>a:contains("Create Student") |
| link-or-menu | View Students |  | a[href="#Contacts"]<br>a.ellipsis_inline<br>a:contains("View Students") |
| link-or-menu | View Student Reports |  | a[href="#Reports?filterModule=Contacts"]<br>a.ellipsis_inline<br>a:contains("View Student Reports") |
| link-or-menu | Import Students |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Contacts&return_module=Contacts&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Students") |
| link-or-menu | Send SMS |  | a[href="#bwc/index.php?module=C_SMS&action=sendSMS"]<br>a.ellipsis_inline<br>a:contains("Send SMS") |
| link-or-menu | Sale Orders |  | a[aria-label="Sale Orders"]<br>a[href="#Quotes"]<br>a.btn<br>a.module-name<br>a:contains("Sale Orders") |
| button | Sale Orders - More | button | #Quotes<br>button[aria-label="Sale Orders - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Sale Order View Sale Orders View Sale Order Reports | menu | ul[role="menu"] |
| link-or-menu | Create Sale Order |  | a[href="#Quotes/create"]<br>a.ellipsis_inline<br>a:contains("Create Sale Order") |
| link-or-menu | View Sale Orders |  | a[href="#Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Orders") |
| link-or-menu | View Sale Order Reports |  | a[href="#Reports?filterModule=Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Order Reports") |
| link-or-menu | Classes |  | a[aria-label="Classes"]<br>a[href="#J_Class"]<br>a.btn<br>a.module-name<br>a:contains("Classes") |
| button | Classes - More | button | #J_Class<br>button[aria-label="Classes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Class View Classes View on Calendar Import Scheduler | menu | ul[role="menu"] |
| link-or-menu | Create Class |  | a[href="#J_Class/create"]<br>a.ellipsis_inline<br>a:contains("Create Class") |
| link-or-menu | View Classes |  | a[href="#J_Class"]<br>a.ellipsis_inline<br>a:contains("View Classes") |
| link-or-menu | View on Calendar |  | a[href="#bwc/index.php?module=Calendar&action=index&view=week"]<br>a.ellipsis_inline<br>a:contains("View on Calendar") |
| link-or-menu | Import Scheduler |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Meetings&return_module=Meetings&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Scheduler") |
| link-or-menu | Schedules |  | a[aria-label="Schedules"]<br>a[href="#Meetings"]<br>a.btn<br>a.module-name<br>a:contains("Schedules") |
| button | Schedules - More | button | #Meetings<br>button[aria-label="Schedules - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Placement Test Schedule Demo Schedule Meeting | menu | ul[role="menu"] |
| link-or-menu | Schedule Placement Test |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=PT"]<br>a.ellipsis_inline<br>a:contains("Schedule Placement Test") |
| link-or-menu | Schedule Demo |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=Demo"]<br>a.ellipsis_inline<br>a:contains("Schedule Demo") |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Reports |  | a[aria-label="Reports"]<br>a[href="#Reports"]<br>a.btn<br>a.module-name<br>a:contains("Reports") |
| button | Reports - More | button | #Reports<br>button[aria-label="Reports - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Report View Reports Report Schedules | menu | ul[role="menu"] |
| link-or-menu | Create Report |  | a[href="#bwc/index.php?module=Reports&report_module=&action=index&page=report&Create+Custom+Report=Create+Custom+Report"]<br>a.ellipsis_inline<br>a:contains("Create Report") |
| link-or-menu | View Reports |  | a[href="#Reports"]<br>a.ellipsis_inline<br>a:contains("View Reports") |
| link-or-menu | Report Schedules |  | a[href="#ReportSchedules"]<br>a.ellipsis_inline<br>a:contains("Report Schedules") |
| link-or-menu | Loyalty |  | a[aria-label="Loyalty"]<br>a[href="#J_Loyalty"]<br>a.btn<br>a.module-name<br>a:contains("Loyalty") |
| button | Loyalty - More | button | #J_Loyalty<br>button[aria-label="Loyalty - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Loyalty View Loyalty Import Loyalty | menu | ul[role="menu"] |
| link-or-menu | Create Loyalty |  | a[href="#J_Loyalty/create"]<br>a.ellipsis_inline<br>a:contains("Create Loyalty") |
| link-or-menu | View Loyalty |  | a[href="#J_Loyalty"]<br>a.ellipsis_inline<br>a:contains("View Loyalty") |
| link-or-menu | Import Loyalty |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Loyalty&return_module=J_Loyalty&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Loyalty") |
| link-or-menu | Teachers |  | a[aria-label="Teachers"]<br>a[href="#C_Teachers"]<br>a.btn<br>a.module-name<br>a:contains("Teachers") |
| button | Teachers - More | button | #C_Teachers<br>button[aria-label="Teachers - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Create TA View Teachers Import Teachers | menu | ul[role="menu"] |
| link-or-menu | Create Teacher |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=Teacher"]<br>a.ellipsis_inline<br>a:contains("Create Teacher") |
| link-or-menu | Create TA |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=TA"]<br>a.ellipsis_inline<br>a:contains("Create TA") |
| link-or-menu | View Teachers |  | a[href="#C_Teachers"]<br>a.ellipsis_inline<br>a:contains("View Teachers") |
| link-or-menu | Import Teachers |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Teachers&return_module=C_Teachers&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teachers") |
| link-or-menu | Approval Processes |  | a[aria-label="Approval Processes"]<br>a[href="#ApprovalProcesses"]<br>a.btn<br>a.module-name<br>a:contains("Approval Processes") |
| button | Approval Processes - More | button | #ApprovalProcesses<br>button[aria-label="Approval Processes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Approval Processes | menu | ul[role="menu"] |
| link-or-menu | Approval Processes |  | a[href="#ApprovalProcesses/layout/approvalList"]<br>a.ellipsis_inline<br>a:contains("Approval Processes") |
| link-or-menu | Accounts |  | a[aria-label="Accounts"]<br>a[href="#Accounts"]<br>a.btn<br>a.module-name<br>a:contains("Accounts") |
| button | Accounts - More | button | #Accounts<br>button[aria-label="Accounts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Account View Accounts View Account Reports Import Accounts | menu | ul[role="menu"] |
| link-or-menu | Create Account |  | a[href="#Accounts/create"]<br>a.ellipsis_inline<br>a:contains("Create Account") |
| link-or-menu | View Accounts |  | a[href="#Accounts"]<br>a.ellipsis_inline<br>a:contains("View Accounts") |
| link-or-menu | View Account Reports |  | a[href="#Reports?filterModule=Accounts"]<br>a.ellipsis_inline<br>a:contains("View Account Reports") |
| link-or-menu | Import Accounts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Accounts"]<br>a.ellipsis_inline<br>a:contains("Import Accounts") |
| link-or-menu | Rooms |  | a[aria-label="Rooms"]<br>a[href="#C_Rooms"]<br>a.btn<br>a.module-name<br>a:contains("Rooms") |
| button | Rooms - More | button | #C_Rooms<br>button[aria-label="Rooms - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Room View Rooms Import Rooms | menu | ul[role="menu"] |
| link-or-menu | Create Room |  | a[href="#C_Rooms/create"]<br>a.ellipsis_inline<br>a:contains("Create Room") |
| link-or-menu | View Rooms |  | a[href="#C_Rooms"]<br>a.ellipsis_inline<br>a:contains("View Rooms") |
| link-or-menu | Import Rooms |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Rooms&return_module=C_Rooms&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Rooms") |
| link-or-menu | Teacher Contracts |  | a[aria-label="Teacher Contracts"]<br>a[href="#J_Teachercontract"]<br>a.btn<br>a.module-name<br>a:contains("Teacher Contracts") |
| button | Teacher Contracts - More | button | #J_Teachercontract<br>button[aria-label="Teacher Contracts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Contract View Teacher Contracts Import Teacher Contracts | menu | ul[role="menu"] |
| link-or-menu | Create Teacher Contract |  | a[href="#J_Teachercontract/create"]<br>a.ellipsis_inline<br>a:contains("Create Teacher Contract") |
| link-or-menu | View Teacher Contracts |  | a[href="#J_Teachercontract"]<br>a.ellipsis_inline<br>a:contains("View Teacher Contracts") |
| link-or-menu | Import Teacher Contracts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Teachercontract&return_module=J_Teachercontract&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teacher Contracts") |
| link-or-menu | Kind Of Courses |  | a[aria-label="Kind Of Courses"]<br>a[href="#J_Kindofcourse"]<br>a.btn<br>a.module-name<br>a:contains("Kind Of Courses") |
| button | Kind Of Courses - More | button | #J_Kindofcourse<br>button[aria-label="Kind Of Courses - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Kind Of Course View Kind Of Courses Import Kind Of Courses | menu | ul[role="menu"] |
| link-or-menu | Create Kind Of Course |  | a[href="#J_Kindofcourse/create"]<br>a.ellipsis_inline<br>a:contains("Create Kind Of Course") |
| link-or-menu | View Kind Of Courses |  | a[href="#J_Kindofcourse"]<br>a.ellipsis_inline<br>a:contains("View Kind Of Courses") |
| link-or-menu | Import Kind Of Courses |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Kindofcourse&return_module=J_Kindofcourse&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Kind Of Courses") |
| link-or-menu | Activities |  | a[aria-label="Activities"]<br>a[href="#M_Activities"]<br>a.btn<br>a.module-name<br>a:contains("Activities") |
| button | Activities - More | button | #M_Activities<br>button[aria-label="Activities - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Activities View Activities Import Syllabus | menu | ul[role="menu"] |
| link-or-menu | Create Activities |  | a[href="#M_Activities/create"]<br>a.ellipsis_inline<br>a:contains("Create Activities") |
| link-or-menu | View Activities |  | a[href="#M_Activities"]<br>a.ellipsis_inline<br>a:contains("View Activities") |
| link-or-menu | Import Syllabus |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Syllabus&query=true&report_module=M_Activities"]<br>a.ellipsis_inline<br>a:contains("Import Syllabus") |
| link-or-menu | Work permit |  | a[aria-label="Work permit"]<br>a[href="#J_Workpermit"]<br>a.btn<br>a.module-name<br>a:contains("Work permit") |
| button | Work permit - More | button | #J_Workpermit<br>button[aria-label="Work permit - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Work permit View Work permit | menu | ul[role="menu"] |
| link-or-menu | Create Work permit |  | a[href="#J_Workpermit/create"]<br>a.ellipsis_inline<br>a:contains("Create Work permit") |
| link-or-menu | View Work permit |  | a[href="#J_Workpermit"]<br>a.ellipsis_inline<br>a:contains("View Work permit") |
| link-or-menu | Gallery |  | a[aria-label="Gallery"]<br>a[href="#C_Gallery"]<br>a.btn<br>a.module-name<br>a:contains("Gallery") |
| button | Gallery - More | button | #C_Gallery<br>button[aria-label="Gallery - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gallery View Gallery | menu | ul[role="menu"] |
| link-or-menu | Create Gallery |  | a[href="#C_Gallery/create"]<br>a.ellipsis_inline<br>a:contains("Create Gallery") |
| link-or-menu | View Gallery |  | a[href="#C_Gallery"]<br>a.ellipsis_inline<br>a:contains("View Gallery") |
| link-or-menu | Gradebooks |  | a[aria-label="Gradebooks"]<br>a[href="#J_Gradebook"]<br>a.btn<br>a.module-name<br>a:contains("Gradebooks") |
| button | Gradebooks - More | button | #J_Gradebook<br>button[aria-label="Gradebooks - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | View Gradebooks | menu | ul[role="menu"] |
| link-or-menu | View Gradebooks |  | a[href="#J_Gradebook"]<br>a.ellipsis_inline<br>a:contains("View Gradebooks") |
| link-or-menu | Gradebook Settings |  | a[aria-label="Gradebook Settings"]<br>a[href="#J_GradebookConfig"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Settings") |
| button | Gradebook Settings - More | button | #J_GradebookConfig<br>button[aria-label="Gradebook Settings - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting View Gradebook Settings | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting |  | a[href="#J_GradebookConfig/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting") |
| link-or-menu | View Gradebook Settings |  | a[href="#J_GradebookConfig"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Settings") |
| link-or-menu | Gradebook Setting Groups |  | a[aria-label="Gradebook Setting Groups"]<br>a[href="#J_GradebookSettingGroup"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Setting Groups") |
| button | Gradebook Setting Groups - More | button | #J_GradebookSettingGroup<br>button[aria-label="Gradebook Setting Groups - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting Group View Gradebook Setting Groups | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting Group |  | a[href="#J_GradebookSettingGroup/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting Group") |
| link-or-menu | View Gradebook Setting Groups |  | a[href="#J_GradebookSettingGroup"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Setting Groups") |
| link-or-menu | Admin Hours |  | a[aria-label="Admin Hours"]<br>a[href="#bwc/index.php?module=C_Timesheet&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Admin Hours") |
| link-or-menu | Campaigns |  | a[aria-label="Campaigns"]<br>a[href="#bwc/index.php?module=Campaigns&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Campaigns") |
| button | Campaigns - More | button | #Campaigns<br>button[aria-label="Campaigns - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Campaign (Wizard) Create Campaign (Classic) View Campaigns View Newsletters Create Email Template View Email Temp | menu | ul[role="menu"] |
| link-or-menu | Create Campaign (Wizard) |  | a[href="#bwc/index.php?module=Campaigns&action=WizardHome&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Wizard)") |
| link-or-menu | Create Campaign (Classic) |  | a[href="#bwc/index.php?module=Campaigns&action=EditView&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Classic)") |
| link-or-menu | View Campaigns |  | a[href="#bwc/index.php?module=Campaigns&action=index&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Campaigns") |
| link-or-menu | View Newsletters |  | a[href="#bwc/index.php?module=Campaigns&action=newsletterlist&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Newsletters") |
| link-or-menu | Create Email Template |  | a[href="#bwc/index.php?module=EmailTemplates&action=EditView&return_module=EmailTemplates&return_action=DetailView"]<br>a.ellipsis_inline<br>a:contains("Create Email Template") |
| link-or-menu | View Email Templates |  | a[href="#bwc/index.php?module=EmailTemplates&action=index"]<br>a.ellipsis_inline<br>a:contains("View Email Templates") |
| link-or-menu | Set Up Email |  | a[href="#bwc/index.php?module=Campaigns&action=WizardEmailSetup&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Set Up Email") |
| link-or-menu | View Diagnostics |  | a[href="#bwc/index.php?module=Campaigns&action=CampaignDiagnostic&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Diagnostics") |
| link-or-menu | Create Lead Form |  | a[href="#bwc/index.php?module=Campaigns&action=WebToLeadCreation&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Lead Form") |
| link-or-menu | Calls |  | a[aria-label="Calls"]<br>a[href="#Calls"]<br>a.btn<br>a.module-name<br>a:contains("Calls") |
| button | Calls - More | button | #Calls<br>button[aria-label="Calls - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Log Call View Calls Import Calls Activities Report | menu | ul[role="menu"] |
| link-or-menu | Log Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Log Call") |

## 6. Targets | Scots CRM
- URL: https://stagingcrm.scotsenglish.edu.vn/index.php#Prospects
- Headings: Targets Create Target Import Targets | Targets List Dashboard Manage Dashboards Loading... Create Cancel Delete Save Cancel Save
- Elements captured: 476

| Kind | Label/Text | Role/Type | Candidate selectors |
|---|---|---|---|
| navigation | main module navigation | navigation | ul[role="navigation"]<br>ul[aria-label="main module navigation"]<br>ul.nav<br>ul.megamenu |
| link-or-menu | Home |  | a[aria-label="Home"]<br>a[href="#Home"]<br>a.cube<br>a.btn |
| button | Home - More | button | button[aria-label="Home - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Dashboard Activity Stream Manage Dashboards | menu | ul[role="menu"] |
| link-or-menu | Create Dashboard |  | a[href="#Home/create"]<br>a.ellipsis_inline<br>a:contains("Create Dashboard") |
| link-or-menu | Activity Stream |  | a[href="#activities"]<br>a.ellipsis_inline<br>a:contains("Activity Stream") |
| link-or-menu | Manage Dashboards |  | a[href="#Dashboards?moduleName=Home"]<br>a.ellipsis_inline<br>a:contains("Manage Dashboards") |
| link-or-menu | Calendar |  | a[aria-label="Calendar"]<br>a[href="#bwc/index.php?module=Calendar&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Calendar") |
| button | Calendar - More | button | #Calendar<br>button[aria-label="Calendar - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Meeting Schedule Call Create Task Today | menu | ul[role="menu"] |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Schedule Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Call") |
| link-or-menu | Create Task |  | a[href="#Tasks/create"]<br>a.ellipsis_inline<br>a:contains("Create Task") |
| link-or-menu | Today |  | a[href="#bwc/index.php?module=Calendar&action=index&view=day"]<br>a.ellipsis_inline<br>a:contains("Today") |
| link-or-menu | Targets |  | a[aria-label="Targets"]<br>a[href="#Prospects"]<br>a.btn<br>a.module-name<br>a:contains("Targets") |
| button | Targets - More | button | #Prospects<br>button[aria-label="Targets - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Target Create Target From vCard View Targets Import Targets | menu | ul[role="menu"] |
| link-or-menu | Create Target |  | a[href="#Prospects/create"]<br>a.ellipsis_inline<br>a:contains("Create Target") |
| link-or-menu | Create Target From vCard |  | a[href="#Prospects/vcard-import"]<br>a.ellipsis_inline<br>a:contains("Create Target From vCard") |
| link-or-menu | View Targets |  | a[href="#Prospects"]<br>a.ellipsis_inline<br>a:contains("View Targets") |
| link-or-menu | Import Targets |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Prospects&return_module=Prospects&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Targets") |
| link-or-menu | Leads |  | a[aria-label="Leads"]<br>a[href="#Leads"]<br>a.btn<br>a.module-name<br>a:contains("Leads") |
| button | Leads - More | button | #Leads<br>button[aria-label="Leads - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Lead View Leads View Lead Reports Import Leads | menu | ul[role="menu"] |
| link-or-menu | Create Lead |  | a[href="#Leads/create"]<br>a.ellipsis_inline<br>a:contains("Create Lead") |
| link-or-menu | View Leads |  | a[href="#Leads"]<br>a.ellipsis_inline<br>a:contains("View Leads") |
| link-or-menu | View Lead Reports |  | a[href="#Reports?filterModule=Leads"]<br>a.ellipsis_inline<br>a:contains("View Lead Reports") |
| link-or-menu | Import Leads |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Leads&return_module=Leads&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Leads") |
| link-or-menu | Students |  | a[aria-label="Students"]<br>a[href="#Contacts"]<br>a.btn<br>a.module-name<br>a:contains("Students") |
| button | Students - More | button | #Contacts<br>button[aria-label="Students - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Student View Students View Student Reports Import Students Send SMS | menu | ul[role="menu"] |
| link-or-menu | Create Student |  | a[href="#Contacts/create"]<br>a.ellipsis_inline<br>a:contains("Create Student") |
| link-or-menu | View Students |  | a[href="#Contacts"]<br>a.ellipsis_inline<br>a:contains("View Students") |
| link-or-menu | View Student Reports |  | a[href="#Reports?filterModule=Contacts"]<br>a.ellipsis_inline<br>a:contains("View Student Reports") |
| link-or-menu | Import Students |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Contacts&return_module=Contacts&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Students") |
| link-or-menu | Send SMS |  | a[href="#bwc/index.php?module=C_SMS&action=sendSMS"]<br>a.ellipsis_inline<br>a:contains("Send SMS") |
| link-or-menu | Sale Orders |  | a[aria-label="Sale Orders"]<br>a[href="#Quotes"]<br>a.btn<br>a.module-name<br>a:contains("Sale Orders") |
| button | Sale Orders - More | button | #Quotes<br>button[aria-label="Sale Orders - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Sale Order View Sale Orders View Sale Order Reports | menu | ul[role="menu"] |
| link-or-menu | Create Sale Order |  | a[href="#Quotes/create"]<br>a.ellipsis_inline<br>a:contains("Create Sale Order") |
| link-or-menu | View Sale Orders |  | a[href="#Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Orders") |
| link-or-menu | View Sale Order Reports |  | a[href="#Reports?filterModule=Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Order Reports") |
| link-or-menu | Classes |  | a[aria-label="Classes"]<br>a[href="#J_Class"]<br>a.btn<br>a.module-name<br>a:contains("Classes") |
| button | Classes - More | button | #J_Class<br>button[aria-label="Classes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Class View Classes View on Calendar Import Scheduler | menu | ul[role="menu"] |
| link-or-menu | Create Class |  | a[href="#J_Class/create"]<br>a.ellipsis_inline<br>a:contains("Create Class") |
| link-or-menu | View Classes |  | a[href="#J_Class"]<br>a.ellipsis_inline<br>a:contains("View Classes") |
| link-or-menu | View on Calendar |  | a[href="#bwc/index.php?module=Calendar&action=index&view=week"]<br>a.ellipsis_inline<br>a:contains("View on Calendar") |
| link-or-menu | Import Scheduler |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Meetings&return_module=Meetings&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Scheduler") |
| link-or-menu | Schedules |  | a[aria-label="Schedules"]<br>a[href="#Meetings"]<br>a.btn<br>a.module-name<br>a:contains("Schedules") |
| button | Schedules - More | button | #Meetings<br>button[aria-label="Schedules - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Placement Test Schedule Demo Schedule Meeting | menu | ul[role="menu"] |
| link-or-menu | Schedule Placement Test |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=PT"]<br>a.ellipsis_inline<br>a:contains("Schedule Placement Test") |
| link-or-menu | Schedule Demo |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=Demo"]<br>a.ellipsis_inline<br>a:contains("Schedule Demo") |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Reports |  | a[aria-label="Reports"]<br>a[href="#Reports"]<br>a.btn<br>a.module-name<br>a:contains("Reports") |
| button | Reports - More | button | #Reports<br>button[aria-label="Reports - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Report View Reports Report Schedules | menu | ul[role="menu"] |
| link-or-menu | Create Report |  | a[href="#bwc/index.php?module=Reports&report_module=&action=index&page=report&Create+Custom+Report=Create+Custom+Report"]<br>a.ellipsis_inline<br>a:contains("Create Report") |
| link-or-menu | View Reports |  | a[href="#Reports"]<br>a.ellipsis_inline<br>a:contains("View Reports") |
| link-or-menu | Report Schedules |  | a[href="#ReportSchedules"]<br>a.ellipsis_inline<br>a:contains("Report Schedules") |
| link-or-menu | Loyalty |  | a[aria-label="Loyalty"]<br>a[href="#J_Loyalty"]<br>a.btn<br>a.module-name<br>a:contains("Loyalty") |
| button | Loyalty - More | button | #J_Loyalty<br>button[aria-label="Loyalty - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Loyalty View Loyalty Import Loyalty | menu | ul[role="menu"] |
| link-or-menu | Create Loyalty |  | a[href="#J_Loyalty/create"]<br>a.ellipsis_inline<br>a:contains("Create Loyalty") |
| link-or-menu | View Loyalty |  | a[href="#J_Loyalty"]<br>a.ellipsis_inline<br>a:contains("View Loyalty") |
| link-or-menu | Import Loyalty |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Loyalty&return_module=J_Loyalty&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Loyalty") |
| link-or-menu | Teachers |  | a[aria-label="Teachers"]<br>a[href="#C_Teachers"]<br>a.btn<br>a.module-name<br>a:contains("Teachers") |
| button | Teachers - More | button | #C_Teachers<br>button[aria-label="Teachers - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Create TA View Teachers Import Teachers | menu | ul[role="menu"] |
| link-or-menu | Create Teacher |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=Teacher"]<br>a.ellipsis_inline<br>a:contains("Create Teacher") |
| link-or-menu | Create TA |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=TA"]<br>a.ellipsis_inline<br>a:contains("Create TA") |
| link-or-menu | View Teachers |  | a[href="#C_Teachers"]<br>a.ellipsis_inline<br>a:contains("View Teachers") |
| link-or-menu | Import Teachers |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Teachers&return_module=C_Teachers&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teachers") |
| link-or-menu | Approval Processes |  | a[aria-label="Approval Processes"]<br>a[href="#ApprovalProcesses"]<br>a.btn<br>a.module-name<br>a:contains("Approval Processes") |
| button | Approval Processes - More | button | #ApprovalProcesses<br>button[aria-label="Approval Processes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Approval Processes | menu | ul[role="menu"] |
| link-or-menu | Approval Processes |  | a[href="#ApprovalProcesses/layout/approvalList"]<br>a.ellipsis_inline<br>a:contains("Approval Processes") |
| link-or-menu | Accounts |  | a[aria-label="Accounts"]<br>a[href="#Accounts"]<br>a.btn<br>a.module-name<br>a:contains("Accounts") |
| button | Accounts - More | button | #Accounts<br>button[aria-label="Accounts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Account View Accounts View Account Reports Import Accounts | menu | ul[role="menu"] |
| link-or-menu | Create Account |  | a[href="#Accounts/create"]<br>a.ellipsis_inline<br>a:contains("Create Account") |
| link-or-menu | View Accounts |  | a[href="#Accounts"]<br>a.ellipsis_inline<br>a:contains("View Accounts") |
| link-or-menu | View Account Reports |  | a[href="#Reports?filterModule=Accounts"]<br>a.ellipsis_inline<br>a:contains("View Account Reports") |
| link-or-menu | Import Accounts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Accounts"]<br>a.ellipsis_inline<br>a:contains("Import Accounts") |
| link-or-menu | Rooms |  | a[aria-label="Rooms"]<br>a[href="#C_Rooms"]<br>a.btn<br>a.module-name<br>a:contains("Rooms") |
| button | Rooms - More | button | #C_Rooms<br>button[aria-label="Rooms - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Room View Rooms Import Rooms | menu | ul[role="menu"] |
| link-or-menu | Create Room |  | a[href="#C_Rooms/create"]<br>a.ellipsis_inline<br>a:contains("Create Room") |
| link-or-menu | View Rooms |  | a[href="#C_Rooms"]<br>a.ellipsis_inline<br>a:contains("View Rooms") |
| link-or-menu | Import Rooms |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Rooms&return_module=C_Rooms&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Rooms") |
| link-or-menu | Teacher Contracts |  | a[aria-label="Teacher Contracts"]<br>a[href="#J_Teachercontract"]<br>a.btn<br>a.module-name<br>a:contains("Teacher Contracts") |
| button | Teacher Contracts - More | button | #J_Teachercontract<br>button[aria-label="Teacher Contracts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Contract View Teacher Contracts Import Teacher Contracts | menu | ul[role="menu"] |
| link-or-menu | Create Teacher Contract |  | a[href="#J_Teachercontract/create"]<br>a.ellipsis_inline<br>a:contains("Create Teacher Contract") |
| link-or-menu | View Teacher Contracts |  | a[href="#J_Teachercontract"]<br>a.ellipsis_inline<br>a:contains("View Teacher Contracts") |
| link-or-menu | Import Teacher Contracts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Teachercontract&return_module=J_Teachercontract&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teacher Contracts") |
| link-or-menu | Kind Of Courses |  | a[aria-label="Kind Of Courses"]<br>a[href="#J_Kindofcourse"]<br>a.btn<br>a.module-name<br>a:contains("Kind Of Courses") |
| button | Kind Of Courses - More | button | #J_Kindofcourse<br>button[aria-label="Kind Of Courses - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Kind Of Course View Kind Of Courses Import Kind Of Courses | menu | ul[role="menu"] |
| link-or-menu | Create Kind Of Course |  | a[href="#J_Kindofcourse/create"]<br>a.ellipsis_inline<br>a:contains("Create Kind Of Course") |
| link-or-menu | View Kind Of Courses |  | a[href="#J_Kindofcourse"]<br>a.ellipsis_inline<br>a:contains("View Kind Of Courses") |
| link-or-menu | Import Kind Of Courses |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Kindofcourse&return_module=J_Kindofcourse&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Kind Of Courses") |
| link-or-menu | Activities |  | a[aria-label="Activities"]<br>a[href="#M_Activities"]<br>a.btn<br>a.module-name<br>a:contains("Activities") |
| button | Activities - More | button | #M_Activities<br>button[aria-label="Activities - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Activities View Activities Import Syllabus | menu | ul[role="menu"] |
| link-or-menu | Create Activities |  | a[href="#M_Activities/create"]<br>a.ellipsis_inline<br>a:contains("Create Activities") |
| link-or-menu | View Activities |  | a[href="#M_Activities"]<br>a.ellipsis_inline<br>a:contains("View Activities") |
| link-or-menu | Import Syllabus |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Syllabus&query=true&report_module=M_Activities"]<br>a.ellipsis_inline<br>a:contains("Import Syllabus") |
| link-or-menu | Work permit |  | a[aria-label="Work permit"]<br>a[href="#J_Workpermit"]<br>a.btn<br>a.module-name<br>a:contains("Work permit") |
| button | Work permit - More | button | #J_Workpermit<br>button[aria-label="Work permit - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Work permit View Work permit | menu | ul[role="menu"] |
| link-or-menu | Create Work permit |  | a[href="#J_Workpermit/create"]<br>a.ellipsis_inline<br>a:contains("Create Work permit") |
| link-or-menu | View Work permit |  | a[href="#J_Workpermit"]<br>a.ellipsis_inline<br>a:contains("View Work permit") |
| link-or-menu | Gallery |  | a[aria-label="Gallery"]<br>a[href="#C_Gallery"]<br>a.btn<br>a.module-name<br>a:contains("Gallery") |
| button | Gallery - More | button | #C_Gallery<br>button[aria-label="Gallery - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gallery View Gallery | menu | ul[role="menu"] |
| link-or-menu | Create Gallery |  | a[href="#C_Gallery/create"]<br>a.ellipsis_inline<br>a:contains("Create Gallery") |
| link-or-menu | View Gallery |  | a[href="#C_Gallery"]<br>a.ellipsis_inline<br>a:contains("View Gallery") |
| link-or-menu | Gradebooks |  | a[aria-label="Gradebooks"]<br>a[href="#J_Gradebook"]<br>a.btn<br>a.module-name<br>a:contains("Gradebooks") |
| button | Gradebooks - More | button | #J_Gradebook<br>button[aria-label="Gradebooks - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | View Gradebooks | menu | ul[role="menu"] |
| link-or-menu | View Gradebooks |  | a[href="#J_Gradebook"]<br>a.ellipsis_inline<br>a:contains("View Gradebooks") |
| link-or-menu | Gradebook Settings |  | a[aria-label="Gradebook Settings"]<br>a[href="#J_GradebookConfig"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Settings") |
| button | Gradebook Settings - More | button | #J_GradebookConfig<br>button[aria-label="Gradebook Settings - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting View Gradebook Settings | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting |  | a[href="#J_GradebookConfig/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting") |
| link-or-menu | View Gradebook Settings |  | a[href="#J_GradebookConfig"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Settings") |
| link-or-menu | Gradebook Setting Groups |  | a[aria-label="Gradebook Setting Groups"]<br>a[href="#J_GradebookSettingGroup"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Setting Groups") |
| button | Gradebook Setting Groups - More | button | #J_GradebookSettingGroup<br>button[aria-label="Gradebook Setting Groups - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting Group View Gradebook Setting Groups | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting Group |  | a[href="#J_GradebookSettingGroup/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting Group") |
| link-or-menu | View Gradebook Setting Groups |  | a[href="#J_GradebookSettingGroup"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Setting Groups") |
| link-or-menu | Admin Hours |  | a[aria-label="Admin Hours"]<br>a[href="#bwc/index.php?module=C_Timesheet&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Admin Hours") |
| link-or-menu | Campaigns |  | a[aria-label="Campaigns"]<br>a[href="#bwc/index.php?module=Campaigns&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Campaigns") |
| button | Campaigns - More | button | #Campaigns<br>button[aria-label="Campaigns - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Campaign (Wizard) Create Campaign (Classic) View Campaigns View Newsletters Create Email Template View Email Temp | menu | ul[role="menu"] |
| link-or-menu | Create Campaign (Wizard) |  | a[href="#bwc/index.php?module=Campaigns&action=WizardHome&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Wizard)") |
| link-or-menu | Create Campaign (Classic) |  | a[href="#bwc/index.php?module=Campaigns&action=EditView&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Classic)") |
| link-or-menu | View Campaigns |  | a[href="#bwc/index.php?module=Campaigns&action=index&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Campaigns") |
| link-or-menu | View Newsletters |  | a[href="#bwc/index.php?module=Campaigns&action=newsletterlist&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Newsletters") |
| link-or-menu | Create Email Template |  | a[href="#bwc/index.php?module=EmailTemplates&action=EditView&return_module=EmailTemplates&return_action=DetailView"]<br>a.ellipsis_inline<br>a:contains("Create Email Template") |
| link-or-menu | View Email Templates |  | a[href="#bwc/index.php?module=EmailTemplates&action=index"]<br>a.ellipsis_inline<br>a:contains("View Email Templates") |
| link-or-menu | Set Up Email |  | a[href="#bwc/index.php?module=Campaigns&action=WizardEmailSetup&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Set Up Email") |
| link-or-menu | View Diagnostics |  | a[href="#bwc/index.php?module=Campaigns&action=CampaignDiagnostic&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Diagnostics") |
| link-or-menu | Create Lead Form |  | a[href="#bwc/index.php?module=Campaigns&action=WebToLeadCreation&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Lead Form") |
| link-or-menu | Calls |  | a[aria-label="Calls"]<br>a[href="#Calls"]<br>a.btn<br>a.module-name<br>a:contains("Calls") |
| button | Calls - More | button | #Calls<br>button[aria-label="Calls - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Log Call View Calls Import Calls Activities Report | menu | ul[role="menu"] |
| link-or-menu | Log Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Log Call") |

## 7. Leads | Scots CRM
- URL: https://stagingcrm.scotsenglish.edu.vn/index.php#Leads
- Headings: Leads (20 of 21+) Create Lead View Lead Reports Import Leads | Leads List Dashboard Manage Dashboards Loading... Create Cancel Delete Save Cancel Save
- Elements captured: 721

| Kind | Label/Text | Role/Type | Candidate selectors |
|---|---|---|---|
| navigation | main module navigation | navigation | ul[role="navigation"]<br>ul[aria-label="main module navigation"]<br>ul.nav<br>ul.megamenu |
| link-or-menu | Home |  | a[aria-label="Home"]<br>a[href="#Home"]<br>a.cube<br>a.btn |
| button | Home - More | button | button[aria-label="Home - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Dashboard Activity Stream Manage Dashboards | menu | ul[role="menu"] |
| link-or-menu | Create Dashboard |  | a[href="#Home/create"]<br>a.ellipsis_inline<br>a:contains("Create Dashboard") |
| link-or-menu | Activity Stream |  | a[href="#activities"]<br>a.ellipsis_inline<br>a:contains("Activity Stream") |
| link-or-menu | Manage Dashboards |  | a[href="#Dashboards?moduleName=Home"]<br>a.ellipsis_inline<br>a:contains("Manage Dashboards") |
| link-or-menu | Calendar |  | a[aria-label="Calendar"]<br>a[href="#bwc/index.php?module=Calendar&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Calendar") |
| button | Calendar - More | button | #Calendar<br>button[aria-label="Calendar - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Meeting Schedule Call Create Task Today | menu | ul[role="menu"] |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Schedule Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Call") |
| link-or-menu | Create Task |  | a[href="#Tasks/create"]<br>a.ellipsis_inline<br>a:contains("Create Task") |
| link-or-menu | Today |  | a[href="#bwc/index.php?module=Calendar&action=index&view=day"]<br>a.ellipsis_inline<br>a:contains("Today") |
| link-or-menu | Targets |  | a[aria-label="Targets"]<br>a[href="#Prospects"]<br>a.btn<br>a.module-name<br>a:contains("Targets") |
| button | Targets - More | button | #Prospects<br>button[aria-label="Targets - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Target Create Target From vCard View Targets Import Targets | menu | ul[role="menu"] |
| link-or-menu | Create Target |  | a[href="#Prospects/create"]<br>a.ellipsis_inline<br>a:contains("Create Target") |
| link-or-menu | Create Target From vCard |  | a[href="#Prospects/vcard-import"]<br>a.ellipsis_inline<br>a:contains("Create Target From vCard") |
| link-or-menu | View Targets |  | a[href="#Prospects"]<br>a.ellipsis_inline<br>a:contains("View Targets") |
| link-or-menu | Import Targets |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Prospects&return_module=Prospects&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Targets") |
| link-or-menu | Leads |  | a[aria-label="Leads"]<br>a[href="#Leads"]<br>a.btn<br>a.module-name<br>a:contains("Leads") |
| button | Leads - More | button | #Leads<br>button[aria-label="Leads - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Lead View Leads View Lead Reports Import Leads | menu | ul[role="menu"] |
| link-or-menu | Create Lead |  | a[href="#Leads/create"]<br>a.ellipsis_inline<br>a:contains("Create Lead") |
| link-or-menu | View Leads |  | a[href="#Leads"]<br>a.ellipsis_inline<br>a:contains("View Leads") |
| link-or-menu | View Lead Reports |  | a[href="#Reports?filterModule=Leads"]<br>a.ellipsis_inline<br>a:contains("View Lead Reports") |
| link-or-menu | Import Leads |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Leads&return_module=Leads&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Leads") |
| link-or-menu | Students |  | a[aria-label="Students"]<br>a[href="#Contacts"]<br>a.btn<br>a.module-name<br>a:contains("Students") |
| button | Students - More | button | #Contacts<br>button[aria-label="Students - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Student View Students View Student Reports Import Students Send SMS | menu | ul[role="menu"] |
| link-or-menu | Create Student |  | a[href="#Contacts/create"]<br>a.ellipsis_inline<br>a:contains("Create Student") |
| link-or-menu | View Students |  | a[href="#Contacts"]<br>a.ellipsis_inline<br>a:contains("View Students") |
| link-or-menu | View Student Reports |  | a[href="#Reports?filterModule=Contacts"]<br>a.ellipsis_inline<br>a:contains("View Student Reports") |
| link-or-menu | Import Students |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Contacts&return_module=Contacts&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Students") |
| link-or-menu | Send SMS |  | a[href="#bwc/index.php?module=C_SMS&action=sendSMS"]<br>a.ellipsis_inline<br>a:contains("Send SMS") |
| link-or-menu | Sale Orders |  | a[aria-label="Sale Orders"]<br>a[href="#Quotes"]<br>a.btn<br>a.module-name<br>a:contains("Sale Orders") |
| button | Sale Orders - More | button | #Quotes<br>button[aria-label="Sale Orders - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Sale Order View Sale Orders View Sale Order Reports | menu | ul[role="menu"] |
| link-or-menu | Create Sale Order |  | a[href="#Quotes/create"]<br>a.ellipsis_inline<br>a:contains("Create Sale Order") |
| link-or-menu | View Sale Orders |  | a[href="#Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Orders") |
| link-or-menu | View Sale Order Reports |  | a[href="#Reports?filterModule=Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Order Reports") |
| link-or-menu | Classes |  | a[aria-label="Classes"]<br>a[href="#J_Class"]<br>a.btn<br>a.module-name<br>a:contains("Classes") |
| button | Classes - More | button | #J_Class<br>button[aria-label="Classes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Class View Classes View on Calendar Import Scheduler | menu | ul[role="menu"] |
| link-or-menu | Create Class |  | a[href="#J_Class/create"]<br>a.ellipsis_inline<br>a:contains("Create Class") |
| link-or-menu | View Classes |  | a[href="#J_Class"]<br>a.ellipsis_inline<br>a:contains("View Classes") |
| link-or-menu | View on Calendar |  | a[href="#bwc/index.php?module=Calendar&action=index&view=week"]<br>a.ellipsis_inline<br>a:contains("View on Calendar") |
| link-or-menu | Import Scheduler |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Meetings&return_module=Meetings&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Scheduler") |
| link-or-menu | Schedules |  | a[aria-label="Schedules"]<br>a[href="#Meetings"]<br>a.btn<br>a.module-name<br>a:contains("Schedules") |
| button | Schedules - More | button | #Meetings<br>button[aria-label="Schedules - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Placement Test Schedule Demo Schedule Meeting | menu | ul[role="menu"] |
| link-or-menu | Schedule Placement Test |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=PT"]<br>a.ellipsis_inline<br>a:contains("Schedule Placement Test") |
| link-or-menu | Schedule Demo |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=Demo"]<br>a.ellipsis_inline<br>a:contains("Schedule Demo") |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Reports |  | a[aria-label="Reports"]<br>a[href="#Reports"]<br>a.btn<br>a.module-name<br>a:contains("Reports") |
| button | Reports - More | button | #Reports<br>button[aria-label="Reports - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Report View Reports Report Schedules | menu | ul[role="menu"] |
| link-or-menu | Create Report |  | a[href="#bwc/index.php?module=Reports&report_module=&action=index&page=report&Create+Custom+Report=Create+Custom+Report"]<br>a.ellipsis_inline<br>a:contains("Create Report") |
| link-or-menu | View Reports |  | a[href="#Reports"]<br>a.ellipsis_inline<br>a:contains("View Reports") |
| link-or-menu | Report Schedules |  | a[href="#ReportSchedules"]<br>a.ellipsis_inline<br>a:contains("Report Schedules") |
| link-or-menu | Loyalty |  | a[aria-label="Loyalty"]<br>a[href="#J_Loyalty"]<br>a.btn<br>a.module-name<br>a:contains("Loyalty") |
| button | Loyalty - More | button | #J_Loyalty<br>button[aria-label="Loyalty - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Loyalty View Loyalty Import Loyalty | menu | ul[role="menu"] |
| link-or-menu | Create Loyalty |  | a[href="#J_Loyalty/create"]<br>a.ellipsis_inline<br>a:contains("Create Loyalty") |
| link-or-menu | View Loyalty |  | a[href="#J_Loyalty"]<br>a.ellipsis_inline<br>a:contains("View Loyalty") |
| link-or-menu | Import Loyalty |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Loyalty&return_module=J_Loyalty&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Loyalty") |
| link-or-menu | Teachers |  | a[aria-label="Teachers"]<br>a[href="#C_Teachers"]<br>a.btn<br>a.module-name<br>a:contains("Teachers") |
| button | Teachers - More | button | #C_Teachers<br>button[aria-label="Teachers - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Create TA View Teachers Import Teachers | menu | ul[role="menu"] |
| link-or-menu | Create Teacher |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=Teacher"]<br>a.ellipsis_inline<br>a:contains("Create Teacher") |
| link-or-menu | Create TA |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=TA"]<br>a.ellipsis_inline<br>a:contains("Create TA") |
| link-or-menu | View Teachers |  | a[href="#C_Teachers"]<br>a.ellipsis_inline<br>a:contains("View Teachers") |
| link-or-menu | Import Teachers |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Teachers&return_module=C_Teachers&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teachers") |
| link-or-menu | Approval Processes |  | a[aria-label="Approval Processes"]<br>a[href="#ApprovalProcesses"]<br>a.btn<br>a.module-name<br>a:contains("Approval Processes") |
| button | Approval Processes - More | button | #ApprovalProcesses<br>button[aria-label="Approval Processes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Approval Processes | menu | ul[role="menu"] |
| link-or-menu | Approval Processes |  | a[href="#ApprovalProcesses/layout/approvalList"]<br>a.ellipsis_inline<br>a:contains("Approval Processes") |
| link-or-menu | Accounts |  | a[aria-label="Accounts"]<br>a[href="#Accounts"]<br>a.btn<br>a.module-name<br>a:contains("Accounts") |
| button | Accounts - More | button | #Accounts<br>button[aria-label="Accounts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Account View Accounts View Account Reports Import Accounts | menu | ul[role="menu"] |
| link-or-menu | Create Account |  | a[href="#Accounts/create"]<br>a.ellipsis_inline<br>a:contains("Create Account") |
| link-or-menu | View Accounts |  | a[href="#Accounts"]<br>a.ellipsis_inline<br>a:contains("View Accounts") |
| link-or-menu | View Account Reports |  | a[href="#Reports?filterModule=Accounts"]<br>a.ellipsis_inline<br>a:contains("View Account Reports") |
| link-or-menu | Import Accounts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Accounts"]<br>a.ellipsis_inline<br>a:contains("Import Accounts") |
| link-or-menu | Rooms |  | a[aria-label="Rooms"]<br>a[href="#C_Rooms"]<br>a.btn<br>a.module-name<br>a:contains("Rooms") |
| button | Rooms - More | button | #C_Rooms<br>button[aria-label="Rooms - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Room View Rooms Import Rooms | menu | ul[role="menu"] |
| link-or-menu | Create Room |  | a[href="#C_Rooms/create"]<br>a.ellipsis_inline<br>a:contains("Create Room") |
| link-or-menu | View Rooms |  | a[href="#C_Rooms"]<br>a.ellipsis_inline<br>a:contains("View Rooms") |
| link-or-menu | Import Rooms |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Rooms&return_module=C_Rooms&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Rooms") |
| link-or-menu | Teacher Contracts |  | a[aria-label="Teacher Contracts"]<br>a[href="#J_Teachercontract"]<br>a.btn<br>a.module-name<br>a:contains("Teacher Contracts") |
| button | Teacher Contracts - More | button | #J_Teachercontract<br>button[aria-label="Teacher Contracts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Contract View Teacher Contracts Import Teacher Contracts | menu | ul[role="menu"] |
| link-or-menu | Create Teacher Contract |  | a[href="#J_Teachercontract/create"]<br>a.ellipsis_inline<br>a:contains("Create Teacher Contract") |
| link-or-menu | View Teacher Contracts |  | a[href="#J_Teachercontract"]<br>a.ellipsis_inline<br>a:contains("View Teacher Contracts") |
| link-or-menu | Import Teacher Contracts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Teachercontract&return_module=J_Teachercontract&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teacher Contracts") |
| link-or-menu | Kind Of Courses |  | a[aria-label="Kind Of Courses"]<br>a[href="#J_Kindofcourse"]<br>a.btn<br>a.module-name<br>a:contains("Kind Of Courses") |
| button | Kind Of Courses - More | button | #J_Kindofcourse<br>button[aria-label="Kind Of Courses - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Kind Of Course View Kind Of Courses Import Kind Of Courses | menu | ul[role="menu"] |
| link-or-menu | Create Kind Of Course |  | a[href="#J_Kindofcourse/create"]<br>a.ellipsis_inline<br>a:contains("Create Kind Of Course") |
| link-or-menu | View Kind Of Courses |  | a[href="#J_Kindofcourse"]<br>a.ellipsis_inline<br>a:contains("View Kind Of Courses") |
| link-or-menu | Import Kind Of Courses |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Kindofcourse&return_module=J_Kindofcourse&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Kind Of Courses") |
| link-or-menu | Activities |  | a[aria-label="Activities"]<br>a[href="#M_Activities"]<br>a.btn<br>a.module-name<br>a:contains("Activities") |
| button | Activities - More | button | #M_Activities<br>button[aria-label="Activities - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Activities View Activities Import Syllabus | menu | ul[role="menu"] |
| link-or-menu | Create Activities |  | a[href="#M_Activities/create"]<br>a.ellipsis_inline<br>a:contains("Create Activities") |
| link-or-menu | View Activities |  | a[href="#M_Activities"]<br>a.ellipsis_inline<br>a:contains("View Activities") |
| link-or-menu | Import Syllabus |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Syllabus&query=true&report_module=M_Activities"]<br>a.ellipsis_inline<br>a:contains("Import Syllabus") |
| link-or-menu | Work permit |  | a[aria-label="Work permit"]<br>a[href="#J_Workpermit"]<br>a.btn<br>a.module-name<br>a:contains("Work permit") |
| button | Work permit - More | button | #J_Workpermit<br>button[aria-label="Work permit - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Work permit View Work permit | menu | ul[role="menu"] |
| link-or-menu | Create Work permit |  | a[href="#J_Workpermit/create"]<br>a.ellipsis_inline<br>a:contains("Create Work permit") |
| link-or-menu | View Work permit |  | a[href="#J_Workpermit"]<br>a.ellipsis_inline<br>a:contains("View Work permit") |
| link-or-menu | Gallery |  | a[aria-label="Gallery"]<br>a[href="#C_Gallery"]<br>a.btn<br>a.module-name<br>a:contains("Gallery") |
| button | Gallery - More | button | #C_Gallery<br>button[aria-label="Gallery - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gallery View Gallery | menu | ul[role="menu"] |
| link-or-menu | Create Gallery |  | a[href="#C_Gallery/create"]<br>a.ellipsis_inline<br>a:contains("Create Gallery") |
| link-or-menu | View Gallery |  | a[href="#C_Gallery"]<br>a.ellipsis_inline<br>a:contains("View Gallery") |
| link-or-menu | Gradebooks |  | a[aria-label="Gradebooks"]<br>a[href="#J_Gradebook"]<br>a.btn<br>a.module-name<br>a:contains("Gradebooks") |
| button | Gradebooks - More | button | #J_Gradebook<br>button[aria-label="Gradebooks - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | View Gradebooks | menu | ul[role="menu"] |
| link-or-menu | View Gradebooks |  | a[href="#J_Gradebook"]<br>a.ellipsis_inline<br>a:contains("View Gradebooks") |
| link-or-menu | Gradebook Settings |  | a[aria-label="Gradebook Settings"]<br>a[href="#J_GradebookConfig"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Settings") |
| button | Gradebook Settings - More | button | #J_GradebookConfig<br>button[aria-label="Gradebook Settings - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting View Gradebook Settings | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting |  | a[href="#J_GradebookConfig/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting") |
| link-or-menu | View Gradebook Settings |  | a[href="#J_GradebookConfig"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Settings") |
| link-or-menu | Gradebook Setting Groups |  | a[aria-label="Gradebook Setting Groups"]<br>a[href="#J_GradebookSettingGroup"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Setting Groups") |
| button | Gradebook Setting Groups - More | button | #J_GradebookSettingGroup<br>button[aria-label="Gradebook Setting Groups - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting Group View Gradebook Setting Groups | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting Group |  | a[href="#J_GradebookSettingGroup/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting Group") |
| link-or-menu | View Gradebook Setting Groups |  | a[href="#J_GradebookSettingGroup"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Setting Groups") |
| link-or-menu | Admin Hours |  | a[aria-label="Admin Hours"]<br>a[href="#bwc/index.php?module=C_Timesheet&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Admin Hours") |
| link-or-menu | Campaigns |  | a[aria-label="Campaigns"]<br>a[href="#bwc/index.php?module=Campaigns&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Campaigns") |
| button | Campaigns - More | button | #Campaigns<br>button[aria-label="Campaigns - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Campaign (Wizard) Create Campaign (Classic) View Campaigns View Newsletters Create Email Template View Email Temp | menu | ul[role="menu"] |
| link-or-menu | Create Campaign (Wizard) |  | a[href="#bwc/index.php?module=Campaigns&action=WizardHome&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Wizard)") |
| link-or-menu | Create Campaign (Classic) |  | a[href="#bwc/index.php?module=Campaigns&action=EditView&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Classic)") |
| link-or-menu | View Campaigns |  | a[href="#bwc/index.php?module=Campaigns&action=index&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Campaigns") |
| link-or-menu | View Newsletters |  | a[href="#bwc/index.php?module=Campaigns&action=newsletterlist&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Newsletters") |
| link-or-menu | Create Email Template |  | a[href="#bwc/index.php?module=EmailTemplates&action=EditView&return_module=EmailTemplates&return_action=DetailView"]<br>a.ellipsis_inline<br>a:contains("Create Email Template") |
| link-or-menu | View Email Templates |  | a[href="#bwc/index.php?module=EmailTemplates&action=index"]<br>a.ellipsis_inline<br>a:contains("View Email Templates") |
| link-or-menu | Set Up Email |  | a[href="#bwc/index.php?module=Campaigns&action=WizardEmailSetup&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Set Up Email") |
| link-or-menu | View Diagnostics |  | a[href="#bwc/index.php?module=Campaigns&action=CampaignDiagnostic&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Diagnostics") |
| link-or-menu | Create Lead Form |  | a[href="#bwc/index.php?module=Campaigns&action=WebToLeadCreation&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Lead Form") |
| link-or-menu | Calls |  | a[aria-label="Calls"]<br>a[href="#Calls"]<br>a.btn<br>a.module-name<br>a:contains("Calls") |
| button | Calls - More | button | #Calls<br>button[aria-label="Calls - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Log Call View Calls Import Calls Activities Report | menu | ul[role="menu"] |
| link-or-menu | Log Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Log Call") |

## 8. Reports | Scots CRM
- URL: https://stagingcrm.scotsenglish.edu.vn/index.php#Reports?filterModule=Leads
- Headings: Reports (0) Create Report Report Schedules Import Report | No dashboard configured.
- Elements captured: 416

| Kind | Label/Text | Role/Type | Candidate selectors |
|---|---|---|---|
| navigation | main module navigation | navigation | ul[role="navigation"]<br>ul[aria-label="main module navigation"]<br>ul.nav<br>ul.megamenu |
| link-or-menu | Home |  | a[aria-label="Home"]<br>a[href="#Home"]<br>a.cube<br>a.btn |
| button | Home - More | button | button[aria-label="Home - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Dashboard Activity Stream Manage Dashboards | menu | ul[role="menu"] |
| link-or-menu | Create Dashboard |  | a[href="#Home/create"]<br>a.ellipsis_inline<br>a:contains("Create Dashboard") |
| link-or-menu | Activity Stream |  | a[href="#activities"]<br>a.ellipsis_inline<br>a:contains("Activity Stream") |
| link-or-menu | Manage Dashboards |  | a[href="#Dashboards?moduleName=Home"]<br>a.ellipsis_inline<br>a:contains("Manage Dashboards") |
| link-or-menu | Calendar |  | a[aria-label="Calendar"]<br>a[href="#bwc/index.php?module=Calendar&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Calendar") |
| button | Calendar - More | button | #Calendar<br>button[aria-label="Calendar - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Meeting Schedule Call Create Task Today | menu | ul[role="menu"] |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Schedule Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Call") |
| link-or-menu | Create Task |  | a[href="#Tasks/create"]<br>a.ellipsis_inline<br>a:contains("Create Task") |
| link-or-menu | Today |  | a[href="#bwc/index.php?module=Calendar&action=index&view=day"]<br>a.ellipsis_inline<br>a:contains("Today") |
| link-or-menu | Targets |  | a[aria-label="Targets"]<br>a[href="#Prospects"]<br>a.btn<br>a.module-name<br>a:contains("Targets") |
| button | Targets - More | button | #Prospects<br>button[aria-label="Targets - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Target Create Target From vCard View Targets Import Targets | menu | ul[role="menu"] |
| link-or-menu | Create Target |  | a[href="#Prospects/create"]<br>a.ellipsis_inline<br>a:contains("Create Target") |
| link-or-menu | Create Target From vCard |  | a[href="#Prospects/vcard-import"]<br>a.ellipsis_inline<br>a:contains("Create Target From vCard") |
| link-or-menu | View Targets |  | a[href="#Prospects"]<br>a.ellipsis_inline<br>a:contains("View Targets") |
| link-or-menu | Import Targets |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Prospects&return_module=Prospects&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Targets") |
| link-or-menu | Leads |  | a[aria-label="Leads"]<br>a[href="#Leads"]<br>a.btn<br>a.module-name<br>a:contains("Leads") |
| button | Leads - More | button | #Leads<br>button[aria-label="Leads - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Lead View Leads View Lead Reports Import Leads | menu | ul[role="menu"] |
| link-or-menu | Create Lead |  | a[href="#Leads/create"]<br>a.ellipsis_inline<br>a:contains("Create Lead") |
| link-or-menu | View Leads |  | a[href="#Leads"]<br>a.ellipsis_inline<br>a:contains("View Leads") |
| link-or-menu | View Lead Reports |  | a[href="#Reports?filterModule=Leads"]<br>a.ellipsis_inline<br>a:contains("View Lead Reports") |
| link-or-menu | Import Leads |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Leads&return_module=Leads&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Leads") |
| link-or-menu | Students |  | a[aria-label="Students"]<br>a[href="#Contacts"]<br>a.btn<br>a.module-name<br>a:contains("Students") |
| button | Students - More | button | #Contacts<br>button[aria-label="Students - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Student View Students View Student Reports Import Students Send SMS | menu | ul[role="menu"] |
| link-or-menu | Create Student |  | a[href="#Contacts/create"]<br>a.ellipsis_inline<br>a:contains("Create Student") |
| link-or-menu | View Students |  | a[href="#Contacts"]<br>a.ellipsis_inline<br>a:contains("View Students") |
| link-or-menu | View Student Reports |  | a[href="#Reports?filterModule=Contacts"]<br>a.ellipsis_inline<br>a:contains("View Student Reports") |
| link-or-menu | Import Students |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Contacts&return_module=Contacts&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Students") |
| link-or-menu | Send SMS |  | a[href="#bwc/index.php?module=C_SMS&action=sendSMS"]<br>a.ellipsis_inline<br>a:contains("Send SMS") |
| link-or-menu | Sale Orders |  | a[aria-label="Sale Orders"]<br>a[href="#Quotes"]<br>a.btn<br>a.module-name<br>a:contains("Sale Orders") |
| button | Sale Orders - More | button | #Quotes<br>button[aria-label="Sale Orders - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Sale Order View Sale Orders View Sale Order Reports | menu | ul[role="menu"] |
| link-or-menu | Create Sale Order |  | a[href="#Quotes/create"]<br>a.ellipsis_inline<br>a:contains("Create Sale Order") |
| link-or-menu | View Sale Orders |  | a[href="#Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Orders") |
| link-or-menu | View Sale Order Reports |  | a[href="#Reports?filterModule=Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Order Reports") |
| link-or-menu | Classes |  | a[aria-label="Classes"]<br>a[href="#J_Class"]<br>a.btn<br>a.module-name<br>a:contains("Classes") |
| button | Classes - More | button | #J_Class<br>button[aria-label="Classes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Class View Classes View on Calendar Import Scheduler | menu | ul[role="menu"] |
| link-or-menu | Create Class |  | a[href="#J_Class/create"]<br>a.ellipsis_inline<br>a:contains("Create Class") |
| link-or-menu | View Classes |  | a[href="#J_Class"]<br>a.ellipsis_inline<br>a:contains("View Classes") |
| link-or-menu | View on Calendar |  | a[href="#bwc/index.php?module=Calendar&action=index&view=week"]<br>a.ellipsis_inline<br>a:contains("View on Calendar") |
| link-or-menu | Import Scheduler |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Meetings&return_module=Meetings&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Scheduler") |
| link-or-menu | Schedules |  | a[aria-label="Schedules"]<br>a[href="#Meetings"]<br>a.btn<br>a.module-name<br>a:contains("Schedules") |
| button | Schedules - More | button | #Meetings<br>button[aria-label="Schedules - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Placement Test Schedule Demo Schedule Meeting | menu | ul[role="menu"] |
| link-or-menu | Schedule Placement Test |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=PT"]<br>a.ellipsis_inline<br>a:contains("Schedule Placement Test") |
| link-or-menu | Schedule Demo |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=Demo"]<br>a.ellipsis_inline<br>a:contains("Schedule Demo") |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Reports |  | a[aria-label="Reports"]<br>a[href="#Reports"]<br>a.btn<br>a.module-name<br>a:contains("Reports") |
| button | Reports - More | button | #Reports<br>button[aria-label="Reports - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Report View Reports Report Schedules | menu | ul[role="menu"] |
| link-or-menu | Create Report |  | a[href="#bwc/index.php?module=Reports&report_module=&action=index&page=report&Create+Custom+Report=Create+Custom+Report"]<br>a.ellipsis_inline<br>a:contains("Create Report") |
| link-or-menu | View Reports |  | a[href="#Reports"]<br>a.ellipsis_inline<br>a:contains("View Reports") |
| link-or-menu | Report Schedules |  | a[href="#ReportSchedules"]<br>a.ellipsis_inline<br>a:contains("Report Schedules") |
| link-or-menu | Loyalty |  | a[aria-label="Loyalty"]<br>a[href="#J_Loyalty"]<br>a.btn<br>a.module-name<br>a:contains("Loyalty") |
| button | Loyalty - More | button | #J_Loyalty<br>button[aria-label="Loyalty - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Loyalty View Loyalty Import Loyalty | menu | ul[role="menu"] |
| link-or-menu | Create Loyalty |  | a[href="#J_Loyalty/create"]<br>a.ellipsis_inline<br>a:contains("Create Loyalty") |
| link-or-menu | View Loyalty |  | a[href="#J_Loyalty"]<br>a.ellipsis_inline<br>a:contains("View Loyalty") |
| link-or-menu | Import Loyalty |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Loyalty&return_module=J_Loyalty&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Loyalty") |
| link-or-menu | Teachers |  | a[aria-label="Teachers"]<br>a[href="#C_Teachers"]<br>a.btn<br>a.module-name<br>a:contains("Teachers") |
| button | Teachers - More | button | #C_Teachers<br>button[aria-label="Teachers - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Create TA View Teachers Import Teachers | menu | ul[role="menu"] |
| link-or-menu | Create Teacher |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=Teacher"]<br>a.ellipsis_inline<br>a:contains("Create Teacher") |
| link-or-menu | Create TA |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=TA"]<br>a.ellipsis_inline<br>a:contains("Create TA") |
| link-or-menu | View Teachers |  | a[href="#C_Teachers"]<br>a.ellipsis_inline<br>a:contains("View Teachers") |
| link-or-menu | Import Teachers |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Teachers&return_module=C_Teachers&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teachers") |
| link-or-menu | Approval Processes |  | a[aria-label="Approval Processes"]<br>a[href="#ApprovalProcesses"]<br>a.btn<br>a.module-name<br>a:contains("Approval Processes") |
| button | Approval Processes - More | button | #ApprovalProcesses<br>button[aria-label="Approval Processes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Approval Processes | menu | ul[role="menu"] |
| link-or-menu | Approval Processes |  | a[href="#ApprovalProcesses/layout/approvalList"]<br>a.ellipsis_inline<br>a:contains("Approval Processes") |
| link-or-menu | Accounts |  | a[aria-label="Accounts"]<br>a[href="#Accounts"]<br>a.btn<br>a.module-name<br>a:contains("Accounts") |
| button | Accounts - More | button | #Accounts<br>button[aria-label="Accounts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Account View Accounts View Account Reports Import Accounts | menu | ul[role="menu"] |
| link-or-menu | Create Account |  | a[href="#Accounts/create"]<br>a.ellipsis_inline<br>a:contains("Create Account") |
| link-or-menu | View Accounts |  | a[href="#Accounts"]<br>a.ellipsis_inline<br>a:contains("View Accounts") |
| link-or-menu | View Account Reports |  | a[href="#Reports?filterModule=Accounts"]<br>a.ellipsis_inline<br>a:contains("View Account Reports") |
| link-or-menu | Import Accounts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Accounts"]<br>a.ellipsis_inline<br>a:contains("Import Accounts") |
| link-or-menu | Rooms |  | a[aria-label="Rooms"]<br>a[href="#C_Rooms"]<br>a.btn<br>a.module-name<br>a:contains("Rooms") |
| button | Rooms - More | button | #C_Rooms<br>button[aria-label="Rooms - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Room View Rooms Import Rooms | menu | ul[role="menu"] |
| link-or-menu | Create Room |  | a[href="#C_Rooms/create"]<br>a.ellipsis_inline<br>a:contains("Create Room") |
| link-or-menu | View Rooms |  | a[href="#C_Rooms"]<br>a.ellipsis_inline<br>a:contains("View Rooms") |
| link-or-menu | Import Rooms |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Rooms&return_module=C_Rooms&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Rooms") |
| link-or-menu | Teacher Contracts |  | a[aria-label="Teacher Contracts"]<br>a[href="#J_Teachercontract"]<br>a.btn<br>a.module-name<br>a:contains("Teacher Contracts") |
| button | Teacher Contracts - More | button | #J_Teachercontract<br>button[aria-label="Teacher Contracts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Contract View Teacher Contracts Import Teacher Contracts | menu | ul[role="menu"] |
| link-or-menu | Create Teacher Contract |  | a[href="#J_Teachercontract/create"]<br>a.ellipsis_inline<br>a:contains("Create Teacher Contract") |
| link-or-menu | View Teacher Contracts |  | a[href="#J_Teachercontract"]<br>a.ellipsis_inline<br>a:contains("View Teacher Contracts") |
| link-or-menu | Import Teacher Contracts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Teachercontract&return_module=J_Teachercontract&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teacher Contracts") |
| link-or-menu | Kind Of Courses |  | a[aria-label="Kind Of Courses"]<br>a[href="#J_Kindofcourse"]<br>a.btn<br>a.module-name<br>a:contains("Kind Of Courses") |
| button | Kind Of Courses - More | button | #J_Kindofcourse<br>button[aria-label="Kind Of Courses - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Kind Of Course View Kind Of Courses Import Kind Of Courses | menu | ul[role="menu"] |
| link-or-menu | Create Kind Of Course |  | a[href="#J_Kindofcourse/create"]<br>a.ellipsis_inline<br>a:contains("Create Kind Of Course") |
| link-or-menu | View Kind Of Courses |  | a[href="#J_Kindofcourse"]<br>a.ellipsis_inline<br>a:contains("View Kind Of Courses") |
| link-or-menu | Import Kind Of Courses |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Kindofcourse&return_module=J_Kindofcourse&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Kind Of Courses") |
| link-or-menu | Activities |  | a[aria-label="Activities"]<br>a[href="#M_Activities"]<br>a.btn<br>a.module-name<br>a:contains("Activities") |
| button | Activities - More | button | #M_Activities<br>button[aria-label="Activities - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Activities View Activities Import Syllabus | menu | ul[role="menu"] |
| link-or-menu | Create Activities |  | a[href="#M_Activities/create"]<br>a.ellipsis_inline<br>a:contains("Create Activities") |
| link-or-menu | View Activities |  | a[href="#M_Activities"]<br>a.ellipsis_inline<br>a:contains("View Activities") |
| link-or-menu | Import Syllabus |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Syllabus&query=true&report_module=M_Activities"]<br>a.ellipsis_inline<br>a:contains("Import Syllabus") |
| link-or-menu | Work permit |  | a[aria-label="Work permit"]<br>a[href="#J_Workpermit"]<br>a.btn<br>a.module-name<br>a:contains("Work permit") |
| button | Work permit - More | button | #J_Workpermit<br>button[aria-label="Work permit - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Work permit View Work permit | menu | ul[role="menu"] |
| link-or-menu | Create Work permit |  | a[href="#J_Workpermit/create"]<br>a.ellipsis_inline<br>a:contains("Create Work permit") |
| link-or-menu | View Work permit |  | a[href="#J_Workpermit"]<br>a.ellipsis_inline<br>a:contains("View Work permit") |
| link-or-menu | Gallery |  | a[aria-label="Gallery"]<br>a[href="#C_Gallery"]<br>a.btn<br>a.module-name<br>a:contains("Gallery") |
| button | Gallery - More | button | #C_Gallery<br>button[aria-label="Gallery - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gallery View Gallery | menu | ul[role="menu"] |
| link-or-menu | Create Gallery |  | a[href="#C_Gallery/create"]<br>a.ellipsis_inline<br>a:contains("Create Gallery") |
| link-or-menu | View Gallery |  | a[href="#C_Gallery"]<br>a.ellipsis_inline<br>a:contains("View Gallery") |
| link-or-menu | Gradebooks |  | a[aria-label="Gradebooks"]<br>a[href="#J_Gradebook"]<br>a.btn<br>a.module-name<br>a:contains("Gradebooks") |
| button | Gradebooks - More | button | #J_Gradebook<br>button[aria-label="Gradebooks - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | View Gradebooks | menu | ul[role="menu"] |
| link-or-menu | View Gradebooks |  | a[href="#J_Gradebook"]<br>a.ellipsis_inline<br>a:contains("View Gradebooks") |
| link-or-menu | Gradebook Settings |  | a[aria-label="Gradebook Settings"]<br>a[href="#J_GradebookConfig"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Settings") |
| button | Gradebook Settings - More | button | #J_GradebookConfig<br>button[aria-label="Gradebook Settings - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting View Gradebook Settings | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting |  | a[href="#J_GradebookConfig/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting") |
| link-or-menu | View Gradebook Settings |  | a[href="#J_GradebookConfig"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Settings") |
| link-or-menu | Gradebook Setting Groups |  | a[aria-label="Gradebook Setting Groups"]<br>a[href="#J_GradebookSettingGroup"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Setting Groups") |
| button | Gradebook Setting Groups - More | button | #J_GradebookSettingGroup<br>button[aria-label="Gradebook Setting Groups - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting Group View Gradebook Setting Groups | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting Group |  | a[href="#J_GradebookSettingGroup/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting Group") |
| link-or-menu | View Gradebook Setting Groups |  | a[href="#J_GradebookSettingGroup"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Setting Groups") |
| link-or-menu | Admin Hours |  | a[aria-label="Admin Hours"]<br>a[href="#bwc/index.php?module=C_Timesheet&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Admin Hours") |
| link-or-menu | Campaigns |  | a[aria-label="Campaigns"]<br>a[href="#bwc/index.php?module=Campaigns&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Campaigns") |
| button | Campaigns - More | button | #Campaigns<br>button[aria-label="Campaigns - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Campaign (Wizard) Create Campaign (Classic) View Campaigns View Newsletters Create Email Template View Email Temp | menu | ul[role="menu"] |
| link-or-menu | Create Campaign (Wizard) |  | a[href="#bwc/index.php?module=Campaigns&action=WizardHome&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Wizard)") |
| link-or-menu | Create Campaign (Classic) |  | a[href="#bwc/index.php?module=Campaigns&action=EditView&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Classic)") |
| link-or-menu | View Campaigns |  | a[href="#bwc/index.php?module=Campaigns&action=index&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Campaigns") |
| link-or-menu | View Newsletters |  | a[href="#bwc/index.php?module=Campaigns&action=newsletterlist&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Newsletters") |
| link-or-menu | Create Email Template |  | a[href="#bwc/index.php?module=EmailTemplates&action=EditView&return_module=EmailTemplates&return_action=DetailView"]<br>a.ellipsis_inline<br>a:contains("Create Email Template") |
| link-or-menu | View Email Templates |  | a[href="#bwc/index.php?module=EmailTemplates&action=index"]<br>a.ellipsis_inline<br>a:contains("View Email Templates") |
| link-or-menu | Set Up Email |  | a[href="#bwc/index.php?module=Campaigns&action=WizardEmailSetup&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Set Up Email") |
| link-or-menu | View Diagnostics |  | a[href="#bwc/index.php?module=Campaigns&action=CampaignDiagnostic&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Diagnostics") |
| link-or-menu | Create Lead Form |  | a[href="#bwc/index.php?module=Campaigns&action=WebToLeadCreation&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Lead Form") |
| link-or-menu | Calls |  | a[aria-label="Calls"]<br>a[href="#Calls"]<br>a.btn<br>a.module-name<br>a:contains("Calls") |
| button | Calls - More | button | #Calls<br>button[aria-label="Calls - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Log Call View Calls Import Calls Activities Report | menu | ul[role="menu"] |
| link-or-menu | Log Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Log Call") |

## 9. Students | Scots CRM
- URL: https://stagingcrm.scotsenglish.edu.vn/index.php#Contacts
- Headings: Students (20 of 21+) Create Student View Student Reports Import Students Send SMS Send App Notification | Send notification via Mobile App | Select date and time | Contacts List Dashboard Manage Dashboards Loading... Create Cancel Delete Save Cancel Save
- Elements captured: 687

| Kind | Label/Text | Role/Type | Candidate selectors |
|---|---|---|---|
| navigation | main module navigation | navigation | ul[role="navigation"]<br>ul[aria-label="main module navigation"]<br>ul.nav<br>ul.megamenu |
| link-or-menu | Home |  | a[aria-label="Home"]<br>a[href="#Home"]<br>a.cube<br>a.btn |
| button | Home - More | button | button[aria-label="Home - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Dashboard Activity Stream Manage Dashboards | menu | ul[role="menu"] |
| link-or-menu | Create Dashboard |  | a[href="#Home/create"]<br>a.ellipsis_inline<br>a:contains("Create Dashboard") |
| link-or-menu | Activity Stream |  | a[href="#activities"]<br>a.ellipsis_inline<br>a:contains("Activity Stream") |
| link-or-menu | Manage Dashboards |  | a[href="#Dashboards?moduleName=Home"]<br>a.ellipsis_inline<br>a:contains("Manage Dashboards") |
| link-or-menu | Calendar |  | a[aria-label="Calendar"]<br>a[href="#bwc/index.php?module=Calendar&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Calendar") |
| button | Calendar - More | button | #Calendar<br>button[aria-label="Calendar - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Meeting Schedule Call Create Task Today | menu | ul[role="menu"] |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Schedule Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Call") |
| link-or-menu | Create Task |  | a[href="#Tasks/create"]<br>a.ellipsis_inline<br>a:contains("Create Task") |
| link-or-menu | Today |  | a[href="#bwc/index.php?module=Calendar&action=index&view=day"]<br>a.ellipsis_inline<br>a:contains("Today") |
| link-or-menu | Targets |  | a[aria-label="Targets"]<br>a[href="#Prospects"]<br>a.btn<br>a.module-name<br>a:contains("Targets") |
| button | Targets - More | button | #Prospects<br>button[aria-label="Targets - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Target Create Target From vCard View Targets Import Targets | menu | ul[role="menu"] |
| link-or-menu | Create Target |  | a[href="#Prospects/create"]<br>a.ellipsis_inline<br>a:contains("Create Target") |
| link-or-menu | Create Target From vCard |  | a[href="#Prospects/vcard-import"]<br>a.ellipsis_inline<br>a:contains("Create Target From vCard") |
| link-or-menu | View Targets |  | a[href="#Prospects"]<br>a.ellipsis_inline<br>a:contains("View Targets") |
| link-or-menu | Import Targets |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Prospects&return_module=Prospects&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Targets") |
| link-or-menu | Leads |  | a[aria-label="Leads"]<br>a[href="#Leads"]<br>a.btn<br>a.module-name<br>a:contains("Leads") |
| button | Leads - More | button | #Leads<br>button[aria-label="Leads - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Lead View Leads View Lead Reports Import Leads | menu | ul[role="menu"] |
| link-or-menu | Create Lead |  | a[href="#Leads/create"]<br>a.ellipsis_inline<br>a:contains("Create Lead") |
| link-or-menu | View Leads |  | a[href="#Leads"]<br>a.ellipsis_inline<br>a:contains("View Leads") |
| link-or-menu | View Lead Reports |  | a[href="#Reports?filterModule=Leads"]<br>a.ellipsis_inline<br>a:contains("View Lead Reports") |
| link-or-menu | Import Leads |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Leads&return_module=Leads&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Leads") |
| link-or-menu | Students |  | a[aria-label="Students"]<br>a[href="#Contacts"]<br>a.btn<br>a.module-name<br>a:contains("Students") |
| button | Students - More | button | #Contacts<br>button[aria-label="Students - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Student View Students View Student Reports Import Students Send SMS | menu | ul[role="menu"] |
| link-or-menu | Create Student |  | a[href="#Contacts/create"]<br>a.ellipsis_inline<br>a:contains("Create Student") |
| link-or-menu | View Students |  | a[href="#Contacts"]<br>a.ellipsis_inline<br>a:contains("View Students") |
| link-or-menu | View Student Reports |  | a[href="#Reports?filterModule=Contacts"]<br>a.ellipsis_inline<br>a:contains("View Student Reports") |
| link-or-menu | Import Students |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Contacts&return_module=Contacts&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Students") |
| link-or-menu | Send SMS |  | a[href="#bwc/index.php?module=C_SMS&action=sendSMS"]<br>a.ellipsis_inline<br>a:contains("Send SMS") |
| link-or-menu | Sale Orders |  | a[aria-label="Sale Orders"]<br>a[href="#Quotes"]<br>a.btn<br>a.module-name<br>a:contains("Sale Orders") |
| button | Sale Orders - More | button | #Quotes<br>button[aria-label="Sale Orders - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Sale Order View Sale Orders View Sale Order Reports | menu | ul[role="menu"] |
| link-or-menu | Create Sale Order |  | a[href="#Quotes/create"]<br>a.ellipsis_inline<br>a:contains("Create Sale Order") |
| link-or-menu | View Sale Orders |  | a[href="#Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Orders") |
| link-or-menu | View Sale Order Reports |  | a[href="#Reports?filterModule=Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Order Reports") |
| link-or-menu | Classes |  | a[aria-label="Classes"]<br>a[href="#J_Class"]<br>a.btn<br>a.module-name<br>a:contains("Classes") |
| button | Classes - More | button | #J_Class<br>button[aria-label="Classes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Class View Classes View on Calendar Import Scheduler | menu | ul[role="menu"] |
| link-or-menu | Create Class |  | a[href="#J_Class/create"]<br>a.ellipsis_inline<br>a:contains("Create Class") |
| link-or-menu | View Classes |  | a[href="#J_Class"]<br>a.ellipsis_inline<br>a:contains("View Classes") |
| link-or-menu | View on Calendar |  | a[href="#bwc/index.php?module=Calendar&action=index&view=week"]<br>a.ellipsis_inline<br>a:contains("View on Calendar") |
| link-or-menu | Import Scheduler |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Meetings&return_module=Meetings&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Scheduler") |
| link-or-menu | Schedules |  | a[aria-label="Schedules"]<br>a[href="#Meetings"]<br>a.btn<br>a.module-name<br>a:contains("Schedules") |
| button | Schedules - More | button | #Meetings<br>button[aria-label="Schedules - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Placement Test Schedule Demo Schedule Meeting | menu | ul[role="menu"] |
| link-or-menu | Schedule Placement Test |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=PT"]<br>a.ellipsis_inline<br>a:contains("Schedule Placement Test") |
| link-or-menu | Schedule Demo |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=Demo"]<br>a.ellipsis_inline<br>a:contains("Schedule Demo") |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Reports |  | a[aria-label="Reports"]<br>a[href="#Reports"]<br>a.btn<br>a.module-name<br>a:contains("Reports") |
| button | Reports - More | button | #Reports<br>button[aria-label="Reports - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Report View Reports Report Schedules | menu | ul[role="menu"] |
| link-or-menu | Create Report |  | a[href="#bwc/index.php?module=Reports&report_module=&action=index&page=report&Create+Custom+Report=Create+Custom+Report"]<br>a.ellipsis_inline<br>a:contains("Create Report") |
| link-or-menu | View Reports |  | a[href="#Reports"]<br>a.ellipsis_inline<br>a:contains("View Reports") |
| link-or-menu | Report Schedules |  | a[href="#ReportSchedules"]<br>a.ellipsis_inline<br>a:contains("Report Schedules") |
| link-or-menu | Loyalty |  | a[aria-label="Loyalty"]<br>a[href="#J_Loyalty"]<br>a.btn<br>a.module-name<br>a:contains("Loyalty") |
| button | Loyalty - More | button | #J_Loyalty<br>button[aria-label="Loyalty - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Loyalty View Loyalty Import Loyalty | menu | ul[role="menu"] |
| link-or-menu | Create Loyalty |  | a[href="#J_Loyalty/create"]<br>a.ellipsis_inline<br>a:contains("Create Loyalty") |
| link-or-menu | View Loyalty |  | a[href="#J_Loyalty"]<br>a.ellipsis_inline<br>a:contains("View Loyalty") |
| link-or-menu | Import Loyalty |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Loyalty&return_module=J_Loyalty&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Loyalty") |
| link-or-menu | Teachers |  | a[aria-label="Teachers"]<br>a[href="#C_Teachers"]<br>a.btn<br>a.module-name<br>a:contains("Teachers") |
| button | Teachers - More | button | #C_Teachers<br>button[aria-label="Teachers - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Create TA View Teachers Import Teachers | menu | ul[role="menu"] |
| link-or-menu | Create Teacher |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=Teacher"]<br>a.ellipsis_inline<br>a:contains("Create Teacher") |
| link-or-menu | Create TA |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=TA"]<br>a.ellipsis_inline<br>a:contains("Create TA") |
| link-or-menu | View Teachers |  | a[href="#C_Teachers"]<br>a.ellipsis_inline<br>a:contains("View Teachers") |
| link-or-menu | Import Teachers |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Teachers&return_module=C_Teachers&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teachers") |
| link-or-menu | Approval Processes |  | a[aria-label="Approval Processes"]<br>a[href="#ApprovalProcesses"]<br>a.btn<br>a.module-name<br>a:contains("Approval Processes") |
| button | Approval Processes - More | button | #ApprovalProcesses<br>button[aria-label="Approval Processes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Approval Processes | menu | ul[role="menu"] |
| link-or-menu | Approval Processes |  | a[href="#ApprovalProcesses/layout/approvalList"]<br>a.ellipsis_inline<br>a:contains("Approval Processes") |
| link-or-menu | Accounts |  | a[aria-label="Accounts"]<br>a[href="#Accounts"]<br>a.btn<br>a.module-name<br>a:contains("Accounts") |
| button | Accounts - More | button | #Accounts<br>button[aria-label="Accounts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Account View Accounts View Account Reports Import Accounts | menu | ul[role="menu"] |
| link-or-menu | Create Account |  | a[href="#Accounts/create"]<br>a.ellipsis_inline<br>a:contains("Create Account") |
| link-or-menu | View Accounts |  | a[href="#Accounts"]<br>a.ellipsis_inline<br>a:contains("View Accounts") |
| link-or-menu | View Account Reports |  | a[href="#Reports?filterModule=Accounts"]<br>a.ellipsis_inline<br>a:contains("View Account Reports") |
| link-or-menu | Import Accounts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Accounts"]<br>a.ellipsis_inline<br>a:contains("Import Accounts") |
| link-or-menu | Rooms |  | a[aria-label="Rooms"]<br>a[href="#C_Rooms"]<br>a.btn<br>a.module-name<br>a:contains("Rooms") |
| button | Rooms - More | button | #C_Rooms<br>button[aria-label="Rooms - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Room View Rooms Import Rooms | menu | ul[role="menu"] |
| link-or-menu | Create Room |  | a[href="#C_Rooms/create"]<br>a.ellipsis_inline<br>a:contains("Create Room") |
| link-or-menu | View Rooms |  | a[href="#C_Rooms"]<br>a.ellipsis_inline<br>a:contains("View Rooms") |
| link-or-menu | Import Rooms |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Rooms&return_module=C_Rooms&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Rooms") |
| link-or-menu | Teacher Contracts |  | a[aria-label="Teacher Contracts"]<br>a[href="#J_Teachercontract"]<br>a.btn<br>a.module-name<br>a:contains("Teacher Contracts") |
| button | Teacher Contracts - More | button | #J_Teachercontract<br>button[aria-label="Teacher Contracts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Contract View Teacher Contracts Import Teacher Contracts | menu | ul[role="menu"] |
| link-or-menu | Create Teacher Contract |  | a[href="#J_Teachercontract/create"]<br>a.ellipsis_inline<br>a:contains("Create Teacher Contract") |
| link-or-menu | View Teacher Contracts |  | a[href="#J_Teachercontract"]<br>a.ellipsis_inline<br>a:contains("View Teacher Contracts") |
| link-or-menu | Import Teacher Contracts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Teachercontract&return_module=J_Teachercontract&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teacher Contracts") |
| link-or-menu | Kind Of Courses |  | a[aria-label="Kind Of Courses"]<br>a[href="#J_Kindofcourse"]<br>a.btn<br>a.module-name<br>a:contains("Kind Of Courses") |
| button | Kind Of Courses - More | button | #J_Kindofcourse<br>button[aria-label="Kind Of Courses - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Kind Of Course View Kind Of Courses Import Kind Of Courses | menu | ul[role="menu"] |
| link-or-menu | Create Kind Of Course |  | a[href="#J_Kindofcourse/create"]<br>a.ellipsis_inline<br>a:contains("Create Kind Of Course") |
| link-or-menu | View Kind Of Courses |  | a[href="#J_Kindofcourse"]<br>a.ellipsis_inline<br>a:contains("View Kind Of Courses") |
| link-or-menu | Import Kind Of Courses |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Kindofcourse&return_module=J_Kindofcourse&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Kind Of Courses") |
| link-or-menu | Activities |  | a[aria-label="Activities"]<br>a[href="#M_Activities"]<br>a.btn<br>a.module-name<br>a:contains("Activities") |
| button | Activities - More | button | #M_Activities<br>button[aria-label="Activities - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Activities View Activities Import Syllabus | menu | ul[role="menu"] |
| link-or-menu | Create Activities |  | a[href="#M_Activities/create"]<br>a.ellipsis_inline<br>a:contains("Create Activities") |
| link-or-menu | View Activities |  | a[href="#M_Activities"]<br>a.ellipsis_inline<br>a:contains("View Activities") |
| link-or-menu | Import Syllabus |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Syllabus&query=true&report_module=M_Activities"]<br>a.ellipsis_inline<br>a:contains("Import Syllabus") |
| link-or-menu | Work permit |  | a[aria-label="Work permit"]<br>a[href="#J_Workpermit"]<br>a.btn<br>a.module-name<br>a:contains("Work permit") |
| button | Work permit - More | button | #J_Workpermit<br>button[aria-label="Work permit - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Work permit View Work permit | menu | ul[role="menu"] |
| link-or-menu | Create Work permit |  | a[href="#J_Workpermit/create"]<br>a.ellipsis_inline<br>a:contains("Create Work permit") |
| link-or-menu | View Work permit |  | a[href="#J_Workpermit"]<br>a.ellipsis_inline<br>a:contains("View Work permit") |
| link-or-menu | Gallery |  | a[aria-label="Gallery"]<br>a[href="#C_Gallery"]<br>a.btn<br>a.module-name<br>a:contains("Gallery") |
| button | Gallery - More | button | #C_Gallery<br>button[aria-label="Gallery - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gallery View Gallery | menu | ul[role="menu"] |
| link-or-menu | Create Gallery |  | a[href="#C_Gallery/create"]<br>a.ellipsis_inline<br>a:contains("Create Gallery") |
| link-or-menu | View Gallery |  | a[href="#C_Gallery"]<br>a.ellipsis_inline<br>a:contains("View Gallery") |
| link-or-menu | Gradebooks |  | a[aria-label="Gradebooks"]<br>a[href="#J_Gradebook"]<br>a.btn<br>a.module-name<br>a:contains("Gradebooks") |
| button | Gradebooks - More | button | #J_Gradebook<br>button[aria-label="Gradebooks - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | View Gradebooks | menu | ul[role="menu"] |
| link-or-menu | View Gradebooks |  | a[href="#J_Gradebook"]<br>a.ellipsis_inline<br>a:contains("View Gradebooks") |
| link-or-menu | Gradebook Settings |  | a[aria-label="Gradebook Settings"]<br>a[href="#J_GradebookConfig"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Settings") |
| button | Gradebook Settings - More | button | #J_GradebookConfig<br>button[aria-label="Gradebook Settings - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting View Gradebook Settings | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting |  | a[href="#J_GradebookConfig/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting") |
| link-or-menu | View Gradebook Settings |  | a[href="#J_GradebookConfig"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Settings") |
| link-or-menu | Gradebook Setting Groups |  | a[aria-label="Gradebook Setting Groups"]<br>a[href="#J_GradebookSettingGroup"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Setting Groups") |
| button | Gradebook Setting Groups - More | button | #J_GradebookSettingGroup<br>button[aria-label="Gradebook Setting Groups - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting Group View Gradebook Setting Groups | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting Group |  | a[href="#J_GradebookSettingGroup/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting Group") |
| link-or-menu | View Gradebook Setting Groups |  | a[href="#J_GradebookSettingGroup"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Setting Groups") |
| link-or-menu | Admin Hours |  | a[aria-label="Admin Hours"]<br>a[href="#bwc/index.php?module=C_Timesheet&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Admin Hours") |
| link-or-menu | Campaigns |  | a[aria-label="Campaigns"]<br>a[href="#bwc/index.php?module=Campaigns&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Campaigns") |
| button | Campaigns - More | button | #Campaigns<br>button[aria-label="Campaigns - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Campaign (Wizard) Create Campaign (Classic) View Campaigns View Newsletters Create Email Template View Email Temp | menu | ul[role="menu"] |
| link-or-menu | Create Campaign (Wizard) |  | a[href="#bwc/index.php?module=Campaigns&action=WizardHome&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Wizard)") |
| link-or-menu | Create Campaign (Classic) |  | a[href="#bwc/index.php?module=Campaigns&action=EditView&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Classic)") |
| link-or-menu | View Campaigns |  | a[href="#bwc/index.php?module=Campaigns&action=index&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Campaigns") |
| link-or-menu | View Newsletters |  | a[href="#bwc/index.php?module=Campaigns&action=newsletterlist&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Newsletters") |
| link-or-menu | Create Email Template |  | a[href="#bwc/index.php?module=EmailTemplates&action=EditView&return_module=EmailTemplates&return_action=DetailView"]<br>a.ellipsis_inline<br>a:contains("Create Email Template") |
| link-or-menu | View Email Templates |  | a[href="#bwc/index.php?module=EmailTemplates&action=index"]<br>a.ellipsis_inline<br>a:contains("View Email Templates") |
| link-or-menu | Set Up Email |  | a[href="#bwc/index.php?module=Campaigns&action=WizardEmailSetup&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Set Up Email") |
| link-or-menu | View Diagnostics |  | a[href="#bwc/index.php?module=Campaigns&action=CampaignDiagnostic&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Diagnostics") |
| link-or-menu | Create Lead Form |  | a[href="#bwc/index.php?module=Campaigns&action=WebToLeadCreation&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Lead Form") |
| link-or-menu | Calls |  | a[aria-label="Calls"]<br>a[href="#Calls"]<br>a.btn<br>a.module-name<br>a:contains("Calls") |
| button | Calls - More | button | #Calls<br>button[aria-label="Calls - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Log Call View Calls Import Calls Activities Report | menu | ul[role="menu"] |
| link-or-menu | Log Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Log Call") |

## 10. Reports | Scots CRM
- URL: https://stagingcrm.scotsenglish.edu.vn/index.php#Reports?filterModule=Contacts
- Headings: Reports (0) Create Report Report Schedules Import Report | No dashboard configured.
- Elements captured: 416

| Kind | Label/Text | Role/Type | Candidate selectors |
|---|---|---|---|
| navigation | main module navigation | navigation | ul[role="navigation"]<br>ul[aria-label="main module navigation"]<br>ul.nav<br>ul.megamenu |
| link-or-menu | Home |  | a[aria-label="Home"]<br>a[href="#Home"]<br>a.cube<br>a.btn |
| button | Home - More | button | button[aria-label="Home - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Dashboard Activity Stream Manage Dashboards | menu | ul[role="menu"] |
| link-or-menu | Create Dashboard |  | a[href="#Home/create"]<br>a.ellipsis_inline<br>a:contains("Create Dashboard") |
| link-or-menu | Activity Stream |  | a[href="#activities"]<br>a.ellipsis_inline<br>a:contains("Activity Stream") |
| link-or-menu | Manage Dashboards |  | a[href="#Dashboards?moduleName=Home"]<br>a.ellipsis_inline<br>a:contains("Manage Dashboards") |
| link-or-menu | Calendar |  | a[aria-label="Calendar"]<br>a[href="#bwc/index.php?module=Calendar&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Calendar") |
| button | Calendar - More | button | #Calendar<br>button[aria-label="Calendar - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Meeting Schedule Call Create Task Today | menu | ul[role="menu"] |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Schedule Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Call") |
| link-or-menu | Create Task |  | a[href="#Tasks/create"]<br>a.ellipsis_inline<br>a:contains("Create Task") |
| link-or-menu | Today |  | a[href="#bwc/index.php?module=Calendar&action=index&view=day"]<br>a.ellipsis_inline<br>a:contains("Today") |
| link-or-menu | Targets |  | a[aria-label="Targets"]<br>a[href="#Prospects"]<br>a.btn<br>a.module-name<br>a:contains("Targets") |
| button | Targets - More | button | #Prospects<br>button[aria-label="Targets - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Target Create Target From vCard View Targets Import Targets | menu | ul[role="menu"] |
| link-or-menu | Create Target |  | a[href="#Prospects/create"]<br>a.ellipsis_inline<br>a:contains("Create Target") |
| link-or-menu | Create Target From vCard |  | a[href="#Prospects/vcard-import"]<br>a.ellipsis_inline<br>a:contains("Create Target From vCard") |
| link-or-menu | View Targets |  | a[href="#Prospects"]<br>a.ellipsis_inline<br>a:contains("View Targets") |
| link-or-menu | Import Targets |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Prospects&return_module=Prospects&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Targets") |
| link-or-menu | Leads |  | a[aria-label="Leads"]<br>a[href="#Leads"]<br>a.btn<br>a.module-name<br>a:contains("Leads") |
| button | Leads - More | button | #Leads<br>button[aria-label="Leads - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Lead View Leads View Lead Reports Import Leads | menu | ul[role="menu"] |
| link-or-menu | Create Lead |  | a[href="#Leads/create"]<br>a.ellipsis_inline<br>a:contains("Create Lead") |
| link-or-menu | View Leads |  | a[href="#Leads"]<br>a.ellipsis_inline<br>a:contains("View Leads") |
| link-or-menu | View Lead Reports |  | a[href="#Reports?filterModule=Leads"]<br>a.ellipsis_inline<br>a:contains("View Lead Reports") |
| link-or-menu | Import Leads |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Leads&return_module=Leads&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Leads") |
| link-or-menu | Students |  | a[aria-label="Students"]<br>a[href="#Contacts"]<br>a.btn<br>a.module-name<br>a:contains("Students") |
| button | Students - More | button | #Contacts<br>button[aria-label="Students - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Student View Students View Student Reports Import Students Send SMS | menu | ul[role="menu"] |
| link-or-menu | Create Student |  | a[href="#Contacts/create"]<br>a.ellipsis_inline<br>a:contains("Create Student") |
| link-or-menu | View Students |  | a[href="#Contacts"]<br>a.ellipsis_inline<br>a:contains("View Students") |
| link-or-menu | View Student Reports |  | a[href="#Reports?filterModule=Contacts"]<br>a.ellipsis_inline<br>a:contains("View Student Reports") |
| link-or-menu | Import Students |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Contacts&return_module=Contacts&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Students") |
| link-or-menu | Send SMS |  | a[href="#bwc/index.php?module=C_SMS&action=sendSMS"]<br>a.ellipsis_inline<br>a:contains("Send SMS") |
| link-or-menu | Sale Orders |  | a[aria-label="Sale Orders"]<br>a[href="#Quotes"]<br>a.btn<br>a.module-name<br>a:contains("Sale Orders") |
| button | Sale Orders - More | button | #Quotes<br>button[aria-label="Sale Orders - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Sale Order View Sale Orders View Sale Order Reports | menu | ul[role="menu"] |
| link-or-menu | Create Sale Order |  | a[href="#Quotes/create"]<br>a.ellipsis_inline<br>a:contains("Create Sale Order") |
| link-or-menu | View Sale Orders |  | a[href="#Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Orders") |
| link-or-menu | View Sale Order Reports |  | a[href="#Reports?filterModule=Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Order Reports") |
| link-or-menu | Classes |  | a[aria-label="Classes"]<br>a[href="#J_Class"]<br>a.btn<br>a.module-name<br>a:contains("Classes") |
| button | Classes - More | button | #J_Class<br>button[aria-label="Classes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Class View Classes View on Calendar Import Scheduler | menu | ul[role="menu"] |
| link-or-menu | Create Class |  | a[href="#J_Class/create"]<br>a.ellipsis_inline<br>a:contains("Create Class") |
| link-or-menu | View Classes |  | a[href="#J_Class"]<br>a.ellipsis_inline<br>a:contains("View Classes") |
| link-or-menu | View on Calendar |  | a[href="#bwc/index.php?module=Calendar&action=index&view=week"]<br>a.ellipsis_inline<br>a:contains("View on Calendar") |
| link-or-menu | Import Scheduler |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Meetings&return_module=Meetings&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Scheduler") |
| link-or-menu | Schedules |  | a[aria-label="Schedules"]<br>a[href="#Meetings"]<br>a.btn<br>a.module-name<br>a:contains("Schedules") |
| button | Schedules - More | button | #Meetings<br>button[aria-label="Schedules - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Placement Test Schedule Demo Schedule Meeting | menu | ul[role="menu"] |
| link-or-menu | Schedule Placement Test |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=PT"]<br>a.ellipsis_inline<br>a:contains("Schedule Placement Test") |
| link-or-menu | Schedule Demo |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=Demo"]<br>a.ellipsis_inline<br>a:contains("Schedule Demo") |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Reports |  | a[aria-label="Reports"]<br>a[href="#Reports"]<br>a.btn<br>a.module-name<br>a:contains("Reports") |
| button | Reports - More | button | #Reports<br>button[aria-label="Reports - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Report View Reports Report Schedules | menu | ul[role="menu"] |
| link-or-menu | Create Report |  | a[href="#bwc/index.php?module=Reports&report_module=&action=index&page=report&Create+Custom+Report=Create+Custom+Report"]<br>a.ellipsis_inline<br>a:contains("Create Report") |
| link-or-menu | View Reports |  | a[href="#Reports"]<br>a.ellipsis_inline<br>a:contains("View Reports") |
| link-or-menu | Report Schedules |  | a[href="#ReportSchedules"]<br>a.ellipsis_inline<br>a:contains("Report Schedules") |
| link-or-menu | Loyalty |  | a[aria-label="Loyalty"]<br>a[href="#J_Loyalty"]<br>a.btn<br>a.module-name<br>a:contains("Loyalty") |
| button | Loyalty - More | button | #J_Loyalty<br>button[aria-label="Loyalty - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Loyalty View Loyalty Import Loyalty | menu | ul[role="menu"] |
| link-or-menu | Create Loyalty |  | a[href="#J_Loyalty/create"]<br>a.ellipsis_inline<br>a:contains("Create Loyalty") |
| link-or-menu | View Loyalty |  | a[href="#J_Loyalty"]<br>a.ellipsis_inline<br>a:contains("View Loyalty") |
| link-or-menu | Import Loyalty |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Loyalty&return_module=J_Loyalty&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Loyalty") |
| link-or-menu | Teachers |  | a[aria-label="Teachers"]<br>a[href="#C_Teachers"]<br>a.btn<br>a.module-name<br>a:contains("Teachers") |
| button | Teachers - More | button | #C_Teachers<br>button[aria-label="Teachers - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Create TA View Teachers Import Teachers | menu | ul[role="menu"] |
| link-or-menu | Create Teacher |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=Teacher"]<br>a.ellipsis_inline<br>a:contains("Create Teacher") |
| link-or-menu | Create TA |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=TA"]<br>a.ellipsis_inline<br>a:contains("Create TA") |
| link-or-menu | View Teachers |  | a[href="#C_Teachers"]<br>a.ellipsis_inline<br>a:contains("View Teachers") |
| link-or-menu | Import Teachers |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Teachers&return_module=C_Teachers&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teachers") |
| link-or-menu | Approval Processes |  | a[aria-label="Approval Processes"]<br>a[href="#ApprovalProcesses"]<br>a.btn<br>a.module-name<br>a:contains("Approval Processes") |
| button | Approval Processes - More | button | #ApprovalProcesses<br>button[aria-label="Approval Processes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Approval Processes | menu | ul[role="menu"] |
| link-or-menu | Approval Processes |  | a[href="#ApprovalProcesses/layout/approvalList"]<br>a.ellipsis_inline<br>a:contains("Approval Processes") |
| link-or-menu | Accounts |  | a[aria-label="Accounts"]<br>a[href="#Accounts"]<br>a.btn<br>a.module-name<br>a:contains("Accounts") |
| button | Accounts - More | button | #Accounts<br>button[aria-label="Accounts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Account View Accounts View Account Reports Import Accounts | menu | ul[role="menu"] |
| link-or-menu | Create Account |  | a[href="#Accounts/create"]<br>a.ellipsis_inline<br>a:contains("Create Account") |
| link-or-menu | View Accounts |  | a[href="#Accounts"]<br>a.ellipsis_inline<br>a:contains("View Accounts") |
| link-or-menu | View Account Reports |  | a[href="#Reports?filterModule=Accounts"]<br>a.ellipsis_inline<br>a:contains("View Account Reports") |
| link-or-menu | Import Accounts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Accounts"]<br>a.ellipsis_inline<br>a:contains("Import Accounts") |
| link-or-menu | Rooms |  | a[aria-label="Rooms"]<br>a[href="#C_Rooms"]<br>a.btn<br>a.module-name<br>a:contains("Rooms") |
| button | Rooms - More | button | #C_Rooms<br>button[aria-label="Rooms - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Room View Rooms Import Rooms | menu | ul[role="menu"] |
| link-or-menu | Create Room |  | a[href="#C_Rooms/create"]<br>a.ellipsis_inline<br>a:contains("Create Room") |
| link-or-menu | View Rooms |  | a[href="#C_Rooms"]<br>a.ellipsis_inline<br>a:contains("View Rooms") |
| link-or-menu | Import Rooms |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Rooms&return_module=C_Rooms&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Rooms") |
| link-or-menu | Teacher Contracts |  | a[aria-label="Teacher Contracts"]<br>a[href="#J_Teachercontract"]<br>a.btn<br>a.module-name<br>a:contains("Teacher Contracts") |
| button | Teacher Contracts - More | button | #J_Teachercontract<br>button[aria-label="Teacher Contracts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Contract View Teacher Contracts Import Teacher Contracts | menu | ul[role="menu"] |
| link-or-menu | Create Teacher Contract |  | a[href="#J_Teachercontract/create"]<br>a.ellipsis_inline<br>a:contains("Create Teacher Contract") |
| link-or-menu | View Teacher Contracts |  | a[href="#J_Teachercontract"]<br>a.ellipsis_inline<br>a:contains("View Teacher Contracts") |
| link-or-menu | Import Teacher Contracts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Teachercontract&return_module=J_Teachercontract&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teacher Contracts") |
| link-or-menu | Kind Of Courses |  | a[aria-label="Kind Of Courses"]<br>a[href="#J_Kindofcourse"]<br>a.btn<br>a.module-name<br>a:contains("Kind Of Courses") |
| button | Kind Of Courses - More | button | #J_Kindofcourse<br>button[aria-label="Kind Of Courses - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Kind Of Course View Kind Of Courses Import Kind Of Courses | menu | ul[role="menu"] |
| link-or-menu | Create Kind Of Course |  | a[href="#J_Kindofcourse/create"]<br>a.ellipsis_inline<br>a:contains("Create Kind Of Course") |
| link-or-menu | View Kind Of Courses |  | a[href="#J_Kindofcourse"]<br>a.ellipsis_inline<br>a:contains("View Kind Of Courses") |
| link-or-menu | Import Kind Of Courses |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Kindofcourse&return_module=J_Kindofcourse&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Kind Of Courses") |
| link-or-menu | Activities |  | a[aria-label="Activities"]<br>a[href="#M_Activities"]<br>a.btn<br>a.module-name<br>a:contains("Activities") |
| button | Activities - More | button | #M_Activities<br>button[aria-label="Activities - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Activities View Activities Import Syllabus | menu | ul[role="menu"] |
| link-or-menu | Create Activities |  | a[href="#M_Activities/create"]<br>a.ellipsis_inline<br>a:contains("Create Activities") |
| link-or-menu | View Activities |  | a[href="#M_Activities"]<br>a.ellipsis_inline<br>a:contains("View Activities") |
| link-or-menu | Import Syllabus |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Syllabus&query=true&report_module=M_Activities"]<br>a.ellipsis_inline<br>a:contains("Import Syllabus") |
| link-or-menu | Work permit |  | a[aria-label="Work permit"]<br>a[href="#J_Workpermit"]<br>a.btn<br>a.module-name<br>a:contains("Work permit") |
| button | Work permit - More | button | #J_Workpermit<br>button[aria-label="Work permit - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Work permit View Work permit | menu | ul[role="menu"] |
| link-or-menu | Create Work permit |  | a[href="#J_Workpermit/create"]<br>a.ellipsis_inline<br>a:contains("Create Work permit") |
| link-or-menu | View Work permit |  | a[href="#J_Workpermit"]<br>a.ellipsis_inline<br>a:contains("View Work permit") |
| link-or-menu | Gallery |  | a[aria-label="Gallery"]<br>a[href="#C_Gallery"]<br>a.btn<br>a.module-name<br>a:contains("Gallery") |
| button | Gallery - More | button | #C_Gallery<br>button[aria-label="Gallery - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gallery View Gallery | menu | ul[role="menu"] |
| link-or-menu | Create Gallery |  | a[href="#C_Gallery/create"]<br>a.ellipsis_inline<br>a:contains("Create Gallery") |
| link-or-menu | View Gallery |  | a[href="#C_Gallery"]<br>a.ellipsis_inline<br>a:contains("View Gallery") |
| link-or-menu | Gradebooks |  | a[aria-label="Gradebooks"]<br>a[href="#J_Gradebook"]<br>a.btn<br>a.module-name<br>a:contains("Gradebooks") |
| button | Gradebooks - More | button | #J_Gradebook<br>button[aria-label="Gradebooks - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | View Gradebooks | menu | ul[role="menu"] |
| link-or-menu | View Gradebooks |  | a[href="#J_Gradebook"]<br>a.ellipsis_inline<br>a:contains("View Gradebooks") |
| link-or-menu | Gradebook Settings |  | a[aria-label="Gradebook Settings"]<br>a[href="#J_GradebookConfig"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Settings") |
| button | Gradebook Settings - More | button | #J_GradebookConfig<br>button[aria-label="Gradebook Settings - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting View Gradebook Settings | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting |  | a[href="#J_GradebookConfig/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting") |
| link-or-menu | View Gradebook Settings |  | a[href="#J_GradebookConfig"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Settings") |
| link-or-menu | Gradebook Setting Groups |  | a[aria-label="Gradebook Setting Groups"]<br>a[href="#J_GradebookSettingGroup"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Setting Groups") |
| button | Gradebook Setting Groups - More | button | #J_GradebookSettingGroup<br>button[aria-label="Gradebook Setting Groups - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting Group View Gradebook Setting Groups | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting Group |  | a[href="#J_GradebookSettingGroup/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting Group") |
| link-or-menu | View Gradebook Setting Groups |  | a[href="#J_GradebookSettingGroup"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Setting Groups") |
| link-or-menu | Admin Hours |  | a[aria-label="Admin Hours"]<br>a[href="#bwc/index.php?module=C_Timesheet&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Admin Hours") |
| link-or-menu | Campaigns |  | a[aria-label="Campaigns"]<br>a[href="#bwc/index.php?module=Campaigns&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Campaigns") |
| button | Campaigns - More | button | #Campaigns<br>button[aria-label="Campaigns - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Campaign (Wizard) Create Campaign (Classic) View Campaigns View Newsletters Create Email Template View Email Temp | menu | ul[role="menu"] |
| link-or-menu | Create Campaign (Wizard) |  | a[href="#bwc/index.php?module=Campaigns&action=WizardHome&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Wizard)") |
| link-or-menu | Create Campaign (Classic) |  | a[href="#bwc/index.php?module=Campaigns&action=EditView&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Classic)") |
| link-or-menu | View Campaigns |  | a[href="#bwc/index.php?module=Campaigns&action=index&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Campaigns") |
| link-or-menu | View Newsletters |  | a[href="#bwc/index.php?module=Campaigns&action=newsletterlist&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Newsletters") |
| link-or-menu | Create Email Template |  | a[href="#bwc/index.php?module=EmailTemplates&action=EditView&return_module=EmailTemplates&return_action=DetailView"]<br>a.ellipsis_inline<br>a:contains("Create Email Template") |
| link-or-menu | View Email Templates |  | a[href="#bwc/index.php?module=EmailTemplates&action=index"]<br>a.ellipsis_inline<br>a:contains("View Email Templates") |
| link-or-menu | Set Up Email |  | a[href="#bwc/index.php?module=Campaigns&action=WizardEmailSetup&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Set Up Email") |
| link-or-menu | View Diagnostics |  | a[href="#bwc/index.php?module=Campaigns&action=CampaignDiagnostic&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Diagnostics") |
| link-or-menu | Create Lead Form |  | a[href="#bwc/index.php?module=Campaigns&action=WebToLeadCreation&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Lead Form") |
| link-or-menu | Calls |  | a[aria-label="Calls"]<br>a[href="#Calls"]<br>a.btn<br>a.module-name<br>a:contains("Calls") |
| button | Calls - More | button | #Calls<br>button[aria-label="Calls - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Log Call View Calls Import Calls Activities Report | menu | ul[role="menu"] |
| link-or-menu | Log Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Log Call") |

## 11. Reports | Scots CRM
- URL: https://stagingcrm.scotsenglish.edu.vn/index.php#bwc/index.php?module=C_SMS&action=sendSMS
- Elements captured: 366

| Kind | Label/Text | Role/Type | Candidate selectors |
|---|---|---|---|
| navigation | main module navigation | navigation | ul[role="navigation"]<br>ul[aria-label="main module navigation"]<br>ul.nav<br>ul.megamenu |
| link-or-menu | Home |  | a[aria-label="Home"]<br>a[href="#Home"]<br>a.cube<br>a.btn |
| button | Home - More | button | button[aria-label="Home - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Dashboard Activity Stream Manage Dashboards | menu | ul[role="menu"] |
| link-or-menu | Create Dashboard |  | a[href="#Home/create"]<br>a.ellipsis_inline<br>a:contains("Create Dashboard") |
| link-or-menu | Activity Stream |  | a[href="#activities"]<br>a.ellipsis_inline<br>a:contains("Activity Stream") |
| link-or-menu | Manage Dashboards |  | a[href="#Dashboards?moduleName=Home"]<br>a.ellipsis_inline<br>a:contains("Manage Dashboards") |
| link-or-menu | Calendar |  | a[aria-label="Calendar"]<br>a[href="#bwc/index.php?module=Calendar&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Calendar") |
| button | Calendar - More | button | #Calendar<br>button[aria-label="Calendar - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Meeting Schedule Call Create Task Today | menu | ul[role="menu"] |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Schedule Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Call") |
| link-or-menu | Create Task |  | a[href="#Tasks/create"]<br>a.ellipsis_inline<br>a:contains("Create Task") |
| link-or-menu | Today |  | a[href="#bwc/index.php?module=Calendar&action=index&view=day"]<br>a.ellipsis_inline<br>a:contains("Today") |
| link-or-menu | Targets |  | a[aria-label="Targets"]<br>a[href="#Prospects"]<br>a.btn<br>a.module-name<br>a:contains("Targets") |
| button | Targets - More | button | #Prospects<br>button[aria-label="Targets - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Target Create Target From vCard View Targets Import Targets | menu | ul[role="menu"] |
| link-or-menu | Create Target |  | a[href="#Prospects/create"]<br>a.ellipsis_inline<br>a:contains("Create Target") |
| link-or-menu | Create Target From vCard |  | a[href="#Prospects/vcard-import"]<br>a.ellipsis_inline<br>a:contains("Create Target From vCard") |
| link-or-menu | View Targets |  | a[href="#Prospects"]<br>a.ellipsis_inline<br>a:contains("View Targets") |
| link-or-menu | Import Targets |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Prospects&return_module=Prospects&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Targets") |
| link-or-menu | Leads |  | a[aria-label="Leads"]<br>a[href="#Leads"]<br>a.btn<br>a.module-name<br>a:contains("Leads") |
| button | Leads - More | button | #Leads<br>button[aria-label="Leads - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Lead View Leads View Lead Reports Import Leads | menu | ul[role="menu"] |
| link-or-menu | Create Lead |  | a[href="#Leads/create"]<br>a.ellipsis_inline<br>a:contains("Create Lead") |
| link-or-menu | View Leads |  | a[href="#Leads"]<br>a.ellipsis_inline<br>a:contains("View Leads") |
| link-or-menu | View Lead Reports |  | a[href="#Reports?filterModule=Leads"]<br>a.ellipsis_inline<br>a:contains("View Lead Reports") |
| link-or-menu | Import Leads |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Leads&return_module=Leads&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Leads") |
| link-or-menu | Students |  | a[aria-label="Students"]<br>a[href="#Contacts"]<br>a.btn<br>a.module-name<br>a:contains("Students") |
| button | Students - More | button | #Contacts<br>button[aria-label="Students - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Student View Students View Student Reports Import Students Send SMS | menu | ul[role="menu"] |
| link-or-menu | Create Student |  | a[href="#Contacts/create"]<br>a.ellipsis_inline<br>a:contains("Create Student") |
| link-or-menu | View Students |  | a[href="#Contacts"]<br>a.ellipsis_inline<br>a:contains("View Students") |
| link-or-menu | View Student Reports |  | a[href="#Reports?filterModule=Contacts"]<br>a.ellipsis_inline<br>a:contains("View Student Reports") |
| link-or-menu | Import Students |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Contacts&return_module=Contacts&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Students") |
| link-or-menu | Send SMS |  | a[href="#bwc/index.php?module=C_SMS&action=sendSMS"]<br>a.ellipsis_inline<br>a:contains("Send SMS") |
| link-or-menu | Sale Orders |  | a[aria-label="Sale Orders"]<br>a[href="#Quotes"]<br>a.btn<br>a.module-name<br>a:contains("Sale Orders") |
| button | Sale Orders - More | button | #Quotes<br>button[aria-label="Sale Orders - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Sale Order View Sale Orders View Sale Order Reports | menu | ul[role="menu"] |
| link-or-menu | Create Sale Order |  | a[href="#Quotes/create"]<br>a.ellipsis_inline<br>a:contains("Create Sale Order") |
| link-or-menu | View Sale Orders |  | a[href="#Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Orders") |
| link-or-menu | View Sale Order Reports |  | a[href="#Reports?filterModule=Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Order Reports") |
| link-or-menu | Classes |  | a[aria-label="Classes"]<br>a[href="#J_Class"]<br>a.btn<br>a.module-name<br>a:contains("Classes") |
| button | Classes - More | button | #J_Class<br>button[aria-label="Classes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Class View Classes View on Calendar Import Scheduler | menu | ul[role="menu"] |
| link-or-menu | Create Class |  | a[href="#J_Class/create"]<br>a.ellipsis_inline<br>a:contains("Create Class") |
| link-or-menu | View Classes |  | a[href="#J_Class"]<br>a.ellipsis_inline<br>a:contains("View Classes") |
| link-or-menu | View on Calendar |  | a[href="#bwc/index.php?module=Calendar&action=index&view=week"]<br>a.ellipsis_inline<br>a:contains("View on Calendar") |
| link-or-menu | Import Scheduler |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Meetings&return_module=Meetings&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Scheduler") |
| link-or-menu | Schedules |  | a[aria-label="Schedules"]<br>a[href="#Meetings"]<br>a.btn<br>a.module-name<br>a:contains("Schedules") |
| button | Schedules - More | button | #Meetings<br>button[aria-label="Schedules - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Placement Test Schedule Demo Schedule Meeting | menu | ul[role="menu"] |
| link-or-menu | Schedule Placement Test |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=PT"]<br>a.ellipsis_inline<br>a:contains("Schedule Placement Test") |
| link-or-menu | Schedule Demo |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=Demo"]<br>a.ellipsis_inline<br>a:contains("Schedule Demo") |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Reports |  | a[aria-label="Reports"]<br>a[href="#Reports"]<br>a.btn<br>a.module-name<br>a:contains("Reports") |
| button | Reports - More | button | #Reports<br>button[aria-label="Reports - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Report View Reports Report Schedules | menu | ul[role="menu"] |
| link-or-menu | Create Report |  | a[href="#bwc/index.php?module=Reports&report_module=&action=index&page=report&Create+Custom+Report=Create+Custom+Report"]<br>a.ellipsis_inline<br>a:contains("Create Report") |
| link-or-menu | View Reports |  | a[href="#Reports"]<br>a.ellipsis_inline<br>a:contains("View Reports") |
| link-or-menu | Report Schedules |  | a[href="#ReportSchedules"]<br>a.ellipsis_inline<br>a:contains("Report Schedules") |
| link-or-menu | Loyalty |  | a[aria-label="Loyalty"]<br>a[href="#J_Loyalty"]<br>a.btn<br>a.module-name<br>a:contains("Loyalty") |
| button | Loyalty - More | button | #J_Loyalty<br>button[aria-label="Loyalty - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Loyalty View Loyalty Import Loyalty | menu | ul[role="menu"] |
| link-or-menu | Create Loyalty |  | a[href="#J_Loyalty/create"]<br>a.ellipsis_inline<br>a:contains("Create Loyalty") |
| link-or-menu | View Loyalty |  | a[href="#J_Loyalty"]<br>a.ellipsis_inline<br>a:contains("View Loyalty") |
| link-or-menu | Import Loyalty |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Loyalty&return_module=J_Loyalty&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Loyalty") |
| link-or-menu | Teachers |  | a[aria-label="Teachers"]<br>a[href="#C_Teachers"]<br>a.btn<br>a.module-name<br>a:contains("Teachers") |
| button | Teachers - More | button | #C_Teachers<br>button[aria-label="Teachers - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Create TA View Teachers Import Teachers | menu | ul[role="menu"] |
| link-or-menu | Create Teacher |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=Teacher"]<br>a.ellipsis_inline<br>a:contains("Create Teacher") |
| link-or-menu | Create TA |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=TA"]<br>a.ellipsis_inline<br>a:contains("Create TA") |
| link-or-menu | View Teachers |  | a[href="#C_Teachers"]<br>a.ellipsis_inline<br>a:contains("View Teachers") |
| link-or-menu | Import Teachers |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Teachers&return_module=C_Teachers&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teachers") |
| link-or-menu | Approval Processes |  | a[aria-label="Approval Processes"]<br>a[href="#ApprovalProcesses"]<br>a.btn<br>a.module-name<br>a:contains("Approval Processes") |
| button | Approval Processes - More | button | #ApprovalProcesses<br>button[aria-label="Approval Processes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Approval Processes | menu | ul[role="menu"] |
| link-or-menu | Approval Processes |  | a[href="#ApprovalProcesses/layout/approvalList"]<br>a.ellipsis_inline<br>a:contains("Approval Processes") |
| link-or-menu | Accounts |  | a[aria-label="Accounts"]<br>a[href="#Accounts"]<br>a.btn<br>a.module-name<br>a:contains("Accounts") |
| button | Accounts - More | button | #Accounts<br>button[aria-label="Accounts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Account View Accounts View Account Reports Import Accounts | menu | ul[role="menu"] |
| link-or-menu | Create Account |  | a[href="#Accounts/create"]<br>a.ellipsis_inline<br>a:contains("Create Account") |
| link-or-menu | View Accounts |  | a[href="#Accounts"]<br>a.ellipsis_inline<br>a:contains("View Accounts") |
| link-or-menu | View Account Reports |  | a[href="#Reports?filterModule=Accounts"]<br>a.ellipsis_inline<br>a:contains("View Account Reports") |
| link-or-menu | Import Accounts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Accounts"]<br>a.ellipsis_inline<br>a:contains("Import Accounts") |
| link-or-menu | Rooms |  | a[aria-label="Rooms"]<br>a[href="#C_Rooms"]<br>a.btn<br>a.module-name<br>a:contains("Rooms") |
| button | Rooms - More | button | #C_Rooms<br>button[aria-label="Rooms - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Room View Rooms Import Rooms | menu | ul[role="menu"] |
| link-or-menu | Create Room |  | a[href="#C_Rooms/create"]<br>a.ellipsis_inline<br>a:contains("Create Room") |
| link-or-menu | View Rooms |  | a[href="#C_Rooms"]<br>a.ellipsis_inline<br>a:contains("View Rooms") |
| link-or-menu | Import Rooms |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Rooms&return_module=C_Rooms&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Rooms") |
| link-or-menu | Teacher Contracts |  | a[aria-label="Teacher Contracts"]<br>a[href="#J_Teachercontract"]<br>a.btn<br>a.module-name<br>a:contains("Teacher Contracts") |
| button | Teacher Contracts - More | button | #J_Teachercontract<br>button[aria-label="Teacher Contracts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Contract View Teacher Contracts Import Teacher Contracts | menu | ul[role="menu"] |
| link-or-menu | Create Teacher Contract |  | a[href="#J_Teachercontract/create"]<br>a.ellipsis_inline<br>a:contains("Create Teacher Contract") |
| link-or-menu | View Teacher Contracts |  | a[href="#J_Teachercontract"]<br>a.ellipsis_inline<br>a:contains("View Teacher Contracts") |
| link-or-menu | Import Teacher Contracts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Teachercontract&return_module=J_Teachercontract&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teacher Contracts") |
| link-or-menu | Kind Of Courses |  | a[aria-label="Kind Of Courses"]<br>a[href="#J_Kindofcourse"]<br>a.btn<br>a.module-name<br>a:contains("Kind Of Courses") |
| button | Kind Of Courses - More | button | #J_Kindofcourse<br>button[aria-label="Kind Of Courses - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Kind Of Course View Kind Of Courses Import Kind Of Courses | menu | ul[role="menu"] |
| link-or-menu | Create Kind Of Course |  | a[href="#J_Kindofcourse/create"]<br>a.ellipsis_inline<br>a:contains("Create Kind Of Course") |
| link-or-menu | View Kind Of Courses |  | a[href="#J_Kindofcourse"]<br>a.ellipsis_inline<br>a:contains("View Kind Of Courses") |
| link-or-menu | Import Kind Of Courses |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Kindofcourse&return_module=J_Kindofcourse&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Kind Of Courses") |
| link-or-menu | Activities |  | a[aria-label="Activities"]<br>a[href="#M_Activities"]<br>a.btn<br>a.module-name<br>a:contains("Activities") |
| button | Activities - More | button | #M_Activities<br>button[aria-label="Activities - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Activities View Activities Import Syllabus | menu | ul[role="menu"] |
| link-or-menu | Create Activities |  | a[href="#M_Activities/create"]<br>a.ellipsis_inline<br>a:contains("Create Activities") |
| link-or-menu | View Activities |  | a[href="#M_Activities"]<br>a.ellipsis_inline<br>a:contains("View Activities") |
| link-or-menu | Import Syllabus |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Syllabus&query=true&report_module=M_Activities"]<br>a.ellipsis_inline<br>a:contains("Import Syllabus") |
| link-or-menu | Work permit |  | a[aria-label="Work permit"]<br>a[href="#J_Workpermit"]<br>a.btn<br>a.module-name<br>a:contains("Work permit") |
| button | Work permit - More | button | #J_Workpermit<br>button[aria-label="Work permit - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Work permit View Work permit | menu | ul[role="menu"] |
| link-or-menu | Create Work permit |  | a[href="#J_Workpermit/create"]<br>a.ellipsis_inline<br>a:contains("Create Work permit") |
| link-or-menu | View Work permit |  | a[href="#J_Workpermit"]<br>a.ellipsis_inline<br>a:contains("View Work permit") |
| link-or-menu | Gallery |  | a[aria-label="Gallery"]<br>a[href="#C_Gallery"]<br>a.btn<br>a.module-name<br>a:contains("Gallery") |
| button | Gallery - More | button | #C_Gallery<br>button[aria-label="Gallery - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gallery View Gallery | menu | ul[role="menu"] |
| link-or-menu | Create Gallery |  | a[href="#C_Gallery/create"]<br>a.ellipsis_inline<br>a:contains("Create Gallery") |
| link-or-menu | View Gallery |  | a[href="#C_Gallery"]<br>a.ellipsis_inline<br>a:contains("View Gallery") |
| link-or-menu | Gradebooks |  | a[aria-label="Gradebooks"]<br>a[href="#J_Gradebook"]<br>a.btn<br>a.module-name<br>a:contains("Gradebooks") |
| button | Gradebooks - More | button | #J_Gradebook<br>button[aria-label="Gradebooks - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | View Gradebooks | menu | ul[role="menu"] |
| link-or-menu | View Gradebooks |  | a[href="#J_Gradebook"]<br>a.ellipsis_inline<br>a:contains("View Gradebooks") |
| link-or-menu | Gradebook Settings |  | a[aria-label="Gradebook Settings"]<br>a[href="#J_GradebookConfig"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Settings") |
| button | Gradebook Settings - More | button | #J_GradebookConfig<br>button[aria-label="Gradebook Settings - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting View Gradebook Settings | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting |  | a[href="#J_GradebookConfig/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting") |
| link-or-menu | View Gradebook Settings |  | a[href="#J_GradebookConfig"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Settings") |
| link-or-menu | Gradebook Setting Groups |  | a[aria-label="Gradebook Setting Groups"]<br>a[href="#J_GradebookSettingGroup"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Setting Groups") |
| button | Gradebook Setting Groups - More | button | #J_GradebookSettingGroup<br>button[aria-label="Gradebook Setting Groups - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting Group View Gradebook Setting Groups | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting Group |  | a[href="#J_GradebookSettingGroup/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting Group") |
| link-or-menu | View Gradebook Setting Groups |  | a[href="#J_GradebookSettingGroup"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Setting Groups") |
| link-or-menu | Admin Hours |  | a[aria-label="Admin Hours"]<br>a[href="#bwc/index.php?module=C_Timesheet&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Admin Hours") |
| link-or-menu | Campaigns |  | a[aria-label="Campaigns"]<br>a[href="#bwc/index.php?module=Campaigns&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Campaigns") |
| button | Campaigns - More | button | #Campaigns<br>button[aria-label="Campaigns - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Campaign (Wizard) Create Campaign (Classic) View Campaigns View Newsletters Create Email Template View Email Temp | menu | ul[role="menu"] |
| link-or-menu | Create Campaign (Wizard) |  | a[href="#bwc/index.php?module=Campaigns&action=WizardHome&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Wizard)") |
| link-or-menu | Create Campaign (Classic) |  | a[href="#bwc/index.php?module=Campaigns&action=EditView&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Classic)") |
| link-or-menu | View Campaigns |  | a[href="#bwc/index.php?module=Campaigns&action=index&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Campaigns") |
| link-or-menu | View Newsletters |  | a[href="#bwc/index.php?module=Campaigns&action=newsletterlist&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Newsletters") |
| link-or-menu | Create Email Template |  | a[href="#bwc/index.php?module=EmailTemplates&action=EditView&return_module=EmailTemplates&return_action=DetailView"]<br>a.ellipsis_inline<br>a:contains("Create Email Template") |
| link-or-menu | View Email Templates |  | a[href="#bwc/index.php?module=EmailTemplates&action=index"]<br>a.ellipsis_inline<br>a:contains("View Email Templates") |
| link-or-menu | Set Up Email |  | a[href="#bwc/index.php?module=Campaigns&action=WizardEmailSetup&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Set Up Email") |
| link-or-menu | View Diagnostics |  | a[href="#bwc/index.php?module=Campaigns&action=CampaignDiagnostic&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Diagnostics") |
| link-or-menu | Create Lead Form |  | a[href="#bwc/index.php?module=Campaigns&action=WebToLeadCreation&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Lead Form") |
| link-or-menu | Calls |  | a[aria-label="Calls"]<br>a[href="#Calls"]<br>a.btn<br>a.module-name<br>a:contains("Calls") |
| button | Calls - More | button | #Calls<br>button[aria-label="Calls - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Log Call View Calls Import Calls Activities Report | menu | ul[role="menu"] |
| link-or-menu | Log Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Log Call") |

## 12. Sale Orders | Scots CRM
- URL: https://stagingcrm.scotsenglish.edu.vn/index.php#Quotes
- Headings: Sale Orders (20 of 21+) Create Sale Order View Sale Order Reports | Sale Orders List Dashboard Manage Dashboards Loading... Create Cancel Delete Save Cancel Save
- Elements captured: 585

| Kind | Label/Text | Role/Type | Candidate selectors |
|---|---|---|---|
| navigation | main module navigation | navigation | ul[role="navigation"]<br>ul[aria-label="main module navigation"]<br>ul.nav<br>ul.megamenu |
| link-or-menu | Home |  | a[aria-label="Home"]<br>a[href="#Home"]<br>a.cube<br>a.btn |
| button | Home - More | button | button[aria-label="Home - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Dashboard Activity Stream Manage Dashboards | menu | ul[role="menu"] |
| link-or-menu | Create Dashboard |  | a[href="#Home/create"]<br>a.ellipsis_inline<br>a:contains("Create Dashboard") |
| link-or-menu | Activity Stream |  | a[href="#activities"]<br>a.ellipsis_inline<br>a:contains("Activity Stream") |
| link-or-menu | Manage Dashboards |  | a[href="#Dashboards?moduleName=Home"]<br>a.ellipsis_inline<br>a:contains("Manage Dashboards") |
| link-or-menu | Calendar |  | a[aria-label="Calendar"]<br>a[href="#bwc/index.php?module=Calendar&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Calendar") |
| button | Calendar - More | button | #Calendar<br>button[aria-label="Calendar - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Meeting Schedule Call Create Task Today | menu | ul[role="menu"] |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Schedule Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Call") |
| link-or-menu | Create Task |  | a[href="#Tasks/create"]<br>a.ellipsis_inline<br>a:contains("Create Task") |
| link-or-menu | Today |  | a[href="#bwc/index.php?module=Calendar&action=index&view=day"]<br>a.ellipsis_inline<br>a:contains("Today") |
| link-or-menu | Targets |  | a[aria-label="Targets"]<br>a[href="#Prospects"]<br>a.btn<br>a.module-name<br>a:contains("Targets") |
| button | Targets - More | button | #Prospects<br>button[aria-label="Targets - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Target Create Target From vCard View Targets Import Targets | menu | ul[role="menu"] |
| link-or-menu | Create Target |  | a[href="#Prospects/create"]<br>a.ellipsis_inline<br>a:contains("Create Target") |
| link-or-menu | Create Target From vCard |  | a[href="#Prospects/vcard-import"]<br>a.ellipsis_inline<br>a:contains("Create Target From vCard") |
| link-or-menu | View Targets |  | a[href="#Prospects"]<br>a.ellipsis_inline<br>a:contains("View Targets") |
| link-or-menu | Import Targets |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Prospects&return_module=Prospects&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Targets") |
| link-or-menu | Leads |  | a[aria-label="Leads"]<br>a[href="#Leads"]<br>a.btn<br>a.module-name<br>a:contains("Leads") |
| button | Leads - More | button | #Leads<br>button[aria-label="Leads - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Lead View Leads View Lead Reports Import Leads | menu | ul[role="menu"] |
| link-or-menu | Create Lead |  | a[href="#Leads/create"]<br>a.ellipsis_inline<br>a:contains("Create Lead") |
| link-or-menu | View Leads |  | a[href="#Leads"]<br>a.ellipsis_inline<br>a:contains("View Leads") |
| link-or-menu | View Lead Reports |  | a[href="#Reports?filterModule=Leads"]<br>a.ellipsis_inline<br>a:contains("View Lead Reports") |
| link-or-menu | Import Leads |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Leads&return_module=Leads&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Leads") |
| link-or-menu | Students |  | a[aria-label="Students"]<br>a[href="#Contacts"]<br>a.btn<br>a.module-name<br>a:contains("Students") |
| button | Students - More | button | #Contacts<br>button[aria-label="Students - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Student View Students View Student Reports Import Students Send SMS | menu | ul[role="menu"] |
| link-or-menu | Create Student |  | a[href="#Contacts/create"]<br>a.ellipsis_inline<br>a:contains("Create Student") |
| link-or-menu | View Students |  | a[href="#Contacts"]<br>a.ellipsis_inline<br>a:contains("View Students") |
| link-or-menu | View Student Reports |  | a[href="#Reports?filterModule=Contacts"]<br>a.ellipsis_inline<br>a:contains("View Student Reports") |
| link-or-menu | Import Students |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Contacts&return_module=Contacts&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Students") |
| link-or-menu | Send SMS |  | a[href="#bwc/index.php?module=C_SMS&action=sendSMS"]<br>a.ellipsis_inline<br>a:contains("Send SMS") |
| link-or-menu | Sale Orders |  | a[aria-label="Sale Orders"]<br>a[href="#Quotes"]<br>a.btn<br>a.module-name<br>a:contains("Sale Orders") |
| button | Sale Orders - More | button | #Quotes<br>button[aria-label="Sale Orders - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Sale Order View Sale Orders View Sale Order Reports | menu | ul[role="menu"] |
| link-or-menu | Create Sale Order |  | a[href="#Quotes/create"]<br>a.ellipsis_inline<br>a:contains("Create Sale Order") |
| link-or-menu | View Sale Orders |  | a[href="#Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Orders") |
| link-or-menu | View Sale Order Reports |  | a[href="#Reports?filterModule=Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Order Reports") |
| link-or-menu | Classes |  | a[aria-label="Classes"]<br>a[href="#J_Class"]<br>a.btn<br>a.module-name<br>a:contains("Classes") |
| button | Classes - More | button | #J_Class<br>button[aria-label="Classes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Class View Classes View on Calendar Import Scheduler | menu | ul[role="menu"] |
| link-or-menu | Create Class |  | a[href="#J_Class/create"]<br>a.ellipsis_inline<br>a:contains("Create Class") |
| link-or-menu | View Classes |  | a[href="#J_Class"]<br>a.ellipsis_inline<br>a:contains("View Classes") |
| link-or-menu | View on Calendar |  | a[href="#bwc/index.php?module=Calendar&action=index&view=week"]<br>a.ellipsis_inline<br>a:contains("View on Calendar") |
| link-or-menu | Import Scheduler |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Meetings&return_module=Meetings&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Scheduler") |
| link-or-menu | Schedules |  | a[aria-label="Schedules"]<br>a[href="#Meetings"]<br>a.btn<br>a.module-name<br>a:contains("Schedules") |
| button | Schedules - More | button | #Meetings<br>button[aria-label="Schedules - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Placement Test Schedule Demo Schedule Meeting | menu | ul[role="menu"] |
| link-or-menu | Schedule Placement Test |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=PT"]<br>a.ellipsis_inline<br>a:contains("Schedule Placement Test") |
| link-or-menu | Schedule Demo |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=Demo"]<br>a.ellipsis_inline<br>a:contains("Schedule Demo") |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Reports |  | a[aria-label="Reports"]<br>a[href="#Reports"]<br>a.btn<br>a.module-name<br>a:contains("Reports") |
| button | Reports - More | button | #Reports<br>button[aria-label="Reports - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Report View Reports Report Schedules | menu | ul[role="menu"] |
| link-or-menu | Create Report |  | a[href="#bwc/index.php?module=Reports&report_module=&action=index&page=report&Create+Custom+Report=Create+Custom+Report"]<br>a.ellipsis_inline<br>a:contains("Create Report") |
| link-or-menu | View Reports |  | a[href="#Reports"]<br>a.ellipsis_inline<br>a:contains("View Reports") |
| link-or-menu | Report Schedules |  | a[href="#ReportSchedules"]<br>a.ellipsis_inline<br>a:contains("Report Schedules") |
| link-or-menu | Loyalty |  | a[aria-label="Loyalty"]<br>a[href="#J_Loyalty"]<br>a.btn<br>a.module-name<br>a:contains("Loyalty") |
| button | Loyalty - More | button | #J_Loyalty<br>button[aria-label="Loyalty - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Loyalty View Loyalty Import Loyalty | menu | ul[role="menu"] |
| link-or-menu | Create Loyalty |  | a[href="#J_Loyalty/create"]<br>a.ellipsis_inline<br>a:contains("Create Loyalty") |
| link-or-menu | View Loyalty |  | a[href="#J_Loyalty"]<br>a.ellipsis_inline<br>a:contains("View Loyalty") |
| link-or-menu | Import Loyalty |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Loyalty&return_module=J_Loyalty&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Loyalty") |
| link-or-menu | Teachers |  | a[aria-label="Teachers"]<br>a[href="#C_Teachers"]<br>a.btn<br>a.module-name<br>a:contains("Teachers") |
| button | Teachers - More | button | #C_Teachers<br>button[aria-label="Teachers - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Create TA View Teachers Import Teachers | menu | ul[role="menu"] |
| link-or-menu | Create Teacher |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=Teacher"]<br>a.ellipsis_inline<br>a:contains("Create Teacher") |
| link-or-menu | Create TA |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=TA"]<br>a.ellipsis_inline<br>a:contains("Create TA") |
| link-or-menu | View Teachers |  | a[href="#C_Teachers"]<br>a.ellipsis_inline<br>a:contains("View Teachers") |
| link-or-menu | Import Teachers |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Teachers&return_module=C_Teachers&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teachers") |
| link-or-menu | Approval Processes |  | a[aria-label="Approval Processes"]<br>a[href="#ApprovalProcesses"]<br>a.btn<br>a.module-name<br>a:contains("Approval Processes") |
| button | Approval Processes - More | button | #ApprovalProcesses<br>button[aria-label="Approval Processes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Approval Processes | menu | ul[role="menu"] |
| link-or-menu | Approval Processes |  | a[href="#ApprovalProcesses/layout/approvalList"]<br>a.ellipsis_inline<br>a:contains("Approval Processes") |
| link-or-menu | Accounts |  | a[aria-label="Accounts"]<br>a[href="#Accounts"]<br>a.btn<br>a.module-name<br>a:contains("Accounts") |
| button | Accounts - More | button | #Accounts<br>button[aria-label="Accounts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Account View Accounts View Account Reports Import Accounts | menu | ul[role="menu"] |
| link-or-menu | Create Account |  | a[href="#Accounts/create"]<br>a.ellipsis_inline<br>a:contains("Create Account") |
| link-or-menu | View Accounts |  | a[href="#Accounts"]<br>a.ellipsis_inline<br>a:contains("View Accounts") |
| link-or-menu | View Account Reports |  | a[href="#Reports?filterModule=Accounts"]<br>a.ellipsis_inline<br>a:contains("View Account Reports") |
| link-or-menu | Import Accounts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Accounts"]<br>a.ellipsis_inline<br>a:contains("Import Accounts") |
| link-or-menu | Rooms |  | a[aria-label="Rooms"]<br>a[href="#C_Rooms"]<br>a.btn<br>a.module-name<br>a:contains("Rooms") |
| button | Rooms - More | button | #C_Rooms<br>button[aria-label="Rooms - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Room View Rooms Import Rooms | menu | ul[role="menu"] |
| link-or-menu | Create Room |  | a[href="#C_Rooms/create"]<br>a.ellipsis_inline<br>a:contains("Create Room") |
| link-or-menu | View Rooms |  | a[href="#C_Rooms"]<br>a.ellipsis_inline<br>a:contains("View Rooms") |
| link-or-menu | Import Rooms |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Rooms&return_module=C_Rooms&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Rooms") |
| link-or-menu | Teacher Contracts |  | a[aria-label="Teacher Contracts"]<br>a[href="#J_Teachercontract"]<br>a.btn<br>a.module-name<br>a:contains("Teacher Contracts") |
| button | Teacher Contracts - More | button | #J_Teachercontract<br>button[aria-label="Teacher Contracts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Contract View Teacher Contracts Import Teacher Contracts | menu | ul[role="menu"] |
| link-or-menu | Create Teacher Contract |  | a[href="#J_Teachercontract/create"]<br>a.ellipsis_inline<br>a:contains("Create Teacher Contract") |
| link-or-menu | View Teacher Contracts |  | a[href="#J_Teachercontract"]<br>a.ellipsis_inline<br>a:contains("View Teacher Contracts") |
| link-or-menu | Import Teacher Contracts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Teachercontract&return_module=J_Teachercontract&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teacher Contracts") |
| link-or-menu | Kind Of Courses |  | a[aria-label="Kind Of Courses"]<br>a[href="#J_Kindofcourse"]<br>a.btn<br>a.module-name<br>a:contains("Kind Of Courses") |
| button | Kind Of Courses - More | button | #J_Kindofcourse<br>button[aria-label="Kind Of Courses - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Kind Of Course View Kind Of Courses Import Kind Of Courses | menu | ul[role="menu"] |
| link-or-menu | Create Kind Of Course |  | a[href="#J_Kindofcourse/create"]<br>a.ellipsis_inline<br>a:contains("Create Kind Of Course") |
| link-or-menu | View Kind Of Courses |  | a[href="#J_Kindofcourse"]<br>a.ellipsis_inline<br>a:contains("View Kind Of Courses") |
| link-or-menu | Import Kind Of Courses |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Kindofcourse&return_module=J_Kindofcourse&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Kind Of Courses") |
| link-or-menu | Activities |  | a[aria-label="Activities"]<br>a[href="#M_Activities"]<br>a.btn<br>a.module-name<br>a:contains("Activities") |
| button | Activities - More | button | #M_Activities<br>button[aria-label="Activities - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Activities View Activities Import Syllabus | menu | ul[role="menu"] |
| link-or-menu | Create Activities |  | a[href="#M_Activities/create"]<br>a.ellipsis_inline<br>a:contains("Create Activities") |
| link-or-menu | View Activities |  | a[href="#M_Activities"]<br>a.ellipsis_inline<br>a:contains("View Activities") |
| link-or-menu | Import Syllabus |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Syllabus&query=true&report_module=M_Activities"]<br>a.ellipsis_inline<br>a:contains("Import Syllabus") |
| link-or-menu | Work permit |  | a[aria-label="Work permit"]<br>a[href="#J_Workpermit"]<br>a.btn<br>a.module-name<br>a:contains("Work permit") |
| button | Work permit - More | button | #J_Workpermit<br>button[aria-label="Work permit - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Work permit View Work permit | menu | ul[role="menu"] |
| link-or-menu | Create Work permit |  | a[href="#J_Workpermit/create"]<br>a.ellipsis_inline<br>a:contains("Create Work permit") |
| link-or-menu | View Work permit |  | a[href="#J_Workpermit"]<br>a.ellipsis_inline<br>a:contains("View Work permit") |
| link-or-menu | Gallery |  | a[aria-label="Gallery"]<br>a[href="#C_Gallery"]<br>a.btn<br>a.module-name<br>a:contains("Gallery") |
| button | Gallery - More | button | #C_Gallery<br>button[aria-label="Gallery - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gallery View Gallery | menu | ul[role="menu"] |
| link-or-menu | Create Gallery |  | a[href="#C_Gallery/create"]<br>a.ellipsis_inline<br>a:contains("Create Gallery") |
| link-or-menu | View Gallery |  | a[href="#C_Gallery"]<br>a.ellipsis_inline<br>a:contains("View Gallery") |
| link-or-menu | Gradebooks |  | a[aria-label="Gradebooks"]<br>a[href="#J_Gradebook"]<br>a.btn<br>a.module-name<br>a:contains("Gradebooks") |
| button | Gradebooks - More | button | #J_Gradebook<br>button[aria-label="Gradebooks - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | View Gradebooks | menu | ul[role="menu"] |
| link-or-menu | View Gradebooks |  | a[href="#J_Gradebook"]<br>a.ellipsis_inline<br>a:contains("View Gradebooks") |
| link-or-menu | Gradebook Settings |  | a[aria-label="Gradebook Settings"]<br>a[href="#J_GradebookConfig"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Settings") |
| button | Gradebook Settings - More | button | #J_GradebookConfig<br>button[aria-label="Gradebook Settings - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting View Gradebook Settings | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting |  | a[href="#J_GradebookConfig/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting") |
| link-or-menu | View Gradebook Settings |  | a[href="#J_GradebookConfig"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Settings") |
| link-or-menu | Gradebook Setting Groups |  | a[aria-label="Gradebook Setting Groups"]<br>a[href="#J_GradebookSettingGroup"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Setting Groups") |
| button | Gradebook Setting Groups - More | button | #J_GradebookSettingGroup<br>button[aria-label="Gradebook Setting Groups - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting Group View Gradebook Setting Groups | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting Group |  | a[href="#J_GradebookSettingGroup/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting Group") |
| link-or-menu | View Gradebook Setting Groups |  | a[href="#J_GradebookSettingGroup"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Setting Groups") |
| link-or-menu | Admin Hours |  | a[aria-label="Admin Hours"]<br>a[href="#bwc/index.php?module=C_Timesheet&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Admin Hours") |
| link-or-menu | Campaigns |  | a[aria-label="Campaigns"]<br>a[href="#bwc/index.php?module=Campaigns&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Campaigns") |
| button | Campaigns - More | button | #Campaigns<br>button[aria-label="Campaigns - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Campaign (Wizard) Create Campaign (Classic) View Campaigns View Newsletters Create Email Template View Email Temp | menu | ul[role="menu"] |
| link-or-menu | Create Campaign (Wizard) |  | a[href="#bwc/index.php?module=Campaigns&action=WizardHome&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Wizard)") |
| link-or-menu | Create Campaign (Classic) |  | a[href="#bwc/index.php?module=Campaigns&action=EditView&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Classic)") |
| link-or-menu | View Campaigns |  | a[href="#bwc/index.php?module=Campaigns&action=index&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Campaigns") |
| link-or-menu | View Newsletters |  | a[href="#bwc/index.php?module=Campaigns&action=newsletterlist&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Newsletters") |
| link-or-menu | Create Email Template |  | a[href="#bwc/index.php?module=EmailTemplates&action=EditView&return_module=EmailTemplates&return_action=DetailView"]<br>a.ellipsis_inline<br>a:contains("Create Email Template") |
| link-or-menu | View Email Templates |  | a[href="#bwc/index.php?module=EmailTemplates&action=index"]<br>a.ellipsis_inline<br>a:contains("View Email Templates") |
| link-or-menu | Set Up Email |  | a[href="#bwc/index.php?module=Campaigns&action=WizardEmailSetup&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Set Up Email") |
| link-or-menu | View Diagnostics |  | a[href="#bwc/index.php?module=Campaigns&action=CampaignDiagnostic&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Diagnostics") |
| link-or-menu | Create Lead Form |  | a[href="#bwc/index.php?module=Campaigns&action=WebToLeadCreation&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Lead Form") |
| link-or-menu | Calls |  | a[aria-label="Calls"]<br>a[href="#Calls"]<br>a.btn<br>a.module-name<br>a:contains("Calls") |
| button | Calls - More | button | #Calls<br>button[aria-label="Calls - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Log Call View Calls Import Calls Activities Report | menu | ul[role="menu"] |
| link-or-menu | Log Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Log Call") |

## 13. Reports | Scots CRM
- URL: https://stagingcrm.scotsenglish.edu.vn/index.php#Reports?filterModule=Quotes
- Headings: Reports (0) Create Report Report Schedules Import Report | No dashboard configured.
- Elements captured: 416

| Kind | Label/Text | Role/Type | Candidate selectors |
|---|---|---|---|
| navigation | main module navigation | navigation | ul[role="navigation"]<br>ul[aria-label="main module navigation"]<br>ul.nav<br>ul.megamenu |
| link-or-menu | Home |  | a[aria-label="Home"]<br>a[href="#Home"]<br>a.cube<br>a.btn |
| button | Home - More | button | button[aria-label="Home - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Dashboard Activity Stream Manage Dashboards | menu | ul[role="menu"] |
| link-or-menu | Create Dashboard |  | a[href="#Home/create"]<br>a.ellipsis_inline<br>a:contains("Create Dashboard") |
| link-or-menu | Activity Stream |  | a[href="#activities"]<br>a.ellipsis_inline<br>a:contains("Activity Stream") |
| link-or-menu | Manage Dashboards |  | a[href="#Dashboards?moduleName=Home"]<br>a.ellipsis_inline<br>a:contains("Manage Dashboards") |
| link-or-menu | Calendar |  | a[aria-label="Calendar"]<br>a[href="#bwc/index.php?module=Calendar&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Calendar") |
| button | Calendar - More | button | #Calendar<br>button[aria-label="Calendar - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Meeting Schedule Call Create Task Today | menu | ul[role="menu"] |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Schedule Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Call") |
| link-or-menu | Create Task |  | a[href="#Tasks/create"]<br>a.ellipsis_inline<br>a:contains("Create Task") |
| link-or-menu | Today |  | a[href="#bwc/index.php?module=Calendar&action=index&view=day"]<br>a.ellipsis_inline<br>a:contains("Today") |
| link-or-menu | Targets |  | a[aria-label="Targets"]<br>a[href="#Prospects"]<br>a.btn<br>a.module-name<br>a:contains("Targets") |
| button | Targets - More | button | #Prospects<br>button[aria-label="Targets - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Target Create Target From vCard View Targets Import Targets | menu | ul[role="menu"] |
| link-or-menu | Create Target |  | a[href="#Prospects/create"]<br>a.ellipsis_inline<br>a:contains("Create Target") |
| link-or-menu | Create Target From vCard |  | a[href="#Prospects/vcard-import"]<br>a.ellipsis_inline<br>a:contains("Create Target From vCard") |
| link-or-menu | View Targets |  | a[href="#Prospects"]<br>a.ellipsis_inline<br>a:contains("View Targets") |
| link-or-menu | Import Targets |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Prospects&return_module=Prospects&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Targets") |
| link-or-menu | Leads |  | a[aria-label="Leads"]<br>a[href="#Leads"]<br>a.btn<br>a.module-name<br>a:contains("Leads") |
| button | Leads - More | button | #Leads<br>button[aria-label="Leads - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Lead View Leads View Lead Reports Import Leads | menu | ul[role="menu"] |
| link-or-menu | Create Lead |  | a[href="#Leads/create"]<br>a.ellipsis_inline<br>a:contains("Create Lead") |
| link-or-menu | View Leads |  | a[href="#Leads"]<br>a.ellipsis_inline<br>a:contains("View Leads") |
| link-or-menu | View Lead Reports |  | a[href="#Reports?filterModule=Leads"]<br>a.ellipsis_inline<br>a:contains("View Lead Reports") |
| link-or-menu | Import Leads |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Leads&return_module=Leads&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Leads") |
| link-or-menu | Students |  | a[aria-label="Students"]<br>a[href="#Contacts"]<br>a.btn<br>a.module-name<br>a:contains("Students") |
| button | Students - More | button | #Contacts<br>button[aria-label="Students - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Student View Students View Student Reports Import Students Send SMS | menu | ul[role="menu"] |
| link-or-menu | Create Student |  | a[href="#Contacts/create"]<br>a.ellipsis_inline<br>a:contains("Create Student") |
| link-or-menu | View Students |  | a[href="#Contacts"]<br>a.ellipsis_inline<br>a:contains("View Students") |
| link-or-menu | View Student Reports |  | a[href="#Reports?filterModule=Contacts"]<br>a.ellipsis_inline<br>a:contains("View Student Reports") |
| link-or-menu | Import Students |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Contacts&return_module=Contacts&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Students") |
| link-or-menu | Send SMS |  | a[href="#bwc/index.php?module=C_SMS&action=sendSMS"]<br>a.ellipsis_inline<br>a:contains("Send SMS") |
| link-or-menu | Sale Orders |  | a[aria-label="Sale Orders"]<br>a[href="#Quotes"]<br>a.btn<br>a.module-name<br>a:contains("Sale Orders") |
| button | Sale Orders - More | button | #Quotes<br>button[aria-label="Sale Orders - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Sale Order View Sale Orders View Sale Order Reports | menu | ul[role="menu"] |
| link-or-menu | Create Sale Order |  | a[href="#Quotes/create"]<br>a.ellipsis_inline<br>a:contains("Create Sale Order") |
| link-or-menu | View Sale Orders |  | a[href="#Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Orders") |
| link-or-menu | View Sale Order Reports |  | a[href="#Reports?filterModule=Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Order Reports") |
| link-or-menu | Classes |  | a[aria-label="Classes"]<br>a[href="#J_Class"]<br>a.btn<br>a.module-name<br>a:contains("Classes") |
| button | Classes - More | button | #J_Class<br>button[aria-label="Classes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Class View Classes View on Calendar Import Scheduler | menu | ul[role="menu"] |
| link-or-menu | Create Class |  | a[href="#J_Class/create"]<br>a.ellipsis_inline<br>a:contains("Create Class") |
| link-or-menu | View Classes |  | a[href="#J_Class"]<br>a.ellipsis_inline<br>a:contains("View Classes") |
| link-or-menu | View on Calendar |  | a[href="#bwc/index.php?module=Calendar&action=index&view=week"]<br>a.ellipsis_inline<br>a:contains("View on Calendar") |
| link-or-menu | Import Scheduler |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Meetings&return_module=Meetings&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Scheduler") |
| link-or-menu | Schedules |  | a[aria-label="Schedules"]<br>a[href="#Meetings"]<br>a.btn<br>a.module-name<br>a:contains("Schedules") |
| button | Schedules - More | button | #Meetings<br>button[aria-label="Schedules - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Placement Test Schedule Demo Schedule Meeting | menu | ul[role="menu"] |
| link-or-menu | Schedule Placement Test |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=PT"]<br>a.ellipsis_inline<br>a:contains("Schedule Placement Test") |
| link-or-menu | Schedule Demo |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=Demo"]<br>a.ellipsis_inline<br>a:contains("Schedule Demo") |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Reports |  | a[aria-label="Reports"]<br>a[href="#Reports"]<br>a.btn<br>a.module-name<br>a:contains("Reports") |
| button | Reports - More | button | #Reports<br>button[aria-label="Reports - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Report View Reports Report Schedules | menu | ul[role="menu"] |
| link-or-menu | Create Report |  | a[href="#bwc/index.php?module=Reports&report_module=&action=index&page=report&Create+Custom+Report=Create+Custom+Report"]<br>a.ellipsis_inline<br>a:contains("Create Report") |
| link-or-menu | View Reports |  | a[href="#Reports"]<br>a.ellipsis_inline<br>a:contains("View Reports") |
| link-or-menu | Report Schedules |  | a[href="#ReportSchedules"]<br>a.ellipsis_inline<br>a:contains("Report Schedules") |
| link-or-menu | Loyalty |  | a[aria-label="Loyalty"]<br>a[href="#J_Loyalty"]<br>a.btn<br>a.module-name<br>a:contains("Loyalty") |
| button | Loyalty - More | button | #J_Loyalty<br>button[aria-label="Loyalty - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Loyalty View Loyalty Import Loyalty | menu | ul[role="menu"] |
| link-or-menu | Create Loyalty |  | a[href="#J_Loyalty/create"]<br>a.ellipsis_inline<br>a:contains("Create Loyalty") |
| link-or-menu | View Loyalty |  | a[href="#J_Loyalty"]<br>a.ellipsis_inline<br>a:contains("View Loyalty") |
| link-or-menu | Import Loyalty |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Loyalty&return_module=J_Loyalty&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Loyalty") |
| link-or-menu | Teachers |  | a[aria-label="Teachers"]<br>a[href="#C_Teachers"]<br>a.btn<br>a.module-name<br>a:contains("Teachers") |
| button | Teachers - More | button | #C_Teachers<br>button[aria-label="Teachers - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Create TA View Teachers Import Teachers | menu | ul[role="menu"] |
| link-or-menu | Create Teacher |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=Teacher"]<br>a.ellipsis_inline<br>a:contains("Create Teacher") |
| link-or-menu | Create TA |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=TA"]<br>a.ellipsis_inline<br>a:contains("Create TA") |
| link-or-menu | View Teachers |  | a[href="#C_Teachers"]<br>a.ellipsis_inline<br>a:contains("View Teachers") |
| link-or-menu | Import Teachers |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Teachers&return_module=C_Teachers&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teachers") |
| link-or-menu | Approval Processes |  | a[aria-label="Approval Processes"]<br>a[href="#ApprovalProcesses"]<br>a.btn<br>a.module-name<br>a:contains("Approval Processes") |
| button | Approval Processes - More | button | #ApprovalProcesses<br>button[aria-label="Approval Processes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Approval Processes | menu | ul[role="menu"] |
| link-or-menu | Approval Processes |  | a[href="#ApprovalProcesses/layout/approvalList"]<br>a.ellipsis_inline<br>a:contains("Approval Processes") |
| link-or-menu | Accounts |  | a[aria-label="Accounts"]<br>a[href="#Accounts"]<br>a.btn<br>a.module-name<br>a:contains("Accounts") |
| button | Accounts - More | button | #Accounts<br>button[aria-label="Accounts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Account View Accounts View Account Reports Import Accounts | menu | ul[role="menu"] |
| link-or-menu | Create Account |  | a[href="#Accounts/create"]<br>a.ellipsis_inline<br>a:contains("Create Account") |
| link-or-menu | View Accounts |  | a[href="#Accounts"]<br>a.ellipsis_inline<br>a:contains("View Accounts") |
| link-or-menu | View Account Reports |  | a[href="#Reports?filterModule=Accounts"]<br>a.ellipsis_inline<br>a:contains("View Account Reports") |
| link-or-menu | Import Accounts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Accounts"]<br>a.ellipsis_inline<br>a:contains("Import Accounts") |
| link-or-menu | Rooms |  | a[aria-label="Rooms"]<br>a[href="#C_Rooms"]<br>a.btn<br>a.module-name<br>a:contains("Rooms") |
| button | Rooms - More | button | #C_Rooms<br>button[aria-label="Rooms - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Room View Rooms Import Rooms | menu | ul[role="menu"] |
| link-or-menu | Create Room |  | a[href="#C_Rooms/create"]<br>a.ellipsis_inline<br>a:contains("Create Room") |
| link-or-menu | View Rooms |  | a[href="#C_Rooms"]<br>a.ellipsis_inline<br>a:contains("View Rooms") |
| link-or-menu | Import Rooms |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Rooms&return_module=C_Rooms&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Rooms") |
| link-or-menu | Teacher Contracts |  | a[aria-label="Teacher Contracts"]<br>a[href="#J_Teachercontract"]<br>a.btn<br>a.module-name<br>a:contains("Teacher Contracts") |
| button | Teacher Contracts - More | button | #J_Teachercontract<br>button[aria-label="Teacher Contracts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Contract View Teacher Contracts Import Teacher Contracts | menu | ul[role="menu"] |
| link-or-menu | Create Teacher Contract |  | a[href="#J_Teachercontract/create"]<br>a.ellipsis_inline<br>a:contains("Create Teacher Contract") |
| link-or-menu | View Teacher Contracts |  | a[href="#J_Teachercontract"]<br>a.ellipsis_inline<br>a:contains("View Teacher Contracts") |
| link-or-menu | Import Teacher Contracts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Teachercontract&return_module=J_Teachercontract&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teacher Contracts") |
| link-or-menu | Kind Of Courses |  | a[aria-label="Kind Of Courses"]<br>a[href="#J_Kindofcourse"]<br>a.btn<br>a.module-name<br>a:contains("Kind Of Courses") |
| button | Kind Of Courses - More | button | #J_Kindofcourse<br>button[aria-label="Kind Of Courses - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Kind Of Course View Kind Of Courses Import Kind Of Courses | menu | ul[role="menu"] |
| link-or-menu | Create Kind Of Course |  | a[href="#J_Kindofcourse/create"]<br>a.ellipsis_inline<br>a:contains("Create Kind Of Course") |
| link-or-menu | View Kind Of Courses |  | a[href="#J_Kindofcourse"]<br>a.ellipsis_inline<br>a:contains("View Kind Of Courses") |
| link-or-menu | Import Kind Of Courses |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Kindofcourse&return_module=J_Kindofcourse&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Kind Of Courses") |
| link-or-menu | Activities |  | a[aria-label="Activities"]<br>a[href="#M_Activities"]<br>a.btn<br>a.module-name<br>a:contains("Activities") |
| button | Activities - More | button | #M_Activities<br>button[aria-label="Activities - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Activities View Activities Import Syllabus | menu | ul[role="menu"] |
| link-or-menu | Create Activities |  | a[href="#M_Activities/create"]<br>a.ellipsis_inline<br>a:contains("Create Activities") |
| link-or-menu | View Activities |  | a[href="#M_Activities"]<br>a.ellipsis_inline<br>a:contains("View Activities") |
| link-or-menu | Import Syllabus |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Syllabus&query=true&report_module=M_Activities"]<br>a.ellipsis_inline<br>a:contains("Import Syllabus") |
| link-or-menu | Work permit |  | a[aria-label="Work permit"]<br>a[href="#J_Workpermit"]<br>a.btn<br>a.module-name<br>a:contains("Work permit") |
| button | Work permit - More | button | #J_Workpermit<br>button[aria-label="Work permit - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Work permit View Work permit | menu | ul[role="menu"] |
| link-or-menu | Create Work permit |  | a[href="#J_Workpermit/create"]<br>a.ellipsis_inline<br>a:contains("Create Work permit") |
| link-or-menu | View Work permit |  | a[href="#J_Workpermit"]<br>a.ellipsis_inline<br>a:contains("View Work permit") |
| link-or-menu | Gallery |  | a[aria-label="Gallery"]<br>a[href="#C_Gallery"]<br>a.btn<br>a.module-name<br>a:contains("Gallery") |
| button | Gallery - More | button | #C_Gallery<br>button[aria-label="Gallery - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gallery View Gallery | menu | ul[role="menu"] |
| link-or-menu | Create Gallery |  | a[href="#C_Gallery/create"]<br>a.ellipsis_inline<br>a:contains("Create Gallery") |
| link-or-menu | View Gallery |  | a[href="#C_Gallery"]<br>a.ellipsis_inline<br>a:contains("View Gallery") |
| link-or-menu | Gradebooks |  | a[aria-label="Gradebooks"]<br>a[href="#J_Gradebook"]<br>a.btn<br>a.module-name<br>a:contains("Gradebooks") |
| button | Gradebooks - More | button | #J_Gradebook<br>button[aria-label="Gradebooks - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | View Gradebooks | menu | ul[role="menu"] |
| link-or-menu | View Gradebooks |  | a[href="#J_Gradebook"]<br>a.ellipsis_inline<br>a:contains("View Gradebooks") |
| link-or-menu | Gradebook Settings |  | a[aria-label="Gradebook Settings"]<br>a[href="#J_GradebookConfig"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Settings") |
| button | Gradebook Settings - More | button | #J_GradebookConfig<br>button[aria-label="Gradebook Settings - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting View Gradebook Settings | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting |  | a[href="#J_GradebookConfig/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting") |
| link-or-menu | View Gradebook Settings |  | a[href="#J_GradebookConfig"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Settings") |
| link-or-menu | Gradebook Setting Groups |  | a[aria-label="Gradebook Setting Groups"]<br>a[href="#J_GradebookSettingGroup"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Setting Groups") |
| button | Gradebook Setting Groups - More | button | #J_GradebookSettingGroup<br>button[aria-label="Gradebook Setting Groups - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting Group View Gradebook Setting Groups | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting Group |  | a[href="#J_GradebookSettingGroup/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting Group") |
| link-or-menu | View Gradebook Setting Groups |  | a[href="#J_GradebookSettingGroup"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Setting Groups") |
| link-or-menu | Admin Hours |  | a[aria-label="Admin Hours"]<br>a[href="#bwc/index.php?module=C_Timesheet&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Admin Hours") |
| link-or-menu | Campaigns |  | a[aria-label="Campaigns"]<br>a[href="#bwc/index.php?module=Campaigns&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Campaigns") |
| button | Campaigns - More | button | #Campaigns<br>button[aria-label="Campaigns - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Campaign (Wizard) Create Campaign (Classic) View Campaigns View Newsletters Create Email Template View Email Temp | menu | ul[role="menu"] |
| link-or-menu | Create Campaign (Wizard) |  | a[href="#bwc/index.php?module=Campaigns&action=WizardHome&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Wizard)") |
| link-or-menu | Create Campaign (Classic) |  | a[href="#bwc/index.php?module=Campaigns&action=EditView&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Classic)") |
| link-or-menu | View Campaigns |  | a[href="#bwc/index.php?module=Campaigns&action=index&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Campaigns") |
| link-or-menu | View Newsletters |  | a[href="#bwc/index.php?module=Campaigns&action=newsletterlist&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Newsletters") |
| link-or-menu | Create Email Template |  | a[href="#bwc/index.php?module=EmailTemplates&action=EditView&return_module=EmailTemplates&return_action=DetailView"]<br>a.ellipsis_inline<br>a:contains("Create Email Template") |
| link-or-menu | View Email Templates |  | a[href="#bwc/index.php?module=EmailTemplates&action=index"]<br>a.ellipsis_inline<br>a:contains("View Email Templates") |
| link-or-menu | Set Up Email |  | a[href="#bwc/index.php?module=Campaigns&action=WizardEmailSetup&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Set Up Email") |
| link-or-menu | View Diagnostics |  | a[href="#bwc/index.php?module=Campaigns&action=CampaignDiagnostic&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Diagnostics") |
| link-or-menu | Create Lead Form |  | a[href="#bwc/index.php?module=Campaigns&action=WebToLeadCreation&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Lead Form") |
| link-or-menu | Calls |  | a[aria-label="Calls"]<br>a[href="#Calls"]<br>a.btn<br>a.module-name<br>a:contains("Calls") |
| button | Calls - More | button | #Calls<br>button[aria-label="Calls - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Log Call View Calls Import Calls Activities Report | menu | ul[role="menu"] |
| link-or-menu | Log Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Log Call") |

## 14. Classes | Scots CRM
- URL: https://stagingcrm.scotsenglish.edu.vn/index.php#J_Class
- Headings: Classes (20 of 21+) Create Class View on Calendar View Class Report Import Scheduler | No dashboard configured.
- Elements captured: 602

| Kind | Label/Text | Role/Type | Candidate selectors |
|---|---|---|---|
| navigation | main module navigation | navigation | ul[role="navigation"]<br>ul[aria-label="main module navigation"]<br>ul.nav<br>ul.megamenu |
| link-or-menu | Home |  | a[aria-label="Home"]<br>a[href="#Home"]<br>a.cube<br>a.btn |
| button | Home - More | button | button[aria-label="Home - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Dashboard Activity Stream Manage Dashboards | menu | ul[role="menu"] |
| link-or-menu | Create Dashboard |  | a[href="#Home/create"]<br>a.ellipsis_inline<br>a:contains("Create Dashboard") |
| link-or-menu | Activity Stream |  | a[href="#activities"]<br>a.ellipsis_inline<br>a:contains("Activity Stream") |
| link-or-menu | Manage Dashboards |  | a[href="#Dashboards?moduleName=Home"]<br>a.ellipsis_inline<br>a:contains("Manage Dashboards") |
| link-or-menu | Calendar |  | a[aria-label="Calendar"]<br>a[href="#bwc/index.php?module=Calendar&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Calendar") |
| button | Calendar - More | button | #Calendar<br>button[aria-label="Calendar - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Meeting Schedule Call Create Task Today | menu | ul[role="menu"] |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Schedule Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Call") |
| link-or-menu | Create Task |  | a[href="#Tasks/create"]<br>a.ellipsis_inline<br>a:contains("Create Task") |
| link-or-menu | Today |  | a[href="#bwc/index.php?module=Calendar&action=index&view=day"]<br>a.ellipsis_inline<br>a:contains("Today") |
| link-or-menu | Targets |  | a[aria-label="Targets"]<br>a[href="#Prospects"]<br>a.btn<br>a.module-name<br>a:contains("Targets") |
| button | Targets - More | button | #Prospects<br>button[aria-label="Targets - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Target Create Target From vCard View Targets Import Targets | menu | ul[role="menu"] |
| link-or-menu | Create Target |  | a[href="#Prospects/create"]<br>a.ellipsis_inline<br>a:contains("Create Target") |
| link-or-menu | Create Target From vCard |  | a[href="#Prospects/vcard-import"]<br>a.ellipsis_inline<br>a:contains("Create Target From vCard") |
| link-or-menu | View Targets |  | a[href="#Prospects"]<br>a.ellipsis_inline<br>a:contains("View Targets") |
| link-or-menu | Import Targets |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Prospects&return_module=Prospects&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Targets") |
| link-or-menu | Leads |  | a[aria-label="Leads"]<br>a[href="#Leads"]<br>a.btn<br>a.module-name<br>a:contains("Leads") |
| button | Leads - More | button | #Leads<br>button[aria-label="Leads - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Lead View Leads View Lead Reports Import Leads | menu | ul[role="menu"] |
| link-or-menu | Create Lead |  | a[href="#Leads/create"]<br>a.ellipsis_inline<br>a:contains("Create Lead") |
| link-or-menu | View Leads |  | a[href="#Leads"]<br>a.ellipsis_inline<br>a:contains("View Leads") |
| link-or-menu | View Lead Reports |  | a[href="#Reports?filterModule=Leads"]<br>a.ellipsis_inline<br>a:contains("View Lead Reports") |
| link-or-menu | Import Leads |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Leads&return_module=Leads&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Leads") |
| link-or-menu | Students |  | a[aria-label="Students"]<br>a[href="#Contacts"]<br>a.btn<br>a.module-name<br>a:contains("Students") |
| button | Students - More | button | #Contacts<br>button[aria-label="Students - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Student View Students View Student Reports Import Students Send SMS | menu | ul[role="menu"] |
| link-or-menu | Create Student |  | a[href="#Contacts/create"]<br>a.ellipsis_inline<br>a:contains("Create Student") |
| link-or-menu | View Students |  | a[href="#Contacts"]<br>a.ellipsis_inline<br>a:contains("View Students") |
| link-or-menu | View Student Reports |  | a[href="#Reports?filterModule=Contacts"]<br>a.ellipsis_inline<br>a:contains("View Student Reports") |
| link-or-menu | Import Students |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Contacts&return_module=Contacts&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Students") |
| link-or-menu | Send SMS |  | a[href="#bwc/index.php?module=C_SMS&action=sendSMS"]<br>a.ellipsis_inline<br>a:contains("Send SMS") |
| link-or-menu | Sale Orders |  | a[aria-label="Sale Orders"]<br>a[href="#Quotes"]<br>a.btn<br>a.module-name<br>a:contains("Sale Orders") |
| button | Sale Orders - More | button | #Quotes<br>button[aria-label="Sale Orders - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Sale Order View Sale Orders View Sale Order Reports | menu | ul[role="menu"] |
| link-or-menu | Create Sale Order |  | a[href="#Quotes/create"]<br>a.ellipsis_inline<br>a:contains("Create Sale Order") |
| link-or-menu | View Sale Orders |  | a[href="#Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Orders") |
| link-or-menu | View Sale Order Reports |  | a[href="#Reports?filterModule=Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Order Reports") |
| link-or-menu | Classes |  | a[aria-label="Classes"]<br>a[href="#J_Class"]<br>a.btn<br>a.module-name<br>a:contains("Classes") |
| button | Classes - More | button | #J_Class<br>button[aria-label="Classes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Class View Classes View on Calendar Import Scheduler | menu | ul[role="menu"] |
| link-or-menu | Create Class |  | a[href="#J_Class/create"]<br>a.ellipsis_inline<br>a:contains("Create Class") |
| link-or-menu | View Classes |  | a[href="#J_Class"]<br>a.ellipsis_inline<br>a:contains("View Classes") |
| link-or-menu | View on Calendar |  | a[href="#bwc/index.php?module=Calendar&action=index&view=week"]<br>a.ellipsis_inline<br>a:contains("View on Calendar") |
| link-or-menu | Import Scheduler |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Meetings&return_module=Meetings&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Scheduler") |
| link-or-menu | Schedules |  | a[aria-label="Schedules"]<br>a[href="#Meetings"]<br>a.btn<br>a.module-name<br>a:contains("Schedules") |
| button | Schedules - More | button | #Meetings<br>button[aria-label="Schedules - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Placement Test Schedule Demo Schedule Meeting | menu | ul[role="menu"] |
| link-or-menu | Schedule Placement Test |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=PT"]<br>a.ellipsis_inline<br>a:contains("Schedule Placement Test") |
| link-or-menu | Schedule Demo |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=Demo"]<br>a.ellipsis_inline<br>a:contains("Schedule Demo") |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Reports |  | a[aria-label="Reports"]<br>a[href="#Reports"]<br>a.btn<br>a.module-name<br>a:contains("Reports") |
| button | Reports - More | button | #Reports<br>button[aria-label="Reports - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Report View Reports Report Schedules | menu | ul[role="menu"] |
| link-or-menu | Create Report |  | a[href="#bwc/index.php?module=Reports&report_module=&action=index&page=report&Create+Custom+Report=Create+Custom+Report"]<br>a.ellipsis_inline<br>a:contains("Create Report") |
| link-or-menu | View Reports |  | a[href="#Reports"]<br>a.ellipsis_inline<br>a:contains("View Reports") |
| link-or-menu | Report Schedules |  | a[href="#ReportSchedules"]<br>a.ellipsis_inline<br>a:contains("Report Schedules") |
| link-or-menu | Loyalty |  | a[aria-label="Loyalty"]<br>a[href="#J_Loyalty"]<br>a.btn<br>a.module-name<br>a:contains("Loyalty") |
| button | Loyalty - More | button | #J_Loyalty<br>button[aria-label="Loyalty - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Loyalty View Loyalty Import Loyalty | menu | ul[role="menu"] |
| link-or-menu | Create Loyalty |  | a[href="#J_Loyalty/create"]<br>a.ellipsis_inline<br>a:contains("Create Loyalty") |
| link-or-menu | View Loyalty |  | a[href="#J_Loyalty"]<br>a.ellipsis_inline<br>a:contains("View Loyalty") |
| link-or-menu | Import Loyalty |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Loyalty&return_module=J_Loyalty&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Loyalty") |
| link-or-menu | Teachers |  | a[aria-label="Teachers"]<br>a[href="#C_Teachers"]<br>a.btn<br>a.module-name<br>a:contains("Teachers") |
| button | Teachers - More | button | #C_Teachers<br>button[aria-label="Teachers - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Create TA View Teachers Import Teachers | menu | ul[role="menu"] |
| link-or-menu | Create Teacher |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=Teacher"]<br>a.ellipsis_inline<br>a:contains("Create Teacher") |
| link-or-menu | Create TA |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=TA"]<br>a.ellipsis_inline<br>a:contains("Create TA") |
| link-or-menu | View Teachers |  | a[href="#C_Teachers"]<br>a.ellipsis_inline<br>a:contains("View Teachers") |
| link-or-menu | Import Teachers |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Teachers&return_module=C_Teachers&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teachers") |
| link-or-menu | Approval Processes |  | a[aria-label="Approval Processes"]<br>a[href="#ApprovalProcesses"]<br>a.btn<br>a.module-name<br>a:contains("Approval Processes") |
| button | Approval Processes - More | button | #ApprovalProcesses<br>button[aria-label="Approval Processes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Approval Processes | menu | ul[role="menu"] |
| link-or-menu | Approval Processes |  | a[href="#ApprovalProcesses/layout/approvalList"]<br>a.ellipsis_inline<br>a:contains("Approval Processes") |
| link-or-menu | Accounts |  | a[aria-label="Accounts"]<br>a[href="#Accounts"]<br>a.btn<br>a.module-name<br>a:contains("Accounts") |
| button | Accounts - More | button | #Accounts<br>button[aria-label="Accounts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Account View Accounts View Account Reports Import Accounts | menu | ul[role="menu"] |
| link-or-menu | Create Account |  | a[href="#Accounts/create"]<br>a.ellipsis_inline<br>a:contains("Create Account") |
| link-or-menu | View Accounts |  | a[href="#Accounts"]<br>a.ellipsis_inline<br>a:contains("View Accounts") |
| link-or-menu | View Account Reports |  | a[href="#Reports?filterModule=Accounts"]<br>a.ellipsis_inline<br>a:contains("View Account Reports") |
| link-or-menu | Import Accounts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Accounts"]<br>a.ellipsis_inline<br>a:contains("Import Accounts") |
| link-or-menu | Rooms |  | a[aria-label="Rooms"]<br>a[href="#C_Rooms"]<br>a.btn<br>a.module-name<br>a:contains("Rooms") |
| button | Rooms - More | button | #C_Rooms<br>button[aria-label="Rooms - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Room View Rooms Import Rooms | menu | ul[role="menu"] |
| link-or-menu | Create Room |  | a[href="#C_Rooms/create"]<br>a.ellipsis_inline<br>a:contains("Create Room") |
| link-or-menu | View Rooms |  | a[href="#C_Rooms"]<br>a.ellipsis_inline<br>a:contains("View Rooms") |
| link-or-menu | Import Rooms |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Rooms&return_module=C_Rooms&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Rooms") |
| link-or-menu | Teacher Contracts |  | a[aria-label="Teacher Contracts"]<br>a[href="#J_Teachercontract"]<br>a.btn<br>a.module-name<br>a:contains("Teacher Contracts") |
| button | Teacher Contracts - More | button | #J_Teachercontract<br>button[aria-label="Teacher Contracts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Contract View Teacher Contracts Import Teacher Contracts | menu | ul[role="menu"] |
| link-or-menu | Create Teacher Contract |  | a[href="#J_Teachercontract/create"]<br>a.ellipsis_inline<br>a:contains("Create Teacher Contract") |
| link-or-menu | View Teacher Contracts |  | a[href="#J_Teachercontract"]<br>a.ellipsis_inline<br>a:contains("View Teacher Contracts") |
| link-or-menu | Import Teacher Contracts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Teachercontract&return_module=J_Teachercontract&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teacher Contracts") |
| link-or-menu | Kind Of Courses |  | a[aria-label="Kind Of Courses"]<br>a[href="#J_Kindofcourse"]<br>a.btn<br>a.module-name<br>a:contains("Kind Of Courses") |
| button | Kind Of Courses - More | button | #J_Kindofcourse<br>button[aria-label="Kind Of Courses - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Kind Of Course View Kind Of Courses Import Kind Of Courses | menu | ul[role="menu"] |
| link-or-menu | Create Kind Of Course |  | a[href="#J_Kindofcourse/create"]<br>a.ellipsis_inline<br>a:contains("Create Kind Of Course") |
| link-or-menu | View Kind Of Courses |  | a[href="#J_Kindofcourse"]<br>a.ellipsis_inline<br>a:contains("View Kind Of Courses") |
| link-or-menu | Import Kind Of Courses |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Kindofcourse&return_module=J_Kindofcourse&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Kind Of Courses") |
| link-or-menu | Activities |  | a[aria-label="Activities"]<br>a[href="#M_Activities"]<br>a.btn<br>a.module-name<br>a:contains("Activities") |
| button | Activities - More | button | #M_Activities<br>button[aria-label="Activities - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Activities View Activities Import Syllabus | menu | ul[role="menu"] |
| link-or-menu | Create Activities |  | a[href="#M_Activities/create"]<br>a.ellipsis_inline<br>a:contains("Create Activities") |
| link-or-menu | View Activities |  | a[href="#M_Activities"]<br>a.ellipsis_inline<br>a:contains("View Activities") |
| link-or-menu | Import Syllabus |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Syllabus&query=true&report_module=M_Activities"]<br>a.ellipsis_inline<br>a:contains("Import Syllabus") |
| link-or-menu | Work permit |  | a[aria-label="Work permit"]<br>a[href="#J_Workpermit"]<br>a.btn<br>a.module-name<br>a:contains("Work permit") |
| button | Work permit - More | button | #J_Workpermit<br>button[aria-label="Work permit - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Work permit View Work permit | menu | ul[role="menu"] |
| link-or-menu | Create Work permit |  | a[href="#J_Workpermit/create"]<br>a.ellipsis_inline<br>a:contains("Create Work permit") |
| link-or-menu | View Work permit |  | a[href="#J_Workpermit"]<br>a.ellipsis_inline<br>a:contains("View Work permit") |
| link-or-menu | Gallery |  | a[aria-label="Gallery"]<br>a[href="#C_Gallery"]<br>a.btn<br>a.module-name<br>a:contains("Gallery") |
| button | Gallery - More | button | #C_Gallery<br>button[aria-label="Gallery - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gallery View Gallery | menu | ul[role="menu"] |
| link-or-menu | Create Gallery |  | a[href="#C_Gallery/create"]<br>a.ellipsis_inline<br>a:contains("Create Gallery") |
| link-or-menu | View Gallery |  | a[href="#C_Gallery"]<br>a.ellipsis_inline<br>a:contains("View Gallery") |
| link-or-menu | Gradebooks |  | a[aria-label="Gradebooks"]<br>a[href="#J_Gradebook"]<br>a.btn<br>a.module-name<br>a:contains("Gradebooks") |
| button | Gradebooks - More | button | #J_Gradebook<br>button[aria-label="Gradebooks - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | View Gradebooks | menu | ul[role="menu"] |
| link-or-menu | View Gradebooks |  | a[href="#J_Gradebook"]<br>a.ellipsis_inline<br>a:contains("View Gradebooks") |
| link-or-menu | Gradebook Settings |  | a[aria-label="Gradebook Settings"]<br>a[href="#J_GradebookConfig"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Settings") |
| button | Gradebook Settings - More | button | #J_GradebookConfig<br>button[aria-label="Gradebook Settings - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting View Gradebook Settings | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting |  | a[href="#J_GradebookConfig/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting") |
| link-or-menu | View Gradebook Settings |  | a[href="#J_GradebookConfig"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Settings") |
| link-or-menu | Gradebook Setting Groups |  | a[aria-label="Gradebook Setting Groups"]<br>a[href="#J_GradebookSettingGroup"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Setting Groups") |
| button | Gradebook Setting Groups - More | button | #J_GradebookSettingGroup<br>button[aria-label="Gradebook Setting Groups - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting Group View Gradebook Setting Groups | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting Group |  | a[href="#J_GradebookSettingGroup/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting Group") |
| link-or-menu | View Gradebook Setting Groups |  | a[href="#J_GradebookSettingGroup"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Setting Groups") |
| link-or-menu | Admin Hours |  | a[aria-label="Admin Hours"]<br>a[href="#bwc/index.php?module=C_Timesheet&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Admin Hours") |
| link-or-menu | Campaigns |  | a[aria-label="Campaigns"]<br>a[href="#bwc/index.php?module=Campaigns&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Campaigns") |
| button | Campaigns - More | button | #Campaigns<br>button[aria-label="Campaigns - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Campaign (Wizard) Create Campaign (Classic) View Campaigns View Newsletters Create Email Template View Email Temp | menu | ul[role="menu"] |
| link-or-menu | Create Campaign (Wizard) |  | a[href="#bwc/index.php?module=Campaigns&action=WizardHome&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Wizard)") |
| link-or-menu | Create Campaign (Classic) |  | a[href="#bwc/index.php?module=Campaigns&action=EditView&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Classic)") |
| link-or-menu | View Campaigns |  | a[href="#bwc/index.php?module=Campaigns&action=index&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Campaigns") |
| link-or-menu | View Newsletters |  | a[href="#bwc/index.php?module=Campaigns&action=newsletterlist&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Newsletters") |
| link-or-menu | Create Email Template |  | a[href="#bwc/index.php?module=EmailTemplates&action=EditView&return_module=EmailTemplates&return_action=DetailView"]<br>a.ellipsis_inline<br>a:contains("Create Email Template") |
| link-or-menu | View Email Templates |  | a[href="#bwc/index.php?module=EmailTemplates&action=index"]<br>a.ellipsis_inline<br>a:contains("View Email Templates") |
| link-or-menu | Set Up Email |  | a[href="#bwc/index.php?module=Campaigns&action=WizardEmailSetup&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Set Up Email") |
| link-or-menu | View Diagnostics |  | a[href="#bwc/index.php?module=Campaigns&action=CampaignDiagnostic&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Diagnostics") |
| link-or-menu | Create Lead Form |  | a[href="#bwc/index.php?module=Campaigns&action=WebToLeadCreation&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Lead Form") |
| link-or-menu | Calls |  | a[aria-label="Calls"]<br>a[href="#Calls"]<br>a.btn<br>a.module-name<br>a:contains("Calls") |
| button | Calls - More | button | #Calls<br>button[aria-label="Calls - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Log Call View Calls Import Calls Activities Report | menu | ul[role="menu"] |
| link-or-menu | Log Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Log Call") |

## 15. Classes | Scots CRM
- URL: https://stagingcrm.scotsenglish.edu.vn/index.php#bwc/index.php?module=Calendar&action=index&view=week
- Elements captured: 366

| Kind | Label/Text | Role/Type | Candidate selectors |
|---|---|---|---|
| navigation | main module navigation | navigation | ul[role="navigation"]<br>ul[aria-label="main module navigation"]<br>ul.nav<br>ul.megamenu |
| link-or-menu | Home |  | a[aria-label="Home"]<br>a[href="#Home"]<br>a.cube<br>a.btn |
| button | Home - More | button | button[aria-label="Home - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Dashboard Activity Stream Manage Dashboards | menu | ul[role="menu"] |
| link-or-menu | Create Dashboard |  | a[href="#Home/create"]<br>a.ellipsis_inline<br>a:contains("Create Dashboard") |
| link-or-menu | Activity Stream |  | a[href="#activities"]<br>a.ellipsis_inline<br>a:contains("Activity Stream") |
| link-or-menu | Manage Dashboards |  | a[href="#Dashboards?moduleName=Home"]<br>a.ellipsis_inline<br>a:contains("Manage Dashboards") |
| link-or-menu | Calendar |  | a[aria-label="Calendar"]<br>a[href="#bwc/index.php?module=Calendar&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Calendar") |
| button | Calendar - More | button | #Calendar<br>button[aria-label="Calendar - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Meeting Schedule Call Create Task Today | menu | ul[role="menu"] |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Schedule Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Call") |
| link-or-menu | Create Task |  | a[href="#Tasks/create"]<br>a.ellipsis_inline<br>a:contains("Create Task") |
| link-or-menu | Today |  | a[href="#bwc/index.php?module=Calendar&action=index&view=day"]<br>a.ellipsis_inline<br>a:contains("Today") |
| link-or-menu | Targets |  | a[aria-label="Targets"]<br>a[href="#Prospects"]<br>a.btn<br>a.module-name<br>a:contains("Targets") |
| button | Targets - More | button | #Prospects<br>button[aria-label="Targets - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Target Create Target From vCard View Targets Import Targets | menu | ul[role="menu"] |
| link-or-menu | Create Target |  | a[href="#Prospects/create"]<br>a.ellipsis_inline<br>a:contains("Create Target") |
| link-or-menu | Create Target From vCard |  | a[href="#Prospects/vcard-import"]<br>a.ellipsis_inline<br>a:contains("Create Target From vCard") |
| link-or-menu | View Targets |  | a[href="#Prospects"]<br>a.ellipsis_inline<br>a:contains("View Targets") |
| link-or-menu | Import Targets |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Prospects&return_module=Prospects&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Targets") |
| link-or-menu | Leads |  | a[aria-label="Leads"]<br>a[href="#Leads"]<br>a.btn<br>a.module-name<br>a:contains("Leads") |
| button | Leads - More | button | #Leads<br>button[aria-label="Leads - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Lead View Leads View Lead Reports Import Leads | menu | ul[role="menu"] |
| link-or-menu | Create Lead |  | a[href="#Leads/create"]<br>a.ellipsis_inline<br>a:contains("Create Lead") |
| link-or-menu | View Leads |  | a[href="#Leads"]<br>a.ellipsis_inline<br>a:contains("View Leads") |
| link-or-menu | View Lead Reports |  | a[href="#Reports?filterModule=Leads"]<br>a.ellipsis_inline<br>a:contains("View Lead Reports") |
| link-or-menu | Import Leads |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Leads&return_module=Leads&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Leads") |
| link-or-menu | Students |  | a[aria-label="Students"]<br>a[href="#Contacts"]<br>a.btn<br>a.module-name<br>a:contains("Students") |
| button | Students - More | button | #Contacts<br>button[aria-label="Students - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Student View Students View Student Reports Import Students Send SMS | menu | ul[role="menu"] |
| link-or-menu | Create Student |  | a[href="#Contacts/create"]<br>a.ellipsis_inline<br>a:contains("Create Student") |
| link-or-menu | View Students |  | a[href="#Contacts"]<br>a.ellipsis_inline<br>a:contains("View Students") |
| link-or-menu | View Student Reports |  | a[href="#Reports?filterModule=Contacts"]<br>a.ellipsis_inline<br>a:contains("View Student Reports") |
| link-or-menu | Import Students |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Contacts&return_module=Contacts&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Students") |
| link-or-menu | Send SMS |  | a[href="#bwc/index.php?module=C_SMS&action=sendSMS"]<br>a.ellipsis_inline<br>a:contains("Send SMS") |
| link-or-menu | Sale Orders |  | a[aria-label="Sale Orders"]<br>a[href="#Quotes"]<br>a.btn<br>a.module-name<br>a:contains("Sale Orders") |
| button | Sale Orders - More | button | #Quotes<br>button[aria-label="Sale Orders - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Sale Order View Sale Orders View Sale Order Reports | menu | ul[role="menu"] |
| link-or-menu | Create Sale Order |  | a[href="#Quotes/create"]<br>a.ellipsis_inline<br>a:contains("Create Sale Order") |
| link-or-menu | View Sale Orders |  | a[href="#Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Orders") |
| link-or-menu | View Sale Order Reports |  | a[href="#Reports?filterModule=Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Order Reports") |
| link-or-menu | Classes |  | a[aria-label="Classes"]<br>a[href="#J_Class"]<br>a.btn<br>a.module-name<br>a:contains("Classes") |
| button | Classes - More | button | #J_Class<br>button[aria-label="Classes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Class View Classes View on Calendar Import Scheduler | menu | ul[role="menu"] |
| link-or-menu | Create Class |  | a[href="#J_Class/create"]<br>a.ellipsis_inline<br>a:contains("Create Class") |
| link-or-menu | View Classes |  | a[href="#J_Class"]<br>a.ellipsis_inline<br>a:contains("View Classes") |
| link-or-menu | View on Calendar |  | a[href="#bwc/index.php?module=Calendar&action=index&view=week"]<br>a.ellipsis_inline<br>a:contains("View on Calendar") |
| link-or-menu | Import Scheduler |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Meetings&return_module=Meetings&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Scheduler") |
| link-or-menu | Schedules |  | a[aria-label="Schedules"]<br>a[href="#Meetings"]<br>a.btn<br>a.module-name<br>a:contains("Schedules") |
| button | Schedules - More | button | #Meetings<br>button[aria-label="Schedules - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Placement Test Schedule Demo Schedule Meeting | menu | ul[role="menu"] |
| link-or-menu | Schedule Placement Test |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=PT"]<br>a.ellipsis_inline<br>a:contains("Schedule Placement Test") |
| link-or-menu | Schedule Demo |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=Demo"]<br>a.ellipsis_inline<br>a:contains("Schedule Demo") |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Reports |  | a[aria-label="Reports"]<br>a[href="#Reports"]<br>a.btn<br>a.module-name<br>a:contains("Reports") |
| button | Reports - More | button | #Reports<br>button[aria-label="Reports - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Report View Reports Report Schedules | menu | ul[role="menu"] |
| link-or-menu | Create Report |  | a[href="#bwc/index.php?module=Reports&report_module=&action=index&page=report&Create+Custom+Report=Create+Custom+Report"]<br>a.ellipsis_inline<br>a:contains("Create Report") |
| link-or-menu | View Reports |  | a[href="#Reports"]<br>a.ellipsis_inline<br>a:contains("View Reports") |
| link-or-menu | Report Schedules |  | a[href="#ReportSchedules"]<br>a.ellipsis_inline<br>a:contains("Report Schedules") |
| link-or-menu | Loyalty |  | a[aria-label="Loyalty"]<br>a[href="#J_Loyalty"]<br>a.btn<br>a.module-name<br>a:contains("Loyalty") |
| button | Loyalty - More | button | #J_Loyalty<br>button[aria-label="Loyalty - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Loyalty View Loyalty Import Loyalty | menu | ul[role="menu"] |
| link-or-menu | Create Loyalty |  | a[href="#J_Loyalty/create"]<br>a.ellipsis_inline<br>a:contains("Create Loyalty") |
| link-or-menu | View Loyalty |  | a[href="#J_Loyalty"]<br>a.ellipsis_inline<br>a:contains("View Loyalty") |
| link-or-menu | Import Loyalty |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Loyalty&return_module=J_Loyalty&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Loyalty") |
| link-or-menu | Teachers |  | a[aria-label="Teachers"]<br>a[href="#C_Teachers"]<br>a.btn<br>a.module-name<br>a:contains("Teachers") |
| button | Teachers - More | button | #C_Teachers<br>button[aria-label="Teachers - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Create TA View Teachers Import Teachers | menu | ul[role="menu"] |
| link-or-menu | Create Teacher |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=Teacher"]<br>a.ellipsis_inline<br>a:contains("Create Teacher") |
| link-or-menu | Create TA |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=TA"]<br>a.ellipsis_inline<br>a:contains("Create TA") |
| link-or-menu | View Teachers |  | a[href="#C_Teachers"]<br>a.ellipsis_inline<br>a:contains("View Teachers") |
| link-or-menu | Import Teachers |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Teachers&return_module=C_Teachers&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teachers") |
| link-or-menu | Approval Processes |  | a[aria-label="Approval Processes"]<br>a[href="#ApprovalProcesses"]<br>a.btn<br>a.module-name<br>a:contains("Approval Processes") |
| button | Approval Processes - More | button | #ApprovalProcesses<br>button[aria-label="Approval Processes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Approval Processes | menu | ul[role="menu"] |
| link-or-menu | Approval Processes |  | a[href="#ApprovalProcesses/layout/approvalList"]<br>a.ellipsis_inline<br>a:contains("Approval Processes") |
| link-or-menu | Accounts |  | a[aria-label="Accounts"]<br>a[href="#Accounts"]<br>a.btn<br>a.module-name<br>a:contains("Accounts") |
| button | Accounts - More | button | #Accounts<br>button[aria-label="Accounts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Account View Accounts View Account Reports Import Accounts | menu | ul[role="menu"] |
| link-or-menu | Create Account |  | a[href="#Accounts/create"]<br>a.ellipsis_inline<br>a:contains("Create Account") |
| link-or-menu | View Accounts |  | a[href="#Accounts"]<br>a.ellipsis_inline<br>a:contains("View Accounts") |
| link-or-menu | View Account Reports |  | a[href="#Reports?filterModule=Accounts"]<br>a.ellipsis_inline<br>a:contains("View Account Reports") |
| link-or-menu | Import Accounts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Accounts"]<br>a.ellipsis_inline<br>a:contains("Import Accounts") |
| link-or-menu | Rooms |  | a[aria-label="Rooms"]<br>a[href="#C_Rooms"]<br>a.btn<br>a.module-name<br>a:contains("Rooms") |
| button | Rooms - More | button | #C_Rooms<br>button[aria-label="Rooms - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Room View Rooms Import Rooms | menu | ul[role="menu"] |
| link-or-menu | Create Room |  | a[href="#C_Rooms/create"]<br>a.ellipsis_inline<br>a:contains("Create Room") |
| link-or-menu | View Rooms |  | a[href="#C_Rooms"]<br>a.ellipsis_inline<br>a:contains("View Rooms") |
| link-or-menu | Import Rooms |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Rooms&return_module=C_Rooms&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Rooms") |
| link-or-menu | Teacher Contracts |  | a[aria-label="Teacher Contracts"]<br>a[href="#J_Teachercontract"]<br>a.btn<br>a.module-name<br>a:contains("Teacher Contracts") |
| button | Teacher Contracts - More | button | #J_Teachercontract<br>button[aria-label="Teacher Contracts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Contract View Teacher Contracts Import Teacher Contracts | menu | ul[role="menu"] |
| link-or-menu | Create Teacher Contract |  | a[href="#J_Teachercontract/create"]<br>a.ellipsis_inline<br>a:contains("Create Teacher Contract") |
| link-or-menu | View Teacher Contracts |  | a[href="#J_Teachercontract"]<br>a.ellipsis_inline<br>a:contains("View Teacher Contracts") |
| link-or-menu | Import Teacher Contracts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Teachercontract&return_module=J_Teachercontract&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teacher Contracts") |
| link-or-menu | Kind Of Courses |  | a[aria-label="Kind Of Courses"]<br>a[href="#J_Kindofcourse"]<br>a.btn<br>a.module-name<br>a:contains("Kind Of Courses") |
| button | Kind Of Courses - More | button | #J_Kindofcourse<br>button[aria-label="Kind Of Courses - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Kind Of Course View Kind Of Courses Import Kind Of Courses | menu | ul[role="menu"] |
| link-or-menu | Create Kind Of Course |  | a[href="#J_Kindofcourse/create"]<br>a.ellipsis_inline<br>a:contains("Create Kind Of Course") |
| link-or-menu | View Kind Of Courses |  | a[href="#J_Kindofcourse"]<br>a.ellipsis_inline<br>a:contains("View Kind Of Courses") |
| link-or-menu | Import Kind Of Courses |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Kindofcourse&return_module=J_Kindofcourse&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Kind Of Courses") |
| link-or-menu | Activities |  | a[aria-label="Activities"]<br>a[href="#M_Activities"]<br>a.btn<br>a.module-name<br>a:contains("Activities") |
| button | Activities - More | button | #M_Activities<br>button[aria-label="Activities - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Activities View Activities Import Syllabus | menu | ul[role="menu"] |
| link-or-menu | Create Activities |  | a[href="#M_Activities/create"]<br>a.ellipsis_inline<br>a:contains("Create Activities") |
| link-or-menu | View Activities |  | a[href="#M_Activities"]<br>a.ellipsis_inline<br>a:contains("View Activities") |
| link-or-menu | Import Syllabus |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Syllabus&query=true&report_module=M_Activities"]<br>a.ellipsis_inline<br>a:contains("Import Syllabus") |
| link-or-menu | Work permit |  | a[aria-label="Work permit"]<br>a[href="#J_Workpermit"]<br>a.btn<br>a.module-name<br>a:contains("Work permit") |
| button | Work permit - More | button | #J_Workpermit<br>button[aria-label="Work permit - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Work permit View Work permit | menu | ul[role="menu"] |
| link-or-menu | Create Work permit |  | a[href="#J_Workpermit/create"]<br>a.ellipsis_inline<br>a:contains("Create Work permit") |
| link-or-menu | View Work permit |  | a[href="#J_Workpermit"]<br>a.ellipsis_inline<br>a:contains("View Work permit") |
| link-or-menu | Gallery |  | a[aria-label="Gallery"]<br>a[href="#C_Gallery"]<br>a.btn<br>a.module-name<br>a:contains("Gallery") |
| button | Gallery - More | button | #C_Gallery<br>button[aria-label="Gallery - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gallery View Gallery | menu | ul[role="menu"] |
| link-or-menu | Create Gallery |  | a[href="#C_Gallery/create"]<br>a.ellipsis_inline<br>a:contains("Create Gallery") |
| link-or-menu | View Gallery |  | a[href="#C_Gallery"]<br>a.ellipsis_inline<br>a:contains("View Gallery") |
| link-or-menu | Gradebooks |  | a[aria-label="Gradebooks"]<br>a[href="#J_Gradebook"]<br>a.btn<br>a.module-name<br>a:contains("Gradebooks") |
| button | Gradebooks - More | button | #J_Gradebook<br>button[aria-label="Gradebooks - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | View Gradebooks | menu | ul[role="menu"] |
| link-or-menu | View Gradebooks |  | a[href="#J_Gradebook"]<br>a.ellipsis_inline<br>a:contains("View Gradebooks") |
| link-or-menu | Gradebook Settings |  | a[aria-label="Gradebook Settings"]<br>a[href="#J_GradebookConfig"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Settings") |
| button | Gradebook Settings - More | button | #J_GradebookConfig<br>button[aria-label="Gradebook Settings - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting View Gradebook Settings | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting |  | a[href="#J_GradebookConfig/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting") |
| link-or-menu | View Gradebook Settings |  | a[href="#J_GradebookConfig"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Settings") |
| link-or-menu | Gradebook Setting Groups |  | a[aria-label="Gradebook Setting Groups"]<br>a[href="#J_GradebookSettingGroup"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Setting Groups") |
| button | Gradebook Setting Groups - More | button | #J_GradebookSettingGroup<br>button[aria-label="Gradebook Setting Groups - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting Group View Gradebook Setting Groups | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting Group |  | a[href="#J_GradebookSettingGroup/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting Group") |
| link-or-menu | View Gradebook Setting Groups |  | a[href="#J_GradebookSettingGroup"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Setting Groups") |
| link-or-menu | Admin Hours |  | a[aria-label="Admin Hours"]<br>a[href="#bwc/index.php?module=C_Timesheet&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Admin Hours") |
| link-or-menu | Campaigns |  | a[aria-label="Campaigns"]<br>a[href="#bwc/index.php?module=Campaigns&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Campaigns") |
| button | Campaigns - More | button | #Campaigns<br>button[aria-label="Campaigns - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Campaign (Wizard) Create Campaign (Classic) View Campaigns View Newsletters Create Email Template View Email Temp | menu | ul[role="menu"] |
| link-or-menu | Create Campaign (Wizard) |  | a[href="#bwc/index.php?module=Campaigns&action=WizardHome&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Wizard)") |
| link-or-menu | Create Campaign (Classic) |  | a[href="#bwc/index.php?module=Campaigns&action=EditView&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Classic)") |
| link-or-menu | View Campaigns |  | a[href="#bwc/index.php?module=Campaigns&action=index&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Campaigns") |
| link-or-menu | View Newsletters |  | a[href="#bwc/index.php?module=Campaigns&action=newsletterlist&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Newsletters") |
| link-or-menu | Create Email Template |  | a[href="#bwc/index.php?module=EmailTemplates&action=EditView&return_module=EmailTemplates&return_action=DetailView"]<br>a.ellipsis_inline<br>a:contains("Create Email Template") |
| link-or-menu | View Email Templates |  | a[href="#bwc/index.php?module=EmailTemplates&action=index"]<br>a.ellipsis_inline<br>a:contains("View Email Templates") |
| link-or-menu | Set Up Email |  | a[href="#bwc/index.php?module=Campaigns&action=WizardEmailSetup&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Set Up Email") |
| link-or-menu | View Diagnostics |  | a[href="#bwc/index.php?module=Campaigns&action=CampaignDiagnostic&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Diagnostics") |
| link-or-menu | Create Lead Form |  | a[href="#bwc/index.php?module=Campaigns&action=WebToLeadCreation&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Lead Form") |
| link-or-menu | Calls |  | a[aria-label="Calls"]<br>a[href="#Calls"]<br>a.btn<br>a.module-name<br>a:contains("Calls") |
| button | Calls - More | button | #Calls<br>button[aria-label="Calls - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Log Call View Calls Import Calls Activities Report | menu | ul[role="menu"] |
| link-or-menu | Log Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Log Call") |

## 16. Schedules | Scots CRM
- URL: https://stagingcrm.scotsenglish.edu.vn/index.php#Meetings
- Headings: Schedules (20 of 21+) Schedule Meeting Schedule Demo Schedule Placement Test | Meetings List Dashboard Manage Dashboards Loading... Create Cancel Delete Save Cancel Save
- Elements captured: 629

| Kind | Label/Text | Role/Type | Candidate selectors |
|---|---|---|---|
| navigation | main module navigation | navigation | ul[role="navigation"]<br>ul[aria-label="main module navigation"]<br>ul.nav<br>ul.megamenu |
| link-or-menu | Home |  | a[aria-label="Home"]<br>a[href="#Home"]<br>a.cube<br>a.btn |
| button | Home - More | button | button[aria-label="Home - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Dashboard Activity Stream Manage Dashboards | menu | ul[role="menu"] |
| link-or-menu | Create Dashboard |  | a[href="#Home/create"]<br>a.ellipsis_inline<br>a:contains("Create Dashboard") |
| link-or-menu | Activity Stream |  | a[href="#activities"]<br>a.ellipsis_inline<br>a:contains("Activity Stream") |
| link-or-menu | Manage Dashboards |  | a[href="#Dashboards?moduleName=Home"]<br>a.ellipsis_inline<br>a:contains("Manage Dashboards") |
| link-or-menu | Calendar |  | a[aria-label="Calendar"]<br>a[href="#bwc/index.php?module=Calendar&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Calendar") |
| button | Calendar - More | button | #Calendar<br>button[aria-label="Calendar - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Meeting Schedule Call Create Task Today | menu | ul[role="menu"] |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Schedule Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Call") |
| link-or-menu | Create Task |  | a[href="#Tasks/create"]<br>a.ellipsis_inline<br>a:contains("Create Task") |
| link-or-menu | Today |  | a[href="#bwc/index.php?module=Calendar&action=index&view=day"]<br>a.ellipsis_inline<br>a:contains("Today") |
| link-or-menu | Targets |  | a[aria-label="Targets"]<br>a[href="#Prospects"]<br>a.btn<br>a.module-name<br>a:contains("Targets") |
| button | Targets - More | button | #Prospects<br>button[aria-label="Targets - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Target Create Target From vCard View Targets Import Targets | menu | ul[role="menu"] |
| link-or-menu | Create Target |  | a[href="#Prospects/create"]<br>a.ellipsis_inline<br>a:contains("Create Target") |
| link-or-menu | Create Target From vCard |  | a[href="#Prospects/vcard-import"]<br>a.ellipsis_inline<br>a:contains("Create Target From vCard") |
| link-or-menu | View Targets |  | a[href="#Prospects"]<br>a.ellipsis_inline<br>a:contains("View Targets") |
| link-or-menu | Import Targets |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Prospects&return_module=Prospects&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Targets") |
| link-or-menu | Leads |  | a[aria-label="Leads"]<br>a[href="#Leads"]<br>a.btn<br>a.module-name<br>a:contains("Leads") |
| button | Leads - More | button | #Leads<br>button[aria-label="Leads - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Lead View Leads View Lead Reports Import Leads | menu | ul[role="menu"] |
| link-or-menu | Create Lead |  | a[href="#Leads/create"]<br>a.ellipsis_inline<br>a:contains("Create Lead") |
| link-or-menu | View Leads |  | a[href="#Leads"]<br>a.ellipsis_inline<br>a:contains("View Leads") |
| link-or-menu | View Lead Reports |  | a[href="#Reports?filterModule=Leads"]<br>a.ellipsis_inline<br>a:contains("View Lead Reports") |
| link-or-menu | Import Leads |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Leads&return_module=Leads&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Leads") |
| link-or-menu | Students |  | a[aria-label="Students"]<br>a[href="#Contacts"]<br>a.btn<br>a.module-name<br>a:contains("Students") |
| button | Students - More | button | #Contacts<br>button[aria-label="Students - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Student View Students View Student Reports Import Students Send SMS | menu | ul[role="menu"] |
| link-or-menu | Create Student |  | a[href="#Contacts/create"]<br>a.ellipsis_inline<br>a:contains("Create Student") |
| link-or-menu | View Students |  | a[href="#Contacts"]<br>a.ellipsis_inline<br>a:contains("View Students") |
| link-or-menu | View Student Reports |  | a[href="#Reports?filterModule=Contacts"]<br>a.ellipsis_inline<br>a:contains("View Student Reports") |
| link-or-menu | Import Students |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Contacts&return_module=Contacts&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Students") |
| link-or-menu | Send SMS |  | a[href="#bwc/index.php?module=C_SMS&action=sendSMS"]<br>a.ellipsis_inline<br>a:contains("Send SMS") |
| link-or-menu | Sale Orders |  | a[aria-label="Sale Orders"]<br>a[href="#Quotes"]<br>a.btn<br>a.module-name<br>a:contains("Sale Orders") |
| button | Sale Orders - More | button | #Quotes<br>button[aria-label="Sale Orders - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Sale Order View Sale Orders View Sale Order Reports | menu | ul[role="menu"] |
| link-or-menu | Create Sale Order |  | a[href="#Quotes/create"]<br>a.ellipsis_inline<br>a:contains("Create Sale Order") |
| link-or-menu | View Sale Orders |  | a[href="#Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Orders") |
| link-or-menu | View Sale Order Reports |  | a[href="#Reports?filterModule=Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Order Reports") |
| link-or-menu | Classes |  | a[aria-label="Classes"]<br>a[href="#J_Class"]<br>a.btn<br>a.module-name<br>a:contains("Classes") |
| button | Classes - More | button | #J_Class<br>button[aria-label="Classes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Class View Classes View on Calendar Import Scheduler | menu | ul[role="menu"] |
| link-or-menu | Create Class |  | a[href="#J_Class/create"]<br>a.ellipsis_inline<br>a:contains("Create Class") |
| link-or-menu | View Classes |  | a[href="#J_Class"]<br>a.ellipsis_inline<br>a:contains("View Classes") |
| link-or-menu | View on Calendar |  | a[href="#bwc/index.php?module=Calendar&action=index&view=week"]<br>a.ellipsis_inline<br>a:contains("View on Calendar") |
| link-or-menu | Import Scheduler |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Meetings&return_module=Meetings&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Scheduler") |
| link-or-menu | Schedules |  | a[aria-label="Schedules"]<br>a[href="#Meetings"]<br>a.btn<br>a.module-name<br>a:contains("Schedules") |
| button | Schedules - More | button | #Meetings<br>button[aria-label="Schedules - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Placement Test Schedule Demo Schedule Meeting | menu | ul[role="menu"] |
| link-or-menu | Schedule Placement Test |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=PT"]<br>a.ellipsis_inline<br>a:contains("Schedule Placement Test") |
| link-or-menu | Schedule Demo |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=Demo"]<br>a.ellipsis_inline<br>a:contains("Schedule Demo") |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Reports |  | a[aria-label="Reports"]<br>a[href="#Reports"]<br>a.btn<br>a.module-name<br>a:contains("Reports") |
| button | Reports - More | button | #Reports<br>button[aria-label="Reports - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Report View Reports Report Schedules | menu | ul[role="menu"] |
| link-or-menu | Create Report |  | a[href="#bwc/index.php?module=Reports&report_module=&action=index&page=report&Create+Custom+Report=Create+Custom+Report"]<br>a.ellipsis_inline<br>a:contains("Create Report") |
| link-or-menu | View Reports |  | a[href="#Reports"]<br>a.ellipsis_inline<br>a:contains("View Reports") |
| link-or-menu | Report Schedules |  | a[href="#ReportSchedules"]<br>a.ellipsis_inline<br>a:contains("Report Schedules") |
| link-or-menu | Loyalty |  | a[aria-label="Loyalty"]<br>a[href="#J_Loyalty"]<br>a.btn<br>a.module-name<br>a:contains("Loyalty") |
| button | Loyalty - More | button | #J_Loyalty<br>button[aria-label="Loyalty - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Loyalty View Loyalty Import Loyalty | menu | ul[role="menu"] |
| link-or-menu | Create Loyalty |  | a[href="#J_Loyalty/create"]<br>a.ellipsis_inline<br>a:contains("Create Loyalty") |
| link-or-menu | View Loyalty |  | a[href="#J_Loyalty"]<br>a.ellipsis_inline<br>a:contains("View Loyalty") |
| link-or-menu | Import Loyalty |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Loyalty&return_module=J_Loyalty&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Loyalty") |
| link-or-menu | Teachers |  | a[aria-label="Teachers"]<br>a[href="#C_Teachers"]<br>a.btn<br>a.module-name<br>a:contains("Teachers") |
| button | Teachers - More | button | #C_Teachers<br>button[aria-label="Teachers - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Create TA View Teachers Import Teachers | menu | ul[role="menu"] |
| link-or-menu | Create Teacher |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=Teacher"]<br>a.ellipsis_inline<br>a:contains("Create Teacher") |
| link-or-menu | Create TA |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=TA"]<br>a.ellipsis_inline<br>a:contains("Create TA") |
| link-or-menu | View Teachers |  | a[href="#C_Teachers"]<br>a.ellipsis_inline<br>a:contains("View Teachers") |
| link-or-menu | Import Teachers |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Teachers&return_module=C_Teachers&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teachers") |
| link-or-menu | Approval Processes |  | a[aria-label="Approval Processes"]<br>a[href="#ApprovalProcesses"]<br>a.btn<br>a.module-name<br>a:contains("Approval Processes") |
| button | Approval Processes - More | button | #ApprovalProcesses<br>button[aria-label="Approval Processes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Approval Processes | menu | ul[role="menu"] |
| link-or-menu | Approval Processes |  | a[href="#ApprovalProcesses/layout/approvalList"]<br>a.ellipsis_inline<br>a:contains("Approval Processes") |
| link-or-menu | Accounts |  | a[aria-label="Accounts"]<br>a[href="#Accounts"]<br>a.btn<br>a.module-name<br>a:contains("Accounts") |
| button | Accounts - More | button | #Accounts<br>button[aria-label="Accounts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Account View Accounts View Account Reports Import Accounts | menu | ul[role="menu"] |
| link-or-menu | Create Account |  | a[href="#Accounts/create"]<br>a.ellipsis_inline<br>a:contains("Create Account") |
| link-or-menu | View Accounts |  | a[href="#Accounts"]<br>a.ellipsis_inline<br>a:contains("View Accounts") |
| link-or-menu | View Account Reports |  | a[href="#Reports?filterModule=Accounts"]<br>a.ellipsis_inline<br>a:contains("View Account Reports") |
| link-or-menu | Import Accounts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Accounts"]<br>a.ellipsis_inline<br>a:contains("Import Accounts") |
| link-or-menu | Rooms |  | a[aria-label="Rooms"]<br>a[href="#C_Rooms"]<br>a.btn<br>a.module-name<br>a:contains("Rooms") |
| button | Rooms - More | button | #C_Rooms<br>button[aria-label="Rooms - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Room View Rooms Import Rooms | menu | ul[role="menu"] |
| link-or-menu | Create Room |  | a[href="#C_Rooms/create"]<br>a.ellipsis_inline<br>a:contains("Create Room") |
| link-or-menu | View Rooms |  | a[href="#C_Rooms"]<br>a.ellipsis_inline<br>a:contains("View Rooms") |
| link-or-menu | Import Rooms |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Rooms&return_module=C_Rooms&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Rooms") |
| link-or-menu | Teacher Contracts |  | a[aria-label="Teacher Contracts"]<br>a[href="#J_Teachercontract"]<br>a.btn<br>a.module-name<br>a:contains("Teacher Contracts") |
| button | Teacher Contracts - More | button | #J_Teachercontract<br>button[aria-label="Teacher Contracts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Contract View Teacher Contracts Import Teacher Contracts | menu | ul[role="menu"] |
| link-or-menu | Create Teacher Contract |  | a[href="#J_Teachercontract/create"]<br>a.ellipsis_inline<br>a:contains("Create Teacher Contract") |
| link-or-menu | View Teacher Contracts |  | a[href="#J_Teachercontract"]<br>a.ellipsis_inline<br>a:contains("View Teacher Contracts") |
| link-or-menu | Import Teacher Contracts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Teachercontract&return_module=J_Teachercontract&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teacher Contracts") |
| link-or-menu | Kind Of Courses |  | a[aria-label="Kind Of Courses"]<br>a[href="#J_Kindofcourse"]<br>a.btn<br>a.module-name<br>a:contains("Kind Of Courses") |
| button | Kind Of Courses - More | button | #J_Kindofcourse<br>button[aria-label="Kind Of Courses - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Kind Of Course View Kind Of Courses Import Kind Of Courses | menu | ul[role="menu"] |
| link-or-menu | Create Kind Of Course |  | a[href="#J_Kindofcourse/create"]<br>a.ellipsis_inline<br>a:contains("Create Kind Of Course") |
| link-or-menu | View Kind Of Courses |  | a[href="#J_Kindofcourse"]<br>a.ellipsis_inline<br>a:contains("View Kind Of Courses") |
| link-or-menu | Import Kind Of Courses |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Kindofcourse&return_module=J_Kindofcourse&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Kind Of Courses") |
| link-or-menu | Activities |  | a[aria-label="Activities"]<br>a[href="#M_Activities"]<br>a.btn<br>a.module-name<br>a:contains("Activities") |
| button | Activities - More | button | #M_Activities<br>button[aria-label="Activities - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Activities View Activities Import Syllabus | menu | ul[role="menu"] |
| link-or-menu | Create Activities |  | a[href="#M_Activities/create"]<br>a.ellipsis_inline<br>a:contains("Create Activities") |
| link-or-menu | View Activities |  | a[href="#M_Activities"]<br>a.ellipsis_inline<br>a:contains("View Activities") |
| link-or-menu | Import Syllabus |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Syllabus&query=true&report_module=M_Activities"]<br>a.ellipsis_inline<br>a:contains("Import Syllabus") |
| link-or-menu | Work permit |  | a[aria-label="Work permit"]<br>a[href="#J_Workpermit"]<br>a.btn<br>a.module-name<br>a:contains("Work permit") |
| button | Work permit - More | button | #J_Workpermit<br>button[aria-label="Work permit - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Work permit View Work permit | menu | ul[role="menu"] |
| link-or-menu | Create Work permit |  | a[href="#J_Workpermit/create"]<br>a.ellipsis_inline<br>a:contains("Create Work permit") |
| link-or-menu | View Work permit |  | a[href="#J_Workpermit"]<br>a.ellipsis_inline<br>a:contains("View Work permit") |
| link-or-menu | Gallery |  | a[aria-label="Gallery"]<br>a[href="#C_Gallery"]<br>a.btn<br>a.module-name<br>a:contains("Gallery") |
| button | Gallery - More | button | #C_Gallery<br>button[aria-label="Gallery - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gallery View Gallery | menu | ul[role="menu"] |
| link-or-menu | Create Gallery |  | a[href="#C_Gallery/create"]<br>a.ellipsis_inline<br>a:contains("Create Gallery") |
| link-or-menu | View Gallery |  | a[href="#C_Gallery"]<br>a.ellipsis_inline<br>a:contains("View Gallery") |
| link-or-menu | Gradebooks |  | a[aria-label="Gradebooks"]<br>a[href="#J_Gradebook"]<br>a.btn<br>a.module-name<br>a:contains("Gradebooks") |
| button | Gradebooks - More | button | #J_Gradebook<br>button[aria-label="Gradebooks - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | View Gradebooks | menu | ul[role="menu"] |
| link-or-menu | View Gradebooks |  | a[href="#J_Gradebook"]<br>a.ellipsis_inline<br>a:contains("View Gradebooks") |
| link-or-menu | Gradebook Settings |  | a[aria-label="Gradebook Settings"]<br>a[href="#J_GradebookConfig"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Settings") |
| button | Gradebook Settings - More | button | #J_GradebookConfig<br>button[aria-label="Gradebook Settings - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting View Gradebook Settings | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting |  | a[href="#J_GradebookConfig/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting") |
| link-or-menu | View Gradebook Settings |  | a[href="#J_GradebookConfig"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Settings") |
| link-or-menu | Gradebook Setting Groups |  | a[aria-label="Gradebook Setting Groups"]<br>a[href="#J_GradebookSettingGroup"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Setting Groups") |
| button | Gradebook Setting Groups - More | button | #J_GradebookSettingGroup<br>button[aria-label="Gradebook Setting Groups - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting Group View Gradebook Setting Groups | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting Group |  | a[href="#J_GradebookSettingGroup/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting Group") |
| link-or-menu | View Gradebook Setting Groups |  | a[href="#J_GradebookSettingGroup"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Setting Groups") |
| link-or-menu | Admin Hours |  | a[aria-label="Admin Hours"]<br>a[href="#bwc/index.php?module=C_Timesheet&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Admin Hours") |
| link-or-menu | Campaigns |  | a[aria-label="Campaigns"]<br>a[href="#bwc/index.php?module=Campaigns&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Campaigns") |
| button | Campaigns - More | button | #Campaigns<br>button[aria-label="Campaigns - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Campaign (Wizard) Create Campaign (Classic) View Campaigns View Newsletters Create Email Template View Email Temp | menu | ul[role="menu"] |
| link-or-menu | Create Campaign (Wizard) |  | a[href="#bwc/index.php?module=Campaigns&action=WizardHome&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Wizard)") |
| link-or-menu | Create Campaign (Classic) |  | a[href="#bwc/index.php?module=Campaigns&action=EditView&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Classic)") |
| link-or-menu | View Campaigns |  | a[href="#bwc/index.php?module=Campaigns&action=index&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Campaigns") |
| link-or-menu | View Newsletters |  | a[href="#bwc/index.php?module=Campaigns&action=newsletterlist&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Newsletters") |
| link-or-menu | Create Email Template |  | a[href="#bwc/index.php?module=EmailTemplates&action=EditView&return_module=EmailTemplates&return_action=DetailView"]<br>a.ellipsis_inline<br>a:contains("Create Email Template") |
| link-or-menu | View Email Templates |  | a[href="#bwc/index.php?module=EmailTemplates&action=index"]<br>a.ellipsis_inline<br>a:contains("View Email Templates") |
| link-or-menu | Set Up Email |  | a[href="#bwc/index.php?module=Campaigns&action=WizardEmailSetup&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Set Up Email") |
| link-or-menu | View Diagnostics |  | a[href="#bwc/index.php?module=Campaigns&action=CampaignDiagnostic&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Diagnostics") |
| link-or-menu | Create Lead Form |  | a[href="#bwc/index.php?module=Campaigns&action=WebToLeadCreation&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Lead Form") |
| link-or-menu | Calls |  | a[aria-label="Calls"]<br>a[href="#Calls"]<br>a.btn<br>a.module-name<br>a:contains("Calls") |
| button | Calls - More | button | #Calls<br>button[aria-label="Calls - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Log Call View Calls Import Calls Activities Report | menu | ul[role="menu"] |
| link-or-menu | Log Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Log Call") |

## 17. Reports | Scots CRM
- URL: https://stagingcrm.scotsenglish.edu.vn/index.php#Reports
- Headings: Reports (20 of 21+) Create Report Report Schedules Import Report | No dashboard configured.
- Elements captured: 578

| Kind | Label/Text | Role/Type | Candidate selectors |
|---|---|---|---|
| navigation | main module navigation | navigation | ul[role="navigation"]<br>ul[aria-label="main module navigation"]<br>ul.nav<br>ul.megamenu |
| link-or-menu | Home |  | a[aria-label="Home"]<br>a[href="#Home"]<br>a.cube<br>a.btn |
| button | Home - More | button | button[aria-label="Home - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Dashboard Activity Stream Manage Dashboards | menu | ul[role="menu"] |
| link-or-menu | Create Dashboard |  | a[href="#Home/create"]<br>a.ellipsis_inline<br>a:contains("Create Dashboard") |
| link-or-menu | Activity Stream |  | a[href="#activities"]<br>a.ellipsis_inline<br>a:contains("Activity Stream") |
| link-or-menu | Manage Dashboards |  | a[href="#Dashboards?moduleName=Home"]<br>a.ellipsis_inline<br>a:contains("Manage Dashboards") |
| link-or-menu | Calendar |  | a[aria-label="Calendar"]<br>a[href="#bwc/index.php?module=Calendar&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Calendar") |
| button | Calendar - More | button | #Calendar<br>button[aria-label="Calendar - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Meeting Schedule Call Create Task Today | menu | ul[role="menu"] |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Schedule Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Call") |
| link-or-menu | Create Task |  | a[href="#Tasks/create"]<br>a.ellipsis_inline<br>a:contains("Create Task") |
| link-or-menu | Today |  | a[href="#bwc/index.php?module=Calendar&action=index&view=day"]<br>a.ellipsis_inline<br>a:contains("Today") |
| link-or-menu | Targets |  | a[aria-label="Targets"]<br>a[href="#Prospects"]<br>a.btn<br>a.module-name<br>a:contains("Targets") |
| button | Targets - More | button | #Prospects<br>button[aria-label="Targets - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Target Create Target From vCard View Targets Import Targets | menu | ul[role="menu"] |
| link-or-menu | Create Target |  | a[href="#Prospects/create"]<br>a.ellipsis_inline<br>a:contains("Create Target") |
| link-or-menu | Create Target From vCard |  | a[href="#Prospects/vcard-import"]<br>a.ellipsis_inline<br>a:contains("Create Target From vCard") |
| link-or-menu | View Targets |  | a[href="#Prospects"]<br>a.ellipsis_inline<br>a:contains("View Targets") |
| link-or-menu | Import Targets |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Prospects&return_module=Prospects&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Targets") |
| link-or-menu | Leads |  | a[aria-label="Leads"]<br>a[href="#Leads"]<br>a.btn<br>a.module-name<br>a:contains("Leads") |
| button | Leads - More | button | #Leads<br>button[aria-label="Leads - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Lead View Leads View Lead Reports Import Leads | menu | ul[role="menu"] |
| link-or-menu | Create Lead |  | a[href="#Leads/create"]<br>a.ellipsis_inline<br>a:contains("Create Lead") |
| link-or-menu | View Leads |  | a[href="#Leads"]<br>a.ellipsis_inline<br>a:contains("View Leads") |
| link-or-menu | View Lead Reports |  | a[href="#Reports?filterModule=Leads"]<br>a.ellipsis_inline<br>a:contains("View Lead Reports") |
| link-or-menu | Import Leads |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Leads&return_module=Leads&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Leads") |
| link-or-menu | Students |  | a[aria-label="Students"]<br>a[href="#Contacts"]<br>a.btn<br>a.module-name<br>a:contains("Students") |
| button | Students - More | button | #Contacts<br>button[aria-label="Students - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Student View Students View Student Reports Import Students Send SMS | menu | ul[role="menu"] |
| link-or-menu | Create Student |  | a[href="#Contacts/create"]<br>a.ellipsis_inline<br>a:contains("Create Student") |
| link-or-menu | View Students |  | a[href="#Contacts"]<br>a.ellipsis_inline<br>a:contains("View Students") |
| link-or-menu | View Student Reports |  | a[href="#Reports?filterModule=Contacts"]<br>a.ellipsis_inline<br>a:contains("View Student Reports") |
| link-or-menu | Import Students |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Contacts&return_module=Contacts&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Students") |
| link-or-menu | Send SMS |  | a[href="#bwc/index.php?module=C_SMS&action=sendSMS"]<br>a.ellipsis_inline<br>a:contains("Send SMS") |
| link-or-menu | Sale Orders |  | a[aria-label="Sale Orders"]<br>a[href="#Quotes"]<br>a.btn<br>a.module-name<br>a:contains("Sale Orders") |
| button | Sale Orders - More | button | #Quotes<br>button[aria-label="Sale Orders - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Sale Order View Sale Orders View Sale Order Reports | menu | ul[role="menu"] |
| link-or-menu | Create Sale Order |  | a[href="#Quotes/create"]<br>a.ellipsis_inline<br>a:contains("Create Sale Order") |
| link-or-menu | View Sale Orders |  | a[href="#Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Orders") |
| link-or-menu | View Sale Order Reports |  | a[href="#Reports?filterModule=Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Order Reports") |
| link-or-menu | Classes |  | a[aria-label="Classes"]<br>a[href="#J_Class"]<br>a.btn<br>a.module-name<br>a:contains("Classes") |
| button | Classes - More | button | #J_Class<br>button[aria-label="Classes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Class View Classes View on Calendar Import Scheduler | menu | ul[role="menu"] |
| link-or-menu | Create Class |  | a[href="#J_Class/create"]<br>a.ellipsis_inline<br>a:contains("Create Class") |
| link-or-menu | View Classes |  | a[href="#J_Class"]<br>a.ellipsis_inline<br>a:contains("View Classes") |
| link-or-menu | View on Calendar |  | a[href="#bwc/index.php?module=Calendar&action=index&view=week"]<br>a.ellipsis_inline<br>a:contains("View on Calendar") |
| link-or-menu | Import Scheduler |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Meetings&return_module=Meetings&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Scheduler") |
| link-or-menu | Schedules |  | a[aria-label="Schedules"]<br>a[href="#Meetings"]<br>a.btn<br>a.module-name<br>a:contains("Schedules") |
| button | Schedules - More | button | #Meetings<br>button[aria-label="Schedules - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Placement Test Schedule Demo Schedule Meeting | menu | ul[role="menu"] |
| link-or-menu | Schedule Placement Test |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=PT"]<br>a.ellipsis_inline<br>a:contains("Schedule Placement Test") |
| link-or-menu | Schedule Demo |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=Demo"]<br>a.ellipsis_inline<br>a:contains("Schedule Demo") |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Reports |  | a[aria-label="Reports"]<br>a[href="#Reports"]<br>a.btn<br>a.module-name<br>a:contains("Reports") |
| button | Reports - More | button | #Reports<br>button[aria-label="Reports - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Report View Reports Report Schedules | menu | ul[role="menu"] |
| link-or-menu | Create Report |  | a[href="#bwc/index.php?module=Reports&report_module=&action=index&page=report&Create+Custom+Report=Create+Custom+Report"]<br>a.ellipsis_inline<br>a:contains("Create Report") |
| link-or-menu | View Reports |  | a[href="#Reports"]<br>a.ellipsis_inline<br>a:contains("View Reports") |
| link-or-menu | Report Schedules |  | a[href="#ReportSchedules"]<br>a.ellipsis_inline<br>a:contains("Report Schedules") |
| link-or-menu | Loyalty |  | a[aria-label="Loyalty"]<br>a[href="#J_Loyalty"]<br>a.btn<br>a.module-name<br>a:contains("Loyalty") |
| button | Loyalty - More | button | #J_Loyalty<br>button[aria-label="Loyalty - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Loyalty View Loyalty Import Loyalty | menu | ul[role="menu"] |
| link-or-menu | Create Loyalty |  | a[href="#J_Loyalty/create"]<br>a.ellipsis_inline<br>a:contains("Create Loyalty") |
| link-or-menu | View Loyalty |  | a[href="#J_Loyalty"]<br>a.ellipsis_inline<br>a:contains("View Loyalty") |
| link-or-menu | Import Loyalty |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Loyalty&return_module=J_Loyalty&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Loyalty") |
| link-or-menu | Teachers |  | a[aria-label="Teachers"]<br>a[href="#C_Teachers"]<br>a.btn<br>a.module-name<br>a:contains("Teachers") |
| button | Teachers - More | button | #C_Teachers<br>button[aria-label="Teachers - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Create TA View Teachers Import Teachers | menu | ul[role="menu"] |
| link-or-menu | Create Teacher |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=Teacher"]<br>a.ellipsis_inline<br>a:contains("Create Teacher") |
| link-or-menu | Create TA |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=TA"]<br>a.ellipsis_inline<br>a:contains("Create TA") |
| link-or-menu | View Teachers |  | a[href="#C_Teachers"]<br>a.ellipsis_inline<br>a:contains("View Teachers") |
| link-or-menu | Import Teachers |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Teachers&return_module=C_Teachers&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teachers") |
| link-or-menu | Approval Processes |  | a[aria-label="Approval Processes"]<br>a[href="#ApprovalProcesses"]<br>a.btn<br>a.module-name<br>a:contains("Approval Processes") |
| button | Approval Processes - More | button | #ApprovalProcesses<br>button[aria-label="Approval Processes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Approval Processes | menu | ul[role="menu"] |
| link-or-menu | Approval Processes |  | a[href="#ApprovalProcesses/layout/approvalList"]<br>a.ellipsis_inline<br>a:contains("Approval Processes") |
| link-or-menu | Accounts |  | a[aria-label="Accounts"]<br>a[href="#Accounts"]<br>a.btn<br>a.module-name<br>a:contains("Accounts") |
| button | Accounts - More | button | #Accounts<br>button[aria-label="Accounts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Account View Accounts View Account Reports Import Accounts | menu | ul[role="menu"] |
| link-or-menu | Create Account |  | a[href="#Accounts/create"]<br>a.ellipsis_inline<br>a:contains("Create Account") |
| link-or-menu | View Accounts |  | a[href="#Accounts"]<br>a.ellipsis_inline<br>a:contains("View Accounts") |
| link-or-menu | View Account Reports |  | a[href="#Reports?filterModule=Accounts"]<br>a.ellipsis_inline<br>a:contains("View Account Reports") |
| link-or-menu | Import Accounts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Accounts"]<br>a.ellipsis_inline<br>a:contains("Import Accounts") |
| link-or-menu | Rooms |  | a[aria-label="Rooms"]<br>a[href="#C_Rooms"]<br>a.btn<br>a.module-name<br>a:contains("Rooms") |
| button | Rooms - More | button | #C_Rooms<br>button[aria-label="Rooms - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Room View Rooms Import Rooms | menu | ul[role="menu"] |
| link-or-menu | Create Room |  | a[href="#C_Rooms/create"]<br>a.ellipsis_inline<br>a:contains("Create Room") |
| link-or-menu | View Rooms |  | a[href="#C_Rooms"]<br>a.ellipsis_inline<br>a:contains("View Rooms") |
| link-or-menu | Import Rooms |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Rooms&return_module=C_Rooms&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Rooms") |
| link-or-menu | Teacher Contracts |  | a[aria-label="Teacher Contracts"]<br>a[href="#J_Teachercontract"]<br>a.btn<br>a.module-name<br>a:contains("Teacher Contracts") |
| button | Teacher Contracts - More | button | #J_Teachercontract<br>button[aria-label="Teacher Contracts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Contract View Teacher Contracts Import Teacher Contracts | menu | ul[role="menu"] |
| link-or-menu | Create Teacher Contract |  | a[href="#J_Teachercontract/create"]<br>a.ellipsis_inline<br>a:contains("Create Teacher Contract") |
| link-or-menu | View Teacher Contracts |  | a[href="#J_Teachercontract"]<br>a.ellipsis_inline<br>a:contains("View Teacher Contracts") |
| link-or-menu | Import Teacher Contracts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Teachercontract&return_module=J_Teachercontract&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teacher Contracts") |
| link-or-menu | Kind Of Courses |  | a[aria-label="Kind Of Courses"]<br>a[href="#J_Kindofcourse"]<br>a.btn<br>a.module-name<br>a:contains("Kind Of Courses") |
| button | Kind Of Courses - More | button | #J_Kindofcourse<br>button[aria-label="Kind Of Courses - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Kind Of Course View Kind Of Courses Import Kind Of Courses | menu | ul[role="menu"] |
| link-or-menu | Create Kind Of Course |  | a[href="#J_Kindofcourse/create"]<br>a.ellipsis_inline<br>a:contains("Create Kind Of Course") |
| link-or-menu | View Kind Of Courses |  | a[href="#J_Kindofcourse"]<br>a.ellipsis_inline<br>a:contains("View Kind Of Courses") |
| link-or-menu | Import Kind Of Courses |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Kindofcourse&return_module=J_Kindofcourse&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Kind Of Courses") |
| link-or-menu | Activities |  | a[aria-label="Activities"]<br>a[href="#M_Activities"]<br>a.btn<br>a.module-name<br>a:contains("Activities") |
| button | Activities - More | button | #M_Activities<br>button[aria-label="Activities - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Activities View Activities Import Syllabus | menu | ul[role="menu"] |
| link-or-menu | Create Activities |  | a[href="#M_Activities/create"]<br>a.ellipsis_inline<br>a:contains("Create Activities") |
| link-or-menu | View Activities |  | a[href="#M_Activities"]<br>a.ellipsis_inline<br>a:contains("View Activities") |
| link-or-menu | Import Syllabus |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Syllabus&query=true&report_module=M_Activities"]<br>a.ellipsis_inline<br>a:contains("Import Syllabus") |
| link-or-menu | Work permit |  | a[aria-label="Work permit"]<br>a[href="#J_Workpermit"]<br>a.btn<br>a.module-name<br>a:contains("Work permit") |
| button | Work permit - More | button | #J_Workpermit<br>button[aria-label="Work permit - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Work permit View Work permit | menu | ul[role="menu"] |
| link-or-menu | Create Work permit |  | a[href="#J_Workpermit/create"]<br>a.ellipsis_inline<br>a:contains("Create Work permit") |
| link-or-menu | View Work permit |  | a[href="#J_Workpermit"]<br>a.ellipsis_inline<br>a:contains("View Work permit") |
| link-or-menu | Gallery |  | a[aria-label="Gallery"]<br>a[href="#C_Gallery"]<br>a.btn<br>a.module-name<br>a:contains("Gallery") |
| button | Gallery - More | button | #C_Gallery<br>button[aria-label="Gallery - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gallery View Gallery | menu | ul[role="menu"] |
| link-or-menu | Create Gallery |  | a[href="#C_Gallery/create"]<br>a.ellipsis_inline<br>a:contains("Create Gallery") |
| link-or-menu | View Gallery |  | a[href="#C_Gallery"]<br>a.ellipsis_inline<br>a:contains("View Gallery") |
| link-or-menu | Gradebooks |  | a[aria-label="Gradebooks"]<br>a[href="#J_Gradebook"]<br>a.btn<br>a.module-name<br>a:contains("Gradebooks") |
| button | Gradebooks - More | button | #J_Gradebook<br>button[aria-label="Gradebooks - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | View Gradebooks | menu | ul[role="menu"] |
| link-or-menu | View Gradebooks |  | a[href="#J_Gradebook"]<br>a.ellipsis_inline<br>a:contains("View Gradebooks") |
| link-or-menu | Gradebook Settings |  | a[aria-label="Gradebook Settings"]<br>a[href="#J_GradebookConfig"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Settings") |
| button | Gradebook Settings - More | button | #J_GradebookConfig<br>button[aria-label="Gradebook Settings - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting View Gradebook Settings | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting |  | a[href="#J_GradebookConfig/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting") |
| link-or-menu | View Gradebook Settings |  | a[href="#J_GradebookConfig"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Settings") |
| link-or-menu | Gradebook Setting Groups |  | a[aria-label="Gradebook Setting Groups"]<br>a[href="#J_GradebookSettingGroup"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Setting Groups") |
| button | Gradebook Setting Groups - More | button | #J_GradebookSettingGroup<br>button[aria-label="Gradebook Setting Groups - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting Group View Gradebook Setting Groups | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting Group |  | a[href="#J_GradebookSettingGroup/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting Group") |
| link-or-menu | View Gradebook Setting Groups |  | a[href="#J_GradebookSettingGroup"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Setting Groups") |
| link-or-menu | Admin Hours |  | a[aria-label="Admin Hours"]<br>a[href="#bwc/index.php?module=C_Timesheet&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Admin Hours") |
| link-or-menu | Campaigns |  | a[aria-label="Campaigns"]<br>a[href="#bwc/index.php?module=Campaigns&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Campaigns") |
| button | Campaigns - More | button | #Campaigns<br>button[aria-label="Campaigns - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Campaign (Wizard) Create Campaign (Classic) View Campaigns View Newsletters Create Email Template View Email Temp | menu | ul[role="menu"] |
| link-or-menu | Create Campaign (Wizard) |  | a[href="#bwc/index.php?module=Campaigns&action=WizardHome&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Wizard)") |
| link-or-menu | Create Campaign (Classic) |  | a[href="#bwc/index.php?module=Campaigns&action=EditView&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Classic)") |
| link-or-menu | View Campaigns |  | a[href="#bwc/index.php?module=Campaigns&action=index&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Campaigns") |
| link-or-menu | View Newsletters |  | a[href="#bwc/index.php?module=Campaigns&action=newsletterlist&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Newsletters") |
| link-or-menu | Create Email Template |  | a[href="#bwc/index.php?module=EmailTemplates&action=EditView&return_module=EmailTemplates&return_action=DetailView"]<br>a.ellipsis_inline<br>a:contains("Create Email Template") |
| link-or-menu | View Email Templates |  | a[href="#bwc/index.php?module=EmailTemplates&action=index"]<br>a.ellipsis_inline<br>a:contains("View Email Templates") |
| link-or-menu | Set Up Email |  | a[href="#bwc/index.php?module=Campaigns&action=WizardEmailSetup&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Set Up Email") |
| link-or-menu | View Diagnostics |  | a[href="#bwc/index.php?module=Campaigns&action=CampaignDiagnostic&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Diagnostics") |
| link-or-menu | Create Lead Form |  | a[href="#bwc/index.php?module=Campaigns&action=WebToLeadCreation&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Lead Form") |
| link-or-menu | Calls |  | a[aria-label="Calls"]<br>a[href="#Calls"]<br>a.btn<br>a.module-name<br>a:contains("Calls") |
| button | Calls - More | button | #Calls<br>button[aria-label="Calls - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Log Call View Calls Import Calls Activities Report | menu | ul[role="menu"] |
| link-or-menu | Log Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Log Call") |

## 18. Report Schedules | Scots CRM
- URL: https://stagingcrm.scotsenglish.edu.vn/index.php#ReportSchedules
- Headings: Report Schedules (0) Create | No dashboard configured.
- Elements captured: 416

| Kind | Label/Text | Role/Type | Candidate selectors |
|---|---|---|---|
| navigation | main module navigation | navigation | ul[role="navigation"]<br>ul[aria-label="main module navigation"]<br>ul.nav<br>ul.megamenu |
| link-or-menu | Home |  | a[aria-label="Home"]<br>a[href="#Home"]<br>a.cube<br>a.btn |
| button | Home - More | button | button[aria-label="Home - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Dashboard Activity Stream Manage Dashboards | menu | ul[role="menu"] |
| link-or-menu | Create Dashboard |  | a[href="#Home/create"]<br>a.ellipsis_inline<br>a:contains("Create Dashboard") |
| link-or-menu | Activity Stream |  | a[href="#activities"]<br>a.ellipsis_inline<br>a:contains("Activity Stream") |
| link-or-menu | Manage Dashboards |  | a[href="#Dashboards?moduleName=Home"]<br>a.ellipsis_inline<br>a:contains("Manage Dashboards") |
| link-or-menu | Calendar |  | a[aria-label="Calendar"]<br>a[href="#bwc/index.php?module=Calendar&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Calendar") |
| button | Calendar - More | button | #Calendar<br>button[aria-label="Calendar - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Meeting Schedule Call Create Task Today | menu | ul[role="menu"] |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Schedule Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Call") |
| link-or-menu | Create Task |  | a[href="#Tasks/create"]<br>a.ellipsis_inline<br>a:contains("Create Task") |
| link-or-menu | Today |  | a[href="#bwc/index.php?module=Calendar&action=index&view=day"]<br>a.ellipsis_inline<br>a:contains("Today") |
| link-or-menu | Targets |  | a[aria-label="Targets"]<br>a[href="#Prospects"]<br>a.btn<br>a.module-name<br>a:contains("Targets") |
| button | Targets - More | button | #Prospects<br>button[aria-label="Targets - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Target Create Target From vCard View Targets Import Targets | menu | ul[role="menu"] |
| link-or-menu | Create Target |  | a[href="#Prospects/create"]<br>a.ellipsis_inline<br>a:contains("Create Target") |
| link-or-menu | Create Target From vCard |  | a[href="#Prospects/vcard-import"]<br>a.ellipsis_inline<br>a:contains("Create Target From vCard") |
| link-or-menu | View Targets |  | a[href="#Prospects"]<br>a.ellipsis_inline<br>a:contains("View Targets") |
| link-or-menu | Import Targets |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Prospects&return_module=Prospects&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Targets") |
| link-or-menu | Leads |  | a[aria-label="Leads"]<br>a[href="#Leads"]<br>a.btn<br>a.module-name<br>a:contains("Leads") |
| button | Leads - More | button | #Leads<br>button[aria-label="Leads - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Lead View Leads View Lead Reports Import Leads | menu | ul[role="menu"] |
| link-or-menu | Create Lead |  | a[href="#Leads/create"]<br>a.ellipsis_inline<br>a:contains("Create Lead") |
| link-or-menu | View Leads |  | a[href="#Leads"]<br>a.ellipsis_inline<br>a:contains("View Leads") |
| link-or-menu | View Lead Reports |  | a[href="#Reports?filterModule=Leads"]<br>a.ellipsis_inline<br>a:contains("View Lead Reports") |
| link-or-menu | Import Leads |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Leads&return_module=Leads&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Leads") |
| link-or-menu | Students |  | a[aria-label="Students"]<br>a[href="#Contacts"]<br>a.btn<br>a.module-name<br>a:contains("Students") |
| button | Students - More | button | #Contacts<br>button[aria-label="Students - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Student View Students View Student Reports Import Students Send SMS | menu | ul[role="menu"] |
| link-or-menu | Create Student |  | a[href="#Contacts/create"]<br>a.ellipsis_inline<br>a:contains("Create Student") |
| link-or-menu | View Students |  | a[href="#Contacts"]<br>a.ellipsis_inline<br>a:contains("View Students") |
| link-or-menu | View Student Reports |  | a[href="#Reports?filterModule=Contacts"]<br>a.ellipsis_inline<br>a:contains("View Student Reports") |
| link-or-menu | Import Students |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Contacts&return_module=Contacts&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Students") |
| link-or-menu | Send SMS |  | a[href="#bwc/index.php?module=C_SMS&action=sendSMS"]<br>a.ellipsis_inline<br>a:contains("Send SMS") |
| link-or-menu | Sale Orders |  | a[aria-label="Sale Orders"]<br>a[href="#Quotes"]<br>a.btn<br>a.module-name<br>a:contains("Sale Orders") |
| button | Sale Orders - More | button | #Quotes<br>button[aria-label="Sale Orders - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Sale Order View Sale Orders View Sale Order Reports | menu | ul[role="menu"] |
| link-or-menu | Create Sale Order |  | a[href="#Quotes/create"]<br>a.ellipsis_inline<br>a:contains("Create Sale Order") |
| link-or-menu | View Sale Orders |  | a[href="#Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Orders") |
| link-or-menu | View Sale Order Reports |  | a[href="#Reports?filterModule=Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Order Reports") |
| link-or-menu | Classes |  | a[aria-label="Classes"]<br>a[href="#J_Class"]<br>a.btn<br>a.module-name<br>a:contains("Classes") |
| button | Classes - More | button | #J_Class<br>button[aria-label="Classes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Class View Classes View on Calendar Import Scheduler | menu | ul[role="menu"] |
| link-or-menu | Create Class |  | a[href="#J_Class/create"]<br>a.ellipsis_inline<br>a:contains("Create Class") |
| link-or-menu | View Classes |  | a[href="#J_Class"]<br>a.ellipsis_inline<br>a:contains("View Classes") |
| link-or-menu | View on Calendar |  | a[href="#bwc/index.php?module=Calendar&action=index&view=week"]<br>a.ellipsis_inline<br>a:contains("View on Calendar") |
| link-or-menu | Import Scheduler |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Meetings&return_module=Meetings&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Scheduler") |
| link-or-menu | Schedules |  | a[aria-label="Schedules"]<br>a[href="#Meetings"]<br>a.btn<br>a.module-name<br>a:contains("Schedules") |
| button | Schedules - More | button | #Meetings<br>button[aria-label="Schedules - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Placement Test Schedule Demo Schedule Meeting | menu | ul[role="menu"] |
| link-or-menu | Schedule Placement Test |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=PT"]<br>a.ellipsis_inline<br>a:contains("Schedule Placement Test") |
| link-or-menu | Schedule Demo |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=Demo"]<br>a.ellipsis_inline<br>a:contains("Schedule Demo") |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Reports |  | a[aria-label="Reports"]<br>a[href="#Reports"]<br>a.btn<br>a.module-name<br>a:contains("Reports") |
| button | Reports - More | button | #Reports<br>button[aria-label="Reports - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Report View Reports Report Schedules | menu | ul[role="menu"] |
| link-or-menu | Create Report |  | a[href="#bwc/index.php?module=Reports&report_module=&action=index&page=report&Create+Custom+Report=Create+Custom+Report"]<br>a.ellipsis_inline<br>a:contains("Create Report") |
| link-or-menu | View Reports |  | a[href="#Reports"]<br>a.ellipsis_inline<br>a:contains("View Reports") |
| link-or-menu | Report Schedules |  | a[href="#ReportSchedules"]<br>a.ellipsis_inline<br>a:contains("Report Schedules") |
| link-or-menu | Loyalty |  | a[aria-label="Loyalty"]<br>a[href="#J_Loyalty"]<br>a.btn<br>a.module-name<br>a:contains("Loyalty") |
| button | Loyalty - More | button | #J_Loyalty<br>button[aria-label="Loyalty - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Loyalty View Loyalty Import Loyalty | menu | ul[role="menu"] |
| link-or-menu | Create Loyalty |  | a[href="#J_Loyalty/create"]<br>a.ellipsis_inline<br>a:contains("Create Loyalty") |
| link-or-menu | View Loyalty |  | a[href="#J_Loyalty"]<br>a.ellipsis_inline<br>a:contains("View Loyalty") |
| link-or-menu | Import Loyalty |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Loyalty&return_module=J_Loyalty&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Loyalty") |
| link-or-menu | Teachers |  | a[aria-label="Teachers"]<br>a[href="#C_Teachers"]<br>a.btn<br>a.module-name<br>a:contains("Teachers") |
| button | Teachers - More | button | #C_Teachers<br>button[aria-label="Teachers - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Create TA View Teachers Import Teachers | menu | ul[role="menu"] |
| link-or-menu | Create Teacher |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=Teacher"]<br>a.ellipsis_inline<br>a:contains("Create Teacher") |
| link-or-menu | Create TA |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=TA"]<br>a.ellipsis_inline<br>a:contains("Create TA") |
| link-or-menu | View Teachers |  | a[href="#C_Teachers"]<br>a.ellipsis_inline<br>a:contains("View Teachers") |
| link-or-menu | Import Teachers |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Teachers&return_module=C_Teachers&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teachers") |
| link-or-menu | Approval Processes |  | a[aria-label="Approval Processes"]<br>a[href="#ApprovalProcesses"]<br>a.btn<br>a.module-name<br>a:contains("Approval Processes") |
| button | Approval Processes - More | button | #ApprovalProcesses<br>button[aria-label="Approval Processes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Approval Processes | menu | ul[role="menu"] |
| link-or-menu | Approval Processes |  | a[href="#ApprovalProcesses/layout/approvalList"]<br>a.ellipsis_inline<br>a:contains("Approval Processes") |
| link-or-menu | Accounts |  | a[aria-label="Accounts"]<br>a[href="#Accounts"]<br>a.btn<br>a.module-name<br>a:contains("Accounts") |
| button | Accounts - More | button | #Accounts<br>button[aria-label="Accounts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Account View Accounts View Account Reports Import Accounts | menu | ul[role="menu"] |
| link-or-menu | Create Account |  | a[href="#Accounts/create"]<br>a.ellipsis_inline<br>a:contains("Create Account") |
| link-or-menu | View Accounts |  | a[href="#Accounts"]<br>a.ellipsis_inline<br>a:contains("View Accounts") |
| link-or-menu | View Account Reports |  | a[href="#Reports?filterModule=Accounts"]<br>a.ellipsis_inline<br>a:contains("View Account Reports") |
| link-or-menu | Import Accounts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Accounts"]<br>a.ellipsis_inline<br>a:contains("Import Accounts") |
| link-or-menu | Rooms |  | a[aria-label="Rooms"]<br>a[href="#C_Rooms"]<br>a.btn<br>a.module-name<br>a:contains("Rooms") |
| button | Rooms - More | button | #C_Rooms<br>button[aria-label="Rooms - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Room View Rooms Import Rooms | menu | ul[role="menu"] |
| link-or-menu | Create Room |  | a[href="#C_Rooms/create"]<br>a.ellipsis_inline<br>a:contains("Create Room") |
| link-or-menu | View Rooms |  | a[href="#C_Rooms"]<br>a.ellipsis_inline<br>a:contains("View Rooms") |
| link-or-menu | Import Rooms |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Rooms&return_module=C_Rooms&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Rooms") |
| link-or-menu | Teacher Contracts |  | a[aria-label="Teacher Contracts"]<br>a[href="#J_Teachercontract"]<br>a.btn<br>a.module-name<br>a:contains("Teacher Contracts") |
| button | Teacher Contracts - More | button | #J_Teachercontract<br>button[aria-label="Teacher Contracts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Contract View Teacher Contracts Import Teacher Contracts | menu | ul[role="menu"] |
| link-or-menu | Create Teacher Contract |  | a[href="#J_Teachercontract/create"]<br>a.ellipsis_inline<br>a:contains("Create Teacher Contract") |
| link-or-menu | View Teacher Contracts |  | a[href="#J_Teachercontract"]<br>a.ellipsis_inline<br>a:contains("View Teacher Contracts") |
| link-or-menu | Import Teacher Contracts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Teachercontract&return_module=J_Teachercontract&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teacher Contracts") |
| link-or-menu | Kind Of Courses |  | a[aria-label="Kind Of Courses"]<br>a[href="#J_Kindofcourse"]<br>a.btn<br>a.module-name<br>a:contains("Kind Of Courses") |
| button | Kind Of Courses - More | button | #J_Kindofcourse<br>button[aria-label="Kind Of Courses - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Kind Of Course View Kind Of Courses Import Kind Of Courses | menu | ul[role="menu"] |
| link-or-menu | Create Kind Of Course |  | a[href="#J_Kindofcourse/create"]<br>a.ellipsis_inline<br>a:contains("Create Kind Of Course") |
| link-or-menu | View Kind Of Courses |  | a[href="#J_Kindofcourse"]<br>a.ellipsis_inline<br>a:contains("View Kind Of Courses") |
| link-or-menu | Import Kind Of Courses |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Kindofcourse&return_module=J_Kindofcourse&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Kind Of Courses") |
| link-or-menu | Activities |  | a[aria-label="Activities"]<br>a[href="#M_Activities"]<br>a.btn<br>a.module-name<br>a:contains("Activities") |
| button | Activities - More | button | #M_Activities<br>button[aria-label="Activities - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Activities View Activities Import Syllabus | menu | ul[role="menu"] |
| link-or-menu | Create Activities |  | a[href="#M_Activities/create"]<br>a.ellipsis_inline<br>a:contains("Create Activities") |
| link-or-menu | View Activities |  | a[href="#M_Activities"]<br>a.ellipsis_inline<br>a:contains("View Activities") |
| link-or-menu | Import Syllabus |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Syllabus&query=true&report_module=M_Activities"]<br>a.ellipsis_inline<br>a:contains("Import Syllabus") |
| link-or-menu | Work permit |  | a[aria-label="Work permit"]<br>a[href="#J_Workpermit"]<br>a.btn<br>a.module-name<br>a:contains("Work permit") |
| button | Work permit - More | button | #J_Workpermit<br>button[aria-label="Work permit - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Work permit View Work permit | menu | ul[role="menu"] |
| link-or-menu | Create Work permit |  | a[href="#J_Workpermit/create"]<br>a.ellipsis_inline<br>a:contains("Create Work permit") |
| link-or-menu | View Work permit |  | a[href="#J_Workpermit"]<br>a.ellipsis_inline<br>a:contains("View Work permit") |
| link-or-menu | Gallery |  | a[aria-label="Gallery"]<br>a[href="#C_Gallery"]<br>a.btn<br>a.module-name<br>a:contains("Gallery") |
| button | Gallery - More | button | #C_Gallery<br>button[aria-label="Gallery - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gallery View Gallery | menu | ul[role="menu"] |
| link-or-menu | Create Gallery |  | a[href="#C_Gallery/create"]<br>a.ellipsis_inline<br>a:contains("Create Gallery") |
| link-or-menu | View Gallery |  | a[href="#C_Gallery"]<br>a.ellipsis_inline<br>a:contains("View Gallery") |
| link-or-menu | Gradebooks |  | a[aria-label="Gradebooks"]<br>a[href="#J_Gradebook"]<br>a.btn<br>a.module-name<br>a:contains("Gradebooks") |
| button | Gradebooks - More | button | #J_Gradebook<br>button[aria-label="Gradebooks - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | View Gradebooks | menu | ul[role="menu"] |
| link-or-menu | View Gradebooks |  | a[href="#J_Gradebook"]<br>a.ellipsis_inline<br>a:contains("View Gradebooks") |
| link-or-menu | Gradebook Settings |  | a[aria-label="Gradebook Settings"]<br>a[href="#J_GradebookConfig"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Settings") |
| button | Gradebook Settings - More | button | #J_GradebookConfig<br>button[aria-label="Gradebook Settings - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting View Gradebook Settings | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting |  | a[href="#J_GradebookConfig/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting") |
| link-or-menu | View Gradebook Settings |  | a[href="#J_GradebookConfig"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Settings") |
| link-or-menu | Gradebook Setting Groups |  | a[aria-label="Gradebook Setting Groups"]<br>a[href="#J_GradebookSettingGroup"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Setting Groups") |
| button | Gradebook Setting Groups - More | button | #J_GradebookSettingGroup<br>button[aria-label="Gradebook Setting Groups - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting Group View Gradebook Setting Groups | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting Group |  | a[href="#J_GradebookSettingGroup/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting Group") |
| link-or-menu | View Gradebook Setting Groups |  | a[href="#J_GradebookSettingGroup"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Setting Groups") |
| link-or-menu | Admin Hours |  | a[aria-label="Admin Hours"]<br>a[href="#bwc/index.php?module=C_Timesheet&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Admin Hours") |
| link-or-menu | Campaigns |  | a[aria-label="Campaigns"]<br>a[href="#bwc/index.php?module=Campaigns&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Campaigns") |
| button | Campaigns - More | button | #Campaigns<br>button[aria-label="Campaigns - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Campaign (Wizard) Create Campaign (Classic) View Campaigns View Newsletters Create Email Template View Email Temp | menu | ul[role="menu"] |
| link-or-menu | Create Campaign (Wizard) |  | a[href="#bwc/index.php?module=Campaigns&action=WizardHome&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Wizard)") |
| link-or-menu | Create Campaign (Classic) |  | a[href="#bwc/index.php?module=Campaigns&action=EditView&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Classic)") |
| link-or-menu | View Campaigns |  | a[href="#bwc/index.php?module=Campaigns&action=index&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Campaigns") |
| link-or-menu | View Newsletters |  | a[href="#bwc/index.php?module=Campaigns&action=newsletterlist&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Newsletters") |
| link-or-menu | Create Email Template |  | a[href="#bwc/index.php?module=EmailTemplates&action=EditView&return_module=EmailTemplates&return_action=DetailView"]<br>a.ellipsis_inline<br>a:contains("Create Email Template") |
| link-or-menu | View Email Templates |  | a[href="#bwc/index.php?module=EmailTemplates&action=index"]<br>a.ellipsis_inline<br>a:contains("View Email Templates") |
| link-or-menu | Set Up Email |  | a[href="#bwc/index.php?module=Campaigns&action=WizardEmailSetup&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Set Up Email") |
| link-or-menu | View Diagnostics |  | a[href="#bwc/index.php?module=Campaigns&action=CampaignDiagnostic&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Diagnostics") |
| link-or-menu | Create Lead Form |  | a[href="#bwc/index.php?module=Campaigns&action=WebToLeadCreation&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Lead Form") |
| link-or-menu | Calls |  | a[aria-label="Calls"]<br>a[href="#Calls"]<br>a.btn<br>a.module-name<br>a:contains("Calls") |
| button | Calls - More | button | #Calls<br>button[aria-label="Calls - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Log Call View Calls Import Calls Activities Report | menu | ul[role="menu"] |
| link-or-menu | Log Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Log Call") |

## 19. Loyalty | Scots CRM
- URL: https://stagingcrm.scotsenglish.edu.vn/index.php#J_Loyalty
- Headings: Loyalty (20 of 21+) Create Report Import | No dashboard configured.
- Elements captured: 628

| Kind | Label/Text | Role/Type | Candidate selectors |
|---|---|---|---|
| navigation | main module navigation | navigation | ul[role="navigation"]<br>ul[aria-label="main module navigation"]<br>ul.nav<br>ul.megamenu |
| link-or-menu | Home |  | a[aria-label="Home"]<br>a[href="#Home"]<br>a.cube<br>a.btn |
| button | Home - More | button | button[aria-label="Home - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Dashboard Activity Stream Manage Dashboards | menu | ul[role="menu"] |
| link-or-menu | Create Dashboard |  | a[href="#Home/create"]<br>a.ellipsis_inline<br>a:contains("Create Dashboard") |
| link-or-menu | Activity Stream |  | a[href="#activities"]<br>a.ellipsis_inline<br>a:contains("Activity Stream") |
| link-or-menu | Manage Dashboards |  | a[href="#Dashboards?moduleName=Home"]<br>a.ellipsis_inline<br>a:contains("Manage Dashboards") |
| link-or-menu | Calendar |  | a[aria-label="Calendar"]<br>a[href="#bwc/index.php?module=Calendar&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Calendar") |
| button | Calendar - More | button | #Calendar<br>button[aria-label="Calendar - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Meeting Schedule Call Create Task Today | menu | ul[role="menu"] |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Schedule Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Call") |
| link-or-menu | Create Task |  | a[href="#Tasks/create"]<br>a.ellipsis_inline<br>a:contains("Create Task") |
| link-or-menu | Today |  | a[href="#bwc/index.php?module=Calendar&action=index&view=day"]<br>a.ellipsis_inline<br>a:contains("Today") |
| link-or-menu | Targets |  | a[aria-label="Targets"]<br>a[href="#Prospects"]<br>a.btn<br>a.module-name<br>a:contains("Targets") |
| button | Targets - More | button | #Prospects<br>button[aria-label="Targets - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Target Create Target From vCard View Targets Import Targets | menu | ul[role="menu"] |
| link-or-menu | Create Target |  | a[href="#Prospects/create"]<br>a.ellipsis_inline<br>a:contains("Create Target") |
| link-or-menu | Create Target From vCard |  | a[href="#Prospects/vcard-import"]<br>a.ellipsis_inline<br>a:contains("Create Target From vCard") |
| link-or-menu | View Targets |  | a[href="#Prospects"]<br>a.ellipsis_inline<br>a:contains("View Targets") |
| link-or-menu | Import Targets |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Prospects&return_module=Prospects&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Targets") |
| link-or-menu | Leads |  | a[aria-label="Leads"]<br>a[href="#Leads"]<br>a.btn<br>a.module-name<br>a:contains("Leads") |
| button | Leads - More | button | #Leads<br>button[aria-label="Leads - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Lead View Leads View Lead Reports Import Leads | menu | ul[role="menu"] |
| link-or-menu | Create Lead |  | a[href="#Leads/create"]<br>a.ellipsis_inline<br>a:contains("Create Lead") |
| link-or-menu | View Leads |  | a[href="#Leads"]<br>a.ellipsis_inline<br>a:contains("View Leads") |
| link-or-menu | View Lead Reports |  | a[href="#Reports?filterModule=Leads"]<br>a.ellipsis_inline<br>a:contains("View Lead Reports") |
| link-or-menu | Import Leads |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Leads&return_module=Leads&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Leads") |
| link-or-menu | Students |  | a[aria-label="Students"]<br>a[href="#Contacts"]<br>a.btn<br>a.module-name<br>a:contains("Students") |
| button | Students - More | button | #Contacts<br>button[aria-label="Students - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Student View Students View Student Reports Import Students Send SMS | menu | ul[role="menu"] |
| link-or-menu | Create Student |  | a[href="#Contacts/create"]<br>a.ellipsis_inline<br>a:contains("Create Student") |
| link-or-menu | View Students |  | a[href="#Contacts"]<br>a.ellipsis_inline<br>a:contains("View Students") |
| link-or-menu | View Student Reports |  | a[href="#Reports?filterModule=Contacts"]<br>a.ellipsis_inline<br>a:contains("View Student Reports") |
| link-or-menu | Import Students |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Contacts&return_module=Contacts&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Students") |
| link-or-menu | Send SMS |  | a[href="#bwc/index.php?module=C_SMS&action=sendSMS"]<br>a.ellipsis_inline<br>a:contains("Send SMS") |
| link-or-menu | Sale Orders |  | a[aria-label="Sale Orders"]<br>a[href="#Quotes"]<br>a.btn<br>a.module-name<br>a:contains("Sale Orders") |
| button | Sale Orders - More | button | #Quotes<br>button[aria-label="Sale Orders - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Sale Order View Sale Orders View Sale Order Reports | menu | ul[role="menu"] |
| link-or-menu | Create Sale Order |  | a[href="#Quotes/create"]<br>a.ellipsis_inline<br>a:contains("Create Sale Order") |
| link-or-menu | View Sale Orders |  | a[href="#Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Orders") |
| link-or-menu | View Sale Order Reports |  | a[href="#Reports?filterModule=Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Order Reports") |
| link-or-menu | Classes |  | a[aria-label="Classes"]<br>a[href="#J_Class"]<br>a.btn<br>a.module-name<br>a:contains("Classes") |
| button | Classes - More | button | #J_Class<br>button[aria-label="Classes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Class View Classes View on Calendar Import Scheduler | menu | ul[role="menu"] |
| link-or-menu | Create Class |  | a[href="#J_Class/create"]<br>a.ellipsis_inline<br>a:contains("Create Class") |
| link-or-menu | View Classes |  | a[href="#J_Class"]<br>a.ellipsis_inline<br>a:contains("View Classes") |
| link-or-menu | View on Calendar |  | a[href="#bwc/index.php?module=Calendar&action=index&view=week"]<br>a.ellipsis_inline<br>a:contains("View on Calendar") |
| link-or-menu | Import Scheduler |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Meetings&return_module=Meetings&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Scheduler") |
| link-or-menu | Schedules |  | a[aria-label="Schedules"]<br>a[href="#Meetings"]<br>a.btn<br>a.module-name<br>a:contains("Schedules") |
| button | Schedules - More | button | #Meetings<br>button[aria-label="Schedules - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Placement Test Schedule Demo Schedule Meeting | menu | ul[role="menu"] |
| link-or-menu | Schedule Placement Test |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=PT"]<br>a.ellipsis_inline<br>a:contains("Schedule Placement Test") |
| link-or-menu | Schedule Demo |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=Demo"]<br>a.ellipsis_inline<br>a:contains("Schedule Demo") |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Reports |  | a[aria-label="Reports"]<br>a[href="#Reports"]<br>a.btn<br>a.module-name<br>a:contains("Reports") |
| button | Reports - More | button | #Reports<br>button[aria-label="Reports - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Report View Reports Report Schedules | menu | ul[role="menu"] |
| link-or-menu | Create Report |  | a[href="#bwc/index.php?module=Reports&report_module=&action=index&page=report&Create+Custom+Report=Create+Custom+Report"]<br>a.ellipsis_inline<br>a:contains("Create Report") |
| link-or-menu | View Reports |  | a[href="#Reports"]<br>a.ellipsis_inline<br>a:contains("View Reports") |
| link-or-menu | Report Schedules |  | a[href="#ReportSchedules"]<br>a.ellipsis_inline<br>a:contains("Report Schedules") |
| link-or-menu | Loyalty |  | a[aria-label="Loyalty"]<br>a[href="#J_Loyalty"]<br>a.btn<br>a.module-name<br>a:contains("Loyalty") |
| button | Loyalty - More | button | #J_Loyalty<br>button[aria-label="Loyalty - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Loyalty View Loyalty Import Loyalty | menu | ul[role="menu"] |
| link-or-menu | Create Loyalty |  | a[href="#J_Loyalty/create"]<br>a.ellipsis_inline<br>a:contains("Create Loyalty") |
| link-or-menu | View Loyalty |  | a[href="#J_Loyalty"]<br>a.ellipsis_inline<br>a:contains("View Loyalty") |
| link-or-menu | Import Loyalty |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Loyalty&return_module=J_Loyalty&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Loyalty") |
| link-or-menu | Teachers |  | a[aria-label="Teachers"]<br>a[href="#C_Teachers"]<br>a.btn<br>a.module-name<br>a:contains("Teachers") |
| button | Teachers - More | button | #C_Teachers<br>button[aria-label="Teachers - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Create TA View Teachers Import Teachers | menu | ul[role="menu"] |
| link-or-menu | Create Teacher |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=Teacher"]<br>a.ellipsis_inline<br>a:contains("Create Teacher") |
| link-or-menu | Create TA |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=TA"]<br>a.ellipsis_inline<br>a:contains("Create TA") |
| link-or-menu | View Teachers |  | a[href="#C_Teachers"]<br>a.ellipsis_inline<br>a:contains("View Teachers") |
| link-or-menu | Import Teachers |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Teachers&return_module=C_Teachers&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teachers") |
| link-or-menu | Approval Processes |  | a[aria-label="Approval Processes"]<br>a[href="#ApprovalProcesses"]<br>a.btn<br>a.module-name<br>a:contains("Approval Processes") |
| button | Approval Processes - More | button | #ApprovalProcesses<br>button[aria-label="Approval Processes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Approval Processes | menu | ul[role="menu"] |
| link-or-menu | Approval Processes |  | a[href="#ApprovalProcesses/layout/approvalList"]<br>a.ellipsis_inline<br>a:contains("Approval Processes") |
| link-or-menu | Accounts |  | a[aria-label="Accounts"]<br>a[href="#Accounts"]<br>a.btn<br>a.module-name<br>a:contains("Accounts") |
| button | Accounts - More | button | #Accounts<br>button[aria-label="Accounts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Account View Accounts View Account Reports Import Accounts | menu | ul[role="menu"] |
| link-or-menu | Create Account |  | a[href="#Accounts/create"]<br>a.ellipsis_inline<br>a:contains("Create Account") |
| link-or-menu | View Accounts |  | a[href="#Accounts"]<br>a.ellipsis_inline<br>a:contains("View Accounts") |
| link-or-menu | View Account Reports |  | a[href="#Reports?filterModule=Accounts"]<br>a.ellipsis_inline<br>a:contains("View Account Reports") |
| link-or-menu | Import Accounts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Accounts"]<br>a.ellipsis_inline<br>a:contains("Import Accounts") |
| link-or-menu | Rooms |  | a[aria-label="Rooms"]<br>a[href="#C_Rooms"]<br>a.btn<br>a.module-name<br>a:contains("Rooms") |
| button | Rooms - More | button | #C_Rooms<br>button[aria-label="Rooms - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Room View Rooms Import Rooms | menu | ul[role="menu"] |
| link-or-menu | Create Room |  | a[href="#C_Rooms/create"]<br>a.ellipsis_inline<br>a:contains("Create Room") |
| link-or-menu | View Rooms |  | a[href="#C_Rooms"]<br>a.ellipsis_inline<br>a:contains("View Rooms") |
| link-or-menu | Import Rooms |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Rooms&return_module=C_Rooms&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Rooms") |
| link-or-menu | Teacher Contracts |  | a[aria-label="Teacher Contracts"]<br>a[href="#J_Teachercontract"]<br>a.btn<br>a.module-name<br>a:contains("Teacher Contracts") |
| button | Teacher Contracts - More | button | #J_Teachercontract<br>button[aria-label="Teacher Contracts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Contract View Teacher Contracts Import Teacher Contracts | menu | ul[role="menu"] |
| link-or-menu | Create Teacher Contract |  | a[href="#J_Teachercontract/create"]<br>a.ellipsis_inline<br>a:contains("Create Teacher Contract") |
| link-or-menu | View Teacher Contracts |  | a[href="#J_Teachercontract"]<br>a.ellipsis_inline<br>a:contains("View Teacher Contracts") |
| link-or-menu | Import Teacher Contracts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Teachercontract&return_module=J_Teachercontract&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teacher Contracts") |
| link-or-menu | Kind Of Courses |  | a[aria-label="Kind Of Courses"]<br>a[href="#J_Kindofcourse"]<br>a.btn<br>a.module-name<br>a:contains("Kind Of Courses") |
| button | Kind Of Courses - More | button | #J_Kindofcourse<br>button[aria-label="Kind Of Courses - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Kind Of Course View Kind Of Courses Import Kind Of Courses | menu | ul[role="menu"] |
| link-or-menu | Create Kind Of Course |  | a[href="#J_Kindofcourse/create"]<br>a.ellipsis_inline<br>a:contains("Create Kind Of Course") |
| link-or-menu | View Kind Of Courses |  | a[href="#J_Kindofcourse"]<br>a.ellipsis_inline<br>a:contains("View Kind Of Courses") |
| link-or-menu | Import Kind Of Courses |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Kindofcourse&return_module=J_Kindofcourse&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Kind Of Courses") |
| link-or-menu | Activities |  | a[aria-label="Activities"]<br>a[href="#M_Activities"]<br>a.btn<br>a.module-name<br>a:contains("Activities") |
| button | Activities - More | button | #M_Activities<br>button[aria-label="Activities - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Activities View Activities Import Syllabus | menu | ul[role="menu"] |
| link-or-menu | Create Activities |  | a[href="#M_Activities/create"]<br>a.ellipsis_inline<br>a:contains("Create Activities") |
| link-or-menu | View Activities |  | a[href="#M_Activities"]<br>a.ellipsis_inline<br>a:contains("View Activities") |
| link-or-menu | Import Syllabus |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Syllabus&query=true&report_module=M_Activities"]<br>a.ellipsis_inline<br>a:contains("Import Syllabus") |
| link-or-menu | Work permit |  | a[aria-label="Work permit"]<br>a[href="#J_Workpermit"]<br>a.btn<br>a.module-name<br>a:contains("Work permit") |
| button | Work permit - More | button | #J_Workpermit<br>button[aria-label="Work permit - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Work permit View Work permit | menu | ul[role="menu"] |
| link-or-menu | Create Work permit |  | a[href="#J_Workpermit/create"]<br>a.ellipsis_inline<br>a:contains("Create Work permit") |
| link-or-menu | View Work permit |  | a[href="#J_Workpermit"]<br>a.ellipsis_inline<br>a:contains("View Work permit") |
| link-or-menu | Gallery |  | a[aria-label="Gallery"]<br>a[href="#C_Gallery"]<br>a.btn<br>a.module-name<br>a:contains("Gallery") |
| button | Gallery - More | button | #C_Gallery<br>button[aria-label="Gallery - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gallery View Gallery | menu | ul[role="menu"] |
| link-or-menu | Create Gallery |  | a[href="#C_Gallery/create"]<br>a.ellipsis_inline<br>a:contains("Create Gallery") |
| link-or-menu | View Gallery |  | a[href="#C_Gallery"]<br>a.ellipsis_inline<br>a:contains("View Gallery") |
| link-or-menu | Gradebooks |  | a[aria-label="Gradebooks"]<br>a[href="#J_Gradebook"]<br>a.btn<br>a.module-name<br>a:contains("Gradebooks") |
| button | Gradebooks - More | button | #J_Gradebook<br>button[aria-label="Gradebooks - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | View Gradebooks | menu | ul[role="menu"] |
| link-or-menu | View Gradebooks |  | a[href="#J_Gradebook"]<br>a.ellipsis_inline<br>a:contains("View Gradebooks") |
| link-or-menu | Gradebook Settings |  | a[aria-label="Gradebook Settings"]<br>a[href="#J_GradebookConfig"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Settings") |
| button | Gradebook Settings - More | button | #J_GradebookConfig<br>button[aria-label="Gradebook Settings - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting View Gradebook Settings | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting |  | a[href="#J_GradebookConfig/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting") |
| link-or-menu | View Gradebook Settings |  | a[href="#J_GradebookConfig"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Settings") |
| link-or-menu | Gradebook Setting Groups |  | a[aria-label="Gradebook Setting Groups"]<br>a[href="#J_GradebookSettingGroup"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Setting Groups") |
| button | Gradebook Setting Groups - More | button | #J_GradebookSettingGroup<br>button[aria-label="Gradebook Setting Groups - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting Group View Gradebook Setting Groups | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting Group |  | a[href="#J_GradebookSettingGroup/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting Group") |
| link-or-menu | View Gradebook Setting Groups |  | a[href="#J_GradebookSettingGroup"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Setting Groups") |
| link-or-menu | Admin Hours |  | a[aria-label="Admin Hours"]<br>a[href="#bwc/index.php?module=C_Timesheet&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Admin Hours") |
| link-or-menu | Campaigns |  | a[aria-label="Campaigns"]<br>a[href="#bwc/index.php?module=Campaigns&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Campaigns") |
| button | Campaigns - More | button | #Campaigns<br>button[aria-label="Campaigns - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Campaign (Wizard) Create Campaign (Classic) View Campaigns View Newsletters Create Email Template View Email Temp | menu | ul[role="menu"] |
| link-or-menu | Create Campaign (Wizard) |  | a[href="#bwc/index.php?module=Campaigns&action=WizardHome&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Wizard)") |
| link-or-menu | Create Campaign (Classic) |  | a[href="#bwc/index.php?module=Campaigns&action=EditView&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Classic)") |
| link-or-menu | View Campaigns |  | a[href="#bwc/index.php?module=Campaigns&action=index&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Campaigns") |
| link-or-menu | View Newsletters |  | a[href="#bwc/index.php?module=Campaigns&action=newsletterlist&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Newsletters") |
| link-or-menu | Create Email Template |  | a[href="#bwc/index.php?module=EmailTemplates&action=EditView&return_module=EmailTemplates&return_action=DetailView"]<br>a.ellipsis_inline<br>a:contains("Create Email Template") |
| link-or-menu | View Email Templates |  | a[href="#bwc/index.php?module=EmailTemplates&action=index"]<br>a.ellipsis_inline<br>a:contains("View Email Templates") |
| link-or-menu | Set Up Email |  | a[href="#bwc/index.php?module=Campaigns&action=WizardEmailSetup&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Set Up Email") |
| link-or-menu | View Diagnostics |  | a[href="#bwc/index.php?module=Campaigns&action=CampaignDiagnostic&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Diagnostics") |
| link-or-menu | Create Lead Form |  | a[href="#bwc/index.php?module=Campaigns&action=WebToLeadCreation&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Lead Form") |
| link-or-menu | Calls |  | a[aria-label="Calls"]<br>a[href="#Calls"]<br>a.btn<br>a.module-name<br>a:contains("Calls") |
| button | Calls - More | button | #Calls<br>button[aria-label="Calls - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Log Call View Calls Import Calls Activities Report | menu | ul[role="menu"] |
| link-or-menu | Log Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Log Call") |

## 20. Teachers | Scots CRM
- URL: https://stagingcrm.scotsenglish.edu.vn/index.php#C_Teachers
- Headings: Teachers (20 of 21+) Create Teacher View Teacher Report Import Teachers | No dashboard configured.
- Elements captured: 542

| Kind | Label/Text | Role/Type | Candidate selectors |
|---|---|---|---|
| navigation | main module navigation | navigation | ul[role="navigation"]<br>ul[aria-label="main module navigation"]<br>ul.nav<br>ul.megamenu |
| link-or-menu | Home |  | a[aria-label="Home"]<br>a[href="#Home"]<br>a.cube<br>a.btn |
| button | Home - More | button | button[aria-label="Home - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Dashboard Activity Stream Manage Dashboards | menu | ul[role="menu"] |
| link-or-menu | Create Dashboard |  | a[href="#Home/create"]<br>a.ellipsis_inline<br>a:contains("Create Dashboard") |
| link-or-menu | Activity Stream |  | a[href="#activities"]<br>a.ellipsis_inline<br>a:contains("Activity Stream") |
| link-or-menu | Manage Dashboards |  | a[href="#Dashboards?moduleName=Home"]<br>a.ellipsis_inline<br>a:contains("Manage Dashboards") |
| link-or-menu | Calendar |  | a[aria-label="Calendar"]<br>a[href="#bwc/index.php?module=Calendar&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Calendar") |
| button | Calendar - More | button | #Calendar<br>button[aria-label="Calendar - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Meeting Schedule Call Create Task Today | menu | ul[role="menu"] |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Schedule Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Call") |
| link-or-menu | Create Task |  | a[href="#Tasks/create"]<br>a.ellipsis_inline<br>a:contains("Create Task") |
| link-or-menu | Today |  | a[href="#bwc/index.php?module=Calendar&action=index&view=day"]<br>a.ellipsis_inline<br>a:contains("Today") |
| link-or-menu | Targets |  | a[aria-label="Targets"]<br>a[href="#Prospects"]<br>a.btn<br>a.module-name<br>a:contains("Targets") |
| button | Targets - More | button | #Prospects<br>button[aria-label="Targets - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Target Create Target From vCard View Targets Import Targets | menu | ul[role="menu"] |
| link-or-menu | Create Target |  | a[href="#Prospects/create"]<br>a.ellipsis_inline<br>a:contains("Create Target") |
| link-or-menu | Create Target From vCard |  | a[href="#Prospects/vcard-import"]<br>a.ellipsis_inline<br>a:contains("Create Target From vCard") |
| link-or-menu | View Targets |  | a[href="#Prospects"]<br>a.ellipsis_inline<br>a:contains("View Targets") |
| link-or-menu | Import Targets |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Prospects&return_module=Prospects&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Targets") |
| link-or-menu | Leads |  | a[aria-label="Leads"]<br>a[href="#Leads"]<br>a.btn<br>a.module-name<br>a:contains("Leads") |
| button | Leads - More | button | #Leads<br>button[aria-label="Leads - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Lead View Leads View Lead Reports Import Leads | menu | ul[role="menu"] |
| link-or-menu | Create Lead |  | a[href="#Leads/create"]<br>a.ellipsis_inline<br>a:contains("Create Lead") |
| link-or-menu | View Leads |  | a[href="#Leads"]<br>a.ellipsis_inline<br>a:contains("View Leads") |
| link-or-menu | View Lead Reports |  | a[href="#Reports?filterModule=Leads"]<br>a.ellipsis_inline<br>a:contains("View Lead Reports") |
| link-or-menu | Import Leads |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Leads&return_module=Leads&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Leads") |
| link-or-menu | Students |  | a[aria-label="Students"]<br>a[href="#Contacts"]<br>a.btn<br>a.module-name<br>a:contains("Students") |
| button | Students - More | button | #Contacts<br>button[aria-label="Students - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Student View Students View Student Reports Import Students Send SMS | menu | ul[role="menu"] |
| link-or-menu | Create Student |  | a[href="#Contacts/create"]<br>a.ellipsis_inline<br>a:contains("Create Student") |
| link-or-menu | View Students |  | a[href="#Contacts"]<br>a.ellipsis_inline<br>a:contains("View Students") |
| link-or-menu | View Student Reports |  | a[href="#Reports?filterModule=Contacts"]<br>a.ellipsis_inline<br>a:contains("View Student Reports") |
| link-or-menu | Import Students |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Contacts&return_module=Contacts&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Students") |
| link-or-menu | Send SMS |  | a[href="#bwc/index.php?module=C_SMS&action=sendSMS"]<br>a.ellipsis_inline<br>a:contains("Send SMS") |
| link-or-menu | Sale Orders |  | a[aria-label="Sale Orders"]<br>a[href="#Quotes"]<br>a.btn<br>a.module-name<br>a:contains("Sale Orders") |
| button | Sale Orders - More | button | #Quotes<br>button[aria-label="Sale Orders - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Sale Order View Sale Orders View Sale Order Reports | menu | ul[role="menu"] |
| link-or-menu | Create Sale Order |  | a[href="#Quotes/create"]<br>a.ellipsis_inline<br>a:contains("Create Sale Order") |
| link-or-menu | View Sale Orders |  | a[href="#Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Orders") |
| link-or-menu | View Sale Order Reports |  | a[href="#Reports?filterModule=Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Order Reports") |
| link-or-menu | Classes |  | a[aria-label="Classes"]<br>a[href="#J_Class"]<br>a.btn<br>a.module-name<br>a:contains("Classes") |
| button | Classes - More | button | #J_Class<br>button[aria-label="Classes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Class View Classes View on Calendar Import Scheduler | menu | ul[role="menu"] |
| link-or-menu | Create Class |  | a[href="#J_Class/create"]<br>a.ellipsis_inline<br>a:contains("Create Class") |
| link-or-menu | View Classes |  | a[href="#J_Class"]<br>a.ellipsis_inline<br>a:contains("View Classes") |
| link-or-menu | View on Calendar |  | a[href="#bwc/index.php?module=Calendar&action=index&view=week"]<br>a.ellipsis_inline<br>a:contains("View on Calendar") |
| link-or-menu | Import Scheduler |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Meetings&return_module=Meetings&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Scheduler") |
| link-or-menu | Schedules |  | a[aria-label="Schedules"]<br>a[href="#Meetings"]<br>a.btn<br>a.module-name<br>a:contains("Schedules") |
| button | Schedules - More | button | #Meetings<br>button[aria-label="Schedules - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Placement Test Schedule Demo Schedule Meeting | menu | ul[role="menu"] |
| link-or-menu | Schedule Placement Test |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=PT"]<br>a.ellipsis_inline<br>a:contains("Schedule Placement Test") |
| link-or-menu | Schedule Demo |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=Demo"]<br>a.ellipsis_inline<br>a:contains("Schedule Demo") |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Reports |  | a[aria-label="Reports"]<br>a[href="#Reports"]<br>a.btn<br>a.module-name<br>a:contains("Reports") |
| button | Reports - More | button | #Reports<br>button[aria-label="Reports - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Report View Reports Report Schedules | menu | ul[role="menu"] |
| link-or-menu | Create Report |  | a[href="#bwc/index.php?module=Reports&report_module=&action=index&page=report&Create+Custom+Report=Create+Custom+Report"]<br>a.ellipsis_inline<br>a:contains("Create Report") |
| link-or-menu | View Reports |  | a[href="#Reports"]<br>a.ellipsis_inline<br>a:contains("View Reports") |
| link-or-menu | Report Schedules |  | a[href="#ReportSchedules"]<br>a.ellipsis_inline<br>a:contains("Report Schedules") |
| link-or-menu | Loyalty |  | a[aria-label="Loyalty"]<br>a[href="#J_Loyalty"]<br>a.btn<br>a.module-name<br>a:contains("Loyalty") |
| button | Loyalty - More | button | #J_Loyalty<br>button[aria-label="Loyalty - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Loyalty View Loyalty Import Loyalty | menu | ul[role="menu"] |
| link-or-menu | Create Loyalty |  | a[href="#J_Loyalty/create"]<br>a.ellipsis_inline<br>a:contains("Create Loyalty") |
| link-or-menu | View Loyalty |  | a[href="#J_Loyalty"]<br>a.ellipsis_inline<br>a:contains("View Loyalty") |
| link-or-menu | Import Loyalty |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Loyalty&return_module=J_Loyalty&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Loyalty") |
| link-or-menu | Teachers |  | a[aria-label="Teachers"]<br>a[href="#C_Teachers"]<br>a.btn<br>a.module-name<br>a:contains("Teachers") |
| button | Teachers - More | button | #C_Teachers<br>button[aria-label="Teachers - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Create TA View Teachers Import Teachers | menu | ul[role="menu"] |
| link-or-menu | Create Teacher |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=Teacher"]<br>a.ellipsis_inline<br>a:contains("Create Teacher") |
| link-or-menu | Create TA |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=TA"]<br>a.ellipsis_inline<br>a:contains("Create TA") |
| link-or-menu | View Teachers |  | a[href="#C_Teachers"]<br>a.ellipsis_inline<br>a:contains("View Teachers") |
| link-or-menu | Import Teachers |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Teachers&return_module=C_Teachers&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teachers") |
| link-or-menu | Approval Processes |  | a[aria-label="Approval Processes"]<br>a[href="#ApprovalProcesses"]<br>a.btn<br>a.module-name<br>a:contains("Approval Processes") |
| button | Approval Processes - More | button | #ApprovalProcesses<br>button[aria-label="Approval Processes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Approval Processes | menu | ul[role="menu"] |
| link-or-menu | Approval Processes |  | a[href="#ApprovalProcesses/layout/approvalList"]<br>a.ellipsis_inline<br>a:contains("Approval Processes") |
| link-or-menu | Accounts |  | a[aria-label="Accounts"]<br>a[href="#Accounts"]<br>a.btn<br>a.module-name<br>a:contains("Accounts") |
| button | Accounts - More | button | #Accounts<br>button[aria-label="Accounts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Account View Accounts View Account Reports Import Accounts | menu | ul[role="menu"] |
| link-or-menu | Create Account |  | a[href="#Accounts/create"]<br>a.ellipsis_inline<br>a:contains("Create Account") |
| link-or-menu | View Accounts |  | a[href="#Accounts"]<br>a.ellipsis_inline<br>a:contains("View Accounts") |
| link-or-menu | View Account Reports |  | a[href="#Reports?filterModule=Accounts"]<br>a.ellipsis_inline<br>a:contains("View Account Reports") |
| link-or-menu | Import Accounts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Accounts"]<br>a.ellipsis_inline<br>a:contains("Import Accounts") |
| link-or-menu | Rooms |  | a[aria-label="Rooms"]<br>a[href="#C_Rooms"]<br>a.btn<br>a.module-name<br>a:contains("Rooms") |
| button | Rooms - More | button | #C_Rooms<br>button[aria-label="Rooms - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Room View Rooms Import Rooms | menu | ul[role="menu"] |
| link-or-menu | Create Room |  | a[href="#C_Rooms/create"]<br>a.ellipsis_inline<br>a:contains("Create Room") |
| link-or-menu | View Rooms |  | a[href="#C_Rooms"]<br>a.ellipsis_inline<br>a:contains("View Rooms") |
| link-or-menu | Import Rooms |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Rooms&return_module=C_Rooms&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Rooms") |
| link-or-menu | Teacher Contracts |  | a[aria-label="Teacher Contracts"]<br>a[href="#J_Teachercontract"]<br>a.btn<br>a.module-name<br>a:contains("Teacher Contracts") |
| button | Teacher Contracts - More | button | #J_Teachercontract<br>button[aria-label="Teacher Contracts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Contract View Teacher Contracts Import Teacher Contracts | menu | ul[role="menu"] |
| link-or-menu | Create Teacher Contract |  | a[href="#J_Teachercontract/create"]<br>a.ellipsis_inline<br>a:contains("Create Teacher Contract") |
| link-or-menu | View Teacher Contracts |  | a[href="#J_Teachercontract"]<br>a.ellipsis_inline<br>a:contains("View Teacher Contracts") |
| link-or-menu | Import Teacher Contracts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Teachercontract&return_module=J_Teachercontract&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teacher Contracts") |
| link-or-menu | Kind Of Courses |  | a[aria-label="Kind Of Courses"]<br>a[href="#J_Kindofcourse"]<br>a.btn<br>a.module-name<br>a:contains("Kind Of Courses") |
| button | Kind Of Courses - More | button | #J_Kindofcourse<br>button[aria-label="Kind Of Courses - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Kind Of Course View Kind Of Courses Import Kind Of Courses | menu | ul[role="menu"] |
| link-or-menu | Create Kind Of Course |  | a[href="#J_Kindofcourse/create"]<br>a.ellipsis_inline<br>a:contains("Create Kind Of Course") |
| link-or-menu | View Kind Of Courses |  | a[href="#J_Kindofcourse"]<br>a.ellipsis_inline<br>a:contains("View Kind Of Courses") |
| link-or-menu | Import Kind Of Courses |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Kindofcourse&return_module=J_Kindofcourse&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Kind Of Courses") |
| link-or-menu | Activities |  | a[aria-label="Activities"]<br>a[href="#M_Activities"]<br>a.btn<br>a.module-name<br>a:contains("Activities") |
| button | Activities - More | button | #M_Activities<br>button[aria-label="Activities - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Activities View Activities Import Syllabus | menu | ul[role="menu"] |
| link-or-menu | Create Activities |  | a[href="#M_Activities/create"]<br>a.ellipsis_inline<br>a:contains("Create Activities") |
| link-or-menu | View Activities |  | a[href="#M_Activities"]<br>a.ellipsis_inline<br>a:contains("View Activities") |
| link-or-menu | Import Syllabus |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Syllabus&query=true&report_module=M_Activities"]<br>a.ellipsis_inline<br>a:contains("Import Syllabus") |
| link-or-menu | Work permit |  | a[aria-label="Work permit"]<br>a[href="#J_Workpermit"]<br>a.btn<br>a.module-name<br>a:contains("Work permit") |
| button | Work permit - More | button | #J_Workpermit<br>button[aria-label="Work permit - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Work permit View Work permit | menu | ul[role="menu"] |
| link-or-menu | Create Work permit |  | a[href="#J_Workpermit/create"]<br>a.ellipsis_inline<br>a:contains("Create Work permit") |
| link-or-menu | View Work permit |  | a[href="#J_Workpermit"]<br>a.ellipsis_inline<br>a:contains("View Work permit") |
| link-or-menu | Gallery |  | a[aria-label="Gallery"]<br>a[href="#C_Gallery"]<br>a.btn<br>a.module-name<br>a:contains("Gallery") |
| button | Gallery - More | button | #C_Gallery<br>button[aria-label="Gallery - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gallery View Gallery | menu | ul[role="menu"] |
| link-or-menu | Create Gallery |  | a[href="#C_Gallery/create"]<br>a.ellipsis_inline<br>a:contains("Create Gallery") |
| link-or-menu | View Gallery |  | a[href="#C_Gallery"]<br>a.ellipsis_inline<br>a:contains("View Gallery") |
| link-or-menu | Gradebooks |  | a[aria-label="Gradebooks"]<br>a[href="#J_Gradebook"]<br>a.btn<br>a.module-name<br>a:contains("Gradebooks") |
| button | Gradebooks - More | button | #J_Gradebook<br>button[aria-label="Gradebooks - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | View Gradebooks | menu | ul[role="menu"] |
| link-or-menu | View Gradebooks |  | a[href="#J_Gradebook"]<br>a.ellipsis_inline<br>a:contains("View Gradebooks") |
| link-or-menu | Gradebook Settings |  | a[aria-label="Gradebook Settings"]<br>a[href="#J_GradebookConfig"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Settings") |
| button | Gradebook Settings - More | button | #J_GradebookConfig<br>button[aria-label="Gradebook Settings - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting View Gradebook Settings | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting |  | a[href="#J_GradebookConfig/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting") |
| link-or-menu | View Gradebook Settings |  | a[href="#J_GradebookConfig"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Settings") |
| link-or-menu | Gradebook Setting Groups |  | a[aria-label="Gradebook Setting Groups"]<br>a[href="#J_GradebookSettingGroup"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Setting Groups") |
| button | Gradebook Setting Groups - More | button | #J_GradebookSettingGroup<br>button[aria-label="Gradebook Setting Groups - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting Group View Gradebook Setting Groups | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting Group |  | a[href="#J_GradebookSettingGroup/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting Group") |
| link-or-menu | View Gradebook Setting Groups |  | a[href="#J_GradebookSettingGroup"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Setting Groups") |
| link-or-menu | Admin Hours |  | a[aria-label="Admin Hours"]<br>a[href="#bwc/index.php?module=C_Timesheet&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Admin Hours") |
| link-or-menu | Campaigns |  | a[aria-label="Campaigns"]<br>a[href="#bwc/index.php?module=Campaigns&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Campaigns") |
| button | Campaigns - More | button | #Campaigns<br>button[aria-label="Campaigns - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Campaign (Wizard) Create Campaign (Classic) View Campaigns View Newsletters Create Email Template View Email Temp | menu | ul[role="menu"] |
| link-or-menu | Create Campaign (Wizard) |  | a[href="#bwc/index.php?module=Campaigns&action=WizardHome&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Wizard)") |
| link-or-menu | Create Campaign (Classic) |  | a[href="#bwc/index.php?module=Campaigns&action=EditView&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Classic)") |
| link-or-menu | View Campaigns |  | a[href="#bwc/index.php?module=Campaigns&action=index&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Campaigns") |
| link-or-menu | View Newsletters |  | a[href="#bwc/index.php?module=Campaigns&action=newsletterlist&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Newsletters") |
| link-or-menu | Create Email Template |  | a[href="#bwc/index.php?module=EmailTemplates&action=EditView&return_module=EmailTemplates&return_action=DetailView"]<br>a.ellipsis_inline<br>a:contains("Create Email Template") |
| link-or-menu | View Email Templates |  | a[href="#bwc/index.php?module=EmailTemplates&action=index"]<br>a.ellipsis_inline<br>a:contains("View Email Templates") |
| link-or-menu | Set Up Email |  | a[href="#bwc/index.php?module=Campaigns&action=WizardEmailSetup&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Set Up Email") |
| link-or-menu | View Diagnostics |  | a[href="#bwc/index.php?module=Campaigns&action=CampaignDiagnostic&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Diagnostics") |
| link-or-menu | Create Lead Form |  | a[href="#bwc/index.php?module=Campaigns&action=WebToLeadCreation&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Lead Form") |
| link-or-menu | Calls |  | a[aria-label="Calls"]<br>a[href="#Calls"]<br>a.btn<br>a.module-name<br>a:contains("Calls") |
| button | Calls - More | button | #Calls<br>button[aria-label="Calls - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Log Call View Calls Import Calls Activities Report | menu | ul[role="menu"] |
| link-or-menu | Log Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Log Call") |

## 21. Teachers | Scots CRM
- URL: https://stagingcrm.scotsenglish.edu.vn/index.php#ApprovalProcesses
- Headings: Approval Processes
- Elements captured: 491

| Kind | Label/Text | Role/Type | Candidate selectors |
|---|---|---|---|
| navigation | main module navigation | navigation | ul[role="navigation"]<br>ul[aria-label="main module navigation"]<br>ul.nav<br>ul.megamenu |
| link-or-menu | Home |  | a[aria-label="Home"]<br>a[href="#Home"]<br>a.cube<br>a.btn |
| button | Home - More | button | button[aria-label="Home - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Dashboard Activity Stream Manage Dashboards | menu | ul[role="menu"] |
| link-or-menu | Create Dashboard |  | a[href="#Home/create"]<br>a.ellipsis_inline<br>a:contains("Create Dashboard") |
| link-or-menu | Activity Stream |  | a[href="#activities"]<br>a.ellipsis_inline<br>a:contains("Activity Stream") |
| link-or-menu | Manage Dashboards |  | a[href="#Dashboards?moduleName=Home"]<br>a.ellipsis_inline<br>a:contains("Manage Dashboards") |
| link-or-menu | Calendar |  | a[aria-label="Calendar"]<br>a[href="#bwc/index.php?module=Calendar&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Calendar") |
| button | Calendar - More | button | #Calendar<br>button[aria-label="Calendar - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Meeting Schedule Call Create Task Today | menu | ul[role="menu"] |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Schedule Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Call") |
| link-or-menu | Create Task |  | a[href="#Tasks/create"]<br>a.ellipsis_inline<br>a:contains("Create Task") |
| link-or-menu | Today |  | a[href="#bwc/index.php?module=Calendar&action=index&view=day"]<br>a.ellipsis_inline<br>a:contains("Today") |
| link-or-menu | Targets |  | a[aria-label="Targets"]<br>a[href="#Prospects"]<br>a.btn<br>a.module-name<br>a:contains("Targets") |
| button | Targets - More | button | #Prospects<br>button[aria-label="Targets - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Target Create Target From vCard View Targets Import Targets | menu | ul[role="menu"] |
| link-or-menu | Create Target |  | a[href="#Prospects/create"]<br>a.ellipsis_inline<br>a:contains("Create Target") |
| link-or-menu | Create Target From vCard |  | a[href="#Prospects/vcard-import"]<br>a.ellipsis_inline<br>a:contains("Create Target From vCard") |
| link-or-menu | View Targets |  | a[href="#Prospects"]<br>a.ellipsis_inline<br>a:contains("View Targets") |
| link-or-menu | Import Targets |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Prospects&return_module=Prospects&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Targets") |
| link-or-menu | Leads |  | a[aria-label="Leads"]<br>a[href="#Leads"]<br>a.btn<br>a.module-name<br>a:contains("Leads") |
| button | Leads - More | button | #Leads<br>button[aria-label="Leads - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Lead View Leads View Lead Reports Import Leads | menu | ul[role="menu"] |
| link-or-menu | Create Lead |  | a[href="#Leads/create"]<br>a.ellipsis_inline<br>a:contains("Create Lead") |
| link-or-menu | View Leads |  | a[href="#Leads"]<br>a.ellipsis_inline<br>a:contains("View Leads") |
| link-or-menu | View Lead Reports |  | a[href="#Reports?filterModule=Leads"]<br>a.ellipsis_inline<br>a:contains("View Lead Reports") |
| link-or-menu | Import Leads |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Leads&return_module=Leads&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Leads") |
| link-or-menu | Students |  | a[aria-label="Students"]<br>a[href="#Contacts"]<br>a.btn<br>a.module-name<br>a:contains("Students") |
| button | Students - More | button | #Contacts<br>button[aria-label="Students - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Student View Students View Student Reports Import Students Send SMS | menu | ul[role="menu"] |
| link-or-menu | Create Student |  | a[href="#Contacts/create"]<br>a.ellipsis_inline<br>a:contains("Create Student") |
| link-or-menu | View Students |  | a[href="#Contacts"]<br>a.ellipsis_inline<br>a:contains("View Students") |
| link-or-menu | View Student Reports |  | a[href="#Reports?filterModule=Contacts"]<br>a.ellipsis_inline<br>a:contains("View Student Reports") |
| link-or-menu | Import Students |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Contacts&return_module=Contacts&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Students") |
| link-or-menu | Send SMS |  | a[href="#bwc/index.php?module=C_SMS&action=sendSMS"]<br>a.ellipsis_inline<br>a:contains("Send SMS") |
| link-or-menu | Sale Orders |  | a[aria-label="Sale Orders"]<br>a[href="#Quotes"]<br>a.btn<br>a.module-name<br>a:contains("Sale Orders") |
| button | Sale Orders - More | button | #Quotes<br>button[aria-label="Sale Orders - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Sale Order View Sale Orders View Sale Order Reports | menu | ul[role="menu"] |
| link-or-menu | Create Sale Order |  | a[href="#Quotes/create"]<br>a.ellipsis_inline<br>a:contains("Create Sale Order") |
| link-or-menu | View Sale Orders |  | a[href="#Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Orders") |
| link-or-menu | View Sale Order Reports |  | a[href="#Reports?filterModule=Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Order Reports") |
| link-or-menu | Classes |  | a[aria-label="Classes"]<br>a[href="#J_Class"]<br>a.btn<br>a.module-name<br>a:contains("Classes") |
| button | Classes - More | button | #J_Class<br>button[aria-label="Classes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Class View Classes View on Calendar Import Scheduler | menu | ul[role="menu"] |
| link-or-menu | Create Class |  | a[href="#J_Class/create"]<br>a.ellipsis_inline<br>a:contains("Create Class") |
| link-or-menu | View Classes |  | a[href="#J_Class"]<br>a.ellipsis_inline<br>a:contains("View Classes") |
| link-or-menu | View on Calendar |  | a[href="#bwc/index.php?module=Calendar&action=index&view=week"]<br>a.ellipsis_inline<br>a:contains("View on Calendar") |
| link-or-menu | Import Scheduler |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Meetings&return_module=Meetings&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Scheduler") |
| link-or-menu | Schedules |  | a[aria-label="Schedules"]<br>a[href="#Meetings"]<br>a.btn<br>a.module-name<br>a:contains("Schedules") |
| button | Schedules - More | button | #Meetings<br>button[aria-label="Schedules - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Placement Test Schedule Demo Schedule Meeting | menu | ul[role="menu"] |
| link-or-menu | Schedule Placement Test |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=PT"]<br>a.ellipsis_inline<br>a:contains("Schedule Placement Test") |
| link-or-menu | Schedule Demo |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=Demo"]<br>a.ellipsis_inline<br>a:contains("Schedule Demo") |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Reports |  | a[aria-label="Reports"]<br>a[href="#Reports"]<br>a.btn<br>a.module-name<br>a:contains("Reports") |
| button | Reports - More | button | #Reports<br>button[aria-label="Reports - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Report View Reports Report Schedules | menu | ul[role="menu"] |
| link-or-menu | Create Report |  | a[href="#bwc/index.php?module=Reports&report_module=&action=index&page=report&Create+Custom+Report=Create+Custom+Report"]<br>a.ellipsis_inline<br>a:contains("Create Report") |
| link-or-menu | View Reports |  | a[href="#Reports"]<br>a.ellipsis_inline<br>a:contains("View Reports") |
| link-or-menu | Report Schedules |  | a[href="#ReportSchedules"]<br>a.ellipsis_inline<br>a:contains("Report Schedules") |
| link-or-menu | Loyalty |  | a[aria-label="Loyalty"]<br>a[href="#J_Loyalty"]<br>a.btn<br>a.module-name<br>a:contains("Loyalty") |
| button | Loyalty - More | button | #J_Loyalty<br>button[aria-label="Loyalty - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Loyalty View Loyalty Import Loyalty | menu | ul[role="menu"] |
| link-or-menu | Create Loyalty |  | a[href="#J_Loyalty/create"]<br>a.ellipsis_inline<br>a:contains("Create Loyalty") |
| link-or-menu | View Loyalty |  | a[href="#J_Loyalty"]<br>a.ellipsis_inline<br>a:contains("View Loyalty") |
| link-or-menu | Import Loyalty |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Loyalty&return_module=J_Loyalty&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Loyalty") |
| link-or-menu | Teachers |  | a[aria-label="Teachers"]<br>a[href="#C_Teachers"]<br>a.btn<br>a.module-name<br>a:contains("Teachers") |
| button | Teachers - More | button | #C_Teachers<br>button[aria-label="Teachers - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Create TA View Teachers Import Teachers | menu | ul[role="menu"] |
| link-or-menu | Create Teacher |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=Teacher"]<br>a.ellipsis_inline<br>a:contains("Create Teacher") |
| link-or-menu | Create TA |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=TA"]<br>a.ellipsis_inline<br>a:contains("Create TA") |
| link-or-menu | View Teachers |  | a[href="#C_Teachers"]<br>a.ellipsis_inline<br>a:contains("View Teachers") |
| link-or-menu | Import Teachers |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Teachers&return_module=C_Teachers&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teachers") |
| link-or-menu | Approval Processes |  | a[aria-label="Approval Processes"]<br>a[href="#ApprovalProcesses"]<br>a.btn<br>a.module-name<br>a:contains("Approval Processes") |
| button | Approval Processes - More | button | #ApprovalProcesses<br>button[aria-label="Approval Processes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Approval Processes | menu | ul[role="menu"] |
| link-or-menu | Approval Processes |  | a[href="#ApprovalProcesses/layout/approvalList"]<br>a.ellipsis_inline<br>a:contains("Approval Processes") |
| link-or-menu | Accounts |  | a[aria-label="Accounts"]<br>a[href="#Accounts"]<br>a.btn<br>a.module-name<br>a:contains("Accounts") |
| button | Accounts - More | button | #Accounts<br>button[aria-label="Accounts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Account View Accounts View Account Reports Import Accounts | menu | ul[role="menu"] |
| link-or-menu | Create Account |  | a[href="#Accounts/create"]<br>a.ellipsis_inline<br>a:contains("Create Account") |
| link-or-menu | View Accounts |  | a[href="#Accounts"]<br>a.ellipsis_inline<br>a:contains("View Accounts") |
| link-or-menu | View Account Reports |  | a[href="#Reports?filterModule=Accounts"]<br>a.ellipsis_inline<br>a:contains("View Account Reports") |
| link-or-menu | Import Accounts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Accounts"]<br>a.ellipsis_inline<br>a:contains("Import Accounts") |
| link-or-menu | Rooms |  | a[aria-label="Rooms"]<br>a[href="#C_Rooms"]<br>a.btn<br>a.module-name<br>a:contains("Rooms") |
| button | Rooms - More | button | #C_Rooms<br>button[aria-label="Rooms - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Room View Rooms Import Rooms | menu | ul[role="menu"] |
| link-or-menu | Create Room |  | a[href="#C_Rooms/create"]<br>a.ellipsis_inline<br>a:contains("Create Room") |
| link-or-menu | View Rooms |  | a[href="#C_Rooms"]<br>a.ellipsis_inline<br>a:contains("View Rooms") |
| link-or-menu | Import Rooms |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Rooms&return_module=C_Rooms&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Rooms") |
| link-or-menu | Teacher Contracts |  | a[aria-label="Teacher Contracts"]<br>a[href="#J_Teachercontract"]<br>a.btn<br>a.module-name<br>a:contains("Teacher Contracts") |
| button | Teacher Contracts - More | button | #J_Teachercontract<br>button[aria-label="Teacher Contracts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Contract View Teacher Contracts Import Teacher Contracts | menu | ul[role="menu"] |
| link-or-menu | Create Teacher Contract |  | a[href="#J_Teachercontract/create"]<br>a.ellipsis_inline<br>a:contains("Create Teacher Contract") |
| link-or-menu | View Teacher Contracts |  | a[href="#J_Teachercontract"]<br>a.ellipsis_inline<br>a:contains("View Teacher Contracts") |
| link-or-menu | Import Teacher Contracts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Teachercontract&return_module=J_Teachercontract&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teacher Contracts") |
| link-or-menu | Kind Of Courses |  | a[aria-label="Kind Of Courses"]<br>a[href="#J_Kindofcourse"]<br>a.btn<br>a.module-name<br>a:contains("Kind Of Courses") |
| button | Kind Of Courses - More | button | #J_Kindofcourse<br>button[aria-label="Kind Of Courses - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Kind Of Course View Kind Of Courses Import Kind Of Courses | menu | ul[role="menu"] |
| link-or-menu | Create Kind Of Course |  | a[href="#J_Kindofcourse/create"]<br>a.ellipsis_inline<br>a:contains("Create Kind Of Course") |
| link-or-menu | View Kind Of Courses |  | a[href="#J_Kindofcourse"]<br>a.ellipsis_inline<br>a:contains("View Kind Of Courses") |
| link-or-menu | Import Kind Of Courses |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Kindofcourse&return_module=J_Kindofcourse&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Kind Of Courses") |
| link-or-menu | Activities |  | a[aria-label="Activities"]<br>a[href="#M_Activities"]<br>a.btn<br>a.module-name<br>a:contains("Activities") |
| button | Activities - More | button | #M_Activities<br>button[aria-label="Activities - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Activities View Activities Import Syllabus | menu | ul[role="menu"] |
| link-or-menu | Create Activities |  | a[href="#M_Activities/create"]<br>a.ellipsis_inline<br>a:contains("Create Activities") |
| link-or-menu | View Activities |  | a[href="#M_Activities"]<br>a.ellipsis_inline<br>a:contains("View Activities") |
| link-or-menu | Import Syllabus |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Syllabus&query=true&report_module=M_Activities"]<br>a.ellipsis_inline<br>a:contains("Import Syllabus") |
| link-or-menu | Work permit |  | a[aria-label="Work permit"]<br>a[href="#J_Workpermit"]<br>a.btn<br>a.module-name<br>a:contains("Work permit") |
| button | Work permit - More | button | #J_Workpermit<br>button[aria-label="Work permit - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Work permit View Work permit | menu | ul[role="menu"] |
| link-or-menu | Create Work permit |  | a[href="#J_Workpermit/create"]<br>a.ellipsis_inline<br>a:contains("Create Work permit") |
| link-or-menu | View Work permit |  | a[href="#J_Workpermit"]<br>a.ellipsis_inline<br>a:contains("View Work permit") |
| link-or-menu | Gallery |  | a[aria-label="Gallery"]<br>a[href="#C_Gallery"]<br>a.btn<br>a.module-name<br>a:contains("Gallery") |
| button | Gallery - More | button | #C_Gallery<br>button[aria-label="Gallery - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gallery View Gallery | menu | ul[role="menu"] |
| link-or-menu | Create Gallery |  | a[href="#C_Gallery/create"]<br>a.ellipsis_inline<br>a:contains("Create Gallery") |
| link-or-menu | View Gallery |  | a[href="#C_Gallery"]<br>a.ellipsis_inline<br>a:contains("View Gallery") |
| link-or-menu | Gradebooks |  | a[aria-label="Gradebooks"]<br>a[href="#J_Gradebook"]<br>a.btn<br>a.module-name<br>a:contains("Gradebooks") |
| button | Gradebooks - More | button | #J_Gradebook<br>button[aria-label="Gradebooks - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | View Gradebooks | menu | ul[role="menu"] |
| link-or-menu | View Gradebooks |  | a[href="#J_Gradebook"]<br>a.ellipsis_inline<br>a:contains("View Gradebooks") |
| link-or-menu | Gradebook Settings |  | a[aria-label="Gradebook Settings"]<br>a[href="#J_GradebookConfig"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Settings") |
| button | Gradebook Settings - More | button | #J_GradebookConfig<br>button[aria-label="Gradebook Settings - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting View Gradebook Settings | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting |  | a[href="#J_GradebookConfig/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting") |
| link-or-menu | View Gradebook Settings |  | a[href="#J_GradebookConfig"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Settings") |
| link-or-menu | Gradebook Setting Groups |  | a[aria-label="Gradebook Setting Groups"]<br>a[href="#J_GradebookSettingGroup"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Setting Groups") |
| button | Gradebook Setting Groups - More | button | #J_GradebookSettingGroup<br>button[aria-label="Gradebook Setting Groups - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting Group View Gradebook Setting Groups | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting Group |  | a[href="#J_GradebookSettingGroup/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting Group") |
| link-or-menu | View Gradebook Setting Groups |  | a[href="#J_GradebookSettingGroup"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Setting Groups") |
| link-or-menu | Admin Hours |  | a[aria-label="Admin Hours"]<br>a[href="#bwc/index.php?module=C_Timesheet&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Admin Hours") |
| link-or-menu | Campaigns |  | a[aria-label="Campaigns"]<br>a[href="#bwc/index.php?module=Campaigns&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Campaigns") |
| button | Campaigns - More | button | #Campaigns<br>button[aria-label="Campaigns - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Campaign (Wizard) Create Campaign (Classic) View Campaigns View Newsletters Create Email Template View Email Temp | menu | ul[role="menu"] |
| link-or-menu | Create Campaign (Wizard) |  | a[href="#bwc/index.php?module=Campaigns&action=WizardHome&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Wizard)") |
| link-or-menu | Create Campaign (Classic) |  | a[href="#bwc/index.php?module=Campaigns&action=EditView&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Classic)") |
| link-or-menu | View Campaigns |  | a[href="#bwc/index.php?module=Campaigns&action=index&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Campaigns") |
| link-or-menu | View Newsletters |  | a[href="#bwc/index.php?module=Campaigns&action=newsletterlist&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Newsletters") |
| link-or-menu | Create Email Template |  | a[href="#bwc/index.php?module=EmailTemplates&action=EditView&return_module=EmailTemplates&return_action=DetailView"]<br>a.ellipsis_inline<br>a:contains("Create Email Template") |
| link-or-menu | View Email Templates |  | a[href="#bwc/index.php?module=EmailTemplates&action=index"]<br>a.ellipsis_inline<br>a:contains("View Email Templates") |
| link-or-menu | Set Up Email |  | a[href="#bwc/index.php?module=Campaigns&action=WizardEmailSetup&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Set Up Email") |
| link-or-menu | View Diagnostics |  | a[href="#bwc/index.php?module=Campaigns&action=CampaignDiagnostic&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Diagnostics") |
| link-or-menu | Create Lead Form |  | a[href="#bwc/index.php?module=Campaigns&action=WebToLeadCreation&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Lead Form") |
| link-or-menu | Calls |  | a[aria-label="Calls"]<br>a[href="#Calls"]<br>a.btn<br>a.module-name<br>a:contains("Calls") |
| button | Calls - More | button | #Calls<br>button[aria-label="Calls - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Log Call View Calls Import Calls Activities Report | menu | ul[role="menu"] |
| link-or-menu | Log Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Log Call") |

## 22. Teachers | Scots CRM
- URL: https://stagingcrm.scotsenglish.edu.vn/index.php#ApprovalProcesses/layout/approvalList
- Headings: Approval Processes
- Elements captured: 490

| Kind | Label/Text | Role/Type | Candidate selectors |
|---|---|---|---|
| navigation | main module navigation | navigation | ul[role="navigation"]<br>ul[aria-label="main module navigation"]<br>ul.nav<br>ul.megamenu |
| link-or-menu | Home |  | a[aria-label="Home"]<br>a[href="#Home"]<br>a.cube<br>a.btn |
| button | Home - More | button | button[aria-label="Home - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Dashboard Activity Stream Manage Dashboards | menu | ul[role="menu"] |
| link-or-menu | Create Dashboard |  | a[href="#Home/create"]<br>a.ellipsis_inline<br>a:contains("Create Dashboard") |
| link-or-menu | Activity Stream |  | a[href="#activities"]<br>a.ellipsis_inline<br>a:contains("Activity Stream") |
| link-or-menu | Manage Dashboards |  | a[href="#Dashboards?moduleName=Home"]<br>a.ellipsis_inline<br>a:contains("Manage Dashboards") |
| link-or-menu | Calendar |  | a[aria-label="Calendar"]<br>a[href="#bwc/index.php?module=Calendar&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Calendar") |
| button | Calendar - More | button | #Calendar<br>button[aria-label="Calendar - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Meeting Schedule Call Create Task Today | menu | ul[role="menu"] |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Schedule Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Call") |
| link-or-menu | Create Task |  | a[href="#Tasks/create"]<br>a.ellipsis_inline<br>a:contains("Create Task") |
| link-or-menu | Today |  | a[href="#bwc/index.php?module=Calendar&action=index&view=day"]<br>a.ellipsis_inline<br>a:contains("Today") |
| link-or-menu | Targets |  | a[aria-label="Targets"]<br>a[href="#Prospects"]<br>a.btn<br>a.module-name<br>a:contains("Targets") |
| button | Targets - More | button | #Prospects<br>button[aria-label="Targets - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Target Create Target From vCard View Targets Import Targets | menu | ul[role="menu"] |
| link-or-menu | Create Target |  | a[href="#Prospects/create"]<br>a.ellipsis_inline<br>a:contains("Create Target") |
| link-or-menu | Create Target From vCard |  | a[href="#Prospects/vcard-import"]<br>a.ellipsis_inline<br>a:contains("Create Target From vCard") |
| link-or-menu | View Targets |  | a[href="#Prospects"]<br>a.ellipsis_inline<br>a:contains("View Targets") |
| link-or-menu | Import Targets |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Prospects&return_module=Prospects&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Targets") |
| link-or-menu | Leads |  | a[aria-label="Leads"]<br>a[href="#Leads"]<br>a.btn<br>a.module-name<br>a:contains("Leads") |
| button | Leads - More | button | #Leads<br>button[aria-label="Leads - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Lead View Leads View Lead Reports Import Leads | menu | ul[role="menu"] |
| link-or-menu | Create Lead |  | a[href="#Leads/create"]<br>a.ellipsis_inline<br>a:contains("Create Lead") |
| link-or-menu | View Leads |  | a[href="#Leads"]<br>a.ellipsis_inline<br>a:contains("View Leads") |
| link-or-menu | View Lead Reports |  | a[href="#Reports?filterModule=Leads"]<br>a.ellipsis_inline<br>a:contains("View Lead Reports") |
| link-or-menu | Import Leads |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Leads&return_module=Leads&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Leads") |
| link-or-menu | Students |  | a[aria-label="Students"]<br>a[href="#Contacts"]<br>a.btn<br>a.module-name<br>a:contains("Students") |
| button | Students - More | button | #Contacts<br>button[aria-label="Students - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Student View Students View Student Reports Import Students Send SMS | menu | ul[role="menu"] |
| link-or-menu | Create Student |  | a[href="#Contacts/create"]<br>a.ellipsis_inline<br>a:contains("Create Student") |
| link-or-menu | View Students |  | a[href="#Contacts"]<br>a.ellipsis_inline<br>a:contains("View Students") |
| link-or-menu | View Student Reports |  | a[href="#Reports?filterModule=Contacts"]<br>a.ellipsis_inline<br>a:contains("View Student Reports") |
| link-or-menu | Import Students |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Contacts&return_module=Contacts&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Students") |
| link-or-menu | Send SMS |  | a[href="#bwc/index.php?module=C_SMS&action=sendSMS"]<br>a.ellipsis_inline<br>a:contains("Send SMS") |
| link-or-menu | Sale Orders |  | a[aria-label="Sale Orders"]<br>a[href="#Quotes"]<br>a.btn<br>a.module-name<br>a:contains("Sale Orders") |
| button | Sale Orders - More | button | #Quotes<br>button[aria-label="Sale Orders - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Sale Order View Sale Orders View Sale Order Reports | menu | ul[role="menu"] |
| link-or-menu | Create Sale Order |  | a[href="#Quotes/create"]<br>a.ellipsis_inline<br>a:contains("Create Sale Order") |
| link-or-menu | View Sale Orders |  | a[href="#Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Orders") |
| link-or-menu | View Sale Order Reports |  | a[href="#Reports?filterModule=Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Order Reports") |
| link-or-menu | Classes |  | a[aria-label="Classes"]<br>a[href="#J_Class"]<br>a.btn<br>a.module-name<br>a:contains("Classes") |
| button | Classes - More | button | #J_Class<br>button[aria-label="Classes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Class View Classes View on Calendar Import Scheduler | menu | ul[role="menu"] |
| link-or-menu | Create Class |  | a[href="#J_Class/create"]<br>a.ellipsis_inline<br>a:contains("Create Class") |
| link-or-menu | View Classes |  | a[href="#J_Class"]<br>a.ellipsis_inline<br>a:contains("View Classes") |
| link-or-menu | View on Calendar |  | a[href="#bwc/index.php?module=Calendar&action=index&view=week"]<br>a.ellipsis_inline<br>a:contains("View on Calendar") |
| link-or-menu | Import Scheduler |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Meetings&return_module=Meetings&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Scheduler") |
| link-or-menu | Schedules |  | a[aria-label="Schedules"]<br>a[href="#Meetings"]<br>a.btn<br>a.module-name<br>a:contains("Schedules") |
| button | Schedules - More | button | #Meetings<br>button[aria-label="Schedules - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Placement Test Schedule Demo Schedule Meeting | menu | ul[role="menu"] |
| link-or-menu | Schedule Placement Test |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=PT"]<br>a.ellipsis_inline<br>a:contains("Schedule Placement Test") |
| link-or-menu | Schedule Demo |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=Demo"]<br>a.ellipsis_inline<br>a:contains("Schedule Demo") |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Reports |  | a[aria-label="Reports"]<br>a[href="#Reports"]<br>a.btn<br>a.module-name<br>a:contains("Reports") |
| button | Reports - More | button | #Reports<br>button[aria-label="Reports - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Report View Reports Report Schedules | menu | ul[role="menu"] |
| link-or-menu | Create Report |  | a[href="#bwc/index.php?module=Reports&report_module=&action=index&page=report&Create+Custom+Report=Create+Custom+Report"]<br>a.ellipsis_inline<br>a:contains("Create Report") |
| link-or-menu | View Reports |  | a[href="#Reports"]<br>a.ellipsis_inline<br>a:contains("View Reports") |
| link-or-menu | Report Schedules |  | a[href="#ReportSchedules"]<br>a.ellipsis_inline<br>a:contains("Report Schedules") |
| link-or-menu | Loyalty |  | a[aria-label="Loyalty"]<br>a[href="#J_Loyalty"]<br>a.btn<br>a.module-name<br>a:contains("Loyalty") |
| button | Loyalty - More | button | #J_Loyalty<br>button[aria-label="Loyalty - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Loyalty View Loyalty Import Loyalty | menu | ul[role="menu"] |
| link-or-menu | Create Loyalty |  | a[href="#J_Loyalty/create"]<br>a.ellipsis_inline<br>a:contains("Create Loyalty") |
| link-or-menu | View Loyalty |  | a[href="#J_Loyalty"]<br>a.ellipsis_inline<br>a:contains("View Loyalty") |
| link-or-menu | Import Loyalty |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Loyalty&return_module=J_Loyalty&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Loyalty") |
| link-or-menu | Teachers |  | a[aria-label="Teachers"]<br>a[href="#C_Teachers"]<br>a.btn<br>a.module-name<br>a:contains("Teachers") |
| button | Teachers - More | button | #C_Teachers<br>button[aria-label="Teachers - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Create TA View Teachers Import Teachers | menu | ul[role="menu"] |
| link-or-menu | Create Teacher |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=Teacher"]<br>a.ellipsis_inline<br>a:contains("Create Teacher") |
| link-or-menu | Create TA |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=TA"]<br>a.ellipsis_inline<br>a:contains("Create TA") |
| link-or-menu | View Teachers |  | a[href="#C_Teachers"]<br>a.ellipsis_inline<br>a:contains("View Teachers") |
| link-or-menu | Import Teachers |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Teachers&return_module=C_Teachers&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teachers") |
| link-or-menu | Approval Processes |  | a[aria-label="Approval Processes"]<br>a[href="#ApprovalProcesses"]<br>a.btn<br>a.module-name<br>a:contains("Approval Processes") |
| button | Approval Processes - More | button | #ApprovalProcesses<br>button[aria-label="Approval Processes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Approval Processes | menu | ul[role="menu"] |
| link-or-menu | Approval Processes |  | a[href="#ApprovalProcesses/layout/approvalList"]<br>a.ellipsis_inline<br>a:contains("Approval Processes") |
| link-or-menu | Accounts |  | a[aria-label="Accounts"]<br>a[href="#Accounts"]<br>a.btn<br>a.module-name<br>a:contains("Accounts") |
| button | Accounts - More | button | #Accounts<br>button[aria-label="Accounts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Account View Accounts View Account Reports Import Accounts | menu | ul[role="menu"] |
| link-or-menu | Create Account |  | a[href="#Accounts/create"]<br>a.ellipsis_inline<br>a:contains("Create Account") |
| link-or-menu | View Accounts |  | a[href="#Accounts"]<br>a.ellipsis_inline<br>a:contains("View Accounts") |
| link-or-menu | View Account Reports |  | a[href="#Reports?filterModule=Accounts"]<br>a.ellipsis_inline<br>a:contains("View Account Reports") |
| link-or-menu | Import Accounts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Accounts"]<br>a.ellipsis_inline<br>a:contains("Import Accounts") |
| link-or-menu | Rooms |  | a[aria-label="Rooms"]<br>a[href="#C_Rooms"]<br>a.btn<br>a.module-name<br>a:contains("Rooms") |
| button | Rooms - More | button | #C_Rooms<br>button[aria-label="Rooms - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Room View Rooms Import Rooms | menu | ul[role="menu"] |
| link-or-menu | Create Room |  | a[href="#C_Rooms/create"]<br>a.ellipsis_inline<br>a:contains("Create Room") |
| link-or-menu | View Rooms |  | a[href="#C_Rooms"]<br>a.ellipsis_inline<br>a:contains("View Rooms") |
| link-or-menu | Import Rooms |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Rooms&return_module=C_Rooms&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Rooms") |
| link-or-menu | Teacher Contracts |  | a[aria-label="Teacher Contracts"]<br>a[href="#J_Teachercontract"]<br>a.btn<br>a.module-name<br>a:contains("Teacher Contracts") |
| button | Teacher Contracts - More | button | #J_Teachercontract<br>button[aria-label="Teacher Contracts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Contract View Teacher Contracts Import Teacher Contracts | menu | ul[role="menu"] |
| link-or-menu | Create Teacher Contract |  | a[href="#J_Teachercontract/create"]<br>a.ellipsis_inline<br>a:contains("Create Teacher Contract") |
| link-or-menu | View Teacher Contracts |  | a[href="#J_Teachercontract"]<br>a.ellipsis_inline<br>a:contains("View Teacher Contracts") |
| link-or-menu | Import Teacher Contracts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Teachercontract&return_module=J_Teachercontract&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teacher Contracts") |
| link-or-menu | Kind Of Courses |  | a[aria-label="Kind Of Courses"]<br>a[href="#J_Kindofcourse"]<br>a.btn<br>a.module-name<br>a:contains("Kind Of Courses") |
| button | Kind Of Courses - More | button | #J_Kindofcourse<br>button[aria-label="Kind Of Courses - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Kind Of Course View Kind Of Courses Import Kind Of Courses | menu | ul[role="menu"] |
| link-or-menu | Create Kind Of Course |  | a[href="#J_Kindofcourse/create"]<br>a.ellipsis_inline<br>a:contains("Create Kind Of Course") |
| link-or-menu | View Kind Of Courses |  | a[href="#J_Kindofcourse"]<br>a.ellipsis_inline<br>a:contains("View Kind Of Courses") |
| link-or-menu | Import Kind Of Courses |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Kindofcourse&return_module=J_Kindofcourse&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Kind Of Courses") |
| link-or-menu | Activities |  | a[aria-label="Activities"]<br>a[href="#M_Activities"]<br>a.btn<br>a.module-name<br>a:contains("Activities") |
| button | Activities - More | button | #M_Activities<br>button[aria-label="Activities - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Activities View Activities Import Syllabus | menu | ul[role="menu"] |
| link-or-menu | Create Activities |  | a[href="#M_Activities/create"]<br>a.ellipsis_inline<br>a:contains("Create Activities") |
| link-or-menu | View Activities |  | a[href="#M_Activities"]<br>a.ellipsis_inline<br>a:contains("View Activities") |
| link-or-menu | Import Syllabus |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Syllabus&query=true&report_module=M_Activities"]<br>a.ellipsis_inline<br>a:contains("Import Syllabus") |
| link-or-menu | Work permit |  | a[aria-label="Work permit"]<br>a[href="#J_Workpermit"]<br>a.btn<br>a.module-name<br>a:contains("Work permit") |
| button | Work permit - More | button | #J_Workpermit<br>button[aria-label="Work permit - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Work permit View Work permit | menu | ul[role="menu"] |
| link-or-menu | Create Work permit |  | a[href="#J_Workpermit/create"]<br>a.ellipsis_inline<br>a:contains("Create Work permit") |
| link-or-menu | View Work permit |  | a[href="#J_Workpermit"]<br>a.ellipsis_inline<br>a:contains("View Work permit") |
| link-or-menu | Gallery |  | a[aria-label="Gallery"]<br>a[href="#C_Gallery"]<br>a.btn<br>a.module-name<br>a:contains("Gallery") |
| button | Gallery - More | button | #C_Gallery<br>button[aria-label="Gallery - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gallery View Gallery | menu | ul[role="menu"] |
| link-or-menu | Create Gallery |  | a[href="#C_Gallery/create"]<br>a.ellipsis_inline<br>a:contains("Create Gallery") |
| link-or-menu | View Gallery |  | a[href="#C_Gallery"]<br>a.ellipsis_inline<br>a:contains("View Gallery") |
| link-or-menu | Gradebooks |  | a[aria-label="Gradebooks"]<br>a[href="#J_Gradebook"]<br>a.btn<br>a.module-name<br>a:contains("Gradebooks") |
| button | Gradebooks - More | button | #J_Gradebook<br>button[aria-label="Gradebooks - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | View Gradebooks | menu | ul[role="menu"] |
| link-or-menu | View Gradebooks |  | a[href="#J_Gradebook"]<br>a.ellipsis_inline<br>a:contains("View Gradebooks") |
| link-or-menu | Gradebook Settings |  | a[aria-label="Gradebook Settings"]<br>a[href="#J_GradebookConfig"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Settings") |
| button | Gradebook Settings - More | button | #J_GradebookConfig<br>button[aria-label="Gradebook Settings - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting View Gradebook Settings | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting |  | a[href="#J_GradebookConfig/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting") |
| link-or-menu | View Gradebook Settings |  | a[href="#J_GradebookConfig"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Settings") |
| link-or-menu | Gradebook Setting Groups |  | a[aria-label="Gradebook Setting Groups"]<br>a[href="#J_GradebookSettingGroup"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Setting Groups") |
| button | Gradebook Setting Groups - More | button | #J_GradebookSettingGroup<br>button[aria-label="Gradebook Setting Groups - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting Group View Gradebook Setting Groups | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting Group |  | a[href="#J_GradebookSettingGroup/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting Group") |
| link-or-menu | View Gradebook Setting Groups |  | a[href="#J_GradebookSettingGroup"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Setting Groups") |
| link-or-menu | Admin Hours |  | a[aria-label="Admin Hours"]<br>a[href="#bwc/index.php?module=C_Timesheet&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Admin Hours") |
| link-or-menu | Campaigns |  | a[aria-label="Campaigns"]<br>a[href="#bwc/index.php?module=Campaigns&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Campaigns") |
| button | Campaigns - More | button | #Campaigns<br>button[aria-label="Campaigns - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Campaign (Wizard) Create Campaign (Classic) View Campaigns View Newsletters Create Email Template View Email Temp | menu | ul[role="menu"] |
| link-or-menu | Create Campaign (Wizard) |  | a[href="#bwc/index.php?module=Campaigns&action=WizardHome&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Wizard)") |
| link-or-menu | Create Campaign (Classic) |  | a[href="#bwc/index.php?module=Campaigns&action=EditView&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Classic)") |
| link-or-menu | View Campaigns |  | a[href="#bwc/index.php?module=Campaigns&action=index&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Campaigns") |
| link-or-menu | View Newsletters |  | a[href="#bwc/index.php?module=Campaigns&action=newsletterlist&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Newsletters") |
| link-or-menu | Create Email Template |  | a[href="#bwc/index.php?module=EmailTemplates&action=EditView&return_module=EmailTemplates&return_action=DetailView"]<br>a.ellipsis_inline<br>a:contains("Create Email Template") |
| link-or-menu | View Email Templates |  | a[href="#bwc/index.php?module=EmailTemplates&action=index"]<br>a.ellipsis_inline<br>a:contains("View Email Templates") |
| link-or-menu | Set Up Email |  | a[href="#bwc/index.php?module=Campaigns&action=WizardEmailSetup&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Set Up Email") |
| link-or-menu | View Diagnostics |  | a[href="#bwc/index.php?module=Campaigns&action=CampaignDiagnostic&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Diagnostics") |
| link-or-menu | Create Lead Form |  | a[href="#bwc/index.php?module=Campaigns&action=WebToLeadCreation&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Lead Form") |
| link-or-menu | Calls |  | a[aria-label="Calls"]<br>a[href="#Calls"]<br>a.btn<br>a.module-name<br>a:contains("Calls") |
| button | Calls - More | button | #Calls<br>button[aria-label="Calls - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Log Call View Calls Import Calls Activities Report | menu | ul[role="menu"] |
| link-or-menu | Log Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Log Call") |

## 23. Accounts | Scots CRM
- URL: https://stagingcrm.scotsenglish.edu.vn/index.php#Accounts
- Headings: Accounts (17) Create Report Import | Accounts List Dashboard Manage Dashboards Loading... Create Cancel Delete Save Cancel Save
- Elements captured: 600

| Kind | Label/Text | Role/Type | Candidate selectors |
|---|---|---|---|
| navigation | main module navigation | navigation | ul[role="navigation"]<br>ul[aria-label="main module navigation"]<br>ul.nav<br>ul.megamenu |
| link-or-menu | Home |  | a[aria-label="Home"]<br>a[href="#Home"]<br>a.cube<br>a.btn |
| button | Home - More | button | button[aria-label="Home - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Dashboard Activity Stream Manage Dashboards | menu | ul[role="menu"] |
| link-or-menu | Create Dashboard |  | a[href="#Home/create"]<br>a.ellipsis_inline<br>a:contains("Create Dashboard") |
| link-or-menu | Activity Stream |  | a[href="#activities"]<br>a.ellipsis_inline<br>a:contains("Activity Stream") |
| link-or-menu | Manage Dashboards |  | a[href="#Dashboards?moduleName=Home"]<br>a.ellipsis_inline<br>a:contains("Manage Dashboards") |
| link-or-menu | Calendar |  | a[aria-label="Calendar"]<br>a[href="#bwc/index.php?module=Calendar&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Calendar") |
| button | Calendar - More | button | #Calendar<br>button[aria-label="Calendar - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Meeting Schedule Call Create Task Today | menu | ul[role="menu"] |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Schedule Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Call") |
| link-or-menu | Create Task |  | a[href="#Tasks/create"]<br>a.ellipsis_inline<br>a:contains("Create Task") |
| link-or-menu | Today |  | a[href="#bwc/index.php?module=Calendar&action=index&view=day"]<br>a.ellipsis_inline<br>a:contains("Today") |
| link-or-menu | Targets |  | a[aria-label="Targets"]<br>a[href="#Prospects"]<br>a.btn<br>a.module-name<br>a:contains("Targets") |
| button | Targets - More | button | #Prospects<br>button[aria-label="Targets - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Target Create Target From vCard View Targets Import Targets | menu | ul[role="menu"] |
| link-or-menu | Create Target |  | a[href="#Prospects/create"]<br>a.ellipsis_inline<br>a:contains("Create Target") |
| link-or-menu | Create Target From vCard |  | a[href="#Prospects/vcard-import"]<br>a.ellipsis_inline<br>a:contains("Create Target From vCard") |
| link-or-menu | View Targets |  | a[href="#Prospects"]<br>a.ellipsis_inline<br>a:contains("View Targets") |
| link-or-menu | Import Targets |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Prospects&return_module=Prospects&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Targets") |
| link-or-menu | Leads |  | a[aria-label="Leads"]<br>a[href="#Leads"]<br>a.btn<br>a.module-name<br>a:contains("Leads") |
| button | Leads - More | button | #Leads<br>button[aria-label="Leads - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Lead View Leads View Lead Reports Import Leads | menu | ul[role="menu"] |
| link-or-menu | Create Lead |  | a[href="#Leads/create"]<br>a.ellipsis_inline<br>a:contains("Create Lead") |
| link-or-menu | View Leads |  | a[href="#Leads"]<br>a.ellipsis_inline<br>a:contains("View Leads") |
| link-or-menu | View Lead Reports |  | a[href="#Reports?filterModule=Leads"]<br>a.ellipsis_inline<br>a:contains("View Lead Reports") |
| link-or-menu | Import Leads |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Leads&return_module=Leads&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Leads") |
| link-or-menu | Students |  | a[aria-label="Students"]<br>a[href="#Contacts"]<br>a.btn<br>a.module-name<br>a:contains("Students") |
| button | Students - More | button | #Contacts<br>button[aria-label="Students - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Student View Students View Student Reports Import Students Send SMS | menu | ul[role="menu"] |
| link-or-menu | Create Student |  | a[href="#Contacts/create"]<br>a.ellipsis_inline<br>a:contains("Create Student") |
| link-or-menu | View Students |  | a[href="#Contacts"]<br>a.ellipsis_inline<br>a:contains("View Students") |
| link-or-menu | View Student Reports |  | a[href="#Reports?filterModule=Contacts"]<br>a.ellipsis_inline<br>a:contains("View Student Reports") |
| link-or-menu | Import Students |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Contacts&return_module=Contacts&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Students") |
| link-or-menu | Send SMS |  | a[href="#bwc/index.php?module=C_SMS&action=sendSMS"]<br>a.ellipsis_inline<br>a:contains("Send SMS") |
| link-or-menu | Sale Orders |  | a[aria-label="Sale Orders"]<br>a[href="#Quotes"]<br>a.btn<br>a.module-name<br>a:contains("Sale Orders") |
| button | Sale Orders - More | button | #Quotes<br>button[aria-label="Sale Orders - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Sale Order View Sale Orders View Sale Order Reports | menu | ul[role="menu"] |
| link-or-menu | Create Sale Order |  | a[href="#Quotes/create"]<br>a.ellipsis_inline<br>a:contains("Create Sale Order") |
| link-or-menu | View Sale Orders |  | a[href="#Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Orders") |
| link-or-menu | View Sale Order Reports |  | a[href="#Reports?filterModule=Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Order Reports") |
| link-or-menu | Classes |  | a[aria-label="Classes"]<br>a[href="#J_Class"]<br>a.btn<br>a.module-name<br>a:contains("Classes") |
| button | Classes - More | button | #J_Class<br>button[aria-label="Classes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Class View Classes View on Calendar Import Scheduler | menu | ul[role="menu"] |
| link-or-menu | Create Class |  | a[href="#J_Class/create"]<br>a.ellipsis_inline<br>a:contains("Create Class") |
| link-or-menu | View Classes |  | a[href="#J_Class"]<br>a.ellipsis_inline<br>a:contains("View Classes") |
| link-or-menu | View on Calendar |  | a[href="#bwc/index.php?module=Calendar&action=index&view=week"]<br>a.ellipsis_inline<br>a:contains("View on Calendar") |
| link-or-menu | Import Scheduler |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Meetings&return_module=Meetings&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Scheduler") |
| link-or-menu | Schedules |  | a[aria-label="Schedules"]<br>a[href="#Meetings"]<br>a.btn<br>a.module-name<br>a:contains("Schedules") |
| button | Schedules - More | button | #Meetings<br>button[aria-label="Schedules - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Placement Test Schedule Demo Schedule Meeting | menu | ul[role="menu"] |
| link-or-menu | Schedule Placement Test |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=PT"]<br>a.ellipsis_inline<br>a:contains("Schedule Placement Test") |
| link-or-menu | Schedule Demo |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=Demo"]<br>a.ellipsis_inline<br>a:contains("Schedule Demo") |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Reports |  | a[aria-label="Reports"]<br>a[href="#Reports"]<br>a.btn<br>a.module-name<br>a:contains("Reports") |
| button | Reports - More | button | #Reports<br>button[aria-label="Reports - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Report View Reports Report Schedules | menu | ul[role="menu"] |
| link-or-menu | Create Report |  | a[href="#bwc/index.php?module=Reports&report_module=&action=index&page=report&Create+Custom+Report=Create+Custom+Report"]<br>a.ellipsis_inline<br>a:contains("Create Report") |
| link-or-menu | View Reports |  | a[href="#Reports"]<br>a.ellipsis_inline<br>a:contains("View Reports") |
| link-or-menu | Report Schedules |  | a[href="#ReportSchedules"]<br>a.ellipsis_inline<br>a:contains("Report Schedules") |
| link-or-menu | Loyalty |  | a[aria-label="Loyalty"]<br>a[href="#J_Loyalty"]<br>a.btn<br>a.module-name<br>a:contains("Loyalty") |
| button | Loyalty - More | button | #J_Loyalty<br>button[aria-label="Loyalty - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Loyalty View Loyalty Import Loyalty | menu | ul[role="menu"] |
| link-or-menu | Create Loyalty |  | a[href="#J_Loyalty/create"]<br>a.ellipsis_inline<br>a:contains("Create Loyalty") |
| link-or-menu | View Loyalty |  | a[href="#J_Loyalty"]<br>a.ellipsis_inline<br>a:contains("View Loyalty") |
| link-or-menu | Import Loyalty |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Loyalty&return_module=J_Loyalty&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Loyalty") |
| link-or-menu | Teachers |  | a[aria-label="Teachers"]<br>a[href="#C_Teachers"]<br>a.btn<br>a.module-name<br>a:contains("Teachers") |
| button | Teachers - More | button | #C_Teachers<br>button[aria-label="Teachers - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Create TA View Teachers Import Teachers | menu | ul[role="menu"] |
| link-or-menu | Create Teacher |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=Teacher"]<br>a.ellipsis_inline<br>a:contains("Create Teacher") |
| link-or-menu | Create TA |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=TA"]<br>a.ellipsis_inline<br>a:contains("Create TA") |
| link-or-menu | View Teachers |  | a[href="#C_Teachers"]<br>a.ellipsis_inline<br>a:contains("View Teachers") |
| link-or-menu | Import Teachers |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Teachers&return_module=C_Teachers&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teachers") |
| link-or-menu | Approval Processes |  | a[aria-label="Approval Processes"]<br>a[href="#ApprovalProcesses"]<br>a.btn<br>a.module-name<br>a:contains("Approval Processes") |
| button | Approval Processes - More | button | #ApprovalProcesses<br>button[aria-label="Approval Processes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Approval Processes | menu | ul[role="menu"] |
| link-or-menu | Approval Processes |  | a[href="#ApprovalProcesses/layout/approvalList"]<br>a.ellipsis_inline<br>a:contains("Approval Processes") |
| link-or-menu | Accounts |  | a[aria-label="Accounts"]<br>a[href="#Accounts"]<br>a.btn<br>a.module-name<br>a:contains("Accounts") |
| button | Accounts - More | button | #Accounts<br>button[aria-label="Accounts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Account View Accounts View Account Reports Import Accounts | menu | ul[role="menu"] |
| link-or-menu | Create Account |  | a[href="#Accounts/create"]<br>a.ellipsis_inline<br>a:contains("Create Account") |
| link-or-menu | View Accounts |  | a[href="#Accounts"]<br>a.ellipsis_inline<br>a:contains("View Accounts") |
| link-or-menu | View Account Reports |  | a[href="#Reports?filterModule=Accounts"]<br>a.ellipsis_inline<br>a:contains("View Account Reports") |
| link-or-menu | Import Accounts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Accounts"]<br>a.ellipsis_inline<br>a:contains("Import Accounts") |
| link-or-menu | Rooms |  | a[aria-label="Rooms"]<br>a[href="#C_Rooms"]<br>a.btn<br>a.module-name<br>a:contains("Rooms") |
| button | Rooms - More | button | #C_Rooms<br>button[aria-label="Rooms - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Room View Rooms Import Rooms | menu | ul[role="menu"] |
| link-or-menu | Create Room |  | a[href="#C_Rooms/create"]<br>a.ellipsis_inline<br>a:contains("Create Room") |
| link-or-menu | View Rooms |  | a[href="#C_Rooms"]<br>a.ellipsis_inline<br>a:contains("View Rooms") |
| link-or-menu | Import Rooms |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Rooms&return_module=C_Rooms&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Rooms") |
| link-or-menu | Teacher Contracts |  | a[aria-label="Teacher Contracts"]<br>a[href="#J_Teachercontract"]<br>a.btn<br>a.module-name<br>a:contains("Teacher Contracts") |
| button | Teacher Contracts - More | button | #J_Teachercontract<br>button[aria-label="Teacher Contracts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Contract View Teacher Contracts Import Teacher Contracts | menu | ul[role="menu"] |
| link-or-menu | Create Teacher Contract |  | a[href="#J_Teachercontract/create"]<br>a.ellipsis_inline<br>a:contains("Create Teacher Contract") |
| link-or-menu | View Teacher Contracts |  | a[href="#J_Teachercontract"]<br>a.ellipsis_inline<br>a:contains("View Teacher Contracts") |
| link-or-menu | Import Teacher Contracts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Teachercontract&return_module=J_Teachercontract&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teacher Contracts") |
| link-or-menu | Kind Of Courses |  | a[aria-label="Kind Of Courses"]<br>a[href="#J_Kindofcourse"]<br>a.btn<br>a.module-name<br>a:contains("Kind Of Courses") |
| button | Kind Of Courses - More | button | #J_Kindofcourse<br>button[aria-label="Kind Of Courses - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Kind Of Course View Kind Of Courses Import Kind Of Courses | menu | ul[role="menu"] |
| link-or-menu | Create Kind Of Course |  | a[href="#J_Kindofcourse/create"]<br>a.ellipsis_inline<br>a:contains("Create Kind Of Course") |
| link-or-menu | View Kind Of Courses |  | a[href="#J_Kindofcourse"]<br>a.ellipsis_inline<br>a:contains("View Kind Of Courses") |
| link-or-menu | Import Kind Of Courses |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Kindofcourse&return_module=J_Kindofcourse&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Kind Of Courses") |
| link-or-menu | Activities |  | a[aria-label="Activities"]<br>a[href="#M_Activities"]<br>a.btn<br>a.module-name<br>a:contains("Activities") |
| button | Activities - More | button | #M_Activities<br>button[aria-label="Activities - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Activities View Activities Import Syllabus | menu | ul[role="menu"] |
| link-or-menu | Create Activities |  | a[href="#M_Activities/create"]<br>a.ellipsis_inline<br>a:contains("Create Activities") |
| link-or-menu | View Activities |  | a[href="#M_Activities"]<br>a.ellipsis_inline<br>a:contains("View Activities") |
| link-or-menu | Import Syllabus |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Syllabus&query=true&report_module=M_Activities"]<br>a.ellipsis_inline<br>a:contains("Import Syllabus") |
| link-or-menu | Work permit |  | a[aria-label="Work permit"]<br>a[href="#J_Workpermit"]<br>a.btn<br>a.module-name<br>a:contains("Work permit") |
| button | Work permit - More | button | #J_Workpermit<br>button[aria-label="Work permit - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Work permit View Work permit | menu | ul[role="menu"] |
| link-or-menu | Create Work permit |  | a[href="#J_Workpermit/create"]<br>a.ellipsis_inline<br>a:contains("Create Work permit") |
| link-or-menu | View Work permit |  | a[href="#J_Workpermit"]<br>a.ellipsis_inline<br>a:contains("View Work permit") |
| link-or-menu | Gallery |  | a[aria-label="Gallery"]<br>a[href="#C_Gallery"]<br>a.btn<br>a.module-name<br>a:contains("Gallery") |
| button | Gallery - More | button | #C_Gallery<br>button[aria-label="Gallery - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gallery View Gallery | menu | ul[role="menu"] |
| link-or-menu | Create Gallery |  | a[href="#C_Gallery/create"]<br>a.ellipsis_inline<br>a:contains("Create Gallery") |
| link-or-menu | View Gallery |  | a[href="#C_Gallery"]<br>a.ellipsis_inline<br>a:contains("View Gallery") |
| link-or-menu | Gradebooks |  | a[aria-label="Gradebooks"]<br>a[href="#J_Gradebook"]<br>a.btn<br>a.module-name<br>a:contains("Gradebooks") |
| button | Gradebooks - More | button | #J_Gradebook<br>button[aria-label="Gradebooks - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | View Gradebooks | menu | ul[role="menu"] |
| link-or-menu | View Gradebooks |  | a[href="#J_Gradebook"]<br>a.ellipsis_inline<br>a:contains("View Gradebooks") |
| link-or-menu | Gradebook Settings |  | a[aria-label="Gradebook Settings"]<br>a[href="#J_GradebookConfig"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Settings") |
| button | Gradebook Settings - More | button | #J_GradebookConfig<br>button[aria-label="Gradebook Settings - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting View Gradebook Settings | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting |  | a[href="#J_GradebookConfig/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting") |
| link-or-menu | View Gradebook Settings |  | a[href="#J_GradebookConfig"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Settings") |
| link-or-menu | Gradebook Setting Groups |  | a[aria-label="Gradebook Setting Groups"]<br>a[href="#J_GradebookSettingGroup"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Setting Groups") |
| button | Gradebook Setting Groups - More | button | #J_GradebookSettingGroup<br>button[aria-label="Gradebook Setting Groups - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting Group View Gradebook Setting Groups | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting Group |  | a[href="#J_GradebookSettingGroup/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting Group") |
| link-or-menu | View Gradebook Setting Groups |  | a[href="#J_GradebookSettingGroup"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Setting Groups") |
| link-or-menu | Admin Hours |  | a[aria-label="Admin Hours"]<br>a[href="#bwc/index.php?module=C_Timesheet&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Admin Hours") |
| link-or-menu | Campaigns |  | a[aria-label="Campaigns"]<br>a[href="#bwc/index.php?module=Campaigns&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Campaigns") |
| button | Campaigns - More | button | #Campaigns<br>button[aria-label="Campaigns - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Campaign (Wizard) Create Campaign (Classic) View Campaigns View Newsletters Create Email Template View Email Temp | menu | ul[role="menu"] |
| link-or-menu | Create Campaign (Wizard) |  | a[href="#bwc/index.php?module=Campaigns&action=WizardHome&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Wizard)") |
| link-or-menu | Create Campaign (Classic) |  | a[href="#bwc/index.php?module=Campaigns&action=EditView&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Classic)") |
| link-or-menu | View Campaigns |  | a[href="#bwc/index.php?module=Campaigns&action=index&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Campaigns") |
| link-or-menu | View Newsletters |  | a[href="#bwc/index.php?module=Campaigns&action=newsletterlist&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Newsletters") |
| link-or-menu | Create Email Template |  | a[href="#bwc/index.php?module=EmailTemplates&action=EditView&return_module=EmailTemplates&return_action=DetailView"]<br>a.ellipsis_inline<br>a:contains("Create Email Template") |
| link-or-menu | View Email Templates |  | a[href="#bwc/index.php?module=EmailTemplates&action=index"]<br>a.ellipsis_inline<br>a:contains("View Email Templates") |
| link-or-menu | Set Up Email |  | a[href="#bwc/index.php?module=Campaigns&action=WizardEmailSetup&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Set Up Email") |
| link-or-menu | View Diagnostics |  | a[href="#bwc/index.php?module=Campaigns&action=CampaignDiagnostic&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Diagnostics") |
| link-or-menu | Create Lead Form |  | a[href="#bwc/index.php?module=Campaigns&action=WebToLeadCreation&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Lead Form") |
| link-or-menu | Calls |  | a[aria-label="Calls"]<br>a[href="#Calls"]<br>a.btn<br>a.module-name<br>a:contains("Calls") |
| button | Calls - More | button | #Calls<br>button[aria-label="Calls - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Log Call View Calls Import Calls Activities Report | menu | ul[role="menu"] |
| link-or-menu | Log Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Log Call") |

## 24. Reports | Scots CRM
- URL: https://stagingcrm.scotsenglish.edu.vn/index.php#Reports?filterModule=Accounts
- Headings: Reports (0) Create Report Report Schedules Import Report | No dashboard configured.
- Elements captured: 417

| Kind | Label/Text | Role/Type | Candidate selectors |
|---|---|---|---|
| navigation | main module navigation | navigation | ul[role="navigation"]<br>ul[aria-label="main module navigation"]<br>ul.nav<br>ul.megamenu |
| link-or-menu | Home |  | a[aria-label="Home"]<br>a[href="#Home"]<br>a.cube<br>a.btn |
| button | Home - More | button | button[aria-label="Home - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Dashboard Activity Stream Manage Dashboards | menu | ul[role="menu"] |
| link-or-menu | Create Dashboard |  | a[href="#Home/create"]<br>a.ellipsis_inline<br>a:contains("Create Dashboard") |
| link-or-menu | Activity Stream |  | a[href="#activities"]<br>a.ellipsis_inline<br>a:contains("Activity Stream") |
| link-or-menu | Manage Dashboards |  | a[href="#Dashboards?moduleName=Home"]<br>a.ellipsis_inline<br>a:contains("Manage Dashboards") |
| link-or-menu | Calendar |  | a[aria-label="Calendar"]<br>a[href="#bwc/index.php?module=Calendar&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Calendar") |
| button | Calendar - More | button | #Calendar<br>button[aria-label="Calendar - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Meeting Schedule Call Create Task Today | menu | ul[role="menu"] |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Schedule Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Call") |
| link-or-menu | Create Task |  | a[href="#Tasks/create"]<br>a.ellipsis_inline<br>a:contains("Create Task") |
| link-or-menu | Today |  | a[href="#bwc/index.php?module=Calendar&action=index&view=day"]<br>a.ellipsis_inline<br>a:contains("Today") |
| link-or-menu | Targets |  | a[aria-label="Targets"]<br>a[href="#Prospects"]<br>a.btn<br>a.module-name<br>a:contains("Targets") |
| button | Targets - More | button | #Prospects<br>button[aria-label="Targets - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Target Create Target From vCard View Targets Import Targets | menu | ul[role="menu"] |
| link-or-menu | Create Target |  | a[href="#Prospects/create"]<br>a.ellipsis_inline<br>a:contains("Create Target") |
| link-or-menu | Create Target From vCard |  | a[href="#Prospects/vcard-import"]<br>a.ellipsis_inline<br>a:contains("Create Target From vCard") |
| link-or-menu | View Targets |  | a[href="#Prospects"]<br>a.ellipsis_inline<br>a:contains("View Targets") |
| link-or-menu | Import Targets |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Prospects&return_module=Prospects&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Targets") |
| link-or-menu | Leads |  | a[aria-label="Leads"]<br>a[href="#Leads"]<br>a.btn<br>a.module-name<br>a:contains("Leads") |
| button | Leads - More | button | #Leads<br>button[aria-label="Leads - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Lead View Leads View Lead Reports Import Leads | menu | ul[role="menu"] |
| link-or-menu | Create Lead |  | a[href="#Leads/create"]<br>a.ellipsis_inline<br>a:contains("Create Lead") |
| link-or-menu | View Leads |  | a[href="#Leads"]<br>a.ellipsis_inline<br>a:contains("View Leads") |
| link-or-menu | View Lead Reports |  | a[href="#Reports?filterModule=Leads"]<br>a.ellipsis_inline<br>a:contains("View Lead Reports") |
| link-or-menu | Import Leads |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Leads&return_module=Leads&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Leads") |
| link-or-menu | Students |  | a[aria-label="Students"]<br>a[href="#Contacts"]<br>a.btn<br>a.module-name<br>a:contains("Students") |
| button | Students - More | button | #Contacts<br>button[aria-label="Students - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Student View Students View Student Reports Import Students Send SMS | menu | ul[role="menu"] |
| link-or-menu | Create Student |  | a[href="#Contacts/create"]<br>a.ellipsis_inline<br>a:contains("Create Student") |
| link-or-menu | View Students |  | a[href="#Contacts"]<br>a.ellipsis_inline<br>a:contains("View Students") |
| link-or-menu | View Student Reports |  | a[href="#Reports?filterModule=Contacts"]<br>a.ellipsis_inline<br>a:contains("View Student Reports") |
| link-or-menu | Import Students |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Contacts&return_module=Contacts&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Students") |
| link-or-menu | Send SMS |  | a[href="#bwc/index.php?module=C_SMS&action=sendSMS"]<br>a.ellipsis_inline<br>a:contains("Send SMS") |
| link-or-menu | Sale Orders |  | a[aria-label="Sale Orders"]<br>a[href="#Quotes"]<br>a.btn<br>a.module-name<br>a:contains("Sale Orders") |
| button | Sale Orders - More | button | #Quotes<br>button[aria-label="Sale Orders - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Sale Order View Sale Orders View Sale Order Reports | menu | ul[role="menu"] |
| link-or-menu | Create Sale Order |  | a[href="#Quotes/create"]<br>a.ellipsis_inline<br>a:contains("Create Sale Order") |
| link-or-menu | View Sale Orders |  | a[href="#Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Orders") |
| link-or-menu | View Sale Order Reports |  | a[href="#Reports?filterModule=Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Order Reports") |
| link-or-menu | Classes |  | a[aria-label="Classes"]<br>a[href="#J_Class"]<br>a.btn<br>a.module-name<br>a:contains("Classes") |
| button | Classes - More | button | #J_Class<br>button[aria-label="Classes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Class View Classes View on Calendar Import Scheduler | menu | ul[role="menu"] |
| link-or-menu | Create Class |  | a[href="#J_Class/create"]<br>a.ellipsis_inline<br>a:contains("Create Class") |
| link-or-menu | View Classes |  | a[href="#J_Class"]<br>a.ellipsis_inline<br>a:contains("View Classes") |
| link-or-menu | View on Calendar |  | a[href="#bwc/index.php?module=Calendar&action=index&view=week"]<br>a.ellipsis_inline<br>a:contains("View on Calendar") |
| link-or-menu | Import Scheduler |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Meetings&return_module=Meetings&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Scheduler") |
| link-or-menu | Schedules |  | a[aria-label="Schedules"]<br>a[href="#Meetings"]<br>a.btn<br>a.module-name<br>a:contains("Schedules") |
| button | Schedules - More | button | #Meetings<br>button[aria-label="Schedules - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Placement Test Schedule Demo Schedule Meeting | menu | ul[role="menu"] |
| link-or-menu | Schedule Placement Test |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=PT"]<br>a.ellipsis_inline<br>a:contains("Schedule Placement Test") |
| link-or-menu | Schedule Demo |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=Demo"]<br>a.ellipsis_inline<br>a:contains("Schedule Demo") |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Reports |  | a[aria-label="Reports"]<br>a[href="#Reports"]<br>a.btn<br>a.module-name<br>a:contains("Reports") |
| button | Reports - More | button | #Reports<br>button[aria-label="Reports - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Report View Reports Report Schedules | menu | ul[role="menu"] |
| link-or-menu | Create Report |  | a[href="#bwc/index.php?module=Reports&report_module=&action=index&page=report&Create+Custom+Report=Create+Custom+Report"]<br>a.ellipsis_inline<br>a:contains("Create Report") |
| link-or-menu | View Reports |  | a[href="#Reports"]<br>a.ellipsis_inline<br>a:contains("View Reports") |
| link-or-menu | Report Schedules |  | a[href="#ReportSchedules"]<br>a.ellipsis_inline<br>a:contains("Report Schedules") |
| link-or-menu | Loyalty |  | a[aria-label="Loyalty"]<br>a[href="#J_Loyalty"]<br>a.btn<br>a.module-name<br>a:contains("Loyalty") |
| button | Loyalty - More | button | #J_Loyalty<br>button[aria-label="Loyalty - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Loyalty View Loyalty Import Loyalty | menu | ul[role="menu"] |
| link-or-menu | Create Loyalty |  | a[href="#J_Loyalty/create"]<br>a.ellipsis_inline<br>a:contains("Create Loyalty") |
| link-or-menu | View Loyalty |  | a[href="#J_Loyalty"]<br>a.ellipsis_inline<br>a:contains("View Loyalty") |
| link-or-menu | Import Loyalty |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Loyalty&return_module=J_Loyalty&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Loyalty") |
| link-or-menu | Teachers |  | a[aria-label="Teachers"]<br>a[href="#C_Teachers"]<br>a.btn<br>a.module-name<br>a:contains("Teachers") |
| button | Teachers - More | button | #C_Teachers<br>button[aria-label="Teachers - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Create TA View Teachers Import Teachers | menu | ul[role="menu"] |
| link-or-menu | Create Teacher |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=Teacher"]<br>a.ellipsis_inline<br>a:contains("Create Teacher") |
| link-or-menu | Create TA |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=TA"]<br>a.ellipsis_inline<br>a:contains("Create TA") |
| link-or-menu | View Teachers |  | a[href="#C_Teachers"]<br>a.ellipsis_inline<br>a:contains("View Teachers") |
| link-or-menu | Import Teachers |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Teachers&return_module=C_Teachers&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teachers") |
| link-or-menu | Approval Processes |  | a[aria-label="Approval Processes"]<br>a[href="#ApprovalProcesses"]<br>a.btn<br>a.module-name<br>a:contains("Approval Processes") |
| button | Approval Processes - More | button | #ApprovalProcesses<br>button[aria-label="Approval Processes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Approval Processes | menu | ul[role="menu"] |
| link-or-menu | Approval Processes |  | a[href="#ApprovalProcesses/layout/approvalList"]<br>a.ellipsis_inline<br>a:contains("Approval Processes") |
| link-or-menu | Accounts |  | a[aria-label="Accounts"]<br>a[href="#Accounts"]<br>a.btn<br>a.module-name<br>a:contains("Accounts") |
| button | Accounts - More | button | #Accounts<br>button[aria-label="Accounts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Account View Accounts View Account Reports Import Accounts | menu | ul[role="menu"] |
| link-or-menu | Create Account |  | a[href="#Accounts/create"]<br>a.ellipsis_inline<br>a:contains("Create Account") |
| link-or-menu | View Accounts |  | a[href="#Accounts"]<br>a.ellipsis_inline<br>a:contains("View Accounts") |
| link-or-menu | View Account Reports |  | a[href="#Reports?filterModule=Accounts"]<br>a.ellipsis_inline<br>a:contains("View Account Reports") |
| link-or-menu | Import Accounts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Accounts"]<br>a.ellipsis_inline<br>a:contains("Import Accounts") |
| link-or-menu | Rooms |  | a[aria-label="Rooms"]<br>a[href="#C_Rooms"]<br>a.btn<br>a.module-name<br>a:contains("Rooms") |
| button | Rooms - More | button | #C_Rooms<br>button[aria-label="Rooms - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Room View Rooms Import Rooms | menu | ul[role="menu"] |
| link-or-menu | Create Room |  | a[href="#C_Rooms/create"]<br>a.ellipsis_inline<br>a:contains("Create Room") |
| link-or-menu | View Rooms |  | a[href="#C_Rooms"]<br>a.ellipsis_inline<br>a:contains("View Rooms") |
| link-or-menu | Import Rooms |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Rooms&return_module=C_Rooms&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Rooms") |
| link-or-menu | Teacher Contracts |  | a[aria-label="Teacher Contracts"]<br>a[href="#J_Teachercontract"]<br>a.btn<br>a.module-name<br>a:contains("Teacher Contracts") |
| button | Teacher Contracts - More | button | #J_Teachercontract<br>button[aria-label="Teacher Contracts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Contract View Teacher Contracts Import Teacher Contracts | menu | ul[role="menu"] |
| link-or-menu | Create Teacher Contract |  | a[href="#J_Teachercontract/create"]<br>a.ellipsis_inline<br>a:contains("Create Teacher Contract") |
| link-or-menu | View Teacher Contracts |  | a[href="#J_Teachercontract"]<br>a.ellipsis_inline<br>a:contains("View Teacher Contracts") |
| link-or-menu | Import Teacher Contracts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Teachercontract&return_module=J_Teachercontract&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teacher Contracts") |
| link-or-menu | Kind Of Courses |  | a[aria-label="Kind Of Courses"]<br>a[href="#J_Kindofcourse"]<br>a.btn<br>a.module-name<br>a:contains("Kind Of Courses") |
| button | Kind Of Courses - More | button | #J_Kindofcourse<br>button[aria-label="Kind Of Courses - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Kind Of Course View Kind Of Courses Import Kind Of Courses | menu | ul[role="menu"] |
| link-or-menu | Create Kind Of Course |  | a[href="#J_Kindofcourse/create"]<br>a.ellipsis_inline<br>a:contains("Create Kind Of Course") |
| link-or-menu | View Kind Of Courses |  | a[href="#J_Kindofcourse"]<br>a.ellipsis_inline<br>a:contains("View Kind Of Courses") |
| link-or-menu | Import Kind Of Courses |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Kindofcourse&return_module=J_Kindofcourse&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Kind Of Courses") |
| link-or-menu | Activities |  | a[aria-label="Activities"]<br>a[href="#M_Activities"]<br>a.btn<br>a.module-name<br>a:contains("Activities") |
| button | Activities - More | button | #M_Activities<br>button[aria-label="Activities - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Activities View Activities Import Syllabus | menu | ul[role="menu"] |
| link-or-menu | Create Activities |  | a[href="#M_Activities/create"]<br>a.ellipsis_inline<br>a:contains("Create Activities") |
| link-or-menu | View Activities |  | a[href="#M_Activities"]<br>a.ellipsis_inline<br>a:contains("View Activities") |
| link-or-menu | Import Syllabus |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Syllabus&query=true&report_module=M_Activities"]<br>a.ellipsis_inline<br>a:contains("Import Syllabus") |
| link-or-menu | Work permit |  | a[aria-label="Work permit"]<br>a[href="#J_Workpermit"]<br>a.btn<br>a.module-name<br>a:contains("Work permit") |
| button | Work permit - More | button | #J_Workpermit<br>button[aria-label="Work permit - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Work permit View Work permit | menu | ul[role="menu"] |
| link-or-menu | Create Work permit |  | a[href="#J_Workpermit/create"]<br>a.ellipsis_inline<br>a:contains("Create Work permit") |
| link-or-menu | View Work permit |  | a[href="#J_Workpermit"]<br>a.ellipsis_inline<br>a:contains("View Work permit") |
| link-or-menu | Gallery |  | a[aria-label="Gallery"]<br>a[href="#C_Gallery"]<br>a.btn<br>a.module-name<br>a:contains("Gallery") |
| button | Gallery - More | button | #C_Gallery<br>button[aria-label="Gallery - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gallery View Gallery | menu | ul[role="menu"] |
| link-or-menu | Create Gallery |  | a[href="#C_Gallery/create"]<br>a.ellipsis_inline<br>a:contains("Create Gallery") |
| link-or-menu | View Gallery |  | a[href="#C_Gallery"]<br>a.ellipsis_inline<br>a:contains("View Gallery") |
| link-or-menu | Gradebooks |  | a[aria-label="Gradebooks"]<br>a[href="#J_Gradebook"]<br>a.btn<br>a.module-name<br>a:contains("Gradebooks") |
| button | Gradebooks - More | button | #J_Gradebook<br>button[aria-label="Gradebooks - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | View Gradebooks | menu | ul[role="menu"] |
| link-or-menu | View Gradebooks |  | a[href="#J_Gradebook"]<br>a.ellipsis_inline<br>a:contains("View Gradebooks") |
| link-or-menu | Gradebook Settings |  | a[aria-label="Gradebook Settings"]<br>a[href="#J_GradebookConfig"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Settings") |
| button | Gradebook Settings - More | button | #J_GradebookConfig<br>button[aria-label="Gradebook Settings - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting View Gradebook Settings | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting |  | a[href="#J_GradebookConfig/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting") |
| link-or-menu | View Gradebook Settings |  | a[href="#J_GradebookConfig"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Settings") |
| link-or-menu | Gradebook Setting Groups |  | a[aria-label="Gradebook Setting Groups"]<br>a[href="#J_GradebookSettingGroup"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Setting Groups") |
| button | Gradebook Setting Groups - More | button | #J_GradebookSettingGroup<br>button[aria-label="Gradebook Setting Groups - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting Group View Gradebook Setting Groups | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting Group |  | a[href="#J_GradebookSettingGroup/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting Group") |
| link-or-menu | View Gradebook Setting Groups |  | a[href="#J_GradebookSettingGroup"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Setting Groups") |
| link-or-menu | Admin Hours |  | a[aria-label="Admin Hours"]<br>a[href="#bwc/index.php?module=C_Timesheet&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Admin Hours") |
| link-or-menu | Campaigns |  | a[aria-label="Campaigns"]<br>a[href="#bwc/index.php?module=Campaigns&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Campaigns") |
| button | Campaigns - More | button | #Campaigns<br>button[aria-label="Campaigns - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Campaign (Wizard) Create Campaign (Classic) View Campaigns View Newsletters Create Email Template View Email Temp | menu | ul[role="menu"] |
| link-or-menu | Create Campaign (Wizard) |  | a[href="#bwc/index.php?module=Campaigns&action=WizardHome&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Wizard)") |
| link-or-menu | Create Campaign (Classic) |  | a[href="#bwc/index.php?module=Campaigns&action=EditView&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Classic)") |
| link-or-menu | View Campaigns |  | a[href="#bwc/index.php?module=Campaigns&action=index&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Campaigns") |
| link-or-menu | View Newsletters |  | a[href="#bwc/index.php?module=Campaigns&action=newsletterlist&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Newsletters") |
| link-or-menu | Create Email Template |  | a[href="#bwc/index.php?module=EmailTemplates&action=EditView&return_module=EmailTemplates&return_action=DetailView"]<br>a.ellipsis_inline<br>a:contains("Create Email Template") |
| link-or-menu | View Email Templates |  | a[href="#bwc/index.php?module=EmailTemplates&action=index"]<br>a.ellipsis_inline<br>a:contains("View Email Templates") |
| link-or-menu | Set Up Email |  | a[href="#bwc/index.php?module=Campaigns&action=WizardEmailSetup&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Set Up Email") |
| link-or-menu | View Diagnostics |  | a[href="#bwc/index.php?module=Campaigns&action=CampaignDiagnostic&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Diagnostics") |
| link-or-menu | Create Lead Form |  | a[href="#bwc/index.php?module=Campaigns&action=WebToLeadCreation&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Lead Form") |
| link-or-menu | Calls |  | a[aria-label="Calls"]<br>a[href="#Calls"]<br>a.btn<br>a.module-name<br>a:contains("Calls") |
| button | Calls - More | button | #Calls<br>button[aria-label="Calls - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Log Call View Calls Import Calls Activities Report | menu | ul[role="menu"] |
| link-or-menu | Log Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Log Call") |

## 25. Rooms | Scots CRM
- URL: https://stagingcrm.scotsenglish.edu.vn/index.php#C_Rooms
- Headings: Rooms (20 of 21+) Create Room View Room Report | No dashboard configured.
- Elements captured: 565

| Kind | Label/Text | Role/Type | Candidate selectors |
|---|---|---|---|
| navigation | main module navigation | navigation | ul[role="navigation"]<br>ul[aria-label="main module navigation"]<br>ul.nav<br>ul.megamenu |
| link-or-menu | Home |  | a[aria-label="Home"]<br>a[href="#Home"]<br>a.cube<br>a.btn |
| button | Home - More | button | button[aria-label="Home - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Dashboard Activity Stream Manage Dashboards | menu | ul[role="menu"] |
| link-or-menu | Create Dashboard |  | a[href="#Home/create"]<br>a.ellipsis_inline<br>a:contains("Create Dashboard") |
| link-or-menu | Activity Stream |  | a[href="#activities"]<br>a.ellipsis_inline<br>a:contains("Activity Stream") |
| link-or-menu | Manage Dashboards |  | a[href="#Dashboards?moduleName=Home"]<br>a.ellipsis_inline<br>a:contains("Manage Dashboards") |
| link-or-menu | Calendar |  | a[aria-label="Calendar"]<br>a[href="#bwc/index.php?module=Calendar&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Calendar") |
| button | Calendar - More | button | #Calendar<br>button[aria-label="Calendar - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Meeting Schedule Call Create Task Today | menu | ul[role="menu"] |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Schedule Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Call") |
| link-or-menu | Create Task |  | a[href="#Tasks/create"]<br>a.ellipsis_inline<br>a:contains("Create Task") |
| link-or-menu | Today |  | a[href="#bwc/index.php?module=Calendar&action=index&view=day"]<br>a.ellipsis_inline<br>a:contains("Today") |
| link-or-menu | Targets |  | a[aria-label="Targets"]<br>a[href="#Prospects"]<br>a.btn<br>a.module-name<br>a:contains("Targets") |
| button | Targets - More | button | #Prospects<br>button[aria-label="Targets - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Target Create Target From vCard View Targets Import Targets | menu | ul[role="menu"] |
| link-or-menu | Create Target |  | a[href="#Prospects/create"]<br>a.ellipsis_inline<br>a:contains("Create Target") |
| link-or-menu | Create Target From vCard |  | a[href="#Prospects/vcard-import"]<br>a.ellipsis_inline<br>a:contains("Create Target From vCard") |
| link-or-menu | View Targets |  | a[href="#Prospects"]<br>a.ellipsis_inline<br>a:contains("View Targets") |
| link-or-menu | Import Targets |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Prospects&return_module=Prospects&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Targets") |
| link-or-menu | Leads |  | a[aria-label="Leads"]<br>a[href="#Leads"]<br>a.btn<br>a.module-name<br>a:contains("Leads") |
| button | Leads - More | button | #Leads<br>button[aria-label="Leads - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Lead View Leads View Lead Reports Import Leads | menu | ul[role="menu"] |
| link-or-menu | Create Lead |  | a[href="#Leads/create"]<br>a.ellipsis_inline<br>a:contains("Create Lead") |
| link-or-menu | View Leads |  | a[href="#Leads"]<br>a.ellipsis_inline<br>a:contains("View Leads") |
| link-or-menu | View Lead Reports |  | a[href="#Reports?filterModule=Leads"]<br>a.ellipsis_inline<br>a:contains("View Lead Reports") |
| link-or-menu | Import Leads |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Leads&return_module=Leads&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Leads") |
| link-or-menu | Students |  | a[aria-label="Students"]<br>a[href="#Contacts"]<br>a.btn<br>a.module-name<br>a:contains("Students") |
| button | Students - More | button | #Contacts<br>button[aria-label="Students - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Student View Students View Student Reports Import Students Send SMS | menu | ul[role="menu"] |
| link-or-menu | Create Student |  | a[href="#Contacts/create"]<br>a.ellipsis_inline<br>a:contains("Create Student") |
| link-or-menu | View Students |  | a[href="#Contacts"]<br>a.ellipsis_inline<br>a:contains("View Students") |
| link-or-menu | View Student Reports |  | a[href="#Reports?filterModule=Contacts"]<br>a.ellipsis_inline<br>a:contains("View Student Reports") |
| link-or-menu | Import Students |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Contacts&return_module=Contacts&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Students") |
| link-or-menu | Send SMS |  | a[href="#bwc/index.php?module=C_SMS&action=sendSMS"]<br>a.ellipsis_inline<br>a:contains("Send SMS") |
| link-or-menu | Sale Orders |  | a[aria-label="Sale Orders"]<br>a[href="#Quotes"]<br>a.btn<br>a.module-name<br>a:contains("Sale Orders") |
| button | Sale Orders - More | button | #Quotes<br>button[aria-label="Sale Orders - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Sale Order View Sale Orders View Sale Order Reports | menu | ul[role="menu"] |
| link-or-menu | Create Sale Order |  | a[href="#Quotes/create"]<br>a.ellipsis_inline<br>a:contains("Create Sale Order") |
| link-or-menu | View Sale Orders |  | a[href="#Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Orders") |
| link-or-menu | View Sale Order Reports |  | a[href="#Reports?filterModule=Quotes"]<br>a.ellipsis_inline<br>a:contains("View Sale Order Reports") |
| link-or-menu | Classes |  | a[aria-label="Classes"]<br>a[href="#J_Class"]<br>a.btn<br>a.module-name<br>a:contains("Classes") |
| button | Classes - More | button | #J_Class<br>button[aria-label="Classes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Class View Classes View on Calendar Import Scheduler | menu | ul[role="menu"] |
| link-or-menu | Create Class |  | a[href="#J_Class/create"]<br>a.ellipsis_inline<br>a:contains("Create Class") |
| link-or-menu | View Classes |  | a[href="#J_Class"]<br>a.ellipsis_inline<br>a:contains("View Classes") |
| link-or-menu | View on Calendar |  | a[href="#bwc/index.php?module=Calendar&action=index&view=week"]<br>a.ellipsis_inline<br>a:contains("View on Calendar") |
| link-or-menu | Import Scheduler |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Meetings&return_module=Meetings&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Scheduler") |
| link-or-menu | Schedules |  | a[aria-label="Schedules"]<br>a[href="#Meetings"]<br>a.btn<br>a.module-name<br>a:contains("Schedules") |
| button | Schedules - More | button | #Meetings<br>button[aria-label="Schedules - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Schedule Placement Test Schedule Demo Schedule Meeting | menu | ul[role="menu"] |
| link-or-menu | Schedule Placement Test |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=PT"]<br>a.ellipsis_inline<br>a:contains("Schedule Placement Test") |
| link-or-menu | Schedule Demo |  | a[href="#bwc/index.php?module=Meetings&action=EditView&return_module=Meetings&return_action=DetailView&type=Demo"]<br>a.ellipsis_inline<br>a:contains("Schedule Demo") |
| link-or-menu | Schedule Meeting |  | a[href="#Meetings/create"]<br>a.ellipsis_inline<br>a:contains("Schedule Meeting") |
| link-or-menu | Reports |  | a[aria-label="Reports"]<br>a[href="#Reports"]<br>a.btn<br>a.module-name<br>a:contains("Reports") |
| button | Reports - More | button | #Reports<br>button[aria-label="Reports - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Report View Reports Report Schedules | menu | ul[role="menu"] |
| link-or-menu | Create Report |  | a[href="#bwc/index.php?module=Reports&report_module=&action=index&page=report&Create+Custom+Report=Create+Custom+Report"]<br>a.ellipsis_inline<br>a:contains("Create Report") |
| link-or-menu | View Reports |  | a[href="#Reports"]<br>a.ellipsis_inline<br>a:contains("View Reports") |
| link-or-menu | Report Schedules |  | a[href="#ReportSchedules"]<br>a.ellipsis_inline<br>a:contains("Report Schedules") |
| link-or-menu | Loyalty |  | a[aria-label="Loyalty"]<br>a[href="#J_Loyalty"]<br>a.btn<br>a.module-name<br>a:contains("Loyalty") |
| button | Loyalty - More | button | #J_Loyalty<br>button[aria-label="Loyalty - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Loyalty View Loyalty Import Loyalty | menu | ul[role="menu"] |
| link-or-menu | Create Loyalty |  | a[href="#J_Loyalty/create"]<br>a.ellipsis_inline<br>a:contains("Create Loyalty") |
| link-or-menu | View Loyalty |  | a[href="#J_Loyalty"]<br>a.ellipsis_inline<br>a:contains("View Loyalty") |
| link-or-menu | Import Loyalty |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Loyalty&return_module=J_Loyalty&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Loyalty") |
| link-or-menu | Teachers |  | a[aria-label="Teachers"]<br>a[href="#C_Teachers"]<br>a.btn<br>a.module-name<br>a:contains("Teachers") |
| button | Teachers - More | button | #C_Teachers<br>button[aria-label="Teachers - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Create TA View Teachers Import Teachers | menu | ul[role="menu"] |
| link-or-menu | Create Teacher |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=Teacher"]<br>a.ellipsis_inline<br>a:contains("Create Teacher") |
| link-or-menu | Create TA |  | a[href="#bwc/index.php?module=C_Teachers&action=EditView&type=TA"]<br>a.ellipsis_inline<br>a:contains("Create TA") |
| link-or-menu | View Teachers |  | a[href="#C_Teachers"]<br>a.ellipsis_inline<br>a:contains("View Teachers") |
| link-or-menu | Import Teachers |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Teachers&return_module=C_Teachers&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teachers") |
| link-or-menu | Approval Processes |  | a[aria-label="Approval Processes"]<br>a[href="#ApprovalProcesses"]<br>a.btn<br>a.module-name<br>a:contains("Approval Processes") |
| button | Approval Processes - More | button | #ApprovalProcesses<br>button[aria-label="Approval Processes - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Approval Processes | menu | ul[role="menu"] |
| link-or-menu | Approval Processes |  | a[href="#ApprovalProcesses/layout/approvalList"]<br>a.ellipsis_inline<br>a:contains("Approval Processes") |
| link-or-menu | Accounts |  | a[aria-label="Accounts"]<br>a[href="#Accounts"]<br>a.btn<br>a.module-name<br>a:contains("Accounts") |
| button | Accounts - More | button | #Accounts<br>button[aria-label="Accounts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Account View Accounts View Account Reports Import Accounts | menu | ul[role="menu"] |
| link-or-menu | Create Account |  | a[href="#Accounts/create"]<br>a.ellipsis_inline<br>a:contains("Create Account") |
| link-or-menu | View Accounts |  | a[href="#Accounts"]<br>a.ellipsis_inline<br>a:contains("View Accounts") |
| link-or-menu | View Account Reports |  | a[href="#Reports?filterModule=Accounts"]<br>a.ellipsis_inline<br>a:contains("View Account Reports") |
| link-or-menu | Import Accounts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=Accounts"]<br>a.ellipsis_inline<br>a:contains("Import Accounts") |
| link-or-menu | Rooms |  | a[aria-label="Rooms"]<br>a[href="#C_Rooms"]<br>a.btn<br>a.module-name<br>a:contains("Rooms") |
| button | Rooms - More | button | #C_Rooms<br>button[aria-label="Rooms - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Room View Rooms Import Rooms | menu | ul[role="menu"] |
| link-or-menu | Create Room |  | a[href="#C_Rooms/create"]<br>a.ellipsis_inline<br>a:contains("Create Room") |
| link-or-menu | View Rooms |  | a[href="#C_Rooms"]<br>a.ellipsis_inline<br>a:contains("View Rooms") |
| link-or-menu | Import Rooms |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=C_Rooms&return_module=C_Rooms&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Rooms") |
| link-or-menu | Teacher Contracts |  | a[aria-label="Teacher Contracts"]<br>a[href="#J_Teachercontract"]<br>a.btn<br>a.module-name<br>a:contains("Teacher Contracts") |
| button | Teacher Contracts - More | button | #J_Teachercontract<br>button[aria-label="Teacher Contracts - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Teacher Contract View Teacher Contracts Import Teacher Contracts | menu | ul[role="menu"] |
| link-or-menu | Create Teacher Contract |  | a[href="#J_Teachercontract/create"]<br>a.ellipsis_inline<br>a:contains("Create Teacher Contract") |
| link-or-menu | View Teacher Contracts |  | a[href="#J_Teachercontract"]<br>a.ellipsis_inline<br>a:contains("View Teacher Contracts") |
| link-or-menu | Import Teacher Contracts |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Teachercontract&return_module=J_Teachercontract&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Teacher Contracts") |
| link-or-menu | Kind Of Courses |  | a[aria-label="Kind Of Courses"]<br>a[href="#J_Kindofcourse"]<br>a.btn<br>a.module-name<br>a:contains("Kind Of Courses") |
| button | Kind Of Courses - More | button | #J_Kindofcourse<br>button[aria-label="Kind Of Courses - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Kind Of Course View Kind Of Courses Import Kind Of Courses | menu | ul[role="menu"] |
| link-or-menu | Create Kind Of Course |  | a[href="#J_Kindofcourse/create"]<br>a.ellipsis_inline<br>a:contains("Create Kind Of Course") |
| link-or-menu | View Kind Of Courses |  | a[href="#J_Kindofcourse"]<br>a.ellipsis_inline<br>a:contains("View Kind Of Courses") |
| link-or-menu | Import Kind Of Courses |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Kindofcourse&return_module=J_Kindofcourse&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Import Kind Of Courses") |
| link-or-menu | Activities |  | a[aria-label="Activities"]<br>a[href="#M_Activities"]<br>a.btn<br>a.module-name<br>a:contains("Activities") |
| button | Activities - More | button | #M_Activities<br>button[aria-label="Activities - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Activities View Activities Import Syllabus | menu | ul[role="menu"] |
| link-or-menu | Create Activities |  | a[href="#M_Activities/create"]<br>a.ellipsis_inline<br>a:contains("Create Activities") |
| link-or-menu | View Activities |  | a[href="#M_Activities"]<br>a.ellipsis_inline<br>a:contains("View Activities") |
| link-or-menu | Import Syllabus |  | a[href="#bwc/index.php?module=Import&action=Step1&import_module=J_Syllabus&query=true&report_module=M_Activities"]<br>a.ellipsis_inline<br>a:contains("Import Syllabus") |
| link-or-menu | Work permit |  | a[aria-label="Work permit"]<br>a[href="#J_Workpermit"]<br>a.btn<br>a.module-name<br>a:contains("Work permit") |
| button | Work permit - More | button | #J_Workpermit<br>button[aria-label="Work permit - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Work permit View Work permit | menu | ul[role="menu"] |
| link-or-menu | Create Work permit |  | a[href="#J_Workpermit/create"]<br>a.ellipsis_inline<br>a:contains("Create Work permit") |
| link-or-menu | View Work permit |  | a[href="#J_Workpermit"]<br>a.ellipsis_inline<br>a:contains("View Work permit") |
| link-or-menu | Gallery |  | a[aria-label="Gallery"]<br>a[href="#C_Gallery"]<br>a.btn<br>a.module-name<br>a:contains("Gallery") |
| button | Gallery - More | button | #C_Gallery<br>button[aria-label="Gallery - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gallery View Gallery | menu | ul[role="menu"] |
| link-or-menu | Create Gallery |  | a[href="#C_Gallery/create"]<br>a.ellipsis_inline<br>a:contains("Create Gallery") |
| link-or-menu | View Gallery |  | a[href="#C_Gallery"]<br>a.ellipsis_inline<br>a:contains("View Gallery") |
| link-or-menu | Gradebooks |  | a[aria-label="Gradebooks"]<br>a[href="#J_Gradebook"]<br>a.btn<br>a.module-name<br>a:contains("Gradebooks") |
| button | Gradebooks - More | button | #J_Gradebook<br>button[aria-label="Gradebooks - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | View Gradebooks | menu | ul[role="menu"] |
| link-or-menu | View Gradebooks |  | a[href="#J_Gradebook"]<br>a.ellipsis_inline<br>a:contains("View Gradebooks") |
| link-or-menu | Gradebook Settings |  | a[aria-label="Gradebook Settings"]<br>a[href="#J_GradebookConfig"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Settings") |
| button | Gradebook Settings - More | button | #J_GradebookConfig<br>button[aria-label="Gradebook Settings - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting View Gradebook Settings | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting |  | a[href="#J_GradebookConfig/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting") |
| link-or-menu | View Gradebook Settings |  | a[href="#J_GradebookConfig"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Settings") |
| link-or-menu | Gradebook Setting Groups |  | a[aria-label="Gradebook Setting Groups"]<br>a[href="#J_GradebookSettingGroup"]<br>a.btn<br>a.module-name<br>a:contains("Gradebook Setting Groups") |
| button | Gradebook Setting Groups - More | button | #J_GradebookSettingGroup<br>button[aria-label="Gradebook Setting Groups - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Gradebook Setting Group View Gradebook Setting Groups | menu | ul[role="menu"] |
| link-or-menu | Create Gradebook Setting Group |  | a[href="#J_GradebookSettingGroup/create"]<br>a.ellipsis_inline<br>a:contains("Create Gradebook Setting Group") |
| link-or-menu | View Gradebook Setting Groups |  | a[href="#J_GradebookSettingGroup"]<br>a.ellipsis_inline<br>a:contains("View Gradebook Setting Groups") |
| link-or-menu | Admin Hours |  | a[aria-label="Admin Hours"]<br>a[href="#bwc/index.php?module=C_Timesheet&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Admin Hours") |
| link-or-menu | Campaigns |  | a[aria-label="Campaigns"]<br>a[href="#bwc/index.php?module=Campaigns&action=index"]<br>a.btn<br>a.module-name<br>a:contains("Campaigns") |
| button | Campaigns - More | button | #Campaigns<br>button[aria-label="Campaigns - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Create Campaign (Wizard) Create Campaign (Classic) View Campaigns View Newsletters Create Email Template View Email Temp | menu | ul[role="menu"] |
| link-or-menu | Create Campaign (Wizard) |  | a[href="#bwc/index.php?module=Campaigns&action=WizardHome&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Wizard)") |
| link-or-menu | Create Campaign (Classic) |  | a[href="#bwc/index.php?module=Campaigns&action=EditView&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Campaign (Classic)") |
| link-or-menu | View Campaigns |  | a[href="#bwc/index.php?module=Campaigns&action=index&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Campaigns") |
| link-or-menu | View Newsletters |  | a[href="#bwc/index.php?module=Campaigns&action=newsletterlist&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Newsletters") |
| link-or-menu | Create Email Template |  | a[href="#bwc/index.php?module=EmailTemplates&action=EditView&return_module=EmailTemplates&return_action=DetailView"]<br>a.ellipsis_inline<br>a:contains("Create Email Template") |
| link-or-menu | View Email Templates |  | a[href="#bwc/index.php?module=EmailTemplates&action=index"]<br>a.ellipsis_inline<br>a:contains("View Email Templates") |
| link-or-menu | Set Up Email |  | a[href="#bwc/index.php?module=Campaigns&action=WizardEmailSetup&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Set Up Email") |
| link-or-menu | View Diagnostics |  | a[href="#bwc/index.php?module=Campaigns&action=CampaignDiagnostic&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("View Diagnostics") |
| link-or-menu | Create Lead Form |  | a[href="#bwc/index.php?module=Campaigns&action=WebToLeadCreation&return_module=Campaigns&return_action=index"]<br>a.ellipsis_inline<br>a:contains("Create Lead Form") |
| link-or-menu | Calls |  | a[aria-label="Calls"]<br>a[href="#Calls"]<br>a.btn<br>a.module-name<br>a:contains("Calls") |
| button | Calls - More | button | #Calls<br>button[aria-label="Calls - More"]<br>button[type="button"]<br>button.btn<br>button.dropdown-toggle |
| ul | Log Call View Calls Import Calls Activities Report | menu | ul[role="menu"] |
| link-or-menu | Log Call |  | a[href="#Calls/create"]<br>a.ellipsis_inline<br>a:contains("Log Call") |
