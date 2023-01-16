# NestJs-CRUD-API for registering organization's employee hierarchy or structure

This Repository assumes medium level organization management structure with different level of positions/roles Hierarchy. At the top of the Hierarch there is CEO and every position below a given hierarchy will answer/Report to the immediate position in the organization's position structure hierarchy

shall create employee position/role
Build RESTFull API using NestJS (version >= 9) , PostgreSQL or SQL Server database as data store
The position should be hierarchical there is a parent child relationship between the positions e.g. CEO can be root position no parent and CFO is a child of CEO

shall get and list the positions in a tree mode with unlimited n positions e.g.
 CEO
 ├── CTO
 │   └── Project Manager
 │       └── Product Owner
 │           ├── Tech Lead
 │           │   ├── Frontend Developer
 │           │   ├── Backend Developer
 │           │   ├── DevOps Engineer
 │           │   └── ..
 │           ├── QA Engineer
 │           ├── Scrum Master
 │           └── ...
 ├── CFO
 │   ├── Chef Accountant
 │   │   ├── Financial Analyst
 │   │   └── Account and Payable
 │   └── Internal Audit
 ├── COO
 │   ├── Product Manager
 │   ├── Operation Manager
 │   ├── Customer Relation
 │   └── ...
 └── HR
 
Requirement to use the API

Be sure Node is installed in your machine

Install Nest CLI via npm i -g @nestjs/cli

nest new project-name

Navigate to your project-name via cd project-name

Create Controler,Module and Service using the commands 

Use the Controler,Module and Service names in this repository
1. nest g controller users-> to create controler
2. nest g module users-> to create module
3. nest g service users-> to create service

copy and paste the code in the Controler,Module and Service to newly created project

To test the API install the Swagger API

run the API via npm run start:dev


