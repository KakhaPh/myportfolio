// react-on-screen ships as CommonJS with `exports.default`. Vite 8 follows
// Node's interop rules, so the default import is the whole exports object.
// Unwrap it here so components can import a plain component.
import TrackVisibilityModule from 'react-on-screen';

const TrackVisibility = TrackVisibilityModule.default ?? TrackVisibilityModule;

export default TrackVisibility;
