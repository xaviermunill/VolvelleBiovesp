import { DecisionPath, ManagementProtocol, RecommendationMatrix, DecisionOption } from './types';
import { 
  LEVEL_1_OPTIONS, LEVEL_2_OPTIONS, LEVEL_3_MAPPING, 
  LEVEL_4_MAPPING, LEVEL_5_MAPPING, LEVEL_6_MAPPING, 
  LEVEL_7_MAPPING, LEVEL_8_MAPPING, LEVEL_9_MAPPING,
  OPTION_LABELS 
} from './constants';

export const LEVEL_NAMES: Record<number, string> = {
  1: 'Especie',
  2: 'Entorno / Ámbito',
  3: 'Temporalidad / Gestión',
  4: 'Sanidad / Actividad',
  5: 'Mielada / Detalle Nido',
  6: 'Vitalidad / Cría',
  7: 'Acción Apiario',
  8: 'Método / Tipo Nido',
  9: 'Acción Final',
};

export interface SelectionStepInfo {
  level: number;
  levelName: string;
  id: string;
  label: string;
}

export interface NextOptionActionPreview {
  optionId: string;
  optionLabel: string;
  optionColor: string;
  matchingCount: number;
  sampleProtocolTitle?: string;
  recommendedActions: string[];
}

export interface SelectionAnalysis {
  isComplete: boolean;
  isEmpty: boolean;
  activeLevelCount: number;
  selectedSteps: SelectionStepInfo[];
  summaryTitle: string;
  summaryContext: string;
  matchingCount: number;
  nextOptions: {
    level: number;
    levelName: string;
    options: DecisionOption[];
  } | null;
  actionsByNextOption?: NextOptionActionPreview[];
  actions: string[];
  preventiveMeasures: string[];
  safetyWarnings: string[];
  exactProtocol?: ManagementProtocol | null;
}

export const getNextOptionsForPath = (path: DecisionPath): { level: number; levelName: string; options: DecisionOption[] } | null => {
  if (!path.level1) {
    return { level: 1, levelName: LEVEL_NAMES[1], options: LEVEL_1_OPTIONS };
  }
  if (!path.level2) {
    const opts = LEVEL_2_OPTIONS[path.level1] || [];
    return opts.length > 0 ? { level: 2, levelName: LEVEL_NAMES[2], options: opts } : null;
  }
  if (!path.level3) {
    const opts = LEVEL_3_MAPPING[path.level2] || [];
    return opts.length > 0 ? { level: 3, levelName: LEVEL_NAMES[3], options: opts } : null;
  }
  if (!path.level4) {
    const opts = LEVEL_4_MAPPING[path.level3] || [];
    return opts.length > 0 ? { level: 4, levelName: LEVEL_NAMES[4], options: opts } : null;
  }
  if (!path.level5) {
    const opts = LEVEL_5_MAPPING[path.level4] || [];
    return opts.length > 0 ? { level: 5, levelName: LEVEL_NAMES[5], options: opts } : null;
  }
  if (!path.level6) {
    const opts = LEVEL_6_MAPPING[path.level5] || [];
    return opts.length > 0 ? { level: 6, levelName: LEVEL_NAMES[6], options: opts } : null;
  }
  if (!path.level7) {
    const opts = LEVEL_7_MAPPING[path.level6] || [];
    return opts.length > 0 ? { level: 7, levelName: LEVEL_NAMES[7], options: opts } : null;
  }
  if (!path.level8) {
    const opts = LEVEL_8_MAPPING[path.level7] || [];
    return opts.length > 0 ? { level: 8, levelName: LEVEL_NAMES[8], options: opts } : null;
  }
  if (!path.level9) {
    const opts = LEVEL_9_MAPPING[path.level8] || [];
    return opts.length > 0 ? { level: 9, levelName: LEVEL_NAMES[9], options: opts } : null;
  }
  return null;
};

// Genera un texto de contexto descriptivo según los pasos seleccionados
const getContextDescription = (steps: SelectionStepInfo[]): string => {
  if (steps.length === 0) {
    return 'Inicia la toma de decisiones seleccionando la especie en el centro del volvelle.';
  }

  const ids = steps.map(s => s.id);
  const isVelutina = ids.includes('vespa_velutina');
  const isOtras = ids.includes('otras_avispas');

  if (isOtras) {
    if (ids.includes('autoctonas')) {
      return 'Identificación de especies autóctonas (Vespa crabro, polistes y avispas silvestres). Especies con estatus de protección y beneficio ecológico como competidoras naturales de la avispa asiática. Política estricta de no intervención.';
    }
    if (ids.includes('invasoras')) {
      return 'Gestión de otras especies invasoras no autóctonas (ej. Vespa orientalis). Medidas focalizadas en trampeo preventivo, monitoreo de vectores de dispersión y comunicación a la red de alerta biológica.';
    }
    return 'Diferenciación entre avispas autóctonas beneficiosas para el ecosistema y otras especies invasoras no consolidadas.';
  }

  if (isVelutina) {
    if (ids.includes('apiario')) {
      if (ids.includes('api_f_m')) {
        return 'Apiario en Primavera (Feb - May): Período crítico de salida de hibernación de reinas fundadoras y formación de nidos embrionarios. Prioridad absoluta en trampeo selectivo de fundadoras, control sanitario de Varroa y protección temprana de piqueras débiles.';
      }
      if (ids.includes('api_m_s')) {
        return 'Apiario en Verano (May - Sep): Crecimiento exponencial de las colonias de velutina y alta presión depredadora sobre las piqueras. Requiere barreras físicas, arpas eléctricas, bozales y localización activa de nidos secundarios en el perímetro.';
      }
      if (ids.includes('api_s_n')) {
        return 'Apiario en Otoño (Sep - Nov): Pico de máxima presión y depredación. Nacimiento de futuras reinas fecundadas y machos. Urge mantener las medidas de defensa mecánica (arpas y bozales) y neutralizar nidos secundarios antes de la fecundación y dispersión.';
      }
      if (ids.includes('api_d_e')) {
        return 'Apiario en Invierno (Dic - Ene): Caída de hojas y visibilidad de nidos en árboles. Los nidos secundarios de velutina del año mueren con las heladas y quedan abandonados; no requieren insecticidas. Momento de evaluación anual y mantenimiento de material.';
      }
      return 'Gestión en apiario: Protección integral del colmenar frente a Vespa velutina, combinando sanidad apícola (Varroa), defensas físicas de piquera, trampeo selectivo y neutralización de nidos.';
    }

    if (ids.includes('espacio_urbano')) {
      if (ids.includes('urb_met_ido')) {
        return 'Espacio Urbano - Idoneidad Estacional: Análisis previo territorial y estacional antes de desplegar recursos municipales o vecinales de trampeo.';
      }
      if (ids.includes('urb_met_nido')) {
        return 'Espacio Urbano - Detección y Retirada de Nidos: Procedimientos seguros de aviso, acordonamiento y retirada de nidos embrionarios, primarios o secundarios en fachadas, cornisas, setos y arbolado.';
      }
      if (ids.includes('urb_met_cont')) {
        return 'Espacio Urbano - Métodos de Control y Detección: Trampeo coordinado selectivo, seguimiento por vectores y localización sistemática de nidos en parques, jardines y áreas urbanas.';
      }
      return 'Gestión en entorno urbano y periurbano: Foco prioritario en seguridad ciudadana, detección precoz de nidos primarios y coordinación con servicios municipales de control.';
    }

    if (ids.includes('espacio_natural')) {
      if (ids.includes('nat_forestal')) {
        return 'Espacio Natural - Gestión Forestal: Medidas de precaución e inspección previa en faenas de desbroce y tala para evitar perturbación accidental de nidos y ataques masivos a operarios.';
      }
      if (ids.includes('nat_agricola')) {
        return 'Espacio Natural - Actividad Agrícola: Protección de frutales maduros, viñedos y recolección manual. Métodos para reducir el impacto en cosechas y salvaguardar a los trabajadores del campo.';
      }
      if (ids.includes('nat_monitoreo')) {
        return 'Espacio Natural - Monitoreo Ambiental: Vigilancia de corredores de dispersión, líneas de vuelo y seguimiento fenológico de Vespa velutina en hábitats naturales.';
      }
      return 'Gestión en espacios naturales y actividades agroforestales: Coordinación entre aprovechamiento forestal, agrícola y prevención de riesgos por proximidad a colonias.';
    }

    return 'Protocolos de gestión y control de Vespa velutina según el Manual Biovesp v2.13.';
  }

  return 'Selección en curso en la rueda de decisiones.';
};

export const analyzeSelection = (
  path: DecisionPath,
  matrix: RecommendationMatrix
): SelectionAnalysis => {
  const steps: SelectionStepInfo[] = [];
  const keys: (keyof DecisionPath)[] = ['level1', 'level2', 'level3', 'level4', 'level5', 'level6', 'level7', 'level8', 'level9', 'level10'];

  keys.forEach((k, idx) => {
    const val = path[k];
    if (val) {
      steps.push({
        level: idx + 1,
        levelName: LEVEL_NAMES[idx + 1] || `Nivel ${idx + 1}`,
        id: val,
        label: OPTION_LABELS[val] || val.replace(/_/g, ' ')
      });
    }
  });

  if (steps.length === 0) {
    return {
      isComplete: false,
      isEmpty: true,
      activeLevelCount: 0,
      selectedSteps: [],
      summaryTitle: 'Rueda Volvelle de Vespa velutina',
      summaryContext: 'Inicia una selección en el centro de la rueda para obtener protocolos técnicos inmediatos de control, prevención y seguridad.',
      matchingCount: Object.keys(matrix).length,
      nextOptions: {
        level: 1,
        levelName: LEVEL_NAMES[1],
        options: LEVEL_1_OPTIONS
      },
      actionsByNextOption: [
        {
          optionId: 'vespa_velutina',
          optionLabel: 'Vespa velutina',
          optionColor: '#ea580c',
          matchingCount: Object.keys(matrix).filter(k => k.startsWith('vespa_velutina')).length,
          sampleProtocolTitle: 'Control y Gestión Integral de Vespa velutina',
          recommendedActions: [
            'Protección perimetral de colmenares con arpas eléctricas e inhibidores de vuelo.',
            'Trampeo selectivo de fundadoras primaverales y neutralización de nidos secundarios.'
          ]
        },
        {
          optionId: 'otras_avispas',
          optionLabel: 'Otras avispas',
          optionColor: '#ca8a04',
          matchingCount: Object.keys(matrix).filter(k => k.startsWith('otras_avispas')).length,
          sampleProtocolTitle: 'Gestión de Especies Autóctonas e Invasoras Secundarias',
          recommendedActions: [
            'Protección y conservación de Vespa crabro y polinizadores autóctonos.',
            'Vigilancia y aviso técnico ante posible presencia de Vespa orientalis.'
          ]
        }
      ],
      actions: [
        'Selecciona la especie en el centro: Vespa velutina (invasora) u Otras avispas (autóctonas/invasoras secundarias).',
        'Define el entorno de actuación: Apiario, Espacio Urbano o Espacio Natural.',
        'El sistema filtrará automáticamente entre las 388 combinaciones del Manual Biovesp v2.13.',
        'Obtendrás pasos de ejecución técnica, medidas de prevención y alertas de seguridad específicas en tiempo real.'
      ],
      preventiveMeasures: [
        'No usar trampas de botella caseras no selectivas (azúcar + cerveza): matan cientos de polinizadores e insectos autóctonos.',
        'Diferenciar visualmente la avispa asiática (tórax negro aterciopelado, extremos de patas amarillas) del avispón europeo.',
        'Mantener el apiario y las explotaciones limpias de restos de cera o residuos proteicos.'
      ],
      safetyWarnings: [
        'Mantener al menos 5 a 15 metros de distancia de cualquier nido sospechoso sin el equipo adecuado.',
        'El veneno de Vespa velutina puede causar reacciones sistémicas graves o anafilaxia con múltiples picaduras.',
        'Nunca manipular ni disparar a nidos en altura con armas o métodos caseros de fuego.'
      ],
      exactProtocol: null
    };
  }

  const tokenPrefix = steps.map(s => s.id);
  const exactHash = tokenPrefix.join('||');
  const nextOptions = getNextOptionsForPath(path);

  // Filtrar protocolos compatibles en la matriz
  const matchingEntries = Object.entries(matrix).filter(([key]) => {
    const parts = key.split('||');
    if (parts.length < tokenPrefix.length) return false;
    for (let i = 0; i < tokenPrefix.length; i++) {
      if (parts[i] !== tokenPrefix[i]) return false;
    }
    return true;
  });

  const matchingProtocols = matchingEntries.map(([, p]) => p);
  const isComplete = matchingProtocols.length === 1 || nextOptions === null;

  // Si hay coincidencia exacta o única
  if (isComplete && (matrix[exactHash] || matchingProtocols.length === 1)) {
    const exact = matrix[exactHash] || matchingProtocols[0];
    return {
      isComplete: true,
      isEmpty: false,
      activeLevelCount: steps.length,
      selectedSteps: steps,
      summaryTitle: exact.title,
      summaryContext: exact.summary || getContextDescription(steps),
      matchingCount: 1,
      nextOptions: null,
      actions: exact.actions,
      preventiveMeasures: exact.preventiveMeasures,
      safetyWarnings: exact.safetyWarnings,
      exactProtocol: exact
    };
  }

  // Si estamos en un estado intermedio con múltiples protocolos compatibles
  // Sintetizamos las acciones, prevención y advertencias desde los protocolos coincidentes
  const allActions = Array.from(new Set(matchingProtocols.flatMap(p => p.actions)));
  const allPreventive = Array.from(new Set(matchingProtocols.flatMap(p => p.preventiveMeasures)));
  const allWarnings = Array.from(new Set(matchingProtocols.flatMap(p => p.safetyWarnings)));

  // Título compuesto según la selección
  const lastStep = steps[steps.length - 1];
  const summaryTitle = `${steps.map(s => s.label).join(' → ')}`.toUpperCase();
  const summaryContext = getContextDescription(steps);

  // Seleccionar las acciones más relevantes según el contexto
  const prioritizedActions: string[] = [];
  
  // Agregar acciones de los protocolos que coincidan con la rama
  allActions.forEach(act => {
    if (prioritizedActions.length < 6 && !prioritizedActions.includes(act)) {
      prioritizedActions.push(act);
    }
  });

  // Si son pocas, agregar pasos guía específicos del nivel
  if (prioritizedActions.length === 0) {
    prioritizedActions.push(
      `Evaluar las condiciones operativas correspondientes a ${lastStep.label}.`,
      `Consultar las alternativas disponibles en el siguiente nivel de la rueda para precisar la intervención técnica.`,
      `Registrar la fecha y localización del evento para el historial de control de Vespa velutina.`
    );
  }

  const prioritizedPreventive = allPreventive.slice(0, 4);
  if (prioritizedPreventive.length === 0) {
    prioritizedPreventive.push(
      'Utilizar trampas con selectividad física comprobada para liberar avispas autóctonas y polinizadores.',
      'Supervisar el entorno cada 7-10 días durante la fase activa de vuelo.',
      'Mantener registros documentados de capturas y avistamientos.'
    );
  }

  const prioritizedWarnings = allWarnings.slice(0, 4);
  if (prioritizedWarnings.length === 0) {
    prioritizedWarnings.push(
      'No intervenir nidos sin traje de protección específico para velutina (grosor > 3 mm o doble capa).',
      'Mantener distancia de seguridad mínima de 5 a 15 metros en presencia de obreras defensivas.',
      'Disponer de protocolo de primeros auxilios y medicación prescrita en caso de personas alérgicas a picaduras de himenópteros.'
    );
  }

  // Previsualización de acciones que se recomendarán según cada opción del siguiente nivel
  const actionsByNextOption: NextOptionActionPreview[] = [];
  if (nextOptions && nextOptions.options.length > 0) {
    nextOptions.options.forEach(opt => {
      const subPrefix = [...tokenPrefix, opt.id];
      const subMatches = Object.entries(matrix).filter(([key]) => {
        const parts = key.split('||');
        if (parts.length < subPrefix.length) return false;
        for (let i = 0; i < subPrefix.length; i++) {
          if (parts[i] !== subPrefix[i]) return false;
        }
        return true;
      }).map(([, p]) => p);

      if (subMatches.length > 0) {
        const distinctActions: string[] = [];
        for (const p of subMatches) {
          for (const act of p.actions) {
            if (!distinctActions.includes(act)) {
              distinctActions.push(act);
            }
            if (distinctActions.length >= 2) break;
          }
          if (distinctActions.length >= 2) break;
        }

        actionsByNextOption.push({
          optionId: opt.id,
          optionLabel: opt.label,
          optionColor: opt.color,
          matchingCount: subMatches.length,
          sampleProtocolTitle: subMatches[0].title,
          recommendedActions: distinctActions.length > 0 ? distinctActions : subMatches[0].actions.slice(0, 2)
        });
      }
    });
  }

  return {
    isComplete: false,
    isEmpty: false,
    activeLevelCount: steps.length,
    selectedSteps: steps,
    summaryTitle: `GESTIÓN EN: ${summaryTitle}`,
    summaryContext,
    matchingCount: matchingProtocols.length,
    nextOptions,
    actionsByNextOption,
    actions: prioritizedActions,
    preventiveMeasures: prioritizedPreventive,
    safetyWarnings: prioritizedWarnings,
    exactProtocol: null
  };
};
