let factions = ["Grineer", "Kuva Grineer", "Corpus", "Corpus Amalgam", "Infested", "Infested Deimos", "Orokin", "Sentient", "Narmer", "The Murmur", "Zariman"];

function damageIcon(name, colour, imageURL, desc, factionDamage, subtext="") {
    let factionDamages = [];

    factionDamages.push(
        '<div class="icon-info icon-info-left" style="--info-y: -40px; height: 40px; border: 0px;"> <div class="subheading">'+subtext+'</div> </div>'
    );

    factionDamages.push(
        '<div class="icon-info icon-info-left" style="--info-y: 0px; height: 120px"></div>'
    );

    factionDamages.push(
        '<div class="icon-info icon-info-right" style="--info-y: 0px; height: 120px"></div>'
    );

    factionDamages.push(
        '<div class="icon-info icon-info-left" style="--info-y: 0px; height: 120px;"> <div class="center-y small-text" style="margin-right: 70px;">'+desc+'</div></div>'
    );

    let factionCounter = 0;

    for (let i = 0; i < factions.length; i++) {
        if (factionDamage[i] == 1) continue;

        const faction = factions[i];
        const damage = Number.parseFloat(factionDamage[i]).toFixed(1);
        // true is left, false is right
        lr = 'left';
        h = factionCounter;
        col = 'white';
        if (damage < 1) { col = 'red'; }
        if (damage > 1) { col = 'green'; }

        factionDamages.push(
            '<div class="icon-info icon-info-right" style="--info-y: calc(100px * 1.2 / 4 * '+h+')"> <b style="color: '+col+';">'+damage+'x</b> <div class="center-y">'+faction+'</div></div>'
        );

        factionCounter++;
    }

    factionDamages.push(
        '<a class="icon-info icon-info-right" style="--info-y: calc(100px * 1.2 / 4 * '+3+')" href="https://warframe.fandom.com/wiki/Damage/'+name+'_Damage"> <div class="center-y">Wiki</div> </a>'
    );

    html = "";

    html += '<div class="icon center-y" style="--border-col: '+colour+'"><img src="'+imageURL+'" alt="">';
    html += '<div class="icon-info" style="--info-y: -40px; height: calc(40px + 120px); background-color: var(--col-dark);">';
    html += '<img src="'+imageURL+'" class="center-x" style="max-width: 70%; opacity: 0.3;">';
    html += '</div>';
    html += '<div class="icon-info" style="--info-y: -40px"><h2 class="center-x center-y">'+name+'</h2></div>';
    for (let i = 0; i < factionDamages.length; i++) {
        const element = factionDamages[i];
        html += element;
    }
    html += '</div>';

    return html
}

$("#basic-damage").append(damageIcon("Damage", "rgba(41,50,57,255)", "../resources/DamageIcon.png", 
    damageInfo["Damage"][0],
    [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]));
$("#basic-damage").append(damageIcon("Impact", "rgba(52,66,66,255)", "../resources/ImpactIcon.png", 
    damageInfo["Impact"][0],
    [1.5, 1.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]));
$("#basic-damage").append(damageIcon("Puncture", "rgba(53,47,41,255)", "../resources/PunctureIcon.png", 
    damageInfo["Puncture"][0],
    [1.0, 1.0, 1.5, 1.0, 1.0, 1.0, 1.5, 1.0, 1.0, 1.0, 1.0]));
$("#basic-damage").append(damageIcon("Slash", "rgba(56,42,43,255)", "../resources/SlashIcon.png", 
    damageInfo["Slash"][0], // needs calculator
    [1.0, 1.0, 1.0, 1.0, 1.5, 1.0, 1.0, 1.0, 1.5, 1.0, 1.0]));

$("#elemental-damage").append(damageIcon("Cold", "rgba(49,102,230,255)", "../resources/ColdIcon.png", 
    damageInfo["Cold"][0],
    [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.5, 1.0, 1.0, 1.0]));
$("#elemental-damage").append(damageIcon("Electricity", "rgba(73,35,112,255)", "../resources/ElectricityIcon.png", 
    damageInfo["Electricity"][0], // needs calculator
    [1.0, 1.0, 1.0, 1.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.5, 1.0]));
$("#elemental-damage").append(damageIcon("Heat", "rgba(119,54,0,255)", "../resources/HeatIcon.png", 
    damageInfo["Heat"][0], // needs calculator
    [1.0, 0.5, 1.0, 1.0, 1.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]));
$("#elemental-damage").append(damageIcon("Toxin", "rgba(42,76,51,255)", "../resources/ToxinIcon.png", 
    damageInfo["Toxin"][0],
    [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.5, 1.0, 1.0]));

$("#combinations-one").append(damageIcon("Blast", "rgba(84,29,32,255)", "../resources/BlastIcon.png", 
    damageInfo["Blast"][0], // needs calculator
    [1.0, 1.0, 1.0, 0.5, 1.0, 1.5, 1.0, 1.0, 1.0, 1.0, 1.0], "Heat + Cold"));
$("#combinations-one").append(damageIcon("Corrosive", "rgba(49,64,7,255)", "../resources/CorrosiveIcon.png", 
    damageInfo["Corrosive"][0],
    [1.5, 1.5, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0], "Toxin + Electricity"));
$("#combinations-one").append(damageIcon("Gas", "rgba(30,58,44,255)", "../resources/GasIcon.png", 
    damageInfo["Gas"][0],
    [1.0, 1.0, 1.0, 1.0, 1.0, 1.5, 1.0, 1.0, 1.0, 1.0, 1.0], "Toxin + Heat"));
$("#combinations-two").append(damageIcon("Magnetic", "rgba(35,43,45,255)", "../resources/MagneticIcon.png", 
    damageInfo["Magnetic"][0],
    [1.0, 1.0, 1.5, 1.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0], "Cold + Electricity"));
$("#combinations-two").append(damageIcon("Radiation", "rgba(152,74,0,255)", "../resources/RadiationIcon.png", 
    damageInfo["Radiation"][0],
    [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.5, 1.0, 1.5, 1.0], "Heat + Electricity"));
$("#combinations-two").append(damageIcon("Viral", "rgba(173,69,106,255)", "../resources/ViralIcon.png", 
    damageInfo["Viral"][0],
    [1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.5, 1.0, 1.0, 0.5, 1.0], "Cold + Toxin"));
    
$("#special-damage").append(damageIcon("Void", "rgba(6,104,108,255)", "../resources/VoidIcon.png", 
    damageInfo["Void"][0],
    [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.5]));
$("#special-damage").append(damageIcon("True", "rgba(86,68,30,255)", "resources/TrueIcon.png", 
    damageInfo["True"][0],
    [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]));