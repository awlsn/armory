import React from 'react';
import Nav from '../components/Nav';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const Crafting = () => (
    <Layout>
        <SEO title="Diablo 2 Resurgence mod - Crafting" keywords={['Diablo II', 'Resurgence', 'Armory']} />

        <div className="row">
            <div className="u-full-width">
                <h1 className="center">Resurgence Crafting Compendium</h1>
                <div className="center">
                    <Nav />
                </div>
            </div>

        </div>

        <div className="row separator" />

        <div className="row center"><h3>Crystal Crafting</h3></div>
        <div className="row">
            <div className="u-full-width">
                <div id="crystal_crafting">
                    <div className="five columns">
                        <div className="row">
                            <p>
                                During your adventures in Sanctuary you will find a variety of new items, including crystals that allow you to forge powerful Crafted items. This process is simple, just transmute the following three components in the Horadric Cube.
                            </p>
                        </div>
                        <div className="row">
                            <div className="4 columns .u-pull-left">
                                <img src="/images/horadric-cube.gif" className=".u-pull-left" style={{ margin: '10px' }} alt="" />
                                <ol style={{ display: 'inline-block' }}>
                                    <li>Magic Item</li>
                                    <li>Crystal</li>
                                    <li>Gem</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    <div className="seven columns justify">
                        <table>
                            <tr>
                                <td><img src="/images/bcrystal.gif" style={{ verticalAlign: 'bottom' }} alt="" />Blessed Crystal</td>
                                <td>Works with any quality of gem. Yields an item with iLvl -10% of transmuted item</td>
                            </tr>
                            <tr>
                                <td><img src="/images/rcrystal.gif" style={{ verticalAlign: 'bottom' }} alt="" />Regal Crystal</td>
                                <td>Works only with perfect gems. Yields an item with iLvl 94.</td>
                            </tr>
                            <tr>
                                <td><img src="/images/dcrystal.gif" style={{ verticalAlign: 'bottom' }} alt="" />Divine Crystal</td>
                                <td>Works only with perfect gems. Yields an item with iLvl 99. Gem bonuses are doubled.</td>
                            </tr>
                            <tr>
                                <td style={{ width: '175px' }}><img src="/images/wcrystal.gif" style={{ verticalAlign: 'bottom' }} alt="" />Worldstone Crystal</td>
                                <td>Works only with perfect gems. Yields an item with iLvl 99. Gem bonuses are tripled.</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="u-full-width">
                <div className="row">
                    <div className="six columns">
                        <p>
                            The Crafted item will be the same base type as the Magic item you used, with an item level (ilvl) that is dependent on the type of crystal used. The strongest magic affixes are only available to high affix level (alvl) items, and there are alvl thresholds where weaker magic affixes will stop being able to spawn. For information on the difference between ilvl and alvl (and formulae to calculate the two), visit The Arreat Summit or The Amazon Basin websites. In most cases, items with an ilvl greater than 92 will have a significant amount of weak affixes removed from the pool, and items with an ilvl of 99 will have even more weak affixes removed. The end result is that high ilvl items result in better and more reliable crafts.
                        </p>
                    </div>
                    <div className="six columns">
                        <img src="/images/crystal_crafting_circles.png" alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="u-full-width">
                <div className="row">
                    <p>
                        In addition to up to four magic affixes Crafted items spawn with, three bonus properties are granted in accordance with the Gem you have used (excluding Ring, Amulet and Quiver crafts which only get two bonus properties). The following section lists the specific bonuses granted to different item types for each Gem. Note that the magnitude of these bonuses can change (doubled, tripled!) depending on the type of crystal you have used.

                    </p>
                    <div className="row">
                        <table id="crystal-crafting-table" style={{ width: '100%' }}>
                            <thead>
                                <tr id="crystal-crafting-header-row">
                                    <th>&nbsp;</th>
                                    <th>Wrath<br /> <img alt="" src="/images/perfectruby.gif" /></th>
                                    <th>Agility<br /> <img alt="" src="/images/perfectemerald.gif" /></th>
                                    <th>Wisdom<br /> <img alt="" src="/images/perfectsaphire.gif" /></th>
                                    <th>Vigor<br /> <img alt="" src="/images/perfectamethyst.gif" /></th>
                                    <th>Bliss<br /> <img alt="" src="/images/perfecttopaz.gif" /></th>
                                    <th>Unity<br /> <img alt="" src="/images/perfectdiamond.gif" /></th>
                                    <th>Death<br /> <img alt="" src="/images/perfectskull.gif" /></th>
                                </tr>
                            </thead>
                            <tbody className="crystal-crafting-group">
                                <tr className="weapon">
                                    <th rowSpan="3">wpn</th>
                                    <td>-(4-5)% to Enemy Physical Resistance</td>
                                    <td>(12-16)% Increased Attack Speed</td>
                                    <td>(10-14)% Faster Cast Rate</td>
                                    <td>+(6-10) Life Gained on Hit</td>
                                    <td>+5 Maximum Lightning Damage per Energy</td>
                                    <td>+1 to All Skills</td>
                                    <td>4% Crushing Blow per 100 Strength</td>
                                </tr>
                                <tr className="weapon">
                                    <td>(2-3)% Life leech</td>
                                    <td>(20-25)%Increased Attack Rating</td>
                                    <td>(6-8)% Increased Elemental Damage</td>
                                    <td>Slows Target by (6-8)%</td>
                                    <td>(2-3)% Mana leech</td>
                                    <td>+(10-15)% Elemental Resistances
                                    </td>
                                    <td>-(8-10)% Enemy Defense
                                    </td>
                                </tr>
                                <tr className="weapon">
                                    <td>+(15-20) to Strength</td>
                                    <td>+(15-20) to Dexterity</td>
                                    <td>+(15-20) to Energy</td>
                                    <td>+(15-20) to Vitality
                                    </td>
                                    <td>(7-10)% Deadly Strike</td>
                                    <td>+(3-4)% Magic Resistance</td>
                                    <td>Stuns Target +8</td>
                                </tr>
                            </tbody>
                            <tbody className="crystal-crafting-group">
                                <tr className="armor">
                                    <th rowSpan="3">armr</th>
                                    <td>2% of Life Replenished on Kill
                                    </td>
                                    <td>(5-10)% Faster Run/Walk
                                    </td>
                                    <td>+(10-15)% Elemental Resistances
                                    </td>
                                    <td>(40-50)% Enhanced Defense
                                    </td>
                                    <td>1% Life Regeneration per second
                                    </td>
                                    <td>+(7-10) Magic and Elemental Damage Reduction
                                    </td>
                                    <td>+(6-8) Physical Damage Reduction
                                    </td>
                                </tr>
                                <tr className="armor">
                                    <td>8% Increased Attack Speed per 100 Strength</td>
                                    <td>10% Faster Hit Recovery per 100 Dexterity</td>
                                    <td>(16-20)% Increased Mana Regeneration</td>
                                    <td>+(2-3)% Physical Resistance</td>
                                    <td>Poison Length Reduced by (20-25)%</td>
                                    <td>+(3-4)% Magic Resistances</td>
                                    <td>+(4-5)% Increased Maximum Life</td>
                                </tr>
                                <tr className="armor">
                                    <td>+(15-20) to Strength</td>
                                    <td>+(15-20) to Dexterity</td>
                                    <td>+(15-20) to Energy</td>
                                    <td>+(15-20) to Vitality</td>
                                    <td>(5-7)% Lightning Absorb</td>
                                    <td>+(8-10) to All Attributes</td>
                                    <td>Half Freeze Duration</td>
                                </tr>
                            </tbody>
                            <tbody className="crystal-crafting-group">
                                <tr className="helm">
                                    <th rowSpan="3">hlm</th>
                                    <td>(2-3)% Life Leech</td>
                                    <td>(3-4)% Faster Run/Walk</td>
                                    <td>-(2-3)% to Enemy Elemental Resistances</td>
                                    <td>+(40-50)% Enhanced Defense</td>
                                    <td>+(3-4) Life gained when struck</td>
                                    <td>+(5-6) Magic and Elemental Damage Reduction</td>
                                    <td>+(3-4) Physical Damage Reduction</td>
                                </tr>
                                <tr className="helm">
                                    <td>(15-20)% Enhanced Damage</td>
                                    <td>(12-16)% Faster Hit Recovery</td>
                                    <td>+(2-3) Mana gained on kill</td>
                                    <td>+(4-5) Life gained on Kill</td>
                                    <td>+(6-8)% Projectile Pierce Chance</td>
                                    <td>+(6-10) Magic Absorb</td>
                                    <td>-(4-5)% Enemy Defense</td>
                                </tr>
                                <tr className="helm">
                                    <td>(3-4)% Fire Absorb</td>
                                    <td>+(60-80) to Attack Rating</td>
                                    <td>+(20-25) to Mana</td>
                                    <td>+(20-25) to Life</td>
                                    <td>+(15-20)% Magic Find</td>
                                    <td>+(4-5) to All Attributes</td>
                                    <td>Prevent Monster Heal</td>
                                </tr>
                            </tbody>
                            <tbody className="crystal-crafting-group">
                                <tr className="shield">
                                    <th rowSpan="3">shld</th>
                                    <td>+(25-30)% Fire Resistance</td>
                                    <td>+(25-30)% Poison Resistance</td>
                                    <td>+(25-30)% Cold Resistance</td>
                                    <td>+5% Chance to Block</td>
                                    <td>+(25-30)% Lightning Resistance</td>
                                    <td>+1 to All Skills</td>
                                    <td>+(8-10) Physical Damage Reduction</td>
                                </tr>
                                <tr className="shield">
                                    <td>+(4-5) Life Gained on Striking</td>
                                    <td>(22-26)% Faster Hit Recovery</td>
                                    <td>+(2-3) Mana Gained on Striking</td>
                                    <td>+(10-15) Life gained when struck</td>
                                    <td>-(6-8)% to Enemy Lightning Resistance</td>
                                    <td>+(5-6)% Magic Resistance</td>
                                    <td>(8-10)% Reduced Duration of Curses on You</td>
                                </tr>
                                <tr className="shield">
                                    <td>(4-5)% Increased Strength</td>
                                    <td>(4-5)% Increased Dexterity</td>
                                    <td>(4-5)% Increased Energy</td>
                                    <td>(4-5)% Increased Vitality</td>
                                    <td>+(25-30)% Magic Find</td>
                                    <td>-(3-4)% to Enemy Magic Resistance</td>
                                    <td>-(3-4)% to Enemy Physical Resistance</td>
                                </tr>
                            </tbody>
                            <tbody className="crystal-crafting-group">
                                <tr className="belt">
                                    <th rowSpan="3">blt</th>
                                    <td>(2-3)% Crushing Blow</td>
                                    <td>(3-4)% Faster Run/Walk</td>
                                    <td>(5-8)% Faster Cast Rate</td>
                                    <td>(10-15)% Faster Block Rate</td>
                                    <td>(10-15)% Increased Potion Effect</td>
                                    <td>(3-4)% Increased Elemental Damage</td>
                                    <td>-(3-4)% to Enemy Poison Resistance</td>
                                </tr>
                                <tr className="belt">
                                    <td>+(8-12) Fire Absorb</td>
                                    <td>(4-5)% Deadly Strike</td>
                                    <td>(10-15)% Increased Mana Regeneration</td>
                                    <td>+4% Physical Resistance per 100 Energy</td>
                                    <td>Half Freeze Duration</td>
                                    <td>+(6-8)% Elemental Resistances</td>
                                    <td>-(3-4)% to Enemy Physical Resistance</td>
                                </tr>
                                <tr className="belt">
                                    <td>(15-20)% Enhanced Damage</td>
                                    <td>+(50-60) to Attack Rating</td>
                                    <td>(2-3)% Increased Maximum Mana</td>
                                    <td>(2-3)% Increased Maximum Life</td>
                                    <td>+1 to Lightning Skills</td>
                                    <td>+(4-5) to All Attributes</td>
                                    <td>(10-14)% Increased Minion Damage</td>
                                </tr>
                            </tbody>
                            <tbody className="crystal-crafting-group">
                                <tr className="glove">
                                    <th rowSpan="3">glv</th>
                                    <td>-(3-4)% to Enemy Fire Resistance</td>
                                    <td>(4-5)% Increased Attack Speed</td>
                                    <td>Freezes Target +2</td>
                                    <td>Adds 10-20 Damage</td>
                                    <td>(2-3)% Life Leech</td>
                                    <td>+1 to Magic Skills</td>
                                    <td>(4-5)% Crushing Blow</td>
                                </tr>
                                <tr className="glove">
                                    <td>Knockback</td>
                                    <td>(6-8)% Faster Hit Recovery</td>
                                    <td>-4% to Enemy Cold Resistance per 100 Dexterity</td>
                                    <td>+(2-3) Life Gained on Striking</td>
                                    <td>Poison Length Reduced By (5- 10)%</td>
                                    <td>-5% Reduced Skill Cooldown Per 100 Strength</td>
                                    <td>+(5-6)% Increased Poison Damage</td>
                                </tr>
                                <tr className="glove">
                                    <td>+(20-25) to Life</td>
                                    <td>(15-20)% Increased Attack Rating</td>
                                    <td>+(20-25) to Mana</td>
                                    <td>+(4-5) Physical Damage Reduction</td>
                                    <td>Slows Target by (4-5)%</td>
                                    <td>(2-3)% Magic Absorb</td>
                                    <td>Stuns Target +2</td>
                                </tr>
                            </tbody>
                            <tbody className="crystal-crafting-group">
                                <tr className="boot">
                                    <th rowSpan="3">boot</th>
                                    <td>+(15-20)% Fire Resistance</td>
                                    <td>+(15-20)% Poison Resistance</td>
                                    <td>+(15-20)% Cold Resistance</td>
                                    <td>+(2-3)% Physical Resistance</td>
                                    <td>+(15-20)% Lightning Resistance</td>
                                    <td>-(4-5)% Reduced Skill Cooldown</td>
                                    <td>(10-15)% Enhanced Damage</td>
                                </tr>
                                <tr className="boot">
                                    <td>2% of Life Replenished on Kill</td>
                                    <td>(6-8)% Faster Run/Walk</td>
                                    <td>2% of Mana Replenished on Kill</td>
                                    <td>+(4-5) Life gained when Struck</td>
                                    <td>+(5-6)% Increased Lightning Damagey</td>
                                    <td>-(2-3)% to Enemy Magic Resistance</td>
                                    <td>-(4-5)% Enemy Defense</td>
                                </tr>
                                <tr className="boot">
                                    <td>+(10-15) to Strength</td>
                                    <td>+(10-15) to Dexterity</td>
                                    <td>+(10-15) to Energy</td>
                                    <td>+(10-15) to Vitality</td>
                                    <td>+(15-20)% Magic Find</td>
                                    <td>+(4-5) to All Attributes</td>
                                    <td>(8-10)% Increased Minion Damage</td>
                                </tr>
                            </tbody>
                            <tbody className="crystal-crafting-group">
                                <tr className="ring">
                                    <th rowSpan="2">ring</th>
                                    <td>+1 Maximum Fire Damage Per Energy</td>
                                    <td>(10-15)% Increased Attack Rating</td>
                                    <td>(5-6)% Faster Cast Rate</td>
                                    <td>+2 to Defense per Character Level</td>
                                    <td>-(2-3)% to Enemy Lightning Resistance</td>
                                    <td>+(6-8)% Elemental Resistances</td>
                                    <td>(4-6)% Reduced Duration of Curses on You</td>
                                </tr>
                                <tr className="ring">
                                    <td>+(15-20) to Strength</td>
                                    <td>+(15-20) to Dexterity</td>
                                    <td>+(15-20) to Energy</td>
                                    <td>+(15-20) to Vitality</td>
                                    <td>+(10-15)% Magic Find</td>
                                    <td>+(5-6) to All Attributes</td>
                                    <td>3% Chance of Crushing Blow</td>
                                </tr>
                            </tbody>
                            <tbody className="crystal-crafting-group">
                                <tr className="amulet">
                                    <th rowSpan="2">amu</th>
                                    <td>(20-25)% Enhanced Damage</td>
                                    <td>(4-5)% Increased Attack Speed</td>
                                    <td>(20-25)% Increased Mana Regeneration</td>
                                    <td>+(3-4)% Physical Resistance</td>
                                    <td>1% Life Regeneration per second</td>
                                    <td>+4% Magic Resistance per 100 Energy</td>
                                    <td>(5-6)% Chance of Crushing Blow</td>
                                </tr>
                                <tr className="amulet">
                                    <td>(3-4)% Life Leech</td>
                                    <td>(12-15)% Faster Hit Recovery</td>
                                    <td>(4-5)% Cold Absorb</td>
                                    <td>+(6-8) Physical Damage Reduction</td>
                                    <td>Half Freeze Duration</td>
                                    <td>-(8-10)% Reduced Skill Cooldown</td>
                                    <td>Stuns Target +4</td>
                                </tr>
                            </tbody>
                            <tbody className="crystal-crafting-group">
                                <tr className="quiver">
                                    <th rowSpan="2">quiv</th>
                                    <td>(6-8)% Increased Fire Damage</td>
                                    <td>-6% to Enemy Poison Resistance per 100 Energy</td>
                                    <td>+1 to Cold Skills</td>
                                    <td>Adds 10-20 Damage</td>
                                    <td>+(16-20)% Increased Potion Effect</td>
                                    <td>+1 to All Skills</td>
                                    <td>-4% to Enemy Physical Resistance per 100 Strength</td>
                                </tr>
                                <tr className="quiver">
                                    <td>2% Life Replenished on Kill</td>
                                    <td>(6-8)% Increased Attack Speed</td>
                                    <td>(3-4)% Mana Leech</td>
                                    <td>(12-16)% Faster Hit Recovery</td>
                                    <td>+(8-10)% Projectile Pierce Chance</td>
                                    <td>-(3-4)% to Enemy Magic Resistance</td>
                                    <td>+(3-4) Life Gained on Striking</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    </Layout>
);

export default Crafting;
