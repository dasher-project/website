// Typed access layer for the cross-platform feature matrix.
// The raw data lives in feature-status.yaml (the SSOT) and is compiled to
// feature-status.json by scripts/validate-feature-status.mjs at build time.
// Keeping the logic here keeps the .astro component free of TS-only syntax
// (the Astro frontmatter is linted as plain JS).

import featureStatusRaw from './feature-status.json';

export type StatusValue = 'shipped' | 'beta' | 'planned' | 'not-supported' | 'n/a';

export interface StatusEntry {
  status: StatusValue;
  version?: string;
  issue?: string;
  reason?: string;
}

export interface Feature {
  id: string;
  category: string;
  title: string;
  dasher_core_dep?: string;
  notes?: string;
  platforms: Record<string, StatusEntry>;
}

export interface FeatureStatusFile {
  meta: { last_updated: string; status_legend: Record<string, string> };
  platforms: string[];
  features: Feature[];
}

export const featureStatus = featureStatusRaw as unknown as FeatureStatusFile;

export const platforms = featureStatus.platforms;

export const platformLabels: Record<string, string> = {
  apple: 'Apple',
  windows: 'Windows',
  gtk: 'GTK',
  android: 'Android',
  web: 'Web',
};

export const statusOrder: StatusValue[] = ['shipped', 'beta', 'planned', 'not-supported', 'n/a'];

export const statusIcons: Record<StatusValue, string> = {
  shipped: '✅',
  beta: '🧪',
  planned: '📋',
  'not-supported': '⛔',
  'n/a': '—',
};

export interface FeatureCategory {
  name: string;
  features: Feature[];
}

/** Features grouped by category, preserving first-seen order. */
export const categories: FeatureCategory[] = (() => {
  const groups: FeatureCategory[] = [];
  for (const feature of featureStatus.features) {
    let group = groups.find((g) => g.name === feature.category);
    if (!group) {
      group = { name: feature.category, features: [] };
      groups.push(group);
    }
    group.features.push(feature);
  }
  return groups;
})();

export function entryText(entry?: StatusEntry): string {
  if (!entry) return '';
  const parts: string[] = [];
  if (entry.version) parts.push(`v${entry.version}`);
  if (entry.issue) parts.push(entry.issue);
  if (entry.reason) parts.push(entry.reason);
  return parts.join(' · ');
}

export const lastUpdated = featureStatus.meta.last_updated;
export const statusLegend = featureStatus.meta.status_legend;
export const v5Baseline = featureStatus.meta.v5_baseline;
