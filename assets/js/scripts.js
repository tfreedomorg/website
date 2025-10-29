var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var loadContent = function(contentArray) {
  var errorMsg = "Error loading content!";
  loaded = 0;
  for (var i = 0; i < contentArray.length; i++) {
    getData(contentArray[i], contentArray.length);
  }
  
};

var getData = function(contentPath, totalLength) {
  
  var name = "#" + contentPath.replace("statics/", "").replace(".html", "");
  
  // async ajax request
  $.get(contentPath, function(data) {
    console.log("Loaded " + contentPath);
    $(name).html(data);
    loaded += 1;
  })
  
  // error handling
  .error(function() {
    console.log("Error loading " + contentPath + "!");
    $(name).html(errorMsg);
    loaded += 1;
  });
  
}




}
/*
     FILE ARCHIVED ON 05:54:35 Jun 29, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:05:02 Oct 29, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.707
  exclusion.robots: 0.034
  exclusion.robots.policy: 0.019
  esindex: 0.011
  cdx.remote: 9.217
  LoadShardBlock: 93.789 (3)
  PetaboxLoader3.resolve: 79.727 (4)
  PetaboxLoader3.datanode: 95.196 (4)
  load_resource: 117.801
*/
