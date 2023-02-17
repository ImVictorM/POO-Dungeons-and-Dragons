# POO - Dungeons & Dragons 🐉

## Project Context 💡
Project-based on an RPG universe. Its primary purpose is to solidify the `OOP` and `SOLID` concepts. In the universe of this project, almost all beings that roam these lands belong to a defined race.

The various races (src/Races) define the characteristics of the characters within the game since its creation, such as their life points and dexterity. However, there are feral beings called monsters that don't have a specific race but can fight (src/Monster.ts & src/Dragon.ts).

Some beings also have energy. When training the use of energy, they start to have an archetype (src/Archetypes). In general, archetypes define a character's vocation, skills, and worldview: how they face situations, explore dungeons, or face monsters. As examples of present archetypes, we can mention warrior, mage, and necromancer.

Most beings are considered fighters (src/Fighter). On many occasions, fights can happen between different beings like characters and monsters (src/Battle).

### Acquired Knowledge 📖

In this project, I was able to:
- Implement in TypeScript: Classes, Instances, Attributes, and methods;
- Use inheritance to derive from other classes;
- Use composition to share code between different classes;
- Define abstract classes;
- Override methods;
- Apply solid principles.

## Main Technologies used 🧰
<table>
    <thead>
        <tr>
            <th>TypeScript</th>
            <th>Node.JS</th>
            <th>Docker</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="center">
                <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> 
                    <img 
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" 
                        alt="typescript" 
                        width="40" 
                        height="40"
                    /> 
                </a>
            </td>
            <td align="center">
                <a href="https://nodejs.org" target="_blank" rel="noreferrer"> 
                    <img 
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" 
                        alt="nodejs" 
                        width="40" 
                        height="40"
                    /> 
                </a>
            </td>
            <td align="center">
                <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> 
                    <img 
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" 
                        alt="docker" 
                        width="40" 
                        height="40"
                    /> 
                </a>
            </td>
        </tr>
    </tbody>
</table>

## Running the application ⚙️

1. Clone the repository and enter it
```
git clone git@github.com:ImVictorM/POO-Dungeons-and-Dragons.git && cd POO-Dungeons-and-Dragons
```
### Methods

<details>
<summary><h4>🐋 Running with docker (recommended)</h4></summary>

 > You must have docker and docker-compose installed
 
2. Get the containers running
```
docker-compose up -d
```
3. Enter the node container
```
docker exec -it trybers_and_dragons bash
```
4. Install the dependencies
```
npm install
```
</details>

<details>
<summary><h4>🖥️ Running locally</h4></summary>

 > You must have node installed
 
2. Install the dependencies
```
npm install
```
</details>

