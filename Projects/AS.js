$(document).ready(function() {
    $selectorList = $(".selectorList li");//this manages the three main pages of the site
    
    $selectorList.click(function() {
        if($(this)){
            $selectorList.removeClass("selected");//makes sure nothing can retain 'selected' status after a new click input
        $(this).addClass("selected");}//re-establishes 'selected' on active li
        
        selectionId = $(this).attr('id');
        
        $seg = $(".seg#"+selectionId);//creates object from whichever element of class seg was clicked by %selectorList
    $(".mContent").fadeOut("fast", function(){//removes active main content page from view, clearing the way for the called main content page
        $(".seg").css("display", "none");//gives all .seg class elements invisibility powers
        $(".seg#"+selectionId).css("display", "block");//brings the .seg class that is linked to selectionId back into view
        $(".mContent").fadeIn("slow");//gives instruction on to how to bring it back in
    });
    
    });
});