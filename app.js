// ═══════════════════════════════════════════════════════════════
// PART 1: ICONS, STATE, DATA & UTILITIES
// ═══════════════════════════════════════════════════════════════

// Lucide-style SVG Icons Library
const ICONS = {
  // Navigation
  dashboard: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>',
  zap: '<svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  folderKanban: '<svg viewBox="0 0 24 24"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><path d="M8 10v4M12 10v2M16 10v6"/></svg>',
  flaskConical: '<svg viewBox="0 0 24 24"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7M7 16.5h10"/></svg>',
  rocket: '<svg viewBox="0 0 24 24"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
  fileText: '<svg viewBox="0 0 24 24"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>',
  lightbulb: '<svg viewBox="0 0 24 24"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6M10 22h4"/></svg>',
  shieldCheck: '<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>',
  trendingUp: '<svg viewBox="0 0 24 24"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>',
  trendingDown: '<svg viewBox="0 0 24 24"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>',
  settings: '<svg viewBox="0 0 24 24"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',
  
  // Actions
  search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  bell: '<svg viewBox="0 0 24 24"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>',
  plus: '<svg viewBox="0 0 24 24"><path d="M5 12h14M12 5v14"/></svg>',
  x: '<svg viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  check: '<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>',
  logOut: '<svg viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/></svg>',
  sun: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>',
  moon: '<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
  download: '<svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>',
  filter: '<svg viewBox="0 0 24 24"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',
  rotateCcw: '<svg viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8M3 3v5h5"/></svg>',
  edit: '<svg viewBox="0 0 24 24"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>',
  trash2: '<svg viewBox="0 0 24 24"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6"/></svg>',
  
  // Auth & User
  lock: '<svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  user: '<svg viewBox="0 0 24 24"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  mail: '<svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  eye: '<svg viewBox="0 0 24 24"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
  eyeOff: '<svg viewBox="0 0 24 24"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61M2 2l20 20"/></svg>',
  
  // Navigation helpers
  chevronDown: '<svg viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>',
  chevronRight: '<svg viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>',
  chevronLeft: '<svg viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></svg>',
  chevronUp: '<svg viewBox="0 0 24 24"><path d="m18 15-6-6-6 6"/></svg>',
  
  // Arrows
  arrowRight: '<svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
  arrowUpRight: '<svg viewBox="0 0 24 24"><path d="M7 17 17 7M7 7h10v10"/></svg>',
  arrowLeft: '<svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>',
  
  // Communication
  send: '<svg viewBox="0 0 24 24"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>',
  messageSquare: '<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  
  // AI
  sparkles: '<svg viewBox="0 0 24 24"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4M22 5h-4M4 17v2M5 18H3"/></svg>',
  bot: '<svg viewBox="0 0 24 24"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2M20 14h2M15 13v2M9 13v2"/></svg>',
  
  // Status
  alertTriangle: '<svg viewBox="0 0 24 24"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4M12 17h.01"/></svg>',
  checkCircle2: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>',
  xCircle: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/></svg>',
  info: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>',
  helpCircle: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01"/></svg>',
  
  // Metrics
  target: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  flame: '<svg viewBox="0 0 24 24"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
  users: '<svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  award: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
  
  // Files & Data
  fileCode: '<svg viewBox="0 0 24 24"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m10 13-2 2 2 2M14 17l2-2-2-2"/></svg>',
  paperclip: '<svg viewBox="0 0 24 24"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 17.98 8.8l-8.58 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>',
  copy: '<svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
  link2: '<svg viewBox="0 0 24 24"><path d="M9 17H7A5 5 0 0 1 7 7h2M15 7h2a5 5 0 1 1 0 10h-2M8 12h8"/></svg>',
  externalLink: '<svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/></svg>',
  
  // Misc
  calendar: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  clock: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  play: '<svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
  pause: '<svg viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>',
  ban: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/></svg>',
  moreHorizontal: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>',
  shield: '<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  activity: '<svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
  layers: '<svg viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
  barChart: '<svg viewBox="0 0 24 24"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>',
  pieChart: '<svg viewBox="0 0 24 24"><path d="M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z"/></svg>',
  gitBranch: '<svg viewBox="0 0 24 24"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>',
  code: '<svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  terminal: '<svg viewBox="0 0 24 24"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>',
  database: '<svg viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5M3 12A9 3 0 0 0 21 12"/></svg>',
  server: '<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>',
  globe: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  cpu: '<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>',
  hash: '<svg viewBox="0 0 24 24"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>',
  tag: '<svg viewBox="0 0 24 24"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',
  list: '<svg viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',
  clipboard: '<svg viewBox="0 0 24 24"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>',
  folderOpen: '<svg viewBox="0 0 24 24"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/></svg>',
  package: '<svg viewBox="0 0 24 24"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
};

// Icon helper function
function icon(name, sizeClass = 'icon-sm', extraClass = '') {
  const svg = ICONS[name] || ICONS.helpCircle;
  return `<span class="icon ${sizeClass} ${extraClass}">${svg}</span>`;
}

// ═══════════════════════════════════════════════════════════════
// STATE MANAGEMENT
// ═══════════════════════════════════════════════════════════════
const state = {
  view: 'login',
  user: null,
  theme: localStorage.getItem('sentra-theme') || 'dark',
  dashboardTab: 'deployments',
  dateRange: '30d',
  selectedTemplate: null,
  focusMode: null,
  cmdPaletteOpen: false,
  activityFeed: [],
  activityInterval: null,
  selectedTests: new Set(),
  expandedTest: null,
  editingTestCase: null,
  hierarchy: null,
  selectedHierarchyNode: 'h3',
  testCases: [],
  evidencePerTest: {},
  commentsPerTest: {},
  deployExecution: null,
  approvalModal: null,
  rollbackModal: null,
  diffViewer: null,
  suggestionSubmission: null,
  suggestionDetail: null,
  activeTimers: {},
  notifications: [],
  notifDropdownOpen: false,
  filtersOpen: false,
  activeFilters: {},
  savedPresets: [
    { id: 'p1', name: 'Failed tests this week', filters: { status: ['failed'] } },
    { id: 'p2', name: 'My high-priority items', filters: { priority: ['high'] } }
  ],
  fabOpen: false,
  copilotOpen: false,
  copilotMessages: [],
  copilotTyping: false,
  forgotPasswordOpen: false,
  forgotPasswordStep: 'email',
  projects: [
    {
      id: 'p1', name: 'E-Commerce Platform',
      categories: [
        {
          id: 'c1', name: 'Authentication',
          modules: [
            { id: 'm1', name: 'Login & SSO', suites: [{ id: 's1', name: 'Login Flow Suite' }, { id: 's2', name: 'SSO Integration' }] },
            { id: 'm2', name: 'Registration', suites: [{ id: 's3', name: 'Signup Suite' }] }
          ]
        },
        {
          id: 'c2', name: 'Shopping Cart',
          modules: [
            { id: 'm3', name: 'Cart Operations', suites: [{ id: 's4', name: 'Add/Remove Items' }] }
          ]
        },
        {
          id: 'c3', name: 'Payments',
          modules: [
            { id: 'm4', name: 'Checkout', suites: [{ id: 's5', name: 'Payment Flow' }] }
          ]
        }
      ]
    },
    {
      id: 'p2', name: 'Payment Gateway',
      categories: [
        {
          id: 'c4', name: 'Transactions',
          modules: [
            { id: 'm5', name: 'Payment Processing', suites: [{ id: 's6', name: 'Stripe Integration' }, { id: 's7', name: 'PayPal Integration' }] }
          ]
        }
      ]
    },
    {
      id: 'p3', name: 'User Management',
      categories: [
        {
          id: 'c5', name: 'User Profiles',
          modules: [
            { id: 'm6', name: 'Profile Management', suites: [{ id: 's8', name: 'Profile Suite' }] }
          ]
        }
      ]
    }
  ]
};

// ═══════════════════════════════════════════════════════════════
// ROLE PERMISSIONS
// ═══════════════════════════════════════════════════════════════
const ROLE_PERMISSIONS = {
  manager: {
    nav: ['dashboard', 'mywork', 'projects', 'testing', 'deployments', 'templates', 'suggestions', 'audit', 'reports', 'settings'],
    canEdit: true, canApprove: true, canDelete: true
  },
  tester: {
    nav: ['dashboard', 'mywork', 'testing', 'suggestions', 'settings'],
    canEdit: true, canApprove: false, canDelete: false
  },
  engineer: {
    nav: ['dashboard', 'mywork', 'deployments', 'templates', 'suggestions', 'settings'],
    canEdit: true, canApprove: false, canDelete: false
  },
  auditor: {
    nav: ['dashboard', 'audit', 'reports', 'settings'],
    canEdit: false, canApprove: false, canDelete: false, readOnly: true
  }
};

document.body.setAttribute('data-theme', state.theme);

// ═══════════════════════════════════════════════════════════════
// MOCK DATA
// ═══════════════════════════════════════════════════════════════
const USERS = {
  manager:  { name: 'Jordan Diaz', email: 'jordan@sentra.io', role: 'manager',  initials: 'JD', color: 'bg-indigo-600', title: 'Release Manager' },
  tester:   { name: 'Sarah Chen',  email: 'sarah@sentra.io',  role: 'tester',   initials: 'SC', color: 'bg-emerald-600', title: 'QA Engineer' },
  engineer: { name: 'David Park',  email: 'david@sentra.io',  role: 'engineer', initials: 'DP', color: 'bg-violet-600', title: 'DevOps Engineer' },
  auditor:  { name: 'Alex Kumar',  email: 'alex@sentra.io',   role: 'auditor',  initials: 'AK', color: 'bg-cyan-600', title: 'Compliance Auditor' }
};

const PROJECTS = [
  { id: 'p1', name: 'E-Commerce Platform', status: 'active', tests: 2847, deploys: 12, members: 14, color: '#6366f1' },
  { id: 'p2', name: 'Payment Gateway', status: 'active', tests: 1523, deploys: 8, members: 9, color: '#8b5cf6' },
  { id: 'p3', name: 'User Management', status: 'active', tests: 982, deploys: 5, members: 6, color: '#22d3ee' },
  { id: 'p4', name: 'Analytics Dashboard', status: 'paused', tests: 634, deploys: 3, members: 5, color: '#f59e0b' }
];

const DEPLOYS = [
  { id: 'd1', name: 'Release 2.4.1 — Prod', project: 'E-Commerce', steps: 24, done: 18, status: 'running', engineer: 'David Park', eta: '45m' },
  { id: 'd2', name: 'Hotfix — Payment GW', project: 'Payment GW', steps: 12, done: 12, status: 'completed', engineer: 'Lisa Wang', duration: '32m' }
];

const TEMPLATES = [
  { id: 't1', name: 'Prod Deployment — Standard', type: 'deploy', ver: 'v3.2', updated: 'Jun 5', author: 'Jordan Diaz', status: 'published', uses: 47 },
  { id: 't2', name: 'Regression Suite — Ecom', type: 'test', ver: 'v5.0', updated: 'Jun 6', author: 'Sarah Chen', status: 'published', uses: 89 }
];

const SUGGESTIONS = [
  { id: 's1', title: 'Add DB backup verification step', type: 'deployment', priority: 'high', status: 'submitted', submitter: 'David Park', time: '2h ago', context: 'Release 2.4.1', reason: 'Last month a corrupt backup caused a 45-min rollback delay.', attachments: 1, comments: 3 },
  { id: 's2', title: 'Test: empty cart checkout attempt', type: 'test', priority: 'medium', status: 'submitted', submitter: 'Sarah Chen', time: '4h ago', context: 'Sprint 24', reason: 'Edge case not covered in current suite.', attachments: 0, comments: 1 },
  { id: 's3', title: 'Cache clearing in deploy checklist', type: 'deployment', priority: 'high', status: 'approved', submitter: 'Lisa Wang', time: '1d ago', context: 'Hotfix', reason: 'Stale cache caused errors.', approvedBy: 'Jordan Diaz', appliedTo: 'v3.3' }
];

const AUDIT = [
  { id: '#12847', actor: 'David Park', action: 'step.completed', entity: 'Release 2.4.1', time: '09:47', result: 'Step 17' },
  { id: '#12846', actor: 'Sarah Chen', action: 'test.failed', entity: 'Sprint 24', time: '09:41', result: 'TC-2805' },
  { id: '#12844', actor: 'Jordan Diaz', action: 'suggestion.approved', entity: '#42', time: '09:32', result: 'Merge to master' }
];

const INITIAL_TEST_CASES = [
  { id: 'TC-2801', name: 'Login with valid creds', status: 'passed', dur: '2.3s', desc: 'Verify user can login', assignee: 'Sarah Chen', module: 'Auth', projectId: 'p1', categoryId: 'c1', moduleId: 'm1', suiteId: 's1', priority: 'high', type: 'functional' },
  { id: 'TC-2802', name: 'Login with wrong pwd', status: 'passed', dur: '1.8s', desc: 'Verify error message', assignee: 'Sarah Chen', module: 'Auth', projectId: 'p1', categoryId: 'c1', moduleId: 'm1', suiteId: 's1', priority: 'high', type: 'functional' },
  { id: 'TC-2803', name: 'Rate limit (5 attempts)', status: 'passed', dur: '4.1s', desc: 'Verify account locked', assignee: 'Mike Johnson', module: 'Auth', projectId: 'p1', categoryId: 'c1', moduleId: 'm1', suiteId: 's1', priority: 'medium', type: 'security' },
  { id: 'TC-2804', name: 'Password reset email', status: 'failed', dur: '5.7s', note: 'Not received in 60s', desc: 'Verify reset email sent', assignee: 'Sarah Chen', module: 'Auth', projectId: 'p1', categoryId: 'c1', moduleId: 'm1', suiteId: 's1', priority: 'high', type: 'functional' },
  { id: 'TC-2805', name: 'MFA on suspicious IP', status: 'blocked', dur: '—', note: 'MFA service degraded', desc: 'Verify MFA triggered', assignee: 'Alex Kumar', module: 'Security', projectId: 'p1', categoryId: 'c1', moduleId: 'm1', suiteId: 's1', priority: 'critical', type: 'security' },
  { id: 'TC-2806', name: 'Cart persistence', status: 'not-run', dur: '—', desc: 'Verify cart persists', assignee: 'Mike Johnson', module: 'Cart', projectId: 'p1', categoryId: 'c2', moduleId: 'm3', suiteId: 's4', priority: 'medium', type: 'functional' },
  { id: 'TC-2807', name: 'SSO redirect', status: 'not-run', dur: '—', desc: 'Verify SSO flow', assignee: 'Sarah Chen', module: 'Auth', projectId: 'p1', categoryId: 'c1', moduleId: 'm1', suiteId: 's2', priority: 'medium', type: 'integration' },
  { id: 'TC-2808', name: 'Session invalidation', status: 'not-run', dur: '—', desc: 'Verify logout', assignee: 'Alex Kumar', module: 'Security', projectId: 'p1', categoryId: 'c1', moduleId: 'm1', suiteId: 's1', priority: 'high', type: 'security' }
];

const INITIAL_DEPLOY_STEPS = [
  { id: 1, name: 'Pre-flight validation', status: 'completed', dur: '1m 12s', expectedDur: 72, desc: 'Verify services reachable', command: 'curl -sSf http://api/health' },
  { id: 2, name: 'DB backup snapshot', status: 'completed', dur: '4m 31s', expectedDur: 271, crit: true, desc: 'Full DB backup', command: 'pg_dump --format=custom db > backup.dump' },
  { id: 3, name: 'Deploy build v2.4.1', status: 'completed', dur: '6m 42s', expectedDur: 402, crit: true, desc: 'Roll out build', command: 'kubectl rollout deploy/app --image=v2.4.1' },
  { id: 4, name: 'Run migrations', status: 'completed', dur: '3m 18s', expectedDur: 198, crit: true, desc: 'DB migrations', command: 'alembic upgrade head' },
  { id: 5, name: 'Health checks', status: 'completed', dur: '0m 52s', expectedDur: 52, desc: 'Verify endpoints', command: 'curl api/health' },
  { id: 6, name: 'Approval gate', status: 'running', dur: '—', expectedDur: null, crit: true, gate: true, desc: 'Manager approval required', approvers: ['Jordan Diaz', 'Lisa Wang'], approvalHistory: [] },
  { id: 7, name: 'Switch DNS traffic', status: 'pending', dur: '—', expectedDur: 180, crit: true, desc: 'Update DNS', command: 'aws route53 change-resource-record-sets' },
  { id: 8, name: 'Monitor error rate', status: 'pending', dur: '—', expectedDur: 900, crit: true, desc: 'Watch 15 min', command: 'watch metrics' }
];

const ROLLBACK_PLAN = [
  { order: 1, action: 'Switch DNS back to previous version', duration: '3m', command: 'aws route53 rollback' },
  { order: 2, action: 'Scale down new deployment pods', duration: '2m', command: 'kubectl scale --replicas=0' },
  { order: 3, action: 'Restore database from backup', duration: '8m', command: 'pg_restore backup.dump', critical: true },
  { order: 4, action: 'Roll back migrations', duration: '2m', command: 'alembic downgrade -1', critical: true },
  { order: 5, action: 'Verify previous version healthy', duration: '2m', command: 'curl api-v2.4.0/health' }
];

const CHART_DATA = {
  trend: {
    '7d': [{day:'Mon',tests:45,deploys:2},{day:'Tue',tests:68,deploys:3},{day:'Wed',tests:92,deploys:4},{day:'Thu',tests:78,deploys:2},{day:'Fri',tests:112,deploys:5},{day:'Sat',tests:34,deploys:1},{day:'Sun',tests:21,deploys:0}],
    '30d': [{day:'W1',tests:420,deploys:12},{day:'W2',tests:545,deploys:15},{day:'W3',tests:612,deploys:18},{day:'W4',tests:689,deploys:22}],
    '90d': [{month:'Mar',tests:1200,deploys:38},{month:'Apr',tests:1545,deploys:47},{month:'May',tests:1890,deploys:58}],
    '1y': [{q:'Q1',tests:3800,deploys:112},{q:'Q2',tests:4650,deploys:145},{q:'Q3',tests:5420,deploys:178},{q:'Q4',tests:6180,deploys:203}]
  },
  coverage: [
    {module:'Auth',coverage:92},{module:'Cart',coverage:87},{module:'Payments',coverage:95},
    {module:'Search',coverage:78},{module:'Profile',coverage:84},{module:'Orders',coverage:71}
  ],
  teamPerformance: [
    {name:'Sarah Chen',tests:312,passRate:94,avatar:'SC'},
    {name:'David Park',tests:287,passRate:98,avatar:'DP'},
    {name:'Mike Johnson',tests:198,passRate:87,avatar:'MJ'},
    {name:'Alex Kumar',tests:156,passRate:91,avatar:'AK'}
  ],
  heatmap: [
    {name:'Login',coverage:95,tests:42},{name:'Signup',coverage:88,tests:31},{name:'SSO',coverage:72,tests:28},
    {name:'MFA',coverage:65,tests:18},{name:'Password',coverage:91,tests:24},{name:'OAuth',coverage:82,tests:16},
    {name:'Add Item',coverage:97,tests:54},{name:'Remove',coverage:95,tests:38},{name:'Update Qty',coverage:89,tests:22},
    {name:'Apply Coupon',coverage:76,tests:19},{name:'Save Later',coverage:68,tests:12},{name:'Estimate Ship',coverage:54,tests:8},
    {name:'Stripe',coverage:98,tests:68},{name:'PayPal',coverage:94,tests:45},{name:'Apple Pay',coverage:87,tests:32},
    {name:'Google Pay',coverage:85,tests:28},{name:'Refund',coverage:79,tests:24},{name:'Invoice',coverage:71,tests:18}
  ]
};

const INITIAL_NOTIFICATIONS = [
  { id: 'n1', type: 'approval_needed', title: 'Approval needed: Release 2.4.1', desc: 'David Park requested approval for Step 6', time: '2m ago', iconName: 'shieldCheck', color: 'var(--warning)', read: false, link: 'deployments' },
  { id: 'n2', type: 'suggestion', title: 'New suggestion submitted', desc: 'David Park: Add DB backup verification', time: '2h ago', iconName: 'lightbulb', color: 'var(--info)', read: false, link: 'suggestions' },
  { id: 'n3', type: 'ai_insight', title: 'AI detected a pattern', desc: '3 failed tests share root cause: MFA service', time: '3h ago', iconName: 'sparkles', color: 'var(--ai)', read: false, link: 'testing' },
  { id: 'n4', type: 'test_failed', title: 'Critical test failed', desc: 'TC-2805 blocked by Sarah Chen', time: '3h ago', iconName: 'xCircle', color: 'var(--danger)', read: true, link: 'testing' },
  { id: 'n5', type: 'deploy_completed', title: 'Deployment completed', desc: 'Hotfix — Payment Gateway in 32m', time: '5h ago', iconName: 'checkCircle2', color: 'var(--success)', read: true, link: 'deployments' }
];

const COMMANDS = [
  { id: 'dashboard', label: 'Go to Dashboard', iconName: 'dashboard', action: () => navigate('dashboard'), keywords: 'home' },
  { id: 'mywork', label: 'Go to My Work', iconName: 'zap', action: () => navigate('mywork'), keywords: 'tasks' },
  { id: 'testing', label: 'Go to Testing', iconName: 'flaskConical', action: () => navigate('testing'), keywords: 'qa', roles: ['manager', 'tester'] },
  { id: 'deployments', label: 'Go to Deployments', iconName: 'rocket', action: () => navigate('deployments'), keywords: 'release', roles: ['manager', 'engineer'] },
  { id: 'templates', label: 'Go to Templates', iconName: 'fileText', action: () => navigate('templates'), keywords: '', roles: ['manager', 'engineer'] },
  { id: 'suggestions', label: 'Go to Suggestions', iconName: 'lightbulb', action: () => navigate('suggestions'), keywords: 'ideas', roles: ['manager', 'tester', 'engineer'] },
  { id: 'audit', label: 'Go to Audit Center', iconName: 'shieldCheck', action: () => navigate('audit'), keywords: 'logs', roles: ['manager', 'auditor'] },
  { id: 'reports', label: 'Go to Reports', iconName: 'trendingUp', action: () => navigate('reports'), keywords: 'analytics', roles: ['manager', 'auditor'] },
  { id: 'projects', label: 'Go to Projects', iconName: 'folderKanban', action: () => navigate('projects'), keywords: '', roles: ['manager'] },
  { id: 'open-copilot', label: 'Open AI Copilot', iconName: 'sparkles', action: () => { if (!state.copilotOpen) toggleCopilot(); }, keywords: 'ai assistant help' },
  { id: 'toggle-theme', label: 'Toggle Theme', iconName: 'sun', action: () => toggleTheme(), keywords: 'dark light' },
  { id: 'logout', label: 'Sign Out', iconName: 'logOut', action: () => { state.user = null; navigate('login'); }, keywords: 'exit' }
];

// ═══════════════════════════════════════════════════════════════
// UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════
function toast(message, type = 'info', duration = 3000) {
  const container = document.getElementById('toast-container');
  const iconMap = { success: 'checkCircle2', error: 'xCircle', warning: 'alertTriangle', info: 'info', ai: 'sparkles' };
  const colorVar = { success: 'success', error: 'danger', warning: 'warning', info: 'info', ai: 'ai' };
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = `
    <div class="w-6 h-6 rounded-full flex items-center justify-center" style="background: var(--bg-hover); color: var(--${colorVar[type]});">
      ${icon(iconMap[type], 'icon-sm')}
    </div>
    <span class="flex-1 text-sm">${message}</span>
    <button class="text-xs opacity-60 hover:opacity-100" onclick="this.parentElement.remove()">${icon('x', 'icon-xs')}</button>
  `;
  container.appendChild(t);
  setTimeout(() => {
    t.classList.add('removing');
    setTimeout(() => t.remove(), 200);
  }, duration);
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.body.setAttribute('data-theme', state.theme);
  localStorage.setItem('sentra-theme', state.theme);
  toast(`Switched to ${state.theme} theme`, 'success');
  if (state.view !== 'login') navigate(state.view);
}

function addRipple(e) {
  const btn = e.currentTarget;
  const circle = document.createElement('span');
  const diameter = Math.max(btn.clientWidth, btn.clientHeight);
  const radius = diameter / 2;
  const rect = btn.getBoundingClientRect();
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${e.clientX - rect.left - radius}px`;
  circle.style.top = `${e.clientY - rect.top - radius}px`;
  circle.classList.add('ripple-effect');
  const existing = btn.querySelector('.ripple-effect');
  if (existing) existing.remove();
  btn.appendChild(circle);
}

document.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn-ripple, .btn-primary, .btn-ai, .btn-danger, .btn-success');
  if (btn) addRipple(e);
});

// ═══════════════════════════════════════════════════════════════
// CHART HELPERS
// ═══════════════════════════════════════════════════════════════
const activeCharts = {};

function destroyChart(id) {
  if (activeCharts[id]) {
    activeCharts[id].destroy();
    delete activeCharts[id];
  }
}

function getChartColors() {
  const isDark = state.theme === 'dark';
  return {
    grid: isDark ? '#1e293b' : '#e2e8f0',
    text: isDark ? '#94a3b8' : '#475569',
    tooltipBg: isDark ? '#0f172a' : '#ffffff',
    tooltipText: isDark ? '#e2e8f0' : '#0f172a',
    tooltipBorder: isDark ? '#334155' : '#cbd5e1'
  };
}

function renderDonutChart(canvasId, data) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;
  destroyChart(canvasId);
  const c = getChartColors();
  activeCharts[canvasId] = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: data.map(d => d.label),
      datasets: [{
        data: data.map(d => d.value),
        backgroundColor: data.map(d => d.color),
        borderWidth: 0,
        hoverOffset: 12
      }]
    },
    options: {
      cutout: '65%',
      responsive: true,
      maintainAspectRatio: false,
      animation: { animateRotate: true, animateScale: true, duration: 1000, easing: 'easeOutQuart' },
      plugins: {
        legend: { position: 'bottom', labels: { color: c.text, padding: 12, font: { size: 11, family: 'Inter' } } },
        tooltip: { backgroundColor: c.tooltipBg, titleColor: c.tooltipText, bodyColor: c.tooltipText, borderColor: c.tooltipBorder, borderWidth: 1, padding: 10, cornerRadius: 8 }
      }
    }
  });
}

function renderBarChart(canvasId, data, opts = {}) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;
  destroyChart(canvasId);
  const c = getChartColors();
  const colors = ['#6366f1','#8b5cf6','#a855f7','#c084fc','#22d3ee','#3b82f6'];
  activeCharts[canvasId] = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(d => d.label),
      datasets: [{
        label: opts.label || 'Value',
        data: data.map(d => d.value),
        backgroundColor: data.map((d, i) => d.color || colors[i % colors.length]),
        borderRadius: 6,
        barThickness: opts.horizontal ? 16 : 32
      }]
    },
    options: {
      indexAxis: opts.horizontal ? 'y' : 'x',
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 800, easing: 'easeOutQuart' },
      plugins: {
        legend: { display: false },
        tooltip: { backgroundColor: c.tooltipBg, titleColor: c.tooltipText, bodyColor: c.tooltipText, borderColor: c.tooltipBorder, borderWidth: 1 }
      },
      scales: {
        x: {
          grid: opts.horizontal ? { display: false } : { color: c.grid, drawBorder: false },
          ticks: { color: c.text, font: { size: 10, family: 'Inter' } },
          ...(opts.horizontal ? { max: opts.max || 100, beginAtZero: true } : { beginAtZero: true })
        },
        y: {
          grid: opts.horizontal ? { display: false } : { color: c.grid, drawBorder: false },
          ticks: { color: c.text, font: { size: 11, family: 'Inter' } }
        }
      }
    }
  });
}

function renderLineChart(canvasId, data) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;
  destroyChart(canvasId);
  const c = getChartColors();
  activeCharts[canvasId] = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.map(d => d.day || d.month || d.q),
      datasets: [
        {
          label: 'Tests',
          data: data.map(d => d.tests),
          borderColor: '#6366f1',
          backgroundColor: 'rgba(99,102,241,0.1)',
          fill: true,
          tension: 0.4,
          borderWidth: 2.5,
          pointRadius: 5,
          pointHoverRadius: 8,
          pointBackgroundColor: '#6366f1',
          pointBorderColor: '#fff',
          pointBorderWidth: 2
        },
        {
          label: 'Deploys',
          data: data.map(d => d.deploys),
          borderColor: '#8b5cf6',
          backgroundColor: 'rgba(139,92,246,0.1)',
          fill: true,
          tension: 0.4,
          borderWidth: 2.5,
          pointRadius: 5,
          pointHoverRadius: 8,
          pointBackgroundColor: '#8b5cf6',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          yAxisID: 'y1'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 1200, easing: 'easeOutQuart' },
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { position: 'top', align: 'end', labels: { color: c.text, usePointStyle: true, pointStyle: 'circle', font: { size: 11, family: 'Inter' } } },
        tooltip: { backgroundColor: c.tooltipBg, titleColor: c.tooltipText, bodyColor: c.tooltipText, borderColor: c.tooltipBorder, borderWidth: 1, padding: 10, cornerRadius: 8 }
      },
      scales: {
        x: { grid: { display: false }, ticks: { color: c.text, font: { size: 10, family: 'Inter' } } },
        y: { grid: { color: c.grid, drawBorder: false }, ticks: { color: c.text, font: { size: 10, family: 'Inter' } }, position: 'left', beginAtZero: true },
        y1: { grid: { display: false }, ticks: { color: c.text, font: { size: 10, family: 'Inter' } }, position: 'right', beginAtZero: true }
      }
    }
  });
}

function exportCSV() {
  const headers = ['ID', 'Actor', 'Action', 'Entity', 'Time', 'Result'];
  const rows = AUDIT.map(a => [a.id, a.actor, a.action, a.entity, a.time, a.result]);
  const csv = [headers, ...rows].map(r => r.map(c => `"${c}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `sentra-audit-${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  toast('CSV downloaded successfully', 'success');
}

// ═══════════════════════════════════════════════════════════════
// END OF PART 1
// Ready for Part 2: View Functions (Login, Dashboard, My Work, Projects, Testing)
// ═══════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════
// PART 2: CORE VIEWS (Login, Dashboard, My Work, Projects, Testing)
// ═══════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════
// LOGIN PAGE
// ═══════════════════════════════════════════════════════════════
function renderLogin() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <div class="min-h-screen flex">
      <!-- Left panel - Brand story -->
      <div class="hidden lg:flex w-1/2 p-12 flex-col justify-between relative overflow-hidden slide-in-left" 
           style="background: linear-gradient(160deg, #0f172a 0%, #020617 100%);">
        
        <!-- Background effects -->
        <div class="absolute inset-0 opacity-20" 
             style="background-image: radial-gradient(circle at 20% 30%, rgba(99,102,241,0.3), transparent 50%), 
                                         radial-gradient(circle at 80% 70%, rgba(139,92,246,0.2), transparent 50%);">
        </div>
        
        <!-- Logo -->
        <div class="relative z-10 flex items-center gap-3">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center" 
               style="background: linear-gradient(135deg, #6366f1, #8b5cf6); 
                      box-shadow: 0 8px 20px -4px rgba(99,102,241,0.5);">
            ${icon('activity', 'icon-xl')}
          </div>
          <div>
            <div class="display-md">SENTRA</div>
            <div class="text-xs tracking-widest uppercase" style="color: var(--text-muted);">
              Core Execution Platform
            </div>
          </div>
        </div>
        
        <!-- Hero content -->
        <div class="relative z-10 max-w-md stagger">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4" 
               style="background: rgba(99,102,241,0.1); color: var(--accent); border: 1px solid rgba(99,102,241,0.2);">
            <span class="ai-sparkle">${icon('sparkles', 'icon-xs')}</span>
            Now with AI Copilot
          </div>
          
          <h1 class="display-xl mb-4">
            Execute with<br>
            <span style="background: linear-gradient(135deg, #6366f1, #ec4899); 
                         -webkit-background-clip: text; 
                         -webkit-text-fill-color: transparent;">
              clarity.
            </span>
          </h1>
          
          <p class="text-base mb-8" style="color: var(--text-muted); line-height: 1.6;">
            The all-in-one platform for testing, deployments, and everything in between.
          </p>
          
          <!-- Feature highlights -->
          <div class="space-y-2">
            <div class="login-feature">
              <div class="login-feature-icon">${icon('flaskConical', 'icon-md')}</div>
              <div>
                <div class="font-semibold text-sm heading">Testing at scale</div>
                <div class="text-xs" style="color: var(--text-muted);">
                  Manage thousands of tests with smart workflows
                </div>
              </div>
            </div>
            <div class="login-feature">
              <div class="login-feature-icon">${icon('rocket', 'icon-md')}</div>
              <div>
                <div class="font-semibold text-sm heading">Guided deployments</div>
                <div class="text-xs" style="color: var(--text-muted);">
                  Step-by-step execution with rollback protection
                </div>
              </div>
            </div>
            <div class="login-feature">
              <div class="login-feature-icon">${icon('shieldCheck', 'icon-md')}</div>
              <div>
                <div class="font-semibold text-sm heading">Audit-ready by default</div>
                <div class="text-xs" style="color: var(--text-muted);">
                  Every action tracked with cryptographic proof
                </div>
              </div>
            </div>
            <div class="login-feature">
              <div class="login-feature-icon">${icon('bot', 'icon-md')}</div>
              <div>
                <div class="font-semibold text-sm heading">AI-powered insights</div>
                <div class="text-xs" style="color: var(--text-muted);">
                  Smart suggestions and risk scoring
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Testimonial -->
        <div class="relative z-10 card p-4 slide-in-right" style="max-width: 400px;">
          <div class="flex items-start gap-3">
            <div class="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" 
                 style="background: linear-gradient(135deg, #f59e0b, #ef4444);">
              RK
            </div>
            <div>
              <div class="text-sm italic mb-1" style="color: var(--text);">
                "Reduced our deployment failures by 73% in the first quarter."
              </div>
              <div class="text-xs" style="color: var(--text-muted);">
                Rachel Kim, VP Engineering @ TechCorp
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Right panel - Login form -->
      <div class="w-full lg:w-1/2 flex items-center justify-center p-6 slide-in-right">
        <div class="w-full max-w-sm">
          
          <!-- Mobile logo -->
          <div class="lg:hidden flex items-center gap-3 mb-8">
            <div class="w-10 h-10 rounded-lg flex items-center justify-center" 
                 style="background: linear-gradient(135deg, #6366f1, #8b5cf6);">
              ${icon('activity', 'icon-lg')}
            </div>
            <div>
              <div class="display-md">SENTRA</div>
              <div class="text-[10px] tracking-widest uppercase" style="color: var(--text-muted);">
                Core Execution Platform
              </div>
            </div>
          </div>
          
          <!-- Welcome message -->
          <div class="mb-6 fade-in-up">
            <h2 class="display-md">Welcome back</h2>
            <p class="text-sm mt-1" style="color: var(--text-muted);">
              Sign in to access your workspace
            </p>
          </div>
          
          <!-- Login form -->
          <form id="loginForm" class="space-y-4 stagger" onsubmit="event.preventDefault(); handleLogin('manager');">
            <div>
              <label class="form-label">
                <span class="flex items-center gap-1.5">
                  ${icon('mail', 'icon-xs')} Work email
                </span>
              </label>
              <input type="email" value="jordan@sentra.io" required placeholder="you@company.com">
            </div>
            
            <div>
              <div class="flex items-center justify-between mb-1.5">
                <label class="form-label mb-0">
                  <span class="flex items-center gap-1.5">
                    ${icon('lock', 'icon-xs')} Password
                  </span>
                </label>
                <button type="button" 
                        class="text-xs font-medium hover:underline flex items-center gap-1" 
                        style="color: var(--accent);" 
                        onclick="openForgotPassword()">
                  ${icon('helpCircle', 'icon-xs')} Forgot password?
                </button>
              </div>
              <input type="password" value="demo123" required placeholder="Enter your password">
            </div>
            
            <button type="submit" class="btn btn-primary btn-ripple btn-press w-full py-2.5 font-semibold btn-lg">
              Sign in ${icon('arrowRight', 'icon-sm')}
            </button>
          </form>
          
          <!-- Divider -->
          <div class="flex items-center gap-3 my-5">
            <div class="flex-1 h-px" style="background: var(--border);"></div>
            <span class="text-xs font-medium" style="color: var(--text-dim);">
              or try a demo role
            </span>
            <div class="flex-1 h-px" style="background: var(--border);"></div>
          </div>
          
          <!-- Demo roles -->
          <div class="grid grid-cols-2 gap-2 stagger">
            ${Object.entries(USERS).map(([key, user]) => `
              <button onclick="handleLogin('${key}')" 
                      class="btn btn-subtle btn-ripple btn-press flex flex-col items-start gap-1 p-3 text-left">
                <div class="flex items-center gap-2 w-full">
                  <div class="w-7 h-7 rounded-full ${user.color} flex items-center justify-center text-[10px] font-bold text-white">
                    ${user.initials}
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="text-xs font-semibold truncate heading">
                      ${user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                    </div>
                    <div class="text-[10px] truncate" style="color: var(--text-muted);">
                      ${user.name}
                    </div>
                  </div>
                </div>
                <div class="text-[9px] mono" style="color: var(--text-dim);">
                  ${user.title}
                </div>
              </button>
            `).join('')}
          </div>
          
          <!-- Security badges -->
          <div class="mt-6 text-center text-[11px]" style="color: var(--text-dim);">
            <div class="flex items-center justify-center gap-3 mb-2">
              <span class="flex items-center gap-1">${icon('lock', 'icon-xs')} SOC 2</span>
              <span>·</span>
              <span class="flex items-center gap-1">${icon('shield', 'icon-xs')} SSO Ready</span>
              <span>·</span>
              <span class="flex items-center gap-1">${icon('shieldCheck', 'icon-xs')} GDPR</span>
            </div>
            <div>Protected by enterprise-grade security</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function handleLogin(role) {
  state.user = USERS[role];
  state.notifications = JSON.parse(JSON.stringify(INITIAL_NOTIFICATIONS));
  
  const homeMap = {
    manager: 'dashboard',
    tester: 'testing',
    engineer: 'deployments',
    auditor: 'audit'
  };
  
  toast(`Welcome, ${state.user.name.split(' ')[0]}!`, 'success');
  navigate(homeMap[role]);
}

function openForgotPassword() {
  toast('Password reset email sent! (Demo)', 'info');
}

// ═══════════════════════════════════════════════════════════════
// DASHBOARD
// ═══════════════════════════════════════════════════════════════
function renderDashboard() {
  const app = document.getElementById('app');
  const role = state.user.role;
  
  // Role-specific dashboard content
  const dashboardContent = {
    manager: renderManagerDashboard(),
    tester: renderTesterDashboard(),
    engineer: renderEngineerDashboard(),
    auditor: renderAuditorDashboard()
  };
  
  app.innerHTML = shell(dashboardContent[role] || renderManagerDashboard());
}

function renderManagerDashboard() {
  return `
    <div class="p-6 fade-in-up">
      <!-- Header -->
      <div class="flex items-center justify-between mb-6">
        <div>
          <h1 class="display-lg">Welcome back, ${state.user.name.split(' ')[0]}</h1>
          <p class="text-sm mt-1" style="color: var(--text-muted);">
            Here's what's happening across your projects
          </p>
        </div>
        <div class="flex items-center gap-2">
          ${renderDatePicker()}
          <button class="btn btn-subtle btn-ripple">
            ${icon('download', 'icon-sm')} Export
          </button>
        </div>
      </div>
      
      <!-- AI Insights Widget -->
      ${renderAIInsightsWidget()}
      
      <!-- KPI Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div class="card card-hover p-4">
          <div class="flex items-center justify-between mb-2">
            <div class="w-10 h-10 rounded-lg flex items-center justify-center" 
                 style="background: rgba(99,102,241,0.1);">
              ${icon('flaskConical', 'icon-lg', 'text-indigo-500')}
            </div>
            <span class="text-xs font-semibold" style="color: var(--success);">+12%</span>
          </div>
          <div class="text-2xl font-bold kpi-value">2,847</div>
          <div class="text-xs mt-1" style="color: var(--text-muted);">Tests Executed</div>
        </div>
        
        <div class="card card-hover p-4">
          <div class="flex items-center justify-between mb-2">
            <div class="w-10 h-10 rounded-lg flex items-center justify-center" 
                 style="background: rgba(16,185,129,0.1);">
              ${icon('checkCircle2', 'icon-lg', 'text-emerald-500')}
            </div>
            <span class="text-xs font-semibold" style="color: var(--success);">+5%</span>
          </div>
          <div class="text-2xl font-bold kpi-value">94.2%</div>
          <div class="text-xs mt-1" style="color: var(--text-muted);">Pass Rate</div>
        </div>
        
        <div class="card card-hover p-4">
          <div class="flex items-center justify-between mb-2">
            <div class="w-10 h-10 rounded-lg flex items-center justify-center" 
                 style="background: rgba(139,92,246,0.1);">
              ${icon('rocket', 'icon-lg', 'text-violet-500')}
            </div>
            <span class="text-xs font-semibold" style="color: var(--success);">+8%</span>
          </div>
          <div class="text-2xl font-bold kpi-value">142</div>
          <div class="text-xs mt-1" style="color: var(--text-muted);">Deployments</div>
        </div>
        
        <div class="card card-hover p-4">
          <div class="flex items-center justify-between mb-2">
            <div class="w-10 h-10 rounded-lg flex items-center justify-center" 
                 style="background: rgba(245,158,11,0.1);">
              ${icon('alertTriangle', 'icon-lg', 'text-amber-500')}
            </div>
            <span class="text-xs font-semibold" style="color: var(--danger);">-23%</span>
          </div>
          <div class="text-2xl font-bold kpi-value">7</div>
          <div class="text-xs mt-1" style="color: var(--text-muted);">Critical Issues</div>
        </div>
      </div>
      
      <!-- Charts Row -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <div class="card p-6">
          <h3 class="text-lg font-semibold mb-4">Execution Trend</h3>
          <div style="height: 300px;">
            <canvas id="trendChart"></canvas>
          </div>
        </div>
        
        <div class="card p-6">
          <h3 class="text-lg font-semibold mb-4">Test Results Distribution</h3>
          <div style="height: 300px;">
            <canvas id="donutChart"></canvas>
          </div>
        </div>
      </div>
      
      <!-- Recent Activity -->
      <div class="card p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-semibold">Recent Activity</h3>
          <button class="btn btn-ghost btn-sm">View all ${icon('arrowRight', 'icon-xs')}</button>
        </div>
        <div class="space-y-3">
          ${AUDIT.slice(0, 5).map(event => `
            <div class="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-800/30 transition">
              <div class="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0">
                ${icon('activity', 'icon-sm')}
              </div>
              <div class="flex-1 min-w-0">
                <div class="text-sm">
                  <span class="font-semibold">${event.actor}</span>
                  <span style="color: var(--text-muted);"> ${event.action} </span>
                  <span class="font-medium">${event.entity}</span>
                </div>
                <div class="text-xs mt-1" style="color: var(--text-muted);">
                  ${event.result} · ${event.time}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderTesterDashboard() {
  return `
    <div class="p-6 fade-in-up">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h1 class="display-lg">Welcome back, ${state.user.name.split(' ')[0]}</h1>
          <p class="text-sm mt-1" style="color: var(--text-muted);">
            Here are your test cycles and assignments
          </p>
        </div>
      </div>
      
      ${renderAIInsightsWidget()}
      
      <!-- My Test Cycles -->
      <div class="card p-6 mb-6">
        <h3 class="text-lg font-semibold mb-4">My Test Cycles</h3>
        <div class="space-y-3">
          ${state.testCases.slice(0, 5).map(tc => `
            <div class="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800/30 transition cursor-pointer"
                 onclick="navigate('testing')">
              <div class="w-10 h-10 rounded-lg flex items-center justify-center" 
                   style="background: rgba(99,102,241,0.1);">
                ${icon('flaskConical', 'icon-lg', 'text-indigo-500')}
              </div>
              <div class="flex-1 min-w-0">
                <div class="font-semibold text-sm">${tc.name}</div>
                <div class="text-xs mt-1" style="color: var(--text-muted);">
                  ${tc.module} · ${tc.assignee}
                </div>
              </div>
              <span class="pill pill-${tc.status === 'passed' ? 'pass' : tc.status === 'failed' ? 'fail' : tc.status === 'blocked' ? 'block' : 'pend'}">
                ${tc.status}
              </span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderEngineerDashboard() {
  return `
    <div class="p-6 fade-in-up">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h1 class="display-lg">Welcome back, ${state.user.name.split(' ')[0]}</h1>
          <p class="text-sm mt-1" style="color: var(--text-muted);">
            Here are your deployments and releases
          </p>
        </div>
      </div>
      
      ${renderAIInsightsWidget()}
      
      <!-- Active Deployments -->
      <div class="card p-6 mb-6">
        <h3 class="text-lg font-semibold mb-4">Active Deployments</h3>
        <div class="space-y-3">
          ${DEPLOYS.map(d => `
            <div class="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800/30 transition cursor-pointer"
                 onclick="navigate('deployments')">
              <div class="w-10 h-10 rounded-lg flex items-center justify-center" 
                   style="background: rgba(139,92,246,0.1);">
                ${icon('rocket', 'icon-lg', 'text-violet-500')}
              </div>
              <div class="flex-1 min-w-0">
                <div class="font-semibold text-sm">${d.name}</div>
                <div class="text-xs mt-1" style="color: var(--text-muted);">
                  ${d.project} · ${d.engineer}
                </div>
              </div>
              <div class="text-right">
                <div class="text-sm font-semibold">${d.done}/${d.steps} steps</div>
                <div class="text-xs" style="color: var(--text-muted);">${d.status}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderAuditorDashboard() {
  return `
    <div class="p-6 fade-in-up">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h1 class="display-lg">Audit Overview</h1>
          <p class="text-sm mt-1" style="color: var(--text-muted);">
            Compliance and audit trail monitoring
          </p>
        </div>
      </div>
      
      ${renderAIInsightsWidget()}
      
      <!-- Compliance Score -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div class="card card-hover p-6 text-center">
          <div class="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center" 
               style="background: rgba(16,185,129,0.1);">
            ${icon('shieldCheck', 'icon-2xl', 'text-emerald-500')}
          </div>
          <div class="text-3xl font-bold" style="color: var(--success);">98%</div>
          <div class="text-sm mt-1" style="color: var(--text-muted);">Compliance Score</div>
        </div>
        
        <div class="card card-hover p-6 text-center">
          <div class="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center" 
               style="background: rgba(99,102,241,0.1);">
            ${icon('clipboard', 'icon-2xl', 'text-indigo-500')}
          </div>
          <div class="text-3xl font-bold">1,247</div>
          <div class="text-sm mt-1" style="color: var(--text-muted);">Audit Events</div>
        </div>
        
        <div class="card card-hover p-6 text-center">
          <div class="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center" 
               style="background: rgba(245,158,11,0.1);">
            ${icon('alertTriangle', 'icon-2xl', 'text-amber-500')}
          </div>
          <div class="text-3xl font-bold">3</div>
          <div class="text-sm mt-1" style="color: var(--text-muted);">Anomalies Detected</div>
        </div>
      </div>
      
      <!-- Recent Audit Events -->
      <div class="card p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-semibold">Recent Audit Events</h3>
          <button class="btn btn-ghost btn-sm" onclick="navigate('audit')">
            View all ${icon('arrowRight', 'icon-xs')}
          </button>
        </div>
        <div class="space-y-2">
          ${AUDIT.map(event => `
            <div class="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800/30 transition">
              <div class="mono text-xs" style="color: var(--text-dim);">${event.id}</div>
              <div class="mono text-xs" style="color: var(--text-dim);">${event.time}</div>
              <div class="flex-1 min-w-0">
                <div class="text-sm">
                  <span class="font-semibold">${event.actor}</span>
                  <span style="color: var(--text-muted);"> ${event.action} </span>
                  <span class="font-medium">${event.entity}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderAIInsightsWidget() {
  return `
    <div class="ai-insight-card mb-6 cursor-pointer" onclick="toggleCopilot()">
      <div class="flex items-start gap-3">
        <div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" 
             style="background: linear-gradient(135deg, var(--ai), var(--ai-2));">
          ${icon('sparkles', 'icon-lg', 'text-white ai-sparkle')}
        </div>
        <div class="flex-1">
          <div class="flex items-center gap-2 mb-1">
            <span class="pill pill-ai text-[10px]">AI Insight</span>
            <span class="text-xs" style="color: var(--text-muted);">Just now</span>
          </div>
          <div class="text-sm font-semibold mb-1">
            3 failed tests share a common root cause
          </div>
          <div class="text-xs" style="color: var(--text-muted);">
            MFA service degradation detected. Click to analyze and generate fix recommendations.
          </div>
        </div>
        ${icon('arrowRight', 'icon-md')}
      </div>
    </div>
  `;
}

// ═══════════════════════════════════════════════════════════════
// MY WORK
// ═══════════════════════════════════════════════════════════════
function renderMyWork() {
  const app = document.getElementById('app');
  
  const myTests = state.testCases.filter(tc => tc.assignee === state.user.name);
  const pendingTests = myTests.filter(tc => tc.status === 'not-run');
  const failedTests = myTests.filter(tc => tc.status === 'failed');
  
  app.innerHTML = shell(`
    <div class="p-6 fade-in-up">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h1 class="display-lg">My Work</h1>
          <p class="text-sm mt-1" style="color: var(--text-muted);">
            ${pendingTests.length} pending · ${failedTests.length} failed
          </p>
        </div>
      </div>
      
      ${renderAIInsightsWidget()}
      
      <!-- Pending Tests -->
      <div class="card p-6 mb-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-semibold">Pending Tests</h3>
          <span class="pill pill-run">${pendingTests.length} tests</span>
        </div>
        <div class="space-y-2">
          ${pendingTests.length === 0 ? `
            <div class="text-center py-8" style="color: var(--text-muted);">
              ${icon('checkCircle2', 'icon-2xl')}
              <div class="text-sm mt-2">All caught up! No pending tests.</div>
            </div>
          ` : pendingTests.map(tc => `
            <div class="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800/30 transition cursor-pointer"
                 onclick="navigate('testing')">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center" 
                   style="background: rgba(99,102,241,0.1);">
                ${icon('flaskConical', 'icon-md', 'text-indigo-500')}
              </div>
              <div class="flex-1 min-w-0">
                <div class="font-medium text-sm">${tc.name}</div>
                <div class="text-xs" style="color: var(--text-muted);">${tc.module}</div>
              </div>
              <button class="btn btn-primary btn-sm btn-ripple">
                Start ${icon('play', 'icon-xs')}
              </button>
            </div>
          `).join('')}
        </div>
      </div>
      
      <!-- Failed Tests -->
      ${failedTests.length > 0 ? `
        <div class="card p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold">Failed Tests</h3>
            <span class="pill pill-fail">${failedTests.length} tests</span>
          </div>
          <div class="space-y-2">
            ${failedTests.map(tc => `
              <div class="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800/30 transition cursor-pointer"
                   onclick="navigate('testing')">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center" 
                     style="background: rgba(239,68,68,0.1);">
                  ${icon('xCircle', 'icon-md', 'text-red-500')}
                </div>
                <div class="flex-1 min-w-0">
                  <div class="font-medium text-sm">${tc.name}</div>
                  <div class="text-xs" style="color: var(--text-muted);">${tc.note || tc.module}</div>
                </div>
                <button class="btn btn-subtle btn-sm btn-ripple">
                  Investigate ${icon('arrowRight', 'icon-xs')}
                </button>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `);
}

// ═══════════════════════════════════════════════════════════════
// PROJECTS
// ═══════════════════════════════════════════════════════════════
function renderProjects() {
  const app = document.getElementById('app');
  
  app.innerHTML = shell(`
    <div class="p-6 fade-in-up">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h1 class="display-lg">Projects</h1>
          <p class="text-sm mt-1" style="color: var(--text-muted);">
            Manage your projects and test suites
          </p>
        </div>
        <button class="btn btn-primary btn-ripple">
          ${icon('plus', 'icon-sm')} New Project
        </button>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        ${PROJECTS.map(project => `
          <div class="card card-hover p-6 cursor-pointer" onclick="navigate('testing')">
            <div class="flex items-start justify-between mb-4">
              <div class="w-12 h-12 rounded-lg flex items-center justify-center" 
                   style="background: ${project.color}20;">
                ${icon('folderKanban', 'icon-xl')}
              </div>
              <span class="pill pill-${project.status === 'active' ? 'pass' : 'pend'}">
                ${project.status}
              </span>
            </div>
            
            <h3 class="text-lg font-semibold mb-2">${project.name}</h3>
            
            <div class="space-y-2 mb-4">
              <div class="flex items-center justify-between text-sm">
                <span style="color: var(--text-muted);">Tests</span>
                <span class="font-semibold">${project.tests.toLocaleString()}</span>
              </div>
              <div class="flex items-center justify-between text-sm">
                <span style="color: var(--text-muted);">Deployments</span>
                <span class="font-semibold">${project.deploys}</span>
              </div>
              <div class="flex items-center justify-between text-sm">
                <span style="color: var(--text-muted);">Members</span>
                <span class="font-semibold">${project.members}</span>
              </div>
            </div>
            
            <div class="flex items-center gap-2 pt-4" style="border-top: 1px solid var(--border);">
              <div class="flex -space-x-2">
                ${[1,2,3].map(i => `
                  <div class="w-6 h-6 rounded-full border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold"
                       style="background: hsl(${i * 60}, 70%, 60%);">
                    ${String.fromCharCode(64 + i)}
                  </div>
                `).join('')}
              </div>
              <span class="text-xs" style="color: var(--text-muted);">
                +${project.members - 3} more
              </span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `);
}

// ═══════════════════════════════════════════════════════════════
// TESTING
// ═══════════════════════════════════════════════════════════════
function renderTesting() {
  const app = document.getElementById('app');
  
  const filteredTests = applyFilters(state.testCases, {
    status: 'status',
    assignee: 'assignee',
    module: 'module',
    priority: 'priority'
  });
  
  const selectedCount = state.selectedTests.size;
  const allSelected = selectedCount === filteredTests.length && filteredTests.length > 0;
  const partialSelected = selectedCount > 0 && selectedCount < filteredTests.length;
  
  app.innerHTML = shell(`
    <div class="flex h-full">
      <!-- Sidebar - Hierarchy Tree -->
      <aside class="w-64 border-r flex flex-col" style="border-color: var(--border);">
        <div class="p-4" style="border-bottom: 1px solid var(--border);">
          <h2 class="font-semibold mb-2">Test Hierarchy</h2>
          <input type="text" placeholder="Search..." class="w-full text-sm">
        </div>
        <div class="flex-1 overflow-y-auto scroll p-2">
          ${renderHierarchyTree(state.projects[0], 0)}
        </div>
      </aside>
      
      <!-- Main Content -->
      <div class="flex-1 flex flex-col overflow-hidden">
        <!-- Toolbar -->
        <div class="p-4" style="border-bottom: 1px solid var(--border);">
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-2">
              <h2 class="text-lg font-semibold">Login Flow Suite</h2>
              <span class="pill pill-run">${filteredTests.length} tests</span>
            </div>
            <div class="flex items-center gap-2">
              <button class="btn btn-subtle btn-sm btn-ripple" onclick="toggleFilters()">
                ${icon('filter', 'icon-sm')} Filters
                ${getActiveFilterCount() > 0 ? `<span class="pill pill-info ml-1">${getActiveFilterCount()}</span>` : ''}
              </button>
              <button class="btn btn-subtle btn-sm btn-ripple" onclick="openTestFocusMode()">
                ${icon('play', 'icon-sm')} Focus Mode
              </button>
              <button class="btn btn-primary btn-sm btn-ripple" onclick="openTestCaseEditor()">
                ${icon('plus', 'icon-sm')} New Test
              </button>
            </div>
          </div>
          
          ${state.filtersOpen ? renderFilterPanel('testing') : ''}
        </div>
        
        <!-- Bulk Actions Bar -->
        ${selectedCount > 0 ? `
          <div class="bulk-action-bar">
            <span class="text-sm font-semibold">${selectedCount} selected</span>
            <div class="flex-1"></div>
            <button class="btn btn-subtle btn-sm btn-ripple" onclick="bulkMarkStatus('passed')">
              ${icon('check', 'icon-sm')} Pass
            </button>
            <button class="btn btn-subtle btn-sm btn-ripple" onclick="bulkMarkStatus('failed')">
              ${icon('x', 'icon-sm')} Fail
            </button>
            <button class="btn btn-subtle btn-sm btn-ripple" onclick="bulkMarkStatus('blocked')">
              ${icon('ban', 'icon-sm')} Block
            </button>
            <button class="btn btn-ghost btn-sm" onclick="state.selectedTests.clear(); renderTesting();">
              Clear
            </button>
          </div>
        ` : ''}
        
        <!-- Test Cases List -->
        <div class="flex-1 overflow-y-auto scroll">
          <div class="p-4">
            <!-- Select All -->
            <div class="flex items-center gap-3 mb-2 px-3">
              <div class="checkbox-custom ${allSelected ? 'checked' : partialSelected ? 'partial' : ''}" 
                   onclick="toggleSelectAll()"></div>
              <span class="text-sm font-medium">Select All</span>
            </div>
            
            <!-- Test Cases -->
            <div class="space-y-2">
              ${filteredTests.map(tc => {
                const isSelected = state.selectedTests.has(tc.id);
                const isExpanded = state.expandedTest === tc.id;
                
                return `
                  <div class="test-row ${isSelected ? 'selected' : ''} ${isExpanded ? 'expanded' : ''}">
                    <div class="flex items-center gap-3 p-3 rounded-lg cursor-pointer" 
                         onclick="toggleTestExpand('${tc.id}')">
                      <div class="checkbox-custom ${isSelected ? 'checked' : ''}" 
                           onclick="event.stopPropagation(); toggleTestSelection('${tc.id}', event)"></div>
                      
                      <div class="mono text-xs w-20" style="color: var(--text-dim);">${tc.id}</div>
                      
                      <div class="flex-1 min-w-0">
                        <div class="font-medium text-sm">${tc.name}</div>
                        ${tc.note ? `<div class="text-xs mt-1" style="color: var(--text-muted);">${tc.note}</div>` : ''}
                      </div>
                      
                      <span class="mono text-xs" style="color: var(--text-dim);">${tc.dur}</span>
                      
                      <span class="pill pill-${tc.status === 'passed' ? 'pass' : tc.status === 'failed' ? 'fail' : tc.status === 'blocked' ? 'block' : 'pend'}">
                        ${tc.status}
                      </span>
                      
                      ${icon('chevronDown', 'icon-sm', isExpanded ? 'rotate-180' : '')}
                    </div>
                    
                    ${isExpanded ? `
                      <div class="px-3 pb-3 pt-2" style="background: var(--bg);">
                        <div class="text-sm mb-3" style="color: var(--text-muted);">
                          <strong>Description:</strong> ${tc.desc}
                        </div>
                        <div class="flex gap-2">
                          <button class="btn btn-success btn-sm btn-ripple" 
                                  onclick="event.stopPropagation(); state.testCases.find(t=>t.id==='${tc.id}').status='passed'; renderTesting();">
                            ${icon('check', 'icon-sm')} Pass
                          </button>
                          <button class="btn btn-danger btn-sm btn-ripple" 
                                  onclick="event.stopPropagation(); state.testCases.find(t=>t.id==='${tc.id}').status='failed'; renderTesting();">
                            ${icon('x', 'icon-sm')} Fail
                          </button>
                          <button class="btn btn-subtle btn-sm btn-ripple" 
                                  onclick="event.stopPropagation(); openTestFocusMode(${state.testCases.findIndex(t=>t.id==='${tc.id}')})">
                            ${icon('play', 'icon-sm')} Focus
                          </button>
                          <button class="btn btn-ghost btn-sm" 
                                  onclick="event.stopPropagation(); openTestCaseEditor(state.testCases.find(t=>t.id==='${tc.id}'))">
                            ${icon('edit', 'icon-sm')} Edit
                          </button>
                        </div>
                      </div>
                    ` : ''}
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `);
}

function renderHierarchyTree(node, depth) {
  if (!node) return '';
  
  const indent = depth * 16;
  const isProject = node.id && node.id.startsWith('p');
  const isCategory = node.id && node.id.startsWith('c');
  const isModule = node.id && node.id.startsWith('m');
  const isSuite = node.id && node.id.startsWith('s');
  
  const iconName = isProject ? 'folderKanban' : isCategory ? 'folderOpen' : isModule ? 'package' : 'clipboard';
  const iconColor = isProject ? 'text-indigo-500' : isCategory ? 'text-violet-500' : isModule ? 'text-cyan-500' : 'text-emerald-500';
  
  let html = `
    <div class="tree-node" style="padding-left: ${indent}px;" 
         onclick="state.selectedHierarchyNode = '${node.id}'; renderTesting();">
      ${icon(iconName, 'icon-sm', iconColor)}
      <span class="flex-1 truncate text-sm">${node.name}</span>
      ${node.count !== undefined ? `<span class="text-xs" style="color: var(--text-dim);">${node.count}</span>` : ''}
    </div>
  `;
  
  if (node.categories) {
    html += node.categories.map(cat => renderHierarchyTree(cat, depth + 1)).join('');
  }
  if (node.modules) {
    html += node.modules.map(mod => renderHierarchyTree(mod, depth + 1)).join('');
  }
  if (node.suites) {
    html += node.suites.map(suite => renderHierarchyTree(suite, depth + 1)).join('');
  }
  
  return html;
}

function toggleTestExpand(testId) {
  state.expandedTest = state.expandedTest === testId ? null : testId;
  renderTesting();
}

function toggleTestSelection(testId, event) {
  if (event) event.stopPropagation();
  
  if (state.selectedTests.has(testId)) {
    state.selectedTests.delete(testId);
  } else {
    state.selectedTests.add(testId);
  }
  
  renderTesting();
}

function toggleSelectAll() {
  const filteredTests = applyFilters(state.testCases, {
    status: 'status',
    assignee: 'assignee',
    module: 'module',
    priority: 'priority'
  });
  
  if (state.selectedTests.size === filteredTests.length) {
    state.selectedTests.clear();
  } else {
    filteredTests.forEach(tc => state.selectedTests.add(tc.id));
  }
  
  renderTesting();
}

function bulkMarkStatus(status) {
  state.testCases.forEach(tc => {
    if (state.selectedTests.has(tc.id)) {
      tc.status = status;
    }
  });
  
  const count = state.selectedTests.size;
  toast(`${count} tests marked as ${status}`, status === 'passed' ? 'success' : status === 'failed' ? 'error' : 'warning');
  
  state.selectedTests.clear();
  renderTesting();
}

// ═══════════════════════════════════════════════════════════════
// END OF PART 2
// Ready for Part 3: Deployments, Templates, Suggestions, Audit, Reports, Settings
// ═══════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════
// PART 3: FINAL VIEWS & NAVIGATION
// ═══════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════
// DEPLOYMENTS
// ═══════════════════════════════════════════════════════════════
function renderDeployments() {
  const app = document.getElementById('app');
  
  app.innerHTML = shell(`
    <div class="p-6 fade-in-up">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h1 class="display-lg">Deployments</h1>
          <p class="text-sm mt-1" style="color: var(--text-muted);">
            Track and manage all deployment activities
          </p>
        </div>
        <button class="btn btn-primary btn-ripple" onclick="startNewDeployment()">
          <LaTex>id_46</LaTex>{renderAIInsightsWidget()}
      
      <!-- Active Deployments -->
      <div class="card p-6 mb-6">
        <h3 class="text-lg font-semibold mb-4">Active Deployments</h3>
        <div class="space-y-3">
          <LaTex>id_45</LaTex>{d.id}')">
              <div class="w-12 h-12 rounded-lg flex items-center justify-center" 
                   style="background: rgba(139,92,246,0.1);">
                ${icon('rocket', 'icon-xl', 'text-violet-500')}
              </div>
              <div class="flex-1 min-w-0">
                <div class="font-semibold text-sm mb-1">${d.name}</div>
                <div class="text-xs" style="color: var(--text-muted);">
                  ${d.project} · ${d.engineer} · Started ${d.startedAt}
                </div>
                <div class="flex items-center gap-2 mt-2">
                  <div class="flex-1 h-2 rounded-full overflow-hidden" style="background: var(--bg-hover);">
                    <div class="h-full" style="width: ${(d.done/d.steps)*100}%; background: var(--accent);"></div>
                  </div>
                  <span class="text-xs font-semibold">${d.done}/${d.steps}</span>
                </div>
              </div>
              <div class="text-right">
                <span class="pill pill-run">Running</span>
                <div class="text-xs mt-1" style="color: var(--text-muted);">ETA: ${d.eta}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      
      <!-- Recent Deployments -->
      <div class="card p-6">
        <h3 class="text-lg font-semibold mb-4">Recent Deployments</h3>
        <div class="space-y-2">
          ${DEPLOYS.filter(d => d.status !== 'running').map(d => `
            <div class="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800/30 transition cursor-pointer"
                 onclick="openDeploymentDetail('${d.id}')">
              <div class="w-10 h-10 rounded-lg flex items-center justify-center" 
                   style="background: rgba(16,185,129,0.1);">
                ${icon('checkCircle2', 'icon-lg', 'text-emerald-500')}
              </div>
              <div class="flex-1 min-w-0">
                <div class="font-medium text-sm">${d.name}</div>
                <div class="text-xs" style="color: var(--text-muted);">
                  ${d.project} · ${d.engineer} · ${d.duration}
                </div>
              </div>
              <span class="pill pill-pass">${d.status}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `);
}

function startNewDeployment() {
  toast('Starting new deployment...', 'info');
  setTimeout(() => {
    state.deployExecution = {
      id: 'd-' + Date.now(),
      name: 'Release 2.5.0 — Staging',
      steps: JSON.parse(JSON.stringify(INITIAL_DEPLOY_STEPS)),
      currentStep: 0,
      startTime: new Date(),
      status: 'running'
    };
    renderDeploymentExecution();
  }, 500);
}

function openDeploymentDetail(deployId) {
  const deploy = DEPLOYS.find(d => d.id === deployId);
  if (!deploy) return;
  
  toast(`Viewing deployment: ${deploy.name}`, 'info');
}

function renderDeploymentExecution() {
  if (!state.deployExecution) return;
  
  const de = state.deployExecution;
  const currentStep = de.steps[de.currentStep];
  const progress = ((de.currentStep + 1) / de.steps.length) * 100;
  
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="h-full flex flex-col" style="background: var(--bg);">
      <!-- Header -->
      <div class="p-6" style="border-bottom: 1px solid var(--border);">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h1 class="text-2xl font-bold"><LaTex>id_44</LaTex>{de.currentStep + 1} of <LaTex>id_43</LaTex>{icon('pause', 'icon-sm')} Pause
            </button>
            <button class="btn btn-danger btn-ripple" onclick="abortDeployment()">
              <LaTex>id_42</LaTex>{progress}%; background: linear-gradient(90deg, var(--accent), var(--accent-2));"></div>
          </div>
          <span class="text-sm font-semibold"><LaTex>id_41</LaTex>{de.steps.map((step, idx) => {
            const isCompleted = idx < de.currentStep;
            const isCurrent = idx === de.currentStep;
            const isPending = idx > de.currentStep;
            
            return `
              <div class="card p-4 ${isCurrent ? 'border-2' : ''}" 
                   style="${isCurrent ? 'border-color: var(--accent);' : ''}">
                <div class="flex items-start gap-3">
                  <div class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    isCompleted ? 'bg-emerald-500' : isCurrent ? 'bg-indigo-500' : ''
                  }" style="${isPending ? 'background: var(--bg-hover);' : ''}">
                    ${isCompleted ? icon('check', 'icon-lg', 'text-white') : 
                      isCurrent ? `<span class="text-white font-bold">${idx + 1}</span>` : 
                      `<span style="color: var(--text-dim);"><LaTex>id_40</LaTex>{step.name}</div>
                      ${step.crit ? '<span class="pill pill-fail text-[10px]">Critical</span>' : ''}
                    </div>
                    <div class="text-xs mb-2" style="color: var(--text-muted);">${step.desc}</div>
                    
                    ${isCurrent ? `
                      <div class="mono text-xs p-2 rounded" style="background: var(--bg); color: var(--text-muted);">
                        $ <LaTex>id_39</LaTex>{icon('check', 'icon-sm')} Complete Step
                        </button>
                        <button class="btn btn-danger btn-sm btn-ripple" onclick="failCurrentStep()">
                          <LaTex>id_38</LaTex>{icon('checkCircle2', 'icon-sm')} Completed in <LaTex>id_37</LaTex>{currentStep.name}`, 'success');
  
  de.currentStep++;
  
  if (de.currentStep >= de.steps.length) {
    toast('🎉 Deployment completed successfully!', 'success', 5000);
    setTimeout(() => {
      state.deployExecution = null;
      navigate('deployments');
    }, 2000);
  } else {
    renderDeploymentExecution();
  }
}

function failCurrentStep() {
  if (!state.deployExecution) return;
  
  const currentStep = state.deployExecution.steps[state.deployExecution.currentStep];
  
  if (currentStep.crit) {
    if (confirm('Critical step failed. Would you like to rollback?')) {
      toast('↺ Initiating rollback...', 'warning');
      setTimeout(() => {
        toast('✓ Rollback completed successfully', 'success');
        state.deployExecution = null;
        navigate('deployments');
      }, 2000);
    }
  } else {
    toast('✗ Step failed. You can retry or skip.', 'error');
  }
}

function pauseDeployment() {
  toast('⏸ Deployment paused', 'info');
}

function abortDeployment() {
  if (confirm('Are you sure you want to abort this deployment?')) {
    toast('✗ Deployment aborted', 'error');
    state.deployExecution = null;
    navigate('deployments');
  }
}

// ═══════════════════════════════════════════════════════════════
// TEMPLATES
// ═══════════════════════════════════════════════════════════════
function renderTemplates() {
  const app = document.getElementById('app');
  
  app.innerHTML = shell(`
    <div class="p-6 fade-in-up">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h1 class="display-lg">Templates</h1>
          <p class="text-sm mt-1" style="color: var(--text-muted);">
            Reusable templates for tests and deployments
          </p>
        </div>
        <button class="btn btn-primary btn-ripple">
          <LaTex>id_36</LaTex>{TEMPLATES.map(template => `
          <div class="card card-hover p-6 cursor-pointer" onclick="openTemplateDetail('${template.id}')">
            <div class="flex items-start justify-between mb-4">
              <div class="w-12 h-12 rounded-lg flex items-center justify-center" 
                   style="background: ${template.type === 'test' ? 'rgba(16,185,129,0.1)' : 'rgba(139,92,246,0.1)'};">
                ${icon(template.type === 'test' ? 'flaskConical' : 'rocket', 'icon-xl', 
                       template.type === 'test' ? 'text-emerald-500' : 'text-violet-500')}
              </div>
              <span class="pill pill-${template.status === 'published' ? 'pass' : 'pend'}">
                ${template.status}
              </span>
            </div>
            
            <h3 class="font-semibold mb-2">${template.name}</h3>
            <div class="text-xs mb-4" style="color: var(--text-muted);">
              Version ${template.ver} · Updated ${template.updated}
            </div>
            
            <div class="space-y-2 pt-4" style="border-top: 1px solid var(--border);">
              <div class="flex items-center justify-between text-sm">
                <span style="color: var(--text-muted);">Author</span>
                <span class="font-medium">${template.author}</span>
              </div>
              <div class="flex items-center justify-between text-sm">
                <span style="color: var(--text-muted);">Uses</span>
                <span class="font-medium">${template.uses}</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `);
}

function openTemplateDetail(templateId) {
  const template = TEMPLATES.find(t => t.id === templateId);
  if (!template) return;
  
  toast(`Viewing template: <LaTex>id_35</LaTex>{icon('plus', 'icon-sm')} New Suggestion
        </button>
      </div>
      
      <LaTex>id_34</LaTex>{pendingSuggestions.length} suggestions</span>
        </div>
        <div class="space-y-3">
          <LaTex>id_33</LaTex>{s.id}')">
              <div class="flex items-start justify-between mb-2">
                <div class="flex-1">
                  <div class="flex items-center gap-2 mb-1">
                    <span class="font-semibold text-sm">${s.title}</span>
                    <span class="pill pill-${s.priority === 'high' ? 'fail' : s.priority === 'medium' ? 'block' : 'pend'}">
                      ${s.priority}
                    </span>
                    <span class="pill pill-info">${s.type}</span>
                  </div>
                  <div class="text-xs" style="color: var(--text-muted);">
                    ${s.submitter} · ${s.time} · ${s.context}
                  </div>
                </div>
                <span class="pill pill-${s.status === 'under_review' ? 'run' : 'pend'}">
                  ${s.status.replace('_', ' ')}
                </span>
              </div>
              <div class="text-sm mb-3" style="color: var(--text-muted);">
                ${s.reason}
              </div>
              ${state.user.role === 'manager' ? `
                <div class="flex gap-2 pt-3" style="border-top: 1px solid var(--border);">
                  <button class="btn btn-success btn-sm btn-ripple" 
                          onclick="event.stopPropagation(); approveSuggestion('${s.id}', 'master')">
                    <LaTex>id_32</LaTex>{s.id}', 'current')">
                    Apply to Current
                  </button>
                  <button class="btn btn-ghost btn-sm" 
                          onclick="event.stopPropagation(); rejectSuggestion('<LaTex>id_31</LaTex>{icon('x', 'icon-sm')} Reject
                  </button>
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>
      
      <!-- Approved Suggestions -->
      <LaTex>id_30</LaTex>{approvedSuggestions.length} suggestions</span>
          </div>
          <div class="space-y-2">
            ${approvedSuggestions.map(s => `
              <div class="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800/30 transition cursor-pointer"
                   onclick="openSuggestionDetail('${s.id}')">
                <div class="w-10 h-10 rounded-lg flex items-center justify-center" 
                     style="background: rgba(16,185,129,0.1);">
                  <LaTex>id_29</LaTex>{s.title}</div>
                  <div class="text-xs" style="color: var(--text-muted);">
                    Approved by <LaTex>id_28</LaTex>{s.appliedTo}
                  </div>
                </div>
                <span class="pill pill-pass">Approved</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `);
}

function openSuggestionSubmission() {
  const modal = document.getElementById('modal-root');
  
  modal.innerHTML = `
    <div class="modal-overlay" onclick="closeModal()">
      <div class="modal-content p-6" onclick="event.stopPropagation()">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-bold">Submit Suggestion</h2>
          <button class="btn btn-ghost" onclick="closeModal()">
            <LaTex>id_27</LaTex>{icon('check', 'icon-sm')} Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
}

function submitSuggestion() {
  const title = document.getElementById('suggestion-title').value;
  const type = document.getElementById('suggestion-type').value;
  const priority = document.getElementById('suggestion-priority').value;
  const context = document.getElementById('suggestion-context').value;
  const reason = document.getElementById('suggestion-reason').value;
  
  if (!title || !reason) {
    toast('Please fill in all required fields', 'error');
    return;
  }
  
  const newSuggestion = {
    id: 's-' + Date.now(),
    title,
    type,
    priority,
    context: context || 'General',
    reason,
    submitter: state.user.name,
    time: 'Just now',
    status: 'submitted',
    attachments: 0,
    comments: 0
  };
  
  SUGGESTIONS.unshift(newSuggestion);
  toast('✓ Suggestion submitted successfully', 'success');
  closeModal();
  renderSuggestions();
}

function approveSuggestion(suggestionId, applyTo) {
  const suggestion = SUGGESTIONS.find(s => s.id === suggestionId);
  if (!suggestion) return;
  
  suggestion.status = 'approved';
  suggestion.approvedBy = state.user.name;
  suggestion.appliedTo = applyTo === 'master' ? 'v3.3' : 'Current Run';
  
  toast(`✓ Suggestion approved and applied to <LaTex>id_26</LaTex>{suggestion.title}`, 'info');
}

// ═══════════════════════════════════════════════════════════════
// AUDIT
// ═══════════════════════════════════════════════════════════════
function renderAudit() {
  const app = document.getElementById('app');
  
  app.innerHTML = shell(`
    <div class="p-6 fade-in-up">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h1 class="display-lg">Audit Trail</h1>
          <p class="text-sm mt-1" style="color: var(--text-muted);">
            Complete audit trail of all activities
          </p>
        </div>
        <div class="flex items-center gap-2">
          <LaTex>id_25</LaTex>{icon('download', 'icon-sm')} Export
          </button>
        </div>
      </div>
      
      <LaTex>id_24</LaTex>{AUDIT.map(event => `
                <tr class="hover:bg-slate-800/30 transition" style="border-top: 1px solid var(--border);">
                  <td class="p-4 mono text-xs" style="color: var(--text-dim);">${event.id}</td>
                  <td class="p-4 mono text-xs" style="color: var(--text-dim);">${event.time}</td>
                  <td class="p-4 text-sm font-medium">${event.actor}</td>
                  <td class="p-4">
                    <span class="pill pill-info mono text-[10px]">${event.action}</span>
                  </td>
                  <td class="p-4 text-sm">${event.entity}</td>
                  <td class="p-4 text-sm" style="color: var(--text-muted);">${event.result}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `);
}

// ═══════════════════════════════════════════════════════════════
// REPORTS
// ═══════════════════════════════════════════════════════════════
function renderReports() {
  const app = document.getElementById('app');
  
  app.innerHTML = shell(`
    <div class="p-6 fade-in-up">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h1 class="display-lg">Reports</h1>
          <p class="text-sm mt-1" style="color: var(--text-muted);">
            Analytics and performance insights
          </p>
        </div>
        <div class="flex items-center gap-2">
          <LaTex>id_23</LaTex>{icon('download', 'icon-sm')} Export
          </button>
        </div>
      </div>
      
      <!-- KPI Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div class="card card-hover p-4">
          <div class="flex items-center justify-between mb-2">
            <div class="w-10 h-10 rounded-lg flex items-center justify-center" 
                 style="background: rgba(99,102,241,0.1);">
              <LaTex>id_22</LaTex>{icon('checkCircle2', 'icon-lg', 'text-emerald-500')}
            </div>
            <span class="text-xs font-semibold" style="color: var(--success);">+5%</span>
          </div>
          <div class="text-2xl font-bold kpi-value">94.2%</div>
          <div class="text-xs mt-1" style="color: var(--text-muted);">Pass Rate</div>
        </div>
        
        <div class="card card-hover p-4">
          <div class="flex items-center justify-between mb-2">
            <div class="w-10 h-10 rounded-lg flex items-center justify-center" 
                 style="background: rgba(139,92,246,0.1);">
              <LaTex>id_21</LaTex>{icon('alertTriangle', 'icon-lg', 'text-amber-500')}
            </div>
            <span class="text-xs font-semibold" style="color: var(--danger);">-23%</span>
          </div>
          <div class="text-2xl font-bold kpi-value">7</div>
          <div class="text-xs mt-1" style="color: var(--text-muted);">Critical Issues</div>
        </div>
      </div>
      
      <!-- Charts -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <div class="card p-6">
          <h3 class="text-lg font-semibold mb-4">Execution Trend</h3>
          <div style="height: 300px;">
            <canvas id="reportTrendChart"></canvas>
          </div>
        </div>
        
        <div class="card p-6">
          <h3 class="text-lg font-semibold mb-4">Test Results Distribution</h3>
          <div style="height: 300px;">
            <canvas id="reportDonutChart"></canvas>
          </div>
        </div>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="card p-6">
          <h3 class="text-lg font-semibold mb-4">Coverage by Module</h3>
          <div style="height: 300px;">
            <canvas id="reportBarChart"></canvas>
          </div>
        </div>
        
        <div class="card p-6">
          <h3 class="text-lg font-semibold mb-4">Team Performance</h3>
          <div class="space-y-3">
            <LaTex>id_20</LaTex>{member.avatar}
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center justify-between mb-1">
                    <span class="font-medium text-sm">${member.name}</span>
                    <span class="text-xs font-semibold">${member.passRate}%</span>
                  </div>
                  <div class="h-2 rounded-full overflow-hidden" style="background: var(--bg-hover);">
                    <div class="h-full" style="width: ${member.passRate}%; background: var(--success);"></div>
                  </div>
                  <div class="text-xs mt-1" style="color: var(--text-muted);">${member.tests} tests executed</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `);
  
  // Initialize charts
  setTimeout(() => {
    renderLineChart('reportTrendChart', CHART_DATA.trend['30d']);
    renderDonutChart('reportDonutChart', [
      { label: 'Passed', value: 2680, color: '#10b981' },
      { label: 'Failed', value: 167, color: '#ef4444' }
    ]);
    renderBarChart('reportBarChart', CHART_DATA.coverage, { horizontal: true });
  }, 100);
}

// ═══════════════════════════════════════════════════════════════
// SETTINGS
// ═══════════════════════════════════════════════════════════════
function renderSettings() {
  const app = document.getElementById('app');
  
  app.innerHTML = shell(`
    <div class="p-6 fade-in-up max-w-4xl">
      <div class="mb-6">
        <h1 class="display-lg">Settings</h1>
        <p class="text-sm mt-1" style="color: var(--text-muted);">
          Manage your account and preferences
        </p>
      </div>
      
      <!-- Profile -->
      <div class="card p-6 mb-6">
        <h3 class="text-lg font-semibold mb-4">Profile</h3>
        <div class="flex items-start gap-4 mb-6">
          <div class="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white"
               style="background: linear-gradient(135deg, var(--accent), var(--accent-2));">
            <LaTex>id_19</LaTex>{state.user.name}</div>
            <div class="text-sm" style="color: var(--text-muted);"><LaTex>id_18</LaTex>{state.user.title}</div>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="form-label">Full Name</label>
            <input type="text" value="<LaTex>id_17</LaTex>{state.user.email}">
          </div>
          <div>
            <label class="form-label">Role</label>
            <input type="text" value="<LaTex>id_16</LaTex>{state.theme} mode</div>
          </div>
          <div class="theme-toggle" onclick="toggleTheme()"></div>
        </div>
      </div>
      
      <!-- Notifications -->
      <div class="card p-6 mb-6">
        <h3 class="text-lg font-semibold mb-4">Notifications</h3>
        <div class="space-y-3">
          <LaTex>id_15</LaTex>{notif.label}</div>
                <div class="text-xs" style="color: var(--text-muted);">${notif.desc}</div>
              </div>
              <div class="theme-toggle ${notif.enabled ? 'active' : ''}" onclick="this.classList.toggle('active')"></div>
            </div>
          `).join('')}
        </div>
      </div>
      
      <!-- Danger Zone -->
      <div class="card p-6" style="border-color: var(--danger);">
        <h3 class="text-lg font-semibold mb-4" style="color: var(--danger);">Danger Zone</h3>
        <div class="space-y-3">
          <div class="flex items-center justify-between p-4 rounded-lg" style="background: rgba(239,68,68,0.05);">
            <div>
              <div class="font-medium text-sm">Sign Out</div>
              <div class="text-xs" style="color: var(--text-muted);">Sign out from all devices</div>
            </div>
            <button class="btn btn-danger btn-ripple" onclick="signOut()">
              <LaTex>id_14</LaTex>{icon('activity', 'icon-md')}
          </div>
          <div>
            <div class="font-bold text-sm">SENTRA</div>
            <div class="text-[10px] tracking-widest uppercase" style="color: var(--text-muted);">
              Core Execution
            </div>
          </div>
        </div>
        
        <!-- Navigation -->
        <nav class="flex-1 overflow-y-auto scroll py-4">
          <LaTex>id_13</LaTex>{renderNavItem('mywork', 'My Work', 'zap', perms)}
          <LaTex>id_12</LaTex>{renderNavItem('testing', 'Testing', 'flaskConical', perms)}
          <LaTex>id_11</LaTex>{renderNavItem('templates', 'Templates', 'fileText', perms)}
          <LaTex>id_10</LaTex>{renderNavItem('audit', 'Audit Center', 'shieldCheck', perms)}
          
          <div class="px-4 py-2 mt-4">
            <div class="text-[10px] font-semibold uppercase tracking-wider" style="color: var(--text-dim);">
              Insights
            </div>
          </div>
          <LaTex>id_9</LaTex>{renderNavItem('settings', 'Settings', 'settings', perms)}
        </nav>
        
        <!-- User Profile -->
        <div class="p-4" style="border-top: 1px solid var(--border);">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                 style="background: linear-gradient(135deg, var(--accent), var(--accent-2));">
              <LaTex>id_8</LaTex>{state.user.name}</div>
              <div class="text-xs truncate" style="color: var(--text-muted);"><LaTex>id_7</LaTex>{icon('search', 'icon-sm')} Search
              <kbd class="kbd ml-2">⌘K</kbd>
            </button>
          </div>
          
          <div class="flex items-center gap-2">
            <button class="btn btn-ghost btn-sm" onclick="toggleTheme()">
              <LaTex>id_6</LaTex>{icon('bell', 'icon-md')}
                <LaTex>id_5</LaTex>{unreadCount}
                  </span>
                ` : ''}
              </button>
              
              <LaTex>id_4</LaTex>{icon('sparkles', 'icon-sm')} AI Copilot
            </button>
          </div>
        </header>
        
        <!-- Content -->
        <div class="flex-1 overflow-y-auto scroll">
          <LaTex>id_3</LaTex>{isActive ? 'active' : ''}" onclick="navigate('<LaTex>id_2</LaTex>{icon(iconName, 'icon-md', 'nav-icon')}
      <span class="flex-1"><LaTex>id_1</LaTex>{badge > 0 ? `<span class="pill pill-run">${badge}</span>` : ''}
    </div>
  `;
}

// ═══════════════════════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════════════════════
function navigate(view) {
  // Check if user has access
  if (state.user && !ROLE_PERMISSIONS[state.user.role].nav.includes(view)) {
    toast('Access denied', 'error');
    return;
  }
  
  state.view = view;
  
  const views = {
    login: renderLogin,
    dashboard: renderDashboard,
    mywork: renderMyWork,
    projects: renderProjects,
    testing: renderTesting,
    deployments: renderDeployments,
    templates: renderTemplates,
    suggestions: renderSuggestions,
    audit: renderAudit,
    reports: renderReports,
    settings: renderSettings
  };
  
  const renderFn = views[view];
  if (renderFn) {
    renderFn();
  } else {
    toast('View not found', 'error');
    navigate('dashboard');
  }
}

// ═══════════════════════════════════════════════
