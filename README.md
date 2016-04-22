Hidden Konami JS
=========

## What is this?

The original [konami-js](https://github.com/snaptortoise/konami-js) is a nice little library that lets you add a secret function to your website which is called when you type in the [Konami Code](https://en.wikipedia.org/wiki/Konami_Code)!  <kbd class="keyboard-key nowrap" style="border: 1px solid #aaa; -moz-border-radius: 0.2em; -webkit-border-radius: 0.2em; border-radius: 0.2em; -moz-box-shadow: 0.1em 0.2em 0.2em #ddd; -webkit-box-shadow: 0.1em 0.2em 0.2em #ddd; box-shadow: 0.1em 0.2em 0.2em #ddd; background-color: #f9f9f9; background-image: -moz-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -o-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -webkit-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: linear-gradient(to bottom, #eee, #f9f9f9, #eee); padding: 0.1em 0.3em; font-family: inherit; font-size: 0.85em;">↑</kbd><kbd class="keyboard-key nowrap" style="border: 1px solid #aaa; -moz-border-radius: 0.2em; -webkit-border-radius: 0.2em; border-radius: 0.2em; -moz-box-shadow: 0.1em 0.2em 0.2em #ddd; -webkit-box-shadow: 0.1em 0.2em 0.2em #ddd; box-shadow: 0.1em 0.2em 0.2em #ddd; background-color: #f9f9f9; background-image: -moz-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -o-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -webkit-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: linear-gradient(to bottom, #eee, #f9f9f9, #eee); padding: 0.1em 0.3em; font-family: inherit; font-size: 0.85em;">↑</kbd><kbd class="keyboard-key nowrap" style="border: 1px solid #aaa; -moz-border-radius: 0.2em; -webkit-border-radius: 0.2em; border-radius: 0.2em; -moz-box-shadow: 0.1em 0.2em 0.2em #ddd; -webkit-box-shadow: 0.1em 0.2em 0.2em #ddd; box-shadow: 0.1em 0.2em 0.2em #ddd; background-color: #f9f9f9; background-image: -moz-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -o-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -webkit-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: linear-gradient(to bottom, #eee, #f9f9f9, #eee); padding: 0.1em 0.3em; font-family: inherit; font-size: 0.85em;">↓</kbd><kbd class="keyboard-key nowrap" style="border: 1px solid #aaa; -moz-border-radius: 0.2em; -webkit-border-radius: 0.2em; border-radius: 0.2em; -moz-box-shadow: 0.1em 0.2em 0.2em #ddd; -webkit-box-shadow: 0.1em 0.2em 0.2em #ddd; box-shadow: 0.1em 0.2em 0.2em #ddd; background-color: #f9f9f9; background-image: -moz-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -o-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -webkit-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: linear-gradient(to bottom, #eee, #f9f9f9, #eee); padding: 0.1em 0.3em; font-family: inherit; font-size: 0.85em;">↓</kbd><kbd class="keyboard-key nowrap" style="border: 1px solid #aaa; -moz-border-radius: 0.2em; -webkit-border-radius: 0.2em; border-radius: 0.2em; -moz-box-shadow: 0.1em 0.2em 0.2em #ddd; -webkit-box-shadow: 0.1em 0.2em 0.2em #ddd; box-shadow: 0.1em 0.2em 0.2em #ddd; background-color: #f9f9f9; background-image: -moz-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -o-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -webkit-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: linear-gradient(to bottom, #eee, #f9f9f9, #eee); padding: 0.1em 0.3em; font-family: inherit; font-size: 0.85em;">←</kbd><kbd class="keyboard-key nowrap" style="border: 1px solid #aaa; -moz-border-radius: 0.2em; -webkit-border-radius: 0.2em; border-radius: 0.2em; -moz-box-shadow: 0.1em 0.2em 0.2em #ddd; -webkit-box-shadow: 0.1em 0.2em 0.2em #ddd; box-shadow: 0.1em 0.2em 0.2em #ddd; background-color: #f9f9f9; background-image: -moz-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -o-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -webkit-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: linear-gradient(to bottom, #eee, #f9f9f9, #eee); padding: 0.1em 0.3em; font-family: inherit; font-size: 0.85em;">→</kbd><kbd class="keyboard-key nowrap" style="border: 1px solid #aaa; -moz-border-radius: 0.2em; -webkit-border-radius: 0.2em; border-radius: 0.2em; -moz-box-shadow: 0.1em 0.2em 0.2em #ddd; -webkit-box-shadow: 0.1em 0.2em 0.2em #ddd; box-shadow: 0.1em 0.2em 0.2em #ddd; background-color: #f9f9f9; background-image: -moz-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -o-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -webkit-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: linear-gradient(to bottom, #eee, #f9f9f9, #eee); padding: 0.1em 0.3em; font-family: inherit; font-size: 0.85em;">←</kbd><kbd class="keyboard-key nowrap" style="border: 1px solid #aaa; -moz-border-radius: 0.2em; -webkit-border-radius: 0.2em; border-radius: 0.2em; -moz-box-shadow: 0.1em 0.2em 0.2em #ddd; -webkit-box-shadow: 0.1em 0.2em 0.2em #ddd; box-shadow: 0.1em 0.2em 0.2em #ddd; background-color: #f9f9f9; background-image: -moz-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -o-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -webkit-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: linear-gradient(to bottom, #eee, #f9f9f9, #eee); padding: 0.1em 0.3em; font-family: inherit; font-size: 0.85em;">→</kbd><kbd class="keyboard-key nowrap" style="border: 1px solid #aaa; -moz-border-radius: 0.2em; -webkit-border-radius: 0.2em; border-radius: 0.2em; -moz-box-shadow: 0.1em 0.2em 0.2em #ddd; -webkit-box-shadow: 0.1em 0.2em 0.2em #ddd; box-shadow: 0.1em 0.2em 0.2em #ddd; background-color: #f9f9f9; background-image: -moz-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -o-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -webkit-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: linear-gradient(to bottom, #eee, #f9f9f9, #eee); padding: 0.1em 0.3em; font-family: inherit; font-size: 0.85em;">B</kbd><kbd class="keyboard-key nowrap" style="border: 1px solid #aaa; -moz-border-radius: 0.2em; -webkit-border-radius: 0.2em; border-radius: 0.2em; -moz-box-shadow: 0.1em 0.2em 0.2em #ddd; -webkit-box-shadow: 0.1em 0.2em 0.2em #ddd; box-shadow: 0.1em 0.2em 0.2em #ddd; background-color: #f9f9f9; background-image: -moz-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -o-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: -webkit-linear-gradient(top, #eee, #f9f9f9, #eee); background-image: linear-gradient(to bottom, #eee, #f9f9f9, #eee); padding: 0.1em 0.3em; font-family: inherit; font-size: 0.85em;">A</kbd>

I love using this to sneak little easter eggs into my projects, but I've always had a few complaints.
* You can't customize the input pattern that reveals the secret
* The correct input pattern and secret function are plainly visible in the page/js source, so they are easy to discover

This fork aims to solve these complaints by:
* Enabling the customization of patterns
* Hiding the desired input pattern and the secret function
 * Verifying a hash of the desired input pattern, not the pattern itself directly
 * The secret function is hidden in a new .js file, whose location is only revealed after the correct input is received

## Why would you want that?

You want your website to do something special, but you don't want it to be immediately obvious what the desired pattern is upon inspection of the source.  The only way to find the secret is to spread it by word of mouth! (or by finding the website owner and [buying a $5 wrench](https://xkcd.com/538/))

Using the MD5 hash is cheap and good enough for this.  It also comes with the added bonus of seeing if anyone cares about your secret enough to try and find a collision just to find an acceptable pattern!

## Demo

There is a live demo over at https://rorosaurus.github.io/hidden-konami-js/

Can you find all the secret input patterns?  Go ahead!  Open the developer tools!  Inspect the page source!  The only info you have is ````konami.js```` and something in the HTML document like:

```
<script>var easter_egg = new KeyKonami("0a75e752070ffe5ed283de6d81efb3db", 20);</script>
```

So you have an MD5 hash of the desired input pattern and it's length.  Not too much to go on.  So unless the site owner tells you something like:

> Hey you should type 'hello' and see what happens.

Then you are in a tough place, unless you want to start searching for MD5 collisions. :)

Hint: It becomes easy once you realize the demo site contents are public on the [GitHub pages branch](https://github.com/rorosaurus/hidden-konami-js/tree/gh-pages).  Of course, this project is **actually** useful on private webservers which don't allow visitors to view the directory contents. ;)

## Using hidden-konami-js

On the left of the demo site, I've created a quick tool to help you generate the values for your own input patterns!  Once you settle on a good input pattern, you can save the relevant values and use them below.

First, you need to add the script to your page.
```
<script type="text/javascript" src="konami.js"></script>
```

Next, add the easter egg to your site using the first two generated values: the pattern hash and the pattern length. (You can use more than one easter egg, just make sure to use a different variable name!)
```
<script>var easter_egg = new KeyKonami("pattern_hash", pattern_length);</script>
```

Finally, create a new .js file with the generated filename.  Create a function with the name that was generated - then add your easter egg code!  You're done!
```
// Pattern: UP, UP, DOWN, DOWN, LEFT, RIGHT, LEFT, RIGHT, B, A
// Keycodes: 38384040373937396665

// Pattern Hash: 0a75e752070ffe5ed283de6d81efb3db
// Pattern Length: 20
// JS File Name: d3207cc4375db28d31757a64ffecbd51.js
// JS Function Name: _d3207cc4375db28d31757a64ffecbd51

// This function is called when you input the Konami Code!
function _d3207cc4375db28d31757a64ffecbd51(){
    alert("You entered the Konami Code and found this Easter Egg! Can you find the others?");
}
```

I recommend storing information about the input patterns inside the .js files which contain the secret function.  This is useful so you don't forget your own inputs or which codes go to which secret functions.  It might also be fun to daisy chain these files together by providing hints for the next secret input pattern - turning your easter eggs into a literal easter egg hunt!

## "This is not secure"
You are correct.  Please **do not use this to secure anything actually important**.  This is just meant to be a simple way to make some dumb secret jokes on your website, which can (mostly) only be discovered or spread by word-of-mouth.  This does not actually protect anything and, as previously mentioned, can be defeated by a determined adversary.

## Thanks

Original konami-js repo: https://github.com/snaptortoise/konami-js

MD5 library repo: https://github.com/blueimp/JavaScript-MD5

Licensed under the MIT License (http://opensource.org/licenses/MIT)
