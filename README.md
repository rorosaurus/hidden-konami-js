Hidden-Konami-JS
=========

Check out the original repo here: https://github.com/snaptortoise/konami-js

## What
Basically, this fork sacrifices touchscreen support to allow customization of obfuscated patterns.

## Why
Maybe you want your website to do something special, but you don't want it to be immediately obvious what the pattern is upon inspection of the source. Using MD5 is cheap and good enough for this, and it would be funny to see someone try and find a collision just to find out the pattern.

### You realize everyone can see the code the pattern executes anyway, right? This doesn't hide that.
Actually, that only just occured to me.  Damn.  *thinks furiously*

Two options immediately present themselves:
* Obfuscate or minify the Javascript you want to execute (trivial to beautify) or...
* You could, once the pattern is recognized, append something, calculate a new hash, and use that hash to get new code from the server.  Perhaps the easiest way to do this would be to have a .js file named with the new hash, with some function name we expect, which we then import and call.

### This is not secure
You are correct.  Please do not use this to secure anything actually important.  This is just meant to be a simple way to make some dumb secret jokes on your website, which can (mostly) only be discovered or spread by word-of-mouth.  This was a random idea of mine and I just wanted to see if I can get it to work.
