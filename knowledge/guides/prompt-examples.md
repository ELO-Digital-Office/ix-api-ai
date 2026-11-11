# Prompt Examples

Example prompts for AI coding agents that use this repository. Start the agent
with the repository available in the workspace so it can load the skill
[skills/elo-indexserver-rest/SKILL.md](../../skills/elo-indexserver-rest/SKILL.md).

## Java/Gradle demo: package with mask and aspects

Creates a Generation 2 demo application. Background:
[metadata-gen2.md](metadata-gen2.md),
[metadata-generations.md](../concepts/metadata-generations.md).

```text
Generate a demo Java/gradle application that inserts a package with a mask and aspects into the ELO repository.
Create a document that uses the mask.
Use the information located at /home/wolfgang/git/tools/ix-api-ai/README.md .
Generate a launch.json file to be able to start the program in DEBUG mode by pressing F5.
Read login credentials and Indexserver URL from environment variables.
Create a default environment for debugging with IX_URL=http://localhost:9090/ix-Repository1/ix , IX_USER=Administrator, IX_PASSWORD=elo
```

## .NET application imports supplier data

Write a C# .NET application that imports the supplier data from a business central instance into an ELO repository.
Use the information at https://github.com/ELO-Digital-Office/ix-api-ai to connect to ELO. 
Create a metadata Gen2 mask and suitable aspects in a package.

## Time tracking 

Create a time tracking system that allows employees to record their working hours. 
Employees should be able to start and stop their working time through a web interface. 
They should also be able to start and end breaks. Additionally, 
they should have access to an overview where they can view their past working hours and break times, 
organized by month.
The data should be entered through a web interface and stored in the ELO Repository. 
You can find more information here: `/home/wolfgang/git/tools/ix-api-ai/`
Authentication should be handled through the ELO system.
A folder should be created in ELO for each employee. 
Within each employee's folder, a subfolder should be created for each year, and within each year, a subfolder for each month.
The metadata mask of each monthly folder should contain a Many Aspect in which the time tracking records for that month are stored.
Create a Java application that listens on port 8080 and handles requests from the browser-based user interface.

Use the following technologies:
- **Backend:** Java
- **Web server:** Undertow
- **Frontend:** Vue 3.js
- **Authentication:** ELO system
- **Data storage:** ELO Repository

