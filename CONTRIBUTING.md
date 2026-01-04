# Contributing to Breezium Dashboard

Thanks for your interest in contributing to the project! Below is a guide to help you contribute safely without breaking the repository history:

## TL;DR (Contributor Quick Start)

- Fork the repo and work **only** on your own `feature/*` and `snap/*` branches
- Use `snap/*` branches for experiments, then **squash-merge into `feature/*`**
- Keep `feature/*` branches **working and clean** (see [Git Workflow Policy](#2-git-workflow-policy))
- Never commit to or merge into `staging` or `main`
- Rebase from `upstream/staging` before opening a PR
- Do **not** commit binaries, dependencies, or build artifacts (use `.gitignore`)

> If you’re unsure about anything, open an issue before pushing changes.

---

## 1. How to Contribute (Fork & PR Flow)

All external contributors should follow this flow:

1. **Fork** the repository to your GitHub account.
2. **Clone** your fork locally:
   ```bash
   git clone git@github.com:<your-username>/breezium-dashboard.git
   ```
3. **Create a feature branch** for your work:
   ```bash
   git switch -c feature/my-feature
   ```
4. **Follow the Git Workflow Policy** outlined below.
5. **Push** your feature branch to your fork:
   ```bash
   git push origin feature/my-feature
   ```
6. **Open a Pull Request** from `contributor-fork/feature/my-feature` → `upstream/staging`.  

> **Important:** Before opening a PR, pull from `upstream/staging` and rebase if necessary to check for updates and resolve any broken code. This prevents merge conflicts.

**Contributor restrictions for this repo:**

- Contributors **only work on their own `feature/*` branch and `snap/*` branches** on their fork.
- **Do not commit or merge** into `staging` or `main`.  
- The **maintainer** will merge approved feature branches into `staging`.

---

## 2. Git Workflow Policy

This project uses a **four-level Git workflow** designed to separate:

- experimentation
- work in progress
- completed features
- released goals

Goal: maintain a **truthful, readable history** while allowing freedom to experiment safely.

---

### 2.1 Philosophy

Most Git workflows optimize for a *clean, linear history*.  
This project instead prioritizes **intentional history**.

We want the Git graph to clearly show:

- **how** work evolved
- **where** experiments happened
- **when** goals were achieved

> Non-linear history is **intentional**, not accidental.

---

### 2.2 Branch Types Overview

| Branch Type   | Purpose                              | Stability |
|---------------|--------------------------------------|-----------|
| `snap/*`      | Snapshot experimentation             | May break |
| `feature/*`   | Complete working loops / components  | Must work |
| `staging`     | Integrated and tested state           | Stable    |
| `main`        | Released goals (timeline)             | Stable    |

> Optionally, `/*` may be replaced with a goal or scope name for personal convenience only.

---

### ⚠️ Important Note: Ignored Files

Never commit binaries, dependencies, or unwanted files (e.g., `node_modules`, build artifacts, log files, temporary editor files) to the repository.  

Use a `.gitignore` file to exclude these files from version control. This keeps the repository clean and prevents unnecessary bloat.  

Common `.gitignore` entries:
```
node_modules/
dist/
*.log
*.tmp
*.swp
.DS_Store
```

---

### 2.3 Commit Message Format

- Use **imperative verbs** in commit messages (base verb form).  
- Use **prefix** as appropriate (`feat:`, `fix:`, `snap:` etc.).  

Format:
```
<prefix>: <imperative verb> <short description>
```

Examples:
```
feat: complete goBack loop
fix: handle invalid credentials
refactor: simplify state machine
snap: add temporary UI layout
```

> **Scope/Goal names are not allowed in commit message prefix.**

---

### 2.4 Direct Commits

- Contributors **only commit to their own `feature/*` or `snap/*` branches**.  
- No direct commits to `staging` or `main`.  

---

### 2.5 Snap Branches (`snap/*`) 🧪

- Used for **experimental work** on your fork.  
- Merge into **feature branches** via **squash merge**.  

Naming:
```
snap/<optional-goal>
```

Example:
```
snap/ui-layout-test
snap/db-experiment
```

Commit examples:
```
snap: broken goBack logic
snap: add goBack button
snap: building goBack logic
```

> Since **snap** history is **squashed** before being merged into **feature**, there are no strict commit rules.

---

### 2.6 Feature Branches (`feature/*`) 🧩

- Represents **one coherent goal**.
- Receives merges **only from your `snap/*` branches** using **squash merge**.
- Must be working code before pushing PR.

Naming:
```
feature/<optional-goal>
```

Example:
```
feature/auth-system
feature/ui-goBack
feature/project-refactor
```

Commit prefixes:

| Prefix     | Meaning                                     |
| ---------- | ------------------------------------------- |
| `feat`     | New functionality                           |
| `fix`      | Bug fix                                     |
| `update`   | Improvement or enhancement                  |
| `refactor` | Internal restructuring (no behavior change) |
| `remove`   | Removing functionality                      |
| `docs`     | Documentation only                          |
| `chore`    | Minor chores (comments, typos, cleanup)     |

> **Only maintainers merge feature branches into `staging`.**

---

### 2.7 Staging & Main Branches

- Contributors **never commit or merge here**.  
- Maintainer handles all merges from approved feature branches into `staging` (using `--no-ff`) and from `staging` into `main` (using `--ff-only`).

---

### 2.8 Merge Rules Summary (Contributor Perspective)

| From        | To          | Allowed | Merge Type  | Notes                       |
| ----------- | ----------- | ------- | ----------- | --------------------------- |
| `snap/*`    | `feature/*` | ✅       | squash      | Must result in working code |
| `feature/*` | `staging`   | ❌       | maintainer  | PR approval required        |
| `staging`   | `main`      | ❌       | maintainer  | Maintainer only             |

---

## 3. Coding Guidelines

- Keep PRs small and focused
- Use clear names for variables and functions
- Write clean, readable code
- Avoid including unrelated changes in the same PR

---

## 4. Bug Reports

Please include:

- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)

---

## 5. Feature Requests

Open a GitHub Issue and describe:

- What problem it solves
- How it improves the project
