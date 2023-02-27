// Some node IDs used to query
const IDs = {
  navbarAreaId: "change-username-tooltip-id",
  notifPopoutId: "INBOX--TOOLTIP"
}

/**
 * Carries out the changes to the links to prevent them opening in new tabs.
 * 
 * For every <a> child of the notification popout node, if that node has a 'target'
 * attribute, remove it. This is somewhat blindly altering links that may at some point turn
 * out to not be notifications, but from my limited testing, every other link in the
 * notif slideout is a React link and not a usual <a>. This is likely a very blanket way
 * of approaching this problem, but it works.
 */
const updateLinks = () => {
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

/**
 * Callback for the {@link MutationObserver} created below.
 * 
 * This function takes a list of mutations applied recursively to a section of the
 * DOM tree. If one of these mutations was the mounting of the notification popout
 * ({@link IDs.notifPopoutId}), then call the {@link updateLinks} function
 */
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

/**
 * Creates a new {@link MutationObserver} instance to listen for change events
 * to {@link IDs.navbarAreaId} and its children
 */
new MutationObserver(callback).observe(document.getElementById(IDs.navbarAreaId), {
  attributes: true, childList: true, subtree: true
});