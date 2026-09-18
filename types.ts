
export type CircleLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface DecisionOption {
  id: string;
  label: string;
  color: string;
  description?: string;
}

export interface DecisionPath {
  level1: string | null;
  level2: string | null;
  level3: string | null;
  level4: string | null;
  level5: string | null;
  level6: string | null;
  level7: string | null;
  level8: string | null;
  level9: string | null;
  level10: string | null;
}

export interface ManagementProtocol {
  title: string;
  summary: string;
  actions: string[];
  preventiveMeasures: string[];
  safetyWarnings: string[];
  isLocal?: boolean;
}

export interface RecommendationMatrix {
  [pathHash: string]: ManagementProtocol;
}
