let instagramScriptPromise = null;

export function loadInstagramEmbed() {
  if (window.instgrm?.Embeds) {
    return Promise.resolve();
  }

  if (instagramScriptPromise) {
    return instagramScriptPromise;
  }

  instagramScriptPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector(
      'script[src="https://www.instagram.com/embed.js"]',
    );

    if (existingScript) {
      existingScript.addEventListener("load", resolve, {
        once: true,
      });

      existingScript.addEventListener("error", reject, {
        once: true,
      });

      return;
    }

    const script = document.createElement("script");

    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;

    document.body.appendChild(script);
  });

  return instagramScriptPromise;
}