//cancel check-adblock script
var pattern = "*://*/*check-adblock*";
function cancel(requestDetails) {
  console.log("Canceling: " + requestDetails.url);
  return {cancel: true};
}
browser.webRequest.onBeforeRequest.addListener(
  cancel,
  {urls: [pattern]},
  ["blocking"]
);