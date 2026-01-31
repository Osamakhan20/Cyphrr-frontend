const isDev = import.meta.env.DEV;

export const AppLogger = {
  info(message: string, data?: unknown) {
    if (!isDev) return;
    console.log("INFO:", message, data);
  },

  warn(message: string, data?: unknown) {
    if (!isDev) return;
    console.warn("WARN:", message, data);
  },

  error(message: string, data?: unknown) {
    if (!isDev) return;
    console.error("ERROR:", message, data);
  },
};
