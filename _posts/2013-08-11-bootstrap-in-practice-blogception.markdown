---
layout: post
title: "Bootstrap in practice: Blogception"
date: 2013-08-11 21:13
ckform: true
comments: true
categories:
- CSS
- Bootstrap
---

> Sorry [Plauto](http://lmgtfy.com/?q=plautus+metatheatre): *metablog* just wasn't cool enough.
> <small>William Ghelfi in <cite title="This very blog post">This very blog post.</cite></small>

## I have a plan

Hello! Since I was going to redesign my blog using Bootstrap 3, I thought it would be fun to document my step-by-step progress in a blog post. Or, in other words:

<figure class="text-center">
<img src="/images/posts/2013-08-11-bootstrap-in-practice-blogception/yo-dawg-i-heard-you-like-blogs.jpg" class="img-thumbnail" />
</figure>

So this is the plan, and this also why for some time you should expect discrepancies between blog posts' look & feel and the overall design of the website. as I rewrite the various layouts and includes in Octopress.

## A beginning

Anyway. Here we have the minimum core of a proper blog post, and we also started to set it up with Bootstrap 3:

<pre><code class="language-markup">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Bootstrap In Practice - Blog example&lt;/title&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
&lt;!-- Bootstrap --&gt;
&lt;link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0-rc1/css/bootstrap.min.css" rel="stylesheet" /&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;div class="container"&gt;
	&lt;div class="row"&gt;
		&lt;article class="col-12 col-lg-10 col-offset-1"&gt;

			&lt;header&gt;
				&lt;h1&gt;Blogception&lt;/h1&gt;
				&lt;p class="meta"&gt;
					&lt;time datetime="2013-08-11T17:55:00+02:00"&gt;Aug 11th, 2013&lt;/time&gt; |
					&lt;a href="#disqus_thread"&gt;Comments&lt;/a&gt;
				&lt;/p&gt;
			&lt;/header&gt;

			&lt;blockquote&gt;
				&lt;p&gt;Sorry &lt;a href="http://lmgtfy.com/?q=plautus+metatheatre"&gt;Plauto&lt;/a&gt;: &lt;em&gt;metablog&lt;/em&gt; just wasn't cool enough.&lt;/p&gt;
				&lt;small&gt;William Ghelfi in &lt;cite title="This very blog post"&gt;This very blog post.&lt;/cite&gt;&lt;/small&gt;
			&lt;/blockquote&gt;

			&lt;h2&gt;I have a plan&lt;/h2&gt;
			&lt;p&gt;
				Hello! Since I was going to redesign my blog using Bootstrap 3, I thought it would be fun to document my step-by-step progress in a blog post. Or, in other words:
			&lt;/p&gt;

			&lt;figure class="text-center"&gt;
				&lt;img src="img/yo-dawg-i-heard-you-like-blogs.jpg" class="img-thumbnail" /&gt;
			&lt;/figure&gt;

			&lt;p&gt;
				So this is the plan, and this also why for some time you should expect discrepancies between blog posts' look & feel and the overall design of the website. as I rewrite the various layouts and includes in Octopress.
			&lt;/p&gt;

			&lt;h2&gt;A beginning&lt;/h2&gt;
			&lt;p&gt;Anyway. Here we have the minimum core of a proper blog post, and we also started to set it up with Bootstrap 3:&lt;/p&gt;
			&lt;ul&gt;
				&lt;li&gt;Up there in the &lt;code&gt;head&lt;/code&gt;, Bootstrap from the great guys at NetDNA &mdash; hey, thanks again!&lt;/li&gt;
				&lt;li&gt;An wide and centered article, slightly narrower at desktop sizes and which is containing the whole post&lt;/li&gt;
				&lt;li&gt;A nerd&lt;em&gt;ish&lt;/em&gt; title for our post, followed by a publishing date and a pointer to the comments section. All of them packed into a &lt;code&gt;header&lt;/code&gt; element.&lt;/li&gt;
				&lt;li&gt;An intro with accompanying picture&lt;/li&gt;
			&lt;/ul&gt;

		&lt;/article&gt;
	&lt;/div&gt;
&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
</code></pre>

* Up there in the `head`, Bootstrap from the great guys at NetDNA &mdash; hey, thanks again!
* A wide and centered article, slightly narrower at desktop sizes and which is containing the whole post
* A nerd*ish* title for our post, followed by a publishing date and a pointer to the comments section. All of them packed into a `header` element.
* An intro with accompanying picture

## Easier to the eyes

Before proceeding further, let's adjust the font size for an easier reading. We are all here on a blog, reading a blog post, after all.  
I'm going to add some overriding styles using a `style` element into the `head` of this document.

<pre>
<code class="language-css">&lt;style&gt;
/* Overriding for fun and profit */

body {
  /* 17 is better than 16 is better than 14 */
  font-size: 17px;
}

pre {
  font-size: 16px;
}
&lt;/style&gt;
</code></pre>


While this is perfect for showing all the code in a single place, for real world scenarios it's always better to put the stylesheets into separated files and link them back into the document.

A good name for such a file, would certainly be something like `bootstrap-override.css`.

## Highlight my fire

And, since nobody likes code snippets without syntax highlighting, we are now going to add [Prism by Lea Verou](http://prismjs.com/) to our blog post. I'm leaving out line numbers, because I got some problems with vertical alignments.

<pre>
<code class="language-markup">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  ...
  &lt;link href="prism.css" rel="stylesheet" /&gt;
&lt;/head&gt;
&lt;body&gt;
  ...
  &lt;script src="prism.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>

Not much pain. We only needed to add the js library and our theme of choice &mdash; I chose *Twilight* &mdash; and now we are good to go.

## Closing the post

This *blogception* is coming to an end, so we need to add the closing bits:

<pre><code class="language-markup">&lt;div id="disqus_thread">&lt;/div&gt;

&lt;hr /&gt;

&lt;footer&gt;
&lt;span class="vcard"&gt;
	Posted by &lt;address class="author"&gt;&lt;span class="fn"&gt;William Ghelfi&lt;/span&gt;&lt;/address&gt; on
	&lt;time datetime="2013-08-11T17:55:00+02:00" class="published"&gt;Aug 11th, 2013&lt;/time&gt;
&lt;/span&gt;
&lt;span class="pull-right"&gt;
	&lt;a class="label label-info" href="/blog/categories/bootstrap/"&gt;Bootstrap&lt;/a&gt;
	&lt;a class="label label-info" href="/blog/categories/css/"&gt;CSS&lt;/a&gt;
&lt;/span&gt;
&lt;hr /&gt;
&lt;!-- Insert tweet button here --&gt;
&lt;ul class="pager"&gt;
	&lt;li class="previous"&gt;
		&lt;a href="/blog/2013/08/04/bootstrap-in-practice-a-landing-page/" title="Previous Post: Bootstrap in Practice: A Landing Page"&gt;&larr; Bootstrap in Practice: A Landing Page&lt;/a&gt;
	&lt;/li&gt;
	&lt;li class="next"&gt;&lt;a href="/fakeurl" title="Next Post: Fake Title" &gt;Fake Title &rarr;&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/footer&gt;
</code></pre>

* A placeholder for the comments section using Disqus &mdash; but I'm not going to show you how to use Disqus
* Who wrote the post, and when it was published
* Categories this post is related to
* A placeholder for the *tweet this* button &mdash; same as for Disqus above
* A pager pointing to the previous or next post as needed

## Final touches
Before saying goodbye, we are going to prettify things a bit.

Stay with me while we add a nicer font for the headings, push the opening date and the link to the commens above the main title, and adjust some margin and padding here and there:

<pre><code class="language-markup">&lt;head&gt;
...
	&lt;link href="//fonts.googleapis.com/css?family=Fjalla+One" rel="stylesheet" type="text/css" /&gt;
...

	&lt;style&gt;</code>
	<code class="language-css">
	/* Overriding for fun and profit */

	body {
		/* 17 is better than 16 is better than 14 */
		font-size: 17px;
	}

	pre {
	  font-size: 16px;
	}

	header {
		position: relative;
		margin-bottom: 1.5em;
		padding: 1.8em 0 1em 0;
	}

	header h1 {
		margin: 0;
		padding: 0;
	}

	header .meta {
		position: absolute;
		top: 0;
		left: 0;
		margin: 0;
		padding: 0;
		text-transform: uppercase;
		font-size: 0.9em;
		color: #aaa;
	}

	footer {
		font-size: 0.9em;
	}

	h1, h2 {
		font-family: "Fjalla One", Arial, serif;
		font-weight: 400;
		margin-bottom: 1em;
	}

	article h2 {
		padding-top: 0.8em;
	}

	figure {
		margin: 2em 0;
	}

	.author {
		display: inline;
	}</code><code class="language-markup">
	&lt;/style&gt;

&lt;/head&gt;
</code></pre>

I'm not sure I won't come back to the code and refine some edgy corners &mdash; for instance, I'm not quite happy with the overall vertical rythm &mdash; but the final result plays nicely with a Mobile First approach and I hope to have accomplished the mission: showing how to create a clean and readable blog post with Bootstrap 3!

<hr />

## Enjoyed the reading?

Would like to know more about Bootstrap 3?

{% include custom/ckform-course.html %}