---
layout: post
title: How I tamed Unity on Ubuntu 13.04
date: 2013-04-30 12:00
categories: 
- Linux
- Ubuntu
- Tips
---

I like Unity.  
I mean, I like the new menu system and window manager. And. It. Stops. Right. There.

So here's how I managed to retain some mental sanity and reach a good balance between my needs as a human being with a computer and the crazy interface designers working hard at Ubuntu to make us all go bonkers.

## My desktop

Keep on reading for how to obtain it.

<figure class="text-center">
	<img src="/images/unity-tamed.png" alt=" " class="img-thumbnail" />
	<figcaption>
		<p>My Ubuntu 13.04 desktop. Now with less Unity</p>
	</figcaption>
</figure>

## Phase 1 - Unity Launcher GTFO

1. `sudo apt-get install unity-tweak-tool`
2. Open `Unity Tweak Tool` and use it to:
  * Shrink the Launcher width
  * Make it automatically hide till summoned (*lol, seriously, dude. You're not going to be summoned **EVER AGAIN**.*)

## Phase 2 - Unity Dash sucks, Gnome Do rocks

1. `sudo apt-get install gnome-do`
2. `ALT + F2` → `gnome-do`
3. Edit the preferences and give it a new shortcut like `<Super>space`

## Phase 3 - Unity Launcher, I told you to GTFO

1. `sudo apt-get install compizconfig-settings-manager`
2. `ALT + F2` → `ccsm`
3. `Filter` → `Unity` → choose `Ubuntu Unity Plugin`
4. Go to the `Launcher` panel → `Key to show the Dash, Launcher, and Help Overlay` → `<Control><Super>`

So it is `<Super>space` to summon the crazy powerful **gnome-do** and `<Control><Super>` to summon **Dash the sucker**.

## Phase 4 - I am a human being. I need a taskbar and panel.

1. `sudo apt-get install tint2`
2. `<Super>space` → `tint2`
    * Optionally [change the default appearance](https://code.google.com/p/tint2/wiki/Configure)
3. Beer

I used to be very happy with **Docky**, but with Ubuntu 13.04 it was super crashy. On the other hand, **Cairo Dock** was just too much for me.  
All in all, **tint2** was the perfect fit.  
Kudos to [Andrea Dessì @NKjoep](https://twitter.com/NKjoep) for pointing it to me!

## Bonus - My tint2rc
To make **tint2** feel a bit more **Docky** and a bit less *taskbar* (as you can see in the screenshot at the beginning of the post).

{% gist 5488963 %}

---

Discuss on [Hacker News](https://news.ycombinator.com/item?id=5632286)

If you have any questions, follow and ping me on Twitter - I'm
[@trumbitta][twitter].

[twitter]: https://twitter.com/trumbitta
