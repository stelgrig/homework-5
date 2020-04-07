const users = [
    {
        username: 'Bob',
        password: '123',
    },
    {
        username: 'Jane',
        password: '456',
    }
]

const hivandutyun = [
    {
        name: 'grip',
        symptoms: ['haz', 'jermutyun', 'glxacav'],
        bujum: 'pentalgin',
    },
    {
        name: 'angina',
        symptoms: ['kokordi cav', 'glxacav'],
        bujum: 'paracitamol',
    }
]

let username = prompt("Please enter username");
let password = prompt("Please enter password");
let loginIntoSystem = false;

//alert(username + " and " + password);

for (let i=0; i<users.length; i++) {
    if(users[i].username === username){        
        if(users[i].password === password)
        {
            loginIntoSystem = true; 
        }
    }
}

if(loginIntoSystem === true){
    let sym = prompt("Please enter symptoms separeted ','");
    let symptoms = sym.split(",")

    for (i=0; i<hivandutyun.length; i++) {
        for(let j = 0; j<symptoms.length; j++){
            if(hivandutyun[i].symptoms.includes(symptoms[j])){
                alert("Hivandutyan anune " + hivandutyun[i].name + ". Bujume " + hivandutyun[i].bujum);
            }
        }
    }
}

