4/13/2019 Access Labs Hackathon sponsored by Blockstack and 2U

Team 2: Redmond Chan, Jonathan "SY" Chan, Joseph Gao, Weijun Huang, Benson Yu


Design Statement
How might we improve patient identification for genomic researchers, so that they can find patients with desired genetic markers?


1. What problem are we solving?
There are over 6000 known single gene disorders with only ~5% of them having a treatment option. There is still lots of research to be done and researchers need ways to quickly identify the patients that have these mutation sequences.

2. Who is the user that is suffering real pain from the problem?
Researchers in the field of genomics when looking for patients to enroll into clinical trials. They need to find the patients from a pool of applicants that have the single point mutations that they are interested in.  

3. What will the situation look like for the user when the user’s problem is addressed?
For user convenience, files can be uploaded in csv format or the user can input desired sequences manually.

Usage case 1: User will be able to upload a control sequence from a healthy specimen. User then uploads a set of sequences from a pool of patients. The patients whose sequences have mismatches with the control sequence will be filtered out and the locations of where the mismatches occur will be highlighted.

Usage case 2: User can upload a control sequence for a known genetic defect. User then uploads a set of sequences from a pool of patients. Patients with matching sequences will be highlighted.


Project was created with React, Redux. No API's were used in the making of this app.
