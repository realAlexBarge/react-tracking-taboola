# React Tracking Taboola

[![Build Status](https://travis-ci.org/realalexbarge/react-tracking-taboola.svg?branch=master)](https://travis-ci.org/realalexbarge/react-tracking-taboola) [![dependencies Status](https://david-dm.org/realalexbarge/react-tracking-taboola/status.svg)](https://david-dm.org/realalexbarge/react-tracking-taboola) [![devDependencies Status](https://david-dm.org/realalexbarge/react-tracking-taboola/dev-status.svg)](https://david-dm.org/realalexbarge/react-tracking-taboola?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Un-official module to easily add Taboola pageview tracking to react apps. It functions as a tiny wrapper for the native script tag and window api. After initialization the Taboola script is injected into the document.

# Installation

With [npm](https://www.npmjs.com/):

```bash
npm install react-tracking-taboola --save
```

# Usage

Before tracking any page views or events the tracker needs to be imported and initialized with the custom tracking id:

```js
import TaboolaTracking from 'react-tracking-taboola';
TaboolaTracking.initialize('TRACKING_ID');
```

After initializing page views can be tracked like this:

```js
TaboolaTracking.trackPageview();
```

There is also the option to track custom events with event action:

```js
TaboolaTracking.trackEvent(eventAction);
```

There is also a method to expose the raw \_tfa tracking object api from the window:

```js
TaboolaTracking.getTracker();
```

# How this works

This modules takes care of injecting the provider specific tracking script into the document and provides a tiny wrapper for the tracking api. It also exposes the tracker object api for direct access.

Documentation for the raw tracker api can be found [here](https://help.taboola.com/hc/en-us/articles/360003469854-Taboola-Pixel-Overview) and [here](https://help.taboola.com/hc/en-us/articles/360007856794-Developer-Notes).
