import React from 'react';
import Nav from './Nav';

const Footer = () => (
    <>
        <div className="row separator" />
        <div className="row">
            <div className="center">
                <Nav />
                <p className="small-text">
                    Please note that if you want to play Resurgence you must have already installed Diablo II: Lord of Destruction 1.13 (1.13c is recommended).
                </p>
            </div>
        </div>
        <div className="row separator" />
        <div className="row small-text center">

            <p>
                Diablo 2 Resurgence is an unofficial modification for Diablo 2: Lord of Destruction with absolutely no commercial elements.<br />
                All trademarks referenced herein are the properties of their respective owners.
            </p>
            <p>
                Battle.net®<br />
                ©1996 - 2014 Blizzard Entertainment, Inc. All rights reserved. Battle.net and Blizzard Entertainment are trademarks or registered trademarks of
                 Blizzard Entertainment, Inc. in the U.S. and/or other countries.
            </p>
            <p>
                Diablo® II<br />
                ©2000 Blizzard Entertainment, Inc. All rights reserved. Diablo and Blizzard Entertainment are trademarks or registered trademarks of
                 Blizzard Entertainment, Inc. in the U.S. and/or other countries.
            </p>
            <p>
                Diablo® II: Lord of Destruction®<br />
                ©2001 Blizzard Entertainment, Inc. All rights reserved. Diablo, Lord of Destruction and Blizzard Entertainment are trademarks or
                 registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.
            </p>
        </div>

        <div className="row">
            <div className="u-full-width" id="footer" />
        </div>
    </>
);


export default Footer;
