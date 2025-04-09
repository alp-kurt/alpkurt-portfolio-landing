import { analytics } from "./firebase";
import { logEvent } from "firebase/analytics";

export const logCustomEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (analytics) {
    logEvent(analytics, eventName, eventParams);
  }
};
