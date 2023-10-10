## v2.12.4
- Added "middle" to Grappled placement options

## v2.12.3
- Fixed bug that prevented the Mount effects of a rider to be removed when this rider dismounts

## v2.12.2
- Fixed bug that occurred when a free moving token changed its height when mounting a token/tile with a custom riding height

## v2.12.1
- Fixed error in German translation file (thanks to [Freezor](https://github.com/Freezor))

## v2.12.0
- Added token setting Mount effects to set effects that are applied to the mount of this token
- Fixed some bugs with the way Pf2e effects are applied
- The tab bar of token settings should be less likely to overflow when multiple modules add tabs

## v2.11.1
- Fixed grid snap bug for Ridden tokens moved via move ridden
- Added macros for Toggle mount and Piloting

## v2.11.0
- Mount on enter will no longer check the distance since the token is already on the mount
- While Rider movement "Prevent movement" is active and a token/tile with Riders can move freely activated is ridden, moving outside of the set form will now move the token to closest border position
- Fixed bug with closest point on border calculation for rotated objects
- Fixed bug with mount on enter placement for rotated objects
- Added token/tile setting Can be piloted to allow players to pilot this token/tile
  - While riding players can use the pilot toggle key or macro
  - Whenever a piloting token moves the ridden tile/token will move with it
- Added additional features in combination with [Token Attacher](https://foundryvtt.com/packages/token-attacher/)
  - Added token form from attached tiles to use attached tiles as the form of this token
    - The attached tiles should NOT be set as rideable, it will not directly cause any bugs but strange behaviour
    - The attached tiles set token form will be respected and combined to create the full rideable area
    - When using keys or macros to mount the attached tiles can be hovered instead of the token
    - The mounting distance will be measured from all attached tiles (only one has to be in range)
  - Added tile form No form/ignore to enhance above feature

## v2.10.2
- Player can now freely change their tokens elevation while riding a token/tile with "Riders can move freely"
  - This change should improve the compatibility with multi level mounts/vehicles, especially in regard to level stairs

## v2.10.1
- A few typo fixes in the english translation (thanks to [AFigureOfBlue](https://github.com/AFigureOfBlue))

## v2.10.0
- Added token setting Mount on enter blacklist to prevent certain tokens or actors from mounting on entering
- Added compatibility with Token Attacher
  - "Riding loops" should no longer be possible when using Token Attacher
- Added feature to make sure that rider tokens will stay atop of their mount even when no riding height is set

## v2.9.5
- Bug fix for Tile riding when Wall-Height is active

## v2.9.4
- Fixed a bug with custom effects using DFreds Convenient effects
- Added token setting Self apply riding effects to make this token apply its own Riding effects while riding

## v2.9.3
- Small bug fix regarding the UI mount-toggle button

## v2.9.2
- Small bug fix

## v2.9.1
- Token settings will no longer be wide

## v2.9.0
- Copy-pasting ridden tokens should now correctly copy the riders
- Added api for compatibility

## v2.8.1
- Added Wall setting Grappled placement to set where tokens grappled by this token are placed
- Added key to switch between the grapple placement of selected tokens

## v2.8.0
- Improved grappling, can now ungrapple hovered tokens
- Added mount/dismount button on tokens
- Added key-bind for mount toggle
- Added world setting Mount button deefault position to set the world default position for the mount button
- Added client setting Mount button position to set the position of the mount button or disable it
- Added world setting Apply "Grappled" effect to apply a system dependent effect on grappled tokens
- Added DFreds Convenient Effects Integration
  - Must be activated with the world setting DFreds Convenient Effects Integration
  - Allows for effects to be applied to mounted and grappled tokens
  - Allows for custom mounted effects to be set
- Added token setting Can be grappled to enabled/disable the grapple feature on this token

## v2.7.3
- Added from transparency to token forms to auto detect a tokens (tiles) form from its used image (only Foundry v11)
- Improved the innitial placing on tokens (tiles) with free movement enabled when the mounting token is already within the ridden token (tile) 

## v2.7.2
- Fixed bug with mount on enter that occurred when tile riding was active

## v2.7.1
- Fixed bug regarding familiar riding

## v2.7.0
- Added token/tile setting Custom riding height to set the height used for tokens riding this token
- Added new [macros](https://github.com/Saibot393/Rideable/blob/main/README.md#Macros) to mount/dismount specific tokens/tiles
- Added Tagger integration
  - Added setting Tagger mounting integration to activate the integration
    - If active, adding a tag like "Rideable:{TokenID}" to a token or tile will mount the appropriate token belonging to TokenID (removing this tag will unmount the token)
- Added world setting Allow mount on enter to activate the mount on enter feature in this world
  - Added token/tile setting Mount on enter to mount tokens that enter this token/tile automatically
- Added world setting Rider movement default setting to set the default Rider movement behaviour for new players

## v2.6.0
- Added tile mounting (a bit experimental for the moment)
  - World option Tiles can be mounted: to enable tile mounting feature
  - Added tile setting Tile name: to set the name rideable will use for this tile
- Added world setting Familiar riding position: to set the corner familiars will be positioned first

## v2.5.2
- Improved compatibility with Lock & Key
- Mounting will no longer apply mounted effects that are already applied

## v2.5.1
- Fixed small bug in Token sheet ui

## v2.5.0
- Improved german translation (thanks to [mhilbrunner](https://github.com/mhilbrunner))
- [only Pf2e] added custom riding effects
  - new World setting Custom riding effects: to list effects that should be applied to tokens when they start riding
  - new Token setting Riding effects: effects tokens gain when they start riding this token
  - new Token setting Override world riding effects: to override the world standard riding effects with the tokens effects (instead of appending them)

## v2.4.2
- Improved Arms reach integration
- Improved Popups position
- Implemented a temporary fix for a problem that caused macros not to work due to a [Foundry bug](https://github.com/foundryvtt/foundryvtt/issues/9814)

## v2.4.1
- Improved compatibility with Lock & Key

## v2.4.0
- Compatibility with Lock & Key
- Generell improvements

## v2.3.1
- Improved compendium token support for "Spawn riders"

## v2.3.0
- Added compendium token support for "Spawn riders"
- Added "cluster" placement pattern
- Added "Adjust rider size" setting

## v2.2.1
- Bug fix for free riding tokens and stairways compatibility

## v2.2.0
- Moved on-token settings into separate tab
- Added on-token option to spawn with riders
- Added Grappling (has to be turned in the settings)
- Improved grid snapping
- Improved file structure

## v2.1.0
- Improved previous (v2.0.1) bug fix
- Fixed bug related to familiar riding
- Improved grid snapping for mounting free move tokens
- Now supports elliptical tokens for ridden tokens with free movement
- Added alternative placement mode "Circle" which can be chosen in the settings of ridden tokens

## v2.0.1
-  hotfix for Foundry v10

## v2.0.0
- Major changes in the underlying code
- All actions (such as riding, mounting, unmounting...) now work for players, even if the GM is in different scene (still requires a GM to be online)
- Added full support for the Stairways module
  - Riders will follow their ridden token through stairways
  - If the option "Move ridden Token" is active, the ridden token will follow its riders through stairways
  - If a users (standard) character gets teleported in one of this ways, the user will switch scenes
  - If the option "Prevent movement" for rider tokens is active, riders will be prevented from using stairways
- Fixed a few placement bugs for riders
- Improved initial placing of riders for free movement
- Added support for Arms Reach (same as for FoundryVTT Arms Reach)

## v1.6.0
- Added titles to settings
- Added on-token setting Token form which determines how the border is defined
- Added on-token setting Riders can move freely
  - If this option is toggled on all riders this token can move freely within its borders and keep their relative position should the token be moved
- Added global default rideable setting
  - Added on-token rideable setting (overrides world rideable setting)
- Added client setting to only show popup messages from own tokens
- Added on-token setting for maximum riders (overrides world setting)
- Moved the "Rider movement" option to client settings
- For PF2e: changed name of "Rideable" trait setting to clarify that it is now only one optional way to make tokens rideable
- Added support for FoundryVTT Arms Reach
  - Added an option which overrides the mounting distance with the arms-reach distance
    
## v1.5.1
- fixed a bug that appeared when only a familiar was riding a token

## v1.5.0
- improved localization file structure
- fixed bug concerning the border-to-border mounting distance
- fixed bug concerning the positioning of the ridden token when "Move ridden on rider movement" is used
- GMs can now force change the riding height of tokens (unless "Move ridden on rider movement" is activated)
- Added "Link rotations" options to allow ridden tokens to rotate their riders (or vice versa with the "Move ridden on rider movement" option)
- Added additional popups for cases where tokens cant be mounted
- Added compatibility for the "Wall-Height" module by adding an option which allows the riding height to be set through the token height (see "Wall-Height" module) of the ridden token

## v1.4.0
- added "Move ridden on rider movement" option, only happens if the owner of the rider is also an owner of the ridden token
- added maximum riders option
- added optional text pop up for some actions (mount, unmount, prevented movement)
- minor bug fixes

## v1.3.0
- added option to prevent tokens from riding enemy tokens (GM can override this)
  
## v1.2.0
- added future infrastructure for module compatibility
- Riders now teleport when the ridden token is teleported
  - Rideable is now compatibile with in-scene use of the stairways module

## v1.1.3
- fixed riding loops
- fixed manifest error which caused Foundrys automatic module update to not find the newest version

## v1.1.2
- small bug fix regarding pf2e Rideable tag system
  
## v1.1.1
- added 'Familiar riding' macro
  
## v1.1.0
- added support for "Familiar riding" which allows familiars of characters to ride their tokens. Familiars will be placed at the corners of their masters (has to be switched on in the settings menu)
- Fixed a bug which prevented the z-level of riding tokens to be updated

## v1.0.0
First release on Foundry
