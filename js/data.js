// name : info:tuple(shortDesc:str, longDesc:str, factions:dict(name:mul))
    
// bd: base damage, bdb: base damage bonuses, fdb: faction bonuses
// add = crit * headshot
// mbd = bd * (1 + bdb) * (1 + fdb)

// sbd = status bonus damage

const damageInfo = {
    "Damage": [
        "No additional effect.",
        "No additional effect.",
        { }
    ],
    "Impact": [
        "Inflicts Stagger (<5 stacks).<br>6s crowd control.<br>Increases Parazon mercy kill threshold.",
        "Inflicts Stagger (max 5 stacks).<br>Staggers enemies for 6s. Reapplication resets the stagger. Ospreys, Tenno and bosses are immune to stagger.<br>Increases Parazon mercy kill threshold by 8% max HP per stack, up to 80% max health.",
        { }
    ],
    "Puncture": [
        "Inflicts Weakened (<5 stacks).<br>Reduces target's damage.",
        "Inflicts Weakened (max 5 stacks). Reduces enemy damage output by 40% at one stack.\nFurther stacks decrease enemy damage output by 10% per stack, up to 80% reduced damage.",
        { }
    ],
    // 0.35 * mbd * (1 + sbd) * (1 + fdb) * add
    "Slash": [ 
        "Inflicts Bleed (unlimited stacks).<br>DoT every 6 seconds for every stack individually.",
        "Inflicts Bleed (unlimited stacks).<br>Deals damage every 6 seconds (first tick is delayed by 1 second). Each stack deals damage individually",
        { }
    ],
    "Cold": [
        "Inflicts Freeze (<10 stacks).<br>Reduces target's animation speed.<br>10th stack freezes target.",
        "Inflicts Stagger (max 5 stacks).<br>Staggers enemies for 6s. Reapplication resets the stagger. Ospreys, Tenno and bosses are immune to stagger.<br>Increases Parazon mercy kill threshold by 8% (max HP or existing?) per stack, up to 80% max health.",
        { }
    ],
    // 0.5 * mbd * (1 + sbd) * (1 + fdb) * add
    "Toxin": [
        "Inflicts Poison (unlimited stacks).<br>DoT directly to health every 6 seconds for every stack individually.",
        "Inflicts Stagger (max 5 stacks).<br>Staggers enemies for 6s. Reapplication resets the stagger. Ospreys, Tenno and bosses are immune to stagger.<br>Increases Parazon mercy kill threshold by 8% (max HP or existing?) per stack, up to 80% max health.",
        { }
    ],
    "Heat": [
        "Inflicts Ignite (unlimited stacks).<br>Reduces target's armour.<br>DoT every 6 seconds for every stack individually.",
        "Inflicts Stagger (max 5 stacks).<br>Staggers enemies for 6s. Reapplication resets the stagger. Ospreys, Tenno and bosses are immune to stagger.<br>Increases Parazon mercy kill threshold by 8% (max HP or existing?) per stack, up to 80% max health.",
        { }
    ],
    "Electricity": [
        "Inflicts Tesla Chain (<1 stack).<br>3m AoE DoT centered on target every 6 seconds.",
        "Inflicts Stagger (max 5 stacks).<br>Staggers enemies for 6s. Reapplication resets the stagger. Ospreys, Tenno and bosses are immune to stagger.<br>Increases Parazon mercy kill threshold by 8% (max HP or existing?) per stack, up to 80% max health.",
        { }
    ],
    "Blast": [
        "Inflicts Detonate (<10 stacks).<br>5m AoE after 1.5s, when stacks are maxxed, or target dies.",
        "Inflicts Stagger (max 5 stacks).<br>Staggers enemies for 6s. Reapplication resets the stagger. Ospreys, Tenno and bosses are immune to stagger.<br>Increases Parazon mercy kill threshold by 8% (max HP or existing?) per stack, up to 80% max health.",
        { }
    ],
    "Corrosive": [
        "Inflicts Corrosion (<10 stacks).<br>Reduces target's armour.",
        "Inflicts Stagger (max 5 stacks).<br>Staggers enemies for 6s. Reapplication resets the stagger. Ospreys, Tenno and bosses are immune to stagger.<br>Increases Parazon mercy kill threshold by 8% (max HP or existing?) per stack, up to 80% max health.",
        { }
    ],
    "Magnetic": [
        "Inflicts Disrupt (<10 stacks).<br>Increases damage to target's shield and overguard. Shield breaks deal Electricity.",
        "Inflicts Stagger (max 5 stacks).<br>Staggers enemies for 6s. Reapplication resets the stagger. Ospreys, Tenno and bosses are immune to stagger.<br>Increases Parazon mercy kill threshold by 8% (max HP or existing?) per stack, up to 80% max health.",
        { }
    ],
    "Viral": [
        "Inflicts Virus (<5 stacks).<br>Increases damage to target's health.",
        "Inflicts Stagger (max 5 stacks).<br>Staggers enemies for 6s. Reapplication resets the stagger. Ospreys, Tenno and bosses are immune to stagger.<br>Increases Parazon mercy kill threshold by 8% (max HP or existing?) per stack, up to 80% max health.",
        { }
    ],
    "Gas": [
        "Inflicts Gas Cloud (<10 stack).<br>3m+(0.3*x)m AoE DoT centered on target at time of application.",
        "Inflicts Stagger (max 5 stacks).<br>Staggers enemies for 6s. Reapplication resets the stagger. Ospreys, Tenno and bosses are immune to stagger.<br>Increases Parazon mercy kill threshold by 8% (max HP or existing?) per stack, up to 80% max health.",
        { }
    ],
    "Radiation": [
        "Inflicts Confusion (<1 stack).<br>Targets cannot tell friend from foe.",
        "Inflicts Stagger (max 5 stacks).<br>Staggers enemies for 6s. Reapplication resets the stagger. Ospreys, Tenno and bosses are immune to stagger.<br>Increases Parazon mercy kill threshold by 8% (max HP or existing?) per stack, up to 80% max health.",
        { }
    ],
    "Void": [
        "Inflicts Bullet Attractor (<1 stack).<br>Attracts bullets in a 2.5m radius centered on target at time of application.",
        "Inflicts Stagger (max 5 stacks).<br>Staggers enemies for 6s. Reapplication resets the stagger. Ospreys, Tenno and bosses are immune to stagger.<br>Increases Parazon mercy kill threshold by 8% (max HP or existing?) per stack, up to 80% max health.",
        { }
    ],
    "True": [
        "Is unaffected by all forms of damage reduction and vulnerability. Bypasses shields, but not overguard.",
        "Is unaffected by all forms of damage reduction and vulnerability. Bypasses shields, but not overguard.",
        { }
    ],
    "Cinematic": [
        "Is unaffected by all forms of damage reduction and vulnerability.",
        "Is unaffected by all forms of damage reduction and vulnerability.",
    ]
};