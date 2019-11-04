/**
 * React Taboola Tracking Module
 *
 * @package react-tracking-taboola
 * @author Alexander Barge <alexander.barge@gmail.com>
 */

let trackerId;

export function initialize(newTrackerId, options) {
  trackerId = newTrackerId;

  window._tfa = window._tfa || [];
  window._tfa.push({ notify: 'event', name: 'page_view', id: trackerId });

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
}

export function pageview() {
  window._tfa.push({ notify: 'event', name: 'page_view', id: trackerId });
}

export default {
  initialize,
  pageview,
};
