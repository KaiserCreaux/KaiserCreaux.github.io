$(document).ready(function() {
    $raceTabs = $(".raceTab li");//this manages the three main pages of the site
    
    $raceTabs.click(function() {
        if($(this)){
            $raceTabs.removeClass("raceSelected");//makes sure nothing can retain 'selected' status after a new click input
        $(this).addClass("raceSelected");}//re-establishes 'selected' on active li
        
        selectionId = $(this).attr('id');
        
        $seg = $(".seg#"+selectionId);//creates object from whichever element of class seg was clicked by %tabs
    $(".raceContentTab").fadeOut("fast", function(){//removes active main content page from view, clearing the way for the called main content page
        $(".seg").css("display", "none");//gives all .seg class elements invisibility powers
        $(".seg#"+selectionId).css("display", "block");//brings the .seg class that is linked to selectionId back into view
        $(".raceContentTab").fadeIn("slow");//gives instruction on to how to bring it back in
    });
    
    });
    $raceContentTab = $(".raceContentTab li");//this manages the pages for individual races, and is highly similar to the above code.

    $raceContentTab.click(function() {
        if($(this)){
            $raceContentTab.removeClass("selectedRace");
        $(this).addClass("selectedRace");}
        
        selectedRace = $(this).attr('id');
        
        $raceDisplay = $(".raceDisplay#"+selectedRace);
    $(".content").fadeOut("fast", function(){
        $(".raceDisplay").css("display", "none");
        $(".raceDisplay#"+selectedRace).css("display", "block");
        $(".content").fadeIn("slow");
    });
    });
	$("#setPlayerName").click(function(){
		var $playerName=document.getElementById("playerName");
		var $namePrompt=window.prompt("What is the player's name?","Name");
		$playerName.textContent=$namePrompt;
		});
	$("#setCharacterName").click(function(){
		var $characterName=document.getElementById("characterName");
		var $characterPrompt=window.prompt("What is your character's name?","Name");
		$characterName.textContent=$characterPrompt;
		});
	//What follows is the array of data for the various races, stored in the format race, hp, mp, professions, abilities.
	//Midlanders 0, Northlanders 1, Wastelanders 2, Grey Elves 3, Wild Elves 4, Dark Elves 5, Deep Beards 6, High Beards 7, Orcs 8, Goblins 9, Air Wyrds 10, Earth Wyrds 11, Fire Wyrds 12, Water Wyrds 13
	var $raceData = [['Midlander',6,6,["Any Additional"],["Favored Group"]],['Northlander',10,4,["Shaman", " Huntsman"],["Path of the Warrior"," Path of the Fate Wielder"," Path of the Jarl"]],['Wastelander',4,8,["Rogue"," Merchant"],["Slow"," Mend Limb",	" Heart Scarab"]],['Grey Elf',6,10,['Mystic',' Linguistics'],['Erudition',' Comprehend',' Refuge']],['Wild Elf',6,8,['Medicine',' Huntsman'],['Writ of the Maple',' Writ of the Cedar',' Writ of the Oak']],['Dark Elf',4,12,['Diplomat',' Poison'],['Sting',' Shadow Mask',' Combat Sacrifice']],['Deep Beard',6,8,['Artisan',' History'],['Heirloom']],['High Beard',8,6,['Bard',' Brewer'],['Geas of Animal',' Geas of Nourishment',' Geas of Guest']],['Orc',8,8,['Battle Smith',' Jeweller'],['Gift of Drogba',' Gift of Gerkal','Bane of Duat']],['Goblin',4,12,['Battle Smith',' Jeweller'],['Gift of Drogba',' Gift of Gerkal','Bane of Duat']],['Air Wyrd',4,10,['History',' Linguistics'],['Dart of Lightning']],['Earth Wyrd',4,10,['Medicine',' Poison'],['Dart of Crystal']],['Fire Wyrd',4,10,['Artisan',' Battle Smith'],['Dart of Fire']],['Water Wyrd',4,10,['Diplomat',' Merchant'],['Dart of Ice']]
];
	
	//The return button should bring the initial race-type select card up. I'll make this work later.
	//$("returnButtonRace").click(function(){	
		//$(".raceDisplay").css("display", "none");}
	$("#selectMidlander").click(function(){
		var $raceTotal=document.getElementById("raceTotal");
		var $hitPointsTotal=document.getElementById("hitPointsTotal");
		var $magicPointsTotal=document.getElementById("magicPointsTotal");
		var $professionsTotal=document.getElementById("professionsTotal");
		var $abilitiesTotal=document.getElementById("abilitiesTotal");
		$raceTotal.textContent=$raceData[0][0];			
		$hitPointsTotal.textContent=$raceData[0][1];			
		$magicPointsTotal.textContent=$raceData[0][2];
		$professionsTotal.textContent=$raceData[0][3];
		$abilitiesTotal.textContent=$raceData[0][4];
		});
	$("#selectNorthlander").click(function(){
		var $raceTotal=document.getElementById("raceTotal");
		var $hitPointsTotal=document.getElementById("hitPointsTotal");
		var $magicPointsTotal=document.getElementById("magicPointsTotal");
		var $professionsTotal=document.getElementById("professionsTotal");
		var $abilitiesTotal=document.getElementById("abilitiesTotal");
		$raceTotal.textContent=$raceData[1][0];			
		$hitPointsTotal.textContent=$raceData[1][1];			
		$magicPointsTotal.textContent=$raceData[1][2];
		$professionsTotal.textContent=$raceData[1][3];
		$abilitiesTotal.textContent=$raceData[1][4];
		});
	$("#selectWastelander").click(function(){
		var $raceTotal=document.getElementById("raceTotal");
		var $hitPointsTotal=document.getElementById("hitPointsTotal");
		var $magicPointsTotal=document.getElementById("magicPointsTotal");
		var $professionsTotal=document.getElementById("professionsTotal");
		var $abilitiesTotal=document.getElementById("abilitiesTotal");
		$raceTotal.textContent=$raceData[2][0];			
		$hitPointsTotal.textContent=$raceData[2][1];			
		$magicPointsTotal.textContent=$raceData[2][2];
		$professionsTotal.textContent=$raceData[2][3];
		$abilitiesTotal.textContent=$raceData[2][4];
		});
	$("#selectGreyElf").click(function(){
		var $raceTotal=document.getElementById("raceTotal");
		var $hitPointsTotal=document.getElementById("hitPointsTotal");
		var $magicPointsTotal=document.getElementById("magicPointsTotal");
		var $professionsTotal=document.getElementById("professionsTotal");
		var $abilitiesTotal=document.getElementById("abilitiesTotal");
		$raceTotal.textContent=$raceData[3][0];			
		$hitPointsTotal.textContent=$raceData[3][1];			
		$magicPointsTotal.textContent=$raceData[3][2];
		$professionsTotal.textContent=$raceData[3][3];
		$abilitiesTotal.textContent=$raceData[3][4];
		});
	$("#selectWildElf").click(function(){
		var $raceTotal=document.getElementById("raceTotal");
		var $hitPointsTotal=document.getElementById("hitPointsTotal");
		var $magicPointsTotal=document.getElementById("magicPointsTotal");
		var $professionsTotal=document.getElementById("professionsTotal");
		var $abilitiesTotal=document.getElementById("abilitiesTotal");
		$raceTotal.textContent=$raceData[4][0];			
		$hitPointsTotal.textContent=$raceData[4][1];			
		$magicPointsTotal.textContent=$raceData[4][2];
		$professionsTotal.textContent=$raceData[4][3];
		$abilitiesTotal.textContent=$raceData[4][4];
		});
	$("#selectDarkElf").click(function(){
		var $raceTotal=document.getElementById("raceTotal");
		var $hitPointsTotal=document.getElementById("hitPointsTotal");
		var $magicPointsTotal=document.getElementById("magicPointsTotal");
		var $professionsTotal=document.getElementById("professionsTotal");
		var $abilitiesTotal=document.getElementById("abilitiesTotal");
		$raceTotal.textContent=$raceData[5][0];			
		$hitPointsTotal.textContent=$raceData[5][1];			
		$magicPointsTotal.textContent=$raceData[5][2];
		$professionsTotal.textContent=$raceData[5][3];
		$abilitiesTotal.textContent=$raceData[5][4];
		});
	$("#selectDeepBeard").click(function(){
		var $raceTotal=document.getElementById("raceTotal");
		var $hitPointsTotal=document.getElementById("hitPointsTotal");
		var $magicPointsTotal=document.getElementById("magicPointsTotal");
		var $professionsTotal=document.getElementById("professionsTotal");
		var $abilitiesTotal=document.getElementById("abilitiesTotal");
		$raceTotal.textContent=$raceData[6][0];			
		$hitPointsTotal.textContent=$raceData[6][1];			
		$magicPointsTotal.textContent=$raceData[6][2];
		$professionsTotal.textContent=$raceData[6][3];
		$abilitiesTotal.textContent=$raceData[6][4];
		});
	$("#selectHighBeard").click(function(){
		var $raceTotal=document.getElementById("raceTotal");
		var $hitPointsTotal=document.getElementById("hitPointsTotal");
		var $magicPointsTotal=document.getElementById("magicPointsTotal");
		var $professionsTotal=document.getElementById("professionsTotal");
		var $abilitiesTotal=document.getElementById("abilitiesTotal");
		$raceTotal.textContent=$raceData[7][0];			
		$hitPointsTotal.textContent=$raceData[7][1];			
		$magicPointsTotal.textContent=$raceData[7][2];
		$professionsTotal.textContent=$raceData[7][3];
		$abilitiesTotal.textContent=$raceData[7][4];
		});
	$("#selectOrc").click(function(){
		var $raceTotal=document.getElementById("raceTotal");
		var $hitPointsTotal=document.getElementById("hitPointsTotal");
		var $magicPointsTotal=document.getElementById("magicPointsTotal");
		var $professionsTotal=document.getElementById("professionsTotal");
		var $abilitiesTotal=document.getElementById("abilitiesTotal");
		$raceTotal.textContent=$raceData[8][0];			
		$hitPointsTotal.textContent=$raceData[8][1];			
		$magicPointsTotal.textContent=$raceData[8][2];
		$professionsTotal.textContent=$raceData[8][3];
		$abilitiesTotal.textContent=$raceData[8][4];
		});
	$("#selectGoblin").click(function(){
		var $raceTotal=document.getElementById("raceTotal");
		var $hitPointsTotal=document.getElementById("hitPointsTotal");
		var $magicPointsTotal=document.getElementById("magicPointsTotal");
		var $professionsTotal=document.getElementById("professionsTotal");
		var $abilitiesTotal=document.getElementById("abilitiesTotal");
		$raceTotal.textContent=$raceData[9][0];			
		$hitPointsTotal.textContent=$raceData[9][1];			
		$magicPointsTotal.textContent=$raceData[9][2];
		$professionsTotal.textContent=$raceData[9][3];
		$abilitiesTotal.textContent=$raceData[9][4];
		});
	$("#selectAirWyrd").click(function(){
		var $raceTotal=document.getElementById("raceTotal");
		var $hitPointsTotal=document.getElementById("hitPointsTotal");
		var $magicPointsTotal=document.getElementById("magicPointsTotal");
		var $professionsTotal=document.getElementById("professionsTotal");
		var $abilitiesTotal=document.getElementById("abilitiesTotal");
		$raceTotal.textContent=$raceData[10][0];			
		$hitPointsTotal.textContent=$raceData[10][1];			
		$magicPointsTotal.textContent=$raceData[10][2];
		$professionsTotal.textContent=$raceData[10][3];
		$abilitiesTotal.textContent=$raceData[10][4];
		});
	$("#selectEarthWyrd").click(function(){
		var $raceTotal=document.getElementById("raceTotal");
		var $hitPointsTotal=document.getElementById("hitPointsTotal");
		var $magicPointsTotal=document.getElementById("magicPointsTotal");
		var $professionsTotal=document.getElementById("professionsTotal");
		var $abilitiesTotal=document.getElementById("abilitiesTotal");
		$raceTotal.textContent=$raceData[11][0];			
		$hitPointsTotal.textContent=$raceData[11][1];			
		$magicPointsTotal.textContent=$raceData[11][2];
		$professionsTotal.textContent=$raceData[11][3];
		$abilitiesTotal.textContent=$raceData[11][4];
		});
	$("#selectFireWyrd").click(function(){
		var $raceTotal=document.getElementById("raceTotal");
		var $hitPointsTotal=document.getElementById("hitPointsTotal");
		var $magicPointsTotal=document.getElementById("magicPointsTotal");
		var $professionsTotal=document.getElementById("professionsTotal");
		var $abilitiesTotal=document.getElementById("abilitiesTotal");
		$raceTotal.textContent=$raceData[12][0];			
		$hitPointsTotal.textContent=$raceData[12][1];			
		$magicPointsTotal.textContent=$raceData[12][2];
		$professionsTotal.textContent=$raceData[12][3];
		$abilitiesTotal.textContent=$raceData[12][4];
		});
	$("#selectWaterWyrd").click(function(){
		var $raceTotal=document.getElementById("raceTotal");
		var $hitPointsTotal=document.getElementById("hitPointsTotal");
		var $magicPointsTotal=document.getElementById("magicPointsTotal");
		var $professionsTotal=document.getElementById("professionsTotal");
		var $abilitiesTotal=document.getElementById("abilitiesTotal");
		$raceTotal.textContent=$raceData[13][0];			
		$hitPointsTotal.textContent=$raceData[13][1];			
		$magicPointsTotal.textContent=$raceData[13][2];
		$professionsTotal.textContent=$raceData[13][3];
		$abilitiesTotal.textContent=$raceData[13][4];
		});
		
	/*THIS IS MY CHARACTER SHEET BUILDING GUTS ZONE. Lots of ideas I may implement here.
	
	
	//function AddRace(
	
	var hitPoints = function(raceSelected){
     if (raceSelected === "midlander"){
        return 6;}
     else if (raceSelected === "northlander"){
        return 10;}
     else if (raceSelected === "wastelander"){
        return 4;}
     else {
        return 1;}
};
	var manaPoints = function(raceSelected){
     if (raceSelected === "midlander"){
        return 6;}
     else if (raceSelected === "northlander"){
        return 4;}
     else if (raceSelected === "wastelander"){
        return 8;}
     else {
        return 1;}
};*/
});
