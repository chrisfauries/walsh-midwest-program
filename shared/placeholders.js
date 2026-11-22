/*
 * Generated placeholder imagery (no external files needed).
 * Every draft calls these when an entry in program-data.js has no `photo`.
 */
(function () {
  const U = window.PROGRAM_UTIL;
  const enc = svg => "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);

  const DEFAULT = { bg1: "#1b432d", bg2: "#0d2115", fg: "#fbbf24", body: "#0d2115" };

  // pick a slightly varied pair of tones per name so a grid of avatars isn't flat
  function tones(name, pal) {
    const h = U.hash(name);
    const shift = (h % 7) - 3;
    return { ...pal, rot: (h % 360), shift };
  }

  /** Head-and-shoulders silhouette with initials. Square; scales to any size. */
  function portrait(name, pal = DEFAULT, opts = {}) {
    const t = tones(name, pal);
    const id = "g" + (U.hash(name) % 100000);
    const initials = U.initials(name);
    const showInitials = opts.initials !== false;
    return enc(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <defs>
        <linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1" gradientTransform="rotate(${t.shift * 6} .5 .5)">
          <stop offset="0" stop-color="${pal.bg1}"/><stop offset="1" stop-color="${pal.bg2}"/>
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="url(#${id})"/>
      <g fill="${pal.body}" opacity=".55">
        <circle cx="100" cy="84" r="38"/>
        <path d="M30 200c4-46 34-72 70-72s66 26 70 72z"/>
      </g>
      ${showInitials ? `<text x="100" y="${opts.initialsY || 96}" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="${opts.fontSize || 34}" font-weight="600" letter-spacing="2" fill="${pal.fg}">${initials}</text>` : ""}
    </svg>`);
  }

  /** Flat initials badge (no silhouette). */
  function initialsBadge(name, pal = DEFAULT) {
    return enc(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect width="100" height="100" fill="${pal.bg1}"/>
      <text x="50" y="62" text-anchor="middle" font-family="system-ui, sans-serif" font-size="34" font-weight="700" fill="${pal.fg}">${U.initials(name)}</text>
    </svg>`);
  }

  /** Full-band stage scene. Returns a data URI (landscape 16:10). */
  function bandPhoto(pal = {}) {
    const p = { sky1: "#183b28", sky2: "#06120b", stage: "#2a2410", accent: "#fbbf24", figure: "#050a07", head: "#3b3226", ...pal };
    let figures = "";
    // 5 curved rows of performers on risers
    const rows = [
      { n: 9, r: 140, y: 470, s: 1.25 },
      { n: 13, r: 220, y: 440, s: 1.1 },
      { n: 17, r: 300, y: 408, s: 0.98 },
      { n: 21, r: 380, y: 378, s: 0.88 },
      { n: 23, r: 460, y: 350, s: 0.8 },
    ];
    let seed = 7;
    const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
    for (let ri = rows.length - 1; ri >= 0; ri--) {
      const row = rows[ri];
      for (let i = 0; i < row.n; i++) {
        const a = Math.PI * (0.12 + 0.76 * (i / (row.n - 1)));
        const x = 500 - Math.cos(a) * row.r * 1.05;
        const y = row.y - Math.sin(a) * 34 + (rnd() - 0.5) * 4;
        const s = row.s * (0.94 + rnd() * 0.1);
        figures += `<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) scale(${s.toFixed(2)})">
          <path d="M-15 48c0-24 7-36 15-36s15 12 15 36z" fill="${p.figure}"/>
          <circle cx="0" cy="0" r="10" fill="${p.head}"/>
          ${rnd() > 0.6 ? `<rect x="7" y="16" width="3" height="${18 + rnd() * 10}" rx="1.5" fill="${p.accent}" opacity=".7" transform="rotate(${-20 + rnd() * 40})"/>` : ""}
        </g>`;
      }
    }
    return enc(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 625" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="spot" cx=".5" cy=".15" r=".9">
          <stop offset="0" stop-color="${p.sky1}"/><stop offset="1" stop-color="${p.sky2}"/>
        </radialGradient>
        <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="${p.stage}"/><stop offset="1" stop-color="#000"/>
        </linearGradient>
        <radialGradient id="glow" cx=".5" cy=".5" r=".5">
          <stop offset="0" stop-color="${p.accent}" stop-opacity=".22"/><stop offset="1" stop-color="${p.accent}" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="1000" height="625" fill="url(#spot)"/>
      <ellipse cx="500" cy="330" rx="520" ry="260" fill="url(#glow)"/>
      <path d="M0 470 Q500 420 1000 470 L1000 625 L0 625z" fill="url(#floor)"/>
      ${[0, 1, 2, 3].map(i => `<path d="M${40 + i * 30} ${520 - i * 30} Q500 ${470 - i * 34} ${960 - i * 30} ${520 - i * 30}" stroke="${p.accent}" stroke-opacity=".12" stroke-width="2" fill="none"/>`).join("")}
      ${figures}
      <g transform="translate(500 548)"><path d="M-16 60c0-28 8-42 16-42s16 14 16 42z" fill="${p.figure}"/><circle cx="0" cy="4" r="11" fill="${p.head}"/></g>
      <g font-family="system-ui, sans-serif" fill="#fff" fill-opacity=".55" text-anchor="middle">
        <text x="500" y="70" font-size="22" letter-spacing="6">FULL BAND PHOTO</text>
        <text x="500" y="98" font-size="15" letter-spacing="2" fill-opacity=".4">placeholder — replace with group photo</text>
      </g>
    </svg>`);
  }

  /** Resolve an entry's photo, falling back to a generated portrait. */
  function photoFor(entry, pal, opts) {
    if (entry && entry.photo) return /^(https?:|data:|\/)/.test(entry.photo) ? entry.photo : (window.ASSET_ROOT || "../") + entry.photo;
    return portrait(entry.name || entry.composer || "?", pal, opts);
  }

  /** The real band photo if set, else the generated stage scene. */
  function band(pal) {
    const ph = window.PROGRAM.bandPhoto.photo;
    if (ph) return /^(https?:|data:|\/)/.test(ph) ? ph : (window.ASSET_ROOT || "../") + ph;
    return bandPhoto(pal);
  }

  /** The candid (playground) band photo. */
  function candid() {
    const ph = (window.PROGRAM.bandPhotoCandid || {}).photo;
    return ph ? (window.ASSET_ROOT || "../") + ph : "";
  }

  window.PH = { portrait, initialsBadge, bandPhoto, band, candid, photoFor };
})();
