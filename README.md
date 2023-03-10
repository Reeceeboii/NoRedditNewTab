<div align="center">
  <a href="https://addons.mozilla.org/en-GB/firefox/addon/noredditnewtab/" target="_blank" rel="rel=noopener noreferrer">
    <img src="./resources/NRNT Logo fullsize.png" width="250px"/>
  </a>
</div>

<div align="center">
<h1>NoRedditNewTab (NRNT) - prevent Reddit from opening notifications in new tabs</h1>
</div>

Reddit has a really annoying behaviour on its web client that forces notifications to open in a new tab when they are clicked. There is absolutely no reason why this should be the case, but it has been for a while.

This tiny browser extension simply listens for the notification popout to be mounted to the DOM and then strips out the `target` attribute from its child `<a>`'s that cause this behaviour.

## Install from addons.mozilla.org
<a href="https://addons.mozilla.org/en-GB/firefox/addon/noredditnewtab/" target="_blank" rel="rel=noopener noreferrer">
  <img src="./resources/readme_images/get_addon.png" width="150px"/>
</a>

### Sideload:
1. Download the latest [release](https://addons.mozilla.org/firefox/downloads/file/4076056/noredditnewtab-1.0.xpi) from addons.mozilla.org (`noredditnewtab-1.0.xpi`).
    
    1. Depending on your setup, this may directly trigger Firefox to offer the install. 
2. Press `Ctrl + Shift + A` to open the themes and extensions menu.
3. To the right of 'Manage Your Extensions', press the cog icon, and select `Install Add-on From File...`
4. Select the `.xpi` downloaded in the first step.

## A note

While this has been published to [addons.mozilla.org](addons.mozilla.org), it has mostly been put there for my sanity; so that I don't need to sideload it. It is not likely to function into the long term and I will not be around 24/7 to fix it if it breaks (and it **WILL** break if and when Reddit change the layout/IDs of the notifications section of their web client.)

I have not published to the Chrome store, as I personally do not use Chrome ([and neither should you](https://www.browserlondon.com/blog/2019/02/11/chromium-eroding-open-web/))!
