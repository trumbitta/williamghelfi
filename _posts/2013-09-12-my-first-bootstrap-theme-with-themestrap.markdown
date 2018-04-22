---
layout: post
title: "My first Bootstrap theme With Themestrap"
date: 2013-09-12 14:00
comments: false
categories:
- Bootstrap
- Customization
---

## Heads up!

I originally wrote this article as a lesson for my 30-day free course about Bootstrap 3 tips. That's why the closing "Goodbye" paragraph may sound odd to you.  
More info, and the chance to subscribe to the free course in 8 lessons spanning 30 days, at the bottom of the article.

## Themestrap vs Bootswatch

I like [Bootswatch](http://bootswatch.com/).
Thomas Park was the first at trying to define and streamline a suitable approach to theming for Bootstrap.

Bootswatch is still kicking, and rocking while at it.

But I like [Themestrap more](http://code.divshot.com/themestrap/). I only recently looked at it, because when it came out it seemed to me just another Bootswatch.

Turns out I find Themestrap easier to use for building Bootstrap themes. But don't take my word for it, let's instead build a theme with Themestrap right here, right now.

## Prerequisites

* [node.js](http://nodejs.org/)
* npm (which comes with node since v0.6.3)
* [git](http://git-scm.com/) (prerequisite for bower)
* bower:
  npm install -g bower
* grunt-cli
  npm install -g grunt-cli
* a very light understanding of [LESS](http://lesscss.org/)

## Kickoff: creating and naming our theme

I'm going to take inspiration from a classic Bootstwatch v2 theme, [Superhero](http://bootswatch.com/2/superhero/), and name my theme Supervillain instead :p

You can choose any name for your theme. Just try to be creative, it's fun!

Let's clone a copy of Themestrap as the README tells us to do:

    $ git clone https://github.com/divshot/themestrap.git bootstrap-theme-supervillain

We then have to edit bower.json to adjust some properties:

    {
      "name": "bootstrap-theme-supervillain",
      "version": "0.0.1",
      "private": true,
      "author": "William Ghelfi",
      "main": "dist/css/bootstrap.css",
      "themestrap": {
        "name": "Supervillain",
        "repo": "https://github.com/trumbitta/bootstrap-theme-supervillain"
      },
    // omitting the rest of the file for this snippet...
    }

The most important are `name` and `author`, while `themestrap/name` and `themestrap/repo` are only useful if you are going to publish your theme on GitHub and sharing it with bower (more in this later).

All set! Time to start it up.

First time only:

    npm install && bower install

Then a first all-around build:

    grunt

Followed by:

    grunt serve

And we are ready to go with countless cycles of editing and live previewing our work.  
Point your browser to `http://localhost:8000`.

## What to edit

The are two main files to take care of. They are both in the less directory.

1.  `variables.less`  
    where the most part of our work will be
2.  `theme.less`  
    for additional, advanced, customizations

The page we see at `localhost:8000` is built from `pages/index.html`. It includes information `from bower.json` and the whole `README.md`, which you may want to properly edit if you are going to make your theme public.

The starting page also links to another page: "Kitchen Sink".  
Follow now the link to the Kitchen Sink.  
That's our sandbox and playground, and its source is `pages/examples/kitchen-sink.html` but we don't usually need to edit it.

## How to edit

Ok, time for the fun to begin!

Open `variables.less`, you'll see 600+ rows of - well - variables. But fret not, my dear, because we can focus on the first 56 rows and still bring home some nice results.

Let's fiddle with the `@brand-` group of variables, starting from line 21.  
Those variables are the ones piloting the most part of the overall color scheme.

Change the values to some odd, flashy colors (what? Hey! I **only** use odd flashy colors when I'm debugging or exploring something new!) and hit refresh in your browser to start getting to know what's going on and what you can expect of your endeavours.

The group before this one, the `@gray-` group, is for the various grays in Bootstrap's default theme. You can leave it alone, or tweak some of the grays to better match your other colors, maybe.

Other colors are scattered all over the `variables.less` file but it should not be difficult for you to experiment and edit them as needed (or just leaving them alone).

Finally, there's another important group of variables starting at line 362: the "Form states and alerts" group.  
These variables control the colors of alerts and other stateful components like form validation and more.

You can - wait for it - play with them as well.

Another nice touch is to add some webfonts. Head to [Google Web Fonts](http://www.google.com/fonts) and choose two nice fonts.

Import them inside `theme.less`:

    @import "bootstrap.less";

    // Add CSS Customizations to your theme here.

    @import url(http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,700|Yanone+Kaffeesatz:400,700);

Then edit accordingly the `@font-family-` variables starting at line 42 of `variables.less`.

## Using your theme

This is the easiest part: just take `dist/css/bootstrap.css` or `dist/css/bootstrap.min.css` and link them in your HTML just after the original Boostrap css file.

You could remove the original file and replace it with yours, but unless the speed gain is important to you I'd keep also the original file just in case.

## Sharing your theme

The process of sharing your theme is well explained in the `README.md` file.  
Just make sure to edit the `README.md` itself before registering your theme as a bower package, filling it only with useful information about the theme.

For a brief but clear example, take a look at the contents of [Cirrus Theme's `README.md`](https://github.com/divshot/bootstrap-theme-cirrus/blob/master/README.md):

    # Cirrus Theme for Bootstrap 3

    Cirrus is a light, modern theme for Bootstrap 3 built on the [Themestrap](https://github.com/divshot/themestrap)
    foundation. You can install it like so:

        bower install bootstrap-theme-cirrus

    You can [see the GitHub pages](http://code.divshot.com/bootstrap-theme-cirrus/) for a live demo of how it looks and further instruction. Enjoy!

    ## Copyright and license

    Copyright 2013 Divshot, Inc. under [the Apache 2.0 license](LICENSE).

## Goodbye

So, welcome to the world of Bootstrap themes!  
From now on, it's just a matter of good choices and design.

My own theme is at [http://trumbitta.github.io/bootstrap-theme-supervillain/](http://trumbitta.github.io/bootstrap-theme-supervillain/).  
It's still a work in progress, but I like it so far.

P.S.: As you may know, I wrote a book about Bootstrap 3 to help newcomers and starters in getting productive as fast as they can without losing time going deep or getting stuck in the official docs.  
[I think it's worth checking it out](https://www.williamghelfi.com/bootstrap-in-practice).

<hr />

{% include custom/more-about-bootstrap.html %}
