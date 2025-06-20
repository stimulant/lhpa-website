// Lottie bits
var Webflow = Webflow || [];
Webflow.push(function () {
  window.addEventListener("resize", function () {
    window.Webflow.require("lottie").lottie.resize();
  });
});

// ==================================
// Slider and Tabs

window.sa5 = window.sa5 || [];

var slider_wwd;
var tabs_wwd;
var tabs_anim_wwd;

document.addEventListener("DOMContentLoaded", function () {
  // Initialize SA5 Webflow Tabs
  slider_wwd = new sa5.WebflowSlider(
    document.querySelector("[wfu-slider=slider-wwd]")
  );

  tabs_wwd = new sa5.WebflowTabs(document.querySelector("[wfu-tabs=tabs-wwd]"));

  tabs_wwd_anim = new sa5.WebflowTabs(
    document.querySelector("[wfu-tabs=tabs-wwd-anim]")
  );

  console.log("Registered slider ", slider_wwd.name);
  console.log("Registered tabs ", tabs_wwd.name);
  console.log("Registered tabs-anima ", tabs_wwd_anim.name);
});



var oldTab = 0; // current tab before transition
const TAB_MAP = ["pol", "com", "med"];
const TAB_ANIM_LOOKUP = [
  "pol_initial",
  "pol_from_com",
  "pol_from_med",
  "com_from_pol",
  "com_from_med",
  "med_from_pol",
  "med_from_com",
];

window.sa5.push([
  "tabChanged",
  (tabs, index) => {

    if (index == oldTab || index == undefined) return;

    console.log("TAB CHANGED", tabs.name, oldTab, index);

    var fromTab = TAB_MAP[oldTab];
    var toTab = TAB_MAP[index];
    var animTabToShow = toTab + "_from_" + fromTab;
    var animTabIndex = TAB_ANIM_LOOKUP.indexOf(animTabToShow);

    console.log(
      ">> " + fromTab + " to " + toTab + 
      ", selecting " + animTabToShow + " [index=" + animTabIndex +"] on " + tabs_wwd_anim.name);

    // Show correct animation
    tabs_wwd_anim.currentIndex = animTabIndex;

    // Update Slider
    if (slider_wwd != null) {
      slider_wwd.currentIndex = index;
    }

    oldTab = index;
  },
]);

//window.sa5.push(['slideChanged',
//  (slider, index) => {
//
//		console.log("SLIDE CHANGED", slider.name, slider, index);
//
//  }]);
