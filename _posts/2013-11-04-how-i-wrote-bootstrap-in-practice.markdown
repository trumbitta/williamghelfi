---
layout: post
title: "How I wrote Bootstrap In Practice"
date: 2013-11-04 23:00
comments: false
categories:
- Myself
- Bootstrap
---

Today I got a very kind email from a reader of [Bootstrap In Practice, my ebook about Bootstrap 3 for starters](/bootstrap-in-practice).

> Hi William, 
>
> I recently bought your book. I think its great! Very useful information 
and you didn't hold back on examples.
>
> I am writing a book on Clinical Documentation. It's focused on teaching doctors
how to write patient notes or their findings. 
>
> Would you suggest using a template?
> What e-book software did you use? 
>
> Do you have any ideas on free options for drawing up an e-book?
>
> Best,
> Vic Phillips 

He's also writing a book, and asked me what tools I used for mine. I thought it would have been nice to write down something about my toolchain, hence this blog post.

## Hardware

I wouldn't be able to make any progress without my retina MacBook Pro. Its awesome battery life, CPU power, SSD storage and 16GB RAM really made the difference.

I was able to use all the software you are going to read about and keep them all open at the same time without any problems ever.

## Backups

I kept the whole project in a private git repository on BitBucket.  
Using git allowed me to test some variations and to better organize the progress of the work, but also saved me some bandwidth thanks to its good-enough use of deltas also for binary files.

## Writing

I wrote the whole thing in Markdown on [Sublime Text](http://www.sublimetext.com/). I chose Markdown because it's a simple enough plain text format **and** gets nicely formatted once I need a [quick preview](https://github.com/revolunet/sublimetext-markdown-preview).

I wrote an outline, then a file per chapter. The order of the chapters changed a bit during the final revisions and I also ended up splitting the book into two sections: *Knowing Bootstrap* and *Using Bootstrap*.

You can find the final [table of contents in a previous blog post](/blog/2013/09/06/bootstrap-in-practice-tomorrow/).

## Screenshots

The screenshots were all taken from Safari. Its iconic visual design is just the perfect kinda *neutral* chrome for screenshots.

I then cropped and adjusted them a bit in Photoshop whenever needed.

## Actual ebook authoring

The actual ebook was then composed in [iBooks Author](http://www.apple.com/ibooks-author/).

iBooks Author comes with a good, if tiny, collection of templates. If you need more, there's plenty on [iBooks Author Templates](http://www.ibooksauthortemplates.com/).

By the way, I wanted my ebook to be personal, simple, and different from any other book out there. So I just took one of the default templates and stripped it down of every color and shenanigan.

Once I obtained a clean foundation, I started adding my own styling for the Chapter, Section and Page layouts.

I also created my own styles for the various textual components: headings, paragraphs, and the like.

When I was ok with the results, I started copying the markdown text into iBooks Author and applying my styles to it.

For the code snippets the book is filled with, I used a dirty trick: I set Xcode to my syntax highlighting style of choice, copied a code snippet, then used *Paste and Retain Style* inside iBooks Author.  
Since I chose a dark color for the background, I just had to set it again for the paragraph because it doesn't get retained when you copy it from Xcode.

Once the book was done, I just exported it in PDF.

Last but not least, my ebook has a landscape layout but iBooks Author only knows how to deal with portrait covers. So I had to design my cover in Photoshop and replace it using Adobe Acrobat Pro.

Thanks Adobe for your 30-day free trials!

## Marketing and all the rest

Just a quick list here:

 * This blog: [Octopress](http://octopress.org/) with a [self made Bootstrap 3 template](/blog/2013/08/11/bootstrap-in-practice-blogception/)
 * Mailing list while I was writing: [Mailchimp](http://mailchimp.com/)
 * 30 day free course with additional tips: [ConvertKit](https://convertkit.com/)
 * Sales: [Gumroad](https://gumroad.com/)
 * Sales page: [hosted on this blog](/bootstrap-in-practice), with another [self made Bootstrap 3 template](http://wrapbootstrap.com/preview/WB07284K4)
 * Analytics: [Google Analytics](http://www.google.com/analytics/)

 And that's it :)

<hr />

{% include custom/more-about-bootstrap.html %}
