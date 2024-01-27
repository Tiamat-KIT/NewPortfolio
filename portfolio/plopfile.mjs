const fs = require("fs")

const comp_dir = fs
    .readdirSync("./components/Auto")
    .map((it) => ({name:it,value: it}))


module.exports = (
    /** @type {import('plop').NodePlopAPI} */
    plop
    ) => {
    // create your generators here
    plop.setGenerator('component', {
        description: 'create component file',
        prompts: [{
            type: "list",
            name: "feature",
            message: "feature name please",
            choices: comp_dir
        },{
            type: "input",
            name: "UpperPascalCase",
            message: "component UpperPascalCase please"
        }], // array of inquirer prompts
        actions: [
            {
                type:"add",
                path: "./stories/{{UpperPascalCase}}.tsx",
                templateFile: "./plop-templates/Component.tsx.hbs"
            },
            {
                type: "add",
                path: "./stories/{{UpperPascalCase}}.css",
                templateFile: "./plop-templates/Component.css.hbs"
            },
            {
                type: "add",
                path: "./stories/{{UpperPascalCase}}.stories.ts",
                templateFile: "./plop-templates/Component.stories.ts.hbs"
            }
        ]  // array of actions
    });
};