/* Canvas utilities — DPR-aware resize, theme color helpers */

export function getCanvasLogicalSize(canvas: HTMLCanvasElement): { w: number; h: number } {
  const parent = canvas.parentElement;
  if (!parent) return { w: 300, h: 200 };
  const rect = parent.getBoundingClientRect();
  return { w: rect.width, h: rect.height };
}

export function getThemeColor(varName: string): string {
  const pg = document.querySelector('.pg');
  if (!pg) return '';
  return getComputedStyle(pg).getPropertyValue(varName).trim();
}

export function resizeCanvas(canvas: HTMLCanvasElement) {
  const { w, h } = getCanvasLogicalSize(canvas);
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.round(w * dpr);
  canvas.height = Math.round(h * dpr);
  canvas.style.width = w + 'px';
  canvas.style.height = h + 'px';
  const ctx = canvas.getContext('2d');
  if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}