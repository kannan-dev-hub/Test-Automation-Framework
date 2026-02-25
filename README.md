# 🚀 Test Automation Framework using Playwright (JavaScript)

A scalable and structured End-to-End Test Automation Framework built using **Playwright with JavaScript**.

This repository demonstrates modern UI automation practices including structured test organization, configuration management, reporting, and version control integration.

---

# 📌 Project Overview

This project is divided into two main sections:

1️⃣ JavaScript fundamentals (for automation foundation)  
2️⃣ Playwright-based End-to-End UI automation framework  

The framework is designed to be:
- Clean
- Scalable
- Maintainable
- Industry-ready

---

# 🛠 Tech Stack

- Playwright
- JavaScript (ES6+)
- Node.js
- Git
- GitHub

---

# 📂 Project Structure

```
Test-Automation-Framework
│
├── javascript/                    # JavaScript practice programs
│   ├── 1_DataType.js
│   ├── 2_StringDemo.js
│   ├── Arrays.js
│   └── Operations.js
│
└── playwright/                    # Playwright Automation Framework
    ├── e2e-tests/                 # End-to-End test cases
    │   └── example.spec.js
    │
    ├── playwright.config.js       # Playwright configuration
    ├── package.json               # Dependencies
    ├── package-lock.json
    ├── test-results/              # Execution artifacts
    ├── playwright-report/         # HTML reports
    └── .gitignore
```

---

# ⚙️ Installation & Setup Guide

## Step 1: Clone Repository

```bash
git clone https://github.com/kannan-dev-hub/Test-Automation-Framework.git
```

## Step 2: Navigate to Framework Folder

```bash
cd Test-Automation-Framework/playwright
```

## Step 3: Install Dependencies

```bash
npm install
```

## Step 4: Install Playwright Browsers

```bash
npx playwright install
```

---

# ▶️ Test Execution

## Run All Tests

```bash
npx playwright test
```

## Run Specific Test

```bash
npx playwright test e2e-tests/example.spec.js
```

## Run in Headed Mode

```bash
npx playwright test --headed
```

## Run in Debug Mode

```bash
npx playwright test --debug
```

---

# 📊 Reporting

Generate and open HTML report:

```bash
npx playwright show-report
```

Reports are generated under:

```
playwright/playwright-report/
```

---

# 🔥 Key Features

✔ Structured folder architecture  
✔ Dedicated JavaScript learning module  
✔ Playwright configuration management  
✔ Parallel test execution support  
✔ Retry mechanism support  
✔ HTML reporting  
✔ Git integrated version control  
✔ Beginner to scalable framework design  

---

# 📈 Future Enhancements

- Page Object Model (POM) implementation
- Environment-based configuration
- CI/CD integration using GitHub Actions
- Data-driven testing
- API + UI hybrid framework
- Docker execution support

---

# 👨‍💻 Author

**Kannan**  
QA Automation Engineer  
Specialized in UI Automation using Playwright  

Skills:
- JavaScript
- Python
- Playwright
- Automation Framework Design
- Git & GitHub
- UI Test Automation

---

# ⭐ Support

If you found this project helpful, please consider starring the repository.
