
import React from 'react';
import { 
  Bug, Trees, Home, ShieldAlert, Calendar, Search, 
  Activity, HardHat, Info, Settings, History, MapPin, 
  HeartPulse, Zap, AlertCircle, Thermometer, ShieldCheck,
  Flower, ShieldX, Axe, Shovel, Radar
} from 'lucide-react';
import { DecisionOption, DecisionPath } from './types';

export const LEVEL_1_OPTIONS: DecisionOption[] = [
  { id: 'vespa_velutina', label: 'Vespa velutina', color: '#ea580c' },
  { id: 'otras_avispas', label: 'Otras avispas', color: '#84cc16' },
];

export const LEVEL_2_OPTIONS: Record<string, DecisionOption[]> = {
  vespa_velutina: [
    { id: 'apiario', label: 'Apiario', color: '#ca8a04' },
    { id: 'espacio_urbano', label: 'Urbano/Periurbano', color: '#2563eb' },
    { id: 'espacio_natural', label: 'Espacio Natural', color: '#16a34a' },
  ],
  otras_avispas: [
    { id: 'autoctonas', label: 'Autóctonas', color: '#22c55e' },
    { id: 'invasoras', label: 'Otras Invasoras', color: '#ef4444' },
  ]
};

export const LEVEL_3_MAPPING: Record<string, DecisionOption[]> = {
  apiario: [
    { id: 'api_f_m', label: 'Feb - May', color: '#fbbf24' },
    { id: 'api_m_s', label: 'May - Sep', color: '#f59e0b' },
    { id: 'api_s_n', label: 'Sep - Nov', color: '#d97706' },
    { id: 'api_d_e', label: 'Dic - Ene', color: '#92400e' },
  ],
  espacio_urbano: [
    { id: 'urb_f_m', label: 'Feb - May', color: '#60a5fa' },
    { id: 'urb_m_s', label: 'May - Sep', color: '#3b82f6' },
    { id: 'urb_s_n', label: 'Sep - Nov', color: '#2563eb' },
    { id: 'urb_d_e', label: 'Dic - Ene', color: '#1e40af' },
  ],
  espacio_natural: [
    { id: 'nat_forestal', label: 'Gestión Forestal', color: '#059669' },
    { id: 'nat_agricola', label: 'Actividad Agrícola', color: '#10b981' },
    { id: 'nat_monitoreo', label: 'Monitoreo V.V.', color: '#34d399' },
  ],
  invasoras: [
    { id: 'inv_trampeo', label: 'Trampeo', color: '#ef4444' },
    { id: 'inv_vectores', label: 'Vectores', color: '#b91c1c' },
  ]
};

// Nivel 4: Sanidad (Apiario) / Actividad (Natural) / Método (Urbano)
export const LEVEL_4_MAPPING: Record<string, DecisionOption[]> = {
  api_f_m: [{ id: 'var_high', label: 'Varroa > 2%', color: '#dc2626' }, { id: 'var_low', label: 'Varroa < 2%', color: '#16a34a' }],
  api_m_s: [{ id: 'var_high', label: 'Varroa > 2%', color: '#dc2626' }, { id: 'var_low', label: 'Varroa < 2%', color: '#16a34a' }],
  api_s_n: [{ id: 'var_high', label: 'Varroa > 2%', color: '#dc2626' }, { id: 'var_low', label: 'Varroa < 2%', color: '#16a34a' }],
  api_d_e: [{ id: 'var_high', label: 'Varroa > 2%', color: '#dc2626' }, { id: 'var_low', label: 'Varroa < 2%', color: '#16a34a' }],
  nat_forestal: [{ id: 'for_desbroze', label: 'Desbroce', color: '#064e3b' }, { id: 'for_tala', label: 'Tala', color: '#065f46' }],
  nat_agricola: [{ id: 'agr_fruta', label: 'Recogida Fruta', color: '#059669' }],
  urb_f_m: [{ id: 'urb_met_ido', label: 'Idoneidad Estación', color: '#8b5cf6' }, { id: 'urb_met_nido', label: 'Detección Nidos', color: '#f43f5e' }, { id: 'urb_met_cont', label: 'Control V.V.', color: '#0ea5e9' }],
  urb_m_s: [{ id: 'urb_met_nido', label: 'Detección Nidos', color: '#f43f5e' }, { id: 'urb_met_cont', label: 'Control V.V.', color: '#0ea5e9' }],
  urb_s_n: [{ id: 'urb_met_nido', label: 'Detección Nidos', color: '#f43f5e' }, { id: 'urb_met_cont', label: 'Control V.V.', color: '#0ea5e9' }],
  urb_d_e: [{ id: 'urb_met_nido', label: 'Detección Nidos', color: '#f43f5e' }, { id: 'urb_met_cont', label: 'Control V.V.', color: '#0ea5e9' }],
};

// Nivel 5: Mielada (Apiario) / Detalle Nido (Urbano) / Acción (Natural)
export const LEVEL_5_MAPPING: Record<string, DecisionOption[]> = {
  var_high: [{ id: 'miel_si', label: 'Con Mielada', color: '#f59e0b' }, { id: 'miel_no', label: 'Sin Mielada', color: '#94a3b8' }],
  var_low: [{ id: 'miel_si', label: 'Con Mielada', color: '#f59e0b' }, { id: 'miel_no', label: 'Sin Mielada', color: '#94a3b8' }],
  for_desbroze: [{ id: 'act_rev', label: 'Revisión', color: '#10b981' }],
  for_tala: [{ id: 'act_rev', label: 'Revisión', color: '#10b981' }],
  agr_fruta: [{ id: 'act_rev', label: 'Revisión', color: '#10b981' }],
  urb_met_ido: [{ id: 'act_est_geo', label: 'Estudio Geográfico', color: '#8b5cf6' }],
  urb_met_nido: [
    { id: 'nido_sec_pas', label: 'Secundario Pasado', color: '#64748b' },
    { id: 'nido_emb_pre', label: 'Embrionario Año', color: '#f43f5e' },
    { id: 'nido_pri_pre', label: 'Primario Año', color: '#fb7185' },
    { id: 'nido_sec_pre', label: 'Secundario Año', color: '#e11d48' }
  ],
  urb_met_cont: [
    { id: 'cont_trampeo', label: 'Trampeo', color: '#0ea5e9' },
    { id: 'cont_vectores', label: 'Vectores', color: '#0284c7' },
    { id: 'cont_loc_nidos', label: 'Localización de Nidos', color: '#0369a1' }
  ]
};

// Nivel 6: Vitalidad (Apiario)
export const LEVEL_6_MAPPING: Record<string, DecisionOption[]> = {
  miel_si: [{ id: 'vit_high', label: 'Cría > 6', color: '#10b981' }, { id: 'vit_low', label: 'Cría < 6', color: '#ef4444' }],
  miel_no: [{ id: 'vit_high', label: 'Cría > 6', color: '#10b981' }, { id: 'vit_low', label: 'Cría < 6', color: '#ef4444' }],
};

// Nivel 7: Acción (Apiario)
export const LEVEL_7_MAPPING: Record<string, DecisionOption[]> = {
  vit_high: [{ id: 'api_act_nido', label: 'Detección Nidos', color: '#f43f5e' }, { id: 'api_act_cont', label: 'Control V.V.', color: '#0ea5e9' }],
  vit_low: [{ id: 'api_act_nido', label: 'Detección Nidos', color: '#f43f5e' }, { id: 'api_act_cont', label: 'Control V.V.', color: '#0ea5e9' }],
};

// Nivel 8: Tipo Nido o Método Control (Apiario)
export const LEVEL_8_MAPPING: Record<string, DecisionOption[]> = {
  api_act_nido: [
    { id: 'nido_sec_pas', label: 'Secundario Pasado', color: '#64748b' },
    { id: 'nido_emb_pre', label: 'Embrionario Año', color: '#f43f5e' },
    { id: 'nido_pri_pre', label: 'Primario Año', color: '#fb7185' },
    { id: 'nido_sec_pre', label: 'Secundario Año', color: '#e11d48' }
  ],
  api_act_cont: [
    { id: 'met_tram_fund', label: 'Trampeo Fundadoras', color: '#0ea5e9' },
    { id: 'met_trampeo', label: 'Trampeo Control', color: '#0284c7' },
    { id: 'met_arpas', label: 'Arpas Eléctricas', color: '#0369a1' },
    { id: 'met_bozales', label: 'Bozales', color: '#075985' },
    { id: 'met_koldo', label: 'Trampas Koldo-Bas', color: '#0c4a6e' },
    { id: 'met_vectores', label: 'Vectores', color: '#334155' },
    { id: 'met_trashum', label: 'Trashumancia', color: '#475569' }
  ]
};

// Nivel 9: Acción Final
export const LEVEL_9_MAPPING: Record<string, DecisionOption[]> = {
  nido_sec_pas: [{ id: 'fin_no_actuar', label: 'No Actuar', color: '#94a3b8' }],
  nido_emb_pre: [{ id: 'fin_eliminar', label: 'Eliminar', color: '#dc2626' }],
  nido_pri_pre: [{ id: 'fin_eliminar', label: 'Eliminar', color: '#dc2626' }],
  nido_sec_pre: [{ id: 'fin_eliminar', label: 'Eliminar', color: '#dc2626' }],
  met_tram_fund: [{ id: 'fin_actuar', label: 'Ejecutar', color: '#16a34a' }],
  met_trampeo: [{ id: 'fin_actuar', label: 'Ejecutar', color: '#16a34a' }],
  met_arpas: [{ id: 'fin_actuar', label: 'Ejecutar', color: '#16a34a' }],
  met_bozales: [{ id: 'fin_actuar', label: 'Ejecutar', color: '#16a34a' }],
  met_koldo: [{ id: 'fin_actuar', label: 'Ejecutar', color: '#16a34a' }],
  met_vectores: [{ id: 'fin_actuar', label: 'Ejecutar', color: '#16a34a' }],
  met_trashum: [{ id: 'fin_actuar', label: 'Ejecutar', color: '#16a34a' }],
  act_est_geo: [{ id: 'fin_estudio', label: 'Finalizar', color: '#8b5cf6' }],
};

export const getIconForId = (id: string) => {
  if (id.includes('nido')) return <Search size={14} />;
  if (id.includes('cont') || id.includes('met_')) return <Radar size={14} />;
  if (id.includes('var_')) return <AlertCircle size={14} />;
  if (id.includes('vit_')) return <HeartPulse size={14} />;
  if (id.includes('miel_')) return <Flower size={14} />;
  
  switch (id) {
    case 'vespa_velutina': return <Bug size={14} />;
    case 'otras_avispas': return <ShieldAlert size={14} />;
    case 'apiario': return <Activity size={14} />;
    case 'espacio_urbano': return <Home size={14} />;
    case 'espacio_natural': return <Trees size={14} />;
    case 'nat_forestal': return <Axe size={14} />;
    case 'nat_agricola': return <Shovel size={14} />;
    case 'fin_no_actuar': return <ShieldX size={14} />;
    case 'fin_eliminar': return <Zap size={14} />;
    default: return null;
  }
};

export const ALL_OPTIONS: DecisionOption[] = [
  ...LEVEL_1_OPTIONS,
  ...Object.values(LEVEL_2_OPTIONS).flat(),
  ...Object.values(LEVEL_3_MAPPING).flat(),
  ...Object.values(LEVEL_4_MAPPING).flat(),
  ...Object.values(LEVEL_5_MAPPING).flat(),
  ...Object.values(LEVEL_6_MAPPING).flat(),
  ...Object.values(LEVEL_7_MAPPING).flat(),
  ...Object.values(LEVEL_8_MAPPING).flat(),
  ...Object.values(LEVEL_9_MAPPING).flat(),
];

export const OPTION_LABELS: Record<string, string> = {};
ALL_OPTIONS.forEach(o => {
  OPTION_LABELS[o.id] = o.label;
});

export const getAllVolvellePaths = (): DecisionPath[] => {
  const paths: DecisionPath[] = [];
  const traverse = (currentPath: any, level: number) => {
    const keys = ['level1', 'level2', 'level3', 'level4', 'level5', 'level6', 'level7', 'level8', 'level9', 'level10'];
    const currentKey = keys[level - 1];
    const currentValue = currentPath[currentKey];
    if (!currentValue || level >= 10) return;

    const nextOptions = 
      LEVEL_2_OPTIONS[currentValue] || 
      LEVEL_3_MAPPING[currentValue] || 
      LEVEL_4_MAPPING[currentValue] || 
      LEVEL_5_MAPPING[currentValue] || 
      LEVEL_6_MAPPING[currentValue] || 
      LEVEL_7_MAPPING[currentValue] || 
      LEVEL_8_MAPPING[currentValue] || 
      LEVEL_9_MAPPING[currentValue] || 
      [];

    if (nextOptions.length === 0) {
      paths.push({
        level1: currentPath.level1 || null,
        level2: currentPath.level2 || null,
        level3: currentPath.level3 || null,
        level4: currentPath.level4 || null,
        level5: currentPath.level5 || null,
        level6: currentPath.level6 || null,
        level7: currentPath.level7 || null,
        level8: currentPath.level8 || null,
        level9: currentPath.level9 || null,
        level10: null
      });
      return;
    }

    nextOptions.forEach(opt => {
      traverse({ ...currentPath, [keys[level]]: opt.id }, level + 1);
    });
  };

  LEVEL_1_OPTIONS.forEach(opt => {
    traverse({ level1: opt.id }, 1);
  });

  return paths;
};
