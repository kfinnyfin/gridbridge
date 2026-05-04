/**
 * GridBridge — Tenant & Property Owner Portal
 * ============================================
 * EV charging infrastructure for Berlin apartment buildings.
 *
 * The actual product portal — not a marketing site, not a pitch deck.
 * Tenants reserve chargers, run sessions, manage billing and vehicles.
 * Property owners track building performance, revenue share, maintenance,
 * and compliance across their Berlin portfolio.
 *
 * Design language drawn from the GridBridge deck:
 *   - Dark navy nav/hero (#071014)
 *   - Light surface dashboards (#FAFAF7)
 *   - Restrained green accent (#22C55E for primary, #72E06A for highlights)
 *   - Wide spacing on a 4/8/12/16/24/32/48/64 scale
 *   - Bold tabular numerals, thin uppercase labels
 *
 * Routing
 * -------
 * Real hash router. Supports back/forward/refresh.
 *   #/             public homepage
 *   #/login        auth — login
 *   #/signup       auth — signup
 *   #/tenant/dashboard
 *   #/owner/dashboard
 *
 * Mock data
 * ---------
 * Tenant: Kyle Finberg · VW ID.4 · Kreuzberg Mitte Apartments
 * Owner:  Berlin Urban Living GmbH · 3 Berlin buildings
 * All pricing matches the deck: €35/mo · €0.55/kWh L2 · €0.75/kWh DC ·
 * 20% landlord revenue share on charging activity (subscription retained
 * by GridBridge) · 3×L2 + 1×DC per building.
 *
 * Demo controls
 * -------------
 * The Charging tab includes a "Simulate fault" toggle that arms a
 * controlled error on the next start-session attempt. No random failures.
 */
import React, { useState, useEffect, useCallback, createContext, useContext, useMemo, useRef } from "react";
import {
  Zap, Building2, Users, Euro, TrendingUp,
  CreditCard, User, ChevronRight, Plus, Activity,
  Plug, Wrench, ShieldCheck, FileText, MapPin, Eye, EyeOff, Lock, Mail,
  ArrowRight, AlertCircle, Clock, CheckCircle2, X,
  Car, Calendar, Download, BarChart3, Receipt, ChevronLeft, Menu, LogOut,
  Wifi, Globe, ArrowUpRight, Loader2, Info, AlertTriangle, XCircle,
  Pause, Play, RotateCcw, Battery, Gauge, Settings, Edit3, RefreshCw,
  CalendarClock, Bookmark, BookmarkCheck, ChevronDown
} from "lucide-react";
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from "recharts";

// ============================================================================
// DESIGN TOKENS — drawn directly from the GridBridge deck
// ============================================================================
const T = {
  // Surfaces
  bg: "#FAFAF7",         // main app background (light)
  surface: "#FFFFFF",    // card surface
  surface2: "#F4F5F1",   // subtle panel / hover
  panel: "#EEF3EC",      // soft green-tinged panel
  bgDark: "#071014",     // dark nav / hero
  surfaceDark: "#0E1A1F", // elevated dark surface
  surfaceDark2: "#152229", // dark hover

  // Borders
  border: "#E2E6DC",
  borderStrong: "#D1D7CA",
  borderDark: "#1A2A33",
  borderDarkStrong: "#26404C",

  // Text
  text: "#0B1215",
  textDim: "#5F6B6D",
  textFaint: "#7B8788",
  textInvert: "#F5F7F0",
  textInvertDim: "#9BAAA8",
  textInvertFaint: "#5A6F70",

  // Brand
  green: "#22C55E",       // primary action green (restrained)
  greenBright: "#72E06A", // deck highlight green (energy/active)
  greenSoft: "#B8F5B2",
  greenDeep: "#0F7A3A",
  greenBg: "rgba(34, 197, 94, 0.10)",
  greenBgStrong: "rgba(34, 197, 94, 0.18)",
  greenBgDark: "rgba(114, 224, 106, 0.12)",

  // Status
  blue: "#3B82F6",
  blueBg: "rgba(59, 130, 246, 0.10)",
  amber: "#F5B942",
  amberBg: "rgba(245, 185, 66, 0.12)",
  red: "#EF4444",
  redBg: "rgba(239, 68, 68, 0.10)",
};

// Spacing scale — use these values, no arbitrary numbers
const S = { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, xxxl: 64 };

const RADIUS = { sm: 6, md: 8, lg: 12, xl: 16, full: 9999 };

const SHADOW = {
  sm: "0 1px 2px rgba(11, 18, 21, 0.04), 0 1px 3px rgba(11, 18, 21, 0.03)",
  md: "0 2px 4px rgba(11, 18, 21, 0.04), 0 4px 12px rgba(11, 18, 21, 0.05)",
  lg: "0 4px 8px rgba(11, 18, 21, 0.05), 0 12px 32px rgba(11, 18, 21, 0.08)",
};

// ============================================================================
// GLOBAL STYLES — keyframes, scrollbar, recharts theming, focus rings
// ============================================================================
const GLOBAL_STYLES = `
  * { box-sizing: border-box; }
  html, body, #root { background: ${T.bg}; }

  @keyframes gb-fade-in {
    from { opacity: 0; transform: translateY(6px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes gb-fade-in-slow {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes gb-scale-in {
    from { opacity: 0; transform: scale(0.96); }
    to { opacity: 1; transform: scale(1); }
  }
  @keyframes gb-slide-up {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes gb-slide-down {
    from { opacity: 0; transform: translateY(-8px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes gb-toast-in {
    from { opacity: 0; transform: translateX(20px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes gb-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.55; }
  }
  @keyframes gb-pulse-ring {
    0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.45); }
    100% { box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); }
  }
  @keyframes gb-shimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
  @keyframes gb-spin {
    to { transform: rotate(360deg); }
  }
  @keyframes gb-energy-flow {
    0% { stroke-dashoffset: 24; }
    100% { stroke-dashoffset: 0; }
  }
  @keyframes gb-twinkle {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 0.9; }
  }

  .gb-fade-in { animation: gb-fade-in 350ms cubic-bezier(0.16, 1, 0.3, 1) both; }
  .gb-fade-in-slow { animation: gb-fade-in-slow 600ms cubic-bezier(0.16, 1, 0.3, 1) both; }
  .gb-scale-in { animation: gb-scale-in 220ms cubic-bezier(0.16, 1, 0.3, 1) both; }
  .gb-slide-up { animation: gb-slide-up 400ms cubic-bezier(0.16, 1, 0.3, 1) both; }
  .gb-slide-down { animation: gb-slide-down 220ms cubic-bezier(0.16, 1, 0.3, 1) both; }
  .gb-toast-in { animation: gb-toast-in 280ms cubic-bezier(0.16, 1, 0.3, 1) both; }
  .gb-spin { animation: gb-spin 800ms linear infinite; }
  .gb-pulse-ring { animation: gb-pulse-ring 1.6s ease-out infinite; }

  .gb-d-1 { animation-delay: 60ms; }
  .gb-d-2 { animation-delay: 120ms; }
  .gb-d-3 { animation-delay: 180ms; }
  .gb-d-4 { animation-delay: 240ms; }
  .gb-d-5 { animation-delay: 300ms; }
  .gb-d-6 { animation-delay: 360ms; }

  /* Focus visible — accessibility */
  .gb-focusable:focus-visible {
    outline: 2px solid ${T.green};
    outline-offset: 2px;
  }
  button:focus-visible, a:focus-visible, input:focus-visible {
    outline: 2px solid ${T.green};
    outline-offset: 2px;
  }

  /* Light scrollbar */
  ::-webkit-scrollbar { width: 10px; height: 10px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb {
    background: ${T.borderStrong};
    border-radius: 100px;
    border: 2px solid ${T.bg};
  }
  ::-webkit-scrollbar-thumb:hover { background: #B5BCAB; }

  /* Recharts overrides */
  .recharts-cartesian-axis-tick-value { fill: ${T.textFaint} !important; font-size: 11px; }
  .recharts-cartesian-grid line { stroke: ${T.border} !important; }
  .recharts-tooltip-wrapper { outline: none !important; }
  .recharts-default-tooltip {
    background: ${T.surface} !important;
    border: 1px solid ${T.borderStrong} !important;
    border-radius: 8px !important;
    padding: 10px 12px !important;
    box-shadow: ${SHADOW.md} !important;
  }
  .recharts-tooltip-label { color: ${T.textFaint} !important; font-size: 11px !important; margin-bottom: 4px !important; font-weight: 500 !important; letter-spacing: 0.04em !important; text-transform: uppercase !important; }
  .recharts-tooltip-item { color: ${T.text} !important; font-size: 13px !important; font-variant-numeric: tabular-nums !important; }

  /* Mobile utilities */
  @media (max-width: 768px) {
    .gb-hide-mobile { display: none !important; }
  }
  @media (min-width: 769px) {
    .gb-hide-desktop { display: none !important; }
  }
`;

// ============================================================================
// GRIDBRIDGE DRIVE GAME HTML — embedded as iframe srcDoc so the landing page remains unchanged
// ============================================================================
const GRIDBRIDGE_DRIVE_GAME_HTML = "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>GridBridge Drive \u00b7 Hero Demo</title>\n\n  <!--\n    THREE.JS LOADING STRATEGY\n    \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n    We try THREE CDN sources in order. If all fail (e.g. no internet, file:// protocol),\n    the game still runs with a procedural fallback car.\n    Import order: importmap \u2192 module script does the actual game.\n  -->\n  <script type=\"importmap\">\n  {\n    \"imports\": {\n      \"three\":          \"https://cdn.jsdelivr.net/npm/three@0.161.0/build/three.module.js\",\n      \"three/addons/\":  \"https://cdn.jsdelivr.net/npm/three@0.161.0/examples/jsm/\"\n    }\n  }\n  </script>\n\n  <style>\n    :root {\n      --gb-bg: #050b09;\n      --gb-bg-2: #0a1714;\n      --gb-card: rgba(6, 16, 13, 0.55);\n      --gb-card-strong: rgba(8, 22, 18, 0.78);\n      --gb-border: rgba(140, 250, 150, 0.16);\n      --gb-border-strong: rgba(140, 250, 150, 0.32);\n      --gb-green: #6cf073;\n      --gb-green-2: #b3ffa3;\n      --gb-cyan: #8ef4ff;\n      --gb-white: #f4fff4;\n      --gb-muted: rgba(244, 255, 244, 0.62);\n      --gb-faint: rgba(244, 255, 244, 0.38);\n      --gb-amber: #ffd166;\n      --gb-red: #ff6b6b;\n      --shadow-green: 0 0 32px rgba(108, 240, 115, 0.22);\n    }\n\n    * { box-sizing: border-box; }\n\n    html, body {\n      width: 100%; height: 100%;\n      margin: 0; overflow: hidden;\n      background: #020604;\n      font-family: 'SF Pro Display', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif;\n      color: var(--gb-white);\n      -webkit-font-smoothing: antialiased;\n    }\n\n    #game { position: fixed; inset: 0; }\n    canvas { display: block; }\n\n    /* \u2500\u2500 Loading screen \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n    #loading {\n      position: fixed; inset: 0; z-index: 100;\n      background: #020604;\n      display: flex; flex-direction: column;\n      align-items: center; justify-content: center;\n      gap: 18px;\n      transition: opacity 600ms ease;\n    }\n    #loading.fade-out { opacity: 0; pointer-events: none; }\n    #loading.hidden { display: none; }\n\n    .loading-badge {\n      width: 72px; height: 72px;\n      border-radius: 22px;\n      background: linear-gradient(135deg, #6cf073, #b3ffa3);\n      display: grid; place-items: center;\n      box-shadow: 0 0 60px rgba(108, 240, 115, 0.5), 0 0 120px rgba(108, 240, 115, 0.18);\n      animation: loadPulse 1.8s ease-in-out infinite;\n    }\n    @keyframes loadPulse {\n      0%, 100% { box-shadow: 0 0 60px rgba(108, 240, 115, 0.5), 0 0 120px rgba(108, 240, 115, 0.18); }\n      50% { box-shadow: 0 0 80px rgba(108, 240, 115, 0.75), 0 0 160px rgba(108, 240, 115, 0.28); }\n    }\n    .loading-badge svg { width: 38px; height: 38px; }\n\n    .loading-title {\n      font-size: 18px; font-weight: 800;\n      color: var(--gb-white); letter-spacing: -0.02em;\n    }\n    #loadingLabel {\n      font-size: 12px; font-weight: 600;\n      color: var(--gb-muted); letter-spacing: 0.04em;\n      min-height: 16px;\n    }\n    .loading-bar-track {\n      width: 200px; height: 3px;\n      background: rgba(255,255,255,0.06);\n      border-radius: 999px; overflow: hidden;\n    }\n    #loadingBar {\n      height: 100%;\n      width: 0%;\n      background: linear-gradient(90deg, var(--gb-green), var(--gb-green-2));\n      border-radius: 999px;\n      transition: width 300ms ease;\n      box-shadow: 0 0 12px rgba(108, 240, 115, 0.6);\n    }\n    #loadingSubtext {\n      font-size: 10px; color: var(--gb-faint);\n      letter-spacing: 0.06em;\n    }\n\n    /* \u2500\u2500 Error banner (non-blocking) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n    #errorBanner {\n      position: fixed;\n      top: 12px; left: 50%; transform: translateX(-50%);\n      z-index: 200;\n      max-width: 540px; width: calc(100vw - 32px);\n      padding: 12px 16px;\n      background: rgba(12, 6, 6, 0.88);\n      border: 1px solid rgba(255, 107, 107, 0.38);\n      border-radius: 12px;\n      font-size: 12px; line-height: 1.5;\n      color: #ffbebe;\n      backdrop-filter: blur(16px);\n      display: none;\n    }\n    #errorBanner.visible { display: block; }\n    #errorBanner strong { color: #ff9090; }\n\n    /* \u2500\u2500 HUD \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n    .hud {\n      position: fixed; inset: 0;\n      pointer-events: none;\n      z-index: 10;\n      font-feature-settings: \"ss01\", \"tnum\";\n    }\n\n    .top-left {\n      position: absolute;\n      top: 16px; left: 16px;\n      display: flex; align-items: center; gap: 10px;\n      pointer-events: none;\n    }\n    .brand {\n      display: flex; align-items: center; gap: 10px;\n      padding: 9px 13px 9px 11px;\n      background: var(--gb-card);\n      border: 1px solid var(--gb-border);\n      backdrop-filter: blur(16px);\n      -webkit-backdrop-filter: blur(16px);\n      border-radius: 14px;\n      box-shadow: 0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04);\n    }\n    .brand-mark {\n      width: 22px; height: 22px;\n      border-radius: 7px;\n      display: grid; place-items: center;\n      background: linear-gradient(135deg, var(--gb-green), var(--gb-green-2));\n      box-shadow: 0 0 14px rgba(108, 240, 115, 0.55);\n    }\n    .brand-mark svg { width: 13px; height: 13px; }\n    .brand-name { font-size: 12px; font-weight: 800; letter-spacing: 0.04em; color: var(--gb-white); }\n    .brand-sub {\n      font-size: 9.5px; font-weight: 700; letter-spacing: 0.14em;\n      text-transform: uppercase; color: var(--gb-green-2); opacity: 0.85; margin-top: 1px;\n    }\n    .mission {\n      display: flex; align-items: center; gap: 9px;\n      padding: 9px 14px;\n      background: var(--gb-card);\n      border: 1px solid var(--gb-border);\n      backdrop-filter: blur(16px);\n      -webkit-backdrop-filter: blur(16px);\n      border-radius: 14px;\n      box-shadow: 0 8px 32px rgba(0,0,0,0.35);\n      max-width: 360px;\n    }\n    .pulse-dot {\n      width: 7px; height: 7px; border-radius: 999px;\n      background: var(--gb-green); box-shadow: 0 0 12px rgba(108, 240, 115, 0.95);\n      animation: pulse 1.6s ease-in-out infinite; flex-shrink: 0;\n    }\n    .pulse-dot.amber { background: var(--gb-amber); box-shadow: 0 0 12px rgba(255, 209, 102, 0.9); }\n    .pulse-dot.cyan  { background: var(--gb-cyan);  box-shadow: 0 0 12px rgba(142, 244, 255, 0.9); }\n    .mission-text {\n      font-size: 12.5px; font-weight: 600; letter-spacing: -0.005em;\n      color: var(--gb-white); line-height: 1.3;\n      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\n    }\n\n    .top-right {\n      position: absolute; top: 16px; right: 16px;\n      display: flex; gap: 8px; pointer-events: none;\n    }\n    .metric-chip {\n      padding: 9px 13px;\n      background: var(--gb-card); border: 1px solid var(--gb-border);\n      backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);\n      border-radius: 14px; min-width: 76px;\n      box-shadow: 0 8px 32px rgba(0,0,0,0.35);\n    }\n    .metric-label {\n      font-size: 9px; font-weight: 800; letter-spacing: 0.14em;\n      text-transform: uppercase; color: var(--gb-faint); margin-bottom: 2px;\n    }\n    .metric-value {\n      font-size: 16px; font-weight: 800; letter-spacing: -0.02em;\n      color: var(--gb-white); line-height: 1.05;\n    }\n    .metric-value .unit {\n      font-size: 10px; font-weight: 700; color: var(--gb-faint);\n      margin-left: 2px; letter-spacing: 0;\n    }\n    .metric-bar {\n      margin-top: 5px; height: 3px;\n      background: rgba(255,255,255,0.06); border-radius: 999px; overflow: hidden;\n    }\n    .metric-bar > div {\n      height: 100%;\n      background: linear-gradient(90deg, var(--gb-green), var(--gb-green-2));\n      transition: width 220ms ease;\n      box-shadow: 0 0 10px rgba(108, 240, 115, 0.5);\n    }\n    .metric-bar.cyan > div {\n      background: linear-gradient(90deg, var(--gb-cyan), #b9faff);\n      box-shadow: 0 0 10px rgba(142, 244, 255, 0.5);\n    }\n\n    .bottom-right {\n      position: absolute; right: 16px; bottom: 16px;\n      display: flex; flex-direction: column; gap: 8px;\n      align-items: flex-end; pointer-events: auto;\n    }\n    .cam-card {\n      display: flex; align-items: center; gap: 8px;\n      padding: 8px 11px 8px 9px;\n      background: var(--gb-card); border: 1px solid var(--gb-border);\n      backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);\n      border-radius: 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.35);\n    }\n    .cam-icon {\n      width: 22px; height: 22px; border-radius: 7px;\n      background: rgba(108, 240, 115, 0.12); border: 1px solid rgba(108, 240, 115, 0.2);\n      display: grid; place-items: center; color: var(--gb-green-2);\n    }\n    .cam-icon svg { width: 12px; height: 12px; }\n    .cam-text { display: flex; flex-direction: column; line-height: 1.05; }\n    .cam-label { font-size: 8.5px; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gb-faint); }\n    .cam-name  { font-size: 12px; font-weight: 700; color: var(--gb-white); letter-spacing: -0.005em; }\n    .cam-key {\n      font-size: 9.5px; font-weight: 800; padding: 3px 6px; border-radius: 6px;\n      background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.08);\n      color: var(--gb-muted); letter-spacing: 0.06em; cursor: pointer;\n      transition: all 150ms ease;\n    }\n    .cam-key:hover { background: rgba(108, 240, 115, 0.12); border-color: rgba(108, 240, 115, 0.28); color: var(--gb-green-2); }\n\n    .controls-toggle {\n      pointer-events: auto; cursor: pointer;\n      display: flex; align-items: center; gap: 6px;\n      padding: 7px 10px;\n      background: var(--gb-card); border: 1px solid var(--gb-border);\n      backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);\n      border-radius: 12px; font-size: 10.5px; font-weight: 700;\n      color: var(--gb-muted); letter-spacing: 0.04em; transition: all 150ms ease;\n    }\n    .controls-toggle:hover { color: var(--gb-white); border-color: var(--gb-border-strong); }\n    .controls-toggle svg { width: 11px; height: 11px; }\n    .help-panel {\n      width: 240px; padding: 11px 12px;\n      background: var(--gb-card-strong); border: 1px solid var(--gb-border);\n      backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);\n      border-radius: 14px; box-shadow: 0 12px 40px rgba(0,0,0,0.5); display: none;\n    }\n    .help-panel.open { display: block; }\n    .help-title { font-size: 9.5px; font-weight: 800; letter-spacing: 0.16em; text-transform: uppercase; color: var(--gb-green-2); margin-bottom: 8px; }\n    .help-row { display: flex; align-items: center; justify-content: space-between; padding: 4px 0; font-size: 11.5px; }\n    .help-row + .help-row { border-top: 1px solid rgba(255,255,255,0.04); }\n    .help-action { color: var(--gb-muted); }\n    .help-keys { display: flex; gap: 3px; }\n    .help-key {\n      display: inline-block; min-width: 19px; padding: 2px 5px;\n      background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);\n      border-radius: 5px; font-size: 9.5px; font-weight: 700;\n      color: var(--gb-white); text-align: center; letter-spacing: 0.04em;\n    }\n\n    .plug-prompt {\n      position: absolute; left: 50%; bottom: 28px;\n      transform: translateX(-50%) translateY(8px);\n      display: flex; align-items: center; gap: 10px;\n      padding: 11px 18px 11px 13px;\n      background: linear-gradient(180deg, rgba(15, 38, 25, 0.9), rgba(8, 22, 14, 0.92));\n      border: 1px solid rgba(108, 240, 115, 0.42);\n      border-radius: 999px;\n      box-shadow: 0 0 0 1px rgba(108, 240, 115, 0.08), 0 18px 50px rgba(108, 240, 115, 0.18), inset 0 1px 0 rgba(255,255,255,0.06);\n      backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);\n      opacity: 0; transition: opacity 220ms ease, transform 280ms cubic-bezier(.2,.8,.2,1);\n      pointer-events: none;\n    }\n    .plug-prompt.visible { opacity: 1; transform: translateX(-50%) translateY(0); }\n    .plug-icon {\n      width: 24px; height: 24px; border-radius: 8px; display: grid; place-items: center;\n      background: rgba(108, 240, 115, 0.18); border: 1px solid rgba(108, 240, 115, 0.4);\n      color: var(--gb-green-2); animation: glow 1.4s ease-in-out infinite;\n    }\n    .plug-icon svg { width: 13px; height: 13px; }\n    .plug-text { font-size: 13px; font-weight: 700; color: var(--gb-white); letter-spacing: -0.005em; }\n    .plug-text strong {\n      color: var(--gb-green-2); font-weight: 800; padding: 2px 6px; margin: 0 1px;\n      background: rgba(108, 240, 115, 0.12); border: 1px solid rgba(108, 240, 115, 0.28);\n      border-radius: 5px; font-size: 11px; letter-spacing: 0.04em;\n    }\n\n    .plug-meter {\n      position: absolute; bottom: 72px; left: 50%; transform: translateX(-50%);\n      width: 220px; padding: 10px 14px;\n      background: var(--gb-card-strong); border: 1px solid var(--gb-border);\n      backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border-radius: 12px;\n      opacity: 0; transition: opacity 200ms ease; pointer-events: none;\n    }\n    .plug-meter.visible { opacity: 1; }\n    .plug-meter-row { display: flex; justify-content: space-between; font-size: 10px; font-weight: 700; color: var(--gb-muted); margin-bottom: 6px; letter-spacing: 0.06em; text-transform: uppercase; }\n    .plug-fill-track { height: 4px; background: rgba(255,255,255,0.06); border-radius: 999px; overflow: hidden; }\n    .plug-fill { height: 100%; width: 0%; background: linear-gradient(90deg, var(--gb-green), var(--gb-green-2)); border-radius: 999px; box-shadow: 0 0 10px rgba(108, 240, 115, 0.6); transition: width 100ms linear; }\n\n    .charging-status {\n      position: absolute; bottom: 24px; left: 50%; transform: translateX(-50%);\n      display: flex; align-items: center; gap: 12px;\n      padding: 10px 16px 10px 12px;\n      background: linear-gradient(180deg, rgba(4, 22, 13, 0.92), rgba(2, 12, 7, 0.94));\n      border: 1px solid rgba(108, 240, 115, 0.32); border-radius: 14px;\n      box-shadow: 0 8px 40px rgba(108, 240, 115, 0.12);\n      backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);\n      opacity: 0; pointer-events: none; transition: opacity 250ms ease;\n    }\n    .charging-status.visible { opacity: 1; pointer-events: auto; }\n    .charging-icon { color: var(--gb-green); animation: chargePulse 0.9s ease-in-out infinite; }\n    .charging-icon svg { width: 16px; height: 16px; }\n    @keyframes chargePulse { 0%,100% { opacity: 1; } 50% { opacity: 0.5; } }\n    .charging-info { display: flex; flex-direction: column; }\n    .charging-label { font-size: 9.5px; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gb-green-2); }\n    .charging-detail { font-size: 12px; font-weight: 600; color: var(--gb-muted); }\n    .charging-btn {\n      pointer-events: auto; cursor: pointer;\n      padding: 5px 11px; border-radius: 8px; font-size: 10px; font-weight: 700;\n      color: var(--gb-muted); background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);\n      letter-spacing: 0.06em; transition: all 150ms ease;\n    }\n    .charging-btn:hover { background: rgba(108, 240, 115, 0.12); border-color: rgba(108, 240, 115, 0.28); color: var(--gb-green-2); }\n\n    .toast {\n      position: absolute; bottom: 108px; left: 50%; transform: translateX(-50%) translateY(6px);\n      padding: 8px 16px;\n      background: var(--gb-card-strong); border: 1px solid var(--gb-border);\n      backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);\n      border-radius: 999px; font-size: 12px; font-weight: 600;\n      color: var(--gb-white); white-space: nowrap;\n      opacity: 0; transition: opacity 200ms ease, transform 220ms ease; pointer-events: none;\n    }\n    .toast.visible { opacity: 1; transform: translateX(-50%) translateY(0); }\n\n    .reverse-guides {\n      position: absolute; inset: 0;\n      display: flex; align-items: flex-end; justify-content: center;\n      padding-bottom: 80px;\n      pointer-events: none; opacity: 0; transition: opacity 300ms ease;\n    }\n    .reverse-guides.visible { opacity: 1; }\n    .reverse-guides svg { position: absolute; inset: 0; width: 100%; height: 100%; }\n    .reverse-badge {\n      position: absolute; top: 18px; left: 50%; transform: translateX(-50%);\n      padding: 4px 10px; border-radius: 6px;\n      background: rgba(255, 82, 82, 0.18); border: 1px solid rgba(255, 82, 82, 0.38);\n      font-size: 9.5px; font-weight: 800; letter-spacing: 0.14em;\n      color: #ff9090;\n    }\n\n    .mobile-controls {\n      position: absolute; bottom: 16px; left: 16px;\n      display: none; flex-direction: column; gap: 8px;\n      pointer-events: auto;\n    }\n    @media (hover: none) { .mobile-controls { display: flex; } }\n    .pad {\n      display: grid; grid-template-columns: 40px 40px 40px;\n      grid-template-rows: 40px 40px; gap: 4px;\n    }\n    .pad button, .plug-mobile, .cam-mobile {\n      border-radius: 10px; border: none; cursor: pointer;\n      background: rgba(10, 22, 18, 0.7); border: 1px solid var(--gb-border);\n      color: var(--gb-white); font-size: 16px; font-weight: 700;\n      touch-action: none; user-select: none;\n    }\n    .plug-mobile { padding: 10px 18px; font-size: 11px; letter-spacing: 0.08em; color: var(--gb-green-2); border-color: rgba(108, 240, 115, 0.28); }\n    .cam-mobile  { padding: 10px 14px; font-size: 11px; letter-spacing: 0.08em; }\n\n    @keyframes pulse {\n      0%, 100% { opacity: 1; transform: scale(1); }\n      50%       { opacity: 0.65; transform: scale(0.88); }\n    }\n    @keyframes glow {\n      0%, 100% { box-shadow: 0 0 0 0 rgba(108, 240, 115, 0.4); }\n      50%       { box-shadow: 0 0 0 6px rgba(108, 240, 115, 0); }\n    }\n  </style>\n</head>\n<body>\n  <!-- Game canvas container -->\n  <div id=\"game\"></div>\n\n  <!-- Error banner (non-blocking) -->\n  <div id=\"errorBanner\"></div>\n\n  <!-- Loading screen -->\n  <div id=\"loading\">\n    <div class=\"loading-badge\">\n      <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#020604\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n        <polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"></polygon>\n      </svg>\n    </div>\n    <div class=\"loading-title\">GridBridge Drive</div>\n    <div id=\"loadingLabel\">Starting engine\u2026</div>\n    <div class=\"loading-bar-track\"><div id=\"loadingBar\"></div></div>\n    <div id=\"loadingSubtext\">EV Parking Simulator</div>\n  </div>\n\n  <!-- HUD -->\n  <div class=\"hud\" aria-hidden=\"true\">\n    <div class=\"top-left\">\n      <div class=\"brand\">\n        <div class=\"brand-mark\">\n          <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#020604\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n            <polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"></polygon>\n          </svg>\n        </div>\n        <div>\n          <div class=\"brand-name\">GridBridge</div>\n          <div class=\"brand-sub\">Drive</div>\n        </div>\n      </div>\n      <div class=\"mission\">\n        <div class=\"pulse-dot\" id=\"missionDot\"></div>\n        <div class=\"mission-text\" id=\"missionText\">Drive into an open EV bay</div>\n      </div>\n    </div>\n\n    <div class=\"top-right\">\n      <div class=\"metric-chip\">\n        <div class=\"metric-label\">Speed</div>\n        <div class=\"metric-value\"><span id=\"speedText\">0</span><span class=\"unit\">km/h</span></div>\n      </div>\n      <div class=\"metric-chip\">\n        <div class=\"metric-label\">Align</div>\n        <div class=\"metric-value\"><span id=\"alignmentText\">0</span><span class=\"unit\">%</span></div>\n        <div class=\"metric-bar\"><div id=\"alignBar\" style=\"width:0%\"></div></div>\n      </div>\n      <div class=\"metric-chip\">\n        <div class=\"metric-label\">Battery</div>\n        <div class=\"metric-value\"><span id=\"batteryText\">64</span><span class=\"unit\">%</span></div>\n        <div class=\"metric-bar cyan\"><div id=\"batteryBar\" style=\"width:64%\"></div></div>\n      </div>\n    </div>\n\n    <div class=\"bottom-right\">\n      <div class=\"help-panel\" id=\"helpPanel\">\n        <div class=\"help-title\">Controls</div>\n        <div class=\"help-row\"><span class=\"help-action\">Drive</span><span class=\"help-keys\"><span class=\"help-key\">W</span><span class=\"help-key\">A</span><span class=\"help-key\">S</span><span class=\"help-key\">D</span></span></div>\n        <div class=\"help-row\"><span class=\"help-action\">Plug in</span><span class=\"help-keys\"><span class=\"help-key\">E</span><span class=\"help-key\">\u2423</span></span></div>\n        <div class=\"help-row\"><span class=\"help-action\">Camera</span><span class=\"help-keys\"><span class=\"help-key\">C</span></span></div>\n        <div class=\"help-row\"><span class=\"help-action\">Reset</span><span class=\"help-keys\"><span class=\"help-key\">R</span></span></div>\n      </div>\n      <div class=\"cam-card\">\n        <div class=\"cam-icon\">\n          <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n            <path d=\"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z\"></path>\n            <circle cx=\"12\" cy=\"13\" r=\"4\"></circle>\n          </svg>\n        </div>\n        <div class=\"cam-text\">\n          <span class=\"cam-label\">Camera</span>\n          <span class=\"cam-name\" id=\"camName\">Chase</span>\n        </div>\n        <button class=\"cam-key\" id=\"camCycle\" title=\"Cycle camera (C)\">C \u21bb</button>\n      </div>\n      <div class=\"controls-toggle\" id=\"helpToggle\">\n        <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n          <circle cx=\"12\" cy=\"12\" r=\"10\"></circle>\n          <path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\"></path>\n          <line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"></line>\n        </svg>\n        Controls\n      </div>\n    </div>\n\n    <!-- Reverse guide overlay -->\n    <div class=\"reverse-guides\" id=\"reverseGuides\">\n      <div class=\"reverse-badge\">\u25cf REVERSE</div>\n      <svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\">\n        <defs>\n          <linearGradient id=\"guideGrad\" x1=\"0%\" y1=\"100%\" x2=\"0%\" y2=\"0%\">\n            <stop offset=\"0%\" stop-color=\"#ff5252\" stop-opacity=\"0.8\" />\n            <stop offset=\"60%\" stop-color=\"#ffd166\" stop-opacity=\"0.55\" />\n            <stop offset=\"100%\" stop-color=\"#6cf073\" stop-opacity=\"0.35\" />\n          </linearGradient>\n          <linearGradient id=\"guideGradCenter\" x1=\"0%\" y1=\"100%\" x2=\"0%\" y2=\"0%\">\n            <stop offset=\"0%\" stop-color=\"#6cf073\" stop-opacity=\"0.55\" />\n            <stop offset=\"100%\" stop-color=\"#6cf073\" stop-opacity=\"0.05\" />\n          </linearGradient>\n        </defs>\n        <polyline points=\"22,100 38,42 50,18\" fill=\"none\" stroke=\"url(#guideGrad)\" stroke-width=\"0.45\" stroke-linecap=\"round\" />\n        <polyline points=\"78,100 62,42 50,18\" fill=\"none\" stroke=\"url(#guideGrad)\" stroke-width=\"0.45\" stroke-linecap=\"round\" />\n        <polyline points=\"50,100 50,28\" fill=\"none\" stroke=\"url(#guideGradCenter)\" stroke-width=\"0.25\" stroke-linecap=\"round\" stroke-dasharray=\"1.5,1.5\" />\n        <line x1=\"28\" y1=\"80\" x2=\"72\" y2=\"80\" stroke=\"#ff5252\" stroke-width=\"0.35\" stroke-opacity=\"0.7\" />\n        <line x1=\"32\" y1=\"65\" x2=\"68\" y2=\"65\" stroke=\"#ffd166\" stroke-width=\"0.3\" stroke-opacity=\"0.7\" />\n        <line x1=\"38\" y1=\"50\" x2=\"62\" y2=\"50\" stroke=\"#6cf073\" stroke-width=\"0.25\" stroke-opacity=\"0.7\" />\n      </svg>\n    </div>\n\n    <!-- Plug prompt -->\n    <div class=\"plug-prompt\" id=\"plugPrompt\">\n      <div class=\"plug-icon\">\n        <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n          <path d=\"M9 2v6\"></path><path d=\"M15 2v6\"></path>\n          <path d=\"M5 8h14v3a4 4 0 0 1-4 4h-1v3a3 3 0 0 1-6 0v-3H9a4 4 0 0 1-4-4z\"></path>\n        </svg>\n      </div>\n      <div class=\"plug-text\">Press <strong>E</strong> to connect charger</div>\n    </div>\n\n    <!-- Plug meter -->\n    <div class=\"plug-meter\" id=\"plugMeter\">\n      <div class=\"plug-meter-row\"><span>Connecting</span><span id=\"plugPercent\">0%</span></div>\n      <div class=\"plug-fill-track\"><div class=\"plug-fill\" id=\"plugFill\"></div></div>\n    </div>\n\n    <!-- Charging status -->\n    <div class=\"charging-status\" id=\"chargingStatus\">\n      <div class=\"charging-icon\">\n        <svg viewBox=\"0 0 24 24\" fill=\"currentColor\">\n          <polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"></polygon>\n        </svg>\n      </div>\n      <div class=\"charging-info\">\n        <span class=\"charging-label\">Charging</span>\n        <span class=\"charging-detail\" id=\"chargingDetail\">A1 \u00b7 11 kW</span>\n      </div>\n      <div class=\"charging-actions\">\n        <button class=\"charging-btn\" id=\"resetBtn\">Try again</button>\n      </div>\n    </div>\n\n    <!-- Toast -->\n    <div class=\"toast\" id=\"toast\">Line up inside a glowing EV bay first.</div>\n  </div>\n\n  <!-- Mobile controls -->\n  <div class=\"mobile-controls\" aria-label=\"Mobile driving controls\">\n    <div class=\"pad\">\n      <span></span><button data-key=\"w\">\u2191</button><span></span>\n      <button data-key=\"a\">\u2190</button><button data-key=\"s\">\u2193</button><button data-key=\"d\">\u2192</button>\n    </div>\n    <button class=\"plug-mobile\" data-key=\"e\">\u26a1 PLUG</button>\n    <button class=\"cam-mobile\" data-key=\"c\">\ud83d\udcf7 CAM</button>\n  </div>\n\n  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n       GAME SCRIPT\n       Uses local vendor files (vendor/three.module.js, vendor/GLTFLoader.js).\n       If those are missing (running from file:// or vendor/ not downloaded),\n       falls back to inline CDN imports with a graceful error message.\n  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n  <script type=\"module\">\n\n    // \u2500\u2500\u2500 Error reporting \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n    const errorBanner = document.getElementById('errorBanner');\n    function showError(msg) {\n      errorBanner.innerHTML = msg;\n      errorBanner.classList.add('visible');\n    }\n    function hideError() { errorBanner.classList.remove('visible'); }\n\n    // \u2500\u2500\u2500 file:// protocol detection \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n    if (location.protocol === 'file:') {\n      showError('<strong>Local preview notice.</strong> For the full standalone package use a local server. This embedded artifact uses the built-in demo vehicle.');\n    }\n\n    // \u2500\u2500\u2500 Load Three.js (vendor-first, CDN fallback) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n    let THREE, GLTFLoader, DRACOLoader;\n\n    async function loadThreeVendor() {\n      // Try local vendor files first (importmap points here)\n      const threeUrl   = './vendor/three.module.js';\n      const gltfUrl    = './vendor/GLTFLoader.js';\n      const dracoUrl   = './vendor/DRACOLoader.js';\n\n      const mod = await import(threeUrl);\n      THREE = mod;\n      const gltf = await import(gltfUrl);\n      GLTFLoader = gltf.GLTFLoader;\n      // DRACOLoader is optional \u2013 don't fail if it's absent\n      try {\n        const draco = await import(dracoUrl);\n        DRACOLoader = draco.DRACOLoader;\n      } catch(_) { DRACOLoader = null; }\n    }\n\n    async function loadThreeCDN() {\n      // Multiple CDN attempts in priority order\n      const cdns = [\n        'https://cdn.jsdelivr.net/npm/three@0.161.0/build/three.module.js',\n        'https://esm.run/three@0.161.0',\n        'https://ga.jspm.io/npm:three@0.161.0/build/three.module.js',\n      ];\n      const gltfCdns = [\n        'https://cdn.jsdelivr.net/npm/three@0.161.0/examples/jsm/loaders/GLTFLoader.js',\n        'https://esm.run/three@0.161.0/examples/jsm/loaders/GLTFLoader.js',\n      ];\n\n      let threeLoaded = false;\n      for (const url of cdns) {\n        try {\n          const mod = await import(url);\n          THREE = mod;\n          threeLoaded = true;\n          console.log('Three.js loaded from CDN:', url);\n          break;\n        } catch(e) { console.warn('CDN failed:', url); }\n      }\n      if (!threeLoaded) throw new Error('All Three.js CDN sources failed.');\n\n      let gltfLoaded = false;\n      for (const url of gltfCdns) {\n        try {\n          const mod = await import(url);\n          GLTFLoader = mod.GLTFLoader;\n          gltfLoaded = true;\n          break;\n        } catch(e) { console.warn('GLTFLoader CDN failed:', url); }\n      }\n      if (!gltfLoaded) {\n        GLTFLoader = null; // game will run without GLB, that's fine\n        console.warn('GLTFLoader unavailable \u2013 will use fallback car only');\n      }\n    }\n\n    async function loadThree() {\n      setLoadingLabel('Loading Three.js\u2026');\n      setLoadingProgress(10);\n      try {\n        await loadThreeVendor();\n        console.log('Three.js loaded from vendor files.');\n        setLoadingProgress(35);\n      } catch(vendorErr) {\n        console.warn('Vendor Three.js not found, trying CDN\u2026', vendorErr.message);\n        if (location.protocol !== 'file:') {\n          setLoadingLabel('Vendor missing \u2013 trying CDN\u2026');\n          try {\n            await loadThreeCDN();\n            setLoadingProgress(35);\n          } catch(cdnErr) {\n            showError(\n              '<strong>Three.js failed to load.</strong> ' +\n              'Make sure vendor/three.module.js exists (run start_server.py to auto-download it), ' +\n              'or check your internet connection for CDN fallback. ' +\n              'Error: ' + cdnErr.message\n            );\n            hideLoadingScreen();\n            return false;\n          }\n        } else {\n          showError(\n            '<strong>Three.js vendor files not found.</strong> ' +\n            'Run python3 start_server.py \u2013 it will download them automatically. ' +\n            'Do not open index.html by double-clicking.'\n          );\n          hideLoadingScreen();\n          return false;\n        }\n      }\n      return true;\n    }\n\n    // \u2500\u2500\u2500 Loading screen helpers \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n    const loadingEl    = document.getElementById('loading');\n    const loadingLabel = document.getElementById('loadingLabel');\n    const loadingBar   = document.getElementById('loadingBar');\n\n    function setLoadingLabel(t) { if (loadingLabel) loadingLabel.textContent = t; }\n    function setLoadingProgress(pct) { if (loadingBar) loadingBar.style.width = pct + '%'; }\n\n    function hideLoadingScreen() {\n      if (!loadingEl) return;\n      loadingEl.classList.add('fade-out');\n      setTimeout(() => loadingEl.classList.add('hidden'), 650);\n    }\n\n    // \u2500\u2500\u2500 Boot \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n    const threeReady = await loadThree();\n    if (!threeReady) {\n      // Three.js couldn't be loaded at all \u2014 stop here, errors already shown\n    } else {\n      // Three.js is ready \u2014 start game\n      startGame();\n    }\n\n    // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n    // GAME\n    // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n    function startGame() {\n\n    // \u2500\u2500 DOM refs \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n    const app           = document.getElementById('game');\n    const missionText   = document.getElementById('missionText');\n    const missionDot    = document.getElementById('missionDot');\n    const speedText     = document.getElementById('speedText');\n    const alignmentText = document.getElementById('alignmentText');\n    const alignBar      = document.getElementById('alignBar');\n    const batteryText   = document.getElementById('batteryText');\n    const batteryBar    = document.getElementById('batteryBar');\n    const camName       = document.getElementById('camName');\n    const plugPrompt    = document.getElementById('plugPrompt');\n    const plugMeter     = document.getElementById('plugMeter');\n    const plugFill      = document.getElementById('plugFill');\n    const plugPercent   = document.getElementById('plugPercent');\n    const chargingStatus  = document.getElementById('chargingStatus');\n    const chargingDetail  = document.getElementById('chargingDetail');\n    const reverseGuides   = document.getElementById('reverseGuides');\n    const toastEl         = document.getElementById('toast');\n\n    // \u2500\u2500 Palette \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n    const COLORS = {\n      bg: 0x040908, asphalt: 0x0c1311, asphalt2: 0x141d1a,\n      green: 0x6cf073, greenBright: 0xb3ffa3, greenDeep: 0x2a8c45,\n      cyan: 0x8ef4ff, white: 0xf4fff4, amber: 0xffd166, red: 0xff6b6b,\n      line: 0xe6f4dd, darkLine: 0x1a2620, concrete: 0x3d4742,\n      concreteDark: 0x1c2422, building: 0x182721, buildingDark: 0x0a1411,\n      car: 0x9ba4a8, carDark: 0x0e1311, glass: 0x040d0e\n    };\n\n    // \u2500\u2500 State \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n    const state = {\n      keys: new Set(),\n      speed: 0,\n      battery: 64,\n      plugged: false,\n      plugging: false,\n      plugProgress: 0,\n      activeSpot: null,\n      alignment: 0,\n      cameraMode: 'chase',\n      cameraInitialized: false,\n      lastToast: 0,\n      elapsed: 0,\n      chargeTimer: 0,\n      bodyTilt: 0,\n      bodyPitch: 0,\n      modelLoaded: false,\n      modelLoadFailed: false,\n    };\n\n    const CAMERA_MODES  = ['chase','wide','cinematic','top','hood','driver','reverse'];\n    const CAMERA_LABELS = { chase:'Chase', wide:'Wide chase', cinematic:'Cinematic', top:'Top-down', hood:'Hood', driver:'Driver', reverse:'Reverse' };\n\n    // \u2500\u2500 Scene + renderer \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n    const scene = new THREE.Scene();\n    scene.background = new THREE.Color(0x0d1f1a);\n    scene.fog = new THREE.FogExp2(0x0d1f1a, 0.016);\n\n    const camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.08, 280);\n    camera.position.set(0, 8, -22);\n\n    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });\n    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    renderer.shadowMap.enabled = true;\n    renderer.shadowMap.type = THREE.PCFSoftShadowMap;\n    renderer.toneMapping = THREE.ACESFilmicToneMapping;\n    renderer.toneMappingExposure = 2.2;\n    renderer.outputColorSpace = THREE.SRGBColorSpace;\n    app.appendChild(renderer.domElement);\n\n    const clock = new THREE.Clock();\n\n    // \u2500\u2500 Lighting \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n    const hemi = new THREE.HemisphereLight(0xd4f0e8, 0x1a3028, 2.2);\n    scene.add(hemi);\n    const ambient = new THREE.AmbientLight(0x8ab8a8, 1.8);\n    scene.add(ambient);\n    const moon = new THREE.DirectionalLight(0xdce8ff, 2.8);\n    moon.position.set(-22, 32, -16);\n    moon.castShadow = true;\n    moon.shadow.mapSize.set(2048, 2048);\n    moon.shadow.camera.near = 1;\n    moon.shadow.camera.far  = 90;\n    moon.shadow.camera.left = moon.shadow.camera.bottom = -50;\n    moon.shadow.camera.right = moon.shadow.camera.top   = 50;\n    moon.shadow.bias   = -0.0006;\n    moon.shadow.radius = 4;\n    scene.add(moon);\n    const keyLight = new THREE.DirectionalLight(0xffe4c0, 1.8);\n    keyLight.position.set(8, 18, -22);\n    scene.add(keyLight);\n    // Strong fill from front-right to illuminate the car face-on\n    const fillLight = new THREE.DirectionalLight(0xffffff, 1.4);\n    fillLight.position.set(12, 10, -8);\n    scene.add(fillLight);\n    // Under-car fill so the body shape reads clearly from chase cam\n    const carFill = new THREE.PointLight(0xc8e8d8, 3.5, 22, 1.4);\n    carFill.position.set(0, 3, -10);\n    scene.add(carFill);\n    const greenGlow = new THREE.PointLight(COLORS.green, 4.0, 55, 1.6);\n    greenGlow.position.set(0, 6.5, 11);\n    scene.add(greenGlow);\n    const cyanAccent = new THREE.PointLight(COLORS.cyan, 2.2, 42, 1.8);\n    cyanAccent.position.set(18, 5.5, 11);\n    scene.add(cyanAccent);\n    const rimLight = new THREE.PointLight(0xaad4ff, 1.8, 80, 1.4);\n    rimLight.position.set(-22, 14, -28);\n    scene.add(rimLight);\n\n    // \u2500\u2500 Helpers \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n    function createMat(color, options = {}) {\n      return new THREE.MeshStandardMaterial({\n        color,\n        roughness:         options.roughness         ?? 0.55,\n        metalness:         options.metalness         ?? 0.12,\n        emissive:          options.emissive          ?? 0x000000,\n        emissiveIntensity: options.emissiveIntensity ?? 0,\n        transparent:       options.transparent       ?? false,\n        opacity:           options.opacity           ?? 1\n      });\n    }\n\n    function makeAsphaltTexture() {\n      const c = document.createElement('canvas');\n      c.width = c.height = 1024;\n      const ctx = c.getContext('2d');\n      const grad = ctx.createLinearGradient(0, 0, 0, 1024);\n      grad.addColorStop(0, '#1e2e28');\n      grad.addColorStop(0.5, '#243530');\n      grad.addColorStop(1, '#1a2820');\n      ctx.fillStyle = grad;\n      ctx.fillRect(0, 0, 1024, 1024);\n      for (let i = 0; i < 18000; i++) {\n        const shade = 22 + Math.random() * 60;\n        const a = 0.04 + Math.random() * 0.18;\n        const s = 0.4 + Math.random() * 1.8;\n        ctx.fillStyle = `rgba(${shade},${shade+4},${shade},${a})`;\n        ctx.fillRect(Math.random() * 1024, Math.random() * 1024, s, s);\n      }\n      ctx.strokeStyle = 'rgba(160, 220, 180, 0.025)';\n      ctx.lineWidth = 1;\n      for (let i = 0; i < 22; i++) {\n        ctx.beginPath();\n        const y = i * 48 + Math.random() * 12;\n        ctx.moveTo(0, y); ctx.lineTo(1024, y + Math.random() * 8 - 4);\n        ctx.stroke();\n      }\n      // Wet puddle reflections (simple gradient blobs)\n      for (let i = 0; i < 6; i++) {\n        const px = Math.random() * 800 + 112, py = Math.random() * 800 + 112;\n        const rad = ctx.createRadialGradient(px, py, 4, px, py, 60 + Math.random() * 80);\n        rad.addColorStop(0, 'rgba(80, 200, 140, 0.09)');\n        rad.addColorStop(1, 'rgba(80, 200, 140, 0)');\n        ctx.fillStyle = rad;\n        ctx.beginPath();\n        ctx.ellipse(px, py, 60 + Math.random()*60, 20 + Math.random()*20, Math.random()*Math.PI, 0, Math.PI*2);\n        ctx.fill();\n      }\n      const tex = new THREE.CanvasTexture(c);\n      tex.wrapS = tex.wrapT = THREE.RepeatWrapping;\n      tex.repeat.set(6, 6);\n      tex.colorSpace = THREE.SRGBColorSpace;\n      return tex;\n    }\n\n    function createConcreteTexture() {\n      const c = document.createElement('canvas');\n      c.width = c.height = 512;\n      const ctx = c.getContext('2d');\n      ctx.fillStyle = '#1c2422';\n      ctx.fillRect(0, 0, 512, 512);\n      for (let i = 0; i < 5000; i++) {\n        const shade = 28 + Math.random() * 30;\n        ctx.fillStyle = `rgba(${shade},${shade},${shade+2},${0.06 + Math.random()*0.12})`;\n        ctx.fillRect(Math.random()*512, Math.random()*512, 0.5+Math.random()*2, 0.5+Math.random()*2);\n      }\n      const tex = new THREE.CanvasTexture(c);\n      tex.wrapS = tex.wrapT = THREE.RepeatWrapping;\n      tex.repeat.set(4, 4);\n      return tex;\n    }\n\n    const asphaltTex   = makeAsphaltTexture();\n    const concreteTex  = createConcreteTexture();\n    const concreteMat  = new THREE.MeshStandardMaterial({ map: concreteTex, roughness: 0.72, metalness: 0.08, color: 0x2a3532 });\n\n    // \u2500\u2500 Ground \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n    const ground = new THREE.Mesh(\n      new THREE.PlaneGeometry(64, 42),\n      new THREE.MeshStandardMaterial({ map: asphaltTex, roughness: 0.78, metalness: 0.06, color: 0xeaf8ea })\n    );\n    ground.rotation.x = -Math.PI / 2;\n    ground.receiveShadow = true;\n    scene.add(ground);\n\n    // Wet mirror plane (low-opacity reflection effect)\n    const wetGround = new THREE.Mesh(\n      new THREE.PlaneGeometry(64, 42),\n      new THREE.MeshStandardMaterial({ color: 0x2a4038, roughness: 0.08, metalness: 0.0, transparent: true, opacity: 0.28, depthWrite: false })\n    );\n    wetGround.rotation.x = -Math.PI / 2;\n    wetGround.position.y = 0.003;\n    scene.add(wetGround);\n\n    // \u2500\u2500 Line-drawing helpers \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n    const lineMat = new THREE.LineBasicMaterial({ color: COLORS.line, transparent: true, opacity: 0.55 });\n    function makeLine(points, mat = lineMat, y = 0.05) {\n      const v  = points.map(p => new THREE.Vector3(p[0], y, p[1]));\n      const g  = new THREE.BufferGeometry().setFromPoints(v);\n      const ln = new THREE.Line(g, mat);\n      scene.add(ln);\n      return ln;\n    }\n    function makeRect(cx, cz, w, d, mat = lineMat, angle = 0, y = 0.05) {\n      const hw = w/2, hd = d/2;\n      const corners = [[-hw,-hd],[hw,-hd],[hw,hd],[-hw,hd],[-hw,-hd]].map(([x,z]) => {\n        const rx = x*Math.cos(angle) - z*Math.sin(angle);\n        const rz = x*Math.sin(angle) + z*Math.cos(angle);\n        return [cx+rx, cz+rz];\n      });\n      return makeLine(corners, mat, y);\n    }\n\n    const dashMat = new THREE.LineDashedMaterial({ color: 0x6e8278, dashSize:1.4, gapSize:1.2, transparent:true, opacity:0.55 });\n    function makeDashed(pts, mat = dashMat, y = 0.045) {\n      const v = pts.map(p => new THREE.Vector3(p[0], y, p[1]));\n      const g = new THREE.BufferGeometry().setFromPoints(v);\n      const l = new THREE.Line(g, mat);\n      l.computeLineDistances();\n      scene.add(l);\n      return l;\n    }\n    makeDashed([[-32,-2],[32,-2]]);\n    makeDashed([[-32,-14],[32,-14]]);\n\n    function paintArrow(x, z, angle = 0) {\n      const c = document.createElement('canvas');\n      c.width = c.height = 256;\n      const ctx = c.getContext('2d');\n      ctx.clearRect(0,0,256,256);\n      ctx.fillStyle = 'rgba(225, 240, 215, 0.7)';\n      ctx.beginPath();\n      ctx.moveTo(128,30); ctx.lineTo(220,130); ctx.lineTo(170,130);\n      ctx.lineTo(170,226); ctx.lineTo(86,226); ctx.lineTo(86,130); ctx.lineTo(36,130);\n      ctx.closePath(); ctx.fill();\n      const tex = new THREE.CanvasTexture(c);\n      tex.colorSpace = THREE.SRGBColorSpace;\n      const arrow = new THREE.Mesh(\n        new THREE.PlaneGeometry(2.2, 2.2),\n        new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false })\n      );\n      arrow.rotation.x = -Math.PI / 2;\n      arrow.rotation.z = angle;\n      arrow.position.set(x, 0.025, z);\n      scene.add(arrow);\n    }\n    paintArrow(-15,-8,Math.PI);\n    paintArrow(15,-8,Math.PI);\n    paintArrow(0,-8,Math.PI);\n\n    // \u2500\u2500 EV Spots \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n    const spots = [\n      { id:'A1', label:'A1', x:-18, z:8, w:7.2, d:11, angle:0, type:'Level 2', power:11 },\n      { id:'A2', label:'A2', x:-6,  z:8, w:7.2, d:11, angle:0, type:'Level 2', power:11 },\n      { id:'A3', label:'A3', x:6,   z:8, w:7.2, d:11, angle:0, type:'Level 2', power:11 },\n      { id:'F1', label:'F1', x:18,  z:8, w:7.2, d:11, angle:0, type:'DC Fast', power:50 }\n    ];\n\n    const spotObjects   = new Map();\n    const chargerObjects = new Map();\n\n    function makeEvIcon(color = '#b3ffa3') {\n      const c = document.createElement('canvas');\n      c.width = c.height = 256;\n      const ctx = c.getContext('2d');\n      ctx.clearRect(0,0,256,256);\n      ctx.fillStyle = color;\n      ctx.shadowColor = color;\n      ctx.shadowBlur = 18;\n      ctx.beginPath();\n      ctx.moveTo(140,24); ctx.lineTo(58,138); ctx.lineTo(118,138);\n      ctx.lineTo(96,232); ctx.lineTo(198,110); ctx.lineTo(138,110); ctx.lineTo(160,24);\n      ctx.closePath(); ctx.fill();\n      const tex = new THREE.CanvasTexture(c);\n      tex.colorSpace = THREE.SRGBColorSpace;\n      return tex;\n    }\n    const evIconTex     = makeEvIcon('#b3ffa3');\n    const evIconCyanTex = makeEvIcon('#8ef4ff');\n\n    function createTextSprite(text, color = '#b3ffa3', fontSize = 92) {\n      const c = document.createElement('canvas');\n      c.width = 512; c.height = 128;\n      const ctx = c.getContext('2d');\n      ctx.clearRect(0,0,512,128);\n      ctx.fillStyle = color;\n      ctx.font = `800 ${fontSize}px sans-serif`;\n      ctx.textAlign = 'center';\n      ctx.textBaseline = 'middle';\n      ctx.shadowColor = color;\n      ctx.shadowBlur = 14;\n      ctx.fillText(text, 256, 64);\n      const tex = new THREE.CanvasTexture(c);\n      tex.colorSpace = THREE.SRGBColorSpace;\n      const mat = new THREE.SpriteMaterial({ map: tex, transparent: true });\n      const spr = new THREE.Sprite(mat);\n      spr.scale.set(4.2, 1.05, 1);\n      return spr;\n    }\n\n    function createSpot(spot) {\n      const isFast = spot.id === 'F1';\n      const baseColor       = isFast ? COLORS.cyan  : COLORS.green;\n      const baseColorBright = isFast ? '#8ef4ff' : '#b3ffa3';\n      makeRect(spot.x, spot.z, spot.w, spot.d,\n        new THREE.LineBasicMaterial({ color: baseColor, transparent: true, opacity: 0.7 }),\n        spot.angle, 0.04);\n      makeRect(spot.x, spot.z, spot.w-0.4, spot.d-0.4,\n        new THREE.LineBasicMaterial({ color: baseColor, transparent: true, opacity: 0.32 }),\n        spot.angle, 0.044);\n      const fill = new THREE.Mesh(\n        new THREE.PlaneGeometry(spot.w-0.45, spot.d-0.45),\n        new THREE.MeshBasicMaterial({ color: baseColor, transparent: true, opacity: 0.05, depthWrite: false })\n      );\n      fill.position.set(spot.x, 0.035, spot.z);\n      fill.rotation.x = -Math.PI/2;\n      fill.rotation.z = -spot.angle;\n      scene.add(fill);\n      const evIcon = new THREE.Mesh(\n        new THREE.PlaneGeometry(2.2, 2.2),\n        new THREE.MeshBasicMaterial({ map: isFast ? evIconCyanTex : evIconTex, transparent: true, depthWrite: false, opacity: 0.78 })\n      );\n      evIcon.rotation.x = -Math.PI/2;\n      evIcon.position.set(spot.x, 0.05, spot.z+1.5);\n      scene.add(evIcon);\n      const label     = createTextSprite(spot.label, baseColorBright, 92);\n      label.position.set(spot.x, 0.12, spot.z-2.6);\n      label.rotation.x = -Math.PI/2;\n      scene.add(label);\n      const typeLabel = createTextSprite(isFast ? 'FAST' : 'EV', baseColorBright, 50);\n      typeLabel.position.set(spot.x, 0.12, spot.z-4.0);\n      typeLabel.rotation.x = -Math.PI/2;\n      typeLabel.scale.set(2.6, 1.1, 1);\n      scene.add(typeLabel);\n      spotObjects.set(spot.id, { fill, label, typeLabel, evIcon });\n    }\n    spots.forEach(createSpot);\n\n    // \u2500\u2500 Charger stations \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n    function makeSignTexture(title, accentHex, subtitle) {\n      const c = document.createElement('canvas');\n      c.width = 512; c.height = 768;\n      const ctx = c.getContext('2d');\n      ctx.fillStyle = '#07120f'; ctx.fillRect(0,0,512,768);\n      ctx.strokeStyle = accentHex; ctx.lineWidth = 4;\n      ctx.strokeRect(4,4,504,760);\n      ctx.fillStyle = accentHex; ctx.font = '800 120px sans-serif';\n      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';\n      ctx.shadowColor = accentHex; ctx.shadowBlur = 22;\n      ctx.fillText(title, 256, 260);\n      ctx.font = '700 54px sans-serif'; ctx.shadowBlur = 8;\n      ctx.fillText('GridBridge', 256, 440);\n      ctx.font = '600 44px sans-serif'; ctx.fillStyle = 'rgba(255,255,255,0.6)';\n      ctx.shadowBlur = 0;\n      ctx.fillText(subtitle, 256, 560);\n      const tex = new THREE.CanvasTexture(c);\n      tex.colorSpace = THREE.SRGBColorSpace;\n      return tex;\n    }\n\n    function createCharger(spot) {\n      const isFast   = spot.id === 'F1';\n      const accent   = isFast ? COLORS.cyan  : COLORS.green;\n      const accentHex = isFast ? '#8ef4ff' : '#b3ffa3';\n      const group = new THREE.Group();\n      group.position.set(spot.x, 0, 15.4);\n\n      const base = new THREE.Mesh(new THREE.BoxGeometry(1.7,0.18,1.3), createMat(0x0a1110,{roughness:0.55,metalness:0.4}));\n      base.position.y = 0.09; base.castShadow = true; base.receiveShadow = true; group.add(base);\n\n      const pedestal = new THREE.Mesh(new THREE.BoxGeometry(0.95,3.3,0.62), createMat(0x141d1a,{roughness:0.35,metalness:0.55}));\n      pedestal.position.y = 1.83; pedestal.castShadow = true; pedestal.receiveShadow = true; group.add(pedestal);\n\n      const facePanel = new THREE.Mesh(new THREE.BoxGeometry(0.78,2.4,0.04), createMat(0x05090a,{roughness:0.18,metalness:0.2}));\n      facePanel.position.set(0,1.85,-0.32); group.add(facePanel);\n\n      const stripMat = new THREE.MeshBasicMaterial({ color: accent, transparent: true, opacity: 0.85 });\n      const stripL = new THREE.Mesh(new THREE.BoxGeometry(0.04,2.6,0.05), stripMat);\n      stripL.position.set(-0.5, 1.85, -0.32); group.add(stripL);\n      const stripR = stripL.clone(); stripR.position.x = 0.5; group.add(stripR);\n\n      const screenTex = (() => {\n        const c = document.createElement('canvas');\n        c.width = 256; c.height = 384;\n        const ctx = c.getContext('2d');\n        ctx.fillStyle = '#04100c'; ctx.fillRect(0,0,256,384);\n        const grad = ctx.createLinearGradient(0,0,0,100);\n        grad.addColorStop(0, accentHex); grad.addColorStop(1, 'rgba(0,0,0,0)');\n        ctx.fillStyle = grad; ctx.fillRect(0,0,256,100);\n        ctx.fillStyle = accentHex; ctx.font = '800 48px monospace';\n        ctx.textAlign = 'center'; ctx.shadowColor = accentHex; ctx.shadowBlur = 12;\n        ctx.fillText(spot.label, 128, 75);\n        ctx.font = '600 28px monospace'; ctx.fillStyle = 'rgba(255,255,255,0.7)';\n        ctx.shadowBlur = 0;\n        ctx.fillText(spot.power + ' kW', 128, 180);\n        ctx.fillText(spot.type, 128, 230);\n        ctx.fillStyle = '#1a3028'; ctx.fillRect(24, 270, 208, 6);\n        ctx.fillStyle = accentHex; ctx.shadowBlur = 6;\n        ctx.fillRect(24, 270, 140, 6);\n        ctx.font = '500 22px monospace'; ctx.fillStyle = accentHex;\n        ctx.fillText('READY', 128, 330);\n        const tex = new THREE.CanvasTexture(c);\n        tex.colorSpace = THREE.SRGBColorSpace;\n        return tex;\n      })();\n\n      const screen = new THREE.Mesh(\n        new THREE.PlaneGeometry(0.68, 1.04),\n        new THREE.MeshBasicMaterial({ map: screenTex, transparent: true, opacity: 0.88 })\n      );\n      screen.position.set(0, 1.78, -0.335); group.add(screen);\n\n      const topCap = new THREE.Mesh(new THREE.BoxGeometry(1.1,0.22,0.76), createMat(0x0d1614,{roughness:0.3,metalness:0.6}));\n      topCap.position.set(0,3.52,0); group.add(topCap);\n\n      const topGlow = new THREE.Mesh(new THREE.PlaneGeometry(0.9,0.08), new THREE.MeshBasicMaterial({ color: accent, transparent:true, opacity:0.7 }));\n      topGlow.position.set(0,3.64,-0.1); group.add(topGlow);\n\n      const statusLed = new THREE.Mesh(new THREE.SphereGeometry(0.065,16,12), new THREE.MeshBasicMaterial({ color: accent, transparent:true, opacity:0.8 }));\n      statusLed.position.set(0,1.1,-0.32); group.add(statusLed);\n\n      const light = new THREE.PointLight(accent, 1.05, 18, 2.0);\n      light.position.set(0, 2.5, -0.6); group.add(light);\n\n      // Floor glow\n      const floorGlow = new THREE.Mesh(\n        new THREE.PlaneGeometry(3.5, 2.2),\n        new THREE.MeshBasicMaterial({ color: accent, transparent: true, opacity: 0.08, depthWrite: false })\n      );\n      floorGlow.rotation.x = -Math.PI/2;\n      floorGlow.position.set(0, 0.02, -3);\n      group.add(floorGlow);\n\n      // Idle cable\n      const cableCurve = new THREE.CatmullRomCurve3([\n        new THREE.Vector3(0.18, 0.78, -0.36),\n        new THREE.Vector3(0.38, 0.5,  -0.62),\n        new THREE.Vector3(0.52, 0.12, -0.82),\n        new THREE.Vector3(0.56, 0.05, -0.9)\n      ]);\n      const idleCable = new THREE.Mesh(\n        new THREE.TubeGeometry(cableCurve, 32, 0.038, 10, false),\n        createMat(0x030504, { roughness: 0.75, metalness: 0.1 })\n      );\n      group.add(idleCable);\n      const plugHead = new THREE.Mesh(new THREE.BoxGeometry(0.14,0.09,0.14), createMat(0x141a18,{roughness:0.5,metalness:0.6}));\n      plugHead.position.set(0.56, 0.05, -0.9); group.add(plugHead);\n\n      // Connector socket\n      const socket = new THREE.Mesh(new THREE.CylinderGeometry(0.065,0.065,0.06,20), createMat(0x0a1211,{roughness:0.4,metalness:0.7}));\n      socket.rotation.x = Math.PI/2;\n      socket.position.set(0.18, 0.78, -0.34); group.add(socket);\n\n      scene.add(group);\n      chargerObjects.set(spot.id, { group, light, screen, floorGlow, topGlow, statusLed, idleCable, plugHead });\n    }\n    spots.forEach(createCharger);\n\n    // \u2500\u2500 Environment \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n    // Rear wall / apartment building\n    function createRearWall() {\n      const group = new THREE.Group();\n      const wallMat = createMat(0x141f1c, { roughness: 0.78, metalness: 0.06 });\n      const mainWall = new THREE.Mesh(new THREE.BoxGeometry(62, 14, 1.2), wallMat);\n      mainWall.position.set(0, 7, 18.4);\n      mainWall.receiveShadow = true; mainWall.castShadow = true;\n      group.add(mainWall);\n\n      // Wall paneling\n      for (let x = -28; x <= 28; x += 8) {\n        const seam = new THREE.Mesh(new THREE.BoxGeometry(0.08, 14, 0.04), createMat(0x0c1512,{roughness:0.85}));\n        seam.position.set(x, 7, 17.8);\n        group.add(seam);\n      }\n\n      // GridBridge branding\n      const brandTex = (() => {\n        const c = document.createElement('canvas');\n        c.width = 1024; c.height = 256;\n        const ctx = c.getContext('2d');\n        ctx.clearRect(0,0,1024,256);\n        ctx.fillStyle = 'rgba(108,240,115,0.9)';\n        ctx.font = '800 120px sans-serif';\n        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';\n        ctx.shadowColor = '#6cf073'; ctx.shadowBlur = 30;\n        ctx.fillText('GridBridge', 512, 128);\n        const tex = new THREE.CanvasTexture(c);\n        tex.colorSpace = THREE.SRGBColorSpace;\n        return tex;\n      })();\n      const brand = new THREE.Mesh(new THREE.PlaneGeometry(14, 3.5), new THREE.MeshBasicMaterial({ map: brandTex, transparent: true }));\n      brand.position.set(-8, 10.5, 17.84);\n      group.add(brand);\n\n      // Apartment windows (lit)\n      const windowsLit = [];\n      for (let col = -24; col <= 24; col += 4) {\n        for (let row = 0; row < 3; row++) {\n          if (Math.abs(col) < 16 && row === 0) continue; // charger area gap\n          const lit = Math.random() > 0.32;\n          const w = new THREE.Mesh(\n            new THREE.PlaneGeometry(1.8, 1.1),\n            new THREE.MeshBasicMaterial({ color: lit ? 0xffc87a : 0x3a4e44, transparent: true, opacity: lit ? 0.48 : 0.18 })\n          );\n          w.position.set(col, 4.5 + row*2.8, 17.82);\n          group.add(w);\n          if (lit) windowsLit.push(w);\n        }\n      }\n\n      // Charger plaques on wall\n      const plaqMat = (txt, color, sub) => makeSignTexture(txt, color, sub);\n      [['A1','#b3ffa3','Level 2 \u00b7 11 kW'], ['A2','#b3ffa3','Level 2 \u00b7 11 kW'], ['A3','#b3ffa3','Level 2 \u00b7 11 kW']].forEach(([ id, col, sub ], i) => {\n        const plaque = new THREE.Mesh(new THREE.PlaneGeometry(3.2,1.25), new THREE.MeshBasicMaterial({ map: plaqMat(id, col, sub), transparent: true }));\n        plaque.position.set(-18 + i*12, 4.6, 17.83);\n        group.add(plaque);\n      });\n      const plaqueFast = new THREE.Mesh(new THREE.PlaneGeometry(3.2,1.25), new THREE.MeshBasicMaterial({ map: plaqMat('F1','#8ef4ff','DC FAST \u00b7 50 kW'), transparent: true }));\n      plaqueFast.position.set(18, 4.6, 17.83);\n      group.add(plaqueFast);\n\n      scene.add(group);\n      return { group, windowsLit };\n    }\n    const rearWall = createRearWall();\n\n    // Side walls\n    function createSideWall(x) {\n      const wall = new THREE.Mesh(new THREE.BoxGeometry(0.4,4.2,40), concreteMat);\n      wall.position.set(x,2.1,0); wall.receiveShadow = true; wall.castShadow = true; scene.add(wall);\n      const cap = new THREE.Mesh(new THREE.BoxGeometry(0.5,0.12,40), createMat(0x1a2422,{roughness:0.7}));\n      cap.position.set(x,4.26,0); scene.add(cap);\n      for (let z = -16; z <= 16; z += 8) {\n        const seam = new THREE.Mesh(new THREE.BoxGeometry(0.06,4.0,0.05), createMat(0x141d1a,{roughness:0.85}));\n        seam.position.set(x+(x>0?-0.21:0.21),2.1,z); scene.add(seam);\n      }\n    }\n    createSideWall(-30); createSideWall(30);\n\n    // Front barrier\n    const frontBarrier = new THREE.Mesh(new THREE.BoxGeometry(60,0.6,0.5), createMat(0x2a3530,{roughness:0.78,metalness:0.04}));\n    frontBarrier.position.set(0,0.3,-20); frontBarrier.receiveShadow = true; scene.add(frontBarrier);\n    const barrierStripe = new THREE.Mesh(new THREE.BoxGeometry(60,0.04,0.08), new THREE.MeshBasicMaterial({ color: 0xffd166, transparent: true, opacity: 0.85 }));\n    barrierStripe.position.set(0,0.62,-19.78); scene.add(barrierStripe);\n\n    // Pillars\n    function createPillar(x, z) {\n      const g = new THREE.Group();\n      g.position.set(x,0,z);\n      const main = new THREE.Mesh(new THREE.BoxGeometry(1.4,7,1.4), concreteMat);\n      main.position.y = 3.5; main.castShadow = true; main.receiveShadow = true; g.add(main);\n      const band = new THREE.Mesh(new THREE.BoxGeometry(1.45,0.5,1.45), new THREE.MeshStandardMaterial({ color: 0xffd166, roughness: 0.75 }));\n      band.position.y = 0.7; g.add(band);\n      const cap = new THREE.Mesh(new THREE.BoxGeometry(1.6,0.15,1.6), createMat(0x1a2422,{roughness:0.7}));\n      cap.position.y = 7.08; g.add(cap);\n      scene.add(g);\n    }\n    [[-22,4],[22,4],[-22,-10],[22,-10],[-10,-16],[10,-16]].forEach(p => createPillar(p[0],p[1]));\n\n    // Ceiling + lights\n    function createCeilingLights() {\n      const beamMat = createMat(0x1a221f,{roughness:0.55,metalness:0.25});\n      const ceiling = new THREE.Mesh(new THREE.BoxGeometry(60,0.25,40), createMat(0x141d1a,{roughness:0.8}));\n      ceiling.position.set(0,8.0,0); ceiling.receiveShadow = true; scene.add(ceiling);\n      for (let z = -16; z <= 16; z += 8) {\n        const beam = new THREE.Mesh(new THREE.BoxGeometry(60,0.4,0.5), beamMat);\n        beam.position.set(0,7.7,z); beam.castShadow = true; scene.add(beam);\n      }\n      const fixturePositions = [[-15,4],[0,4],[15,4],[-15,-4],[0,-4],[15,-4],[-15,-12],[0,-12],[15,-12]];\n      fixturePositions.forEach(([fx, fz]) => {\n        const housing = new THREE.Mesh(new THREE.BoxGeometry(2.4,0.18,0.7), createMat(0x0a0f0d,{roughness:0.4,metalness:0.6}));\n        housing.position.set(fx,7.55,fz); scene.add(housing);\n        const panel = new THREE.Mesh(new THREE.PlaneGeometry(2.2,0.55), new THREE.MeshBasicMaterial({ color: 0xffe2b8, transparent:true, opacity:0.92 }));\n        panel.rotation.x = Math.PI/2;\n        panel.position.set(fx,7.45,fz); scene.add(panel);\n        if (Math.abs(fx) < 16 && Math.abs(fz+4) < 12) {\n          const pl = new THREE.PointLight(0xffd599, 0.45, 14, 2.2);\n          pl.position.set(fx,7.2,fz); scene.add(pl);\n        }\n      });\n    }\n    createCeilingLights();\n\n    // Background city\n    function createBackgroundCity() {\n      const g = new THREE.Group();\n      g.position.set(0,0,32);\n      for (let i = 0; i < 7; i++) {\n        const w = 5+Math.random()*7, h = 14+Math.random()*14;\n        const tower = new THREE.Mesh(\n          new THREE.BoxGeometry(w,h,3),\n          createMat(0x0a1411,{roughness:0.7,metalness:0.1,emissive:0x05110c,emissiveIntensity:0.06})\n        );\n        tower.position.set(-22+i*7, h/2, Math.random()*6);\n        g.add(tower);\n        for (let f = 0; f < h-1; f += 1.4) {\n          for (let col = 0; col < Math.floor(w); col++) {\n            if (Math.random() > 0.55) {\n              const lit = Math.random() > 0.3;\n              const dot = new THREE.Mesh(\n                new THREE.PlaneGeometry(0.5,0.32),\n                new THREE.MeshBasicMaterial({ color: lit?0xffd29a:0x6e8278, transparent:true, opacity: lit?0.42:0.18 })\n              );\n              dot.position.set(tower.position.x+col-w/2+0.5, f+1, tower.position.z-1.51);\n              g.add(dot);\n            }\n          }\n        }\n      }\n      scene.add(g);\n    }\n    createBackgroundCity();\n\n    // Props: bollards, cones, wheel stops\n    spots.forEach(spot => {\n      const stop = new THREE.Mesh(new THREE.BoxGeometry(4.6,0.3,0.5), createMat(0xe1edd6,{roughness:0.62,metalness:0.04}));\n      stop.position.set(spot.x,0.15,spot.z+4.2); stop.castShadow=true; stop.receiveShadow=true; scene.add(stop);\n      [-1.2,1.2].forEach(dx => {\n        const ref = new THREE.Mesh(new THREE.BoxGeometry(0.18,0.06,0.06), new THREE.MeshBasicMaterial({ color:0xffd166,transparent:true,opacity:0.9 }));\n        ref.position.set(spot.x+dx, 0.18, spot.z+4.46); scene.add(ref);\n      });\n      [-1.95,1.95].forEach(dx => {\n        const bg = new THREE.Group();\n        bg.position.set(spot.x+dx, 0, 14.0);\n        const post = new THREE.Mesh(new THREE.CylinderGeometry(0.12,0.14,1.0,18), createMat(0x141d1a,{roughness:0.5,metalness:0.45}));\n        post.position.y = 0.5; post.castShadow=true; bg.add(post);\n        const band = new THREE.Mesh(new THREE.CylinderGeometry(0.13,0.13,0.08,18), new THREE.MeshBasicMaterial({ color:0xffd166,transparent:true,opacity:0.92 }));\n        band.position.y = 0.85; bg.add(band);\n        const top = new THREE.Mesh(new THREE.CylinderGeometry(0.13,0.13,0.08,18), createMat(0x1f2a26,{roughness:0.45,metalness:0.5}));\n        top.position.y = 1.04; bg.add(top);\n        scene.add(bg);\n      });\n    });\n\n    function addCone(x, z) {\n      const g = new THREE.Group();\n      g.position.set(x,0,z);\n      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.32,0.4,0.1,24), createMat(0x0a0f0d,{roughness:0.6,metalness:0.4}));\n      base.position.y = 0.05; g.add(base);\n      const cone = new THREE.Mesh(new THREE.ConeGeometry(0.26,0.85,24), createMat(0xff7a2f,{roughness:0.62}));\n      cone.position.y = 0.55; cone.castShadow=true; g.add(cone);\n      const stripeA = new THREE.Mesh(new THREE.CylinderGeometry(0.18,0.21,0.06,24), new THREE.MeshBasicMaterial({ color:0xffffff,transparent:true,opacity:0.95 }));\n      stripeA.position.y = 0.66; g.add(stripeA);\n      const stripeB = stripeA.clone(); stripeB.position.y = 0.5; stripeB.scale.set(1.15,1,1.15); g.add(stripeB);\n      scene.add(g);\n    }\n    [[-26,-3],[-24,-7],[26,-4],[25,-8],[-3,14.5],[3,14.5],[-12,13.8],[12,13.8]].forEach(([x,z]) => addCone(x,z));\n\n\n    // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n    // CAR: Fallback (procedural) + GLB loader\n    // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n    // The carRoot is always created immediately with a fallback car.\n    // If the GLB loads, the fallback is hidden and the GLB is shown.\n    // If the GLB fails or times out, the game keeps running with the fallback.\n\n    const carRoot = new THREE.Group();\n    carRoot.position.set(0, 0, -13.5);\n    scene.add(carRoot);\n\n    // \u2500\u2500 Fallback car (procedural, detailed enough to be playable) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n    function buildFallbackCar() {\n      const g = new THREE.Group();\n\n      const paintMat = new THREE.MeshStandardMaterial({ color: 0xd8e4ec, roughness: 0.18, metalness: 0.92 });\n      const glassMat = new THREE.MeshStandardMaterial({ color: 0x0a1820, roughness: 0.04, metalness: 0.0, transparent: true, opacity: 0.65 });\n      const tireMat  = new THREE.MeshStandardMaterial({ color: 0x181818, roughness: 0.92, metalness: 0.0 });\n      const rimMat   = new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.22, metalness: 0.95 });\n      const brakeLightMat = new THREE.MeshStandardMaterial({ color: 0xff1500, emissive: 0xff1500, emissiveIntensity: 0.0, transparent: true, opacity: 0.88 });\n      const headlightMat  = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff0c8, emissiveIntensity: 1.4 });\n\n      // Body (main slab)\n      const body = new THREE.Mesh(new THREE.BoxGeometry(1.96, 0.55, 4.72), paintMat);\n      body.position.y = 0.72; body.castShadow = true; g.add(body);\n\n      // Cabin roof (slightly narrower, raked)\n      const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.75, 0.52, 2.25), paintMat);\n      cabin.position.set(0, 1.25, 0.25); cabin.castShadow = true; g.add(cabin);\n\n      // Cabin glass (windshield/rear)\n      const windshield = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 0.65), glassMat);\n      windshield.rotation.x = -0.38; windshield.position.set(0, 1.25, 1.42); g.add(windshield);\n      const rearGlass = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 0.58), glassMat);\n      rearGlass.rotation.x = 0.35; rearGlass.position.set(0, 1.25, -0.94); g.add(rearGlass);\n      const sideGlassL = new THREE.Mesh(new THREE.PlaneGeometry(0.56, 0.46), glassMat);\n      sideGlassL.rotation.y = Math.PI/2; sideGlassL.position.set(0.885, 1.28, 0.42); g.add(sideGlassL);\n      const sideGlassR = sideGlassL.clone(); sideGlassR.position.x = -0.885; g.add(sideGlassR);\n\n      // Front bumper / nose\n      const nose = new THREE.Mesh(new THREE.BoxGeometry(1.88, 0.38, 0.58), paintMat);\n      nose.position.set(0, 0.56, 2.58); nose.castShadow = true; g.add(nose);\n\n      // Rear bumper\n      const rearBumper = new THREE.Mesh(new THREE.BoxGeometry(1.88, 0.38, 0.44), paintMat);\n      rearBumper.position.set(0, 0.56, -2.55); rearBumper.castShadow = true; g.add(rearBumper);\n\n      // Headlight bars (thin emissive strips)\n      const hlMat = new THREE.MeshBasicMaterial({ color: 0xfff4cc });\n      const hlL = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.04, 0.04), hlMat);\n      hlL.position.set(-0.6, 0.68, 2.88); g.add(hlL);\n      const hlR = hlL.clone(); hlR.position.x = 0.6; g.add(hlR);\n      // Spotlight\n      const spotL = new THREE.SpotLight(0xfff4e0, 2.2, 22, Math.PI*0.085, 0.3, 1.8);\n      spotL.position.set(-0.58, 0.72, 2.9);\n      spotL.target.position.set(-1.4, -0.4, 18);\n      g.add(spotL); g.add(spotL.target);\n      const spotR = new THREE.SpotLight(0xfff4e0, 2.2, 22, Math.PI*0.085, 0.3, 1.8);\n      spotR.position.set(0.58, 0.72, 2.9);\n      spotR.target.position.set(1.4, -0.4, 18);\n      g.add(spotR); g.add(spotR.target);\n\n      // Tail light bars\n      const tlL = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.04, 0.04), brakeLightMat);\n      tlL.position.set(-0.6, 0.70, -2.72); g.add(tlL);\n      const tlR = tlL.clone(); tlR.position.x = 0.6; g.add(tlR);\n\n      // Underglow\n      const underglow = new THREE.PointLight(0x3dff6e, 0.5, 3.0);\n      underglow.position.set(0,-0.06,0); g.add(underglow);\n\n      // Tail glow point light\n      const tailGlow = new THREE.PointLight(0xff2200, 0.4, 5.0);\n      tailGlow.position.set(0, 0.65, -2.7); g.add(tailGlow);\n\n      // Wheels (4x: front-left, front-right, rear-left, rear-right)\n      const wheelPositions = [\n        { x:-1.02, z: 1.45, front: true  },\n        { x: 1.02, z: 1.45, front: true  },\n        { x:-1.02, z:-1.45, front: false },\n        { x: 1.02, z:-1.45, front: false }\n      ];\n      const wheelGroups = [];\n      wheelPositions.forEach(wp => {\n        const wg = new THREE.Group();\n        wg.position.set(wp.x, 0.35, wp.z);\n        wg.userData.isFront = wp.front;\n        // Tire\n        const tire = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.26, 32), tireMat);\n        tire.rotation.z = Math.PI/2; tire.castShadow = true; wg.add(tire);\n        // Rim\n        const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.28, 16), rimMat);\n        rim.rotation.z = Math.PI/2; wg.add(rim);\n        // 5 spokes\n        for (let s = 0; s < 5; s++) {\n          const spoke = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.16, 0.26), rimMat);\n          spoke.rotation.z = (s/5)*Math.PI*2;\n          spoke.position.set(0, Math.cos((s/5)*Math.PI*2)*0.09, 0);\n          wg.add(spoke);\n        }\n        g.add(wg);\n        wheelGroups.push(wg);\n      });\n\n      // Charging port marker (driver-rear side)\n      const portMarker = new THREE.Object3D();\n      portMarker.position.set(1.0, 0.65, 1.4);\n      g.add(portMarker);\n\n      // Charge port visual dot\n      const portDot = new THREE.Mesh(new THREE.SphereGeometry(0.055,12,8), new THREE.MeshBasicMaterial({ color: 0x6cf073, transparent: true, opacity: 0.85 }));\n      portDot.position.copy(portMarker.position);\n      g.add(portDot);\n\n      g.position.y = 0;\n      return {\n        group: g,\n        wheels: wheelGroups,\n        port: portMarker,\n        brakeLightMat,\n        tailGlow,\n        headlightMat,\n        reverseLights: [],\n        steeringWheel: null,\n        cubeCamera: null,\n      };\n    }\n\n    const fallback = buildFallbackCar();\n    carRoot.add(fallback.group);\n\n    // Store active refs (start with fallback, swap to GLB on load)\n    carRoot.userData = {\n      wheels:        fallback.wheels,\n      port:          fallback.port,\n      brakeLightMat: fallback.brakeLightMat,\n      tailGlow:      fallback.tailGlow,\n      reverseLights: fallback.reverseLights,\n      steeringWheel: fallback.steeringWheel,\n      cubeCamera:    null,\n      carLoaded:     false,\n      fallbackGroup: fallback.group,\n    };\n\n    // \u2500\u2500 GLB Loader \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n    // Canonical path \u2014 rename your file to this before running\n    const GLB_PATH = './assets/porsche_taycan.glb';\n\n    // Kick off loading immediately; game starts with fallback\n    // 8-second timeout: if GLB not loaded, hide loading screen & keep fallback\n    let glbLoadTimeout = null;\n    let glbAborted     = false;\n\n    function startGlbLoad() {\n      if (!GLTFLoader) {\n        console.warn('GLTFLoader unavailable \u2014 using fallback car only.');\n        state.modelLoadFailed = true;\n        setLoadingLabel('Using fallback vehicle');\n        setLoadingProgress(100);\n        setTimeout(hideLoadingScreen, 600);\n        return;\n      }\n\n      setLoadingLabel('Loading Porsche Taycan\u2026');\n      setLoadingProgress(45);\n\n      const loader = new GLTFLoader();\n\n      // Try to attach DRACOLoader if available\n      if (DRACOLoader) {\n        try {\n          const draco = new DRACOLoader();\n          // Use local draco if present, otherwise skip compression\n          draco.setDecoderPath('./vendor/draco/');\n          loader.setDRACOLoader(draco);\n        } catch(_) {}\n      }\n\n      // 8-second fallback: start game regardless\n      glbLoadTimeout = setTimeout(() => {\n        glbAborted = true;\n        console.warn('GLB load timeout \u2014 starting with fallback car.');\n        state.modelLoadFailed = true;\n        setLoadingLabel('Timeout \u2014 using fallback vehicle');\n        setLoadingProgress(100);\n        hideLoadingScreen();\n        showToast('Porsche model timed out \u2014 fallback active.');\n        if (!state.plugged) {\n          showError(\n            '<strong>Porsche Taycan model timed out.</strong> ' +\n            'Make sure <code>assets/porsche_taycan.glb</code> exists next to index.html ' +\n            'and you\\'re running via the local server, not double-clicking. ' +\n            'Playing with the fallback vehicle. ' +\n            '<button onclick=\"this.parentElement.classList.remove(\\'visible\\')\" style=\"margin-left:8px;padding:2px 8px;border-radius:4px;border:1px solid rgba(255,107,107,0.4);background:rgba(255,107,107,0.1);color:#ff9090;cursor:pointer;font-size:11px;\">Dismiss</button>'\n          );\n        }\n      }, 8000);\n\n      loader.load(\n        GLB_PATH,\n        // \u2500\u2500 onLoad \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n        (gltf) => {\n          if (glbAborted) {\n            // Timeout already fired \u2014 swap model in silently anyway\n            console.log('GLB arrived after timeout \u2014 swapping in.');\n          }\n          clearTimeout(glbLoadTimeout);\n\n          const model = gltf.scene;\n\n          // Scale & center using bounding box (robust \u2014 doesn't care about model origin)\n          const box = new THREE.Box3().setFromObject(model);\n          const size = box.getSize(new THREE.Vector3());\n          const center = box.getCenter(new THREE.Vector3());\n\n          // Target: ~4.96m long Taycan\n          const TARGET_LENGTH = 4.96;\n          const scaleFactor   = TARGET_LENGTH / (size.z > 0.01 ? size.z : size.x);\n          model.scale.setScalar(scaleFactor);\n\n          // Re-measure after scale\n          const box2 = new THREE.Box3().setFromObject(model);\n          const size2 = box2.getSize(new THREE.Vector3());\n          const center2 = box2.getCenter(new THREE.Vector3());\n\n          // Center horizontally, bottom of bounding box at y = 0\n          model.position.set(\n            -center2.x,\n            -box2.min.y,\n            -center2.z\n          );\n\n          // Materials\n          const paintMat = new THREE.MeshPhysicalMaterial({\n            color: 0x1e3f6e, roughness: 0.26, metalness: 0.88,\n            clearcoat: 1.0, clearcoatRoughness: 0.10, reflectivity: 0.95,\n          });\n          const glassMat2 = new THREE.MeshPhysicalMaterial({\n            color: 0x060e12, roughness: 0.04, metalness: 0.0,\n            transparent: true, opacity: 0.70, transmission: 0.22,\n            clearcoat: 0.95, clearcoatRoughness: 0.04, ior: 1.46,\n            side: THREE.DoubleSide,\n          });\n          const tireMat2  = new THREE.MeshStandardMaterial({ color: 0x090909, roughness: 0.94, metalness: 0.0 });\n          const wheelMat  = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.30, metalness: 0.92 });\n          const brakeLightMat2 = new THREE.MeshStandardMaterial({ color: 0xff1500, emissive: 0xff1500, emissiveIntensity: 0.0, transparent: true, opacity: 0.9 });\n          const headlightMat2  = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff0c8, emissiveIntensity: 1.2 });\n\n          model.traverse(node => {\n            if (!node.isMesh) return;\n            node.castShadow = node.receiveShadow = true;\n            const mat = node.material?.name || '';\n            if (mat === 'corpus1')                        node.material = paintMat;\n            else if (/glass|Glass|glass_specular/.test(mat)) node.material = glassMat2;\n            else if (mat === 'Rubber1')                   node.material = tireMat2;\n            else if (/whell_metal|lambert1|Whel_color_black/.test(mat)) node.material = wheelMat;\n            else if (mat === 'red_headlight')             node.material = brakeLightMat2;\n            else if (mat === 'headlight_white_color')     node.material = headlightMat2;\n          });\n\n          // Wheel groups (try to find by name, graceful fallback)\n          let frontWheelGroup = null, rearWheelGroup = null;\n          model.traverse(node => {\n            if (node.name === 'polySurface1597') rearWheelGroup  = node;\n            if (node.name === 'polySurface1534') { frontWheelGroup = node; node.userData.isFront = true; }\n          });\n          const wheelGroupsForSpin = [];\n          if (frontWheelGroup) wheelGroupsForSpin.push(frontWheelGroup);\n          if (rearWheelGroup)  wheelGroupsForSpin.push(rearWheelGroup);\n\n          // Charge port anchor\n          const port2 = new THREE.Object3D();\n          port2.position.set(0.85, 0.62, 1.3);\n          model.add(port2);\n\n          // Headlights\n          const hlL2 = new THREE.SpotLight(0xfff4e0, 2.5, 24, Math.PI*0.085, 0.3, 1.6);\n          hlL2.position.set(-0.58, 0.52, 2.45); hlL2.target.position.set(-1.4,-0.4,18);\n          model.add(hlL2); model.add(hlL2.target);\n          const hlR2 = new THREE.SpotLight(0xfff4e0, 2.5, 24, Math.PI*0.085, 0.3, 1.6);\n          hlR2.position.set(0.58, 0.52, 2.45); hlR2.target.position.set(1.4,-0.4,18);\n          model.add(hlR2); model.add(hlR2.target);\n\n          const tailGlow2 = new THREE.PointLight(0xff2200, 0.4, 5.0);\n          tailGlow2.position.set(0, 0.60, -2.45); model.add(tailGlow2);\n\n          const underglow2 = new THREE.PointLight(0x3dff6e, 0.6, 3.0);\n          underglow2.position.set(0,-0.08,0); model.add(underglow2);\n\n          // Live paint env reflections\n          const cubeRT = new THREE.WebGLCubeRenderTarget(128, {\n            format: THREE.RGBAFormat, generateMipmaps: true,\n            minFilter: THREE.LinearMipmapLinearFilter,\n          });\n          const cubeCamera2 = new THREE.CubeCamera(0.5, 50, cubeRT);\n          cubeCamera2.position.set(0, 0.88, 0);\n          model.add(cubeCamera2);\n          paintMat.envMap = cubeRT.texture;\n          paintMat.envMapIntensity = 1.4;\n\n          // Swap: hide fallback, add real model\n          carRoot.remove(fallback.group);\n          carRoot.add(model);\n\n          // Car rests slightly higher with real model (tires touch ground)\n          carRoot.position.y = 0;\n\n          // Update refs\n          carRoot.userData.wheels        = wheelGroupsForSpin.length ? wheelGroupsForSpin : fallback.wheels;\n          carRoot.userData.port          = port2;\n          carRoot.userData.brakeLightMat = brakeLightMat2;\n          carRoot.userData.tailGlow      = tailGlow2;\n          carRoot.userData.reverseLights = [];\n          carRoot.userData.steeringWheel = null;\n          carRoot.userData.cubeCamera    = cubeCamera2;\n          carRoot.userData.carLoaded     = true;\n\n          state.modelLoaded = true;\n          state.modelLoadFailed = false;\n\n          setLoadingProgress(100);\n          hideLoadingScreen();\n          hideError();\n          showToast('Porsche Taycan loaded \u2014 drive!');\n          console.log('Taycan loaded \u2713 \u2014 wheels found:', wheelGroupsForSpin.length);\n        },\n        // \u2500\u2500 onProgress \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n        (xhr) => {\n          if (glbAborted) return;\n          if (xhr.total) {\n            const pct = 45 + Math.round((xhr.loaded / xhr.total) * 50);\n            setLoadingProgress(pct);\n            setLoadingLabel('Loading Taycan\u2026 ' + Math.round(xhr.loaded/xhr.total*100) + '%');\n          } else {\n            const mb = (xhr.loaded / 1048576).toFixed(1);\n            setLoadingLabel(`Loading Taycan\u2026 ${mb} MB`);\n          }\n        },\n        // \u2500\u2500 onError \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n        (err) => {\n          if (glbAborted) return;\n          clearTimeout(glbLoadTimeout);\n          state.modelLoadFailed = true;\n          console.error('GLB load error:', err);\n\n          let msg = '<strong>Porsche Taycan GLB not found.</strong> ';\n          if (location.protocol === 'file:') {\n            msg += 'You\\'re opening the file directly \u2014 run python3 start_server.py instead.';\n          } else {\n            msg += 'Place your GLB at: <code>assets/porsche_taycan.glb</code> (rename if needed). ';\n            msg += 'Fallback vehicle is active \u2014 game is fully playable. ';\n            msg += '<button onclick=\"this.parentElement.classList.remove(\\'visible\\')\" style=\"margin-left:8px;padding:2px 8px;border-radius:4px;border:1px solid rgba(255,107,107,0.4);background:rgba(255,107,107,0.1);color:#ff9090;cursor:pointer;font-size:11px;\">Dismiss</button>';\n          }\n          showError(msg);\n          setLoadingLabel('Fallback vehicle active');\n          setLoadingProgress(100);\n          hideLoadingScreen();\n        }\n      );\n    }\n\n    // Start GLB load immediately; the loading screen starts hidden if game already started,\n    // or shows briefly if this is first run. Either way, 8s max.\n    setLoadingLabel('Using built-in demo vehicle');\n    setLoadingProgress(100);\n    setTimeout(hideLoadingScreen, 450);\n\n    // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n    // CABLE / CHARGING PARTICLES\n    // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n    let activeCable = null;\n    const cableMat = createMat(0x040605, { roughness: 0.7, metalness: 0.1, emissive: COLORS.green, emissiveIntensity: 0.06 });\n    const energyMat = new THREE.MeshBasicMaterial({ color: COLORS.greenBright, transparent: true, opacity: 0.92 });\n    const energyParticles = [];\n    for (let i = 0; i < 28; i++) {\n      const p = new THREE.Mesh(new THREE.SphereGeometry(0.06,12,8), energyMat);\n      p.visible = false;\n      scene.add(p);\n      energyParticles.push(p);\n    }\n\n    function worldPortPosition() {\n      const pos = new THREE.Vector3();\n      carRoot.userData.port.getWorldPosition(pos);\n      return pos;\n    }\n\n    function chargerPlugPosition(spot) {\n      const charger = chargerObjects.get(spot.id).group;\n      return charger.localToWorld(new THREE.Vector3(0.18, 0.78, -0.36));\n    }\n\n    function rebuildCable(progress = 1) {\n      if (!state.activeSpot) return;\n      if (activeCable) { scene.remove(activeCable); activeCable.geometry.dispose(); }\n      const start = chargerPlugPosition(state.activeSpot);\n      const end   = worldPortPosition();\n      const midA  = start.clone().lerp(end, 0.35);\n      const midB  = start.clone().lerp(end, 0.72);\n      midA.y += 1.8*(1-progress) + 0.45;\n      midB.y += 0.7;\n      const partialEnd = start.clone().lerp(end, progress);\n      const curve = new THREE.CatmullRomCurve3([start, midA, midB, partialEnd]);\n      activeCable = new THREE.Mesh(\n        new THREE.TubeGeometry(curve, 64, 0.045, 12, false),\n        cableMat\n      );\n      activeCable.castShadow = true;\n      scene.add(activeCable);\n\n      const charger = chargerObjects.get(state.activeSpot.id);\n      if (charger) { charger.idleCable.visible = false; charger.plugHead.visible = false; }\n\n      energyParticles.forEach((particle, i) => {\n        if (!state.plugged) { particle.visible = false; return; }\n        const t = ((i / energyParticles.length) + state.elapsed * 0.55) % 1;\n        const point = curve.getPoint(t);\n        particle.position.copy(point);\n        particle.visible = true;\n      });\n    }\n\n    // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n    // PARKING EVALUATION\n    // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n    function angleDiff(a, b) {\n      return Math.abs(Math.atan2(Math.sin(a-b), Math.cos(a-b)));\n    }\n\n    function localToSpot(spot, x, z) {\n      const dx = x-spot.x, dz = z-spot.z;\n      const c = Math.cos(-spot.angle), s = Math.sin(-spot.angle);\n      return { x: dx*c-dz*s, z: dx*s+dz*c };\n    }\n\n    function evaluateParking() {\n      if (state.plugged || state.plugging) return;\n      let best = null, bestScore = 0;\n      for (const spot of spots) {\n        const local = localToSpot(spot, carRoot.position.x, carRoot.position.z);\n        const pX = Math.max(0, 1 - Math.abs(local.x) / (spot.w/2));\n        const pZ = Math.max(0, 1 - Math.abs(local.z) / (spot.d/2));\n        const posScore = Math.pow(pX*pZ, 0.5);\n        const forwardDiff = angleDiff(carRoot.rotation.y, spot.angle);\n        const reverseDiff = angleDiff(carRoot.rotation.y, spot.angle+Math.PI);\n        const aScore  = Math.max(0, 1 - Math.min(forwardDiff, reverseDiff) / (Math.PI/2));\n        const sScore  = Math.max(0, 1 - Math.abs(state.speed) / 0.14);\n        const score   = Math.round((posScore*0.62 + aScore*0.28 + sScore*0.10) * 100);\n        if (score > bestScore) { bestScore = score; best = spot; }\n      }\n      state.activeSpot = bestScore > 8 ? best : null;\n      state.alignment  = bestScore;\n    }\n\n    function updateSpotVisuals() {\n      for (const spot of spots) {\n        const obj    = spotObjects.get(spot.id);\n        const isActive = state.activeSpot?.id === spot.id;\n        const isReady  = isActive && state.alignment >= 82 && Math.abs(state.speed) < 0.045;\n        const isFast   = spot.id === 'F1';\n        const baseColor = isFast ? COLORS.cyan : COLORS.green;\n        const color = (state.plugged && state.activeSpot?.id === spot.id) || isReady\n          ? COLORS.greenBright : isActive ? COLORS.amber : baseColor;\n        obj.fill.material.color.set(color);\n        obj.fill.material.opacity = isReady\n          ? 0.22 + Math.sin(state.elapsed*8)*0.05\n          : isActive ? 0.12 + Math.sin(state.elapsed*4)*0.025 : 0.05;\n        obj.label.material.opacity    = isActive ? 1   : 0.7;\n        obj.typeLabel.material.opacity = isActive ? 1   : 0.6;\n        obj.evIcon.material.opacity    = isActive ? 0.95 : 0.7;\n      }\n      for (const spot of spots) {\n        const charger = chargerObjects.get(spot.id);\n        const active  = state.activeSpot?.id === spot.id;\n        charger.light.intensity         = active ? 2.6 + Math.sin(state.elapsed*6)*0.55 : 1.05;\n        charger.screen.material.opacity = active ? 1   : 0.8;\n        charger.floorGlow.material.opacity = active ? 0.18+Math.sin(state.elapsed*5)*0.04 : 0.08;\n        charger.topGlow.material.opacity   = active ? 0.95 : 0.7;\n        charger.statusLed.material.opacity = 0.6+Math.sin(state.elapsed*3+(spot.id==='F1'?1.2:0))*0.4;\n      }\n    }\n\n    // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n    // DRIVING PHYSICS\n    // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n    function updateCar(dt) {\n      if (state.plugged || state.plugging) {\n        state.speed *= Math.pow(0.02, dt);\n        carRoot.userData.wheels.forEach(w => w.rotation.x += state.speed*12);\n        carRoot.userData.brakeLightMat.opacity = THREE.MathUtils.lerp(carRoot.userData.brakeLightMat.opacity, 0, 0.15);\n        state.bodyTilt  = THREE.MathUtils.lerp(state.bodyTilt,  0, dt*4);\n        state.bodyPitch = THREE.MathUtils.lerp(state.bodyPitch, 0, dt*4);\n        return;\n      }\n\n      const fwd   = state.keys.has('w') || state.keys.has('arrowup');\n      const back  = state.keys.has('s') || state.keys.has('arrowdown');\n      const left  = state.keys.has('a') || state.keys.has('arrowleft');\n      const right = state.keys.has('d') || state.keys.has('arrowright');\n\n      const accel        = 11.0;\n      const reverseAccel = 7.8;\n      const maxSpeed     = 8.6;\n      const maxReverse   = -4.8;\n      const friction     = 4.5;\n      const brakeStr     = 9.0;\n\n      let braking = false;\n      if (fwd) {\n        if (state.speed < 0) { state.speed += brakeStr*dt; braking = true; }\n        else                   state.speed += accel*dt;\n      }\n      if (back) {\n        if (state.speed > 0) { state.speed -= brakeStr*dt; braking = true; }\n        else                   state.speed -= reverseAccel*dt;\n      }\n      if (!fwd && !back) {\n        const f = Math.min(Math.abs(state.speed), friction*dt);\n        state.speed -= Math.sign(state.speed)*f;\n      }\n      state.speed = Math.max(maxReverse, Math.min(maxSpeed, state.speed));\n\n      const steerInput   = (left?1:0)+(right?-1:0);\n      const steerPower   = THREE.MathUtils.clamp(Math.abs(state.speed)/maxSpeed, 0.18, 1);\n      const steerDir     = state.speed >= 0 ? 1 : -1;\n      carRoot.rotation.y += steerInput*steerDir*steerPower*1.85*dt;\n\n      const forward = new THREE.Vector3(Math.sin(carRoot.rotation.y), 0, Math.cos(carRoot.rotation.y));\n      carRoot.position.addScaledVector(forward, state.speed*dt);\n      carRoot.position.x = THREE.MathUtils.clamp(carRoot.position.x, -27, 27);\n      carRoot.position.z = THREE.MathUtils.clamp(carRoot.position.z, -18, 17);\n\n      carRoot.userData.wheels.forEach((wheel) => {\n        wheel.rotation.x += state.speed*dt*5.4;\n        if (wheel.userData.isFront) {\n          wheel.rotation.y = THREE.MathUtils.lerp(wheel.rotation.y, -steerInput*0.34, 0.22);\n        }\n      });\n\n      const targetTilt  = -steerInput*steerDir*Math.min(Math.abs(state.speed)/maxSpeed,1)*0.04;\n      state.bodyTilt    = THREE.MathUtils.lerp(state.bodyTilt,  targetTilt, dt*6);\n      const accelInput  = (fwd?1:0)-(back?1:0);\n      const targetPitch = -accelInput*0.025+(braking?0.03:0);\n      state.bodyPitch   = THREE.MathUtils.lerp(state.bodyPitch, targetPitch, dt*8);\n\n      const showBrakeLight = braking || state.speed < -0.05;\n      carRoot.userData.brakeLightMat.opacity = THREE.MathUtils.lerp(carRoot.userData.brakeLightMat.opacity, showBrakeLight?0.85:0, 0.25);\n      carRoot.userData.tailGlow.intensity    = showBrakeLight ? 1.6 : 0.4;\n\n      if (carRoot.userData.steeringWheel) {\n        carRoot.userData.steeringWheel.rotation.z = THREE.MathUtils.lerp(carRoot.userData.steeringWheel.rotation.z, steerInput*0.5, 0.15);\n      }\n    }\n\n    function applyBodyTilt() {\n      carRoot.rotation.z = state.bodyTilt;\n      carRoot.rotation.x = state.bodyPitch;\n    }\n\n    // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n    // CAMERA\n    // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n    const cameraTarget = new THREE.Vector3();\n\n    function updateCamera(dt) {\n      const forward = new THREE.Vector3(Math.sin(carRoot.rotation.y), 0, Math.cos(carRoot.rotation.y));\n      const back    = forward.clone().multiplyScalar(-1);\n      const side    = new THREE.Vector3(Math.cos(carRoot.rotation.y), 0, -Math.sin(carRoot.rotation.y));\n      const base    = carRoot.position.clone();\n      const mode    = state.cameraMode;\n      let targetPos, lookAt, fov = 58;\n\n      if (mode === 'top') {\n        targetPos = new THREE.Vector3(base.x, 32, base.z+0.01);\n        lookAt    = new THREE.Vector3(base.x, 0,  base.z);\n        fov = 50;\n      } else if (mode === 'cinematic') {\n        const orbit = state.elapsed*0.32;\n        targetPos = base.clone().add(new THREE.Vector3(Math.cos(orbit)*12.5, 4.0, Math.sin(orbit)*12.5));\n        lookAt    = base.clone().add(new THREE.Vector3(0,1.0,0));\n        fov = 52;\n      } else if (mode === 'wide') {\n        targetPos = base.clone().addScaledVector(back,18).addScaledVector(side,5.5);\n        targetPos.y += 6.5;\n        lookAt = base.clone().addScaledVector(forward,4.5).add(new THREE.Vector3(0,0.9,0));\n        fov = 64;\n      } else if (mode === 'hood') {\n        targetPos = carRoot.localToWorld(new THREE.Vector3(0,1.05,1.85));\n        lookAt    = carRoot.localToWorld(new THREE.Vector3(0,0.9,9.0));\n        fov = 72;\n      } else if (mode === 'driver') {\n        targetPos = carRoot.localToWorld(new THREE.Vector3(-0.45,1.32,0.05));\n        lookAt    = carRoot.localToWorld(new THREE.Vector3(-0.30,1.22,8.0));\n        fov = 72;\n      } else if (mode === 'reverse') {\n        targetPos = carRoot.localToWorld(new THREE.Vector3(0,1.45,-1.5));\n        lookAt    = carRoot.localToWorld(new THREE.Vector3(0,0.7,-9.0));\n        fov = 78;\n      } else {\n        // Chase (default)\n        const speedOffset = Math.min(2.5, Math.abs(state.speed)*0.15);\n        targetPos = base.clone().addScaledVector(back, 11+speedOffset);\n        targetPos.y += 4.6;\n        lookAt = base.clone().addScaledVector(forward,6.5).add(new THREE.Vector3(0,1.0,0));\n        fov = 60;\n      }\n\n      if (!state.cameraInitialized) {\n        camera.position.copy(targetPos);\n        cameraTarget.copy(lookAt);\n        state.cameraInitialized = true;\n      }\n\n      const interiorMode = mode === 'driver' || mode === 'hood' || mode === 'reverse';\n      const smooth = interiorMode ? 0.35 : (mode === 'cinematic' ? 0.06 : 0.13);\n      const t = 1 - Math.pow(1-smooth, dt*60);\n\n      camera.position.lerp(targetPos, t);\n      cameraTarget.lerp(lookAt, t*1.4);\n      camera.lookAt(cameraTarget);\n      camera.fov = THREE.MathUtils.lerp(camera.fov, fov, t*0.6);\n      camera.updateProjectionMatrix();\n    }\n\n    // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n    // UI\n    // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n    function setMissionTone(tone) {\n      missionDot.classList.remove('amber','cyan');\n      if (tone === 'amber') missionDot.classList.add('amber');\n      else if (tone === 'cyan') missionDot.classList.add('cyan');\n    }\n\n    function updateUI() {\n      const speedKmh = Math.round(Math.abs(state.speed)*4.8);\n      speedText.textContent = speedKmh;\n      const battery = Math.round(state.battery);\n      batteryText.textContent = battery;\n      batteryBar.style.width  = battery + '%';\n      const align = Math.max(0, Math.min(100, Math.round(state.alignment)));\n      alignmentText.textContent = align;\n      alignBar.style.width = align + '%';\n\n      const ready = state.alignment >= 82 && Math.abs(state.speed) < 0.045 && state.activeSpot && !state.plugging && !state.plugged;\n\n      if (state.plugged) {\n        missionText.textContent = `Charging on ${state.activeSpot.label}`;\n        setMissionTone('cyan');\n      } else if (state.plugging) {\n        missionText.textContent = 'Connecting charger cable\u2026';\n        setMissionTone('amber');\n      } else if (ready) {\n        missionText.textContent = 'Ready \u2014 press E to plug in';\n        setMissionTone('default');\n      } else if (state.activeSpot && state.alignment > 40) {\n        missionText.textContent = `Line up inside ${state.activeSpot.label}`;\n        setMissionTone('amber');\n      } else {\n        missionText.textContent = 'Drive into an open EV bay';\n        setMissionTone('default');\n      }\n\n      plugPrompt.classList.toggle('visible', !!ready);\n      plugMeter.classList.toggle('visible', state.plugging);\n      const pct = Math.round(state.plugProgress*100);\n      plugFill.style.width   = pct + '%';\n      plugPercent.textContent = pct + '%';\n\n      chargingStatus.classList.toggle('visible', state.plugged);\n      if (state.plugged && state.activeSpot) {\n        chargingDetail.textContent = `${state.activeSpot.label} \u00b7 ${state.activeSpot.power} kW \u00b7 ${battery}%`;\n      }\n\n      reverseGuides.classList.toggle('visible', state.cameraMode === 'reverse');\n      camName.textContent = CAMERA_LABELS[state.cameraMode] || 'Chase';\n    }\n\n    function showToast(message) {\n      const now = performance.now();\n      if (now - state.lastToast < 800) return;\n      state.lastToast = now;\n      toastEl.textContent = message;\n      toastEl.classList.add('visible');\n      clearTimeout(showToast._t);\n      showToast._t = setTimeout(() => toastEl.classList.remove('visible'), 1700);\n    }\n\n    // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n    // ACTIONS\n    // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n    function tryPlugIn() {\n      if (state.plugged || state.plugging) return;\n      if (!state.activeSpot || state.alignment < 82 || Math.abs(state.speed) > 0.045) {\n        showToast('Park inside a glowing EV bay and stop first.');\n        return;\n      }\n      state.plugging = true;\n      state.plugProgress = 0;\n      state.speed = 0;\n      showToast(`Connecting to ${state.activeSpot.label}\u2026`);\n    }\n\n    function resetGame() {\n      state.speed = 0;\n      state.battery = 64;\n      state.plugged = false;\n      state.plugging = false;\n      state.plugProgress = 0;\n      state.activeSpot = null;\n      state.alignment = 0;\n      state.chargeTimer = 0;\n      state.bodyTilt = 0;\n      state.bodyPitch = 0;\n      carRoot.position.set(0, 0, -13.5);\n      carRoot.rotation.set(0, 0, 0);\n      chargerObjects.forEach(c => { c.idleCable.visible = true; c.plugHead.visible = true; });\n      if (activeCable) { scene.remove(activeCable); activeCable.geometry.dispose(); activeCable = null; }\n      energyParticles.forEach(p => p.visible = false);\n      state.cameraInitialized = false;\n      showToast('Reset. Pick any spot.');\n    }\n\n    function switchCamera(dir = 1) {\n      const idx  = CAMERA_MODES.indexOf(state.cameraMode);\n      const next = (idx+dir+CAMERA_MODES.length) % CAMERA_MODES.length;\n      state.cameraMode = CAMERA_MODES[next];\n      showToast(`Camera: ${CAMERA_LABELS[state.cameraMode]}`);\n    }\n\n    // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n    // INPUT\n    // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n    document.getElementById('resetBtn').addEventListener('click', resetGame);\n    document.getElementById('camCycle').addEventListener('click', () => switchCamera(1));\n    document.getElementById('helpToggle').addEventListener('click', () => {\n      document.getElementById('helpPanel').classList.toggle('open');\n    });\n\n    window.addEventListener('keydown', e => {\n      const key = e.key.toLowerCase();\n      const valid = ['w','a','s','d','arrowup','arrowdown','arrowleft','arrowright',' ','e','r','c','h'];\n      if (valid.includes(key)) e.preventDefault();\n      if (key === ' ' || key === 'e') tryPlugIn();\n      else if (key === 'r') resetGame();\n      else if (key === 'c') switchCamera(1);\n      else if (key === 'h') document.getElementById('helpPanel').classList.toggle('open');\n      else state.keys.add(key);\n    }, { passive: false });\n\n    window.addEventListener('keyup', e => state.keys.delete(e.key.toLowerCase()));\n\n    document.querySelectorAll('[data-key]').forEach(btn => {\n      const key = btn.dataset.key;\n      const down = e => {\n        e.preventDefault();\n        if (key === 'e') tryPlugIn();\n        else if (key === 'c') switchCamera(1);\n        else state.keys.add(key);\n      };\n      const up = e => { e.preventDefault(); state.keys.delete(key); };\n      btn.addEventListener('pointerdown', down);\n      btn.addEventListener('pointerup',   up);\n      btn.addEventListener('pointercancel', up);\n      btn.addEventListener('pointerleave', up);\n    });\n\n    window.addEventListener('resize', () => {\n      camera.aspect = window.innerWidth / window.innerHeight;\n      camera.updateProjectionMatrix();\n      renderer.setSize(window.innerWidth, window.innerHeight);\n    });\n\n    // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n    // DECOR ANIMATION\n    // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n    function animateDecor() {\n      greenGlow.intensity  = 4.0 + Math.sin(state.elapsed*1.6)*0.6;\n      cyanAccent.intensity = 2.2 + Math.cos(state.elapsed*1.1)*0.4;\n      rimLight.intensity   = 1.8 + Math.sin(state.elapsed*0.6)*0.2;\n      // Pulse the car fill light slightly so the car catches dynamic light\n      carFill.position.set(\n        carRoot.position.x + 4,\n        carRoot.position.y + 5,\n        carRoot.position.z - 6\n      );\n      if (rearWall.windowsLit && state.elapsed*4 % 1 < 0.016) {\n        const w = rearWall.windowsLit[Math.floor(Math.random()*rearWall.windowsLit.length)];\n        if (w) {\n          const orig = w.material.opacity;\n          w.material.opacity = orig*(0.5+Math.random()*0.5);\n          setTimeout(() => { if (w.material) w.material.opacity = orig; }, 300+Math.random()*400);\n        }\n      }\n    }\n\n    // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n    // ANIMATION LOOP\n    // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n    function tick() {\n      const dt = Math.min(clock.getDelta(), 0.033);\n      state.elapsed += dt;\n\n      if (state.plugging) {\n        state.plugProgress += dt/1.6;\n        rebuildCable(Math.min(1, state.plugProgress));\n        if (state.plugProgress >= 1) {\n          state.plugging  = false;\n          state.plugged   = true;\n          state.plugProgress = 1;\n          showToast(`\u26a1 Charging started on ${state.activeSpot.label}`);\n        }\n      }\n\n      if (state.plugged) {\n        state.chargeTimer += dt;\n        state.battery = Math.min(100, state.battery + dt*(state.activeSpot.id==='F1'?1.4:0.45));\n        rebuildCable(1);\n      }\n\n      updateCar(dt);\n      applyBodyTilt();\n      evaluateParking();\n      updateSpotVisuals();\n      updateCamera(dt);\n      animateDecor();\n      updateUI();\n\n      if (carRoot.userData.cubeCamera && Math.round(state.elapsed*60)%3===0) {\n        carRoot.userData.cubeCamera.update(renderer, scene);\n      }\n\n      renderer.render(scene, camera);\n      requestAnimationFrame(tick);\n    }\n\n    // \u2500\u2500\u2500 Startup \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n    camera.position.set(0,7,-22);\n    camera.lookAt(0,0,-10);\n\n    // Fade loading screen after scene setup (before GLB finishes)\n    // GLB has its own 8s hard timeout \u2014 this just shows the 3D scene is ready\n    setLoadingLabel('Scene ready \u2014 loading vehicle\u2026');\n    setLoadingProgress(42);\n\n    tick();\n\n    } // end startGame()\n\n  </script>\n</body>\n</html>\n";


// ============================================================================
// HOOKS
// ============================================================================
function useIsMobile(breakpoint = 768) {
  const [m, setM] = useState(typeof window !== "undefined" ? window.innerWidth < breakpoint : false);
  useEffect(() => {
    const h = () => setM(window.innerWidth < breakpoint);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, [breakpoint]);
  return m;
}

function useEscape(onEscape) {
  useEffect(() => {
    const h = (e) => { if (e.key === "Escape") onEscape(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onEscape]);
}

// Live "last updated" stamp — increments every second
function useNow(intervalMs = 1000) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const i = setInterval(() => setNow(Date.now()), intervalMs);
    return () => clearInterval(i);
  }, [intervalMs]);
  return now;
}

// ============================================================================
// MOCK DATA — pricing locked to deck; tenant/owner names per spec
// ============================================================================
const PRICING = {
  subscription: 35,
  l2Rate: 0.55,
  dcRate: 0.75,
  publicAvg: 0.89, // public DC avg, for comparison only
  ownerShare: 0.20,
};

const MOCK = {
  pricing: PRICING,

  tenant: {
    name: "Kyle Finberg",
    email: "kyle@example.de",
    apt: "Apt 3B · Spot P-12",
    building: "Kreuzberg Mitte Apartments",
    buildingId: "KMA",
    address: "Oranienstraße 47, 10999 Berlin",
    vehicle: { make: "Volkswagen", model: "ID.4", year: 2024, batteryKwh: 77, currentPct: 64 },
    subscription: { plan: "Standard Access", price: 35, status: "active", nextBilling: "2026-05-01" },
    payment: { brand: "Visa", last4: "4242", exp: "08 / 28" },
    monthUsageKwh: 142,
    accessEnabled: true,
  },

  // Charger inventory for tenant's building
  chargers: [
    { id: "A1", label: "A1", type: "Level 2", powerKw: 11, status: "available", lastCheck: "2 days ago" },
    { id: "A2", label: "A2", type: "Level 2", powerKw: 11, status: "in_use", lastCheck: "2 days ago", session: { user: "Apt 5A", kwh: 12.4, minutes: 47 } },
    { id: "A3", label: "A3", type: "Level 2", powerKw: 11, status: "available", lastCheck: "2 days ago" },
    { id: "F1", label: "F1", type: "DC Fast", powerKw: 50, status: "available", lastCheck: "5 days ago" },
  ],

  usageWeek: [
    { day: "Mon", kwh: 18 }, { day: "Tue", kwh: 22 }, { day: "Wed", kwh: 0 },
    { day: "Thu", kwh: 31 }, { day: "Fri", kwh: 24 }, { day: "Sat", kwh: 12 },
    { day: "Sun", kwh: 35 },
  ],
  usageMonths: [
    { month: "Nov", kwh: 118 }, { month: "Dec", kwh: 95 }, { month: "Jan", kwh: 134 },
    { month: "Feb", kwh: 128 }, { month: "Mar", kwh: 156 }, { month: "Apr", kwh: 142 },
  ],
  invoices: [
    { id: "INV-2026-04", date: "2026-04-30", amount: 118.70, status: "due", kwh: 142 },
    { id: "INV-2026-03", date: "2026-03-31", amount: 127.00, status: "paid", kwh: 156 },
    { id: "INV-2026-02", date: "2026-02-28", amount: 110.60, status: "paid", kwh: 128 },
    { id: "INV-2026-01", date: "2026-01-31", amount: 114.10, status: "paid", kwh: 134 },
  ],

  // Owner
  owner: {
    name: "Property Operations",
    company: "Berlin Urban Living GmbH",
    email: "ops@berlinurbanliving.de",
  },
  portfolio: {
    buildings: 3,
    activeChargers: 12,
    activeTenants: 28,
    monthlyRevenue: 3420,
    networkUptime: 99.2,
    openTickets: 1,
    nextPayoutDate: "2026-05-05",
  },
  buildings: [
    {
      id: "KMA", name: "Kreuzberg Mitte Apartments",
      address: "Oranienstraße 47, 10999 Berlin",
      units: 32, occupancy: 11, occupancyRate: 0.34,
      chargers: { l2: 3, dc: 1 },
      uptime: 99.4, monthlyKwh: 1840, monthlyRevenue: 1240,
      status: "operational", lastInspection: "2026-02-14",
      coords: { x: 0.52, y: 0.62 },
    },
    {
      id: "PBR", name: "Prenzlauer Berg Residences",
      address: "Schönhauser Allee 92, 10439 Berlin",
      units: 48, occupancy: 12, occupancyRate: 0.25,
      chargers: { l2: 3, dc: 1 },
      uptime: 99.1, monthlyKwh: 2010, monthlyRevenue: 1380,
      status: "operational", lastInspection: "2026-01-22",
      coords: { x: 0.58, y: 0.32 },
    },
    {
      id: "NUL", name: "Neukölln Urban Lofts",
      address: "Karl-Marx-Str. 158, 12043 Berlin",
      units: 24, occupancy: 5, occupancyRate: 0.21,
      chargers: { l2: 3, dc: 1 },
      uptime: 98.9, monthlyKwh: 1190, monthlyRevenue: 800,
      status: "operational", lastInspection: "2026-03-08",
      coords: { x: 0.46, y: 0.78 },
    },
  ],
  installations: [
    { id: "I-101", building: "Kreuzberg 14", stage: "site_survey", date: "2026-05-12", units: 28 },
    { id: "I-102", building: "Mitte Residenz", stage: "permit", date: "2026-05-20", units: 42 },
    { id: "I-103", building: "Charlottenburg 88", stage: "scheduled", date: "2026-06-03", units: 36 },
  ],
  ownerRevenue: [
    { month: "Nov", revenue: 2640, share: 528 },
    { month: "Dec", revenue: 2890, share: 578 },
    { month: "Jan", revenue: 3110, share: 622 },
    { month: "Feb", revenue: 3220, share: 644 },
    { month: "Mar", revenue: 3380, share: 676 },
    { month: "Apr", revenue: 3420, share: 684 },
  ],
  tickets: [
    {
      id: "MT-2041", building: "Kreuzberg Mitte Apartments", chargerId: "F1",
      issue: "Cable inspection required", priority: "medium", status: "open",
      created: "2026-04-26", technician: "Unassigned", eta: "2026-04-30",
    },
  ],
};

// Single source of truth for billing math
function computeBill(usageKwh) {
  const l2Kwh = Math.round(usageKwh * 0.8);
  const dcKwh = usageKwh - l2Kwh;
  const l2Cost = l2Kwh * PRICING.l2Rate;
  const dcCost = dcKwh * PRICING.dcRate;
  return {
    l2Kwh, dcKwh, l2Cost, dcCost,
    subscription: PRICING.subscription,
    total: PRICING.subscription + l2Cost + dcCost,
  };
}

// ============================================================================
// AUTH CONTEXT
// ============================================================================
const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = useCallback((email, password, role) =>
    new Promise((resolve) => {
      setTimeout(() => {
        const u = role === "owner"
          ? { ...MOCK.owner, role: "owner" }
          : { ...MOCK.tenant, role: "tenant" };
        if (email) u.email = email;
        setUser(u);
        resolve(u);
      }, 600);
    }), []);

  const demoLogin = useCallback((role) =>
    new Promise((resolve) => {
      setTimeout(() => {
        const u = role === "owner"
          ? { ...MOCK.owner, role: "owner" }
          : { ...MOCK.tenant, role: "tenant" };
        setUser(u);
        resolve(u);
      }, 400);
    }), []);

  const signup = useCallback((data) =>
    new Promise((resolve) => {
      setTimeout(() => {
        const base = data.role === "owner" ? MOCK.owner : MOCK.tenant;
        const u = { ...base, name: data.name || base.name, email: data.email, role: data.role };
        setUser(u);
        resolve(u);
      }, 700);
    }), []);

  const logout = useCallback(() => setUser(null), []);

  return (
    <AuthContext.Provider value={{ user, login, demoLogin, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
const useAuth = () => useContext(AuthContext);

// ============================================================================
// HASH ROUTER — supports back/forward/refresh, real URL state
// ============================================================================
const RouterContext = createContext(null);

function parseHash() {
  const h = (window.location.hash || "#/").replace(/^#/, "");
  return h || "/";
}

function RouterProvider({ children }) {
  const [path, setPath] = useState(() =>
    typeof window !== "undefined" ? parseHash() : "/"
  );

  useEffect(() => {
    const h = () => setPath(parseHash());
    window.addEventListener("hashchange", h);
    return () => window.removeEventListener("hashchange", h);
  }, []);

  const navigate = useCallback((p) => {
    if (!p.startsWith("/")) p = "/" + p;
    if (window.location.hash !== "#" + p) {
      window.location.hash = "#" + p;
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}
const useRouter = () => useContext(RouterContext);

// ============================================================================
// TOAST SYSTEM
// ============================================================================
const ToastContext = createContext(null);

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const idRef = useRef(0);

  const dismiss = useCallback((id) => {
    setToasts((ts) => ts.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback((message, opts = {}) => {
    const id = ++idRef.current;
    const { type = "success", duration = 3500, description } = opts;
    setToasts((ts) => [...ts, { id, message, type, description }]);
    if (duration > 0) {
      setTimeout(() => dismiss(id), duration);
    }
    return id;
  }, [dismiss]);

  return (
    <ToastContext.Provider value={{ toast, dismiss }}>
      {children}
      <div style={{
        position: "fixed",
        bottom: S.lg, right: S.lg,
        display: "flex", flexDirection: "column", gap: S.xs,
        zIndex: 9999,
        maxWidth: 380,
        pointerEvents: "none",
      }}>
        {toasts.map((t) => <ToastItem key={t.id} toast={t} onDismiss={() => dismiss(t.id)} />)}
      </div>
    </ToastContext.Provider>
  );
}

function ToastItem({ toast, onDismiss }) {
  const config = {
    success: { icon: CheckCircle2, color: T.green, bg: T.surface },
    error: { icon: XCircle, color: T.red, bg: T.surface },
    info: { icon: Info, color: T.blue, bg: T.surface },
    warning: { icon: AlertTriangle, color: T.amber, bg: T.surface },
  }[toast.type] || { icon: Info, color: T.text, bg: T.surface };
  const Icon = config.icon;

  return (
    <div
      className="gb-toast-in"
      role="status"
      style={{
        background: config.bg,
        border: `1px solid ${T.borderStrong}`,
        borderLeft: `3px solid ${config.color}`,
        borderRadius: RADIUS.md,
        padding: `${S.sm}px ${S.md}px`,
        display: "flex", alignItems: "flex-start", gap: S.sm,
        boxShadow: SHADOW.lg,
        pointerEvents: "auto",
        minWidth: 280,
      }}
    >
      <Icon size={16} color={config.color} style={{ marginTop: 2, flexShrink: 0 }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 500, color: T.text, lineHeight: 1.4 }}>
          {toast.message}
        </div>
        {toast.description && (
          <div style={{ fontSize: 12, color: T.textDim, marginTop: 2, lineHeight: 1.5 }}>
            {toast.description}
          </div>
        )}
      </div>
      <button
        onClick={onDismiss}
        aria-label="Dismiss"
        style={{
          background: "transparent", border: "none",
          color: T.textFaint, cursor: "pointer",
          padding: 2, display: "flex", flexShrink: 0,
        }}
      >
        <X size={14} />
      </button>
    </div>
  );
}
const useToast = () => useContext(ToastContext);

// ============================================================================
// MODAL SYSTEM
// ============================================================================
function Modal({ open, onClose, title, description, children, footer, size = "md" }) {
  useEscape(open ? onClose : () => {});
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  if (!open) return null;
  const widths = { sm: 380, md: 460, lg: 580 };

  return (
    <div
      onClick={onClose}
      role="dialog" aria-modal="true"
      style={{
        position: "fixed", inset: 0, zIndex: 200,
        background: "rgba(7, 16, 20, 0.55)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: S.md,
        animation: "gb-fade-in 200ms ease-out",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="gb-scale-in"
        style={{
          background: T.surface,
          border: `1px solid ${T.borderStrong}`,
          borderRadius: RADIUS.xl,
          width: "100%", maxWidth: widths[size],
          boxShadow: SHADOW.lg,
          maxHeight: "90vh",
          display: "flex", flexDirection: "column",
        }}
      >
        <div style={{
          padding: `${S.lg}px ${S.lg}px ${S.md}px`,
          display: "flex", alignItems: "flex-start", justifyContent: "space-between",
          gap: S.md,
        }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h3 style={{
              fontSize: 17, fontWeight: 600,
              margin: 0, color: T.text,
              letterSpacing: "-0.01em",
            }}>{title}</h3>
            {description && (
              <p style={{
                fontSize: 13, color: T.textDim,
                margin: `${S.xxs}px 0 0`, lineHeight: 1.5,
              }}>{description}</p>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              background: "transparent", border: "none", padding: S.xxs,
              cursor: "pointer", color: T.textFaint,
              display: "flex", alignItems: "center",
              borderRadius: RADIUS.sm,
              flexShrink: 0,
            }}
          >
            <X size={18} />
          </button>
        </div>
        <div style={{
          padding: `0 ${S.lg}px ${S.lg}px`,
          overflowY: "auto",
          flex: 1,
        }}>
          {children}
        </div>
        {footer && (
          <div style={{
            padding: `${S.md}px ${S.lg}px`,
            borderTop: `1px solid ${T.border}`,
            background: T.surface2,
            borderRadius: `0 0 ${RADIUS.xl}px ${RADIUS.xl}px`,
          }}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// PRIMITIVES — Button, Input, Card, Badge, StatusDot, Logo, Spinner
// ============================================================================
function Logo({ size = 28, withText = true, dark = false }) {
  const fg = dark ? T.greenBright : T.green;
  const tx = dark ? T.textInvert : T.text;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden="true">
        {/* Stylized "G" with bolt cutout — clean German-engineered mark */}
        <rect x="1" y="1" width="26" height="26" rx="6" stroke={fg} strokeWidth="1.5" fill={dark ? "transparent" : "transparent"} />
        <path d="M14 7 L9 15 H13 L11 21 L19 13 H15 L17 7 Z" fill={fg} />
      </svg>
      {withText && (
        <span style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontWeight: 600, fontSize: size * 0.6,
          letterSpacing: "-0.02em", color: tx,
        }}>
          GridBridge
        </span>
      )}
    </div>
  );
}

function Spinner({ size = 14, color }) {
  return <Loader2 size={size} className="gb-spin" color={color} />;
}

function Button({
  children, variant = "primary", size = "md", onClick, type = "button",
  disabled, loading, fullWidth, icon: Icon, iconRight: IconRight, dark = false,
  ariaLabel,
}) {
  const styles = {
    primary: {
      background: T.green, color: "#FFFFFF",
      border: `1px solid ${T.green}`,
      hoverBg: T.greenDeep,
    },
    secondary: dark ? {
      background: "transparent", color: T.textInvert,
      border: `1px solid ${T.borderDarkStrong}`,
      hoverBg: T.surfaceDark2,
    } : {
      background: T.surface, color: T.text,
      border: `1px solid ${T.borderStrong}`,
      hoverBg: T.surface2,
    },
    ghost: dark ? {
      background: "transparent", color: T.textInvertDim,
      border: "1px solid transparent",
      hoverBg: T.surfaceDark2, hoverColor: T.textInvert,
    } : {
      background: "transparent", color: T.textDim,
      border: "1px solid transparent",
      hoverBg: T.surface2, hoverColor: T.text,
    },
    danger: {
      background: T.surface, color: T.red,
      border: `1px solid ${T.red}40`,
      hoverBg: T.redBg,
    },
  };
  const sizes = {
    sm: { padding: "6px 12px", fontSize: 12.5, h: 30 },
    md: { padding: "9px 16px", fontSize: 13.5, h: 36 },
    lg: { padding: "12px 22px", fontSize: 14.5, h: 44 },
  };
  const s = styles[variant];
  const sz = sizes[size];
  const isDisabled = disabled || loading;

  return (
    <button
      type={type} onClick={onClick} disabled={isDisabled} aria-label={ariaLabel}
      style={{
        background: s.background, color: s.color, border: s.border,
        padding: sz.padding, fontSize: sz.fontSize, height: sz.h,
        fontWeight: 500, borderRadius: RADIUS.md,
        cursor: isDisabled ? "not-allowed" : "pointer",
        opacity: isDisabled && !loading ? 0.5 : 1,
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        gap: 8, width: fullWidth ? "100%" : "auto",
        transition: "background 150ms ease, color 150ms ease, border-color 150ms ease",
        fontFamily: "inherit",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) => {
        if (isDisabled) return;
        if (s.hoverBg) e.currentTarget.style.background = s.hoverBg;
        if (s.hoverColor) e.currentTarget.style.color = s.hoverColor;
      }}
      onMouseLeave={(e) => {
        if (isDisabled) return;
        e.currentTarget.style.background = s.background;
        e.currentTarget.style.color = s.color;
      }}
    >
      {loading ? <Spinner size={14} color={s.color} /> : (Icon && <Icon size={14} />)}
      {children}
      {IconRight && !loading && <IconRight size={14} />}
    </button>
  );
}

function Input({ label, type = "text", value, onChange, placeholder, icon: Icon, error, hint, autoComplete, dark = false }) {
  const [focus, setFocus] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const isPw = type === "password";
  const effectiveType = isPw ? (showPw ? "text" : "password") : type;

  const colors = dark ? {
    label: T.textInvertDim, text: T.textInvert,
    bg: T.surfaceDark, border: T.borderDarkStrong,
    iconFaint: T.textInvertFaint,
  } : {
    label: T.textDim, text: T.text,
    bg: T.surface, border: T.borderStrong,
    iconFaint: T.textFaint,
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {label && (
        <label style={{
          fontSize: 12, color: colors.label, fontWeight: 500,
          letterSpacing: "0.02em",
        }}>{label}</label>
      )}
      <div style={{ position: "relative" }}>
        {Icon && (
          <Icon size={15} style={{
            position: "absolute", left: 12, top: "50%",
            transform: "translateY(-50%)",
            color: focus ? T.green : colors.iconFaint,
            transition: "color 150ms",
          }} />
        )}
        <input
          type={effectiveType} value={value} onChange={onChange}
          autoComplete={autoComplete}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          placeholder={placeholder}
          style={{
            width: "100%",
            padding: Icon ? "10px 14px 10px 36px" : "10px 14px",
            paddingRight: isPw ? 38 : Icon ? 14 : 14,
            background: colors.bg,
            border: `1px solid ${error ? T.red : focus ? T.green : colors.border}`,
            borderRadius: RADIUS.md,
            color: colors.text, fontSize: 14,
            fontFamily: "inherit", outline: "none",
            transition: "border-color 150ms",
            boxShadow: focus ? `0 0 0 3px ${T.green}25` : "none",
          }}
        />
        {isPw && (
          <button
            type="button"
            onClick={() => setShowPw(!showPw)}
            aria-label={showPw ? "Hide password" : "Show password"}
            style={{
              position: "absolute", right: 10, top: "50%",
              transform: "translateY(-50%)",
              background: "transparent", border: "none",
              color: colors.iconFaint, cursor: "pointer",
              padding: 4, display: "flex", alignItems: "center",
            }}
          >
            {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
          </button>
        )}
      </div>
      {error ? (
        <span style={{ fontSize: 12, color: T.red, display: "flex", alignItems: "center", gap: 4 }}>
          <AlertCircle size={12} /> {error}
        </span>
      ) : hint ? (
        <span style={{ fontSize: 12, color: dark ? T.textInvertFaint : T.textFaint }}>{hint}</span>
      ) : null}
    </div>
  );
}

function Card({ children, padding = S.lg, hover = false, style = {}, dark = false, onClick }) {
  const [h, setH] = useState(false);
  const colors = dark ? {
    bg: T.surfaceDark, border: T.borderDark, hoverBorder: T.borderDarkStrong,
  } : {
    bg: T.surface, border: T.border, hoverBorder: T.borderStrong,
  };
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => hover && setH(true)}
      onMouseLeave={() => hover && setH(false)}
      style={{
        background: colors.bg,
        border: `1px solid ${h ? colors.hoverBorder : colors.border}`,
        borderRadius: RADIUS.lg,
        padding,
        transition: "border-color 150ms, transform 150ms, box-shadow 150ms",
        boxShadow: hover && h ? SHADOW.md : "none",
        cursor: onClick ? "pointer" : "default",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function StatusDot({ status, animate = false }) {
  const colors = {
    available: T.green, in_use: T.greenBright, reserved: T.amber,
    maintenance: T.red, offline: T.textFaint, operational: T.green,
    online: T.green,
  };
  const c = colors[status] || T.textFaint;
  return (
    <span
      style={{
        display: "inline-block",
        width: 8, height: 8, borderRadius: "50%",
        background: c,
        boxShadow: `0 0 0 3px ${c}25`,
        position: "relative",
      }}
    >
      {animate && (
        <span style={{
          position: "absolute", inset: -2,
          borderRadius: "50%",
          animation: "gb-pulse-ring 1.6s ease-out infinite",
        }} />
      )}
    </span>
  );
}

function Badge({ children, color = "neutral", size = "md" }) {
  const variants = {
    success: { bg: T.greenBg, fg: T.greenDeep },
    info: { bg: T.blueBg, fg: T.blue },
    warning: { bg: T.amberBg, fg: "#A07000" },
    error: { bg: T.redBg, fg: T.red },
    neutral: { bg: T.surface2, fg: T.textDim },
    dark: { bg: T.bgDark, fg: T.greenBright },
  };
  const v = variants[color];
  const sizes = {
    sm: { padding: "2px 7px", fontSize: 10.5 },
    md: { padding: "3px 9px", fontSize: 11 },
  };
  return (
    <span style={{
      ...sizes[size],
      background: v.bg, color: v.fg,
      borderRadius: 4, fontWeight: 600,
      letterSpacing: "0.04em", textTransform: "uppercase",
      display: "inline-flex", alignItems: "center", gap: 4,
      whiteSpace: "nowrap",
    }}>
      {children}
    </span>
  );
}

function Label({ children, dark = false }) {
  return (
    <span style={{
      fontSize: 11, fontWeight: 600,
      color: dark ? T.textInvertFaint : T.textFaint,
      letterSpacing: "0.08em", textTransform: "uppercase",
    }}>
      {children}
    </span>
  );
}

// Stat used across dashboards
function Stat({ label, value, sub, icon: Icon, accent = T.green, compact = false }) {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: T.surface,
        border: `1px solid ${h ? T.borderStrong : T.border}`,
        borderRadius: RADIUS.lg,
        padding: compact ? S.md : S.lg,
        transition: "border-color 200ms ease, transform 200ms ease",
        transform: h ? "translateY(-1px)" : "none",
      }}
    >
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "flex-start",
        marginBottom: compact ? S.sm : S.md,
      }}>
        <Label>{label}</Label>
        {Icon && (
          <div style={{
            width: 28, height: 28, borderRadius: 7,
            background: accent + "15",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Icon size={14} color={accent} />
          </div>
        )}
      </div>
      <div style={{
        fontSize: compact ? 22 : 28, fontWeight: 700,
        letterSpacing: "-0.03em", color: T.text,
        marginBottom: 4, lineHeight: 1.1,
        fontVariantNumeric: "tabular-nums",
      }}>{value}</div>
      <div style={{ fontSize: 12, color: T.textFaint }}>{sub}</div>
    </div>
  );
}

// Card section header
function CardHeader({ title, action, sub }) {
  return (
    <div style={{
      display: "flex", justifyContent: "space-between", alignItems: "flex-start",
      marginBottom: S.md, gap: S.md,
    }}>
      <div>
        <h3 style={{
          fontSize: 14, fontWeight: 600, margin: 0,
          color: T.text, letterSpacing: "-0.005em",
        }}>{title}</h3>
        {sub && <div style={{ fontSize: 12, color: T.textFaint, marginTop: 2 }}>{sub}</div>}
      </div>
      {action}
    </div>
  );
}

// Live "last updated" indicator
function LiveIndicator({ label = "Last updated" }) {
  const now = useNow(1000);
  const [start] = useState(now);
  const seconds = Math.floor((now - start) / 1000);
  const text = seconds < 60 ? `${seconds}s ago` : `${Math.floor(seconds / 60)}m ago`;
  return (
    <span style={{
      fontSize: 11, color: T.textFaint,
      display: "inline-flex", alignItems: "center", gap: 6,
      letterSpacing: "0.02em",
    }}>
      <span style={{
        width: 6, height: 6, borderRadius: "50%",
        background: T.green,
        animation: "gb-pulse 1.8s ease-in-out infinite",
      }} />
      {label} {text}
    </span>
  );
}

// ============================================================================
// DECORATIVE — Berlin skyline & stars (used on dark hero, matches deck)
// ============================================================================
function BerlinSkyline({ height = 140 }) {
  // Curated, deterministic Berlin skyline — clean architectural rhythm,
  // no awkward shapes or random clipping. Each building is hand-tuned.
  const buildings = useMemo(() => [
    { x: 0, w: 6, h: 38, type: "flat" },
    { x: 6, w: 5, h: 52, type: "flat" },
    { x: 11, w: 7, h: 46, type: "flat" },
    { x: 18, w: 4, h: 62, type: "flat" },
    { x: 22, w: 6, h: 44, type: "flat" },
    { x: 28, w: 5, h: 58, type: "flat" },
    { x: 33, w: 8, h: 50, type: "flat" },
    { x: 41, w: 5, h: 68, type: "flat" },
    // Berlin TV Tower silhouette (Fernsehturm) — Berlin's iconic landmark
    { x: 46, w: 0, h: 0, type: "tower" },
    { x: 56, w: 6, h: 54, type: "flat" },
    { x: 62, w: 5, h: 42, type: "flat" },
    { x: 67, w: 7, h: 56, type: "flat" },
    { x: 74, w: 5, h: 48, type: "flat" },
    { x: 79, w: 6, h: 60, type: "flat" },
    { x: 85, w: 5, h: 44, type: "flat" },
    { x: 90, w: 6, h: 50, type: "flat" },
    { x: 96, w: 4, h: 40, type: "flat" },
  ], []);

  return (
    <svg
      viewBox="0 0 100 70"
      preserveAspectRatio="none"
      width="100%" height={height}
      style={{ display: "block" }}
      aria-hidden="true"
    >
      {/* Subtle stars */}
      {Array.from({ length: 24 }).map((_, i) => {
        const seed = (i * 7919 + 12345) % 1000;
        const x = (seed % 100);
        const y = ((seed * 3) % 25);
        const op = 0.15 + ((seed % 7) / 20);
        return (
          <circle
            key={`s-${i}`}
            cx={x} cy={y} r={0.12}
            fill={T.greenBright}
            opacity={op}
            style={{ animation: `gb-twinkle ${2.5 + (i % 3)}s ease-in-out infinite`, animationDelay: `${(i % 5) * 0.4}s` }}
          />
        );
      })}

      {/* Buildings */}
      {buildings.map((b, i) => {
        if (b.type === "tower") {
          // Fernsehturm — clean iconic representation
          return (
            <g key={i}>
              {/* Slim shaft */}
              <rect x="48" y="22" width="0.8" height="48" fill={T.surfaceDark2} />
              {/* Sphere */}
              <circle cx="48.4" cy="22" r="2.2" fill={T.surfaceDark2} stroke={T.greenBright} strokeWidth="0.18" opacity="0.95" />
              {/* Sphere window highlights */}
              <ellipse cx="48.4" cy="22" rx="2.2" ry="0.5" stroke={T.greenBright} strokeWidth="0.15" fill="none" opacity="0.7" />
              <ellipse cx="48.4" cy="21.4" rx="1.8" ry="0.3" stroke={T.greenBright} strokeWidth="0.12" fill="none" opacity="0.5" />
              {/* Antenna */}
              <line x1="48.4" y1="20" x2="48.4" y2="14" stroke={T.borderDarkStrong} strokeWidth="0.2" />
              {/* Beacon */}
              <circle cx="48.4" cy="14" r="0.4" fill={T.red}>
                <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
              </circle>
            </g>
          );
        }
        const lit = i % 3 === 0;
        const windowRows = Math.floor(b.h / 8);
        const windowCols = Math.max(1, Math.floor(b.w / 1.8));
        return (
          <g key={i}>
            <rect
              x={b.x} y={70 - b.h}
              width={b.w} height={b.h}
              fill={T.surfaceDark2}
              stroke={lit ? T.greenBright : "transparent"}
              strokeWidth="0.12"
              opacity={lit ? 0.92 : 0.78}
            />
            {/* Window pattern — cleaner grid */}
            {Array.from({ length: windowRows }).map((_, row) =>
              Array.from({ length: windowCols }).map((_, col) => {
                const wx = b.x + 0.4 + col * (b.w / windowCols);
                const wy = 70 - b.h + 4 + row * 7;
                const isLit = (i + row + col) % 4 < 2;
                return (
                  <rect
                    key={`${row}-${col}`}
                    x={wx} y={wy}
                    width={Math.min(0.5, b.w / windowCols - 0.6)}
                    height={0.5}
                    fill={isLit ? T.greenBright : T.borderDarkStrong}
                    opacity={isLit ? 0.85 : 0.35}
                  />
                );
              })
            )}
          </g>
        );
      })}

      {/* Horizon line — cleaner, single line */}
      <line x1="0" y1="70" x2="100" y2="70" stroke={T.greenBright} strokeWidth="0.12" opacity="0.4" />
    </svg>
  );
}

// ============================================================================
// PUBLIC HOMEPAGE
// ============================================================================
function HomePage() {
  const { navigate } = useRouter();
  const { demoLogin } = useAuth();
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const ownerSectionRef = useRef(null);
  const pricingSectionRef = useRef(null);
  const [demoLoading, setDemoLoading] = useState(null);
  const [driveGameOpen, setDriveGameOpen] = useState(false);

  const scrollToOwner = () => {
    ownerSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollToPricing = () => {
    pricingSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleDemo = async (role) => {
    setDemoLoading(role);
    const u = await demoLogin(role);
    setDemoLoading(null);
    toast("Demo session started", {
      description: role === "owner" ? "Berlin Urban Living GmbH" : "Kyle Finberg · Kreuzberg Mitte",
    });
    navigate(u.role === "owner" ? "/owner/dashboard" : "/tenant/dashboard");
  };

  return (
    <div style={{ minHeight: "100vh", background: T.bg }}>
      <DriveGameOverlay open={driveGameOpen} onClose={() => setDriveGameOpen(false)} />
      {/* Dark hero panel — drawn from deck cover */}
      <div style={{
        background: T.bgDark,
        position: "relative", overflow: "hidden",
      }}>
        {/* Top nav */}
        <header style={{
          padding: isMobile ? `${S.md}px ${S.md}px` : `${S.md}px ${S.xl}px`,
          position: "relative", zIndex: 2,
        }}>
          <div style={{
            maxWidth: 1280, margin: "0 auto",
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <Logo size={isMobile ? 24 : 28} dark />
            <div style={{ display: "flex", gap: S.xs }}>
              <Button variant="ghost" size={isMobile ? "sm" : "md"} dark onClick={() => navigate("/login")}>
                Sign in
              </Button>
              <Button variant="primary" size={isMobile ? "sm" : "md"} onClick={() => navigate("/signup")}>
                Create account
              </Button>
            </div>
          </div>
        </header>

        {/* Hero content */}
        <div style={{
          maxWidth: 1280, margin: "0 auto",
          padding: isMobile ? `${S.xl}px ${S.md}px ${S.xxxl}px` : `${S.xxxl}px ${S.xl}px 100px`,
          position: "relative", zIndex: 2,
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1.3fr 1fr",
          gap: isMobile ? S.xl : S.xxl,
          alignItems: "center",
        }}>
          <div className="gb-fade-in-slow">
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "5px 11px",
              border: `1px solid ${T.greenBright}40`,
              background: T.greenBgDark,
              borderRadius: RADIUS.full,
              fontSize: 11.5, fontWeight: 600,
              color: T.greenBright,
              letterSpacing: "0.04em", textTransform: "uppercase",
              marginBottom: S.lg,
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%",
                background: T.greenBright,
                animation: "gb-pulse 1.8s ease-in-out infinite",
              }} />
              Berlin network online
            </div>
            <h1 style={{
              fontSize: isMobile ? 36 : 60,
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.02,
              margin: 0, color: T.textInvert,
            }}>
              EV charging<br />
              for your <span style={{ color: T.greenBright }}>building.</span>
            </h1>
            <p className="gb-fade-in gb-d-1" style={{
              fontSize: isMobile ? 15 : 17,
              color: T.textInvertDim,
              lineHeight: 1.55,
              margin: `${S.lg}px 0 ${S.lg}px`,
              maxWidth: 520,
            }}>
              Access charging, billing, building operations, and compliance in
              one secure portal. Engineered for German apartment buildings.
            </p>
            <div className="gb-fade-in gb-d-2" style={{ display: "flex", gap: S.sm, flexWrap: "wrap" }}>
              <Button variant="primary" size="lg" onClick={() => navigate("/signup")} iconRight={ArrowRight}>
                Create account
              </Button>
              <Button variant="secondary" size="lg" dark onClick={() => navigate("/login")}>
                Sign in
              </Button>
            </div>
          </div>

          {!isMobile && (
            <div className="gb-fade-in gb-d-3">
              <ChargingHeroIllustration onOpenDrive={() => setDriveGameOpen(true)} />
            </div>
          )}
        </div>

        {/* Skyline base */}
        <div style={{ position: "relative", zIndex: 1, marginBottom: -1 }}>
          <BerlinSkyline height={isMobile ? 90 : 130} />
        </div>
      </div>

      {/* Role cards section */}
      <section style={{
        maxWidth: 1280, margin: "0 auto",
        padding: isMobile ? `${S.xl}px ${S.md}px` : `${S.xxxl}px ${S.xl}px ${S.xxl}px`,
      }}>
        <div style={{ marginBottom: S.lg }}>
          <Label>Choose your account</Label>
          <h2 style={{
            fontSize: isMobile ? 22 : 28,
            fontWeight: 700, color: T.text,
            margin: `${S.xs}px 0 0`,
            letterSpacing: "-0.02em",
          }}>
            Two portals. One platform.
          </h2>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: S.md,
        }}>
          <RoleCard
            icon={User}
            badge="Tenant"
            title="Tenant Portal"
            desc="Start sessions, reserve chargers, track usage, and manage billing — all from your phone."
            features={["Reserve & start sessions", "Real-time usage", "Monthly invoices"]}
            primaryCta="See tenant pricing"
            secondaryCta="Demo tenant"
            onPrimary={scrollToPricing}
            onSecondary={() => handleDemo("tenant")}
            secondaryLoading={demoLoading === "tenant"}
          />
          <RoleCard
            icon={Building2}
            badge="Property Owner"
            title="Property Owner Portal"
            desc="Monitor charger health, revenue share, compliance, and building performance across your portfolio."
            features={["Per-building revenue", "Maintenance & uptime", "GEIG compliance"]}
            primaryCta="See property owner benefits"
            secondaryCta="Demo owner"
            onPrimary={scrollToOwner}
            onSecondary={() => handleDemo("owner")}
            secondaryLoading={demoLoading === "owner"}
          />
        </div>
      </section>

      {/* For Property Owners section */}
      <section ref={ownerSectionRef} style={{
        background: T.surface,
        borderTop: `1px solid ${T.border}`,
        padding: isMobile ? `${S.xl}px ${S.md}px` : `${S.xxxl}px ${S.xl}px`,
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "flex-end",
            gap: S.md,
            marginBottom: S.xl,
          }}>
            <div style={{ maxWidth: 640 }}>
              <Label>For Property Owners</Label>
              <h2 style={{
                fontSize: isMobile ? 26 : 36,
                fontWeight: 700, color: T.text,
                margin: `${S.xs}px 0 ${S.sm}px`,
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
              }}>
                EV charging without the headaches.
              </h2>
              <p style={{
                fontSize: isMobile ? 14 : 16,
                color: T.textDim,
                lineHeight: 1.55,
                margin: 0,
              }}>
                EV charging infrastructure without upfront capital, maintenance burden, or compliance guesswork.
              </p>
            </div>
            <Button
              variant="primary" size="lg" iconRight={ArrowRight}
              onClick={() => handleDemo("owner")}
              loading={demoLoading === "owner"}
            >
              Open owner demo
            </Button>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: S.md,
          }}>
            <BenefitCard
              icon={Euro}
              eyebrow="01"
              title="Zero upfront cost"
              text="GridBridge installs the charging system with no upfront capital from the property owner."
              highlight="€0"
              highlightLabel="capital required"
            />
            <BenefitCard
              icon={Wrench}
              eyebrow="02"
              title="Operations handled"
              text="We install, operate, bill, support, and maintain the chargers."
              highlight="Full-service"
              highlightLabel="install to billing"
            />
            <BenefitCard
              icon={TrendingUp}
              eyebrow="03"
              title="20% revenue share"
              text="Property owners receive 20% of charging revenue from tenant usage."
              highlight="20%"
              highlightLabel="of charging revenue"
              accent
            />
            <BenefitCard
              icon={ShieldCheck}
              eyebrow="04"
              title="Compliance handled"
              text="GEIG readiness, DIN/VDE-certified installation, MID-compliant metering, and EU-resident data processing."
              highlight="GEIG · DIN/VDE · MID"
              highlightLabel="all certified"
            />
          </div>

          {/* Standard setup detail strip */}
          <div style={{
            marginTop: S.lg,
            padding: isMobile ? S.md : S.lg,
            background: T.panel,
            border: `1px solid ${T.border}`,
            borderRadius: RADIUS.lg,
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            gap: S.md,
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: RADIUS.md,
              background: T.surface,
              border: `1px solid ${T.green}30`,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <Plug size={20} color={T.greenDeep} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{
                fontSize: 11, fontWeight: 600, color: T.greenDeep,
                letterSpacing: "0.06em", textTransform: "uppercase",
                marginBottom: 4,
              }}>
                Standard building setup
              </div>
              <div style={{ fontSize: 15, color: T.text, fontWeight: 600, lineHeight: 1.5 }}>
                3 Level 2 chargers (11 kW) + 1 DC fast charger (50 kW) per building
              </div>
              <div style={{ fontSize: 13, color: T.textDim, marginTop: 2 }}>
                Sized for typical Berlin apartment buildings · scales with occupancy
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent tenant pricing section */}
      <section ref={pricingSectionRef} style={{
        background: T.bg,
        borderTop: `1px solid ${T.border}`,
        padding: isMobile ? `${S.xl}px ${S.md}px` : `${S.xxl}px ${S.xl}px`,
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ marginBottom: S.lg, maxWidth: 640 }}>
            <Label>Transparent tenant pricing</Label>
            <h2 style={{
              fontSize: isMobile ? 22 : 28,
              fontWeight: 700, color: T.text,
              margin: `${S.xs}px 0 ${S.xs}px`,
              letterSpacing: "-0.02em",
            }}>
              No hidden fees. Same rates every session.
            </h2>
            <p style={{ fontSize: 14, color: T.textDim, margin: 0, lineHeight: 1.55 }}>
              Pricing is shown before every session.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
            gap: S.sm,
          }}>
            <PricingCard
              label="Monthly access"
              value="€35"
              unit="/month"
              sub="Unlimited reservations · all chargers"
            />
            <PricingCard
              label="Level 2 charging"
              value="€0.55"
              unit="/kWh"
              sub="11 kW · most daily charging"
              accent
            />
            <PricingCard
              label="DC fast charging"
              value="€0.75"
              unit="/kWh"
              sub="50 kW · faster top-ups"
              accent
            />
            <PricingCard
              label="Hidden fees"
              value="€0"
              unit=""
              sub="Ever. Just metered usage."
            />
          </div>

          <div style={{
            marginTop: S.md,
            padding: `${S.sm}px ${S.md}px`,
            background: T.surface,
            border: `1px solid ${T.border}`,
            borderRadius: RADIUS.md,
            display: "flex", alignItems: "center", gap: S.sm,
            fontSize: 13, color: T.textDim, lineHeight: 1.5,
          }}>
            <ShieldCheck size={15} color={T.greenDeep} style={{ flexShrink: 0 }} />
            <span>
              <strong style={{ color: T.text }}>MID-compliant metering</strong> on every charger.
              Tenants are billed only for energy delivered, measured to legal billing standards.
            </span>
          </div>
        </div>
      </section>

      {/* System status strip */}
      <section style={{
        background: T.panel,
        borderTop: `1px solid ${T.border}`,
        borderBottom: `1px solid ${T.border}`,
        padding: isMobile ? `${S.lg}px ${S.md}px` : `${S.lg}px ${S.xl}px`,
      }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(5, 1fr)",
          gap: isMobile ? S.md : S.lg,
        }}>
          {[
            { label: "Berlin network", value: "Online", icon: Globe, status: "operational" },
            { label: "Compliance", value: "GDPR-ready", icon: ShieldCheck },
            { label: "Metering", value: "MID-compliant", icon: Activity },
            { label: "Installs", value: "DIN/VDE certified", icon: Wrench },
            { label: "Uptime target", value: "≥ 95%", icon: TrendingUp },
          ].map((item) => (
            <div key={item.label} style={{ display: "flex", alignItems: "center", gap: S.sm }}>
              <div style={{
                width: 36, height: 36, borderRadius: RADIUS.md,
                background: T.surface,
                border: `1px solid ${T.border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <item.icon size={15} color={T.greenDeep} />
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{
                  fontSize: 10, fontWeight: 600,
                  color: T.textFaint,
                  letterSpacing: "0.06em", textTransform: "uppercase",
                }}>{item.label}</div>
                <div style={{
                  fontSize: 13, fontWeight: 600,
                  color: T.text,
                  display: "flex", alignItems: "center", gap: 5,
                }}>
                  {item.status && <StatusDot status={item.status} />}
                  {item.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: isMobile ? `${S.lg}px ${S.md}px` : `${S.lg}px ${S.xl}px`,
      }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto",
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: S.sm,
          fontSize: 12, color: T.textFaint,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: S.sm }}>
            <Logo size={20} />
          </div>
          <span>© 2026 GridBridge GmbH · Berlin · EU-resident data processing</span>
        </div>
      </footer>
    </div>
  );
}


// ============================================================================
// GRIDBRIDGE DRIVE OVERLAY — fullscreen iframe game launched from hero visual
// ============================================================================
function DriveGameOverlay({ open, onClose }) {
  useEscape(open ? onClose : () => {});

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prevOverflow; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="GridBridge Drive gameplay demo"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        background: "rgba(2, 6, 4, 0.96)",
        animation: "gb-fade-in 180ms ease-out both",
      }}
    >
      <iframe
        title="GridBridge Drive gameplay"
        srcDoc={GRIDBRIDGE_DRIVE_GAME_HTML}
        allow="fullscreen; autoplay"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          border: 0,
          background: "#020604",
        }}
      />
      <button
        type="button"
        onClick={onClose}
        aria-label="Close gameplay and return to landing page"
        style={{
          position: "fixed",
          top: 18,
          right: 18,
          zIndex: 10001,
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          height: 40,
          padding: "0 14px",
          borderRadius: RADIUS.full,
          border: `1px solid ${T.borderDarkStrong}`,
          background: "rgba(7, 16, 20, 0.72)",
          color: T.textInvert,
          fontSize: 12,
          fontWeight: 700,
          cursor: "pointer",
          boxShadow: "0 12px 40px rgba(0,0,0,0.45)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
        }}
      >
        <X size={15} />
        Exit demo
      </button>
    </div>
  );
}

// ============================================================================
// HOMEPAGE — Charging hero illustration (signature SVG)
// Premium technical visual: building + EV + charger + animated energy flow
// ============================================================================
function ChargingHeroIllustration({ onOpenDrive }) {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Open GridBridge Drive gameplay demo"
      onClick={onOpenDrive}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpenDrive?.();
        }
      }}
      style={{
      position: "relative",
      background: T.surfaceDark,
      border: `1px solid ${T.borderDark}`,
      borderRadius: RADIUS.xl,
      padding: S.lg,
      boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
      cursor: "pointer",
      transition: "transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease",
    }}>
      <div style={{
        display: "flex", justifyContent: "space-between",
        marginBottom: S.md,
      }}>
        <div>
          <Label dark>Live preview</Label>
          <div style={{ fontSize: 14, color: T.textInvert, fontWeight: 600, marginTop: 4 }}>
            Charger A2 · Active
          </div>
        </div>
        <Badge color="dark"><StatusDot status="in_use" />In use</Badge>
      </div>

      <svg viewBox="0 0 400 220" width="100%" style={{ display: "block" }} aria-hidden="true">
        {/* Building */}
        <g>
          <rect x="20" y="30" width="130" height="160" fill={T.surfaceDark2} stroke={T.borderDarkStrong} strokeWidth="1" rx="3" />
          {/* Windows in 4x6 grid */}
          {Array.from({ length: 6 }).map((_, row) =>
            Array.from({ length: 4 }).map((_, col) => {
              const lit = (row + col * 3) % 5 < 2;
              return (
                <rect
                  key={`${row}-${col}`}
                  x={32 + col * 28} y={42 + row * 24}
                  width="18" height="14" rx="1"
                  fill={lit ? T.greenBright : T.borderDarkStrong}
                  opacity={lit ? 0.85 : 0.4}
                />
              );
            })
          )}
          {/* Door */}
          <rect x="75" y="170" width="20" height="20" fill={T.borderDarkStrong} rx="1" />
        </g>

        {/* Charger pedestal */}
        <g>
          <rect x="200" y="100" width="22" height="80" fill={T.surfaceDark2} stroke={T.greenBright} strokeWidth="1" rx="2" />
          {/* Charger screen */}
          <rect x="204" y="108" width="14" height="18" fill={T.bgDark} stroke={T.greenBright} strokeWidth="0.5" rx="1" />
          <rect x="206" y="114" width="10" height="1.5" fill={T.greenBright} opacity="0.9" />
          <rect x="206" y="118" width="6" height="1" fill={T.greenBright} opacity="0.6" />
          {/* Indicator */}
          <circle cx="211" cy="135" r="2" fill={T.greenBright}>
            <animate attributeName="opacity" values="1;0.3;1" dur="1.4s" repeatCount="indefinite" />
          </circle>
          {/* Base */}
          <rect x="195" y="180" width="32" height="6" fill={T.borderDarkStrong} rx="1" />
        </g>

        {/* Cable — animated dashed flow */}
        <path
          d="M 222 145 Q 250 145, 270 155 T 300 165"
          fill="none"
          stroke={T.greenBright}
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4 4"
          style={{ animation: "gb-energy-flow 1s linear infinite" }}
        />

        {/* EV */}
        <g>
          {/* Body */}
          <path d="M 290 165 L 305 145 L 360 145 L 380 158 L 380 175 L 290 175 Z"
            fill={T.surfaceDark2} stroke={T.greenBright} strokeWidth="1" />
          {/* Window */}
          <path d="M 308 148 L 318 152 L 360 152 L 365 158 L 308 158 Z"
            fill={T.bgDark} stroke={T.borderDarkStrong} strokeWidth="0.5" />
          {/* Wheels */}
          <circle cx="310" cy="178" r="7" fill={T.bgDark} stroke={T.borderDarkStrong} strokeWidth="1" />
          <circle cx="310" cy="178" r="3" fill={T.borderDarkStrong} />
          <circle cx="365" cy="178" r="7" fill={T.bgDark} stroke={T.borderDarkStrong} strokeWidth="1" />
          <circle cx="365" cy="178" r="3" fill={T.borderDarkStrong} />
          {/* Charging port glow */}
          <circle cx="295" cy="165" r="3" fill={T.greenBright} opacity="0.8">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.2s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Floating energy pulses along cable */}
        {[0, 0.3, 0.6].map((delay, i) => (
          <circle
            key={i}
            r="2.5" fill={T.greenBright}
            style={{ filter: "blur(0.5px)" }}
          >
            <animateMotion
              dur="1.4s"
              repeatCount="indefinite"
              begin={`${delay}s`}
              path="M 222 145 Q 250 145, 270 155 T 300 165"
            />
          </circle>
        ))}

        {/* Ground */}
        <line x1="0" y1="195" x2="400" y2="195" stroke={T.borderDarkStrong} strokeWidth="0.5" />
      </svg>

      {/* Floating metric chips */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: S.xs,
        marginTop: S.md,
      }}>
        {[
          { label: "Power", value: "11 kW" },
          { label: "Rate", value: "€0.55" },
          { label: "Energy", value: "8.4 kWh" },
        ].map((m) => (
          <div key={m.label} style={{
            background: T.bgDark,
            border: `1px solid ${T.borderDark}`,
            borderRadius: RADIUS.md,
            padding: `${S.xs}px ${S.sm}px`,
          }}>
            <div style={{
              fontSize: 9.5, fontWeight: 600,
              color: T.textInvertFaint,
              letterSpacing: "0.06em", textTransform: "uppercase",
            }}>{m.label}</div>
            <div style={{
              fontSize: 14, fontWeight: 700,
              color: T.greenBright,
              fontVariantNumeric: "tabular-nums",
              letterSpacing: "-0.01em",
              marginTop: 2,
            }}>{m.value}</div>
          </div>
        ))}
      </div>
      <div style={{
        position: "absolute",
        right: 18,
        bottom: 18,
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "9px 12px",
        borderRadius: RADIUS.full,
        background: "rgba(114, 224, 106, 0.14)",
        border: `1px solid ${T.greenBright}55`,
        color: T.greenBright,
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: "0.02em",
        boxShadow: "0 0 24px rgba(114,224,106,0.12)",
        backdropFilter: "blur(10px)",
      }}>
        <Play size={13} fill={T.greenBright} />
        Play charging demo
      </div>
    </div>

  );
}

function RoleCard({ icon: Icon, badge, title, desc, features, primaryCta, secondaryCta, onPrimary, onSecondary, secondaryLoading }) {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: T.surface,
        border: `1px solid ${h ? T.green : T.border}`,
        borderRadius: RADIUS.lg,
        padding: S.lg,
        transition: "all 200ms ease",
        transform: h ? "translateY(-2px)" : "none",
        boxShadow: h ? SHADOW.lg : SHADOW.sm,
      }}
    >
      <div style={{
        display: "flex", justifyContent: "space-between",
        alignItems: "flex-start", marginBottom: S.md,
      }}>
        <div style={{
          width: 44, height: 44, borderRadius: RADIUS.md,
          background: T.greenBg,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <Icon size={20} color={T.greenDeep} />
        </div>
        <Badge color="success">{badge}</Badge>
      </div>
      <h3 style={{
        fontSize: 19, fontWeight: 700,
        margin: "0 0 6px", color: T.text,
        letterSpacing: "-0.015em",
      }}>{title}</h3>
      <p style={{
        fontSize: 14, color: T.textDim,
        lineHeight: 1.55, margin: `0 0 ${S.md}px`,
      }}>{desc}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: S.md }}>
        {features.map((f) => (
          <div key={f} style={{
            fontSize: 13, color: T.textDim,
            display: "flex", alignItems: "center", gap: 8,
          }}>
            <CheckCircle2 size={13} color={T.green} style={{ flexShrink: 0 }} />
            {f}
          </div>
        ))}
      </div>
      <div style={{
        display: "flex", gap: S.xs,
        paddingTop: S.sm,
        borderTop: `1px solid ${T.border}`,
      }}>
        <Button variant="primary" size="sm" onClick={onPrimary} iconRight={ArrowRight}>
          {primaryCta}
        </Button>
        <Button variant="secondary" size="sm" onClick={onSecondary} loading={secondaryLoading}>
          {secondaryCta}
        </Button>
      </div>
    </div>
  );
}

// Benefit card for "For Property Owners" section
function BenefitCard({ icon: Icon, eyebrow, title, text, highlight, highlightLabel, accent }) {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: T.surface,
        border: `1px solid ${h ? T.borderStrong : T.border}`,
        borderRadius: RADIUS.lg,
        padding: S.lg,
        transition: "all 200ms ease",
        transform: h ? "translateY(-1px)" : "none",
        boxShadow: h ? SHADOW.md : SHADOW.sm,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {accent && (
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 3,
          background: `linear-gradient(90deg, ${T.green}, ${T.greenBright})`,
        }} />
      )}
      <div style={{
        display: "flex", alignItems: "center", gap: S.sm,
        marginBottom: S.sm,
      }}>
        <div style={{
          width: 40, height: 40, borderRadius: RADIUS.md,
          background: accent ? T.greenBgStrong : T.greenBg,
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}>
          <Icon size={18} color={T.greenDeep} />
        </div>
        <span style={{
          fontSize: 11, fontWeight: 700,
          color: T.textFaint,
          letterSpacing: "0.08em",
          fontVariantNumeric: "tabular-nums",
        }}>
          {eyebrow}
        </span>
      </div>
      <h3 style={{
        fontSize: 18, fontWeight: 700,
        margin: "0 0 6px", color: T.text,
        letterSpacing: "-0.015em",
      }}>{title}</h3>
      <p style={{
        fontSize: 14, color: T.textDim,
        lineHeight: 1.55, margin: `0 0 ${S.md}px`,
      }}>{text}</p>
      <div style={{
        paddingTop: S.sm,
        borderTop: `1px dashed ${T.border}`,
        display: "flex", alignItems: "baseline", gap: S.xs,
      }}>
        <span style={{
          fontSize: 22, fontWeight: 700,
          color: accent ? T.greenDeep : T.text,
          letterSpacing: "-0.025em",
          fontVariantNumeric: "tabular-nums",
          lineHeight: 1.1,
        }}>
          {highlight}
        </span>
        <span style={{
          fontSize: 12, color: T.textFaint,
          fontWeight: 500,
        }}>
          {highlightLabel}
        </span>
      </div>
    </div>
  );
}

// Pricing card for tenant pricing preview
function PricingCard({ label, value, unit, sub, accent }) {
  return (
    <div style={{
      background: T.surface,
      border: `1px solid ${accent ? T.green + "40" : T.border}`,
      borderRadius: RADIUS.lg,
      padding: S.md,
      position: "relative",
    }}>
      <div style={{
        fontSize: 10.5, fontWeight: 600,
        color: T.textFaint,
        letterSpacing: "0.06em", textTransform: "uppercase",
        marginBottom: 8,
      }}>
        {label}
      </div>
      <div style={{
        display: "flex", alignItems: "baseline", gap: 3,
        marginBottom: 6,
      }}>
        <span style={{
          fontSize: 32, fontWeight: 700,
          color: accent ? T.greenDeep : T.text,
          letterSpacing: "-0.03em",
          fontVariantNumeric: "tabular-nums",
          lineHeight: 1,
        }}>
          {value}
        </span>
        {unit && (
          <span style={{
            fontSize: 13, color: T.textFaint,
            fontWeight: 500,
          }}>
            {unit}
          </span>
        )}
      </div>
      <div style={{
        fontSize: 12, color: T.textDim,
        lineHeight: 1.4,
      }}>
        {sub}
      </div>
    </div>
  );
}

// ============================================================================
// AUTH SHELL (used by Login & Signup)
// ============================================================================
function AuthShell({ children }) {
  const { navigate } = useRouter();
  return (
    <div style={{
      minHeight: "100vh", background: T.bg,
      display: "flex", flexDirection: "column",
    }}>
      <header style={{
        padding: `${S.md}px ${S.xl}px`,
        borderBottom: `1px solid ${T.border}`,
        background: T.surface,
      }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <button
            onClick={() => navigate("/")}
            style={{ background: "transparent", border: "none", padding: 0, cursor: "pointer" }}
          >
            <Logo />
          </button>
          <button
            onClick={() => navigate("/")}
            style={{
              display: "flex", alignItems: "center", gap: 4,
              fontSize: 13, color: T.textDim,
              background: "transparent", border: "none",
              cursor: "pointer", fontFamily: "inherit",
            }}
          >
            <ChevronLeft size={14} /> Back to home
          </button>
        </div>
      </header>
      <div style={{
        flex: 1,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: `${S.xl}px ${S.md}px`,
      }}>
        <div className="gb-fade-in" style={{
          width: "100%", maxWidth: 420,
          background: T.surface,
          border: `1px solid ${T.border}`,
          borderRadius: RADIUS.xl,
          padding: S.xl,
          boxShadow: SHADOW.md,
        }}>
          {children}
        </div>
      </div>
    </div>
  );
}

function RoleToggle({ role, onChange }) {
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "1fr 1fr",
      gap: 4, padding: 4,
      background: T.surface2,
      border: `1px solid ${T.border}`,
      borderRadius: RADIUS.md,
    }}>
      {[
        { key: "tenant", label: "Tenant", icon: User },
        { key: "owner", label: "Property Owner", icon: Building2 },
      ].map((r) => (
        <button
          key={r.key}
          onClick={() => onChange(r.key)}
          style={{
            padding: "9px 12px",
            background: role === r.key ? T.surface : "transparent",
            border: role === r.key ? `1px solid ${T.borderStrong}` : "1px solid transparent",
            borderRadius: 6,
            color: role === r.key ? T.text : T.textDim,
            fontSize: 13, fontWeight: 500,
            cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
            fontFamily: "inherit",
            transition: "all 150ms",
            boxShadow: role === r.key ? SHADOW.sm : "none",
          }}
        >
          <r.icon size={13} />
          {r.label}
        </button>
      ))}
    </div>
  );
}

function LoginPage() {
  const { navigate } = useRouter();
  const { login, demoLogin } = useAuth();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("tenant");
  const [loading, setLoading] = useState(false);
  const [demoLoading, setDemoLoading] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!email) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) e.email = "Enter a valid email";
    if (!password) e.password = "Password is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    const u = await login(email, password, role);
    setLoading(false);
    toast("Signed in successfully");
    navigate(u.role === "owner" ? "/owner/dashboard" : "/tenant/dashboard");
  };

  const handleDemo = async (r) => {
    setDemoLoading(r);
    const u = await demoLogin(r);
    setDemoLoading(null);
    toast("Demo session started", { description: r === "owner" ? "Berlin Urban Living GmbH" : "Kyle Finberg · Kreuzberg Mitte" });
    navigate(u.role === "owner" ? "/owner/dashboard" : "/tenant/dashboard");
  };

  return (
    <AuthShell>
      <div style={{ marginBottom: S.lg }}>
        <h1 style={{
          fontSize: 24, fontWeight: 700,
          letterSpacing: "-0.02em", margin: "0 0 6px",
          color: T.text,
        }}>Sign in</h1>
        <p style={{ fontSize: 13, color: T.textDim, margin: 0, lineHeight: 1.5 }}>
          Welcome back to GridBridge.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: S.sm }}>
        <RoleToggle role={role} onChange={setRole} />

        <Input
          label="Email" type="email" icon={Mail}
          autoComplete="email"
          value={email} onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.de"
          error={errors.email}
        />
        <Input
          label="Password" type="password" icon={Lock}
          autoComplete="current-password"
          value={password} onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          error={errors.password}
        />

        <Button
          variant="primary" onClick={handleSubmit}
          loading={loading} disabled={demoLoading !== null}
          fullWidth size="lg"
        >
          {loading ? "Signing in…" : "Sign in"}
        </Button>

        <div style={{
          display: "flex", alignItems: "center", gap: S.sm,
          margin: `${S.xs}px 0`,
        }}>
          <div style={{ flex: 1, height: 1, background: T.border }} />
          <span style={{ fontSize: 11, color: T.textFaint, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Or try demo
          </span>
          <div style={{ flex: 1, height: 1, background: T.border }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: S.xs }}>
          <Button
            variant="secondary"
            onClick={() => handleDemo("tenant")}
            loading={demoLoading === "tenant"}
            disabled={loading || demoLoading !== null}
            icon={User}
          >
            Demo tenant
          </Button>
          <Button
            variant="secondary"
            onClick={() => handleDemo("owner")}
            loading={demoLoading === "owner"}
            disabled={loading || demoLoading !== null}
            icon={Building2}
          >
            Demo owner
          </Button>
        </div>

        <div style={{
          fontSize: 13, color: T.textDim,
          textAlign: "center", marginTop: S.xs,
        }}>
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            style={{
              background: "transparent", border: "none",
              color: T.green, cursor: "pointer",
              fontFamily: "inherit", fontSize: 13,
              padding: 0, fontWeight: 600,
            }}
          >Create one</button>
        </div>
      </div>
    </AuthShell>
  );
}

function SignupPage() {
  const { navigate, path } = useRouter();
  const { signup } = useAuth();
  const { toast } = useToast();
  const isMobile = useIsMobile();

  // Parse role from query string
  const initialRole = useMemo(() => {
    const q = path.includes("?") ? path.split("?")[1] : "";
    const params = new URLSearchParams(q);
    return params.get("role") === "owner" ? "owner" : "tenant";
  }, [path]);

  const [role, setRole] = useState(initialRole);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [building, setBuilding] = useState("");
  const [aptSpot, setAptSpot] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [company, setCompany] = useState("");
  const [units, setUnits] = useState("");
  const [ownerRole, setOwnerRole] = useState("owner");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!name) e.name = "Required";
    if (!email) e.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(email)) e.email = "Invalid email";
    if (!password) e.password = "Required";
    else if (password.length < 8) e.password = "Min 8 characters";
    if (role === "tenant" && !building) e.building = "Required";
    if (role === "owner" && !company) e.company = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    const u = await signup({ name, email, password, role });
    setLoading(false);
    toast("Account created", { description: "Welcome to GridBridge" });
    navigate(u.role === "owner" ? "/owner/dashboard" : "/tenant/dashboard");
  };

  return (
    <AuthShell>
      <div style={{ marginBottom: S.lg }}>
        <h1 style={{
          fontSize: 24, fontWeight: 700,
          letterSpacing: "-0.02em", margin: "0 0 6px",
          color: T.text,
        }}>Create account</h1>
        <p style={{ fontSize: 13, color: T.textDim, margin: 0, lineHeight: 1.5 }}>
          Get charging access in your building.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: S.sm }}>
        <RoleToggle role={role} onChange={setRole} />

        <Input
          label={role === "owner" ? "Contact name" : "Full name"}
          icon={User}
          value={name} onChange={(e) => setName(e.target.value)}
          placeholder={role === "owner" ? "Property Operations" : "Kyle Finberg"}
          error={errors.name}
          autoComplete="name"
        />
        <Input
          label="Email" type="email" icon={Mail}
          value={email} onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.de"
          error={errors.email}
          autoComplete="email"
        />
        <Input
          label="Password" type="password" icon={Lock}
          value={password} onChange={(e) => setPassword(e.target.value)}
          placeholder="At least 8 characters"
          error={errors.password}
          autoComplete="new-password"
        />

        {role === "tenant" ? (
          <>
            <Input
              label="Building address" icon={Building2}
              value={building} onChange={(e) => setBuilding(e.target.value)}
              placeholder="Oranienstraße 47, Berlin"
              error={errors.building}
            />
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: S.xs,
            }}>
              <Input
                label="Apartment / parking"
                value={aptSpot} onChange={(e) => setAptSpot(e.target.value)}
                placeholder="Apt 3B / P-12"
              />
              <Input
                label="Vehicle"
                value={vehicle} onChange={(e) => setVehicle(e.target.value)}
                placeholder="VW ID.4 (2024)"
              />
            </div>
          </>
        ) : (
          <>
            <Input
              label="Company" icon={Building2}
              value={company} onChange={(e) => setCompany(e.target.value)}
              placeholder="Berlin Urban Living GmbH"
              error={errors.company}
            />
            <Input
              label="Building address"
              value={building} onChange={(e) => setBuilding(e.target.value)}
              placeholder="Oranienstraße 47, Berlin"
            />
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: S.xs,
            }}>
              <Input
                label="Number of units" type="number"
                value={units} onChange={(e) => setUnits(e.target.value)}
                placeholder="32"
              />
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label htmlFor="signup-role" style={{ fontSize: 12, color: T.textDim, fontWeight: 500 }}>Role</label>
                <select
                  id="signup-role"
                  value={ownerRole} onChange={(e) => setOwnerRole(e.target.value)}
                  style={{
                    height: 38,
                    padding: "0 10px",
                    background: T.surface,
                    border: `1px solid ${T.borderStrong}`,
                    borderRadius: RADIUS.md,
                    fontSize: 14, color: T.text,
                    fontFamily: "inherit",
                    cursor: "pointer",
                  }}
                >
                  <option value="owner">Owner</option>
                  <option value="manager">Property manager</option>
                </select>
              </div>
            </div>
          </>
        )}

        <Button variant="primary" onClick={handleSubmit} loading={loading} fullWidth size="lg">
          {loading ? "Creating account…" : "Create account"}
        </Button>

        <div style={{
          fontSize: 11.5, color: T.textFaint,
          lineHeight: 1.6, textAlign: "center",
          padding: `${S.xs}px ${S.sm}px`,
          background: T.surface2,
          borderRadius: RADIUS.md,
          border: `1px solid ${T.border}`,
        }}>
          By creating an account you accept our Terms and{" "}
          <span style={{ color: T.greenDeep, fontWeight: 600 }}>GDPR-compliant</span> privacy policy.
          All data processed within the EU.
        </div>

        <div style={{
          fontSize: 13, color: T.textDim, textAlign: "center",
        }}>
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            style={{
              background: "transparent", border: "none",
              color: T.green, cursor: "pointer",
              fontFamily: "inherit", fontSize: 13,
              padding: 0, fontWeight: 600,
            }}
          >Sign in</button>
        </div>
      </div>
    </AuthShell>
  );
}

// ============================================================================
// DASHBOARD SHELL — top nav, mobile drawer (used by both tenant & owner)
// ============================================================================
function DashboardShell({ navItems, activeItem, onNavigate, userName, badge, badgeColor = "success", contextLine, children }) {
  const { logout } = useAuth();
  const { navigate } = useRouter();
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
    toast("Signed out");
    navigate("/");
  };

  const handleNav = (k) => {
    onNavigate(k);
    setOpen(false);
  };

  return (
    <div style={{ minHeight: "100vh", background: T.bg }}>
      {/* Dark top bar — premium command surface */}
      <header style={{
        background: T.bgDark,
        borderBottom: `1px solid ${T.borderDark}`,
        position: "sticky", top: 0, zIndex: 50,
      }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto",
          padding: isMobile ? `10px ${S.md}px` : `12px ${S.xl}px`,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: S.md,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: S.lg, minWidth: 0 }}>
            <Logo size={isMobile ? 22 : 26} dark />
            {!isMobile && contextLine && (
              <div style={{
                paddingLeft: S.lg,
                borderLeft: `1px solid ${T.borderDark}`,
              }}>
                <div style={{
                  fontSize: 10.5, color: T.textInvertFaint,
                  letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600,
                }}>
                  {contextLine.label}
                </div>
                <div style={{
                  fontSize: 13, color: T.textInvert, fontWeight: 600,
                  display: "flex", alignItems: "center", gap: 6,
                  marginTop: 2,
                }}>
                  <StatusDot status="operational" />
                  {contextLine.value}
                </div>
              </div>
            )}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: S.xs }}>
            {!isMobile && (
              <>
                <Badge color={badgeColor} size="sm">{badge}</Badge>
                <span style={{
                  fontSize: 13, color: T.textInvertDim,
                  maxWidth: 160, overflow: "hidden",
                  textOverflow: "ellipsis", whiteSpace: "nowrap",
                  marginRight: S.xs,
                }}>{userName}</span>
                <button
                  onClick={handleLogout}
                  aria-label="Sign out"
                  title="Sign out"
                  style={{
                    background: "transparent",
                    border: `1px solid ${T.borderDarkStrong}`,
                    borderRadius: RADIUS.sm,
                    padding: 7,
                    cursor: "pointer",
                    color: T.textInvertDim,
                    display: "flex", alignItems: "center",
                    transition: "all 150ms",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = T.textInvert;
                    e.currentTarget.style.background = T.surfaceDark2;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = T.textInvertDim;
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <LogOut size={14} />
                </button>
              </>
            )}
            {isMobile && (
              <button
                onClick={() => setOpen(!open)}
                aria-label="Menu"
                style={{
                  background: open ? T.surfaceDark2 : "transparent",
                  border: `1px solid ${T.borderDarkStrong}`,
                  borderRadius: RADIUS.sm,
                  padding: 7,
                  cursor: "pointer",
                  color: T.textInvert,
                  display: "flex", alignItems: "center",
                }}
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            )}
          </div>
        </div>

        {/* Sub nav (desktop) */}
        {!isMobile && (
          <div style={{
            maxWidth: 1280, margin: "0 auto",
            padding: `0 ${S.xl}px`,
            display: "flex", gap: 2,
            borderTop: `1px solid ${T.borderDark}`,
          }}>
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNav(item.key)}
                style={{
                  background: "transparent", border: "none",
                  padding: "11px 16px",
                  color: activeItem === item.key ? T.greenBright : T.textInvertDim,
                  fontSize: 13, fontWeight: 500,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  borderBottom: `2px solid ${activeItem === item.key ? T.greenBright : "transparent"}`,
                  marginBottom: -1,
                  transition: "color 150ms",
                  display: "flex", alignItems: "center", gap: 6,
                }}
                onMouseEnter={(e) => { if (activeItem !== item.key) e.currentTarget.style.color = T.textInvert; }}
                onMouseLeave={(e) => { if (activeItem !== item.key) e.currentTarget.style.color = T.textInvertDim; }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}

        {/* Mobile drawer */}
        {isMobile && open && (
          <div className="gb-slide-down" style={{
            borderTop: `1px solid ${T.borderDark}`,
            padding: `${S.md}px ${S.md}px ${S.md}px`,
          }}>
            <div style={{
              padding: `${S.xs}px ${S.sm}px`,
              background: T.surfaceDark,
              border: `1px solid ${T.borderDark}`,
              borderRadius: RADIUS.md,
              marginBottom: S.sm,
            }}>
              <div style={{
                fontSize: 10, color: T.textInvertFaint,
                letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600,
              }}>{badge}</div>
              <div style={{ fontSize: 13, color: T.textInvert, fontWeight: 600, marginTop: 2 }}>
                {userName}
              </div>
              {contextLine && (
                <div style={{ fontSize: 11, color: T.textInvertDim, marginTop: 4, display: "flex", alignItems: "center", gap: 4 }}>
                  <StatusDot status="operational" />
                  {contextLine.value}
                </div>
              )}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: S.sm }}>
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNav(item.key)}
                  style={{
                    background: activeItem === item.key ? T.greenBgDark : "transparent",
                    border: `1px solid ${activeItem === item.key ? T.greenBright + "30" : "transparent"}`,
                    padding: `${S.sm}px ${S.sm}px`,
                    borderRadius: RADIUS.md,
                    color: activeItem === item.key ? T.greenBright : T.textInvert,
                    fontSize: 14, fontWeight: 500,
                    cursor: "pointer",
                    fontFamily: "inherit",
                    textAlign: "left",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                  }}
                >
                  {item.label}
                  {activeItem === item.key && <ChevronRight size={14} />}
                </button>
              ))}
            </div>
            <Button variant="secondary" dark fullWidth icon={LogOut} onClick={handleLogout}>
              Sign out
            </Button>
          </div>
        )}
      </header>

      <main key={activeItem} className="gb-fade-in" style={{
        maxWidth: 1280, margin: "0 auto",
        padding: isMobile ? S.md : S.xl,
      }}>
        {children}
      </main>
    </div>
  );
}

// ============================================================================
// PAGE HEADER (used inside dashboards)
// ============================================================================
function PageHeader({ title, subtitle, actions }) {
  const isMobile = useIsMobile();
  return (
    <div style={{
      marginBottom: S.lg,
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: "space-between",
      alignItems: isMobile ? "stretch" : "flex-end",
      gap: S.md,
    }}>
      <div>
        <h1 style={{
          fontSize: isMobile ? 22 : 26, fontWeight: 700,
          letterSpacing: "-0.025em",
          margin: "0 0 4px", color: T.text,
        }}>{title}</h1>
        {subtitle && (
          <p style={{ fontSize: 13.5, color: T.textDim, margin: 0 }}>
            {subtitle}
          </p>
        )}
      </div>
      {actions && (
        <div style={{ display: "flex", gap: S.xs, flexWrap: "wrap" }}>
          {actions}
        </div>
      )}
    </div>
  );
}

// ============================================================================
// TENANT DASHBOARD — Full build
// ============================================================================

function TenantDashboard() {
  const { user } = useAuth();
  const [tab, setTab] = useState("overview");

  // Shared session state lifted to parent so Overview can show active session
  const [chargers, setChargers] = useState(MOCK.chargers);
  const [reservations, setReservations] = useState({}); // { chargerId: { until: timestamp, label: "18:30" } }
  const [activeSession, setActiveSession] = useState(null);

  // Live ticker for active session — updates kWh / cost / duration every second
  useEffect(() => {
    if (!activeSession || activeSession.status !== "active") return;
    const interval = setInterval(() => {
      setActiveSession((s) => {
        if (!s || s.status !== "active") return s;
        const charger = chargers.find((c) => c.id === s.chargerId);
        if (!charger) return s;
        const powerKw = charger.powerKw;
        const newKwh = s.kwh + (powerKw / 3600);
        const rate = charger.type === "DC Fast" ? PRICING.dcRate : PRICING.l2Rate;
        return {
          ...s,
          kwh: newKwh,
          cost: newKwh * rate,
          duration: s.duration + 1,
        };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [activeSession, chargers]);

  // Reservation expiry watcher — clear stale reservations
  useEffect(() => {
    const i = setInterval(() => {
      setReservations((prev) => {
        const now = Date.now();
        const updated = { ...prev };
        let changed = false;
        Object.keys(updated).forEach((cid) => {
          if (updated[cid].until <= now) {
            delete updated[cid];
            changed = true;
          }
        });
        return changed ? updated : prev;
      });
    }, 1000);
    return () => clearInterval(i);
  }, []);

  // Apply reservations to charger statuses (derived state)
  const decoratedChargers = useMemo(() => chargers.map((c) => {
    if (activeSession && activeSession.chargerId === c.id && activeSession.status === "active") {
      return { ...c, status: "in_use", _activeForMe: true };
    }
    if (reservations[c.id]) {
      return { ...c, status: "reserved", _reservation: reservations[c.id] };
    }
    return c;
  }), [chargers, reservations, activeSession]);

  const navItems = [
    { key: "overview", label: "Overview" },
    { key: "charging", label: "Charging" },
    { key: "billing", label: "Billing" },
    { key: "vehicle", label: "Vehicle" },
    { key: "account", label: "Account" },
  ];

  return (
    <DashboardShell
      navItems={navItems}
      activeItem={tab}
      onNavigate={setTab}
      userName={user?.name || MOCK.tenant.name}
      badge="Tenant"
      contextLine={{ label: "Building", value: MOCK.tenant.building }}
    >
      {tab === "overview" && (
        <TenantOverview
          activeSession={activeSession}
          onJumpToCharging={() => setTab("charging")}
        />
      )}
      {tab === "charging" && (
        <TenantCharging
          chargers={decoratedChargers}
          setChargers={setChargers}
          reservations={reservations}
          setReservations={setReservations}
          activeSession={activeSession}
          setActiveSession={setActiveSession}
        />
      )}
      {tab === "billing" && <TenantBilling />}
      {tab === "vehicle" && <TenantVehicle />}
      {tab === "account" && <TenantAccount />}
    </DashboardShell>
  );
}

// ============================================================================
// TENANT — OVERVIEW
// ============================================================================
function TenantOverview({ activeSession, onJumpToCharging }) {
  const { user } = useAuth();
  const isMobile = useIsMobile();
  const bill = computeBill(MOCK.tenant.monthUsageKwh);
  const sessionActive = activeSession && activeSession.status === "active";

  return (
    <>
      <PageHeader
        title={`Welcome back, ${(user?.name || MOCK.tenant.name).split(" ")[0]}.`}
        subtitle={`${MOCK.tenant.building} · ${MOCK.tenant.apt}`}
        actions={<LiveIndicator />}
      />

      {/* Active session banner (if any) */}
      {sessionActive && (
        <div
          onClick={onJumpToCharging}
          className="gb-fade-in"
          style={{
            background: T.bgDark,
            border: `1px solid ${T.greenBright}40`,
            borderRadius: RADIUS.lg,
            padding: S.md,
            marginBottom: S.md,
            cursor: "pointer",
            display: "flex", alignItems: "center", gap: S.md,
            position: "relative", overflow: "hidden",
          }}
        >
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 2,
            background: `linear-gradient(90deg, transparent, ${T.greenBright}, transparent)`,
            backgroundSize: "200% 100%",
            animation: "gb-shimmer 2s linear infinite",
          }} />
          <div style={{
            width: 38, height: 38, borderRadius: RADIUS.md,
            background: T.greenBgDark,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            <Zap size={18} color={T.greenBright} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 11, color: T.greenBright, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 2 }}>
              Live session · Charger {activeSession.chargerLabel}
            </div>
            <div style={{ fontSize: 14, color: T.textInvert, fontWeight: 500, fontVariantNumeric: "tabular-nums" }}>
              {activeSession.kwh.toFixed(2)} kWh · €{activeSession.cost.toFixed(2)}
            </div>
          </div>
          <ArrowRight size={16} color={T.textInvertDim} />
        </div>
      )}

      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
        gap: isMobile ? S.xs : S.sm,
        marginBottom: S.lg,
      }}>
        <Stat label="Subscription" value={`€${PRICING.subscription}`} sub="/month · Active" icon={Zap} accent={T.green} compact={isMobile} />
        <Stat label="This month" value={`${MOCK.tenant.monthUsageKwh}`} sub="kWh · 12 sessions" icon={Activity} accent={T.blue} compact={isMobile} />
        <Stat label="Estimated bill" value={`€${bill.total.toFixed(2)}`} sub="due May 1" icon={Receipt} accent={T.amber} compact={isMobile} />
        <Stat label="Building access" value="Enabled" sub="All 4 chargers" icon={ShieldCheck} accent={T.green} compact={isMobile} />
      </div>

      {/* Usage chart — 6 month trend */}
      <Card style={{ marginBottom: S.md }}>
        <CardHeader
          title="Energy delivered · last 6 months"
          sub="kWh per month"
          action={<Badge color="success" size="sm">+8% vs last quarter</Badge>}
        />
        <div style={{ height: 220, marginLeft: -8 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={MOCK.usageMonths} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="usageGradT" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={T.green} stopOpacity={0.30} />
                  <stop offset="100%" stopColor={T.green} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="2 4" vertical={false} />
              <XAxis dataKey="month" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} width={40} />
              <Tooltip
                cursor={{ stroke: T.borderStrong, strokeWidth: 1, strokeDasharray: "3 3" }}
                formatter={(v) => [`${v} kWh`, "Usage"]}
              />
              <Area
                type="monotone" dataKey="kwh"
                stroke={T.green} strokeWidth={2.5}
                fill="url(#usageGradT)"
                animationDuration={800}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1.2fr 1fr",
        gap: S.md,
      }}>
        <Card>
          <CardHeader title="This week" sub="kWh per day" />
          <div style={{ height: 160 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MOCK.usageWeek} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <XAxis dataKey="day" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} width={30} />
                <Tooltip
                  cursor={{ fill: T.surface2 }}
                  formatter={(v) => [`${v} kWh`, "Usage"]}
                />
                <Bar dataKey="kwh" radius={[4, 4, 0, 0]} animationDuration={600}>
                  {MOCK.usageWeek.map((entry, i) => (
                    <Cell key={i} fill={entry.kwh > 0 ? T.green : T.border} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <CardHeader title="Your building" />
          <div style={{ display: "flex", flexDirection: "column", gap: S.sm }}>
            <BuildingDetailRow icon={Building2} primary={MOCK.tenant.building} secondary={MOCK.tenant.address} iconColor={T.textDim} />
            <BuildingDetailRow icon={Plug} primary="4 chargers active" secondary="3× Level 2 (11 kW) + 1× DC fast (50 kW)" iconColor={T.green} />
            <BuildingDetailRow icon={Car} primary={`${MOCK.tenant.vehicle.year} ${MOCK.tenant.vehicle.make} ${MOCK.tenant.vehicle.model}`} secondary={`${MOCK.tenant.vehicle.batteryKwh} kWh · CCS connector`} iconColor={T.blue} />
            <BuildingDetailRow icon={ShieldCheck} primary="Network uptime 99.2%" secondary="EU data processing active" iconColor={T.green} />
          </div>
        </Card>
      </div>
    </>
  );
}

function BuildingDetailRow({ icon: Icon, primary, secondary, iconColor }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: S.sm }}>
      <div style={{
        width: 34, height: 34, borderRadius: RADIUS.md,
        background: T.surface2, border: `1px solid ${T.border}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
      }}>
        <Icon size={15} color={iconColor} />
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: 13.5, color: T.text, fontWeight: 500 }}>{primary}</div>
        <div style={{ fontSize: 12, color: T.textFaint, marginTop: 1 }}>{secondary}</div>
      </div>
    </div>
  );
}

// ============================================================================
// TENANT — CHARGING TAB
// ============================================================================
function TenantCharging({ chargers, setChargers, reservations, setReservations, activeSession, setActiveSession }) {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [confirmCharger, setConfirmCharger] = useState(null);
  const [reserveCharger, setReserveCharger] = useState(null);
  const [stopConfirm, setStopConfirm] = useState(false);
  const [errorState, setErrorState] = useState(null);
  const [actionLoading, setActionLoading] = useState(null);
  // Controlled fault simulation — toggled from a small demo control. When true,
  // the next start session attempt surfaces the error state. Cleared after fire.
  const [armFault, setArmFault] = useState(false);

  const startSession = async (charger) => {
    setActionLoading("start-" + charger.id);
    setConfirmCharger(null);
    await new Promise((r) => setTimeout(r, 600));

    if (armFault) {
      setArmFault(false);
      setActionLoading(null);
      setErrorState({
        title: "Charger temporarily unavailable",
        message: "Charger is online but reported a fault during handshake. Try another charger.",
        chargerLabel: charger.label,
      });
      toast("Could not start session", { type: "error", description: `Charger ${charger.label} reported a fault.` });
      return;
    }

    // Clear any reservation on this charger
    setReservations((prev) => {
      const u = { ...prev };
      delete u[charger.id];
      return u;
    });

    setActiveSession({
      chargerId: charger.id,
      chargerLabel: charger.label,
      chargerType: charger.type,
      powerKw: charger.powerKw,
      rate: charger.type === "DC Fast" ? PRICING.dcRate : PRICING.l2Rate,
      kwh: 0, cost: 0, duration: 0,
      status: "active",
      startedAt: new Date(),
      startBatteryPct: MOCK.tenant.vehicle.currentPct,
    });
    setActionLoading(null);
    toast("Charging started", { description: `Charger ${charger.label} · €${(charger.type === "DC Fast" ? PRICING.dcRate : PRICING.l2Rate).toFixed(2)}/kWh` });
  };

  const reserveChargerAction = async (charger, minutes = 30) => {
    setActionLoading("reserve-" + charger.id);
    setReserveCharger(null);
    await new Promise((r) => setTimeout(r, 500));
    const until = Date.now() + minutes * 60 * 1000;
    setReservations((prev) => ({ ...prev, [charger.id]: { until, minutes } }));
    setActionLoading(null);
    const t = new Date(until);
    const hh = String(t.getHours()).padStart(2, "0");
    const mm = String(t.getMinutes()).padStart(2, "0");
    toast("Charger reserved", { description: `Charger ${charger.label} · until ${hh}:${mm}` });
  };

  const cancelReservation = (chargerId) => {
    setReservations((prev) => {
      const u = { ...prev };
      delete u[chargerId];
      return u;
    });
    toast("Reservation canceled");
  };

  const stopSession = async () => {
    setStopConfirm(false);
    setActionLoading("stop");
    await new Promise((r) => setTimeout(r, 500));
    setActiveSession((s) => ({ ...s, status: "completed" }));
    setActionLoading(null);
    toast("Charging stopped", { description: `${activeSession.kwh.toFixed(2)} kWh · €${activeSession.cost.toFixed(2)}` });
  };

  const dismissReceipt = () => setActiveSession(null);

  return (
    <>
      <PageHeader
        title="Charging"
        subtitle={`${MOCK.tenant.building} · 4 chargers`}
        actions={
          <span style={{ display: "flex", alignItems: "center", gap: S.sm }}>
            <LiveIndicator label="Synced" />
          </span>
        }
      />

      {/* Error banner */}
      {errorState && (
        <Card style={{
          marginBottom: S.md,
          background: T.redBg,
          border: `1px solid ${T.red}40`,
        }}>
          <div style={{ display: "flex", gap: S.sm, alignItems: "flex-start" }}>
            <div style={{
              width: 32, height: 32, borderRadius: RADIUS.md,
              background: T.surface,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <AlertCircle size={16} color={T.red} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: T.text, marginBottom: 2 }}>
                {errorState.title}
              </div>
              <div style={{ fontSize: 13, color: T.textDim, lineHeight: 1.5, marginBottom: S.sm }}>
                {errorState.message}
              </div>
              <Button size="sm" variant="secondary" onClick={() => setErrorState(null)}>
                Dismiss
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Active session OR pricing strip */}
      {activeSession ? (
        <ActiveSessionPanel
          session={activeSession}
          onStop={() => setStopConfirm(true)}
          onDismiss={dismissReceipt}
          stopping={actionLoading === "stop"}
        />
      ) : (
        <PricingStrip />
      )}

      {/* Charger grid */}
      <div style={{ marginTop: S.lg }}>
        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "stretch" : "center",
          gap: isMobile ? S.xs : 0,
          marginBottom: S.sm,
        }}>
          <Label>Chargers in your building</Label>
          <span style={{
            display: "flex", alignItems: "center", gap: S.sm,
            fontSize: 11.5, color: T.textFaint,
          }}>
            <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <RefreshCw size={11} />
              Synced 12s ago
            </span>
            <span aria-hidden="true" style={{ width: 1, height: 10, background: T.border }} />
            <button
              onClick={() => setArmFault((v) => !v)}
              aria-pressed={armFault}
              aria-label={armFault ? "Disable simulated fault" : "Simulate charger fault on next start"}
              title={armFault ? "Next start will simulate a charger fault" : "Click to simulate a charger fault on next start"}
              style={{
                background: armFault ? T.amberBg : "transparent",
                border: `1px solid ${armFault ? T.amber + "60" : T.border}`,
                color: armFault ? T.amber : T.textFaint,
                fontSize: 11,
                padding: "3px 8px",
                borderRadius: RADIUS.sm,
                cursor: "pointer",
                fontFamily: "inherit",
                display: "flex", alignItems: "center", gap: 4,
                transition: "all 150ms",
              }}
            >
              <AlertTriangle size={10} />
              {armFault ? "Fault armed" : "Simulate fault"}
            </button>
          </span>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(280px, 1fr))",
          gap: S.sm,
        }}>
          {chargers.map((c) => (
            <ChargerCard
              key={c.id}
              charger={c}
              disabled={!!activeSession}
              actionLoading={actionLoading}
              onStart={() => setConfirmCharger(c)}
              onReserve={() => setReserveCharger(c)}
              onCancelReservation={() => cancelReservation(c.id)}
            />
          ))}
        </div>
      </div>

      {/* Modals */}
      <ConfirmStartModal
        charger={confirmCharger}
        open={!!confirmCharger}
        onClose={() => setConfirmCharger(null)}
        onConfirm={() => startSession(confirmCharger)}
        loading={actionLoading?.startsWith("start-")}
      />
      <ReserveChargerModal
        charger={reserveCharger}
        open={!!reserveCharger}
        onClose={() => setReserveCharger(null)}
        onConfirm={(mins) => reserveChargerAction(reserveCharger, mins)}
        loading={actionLoading?.startsWith("reserve-")}
      />
      <StopSessionModal
        open={stopConfirm}
        session={activeSession}
        onClose={() => setStopConfirm(false)}
        onConfirm={stopSession}
        loading={actionLoading === "stop"}
      />
    </>
  );
}

// ============================================================================
// ACTIVE SESSION PANEL — animated battery, energy flow, live counters
// ============================================================================
function ActiveSessionPanel({ session, onStop, onDismiss, stopping }) {
  const isActive = session.status === "active";
  const isCompleted = session.status === "completed";
  const isMobile = useIsMobile();

  // Battery percentage rises with kWh
  const batteryGain = (session.kwh / MOCK.tenant.vehicle.batteryKwh) * 100;
  const batteryPct = Math.min(100, session.startBatteryPct + batteryGain);
  const rangePerKwh = 5.2; // realistic ID.4 efficiency
  const rangeAdded = Math.round(session.kwh * rangePerKwh);

  const mins = Math.floor(session.duration / 60);
  const secs = session.duration % 60;
  const timeStr = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

  return (
    <div className="gb-fade-in" style={{
      background: T.bgDark,
      border: `1px solid ${isActive ? T.greenBright + "40" : T.borderDark}`,
      borderRadius: RADIUS.lg,
      padding: S.lg,
      position: "relative", overflow: "hidden",
      boxShadow: isActive ? "0 0 60px rgba(114, 224, 106, 0.08)" : "none",
    }}>
      {isActive && (
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 2,
          background: `linear-gradient(90deg, transparent, ${T.greenBright}, transparent)`,
          backgroundSize: "200% 100%",
          animation: "gb-shimmer 2.5s linear infinite",
        }} />
      )}

      <div style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: isMobile ? "stretch" : "flex-start",
        gap: S.md,
        marginBottom: S.lg,
      }}>
        <div>
          <div style={{
            display: "flex", alignItems: "center", gap: 8,
            fontSize: 11, fontWeight: 600,
            color: isActive ? T.greenBright : T.textInvertDim,
            letterSpacing: "0.06em", textTransform: "uppercase",
            marginBottom: 8,
          }}>
            {isActive && <StatusDot status="online" animate />}
            {isActive ? "Session active" : "Session complete"}
          </div>
          <h2 style={{
            fontSize: 22, fontWeight: 700,
            margin: "0 0 4px",
            color: T.textInvert,
            letterSpacing: "-0.02em",
          }}>
            Charger {session.chargerLabel} · {session.chargerType}
          </h2>
          <p style={{ fontSize: 13, color: T.textInvertDim, margin: 0 }}>
            €{session.rate.toFixed(2)}/kWh · {session.powerKw} kW · started {session.startedAt.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" })}
          </p>
        </div>
        {isActive ? (
          <Button variant="secondary" dark onClick={onStop} icon={Pause} loading={stopping}>
            {stopping ? "Stopping…" : "Stop session"}
          </Button>
        ) : (
          <Button variant="primary" onClick={onDismiss} icon={CheckCircle2}>
            Done
          </Button>
        )}
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1.2fr 2fr",
        gap: S.md,
      }}>
        {/* Battery + cable visualization */}
        <BatteryDisplay pct={batteryPct} active={isActive} rangeAdded={rangeAdded} />

        {/* Live metrics */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(3, 1fr)",
          gap: S.xs,
        }}>
          <SessionMetric label="Energy delivered" value={session.kwh.toFixed(2)} unit="kWh" highlight={isActive} />
          <SessionMetric label="Duration" value={timeStr} unit="" />
          <SessionMetric label="Running cost" value={`€${session.cost.toFixed(2)}`} unit="" />
          <SessionMetric label="Range added" value={rangeAdded} unit="km" />
          <SessionMetric label="Power" value={session.powerKw} unit="kW" />
          <SessionMetric label="Rate" value={`€${session.rate.toFixed(2)}`} unit="/kWh" />
        </div>
      </div>

      {isCompleted && (
        <div style={{
          marginTop: S.md, padding: S.sm,
          background: T.surfaceDark2,
          border: `1px solid ${T.borderDark}`,
          borderRadius: RADIUS.md,
          fontSize: 13, color: T.textInvertDim,
          lineHeight: 1.6,
        }}>
          <strong style={{ color: T.textInvert }}>Session summary:</strong>{" "}
          {session.kwh.toFixed(2)} kWh delivered at €{session.rate.toFixed(2)}/kWh ={" "}
          <strong style={{ color: T.greenBright }}>€{session.cost.toFixed(2)}</strong>.
          Added to your May invoice.
        </div>
      )}
    </div>
  );
}

function BatteryDisplay({ pct, active, rangeAdded }) {
  return (
    <div style={{
      background: T.surfaceDark,
      border: `1px solid ${T.borderDark}`,
      borderRadius: RADIUS.md,
      padding: S.md,
      display: "flex", flexDirection: "column",
      alignItems: "center", gap: S.sm,
    }}>
      <div style={{
        fontSize: 10.5, color: T.textInvertFaint,
        letterSpacing: "0.06em", textTransform: "uppercase",
        fontWeight: 600,
      }}>
        Battery state
      </div>

      {/* Battery SVG */}
      <svg width="160" height="80" viewBox="0 0 160 80" aria-label={`Battery at ${pct.toFixed(0)} percent`}>
        {/* Battery body */}
        <rect x="4" y="14" width="140" height="52" rx="6"
          fill={T.bgDark}
          stroke={active ? T.greenBright : T.borderDarkStrong}
          strokeWidth="1.5"
        />
        {/* Battery cap */}
        <rect x="146" y="28" width="8" height="24" rx="2" fill={active ? T.greenBright : T.borderDarkStrong} />

        {/* Fill */}
        <defs>
          <linearGradient id="batt-fill" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={T.green} />
            <stop offset="100%" stopColor={T.greenBright} />
          </linearGradient>
        </defs>
        <rect
          x="8" y="18"
          width={Math.max(0, (pct / 100) * 132)} height="44"
          rx="3"
          fill="url(#batt-fill)"
          style={{ transition: "width 1s linear" }}
        />

        {/* Bolt icon when active */}
        {active && (
          <g transform="translate(70, 30)">
            <path d="M 12 0 L 4 12 H 10 L 8 20 L 16 8 H 10 Z"
              fill={T.bgDark}
              opacity="0.7"
            />
          </g>
        )}

        {/* Percentage text */}
        <text
          x="74" y="46"
          textAnchor="middle"
          fontSize="18"
          fontWeight="700"
          fill={pct > 50 ? T.bgDark : T.textInvert}
          style={{ fontVariantNumeric: "tabular-nums", letterSpacing: "-0.02em" }}
        >
          {pct.toFixed(0)}%
        </text>
      </svg>

      <div style={{ textAlign: "center" }}>
        <div style={{
          fontSize: 11, color: T.textInvertFaint,
          letterSpacing: "0.04em", textTransform: "uppercase", fontWeight: 600,
          marginBottom: 2,
        }}>
          Range added
        </div>
        <div style={{
          fontSize: 18, fontWeight: 700,
          color: T.greenBright,
          fontVariantNumeric: "tabular-nums",
          letterSpacing: "-0.01em",
        }}>
          +{rangeAdded} km
        </div>
      </div>
    </div>
  );
}

function SessionMetric({ label, value, unit, highlight }) {
  return (
    <div
      role="status" aria-live="polite"
      style={{
        padding: S.sm,
        background: T.surfaceDark,
        border: `1px solid ${T.borderDark}`,
        borderRadius: RADIUS.md,
      }}>
      <div style={{
        fontSize: 10, color: T.textInvertFaint,
        fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase",
        marginBottom: 6,
      }}>
        {label}
      </div>
      <div style={{
        fontSize: 22, fontWeight: 700,
        letterSpacing: "-0.025em",
        color: highlight ? T.greenBright : T.textInvert,
        fontVariantNumeric: "tabular-nums",
        lineHeight: 1.1,
      }}>
        {value}
        {unit && <span style={{
          fontSize: 12, color: T.textInvertFaint,
          marginLeft: 3, fontWeight: 500,
        }}>{unit}</span>}
      </div>
    </div>
  );
}

// ============================================================================
// CHARGER CARD — with status ring, reservation countdown, action buttons
// ============================================================================
function ChargerCard({ charger, disabled, actionLoading, onStart, onReserve, onCancelReservation }) {
  const [hover, setHover] = useState(false);
  const isAvailable = charger.status === "available";
  const isInUse = charger.status === "in_use";
  const isReserved = charger.status === "reserved";
  const isMine = charger._activeForMe;
  const isMyReservation = isReserved && charger._reservation;

  const statusLabel = {
    available: "Available", in_use: isMine ? "Active session" : "In use",
    reserved: "Reserved", maintenance: "Maintenance",
  }[charger.status];

  const canStart = isAvailable && !disabled;
  const canReserve = isAvailable && !disabled;
  const isLoading = actionLoading?.startsWith("start-" + charger.id) || actionLoading?.startsWith("reserve-" + charger.id);

  // Countdown for reservation
  const now = useNow(1000);
  const remaining = isMyReservation ? Math.max(0, charger._reservation.until - now) : 0;
  const remMins = Math.floor(remaining / 60000);
  const remSecs = Math.floor((remaining % 60000) / 1000);
  const remStr = `${remMins}:${String(remSecs).padStart(2, "0")}`;
  const reservedUntilDate = isMyReservation ? new Date(charger._reservation.until) : null;
  const reservedUntilStr = reservedUntilDate
    ? `${String(reservedUntilDate.getHours()).padStart(2, "0")}:${String(reservedUntilDate.getMinutes()).padStart(2, "0")}`
    : "";

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: T.surface,
        border: `1px solid ${canStart && hover ? T.green : T.border}`,
        borderRadius: RADIUS.lg,
        padding: S.md,
        transition: "all 150ms ease",
        position: "relative",
        boxShadow: hover && canStart ? SHADOW.md : SHADOW.sm,
      }}
    >
      {/* Header — ring + ID + type */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "flex-start",
        marginBottom: S.sm,
      }}>
        <div style={{ display: "flex", gap: S.sm, alignItems: "center" }}>
          <ChargerStatusRing status={charger.status} type={charger.type} />
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: T.text, letterSpacing: "-0.01em" }}>
              Charger {charger.label}
            </div>
            <div style={{ fontSize: 11.5, color: T.textFaint, marginTop: 1 }}>
              {charger.type} · {charger.powerKw} kW
            </div>
          </div>
        </div>
        <Badge color={
          isAvailable ? "success" :
          isInUse ? "info" :
          isReserved ? "warning" : "neutral"
        } size="sm">
          <StatusDot status={charger.status} />
          {statusLabel}
        </Badge>
      </div>

      {/* Body — rate, last check, special states */}
      <div style={{
        background: T.surface2,
        border: `1px solid ${T.border}`,
        borderRadius: RADIUS.md,
        padding: `${S.xs}px ${S.sm}px`,
        marginBottom: S.sm,
        display: "flex", justifyContent: "space-between",
        fontSize: 12,
      }}>
        <span style={{ color: T.textDim }}>Rate</span>
        <span style={{ color: T.text, fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>
          €{(charger.type === "DC Fast" ? PRICING.dcRate : PRICING.l2Rate).toFixed(2)}/kWh
        </span>
      </div>

      {isInUse && !isMine && charger.session && (
        <div style={{
          fontSize: 11.5, color: T.textFaint,
          padding: `${S.xs}px ${S.sm}px`,
          background: T.surface2,
          border: `1px solid ${T.border}`,
          borderRadius: RADIUS.md,
          marginBottom: S.sm,
          fontVariantNumeric: "tabular-nums",
        }}>
          {charger.session.user} · {charger.session.kwh} kWh · {charger.session.minutes} min
        </div>
      )}
      {isMyReservation && (
        <div style={{
          padding: `${S.xs}px ${S.sm}px`,
          background: T.amberBg,
          border: `1px solid ${T.amber}40`,
          borderRadius: RADIUS.md,
          marginBottom: S.sm,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          fontSize: 12,
        }}>
          <span style={{ color: "#7A5500", fontWeight: 500, display: "flex", alignItems: "center", gap: 5 }}>
            <CalendarClock size={12} />
            Reserved until {reservedUntilStr}
          </span>
          <span style={{ color: "#7A5500", fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>
            {remStr}
          </span>
        </div>
      )}

      <div style={{
        fontSize: 11, color: T.textFaint,
        marginBottom: S.sm,
        display: "flex", justifyContent: "space-between",
      }}>
        <span>Last check {charger.lastCheck}</span>
        <span style={{ color: T.green, fontWeight: 600 }}>✓ Verified</span>
      </div>

      {/* Actions */}
      <div style={{ display: "flex", gap: S.xs }}>
        {isMyReservation ? (
          <>
            <Button
              variant="primary" size="sm" fullWidth icon={Play}
              onClick={onStart}
              disabled={disabled}
            >
              Start charging
            </Button>
            <Button
              variant="secondary" size="sm" icon={X}
              onClick={onCancelReservation}
              ariaLabel="Cancel reservation"
            >
              Cancel
            </Button>
          </>
        ) : isAvailable ? (
          <>
            <Button
              variant="primary" size="sm" fullWidth icon={Play}
              onClick={onStart}
              disabled={!canStart}
              loading={actionLoading === "start-" + charger.id}
            >
              Start session
            </Button>
            <Button
              variant="secondary" size="sm" icon={Bookmark}
              onClick={onReserve}
              disabled={!canReserve}
              loading={actionLoading === "reserve-" + charger.id}
              ariaLabel="Reserve charger"
            >
              Reserve
            </Button>
          </>
        ) : (
          <Button variant="secondary" size="sm" fullWidth disabled>
            {isInUse ? "Currently in use" : "Reserved"}
          </Button>
        )}
      </div>
    </div>
  );
}

function ChargerStatusRing({ status, type }) {
  const colors = {
    available: T.green,
    in_use: T.greenBright,
    reserved: T.amber,
    maintenance: T.red,
  };
  const c = colors[status] || T.textFaint;
  const isDc = type === "DC Fast";
  return (
    <div style={{ position: "relative", width: 40, height: 40, flexShrink: 0 }}>
      <svg width="40" height="40" viewBox="0 0 40 40">
        {/* Outer ring */}
        <circle cx="20" cy="20" r="18" fill="none" stroke={T.border} strokeWidth="2" />
        {/* Active arc */}
        <circle
          cx="20" cy="20" r="18"
          fill="none" stroke={c} strokeWidth="2.5"
          strokeDasharray={status === "available" ? "113" : status === "in_use" ? "70 113" : "30 113"}
          strokeLinecap="round"
          transform="rotate(-90 20 20)"
          style={status === "in_use" ? {
            animation: "gb-spin 4s linear infinite",
            transformOrigin: "20px 20px",
          } : {}}
        />
      </svg>
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: c,
      }}>
        {isDc ? <Zap size={16} fill={c} /> : <Plug size={15} />}
      </div>
    </div>
  );
}

// ============================================================================
// MODALS — Confirm Start, Reserve, Stop Session
// ============================================================================
function ConfirmStartModal({ charger, open, onClose, onConfirm, loading }) {
  if (!charger) return null;
  const rate = charger.type === "DC Fast" ? PRICING.dcRate : PRICING.l2Rate;
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={`Start charging at ${charger.label}?`}
      description={`${charger.type} · ${charger.powerKw} kW · €${rate.toFixed(2)}/kWh`}
      footer={
        <div style={{ display: "flex", gap: S.xs, justifyContent: "flex-end" }}>
          <Button variant="secondary" onClick={onClose} disabled={loading}>Cancel</Button>
          <Button variant="primary" onClick={onConfirm} icon={Play} loading={loading}>
            {loading ? "Starting…" : "Start session"}
          </Button>
        </div>
      }
    >
      <div style={{ display: "flex", flexDirection: "column", gap: S.sm }}>
        <div style={{
          padding: S.sm,
          background: T.surface2,
          border: `1px solid ${T.border}`,
          borderRadius: RADIUS.md,
          display: "flex", justifyContent: "space-between",
          fontSize: 13,
        }}>
          <span style={{ color: T.textDim }}>Rate</span>
          <span style={{ color: T.text, fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>
            €{rate.toFixed(2)} per kWh
          </span>
        </div>
        <div style={{
          padding: S.sm,
          background: T.surface2,
          border: `1px solid ${T.border}`,
          borderRadius: RADIUS.md,
          display: "flex", justifyContent: "space-between",
          fontSize: 13,
        }}>
          <span style={{ color: T.textDim }}>Billing</span>
          <span style={{ color: T.text, fontWeight: 600 }}>
            Added to monthly invoice
          </span>
        </div>
        <p style={{ fontSize: 12, color: T.textFaint, margin: 0, lineHeight: 1.5 }}>
          You can stop the session at any time. Pricing is shown before every session — no hidden fees.
        </p>
      </div>
    </Modal>
  );
}

function ReserveChargerModal({ charger, open, onClose, onConfirm, loading }) {
  const [minutes, setMinutes] = useState(30);
  if (!charger) return null;
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={`Reserve charger ${charger.label}?`}
      description={`${charger.type} · holds the charger for the duration you select`}
      footer={
        <div style={{ display: "flex", gap: S.xs, justifyContent: "flex-end" }}>
          <Button variant="secondary" onClick={onClose} disabled={loading}>Cancel</Button>
          <Button variant="primary" onClick={() => onConfirm(minutes)} icon={BookmarkCheck} loading={loading}>
            {loading ? "Reserving…" : `Reserve for ${minutes} min`}
          </Button>
        </div>
      }
    >
      <div style={{ display: "flex", flexDirection: "column", gap: S.sm }}>
        <Label>Hold duration</Label>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 6,
        }}>
          {[15, 30, 60].map((m) => (
            <button
              key={m}
              onClick={() => setMinutes(m)}
              style={{
                padding: "12px 8px",
                background: minutes === m ? T.greenBg : T.surface,
                border: `1px solid ${minutes === m ? T.green : T.borderStrong}`,
                borderRadius: RADIUS.md,
                color: minutes === m ? T.greenDeep : T.text,
                fontSize: 13, fontWeight: 600,
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "all 150ms",
              }}
            >
              {m} min
            </button>
          ))}
        </div>
        <p style={{ fontSize: 12, color: T.textFaint, margin: `${S.xs}px 0 0`, lineHeight: 1.5 }}>
          The charger will be held until your reservation expires. Reservations are free.
        </p>
      </div>
    </Modal>
  );
}

function StopSessionModal({ open, session, onClose, onConfirm, loading }) {
  if (!session) return null;
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Stop charging session?"
      description="You can start a new session anytime."
      footer={
        <div style={{ display: "flex", gap: S.xs, justifyContent: "flex-end" }}>
          <Button variant="secondary" onClick={onClose} disabled={loading}>Keep charging</Button>
          <Button variant="danger" onClick={onConfirm} icon={Pause} loading={loading}>
            {loading ? "Stopping…" : "Stop session"}
          </Button>
        </div>
      }
    >
      <div style={{
        background: T.surface2,
        border: `1px solid ${T.border}`,
        borderRadius: RADIUS.md,
        padding: S.sm,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: S.sm,
      }}>
        <div>
          <div style={{ fontSize: 11, color: T.textFaint, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}>
            Energy this session
          </div>
          <div style={{ fontSize: 18, fontWeight: 700, color: T.text, fontVariantNumeric: "tabular-nums", marginTop: 2 }}>
            {session.kwh.toFixed(2)} kWh
          </div>
        </div>
        <div>
          <div style={{ fontSize: 11, color: T.textFaint, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}>
            Cost so far
          </div>
          <div style={{ fontSize: 18, fontWeight: 700, color: T.green, fontVariantNumeric: "tabular-nums", marginTop: 2 }}>
            €{session.cost.toFixed(2)}
          </div>
        </div>
      </div>
    </Modal>
  );
}

// ============================================================================
// PRICING STRIP
// ============================================================================
function PricingStrip() {
  const isMobile = useIsMobile();
  const items = [
    { label: "Subscription", value: `€${PRICING.subscription}`, sub: "/month", highlight: false },
    { label: "Level 2", value: `€${PRICING.l2Rate.toFixed(2)}`, sub: "/kWh · 11 kW", highlight: true },
    { label: "DC fast", value: `€${PRICING.dcRate.toFixed(2)}`, sub: "/kWh · 50 kW", highlight: true },
    { label: "Public DC avg", value: `€${PRICING.publicAvg.toFixed(2)}`, sub: "/kWh · for context", dim: true },
  ];
  return (
    <Card>
      <CardHeader
        title="Transparent pricing"
        sub="Pricing is shown before every session. No hidden fees."
        action={<Badge color="success" size="sm"><ShieldCheck size={10} />Locked rates</Badge>}
      />
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
        gap: S.xs,
      }}>
        {items.map((item) => (
          <div key={item.label} style={{
            padding: S.sm,
            background: item.dim ? T.surface2 : T.surface,
            border: `1px solid ${item.highlight ? T.green + "30" : T.border}`,
            borderRadius: RADIUS.md,
            opacity: item.dim ? 0.75 : 1,
          }}>
            <div style={{
              fontSize: 10.5, color: T.textFaint,
              fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase",
              marginBottom: 6,
            }}>
              {item.label}
            </div>
            <div style={{
              fontSize: 22, fontWeight: 700,
              color: item.highlight ? T.greenDeep : T.text,
              letterSpacing: "-0.025em",
              fontVariantNumeric: "tabular-nums",
              lineHeight: 1.1,
            }}>
              {item.value}
              <span style={{
                fontSize: 11, color: T.textFaint,
                marginLeft: 4, fontWeight: 500,
              }}>
                {item.sub}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

// ============================================================================
// TENANT — BILLING TAB
// ============================================================================
function TenantBilling() {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const bill = computeBill(MOCK.tenant.monthUsageKwh);
  const [paymentModal, setPaymentModal] = useState(false);
  const [downloadingInvoice, setDownloadingInvoice] = useState(null);
  const [paying, setPaying] = useState(false);

  const handleDownload = async (id) => {
    setDownloadingInvoice(id);
    await new Promise((r) => setTimeout(r, 700));
    setDownloadingInvoice(null);
    toast("Invoice downloaded", { description: id });
  };

  const handlePay = async () => {
    setPaying(true);
    await new Promise((r) => setTimeout(r, 800));
    setPaying(false);
    toast("Payment submitted", { description: `€${bill.total.toFixed(2)} · Visa •• 4242` });
  };

  return (
    <>
      <PageHeader
        title="Billing"
        subtitle="Subscription, usage, and invoices"
      />

      {/* Current period */}
      <Card style={{ marginBottom: S.md }}>
        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: S.md,
          justifyContent: "space-between",
          alignItems: isMobile ? "stretch" : "flex-start",
          marginBottom: S.lg,
          paddingBottom: S.lg,
          borderBottom: `1px solid ${T.border}`,
        }}>
          <div>
            <div style={{
              display: "flex", alignItems: "center", gap: 8,
              marginBottom: 6,
            }}>
              <Label>Current billing period · April 2026</Label>
              <Badge color="warning" size="sm">Due soon</Badge>
            </div>
            <div style={{
              fontSize: isMobile ? 32 : 40, fontWeight: 700,
              color: T.text, letterSpacing: "-0.03em",
              fontVariantNumeric: "tabular-nums",
              lineHeight: 1,
            }}>
              €{bill.total.toFixed(2)}
            </div>
            <div style={{ fontSize: 13, color: T.textDim, marginTop: 6 }}>
              Due May 1, 2026 · Auto-charge to {MOCK.tenant.payment.brand} •• {MOCK.tenant.payment.last4}
            </div>
          </div>
          <div style={{ display: "flex", gap: S.xs, flexWrap: "wrap" }}>
            <Button variant="secondary" icon={Download} onClick={() => handleDownload("INV-2026-04-PREVIEW")} loading={downloadingInvoice === "INV-2026-04-PREVIEW"}>
              Download
            </Button>
            <Button variant="primary" icon={CreditCard} onClick={handlePay} loading={paying}>
              {paying ? "Submitting…" : "Pay now"}
            </Button>
          </div>
        </div>

        <Label>Itemized breakdown</Label>
        <div style={{ marginTop: S.sm }}>
          <BillRow
            label="Monthly subscription"
            sub="GridBridge Standard · access to all chargers"
            amount={bill.subscription}
          />
          <BillRow
            label="Level 2 charging"
            sub={`${bill.l2Kwh} kWh × €${PRICING.l2Rate.toFixed(2)}`}
            amount={bill.l2Cost}
          />
          <BillRow
            label="DC fast charging"
            sub={`${bill.dcKwh} kWh × €${PRICING.dcRate.toFixed(2)}`}
            amount={bill.dcCost}
          />
          <div style={{
            display: "flex", justifyContent: "space-between",
            paddingTop: S.sm, marginTop: 4,
            borderTop: `1px solid ${T.border}`,
            fontSize: 14, fontWeight: 700, color: T.text,
            fontVariantNumeric: "tabular-nums",
          }}>
            <span>Total due</span>
            <span>€{bill.total.toFixed(2)}</span>
          </div>
        </div>
      </Card>

      {/* Payment method */}
      <Card style={{ marginBottom: S.md }}>
        <CardHeader
          title="Payment method"
          action={<Button variant="ghost" size="sm" icon={Edit3} onClick={() => setPaymentModal(true)}>Update</Button>}
        />
        <div style={{
          display: "flex", alignItems: "center", gap: S.sm,
          padding: S.sm,
          background: T.surface2,
          border: `1px solid ${T.border}`,
          borderRadius: RADIUS.md,
        }}>
          <div style={{
            width: 44, height: 32, borderRadius: 5,
            background: T.bgDark,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: T.textInvert, fontSize: 10, fontWeight: 700,
            letterSpacing: "0.04em",
          }}>
            VISA
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13.5, fontWeight: 600, color: T.text, fontVariantNumeric: "tabular-nums" }}>
              {MOCK.tenant.payment.brand} •• {MOCK.tenant.payment.last4}
            </div>
            <div style={{ fontSize: 12, color: T.textFaint, marginTop: 1 }}>
              Auto-charged on the 1st · expires {MOCK.tenant.payment.exp}
            </div>
          </div>
          <Badge color="success" size="sm">Default</Badge>
        </div>
      </Card>

      {/* Past invoices */}
      <Card>
        <CardHeader
          title="Past invoices"
          sub={`${MOCK.invoices.length} invoices`}
        />
        {isMobile ? (
          <div style={{ display: "flex", flexDirection: "column", gap: S.xs }}>
            {MOCK.invoices.map((inv) => (
              <div key={inv.id} style={{
                padding: S.sm,
                background: T.surface2,
                border: `1px solid ${T.border}`,
                borderRadius: RADIUS.md,
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: T.text, fontVariantNumeric: "tabular-nums" }}>
                    {inv.id}
                  </div>
                  <Badge color={inv.status === "paid" ? "success" : "warning"} size="sm">
                    {inv.status}
                  </Badge>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontSize: 12, color: T.textDim }}>
                    {new Date(inv.date).toLocaleDateString("de-DE", { month: "short", day: "numeric", year: "numeric" })} · {inv.kwh} kWh
                  </span>
                  <span style={{ fontSize: 16, color: T.text, fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>
                    €{inv.amount.toFixed(2)}
                  </span>
                </div>
                <Button
                  variant="ghost" size="sm" fullWidth icon={Download}
                  onClick={() => handleDownload(inv.id)}
                  loading={downloadingInvoice === inv.id}
                  style={{ marginTop: 8 }}
                >
                  Download
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr 0.8fr 1fr 0.8fr 0.8fr",
            gap: 0,
            fontSize: 13,
          }}>
            <div style={{ display: "contents" }}>
              {["Invoice", "Date", "Usage", "Amount", "Status", ""].map((h) => (
                <div key={h} style={{
                  padding: `8px 12px`,
                  fontSize: 10.5, color: T.textFaint,
                  fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase",
                  borderBottom: `1px solid ${T.border}`,
                  background: T.surface2,
                }}>{h}</div>
              ))}
            </div>
            {MOCK.invoices.map((inv, i) => (
              <div key={inv.id} style={{ display: "contents" }}>
                {[
                  <span style={{ color: T.text, fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>{inv.id}</span>,
                  <span style={{ color: T.textDim }}>{new Date(inv.date).toLocaleDateString("de-DE", { month: "short", day: "numeric", year: "numeric" })}</span>,
                  <span style={{ color: T.textDim, fontVariantNumeric: "tabular-nums" }}>{inv.kwh} kWh</span>,
                  <span style={{ color: T.text, fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>€{inv.amount.toFixed(2)}</span>,
                  <Badge color={inv.status === "paid" ? "success" : "warning"} size="sm">{inv.status}</Badge>,
                  <button
                    onClick={() => handleDownload(inv.id)}
                    aria-label={`Download invoice ${inv.id}`}
                    style={{
                      background: "transparent", border: "none",
                      color: T.textDim, cursor: "pointer",
                      padding: 4, display: "flex", alignItems: "center",
                    }}
                  >
                    {downloadingInvoice === inv.id ? <Spinner size={14} color={T.textDim} /> : <Download size={14} />}
                  </button>
                ].map((cell, j) => (
                  <div key={j} style={{
                    padding: `12px`,
                    borderBottom: i < MOCK.invoices.length - 1 ? `1px solid ${T.border}` : "none",
                    display: "flex", alignItems: "center",
                  }}>
                    {cell}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </Card>

      <PaymentMethodModal open={paymentModal} onClose={() => setPaymentModal(false)} />
    </>
  );
}

function BillRow({ label, sub, amount }) {
  return (
    <div style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "10px 0",
      borderBottom: `1px dashed ${T.border}`,
    }}>
      <div>
        <div style={{ fontSize: 13.5, color: T.text, fontWeight: 500 }}>{label}</div>
        <div style={{ fontSize: 12, color: T.textFaint, marginTop: 2 }}>{sub}</div>
      </div>
      <div style={{ fontSize: 14, color: T.text, fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>
        €{amount.toFixed(2)}
      </div>
    </div>
  );
}

function PaymentMethodModal({ open, onClose }) {
  const { toast } = useToast();
  const [name, setName] = useState("Kyle Finberg");
  const [number, setNumber] = useState("•••• •••• •••• 4242");
  const [exp, setExp] = useState("08 / 28");
  const [cvc, setCvc] = useState("");
  const [zip, setZip] = useState("10999");
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    toast("Payment method updated");
    onClose();
  };

  return (
    <Modal
      open={open} onClose={onClose}
      title="Update payment method"
      description="Used for monthly subscription and charging usage."
      size="md"
      footer={
        <div style={{ display: "flex", gap: S.xs, justifyContent: "flex-end" }}>
          <Button variant="secondary" onClick={onClose} disabled={loading}>Cancel</Button>
          <Button variant="primary" onClick={handleSave} loading={loading} icon={ShieldCheck}>
            {loading ? "Saving…" : "Save method"}
          </Button>
        </div>
      }
    >
      <div style={{ display: "flex", flexDirection: "column", gap: S.sm }}>
        <Input label="Cardholder name" value={name} onChange={(e) => setName(e.target.value)} icon={User} />
        <Input label="Card number" value={number} onChange={(e) => setNumber(e.target.value)} icon={CreditCard} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: S.xs }}>
          <Input label="Expires" value={exp} onChange={(e) => setExp(e.target.value)} placeholder="MM / YY" />
          <Input label="CVC" value={cvc} onChange={(e) => setCvc(e.target.value)} placeholder="•••" />
        </div>
        <Input label="Billing postal code" value={zip} onChange={(e) => setZip(e.target.value)} icon={MapPin} />
        <div style={{
          fontSize: 11.5, color: T.textFaint,
          padding: S.xs,
          background: T.surface2,
          border: `1px solid ${T.border}`,
          borderRadius: RADIUS.sm,
          display: "flex", alignItems: "flex-start", gap: 6,
          lineHeight: 1.5,
        }}>
          <ShieldCheck size={12} color={T.greenDeep} style={{ marginTop: 2, flexShrink: 0 }} />
          Card details are tokenized via PCI-DSS compliant processing. We never store full card numbers.
        </div>
      </div>
    </Modal>
  );
}

// ============================================================================
// TENANT — VEHICLE TAB
// ============================================================================
function TenantVehicle() {
  const isMobile = useIsMobile();
  const [editModal, setEditModal] = useState(false);
  const v = MOCK.tenant.vehicle;

  return (
    <>
      <PageHeader
        title="Vehicle"
        subtitle="Manage your registered vehicle"
        actions={
          <Button variant="primary" size="md" icon={Edit3} onClick={() => setEditModal(true)}>
            Edit vehicle
          </Button>
        }
      />

      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1.2fr 1fr",
        gap: S.md,
        marginBottom: S.md,
      }}>
        {/* Vehicle hero card */}
        <Card>
          <div style={{
            display: "flex", alignItems: "center", gap: S.md,
            paddingBottom: S.md,
            borderBottom: `1px solid ${T.border}`,
            marginBottom: S.md,
          }}>
            <div style={{
              width: 64, height: 64, borderRadius: RADIUS.lg,
              background: T.greenBg,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <Car size={28} color={T.greenDeep} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 11, color: T.textFaint, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 2 }}>
                Default vehicle
              </div>
              <div style={{ fontSize: 18, fontWeight: 700, color: T.text, letterSpacing: "-0.015em" }}>
                {v.year} {v.make} {v.model}
              </div>
              <div style={{ fontSize: 12.5, color: T.textDim, marginTop: 2 }}>
                {v.batteryKwh} kWh battery · CCS connector
              </div>
            </div>
            <Badge color="success" size="sm">Active</Badge>
          </div>

          <Label>Current state</Label>
          <div style={{
            marginTop: S.xs,
            padding: S.md,
            background: T.bgDark,
            borderRadius: RADIUS.md,
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "stretch" : "center",
            gap: S.md,
          }}>
            <BatteryDisplay pct={v.currentPct} active={false} rangeAdded={Math.round(v.currentPct / 100 * v.batteryKwh * 5.2)} />
            <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: S.xs }}>
              <SessionMetric label="Battery" value={`${v.currentPct}%`} unit="" highlight />
              <SessionMetric label="Capacity" value={v.batteryKwh} unit="kWh" />
              <SessionMetric label="Est. range" value={Math.round(v.currentPct / 100 * v.batteryKwh * 5.2)} unit="km" />
              <SessionMetric label="Connector" value="CCS" unit="" />
            </div>
          </div>
        </Card>

        <Card>
          <CardHeader title="Charging preferences" />
          <DetailRow label="Preferred charger" value="Level 2 (faster billing rate)" />
          <DetailRow label="Plug type" value="CCS Combo 2" />
          <DetailRow label="Auto-stop at" value="80% battery" />
          <DetailRow label="Notifications" value="Session start & end" last />

          <div style={{
            marginTop: S.md,
            padding: S.sm,
            background: T.greenBg,
            border: `1px solid ${T.green}30`,
            borderRadius: RADIUS.md,
            fontSize: 12, color: T.greenDeep,
            display: "flex", alignItems: "flex-start", gap: 6,
            lineHeight: 1.5,
          }}>
            <ShieldCheck size={13} style={{ marginTop: 2, flexShrink: 0 }} />
            <span>
              <strong>MID-compliant metering:</strong> all energy delivered is measured to legal billing standards.
            </span>
          </div>
        </Card>
      </div>

      <EditVehicleModal open={editModal} onClose={() => setEditModal(false)} />
    </>
  );
}

function EditVehicleModal({ open, onClose }) {
  const { toast } = useToast();
  const v = MOCK.tenant.vehicle;
  const [make, setMake] = useState(v.make);
  const [model, setModel] = useState(v.model);
  const [year, setYear] = useState(String(v.year));
  const [battery, setBattery] = useState(String(v.batteryKwh));
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    toast("Vehicle updated");
    onClose();
  };

  return (
    <Modal
      open={open} onClose={onClose}
      title="Edit vehicle"
      description="Used for charging telemetry and range estimates."
      footer={
        <div style={{ display: "flex", gap: S.xs, justifyContent: "flex-end" }}>
          <Button variant="secondary" onClick={onClose} disabled={loading}>Cancel</Button>
          <Button variant="primary" onClick={handleSave} loading={loading}>
            {loading ? "Saving…" : "Save changes"}
          </Button>
        </div>
      }
    >
      <div style={{ display: "flex", flexDirection: "column", gap: S.sm }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: S.xs }}>
          <Input label="Make" value={make} onChange={(e) => setMake(e.target.value)} />
          <Input label="Model" value={model} onChange={(e) => setModel(e.target.value)} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: S.xs }}>
          <Input label="Year" value={year} onChange={(e) => setYear(e.target.value)} />
          <Input label="Battery (kWh)" value={battery} onChange={(e) => setBattery(e.target.value)} />
        </div>
      </div>
    </Modal>
  );
}

// ============================================================================
// TENANT — ACCOUNT TAB
// ============================================================================
function TenantAccount() {
  const { user } = useAuth();
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [analytics, setAnalytics] = useState(true);
  const [emailInvoice, setEmailInvoice] = useState(true);
  const [sessionAlerts, setSessionAlerts] = useState(true);
  const [marketing, setMarketing] = useState(false);
  const [downloadingData, setDownloadingData] = useState(false);

  const handleDownloadData = async () => {
    setDownloadingData(true);
    await new Promise((r) => setTimeout(r, 800));
    setDownloadingData(false);
    toast("Data export prepared", { description: "Ready in your inbox within 24h." });
  };

  return (
    <>
      <PageHeader title="Account" subtitle="Profile, access, and privacy preferences" />

      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        gap: S.md,
        marginBottom: S.md,
      }}>
        <Card>
          <CardHeader title="Profile" action={<Button variant="ghost" size="sm" icon={Edit3}>Edit</Button>} />
          <DetailRow label="Name" value={user?.name || MOCK.tenant.name} />
          <DetailRow label="Email" value={user?.email || MOCK.tenant.email} />
          <DetailRow label="Building" value={MOCK.tenant.building} />
          <DetailRow label="Apartment / spot" value={MOCK.tenant.apt} last />
        </Card>
        <Card>
          <CardHeader title="Building access" />
          <div style={{
            display: "flex", alignItems: "center", gap: S.sm,
            padding: S.sm,
            background: T.greenBg,
            border: `1px solid ${T.green}30`,
            borderRadius: RADIUS.md,
            marginBottom: S.sm,
          }}>
            <CheckCircle2 size={16} color={T.greenDeep} />
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: T.greenDeep }}>
                Your building access is active.
              </div>
              <div style={{ fontSize: 12, color: T.greenDeep, opacity: 0.8, marginTop: 2 }}>
                All 4 chargers in {MOCK.tenant.building}
              </div>
            </div>
          </div>
          <DetailRow label="Subscription" value="Standard · €35/month" />
          <DetailRow label="Status" value="Active since Jan 2026" />
          <DetailRow label="Next billing" value="May 1, 2026" last />
        </Card>
      </div>

      <Card>
        <CardHeader
          title="Privacy & data (GDPR)"
          sub="All data is processed within the EU. You can update preferences anytime."
        />
        <ToggleRow
          label="Anonymized usage analytics"
          desc="Help us improve charger uptime and load balancing"
          checked={analytics} onChange={setAnalytics}
        />
        <ToggleRow
          label="Email monthly invoice"
          desc="Receive a copy of each invoice by email"
          checked={emailInvoice} onChange={setEmailInvoice}
        />
        <ToggleRow
          label="Session alerts"
          desc="Notify when a charging session starts and ends"
          checked={sessionAlerts} onChange={setSessionAlerts}
        />
        <ToggleRow
          label="Product updates"
          desc="Occasional emails about new features and Berlin coverage"
          checked={marketing} onChange={setMarketing}
        />
        <div style={{
          marginTop: S.md,
          paddingTop: S.md,
          borderTop: `1px solid ${T.border}`,
          display: "flex", gap: S.xs, flexWrap: "wrap",
        }}>
          <Button variant="secondary" size="sm" icon={Download} onClick={handleDownloadData} loading={downloadingData}>
            {downloadingData ? "Preparing…" : "Download my data"}
          </Button>
          <Button variant="ghost" size="sm" icon={FileText}>
            Privacy policy
          </Button>
          <Button variant="ghost" size="sm" icon={Globe}>
            EU data residency
          </Button>
        </div>
      </Card>
    </>
  );
}

function DetailRow({ label, value, last }) {
  return (
    <div style={{
      display: "flex", justifyContent: "space-between",
      padding: "9px 0",
      borderBottom: last ? "none" : `1px dashed ${T.border}`,
      fontSize: 13,
      gap: S.sm,
    }}>
      <span style={{ color: T.textDim }}>{label}</span>
      <span style={{ color: T.text, fontWeight: 500, textAlign: "right" }}>{value}</span>
    </div>
  );
}

function ToggleRow({ label, desc, checked, onChange }) {
  return (
    <div style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "12px 0",
      borderBottom: `1px dashed ${T.border}`,
      gap: S.md,
    }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13.5, fontWeight: 500, color: T.text }}>{label}</div>
        <div style={{ fontSize: 12, color: T.textFaint, marginTop: 2 }}>{desc}</div>
      </div>
      <button
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => onChange(!checked)}
        style={{
          width: 38, height: 22,
          borderRadius: 100,
          background: checked ? T.green : T.borderStrong,
          border: "none",
          cursor: "pointer",
          position: "relative",
          transition: "background 200ms",
          padding: 0,
          flexShrink: 0,
        }}
      >
        <span style={{
          position: "absolute",
          top: 2, left: checked ? 18 : 2,
          width: 18, height: 18,
          borderRadius: "50%",
          background: "#FFFFFF",
          boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
          transition: "left 200ms",
        }} />
      </button>
    </div>
  );
}

// ============================================================================
// OWNER DASHBOARD — Full build
// ============================================================================
function OwnerDashboard() {
  const { user } = useAuth();
  const [tab, setTab] = useState("overview");
  const [selectedBuildingId, setSelectedBuildingId] = useState("ALL"); // "ALL" or building id

  // Tickets state — lifted so all tabs share
  const [tickets, setTickets] = useState(MOCK.tickets);

  const navItems = [
    { key: "overview", label: "Overview" },
    { key: "buildings", label: "Buildings" },
    { key: "revenue", label: "Revenue" },
    { key: "maintenance", label: "Maintenance" },
    { key: "compliance", label: "Compliance" },
    { key: "settings", label: "Settings" },
  ];

  return (
    <DashboardShell
      navItems={navItems}
      activeItem={tab}
      onNavigate={setTab}
      userName={user?.company || MOCK.owner.company}
      badge="Property Owner"
      contextLine={{ label: "Network", value: `${MOCK.portfolio.networkUptime}% uptime` }}
    >
      {/* Building switcher — visible on all tabs except settings */}
      {tab !== "settings" && (
        <BuildingSwitcher
          selectedId={selectedBuildingId}
          onChange={setSelectedBuildingId}
        />
      )}
      {tab === "overview" && <OwnerOverview selectedBuildingId={selectedBuildingId} tickets={tickets} onJumpToMaintenance={() => setTab("maintenance")} />}
      {tab === "buildings" && <OwnerBuildings selectedBuildingId={selectedBuildingId} onSelectBuilding={setSelectedBuildingId} />}
      {tab === "revenue" && <OwnerRevenue selectedBuildingId={selectedBuildingId} />}
      {tab === "maintenance" && <OwnerMaintenance tickets={tickets} setTickets={setTickets} selectedBuildingId={selectedBuildingId} />}
      {tab === "compliance" && <OwnerCompliance selectedBuildingId={selectedBuildingId} />}
      {tab === "settings" && <OwnerSettings />}
    </DashboardShell>
  );
}

// ============================================================================
// BUILDING SWITCHER — sticky filter bar
// ============================================================================
function BuildingSwitcher({ selectedId, onChange }) {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const h = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const selected = selectedId === "ALL"
    ? { name: "All buildings", sub: `${MOCK.buildings.length} active in Berlin` }
    : (() => {
      const b = MOCK.buildings.find((b) => b.id === selectedId);
      return { name: b.name, sub: b.address };
    })();

  return (
    <div ref={ref} style={{
      position: "relative",
      marginBottom: S.md,
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          background: T.surface,
          border: `1px solid ${open ? T.green : T.border}`,
          borderRadius: RADIUS.lg,
          padding: `${S.sm}px ${S.md}px`,
          display: "flex", alignItems: "center", gap: S.sm,
          cursor: "pointer",
          fontFamily: "inherit",
          textAlign: "left",
          transition: "border-color 150ms",
          boxShadow: open ? SHADOW.md : SHADOW.sm,
        }}
      >
        <div style={{
          width: 36, height: 36, borderRadius: RADIUS.md,
          background: T.greenBg,
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}>
          {selectedId === "ALL" ? <Globe size={16} color={T.greenDeep} /> : <Building2 size={16} color={T.greenDeep} />}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize: 10.5, color: T.textFaint,
            fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase",
          }}>
            Viewing
          </div>
          <div style={{ fontSize: 14.5, fontWeight: 600, color: T.text, marginTop: 1 }}>
            {selected.name}
          </div>
          {!isMobile && (
            <div style={{ fontSize: 12, color: T.textFaint, marginTop: 1 }}>
              {selected.sub}
            </div>
          )}
        </div>
        <ChevronDown size={16} color={T.textDim} style={{
          transition: "transform 200ms",
          transform: open ? "rotate(180deg)" : "rotate(0)",
          flexShrink: 0,
        }} />
      </button>

      {open && (
        <div className="gb-slide-down" style={{
          position: "absolute",
          top: "calc(100% + 4px)", left: 0, right: 0,
          background: T.surface,
          border: `1px solid ${T.borderStrong}`,
          borderRadius: RADIUS.lg,
          boxShadow: SHADOW.lg,
          zIndex: 30,
          padding: 6,
          maxHeight: 360,
          overflowY: "auto",
        }}>
          <SwitcherItem
            active={selectedId === "ALL"}
            onClick={() => { onChange("ALL"); setOpen(false); }}
            icon={Globe}
            primary="All buildings"
            secondary={`${MOCK.buildings.length} buildings · ${MOCK.portfolio.activeChargers} chargers`}
          />
          <div style={{ height: 1, background: T.border, margin: "4px 0" }} />
          {MOCK.buildings.map((b) => (
            <SwitcherItem
              key={b.id}
              active={selectedId === b.id}
              onClick={() => { onChange(b.id); setOpen(false); }}
              icon={Building2}
              primary={b.name}
              secondary={`${b.occupancy}/${b.units} units · €${b.monthlyRevenue}/mo`}
              statusDot={<StatusDot status="operational" />}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function SwitcherItem({ active, onClick, icon: Icon, primary, secondary, statusDot }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: "100%",
        background: active ? T.greenBg : hover ? T.surface2 : "transparent",
        border: "1px solid transparent",
        borderRadius: RADIUS.md,
        padding: `${S.xs}px ${S.sm}px`,
        display: "flex", alignItems: "center", gap: S.sm,
        cursor: "pointer",
        fontFamily: "inherit",
        textAlign: "left",
        transition: "background 120ms",
      }}
    >
      <div style={{
        width: 30, height: 30, borderRadius: RADIUS.sm,
        background: active ? T.green + "20" : T.surface2,
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
      }}>
        <Icon size={14} color={active ? T.greenDeep : T.textDim} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: 13.5, fontWeight: 600,
          color: active ? T.greenDeep : T.text,
          display: "flex", alignItems: "center", gap: 6,
        }}>
          {primary}
          {statusDot}
        </div>
        <div style={{ fontSize: 11.5, color: T.textFaint, marginTop: 1 }}>{secondary}</div>
      </div>
      {active && <CheckCircle2 size={14} color={T.greenDeep} style={{ flexShrink: 0 }} />}
    </button>
  );
}

// Helper to filter data based on selected building
function getFilteredPortfolio(selectedBuildingId) {
  if (selectedBuildingId === "ALL") {
    return {
      buildings: MOCK.buildings,
      label: "All buildings",
      monthlyRevenue: MOCK.portfolio.monthlyRevenue,
      activeChargers: MOCK.portfolio.activeChargers,
      activeTenants: MOCK.portfolio.activeTenants,
    };
  }
  const b = MOCK.buildings.find((bd) => bd.id === selectedBuildingId);
  return {
    buildings: [b],
    label: b.name,
    monthlyRevenue: b.monthlyRevenue,
    activeChargers: b.chargers.l2 + b.chargers.dc,
    activeTenants: b.occupancy,
  };
}

// ============================================================================
// OWNER — OVERVIEW TAB
// ============================================================================
function OwnerOverview({ selectedBuildingId, tickets, onJumpToMaintenance }) {
  const { user } = useAuth();
  const isMobile = useIsMobile();
  const filtered = getFilteredPortfolio(selectedBuildingId);
  const ownerShare = Math.round(filtered.monthlyRevenue * PRICING.ownerShare);
  const openTicketCount = tickets.filter((t) => t.status === "open" || t.status === "in_progress").length;

  // Build trend data — when single building, scale proportionally
  const trendData = useMemo(() => {
    if (selectedBuildingId === "ALL") return MOCK.ownerRevenue;
    const b = MOCK.buildings.find((bd) => bd.id === selectedBuildingId);
    const ratio = b.monthlyRevenue / MOCK.portfolio.monthlyRevenue;
    return MOCK.ownerRevenue.map((m) => ({
      month: m.month,
      revenue: Math.round(m.revenue * ratio),
      share: Math.round(m.share * ratio),
    }));
  }, [selectedBuildingId]);

  // Building data for bar chart
  const buildingData = filtered.buildings.map((b) => ({
    name: b.name.split(" ")[0],
    revenue: b.monthlyRevenue,
    share: Math.round(b.monthlyRevenue * PRICING.ownerShare),
  }));

  return (
    <>
      <PageHeader
        title={user?.company || MOCK.owner.company}
        subtitle={`${filtered.label} · ${filtered.activeTenants} active subscribers · GEIG compliant`}
        actions={<LiveIndicator />}
      />

      {/* Maintenance alert if open tickets */}
      {openTicketCount > 0 && (
        <div
          onClick={onJumpToMaintenance}
          className="gb-fade-in"
          style={{
            background: T.amberBg,
            border: `1px solid ${T.amber}40`,
            borderRadius: RADIUS.lg,
            padding: S.sm,
            marginBottom: S.md,
            cursor: "pointer",
            display: "flex", alignItems: "center", gap: S.sm,
          }}
        >
          <div style={{
            width: 32, height: 32, borderRadius: RADIUS.md,
            background: T.surface,
            border: `1px solid ${T.amber}30`,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            <Wrench size={15} color="#A07000" />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#7A5500" }}>
              {openTicketCount} open maintenance {openTicketCount === 1 ? "ticket" : "tickets"}
            </div>
            <div style={{ fontSize: 12, color: "#7A5500", opacity: 0.8, marginTop: 1 }}>
              Tap to review and assign
            </div>
          </div>
          <ChevronRight size={16} color="#A07000" />
        </div>
      )}

      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
        gap: isMobile ? S.xs : S.sm,
        marginBottom: S.md,
      }}>
        <Stat label="Buildings" value={filtered.buildings.length} sub={selectedBuildingId === "ALL" ? "all operational" : "operational"} icon={Building2} accent={T.green} compact={isMobile} />
        <Stat label="Active chargers" value={filtered.activeChargers} sub={selectedBuildingId === "ALL" ? "9 L2 + 3 DC" : "3 L2 + 1 DC"} icon={Plug} accent={T.blue} compact={isMobile} />
        <Stat label="Subscribers" value={filtered.activeTenants} sub="+4 this month" icon={Users} accent={T.green} compact={isMobile} />
        <Stat label={`Your share · Apr`} value={`€${ownerShare}`} sub="20% of charging" icon={Euro} accent={T.amber} compact={isMobile} />
      </div>

      {/* Second row stats */}
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
        gap: isMobile ? S.xs : S.sm,
        marginBottom: S.md,
      }}>
        <Stat label="Network uptime" value={`${MOCK.portfolio.networkUptime}%`} sub="last 30 days" icon={Wifi} accent={T.green} compact={isMobile} />
        <Stat label="Open tickets" value={openTicketCount} sub={openTicketCount === 0 ? "all systems normal" : "needs review"} icon={Wrench} accent={openTicketCount > 0 ? T.amber : T.green} compact={isMobile} />
        <Stat label="Next payout" value="May 5" sub={`€${ownerShare} pending`} icon={Calendar} accent={T.green} compact={isMobile} />
        <Stat label="Compliance" value="100%" sub="GEIG · DIN/VDE · MID" icon={ShieldCheck} accent={T.green} compact={isMobile} />
      </div>

      {/* Energy flow diagram — signature visual */}
      {selectedBuildingId !== "ALL" && (
        <Card style={{ marginBottom: S.md }}>
          <CardHeader
            title={`Energy & revenue flow · ${MOCK.buildings.find((b) => b.id === selectedBuildingId).name}`}
            sub="Real-time view of how charging revenue moves through your building"
          />
          <EnergyFlowDiagram
            building={MOCK.buildings.find((b) => b.id === selectedBuildingId)}
          />
        </Card>
      )}

      {/* Berlin network panel — signature visual when ALL selected */}
      {selectedBuildingId === "ALL" && (
        <Card style={{ marginBottom: S.md }}>
          <CardHeader
            title="Berlin network"
            sub="Your portfolio across the city"
            action={<Badge color="success" size="sm"><StatusDot status="operational" />All online</Badge>}
          />
          <BerlinNetworkPanel buildings={MOCK.buildings} />
        </Card>
      )}

      {/* Revenue trend chart */}
      <Card style={{ marginBottom: S.md }}>
        <CardHeader
          title="Revenue trend · last 6 months"
          action={
            <div style={{ display: "flex", gap: S.sm, fontSize: 11, flexWrap: "wrap" }}>
              <span style={{ display: "flex", alignItems: "center", gap: 6, color: T.textDim }}>
                <span style={{ width: 8, height: 8, borderRadius: 2, background: T.green }} />
                Total revenue
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 6, color: T.textDim }}>
                <span style={{ width: 8, height: 8, borderRadius: 2, background: T.blue }} />
                Your share (20%)
              </span>
            </div>
          }
        />
        <div style={{ height: 240, marginLeft: -8 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trendData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="ownerRevGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={T.green} stopOpacity={0.30} />
                  <stop offset="100%" stopColor={T.green} stopOpacity={0} />
                </linearGradient>
                <linearGradient id="ownerShareGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={T.blue} stopOpacity={0.30} />
                  <stop offset="100%" stopColor={T.blue} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="2 4" vertical={false} />
              <XAxis dataKey="month" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} width={50} tickFormatter={(v) => `€${v}`} />
              <Tooltip formatter={(v) => `€${v.toLocaleString()}`} cursor={{ stroke: T.borderStrong, strokeDasharray: "3 3" }} />
              <Area type="monotone" dataKey="revenue" stroke={T.green} strokeWidth={2.5} fill="url(#ownerRevGrad)" animationDuration={800} name="Revenue" />
              <Area type="monotone" dataKey="share" stroke={T.blue} strokeWidth={2.5} fill="url(#ownerShareGrad)" animationDuration={800} animationBegin={200} name="Your share" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Building breakdown + compliance */}
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1.4fr 1fr",
        gap: S.md,
      }}>
        <Card>
          <CardHeader title={`Revenue by building · April 2026`} />
          <div style={{ height: 180 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={buildingData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="2 4" vertical={false} />
                <XAxis dataKey="name" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} width={50} tickFormatter={(v) => `€${v}`} />
                <Tooltip cursor={{ fill: T.surface2 }} formatter={(v) => `€${v.toLocaleString()}`} />
                <Bar dataKey="revenue" fill={T.green} radius={[4, 4, 0, 0]} animationDuration={600} name="Revenue" />
                <Bar dataKey="share" fill={T.blue} radius={[4, 4, 0, 0]} animationDuration={600} animationBegin={200} name="Your share" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <CardHeader title="Compliance" />
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {[
              { label: "GEIG Act", status: "compliant" },
              { label: "DIN/VDE certification", status: "compliant" },
              { label: "MID-compliant metering", status: "compliant" },
              { label: "GDPR (EU-resident)", status: "compliant" },
            ].map((c) => (
              <div key={c.label} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: `${S.xs}px ${S.sm}px`,
                background: T.surface2,
                border: `1px solid ${T.border}`,
                borderRadius: RADIUS.md,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <ShieldCheck size={13} color={T.green} />
                  <span style={{ fontSize: 13, color: T.text, fontWeight: 500 }}>{c.label}</span>
                </div>
                <Badge color="success" size="sm">✓</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}

// ============================================================================
// SIGNATURE — Energy & Revenue Flow Diagram
// Shows building → chargers → tenants → revenue → owner share
// ============================================================================
function EnergyFlowDiagram({ building }) {
  const isMobile = useIsMobile();
  const ownerShare = Math.round(building.monthlyRevenue * PRICING.ownerShare);

  return (
    <div style={{
      background: T.bgDark,
      borderRadius: RADIUS.md,
      padding: isMobile ? S.md : S.lg,
      position: "relative",
      overflow: "hidden",
    }}>
      <svg viewBox="0 0 600 280" width="100%" style={{ display: "block" }}>
        <defs>
          <linearGradient id="energy-pulse" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={T.greenBright} stopOpacity="0" />
            <stop offset="50%" stopColor={T.greenBright} stopOpacity="1" />
            <stop offset="100%" stopColor={T.greenBright} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* === LEFT: Apartment building === */}
        <g>
          <rect x="30" y="50" width="100" height="180" fill={T.surfaceDark2} stroke={T.borderDarkStrong} strokeWidth="1" rx="3" />
          {/* Windows grid 4x6 */}
          {Array.from({ length: 6 }).map((_, row) =>
            Array.from({ length: 4 }).map((_, col) => {
              const lit = (row * 3 + col) % 4 < 2;
              return (
                <rect
                  key={`${row}-${col}`}
                  x={38 + col * 22} y={62 + row * 26}
                  width="14" height="14" rx="1"
                  fill={lit ? T.greenBright : T.borderDarkStrong}
                  opacity={lit ? 0.7 : 0.4}
                />
              );
            })
          )}
          {/* Door */}
          <rect x="72" y="210" width="16" height="20" fill={T.borderDarkStrong} rx="1" />
          <text x="80" y="244" textAnchor="middle" fontSize="9" fill={T.textInvertFaint} fontWeight="600" letterSpacing="0.06em">
            {building.units} UNITS
          </text>
        </g>

        {/* === MIDDLE: 4 chargers (3 L2 + 1 DC) === */}
        <g>
          {/* Background pad */}
          <rect x="200" y="50" width="160" height="180" fill="none" stroke={T.borderDark} strokeDasharray="3 3" strokeWidth="0.5" rx="6" />
          <text x="280" y="42" textAnchor="middle" fontSize="9" fill={T.textInvertFaint} fontWeight="600" letterSpacing="0.06em">
            CHARGERS · {building.chargers.l2 + building.chargers.dc} ACTIVE
          </text>

          {/* L2 chargers — 3 of them */}
          {[0, 1, 2].map((i) => (
            <g key={`l2-${i}`} transform={`translate(${215 + i * 35}, 70)`}>
              <rect x="0" y="0" width="22" height="60" fill={T.surfaceDark} stroke={T.greenBright} strokeWidth="1" rx="2" />
              <rect x="3" y="6" width="16" height="14" fill={T.bgDark} stroke={T.greenBright} strokeWidth="0.5" rx="1" />
              <rect x="5" y="11" width="12" height="1.2" fill={T.greenBright} opacity="0.8" />
              <rect x="5" y="14" width="8" height="1" fill={T.greenBright} opacity="0.5" />
              <circle cx="11" cy="40" r="1.5" fill={T.greenBright}>
                <animate attributeName="opacity" values="1;0.3;1" dur={`${1.4 + i * 0.2}s`} repeatCount="indefinite" />
              </circle>
              <text x="11" y="74" textAnchor="middle" fontSize="7" fill={T.textInvertDim} fontWeight="600">L2</text>
            </g>
          ))}

          {/* DC fast charger — taller, distinct */}
          <g transform="translate(325, 60)">
            <rect x="0" y="0" width="26" height="80" fill={T.surfaceDark} stroke={T.greenBright} strokeWidth="1.5" rx="2" />
            <rect x="3" y="8" width="20" height="20" fill={T.bgDark} stroke={T.greenBright} strokeWidth="0.5" rx="1" />
            <rect x="6" y="14" width="14" height="1.5" fill={T.greenBright} opacity="0.9" />
            <rect x="6" y="18" width="10" height="1.2" fill={T.greenBright} opacity="0.7" />
            <rect x="6" y="22" width="12" height="1" fill={T.greenBright} opacity="0.5" />
            <circle cx="13" cy="48" r="2" fill={T.greenBright}>
              <animate attributeName="opacity" values="1;0.4;1" dur="1.0s" repeatCount="indefinite" />
            </circle>
            <text x="13" y="94" textAnchor="middle" fontSize="7" fill={T.greenBright} fontWeight="700">DC</text>
          </g>
        </g>

        {/* Energy flow: building → chargers (animated dashes) */}
        <line x1="130" y1="140" x2="200" y2="140"
          stroke={T.greenBright} strokeWidth="1.5" strokeDasharray="4 4"
          style={{ animation: "gb-energy-flow 1s linear infinite" }}
        />
        <text x="165" y="132" textAnchor="middle" fontSize="8" fill={T.textInvertFaint} fontWeight="600" letterSpacing="0.04em">
          POWER
        </text>

        {/* === RIGHT: Tenants → Revenue → Owner === */}
        <g>
          {/* Tenant icon group */}
          <g transform="translate(420, 60)">
            <rect x="0" y="0" width="70" height="50" fill={T.surfaceDark2} stroke={T.borderDarkStrong} strokeWidth="1" rx="4" />
            <text x="35" y="14" textAnchor="middle" fontSize="8" fill={T.textInvertFaint} fontWeight="600" letterSpacing="0.06em">
              TENANTS
            </text>
            {/* Mini person icons */}
            {[0, 1, 2].map((i) => (
              <g key={i} transform={`translate(${15 + i * 18}, 22)`}>
                <circle cx="6" cy="6" r="3.5" fill={T.greenBright} opacity="0.8" />
                <path d="M 0 18 Q 0 12, 6 12 Q 12 12, 12 18 Z" fill={T.greenBright} opacity="0.8" />
              </g>
            ))}
            <text x="35" y="64" textAnchor="middle" fontSize="9" fill={T.textInvert} fontWeight="700" fontVariantNumeric="tabular-nums">
              {building.occupancy} subscribers
            </text>
          </g>

          {/* GridBridge ops layer */}
          <g transform="translate(420, 140)">
            <rect x="0" y="0" width="70" height="44" fill={T.greenBgDark} stroke={T.greenBright} strokeWidth="1" rx="4" />
            <text x="35" y="14" textAnchor="middle" fontSize="8" fill={T.greenBright} fontWeight="700" letterSpacing="0.06em">
              GRIDBRIDGE
            </text>
            <text x="35" y="28" textAnchor="middle" fontSize="11" fill={T.textInvert} fontWeight="700" fontVariantNumeric="tabular-nums">
              €{building.monthlyRevenue}
            </text>
            <text x="35" y="38" textAnchor="middle" fontSize="7" fill={T.textInvertFaint} letterSpacing="0.04em">
              MONTHLY · 80% RETAINED
            </text>
          </g>

          {/* Owner share */}
          <g transform="translate(420, 210)">
            <rect x="0" y="0" width="70" height="40" fill={T.surfaceDark2} stroke={T.amber} strokeWidth="1.5" rx="4" />
            <text x="35" y="14" textAnchor="middle" fontSize="8" fill={T.amber} fontWeight="700" letterSpacing="0.06em">
              OWNER · 20%
            </text>
            <text x="35" y="32" textAnchor="middle" fontSize="13" fill={T.amber} fontWeight="700" fontVariantNumeric="tabular-nums">
              €{ownerShare}
            </text>
          </g>
        </g>

        {/* Revenue flow: chargers → tenants → revenue → owner */}
        <path d="M 360 90 Q 390 90, 420 85"
          fill="none" stroke={T.greenBright} strokeWidth="1.2"
          strokeDasharray="4 4"
          style={{ animation: "gb-energy-flow 1.2s linear infinite" }}
        />
        <path d="M 455 110 L 455 140"
          fill="none" stroke={T.greenBright} strokeWidth="1.2"
          strokeDasharray="4 4"
          style={{ animation: "gb-energy-flow 1.2s linear infinite" }}
        />
        <path d="M 455 184 L 455 210"
          fill="none" stroke={T.amber} strokeWidth="1.5"
          strokeDasharray="4 4"
          style={{ animation: "gb-energy-flow 1.2s linear infinite" }}
        />

        {/* Floating energy pulses on the main horizontal flow */}
        {[0, 0.4, 0.8].map((delay, i) => (
          <circle key={i} r="2.5" fill={T.greenBright}>
            <animateMotion
              dur="1.5s" repeatCount="indefinite" begin={`${delay}s`}
              path="M 130 140 L 200 140"
            />
          </circle>
        ))}
      </svg>

      {/* Bottom legend */}
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
        gap: S.xs,
        marginTop: S.md,
      }}>
        {[
          { label: "Energy delivered", value: `${building.monthlyKwh} kWh`, color: T.greenBright },
          { label: "Charging revenue", value: `€${building.monthlyRevenue}`, color: T.greenBright },
          { label: "Your share (20%)", value: `€${ownerShare}`, color: T.amber },
          { label: "Charger uptime", value: `${building.uptime}%`, color: T.greenBright },
        ].map((m) => (
          <div key={m.label} style={{
            background: T.surfaceDark,
            border: `1px solid ${T.borderDark}`,
            borderRadius: RADIUS.md,
            padding: `${S.xs}px ${S.sm}px`,
          }}>
            <div style={{
              fontSize: 9.5, fontWeight: 600,
              color: T.textInvertFaint,
              letterSpacing: "0.06em", textTransform: "uppercase",
            }}>{m.label}</div>
            <div style={{
              fontSize: 14, fontWeight: 700,
              color: m.color, marginTop: 2,
              fontVariantNumeric: "tabular-nums",
              letterSpacing: "-0.01em",
            }}>{m.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// SIGNATURE — Berlin Network Panel
// Abstract map-like view with dots + connecting lines for each building
// ============================================================================
function BerlinNetworkPanel({ buildings }) {
  const [hoveredId, setHoveredId] = useState(null);
  const isMobile = useIsMobile();

  return (
    <div style={{
      background: T.bgDark,
      borderRadius: RADIUS.md,
      padding: isMobile ? S.sm : S.md,
      position: "relative",
    }}>
      <svg viewBox="0 0 600 360" width="100%" style={{ display: "block" }}>
        {/* Grid background — subtle */}
        <defs>
          <pattern id="grid-bg" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke={T.borderDark} strokeWidth="0.3" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="600" height="360" fill="url(#grid-bg)" />

        {/* Stars */}
        {Array.from({ length: 30 }).map((_, i) => {
          const seed = (i * 7919 + 12345) % 1000;
          const x = (seed % 600);
          const y = ((seed * 3) % 360);
          return (
            <circle
              key={i} cx={x} cy={y} r="0.8"
              fill={T.greenBright}
              opacity="0.3"
              style={{ animation: `gb-twinkle ${2 + (i % 3)}s ease-in-out infinite`, animationDelay: `${(i % 5) * 0.3}s` }}
            />
          );
        })}

        {/* River Spree — abstract curve */}
        <path
          d="M 0 220 Q 150 180, 280 220 T 600 200"
          fill="none" stroke={T.blue} strokeWidth="1.5" opacity="0.25"
        />
        <text x="80" y="240" fontSize="9" fill={T.textInvertFaint} opacity="0.6" fontWeight="500">
          Spree
        </text>

        {/* Connecting lines between buildings (abstract network) */}
        {buildings.map((b1, i) =>
          buildings.slice(i + 1).map((b2) => (
            <line
              key={`${b1.id}-${b2.id}`}
              x1={b1.coords.x * 600} y1={b1.coords.y * 360}
              x2={b2.coords.x * 600} y2={b2.coords.y * 360}
              stroke={T.greenBright}
              strokeWidth="0.5"
              strokeDasharray="3 5"
              opacity={hoveredId && (b1.id === hoveredId || b2.id === hoveredId) ? 0.7 : 0.25}
            />
          ))
        )}

        {/* Building nodes */}
        {buildings.map((b) => {
          const x = b.coords.x * 600;
          const y = b.coords.y * 360;
          const isHovered = hoveredId === b.id;
          return (
            <g
              key={b.id}
              style={{ cursor: "pointer" }}
              onMouseEnter={() => setHoveredId(b.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Pulse ring */}
              <circle cx={x} cy={y} r="14" fill="none" stroke={T.greenBright} strokeWidth="0.8" opacity="0.4">
                <animate attributeName="r" values="10;20;10" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;0;0.5" dur="2.5s" repeatCount="indefinite" />
              </circle>
              {/* Outer ring */}
              <circle cx={x} cy={y} r={isHovered ? 14 : 11}
                fill="none" stroke={T.greenBright} strokeWidth="1.5"
                style={{ transition: "r 200ms" }}
              />
              {/* Inner dot */}
              <circle cx={x} cy={y} r={isHovered ? 7 : 5}
                fill={T.greenBright}
                style={{ transition: "r 200ms" }}
              />
              {/* Label */}
              <g transform={`translate(${x}, ${y})`}>
                <rect
                  x={-55} y={-44}
                  width="110" height="22" rx="11"
                  fill={T.surfaceDark}
                  stroke={isHovered ? T.greenBright : T.borderDark}
                  strokeWidth="1"
                  style={{ transition: "stroke 200ms" }}
                />
                <text
                  x="0" y={-29}
                  textAnchor="middle" fontSize="10"
                  fill={T.textInvert} fontWeight="600"
                  letterSpacing="-0.005em"
                >
                  {b.name.split(" ")[0]}
                </text>
              </g>

              {/* Stats popup on hover */}
              {isHovered && (
                <g transform={`translate(${x}, ${y + 18})`}>
                  <rect
                    x="-65" y="0"
                    width="130" height="48" rx="6"
                    fill={T.surfaceDark}
                    stroke={T.greenBright}
                    strokeWidth="1"
                  />
                  <text x="0" y="14" textAnchor="middle" fontSize="9" fill={T.textInvertFaint} fontWeight="600" letterSpacing="0.06em">
                    {b.id} · {b.address.split(",")[1]?.trim() || "Berlin"}
                  </text>
                  <text x="0" y="30" textAnchor="middle" fontSize="11" fill={T.greenBright} fontWeight="700" fontVariantNumeric="tabular-nums">
                    €{b.monthlyRevenue} · {b.occupancy}/{b.units}
                  </text>
                  <text x="0" y="42" textAnchor="middle" fontSize="9" fill={T.textInvertDim} letterSpacing="0.04em">
                    {b.uptime}% UPTIME
                  </text>
                </g>
              )}
            </g>
          );
        })}

        {/* North indicator */}
        <g transform="translate(560, 30)">
          <circle cx="0" cy="0" r="14" fill={T.surfaceDark} stroke={T.borderDark} strokeWidth="0.5" />
          <text x="0" y="-2" textAnchor="middle" fontSize="8" fill={T.textInvertFaint} fontWeight="600">N</text>
          <path d="M 0 -8 L 3 -3 L 0 -5 L -3 -3 Z" fill={T.greenBright} />
        </g>
      </svg>

      {/* Legend strip */}
      <div style={{
        marginTop: S.sm,
        display: "flex", justifyContent: "space-between",
        alignItems: "center", flexWrap: "wrap", gap: S.xs,
      }}>
        <div style={{ display: "flex", gap: S.md, fontSize: 11, color: T.textInvertDim, flexWrap: "wrap" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: T.greenBright }} />
            Active site
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ width: 14, height: 1, background: T.greenBright, opacity: 0.5 }} />
            Network link
          </span>
        </div>
        <span style={{ fontSize: 11, color: T.textInvertFaint, letterSpacing: "0.04em" }}>
          Hover a node for details
        </span>
      </div>
    </div>
  );
}

// ============================================================================
// OWNER — BUILDINGS TAB
// ============================================================================
function OwnerBuildings({ selectedBuildingId, onSelectBuilding }) {
  const isMobile = useIsMobile();
  const buildings = selectedBuildingId === "ALL"
    ? MOCK.buildings
    : MOCK.buildings.filter((b) => b.id === selectedBuildingId);

  return (
    <>
      <PageHeader
        title="Buildings"
        subtitle={selectedBuildingId === "ALL"
          ? `${MOCK.buildings.length} buildings · ${MOCK.portfolio.activeChargers} chargers · ${MOCK.portfolio.activeTenants} subscribers`
          : MOCK.buildings.find((b) => b.id === selectedBuildingId).name}
        actions={<Button variant="secondary" size="md" icon={Plus}>Add building</Button>}
      />

      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(380px, 1fr))",
        gap: S.md,
      }}>
        {buildings.map((b) => (
          <BuildingDetailCard key={b.id} building={b} onSelect={() => onSelectBuilding(b.id)} />
        ))}
      </div>
    </>
  );
}

function BuildingDetailCard({ building, onSelect }) {
  const occPct = Math.round(building.occupancyRate * 100);
  const ownerShare = Math.round(building.monthlyRevenue * PRICING.ownerShare);

  return (
    <Card hover>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: S.md }}>
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{ fontSize: 10.5, color: T.textFaint, letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600, marginBottom: 4, fontVariantNumeric: "tabular-nums" }}>
            {building.id}
          </div>
          <h3 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 4px", color: T.text, letterSpacing: "-0.015em" }}>
            {building.name}
          </h3>
          <div style={{ fontSize: 12, color: T.textDim, display: "flex", alignItems: "center", gap: 4 }}>
            <MapPin size={11} /> {building.address}
          </div>
        </div>
        <Badge color="success" size="sm"><StatusDot status="operational" />Operational</Badge>
      </div>

      {/* Occupancy bar */}
      <div style={{ marginBottom: S.md }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: T.textDim, marginBottom: 6 }}>
          <span>Occupancy</span>
          <span style={{ color: T.text, fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>
            {building.occupancy} / {building.units} · {occPct}%
          </span>
        </div>
        <div style={{ height: 6, background: T.surface2, borderRadius: 100, overflow: "hidden", border: `1px solid ${T.border}` }}>
          <div style={{
            width: `${occPct}%`, height: "100%",
            background: `linear-gradient(90deg, ${T.green}, ${T.greenBright})`,
            borderRadius: 100,
            transition: "width 600ms ease",
          }} />
        </div>
      </div>

      {/* Health metrics */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: S.xs,
        marginBottom: S.md,
      }}>
        <BuildingMini label="Uptime" value={`${building.uptime}%`} accent={T.green} />
        <BuildingMini label="Energy" value={`${building.monthlyKwh}`} unit="kWh" />
        <BuildingMini label="Revenue" value={`€${building.monthlyRevenue}`} accent={T.green} />
        <BuildingMini label="Your 20%" value={`€${ownerShare}`} accent={T.amber} />
      </div>

      {/* Charger summary */}
      <div style={{
        background: T.surface2,
        border: `1px solid ${T.border}`,
        borderRadius: RADIUS.md,
        padding: `${S.xs}px ${S.sm}px`,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        marginBottom: S.sm,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Plug size={13} color={T.greenDeep} />
          <span style={{ fontSize: 12.5, color: T.text, fontWeight: 500 }}>
            {building.chargers.l2 + building.chargers.dc} chargers · {building.chargers.l2}× L2 + {building.chargers.dc}× DC
          </span>
        </div>
        <span style={{ fontSize: 11, color: T.textFaint }}>
          Last inspection {new Date(building.lastInspection).toLocaleDateString("de-DE", { month: "short", day: "numeric" })}
        </span>
      </div>

      <Button variant="secondary" size="sm" fullWidth onClick={onSelect} iconRight={ArrowRight}>
        View building details
      </Button>
    </Card>
  );
}

function BuildingMini({ label, value, unit, accent }) {
  return (
    <div>
      <div style={{
        fontSize: 9.5, color: T.textFaint, fontWeight: 600,
        letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 3,
      }}>{label}</div>
      <div style={{
        fontSize: 14, fontWeight: 700,
        color: accent || T.text,
        fontVariantNumeric: "tabular-nums",
        letterSpacing: "-0.01em",
        lineHeight: 1.1,
      }}>
        {value}
        {unit && <span style={{ fontSize: 10, color: T.textFaint, marginLeft: 2, fontWeight: 500 }}>{unit}</span>}
      </div>
    </div>
  );
}

// ============================================================================
// OWNER — REVENUE TAB
// ============================================================================
function OwnerRevenue({ selectedBuildingId }) {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [exporting, setExporting] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const filtered = getFilteredPortfolio(selectedBuildingId);
  const trendData = useMemo(() => {
    if (selectedBuildingId === "ALL") return MOCK.ownerRevenue;
    const b = MOCK.buildings.find((bd) => bd.id === selectedBuildingId);
    const ratio = b.monthlyRevenue / MOCK.portfolio.monthlyRevenue;
    return MOCK.ownerRevenue.map((m) => ({
      month: m.month,
      revenue: Math.round(m.revenue * ratio),
      share: Math.round(m.share * ratio),
    }));
  }, [selectedBuildingId]);

  const totalYtd = trendData.reduce((sum, m) => sum + m.share, 0);
  const lastMonth = trendData[trendData.length - 1];
  const prevMonth = trendData[trendData.length - 2];
  const growth = ((lastMonth.share - prevMonth.share) / prevMonth.share) * 100;

  const handleExport = async () => {
    setExporting(true);
    await new Promise((r) => setTimeout(r, 800));
    setExporting(false);
    toast("Revenue report exported", { description: "CSV ready in your inbox" });
  };

  const handleStatement = async () => {
    setDownloading(true);
    await new Promise((r) => setTimeout(r, 700));
    setDownloading(false);
    toast("Payout statement downloaded");
  };

  return (
    <>
      <PageHeader
        title="Revenue"
        subtitle={`${filtered.label} · 20% revenue share on charging activity`}
        actions={
          <>
            <Button variant="secondary" icon={Download} onClick={handleStatement} loading={downloading}>
              Statement
            </Button>
            <Button variant="primary" icon={ArrowUpRight} onClick={handleExport} loading={exporting}>
              {exporting ? "Exporting…" : "Export report"}
            </Button>
          </>
        }
      />

      {/* Summary cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
        gap: isMobile ? S.xs : S.sm,
        marginBottom: S.md,
      }}>
        <Stat label="This month" value={`€${lastMonth.share}`} sub={`${growth >= 0 ? "+" : ""}${growth.toFixed(1)}% vs last month`} icon={TrendingUp} accent={T.green} compact={isMobile} />
        <Stat label="6-month total" value={`€${totalYtd.toLocaleString()}`} sub="your share" icon={Euro} accent={T.green} compact={isMobile} />
        <Stat label="Revenue share" value="20%" sub="of charging revenue" icon={BarChart3} accent={T.blue} compact={isMobile} />
        <Stat label="Next payout" value="May 5" sub={`€${lastMonth.share} pending`} icon={Calendar} accent={T.amber} compact={isMobile} />
      </div>

      {/* Microcopy callout */}
      <Card style={{
        marginBottom: S.md,
        background: T.panel,
        border: `1px solid ${T.green}30`,
      }}>
        <div style={{ display: "flex", gap: S.sm, alignItems: "flex-start" }}>
          <Info size={15} color={T.greenDeep} style={{ marginTop: 2, flexShrink: 0 }} />
          <div style={{ fontSize: 12.5, color: T.greenDeep, lineHeight: 1.6 }}>
            <strong>How it works:</strong> Revenue share is calculated from charging usage only.
            Subscription revenue (€{PRICING.subscription}/mo per tenant) is retained by GridBridge.
            Payouts process monthly on the 5th business day.
          </div>
        </div>
      </Card>

      {/* Trend chart */}
      <Card style={{ marginBottom: S.md }}>
        <CardHeader
          title="Monthly revenue · last 6 months"
          action={
            <div style={{ display: "flex", gap: S.sm, fontSize: 11, flexWrap: "wrap" }}>
              <span style={{ display: "flex", alignItems: "center", gap: 6, color: T.textDim }}>
                <span style={{ width: 8, height: 8, borderRadius: 2, background: T.green }} />
                Total revenue
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 6, color: T.textDim }}>
                <span style={{ width: 8, height: 8, borderRadius: 2, background: T.blue }} />
                Your share
              </span>
            </div>
          }
        />
        <div style={{ height: 260, marginLeft: -8 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trendData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="revGradMain" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={T.green} stopOpacity={0.30} />
                  <stop offset="100%" stopColor={T.green} stopOpacity={0} />
                </linearGradient>
                <linearGradient id="shareGradMain" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={T.blue} stopOpacity={0.30} />
                  <stop offset="100%" stopColor={T.blue} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="2 4" vertical={false} />
              <XAxis dataKey="month" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} width={50} tickFormatter={(v) => `€${v}`} />
              <Tooltip cursor={{ stroke: T.borderStrong, strokeDasharray: "3 3" }} formatter={(v) => `€${v.toLocaleString()}`} />
              <Area type="monotone" dataKey="revenue" stroke={T.green} strokeWidth={2.5} fill="url(#revGradMain)" animationDuration={800} />
              <Area type="monotone" dataKey="share" stroke={T.blue} strokeWidth={2.5} fill="url(#shareGradMain)" animationDuration={800} animationBegin={200} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Per-building breakdown */}
      <Card style={{ marginBottom: S.md }}>
        <CardHeader title={`Per-building contribution · April 2026`} sub="Revenue and 20% share by site" />
        {filtered.buildings.map((b, i) => {
          const share = Math.round(b.monthlyRevenue * PRICING.ownerShare);
          const pct = (b.monthlyRevenue / Math.max(...filtered.buildings.map((x) => x.monthlyRevenue))) * 100;
          return (
            <div key={b.id} style={{
              padding: `${S.sm}px 0`,
              borderBottom: i < filtered.buildings.length - 1 ? `1px dashed ${T.border}` : "none",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                <div>
                  <div style={{ fontSize: 13.5, fontWeight: 600, color: T.text }}>{b.name}</div>
                  <div style={{ fontSize: 12, color: T.textFaint, marginTop: 1, fontVariantNumeric: "tabular-nums" }}>
                    {b.occupancy} subscribers · {b.monthlyKwh} kWh · {b.uptime}% uptime
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 13.5, color: T.text, fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>
                    €{b.monthlyRevenue.toLocaleString()}
                  </div>
                  <div style={{ fontSize: 12, color: T.amber, fontWeight: 700, marginTop: 1, fontVariantNumeric: "tabular-nums" }}>
                    €{share} share
                  </div>
                </div>
              </div>
              <div style={{ height: 4, background: T.surface2, borderRadius: 100, overflow: "hidden" }}>
                <div style={{
                  width: `${pct}%`, height: "100%",
                  background: T.green, borderRadius: 100,
                }} />
              </div>
            </div>
          );
        })}
      </Card>

      {/* Payout details */}
      <Card>
        <CardHeader title="Next payout" />
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
          gap: S.sm,
        }}>
          <div style={{ padding: S.sm, background: T.surface2, border: `1px solid ${T.border}`, borderRadius: RADIUS.md }}>
            <Label>Date</Label>
            <div style={{ fontSize: 16, fontWeight: 700, color: T.text, marginTop: 4, fontVariantNumeric: "tabular-nums" }}>
              May 5, 2026
            </div>
          </div>
          <div style={{ padding: S.sm, background: T.surface2, border: `1px solid ${T.border}`, borderRadius: RADIUS.md }}>
            <Label>Amount</Label>
            <div style={{ fontSize: 16, fontWeight: 700, color: T.green, marginTop: 4, fontVariantNumeric: "tabular-nums" }}>
              €{lastMonth.share}
            </div>
          </div>
          <div style={{ padding: S.sm, background: T.surface2, border: `1px solid ${T.border}`, borderRadius: RADIUS.md }}>
            <Label>Method</Label>
            <div style={{ fontSize: 13.5, fontWeight: 600, color: T.text, marginTop: 6 }}>
              SEPA transfer
            </div>
          </div>
          <div style={{ padding: S.sm, background: T.surface2, border: `1px solid ${T.border}`, borderRadius: RADIUS.md }}>
            <Label>Status</Label>
            <div style={{ marginTop: 6 }}>
              <Badge color="warning" size="sm"><Clock size={10} />Pending</Badge>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}

// ============================================================================
// OWNER — MAINTENANCE TAB
// ============================================================================
function OwnerMaintenance({ tickets, setTickets, selectedBuildingId }) {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [submitModal, setSubmitModal] = useState(false);
  const [viewTicket, setViewTicket] = useState(null);

  const filtered = selectedBuildingId === "ALL"
    ? tickets
    : tickets.filter((t) => {
      const b = MOCK.buildings.find((bd) => bd.id === selectedBuildingId);
      return t.building === b.name;
    });

  const open = filtered.filter((t) => t.status === "open");
  const inProgress = filtered.filter((t) => t.status === "in_progress");
  const resolved = filtered.filter((t) => t.status === "resolved");

  const handleSubmit = (data) => {
    const newTicket = {
      id: `MT-${2042 + tickets.length}`,
      ...data,
      status: "open",
      created: new Date().toISOString().slice(0, 10),
      technician: "Unassigned",
      eta: new Date(Date.now() + 4 * 24 * 3600 * 1000).toISOString().slice(0, 10),
    };
    setTickets((t) => [newTicket, ...t]);
    toast("Maintenance request submitted", { description: `Ticket ${newTicket.id} created` });
    setSubmitModal(false);
  };

  const handleMarkReviewed = (id) => {
    setTickets((ts) => ts.map((t) => t.id === id ? { ...t, status: "in_progress", technician: "T. Köhler" } : t));
    toast("Ticket marked as reviewed", { description: "Assigned to T. Köhler" });
  };

  return (
    <>
      <PageHeader
        title="Maintenance"
        subtitle={`${filtered.length} ${filtered.length === 1 ? "ticket" : "tickets"} · ${open.length + inProgress.length} active`}
        actions={
          <Button variant="primary" icon={Plus} onClick={() => setSubmitModal(true)}>
            Submit request
          </Button>
        }
      />

      {/* Status summary */}
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "repeat(3, 1fr)" : "repeat(4, 1fr)",
        gap: isMobile ? S.xs : S.sm,
        marginBottom: S.md,
      }}>
        <Stat label="Open" value={open.length} sub="awaiting review" icon={AlertCircle} accent={open.length > 0 ? T.amber : T.green} compact={isMobile} />
        <Stat label="In progress" value={inProgress.length} sub="assigned" icon={Wrench} accent={T.blue} compact={isMobile} />
        <Stat label="Resolved (30d)" value={resolved.length || 12} sub="this month" icon={CheckCircle2} accent={T.green} compact={isMobile} />
        <Stat label="Avg. resolution" value="2.4d" sub="last 90 days" icon={Clock} accent={T.text} compact={isMobile} />
      </div>

      {/* Empty state */}
      {filtered.length === 0 ? (
        <Card>
          <div style={{
            display: "flex", flexDirection: "column", alignItems: "center",
            gap: S.sm, padding: `${S.xl}px ${S.lg}px`, textAlign: "center",
          }}>
            <div style={{
              width: 56, height: 56, borderRadius: RADIUS.lg,
              background: T.greenBg,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <CheckCircle2 size={26} color={T.greenDeep} />
            </div>
            <div style={{ fontSize: 16, fontWeight: 600, color: T.text }}>
              No active maintenance issues
            </div>
            <div style={{ fontSize: 13, color: T.textDim, maxWidth: 360, lineHeight: 1.5 }}>
              All chargers are operating normally. Submit a request if you notice anything unusual.
            </div>
            <Button variant="secondary" size="sm" icon={Plus} onClick={() => setSubmitModal(true)}>
              Submit request
            </Button>
          </div>
        </Card>
      ) : (
        <Card style={{ padding: 0, overflow: "hidden" }}>
          <div style={{
            padding: `${S.sm}px ${S.md}px`,
            borderBottom: `1px solid ${T.border}`,
            background: T.surface2,
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <Label>Active tickets</Label>
            <span style={{ fontSize: 11.5, color: T.textFaint }}>Sorted by priority</span>
          </div>
          <div>
            {filtered.map((t, i) => (
              <TicketRow
                key={t.id}
                ticket={t}
                last={i === filtered.length - 1}
                onView={() => setViewTicket(t)}
                onMarkReviewed={() => handleMarkReviewed(t.id)}
              />
            ))}
          </div>
        </Card>
      )}

      <SubmitTicketModal open={submitModal} onClose={() => setSubmitModal(false)} onSubmit={handleSubmit} />
      <ViewTicketModal ticket={viewTicket} onClose={() => setViewTicket(null)} />
    </>
  );
}

function TicketRow({ ticket, last, onView, onMarkReviewed }) {
  const isMobile = useIsMobile();
  const priorityConfig = {
    high: { color: T.red, label: "High" },
    medium: { color: T.amber, label: "Medium" },
    low: { color: T.textFaint, label: "Low" },
  }[ticket.priority];

  const statusConfig = {
    open: { color: "warning", label: "Open" },
    in_progress: { color: "info", label: "In progress" },
    resolved: { color: "success", label: "Resolved" },
  }[ticket.status];

  return (
    <div style={{
      padding: `${S.sm}px ${S.md}px`,
      borderBottom: last ? "none" : `1px solid ${T.border}`,
      display: "flex", alignItems: "center", gap: S.sm,
      transition: "background 120ms",
    }}
      onMouseEnter={(e) => e.currentTarget.style.background = T.surface2}
      onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
    >
      {/* Priority dot */}
      <div style={{
        width: 32, height: 32, borderRadius: RADIUS.md,
        background: priorityConfig.color + "15",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
      }}>
        <AlertCircle size={14} color={priorityConfig.color} />
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2, flexWrap: "wrap" }}>
          <span style={{ fontSize: 11, color: T.textFaint, fontWeight: 600, fontVariantNumeric: "tabular-nums", letterSpacing: "0.04em" }}>
            {ticket.id}
          </span>
          <Badge color={statusConfig.color} size="sm">{statusConfig.label}</Badge>
        </div>
        <div style={{ fontSize: 13.5, fontWeight: 600, color: T.text }}>
          {ticket.issue}
        </div>
        {!isMobile && (
          <div style={{ fontSize: 11.5, color: T.textFaint, marginTop: 2 }}>
            {ticket.building} · Charger {ticket.chargerId} · {ticket.technician}
          </div>
        )}
      </div>

      {!isMobile && (
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{ fontSize: 11, color: T.textFaint, letterSpacing: "0.04em", textTransform: "uppercase", fontWeight: 600 }}>
            ETA
          </div>
          <div style={{ fontSize: 12.5, color: T.text, fontWeight: 600, fontVariantNumeric: "tabular-nums", marginTop: 2 }}>
            {new Date(ticket.eta).toLocaleDateString("de-DE", { month: "short", day: "numeric" })}
          </div>
        </div>
      )}

      <div style={{ display: "flex", gap: S.xs, flexShrink: 0 }}>
        {ticket.status === "open" && (
          <Button variant="secondary" size="sm" onClick={onMarkReviewed}>
            {isMobile ? "Review" : "Mark reviewed"}
          </Button>
        )}
        <Button variant="ghost" size="sm" onClick={onView}>View</Button>
      </div>
    </div>
  );
}

function SubmitTicketModal({ open, onClose, onSubmit }) {
  const [building, setBuilding] = useState(MOCK.buildings[0].name);
  const [chargerId, setChargerId] = useState("A1");
  const [issue, setIssue] = useState("");
  const [priority, setPriority] = useState("medium");
  const [loading, setLoading] = useState(false);

  const handle = async () => {
    if (!issue.trim()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    onSubmit({ building, chargerId, issue, priority });
    setIssue("");
  };

  return (
    <Modal
      open={open} onClose={onClose}
      title="Submit maintenance request"
      description="A technician will be assigned within 24h."
      size="md"
      footer={
        <div style={{ display: "flex", gap: S.xs, justifyContent: "flex-end" }}>
          <Button variant="secondary" onClick={onClose} disabled={loading}>Cancel</Button>
          <Button variant="primary" onClick={handle} disabled={!issue.trim()} loading={loading}>
            {loading ? "Submitting…" : "Submit request"}
          </Button>
        </div>
      }
    >
      <div style={{ display: "flex", flexDirection: "column", gap: S.sm }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <Label>Building</Label>
          <select
            value={building}
            onChange={(e) => setBuilding(e.target.value)}
            style={{
              height: 38, padding: "0 10px",
              background: T.surface,
              border: `1px solid ${T.borderStrong}`,
              borderRadius: RADIUS.md,
              fontSize: 14, color: T.text,
              fontFamily: "inherit", cursor: "pointer",
            }}
          >
            {MOCK.buildings.map((b) => (
              <option key={b.id}>{b.name}</option>
            ))}
          </select>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: S.xs }}>
          <Input label="Charger" value={chargerId} onChange={(e) => setChargerId(e.target.value)} placeholder="A1" />
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <Label>Priority</Label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              style={{
                height: 38, padding: "0 10px",
                background: T.surface,
                border: `1px solid ${T.borderStrong}`,
                borderRadius: RADIUS.md,
                fontSize: 14, color: T.text,
                fontFamily: "inherit", cursor: "pointer",
              }}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <Label>Issue description</Label>
          <textarea
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            placeholder="Describe the issue, error codes, or recent changes…"
            rows={4}
            style={{
              padding: "10px 14px",
              background: T.surface,
              border: `1px solid ${T.borderStrong}`,
              borderRadius: RADIUS.md,
              fontSize: 14, color: T.text,
              fontFamily: "inherit",
              resize: "vertical",
              minHeight: 90,
            }}
          />
        </div>
      </div>
    </Modal>
  );
}

function ViewTicketModal({ ticket, onClose }) {
  if (!ticket) return null;
  return (
    <Modal
      open={!!ticket} onClose={onClose}
      title={`Ticket ${ticket.id}`}
      description={ticket.issue}
      footer={
        <div style={{ display: "flex", gap: S.xs, justifyContent: "flex-end" }}>
          <Button variant="secondary" onClick={onClose}>Close</Button>
        </div>
      }
    >
      <div style={{ display: "flex", flexDirection: "column", gap: S.xs }}>
        <DetailRow label="Building" value={ticket.building} />
        <DetailRow label="Charger" value={ticket.chargerId} />
        <DetailRow label="Priority" value={ticket.priority.toUpperCase()} />
        <DetailRow label="Status" value={ticket.status.replace("_", " ")} />
        <DetailRow label="Created" value={ticket.created} />
        <DetailRow label="Technician" value={ticket.technician} />
        <DetailRow label="ETA" value={ticket.eta} last />
      </div>
    </Modal>
  );
}

// ============================================================================
// OWNER — COMPLIANCE TAB
// ============================================================================
function OwnerCompliance({ selectedBuildingId }) {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [downloading, setDownloading] = useState(null);
  const [inspectionModal, setInspectionModal] = useState(false);

  const certs = [
    { key: "geig", label: "GEIG Act readiness", status: "compliant", desc: "Charging-readiness mandate met across portfolio.", lastVerified: "2026-03-15" },
    { key: "din", label: "DIN/VDE installation", status: "compliant", desc: "Master-electrician certified installations.", lastVerified: "2026-02-20" },
    { key: "mid", label: "MID-compliant metering", status: "compliant", desc: "Legal per-tenant billing on every unit.", lastVerified: "2026-03-01" },
    { key: "gdpr", label: "GDPR data processing", status: "compliant", desc: "EU-resident; identifiers stripped at ingest.", lastVerified: "2026-04-01" },
  ];

  const docs = [
    { id: "compliance-packet", label: "Full compliance packet", size: "2.4 MB", icon: ShieldCheck },
    { id: "maintenance-log", label: "Maintenance log (12 months)", size: "1.8 MB", icon: Wrench },
    { id: "installation-records", label: "Installation records", size: "3.1 MB", icon: FileText },
    { id: "din-vde-cert", label: "DIN/VDE certificates", size: "640 KB", icon: ShieldCheck },
    { id: "mid-cert", label: "MID metering certificates", size: "520 KB", icon: Activity },
    { id: "gdpr-dpa", label: "GDPR data processing agreement", size: "880 KB", icon: Globe },
  ];

  const handleDownload = async (id) => {
    setDownloading(id);
    await new Promise((r) => setTimeout(r, 800));
    setDownloading(null);
    const doc = docs.find((d) => d.id === id);
    toast(`${doc.label} downloaded`);
  };

  return (
    <>
      <PageHeader
        title="Compliance"
        subtitle="Certifications, records, and inspection history"
        actions={
          <>
            <Button variant="secondary" icon={CalendarClock} onClick={() => setInspectionModal(true)}>
              Request inspection
            </Button>
            <Button variant="primary" icon={Download} onClick={() => handleDownload("compliance-packet")} loading={downloading === "compliance-packet"}>
              Compliance packet
            </Button>
          </>
        }
      />

      {/* Status overview */}
      <Card style={{ marginBottom: S.md }}>
        <CardHeader
          title="Compliance status"
          sub="All systems operating within German and EU regulatory frameworks"
          action={<Badge color="success" size="sm"><CheckCircle2 size={10} />100% compliant</Badge>}
        />
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
          gap: S.xs,
        }}>
          {certs.map((c) => (
            <div key={c.key} style={{
              padding: S.sm,
              background: T.surface2,
              border: `1px solid ${T.green}30`,
              borderRadius: RADIUS.md,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: S.xs, marginBottom: 6 }}>
                <ShieldCheck size={14} color={T.greenDeep} />
                <span style={{ fontSize: 13.5, fontWeight: 600, color: T.text, flex: 1 }}>{c.label}</span>
                <Badge color="success" size="sm">✓</Badge>
              </div>
              <div style={{ fontSize: 11.5, color: T.textFaint, lineHeight: 1.5, marginBottom: 6 }}>
                {c.desc}
              </div>
              <div style={{ fontSize: 11, color: T.textFaint, fontVariantNumeric: "tabular-nums", letterSpacing: "0.02em" }}>
                Last verified {new Date(c.lastVerified).toLocaleDateString("de-DE", { month: "short", day: "numeric", year: "numeric" })}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Inspection schedule */}
      <Card style={{ marginBottom: S.md }}>
        <CardHeader title="Inspection schedule" />
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: S.sm,
        }}>
          <div style={{
            padding: S.md,
            background: T.surface2,
            border: `1px solid ${T.border}`,
            borderRadius: RADIUS.md,
          }}>
            <Label>Last inspection</Label>
            <div style={{ fontSize: 18, fontWeight: 700, color: T.text, marginTop: 6, fontVariantNumeric: "tabular-nums", letterSpacing: "-0.01em" }}>
              March 15, 2026
            </div>
            <div style={{ fontSize: 12, color: T.textFaint, marginTop: 4 }}>
              All chargers verified · 0 deficiencies
            </div>
          </div>
          <div style={{
            padding: S.md,
            background: T.greenBg,
            border: `1px solid ${T.green}30`,
            borderRadius: RADIUS.md,
          }}>
            <Label>Next scheduled</Label>
            <div style={{ fontSize: 18, fontWeight: 700, color: T.greenDeep, marginTop: 6, fontVariantNumeric: "tabular-nums", letterSpacing: "-0.01em" }}>
              September 15, 2026
            </div>
            <div style={{ fontSize: 12, color: T.greenDeep, opacity: 0.8, marginTop: 4 }}>
              Routine 6-month inspection
            </div>
          </div>
        </div>
      </Card>

      {/* Documents */}
      <Card>
        <CardHeader title="Documents" sub="Download compliance records and certifications" />
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
          gap: S.xs,
        }}>
          {docs.map((doc) => (
            <button
              key={doc.id}
              onClick={() => handleDownload(doc.id)}
              disabled={downloading === doc.id}
              style={{
                display: "flex", alignItems: "center", gap: S.sm,
                padding: `${S.xs}px ${S.sm}px`,
                background: T.surface,
                border: `1px solid ${T.border}`,
                borderRadius: RADIUS.md,
                color: T.text,
                fontSize: 13,
                cursor: "pointer",
                fontFamily: "inherit",
                textAlign: "left",
                transition: "all 150ms",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = T.borderStrong;
                e.currentTarget.style.background = T.surface2;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = T.border;
                e.currentTarget.style.background = T.surface;
              }}
            >
              <div style={{
                width: 32, height: 32, borderRadius: RADIUS.sm,
                background: T.greenBg,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <doc.icon size={14} color={T.greenDeep} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 500, fontSize: 13 }}>{doc.label}</div>
                <div style={{ fontSize: 11, color: T.textFaint, marginTop: 1, fontVariantNumeric: "tabular-nums" }}>
                  PDF · {doc.size}
                </div>
              </div>
              {downloading === doc.id ? <Spinner size={14} color={T.textDim} /> : <Download size={14} color={T.textDim} />}
            </button>
          ))}
        </div>
      </Card>

      <RequestInspectionModal open={inspectionModal} onClose={() => setInspectionModal(false)} />
    </>
  );
}

function RequestInspectionModal({ open, onClose }) {
  const { toast } = useToast();
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);

  const handle = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    toast("Inspection request submitted", { description: "GridBridge will confirm within 48h" });
    onClose();
  };

  return (
    <Modal
      open={open} onClose={onClose}
      title="Request an inspection"
      description="Outside the routine schedule. We'll coordinate with our certified inspectors."
      footer={
        <div style={{ display: "flex", gap: S.xs, justifyContent: "flex-end" }}>
          <Button variant="secondary" onClick={onClose} disabled={loading}>Cancel</Button>
          <Button variant="primary" onClick={handle} loading={loading} icon={CalendarClock}>
            {loading ? "Submitting…" : "Submit request"}
          </Button>
        </div>
      }
    >
      <div style={{ display: "flex", flexDirection: "column", gap: S.sm }}>
        <Input label="Preferred date" type="date" value={date} onChange={(e) => setDate(e.target.value)} icon={Calendar} />
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <Label>Reason</Label>
          <textarea
            value={reason} onChange={(e) => setReason(e.target.value)}
            placeholder="Describe the reason for the inspection…"
            rows={3}
            style={{
              padding: "10px 14px",
              background: T.surface,
              border: `1px solid ${T.borderStrong}`,
              borderRadius: RADIUS.md,
              fontSize: 14, color: T.text,
              fontFamily: "inherit", resize: "vertical",
              minHeight: 80,
            }}
          />
        </div>
      </div>
    </Modal>
  );
}

// ============================================================================
// OWNER — SETTINGS TAB
// ============================================================================
function OwnerSettings() {
  const { user } = useAuth();
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [opsAlerts, setOpsAlerts] = useState(true);
  const [monthlyReport, setMonthlyReport] = useState(true);
  const [tenantSummary, setTenantSummary] = useState(false);
  const [analyticsOpt, setAnalyticsOpt] = useState(true);
  const [companyModal, setCompanyModal] = useState(false);
  const [payoutModal, setPayoutModal] = useState(false);

  return (
    <>
      <PageHeader title="Settings" subtitle="Account, payouts, and notifications" />

      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        gap: S.md,
        marginBottom: S.md,
      }}>
        <Card>
          <CardHeader
            title="Company profile"
            action={<Button variant="ghost" size="sm" icon={Edit3} onClick={() => setCompanyModal(true)}>Edit</Button>}
          />
          <DetailRow label="Legal entity" value={user?.company || MOCK.owner.company} />
          <DetailRow label="Contact" value={user?.name || MOCK.owner.name} />
          <DetailRow label="Email" value={user?.email || MOCK.owner.email} />
          <DetailRow label="Buildings" value={`${MOCK.buildings.length} active`} last />
        </Card>

        <Card>
          <CardHeader
            title="Payouts"
            action={<Button variant="ghost" size="sm" icon={Edit3} onClick={() => setPayoutModal(true)}>Edit</Button>}
          />
          <DetailRow label="Method" value="SEPA bank transfer" />
          <DetailRow label="Account" value="DE89 •••• •••• 8842" />
          <DetailRow label="Cycle" value="Monthly · 5th business day" />
          <DetailRow label="Next payout" value={`€${Math.round(MOCK.portfolio.monthlyRevenue * PRICING.ownerShare)} · May 5`} last />
        </Card>
      </div>

      <Card style={{ marginBottom: S.md }}>
        <CardHeader title="Notifications" />
        <ToggleRow
          label="Operational alerts"
          desc="Charger faults, maintenance windows, sub-95% uptime"
          checked={opsAlerts} onChange={setOpsAlerts}
        />
        <ToggleRow
          label="Monthly portfolio report"
          desc="Revenue, occupancy, and tenant metrics by email"
          checked={monthlyReport} onChange={setMonthlyReport}
        />
        <ToggleRow
          label="Tenant adoption summary"
          desc="Weekly summary of new tenant subscriptions"
          checked={tenantSummary} onChange={setTenantSummary}
        />
      </Card>

      <Card>
        <CardHeader
          title="Data preferences (GDPR)"
          sub="All processing within the EU. You can update preferences anytime."
        />
        <ToggleRow
          label="Anonymized network analytics"
          desc="Help GridBridge improve uptime and capacity planning"
          checked={analyticsOpt} onChange={setAnalyticsOpt}
        />
        <div style={{
          marginTop: S.md,
          paddingTop: S.md,
          borderTop: `1px solid ${T.border}`,
          display: "flex", gap: S.xs, flexWrap: "wrap",
        }}>
          <Button variant="secondary" size="sm" icon={Globe}>EU data residency</Button>
          <Button variant="ghost" size="sm" icon={FileText}>Privacy policy</Button>
          <Button variant="ghost" size="sm" icon={FileText}>Terms of service</Button>
        </div>
      </Card>

      <EditCompanyModal open={companyModal} onClose={() => setCompanyModal(false)} />
      <EditPayoutModal open={payoutModal} onClose={() => setPayoutModal(false)} />
    </>
  );
}

function EditCompanyModal({ open, onClose }) {
  const { toast } = useToast();
  const [company, setCompany] = useState(MOCK.owner.company);
  const [contact, setContact] = useState(MOCK.owner.name);
  const [email, setEmail] = useState(MOCK.owner.email);
  const [loading, setLoading] = useState(false);

  const handle = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    toast("Company profile updated");
    onClose();
  };

  return (
    <Modal
      open={open} onClose={onClose}
      title="Edit company profile"
      footer={
        <div style={{ display: "flex", gap: S.xs, justifyContent: "flex-end" }}>
          <Button variant="secondary" onClick={onClose} disabled={loading}>Cancel</Button>
          <Button variant="primary" onClick={handle} loading={loading}>
            {loading ? "Saving…" : "Save"}
          </Button>
        </div>
      }
    >
      <div style={{ display: "flex", flexDirection: "column", gap: S.sm }}>
        <Input label="Legal entity" value={company} onChange={(e) => setCompany(e.target.value)} icon={Building2} />
        <Input label="Primary contact" value={contact} onChange={(e) => setContact(e.target.value)} icon={User} />
        <Input label="Contact email" value={email} onChange={(e) => setEmail(e.target.value)} icon={Mail} />
      </div>
    </Modal>
  );
}

function EditPayoutModal({ open, onClose }) {
  const { toast } = useToast();
  const [iban, setIban] = useState("DE89 3704 0044 0532 0130 00");
  const [bic, setBic] = useState("COBADEFFXXX");
  const [holder, setHolder] = useState("Berlin Urban Living GmbH");
  const [loading, setLoading] = useState(false);

  const handle = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    toast("Payout details updated", { description: "Verification email sent" });
    onClose();
  };

  return (
    <Modal
      open={open} onClose={onClose}
      title="Edit payout details"
      description="Updates require email verification."
      footer={
        <div style={{ display: "flex", gap: S.xs, justifyContent: "flex-end" }}>
          <Button variant="secondary" onClick={onClose} disabled={loading}>Cancel</Button>
          <Button variant="primary" onClick={handle} loading={loading} icon={ShieldCheck}>
            {loading ? "Saving…" : "Save & verify"}
          </Button>
        </div>
      }
    >
      <div style={{ display: "flex", flexDirection: "column", gap: S.sm }}>
        <Input label="Account holder" value={holder} onChange={(e) => setHolder(e.target.value)} icon={User} />
        <Input label="IBAN" value={iban} onChange={(e) => setIban(e.target.value)} icon={CreditCard} />
        <Input label="BIC" value={bic} onChange={(e) => setBic(e.target.value)} />
        <div style={{
          fontSize: 11.5, color: T.textFaint,
          padding: S.xs,
          background: T.surface2,
          border: `1px solid ${T.border}`,
          borderRadius: RADIUS.sm,
          display: "flex", alignItems: "flex-start", gap: 6,
          lineHeight: 1.5,
        }}>
          <ShieldCheck size={12} color={T.greenDeep} style={{ marginTop: 2, flexShrink: 0 }} />
          Banking details are encrypted at rest. SEPA payouts process on the 5th business day.
        </div>
      </div>
    </Modal>
  );
}

// ============================================================================
// APP ROUTER
// ============================================================================
function AppRouter() {
  const { path } = useRouter();
  const { user } = useAuth();
  const route = path.split("?")[0]; // strip query params

  // Protect dashboard routes
  if ((route === "/tenant/dashboard" || route === "/owner/dashboard") && !user) {
    return <LoginPage />;
  }

  switch (route) {
    case "/login": return <LoginPage />;
    case "/signup": return <SignupPage />;
    case "/tenant/dashboard": return <TenantDashboard />;
    case "/owner/dashboard": return <OwnerDashboard />;
    case "/":
    default: return <HomePage />;
  }
}

export default function App() {
  return (
    <div style={{
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      background: T.bg,
      minHeight: "100vh",
      color: T.text,
      WebkitFontSmoothing: "antialiased",
    }}>
      <style>{GLOBAL_STYLES}</style>
      <ToastProvider>
        <AuthProvider>
          <RouterProvider>
            <AppRouter />
          </RouterProvider>
        </AuthProvider>
      </ToastProvider>
    </div>
  );
}
