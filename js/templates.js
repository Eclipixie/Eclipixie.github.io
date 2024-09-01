function damageIcon(name, colour, imageURL) {
    html = "";

    html += '<div class="icon center-y center-x" style="--border-col: '+colour+'"><img src="'+imageURL+'" alt="">';
    html += '<div class="icon-info" style="--info-y: -40px"><h2 class="center-x center-y">'+name+'</h2></div>';
    html += '</div>';

    return html
}

function addDamageIcon(id, name, colour, imageURL) {
    $(id).append(damageIcon(name, colour, imageURL));
}

$("#basic-damage").append(damageIcon("Damage", "rgba(41,50,57,255)", "https://static.wikia.nocookie.net/warframe/images/2/2d/DamageModBundleIcon.png"));

$("#elemental-damage").append(damageIcon("Cold", "rgba(49,102,230,255)", "https://static.wikia.nocookie.net/warframe/images/c/c9/ColdModBundleIcon.png"));
$("#elemental-damage").append(damageIcon("Electricity", "rgba(73,35,112,255)", "https://static.wikia.nocookie.net/warframe/images/8/86/ElectricModBundleIcon.png"));
$("#elemental-damage").append(damageIcon("Toxin", "rgba(119,54,0,255)", "https://static.wikia.nocookie.net/warframe/images/4/4a/HeatModBundleIcon.png"));
$("#elemental-damage").append(damageIcon("Heat", "rgba(42,76,51,255)", "https://static.wikia.nocookie.net/warframe/images/f/f1/ToxinModBundleIcon.png"));