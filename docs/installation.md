# Installation Instructions

## Prerequisites and Dependencies

Before installing the software components, ensure that you have the following prerequisites and dependencies installed on your system:

- Python 3.8 or higher
- Git
- Docker (optional, for containerized deployment)
- Virtualenv (optional, for virtual environment management)

## Setup Process

Follow these steps to set up the software components:

1. **Clone the Repository**

   Clone the GAIA-AIR-SOFTWARE repository to your local machine using the following command:

   ```bash
   git clone https://github.com/Robbbo-T/GAIA-AIR-SOFTWARE.git
   ```

2. **Navigate to the Project Directory**

   Change to the project directory:

   ```bash
   cd GAIA-AIR-SOFTWARE
   ```

3. **Create a Virtual Environment (Optional)**

   It is recommended to create a virtual environment to manage dependencies. You can create a virtual environment using the following command:

   ```bash
   python -m venv venv
   ```

   Activate the virtual environment:

   - On Windows:

     ```bash
     venv\Scripts\activate
     ```

   - On macOS and Linux:

     ```bash
     source venv/bin/activate
     ```

4. **Install Dependencies**

   Install the required dependencies using the following command:

   ```bash
   pip install -r requirements.txt
   ```

5. **Run Initial Setup Script**

   Run the initial setup script to configure the software components:

   ```bash
   python setup.py
   ```

6. **Verify Installation**

   Verify that the installation was successful by running the following command:

   ```bash
   python -m gaia_air_software --version
   ```

   You should see the version number of the software components displayed.

## Installing Dependencies for Specific Airbus Tools

To integrate specific Airbus tools like GIPSY, GIDOCA, SAP, ZAMIZ, DACAS, PDMLink/PASS V2, and ARINA, follow these steps:

1. **Review Documentation**

   Review the official documentation for each Airbus tool to understand its specific requirements and dependencies.

2. **Update `requirements.txt`**

   Add any new dependencies required by the Airbus tools to the `requirements.txt` file in the GAIA AIR software repository.

3. **Install Dependencies**

   Install the new dependencies using the following command:

   ```bash
   pip install -r requirements.txt
   ```

## Setting Up Virtual Environments and Managing Dependencies

To manage dependencies for different projects separately and avoid conflicts, use virtual environments. Follow these steps:

1. **Create a Virtual Environment**

   Create a virtual environment using the following command:

   ```bash
   python -m venv <env_name>
   ```

   Replace `<env_name>` with the name of your virtual environment.

2. **Activate the Virtual Environment**

   Activate the virtual environment:

   - On Windows:

     ```bash
     <env_name>\Scripts\activate
     ```

   - On macOS and Linux:

     ```bash
     source <env_name>/bin/activate
     ```

3. **Install Dependencies**

   Install the required dependencies using the following command:

   ```bash
   pip install -r requirements.txt
   ```

4. **Deactivate the Virtual Environment**

   To deactivate the virtual environment, use the following command:

   ```bash
   deactivate
   ```

## Additional Notes

- For containerized deployment, refer to the `docker/README.md` file for instructions on building and running Docker containers.
- If you encounter any issues during the installation process, please refer to the troubleshooting section in the `docs/troubleshooting.md` file or open an issue on the GitHub repository.
