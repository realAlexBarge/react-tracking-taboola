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

Initializing TaboolaTracking and tracking pageviews:

```js
import TaboolaTracking from 'react-tracking-taboola';
TaboolaTracking.initialize('TRACKING_ID');
TaboolaTracking.pageview();
```
