import React from 'react';
import { Link } from 'gatsby';

const Nav = () => (

    <ul className="intro_navbar">
        <li>
            <Link to="/">Home</Link>
        </li>
        <li><a href="https://www.reddit.com/r/Diablo2Resurgence/comments/5p75ey/resurgence_13_how_to_install_launch_the_game/">Download Launcher</a></li>
        <li><a href="https://discord.gg/0cDYwWrMLIImycvz">Discord</a></li>
        <li><a href="https://www.reddit.com/r/Diablo2Resurgence">Subreddit</a></li>
        <li><a href="http://diablo2resurgence.wikia.com/wiki/Diablo2Resurgence_Wikia">Wiki</a></li>
        <li><a href="/armory">Armory</a></li>
        <li><a href="/crafting">Crafting</a></li>
    </ul>
);

export default Nav;
