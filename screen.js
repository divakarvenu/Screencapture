// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      console.log(html2canvas);
      console.log(document.body);
      html2canvas(document.body, {
            onrendered: function(canvas) {
               $('body').append('<a id="chrometest"></a>');
			   console.log(canvas);
               $('#chrometest').attr('href', canvas.toDataURL("image/png"));
               $('#chrometest').attr('download','Test file.png');
               $('#chrometest')[0].click();
            },
      });

    }
  }
);
