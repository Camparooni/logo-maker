const inquirer = require('inquirer');

const fs = require('fs');

const Shape = require('./lib/shapes');

function promptUser() {
    inquirer
        .prompt([
            {
                type: 'list',
                name:'shape',
                message:'What shape would you like your logo to be?',
                choices: ['square','circle','triangle'],
            },
            {
                type: 'input',
                name:'title',
                message:'What text would you like displayed in your logo? (up to three characters)',
            },
            {
                type: 'input',
                name:'titleColor',
                message:'Choose your logos text color',
            },
            {
                type: 'input',
                name:'shapeColor',
                message:'Choose your background color',
            }
        ])

    .then((answers) => {
        if (answers.title.length > 3) {
            console.log('Display text must me no more than three characters');
            promptUser();
        } else {
        console.log(answers);
        const svg = new Shape(answers.shape, answers.title, answers.titleColor, answers.shapeColor);
        // const htmlPageContent = generateHTML(answers);
    
        fs.writeFile('logo.svg', svg.render(), (err) =>
            err ? console.log(err) : console.log('Successfully created logo.svg!')
        );
    }});
}

promptUser();