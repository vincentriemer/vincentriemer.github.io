// @codekit-prepend "jquery-1.10.2.js", "TimelineLite.js", "TweenLite.js", "CSSPlugin.js", "AttrPlugin.js", "EasePack.js"

var aboutButtonTimeline = new TimelineLite( { paused: true } );
var blogButtonTimeline = new TimelineLite( { paused: true } );

aboutButtonTimeline.to($("#about-container h1"), 0.125, { opacity: 0.0 }, 0 );
aboutButtonTimeline.to($("#about-container h2"), 0.125, { opacity: 1.0 }, 0 );

blogButtonTimeline.to($("#blog-container h1"), 0.125, { opacity: 0.0 }, 0 );
blogButtonTimeline.to($("#blog-container h2"), 0.125, { opacity: 1.0 }, 0 );

function aboutEnter() { aboutButtonTimeline.play(); }
function aboutExit() { aboutButtonTimeline.reverse(); }

function blogEnter() { blogButtonTimeline.play(); }
function blogExit() { blogButtonTimeline.reverse(); }

$("#about-container").hover(aboutEnter,aboutExit);
$("#blog-container").hover(blogEnter,blogExit);
