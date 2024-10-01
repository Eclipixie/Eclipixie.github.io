let prime = false;

let frameBaseName;
let frameIcon;

function SetFrame(frameName) {
    let frame = FrameInfo(frameName);
    frameBaseName = frameName;

    frameIcon = "https://media.overframe.gg/v2/256x/Lotus/Interface/Icons/StoreIcons/Warframes/" + frame.name + ".png.webp";
    
    swapIconFunc = "SwitchPrime()";
    
    // ensuring stuff doesn't break
    if (frame.primeInfo == undefined) { swapIconFunc = "javascript:console.log('No Prime icon.')"; }

    abilityIcons = [];

    for (let i = 0; i < 4; i++) {
        if (implemented.includes(frame.name)) {
            abilityIcons.push("../resources/images/abilityIcons/" + frame.abilities[i].imageName);
        }
        else {
            abilityIcons.push(""); // TODO: get placeholder image
        }

        if (Object.keys(helminth).includes(frame.name) && // check if helminth is recorded for the frame
            helminth[frame.name] === i) { // check if we're looking at the correct ability
            $("#ability" + (i + 1)).attr("class", "ability helminth");
        }
        else { $("#ability" + (i + 1)).attr("class", "ability"); }
    }

    //#region Abilities
    const abilSanitisation = /<.*?>/;

    // this targets the second element in the contents of the target element. I need it so it doesn't delete the icon and header
    $(".passive").contents().filter(function(){ return this.nodeType == 3; }).last() 
        .replaceWith(frame.passiveDescription.replace(abilSanitisation, ""));

    $("#ability1 div h3").text(frame.abilities[0].name);
    $("#ability1 div img").attr("src", abilityIcons[0]);
    $("#ability1").contents().filter(function(){ return this.nodeType == 3; }).last()
        .replaceWith(frame.abilities[0].description.replace(abilSanitisation, ""));

    $("#ability2 div h3").text(frame.abilities[1].name);
    $("#ability2 div img").attr("src", abilityIcons[1]);
    $("#ability2").contents().filter(function(){ return this.nodeType == 3; }).last()
        .replaceWith(frame.abilities[1].description.replace(abilSanitisation, ""));

    $("#ability3 div h3").text(frame.abilities[2].name);
    $("#ability3 div img").attr("src", abilityIcons[2]);
    $("#ability3").contents().filter(function(){ return this.nodeType == 3; }).last()
        .replaceWith(frame.abilities[2].description.replace(abilSanitisation, ""));

    $("#ability4 div h3").text(frame.abilities[3].name);
    $("#ability4 div img").attr("src", abilityIcons[3]);
    $("#ability4").contents().filter(function(){ return this.nodeType == 3; }).last()
        .replaceWith(frame.abilities[3].description.replace(abilSanitisation, ""));
    //#endregion

    SetPrime(false);
}

function SetPrime(setPrime) {
    prime = setPrime;

    let frame = parsed[frameBaseName];

    if (setPrime) { frame = frame.primeInfo; }

    $("title").text(frame.name);

    $("#frameName").text(frame.name);
    $("#frameHealth").text(frame.health + 100);
    $("#frameShield").text(frame.shield + 100);
    $("#frameArmour").text(frame.armor);
    $("#frameEnergy").text(frame.power + 50);

    if (setPrime) {
        frameIcon = "https://media.overframe.gg/v2/256x/Lotus/Interface/Icons/StoreIcons/Primes/" + frame.name.replace(/ /g,'') + ".png.webp";
    }
    else {
        frameIcon = "https://media.overframe.gg/v2/256x/Lotus/Interface/Icons/StoreIcons/Warframes/" + frame.name + ".png.webp";
    }
    
    $("#frameIcon").attr("onclick", swapIconFunc);
    
    $("#frameIcon img").attr("src", frameIcon);
}

function SwitchPrime() {
    prime = !prime;
    SetPrime(prime);
}

SetFrame("Jade");

SetPrime(false);

for (let i = 0; i < Object.values(frames).length; i++) {
    const frameName = Object.values(frames)[i];
    $("#frameSelector").append('<option value="'+frameName+'">'+frameName+'</option>')
}

$("#frameSelector").val("Jade");