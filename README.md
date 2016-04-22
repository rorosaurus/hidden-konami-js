Hidden Konami JS
=========

## What is this?

The original [konami-js](https://github.com/snaptortoise/konami-js) is a nice little library that lets you add a secret function to your website which is called when you type in the [Konami Code](https://en.wikipedia.org/wiki/Konami_Code)!  <kbd class="keyboard-key nowrap" style="border: 1px solid #aaa; -moz-border-radius: 0.2em; -webkit-border-radius: 0.2em; border-radius: 0.2em; -moz-box-shadow: 0.1em 0.2em 0.2em #ddd; -webkit-box-shadow: 0.1em 0.2em 0.2em #ddd; box-shadow: 0.1em 0.2em 0.2em #ddd; background-color: #f9f9f9; background-image: -moz-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -o-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -webkit-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: linear-gradient(to bottom, #eee, #f9f9f9, #eee); padding: 0.1em 0.3em; font-family: inherit; font-size: 0.85em;">↑</kbd><kbd class="keyboard-key nowrap" style="border: 1px solid #aaa; -moz-border-radius: 0.2em; -webkit-border-radius: 0.2em; border-radius: 0.2em; -moz-box-shadow: 0.1em 0.2em 0.2em #ddd; -webkit-box-shadow: 0.1em 0.2em 0.2em #ddd; box-shadow: 0.1em 0.2em 0.2em #ddd; background-color: #f9f9f9; background-image: -moz-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -o-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -webkit-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: linear-gradient(to bottom, #eee, #f9f9f9, #eee); padding: 0.1em 0.3em; font-family: inherit; font-size: 0.85em;">↑</kbd><kbd class="keyboard-key nowrap" style="border: 1px solid #aaa; -moz-border-radius: 0.2em; -webkit-border-radius: 0.2em; border-radius: 0.2em; -moz-box-shadow: 0.1em 0.2em 0.2em #ddd; -webkit-box-shadow: 0.1em 0.2em 0.2em #ddd; box-shadow: 0.1em 0.2em 0.2em #ddd; background-color: #f9f9f9; background-image: -moz-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -o-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -webkit-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: linear-gradient(to bottom, #eee, #f9f9f9, #eee); padding: 0.1em 0.3em; font-family: inherit; font-size: 0.85em;">↓</kbd><kbd class="keyboard-key nowrap" style="border: 1px solid #aaa; -moz-border-radius: 0.2em; -webkit-border-radius: 0.2em; border-radius: 0.2em; -moz-box-shadow: 0.1em 0.2em 0.2em #ddd; -webkit-box-shadow: 0.1em 0.2em 0.2em #ddd; box-shadow: 0.1em 0.2em 0.2em #ddd; background-color: #f9f9f9; background-image: -moz-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -o-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -webkit-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: linear-gradient(to bottom, #eee, #f9f9f9, #eee); padding: 0.1em 0.3em; font-family: inherit; font-size: 0.85em;">↓</kbd><kbd class="keyboard-key nowrap" style="border: 1px solid #aaa; -moz-border-radius: 0.2em; -webkit-border-radius: 0.2em; border-radius: 0.2em; -moz-box-shadow: 0.1em 0.2em 0.2em #ddd; -webkit-box-shadow: 0.1em 0.2em 0.2em #ddd; box-shadow: 0.1em 0.2em 0.2em #ddd; background-color: #f9f9f9; background-image: -moz-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -o-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -webkit-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: linear-gradient(to bottom, #eee, #f9f9f9, #eee); padding: 0.1em 0.3em; font-family: inherit; font-size: 0.85em;">←</kbd><kbd class="keyboard-key nowrap" style="border: 1px solid #aaa; -moz-border-radius: 0.2em; -webkit-border-radius: 0.2em; border-radius: 0.2em; -moz-box-shadow: 0.1em 0.2em 0.2em #ddd; -webkit-box-shadow: 0.1em 0.2em 0.2em #ddd; box-shadow: 0.1em 0.2em 0.2em #ddd; background-color: #f9f9f9; background-image: -moz-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -o-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -webkit-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: linear-gradient(to bottom, #eee, #f9f9f9, #eee); padding: 0.1em 0.3em; font-family: inherit; font-size: 0.85em;">→</kbd><kbd class="keyboard-key nowrap" style="border: 1px solid #aaa; -moz-border-radius: 0.2em; -webkit-border-radius: 0.2em; border-radius: 0.2em; -moz-box-shadow: 0.1em 0.2em 0.2em #ddd; -webkit-box-shadow: 0.1em 0.2em 0.2em #ddd; box-shadow: 0.1em 0.2em 0.2em #ddd; background-color: #f9f9f9; background-image: -moz-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -o-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -webkit-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: linear-gradient(to bottom, #eee, #f9f9f9, #eee); padding: 0.1em 0.3em; font-family: inherit; font-size: 0.85em;">←</kbd><kbd class="keyboard-key nowrap" style="border: 1px solid #aaa; -moz-border-radius: 0.2em; -webkit-border-radius: 0.2em; border-radius: 0.2em; -moz-box-shadow: 0.1em 0.2em 0.2em #ddd; -webkit-box-shadow: 0.1em 0.2em 0.2em #ddd; box-shadow: 0.1em 0.2em 0.2em #ddd; background-color: #f9f9f9; background-image: -moz-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -o-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -webkit-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: linear-gradient(to bottom, #eee, #f9f9f9, #eee); padding: 0.1em 0.3em; font-family: inherit; font-size: 0.85em;">→</kbd><kbd class="keyboard-key nowrap" style="border: 1px solid #aaa; -moz-border-radius: 0.2em; -webkit-border-radius: 0.2em; border-radius: 0.2em; -moz-box-shadow: 0.1em 0.2em 0.2em #ddd; -webkit-box-shadow: 0.1em 0.2em 0.2em #ddd; box-shadow: 0.1em 0.2em 0.2em #ddd; background-color: #f9f9f9; background-image: -moz-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -o-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -webkit-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: linear-gradient(to bottom, #eee, #f9f9f9, #eee); padding: 0.1em 0.3em; font-family: inherit; font-size: 0.85em;">B</kbd><kbd class="keyboard-key nowrap" style="border: 1px solid #aaa; -moz-border-radius: 0.2em; -webkit-border-radius: 0.2em; border-radius: 0.2em; -moz-box-shadow: 0.1em 0.2em 0.2em #ddd; -webkit-box-shadow: 0.1em 0.2em 0.2em #ddd; box-shadow: 0.1em 0.2em 0.2em #ddd; background-color: #f9f9f9; background-image: -moz-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -o-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -webkit-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: linear-gradient(to bottom, #eee, #f9f9f9, #eee); padding: 0.1em 0.3em; font-family: inherit; font-size: 0.85em;">A</kbd>

I love using this to sneak little easter eggs into my projects, but I've always had a few complaints.
* You can't customize the input pattern that reveals the secret
* The correct input pattern and secret function are plainly visible in the page/js source, so they are easy to discover

This fork aims to solve these complaints by:
* Enabling the customization of patterns
* Verifying a hash of the desired input pattern, not the pattern itself directly
* The secret function is hidden in a new .js file, whose location is only revealed after the correct input is received

## Why would you want that?

You want your website to do something special, but you don't want it to be immediately obvious what the desired pattern is upon inspection of the source.  The only way to find the secret is to spread it by word of mouth! (or by finding the website owner and [buying a $5 wrench](https://xkcd.com/538/))

Using the MD5 hash is cheap and good enough for this.  It also comes with the added bonus of seeing if anyone cares about your secret enough to try and find a collision just to find out an acceptable pattern!

## Demo

There is a live demo over at https://rorosaurus.github.io/hidden-konami-js/

Can you find all the secret input patterns?  The only info you have to go on is something like:

```
<script>var easter_egg = new KeyKonami("0a75e752070ffe5ed283de6d81efb3db", 20);</script>
```

So you have an MD5 hash of the desired input pattern and it's length.  Not too much to go on.  So unless the site owner tells you something like

> Hey you should type 'hello' and see what happens.

Then you are kinda tough place, unless you want to start searching for MD5 collisions. :)

Hint: It becomes easy once you realize the site contents are public on the [GitHub pages branch](https://github.com/rorosaurus/hidden-konami-js/tree/gh-pages).

See the bundled index.html, konami.js, and md5.min.js files.
* Between these files, you are only presented a hash and the length of the pattern.
* You cannot determine the magic pattern from this information alone (ignoring collisions)
* When the pattern is recognized another hash is created, which loads and executes the next .js file:

The d3207cc4375db28d31757a64ffecbd51.js file contains the easter egg payload.
* This file is not obfuscated, so the payload is secured through obscurity alone.
* Presumably this is hosted on a server where visitors cannot simply see the whole directory of files.
* Knowing this hash, a vistor will know the end result of the easter egg but cannot determine the pattern needed to reach there ordinarily (ignoring collisions).

## This is not secure
You are correct.  Please do not use this to secure anything actually important.  This is just meant to be a simple way to make some dumb secret jokes on your website, which can (mostly) only be discovered or spread by word-of-mouth.  This was a random idea of mine and I just wanted to see if I can get it to work.

### You realize everyone can see the code the pattern executes anyway, right? This doesn't hide that.
Actually, that only just occured to me.  Damn.  *thinks furiously*

Two options immediately present themselves:
* Obfuscate or minify the Javascript you want to execute (trivial to beautify) or...
* You could, once the pattern is recognized, append something, calculate a new hash, and use that hash to get new code from the server.  Perhaps the easiest way to do this would be to have a .js file named with the new hash, with some function name we expect, which we then import and call.  I've implemented this one in the absence of recognizing a better solution.

###Links
Find your keycodes:
http://javascriptkeycodes.com/
http://www.cambiaresearch.com/articles/15/javascript-key-codes

Find MD5 hash:
https://blueimp.github.io/JavaScript-MD5/

Check out the original repo here: https://github.com/snaptortoise/konami-js

Thanks to https://github.com/blueimp/JavaScript-MD5 for the MD5 implementation.

Both sources use MIT license
