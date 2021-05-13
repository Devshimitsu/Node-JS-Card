#!/usr/bin/env node
"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

// Questions after the card 
const questions = [
    {   
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Want To Visit My ${chalk.green.bold("YouTube Channel")}?`,
                value: () => {
                    open("https://yt.devshimitsu.tk/");
                    console.log("\nDone, see you soon.\n");
                }
            },
            {
                name: "Just quit.",
                value: () => {
                    console.log("Good Bye!\n");
                }
            }
        ]
    }
];

// Data for the card
const data = {
    name: chalk.bold.blue("                   Kartik(Devshimitsu)"),
    work: `${chalk.white("Student,")} ${chalk
        .hex("#2b82b2")
        .bold("WebDesigner")}`,
    instagram: chalk.cyan("https://www.instagram.com/") + chalk.gray("devshimitsu/"),
    twitter: chalk.cyan("https://twitter.com/") + chalk.gray("Devshimitsu"),
    github: chalk.cyan("https://github.com/") + chalk.gray("Devshimitsu"),
    link: chalk.cyan("https://link") + chalk.gray(".devshimitsu.tk/"),
    web: chalk.magenta("https://devshimitsu.tk"),

    labelWork: chalk.white.bold("           Work:"),
    labelinstagram: chalk.white.bold("      Instagram:"),
    labelTwitter: chalk.white.bold("        Twitter:"),
    labelGitHub: chalk.white.bold("         GitHub:"),
    labelLink: chalk.white.bold("          Links:"),
    labelWeb: chalk.white.bold("        WebSite:"),
};

// Build the card
const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        `${data.labelinstagram}  ${data.instagram}`,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLink}  ${data.link}`,
        `${data.labelWeb}  ${data.web}`,
        ``,
        `${chalk.italic(
            "I'm curious, enthusiastic and student most of the time."
        )}`,
        `${chalk.italic("The rest of the time I experiment with my code,")}`,
        `${chalk.italic("to bring my ideas to life.")}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "yellow"
    }
);

// Print the card
console.log(me);

// Optional tip to help users use the links
const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "ctrl + click"
    )} on the links above`,
    '',
].join("\n");

// Show the tip 
console.log(tip);

// Ask the Inquirer questions. 
prompt(questions).then(answer => answer.action());