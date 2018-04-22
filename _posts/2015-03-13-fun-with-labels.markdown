---
layout: post
title: "Bootstrap: fun with labels"
date: 2015-03-13 21:09
comments: false
categories:
- bootstrap
- pills
---

Labels in the official docs are quickly introduced and dismissed. They might seem not much useful, besides for adding the occasional "New!" next to an item.

But with a bit of imagination, you can take advantage of labels in quite more interesting ways.  
Let's see 3 of them.

## 1. Labels as removable tags

Imagine you have a part of a web application, where you can choose tags and apply them to an item like - uhm - an X-Man!

Using labels as we know them from the docs, we'd have a situation similar to the following:

<pre><code class="language-markup">&lt;select name="superpower"&gt;
&lt;!-- superpower options --&gt;
&lt;/select&gt;

&lt;p&gt;Superpowers:&lt;/p&gt;
&lt;span class="label label-info"&gt;Huge Whiskers&lt;/span&gt;
&lt;span class="label label-info"&gt;Blue Skin&lt;/span&gt;
...
&lt;span class="label label-info"&gt;Dumbass Glasses&lt;/span&gt;
</code></pre>

Well, yes. But we can do better.  
Let's make real tags of them, with a proper icon and a remove link.

<pre><code class="language-markup">&lt;select name="superpower"&gt;
&lt;!-- superpower options --&gt;
&lt;/select&gt;

&lt;p&gt;Superpowers:&lt;/p&gt;
&lt;span class="label label-info"&gt;
  &lt;strong&gt;&lt;span class="glyphicon glyphicon-tag"&gt;&lt;/span&gt;&lt;/strong&gt;&#32;
  Huge Whiskers&#32;
  &lt;strong&gt;&lt;a href="/remove-tag" class="text-danger"&gt;
    &lt;span class="glyphicon glyphicon-remove"&gt;&lt;/span&gt;
  &lt;/a&gt;&lt;/strong&gt;
&lt;/span&gt;
&lt;span class="label label-info"&gt;
  &lt;span class="glyphicon glyphicon-tag"&gt;&lt;/span&gt;&#32;
  Blue Skin&#32;
  &lt;a href="/remove-tag" class="text-danger"&gt;
    &lt;span class="glyphicon glyphicon-remove"&gt;&lt;/span&gt;
  &lt;/a&gt;
&lt;/span&gt;
...
&lt;span class="label label-info"&gt;
  &lt;span class="glyphicon glyphicon-tag"&gt;&lt;/span&gt;&#32;
  Dumbass Glasses&#32;
  &lt;a href="/remove-tag" class="text-danger"&gt;
    &lt;span class="glyphicon glyphicon-remove"&gt;&lt;/span&gt;
  &lt;/a&gt;
&lt;/span&gt;
</code></pre>

Better. But there's something even more unusual we can do if we want to improve this.

##2. Labels + badges

Yep, using badges.

The remove link will become a badge, and also a button for better styling.  
As a finishing touch, we need a custom class to let the labels properly wrap the new elements:

<pre><code class="language-markup">&lt;style&gt;
.label-fatter {
  padding: 0.8em;
}
&lt;/style&gt;

&lt;span class="label label-info label-fatter"&gt;
  &lt;span class="glyphicon glyphicon-tag"&gt;&lt;/span&gt;&#32;
  Huge Whiskers&#32;
  &lt;a href="/remove-tag" class="btn btn-warning badge"&gt;
    &lt;span class="glyphicon glyphicon-remove"&gt;&lt;/span&gt;
  &lt;/a&gt;
&lt;/span&gt;
&lt;span class="label label-info label-fatter"&gt;
  &lt;span class="glyphicon glyphicon-tag"&gt;&lt;/span&gt;&#32;
  Blue Skin&#32;
  &lt;a href="/remove-tag" class="btn btn-default badge"&gt;
    &lt;span class="glyphicon glyphicon-remove"&gt;&lt;/span&gt;
  &lt;/a&gt;
&lt;/span&gt;
...
&lt;span class="label label-info label-fatter"&gt;
  &lt;span class="glyphicon glyphicon-tag"&gt;&lt;/span&gt;&#32;
  Dumbass Glasses&#32;
  &lt;a href="/remove-tag" class="btn btn-default badge"&gt;
    &lt;span class="glyphicon glyphicon-remove"&gt;&lt;/span&gt;
  &lt;/a&gt;
&lt;/span&gt;
</code></pre>

Not bad, and you should be able to see where this is going to with just a bit more work on the CSS side :)

##3. Labels as squared badges

In certain situations, you could prefer a squared look instead of the rounded one of badges.  
One way to obtain it, is to add a custom CSS class and override the rounded borders of badges.

Or, you could just use labels.

Let's see them in action:

<pre><code class="language-markup">&lt;h4&gt;Translations&lt;/h4&gt;
&lt;ul class="list-unstyled"&gt;
  &lt;li&gt;&lt;code class="label label-info"&gt;it_IT&lt;/code&gt; Calcio&lt;/li&gt;
  &lt;li&gt;&lt;code class="label label-info"&gt;en_US&lt;/code&gt; Soccer&lt;/li&gt;
  &lt;li&gt;&lt;code class="label label-info"&gt;en_GB&lt;/code&gt; Football&lt;/li&gt;
&lt;/ul&gt;
</code></pre>

Did you ever think about making labels out of `<code>` elements?

## Closing Thoughts

I hope you are starting to see that Bootstrap is far more versatile than it may seem at first sight.

When I was starting with it, back in 2011, I was too much focused on grasping it as a whole and getting productive as quickly as I could.  
Because if you are going to invest time into learning a new framework which can boost your productivity, that's what you want: get productive, and fast.

But now that I know more of Bootstrap, I am able to use it as I want and go beyond the _natural_ ways of using its components.

Those first weeks, or months, are the most important because you are learning the basics. But at the same time those are the ones you wish you could skip in a minute.

I still feel this pain when I think of it.

Hell, I even wrote [an ebook](https://www.williamghelfi.com/bootstrap-in-practice) to help newcomers in learning the basics as quickly as possible and go back to the funnier and more productive things.

But I digress, and it's time to say goodbye.  
Until next time!

<hr />

{% include custom/more-about-bootstrap.html %}
