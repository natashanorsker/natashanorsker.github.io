import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://4558ba81bc43099bd4b1468ba319fe2c@o4511084570345472.ingest.de.sentry.io/4511084586795088",
  environment: import.meta.env.MODE,

  sendDefaultPii: true,

  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],

  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/bigdataenergy\.tech/],

  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});
