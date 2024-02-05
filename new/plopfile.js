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
                path: "./stories/{{UpperPascalCase}}/{{UpperPascalCase}}.tsx",
                templateFile: "./plop-templates/Component.tsx.hbs"
            },
            {
                type: "add",
                path: "./stories/{{UpperPascalCase}}/{{UpperPascalCase}}.stories.ts",
                templateFile: "./plop-templates/Component.stories.ts.hbs"
            }
        ]
    }),
    plop.setGenerator("readme",{
        description: "Create Readme File",
        prompts: [
            {
                type: "checkbox",
                name:"Use_Lib_Frame",
                message: "Use Library And FrameWork All Select",
                choices: ["React","Vue","Angular","Next","Nuxt","Gatsby","Svelte","Jquery","VanillaJS"]
            }
        ],
        actions:[
            {
                type: "add",
                path: "./PLOP_GEN_README.md",
                templateFile: "./plop-templates/README.md.hbs"
            },
            {
                type: "append",
                path: "./PLOP_GEN_README.md",
                templateFile: "### {{Use_Lib_Frame}}\n\n",
            }
        ]
    })
}