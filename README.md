# React Tracking Taboola

[![Build Status](https://travis-ci.org/realalexbarge/react-tracking-taboola.svg?branch=master)](https://travis-ci.org/realalexbarge/react-tracking-taboola) [![dependencies Status](https://david-dm.org/realalexbarge/react-tracking-taboola/status.svg)](https://david-dm.org/realalexbarge/react-tracking-taboola) [![devDependencies Status](https://david-dm.org/realalexbarge/react-tracking-taboola/dev-status.svg)](https://david-dm.org/realalexbarge/react-tracking-taboola?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Un-official module to easily add Taboola pageview tracking to react apps.

# Installation

With [npm](https://www.npmjs.com/):

```bash
npm install react-tracking-taboola --save
```

# Usage

### With npm

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

There is also a method to expose the raw \_tfa tracking object from the window:

```js
TaboolaTracking.getTracker();
```
