const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD
} = require("next/constants");

// This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
module.exports = phase => {
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  // when `next build` or `npm run build` is used
  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== "1";
  // when `next build` or `npm run build` is used
  const isStaging = PHASE_PRODUCTION_BUILD && process.env.STAGING === "1";

  // console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`);

  const env = {
    GOOGLE_CAPTCHA_KEY: (() => {
      if (isDev) return "6LfUucEUAAAAACQNDKBfKtu6cUUfvzp7rHSN1gEP";
      if (isProd) {
        return "6LectsEUAAAAABzGkccSnVGUBO1YMIdPotf96ZQq";
      }
      if (isStaging) return "6LfUucEUAAAAACQNDKBfKtu6cUUfvzp7rHSN1gEP";
      return "GOOGLE_CAPTCHA_KEY:not (isDev,isProd && !isStaging,isProd && isStaging)";
    })(),
    SERVER_URL: (() => {
      if (isDev) return "http://localhost:4000";
      if (isProd) {
        return "https://st-next.herokuapp.com";
      }
      return "GOOGLE_CAPTCHA_KEY:not (isDev,isProd && !isStaging,isProd && isStaging)";
    })(),
    LINKEDIN_KEY: (() => {
      if (isDev) return "78ix7j34lvn3zj";
      if (isProd) {
        return "78ix7j34lvn3zj";
      }
      return "LINKEDIN_KEY:not (isDev,isProd && !isStaging,isProd && isStaging)";
    })(),
    LINKEDIN_SECRET: (() => {
      if (isDev) return "jOFFGo6dzA5cMCeK";
      if (isProd) {
        return "jOFFGo6dzA5cMCeK";
      }
      return "LINKEDIN_SECRET:not (isDev,isProd && !isStaging,isProd && isStaging)";
    })(),
    REACT_APP_UPLOAD_PRESET: (() => {
      if (isDev) return "default-preset";
      if (isProd) {
        return "default-preset";
      }
      return "REACT_APP_UPLOAD_PRESET:not (isDev,isProd && !isStaging,isProd && isStaging)";
    })(),
    REACT_APP_CLOUD_NAME: (() => {
      if (isDev) return "bakbak24";
      if (isProd) {
        return "bakbak24";
      }
      return "REACT_APP_CLOUD_NAME:not (isDev,isProd && !isStaging,isProd && isStaging)";
    })(),
  };

  // next.config.js object
  return {
    env
  };
};
