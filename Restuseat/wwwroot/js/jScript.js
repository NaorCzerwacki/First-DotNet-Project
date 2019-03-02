$(document).ready(function(){
    
    /* Navigation */
    
    $('.nav-item').click(function () {
        $('.navbar-collapse').collapse('hide');
    });
    
    $("#sideHome>a").css({"background":"#337ab7","color":"white"});
    $("#liveMap").css({"display": "none"});
    $("#memberList").css({"display": "none"});
    $("#blueprint").css({"display": "none"});
    $("#settings").css({"display": "none"});
      
    $("#upperHome , #sideHome").on( "click", function() {
        $("#home").css({"display": "block"});
            $("#sideHome>a").css({"background":"#337ab7","color":"white"});
        $("#liveMap").css({"display": "none"});
            $("#sideLiveMap>a").css({"background":"#f8f9fa","color":"black"});
        $("#memberList").css({"display": "none"});
            $("#sideMemberList>a").css({"background":"#f8f9fa","color":"black"});
        $("#blueprint").css({"display": "none"});
            $("#sideBlueprint>a").css({"background":"#f8f9fa","color":"black"});
        $("#settings").css({"display": "none"});
            $("#sideSettings>a").css({"background":"#f8f9fa","color":"black"});
    });

    $("#upperLiveMap , #sideLiveMap").on( "click", function() {
        $("#home").css({"display": "none"});
            $("#sideHome>a").css({"background":"#f8f9fa","color":"black"});
        $("#liveMap").css({"display": "block"});
            $("#sideLiveMap>a").css({"background":"#337ab7","color":"white"});
        $("#memberList").css({"display": "none"});
            $("#sideMemberList>a").css({"background":"#f8f9fa","color":"black"});
        $("#blueprint").css({"display": "none"});
            $("#sideBlueprint>a").css({"background":"#f8f9fa","color":"black"});
        $("#settings").css({"display": "none"});
            $("#sideSettings>a").css({"background":"#f8f9fa","color":"black"});
    });
    
    $("#upperMemberList , #sideMemberList").on( "click", function() {
        $("#home").css({"display": "none"});
            $("#sideHome>a").css({"background":"#f8f9fa","color":"black"});
        $("#liveMap").css({"display": "none"});
            $("#sideLiveMap>a").css({"background":"#f8f9fa","color":"black"});
        $("#memberList").css({"display": "block"});
            $("#sideMemberList>a").css({"background":"#337ab7","color":"white"});
        $("#blueprint").css({"display": "none"});
            $("#sideBlueprint>a").css({"background":"#f8f9fa","color":"black"});
        $("#settings").css({"display": "none"});
            $("#sideSettings>a").css({"background":"#f8f9fa","color":"black"});
    });
    
    $("#upperBlueprint , #sideBlueprint").on( "click", function() {
        $("#home").css({"display": "none"});
            $("#sideHome>a").css({"background":"#f8f9fa","color":"black"});
        $("#liveMap").css({"display": "none"});
            $("#sideLiveMap>a").css({"background":"#f8f9fa","color":"black"});
        $("#memberList").css({"display": "none"});
            $("#sideMemberList>a").css({"background":"#f8f9fa","color":"black"});
        $("#blueprint").css({"display": "block"});
            $("#sideBlueprint>a").css({"background":"#337ab7","color":"white"});
        $("#settings").css({"display": "none"});
            $("#sideSettings>a").css({"background":"#f8f9fa","color":"black"});
    });
    
    $("#upperSettings , #sideSettings").on( "click", function() {
        $("#home").css({"display": "none"});
            $("#sideHome>a").css({"background":"#f8f9fa","color":"black"});
        $("#liveMap").css({"display": "none"});
            $("#sideLiveMap>a").css({"background":"#f8f9fa","color":"black"});
        $("#memberList").css({"display": "none"});
            $("#sideMemberList>a").css({"background":"#f8f9fa","color":"black"});
        $("#blueprint").css({"display": "none"});
            $("#sideBlueprint>a").css({"background":"#f8f9fa","color":"black"});
        $("#settings").css({"display": "block"});
            $("#sideSettings>a").css({"background":"#337ab7","color":"white"});
    });
    
    /* Blueprint */
    


});//END READY