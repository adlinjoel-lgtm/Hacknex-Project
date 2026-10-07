SHIELD – Financial Fraud Intelligence System 
1 . Working System 
 Project Overview 
 SHIELD – Financial Fraud Intelligence System is a web-based transaction risk assessment  and investigation platform designed to assist officials in reviewing potentially suspicious  financial activity. 
 The system provides a centralized operational interface for monitoring transactions,  reviewing risk levels, investigating cases, examining relationships between accounts,  beneficiaries and devices, and reviewing account behaviour. 
 The system is designed as a decision-support prototype rather than an autonomous  fraud-declaration system. Its purpose is to organize suspicious activity indicators and provide  investigators with structured information for further review. 
 Main Functionalities 
 The implemented system contains: 
*	Command Centre 
*	Transaction Review 
*	Case Management 
*	Relationship Analysis 
*	Account Intelligence 
*	Customer Assistance 
*	Transaction search and filtering 
*	Risk-level filtering 
*	Transaction investigation 
*	Evidence assessment 
*	Investigation decision recording 
*	Account behavioural assessment 
*	Relationship visualization 
*	CSV transaction import 
*	Notifications and interactive modal windows 
 The interface identifies itself as SHIELD – Transaction Risk Assessment and Investigation  Platform.. 
 System Workflow 
 ```text 
 Transaction / Case Information 
 ↓ 
 Data Collection 
 ↓ 
 Data Review 
 ↓ 
 Risk Indicators 
 ↓ 
 Risk Assessment 
 ↓ 
 Evidence Assessment 
 ↓ 
 Investigation Decision 
 ↓ 
 Final Action 
 ``` 
 --- 
2 . Source Code 
 The current prototype is implemented as a web application using: 
 Technologies: 
*	HTML5 
*	CSS3 
*	JavaScript 
*	Browser File API 
*	CSV data processing 
*	Responsive web design 
 The interface is contained in a single HTML implementation with embedded CSS and  JavaScript. 
 The frontend contains the complete user interface, navigation, transaction tables,  investigation interface, relationship analysis interface and interactive functions. 
 Repository Structure: 
 The recommended public Git repository structure is: 
 ```text 
 SHIELD-Fraud-Intelligence/ 
 │ 
 ├── index.html 
 ├── README.md 
 ├── data/ 
 │   └── sample_transactions.csv 
 │ 
 ├── screenshots/ 
 │   └── system-screenshots 
 │ 
 └── documentation/ 
 └── methodology.md 
 ``` 
 Running the System: 
 Since the current MVP is a browser-based prototype, no server installation is required. 
 ```text 
1.	Clone the Git repository. 
2.	Open index.html in a modern web browser. 
3	. Navigate through the Command Centre. 
4	. Use Transaction Review to inspect sample transactions. 
5.	Use Case Management to review evidence. 
6.	Use Relationship Analysis to inspect entity relationships. 
7.	Use Account Intelligence to review account behaviour. 
8.	Use Import Transactions to load a CSV file. 
 ``` 
 The system provides an **Import Transactions** function that accepts `.csv` files and  processes the uploaded file in the browser. 
 --- 
 3. Data Pipeline 
 The SHIELD data pipeline is designed around the movement of transaction information from  collection to investigation. 
 Pipeline: 
 ```text 
 TRANSACTION DATA 
 ↓ 
 DATA COLLECTION 
 ↓ 
 CSV / SYSTEM DATA 
 ↓ 
 DATA LOADING 
 ↓ 
 TRANSACTION INFORMATION 
 ↓ 
 RISK & BEHAVIOURAL REVIEW 
 ↓ 
 EVIDENCE IDENTIFICATION 
 ↓ 
 INVESTIGATION CASE 
 ↓ 
 INVESTIGATOR DECISION 
 ``` 
 Step 1 – Data Collection 
 Transaction records contain information such as: 
*	Transaction ID 
*	Account 
*	Transaction amount 
*	Beneficiary 
*	Risk score  * Risk level 
 The Transaction Review interface provides these fields for reviewing monitored transactions.  Step 2 – Data Import 
 The system provides a CSV import facility. 
 The user selects a CSV file through the interface, after which the browser reads the file and  counts the transaction records loaded. 
 Step 3 – Risk Review 
 Transactions are organized according to risk categories: 
 ```text 
 LOW 
 MEDIUM 
 HIGH 
 CRITICAL 
 ``` 
 The system allows investigators to search transactions and filter them by risk level. 
 Step 4 – Evidence Assessment 
 Suspicious cases can be examined using individual evidence indicators. 
 The current case interface includes: 
*	Transaction deviation 
*	Device relationship 
*	Beneficiary relationship 
*	Transaction velocity 
 Step 5 – Investigation 
 The investigator can select a disposition: 
 ```text 
 Pending Review 
 Clear 
 Monitor 
 Escalate 
 ``` 
 and enter investigation notes before saving the investigation. 
 --- 
 4. Core Model / Reasoning 
 The current MVP uses an **explainable rule-based risk assessment approach** rather than  claiming to use an unimplemented machine-learning model. 
 The reasoning is based on observable transaction and relationship indicators. 
 Main Indicators 
 1. Transaction Deviation 
 The system compares the current transaction against historical transaction behaviour. 
 Example: 
 ```text 
 Historical Range: ₹4,000 – ₹9,000 
 Current Transaction: ₹48,500 
 Observation: 
 Transaction value is significantly above  the historical transaction range. 
 ``` 
 This evidence is represented in the Case Management section. 
2 . Device Relationship 
 A device identifier may appear across multiple monitored accounts. 
 Example: 
 ```text 
 DEV-771 
 ↓ 
 ACC-10482 
 ACC-10831 
 ACC-11027 
 ``` 
 The system presents this as a relationship indicator requiring further assessment rather than  automatically declaring fraud. 
3.	Beneficiary Relationship 
 The system identifies beneficiaries associated with multiple accounts showing unusual  activity. 
 Example: 
 ```text 
 BEN-7712 
 ↓ 
 Multiple monitored accounts 
 ``` 
4.	Transaction Velocity 
 The system considers unusually frequent transactions within a short period. 
 Example: 
 ```text 
 Four transactions 
 ↓ 
 Short time period 
 ↓ 
 Compared with historical activity 
 ↓ 
 Potential velocity anomaly 
 ``` 
 Reasoning Principle 
 The system does **not** treat one indicator as conclusive proof of fraud. 
 Instead: 
 ```text 
 Transaction Behaviour 
 + 
 Account History 
 + 
 Device Relationships 
+  
 Beneficiary Relationships 
+  
 Transaction Frequency 
 ↓ 
 Investigation Priority 
 ``` 
 This approach is explicitly reflected in the Account Intelligence section, which states that a  high transaction value alone does not automatically indicate fraud and that additional  indicators, history and relationship evidence should be considered before escalation. 
 --- 
 5. Evidence & Explanation 
 Explainability is a central feature of SHIELD. 
 Instead of presenting only a final risk label, the system provides evidence that an  investigator can examine. 
 ## Evidence Categories 
 ```text 
 IND-01 
 Transaction Deviation 
 IND-02 
 Device Relationship 
 IND-03 
 Beneficiary Relationship 
 IND-04 
 Transaction Velocity 
 ``` 
 Each evidence item can be expanded to view additional information. 
 ### Example Evidence 
 ```text  Case: 
 FCOC-2026-10482 
 Priority: 
 CRITICAL 
 Evidence: 
 IND-01 — Transaction Deviation 
 Historical baseline: ₹4,000 – ₹9,000 
 Observed transaction: ₹48,500 
 IND-02 — Device Relationship  Device DEV-771 appears across multiple  accounts under review. 
 IND-03 — Beneficiary Relationship  BEN-7712 is associated with multiple  accounts showing unusual activity. 
 IND-04 — Transaction Velocity 
 Four transactions occurred within a short  period compared with historical activity. 
 ``` 
 The system also provides a relationship-analysis warning that relationships are analytical  associations and do not independently establish wrongdoing. 
 This makes the system suitable as an **investigative decision-support tool**, rather than  presenting automated conclusions as confirmed facts. 
 --- 
 6. Sample Input & Output 
 Sample Input 
 ```text 
 Transaction ID: TXN-84921 
 Account: ACC-10482 
 Amount: ₹48,500 
 Beneficiary: BEN-7712 
 Risk Score: 92 
 Risk Level: Critical 
 ``` 
 The transaction is associated with an account whose historical average transaction value is  approximately ₹6,200. 
 The Account Intelligence section shows: 
 ```text 
 Account: ACC-10482 
 Average Transaction: ₹6,200 
 Current Transaction: ₹48,500 
 Velocity: High 
 Risk Score: 92 
 Status: Critical 
 ``` 
 Sample Output 
 ```text 
 CASE: FCOC-2026-10482 
 RISK LEVEL: 
 CRITICAL 
 PRIMARY FINDINGS: 
1.	Significant transaction deviation 
2.	Shared device relationship 
3.	Shared beneficiary relationship 
4.	High transaction velocity 
 RECOMMENDED ACTION: 
 Manual investigation 
 AVAILABLE DISPOSITIONS: 
 Pending Review 
 Clear 
 Monitor 
 Escalate 
 ``` 
 The system's transaction investigation interface also provides Monitor, Escalate and Clear  actions. 
 --- 
7 . Scope Note 
 ## Minimum Viable Product 
 The implemented MVP provides a functional browser-based fraud intelligence prototype  capable of: 
*	Displaying monitored transaction information 
*	Classifying displayed transactions by risk level 
*	Searching and filtering transaction records 
*	Reviewing suspicious cases 
*	Examining evidence indicators 
*	Reviewing account behaviour 
*	Examining account, device and beneficiary relationships 
*	Recording investigator decisions 
*	Importing CSV transaction data 
*	Providing customer security guidance 
 These functions are present in the current implementation. 
 Current Limitations 
 The current implementation is a frontend prototype. 
 The CSV import currently reads the uploaded file and reports the number of records loaded;  it does not yet dynamically calculate new risk scores from every imported CSV record. 
 The displayed transaction risk scores and case information are therefore demonstration data  within the current MVP. 
 Stretch Goals 
 Future versions can include: 
*	Backend database 
*	Real-time transaction ingestion 
*	Automated risk-score calculation 
*	Machine-learning anomaly detection 
*	Historical transaction modelling 
*	Real-time alert generation 
*	Persistent case storage 
*	Authentication and role-based access 
*	Advanced graph/network analysis 
*	External fraud intelligence integration 
*	Automated investigation reports 
*	Audit logging 
*	Production deployment 
 These features are considered future enhancements and are not claimed as implemented in  the current MVP. 
---  
 8. Live Demonstration 
 The system can be demonstrated through a complete investigation workflow. 
 ## Demonstration Scenario 
 Step 1 
 Open the SHIELD Command Centre. 
 ### Step 2 
 Show the operational dashboard containing: 
 ```text 
 Transactions Monitored 
 Open Alerts 
 High Risk Accounts 
 Active Cases 
 ``` 
 The current interface displays these operational indicators. 
 ### Step 3 
 Navigate to **Transaction Review**. 
 Search for: 
 ```text 
 TXN-84921 
 ``` 
 Step 4 
 Open the transaction investigation. 
 Display: 
 ```text 
 Account: ACC-10482 
 Amount: ₹48,500 
 Beneficiary: BEN-7712 
 Risk Score: 92 
 ``` 
 Step 5 
 Navigate to **Case Management**. 
 Open the evidence indicators one by one. 
 Step 6 
 Show: 
 ```text 
 Transaction Deviation 
 Device Relationship 
 Beneficiary Relationship 
 Transaction Velocity 
 ``` 
 Step 7 
 Navigate to **Relationship Analysis**. 
 Demonstrate the relationship between: 
 ```text 
 Account 
 ↕ 
 Device 
 ↕ 
 Beneficiary 
 ↕ 
 Other Accounts 
 ``` 
 The system provides filtering for account relationships, shared devices and shared  beneficiaries. 
 Step 8 
 Return to Case Management. 
 Select: 
 ```text 
 Escalate 
 ``` 
 Enter investigator notes. 
 Step 9 
 Save the investigation. 
 This demonstrates the complete workflow: 
 ```text 
 DATA 
 ↓ 
 TRANSACTION REVIEW 
 ↓ 
 RISK IDENTIFICATION 
 ↓ 
 EVIDENCE 
 ↓ 
 RELATIONSHIP ANALYSIS 
 ↓ 
 INVESTIGATION 
 ↓ 
 DECISION 
 ``` 
 --- 

