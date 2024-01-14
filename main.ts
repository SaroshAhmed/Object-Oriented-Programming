//Personality of a Person using Class & Objects
import inquirer from "inquirer"
let answers = await inquirer.prompt([{
    type:'input',
    name:'pName',
    message:'Write your name'

},
{
    type:'list',
    name:'pPersonality',
    message: ' What is your personality',
    choices:['stay at home and watch netflix','Go out with friends']
},
{
    type:'input',
    name:'p2Name',
    message:'Write your name second user'

},
{
    type:'list',
    name:'p2Personality',
    message: ' What is your personality second user',
    choices:['stay at home and watch netflix','Go out with friends']
}
])
//creates a class 'personality' which displays the personality
class personality{
    //a class global variable to store data coming from constructor parameters
    className:string    
    classPersonality:string
    typesPersonality:string[]=['Introvert', 'Extravert']
    //a function which takes the data of a person's name and choice and saves it in name & personality parameters
    constructor(name:string, personality:string){
        //saves the parameter data of constructor in global class variables with this. to be called anywhere 
        //.this is used to to refer to new objects being created, it saves the data of a new object and is used a placeholder
        this.className=name
        this.classPersonality=personality
    }
    //a class to display object and handle the choices
    displayAnswer(){
        switch(answers.pPersonality){
            case 'stay at home and watch netflix':
                console.log(answers.pName+' is an '+ this.typesPersonality[0])
                break;
            case 'Go out with friends':
                console.log(answers.pName+' is an '+ this.typesPersonality[1])
                break;
        }
        switch(answers.p2Personality){
            case 'stay at home and watch netflix':
                console.log(answers.p2Name+' is an '+ this.typesPersonality[0])
                break;
            case 'Go out with friends':
                console.log(answers.p2Name+' is an '+ this.typesPersonality[1])
                break;
        }
    }
    //submit is use to check if the user has submitted data or not
    submit(){
        console.log('data not submitted')
    }
}
//a child class which takes all the functions from 'personality' class and changes are made in it
class namePerson extends personality{
    //if the user has submitted their data then submit() changes into this
    submit(){
        console.log('Data of user '+ this.className+' Submitted successfully')
    }
}
//a new object is created which stores the value in the child class as the child class inherits all the functions of its parent class
let personOne = new namePerson(answers.pName, answers.pPersonality)
//the person object is then used to call the functions
personOne.submit()
let personTwo = new namePerson(answers.p2Name, answers.p2Personality)
personTwo.submit()
let displayAns = new namePerson(answers.pName&&answers.p2Name, answers.pPersonality&& answers.p2Personality)
displayAns.displayAnswer()
