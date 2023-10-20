const inquirer = require('inquirer');

const fs = require('fs');

const Shape = require('./lib/shapes');

inquirer
    .prompt([
        {
            type: 'list',
            name:'shape',
            message:'What shape is your logo?',
            choices: ['square','circle','triangle'],
        },
        {
            type: 'input',
            name:'title',
            message:'What name would you like inside your logo?',
        },
        {
            type: 'input',
            name:'titleColor',
            message:'What color is your title?',
        },
        {
            type: 'input',
            name:'shapeColor',
            message:'What color is your logo shape?',
        }
    ])
    .then((answers) => {
        console.log(answers);
        const svg = new Shape(answers.shape, answers.title, answers.titleColor, answers.shapeColor);
        // const htmlPageContent = generateHTML(answers);
    
        fs.writeFile('shape.svg', svg.render(), (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!')
        );
    });