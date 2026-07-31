"use client";

import { useEffect, useRef } from "react";

const COUNTS = [4, 6, 6, 3];
const FRACTIONS = [0.1, 0.37, 0.64, 0.9];

function readToken(name, fallback) {
  if (typeof window === "undefined") return fallback;
  const v = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  return v || fallback;
}

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  const n = parseInt(
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h,
    16
  );
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export default function NeuralAnchor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ember = hexToRgb(readToken("--color-ember", "#E8622A"));
    const soft = hexToRgb(readToken("--color-ember-soft", "#FF9A5C"));
    const rgba = (c, a) => `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${a})`;

    let width = 0;
    let height = 0;
    let layers = [];
    let edges = [];
    let pulses = [];
    let pointer = { x: -999, y: -999 };
    let raf = null;
    let timer = null;

    function build() {
      layers = COUNTS.map((count, l) => {
        const gap = Math.min(46, (height - 70) / count);
        return Array.from({ length: count }, (_, i) => ({
          x: FRACTIONS[l] * width,
          y: height / 2 + (i - (count - 1) / 2) * gap,
          a: 0,
          layer: l,
        }));
      });

      edges = [];
      for (let l = 0; l < layers.length - 1; l++) {
        for (const from of layers[l]) {
          for (const to of layers[l + 1]) {
            edges.push({ from, to, w: Math.random() * 2 - 1 });
          }
        }
      }
    }

    function resize() {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
      if (reduced) drawStatic();
    }

    function fire(node, strength) {
      node.a = Math.min(1.4, node.a + strength);
      if (node.layer >= layers.length - 1) return;
      for (const edge of edges) {
        if (edge.from !== node) continue;
        const s = strength * Math.abs(edge.w);
        if (s > 0.05) pulses.push({ edge, t: 0, s });
      }
    }

    function drawEdges() {
      for (const edge of edges) {
        ctx.strokeStyle = `rgba(140, 132, 126, ${
          0.05 + Math.abs(edge.w) * 0.09
        })`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(edge.from.x, edge.from.y);
        ctx.lineTo(edge.to.x, edge.to.y);
        ctx.stroke();
      }
    }

    function drawNode(node) {
      const v = Math.min(1, node.a);
      const r = 3.4 + v * 5.2;

      ctx.fillStyle = "#161616";
      ctx.beginPath();
      ctx.arc(node.x, node.y, r + 3, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = "rgba(110, 106, 100, 0.6)";
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
      ctx.stroke();

      if (v > 0.015) {
        ctx.fillStyle = rgba(ember, v * 0.3);
        ctx.beginPath();
        ctx.arc(node.x, node.y, r + 5.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = rgba(ember, Math.min(1, v * 1.15));
        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = rgba(soft, Math.min(1, v * 0.95));
        ctx.beginPath();
        ctx.arc(node.x, node.y, r * 0.42, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function drawStatic() {
      ctx.clearRect(0, 0, width, height);
      drawEdges();
      layers.forEach((layer, l) =>
        layer.forEach((node, i) => {
          node.a = (l + i) % 3 === 0 ? 0.55 : 0;
          drawNode(node);
        })
      );
    }

    function frame() {
      ctx.clearRect(0, 0, width, height);
      drawEdges();

      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p];
        pulse.t += 0.014;

        if (pulse.t >= 1) {
          fire(pulse.edge.to, pulse.s * 0.86);
          pulses.splice(p, 1);
          continue;
        }

        const { from, to } = pulse.edge;
        const px = from.x + (to.x - from.x) * pulse.t;
        const py = from.y + (to.y - from.y) * pulse.t;
        const tail = Math.max(0, pulse.t - 0.22);
        const bx = from.x + (to.x - from.x) * tail;
        const by = from.y + (to.y - from.y) * tail;

        ctx.strokeStyle = rgba(ember, Math.min(1, pulse.s * 2.4));
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(bx, by);
        ctx.lineTo(px, py);
        ctx.stroke();

        ctx.fillStyle = rgba(soft, Math.min(1, pulse.s * 3));
        ctx.beginPath();
        ctx.arc(px, py, 2.4, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const layer of layers) {
        for (const node of layer) {
          node.a *= 0.981;
          drawNode(node);
        }
      }

      for (const node of layers[0]) {
        const d = Math.hypot(pointer.x - node.x, pointer.y - node.y);
        if (d < 28 && node.a < 0.3) fire(node, 0.7);
      }

      raf = requestAnimationFrame(frame);
    }

    function onMove(e) {
      const rect = canvas.getBoundingClientRect();
      pointer = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }

    function onLeave() {
      pointer = { x: -999, y: -999 };
    }

    function onClick(e) {
      const rect = canvas.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      for (const node of layers[0]) {
        if (Math.hypot(cx - node.x, cy - node.y) < 32) fire(node, 1.2);
      }
    }

    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    if (!reduced) {
      canvas.addEventListener("pointermove", onMove);
      canvas.addEventListener("pointerleave", onLeave);
      canvas.addEventListener("click", onClick);
      timer = setInterval(() => {
        const first = layers[0];
        fire(first[Math.floor(Math.random() * first.length)], 0.5);
      }, 1700);
      frame();
    }

    return () => {
      observer.disconnect();
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
      canvas.removeEventListener("click", onClick);
      if (raf) cancelAnimationFrame(raf);
      if (timer) clearInterval(timer);
    };
  }, []);

  return (
    <div className="relative aspect-square w-full max-w-[480px]">
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        aria-hidden="true"
      />
    </div>
  );
}