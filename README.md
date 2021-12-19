##### Note: goVTT is still an early-stage work in progress. It will be steadily developed over the foreseeable future.&nbsp;&nbsp;&nbsp;![Latest Commit was December 2021](https://img.shields.io/badge/Latest%20Commit-December%202021-yellowgreen?style=plastic)

# goVTT - A mobile virtual tabletop for roleplaying games

## Background

I love roleplaying games, especially the old school kind - pen and paper, Dungeons & Dragons, everyone sitting around a table, rolling dice, eating pizza till you're sick... That kind.

One of the greatest innovations in roleplaying games over the last decade or two has been the coming of the virtual tabletop, or VTT, which allows players separated by distance to simulate the classic roleplaying experience - minus the pizza binge, unfortunately[^pizza]. Otherwise, VTTs are great! They allow players to share a virtual map, see each others' dice rolls, chat, and keep track of their character sheets, all in a convenient online medium.

One area in which VTTs are surprisingly lacking, however, is their presence on mobile devices. typically built around a computer-centric experience, VTTs today are either completely inaccessible via mobile, or are ridiculously hard to use - as in the case of browser-based VTTs. goVTT aims to fill that gap.

## A Better Mobile Experience

goVTT was designed from the ground up to address the needs of roleplayers while being intended for use specifically on mobile devices. Thus, goVTT makes use of several intuitive mobile-exclusive features (swiping and pinching, for example) to present users with a seamless, natural feeling VTT that isn't bogged down by the problems typically found in mobile adaptations of browser-based VTTs. Built with [React Native](https://reactnative.dev/) for maximum compatibility, goVTT is the entire tabletop experience in the palm of your hand.

## Three Simple Swipes

As soon as you join your game, goVTT puts everything you need within one swipe of wherever you're at. The three main parts of the VTT experience are the map, the character sheet, and the chat. With goVTT, each is one simple motion away from both of the others, meaning you're never far from the action. Additionally, each of the component parts is interconnected with the others. For example, select an enemy token on the map, swipe over to character sheet and make that attack roll. Swipe once more to the chat window to find your roll total. Each step in the action chain is simple and intutitive.

[^pizza]: I lied. It's still entirely possible to binge on pizza while roleplaying via a VTT, but it's less fun and far more guilt-inducing when you polish off an entire pizza alone.
