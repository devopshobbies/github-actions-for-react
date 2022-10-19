# Automation-Reactjs-practice

### Dummy project for practicing CI/CD in React.js and typescript with github actions

---
> You can use this project as the basis for your **CI/CD** Frontend projects by using github actions

> in this project I tried to use all aspects for For CI/CD Frontend

### **techs**:
> **eslint**, **prettier**, **jest**, **testing-library**, **cypress e2e**, **husky**, **codecov**, **gh-pages**

> There are three jobs in this workflow: 
> 1. test
> 2. build
> 3. deploy

---
1. **test:**
> in this job I'v added **linting**, **jest** testing and **codecov coverage** to the pipline

2. **build:**
> The job involved installing all dependencies, building the project with type checking, testing **e2e** with **Cypress**, and uploading test videos artifacts

3. **deploy:**
> We have a **CD** section in this job by building and deploying the project to the **github pages**