# Contributing to GAIA AIR SOFTWARE

We welcome contributions to the GAIA AIR SOFTWARE project! By contributing, you help us improve the project and make it more useful for everyone. Please read the following guidelines before contributing.

## Code of Conduct

We expect all contributors to adhere to our [Code of Conduct](code_of_conduct.md). Please read it to understand the standards of behavior we expect from our community.

## How to Contribute

### Reporting Issues

If you encounter any issues or bugs, please report them by opening an issue on our [GitHub repository](https://github.com/Robbbo-T/GAIA-AIR-SOFTWARE/issues). When reporting an issue, please provide as much detail as possible, including steps to reproduce the issue, your environment, and any relevant logs or screenshots.

### Submitting Pull Requests

We welcome pull requests for bug fixes, new features, and improvements. To submit a pull request, follow these steps:

1. **Fork the Repository**

   Fork the GAIA-AIR-SOFTWARE repository to your GitHub account.

2. **Clone the Repository**

   Clone the forked repository to your local machine:

   ```bash
   git clone https://github.com/<your-username>/GAIA-AIR-SOFTWARE.git
   ```

3. **Create a Branch**

   Create a new branch for your changes:

   ```bash
   git checkout -b my-feature-branch
   ```

4. **Make Changes**

   Make your changes to the codebase. Ensure that your code follows the project's coding standards and includes appropriate tests.

5. **Commit Changes**

   Commit your changes with a descriptive commit message:

   ```bash
   git commit -m "Add feature X"
   ```

6. **Push Changes**

   Push your changes to your forked repository:

   ```bash
   git push origin my-feature-branch
   ```

7. **Open a Pull Request**

   Open a pull request on the original repository. Provide a clear and descriptive title and description for your pull request, explaining the changes you have made and why they are necessary.

### Reviewing Pull Requests

We appreciate your patience while we review your pull request. Our team will review the changes and provide feedback. If any changes are requested, please address them promptly. Once your pull request is approved, it will be merged into the main branch.

## Contributing to the Integration of Specific Airbus Tools

We welcome contributions to the integration of specific Airbus tools like GIPSY, GIDOCA, SAP, ZAMIZ, DACAS, PDMLink/PASS V2, and ARINA. To contribute to the integration of these tools, follow these steps:

1. **Understand the Requirements**

   Review the official documentation for the specific Airbus tool you want to integrate to understand its requirements and dependencies.

2. **Clone the GAIA AIR Repository**

   Clone the GAIA AIR software repository to your local machine:

   ```bash
   git clone https://github.com/Robbbo-T/GAIA-AIR-SOFTWARE.git
   ```

3. **Install Dependencies**

   Follow the instructions in the `docs/installation.md` file to install the required dependencies for GAIA AIR software.

4. **Create a New Branch**

   Create a new branch in your local repository to work on the integration:

   ```bash
   git checkout -b integrate-<tool-name>
   ```

   Replace `<tool-name>` with the name of the Airbus tool you want to integrate (e.g., gipsy, gidoca, sap).

5. **Modify the Codebase**

   Make the necessary changes to the GAIA AIR software codebase to integrate the Airbus tool. This may involve updating configuration files, adding new modules, or modifying existing code.

6. **Test the Integration**

   Thoroughly test the integration to ensure that the Airbus tool works seamlessly with the GAIA AIR software.

7. **Document the Integration**

   Update the relevant documentation, such as the `docs/usage.md` and `docs/installation.md` files, to include instructions on how to use the Airbus tool with the GAIA AIR software.

8. **Submit a Pull Request**

   Once you have completed the integration and testing, submit a pull request to the GAIA AIR software repository. Provide a clear and descriptive title and description for your pull request, explaining the changes you have made and why they are necessary.

## Tool Insights & AI Integration

When contributing, refer to the detailed descriptions:
- Understand each Airbus tool's current role (README.md)
- Follow AI integration patterns for new features
- Add tests for AI pipelines, e.g., `npm test gipsy-ai-mapping`
- Document new AI commands in usage.md

## AI-driven enhancements:

- Propose new LLM prompts for module drafting
- Share RPA scripts for SAP BOM diffs
- Validate vision AI outputs for IsoDraw & Creo Illustrate

## Additional Notes

- Please ensure that your code is well-documented and includes appropriate tests.
- If you are planning to make significant changes, please open an issue first to discuss your proposal with the team.
- We appreciate your contributions and look forward to working with you!

Thank you for contributing to GAIA AIR SOFTWARE!
