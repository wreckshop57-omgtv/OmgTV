export const TELEGRAM_URL = "https://t.me/omgtv";
export const LOGO_SRC = "/omgtv-logo.png";

export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};
