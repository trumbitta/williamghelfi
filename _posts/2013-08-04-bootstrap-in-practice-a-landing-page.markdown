---
layout: post
title: "Bootstrap in practice: a landing page"
date: 2013-08-04 17:55
comments: false
categories:
- CSS
- Bootstrap
---

## Heads up!
**2013-09-10** &middot; Updated to Bootstrap 3.0.0 stable.

## TL;DR

[Live Demo](/demos/b3-landing-page.html)

## Here we go

Let's see how to build a landing page with Bootstrap from scratch.

The first step is the good ole "Hello, world!" page.

<pre><code class="language-markup">
&lt;!DOCTYPE html>
&lt;html>
&lt;head>
	&lt;title>Bootstrap In Practice - Landing Page Example&lt;/title>
	&lt;meta name="viewport" content="width=device-width, initial-scale=1.0" />
	&lt;!-- Bootstrap -->
	&lt;link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" />
&lt;/head>
&lt;body>
	&lt;h1>Hello, world!&lt;/h1>
&lt;/body>
&lt;/html>
</code></pre>

Not so much to see here: just the basic HTML and the awesome BootstrapCDN.

## Content is king

Or, *Landing Pages 101*.

One good way to catch the attention of somebody passing by your landing page is a direct question, better if about a pain they would certainly be interested in throwing away.

Following, there should be a brief, to-the-point, digression about the same subject closed with a reiteration of the opening question which is also a nice touch.

Now that you have exposed the pain point, introduce your solution to the problem.

A simple form, requesting the minimum possible information about your visitor, with a clear declaration of what you are going to do with their data.

As an example, we are going to just use a fairly famous question, followed by a brief digression on the same subject and a simple form requesting no more than an email address.

<pre><code class="language-markup">
&lt;!DOCTYPE html>
&lt;html>
&lt;head>
	&lt;title>Bootstrap In Practice - Landing Page Example&lt;/title>
	&lt;meta name="viewport" content="width=device-width, initial-scale=1.0" />
	&lt;!-- Bootstrap -->
	&lt;link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" />
&lt;/head>
&lt;body>
	&lt;h1>Have you ever seen the rain?&lt;/h1>

	&lt;p>
		Someone told me long ago there's a calm before the storm. I know, It's been comin for some time.
	&lt;/p>
	&lt;p>
		When it's over, so they say, it'll rain a sunny day. I know, Shinin down like water.
	&lt;/p>

	&lt;p>
		I want to know, have you ever seen the rain?
	&lt;/p>

	&lt;form action="/mailing-list" method="post">
		&lt;p class="input-group">
			&lt;span class="input-group-addon">@&lt;/span>
			&lt;input type="text" class="form-control input-lg" name="email" placeholder="jonsnow@knowsnothi.ng" />
		&lt;/p>
		&lt;p class="help-block">&lt;small>We won't send you spam. Unsubscribe at any time.&lt;/small>&lt;/p>
		&lt;p>
			&lt;button type="submit" class="btn btn-success btn-lg">Keep me posted&lt;/button>
		&lt;/p>
		&lt;/span>
	&lt;/form>

&lt;/body>
&lt;/html>
</code></pre>

<figure class="text-center">
	<img src="/images/posts/2013-08-04-bootstrap-in-practice-a-landing-page/landing-sshot1.png" alt=" " class="img-thumbnail" />
</figure>

Pretty basic, so far.

## Front and center is always a win

Content is king and comes first. It should make sense and be effective even in a barebones page.

But things can and will get better, if you start giving your content breath and prominence: a throne for the king.

<pre><code class="language-markup">
&lt;!DOCTYPE html>
&lt;html>
&lt;head>
	&lt;title>Bootstrap In Practice - Landing Page Example&lt;/title>
	&lt;meta name="viewport" content="width=device-width, initial-scale=1.0" />
	&lt;!-- Bootstrap -->
	&lt;link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" />

	&lt;style>

	body {
		padding-top: 20px;
	}

	.margin-base-vertical {
		margin: 40px 0;
	}

	&lt;/style>

&lt;/head>
&lt;body>

	&lt;div class="container">
		&lt;div class="row">
			&lt;div class="col-md-6 col-md-offset-3">

				&lt;h1 class="margin-base-vertical">Have you ever seen the rain?&lt;/h1>

				&lt;p>
					Someone told me long ago there's a calm before the storm. I know, It's been comin for some time.
				&lt;/p>
				&lt;p>
					When it's over, so they say, it'll rain a sunny day. I know,	Shinin down like water.
				&lt;/p>

				&lt;p>
					I want to know, have you ever seen the rain?
				&lt;/p>

				&lt;form action="/mailing-list" method="post" class="margin-base-vertical">
					&lt;p class="input-group">
						&lt;span class="input-group-addon">@&lt;/span>
						&lt;input type="text" class="form-control input-lg" name="email" placeholder="jonsnow@knowsnothi.ng" />
					&lt;/p>
					&lt;p class="help-block text-center">&lt;small>We won't send you spam. Unsubscribe at any time.&lt;/small>&lt;/p>
					&lt;p class="text-center">
						&lt;button type="submit" class="btn btn-success btn-lg">Keep me posted&lt;/button>
					&lt;/p>
					&lt;/span>
				&lt;/form>

			&lt;/div>
		&lt;/div>
	&lt;/div>

&lt;/body>
&lt;/html>
</code></pre>

<figure class="text-center">
	<img src="/images/posts/2013-08-04-bootstrap-in-practice-a-landing-page/landing-sshot2.png" alt=" " class="img-thumbnail" />
</figure>

A few touches, but a very good effect. We horizontally centered the content with a `.col-md-6 .col-md-offset-3`.  
Then we added a default top padding to the `<body>` and used a custom utility class &mdash; `.margin-base-vertical` &mdash; to adjust the vertical margins of some elements.

## Jewels

You know, since we are going on with this content is king stuff, let's keep it on till the end of the chapter and call it a day.

Jewels are little shiny additions to a king's crown and dress. Just like adding two nice web fonts, and swapping a textual `@` for a crisp `icon-envelope` from FontAwesome.

<pre><code class="language-markup">
&lt;!DOCTYPE html>
&lt;html>
&lt;head>
	&lt;title>Bootstrap In Practice - Landing Page Example&lt;/title>
	&lt;meta name="viewport" content="width=device-width, initial-scale=1.0" />
	&lt;!-- Bootstrap -->
	&lt;link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" />
	&lt;link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet" />

	&lt;link href='http://fonts.googleapis.com/css?family=Abel|Open+Sans:400,600' rel='stylesheet'>

	&lt;style>

		body {
			padding-top: 20px;
			font-size: 16px;
			font-family: "Open Sans",serif;
		}

		h1 {
			font-family: "Abel", Arial, sans-serif;
			font-weight: 400;
			font-size: 40px;
		}

		.margin-base-vertical {
			margin: 40px 0;
		}

	&lt;/style>

&lt;/head>
&lt;body>

	&lt;div class="container">
		&lt;div class="row">
			&lt;div class="col-md-6 col-md-offset-3">

				&lt;h1 class="margin-base-vertical">Have you ever seen the rain?&lt;/h1>

				&lt;p>
					Someone told me long ago there's a calm before the storm. I know, It's been comin for some time.
				&lt;/p>
				&lt;p>
					When it's over, so they say, it'll rain a sunny day. I know, Shinin down like water.
				&lt;/p>

				&lt;p>
					I want to know, have you ever seen the rain?
				&lt;/p>

				&lt;form class="margin-base-vertical">
					&lt;p class="input-group">
						&lt;span class="input-group-addon">&lt;span class="icon-envelope">&lt;/span>&lt;/span>
						&lt;input type="text" class="form-control input-lg" name="email" placeholder="jonsnow@knowsnothi.ng" />
					&lt;/p>
					&lt;p class="help-block text-center">&lt;small>We won't send you spam. Unsubscribe at any time.&lt;/small>&lt;/p>
					&lt;p class="text-center">
						&lt;button type="submit" class="btn btn-success btn-lg">Keep me posted&lt;/button>
					&lt;/p>
					&lt;/span>
				&lt;/form>

			&lt;/div>
		&lt;/div>
	&lt;/div>

&lt;/body>
&lt;/html>
</code></pre>

<figure class="text-center">
	<img src="/images/posts/2013-08-04-bootstrap-in-practice-a-landing-page/landing-sshot3.png" alt=" " class="img-thumbnail" />
</figure>

## Tapestries

Ok, stay with me just another few lines: the metaphorical madness has come to an end.

So we have our king, with his crown and jewels, sitting well centered and with proper amounts of vertical space in his throne room.

And what's a throne room without tapestries! (Wait, wa...)

So let's all thank Chris Coyer &mdash; for the tecnique &mdash; and Flickr user *erwlas* &mdash; for the photo (see the attribution links added at the bottom of the final example code) &mdash; and give this landing page a nice full screen background.

As a last touch, we are making the grid cell containing the content a `.panel` and also overriding its default white background with a slightly transparent one.  
Notice also that in order to let the `html` background be visible through the page, we also need to make sure the `body` has a `background: transparent;`.

<pre><code class="language-markup">
&lt;!DOCTYPE html>
&lt;html>
&lt;head>
	&lt;title>Bootstrap In Practice - Landing Page Example&lt;/title>
	&lt;meta name="viewport" content="width=device-width, initial-scale=1.0" />
	&lt;!-- Bootstrap -->
	&lt;link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet">
	&lt;link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet" />

	&lt;link href="http://fonts.googleapis.com/css?family=Abel|Open+Sans:400,600" rel="stylesheet" />

	&lt;style>

		/* http://css-tricks.com/perfect-full-page-background-image/ */
		html {
			background: url(img/6133364748_89f2365922_o.jpg) no-repeat center center fixed; 
			-webkit-background-size: cover;
			-moz-background-size: cover;
			-o-background-size: cover;
			background-size: cover;
		}

		body {
			padding-top: 20px;
			font-size: 16px;
			font-family: "Open Sans",serif;
			background: transparent;
		}

		h1 {
			font-family: "Abel", Arial, sans-serif;
			font-weight: 400;
			font-size: 40px;
		}

		/* Override B3 .panel adding a subtly transparent background */
		.panel {
			background-color: rgba(255, 255, 255, 0.9);
		}

		.margin-base-vertical {
			margin: 40px 0;
		}

	&lt;/style>

&lt;/head>
&lt;body>

	&lt;div class="container">
		&lt;div class="row">
			&lt;div class="col-md-6 col-md-offset-3 panel panel-default">

				&lt;h1 class="margin-base-vertical">Have you ever seen the rain?&lt;/h1>

				&lt;p>
					Someone told me long ago there's a calm before the storm. I know, It's been comin for some time.
				&lt;/p>
				&lt;p>
					When it's over, so they say, it'll rain a sunny day. I know,	Shinin down like water.
				&lt;/p>

				&lt;p>
					I want to know, have you ever seen the rain?
				&lt;/p>

				&lt;form class="margin-base-vertical">
					&lt;p class="input-group">
						&lt;span class="input-group-addon">&lt;span class="icon-envelope">&lt;/span>&lt;/span>
						&lt;input type="text" class="form-control input-lg" name="email" placeholder="jonsnow@knowsnothi.ng" />
					&lt;/p>
					&lt;p class="help-block text-center">&lt;small>We won't send you spam. Unsubscribe at any time.&lt;/small>&lt;/p>
					&lt;p class="text-center">
						&lt;button type="submit" class="btn btn-success btn-lg">Keep me posted&lt;/button>
					&lt;/p>
					&lt;/span>
				&lt;/form>

				&lt;div class="margin-base-vertical">
					&lt;small class="text-muted">&lt;a href="http://www.flickr.com/photos/erwlas/6133364748/">Background picture by erwlas @flickr&lt;/a>. Used under &lt;a href="http://creativecommons.org/licenses/by/2.0/deed.en">Creative Commons - Attribution&lt;/a>.&lt;/small>
				&lt;/div>

			&lt;/div>&lt;!-- //main content -->
		&lt;/div>&lt;!-- //row -->
	&lt;/div> &lt;!-- //container -->

&lt;/body>
&lt;/html>
</code></pre>

<figure class="text-center">
	<img src="/images/posts/2013-08-04-bootstrap-in-practice-a-landing-page/landing-sshot4.png" alt=" " class="img-thumbnail" />
</figure>

[Live Demo](/demos/b3-landing-page.html)

## And it's done

A good starting point for your landing page, where content is king and has &mdash; pls stahp &mdash;.

*&laquo;rewind&raquo;*

A good starting point for your landing page, where content is easily put front and center thanks to Bootstrap 3 and a few styles get overridden for a greater cause.

<hr />

{% include custom/more-about-bootstrap.html %}
