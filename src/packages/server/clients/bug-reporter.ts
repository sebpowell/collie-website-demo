import * as Sentry from "@sentry/nextjs";

export const notifyBugReporter = (message: any) => {
  console.log(message);
  Sentry.captureException(message);
};
