/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import Nav from '../components/Nav';
import AnimatedFeature from '../components/AnimatedFeature';
import HoverItem from '../components/HoverItem';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import ValorTable from '../components/ValorTable';

export default ({ pageContext }) => {
  // console.log(pageContext.uniqueItems)

  function findUniqueItemByName(itemName) {
    if (pageContext.uniqueItems) {
      return pageContext.uniqueItems.filter(item => item.name === itemName)[0];
    }
  }

  function findCharmCompByName(itemName) {
    if (pageContext.charmComponents) {
      return pageContext.charmComponents.filter(item => item.name === itemName)[0];
    }
  }

  function getValorsByClassName(className) {
    const endPos = className.length + 1;
    if (pageContext.uniqueItems) {
      return pageContext.uniqueItems.filter(item => item.item === "Nephalem's Valour" && item.baseProps[0][1].substring(1, endPos) === className);
    }
  }

  function transmute(e) {
    e.preventDefault();
    console.log('transmuting');
    document.querySelector('#crafting_cube_ingredients').style.display = 'none';
    document.querySelector('#crafting_cube_results').style.display = 'block';
  }


  function notAClick(e) {
    e.preventDefault();
  }

  console.log(findCharmCompByName('Garnet Glyph'));

  return (
    <Layout>
      <SEO title="Diablo 2 - Resurgence (unofficial 1.13 mod)" keywords={['Diablo 2', 'Diablo II', 'Diablo 2 mod', 'Diablo II mod']} />
      <div>
        <h1 className="center">Welcome to Resurgence</h1>
        <div className="intro">
          <p>Resurgence is a mod for Diablo II: Lord of Destruction (1.13c). It introduces many changes with the aim of promoting
   character balance and diversity while staying true to the original Diablo feel.
          </p>
          <p>While it is compatible with single player, most activity is centered around our online server with an active ladder
   schedule and thriving community.
          </p>
          <p>Scroll down to learn more about Resurgence, or click on of the links below to start your new journey!</p>

          <div className="center">
            <Nav />
            <p className="small-text">Please note that if you want to play Resurgence you must have already installed Diablo II: Lord of Destruction 1.13 (1.13c is recommended).</p>
          </div>
        </div>

        <div className="row separator" />
        <div className="row"><h3 className="center">Same Feel, New Challenge</h3></div>

        <div className="row">
          <div className="six columns">

            <AnimatedFeature url="//gifs.com/embed/diablo-2-resurgence-launch-trailer-mZxMzr" caption="Necromancers get additional bone spears with points into Energy" />
            <br />
            <AnimatedFeature url="//gifs.com/embed/diablo-2-resurgence-launch-trailer-rkDMww" caption="Paladin’s Vengeance has been reworked into an AoE melee attack that converts some portion of physical damage to magic" />

          </div>
          <div className="six columns justify">
            <p>Preserving the atmosphere of the original Diablo II game is a key element of Resurgence. The majority of changes are centered around providing a fair game for all skills and classes. Players shouldn’t feel bad for building non-traditional characters because ‘meta’ builds such as Blizzard Sorceress and Blessed Hammer Paladin are so much more powerful in comparison.</p>
            <p>These changes are made through a number of ways - from the removal of most monster damage immunities, to simple number tweaking of skills, to the introduction of new item properties or complete removal and revitalization of obsolete skills.</p>
            <p>Paladins can forgo the traditional sword-and-board to vanquish enemies using the Vengeance skill, now a two-handed only area of effect attack. Players dabbling in the dark arts will be delighted to find that Necromancer’s Bone Spear now has a synergy that grants additional projectiles (one projectile per 100 Energy). The player may come across items with the “Melee attacks deal splash damage” property, which allows single target melee attacks to do area damage - a significant boon to the clear speed of traditionally lacklustre melee classes (which also benefit from a global increase to base weapon damages).</p>
            <p>Content is being continually developed, from the introduction of new items and zones to the handling of the whirling wheel of character and skill balance. In the new future expect to see adjustments to character progression and power through Normal and Nightmare difficulty modes. A range of new crafting trinkets loom on the horizon, set to change the way the player tackles itemization.</p>
          </div>
        </div>

        <div className="row separator" />
        <div className=" row center"><h3>Innovative Itemization</h3></div>
        <div className="row">
          <div className="six columns justify">
            <p>Loot is fundamental to ARPGs, and Diablo II is no exception. As part of expanding the game and increasing the diversity of options open to the player, Resurgence introduces hundreds of new Unique items, over a dozen new Sets and countless tweaking and refinement of existing items and Runewords.</p>
            <p>There are new exclusive item types for each class. The magic affix and crafting system has been overhauled thoughtfully and streamlined into something more rewarding for the player.</p>
            <p>Affixes that spawn on Rare and Crafted items are no longer restricted to lower tier values. This combats the philosophy that every equipment slot is best be filled by a Unique or Runeword, as well-rolled Rare constitute some of the best gear in the game.</p>
            <p>
              <a href="http://resurgence.slashgaming.net/crafting.html">For more information check out the Crafting Compendium</a> or the <a href="http://diablo2resurgence.wikia.com/wiki/Crafting_Recipes">Resurgence wiki.</a>
            </p>
          </div>
          <div className="six columns">
            <AnimatedFeature url="//gifs.com/embed/diablo-2-resurgence-launch-trailer-Z6MpGE" caption="New items such as this cold/fire multishot bow enable brand new late-game builds for more than just the obvious classes" />
          </div>
        </div>
        <div className="row">
          <div className="twelve columns">
            <h3>&nbsp;</h3>
            <div className="item_hover">
              <div className="block">
                <HoverItem
                  item={
                    {
                      name: ['white', 'Shaman Rod'],
                      imageFile: 'shamanrod.png',
                      index: 'shamanrod',
                      baseProps: [
                        ['white', 'Two-Hand Damage: 81-148'],
                        ['white', 'Durability: 61 of 100'],
                        ['red', '(Druid Only)'],
                        ['white', 'Required Strength: 93'],
                        ['white', 'Required Level: 41'],
                        ['white', 'Mace Class - Normal Attack Speed'],
                      ],
                      props: [
                        ['blue', '+2% Experience Gained'],
                        ['blue', '+50% Damage to Undead'],
                      ],
                    }
                  }
                  type="hardcoded"
                />

                <HoverItem
                  item={
                    {
                      name: ['white', 'Superior Templar Basinet'],
                      imageFile: 'templarbasinet.png',
                      index: 'templarbasinet',
                      baseProps: [
                        ['white', 'Defense: 88'],
                        ['white', 'Durability: 110 of 110'],
                        ['red', '(Paladin Only)'],
                        ['white', 'Required Strength: 105'],
                        ['white', 'Required Level: 64'],
                      ],
                      props: [
                        ['blue', '+11% Increased Attack Speed'],
                        ['blue', 'Increased Maximum Durability 10%'],
                      ],
                    }
                  }
                  type="hardcoded"
                />

                <HoverItem
                  item={
                    {
                      name: ['blue', 'Platinum Garnet Ring'],
                      imageFile: 'garnetring.png',
                      index: 'garnetring',
                      baseProps: [
                        ['white', 'Required Level: 45'],
                      ],
                      props: [
                        ['blue', '+186 Attack Rating'],
                        ['blue', '3% Life Replenished on Kill'],
                      ],
                    }
                  }
                  type="hardcoded"
                />

                <HoverItem
                  item={
                    {
                      name: ['blue', "Golemlord's Sapphire Amulet"],
                      imageFile: 'sapphireamulet.png',
                      index: 'sapphireamulet',
                      baseProps: [
                        ['white', 'Required Level: 48'],
                      ],
                      props: [
                        ['blue', '+3 Summoning Skills (Necromancer Only)'],
                        ['blue', '+26% Cold Resistance'],
                      ],
                    }
                  }
                  type="hardcoded"
                />

                <HoverItem type="unique" item={findUniqueItemByName("Mendeln's Rapture")} />
                <HoverItem type="unique" item={findUniqueItemByName('Voidbringer')} />
                <HoverItem type="unique" item={findUniqueItemByName('Eon Band')} />
                <HoverItem type="unique" item={findUniqueItemByName('Gretana')} />
              </div>
              <div className="block">
                <HoverItem type="unique" item={findUniqueItemByName("Amm's Eclipse")} />
                <HoverItem type="unique" item={findUniqueItemByName('Transcendence')} />
                <HoverItem type="unique" item={findUniqueItemByName('Steelrend')} />
                <HoverItem type="unique" item={findUniqueItemByName('Avatar of Fire')} />
                <HoverItem type="unique" item={findUniqueItemByName('The Gloaming')} />
                <HoverItem type="unique" item={findUniqueItemByName('Metalgrid')} />
                <HoverItem type="unique" item={findUniqueItemByName("Templar's Might")} />
              </div>
            </div>
          </div>
          <span className="caption">Hover over these items to see their description.</span>
          <div className="row separator" />
          <div className="row center"><h3>End-Game Content</h3></div>
          <div className="row">
            <div className="twelve columns justify">
              <p>Beyond providing balance to the original game, Resurgence has a distinct focus on giving players a variety of new options for end-game content. This comes through new content and new combat mechanics. Act 5 Nightmare and Hell have received a significant monster overhaul and keep players thinking on their feet. Some non-essential side areas have also been made into zones for end-game activity, such as The Killing Fields which replaces The Hole Level 2. The area is aptly named and is the graveyard for many fallen heroes.</p>
              <p>The Uber system the players is now a genuine challenge - players cannot simple Smite and Life Tap their way to a Hellfire Torch! The hellish red portals must also traversed if you wish to find Diablo’s Soulstone - a trinket that must be sold in order to summon Diablo Clone (instead of The Stone of Jordan as required in the original Diablo II).</p>
            </div>

            <div className="row">
              <div className="six columns">
                <AnimatedFeature url="//gifs.com/embed/diablo-2-resurgence-launch-trailer-zpOxDY" caption="Some monsters pose even more of a danger after their death, beware!" />
              </div>
              <div className="six columns">
                <AnimatedFeature url="//gifs.com/embed/diablo-2-resurgence-launch-trailer-W6JjrJ" caption="A Frenzy Barb making his way through The Killing Fields" />
              </div>
            </div>
          </div>
        </div>
        <div className="row separator" />
        <div className="row center"><h3>Crystal Clear Crafting</h3></div>
        <div className="row">
          <div className="nine columns justify">
            <p>Resurgence introduces a revamped crafting system which revolves around the use of specialized crafting items rather than Runes. Rather than having to keep a stock of various runes, these crystals enable efficient crafting which is available to the player as soon as they obtain the Horadric Cube. The three tiers of crafting Crystals are: Blessed (common), Regal (uncommon), and Divine (rare). These crystals are obtained as enemy item drops.</p>
            <a href="http://resurgence.slashgaming.net/index.html">For more information check out the Crafting Compendium</a> or the <a href="http://diablo2resurgence.wikia.com/wiki/Crafting_Recipes">Resurgence wiki.</a>
          </div>
          <div className="three columns" id="crafting_tooltips">

            <HoverItem
              item={
                {
                  name: 'Blessed Crystal',
                  imageFile: 'bcrystal.gif',
                  index: 'bcrystal',
                  text: 'The multitool of crafting. Used to create basic Crafted items, reroll magic items and sockets amongst other things.',
                }
              }
              type="simple"
            />

            <HoverItem
              item={
                {
                  name: 'Regal Crystal',
                  imageFile: 'rcrystal.gif',
                  index: 'rcrystal',
                  text: 'Used to create high-end Crafted items.',
                }
              }
              type="simple"
            />
            <HoverItem
              item={
                {
                  name: 'Divine Crystal',
                  imageFile: 'dcrystal.gif',
                  index: 'dcrystal',
                  text: 'Used to create incredibly powerful Crafted items.',
                }
              }
              type="simple"
            />
            <HoverItem
              item={
                {
                  name: "Alchemist's Stone",
                  imageFile: 'astone.gif',
                  index: 'astone',
                  text: 'Upgrades a Normal item to a random rarity.',
                }
              }
              type="simple"
            />
            <HoverItem
              item={
                {
                  name: 'Strange Cube',
                  imageFile: 'scube.gif',
                  index: 'scube',
                  text: 'Adds sockets to Rare or Crafted items.',
                }
              }
              type="simple"
            />
            <HoverItem
              item={
                {
                  name: 'Chaos Prism',
                  imageFile: 'cprism.gif',
                  index: 'cprism',
                  text: 'Rerolls the random properties of a Unique items.',
                }
              }
              type="simple"
            />

          </div>
        </div>
        <div className="row separator" />
        <div className="row center"><h3>Charming New Systems</h3></div>
        <div className="row">
          <div className="eight columns justify">
            <p>
              Instead of the frustrating trade-off between min-maxing of your character stats and having enough inventory space to handle loot,
              Resurgence restricts the player to only carry six different Unique charms. These charms are found by killing specific Superunique monsters as you
              progress through the game. These Unique charms start off as blank slates - each having a set number of ‘free’ stat slots the player can fill by
              imbuing them with charm components that drop randomly throughout their adventures. This enables incredible customization, with over one hundred different sigils,
              glyphs and ankhs providing an array of properties to empower your character.
            <br />
              <br />
              To get an idea of how this process works, click "Transmute" in the cube to the right and watch the Charm gain a stat.
            </p>

            <div className="item_hover">

              <HoverItem type="charm" item={findCharmCompByName('Garnet Glyph')} />
              <HoverItem type="charm" item={findCharmCompByName('Ruby Glyph')} />
              <HoverItem type="charm" item={findCharmCompByName('Freezing Sigil')} />
              <HoverItem type="charm" item={findCharmCompByName("Magus' Sigil")} />
              <HoverItem type="charm" item={findCharmCompByName('Ankh of Puncture')} />
              <HoverItem type="charm" item={findCharmCompByName('Void Innoculation')} />
              <HoverItem type="charm" item={findCharmCompByName('Living Lava')} />

            </div>
            <span className="caption">Hover over these items to see their description.</span><br />
            <p>
              <a href="http://diablo2resurgence.wikia.com/wiki/Charms">For more information check out the Charms pages on the Resurgence wiki.</a>
            </p>
          </div>
          <div className="four columns">
            <div className="horadric_cube_container">
              <div id="crafting_cube_ingredients">
                <div className="horadric_cube_ingredients center" style={{ top: '143px', left: '120px' }} alt="">
                  <HoverItem type="charm" item={findUniqueItemByName('Eldritch Knowledge')} />
                </div>


                <div className="horadric_cube_ingredients center" style={{ top: '171px', left: '150px' }}>
                  <HoverItem type="charm" item={findCharmCompByName("Gheed's Fortune")} />
                </div>

                <div
                  className="horadric_cube_ingredients"
                  style={{
                    width: '38px', height: '38px', top: '260px', left: '145px',
                  }}
                >
                  <a href="" onClick={transmute} className="tooltip"><img src="images/transmute.gif" alt="" />
                    <div style={{ minWidth: '100px' }}>
                      <span className="diablo_white block">
                        Transmute
                      </span>
                    </div>
                  </a>
                </div>

              </div>


              <div id="crafting_cube_results" className="horadric_cube_ingredients" style={{ display: 'none' }}>
                <div className="horadric_cube_ingredients center" style={{ top: '143px', left: '120px' }}>

                  <HoverItem
                    item={
                      {
                        name: ['gold', 'Eldritch Knowledge'],
                        imageFile: 'gojes_talisman.png',
                        index: 'cube-result',
                        baseProps: [
                          ['gold', 'Small Charm'],
                          ['white', 'Keep in inventory to gain bonus'],
                          ['white', 'Required level: 35'],
                        ],
                        props: [
                          ['blue', '30% Better Chance of Finding Magical Items'],
                          ['blue', 'Available Primary Stat Slots: 2'],
                          ['blue', 'Available Secondary Stat Slots: 0'],
                          ['blue', 'Available Tertiary Stat Slots: 1'],
                        ],
                      }
                    }
                    type="hardcoded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ textAlign: 'center', marginTop: '50px' }}><h3>Storage and Quality of Life</h3></div>

        <div className="row">
          <div className="nine columns justify">
            <p>
              The stash size has has been greatly increased and crafting materials can now be stored in the Horadric Catalyst (Runes and Gems) or Horadric Vessels (Crystals and other Crafting Regeants).
            </p>
            <a href="http://diablo2resurgence.wikia.com/wiki/Crafting_Quality_of_Life_Items">For more information check out the Crafting Quality of Life page on the Resurgence wiki.</a>
          </div>
          <div className="three columns center">
            <HoverItem
              item={
                {
                  name: ['gold', 'Blessed Crystal (Stack)'],
                  imageFile: 'bcrystal_stack.png',
                  index: 'bcrystal_stack',
                  baseProps: [
                    ['white', 'Count: 37'],
                    ['orange', 'Transmogrify Reagent'],
                  ],
                  props: [
                    ['white', 'Forges A Crafted Item When Transmuted'],
                    ['white', 'With a Magic Item and a Gem'],
                    ['white', '(Item Level Reduced By 10%)'],
                    ['white', 'Quantity: 37'],
                  ],
                }
              }
              type="hardcoded"
            /><br />
            <HoverItem
              item={
                {
                  name: ['gold', 'Horadric Catalyst'],
                  imageFile: 'catalyst.gif',
                  index: 'catalyst',
                  baseProps: [
                    ['blue', 'Transmogrifies Runes and Gems Into Essence'],
                  ],
                  props: [
                    ['white', 'Radiant Essence: 1370'],
                    ['white', 'Gem Essence: 12'],
                    ['white', 'Greater Rune Essence: 5'],
                    ['white', 'Lesser Rune Essence: 359'],
                  ],
                }
              }
              type="hardcoded"
            />
            <span className="caption">
              Hover over these items their descriptions.
            </span>
          </div>
        </div>

        <div className="row separator" />

        <div className="row center"><h3>Nephalem&apos;s Valour Sub-classes</h3></div>
        <div className="row">
          <div className="twelve columns">
            <p>After killing Baal in Hell, players can find a Nephalem’s Valour charm in the antechamber of the Worldstone. This charm allows the player to specialize their builds by selecting one of the three unique subclasses available to their class. However, there is a cost. The player must offer up a powerful and relevant Unique item as a sacrifice as a sign of devotion to their selected path. For instance, the Mage (Sorceress) subclass can only be ascended to if you are willing to sacrifice one of the following: Griffon’s Eye (Diadem), Nightwing’s Veil (Spired Helm) or The Red Devil (Armet).</p>
          </div>
        </div>

        <div className="row neph_valor_row">
          <div className="three columns"><img alt="Amazon character standing" src="/images/Amazon.gif" /></div>
          <div className="nine columns">
            <ValorTable items={getValorsByClassName('Amazon')} />
          </div>
        </div>

        <div className="row neph_valor_row">
          <div className="nine columns">
            <ValorTable items={getValorsByClassName('Assassin')} />
          </div>
          <div className="three columns">
            <img alt="Assassin character standing" src="images/Assassin.gif" />
          </div>
        </div>

        <div className="row neph_valor_row">
          <div className="three columns"><img alt="Necromancer character standing" src="/images/Necromancer.gif" /></div>
          <div className="nine columns">
            <ValorTable items={getValorsByClassName('Necromancer')} />
          </div>
        </div>

        <div className="row neph_valor_row">
          <div className="nine columns">
            <ValorTable items={getValorsByClassName('Barbarian')} />
          </div>
          <div className="three columns"><img alt="Barbarain character standing" src="images/Barbarian_diablo_II.gif" /></div>
        </div>

        <div className="row neph_valor_row">
          <div className="three columns"><img alt="Paladin character standing" src="/images/Paladin.gif" /></div>
          <div className="nine columns">
            <ValorTable items={getValorsByClassName('Paladin')} />
          </div>
        </div>

        <div className="row neph_valor_row">
          <div className="nine columns">
            <ValorTable items={getValorsByClassName('Sorceress')} />
          </div>
          <div className="three columns"><img alt="Sorceress character standing" src="/images/Sorceress.gif" /></div>
        </div>

        <div className="row neph_valor_row">
          <div className="three columns"><img alt="Druid character standing" src="/images/Druid.gif" /></div>
          <div className="nine columns">
            <ValorTable items={getValorsByClassName('Druid')} />
          </div>
        </div>


      </div>
    </Layout>
  );
};
