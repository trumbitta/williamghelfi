---
layout: post
title: "Bootstrap buttons: bits beyond the docs"
date: 2015-03-08 21:53
comments: true
categories:
- bootstrap
- pills
---

## 1. A checkbox-driven single toggle button

The official docs show us a stateful, single toggle, button:

<pre><code class="language-markup">&lt;button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off"&gt;
  Single toggle
&lt;/button&gt;
</code></pre>

After that, it's the turn of a checkbox group:

<pre><code class="language-markup">&lt;div class="btn-group" data-toggle="buttons"&gt;
  &lt;label class="btn btn-primary active"&gt;
    &lt;input type="checkbox" autocomplete="off" checked&gt; Checkbox 1 (pre-checked)
  &lt;/label&gt;
  &lt;label class="btn btn-primary"&gt;
    &lt;input type="checkbox" autocomplete="off"&gt; Checkbox 2
  &lt;/label&gt;
  &lt;label class="btn btn-primary"&gt;
    &lt;input type="checkbox" autocomplete="off"&gt; Checkbox 3
  &lt;/label&gt;
&lt;/div&gt;
</code></pre>

Cool. Let's see what my friend S.C. Clarence has to say about it:

<figure class="text-center">
    <img src="/images/posts/2015-03-08-bootstrap-buttons-bits-beyond-the-docs/clarence.jpg" alt="Ionic + Angular" class="img-thumbnail" />
</figure>
<!-- http://i.qkme.me/3vqegw.jpg -->

### Single toggle checkbox!

Yep, thanks Clarence.  
Anyway. Let's just build a simple checkbox:

<pre><code class="language-markup">&lt;div class="checkbox"&gt;
  &lt;label&gt;
    &lt;input type="checkbox" value="" /&gt;
    I have a thirst...
  &lt;/label&gt;
&lt;/div&gt;
</code></pre>

Then adding `data-toggle="buttons"` and making a button of it:

<pre><code class="language-markup">&lt;div class="checkbox" data-toggle="buttons"&gt;
  &lt;label class="btn btn-danger"&gt;
    &lt;span class="glyphicon glyphicon-fire"&gt;&lt;/span&gt;&#32;
    &lt;input type="checkbox" value="" /&gt;
    Orange Mocha Frappuccino!
  &lt;/label&gt;
&lt;/div&gt;
</code></pre>

We now have a cool *– if somewhat dangerous –* toggleable single checkbox.

## 2. On / Off switch

Finally, I'd like to introduce **Bootstrap Switch** by [Mattia Larentis](https://github.com/nostalgiaz) and Peter Stein.  
Now maintained by [Emanuele Marchi](https://github.com/lostcrew).

I always liked switches, both in the real world and in computer / smartphone interfaces!

Go take a look at the demo:   
[http://www.bootstrap-switch.org/](http://www.bootstrap-switch.org/)

Or read the docs, if you want to use it in your projects:  
[http://www.bootstrap-switch.org/options.html](http://www.bootstrap-switch.org/options.html)

That's it. Hope you liked these pills :)

P.S.: As you may know, I wrote a book about Bootstrap 3 to help newcomers and starters in getting productive as fast as they can without losing time going deep or getting stuck in the official docs. I think it's worth checking it out:  
http://www.williamghelfi.com/bootstrap-in-practice
