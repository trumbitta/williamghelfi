---
layout: post
title: "Bootstrap 3: the new grid system, for starters"
date: 2013-06-09 12:04
ckform: true
comments: true
categories:
- CSS
- Bootstrap
---

## Heads up!

**2013-08-20** &middot; Updated to Bootstrap 3.0.0 stable.

**2013-08-15** &middot; Updated to reflect the changes in [Bootstrap 3.0.0-rc.2](http://www.speedawarenessmonth.com/bootstrapcdn-now-serving-bootstrap-rc2/).

**2013-08-12** &middot; It seems that the grid system is now being actively refactored with frequent changes. I'm closely watching the situation evolving, and will update this post when things settle down a bit.

All in all, the core concepts remain the same. So if you don't know how the grid system works, you should read on and then wait for me to update with the latest details and features when the time comes.

## Baby steps

It's super easy to put together a basic page with Bootstrap.  
Just fire up your editor and type in this markup:

<pre><code class="language-markup">&lt;!DOCTYPE html>
&lt;html>
	&lt;head>
		&lt;title>Bootstrap in practice: the grid system&lt;/title>
		&lt;meta name="viewport" content="width=device-width, initial-scale=1.0" />
		&lt;!-- Bootstrap CSS -->
		&lt;link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" />
	&lt;/head>
	&lt;body>
		&lt;h1>Hello, world!&lt;/h1>
	&lt;/body>
&lt;/html>
</code></pre>

This is it. There are just two requirements for a basic Bootstrap page:

1. HTML5: achieved declaring a `<!DOCTYPE html>`
2. Bootstrap CSS

Take a look at the page in a browser, and you'll see a lonely &mdash; but stylish &mdash; `Hello, world!`.

<figure class="text-center">
	<img src="/images/posts/2013-06-09-bootstrap-3-new-grid-system-for-starters/test-1.png" alt="Hello, world!" class="img-thumbnail" />
	<figcaption>
		<p>Hello, world!</p>
	</figcaption>
</figure>

**Heads up!** You'd better serve these pages locally.  
If you have ruby, your best bet is to `gem install serve` and then launch `serve .` from the directory where your HTML file resides.  
Then point your browser to http://localhost:4000/ and you are golden.

If you can't or don't want to serve your pages locally, then please change every protocol relative URL in the sources to its more classic variant, or your browser may not be able to find those resources.

Example: change `//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css` to `http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css`.

## Adding some beef

You are going to see the grid system in action very soon, but first you need to beef up your page with some random content.

I'll take mine from [hipsteripsum.me](http://hipsteripsum.me/), but the classic [www.lipsum.com](http://www.lipsum.com/) or any editor plugin will be fine as well.

<pre><code class="language-markup">&lt;!DOCTYPE html>
&lt;html>
	&lt;head>
		&lt;title>Bootstrap in practice: the grid system&lt;/title>
		&lt;meta name="viewport" content="width=device-width, initial-scale=1.0" />
		&lt;!-- Bootstrap CSS -->
		&lt;link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" />
	&lt;/head>
	&lt;body>
		&lt;h1>Hello, world!&lt;/h1>

		&lt;p>Asymmetrical YOLO banjo lomo fanny pack, shoreditch flexitarian dreamcatcher ethnic kitsch sriracha nisi sustainable swag. Cliche 90's farm-to-table master cleanse Pinterest jean shorts. Cillum raw denim aesthetic sunt.&lt;/p>

		&lt;p>Aliqua photo booth literally veniam minim leggings, est craft beer banjo intelligentsia Truffaut officia. Irony minim 3 wolf moon meggings, viral hella hoodie selvage flexitarian small batch pariatur.&lt;/p>

		&lt;p>Consectetur art party Tonx culpa semiotics. Pinterest assumenda minim organic quis.&lt;/p>

		&lt;p>Wayfarers selvage YOLO, commodo assumenda eu est bespoke mlkshk. Helvetica reprehenderit iPhone, aesthetic 90's literally chambray bicycle rights viral blog voluptate. Occupy bespoke stumptown duis keytar vero.&lt;/p>

	&lt;/body>
&lt;/html>
</code></pre>

## Here comes the grid

Let's start with a very simple layout: two columns, two paragraphs per column.

<pre><code class="language-markup">&lt;!DOCTYPE html>
&lt;html>
	&lt;head>
		&lt;title>Bootstrap in practice: the grid system&lt;/title>
		&lt;meta name="viewport" content="width=device-width, initial-scale=1.0" />
		&lt;!-- Bootstrap CSS -->
		&lt;link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" />

		&lt;!-- To better visualize the columns -->
		&lt;style>
		.row > div {
			background-color: #dedef8;
			box-shadow: inset 1px -1px 1px #444, inset -1px 1px 1px #444;
		}
		&lt;/style>

	&lt;/head>
	&lt;body>
		&lt;div class="container">

			&lt;h1>Hello, world!&lt;/h1>

			&lt;div class="row">

				&lt;div class="col-md-6">
					&lt;p>Asymmetrical YOLO banjo lomo fanny pack, shoreditch flexitarian dreamcatcher ethnic kitsch sriracha nisi sustainable swag. Cliche 90's farm-to-table master cleanse Pinterest jean shorts. Cillum raw denim aesthetic sunt.&lt;/p>

					&lt;p>Aliqua photo booth literally veniam minim leggings, est craft beer banjo intelligentsia Truffaut officia. Irony minim 3 wolf moon meggings, viral hella hoodie selvage flexitarian small batch pariatur.&lt;/p>
				&lt;/div>

				&lt;div class="col-md-6">
					&lt;p>Consectetur art party Tonx culpa semiotics. Pinterest assumenda minim organic quis.&lt;/p>

					&lt;p>Wayfarers selvage YOLO, commodo assumenda eu est bespoke mlkshk. Helvetica reprehenderit iPhone, aesthetic 90's literally chambray bicycle rights viral blog voluptate. Occupy bespoke stumptown duis keytar vero.&lt;/p>
				&lt;/div>

			&lt;/div>

		&lt;/div>
	&lt;/body>
&lt;/html>
</code></pre>

<figure class="text-center">
	<img src="/images/posts/2013-06-09-bootstrap-3-new-grid-system-for-starters/test-2.png" alt="A basic grid" class="img-thumbnail" />
	<figcaption>
		<p>A basic grid</p>
	</figcaption>
</figure>

## The details

First of all, we added a `<div class="container">...</div>` container element to ensure proper centering and maximum width for the layout. That's your playground.

Once you have a container in place, you just have to start thinking in terms of rows `<div class="row">...</div>`, and columns inside the rows `<div class="col-md-6">...</div>`.

Keep in mind that every row in the grid is made up of 12 units, and you can define the desired size of your columns using those units.

In the previous example you had two columns, each being 6 units wide: `col-md-6`.  
As you know, `6 + 6 = 12`, and that's exactly why you had two equally large columns (`col-md-6`) in a row taking the whole width (`12`) of the container element.

Go on, try some more combinations like `<div class="col-md-3">...</div> <div class="col-md-9">...</div>` or `<div class="col-md-7">...</div> <div class="col-md-5">...</div>` and take a look at the results in your browser.  
Experiment a bit. Just keep in mind that the sum must always be 12.

If you're feeling brave you could also have more than two columns in the same row, adjusting the column classes accordingly.  
Hint: `3 + 3 + 1 + 5 = 12`.

As you may have guessed, if you need to add another row below the first one, you can. Add as much rows as you want.

## Nesting

Need to nest a row into another? Bootstrap 3 has you covered.

Let's see this in action by producing a layout having two columns, with the second one being splitted into four boxes over two rows.

<pre><code class="language-markup">&lt;!DOCTYPE html>
&lt;html>
&lt;head>
	&lt;title>Bootstrap in practice: the grid system&lt;/title>
	&lt;meta name="viewport" content="width=device-width, initial-scale=1.0" />
	&lt;!-- Bootstrap CSS -->
	&lt;link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" />

	&lt;!-- To better visualize the columns -->
	&lt;style>
	.row > div {
		background-color: #dedef8;
		box-shadow: inset 1px -1px 1px #444, inset -1px 1px 1px #444;
	}
	&lt;/style>

&lt;/head>
&lt;body>
	&lt;div class="container">

		&lt;h1>Hello, world!&lt;/h1>

		&lt;div class="row">

			&lt;div class="col-md-3">
				&lt;p>Asymmetrical YOLO banjo lomo fanny pack, shoreditch flexitarian dreamcatcher ethnic kitsch sriracha nisi sustainable swag. Cliche 90's farm-to-table master cleanse Pinterest jean shorts. Cillum raw denim aesthetic sunt.&lt;/p>
			&lt;/div>

			&lt;div class="col-md-9">

				&lt;div class="row">
					&lt;div class="col-md-6">
						&lt;p>Consectetur art party Tonx culpa semiotics. Pinterest assumenda minim organic quis.&lt;/p>
					&lt;/div>
					&lt;div class="col-md-6">
						&lt;p>Consectetur art party Tonx culpa semiotics. Pinterest assumenda minim organic quis.&lt;/p>
					&lt;/div>
				&lt;/div>

				&lt;div class="row">
					&lt;div class="col-md-6">
						&lt;p>Wayfarers selvage YOLO, commodo assumenda eu est bespoke mlkshk. Helvetica reprehenderit iPhone, aesthetic 90's literally chambray bicycle rights viral blog voluptate. Occupy bespoke stumptown duis keytar vero.&lt;/p>
					&lt;/div>
					&lt;div class="col-md-6">
						&lt;p>Wayfarers selvage YOLO, commodo assumenda eu est bespoke mlkshk. Helvetica reprehenderit iPhone, aesthetic 90's literally chambray bicycle rights viral blog voluptate. Occupy bespoke stumptown duis keytar vero.&lt;/p>
					&lt;/div>
				&lt;/div>

			&lt;/div>

		&lt;/div>

	&lt;/div>
&lt;/body>
&lt;/html>
</code></pre>

<figure class="text-center">
	<img src="/images/posts/2013-06-09-bootstrap-3-new-grid-system-for-starters/test-3.png" alt="Nested grids galore!" class="img-thumbnail" />
	<figcaption>
		<p>Nested grids galore!</p>
	</figcaption>
</figure>

## Offsetting

You can also move columns to the right using `.col-md-offset-N` where `N`, ranging from `1` to `11`, is the number of units you want the column to be moved.

Offsetting comes in handy when you need to center an element.

Say you have a `<div class="col-md-6">...</div>`.  
Centering it, is as easy as adding `.col-md-offset-3`:

<pre><code class="language-markup">&lt;!DOCTYPE html>
&lt;html>
	&lt;head>
		&lt;title>Bootstrap in practice: the grid system&lt;/title>
		&lt;meta name="viewport" content="width=device-width, initial-scale=1.0" />
		&lt;!-- Bootstrap CSS -->
		&lt;link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" />

		&lt;!-- To better visualize the columns -->
		&lt;style>
		.row > div {
			background-color: #dedef8;
			box-shadow: inset 1px -1px 1px #444, inset -1px 1px 1px #444;
		}
		&lt;/style>

	&lt;/head>
	&lt;body>
	&lt;div class="container">

		&lt;h1>Hello, world!&lt;/h1>

		&lt;div class="row">
			&lt;div class="col-md-6 col-md-offset-3">
				&lt;strong>Hey oh! See how I'm centered!&lt;/strong>
			&lt;/div>
		&lt;/div>
	&lt;/div>
	&lt;/body>
&lt;/html>
</code></pre>

<figure class="text-center">
	<img src="/images/posts/2013-06-09-bootstrap-3-new-grid-system-for-starters/test-4.png" alt=" " class="img-thumbnail" />
	<figcaption>
		<p>Centering columns with clever use of offsets</p>
	</figcaption>
</figure>

That's because you have a total width of `12` units, and a `6` units wide element you want to center. Thus, you split the remaining `6` units in two, and here's your offset for centering the element. `3 + 6 + 3 = 12`.

## Ordering

Another nice feature of the grid system is that you can easily write the columns in an order, and show them in another one.

So if you have a two-columns layout with the left column being the narrowest and acting as a sidebar:

<pre><code class="language-markup">&lt;div class="row">
	&lt;div class="col-md-4">...&lt;/div>
	&lt;div class="col-md-8">...&lt;/div>
&lt;/div>
</code></pre>

You can swap the order of the columns using `.col-md-push-N` and `.col-md-pull-N`.  
Once again, `N` is a number from `1` to `11`:

<pre><code class="language-markup">&lt;!DOCTYPE html>
&lt;html>
	&lt;head>
		&lt;title>Bootstrap in practice: the grid system&lt;/title>
		&lt;meta name="viewport" content="width=device-width, initial-scale=1.0" />
		&lt;!-- Bootstrap CSS -->
		&lt;link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" />

		&lt;!-- To better visualize the columns -->
		&lt;style>
		.row > div {
			background-color: #dedef8;
			box-shadow: inset 1px -1px 1px #444, inset -1px 1px 1px #444;
		}
		&lt;/style>

	&lt;/head>
	&lt;body>
	&lt;div class="container">

		&lt;h1>Hello, world!&lt;/h1>

		&lt;div class="row">
			&lt;div class="col-md-4 col-md-push-8">I was left&lt;/div>
			&lt;div class="col-md-8 col-md-pull-4">I was right&lt;/div>
		&lt;/div>
	&lt;/div>
	&lt;/body>
&lt;/html>
</code></pre>

<figure class="text-center">
	<img src="/images/posts/2013-06-09-bootstrap-3-new-grid-system-for-starters/test-5.png" alt=" " class="img-thumbnail" />
	<figcaption>
		<p>And your sidebar is now to the right</p>
	</figcaption>
</figure>

<hr />

## Enjoyed the reading?

Would like to know more about Bootstrap 3?

{% include custom/ckform-course.html %}