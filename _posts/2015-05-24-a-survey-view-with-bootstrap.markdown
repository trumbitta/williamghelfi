---
layout: post
title: "A survey view with Bootstrap"
date: 2015-05-24 15:38
comments: true
categories:
- bootstrap
- pills
- css
---

A survey view using progress bars, to be precise. In 4 simple steps.

## Prerequisites

* [node.js](http://nodejs.org/)
* npm (which comes with node since v0.6.3)
* [git](http://git-scm.com/) (prerequisite for bower)
* bower: `npm install -g bower` (you may need to use `sudo`)

We are not going to use *grunt*: a simple static server will suffice.  
I like `serve` (see the [free chapter from my ebook about Bootstrap for newcomers](http://www.williamghelfi.com/bootstrap-in-practice)), but [`superstatic`](https://www.npmjs.com/package/superstatic) by [Divshot](http://www.divshot.com) is a great and more powerful alternative.

## What are we going to build

We are going to build a simple survey-like view for a *dueling* web application, where people can vote for one of the contenders and leave a comment with their vote.

The view will not be complete (no actual comment form, and so on...), but it will do the job it was designed for:

* Showing how to use and customize progress bars in an unorthodox way
* Showing the [Themestrap theme I built](http://www.williamghelfi.com/blog/2013/09/12/my-first-bootstrap-theme-with-themestrap/) in action :p
* Showing how to improve some details of a ready-made theme

## Step 1 of 4: all the content in place

Here it goes the basic structure of our view:

* Some nice icons
* A yellow (just like a lightbulb) bar for Mr. Edison
* A blue ( blue is the color of electricity) bar for Mr. Tesla
* Voting buttons
* The list of recent comments

And a bunch of minor details.

The code:

<pre class="margin-medium-bottom"><code class="language-markup">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="utf-8" /&gt;
  &lt;title&gt;The Duel - Edison vs Tesla&lt;/title&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
  &lt;!-- Le styles --&gt;
  &lt;link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.no-icons.min.css" rel="stylesheet"&gt;
  &lt;link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.min.css" rel="stylesheet"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div class="container"&gt;
    &lt;div class="row"&gt;
      &lt;header class="text-center col-md-12"&gt;
        &lt;h1 class="text-left"&gt;&lt;small&gt;THE &lt;span class="icon-exchange"&gt;&lt;/span&gt; DUEL&lt;/small&gt;&lt;/h1&gt;
        &lt;h2 class="h1"&gt;Thomas Alva Edison &lt;span class="icon icon-lightbulb"&gt;&lt;/span&gt; &lt;span class="text-muted"&gt;&amp;middot;&lt;/span&gt; &lt;span class="icon-bolt"&gt;&lt;/span&gt; Nikola Tesla&lt;/h2&gt;
      &lt;/header&gt;
    &lt;/div&gt;
    &lt;div role="main" class="row"&gt;
      &lt;div class="col-md-1"&gt;
        &lt;a href="/voteA" class="btn btn-primary btn-block"&gt;+1 &lt;span class="icon icon-lightbulb"&gt;&lt;/span&gt;&lt;/a&gt;
      &lt;/div&gt;
      &lt;div class="col-md-10"&gt;
        &lt;div class="progress"&gt;
          &lt;div class="progress-bar progress-bar-warning" style="width: 40%;"&gt;Edison 40%&lt;/div&gt;
          &lt;div class="progress-bar progress-bar-info" style="width: 60%;"&gt;60% Tesla&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="col-md-1"&gt;
        &lt;a href="/voteB" class="btn btn-primary btn-block"&gt;&lt;span class="icon icon-bolt"&gt;&lt;/span&gt; +1&lt;/a&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="row"&gt;
      &lt;div class="col-md-12"&gt;
        &lt;div class="panel panel-default"&gt;
          &lt;p class="panel-heading text-center"&gt;
            &lt;small&gt;
              Total: &lt;strong&gt;Edison&lt;/strong&gt; 197 &ndash; 221 &lt;strong&gt;Tesla&lt;/strong&gt;
            &lt;/small&gt;
          &lt;/p&gt;
          &lt;div class="panel-body"&gt;
            &lt;ul class="list-unstyled"&gt;
              &lt;li&gt;
                &lt;p&gt;
                  &lt;span class="label label-default col-sm-1"&gt;Nick&lt;/span&gt;&amp;nbsp;
                  &lt;em&gt;I know for sure Mr. Tesla should win this duel.&lt;/em&gt; &amp;middot; +1 Tesla
                &lt;/p&gt;
              &lt;/li&gt;
              &lt;li&gt;
                &lt;p&gt;
                  &lt;span class="label label-default col-sm-1"&gt;T.J.&lt;/span&gt;&amp;nbsp;
                  &lt;em&gt;Dad says Mr. Edison is the smartest guy in town.&lt;/em&gt; &amp;middot; +1 Edison
                &lt;/p&gt;
              &lt;/li&gt;
              &lt;li&gt;
                &lt;p&gt;
                  &lt;span class="label label-default col-sm-1"&gt;John&lt;/span&gt;&amp;nbsp;
                  &lt;em&gt;The boss... Uhm... a friend of mine asked me to come and vote for Mr. E&lt;/em&gt; &amp;middot; +1 Edison
                &lt;/p&gt;
              &lt;/li&gt;
              &lt;li&gt;
                &lt;p&gt;
                  &lt;span class="label label-default col-sm-1"&gt;Elon&lt;/span&gt;&amp;nbsp;
                  &lt;em&gt;I like Tesla, good name.&lt;/em&gt; &amp;middot; +1 Tesla
                &lt;/p&gt;
              &lt;/li&gt;
              &lt;li&gt;
                &lt;p&gt;
                  &lt;span class="label label-default col-sm-1"&gt;Pidgeon&lt;/span&gt;&amp;nbsp;
                  &lt;em&gt;&lt;3 &lt;3 &lt;3&lt;/em&gt; &amp;middot; +1 Tesla
                &lt;/p&gt;
              &lt;/li&gt;
            &lt;/ul&gt;
          &lt;/div&gt;
          &lt;div class="panel-footer"&gt;
            &lt;p&gt;&lt;a href="/more"&gt;More &lt;span class="icon icon-ellipsis-horizontal"&gt;&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="row"&gt;
      &lt;footer class="col-md-12"&gt;
        &lt;ul class="pager"&gt;
          &lt;li class="previous"&gt;
            &lt;a href="/results"&gt;JSON&lt;/a&gt;
          &lt;/li&gt;
          &lt;li class="next"&gt;
            &lt;a href="/disclaimer.html"&gt;About&lt;/a&gt;
          &lt;/li&gt;
        &lt;/ul&gt;
        &lt;p class="clearfix text-center"&gt;
          &lt;small&gt;&copy; &lt;a href="#"&gt;ACME, inc&lt;/a&gt; 2013&lt;/small&gt;
        &lt;/p&gt;
      &lt;/footer&gt;
    &lt;/div&gt;
  &lt;/div&gt; &lt;!-- /container --&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>

And it should be like this:

<figure class="text-center">
    <img src="/images/posts/2015-05-24-a-survey-view-with-bootstrap/05_step1.png" alt="Step 1: just the content and basic Bootstrap" class="img-thumbnail" />
</figure>

Hey, not bad at all! **Ok, my job here is done, goodbye...** Wait! There's more :)

## Step 2 of 4: apply the theme

First of all, install `bootstrap-theme-supervillain` with bower:

<pre class="margin-medium-bottom"><code class="language-markup">bower install bootstrap-theme-supervillain
</code></pre>

Then, add the theme into the head section of the page, just after the original Bootstrap CSS:

<pre class="margin-medium-bottom"><code class="language-markup">&lt;!-- Le styles --&gt;
  &lt;link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.no-icons.min.css" rel="stylesheet"&gt;
  &lt;link href="/bower_components/bootstrap-theme-supervillain/dist/css/bootstrap.min.css" rel="stylesheet"&gt;
  &lt;link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.min.css" rel="stylesheet"&gt;
&lt;/head&gt;
</code></pre>

Resulting in this pretty page:

<figure class="text-center">
    <img src="/images/posts/2015-05-24-a-survey-view-with-bootstrap/05_step2.png" alt="Step 2: applying bootstrap-theme-supervillain" class="img-thumbnail" />
</figure>

Ok. But we can – and will – do better!

## Step 3 of 4: customize

Adding some custom classes and an id, we will obtain this improved page with gorgeous big progress bars featuring the two gentlemen facing off:

<figure class="text-center">
    <img src="/images/posts/2015-05-24-a-survey-view-with-bootstrap/05_step3.png" alt="Step 3: simple customization" class="img-thumbnail" />
</figure>

Here's the code, the images must be `100x100`:

<pre class="margin-medium-bottom"><code class="language-markup">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="utf-8" /&gt;
  &lt;title&gt;The Duel - Edison vs Tesla&lt;/title&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
  &lt;!-- Le styles --&gt;
  &lt;link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.no-icons.min.css" rel="stylesheet"&gt;
  &lt;link href="/bower_components/bootstrap-theme-supervillain/dist/css/bootstrap.min.css" rel="stylesheet"&gt;
  &lt;link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.min.css" rel="stylesheet"&gt;
  &lt;style&gt;
  #survey .progress {
    height: 110px;
    line-height: 110px;
  }
  #survey .progress img {
    margin-top: -5px;
  }
  #survey .progress .progress-bar {
    font-size: 20px;
    font-family: "Yanone Kaffeesatz", Georgia, serif;
    line-height: inherit;
  }
  #survey .progress .progress-bar.text-left {
    text-align: left;
    padding-left: 10px;
  }
  #survey .progress .progress-bar.text-right {
    text-align: right;
    padding-right: 10px;
  }
  #survey .vote {
    font-family: "Yanone Kaffeesatz", Georgia, serif;
    line-height: 70px;
    margin-top: 29px; /* (( 110[height .progress] - 92[height .btn-lg .vote] ) / 2 ) + 20px margin-top .progress */
  }
  .margin-medium-vertical {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .margin-medium-bottom {
    margin-bottom: 20px;
  }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div class="container"&gt;
    &lt;div class="row"&gt;
      &lt;header class="text-center col-md-12"&gt;
        &lt;h1 class="text-left"&gt;&lt;small&gt;THE &lt;span class="icon-exchange"&gt;&lt;/span&gt; DUEL&lt;/small&gt;&lt;/h1&gt;
        &lt;h2 class="h1"&gt;Thomas Alva Edison &lt;span class="icon icon-lightbulb"&gt;&lt;/span&gt; &lt;span class="text-muted"&gt;&amp;middot;&lt;/span&gt; &lt;span class="icon-bolt"&gt;&lt;/span&gt; Nikola Tesla&lt;/h2&gt;
      &lt;/header&gt;
    &lt;/div&gt;
    &lt;div role="main" class="row margin-medium-bottom" id="survey"&gt;
      &lt;div class="col-md-1"&gt;
        &lt;a href="/voteA" class="btn btn-primary btn-lg btn-block vote"&gt;+1 &lt;span class="icon icon-lightbulb"&gt;&lt;/span&gt;&lt;/a&gt;
      &lt;/div&gt;
      &lt;div class="col-md-10"&gt;
        &lt;div class="progress margin-medium-vertical"&gt;
          &lt;div class="progress-bar progress-bar-warning text-right" style="width: 40%;"&gt;
            &lt;span class="progress-bar-candidate"&gt;Edison 40%&lt;/span&gt;
            &lt;img src="edison.png" /&gt;
          &lt;/div&gt;
          &lt;div class="progress-bar progress-bar-info text-left" style="width: 60%;"&gt;
            &lt;img src="tesla.png" /&gt;
            &lt;span class="progress-bar-candidate"&gt;60% Tesla&lt;/span&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="col-md-1"&gt;
        &lt;a href="/voteB" class="btn btn-primary btn-lg btn-block vote"&gt;&lt;span class="icon icon-bolt"&gt;&lt;/span&gt; +1&lt;/a&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="row margin-medium-vertical"&gt;
      &lt;div class="col-md-12"&gt;
        &lt;div class="panel panel-default"&gt;
          &lt;p class="panel-heading text-center"&gt;
            &lt;small&gt;
              Total: &lt;strong&gt;Edison&lt;/strong&gt; 197 &ndash; 221 &lt;strong&gt;Tesla&lt;/strong&gt;
            &lt;/small&gt;
          &lt;/p&gt;
          &lt;div class="panel-body"&gt;
            &lt;ul class="list-unstyled"&gt;
              &lt;li&gt;
                &lt;p&gt;
                  &lt;span class="label label-default col-sm-1"&gt;Nick&lt;/span&gt;&amp;nbsp;
                  &lt;em&gt;I know for sure Mr. Tesla should win this duel.&lt;/em&gt; &amp;middot; +1 Tesla
                &lt;/p&gt;
              &lt;/li&gt;
              &lt;li&gt;
                &lt;p&gt;
                  &lt;span class="label label-default col-sm-1"&gt;T.J.&lt;/span&gt;&amp;nbsp;
                  &lt;em&gt;Dad says Mr. Edison is the smartest guy in town.&lt;/em&gt; &amp;middot; +1 Edison
                &lt;/p&gt;
              &lt;/li&gt;
              &lt;li&gt;
                &lt;p&gt;
                  &lt;span class="label label-default col-sm-1"&gt;John&lt;/span&gt;&amp;nbsp;
                  &lt;em&gt;The boss... Uhm... a friend of mine asked me to come and vote for Mr. E&lt;/em&gt; &amp;middot; +1 Edison
                &lt;/p&gt;
              &lt;/li&gt;
              &lt;li&gt;
                &lt;p&gt;
                  &lt;span class="label label-default col-sm-1"&gt;Elon&lt;/span&gt;&amp;nbsp;
                  &lt;em&gt;I like Tesla, good name.&lt;/em&gt; &amp;middot; +1 Tesla
                &lt;/p&gt;
              &lt;/li&gt;
              &lt;li&gt;
                &lt;p&gt;
                  &lt;span class="label label-default col-sm-1"&gt;Pidgeon&lt;/span&gt;&amp;nbsp;
                  &lt;em&gt;&lt;3 &lt;3 &lt;3&lt;/em&gt; &amp;middot; +1 Tesla
                &lt;/p&gt;
              &lt;/li&gt;
            &lt;/ul&gt;
          &lt;/div&gt;
          &lt;div class="panel-footer"&gt;
            &lt;p&gt;&lt;a href="/more"&gt;More &lt;span class="icon icon-ellipsis-horizontal"&gt;&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="row"&gt;
      &lt;footer class="col-md-12"&gt;
        &lt;ul class="pager"&gt;
          &lt;li class="previous"&gt;
            &lt;a href="/results"&gt;JSON&lt;/a&gt;
          &lt;/li&gt;
          &lt;li class="next"&gt;
            &lt;a href="/disclaimer.html"&gt;About&lt;/a&gt;
          &lt;/li&gt;
        &lt;/ul&gt;
        &lt;p class="clearfix text-center"&gt;
          &lt;small&gt;&copy; &lt;a href="#"&gt;ACME, inc&lt;/a&gt; 2013&lt;/small&gt;
        &lt;/p&gt;
      &lt;/footer&gt;
    &lt;/div&gt;
  &lt;/div&gt; &lt;!-- /container --&gt;
&lt;!--
  Tesla:  http://en.wikipedia.org/wiki/File:Tesla_circa_1890.jpeg
  Edison: http://en.wikipedia.org/wiki/File:Thomas_Edison2.jpg
--&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>

## Step 4 of 4: embellish

Just a bit more styling to the voting buttons and progress bars, borrowing 4 classes from `bower_components/bootstrap/dist/css/bootstrap-theme.css` and properly adapting the colors to match **Supervillain**:

<pre class="margin-medium-bottom"><code class="language-markup">&lt;style&gt;
...
  .btn-primary {
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
  }
  .progress-bar {
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.2);
  }
  .progress-bar-info {
    background-image: -webkit-gradient(linear, left 0%, left 100%, from(#5bc0de), to(#31b0d5));
    background-image: -webkit-linear-gradient(top, #5bc0de, 0%, #31b0d5, 100%);
    background-image: -moz-linear-gradient(top, #5bc0de 0%, #31b0d5 100%);
    background-image: linear-gradient(to bottom, #5bc0de 0%, #31b0d5 100%);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=&#39;#ff5bc0de&#39;, endColorstr=&#39;#ff31b0d5&#39;, GradientType=0);
  }
  .progress-bar-warning {
    background-image: -webkit-gradient(linear, left 0%, left 100%, from(#ffeb54), to(#e6c92e));
    background-image: -webkit-linear-gradient(top, #ffeb54, 0%, #e6c92e, 100%);
    background-image: -moz-linear-gradient(top, #ffeb54 0%, #e6c92e 100%);
    background-image: linear-gradient(to bottom, #ffeb54 0%, #e6c92e 100%);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=&#39;#ffffeb54&#39;, endColorstr=&#39;#ffe6c92e&#39;, GradientType=0);
  }
  &lt;/style&gt;
&lt;/head&gt;
</code></pre>

And it's done! No, really: done as in done!

<figure class="text-center">
    <img src="/images/posts/2015-05-24-a-survey-view-with-bootstrap/05_step4.png" alt="Step 4: finishing touches" class="img-thumbnail" />
</figure>

**Bonus:** of course it's responsive, and in its smaller form it only shows the picture of the current winner ;-)

<figure class="text-center">
    <img src="/images/posts/2015-05-24-a-survey-view-with-bootstrap/responsive.png" alt="The survey view is also responsive" class="img-thumbnail" />
</figure>

## Closing thoughts

[Once again we used a Bootstrap component](http://www.williamghelfi.com/categories/bootstrap/) in a way that was not explicitly showcased in the official docs.  
This time we also applied a ready-made theme and we built our customizations upon it, until we obtained a good-enough finished page.

This is an example of what Mark and Jacob mean for "intended use of Bootstrap".  
And this is what you should always try to do when using it.

Also, this is what you'll want to do after reading an upcoming blog post, where I'll be introducing [WrapBootstrap](https://wrapbootstrap.com/) both as a resource and as a way to profit.

<hr />

{% include custom/more-about-bootstrap.html %}

