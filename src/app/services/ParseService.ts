import Parse from "parse";
import config from "@/config/config";

export function initializeParse() {
  Parse.initialize(config.applicationId, config.javascriptKey);
  Parse.serverURL = config.serverURL;
}

// Call initializeParse() in your useEffect (or in _app.js for Next.js)

