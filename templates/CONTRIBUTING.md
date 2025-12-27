# Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

This project adheres to a code of conduct. By participating, you are expected to uphold this code.

## How to Contribute

1.  **Fork the Project**
    - Click the 'Fork' button at the top right of the main repository page. This creates a copy of the repository in your own GitHub account.

2.  **Clone Your Fork**
    - Clone the repository to your local machine.
    ```bash
    git clone https://github.com/your-username/project-name.git
    cd project-name
    ```

3.  **Create a New Branch**
    - Create a descriptive branch for your changes. Use the branch naming conventions outlined in `projects/README.md`.
    ```bash
    # Example: for a new feature
    git checkout -b feature/AmazingFeature
    
    # Example: for a bug fix
    git checkout -b fix/SomeBug
    ```

4.  **Make Your Changes**
    - Implement your feature or bug fix.
    - Ensure your code adheres to the existing style and conventions.

5.  **Commit Your Changes**
    - Commit your changes with a clear and descriptive commit message, following the Conventional Commits specification.
    ```bash
    git commit -m "feat(scope): Add some AmazingFeature"
    ```

6.  **Push to Your Branch**
    - Push your changes up to your forked repository on GitHub.
    ```bash
    git push origin feature/AmazingFeature
    ```

7.  **Open a Pull Request**
    - Go to the original repository on GitHub.
    - You should see a prompt to create a Pull Request from your new branch.
    - Fill out the pull request template with the required information, and submit it for review.

## Pull Request Process

1.  Ensure any install or build dependencies are removed before the end of the layer when doing a build.
2.  Update the README.md with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations and container parameters.
3.  Increase the version numbers in any examples files and the README.md to the new version that this Pull Request would represent. The versioning scheme we use is [SemVer](http://semver.org/).
4.  You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.
