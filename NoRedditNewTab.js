const IDs = {
  navbarAreaId: "change-username-tooltip-id",
  notifPopoutId: "INBOX--TOOLTIP"
}

const updateLinks = () => {
  // This extension isn't important enough to warrant nicely waiting for everything to be
  // fully loaded, so let's just sleep for a second instead...
  setTimeout(() => {
    const notifPopout = document.getElementById(IDs.notifPopoutId);
    for (let aNode of notifPopout.getElementsByTagName("a")) {
      if (aNode.hasAttribute("target")) {
        aNode.removeAttribute("target");
      }
    }

    // cosmetic update to "Notifications" text
    let spans = Array.from(notifPopout.getElementsByTagName("span"));
    spans.find((span) => span.innerText === "Notifications").innerText += " (same tab)";
  }, 1000);
}

const callback = (mutationList, observer) => {
  for (const mut of mutationList) { 
    if (mut.addedNodes.length === 1) {
      // if the notification popout has been mounted, we can go and update the links
      if (Array.from(mut.addedNodes).some((node) => node.id === IDs.notifPopoutId)) {
        updateLinks();
      }
    }
  }
}

new MutationObserver(callback).observe(document.getElementById(IDs.navbarAreaId), {
  attributes: true, childList: true, subtree: true
});