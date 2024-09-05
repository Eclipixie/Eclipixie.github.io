# Types of Damage

Some notes:

* This only applies to non-Railjack combat. Railjack combat is an entirely different story.
* "x second independent duration" means that all stacks in a given debuff have independent durations.
* "x second refreshing duration" means that reapplying a given debuff resets the duration timer.
* "max x replacing stacks" means that if a given debuff has x stacks and another stack is applied, the new stack replaces the oldest stack.

## Basic Damage
### Damage
No additional effect. 
### Impact
**Grineer 1.5x, Kuva Grineer 1.5x**

Inflicts Stagger (max 5 replacing stacks, 6 second refreshing duration).

Crowd Controls enemies. Ospreys, Tenno and bosses are immune to Stagger.

Stagger increases the Parazon mercy kill threshold on heavy units by 8% of the target's max HP per stack, up to 80% max health.
### Pierce
**Corpus 1.5x, Orokin 1.5x**

Inflicts Weakened (max 5 replacing stacks, 6 second refreshing duration).

Reduces enemy damage output by 40% at one stack.

Further stacks decrease enemy damage output by 10% per stack, up to 80% reduced damage.
### Slash
**Infested 1.5x, Narmer 1.5x**

Inflicts Bleed (unlimited stacks, unlimited duration (not sure about this, the wiki doesn't say if it has a duration)).

Deals *Cinematic* damage every 6 seconds (first tick is delayed by 1 second). 

Each stack deals damage individually.

Cinematic damage bypasses all damage buffs/reductions.
## Elemental Damage
### Cold
**Sentient 1.5x**

Inflicts Freeze (max 10 replacing stacks, 6 second independent duration).

The first stack reduces target's movement speed, attack speed and firerate* by 50%. Additional stacks increase this effect by 5% per stack, to a maximum of 90%.

The first stack also increases the target's incoming Critical Multiplier by 0.1. Additional stacks increase this effect by 0.05 per stack, to a maximum of 0.5.

This increase is additive after mods, and applies before Critical Damage tier.

At 10 stacks, the target becomes Frozen (max 1 stack, 3 second duration). Frozen Crowd Controls enemies, prevents shield recharge, and increases target's incoming Critical Multiplier to 1.0.

### Electricity
**Corpus Amalgam 1.5x, The Murmur 1.5x**

Inflicts Tesla Chain (unlimited stacks, 6 second independent duration).

Tesla Chain Crowd Controls the target, and deals 3m AoE damage every second. This is affected by Critical Damage, Stealth Bonuses, and Headshots.

Tesla Chain damage can hit Headshots, however its Headshot damage multiplier is 1x.

### Heat
**Infested 1.5x, Kuva Grineer 0.5x**

Inflicts Ignite (unlimited stacks, unlimited duration).

Ignite Crowd Controls enemies, reduces armour by up to 50% (exact numbers unknown) and deals damage every 6 seconds (first tick is delayed by 1 second).

### Toxin
**Narmer 1.5x**

Inflicts Posion (unlimited stacks, unlimited duration).

Poison deals damage every 6 seconds (first tick is delayed by 1 second).

## Combination Damage
### Blast
*Heat + Cold*

**Infected Deimos 1.5x, Corpus Amalgam 0.5x**

Inflicts Detonate (max 10 stacks, 1.5 second independent duration).

Detonate stacks explode for 30% base damage when they expire.

Upon reaching 10 stacks or if the target dies, all stacks explode simultaneously for 300% base damage in a 5m AoE centered on the target. This explosion does not apply to the target.

### Corrosive
*Toxin + Electricity*

**Grineer 1.5x, Kuva Grineer 1.5x, Sentien 0.5x**

Inflicts Corrosion (max 10 replacing stacks, 8 second independent duration).

Corrosion decreases the target's armour by 20% + 6% per stack (including the first).

### Gas
*Toxin + Heat*

**Infested Deimos 1.5x**

Inflicts Gas Cloud (max 10 replacing stacks, 6 second independent duration).

Gas Cloud deals 3m AoE damage every second. This radius is increased by 0.3m for every stack (including the first), up to 6m.

### Magnetic
*Electricity + Cold*

**Corpus 1.5x, Corpus Amalgam 1.5x, Narmer 0.5x**

Inflicts Disrupt (max 10 replacing stacks, 6 second independent duration).

Disrupt increases damage dealt to the target's overguard and shield by 100% + 25% per stack after the first, to a maximum of 325%.

Enemies with Disrupt also have reduced natural shield regeneration.

Tenno with Disrupt lose 30 energy per second for 3 seconds.

### Radiation
*Heat + Electricity*

**Sentient 1.5x, The Murmur 1.5x, Orokin 0.5x**

Inflicts Confusion (max 10 replacing stacks, 12 second independent duration).

Targets cannot tell friend from foe, and all enemies consider the target an enemy.

Damage from enemy friendly fire is increased by 100% + 50% more damage per stack after the first, up to 550%.

### Viral
*Cold + Toxin*

**Orokin 1.5x, Infested Deimos 0.5x, The Murmur 0.5x**

Inflicts Virus (max 10 replacing stacks, 6 second independent duration).

Viral increases damage dealt to target's health by 100% + 25% per stack after the first, up to 325%.

## Special Damage
### Void

**Zariman 1.5x**

Only available through Operator form. Xaku is the only Warframe that can deal Void damage.

Inflict Bullet Attractor (max 1 stack, 1.5s duration).

Creates a 2.5m bubble around the target which attracts bullets (behaving exactly the same way as Mag's magnetise).

### True

Ignores Shields, but not Health or Overguard.

https://eclipixie.github.io/damage