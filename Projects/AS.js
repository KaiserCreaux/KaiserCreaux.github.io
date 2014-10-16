$(document).ready(function() {
    $tabs = $(".tabs li");//this manages the three main pages of the site
    
    $tabs.click(function() {
        if($(this)){
            $tabs.removeClass("selected");//makes sure nothing can retain 'selected' status after a new click input
        $(this).addClass("selected");}//re-establishes 'selected' on active li
        
        selectionId = $(this).attr('id');
        
        $seg = $(".seg#"+selectionId);//creates object from whichever element of class seg was clicked by %tabs
    $(".mContent").fadeOut("fast", function(){//removes active main content page from view, clearing the way for the called main content page
        $(".seg").css("display", "none");//gives all .seg class elements invisibility powers
        $(".seg#"+selectionId).css("display", "block");//brings the .seg class that is linked to selectionId back into view
        $(".mContent").fadeIn("slow");//gives instruction on to how to bring it back in
    });
    
    });
    $tabsPlayers = $(".tabsPlayers li");//this manages the pages for individual players, and is highly similar to the above code.
    
    $tabsPlayers.click(function() {
        if($(this)){
            $tabsPlayers.removeClass("selectedTeam");
        $(this).addClass("selectedTeam");}
        
        selectionIdTeam = $(this).attr('id');
        
        $pagesTeam = $(".pageTeam#"+selectionIdTeam);
    $(".content").fadeOut("fast", function(){
        $(".pageTeam").css("display", "none");
        $(".pageTeam#"+selectionIdTeam).css("display", "block");
        $(".content").fadeIn("slow");
    });
    });
});