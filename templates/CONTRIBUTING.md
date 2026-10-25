# Contributing

Thanks for taking the time to contribute. These steps describe a typical workflow for repositories that use this template; check the target project's README for any project-specific instructions.

## Workflow

1. Fork the repository on GitHub.
2. Clone your fork and enter the project directory:

   ```bash
   git clone https://github.com/YOUR-USERNAME/REPOSITORY.git
   cd REPOSITORY
   ```

3. Create a branch that describes your change:

   ```bash
   git checkout -b feature/short-description
   ```

   Use `fix/`, `docs/`, or `test/` when those better describe the work.

4. Make the change and run the relevant tests or checks. Follow the project's existing style and avoid unrelated edits.
5. Commit with a clear message. Conventional Commits is a useful format:

   ```bash
   git commit -m "fix(scope): explain the correction"
   ```

6. Push your branch and open a pull request against the original repository. Explain the reason for the change and include reproduction steps or screenshots where useful.

## Before opening a pull request

- Update documentation when behavior, setup, configuration, or outputs change.
- Add or update tests when the change affects behavior.
- Include relevant versions and environment details when they affect reproducibility.
- Remove generated files and local secrets that do not belong in version control.
- Report checks honestly. Do not claim tests passed if you did not run them.

Each repository may have its own release process, review requirements, or versioning scheme. Follow its documented rules rather than assuming one process applies to every project.
