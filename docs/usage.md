# Usage Instructions

## Introduction

This document provides usage instructions for the software components of the GAIA AIR initiative. It includes examples and use cases to help you understand how to integrate the components into the GAIA AIR framework.

## AI-Assisted Design

### Overview

The AI-Assisted Design module helps in designing aircraft with the assistance of artificial intelligence. It includes features for autonomous navigation, route planning, and predictive maintenance.

### Usage

1. **Initialize the AI-Assisted Design Module**

   To initialize the AI-Assisted Design module, run the following command:

   ```bash
   python -m gaia_air_software.ai_design --init
   ```

2. **Design an Aircraft**

   Use the following command to design an aircraft:

   ```bash
   python -m gaia_air_software.ai_design --design <input_parameters>
   ```

   Replace `<input_parameters>` with the specific parameters for your design.

3. **Optimize the Design**

   To optimize the design, run the following command:

   ```bash
   python -m gaia_air_software.ai_design --optimize <design_file>
   ```

   Replace `<design_file>` with the path to your design file.

### Example

Here is an example of designing and optimizing an aircraft:

```bash
python -m gaia_air_software.ai_design --init
python -m gaia_air_software.ai_design --design "wing_span=35, engine_type=turbojet"
python -m gaia_air_software.ai_design --optimize "design_output.json"
```

## Quantum Simulations

### Overview

The Quantum Simulations module provides tools for simulating various aspects of aircraft operation using quantum computing.

### Usage

1. **Initialize the Quantum Simulations Module**

   To initialize the Quantum Simulations module, run the following command:

   ```bash
   python -m gaia_air_software.quantum_sim --init
   ```

2. **Run a Simulation**

   Use the following command to run a simulation:

   ```bash
   python -m gaia_air_software.quantum_sim --run <simulation_parameters>
   ```

   Replace `<simulation_parameters>` with the specific parameters for your simulation.

### Example

Here is an example of running a quantum simulation:

```bash
python -m gaia_air_software.quantum_sim --init
python -m gaia_air_software.quantum_sim --run "flight_path=NYC-LAX, weather_conditions=clear"
```

## Technical Documentation

### Overview

The Technical Documentation module provides tools for creating and maintaining technical documentation in compliance with COAFI and AMEDEO standards.

### Usage

1. **Initialize the Technical Documentation Module**

   To initialize the Technical Documentation module, run the following command:

   ```bash
   python -m gaia_air_software.tech_doc --init
   ```

2. **Create Documentation**

   Use the following command to create documentation:

   ```bash
   python -m gaia_air_software.tech_doc --create <doc_parameters>
   ```

   Replace `<doc_parameters>` with the specific parameters for your documentation.

### Example

Here is an example of creating technical documentation:

```bash
python -m gaia_air_software.tech_doc --init
python -m gaia_air_software.tech_doc --create "doc_type=maintenance, aircraft_model=A320"
```

## AI-Assisted Tools for Technical Documentation

### Overview

The AI-Assisted Tools module provides advanced features for creating and maintaining technical documentation with the help of artificial intelligence. These tools aim to streamline the documentation process, improve accuracy, and reduce the time required for updates.

### Usage

1. **Initialize the AI-Assisted Tools Module**

   To initialize the AI-Assisted Tools module, run the following command:

   ```bash
   python -m gaia_air_software.ai_tools --init
   ```

2. **Create AI-Assisted Documentation**

   Use the following command to create AI-assisted documentation:

   ```bash
   python -m gaia_air_software.ai_tools --create <doc_parameters>
   ```

   Replace `<doc_parameters>` with the specific parameters for your documentation.

3. **Optimize Documentation with AI**

   To optimize the documentation using AI, run the following command:

   ```bash
   python -m gaia_air_software.ai_tools --optimize <doc_file>
   ```

   Replace `<doc_file>` with the path to your documentation file.

### Example

Here is an example of creating and optimizing AI-assisted technical documentation:

```bash
python -m gaia_air_software.ai_tools --init
python -m gaia_air_software.ai_tools --create "doc_type=maintenance, aircraft_model=A320"
python -m gaia_air_software.ai_tools --optimize "doc_output.json"
```

## Integration into GAIA AIR Framework

### Overview

The software components can be integrated into the GAIA AIR framework to create a comprehensive ecosystem of intelligent and sustainable aircraft.

### Steps

1. **Initialize the Framework**

   To initialize the GAIA AIR framework, run the following command:

   ```bash
   python -m gaia_air_software.framework --init
   ```

2. **Integrate Components**

   Use the following command to integrate the components:

   ```bash
   python -m gaia_air_software.framework --integrate <component_name>
   ```

   Replace `<component_name>` with the name of the component you want to integrate (e.g., ai_design, quantum_sim, tech_doc, ai_tools).

### Example

Here is an example of integrating the AI-Assisted Design, Quantum Simulations, and AI-Assisted Tools components into the GAIA AIR framework:

```bash
python -m gaia_air_software.framework --init
python -m gaia_air_software.framework --integrate ai_design
python -m gaia_air_software.framework --integrate quantum_sim
python -m gaia_air_software.framework --integrate ai_tools
```

## Integrating Specific Airbus Tools

### Overview

The GAIA AIR software can be integrated with specific Airbus tools like GIPSY, GIDOCA, SAP, ZAMIZ, DACAS, PDMLink/PASS V2, and ARINA. This section provides detailed steps for integrating these tools.

### Integrating GIPSY

1. **Understand GIPSY Requirements**

   Review the official GIPSY documentation to understand its requirements and dependencies.

2. **Clone the GAIA AIR Repository**

   Clone the GAIA AIR software repository to your local machine:

   ```bash
   git clone https://github.com/Robbbo-T/GAIA-AIR.git
   ```

3. **Install Dependencies**

   Follow the instructions in the `docs/installation.md` file to install the required dependencies for GAIA AIR software.

4. **Create a New Branch**

   Create a new branch in your local repository to work on the integration:

   ```bash
   git checkout -b integrate-gipsy
   ```

5. **Modify the Codebase**

   Make the necessary changes to the GAIA AIR software codebase to integrate GIPSY. This may involve updating configuration files, adding new modules, or modifying existing code.

6. **Test the Integration**

   Thoroughly test the integration to ensure that GIPSY works seamlessly with the GAIA AIR software.

7. **Document the Integration**

   Update the relevant documentation, such as the `docs/usage.md` and `docs/installation.md` files, to include instructions on how to use GIPSY with the GAIA AIR software.

8. **Submit a Pull Request**

   Once you have completed the integration and testing, submit a pull request to the GAIA AIR software repository.

### Integrating GIDOCA

1. **Understand GIDOCA Requirements**

   Review the official GIDOCA documentation to understand its requirements and dependencies.

2. **Clone the GAIA AIR Repository**

   Clone the GAIA AIR software repository to your local machine:

   ```bash
   git clone https://github.com/Robbbo-T/GAIA-AIR.git
   ```

3. **Install Dependencies**

   Follow the instructions in the `docs/installation.md` file to install the required dependencies for GAIA AIR software.

4. **Create a New Branch**

   Create a new branch in your local repository to work on the integration:

   ```bash
   git checkout -b integrate-gidoca
   ```

5. **Modify the Codebase**

   Make the necessary changes to the GAIA AIR software codebase to integrate GIDOCA. This may involve updating configuration files, adding new modules, or modifying existing code.

6. **Test the Integration**

   Thoroughly test the integration to ensure that GIDOCA works seamlessly with the GAIA AIR software.

7. **Document the Integration**

   Update the relevant documentation, such as the `docs/usage.md` and `docs/installation.md` files, to include instructions on how to use GIDOCA with the GAIA AIR software.

8. **Submit a Pull Request**

   Once you have completed the integration and testing, submit a pull request to the GAIA AIR software repository.

### Integrating SAP

1. **Understand SAP Requirements**

   Review the official SAP documentation to understand its requirements and dependencies.

2. **Clone the GAIA AIR Repository**

   Clone the GAIA AIR software repository to your local machine:

   ```bash
   git clone https://github.com/Robbbo-T/GAIA-AIR.git
   ```

3. **Install Dependencies**

   Follow the instructions in the `docs/installation.md` file to install the required dependencies for GAIA AIR software.

4. **Create a New Branch**

   Create a new branch in your local repository to work on the integration:

   ```bash
   git checkout -b integrate-sap
   ```

5. **Modify the Codebase**

   Make the necessary changes to the GAIA AIR software codebase to integrate SAP. This may involve updating configuration files, adding new modules, or modifying existing code.

6. **Test the Integration**

   Thoroughly test the integration to ensure that SAP works seamlessly with the GAIA AIR software.

7. **Document the Integration**

   Update the relevant documentation, such as the `docs/usage.md` and `docs/installation.md` files, to include instructions on how to use SAP with the GAIA AIR software.

8. **Submit a Pull Request**

   Once you have completed the integration and testing, submit a pull request to the GAIA AIR software repository.

### Integrating ZAMIZ

1. **Understand ZAMIZ Requirements**

   Review the official ZAMIZ documentation to understand its requirements and dependencies.

2. **Clone the GAIA AIR Repository**

   Clone the GAIA AIR software repository to your local machine:

   ```bash
   git clone https://github.com/Robbbo-T/GAIA-AIR.git
   ```

3. **Install Dependencies**

   Follow the instructions in the `docs/installation.md` file to install the required dependencies for GAIA AIR software.

4. **Create a New Branch**

   Create a new branch in your local repository to work on the integration:

   ```bash
   git checkout -b integrate-zamiz
   ```

5. **Modify the Codebase**

   Make the necessary changes to the GAIA AIR software codebase to integrate ZAMIZ. This may involve updating configuration files, adding new modules, or modifying existing code.

6. **Test the Integration**

   Thoroughly test the integration to ensure that ZAMIZ works seamlessly with the GAIA AIR software.

7. **Document the Integration**

   Update the relevant documentation, such as the `docs/usage.md` and `docs/installation.md` files, to include instructions on how to use ZAMIZ with the GAIA AIR software.

8. **Submit a Pull Request**

   Once you have completed the integration and testing, submit a pull request to the GAIA AIR software repository.

### Integrating DACAS

1. **Understand DACAS Requirements**

   Review the official DACAS documentation to understand its requirements and dependencies.

2. **Clone the GAIA AIR Repository**

   Clone the GAIA AIR software repository to your local machine:

   ```bash
   git clone https://github.com/Robbbo-T/GAIA-AIR.git
   ```

3. **Install Dependencies**

   Follow the instructions in the `docs/installation.md` file to install the required dependencies for GAIA AIR software.

4. **Create a New Branch**

   Create a new branch in your local repository to work on the integration:

   ```bash
   git checkout -b integrate-dacas
   ```

5. **Modify the Codebase**

   Make the necessary changes to the GAIA AIR software codebase to integrate DACAS. This may involve updating configuration files, adding new modules, or modifying existing code.

6. **Test the Integration**

   Thoroughly test the integration to ensure that DACAS works seamlessly with the GAIA AIR software.

7. **Document the Integration**

   Update the relevant documentation, such as the `docs/usage.md` and `docs/installation.md` files, to include instructions on how to use DACAS with the GAIA AIR software.

8. **Submit a Pull Request**

   Once you have completed the integration and testing, submit a pull request to the GAIA AIR software repository.

### Integrating PDMLink/PASS V2

1. **Understand PDMLink/PASS V2 Requirements**

   Review the official PDMLink/PASS V2 documentation to understand its requirements and dependencies.

2. **Clone the GAIA AIR Repository**

   Clone the GAIA AIR software repository to your local machine:

   ```bash
   git clone https://github.com/Robbbo-T/GAIA-AIR.git
   ```

3. **Install Dependencies**

   Follow the instructions in the `docs/installation.md` file to install the required dependencies for GAIA AIR software.

4. **Create a New Branch**

   Create a new branch in your local repository to work on the integration:

   ```bash
   git checkout -b integrate-pdmlink-pass-v2
   ```

5. **Modify the Codebase**

   Make the necessary changes to the GAIA AIR software codebase to integrate PDMLink/PASS V2. This may involve updating configuration files, adding new modules, or modifying existing code.

6. **Test the Integration**

   Thoroughly test the integration to ensure that PDMLink/PASS V2 works seamlessly with the GAIA AIR software.

7. **Document the Integration**

   Update the relevant documentation, such as the `docs/usage.md` and `docs/installation.md` files, to include instructions on how to use PDMLink/PASS V2 with the GAIA AIR software.

8. **Submit a Pull Request**

   Once you have completed the integration and testing, submit a pull request to the GAIA AIR software repository.

### Integrating ARINA

1. **Understand ARINA Requirements**

   Review the official ARINA documentation to understand its requirements and dependencies.

2. **Clone the GAIA AIR Repository**

   Clone the GAIA AIR software repository to your local machine:

   ```bash
   git clone https://github.com/Robbbo-T/GAIA-AIR.git
   ```

3. **Install Dependencies**

   Follow the instructions in the `docs/installation.md` file to install the required dependencies for GAIA AIR software.

4. **Create a New Branch**

   Create a new branch in your local repository to work on the integration:

   ```bash
   git checkout -b integrate-arina
   ```

5. **Modify the Codebase**

   Make the necessary changes to the GAIA AIR software codebase to integrate ARINA. This may involve updating configuration files, adding new modules, or modifying existing code.

6. **Test the Integration**

   Thoroughly test the integration to ensure that ARINA works seamlessly with the GAIA AIR software.

7. **Document the Integration**

   Update the relevant documentation, such as the `docs/usage.md` and `docs/installation.md` files, to include instructions on how to use ARINA with the GAIA AIR software.

8. **Submit a Pull Request**

   Once you have completed the integration and testing, submit a pull request to the GAIA AIR software repository.

## Tool Descriptions & AI Optimization

- **PTC Arbortext**: Use for S1000D module authoring. With AI: invoke `arbortext-ai generate-module` for draft creation.
- **Adobe FrameMaker**: For legacy manual edits. With AI: `fm-ste-check` macro to auto-correct STE compliance.
- **PTC IsoDraw**: For vector illustrations. With AI: `isodraw-ai explode --parts 1,2,3` to auto-produce exploded view.
- **Creo Illustrate**: For 3D to 2D conversion. With AI: `creo-ai suggest-view --procedure proc.xml` for camera angles.
- **3DVIA Composer**: For animations. With AI: `composer-ai animate --script steps.txt` to generate animations automatically.
- **Vuforia/Unity**: For AR. With AI: `unity-ai ar-setup --model model.u3d` to configure AR overlays with voice guidance.
- **CSDB**: Central data store. With AI: `csdb-ai search "fuel pump"` to semantically find relevant modules.
- **airnavX**: Publish output. With AI: `airnavx-ai analytics` to view usage heatmap and confusing sections.

## SMAIE Global Directive

### 📎 Policy Hook

```ts
// Applied by gaia-policy-engine on boot
import { SMAIE_GLOBAL_DIRECTIVE } from '@gaia/policy-engine/directives/smaie.directive';
applyGlobalDirective(SMAIE_GLOBAL_DIRECTIVE);
```

### ✅ Operational Effect

Ensures all SMAIE agents meet standardized expertise and ethical criteria.

Enables reliable delegation of domain-specific cognitive tasks.

Supports secure, explainable, and auditable AI operations at scale.

## Running Tests

To run tests for the GAIA AIR software, use the following command:

```bash
npm test
```

This command will execute the test suite and provide feedback on the results.

## Building the Project

To build the GAIA AIR software, use the following command:

```bash
npm run build
```

This command will compile the project and generate the necessary build artifacts.

# Unified Overview & Master Index

## 1. Purpose & Scope

This document provides the master overview and unified index for the entire GAIA Documentation Ecosystem, encompassing both GAIA AIR and GAIA SPACE programs. It integrates the structural organization defined by the Air Table of Contents (AToC - based on ATA chapters) and the Space Table of Contents (SToC - based on SNS chapters) with the semantic definitions from the GAIA Aerospace Table of Program Content Ontology (GASTOP-CO2).

The purpose is to establish a single entry point for navigating all technical documentation, standards, and project artifacts, ensuring consistency, traceability, and support for advanced knowledge management, including AI agent integration, across all GAIA platforms.

## 2. Foundational Framework Components

The GAIA Documentation Ecosystem is built upon the following core components:

- **Air Table of Contents (AToC)**: Organizes GAIA AIR documentation based on ATA chapters (00-99) and additional common parts. (See Section 5)
- **Space Table of Contents (SToC)**: Organizes GAIA SPACE documentation based on a Space Numbering System (SNS) with parts covering Spacecraft Systems (SS), Mission Operations (MO), Environment (SE), Launch (LS), Project Management (PM), and Research (SR). (See Section 6)
- **GAIA Aerospace Table of Program Content Ontology (GASTOP-CO2)**: Provides the semantic layer defining the meaning and relationships between different content types across both domains. (Refer to GASToP-CO2 document for full details)
- **GAIA-CO-ASD-LIB Standard**: Defines common standards for file formats, naming conventions, and metadata applicable to all documents. (See Section 4)
- **Unified INFOCODE Index**: A common set of codes classifying document purpose across both AToC and SToC. (See Section 3)

## 3. Unified INFOCODE-INDEX

| Code   | Description                        | File Format            | AToC | SToC |
|--------|------------------------------------|------------------------|------|------|
| OV     | Overview                           | Markdown (.md)         | ✓    | ✓    |
| SPEC   | Specification                      | YAML (.yaml)           | ✓    | ✓    |
| SDD    | System Design Description          | YAML (.yaml)           | ✓    | ✓    |
| ICD    | Interface Control Document         | YAML (.yaml)           | ✓    | ✓    |
| PROC   | Procedure                          | Markdown (.md)         | ✓    | ✓    |
| DWG    | Drawing                            | SVG (.svg)             | ✓    | ✓    |
| LIST   | List                               | CSV (.csv)             | ✓    | ✓    |
| REQ    | Requirements                       | YAML (.yaml)           | ✓    | ✓    |
| GLO    | Glossary                           | Markdown (.md)         | ✓    | ✓    |
| PLAN   | Plan                               | Markdown (.md)         | ✓    | ✓    |
| ARCH   | Architecture                       | YAML (.yaml) + SVG (.svg) | ✓    | ✓    |
| SEC    | Security                           | YAML (.yaml)           | ✓    | ✓    |
| TEST   | Test Documentation                 | YAML (.yaml)           | ✓    | ✓    |
| TRN    | Training Material                  | Markdown (.md)         | ✓    | ✓    |
| UG     | User Guide                         | Markdown (.md)         | ✓    | ✓    |
| CAL    | Calculation / Analysis Report      | Markdown (.md)         | ✓    | ✓    |
| RPT    | Report                             | Markdown (.md)         | ✓    | ✓    |
| RES    | Research Document                  | Markdown (.md)         | ✓    | ✓    |
| MAN    | Manual                             | Markdown (.md)         | ✓    | ✓    |
| CAT    | Catalog / Parts List               | CSV (.csv)             | ✓    | ✓    |
| FIG    | Figure / Illustration              | SVG (.svg)             | ✓    | ✓    |
| CONOPS | Concept of Operations              | Markdown (.md)         | ✓    | ✓    |
| WBS    | Work Breakdown Structure           | Markdown (.md)         | ✓    | ✓    |
| JSON   | JSON Data / Schema                 | JSON (.json)           | ✓    | ✓    |
| BOM    | Bill of Materials                  | CSV (.csv)             | ✓    | ✓    |
| SWD    | Software Documentation (Container) | Markdown (.md)         | ✓    | ✓    |
| ADMIN  | Administrative Document            | Markdown (.md)         | ✓    | ✓    |
| REF    | Reference Document / Pointer       | Markdown (.md)         | ✓    | ✓    |
| IDX    | Index Document                     | Markdown (.md)         | ✓    | ✓    |
| MPD    | Maintenance Planning Document      | YAML (.yaml)           | ✓    | ✓    |
| WDM    | Wiring Diagram Manual              | Markdown (.md)         | ✓    | ✗    |
| CERT   | Certification Document             | Markdown (.md)         | ✓    | ✓    |
| PRES   | Presentation                       | Markdown (.md)         | ✓    | ✓    |
| BASE   | Baseline Document                  | Markdown (.md)         | ✓    | ✓    |
| MD     | Markdown Document (Generic)        | Markdown (.md)         | ✓    | ✓    |
| SCRIPT | Script / Code                      | (Various)              | ✓    | ✓    |
| NB     | Notebook (e.g., Jupyter)           | (Various)              | ✓    | ✓    |
| ORB    | Orbital Analysis                   | YAML (.yaml)           | ✗    | ✓    |
| RAD    | Radiation Analysis                 | YAML (.yaml)           | ✗    | ✓    |
| THERM  | Thermal Analysis                   | YAML (.yaml)           | ✓    | ✓    |
| SIM    | Simulation                         | YAML (.yaml)           | ✓    | ✓    |
| AERO   | Aerodynamic Analysis               | YAML (.yaml)           | ✓    | ✗    |
| PROP   | Propulsion Analysis                | YAML (.yaml)           | ✓    | ✓    |
| STRUCT | Structural Analysis                | YAML (.yaml)           | ✓    | ✓    |
| AVION  | Avionics Analysis                  | YAML (.yaml)           | ✓    | ✓    |
| XDOM   | Cross-Domain Reference             | Markdown (.md)         | ✓    | ✓    |

## 4. GAIA-CO-ASD-LIB Standard (Unified)

### File Formats

- **YAML (.yaml)**: Structured technical specifications, system descriptions, interface definitions, requirements, analysis inputs/outputs.
- **Markdown (.md)**: Narrative documentation, procedures, user guides, reports, manuals, glossaries, plans, administrative docs, reference pointers, indices.
- **SVG (.svg)**: Diagrams, drawings, figures.
- **CSV (.csv)**: Tabular data, lists, catalogs, BOMs.
- **JSON (.json)**: Machine-readable data structures, configuration, schemas.
- **Various**: Scripts, Notebooks (specific extension depends on language/tool).

### Naming Convention (Unified)

plaintext `[Project]-[Domain]-[Chapter]-[Section]-[Subject]-[InfoCode]-[Variant].[ext]`

- **[Project]**: e.g., GAIA
- **[Domain]**: AIR, SPACE, or COMMON
- **[Chapter]**: ATA Chapter (e.g., 21) for AIR, SNS Chapter (e.g., SS-21) for SPACE, or Functional Code (e.g., PROP) for COMMON.
- **[Section]**: e.g., 10 (ATA/SNS section)
- **[Subject]**: Descriptive subject identifier (e.g., PropulsionSys)
- **[InfoCode]**: Code from the INFOCODE-INDEX (e.g., SDD)
- **[Variant]**: e.g., A (AMPEL360XWLRGA variant), B, etc.
- **.[ext]**: File extension based on InfoCode/Format (e.g., .yaml, .md)

### Examples

- `GAIA-AIR-21-10-EnvCtrlSys-SDD-A.yaml`
- `GAIA-SPACE-SS-21-10-PropulsionSys-SDD-A.yaml`
- `GAIA-COMMON-PROP-00-PropulsionPrinciples-OV-A.md`

### Metadata (Unified Standard Example)

Each document must include the following standardized metadata header (example shown for YAML, adapt for Markdown):

```yaml
GAIA-CO-ASD-LIB Metadata Block v1.0
title: Document Title
documentID: GAIA-[Domain]-[Chapter]-[Section]-[Subject]-[InfoCode]-[Variant]
revision: X.X
date: YYYY-MM-DD # Effective date of this revision
status: [DRAFT|REVIEW|APPROVED|RELEASED|OBSOLETE] # Current status
applicability: # Structured Applicability
  platforms: [Platform1, Platform2] # e.g., [AMPEL360, AMPEL360+] or [AMPEL-SPACE]
  serial_numbers: [ALL | Range | List]
  modifications: [ModID1, ModID2 | ALL | NONE]
authors: # List of contributors to this revision
  - Author Name <email@example.com>
  - AI Agent Name (Model Version)
securityClass: [UNCLASSIFIED|RESTRICTED|CONFIDENTIAL|SECRET]
distribution: Distribution Statement (e.g., Distribution A)
export_control: Export Control Rating (e.g., EAR99, ITAR)
keywords: # Relevant search keywords
  - Keyword1
  - Keyword2
references: # Links to external standards or internal foundational docs
  - documentID: Referenced_Standard_ID
    title: Title of Referenced Standard
  - documentID: Foundational_Doc_ID
    title: Title of Foundational Document
related_documents: # Links to other GAIA documents within the ecosystem
  - documentID: Related_Doc_ID_1
    title: Title of Related Document 1
    relationship: [PARENT|CHILD|REFERENCES|IMPLEMENTS|VERIFIES|CONSTRAINS|...]
  - documentID: Related_Doc_ID_2
    title: Title of Related Document 2
    relationship: ...
revision_history:
  - revision: X.X
    date: YYYY-MM-DD
    author: Author Name
    summary: Description of changes in this revision
  - revision: X.Y
    date: YYYY-MM-DD
    author: Author Name
    summary: Description of changes in previous revision
```

### Document Title (for Markdown)

```markdown
# Document Title
```

(... Document Content Starts Here ...)

## 5. Master Index Part I: GAIA AIR (AToC Structure)

This section outlines the structure based on ATA chapters for Air Systems.

### Expand Part I: ATA Chapters (00-99) Outline

## 6. Master Index Part II: GAIA SPACE (SToC Structure)

This section outlines the structure based on the Space Numbering System (SNS) for Space Systems.

### Part II: Spacecraft Systems (SS 00-99)

### Expand Part II: Spacecraft Systems (SS 00-99) Outline

### Part III: Mission Operations (MO 00-99)

### Expand Part III: Mission Operations (MO 00-99) Outline

### Part IV: Space Environment (SE 00-99)

### Expand Part IV: Space Environment (SE 00-99) Outline

### Part V: Launch Systems (LS 00-99)

### Expand Part V: Launch Systems (LS 00-99) Outline

### Part VI: Space Project Management (PM 00-99)

(Note: This should ideally be unified with the Common PM Part)

### Expand Part VI: Space Project Management (PM 00-99) Outline

### Part VII: Space Research Systems (SR 00-99)

### Expand Part VII: Space Research Systems (SR 00-99) Outline

## 8. Common Parts (Referenced by both AToC & SToC)

### Expand Common Parts Outline

## 8. Schema Extensions

(Refer to document GAIA-ATA-SCHEMA-EXT-v0.2 for details on extensions like interfaces, security, etc.)

## 9. Document Status Definitions

| Status    | Description                                      |
|-----------|--------------------------------------------------|
| DRAFT     | Document is in development and not yet approved  |
| REVIEW    | Document is under technical or editorial review  |
| APPROVED  | Document has been approved but not yet published |
| RELEASED  | Document has been published and is in effect     |
| OBSOLETE  | Document has been superseded or is no longer applicable |

## 10. Cross-Reference Index

(A unified cross-reference index covering key interactions between Air, Space, and Common systems will be maintained separately)

End of Unified Overview & Master Index (v1.3 - Fully Expanded)
