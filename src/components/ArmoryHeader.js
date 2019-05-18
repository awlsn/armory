import React from 'react';
import { Link } from 'gatsby';

const ArmoryHeader = () => (
    <div className="row">
        <div className="u-full-width">
            <h1 className="center">Resurgence Armory</h1>
            <div id="armoryNav">
                <ul id="armoryMainNav">
                    <li><Link to="/armory/bases">Basic Items</Link></li>
                    <li><Link to="/armory/runewords">Runewords</Link></li>
                    <li><Link to="/armory/uniques">Uniques</Link></li>
                    <li><Link to="/armory/sets">Sets</Link></li>
                    <li><Link to="/armory/charmComponents">Charm Components</Link></li>
                    <li><Link to="/armory/runes">Runes</Link></li>
                    <li><Link to="/armory/gems">Gems</Link></li>
                    <li><Link to="/armory/augments">Augments</Link></li>
                    <li><Link to="/armory/affixes">Magic and Rare Prefixes and Suffixes</Link></li>
                </ul>
            </div>
        </div>
    </div>
);

export default ArmoryHeader;
