# Project notes

This folder contains guidance for documenting projects in a way that is useful to someone who did not build them.

## What a useful project page includes

- The problem and who it affects.
- The scope of the work, including what is out of scope.
- Inputs, data sources, standards, and assumptions.
- The method and the reason for important technical choices.
- Results with units, context, and a way to reproduce them.
- Tests or checks performed, plus known limitations.
- Setup instructions and a clear license.

## Repository conventions

Use names that tell readers what a project does. Keep names readable and avoid encoding every implementation detail into the repository name.

Suggested branch prefixes:

- `feature/` for a new capability.
- `fix/` for a bug fix.
- `docs/` for documentation changes.
- `refactor/` for internal improvements that should not change behavior.
- `test/` for test additions or corrections.

Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) when practical. A useful message describes the change, for example `docs(readme): explain input data requirements`.

## Review checklist

Before publishing a project, check that:

1. Setup instructions work on a clean environment.
2. Paths, links, and commands are current.
3. Results can be reproduced from documented inputs.
4. Limitations and unvalidated features are stated plainly.
5. Screenshots and example data do not expose private information.
6. The license matches how the project may be reused.

Profile pins should show a representative mix of current work, engineering relevance, and projects with clear documentation. Keep them updated as the work changes.
