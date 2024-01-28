module.exports = ( 
    /** @type {import('plop').NodePlopAPI} */
    plop
) => {
    plop.setGenerator("component",{
        description: "create Components And Story Files",
        prompts: [{
            type: "input",
            name: "UpperPascalCase",
            message: "Input Components Name(UpperPascalCase)"
        }],
        actions: [
            {
                type: "add",
                path: "./stories/{{UpperPascalCase}}.tsx",
                templateFile: "./plop-templates/Component.tsx.hbs"
            },
            {
                type: "add",
                path: "./stories/{{UpperPascalCase}}.stories.ts",
                templateFile: "./plop-templates/Component.stories.ts.hbs"
            }
        ]
    })
}