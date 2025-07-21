
# 📃 Pull Request Guide

Welcome! This guide explains how to create and manage pull requests (PRs) for this project.

---

## ✅ When to Create a Pull Request

- You've finished a new feature, bug fix, or update.
- You've tested your changes locally.
- Your code follows the team’s conventions and formatting rules.

---

## 🚀 Creating a Pull Request

1. **Create a Branch** (if not already on one):

   ```bash
   git checkout -b your-feature-name
    ```

2. **Make your changes** and **commit them**:

   ```bash
   git add .
   git commit -m "Add feature XYZ"
   ```

3. **Push your branch** to GitHub:

   ```bash
   git push origin your-feature-name
   ```

4. **Open a Pull Request**:

   - Go to the repo on GitHub.
   - Click the **“Compare & pull request”** button.
   - Fill out the PR form:

     - 📌 **Title**: A clear, short summary.
     - 📝 **Description**: Explain what you did and why.
     - 🎯 **Linked Issues** (if applicable): e.g., `Closes #12`

---

## 🔍 Review Process

- Repository admin will review your PR.
- Address any comments or requested changes.
- Once approved, the PR can be merged into `main`.

---

## ✅ Done? Merge

- If you have permission, click **“Merge pull request”**.
- Choose **“Squash and merge”** if your commits should be combined.
- Delete the branch afterward (optional but recommended).

---

## 🧼 Good Practices

- Keep PRs **small** and **focused**.
- Name branches clearly: `feature/login-form`, `fix/navbar-overlap`, etc.
- Tag reviewers using `@username`.
- Keep your branch up to date with `main`:

  ```bash
  git fetch origin
  git rebase origin/main
  ```

---

Thanks for contributing! 🎉
