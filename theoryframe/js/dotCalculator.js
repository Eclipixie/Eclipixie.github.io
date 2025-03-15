let elemCoeffs = {
    "slash": 0.35,
    "heat": 0.5,
    "toxin": 0.5,
    "electricity": 0.5,
    "gas": 0.5,
    "blast expiry": 0.3,
    "blast forced": 3
};

// baseDamage is the damage of the proccing weapon
// damageBonuses iiiiiis probably stuff like abilities/arcanes/buffs in general?
// factionBonus is self explanatory
// statusBonus is status damage bonuses
// elemBonus is damage bonuses to a specific element (combination elements don't have these)
// nfi what additional is (incoming damage modifiers like armour/viral prolly)
function calcDot(type, baseDamage, damageBonuses, factionBonus, statusBonus, elemBonus, additonal) {
    let mbd = baseDamage * damageBonuses * factionBonus;
    return elemCoeffs[type] * mbd * factionBonus * statusBonus * elemBonus * additonal;
}