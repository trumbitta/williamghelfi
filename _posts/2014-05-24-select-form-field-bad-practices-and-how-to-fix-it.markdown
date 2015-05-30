---
layout: post
title: "A SELECT form field bad practice, and 4 ways of fixing it"
date: 2014-05-24 12:00
comments: false
categories:
- HTML
- CSS
- Best Practices
- Book
---

## The firestarter

Yesterday, a younger colleague of mine and extremely talented designer, shared his latest mockup on our Basecamp.

As always, it was beatiful and well balanced... until my heart suddenly started to bleed while my inner Caesar was screaming: *"Et tu, Brute?"*

This is what I tweeted shortly after:

<blockquote class="twitter-tweet" align="center" lang="en"><p>Having a &quot;Choose&quot; on top of a select form field, is like having a wood panel with a &quot;Choose&quot; sticker on top of your socks inside a drawer.</p>&mdash; William Ghelfi (@trumbitta) <a href="https://twitter.com/trumbitta/statuses/469399930738835456">May 22, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

## Challenge accepted

Over the years, I ofter found myself having to explain to interns and young colleagues why this:

<select>
	<option value=" ">Choose one...</option>
	<option value="foo">First choice</option>
	<option value="bar">Second choice</option>
</select>

it's in fact always a bad practice, and how to avoid it in a bunch of different situations.

This time I'm trying to explain my opinion on the topic once and for all, really just hoping to end up having a handy link to point people to when needed.

## Why `Choose one...` is bad

Let's examine the following HTML code:

<pre><code class="language-markup">&lt;select name="icecream"&gt;
	&lt;option value=" "&gt;Choose one...&lt;/option&gt;
	&lt;option value="banana"&gt;Banana&lt;/option&gt;
	&lt;option value="cream"&gt;Cream&lt;/option&gt;
	&lt;option value="smurf"&gt;Smurf&lt;/option&gt;
&lt;/select&gt;
</code></pre>

The problem is, that first option doesn't have any purpose which is suitable for an option.

That first `Choose one...` option is there *just to make you choose the **actual option you wanted to choose in the first place!***

<figure class="text-center">
	<img src="/images/posts/2014-05-24-select-form-field-bad-practices-and-how-to-fix-it/madness.jpg" alt="This is madness!" class="img-thumbnail" />
	<figcaption>
		<p>This is madness, and I promise you no Spartan ain't going to kick me in a well for writing it.</p>
	</figcaption>
</figure>

It doesn't make any sense to have it as an option.

Making you want to choose an `<option>`, is the job of a `<label>`. Not of another `<option>`.

## And how to fix it

### The basics

The first rule of the **Fight *the `Choose one...` madness* Club** is you always talk about it and you also use a `<label>`.

<label for="icecream">Choose an icecream:</label><br />
<select name="icecream" id="icecream">
	<option value="banana">Banana</option>
	<option value="cream">Cream</option>
	<option value="smurf">Smurf</option>
</select>

<pre><code class="language-markup">&lt;label for="icecream"&gt;Choose an icecream:&lt;/label&gt;&lt;br /&gt;
&lt;select name="icecream" id="icecream"&gt;
	&lt;option value="banana"&gt;Banana&lt;/option&gt;
	&lt;option value="cream"&gt;Cream&lt;/option&gt;
	&lt;option value="smurf"&gt;Smurf&lt;/option&gt;
&lt;/select&gt;
</code></pre>

The second rule being: if you just **have** to use the word *"Choose"*, use it inside the `<label>`.

Now that we know the basics, let's see it in action in a couple different scenarios and how you can choose proper *first options* in each one.

### A filter-like `<select>`, mandatory choice

When the `<select>` is used to filter a list of possible items, you nearly always have to include a first *show them all* option.

<label for="superheroes">Show superheroes:</label><br />
<select name="superheroes" id="superheroes">
	<option value="all">All</option>
	<option value="flying">Flying</option>
	<option value="super-force">Super-force</option>
	<option value="super-sight">Super-sight</option>
</select>

<pre><code class="language-markup">&lt;label for="superheroes"&gt;Show superheroes:&lt;/label&gt;&lt;br /&gt;
&lt;select name="superheroes" id="superheroes"&gt;
	&lt;option value="all"&gt;All&lt;/option&gt;
	&lt;option value="flying"&gt;Flying&lt;/option&gt;
	&lt;option value="super-force"&gt;Super-force&lt;/option&gt;
	&lt;option value="super-sight"&gt;Super-sight&lt;/option&gt;
&lt;/select&gt;
</code></pre>

Notes:

1. The `value` of the *show them all* `<option>` could also be empty. It depends on your backend implementation and coding style.
2. Since in this example the choice is mandatory, having the *show them all* option as the first one perfectly fits the requirement.  
A *don't actually filter anything* option is often a good default one in such a situation.

### A filter-like `<select>`, not mandatory choice

Ok, I cheated.

The first example is valid in both cases.  
It doesn't really matter if the choice is mandatory or not: when you have a filter-like `<select>`, you can always avoid using the dreadful `Choose one...` first option and stick with the winning *label + show-them-all first option* combo.

### A simple choose-one `<select>`, mandatory choice

When the `<select>` is used inside a form to make you choose one out of some possible options, things can get tricky for the inexperienced Padawan.

Good for us all I'm writing this very blog post.

Consider this:

<label for="opponent">Choose your opponent:</label><br />
<select name="opponent" id="opponent">
	<option value="godzilla">Godzilla</option>
	<option value="optimus_prime">Optimus Prime</option>
	<option value="shaq">Shaq</option>
	<option value="batman">Batman</option>
	<option value="chuck_norris">Chuck Norris</option>
	<option value="indiana_jones">Indiana Jones</option>
</select>

<pre><code class="language-markup">&lt;label for="opponent"&gt;Choose your opponent:&lt;/label&gt;&lt;br /&gt;
&lt;select name="opponent" id="opponent"&gt;
	&lt;option value="godzilla"&gt;Godzilla&lt;/option&gt;
	&lt;option value="optimus_prime"&gt;Optimus Prime&lt;/option&gt;
	&lt;option value="shaq"&gt;Shaq&lt;/option&gt;
	&lt;option value="batman"&gt;Batman&lt;/option&gt;
	&lt;option value="chuck_norris"&gt;Chuck Norris&lt;/option&gt;
	&lt;option value="indiana_jones"&gt;Indiana Jones&lt;/option&gt;
&lt;/select&gt;
</code></pre>

If Godzilla is the default opponent you want poor human fighters go against every time, your job here is done.

But you could also be a bit less evil and let those warriors try themselves against Indiana Jones by default – [beware that gun, though!](https://www.youtube.com/watch?v=4DzcOCyHDqc)

Nothing easier than that. Just add a `selected="selected"` attribute (or just `selected`) to the desired `<option>`:

<label for="opponent">Choose your opponent:</label><br />
<select name="opponent" id="opponent">
	<option value="godzilla">Godzilla</option>
	<option value="optimus_prime">Optimus Prime</option>
	<option value="shaq">Shaq</option>
	<option value="batman">Batman</option>
	<option value="chuck_norris">Chuck Norris</option>
	<option value="indiana_jones" selected="selected">Indiana Jones</option>
</select>

<pre><code class="language-markup">&lt;label for="opponent"&gt;Choose your opponent:&lt;/label&gt;&lt;br /&gt;
&lt;select name="opponent" id="opponent"&gt;
	&lt;option value="godzilla"&gt;Godzilla&lt;/option&gt;
	&lt;option value="optimus_prime"&gt;Optimus Prime&lt;/option&gt;
	&lt;option value="shaq"&gt;Shaq&lt;/option&gt;
	&lt;option value="batman"&gt;Batman&lt;/option&gt;
	&lt;option value="chuck_norris"&gt;Chuck Norris&lt;/option&gt;
	&lt;option value="indiana_jones" selected="selected"&gt;Indiana Jones&lt;/option&gt;
&lt;/select&gt;
</code></pre>

Et voilà! Indy is the first opponent.

### A simple choose-one `<select>`, not mandatory choice

Now what if the choice is **not** mandatory, what if I can skip it and walk away without fighting vs anyone?

You add a *Monty Brewster* option and call it a day.

<figure class="text-center">
	<img src="/images/posts/2014-05-24-select-form-field-bad-practices-and-how-to-fix-it/None-of-the-above.jpg" alt="None of the above" class="img-thumbnail" />
	<figcaption>
		<p>Sometimes a choice can be a non-choice – Confucius.</p>
	</figcaption>
</figure>

Wait, what's a *Monty Brewster* option?

The following is a simple choose-one `<select>` with a not mandatory choice, which uses a *Monty Brewster* option instead of a that bad bad bad *Choose one...* option.

<label for="opponent-2">Choose your opponent:</label><br />
<select name="opponent-2" id="opponent-2">
	<option value=" ">None</option>
	<option value="godzilla">Godzilla</option>
	<option value="optimus_prime">Optimus Prime</option>
	<option value="shaq">Shaq</option>
	<option value="batman">Batman</option>
	<option value="chuck_norris">Chuck Norris</option>
	<option value="indiana_jones">Indiana Jones</option>
</select>

<pre><code class="language-markup">&lt;label for="opponent"&gt;Choose your opponent:&lt;/label&gt;&lt;br /&gt;
&lt;select name="opponent-2" id="opponent-2"&gt;
	&lt;option value=" "&gt;None&lt;/option&gt;
	&lt;option value="godzilla"&gt;Godzilla&lt;/option&gt;
	&lt;option value="optimus_prime"&gt;Optimus Prime&lt;/option&gt;
	&lt;option value="shaq"&gt;Shaq&lt;/option&gt;
	&lt;option value="batman"&gt;Batman&lt;/option&gt;
	&lt;option value="chuck_norris"&gt;Chuck Norris&lt;/option&gt;
	&lt;option value="indiana_jones"&gt;Indiana Jones&lt;/option&gt;
&lt;/select&gt;
</code></pre>

Notes:

1. Just like above, the `value` of the *Monty Brewster* `<option>` can be anything you want. It depends on your backend implementation and coding style.
2. If you want to be super-sure that any browser will always render your desired option as the default one, just add the `selected="selected"` attribute.

## Closing thoughts

As I hope to have demonstrated, it is always possible to avoid the use of the *Choose one...* first option in a `<select>`.

Using it is cheap, lazy, confusing to newcomers, and now you have this blog post with examples on how to implement the right thing.

What do you think about it?  
Did you find a use case I forgot to cover?

Let me know on [Twitter](https://twitter.com/trumbitta), or leave a comment below.

And if you are just starting with HTML (and CSS), I'm writing an ebook you might be interested in:

<div class="text-center">
<iframe width="96%" height="400" src="https://leanpub.com/easyhtmlcss/embed" frameborder="0" allowtransparency="true"></iframe>
</div>



