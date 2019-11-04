/**
 * React Taboola Tracking Module
 *
 * @package react-tracking-taboola
 * @author Alexander Barge <alexander.barge@gmail.com>
 */

let trackerId;
const tracker = window._tfa || [];

export function initialize(newTrackerId) {
  trackerId = newTrackerId;

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
    `//cdn.taboola.com/libtrc/unip/${trackerId}/tfa.js`,
    'tb_tfa_script',
  );
  /* eslint-enable */
}

export function pageview() {
  tracker.push({ notify: 'event', name: 'page_view', id: trackerId });
}

export default {
  initialize,
  pageview,
};
