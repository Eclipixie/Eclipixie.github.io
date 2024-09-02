let factions = ["Grineer", "Kuva Grineer", "Corpus", "Corpus Amalgam", "Infested", "Infested Deimos", "Orokin", "Sentient", "Narmer", "The Murmur", "Zariman"];

function damageIcon(name, colour, imageURL, factionDamage) {
    let factionDamages = [];

    let factionCounter = 0;

    for (let i = 0; i < factions.length; i++) {
        if (factionDamage[i] == 1) continue;

        const faction = factions[i];
        const damage = Number.parseFloat(factionDamage[i]).toFixed(1);
        // true is left, false is right
        lr = 'left';
        h = (factionCounter);
        col = 'white';
        if (damage < 1) { col = 'red'; }
        if (damage > 1) { col = 'green'; }

        factionDamages.push(
            '<div class="icon-info icon-info-left" style="--info-y: calc(100px * 1.2 / 4 * '+h+')"> <b style="color: '+col+';">'+damage+'x</b> <div class="center-y">'+faction+'</div></div>'
        );

        factionCounter++;
    }

    factionDamages.push(
        '<a class="icon-info icon-info-left" style="--info-y: calc(100px * 1.2 / 4 * '+3+')" href="https://warframe.fandom.com/wiki/Damage/'+name+'_Damage"> <div class="center-y">Wiki</div> </a>'
    );

    html = "";

    html += '<div class="icon center-y" style="--border-col: '+colour+'"><img src="'+imageURL+'" alt="">';
    html += '<div class="icon-info" style="--info-y: -40px"><h2 class="center-x center-y">'+name+'</h2></div>';
    for (let i = 0; i < factionDamages.length; i++) {
        const element = factionDamages[i];
        html += element;
    }
    html += '</div>';

    return html
}

$("#basic-damage").append(damageIcon("Damage", "rgba(41,50,57,255)", "resources/DamageIcon.png", 
    [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]));
$("#basic-damage").append(damageIcon("Impact", "rgba(52,66,66,255)", "resources/ImpactIcon.png", 
    [1.5, 1.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]));
$("#basic-damage").append(damageIcon("Puncture", "rgba(53,47,41,255)", "resources/PunctureIcon.png", 
    [1.0, 1.0, 1.5, 1.0, 1.0, 1.0, 1.5, 1.0, 1.0, 1.0, 1.0]));
$("#basic-damage").append(damageIcon("Slash", "rgba(56,42,43,255)", "resources/SlashIcon.png", 
    [1.0, 1.0, 1.0, 1.0, 1.5, 1.0, 1.0, 1.0, 1.5, 1.0, 1.0]));

$("#elemental-damage").append(damageIcon("Cold", "rgba(49,102,230,255)", "resources/ColdIcon.png", 
    [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.5, 1.0, 1.0, 1.0]));
$("#elemental-damage").append(damageIcon("Electricity", "rgba(73,35,112,255)", "resources/ElectricityIcon.png", 
    [1.0, 1.0, 1.0, 1.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.5, 1.0]));
$("#elemental-damage").append(damageIcon("Heat", "rgba(119,54,0,255)", "resources/HeatIcon.png", 
    [1.0, 0.5, 1.0, 1.0, 1.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]));
$("#elemental-damage").append(damageIcon("Toxin", "rgba(42,76,51,255)", "resources/ToxinIcon.png", 
    [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.5, 1.0, 1.0]));

$("#combinations-one").append(damageIcon("Blast", "rgba(84,29,32,255)", "resources/BlastIcon.png", 
    [1.0, 1.0, 1.0, 0.5, 1.0, 1.5, 1.0, 1.0, 1.0, 1.0, 1.0]));
$("#combinations-one").append(damageIcon("Corrosive", "rgba(49,64,7,255)", "resources/CorrosiveIcon.png", 
    [1.5, 1.5, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0]));
$("#combinations-one").append(damageIcon("Gas", "rgba(30,58,44,255)", "resources/GasIcon.png", 
    [1.0, 1.0, 1.0, 1.0, 1.0, 1.5, 1.0, 1.0, 1.0, 1.0, 1.0]));
$("#combinations-two").append(damageIcon("Magnetic", "rgba(35,43,45,255)", "resources/MagneticIcon.png", 
    [1.0, 1.0, 1.5, 1.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0]));
$("#combinations-two").append(damageIcon("Radiation", "rgba(152,74,0,255)", "resources/RadiationIcon.png", 
    [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.5, 1.0, 1.5, 1.0]));
$("#combinations-two").append(damageIcon("Viral", "rgba(173,69,106,255)", "resources/ViralIcon.png", 
    [1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.5, 1.0, 1.0, 0.5, 1.0]));
    
$("#special-damage").append(damageIcon("Void", "rgba(6,104,108,255)", "resources/VoidIcon.png", 
    [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.5]));
$("#special-damage").append(damageIcon("True", "rgba(86,68,30,255)", "resources/TrueIcon.png", 
    [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]));