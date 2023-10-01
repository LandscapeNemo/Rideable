import { RideableUtils, cModuleName, Translate } from "../utils/RideableUtils.js";
import { RideableFlags , cMaxRiderF, cissetRideableF, cTokenFormF, cInsideMovementF, cRiderPositioningF, cSpawnRidersF, ccanbeGrappledF, cCustomRidingheightF, cMountingEffectsF, cWorldMEffectOverrideF, cTileRideableNameF, cMountonEnterF, cGrapplePlacementF, cSelfApplyEffectsF, cAutoMountBlackListF, cCanbePilotedF, cforMountEffectsF} from "../helpers/RideableFlags.js";
import { cTokenForms, cTileForms } from "../utils/GeometricUtils.js";
import { cPlacementPatterns, cGrapplePlacements } from "../RidingScript.js";

const cRideableIcon = "fas fa-horse";

class RideableSheetSettings {
	//DECLARATIONS
	static SheetSetting(vApp, vHTML, vData, pisTile = false) {} //settings for sheets
	
	static AddHTMLOption(pHTML, pInfos) {} //adds a new HTML option to pHTML
	
	static FixSheetWindow(pHTML) {} //fixes the formating of pHTML sheet window
	
	//IMPLEMENTATIONS
	
	static SheetSetting(pApp, pHTML, pData, pisTile = false) {
		if (!pisTile || game.settings.get(cModuleName, "allowTileRiding")) {
			//create title (under which all settings are placed)
			//let vTittleHTML = `<h3 class="border" name="RideableTitle">${Translate("Titles.Rideable")}</h3>`;
			//pHTML.find('input[name="lockRotation"]').closest(".form-group").after(vTittleHTML);
			
			//create new tab
			let vTabsheet;
			let vprevTab;
			let vTabContentHTML;
			
			if (!pisTile) { //Tokens
				vTabsheet = pHTML.find(`[data-group="main"].sheet-tabs`);
				vprevTab = pHTML.find(`div[data-tab="resources"]`); //places rideable tab after last core tab "resources"
				vTabContentHTML = `<div class="tab" data-group="main" data-tab="${cModuleName}"></div>`; //tab content sheet HTML	
			}
			else { //Tiles
				vTabsheet =  pHTML.find(`[aria-role="Form Tab Navigation"].sheet-tabs`);
				vprevTab = pHTML.find(`div[data-tab="animation"]`); //places rideable tab after last core tab "animations"
				vTabContentHTML = `<div class="tab" data-tab="${cModuleName}"></div>`; //tab content sheet HTML	
			}
			
			let vTabButtonHTML = 	`
							<a class="item" data-tab="${cModuleName}">
								<i class="${cRideableIcon}"></i>
								${Translate("Titles."+cModuleName)}
							</a>
							`; //tab button HTML
			
			vTabsheet.append(vTabButtonHTML);
			vprevTab.after(vTabContentHTML);
			
			//create settings in reversed order	

			//Token is Rideable Setting
			RideableSheetSettings.AddHTMLOption(pHTML, {vlabel : Translate("TokenSettings."+ cissetRideableF +".name"), 
														vhint : Translate("TokenSettings."+ cissetRideableF +".descrp"), 
														vtype : "checkbox", 
														vvalue : RideableFlags.TokenissetRideable(pApp.document),
														vflagname : cissetRideableF
														});
												
			if (pisTile) {
				//Tile name for rideable purposes
				RideableSheetSettings.AddHTMLOption(pHTML, {vlabel : Translate("TokenSettings."+ cTileRideableNameF +".name"), 
															vhint : Translate("TokenSettings."+ cTileRideableNameF +".descrp"), 
															vtype : "text", 
															vwide : true,
															vvalue : RideableFlags.RideableName(pApp.document),
															vflagname : cTileRideableNameF
															});
			}
			
			if (game.settings.get(cModuleName, "allowMountingonEntering")) {
				//to set mount on enter
				RideableSheetSettings.AddHTMLOption(pHTML, {vlabel : Translate("TokenSettings."+ cMountonEnterF +".name"), 
															vhint : Translate("TokenSettings."+ cMountonEnterF +".descrp"), 
															vtype : "checkbox", 
															vvalue : RideableFlags.MountonEnter(pApp.document, true),
															vflagname : cMountonEnterF
															});	

				//to set the mount on enter black list
				RideableSheetSettings.AddHTMLOption(pHTML, {vlabel : Translate("TokenSettings."+ cAutoMountBlackListF +".name"), 
															vhint : Translate("TokenSettings."+ cAutoMountBlackListF +".descrp"), 
															vtype : "text", 
															vwide : true,
															vvalue : RideableFlags.AutomountBlackList(pApp.document, true),
															vflagname : cAutoMountBlackListF
															});				
			}
														
			//Max Riders Setting
			RideableSheetSettings.AddHTMLOption(pHTML, {vlabel : Translate("TokenSettings."+ cMaxRiderF +".name"), 
														vhint : Translate("TokenSettings."+ cMaxRiderF +".descrp"), 
														vtype : "number", 
														vvalue : RideableFlags.MaxRiders(pApp.document), 
														vflagname : cMaxRiderF
														});
														
			//Custom Riding height
			RideableSheetSettings.AddHTMLOption(pHTML, {vlabel : Translate("TokenSettings."+ cCustomRidingheightF +".name"), 
														vhint : Translate("TokenSettings."+ cCustomRidingheightF +".descrp"), 
														vtype : "number", 
														vvalue : RideableFlags.customRidingHeight(pApp.document), 
														vflagname : cCustomRidingheightF
														});
														
			//RiderPositioning
			RideableSheetSettings.AddHTMLOption(pHTML, {vlabel : Translate("TokenSettings."+ cRiderPositioningF +".name"), 
														vhint : Translate("TokenSettings."+ cRiderPositioningF +".descrp"), 
														vtype : "select", 
														voptions : cPlacementPatterns,
														vvalue : RideableFlags.RiderPositioning(pApp.document), 
														vflagname : cRiderPositioningF
														});
														
			if (game.settings.get(cModuleName, "Grappling")) {
				//RiderPositioning
				RideableSheetSettings.AddHTMLOption(pHTML, {vlabel : Translate("TokenSettings."+ cGrapplePlacementF +".name"), 
															vhint : Translate("TokenSettings."+ cGrapplePlacementF +".descrp"), 
															vtype : "select", 
															voptions : cGrapplePlacements,
															vvalue : RideableFlags.GrapplePlacement(pApp.document), 
															vflagname : cGrapplePlacementF
															});
			}

			//Token Form
			let vForms;
			
			if (pisTile) {
				vForms = cTileForms;
			}
			else {
				vForms = cTokenForms;
			}
			
			RideableSheetSettings.AddHTMLOption(pHTML, {vlabel : Translate("TokenSettings."+ cTokenFormF +".name"), 
														vhint : Translate("TokenSettings."+ cTokenFormF +".descrp"), 
														vtype : "select", 
														voptions : vForms,
														vvalue : RideableFlags.TokenForm(pApp.document), 
														vflagname : cTokenFormF
														});
														
			//Riders can move within Setting
			RideableSheetSettings.AddHTMLOption(pHTML, {vlabel : Translate("TokenSettings."+ cInsideMovementF +".name"), 
														vhint : Translate("TokenSettings."+ cInsideMovementF +".descrp"), 
														vtype : "checkbox", 
														vvalue : RideableFlags.RiderscanMoveWithin(pApp.document), 
														vflagname : cInsideMovementF
														});
														
			if (game.user.isGM) {//GM settings
				let vGMTittleHTML = `
										<hr>
										<h3 class="border" name="RideableTitle">${Translate("Titles.GMonly")}</h3>
									`;
				pHTML.find(`div[data-tab="${cModuleName}"]`).append(vGMTittleHTML);
			
				//Tokens spawned on creation
				RideableSheetSettings.AddHTMLOption(pHTML, {vlabel : Translate("TokenSettings."+ cSpawnRidersF +".name"), 
															vhint : Translate("TokenSettings."+ cSpawnRidersF +".descrp"), 
															vtype : "text",
															vwide : true,
															vvalue : RideableFlags.SpawnRidersstring(pApp.document), 
															vflagname : cSpawnRidersF
															});
				
				if (RideableUtils.isPf2e() || game.settings.get(cModuleName, "DFredsEffectsIntegration")) {
					//Custom Mounting effects applied to Riders
					RideableSheetSettings.AddHTMLOption(pHTML, {vlabel : Translate("TokenSettings."+ cMountingEffectsF +".name"), 
																vhint : Translate("TokenSettings."+ cMountingEffectsF +".descrp"), 
																vtype : "text",
																vwide : true,
																vvalue : RideableFlags.MountingEffectsstring(pApp.document), 
																vflagname : cMountingEffectsF
																});
					
					//if custom Mounting effects should override world stndard
					RideableSheetSettings.AddHTMLOption(pHTML, {vlabel : Translate("TokenSettings."+ cWorldMEffectOverrideF +".name"), 
																vhint : Translate("TokenSettings."+ cWorldMEffectOverrideF +".descrp"), 
																vtype : "checkbox",
																vwide : true,
																vvalue : RideableFlags.OverrideWorldMEffects(pApp.document), 
																vflagname : cWorldMEffectOverrideF
																});
							
					if (!pisTile) {
						//if custom Mounting effects should be self applied
						RideableSheetSettings.AddHTMLOption(pHTML, {vlabel : Translate("TokenSettings."+ cSelfApplyEffectsF +".name"), 
																	vhint : Translate("TokenSettings."+ cSelfApplyEffectsF +".descrp"), 
																	vtype : "checkbox",
																	vwide : true,
																	vvalue : RideableFlags.SelfApplyCustomEffects(pApp.document), 
																	vflagname : cSelfApplyEffectsF
																	});

						//for Mount effects applied to mount
						RideableSheetSettings.AddHTMLOption(pHTML, {vlabel : Translate("TokenSettings."+ cforMountEffectsF +".name"), 
																	vhint : Translate("TokenSettings."+ cforMountEffectsF +".descrp"), 
																	vtype : "text",
																	vwide : true,
																	vvalue : RideableFlags.forMountEffects(pApp.document), 
																	vflagname : cforMountEffectsF
																	});																
					}
				}
				
				if (!pisTile) {
					//if this token can be grappled
					RideableSheetSettings.AddHTMLOption(pHTML, {vlabel : Translate("TokenSettings."+ ccanbeGrappledF +".name"), 
																vhint : Translate("TokenSettings."+ ccanbeGrappledF +".descrp"), 
																vtype : "checkbox",
																vvalue : RideableFlags.canbeGrappled(pApp.document), 
																vflagname : ccanbeGrappledF
																});
				}
				
				//if this token can be piloted
				RideableSheetSettings.AddHTMLOption(pHTML, {vlabel : Translate("TokenSettings."+ cCanbePilotedF +".name"), 
															vhint : Translate("TokenSettings."+ cCanbePilotedF +".descrp"), 
															vtype : "checkbox",
															vvalue : RideableFlags.canbePiloted(pApp.document), 
															vflagname : cCanbePilotedF
															});				
			}
														
			
			pApp.setPosition({ height: "auto" });
		}
		
		RideableSheetSettings.FixSheetWindow(pHTML);
		
		//pHTML.css("width", "max-content");
	} 
	
	static AddHTMLOption(pHTML, pInfos) {
		let vlabel = "Name";	
		if (pInfos.hasOwnProperty("vlabel")) {
			vlabel = pInfos.vlabel;
		}
		
		let vtype = "text";	
		if (pInfos.hasOwnProperty("vtype")) {
			vtype = pInfos.vtype;
		}
		
		let vvalue = "";	
		if (pInfos.hasOwnProperty("vvalue")) {
			vvalue = pInfos.vvalue;
		}
		
		let vflagname = "";	
		if (pInfos.hasOwnProperty("vflagname")) {
			vflagname = pInfos.vflagname;
		}
		
		let vhint = "";	
		if (pInfos.hasOwnProperty("vhint")) {
			vhint = pInfos.vhint;
		}
		
		let vunits = "";	
		if (pInfos.hasOwnProperty("vunits")) {
			vunits = pInfos.vunits;
		} 
		
		let voptions = [];
		if (pInfos.hasOwnProperty("voptions")) {
			voptions = pInfos.voptions;
		} 
		
		let vnewHTML = ``;
		if (!(pInfos.hasOwnProperty("vwide") && pInfos.vwide)) {
			vnewHTML = `
				<div class="form-group slim">
					<label>${vlabel}</label>
				<div class="form-fields">
			`;
		}
		else {//for wide imputs
			vnewHTML = `
				<div class="form-group">
					<label>${vlabel}</label>
				<div class="form-fields">
			`;
		}
		
		switch (vtype){
			case "number":
			case "text":
				vnewHTML = vnewHTML + `<input type=${vtype} name="flags.${cModuleName}.${vflagname}" value="${vvalue}">`;
				break;
				
			case "checkbox":
				if (vvalue) {
					vnewHTML = vnewHTML + `<input type=${vtype} name="flags.${cModuleName}.${vflagname}" checked>`;
				}
				else {
					vnewHTML = vnewHTML + `<input type=${vtype} name="flags.${cModuleName}.${vflagname}">`;
				}
				break;
				
			case "select":
				vnewHTML = vnewHTML + `<select name="flags.${cModuleName}.${vflagname}">`;
				
				for (let i = 0; i < voptions.length; i++) {
					if (voptions[i] == vvalue) {
						vnewHTML = vnewHTML + `<option value="${voptions[i]}" selected>${Translate("TokenSettings." + vflagname+ ".options." + voptions[i])}</option>`;
					}
					else {
						vnewHTML = vnewHTML + `<option value="${voptions[i]}">${Translate("TokenSettings." + vflagname+ ".options." + voptions[i])}</option>`;
					}
				}
				
				vnewHTML = vnewHTML + `</select>`;
				break;
		}
			
		if (vhint != "") {
			vnewHTML = vnewHTML + `
				</div>
					<p class="hint">${vhint}</p>         
				</div>
			`;
		}
		
		//pHTML.find('[name="RideableTitle"]').after(vnewHTML);
		pHTML.find(`div[data-tab="${cModuleName}"]`).append(vnewHTML);
	}
	
	static FixSheetWindow(pHTML) {
		let vNeededWidth = 0;

		pHTML.find(`nav.sheet-tabs[data-group="main"]`).children().each(function() {
			vNeededWidth = vNeededWidth + $(this).outerWidth() ;
		});
		
		if (vNeededWidth > pHTML.width()) {
			pHTML.width(vNeededWidth);
		}		
	}
}

Hooks.on("renderTokenConfig", (pApp, pHTML, pData) => RideableSheetSettings.SheetSetting(pApp, pHTML, pData));

Hooks.on("renderTileConfig", (pApp, pHTML, pData) => RideableSheetSettings.SheetSetting(pApp, pHTML, pData, true));