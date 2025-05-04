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

## Detailed Tool Setup & AI Plugins

1. **GIPSY**: Set `GIPSY_API_KEY` and enable AI mapping: install `gipsy-ai` plugin
2. **GIDOCA**: Configure connection and add `gido-ai` for LLM drafting
3. **SAP**: Provide credentials, then install `sap-rpa` for automated BOM diffs
4. **ZAMIZ**: Enable analytics endpoint and deploy `zamiz-ml` model
5. **DACAS**: Connect data feed, add `dacas-classifier` via Docker
6. **PDMLink/PASS V2**: Set PLM URL and deploy `plm-view-extractor` service
7. **ARINA/airnavX**: Configure portal URL and add `airnavx-chatbot` module
8. **Additional Tools** (Arbortext, FrameMaker, IsoDraw, Creo, 3DVIA, Unity):
   - Install respective CLI tools
   - Add AI plugins: `arbortext-ai`, `fm-ste-check`, `isodraw-ai`, `creo-ai`, `composer-ai`, `unity-ai`

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

## Windows Setup

Below is a comprehensive, Windows‑friendly guide that transforms your repository’s prompt sequence into a set of actionable tasks on your Windows 11 system. This guide covers everything from cloning the repository to running AI‑enhanced commands for each Airbus SID tool. Each step is tailored to a Windows environment and includes batch file examples for automation.

### 1. Environment Preparation

#### a. Install Necessary Tools

* **Python:** Ensure it’s installed and added to your PATH. To verify, open PowerShell or Command Prompt and run:

  ```batch
  python --version
  ```
* **Node.js (if applicable):** Some AI plugins and npm utilities are mentioned. Confirm with:

  ```batch
  node --version
  npm --version
  ```
* **Git:** For cloning your repository, ensure Git is installed by running:

  ```batch
  git --version
  ```

#### b. Clone and Navigate to the Repository

Open Command Prompt or Windows Terminal and execute:

```batch
git clone https://your.repo.url/your-repository.git
cd your-repository
```

This brings the repository locally so you can work with its integration code and documentation.

### 2. Install Dependencies and Configure Environment

#### a. Install Dependencies

* **Python Dependencies:** If you have a `requirements.txt`, install the packages with:

  ```batch
  pip install -r requirements.txt
  ```
* **Node/NPM Dependencies:** If your project uses Node.js, run:

  ```batch
  npm install
  ```

#### b. Configure Airbus Tool Credentials

Set environment variables temporarily before running commands. For example:

```batch
set GIPSY_API_KEY=your_api_key_here
```

For persistent settings, add them via System Environment Variables.

### 3. Running the Integration Commands

#### a. Initialize the AI‑Enhanced Design Module

```batch
python -m gaia_air_software.ai_design --init
```

#### b. Execute AI‑Enhanced Utility Commands

```batch
arbortext-ai generate-module
fm-ste-check
isodraw-ai explode --parts 1,2,3
creo-ai suggest-view --procedure proc.xml
composer-ai animate --script steps.txt
unity-ai ar-setup --model model.u3d
csdb-ai search "fuel pump"
airnavx-ai analytics
```

### 4. Automating with a Windows Batch File

Create `run_integration.bat` with the following content:

```batch
@echo off
REM --- Set Environment Variables ---
set GIPSY_API_KEY=your_api_key_here
REM (set other Airbus tool variables as needed)

REM --- Change to the Repository Directory ---
cd /d C:/path/to/your/repository

REM --- Initialize the AI-Enhanced Module ---
python -m gaia_air_software.ai_design --init

REM --- Run Additional AI-Enhanced Commands ---
arbortext-ai generate-module
fm-ste-check
isodraw-ai explode --parts 1,2,3
creo-ai suggest-view --procedure proc.xml
composer-ai animate --script steps.txt
unity-ai ar-setup --model model.u3d
csdb-ai search "fuel pump"
airnavx-ai analytics

pause
```

### 5. Contributing and Testing

Use Git and npm test as described in `docs/contributing.md`:

```batch
git checkout -b feature/your-feature
npm test gipsy-ai-mapping
```

### 6. Next Steps

Consider scheduling these steps via the Windows Task Scheduler or integrating them into CI pipelines (e.g., GitHub Actions) for automated testing and deployment.

## Installing Dependencies for the SMAIE Global Directive

To set up the SMAIE Global Directive in the GAIA AIR software, follow these steps:

1. **Review Documentation**

   Review the official documentation for the SMAIE Global Directive to understand its specific requirements and dependencies.

2. **Update `requirements.txt`**

   Add any new dependencies required by the SMAIE Global Directive to the `requirements.txt` file in the GAIA AIR software repository.

3. **Install Dependencies**

   Install the new dependencies using the following command:

   ```bash
   pip install -r requirements.txt
   ```

4. **Configure the Directive**

   Configure the SMAIE Global Directive by adding the necessary configuration files and settings to the GAIA AIR software.

5. **Verify Installation**

   Verify that the SMAIE Global Directive has been successfully set up by running the following command:

   ```bash
   python -m gaia_air_software.smaie --verify
   ```

   You should see a confirmation message indicating that the directive has been successfully configured.
