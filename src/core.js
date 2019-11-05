/**
 * React Taboola Tracking Module
 *
 * @package react-tracking-taboola
 * @author Alexander Barge <alexander.barge@gmail.com>
 */

export function initialize(newTrackerId) {
  /* eslint-disable */
  !(function(t, f, a, x) {
    if (!document.getElementById(x)) {
      t.async = 1;
      t.src = a;
      t.id = x;
      f.parentNode.insertBefore(t, f);
    }
  })(
    document.createElement('script'),
    document.getElementsByTagName('script')[0],
    `//cdn.taboola.com/libtrc/unip/${newTrackerId}/tfa.js`,
    'tb_tfa_script',
  );
  /* eslint-enable */
}

export function getTracker() {
  return window._tfa || [];
}

export function trackPageview() {
  getTracker().push({ notify: 'event', name: 'view_content' });
  getTracker().push({ notify: 'event', name: 'page_view' });
}

export function trackEvent(eventAction = '') {
  getTracker().push({ notify: 'event', name: eventAction });
}

export default {
  initialize,
  getTracker,
  trackPageview,
  trackEvent,
};
