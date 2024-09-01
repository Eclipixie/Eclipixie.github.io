factions = ["Grineer", "Kuva Grineer", "Corpus", "Corpus Amalgam", "Infested", "Infested Amalgam", "Orokin", "Sentient", "Narmer", "The Murmur", "Zariman"];

function damageIcon(name, colour, imageURL, factionDamage) {
    let factionDamages = [];

    

    html = "";

    html += '<div class="icon center-y" style="--border-col: '+colour+'"><img src="'+imageURL+'" alt="">';
    html += '<div class="icon-info" style="--info-y: -40px"><h2 class="center-x center-y">'+name+'</h2></div>';
    html += '</div>';

    return html
}

$("#basic-damage").append(damageIcon("Damage", "rgba(41,50,57,255)", "resources/DamageIcon.png", 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
$("#basic-damage").append(damageIcon("Impact", "rgba(52,66,66,255)", "resources/ImpactIcon.png", 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
$("#basic-damage").append(damageIcon("Puncture", "rgba(53,47,41,255)", "resources/PunctureIcon.png", 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
$("#basic-damage").append(damageIcon("Slash", "rgba(56,42,43,255)", "resources/SlashIcon.png", 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));

$("#elemental-damage").append(damageIcon("Cold", "rgba(49,102,230,255)", "resources/ColdIcon.png", 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
$("#elemental-damage").append(damageIcon("Electricity", "rgba(73,35,112,255)", "resources/ElectricityIcon.png", 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
$("#elemental-damage").append(damageIcon("Toxin", "rgba(42,76,51,255)", "resources/ToxinIcon.png", 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
$("#elemental-damage").append(damageIcon("Heat", "rgba(119,54,0,255)", "resources/HeatIcon.png", 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));

$("#combinations-one").append(damageIcon("Blast", "rgba(84,29,32,255)", "resources/BlastIcon.png", 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
$("#combinations-one").append(damageIcon("Corrosive", "rgba(49,64,7,255)", "resources/CorrosiveIcon.png", 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
$("#combinations-one").append(damageIcon("Gas", "rgba(30,58,44,255)", "resources/GasIcon.png", 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
$("#combinations-two").append(damageIcon("Magnetic", "rgba(35,43,45,255)", "resources/MagneticIcon.png", 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
$("#combinations-two").append(damageIcon("Radiation", "rgba(152,74,0,255)", "resources/RadiationIcon.png", 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
$("#combinations-two").append(damageIcon("Viral", "rgba(173,69,106,255)", "resources/ViralIcon.png", 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));