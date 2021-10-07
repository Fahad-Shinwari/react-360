import { ReactInstance } from "react-360-web";

import KeyboardCameraController from '@martinpham/react-360-keyboard-camera-controller';
import MouseLockCameraController from '@martinpham/react-360-mouse-lock-camera-controller';


import { TooltipModule } from "./modules/Tooltip.module";
import { TransitionModule } from "./modules/Transition.module";

export let r360;

function init(bundle, parent, options = {}) {
  r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    nativeModules: [new TooltipModule(), new TransitionModule()],
    ...options,
  });

  r360.controls.addCameraController(new KeyboardCameraController()); // hacky
  r360.controls.addCameraController(new MouseLockCameraController(r360._eventLayer)); // hacky


  r360.renderToSurface(r360.createRoot("MainComponent"), r360.getDefaultSurface());
  r360.compositor.setBackground(r360.getAssetURL("img/360/city_center.jpg"));
}

window.React360 = { init };