import { RecommendationMatrix } from './types';

/**
 * Base de datos maestra integral del Volvelle de Vespa velutina.
 * Contiene las 388 combinaciones posibles validadas según el
 * Manual de Gestión Integrada de Vespa velutina V.2.13 (Biovesp.es).
 */
export const STATIC_PROTOCOLS: RecommendationMatrix = {
  "vespa_velutina||apiario||api_f_m||var_high||miel_si||vit_high||api_act_nido||nido_sec_pas||fin_no_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): NIDO SECUNDARIO PASADO - NO INTERVENIR",
    "summary": "En el entorno del colmenar (PRIMAVERA (FEB-MAY)), se ha identificado un nido secundario pasado/abandonado. Estado colmena: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica. / CON MIELADA ACTIVA: Se debe preservar la pureza de la miel sin usar tratamientos químicos residuales en colmena. / COLMENA FUERTE (Cría > 6 cuadros): Gran masa de abejas capaz de defender la piquera y generar relevo generacional.. El nido no contiene avispas vivas.",
    "actions": [
      "Verificar con prismáticos la ausencia total de obreras en la piquera del nido durante las horas de mayor insolación.",
      "NO aplicar insecticidas ni contratar pértigas: el ciclo de este nido ha concluido.",
      "Prioridad sanitaria urgente: Tratar la Varroa de inmediato con formulaciones autorizadas según temporada.",
      "Enfocar los recursos en la protección física de las piqueras de las colmenas vivas."
    ],
    "preventiveMeasures": [
      "Recordar que las reinas fundadoras no hibernan en el nido de origen, sino en oquedades protegidas del suelo o madera.",
      "Registrar la coordenada geográfica del nido para el histórico de presión del apiario."
    ],
    "safetyWarnings": [
      "No escalar árboles con ramas quebradizas para inspeccionar nidos que ya están inactivos.",
      "ALERTA: Si no se trata la Varroa, la colmena colapsará antes de la llegada del invierno."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_si||vit_high||api_act_nido||nido_emb_pre||fin_eliminar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): NEUTRALIZACIÓN DE EMBRIONARIO AÑO",
    "summary": "Localización de embrionario año en el perímetro del apiario durante PRIMAVERA (FEB-MAY). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Sí. Fuerza de cría: > 6 cuadros. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Retirada directa al amanecer con bolsa estanca o spray frío, capturando a la reina fundadora.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_si||vit_high||api_act_nido||nido_pri_pre||fin_eliminar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): NEUTRALIZACIÓN DE PRIMARIO AÑO",
    "summary": "Localización de primario año en el perímetro del apiario durante PRIMAVERA (FEB-MAY). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Sí. Fuerza de cría: > 6 cuadros. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_si||vit_high||api_act_nido||nido_sec_pre||fin_eliminar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): NEUTRALIZACIÓN DE SECUNDARIO AÑO",
    "summary": "Localización de secundario año en el perímetro del apiario durante PRIMAVERA (FEB-MAY). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Sí. Fuerza de cría: > 6 cuadros. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_si||vit_high||api_act_cont||met_tram_fund||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): TRAMPEO FUNDADORAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Trampeo Fundadoras. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Despliegue perimetral de trampas con atrayente azucarado-alcohólico cada 50 metros en el borde del apiario.",
      "Cebo: 50% cerveza negra/rubia, 25% vino blanco, 25% sirope de frutas rojas o grosella.",
      "Revisión semanal estricta para vaciar capturas y renovar el líquido atrayente.",
      "Cierre o retirada obligatoria de las trampas en cuanto finalice el periodo primaveral de fundadoras.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa)."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_si||vit_high||api_act_cont||met_trampeo||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): TRAMPEO CONTROL + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Trampeo Control. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Colocación de trampas selectivas de control en los laterales del colmenar para desviar la atención de las piqueras.",
      "Uso de atrayentes proteicos (pescado macerado, carne) o hidrocarbonados según la fase de cría del nido.",
      "Control exhaustivo de la no afección a polinizadores autóctonos.",
      "Registro del número de capturas por día y trampa.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa)."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_si||vit_high||api_act_cont||met_arpas||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): ARPAS ELÉCTRICAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Arpas Eléctricas. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Instalación de arpas eléctricas entre colmenas con distancia de paso de 1.2 a 1.5 metros.",
      "Ajuste del generador de impulsos a 1.6 - 2.0 kV (suficiente para derribar velutina sin electrocutar abejas).",
      "Colocación de bandeja inferior con 3 cm de agua y unas gotas de jabón biodegradable para ahogar ejemplares aturdidos.",
      "Revisión diaria del cableado para retirar insectos carbonizados que descarguen las baterías.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa)."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "PELIGRO ELÉCTRICO: Desconectar el pastor eléctrico antes de cualquier manipulación o deshierbe.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_si||vit_high||api_act_cont||met_bozales||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): BOZALES + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Bozales. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Colocación de bozales de piquera de alambre galvanizado (malla de 5.5 a 6 mm).",
      "Asegurar que el bozal sobresalga al menos 15-20 cm hacia el frente de la piquera.",
      "Verificar que las abejas entren y salgan volando sin detenerse en el exterior del bozal.",
      "Comprobar que los zánganos puedan salir y no obstruyan la rejilla.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa)."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_si||vit_high||api_act_cont||met_koldo||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): TRAMPAS KOLDO-BAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Trampas Koldo-Bas. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Montaje de trampas Koldo-Bas en los frentes de vuelo principales del colmenar.",
      "Comprobación de la selectividad de salida: las abejas escapan por los conos laterales de 5 mm.",
      "Limpieza y retirada periódica de los ejemplares de velutina acumulados en el depósito superior.",
      "Mantener los cebos frescos para maximizar la tasa de atracción.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa)."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_si||vit_high||api_act_cont||met_vectores||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): VECTORES + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Vectores. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Captura viva de 5 a 10 obreras de velutina vigorosas en el piquero.",
      "Adhesión de elemento de marcaje visible (cinta flúor ligera o polvo de tiza fluorescente) bajo protocolo homologado.",
      "Liberación y seguimiento mediante cronometraje del tiempo de ida y retorno para calcular la distancia al nido.",
      "Triangulación del vector para localizar y destruir el nido madre causante de los ataques.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa)."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_si||vit_high||api_act_cont||met_trashum||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): TRASHUMANCIA + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Trashumancia. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Evaluación del nivel de asedio: si la tasa de captura supera 15 velutinas simultáneas por piquera, planificar traslado.",
      "Cierre nocturno de colmenas con malla de ventilación superior.",
      "Traslado a colmenares de alta montaña (>1.000 m s.n.m.) o áreas con nula presión de velutina.",
      "Alimentación de mantenimiento con jarabe denso a la llegada al nuevo asentamiento.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa)."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_si||vit_low||api_act_nido||nido_sec_pas||fin_no_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): NIDO SECUNDARIO PASADO - NO INTERVENIR",
    "summary": "En el entorno del colmenar (PRIMAVERA (FEB-MAY)), se ha identificado un nido secundario pasado/abandonado. Estado colmena: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica. / CON MIELADA ACTIVA: Se debe preservar la pureza de la miel sin usar tratamientos químicos residuales en colmena. / COLMENA DEBILITADA (Cría < 6 cuadros): Alto riesgo de asedio, robo de reservas y asfixia en piquera.. El nido no contiene avispas vivas.",
    "actions": [
      "Verificar con prismáticos la ausencia total de obreras en la piquera del nido durante las horas de mayor insolación.",
      "NO aplicar insecticidas ni contratar pértigas: el ciclo de este nido ha concluido.",
      "Prioridad sanitaria urgente: Tratar la Varroa de inmediato con formulaciones autorizadas según temporada.",
      "Enfocar los recursos en la protección física de las piqueras de las colmenas vivas."
    ],
    "preventiveMeasures": [
      "Recordar que las reinas fundadoras no hibernan en el nido de origen, sino en oquedades protegidas del suelo o madera.",
      "Registrar la coordenada geográfica del nido para el histórico de presión del apiario."
    ],
    "safetyWarnings": [
      "No escalar árboles con ramas quebradizas para inspeccionar nidos que ya están inactivos.",
      "ALERTA: Si no se trata la Varroa, la colmena colapsará antes de la llegada del invierno."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_si||vit_low||api_act_nido||nido_emb_pre||fin_eliminar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): NEUTRALIZACIÓN DE EMBRIONARIO AÑO",
    "summary": "Localización de embrionario año en el perímetro del apiario durante PRIMAVERA (FEB-MAY). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Sí. Fuerza de cría: < 6 cuadros. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Retirada directa al amanecer con bolsa estanca o spray frío, capturando a la reina fundadora.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_si||vit_low||api_act_nido||nido_pri_pre||fin_eliminar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): NEUTRALIZACIÓN DE PRIMARIO AÑO",
    "summary": "Localización de primario año en el perímetro del apiario durante PRIMAVERA (FEB-MAY). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Sí. Fuerza de cría: < 6 cuadros. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_si||vit_low||api_act_nido||nido_sec_pre||fin_eliminar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): NEUTRALIZACIÓN DE SECUNDARIO AÑO",
    "summary": "Localización de secundario año en el perímetro del apiario durante PRIMAVERA (FEB-MAY). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Sí. Fuerza de cría: < 6 cuadros. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_si||vit_low||api_act_cont||met_tram_fund||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): TRAMPEO FUNDADORAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Trampeo Fundadoras. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Despliegue perimetral de trampas con atrayente azucarado-alcohólico cada 50 metros en el borde del apiario.",
      "Cebo: 50% cerveza negra/rubia, 25% vino blanco, 25% sirope de frutas rojas o grosella.",
      "Revisión semanal estricta para vaciar capturas y renovar el líquido atrayente.",
      "Cierre o retirada obligatoria de las trampas en cuanto finalice el periodo primaveral de fundadoras.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa).",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_si||vit_low||api_act_cont||met_trampeo||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): TRAMPEO CONTROL + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Trampeo Control. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Colocación de trampas selectivas de control en los laterales del colmenar para desviar la atención de las piqueras.",
      "Uso de atrayentes proteicos (pescado macerado, carne) o hidrocarbonados según la fase de cría del nido.",
      "Control exhaustivo de la no afección a polinizadores autóctonos.",
      "Registro del número de capturas por día y trampa.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa).",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_si||vit_low||api_act_cont||met_arpas||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): ARPAS ELÉCTRICAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Arpas Eléctricas. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Instalación de arpas eléctricas entre colmenas con distancia de paso de 1.2 a 1.5 metros.",
      "Ajuste del generador de impulsos a 1.6 - 2.0 kV (suficiente para derribar velutina sin electrocutar abejas).",
      "Colocación de bandeja inferior con 3 cm de agua y unas gotas de jabón biodegradable para ahogar ejemplares aturdidos.",
      "Revisión diaria del cableado para retirar insectos carbonizados que descarguen las baterías.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa).",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "PELIGRO ELÉCTRICO: Desconectar el pastor eléctrico antes de cualquier manipulación o deshierbe.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_si||vit_low||api_act_cont||met_bozales||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): BOZALES + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Bozales. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Colocación de bozales de piquera de alambre galvanizado (malla de 5.5 a 6 mm).",
      "Asegurar que el bozal sobresalga al menos 15-20 cm hacia el frente de la piquera.",
      "Verificar que las abejas entren y salgan volando sin detenerse en el exterior del bozal.",
      "Comprobar que los zánganos puedan salir y no obstruyan la rejilla.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa).",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_si||vit_low||api_act_cont||met_koldo||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): TRAMPAS KOLDO-BAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Trampas Koldo-Bas. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Montaje de trampas Koldo-Bas en los frentes de vuelo principales del colmenar.",
      "Comprobación de la selectividad de salida: las abejas escapan por los conos laterales de 5 mm.",
      "Limpieza y retirada periódica de los ejemplares de velutina acumulados en el depósito superior.",
      "Mantener los cebos frescos para maximizar la tasa de atracción.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa).",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_si||vit_low||api_act_cont||met_vectores||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): VECTORES + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Vectores. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Captura viva de 5 a 10 obreras de velutina vigorosas en el piquero.",
      "Adhesión de elemento de marcaje visible (cinta flúor ligera o polvo de tiza fluorescente) bajo protocolo homologado.",
      "Liberación y seguimiento mediante cronometraje del tiempo de ida y retorno para calcular la distancia al nido.",
      "Triangulación del vector para localizar y destruir el nido madre causante de los ataques.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa).",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_si||vit_low||api_act_cont||met_trashum||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): TRASHUMANCIA + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Trashumancia. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Evaluación del nivel de asedio: si la tasa de captura supera 15 velutinas simultáneas por piquera, planificar traslado.",
      "Cierre nocturno de colmenas con malla de ventilación superior.",
      "Traslado a colmenares de alta montaña (>1.000 m s.n.m.) o áreas con nula presión de velutina.",
      "Alimentación de mantenimiento con jarabe denso a la llegada al nuevo asentamiento.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa).",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_no||vit_high||api_act_nido||nido_sec_pas||fin_no_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): NIDO SECUNDARIO PASADO - NO INTERVENIR",
    "summary": "En el entorno del colmenar (PRIMAVERA (FEB-MAY)), se ha identificado un nido secundario pasado/abandonado. Estado colmena: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica. / SIN MIELADA: Posibilidad de aplicar tratamientos sanitarios autorizados de mayor eficacia y suplementación nutricional. / COLMENA FUERTE (Cría > 6 cuadros): Gran masa de abejas capaz de defender la piquera y generar relevo generacional.. El nido no contiene avispas vivas.",
    "actions": [
      "Verificar con prismáticos la ausencia total de obreras en la piquera del nido durante las horas de mayor insolación.",
      "NO aplicar insecticidas ni contratar pértigas: el ciclo de este nido ha concluido.",
      "Prioridad sanitaria urgente: Tratar la Varroa de inmediato con formulaciones autorizadas según temporada.",
      "Enfocar los recursos en la protección física de las piqueras de las colmenas vivas."
    ],
    "preventiveMeasures": [
      "Recordar que las reinas fundadoras no hibernan en el nido de origen, sino en oquedades protegidas del suelo o madera.",
      "Registrar la coordenada geográfica del nido para el histórico de presión del apiario."
    ],
    "safetyWarnings": [
      "No escalar árboles con ramas quebradizas para inspeccionar nidos que ya están inactivos.",
      "ALERTA: Si no se trata la Varroa, la colmena colapsará antes de la llegada del invierno."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_no||vit_high||api_act_nido||nido_emb_pre||fin_eliminar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): NEUTRALIZACIÓN DE EMBRIONARIO AÑO",
    "summary": "Localización de embrionario año en el perímetro del apiario durante PRIMAVERA (FEB-MAY). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: No. Fuerza de cría: > 6 cuadros. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Retirada directa al amanecer con bolsa estanca o spray frío, capturando a la reina fundadora.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_no||vit_high||api_act_nido||nido_pri_pre||fin_eliminar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): NEUTRALIZACIÓN DE PRIMARIO AÑO",
    "summary": "Localización de primario año en el perímetro del apiario durante PRIMAVERA (FEB-MAY). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: No. Fuerza de cría: > 6 cuadros. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_no||vit_high||api_act_nido||nido_sec_pre||fin_eliminar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): NEUTRALIZACIÓN DE SECUNDARIO AÑO",
    "summary": "Localización de secundario año en el perímetro del apiario durante PRIMAVERA (FEB-MAY). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: No. Fuerza de cría: > 6 cuadros. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_no||vit_high||api_act_cont||met_tram_fund||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): TRAMPEO FUNDADORAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Trampeo Fundadoras. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Despliegue perimetral de trampas con atrayente azucarado-alcohólico cada 50 metros en el borde del apiario.",
      "Cebo: 50% cerveza negra/rubia, 25% vino blanco, 25% sirope de frutas rojas o grosella.",
      "Revisión semanal estricta para vaciar capturas y renovar el líquido atrayente.",
      "Cierre o retirada obligatoria de las trampas en cuanto finalice el periodo primaveral de fundadoras.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_no||vit_high||api_act_cont||met_trampeo||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): TRAMPEO CONTROL + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Trampeo Control. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Colocación de trampas selectivas de control en los laterales del colmenar para desviar la atención de las piqueras.",
      "Uso de atrayentes proteicos (pescado macerado, carne) o hidrocarbonados según la fase de cría del nido.",
      "Control exhaustivo de la no afección a polinizadores autóctonos.",
      "Registro del número de capturas por día y trampa.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_no||vit_high||api_act_cont||met_arpas||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): ARPAS ELÉCTRICAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Arpas Eléctricas. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Instalación de arpas eléctricas entre colmenas con distancia de paso de 1.2 a 1.5 metros.",
      "Ajuste del generador de impulsos a 1.6 - 2.0 kV (suficiente para derribar velutina sin electrocutar abejas).",
      "Colocación de bandeja inferior con 3 cm de agua y unas gotas de jabón biodegradable para ahogar ejemplares aturdidos.",
      "Revisión diaria del cableado para retirar insectos carbonizados que descarguen las baterías.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "PELIGRO ELÉCTRICO: Desconectar el pastor eléctrico antes de cualquier manipulación o deshierbe.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_no||vit_high||api_act_cont||met_bozales||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): BOZALES + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Bozales. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Colocación de bozales de piquera de alambre galvanizado (malla de 5.5 a 6 mm).",
      "Asegurar que el bozal sobresalga al menos 15-20 cm hacia el frente de la piquera.",
      "Verificar que las abejas entren y salgan volando sin detenerse en el exterior del bozal.",
      "Comprobar que los zánganos puedan salir y no obstruyan la rejilla.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_no||vit_high||api_act_cont||met_koldo||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): TRAMPAS KOLDO-BAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Trampas Koldo-Bas. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Montaje de trampas Koldo-Bas en los frentes de vuelo principales del colmenar.",
      "Comprobación de la selectividad de salida: las abejas escapan por los conos laterales de 5 mm.",
      "Limpieza y retirada periódica de los ejemplares de velutina acumulados en el depósito superior.",
      "Mantener los cebos frescos para maximizar la tasa de atracción.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_no||vit_high||api_act_cont||met_vectores||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): VECTORES + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Vectores. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Captura viva de 5 a 10 obreras de velutina vigorosas en el piquero.",
      "Adhesión de elemento de marcaje visible (cinta flúor ligera o polvo de tiza fluorescente) bajo protocolo homologado.",
      "Liberación y seguimiento mediante cronometraje del tiempo de ida y retorno para calcular la distancia al nido.",
      "Triangulación del vector para localizar y destruir el nido madre causante de los ataques.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_no||vit_high||api_act_cont||met_trashum||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): TRASHUMANCIA + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Trashumancia. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Evaluación del nivel de asedio: si la tasa de captura supera 15 velutinas simultáneas por piquera, planificar traslado.",
      "Cierre nocturno de colmenas con malla de ventilación superior.",
      "Traslado a colmenares de alta montaña (>1.000 m s.n.m.) o áreas con nula presión de velutina.",
      "Alimentación de mantenimiento con jarabe denso a la llegada al nuevo asentamiento.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_no||vit_low||api_act_nido||nido_sec_pas||fin_no_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): NIDO SECUNDARIO PASADO - NO INTERVENIR",
    "summary": "En el entorno del colmenar (PRIMAVERA (FEB-MAY)), se ha identificado un nido secundario pasado/abandonado. Estado colmena: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica. / SIN MIELADA: Posibilidad de aplicar tratamientos sanitarios autorizados de mayor eficacia y suplementación nutricional. / COLMENA DEBILITADA (Cría < 6 cuadros): Alto riesgo de asedio, robo de reservas y asfixia en piquera.. El nido no contiene avispas vivas.",
    "actions": [
      "Verificar con prismáticos la ausencia total de obreras en la piquera del nido durante las horas de mayor insolación.",
      "NO aplicar insecticidas ni contratar pértigas: el ciclo de este nido ha concluido.",
      "Prioridad sanitaria urgente: Tratar la Varroa de inmediato con formulaciones autorizadas según temporada.",
      "Enfocar los recursos en la protección física de las piqueras de las colmenas vivas."
    ],
    "preventiveMeasures": [
      "Recordar que las reinas fundadoras no hibernan en el nido de origen, sino en oquedades protegidas del suelo o madera.",
      "Registrar la coordenada geográfica del nido para el histórico de presión del apiario."
    ],
    "safetyWarnings": [
      "No escalar árboles con ramas quebradizas para inspeccionar nidos que ya están inactivos.",
      "ALERTA: Si no se trata la Varroa, la colmena colapsará antes de la llegada del invierno."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_no||vit_low||api_act_nido||nido_emb_pre||fin_eliminar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): NEUTRALIZACIÓN DE EMBRIONARIO AÑO",
    "summary": "Localización de embrionario año en el perímetro del apiario durante PRIMAVERA (FEB-MAY). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: No. Fuerza de cría: < 6 cuadros. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Retirada directa al amanecer con bolsa estanca o spray frío, capturando a la reina fundadora.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_no||vit_low||api_act_nido||nido_pri_pre||fin_eliminar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): NEUTRALIZACIÓN DE PRIMARIO AÑO",
    "summary": "Localización de primario año en el perímetro del apiario durante PRIMAVERA (FEB-MAY). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: No. Fuerza de cría: < 6 cuadros. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_no||vit_low||api_act_nido||nido_sec_pre||fin_eliminar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): NEUTRALIZACIÓN DE SECUNDARIO AÑO",
    "summary": "Localización de secundario año en el perímetro del apiario durante PRIMAVERA (FEB-MAY). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: No. Fuerza de cría: < 6 cuadros. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_no||vit_low||api_act_cont||met_tram_fund||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): TRAMPEO FUNDADORAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Trampeo Fundadoras. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Despliegue perimetral de trampas con atrayente azucarado-alcohólico cada 50 metros en el borde del apiario.",
      "Cebo: 50% cerveza negra/rubia, 25% vino blanco, 25% sirope de frutas rojas o grosella.",
      "Revisión semanal estricta para vaciar capturas y renovar el líquido atrayente.",
      "Cierre o retirada obligatoria de las trampas en cuanto finalice el periodo primaveral de fundadoras.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_no||vit_low||api_act_cont||met_trampeo||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): TRAMPEO CONTROL + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Trampeo Control. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Colocación de trampas selectivas de control en los laterales del colmenar para desviar la atención de las piqueras.",
      "Uso de atrayentes proteicos (pescado macerado, carne) o hidrocarbonados según la fase de cría del nido.",
      "Control exhaustivo de la no afección a polinizadores autóctonos.",
      "Registro del número de capturas por día y trampa.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_no||vit_low||api_act_cont||met_arpas||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): ARPAS ELÉCTRICAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Arpas Eléctricas. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Instalación de arpas eléctricas entre colmenas con distancia de paso de 1.2 a 1.5 metros.",
      "Ajuste del generador de impulsos a 1.6 - 2.0 kV (suficiente para derribar velutina sin electrocutar abejas).",
      "Colocación de bandeja inferior con 3 cm de agua y unas gotas de jabón biodegradable para ahogar ejemplares aturdidos.",
      "Revisión diaria del cableado para retirar insectos carbonizados que descarguen las baterías.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "PELIGRO ELÉCTRICO: Desconectar el pastor eléctrico antes de cualquier manipulación o deshierbe.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_no||vit_low||api_act_cont||met_bozales||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): BOZALES + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Bozales. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Colocación de bozales de piquera de alambre galvanizado (malla de 5.5 a 6 mm).",
      "Asegurar que el bozal sobresalga al menos 15-20 cm hacia el frente de la piquera.",
      "Verificar que las abejas entren y salgan volando sin detenerse en el exterior del bozal.",
      "Comprobar que los zánganos puedan salir y no obstruyan la rejilla.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_no||vit_low||api_act_cont||met_koldo||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): TRAMPAS KOLDO-BAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Trampas Koldo-Bas. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Montaje de trampas Koldo-Bas en los frentes de vuelo principales del colmenar.",
      "Comprobación de la selectividad de salida: las abejas escapan por los conos laterales de 5 mm.",
      "Limpieza y retirada periódica de los ejemplares de velutina acumulados en el depósito superior.",
      "Mantener los cebos frescos para maximizar la tasa de atracción.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_no||vit_low||api_act_cont||met_vectores||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): VECTORES + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Vectores. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Captura viva de 5 a 10 obreras de velutina vigorosas en el piquero.",
      "Adhesión de elemento de marcaje visible (cinta flúor ligera o polvo de tiza fluorescente) bajo protocolo homologado.",
      "Liberación y seguimiento mediante cronometraje del tiempo de ida y retorno para calcular la distancia al nido.",
      "Triangulación del vector para localizar y destruir el nido madre causante de los ataques.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_high||miel_no||vit_low||api_act_cont||met_trashum||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): TRASHUMANCIA + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Trashumancia. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Evaluación del nivel de asedio: si la tasa de captura supera 15 velutinas simultáneas por piquera, planificar traslado.",
      "Cierre nocturno de colmenas con malla de ventilación superior.",
      "Traslado a colmenares de alta montaña (>1.000 m s.n.m.) o áreas con nula presión de velutina.",
      "Alimentación de mantenimiento con jarabe denso a la llegada al nuevo asentamiento.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_si||vit_high||api_act_nido||nido_sec_pas||fin_no_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): NIDO SECUNDARIO PASADO - NO INTERVENIR",
    "summary": "En el entorno del colmenar (PRIMAVERA (FEB-MAY)), se ha identificado un nido secundario pasado/abandonado. Estado colmena: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa. / CON MIELADA ACTIVA: Se debe preservar la pureza de la miel sin usar tratamientos químicos residuales en colmena. / COLMENA FUERTE (Cría > 6 cuadros): Gran masa de abejas capaz de defender la piquera y generar relevo generacional.. El nido no contiene avispas vivas.",
    "actions": [
      "Verificar con prismáticos la ausencia total de obreras en la piquera del nido durante las horas de mayor insolación.",
      "NO aplicar insecticidas ni contratar pértigas: el ciclo de este nido ha concluido.",
      "Mantener el monitoreo ordinario del colmenar.",
      "Enfocar los recursos en la protección física de las piqueras de las colmenas vivas."
    ],
    "preventiveMeasures": [
      "Recordar que las reinas fundadoras no hibernan en el nido de origen, sino en oquedades protegidas del suelo o madera.",
      "Registrar la coordenada geográfica del nido para el histórico de presión del apiario."
    ],
    "safetyWarnings": [
      "No escalar árboles con ramas quebradizas para inspeccionar nidos que ya están inactivos.",
      "Mantener precauciones estándar de manejo apícola."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_si||vit_high||api_act_nido||nido_emb_pre||fin_eliminar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): NEUTRALIZACIÓN DE EMBRIONARIO AÑO",
    "summary": "Localización de embrionario año en el perímetro del apiario durante PRIMAVERA (FEB-MAY). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Sí. Fuerza de cría: > 6 cuadros. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Retirada directa al amanecer con bolsa estanca o spray frío, capturando a la reina fundadora.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_si||vit_high||api_act_nido||nido_pri_pre||fin_eliminar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): NEUTRALIZACIÓN DE PRIMARIO AÑO",
    "summary": "Localización de primario año en el perímetro del apiario durante PRIMAVERA (FEB-MAY). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Sí. Fuerza de cría: > 6 cuadros. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_si||vit_high||api_act_nido||nido_sec_pre||fin_eliminar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): NEUTRALIZACIÓN DE SECUNDARIO AÑO",
    "summary": "Localización de secundario año en el perímetro del apiario durante PRIMAVERA (FEB-MAY). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Sí. Fuerza de cría: > 6 cuadros. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_si||vit_high||api_act_cont||met_tram_fund||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): TRAMPEO FUNDADORAS",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Trampeo Fundadoras. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Despliegue perimetral de trampas con atrayente azucarado-alcohólico cada 50 metros en el borde del apiario.",
      "Cebo: 50% cerveza negra/rubia, 25% vino blanco, 25% sirope de frutas rojas o grosella.",
      "Revisión semanal estricta para vaciar capturas y renovar el líquido atrayente.",
      "Cierre o retirada obligatoria de las trampas en cuanto finalice el periodo primaveral de fundadoras."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_si||vit_high||api_act_cont||met_trampeo||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): TRAMPEO CONTROL",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Trampeo Control. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Colocación de trampas selectivas de control en los laterales del colmenar para desviar la atención de las piqueras.",
      "Uso de atrayentes proteicos (pescado macerado, carne) o hidrocarbonados según la fase de cría del nido.",
      "Control exhaustivo de la no afección a polinizadores autóctonos.",
      "Registro del número de capturas por día y trampa."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_si||vit_high||api_act_cont||met_arpas||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): ARPAS ELÉCTRICAS",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Arpas Eléctricas. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Instalación de arpas eléctricas entre colmenas con distancia de paso de 1.2 a 1.5 metros.",
      "Ajuste del generador de impulsos a 1.6 - 2.0 kV (suficiente para derribar velutina sin electrocutar abejas).",
      "Colocación de bandeja inferior con 3 cm de agua y unas gotas de jabón biodegradable para ahogar ejemplares aturdidos.",
      "Revisión diaria del cableado para retirar insectos carbonizados que descarguen las baterías."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "PELIGRO ELÉCTRICO: Desconectar el pastor eléctrico antes de cualquier manipulación o deshierbe.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_si||vit_high||api_act_cont||met_bozales||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): BOZALES",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Bozales. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Colocación de bozales de piquera de alambre galvanizado (malla de 5.5 a 6 mm).",
      "Asegurar que el bozal sobresalga al menos 15-20 cm hacia el frente de la piquera.",
      "Verificar que las abejas entren y salgan volando sin detenerse en el exterior del bozal.",
      "Comprobar que los zánganos puedan salir y no obstruyan la rejilla."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_si||vit_high||api_act_cont||met_koldo||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): TRAMPAS KOLDO-BAS",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Trampas Koldo-Bas. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Montaje de trampas Koldo-Bas en los frentes de vuelo principales del colmenar.",
      "Comprobación de la selectividad de salida: las abejas escapan por los conos laterales de 5 mm.",
      "Limpieza y retirada periódica de los ejemplares de velutina acumulados en el depósito superior.",
      "Mantener los cebos frescos para maximizar la tasa de atracción."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_si||vit_high||api_act_cont||met_vectores||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): VECTORES",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Vectores. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Captura viva de 5 a 10 obreras de velutina vigorosas en el piquero.",
      "Adhesión de elemento de marcaje visible (cinta flúor ligera o polvo de tiza fluorescente) bajo protocolo homologado.",
      "Liberación y seguimiento mediante cronometraje del tiempo de ida y retorno para calcular la distancia al nido.",
      "Triangulación del vector para localizar y destruir el nido madre causante de los ataques."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_si||vit_high||api_act_cont||met_trashum||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): TRASHUMANCIA",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Trashumancia. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Evaluación del nivel de asedio: si la tasa de captura supera 15 velutinas simultáneas por piquera, planificar traslado.",
      "Cierre nocturno de colmenas con malla de ventilación superior.",
      "Traslado a colmenares de alta montaña (>1.000 m s.n.m.) o áreas con nula presión de velutina.",
      "Alimentación de mantenimiento con jarabe denso a la llegada al nuevo asentamiento."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_si||vit_low||api_act_nido||nido_sec_pas||fin_no_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): NIDO SECUNDARIO PASADO - NO INTERVENIR",
    "summary": "En el entorno del colmenar (PRIMAVERA (FEB-MAY)), se ha identificado un nido secundario pasado/abandonado. Estado colmena: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa. / CON MIELADA ACTIVA: Se debe preservar la pureza de la miel sin usar tratamientos químicos residuales en colmena. / COLMENA DEBILITADA (Cría < 6 cuadros): Alto riesgo de asedio, robo de reservas y asfixia en piquera.. El nido no contiene avispas vivas.",
    "actions": [
      "Verificar con prismáticos la ausencia total de obreras en la piquera del nido durante las horas de mayor insolación.",
      "NO aplicar insecticidas ni contratar pértigas: el ciclo de este nido ha concluido.",
      "Mantener el monitoreo ordinario del colmenar.",
      "Enfocar los recursos en la protección física de las piqueras de las colmenas vivas."
    ],
    "preventiveMeasures": [
      "Recordar que las reinas fundadoras no hibernan en el nido de origen, sino en oquedades protegidas del suelo o madera.",
      "Registrar la coordenada geográfica del nido para el histórico de presión del apiario."
    ],
    "safetyWarnings": [
      "No escalar árboles con ramas quebradizas para inspeccionar nidos que ya están inactivos.",
      "Mantener precauciones estándar de manejo apícola."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_si||vit_low||api_act_nido||nido_emb_pre||fin_eliminar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): NEUTRALIZACIÓN DE EMBRIONARIO AÑO",
    "summary": "Localización de embrionario año en el perímetro del apiario durante PRIMAVERA (FEB-MAY). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Sí. Fuerza de cría: < 6 cuadros. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Retirada directa al amanecer con bolsa estanca o spray frío, capturando a la reina fundadora.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_si||vit_low||api_act_nido||nido_pri_pre||fin_eliminar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): NEUTRALIZACIÓN DE PRIMARIO AÑO",
    "summary": "Localización de primario año en el perímetro del apiario durante PRIMAVERA (FEB-MAY). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Sí. Fuerza de cría: < 6 cuadros. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_si||vit_low||api_act_nido||nido_sec_pre||fin_eliminar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): NEUTRALIZACIÓN DE SECUNDARIO AÑO",
    "summary": "Localización de secundario año en el perímetro del apiario durante PRIMAVERA (FEB-MAY). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Sí. Fuerza de cría: < 6 cuadros. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_si||vit_low||api_act_cont||met_tram_fund||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): TRAMPEO FUNDADORAS",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Trampeo Fundadoras. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Despliegue perimetral de trampas con atrayente azucarado-alcohólico cada 50 metros en el borde del apiario.",
      "Cebo: 50% cerveza negra/rubia, 25% vino blanco, 25% sirope de frutas rojas o grosella.",
      "Revisión semanal estricta para vaciar capturas y renovar el líquido atrayente.",
      "Cierre o retirada obligatoria de las trampas en cuanto finalice el periodo primaveral de fundadoras.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_si||vit_low||api_act_cont||met_trampeo||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): TRAMPEO CONTROL",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Trampeo Control. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Colocación de trampas selectivas de control en los laterales del colmenar para desviar la atención de las piqueras.",
      "Uso de atrayentes proteicos (pescado macerado, carne) o hidrocarbonados según la fase de cría del nido.",
      "Control exhaustivo de la no afección a polinizadores autóctonos.",
      "Registro del número de capturas por día y trampa.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_si||vit_low||api_act_cont||met_arpas||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): ARPAS ELÉCTRICAS",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Arpas Eléctricas. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Instalación de arpas eléctricas entre colmenas con distancia de paso de 1.2 a 1.5 metros.",
      "Ajuste del generador de impulsos a 1.6 - 2.0 kV (suficiente para derribar velutina sin electrocutar abejas).",
      "Colocación de bandeja inferior con 3 cm de agua y unas gotas de jabón biodegradable para ahogar ejemplares aturdidos.",
      "Revisión diaria del cableado para retirar insectos carbonizados que descarguen las baterías.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "PELIGRO ELÉCTRICO: Desconectar el pastor eléctrico antes de cualquier manipulación o deshierbe.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_si||vit_low||api_act_cont||met_bozales||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): BOZALES",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Bozales. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Colocación de bozales de piquera de alambre galvanizado (malla de 5.5 a 6 mm).",
      "Asegurar que el bozal sobresalga al menos 15-20 cm hacia el frente de la piquera.",
      "Verificar que las abejas entren y salgan volando sin detenerse en el exterior del bozal.",
      "Comprobar que los zánganos puedan salir y no obstruyan la rejilla.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_si||vit_low||api_act_cont||met_koldo||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): TRAMPAS KOLDO-BAS",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Trampas Koldo-Bas. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Montaje de trampas Koldo-Bas en los frentes de vuelo principales del colmenar.",
      "Comprobación de la selectividad de salida: las abejas escapan por los conos laterales de 5 mm.",
      "Limpieza y retirada periódica de los ejemplares de velutina acumulados en el depósito superior.",
      "Mantener los cebos frescos para maximizar la tasa de atracción.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_si||vit_low||api_act_cont||met_vectores||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): VECTORES",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Vectores. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Captura viva de 5 a 10 obreras de velutina vigorosas en el piquero.",
      "Adhesión de elemento de marcaje visible (cinta flúor ligera o polvo de tiza fluorescente) bajo protocolo homologado.",
      "Liberación y seguimiento mediante cronometraje del tiempo de ida y retorno para calcular la distancia al nido.",
      "Triangulación del vector para localizar y destruir el nido madre causante de los ataques.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_si||vit_low||api_act_cont||met_trashum||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): TRASHUMANCIA",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Trashumancia. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Evaluación del nivel de asedio: si la tasa de captura supera 15 velutinas simultáneas por piquera, planificar traslado.",
      "Cierre nocturno de colmenas con malla de ventilación superior.",
      "Traslado a colmenares de alta montaña (>1.000 m s.n.m.) o áreas con nula presión de velutina.",
      "Alimentación de mantenimiento con jarabe denso a la llegada al nuevo asentamiento.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_no||vit_high||api_act_nido||nido_sec_pas||fin_no_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): NIDO SECUNDARIO PASADO - NO INTERVENIR",
    "summary": "En el entorno del colmenar (PRIMAVERA (FEB-MAY)), se ha identificado un nido secundario pasado/abandonado. Estado colmena: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa. / SIN MIELADA: Posibilidad de aplicar tratamientos sanitarios autorizados de mayor eficacia y suplementación nutricional. / COLMENA FUERTE (Cría > 6 cuadros): Gran masa de abejas capaz de defender la piquera y generar relevo generacional.. El nido no contiene avispas vivas.",
    "actions": [
      "Verificar con prismáticos la ausencia total de obreras en la piquera del nido durante las horas de mayor insolación.",
      "NO aplicar insecticidas ni contratar pértigas: el ciclo de este nido ha concluido.",
      "Mantener el monitoreo ordinario del colmenar.",
      "Enfocar los recursos en la protección física de las piqueras de las colmenas vivas."
    ],
    "preventiveMeasures": [
      "Recordar que las reinas fundadoras no hibernan en el nido de origen, sino en oquedades protegidas del suelo o madera.",
      "Registrar la coordenada geográfica del nido para el histórico de presión del apiario."
    ],
    "safetyWarnings": [
      "No escalar árboles con ramas quebradizas para inspeccionar nidos que ya están inactivos.",
      "Mantener precauciones estándar de manejo apícola."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_no||vit_high||api_act_nido||nido_emb_pre||fin_eliminar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): NEUTRALIZACIÓN DE EMBRIONARIO AÑO",
    "summary": "Localización de embrionario año en el perímetro del apiario durante PRIMAVERA (FEB-MAY). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: No. Fuerza de cría: > 6 cuadros. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Retirada directa al amanecer con bolsa estanca o spray frío, capturando a la reina fundadora.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_no||vit_high||api_act_nido||nido_pri_pre||fin_eliminar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): NEUTRALIZACIÓN DE PRIMARIO AÑO",
    "summary": "Localización de primario año en el perímetro del apiario durante PRIMAVERA (FEB-MAY). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: No. Fuerza de cría: > 6 cuadros. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_no||vit_high||api_act_nido||nido_sec_pre||fin_eliminar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): NEUTRALIZACIÓN DE SECUNDARIO AÑO",
    "summary": "Localización de secundario año en el perímetro del apiario durante PRIMAVERA (FEB-MAY). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: No. Fuerza de cría: > 6 cuadros. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_no||vit_high||api_act_cont||met_tram_fund||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): TRAMPEO FUNDADORAS",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Trampeo Fundadoras. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Despliegue perimetral de trampas con atrayente azucarado-alcohólico cada 50 metros en el borde del apiario.",
      "Cebo: 50% cerveza negra/rubia, 25% vino blanco, 25% sirope de frutas rojas o grosella.",
      "Revisión semanal estricta para vaciar capturas y renovar el líquido atrayente.",
      "Cierre o retirada obligatoria de las trampas en cuanto finalice el periodo primaveral de fundadoras."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_no||vit_high||api_act_cont||met_trampeo||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): TRAMPEO CONTROL",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Trampeo Control. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Colocación de trampas selectivas de control en los laterales del colmenar para desviar la atención de las piqueras.",
      "Uso de atrayentes proteicos (pescado macerado, carne) o hidrocarbonados según la fase de cría del nido.",
      "Control exhaustivo de la no afección a polinizadores autóctonos.",
      "Registro del número de capturas por día y trampa."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_no||vit_high||api_act_cont||met_arpas||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): ARPAS ELÉCTRICAS",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Arpas Eléctricas. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Instalación de arpas eléctricas entre colmenas con distancia de paso de 1.2 a 1.5 metros.",
      "Ajuste del generador de impulsos a 1.6 - 2.0 kV (suficiente para derribar velutina sin electrocutar abejas).",
      "Colocación de bandeja inferior con 3 cm de agua y unas gotas de jabón biodegradable para ahogar ejemplares aturdidos.",
      "Revisión diaria del cableado para retirar insectos carbonizados que descarguen las baterías."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "PELIGRO ELÉCTRICO: Desconectar el pastor eléctrico antes de cualquier manipulación o deshierbe.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_no||vit_high||api_act_cont||met_bozales||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): BOZALES",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Bozales. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Colocación de bozales de piquera de alambre galvanizado (malla de 5.5 a 6 mm).",
      "Asegurar que el bozal sobresalga al menos 15-20 cm hacia el frente de la piquera.",
      "Verificar que las abejas entren y salgan volando sin detenerse en el exterior del bozal.",
      "Comprobar que los zánganos puedan salir y no obstruyan la rejilla."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_no||vit_high||api_act_cont||met_koldo||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): TRAMPAS KOLDO-BAS",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Trampas Koldo-Bas. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Montaje de trampas Koldo-Bas en los frentes de vuelo principales del colmenar.",
      "Comprobación de la selectividad de salida: las abejas escapan por los conos laterales de 5 mm.",
      "Limpieza y retirada periódica de los ejemplares de velutina acumulados en el depósito superior.",
      "Mantener los cebos frescos para maximizar la tasa de atracción."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_no||vit_high||api_act_cont||met_vectores||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): VECTORES",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Vectores. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Captura viva de 5 a 10 obreras de velutina vigorosas en el piquero.",
      "Adhesión de elemento de marcaje visible (cinta flúor ligera o polvo de tiza fluorescente) bajo protocolo homologado.",
      "Liberación y seguimiento mediante cronometraje del tiempo de ida y retorno para calcular la distancia al nido.",
      "Triangulación del vector para localizar y destruir el nido madre causante de los ataques."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_no||vit_high||api_act_cont||met_trashum||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): TRASHUMANCIA",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Trashumancia. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Evaluación del nivel de asedio: si la tasa de captura supera 15 velutinas simultáneas por piquera, planificar traslado.",
      "Cierre nocturno de colmenas con malla de ventilación superior.",
      "Traslado a colmenares de alta montaña (>1.000 m s.n.m.) o áreas con nula presión de velutina.",
      "Alimentación de mantenimiento con jarabe denso a la llegada al nuevo asentamiento."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_no||vit_low||api_act_nido||nido_sec_pas||fin_no_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): NIDO SECUNDARIO PASADO - NO INTERVENIR",
    "summary": "En el entorno del colmenar (PRIMAVERA (FEB-MAY)), se ha identificado un nido secundario pasado/abandonado. Estado colmena: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa. / SIN MIELADA: Posibilidad de aplicar tratamientos sanitarios autorizados de mayor eficacia y suplementación nutricional. / COLMENA DEBILITADA (Cría < 6 cuadros): Alto riesgo de asedio, robo de reservas y asfixia en piquera.. El nido no contiene avispas vivas.",
    "actions": [
      "Verificar con prismáticos la ausencia total de obreras en la piquera del nido durante las horas de mayor insolación.",
      "NO aplicar insecticidas ni contratar pértigas: el ciclo de este nido ha concluido.",
      "Mantener el monitoreo ordinario del colmenar.",
      "Enfocar los recursos en la protección física de las piqueras de las colmenas vivas."
    ],
    "preventiveMeasures": [
      "Recordar que las reinas fundadoras no hibernan en el nido de origen, sino en oquedades protegidas del suelo o madera.",
      "Registrar la coordenada geográfica del nido para el histórico de presión del apiario."
    ],
    "safetyWarnings": [
      "No escalar árboles con ramas quebradizas para inspeccionar nidos que ya están inactivos.",
      "Mantener precauciones estándar de manejo apícola."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_no||vit_low||api_act_nido||nido_emb_pre||fin_eliminar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): NEUTRALIZACIÓN DE EMBRIONARIO AÑO",
    "summary": "Localización de embrionario año en el perímetro del apiario durante PRIMAVERA (FEB-MAY). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: No. Fuerza de cría: < 6 cuadros. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Retirada directa al amanecer con bolsa estanca o spray frío, capturando a la reina fundadora.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_no||vit_low||api_act_nido||nido_pri_pre||fin_eliminar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): NEUTRALIZACIÓN DE PRIMARIO AÑO",
    "summary": "Localización de primario año en el perímetro del apiario durante PRIMAVERA (FEB-MAY). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: No. Fuerza de cría: < 6 cuadros. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_no||vit_low||api_act_nido||nido_sec_pre||fin_eliminar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): NEUTRALIZACIÓN DE SECUNDARIO AÑO",
    "summary": "Localización de secundario año en el perímetro del apiario durante PRIMAVERA (FEB-MAY). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: No. Fuerza de cría: < 6 cuadros. Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_no||vit_low||api_act_cont||met_tram_fund||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): TRAMPEO FUNDADORAS",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Trampeo Fundadoras. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Despliegue perimetral de trampas con atrayente azucarado-alcohólico cada 50 metros en el borde del apiario.",
      "Cebo: 50% cerveza negra/rubia, 25% vino blanco, 25% sirope de frutas rojas o grosella.",
      "Revisión semanal estricta para vaciar capturas y renovar el líquido atrayente.",
      "Cierre o retirada obligatoria de las trampas en cuanto finalice el periodo primaveral de fundadoras.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_no||vit_low||api_act_cont||met_trampeo||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): TRAMPEO CONTROL",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Trampeo Control. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Colocación de trampas selectivas de control en los laterales del colmenar para desviar la atención de las piqueras.",
      "Uso de atrayentes proteicos (pescado macerado, carne) o hidrocarbonados según la fase de cría del nido.",
      "Control exhaustivo de la no afección a polinizadores autóctonos.",
      "Registro del número de capturas por día y trampa.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_no||vit_low||api_act_cont||met_arpas||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): ARPAS ELÉCTRICAS",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Arpas Eléctricas. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Instalación de arpas eléctricas entre colmenas con distancia de paso de 1.2 a 1.5 metros.",
      "Ajuste del generador de impulsos a 1.6 - 2.0 kV (suficiente para derribar velutina sin electrocutar abejas).",
      "Colocación de bandeja inferior con 3 cm de agua y unas gotas de jabón biodegradable para ahogar ejemplares aturdidos.",
      "Revisión diaria del cableado para retirar insectos carbonizados que descarguen las baterías.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "PELIGRO ELÉCTRICO: Desconectar el pastor eléctrico antes de cualquier manipulación o deshierbe.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_no||vit_low||api_act_cont||met_bozales||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): BOZALES",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Bozales. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Colocación de bozales de piquera de alambre galvanizado (malla de 5.5 a 6 mm).",
      "Asegurar que el bozal sobresalga al menos 15-20 cm hacia el frente de la piquera.",
      "Verificar que las abejas entren y salgan volando sin detenerse en el exterior del bozal.",
      "Comprobar que los zánganos puedan salir y no obstruyan la rejilla.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_no||vit_low||api_act_cont||met_koldo||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): TRAMPAS KOLDO-BAS",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Trampas Koldo-Bas. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Montaje de trampas Koldo-Bas en los frentes de vuelo principales del colmenar.",
      "Comprobación de la selectividad de salida: las abejas escapan por los conos laterales de 5 mm.",
      "Limpieza y retirada periódica de los ejemplares de velutina acumulados en el depósito superior.",
      "Mantener los cebos frescos para maximizar la tasa de atracción.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_no||vit_low||api_act_cont||met_vectores||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): VECTORES",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Vectores. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Captura viva de 5 a 10 obreras de velutina vigorosas en el piquero.",
      "Adhesión de elemento de marcaje visible (cinta flúor ligera o polvo de tiza fluorescente) bajo protocolo homologado.",
      "Liberación y seguimiento mediante cronometraje del tiempo de ida y retorno para calcular la distancia al nido.",
      "Triangulación del vector para localizar y destruir el nido madre causante de los ataques.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_f_m||var_low||miel_no||vit_low||api_act_cont||met_trashum||fin_actuar": {
    "title": "APIARIO (PRIMAVERA (FEB-MAY)): TRASHUMANCIA",
    "summary": "Protocolo integral en colmenar durante PRIMAVERA (FEB-MAY). Método principal: Trashumancia. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de reinas fundadoras y nidos embrionarios. Época idónea para trampeo selectivo de reinas fecundadas antes de que inicien la puesta obrera.",
    "actions": [
      "Evaluación del nivel de asedio: si la tasa de captura supera 15 velutinas simultáneas por piquera, planificar traslado.",
      "Cierre nocturno de colmenas con malla de ventilación superior.",
      "Traslado a colmenares de alta montaña (>1.000 m s.n.m.) o áreas con nula presión de velutina.",
      "Alimentación de mantenimiento con jarabe denso a la llegada al nuevo asentamiento.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_si||vit_high||api_act_nido||nido_sec_pas||fin_no_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): NIDO SECUNDARIO PASADO - NO INTERVENIR",
    "summary": "En el entorno del colmenar (VERANO (MAY-SEP)), se ha identificado un nido secundario pasado/abandonado. Estado colmena: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica. / CON MIELADA ACTIVA: Se debe preservar la pureza de la miel sin usar tratamientos químicos residuales en colmena. / COLMENA FUERTE (Cría > 6 cuadros): Gran masa de abejas capaz de defender la piquera y generar relevo generacional.. El nido no contiene avispas vivas.",
    "actions": [
      "Verificar con prismáticos la ausencia total de obreras en la piquera del nido durante las horas de mayor insolación.",
      "NO aplicar insecticidas ni contratar pértigas: el ciclo de este nido ha concluido.",
      "Prioridad sanitaria urgente: Tratar la Varroa de inmediato con formulaciones autorizadas según temporada.",
      "Enfocar los recursos en la protección física de las piqueras de las colmenas vivas."
    ],
    "preventiveMeasures": [
      "Recordar que las reinas fundadoras no hibernan en el nido de origen, sino en oquedades protegidas del suelo o madera.",
      "Registrar la coordenada geográfica del nido para el histórico de presión del apiario."
    ],
    "safetyWarnings": [
      "No escalar árboles con ramas quebradizas para inspeccionar nidos que ya están inactivos.",
      "ALERTA: Si no se trata la Varroa, la colmena colapsará antes de la llegada del invierno."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_si||vit_high||api_act_nido||nido_emb_pre||fin_eliminar": {
    "title": "APIARIO (VERANO (MAY-SEP)): NEUTRALIZACIÓN DE EMBRIONARIO AÑO",
    "summary": "Localización de embrionario año en el perímetro del apiario durante VERANO (MAY-SEP). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Sí. Fuerza de cría: > 6 cuadros. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Retirada directa al amanecer con bolsa estanca o spray frío, capturando a la reina fundadora.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_si||vit_high||api_act_nido||nido_pri_pre||fin_eliminar": {
    "title": "APIARIO (VERANO (MAY-SEP)): NEUTRALIZACIÓN DE PRIMARIO AÑO",
    "summary": "Localización de primario año en el perímetro del apiario durante VERANO (MAY-SEP). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Sí. Fuerza de cría: > 6 cuadros. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_si||vit_high||api_act_nido||nido_sec_pre||fin_eliminar": {
    "title": "APIARIO (VERANO (MAY-SEP)): NEUTRALIZACIÓN DE SECUNDARIO AÑO",
    "summary": "Localización de secundario año en el perímetro del apiario durante VERANO (MAY-SEP). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Sí. Fuerza de cría: > 6 cuadros. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_si||vit_high||api_act_cont||met_tram_fund||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): TRAMPEO FUNDADORAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Trampeo Fundadoras. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Despliegue perimetral de trampas con atrayente azucarado-alcohólico cada 50 metros en el borde del apiario.",
      "Cebo: 50% cerveza negra/rubia, 25% vino blanco, 25% sirope de frutas rojas o grosella.",
      "Revisión semanal estricta para vaciar capturas y renovar el líquido atrayente.",
      "Cierre o retirada obligatoria de las trampas en cuanto finalice el periodo primaveral de fundadoras.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa)."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_si||vit_high||api_act_cont||met_trampeo||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): TRAMPEO CONTROL + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Trampeo Control. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Colocación de trampas selectivas de control en los laterales del colmenar para desviar la atención de las piqueras.",
      "Uso de atrayentes proteicos (pescado macerado, carne) o hidrocarbonados según la fase de cría del nido.",
      "Control exhaustivo de la no afección a polinizadores autóctonos.",
      "Registro del número de capturas por día y trampa.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa)."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_si||vit_high||api_act_cont||met_arpas||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): ARPAS ELÉCTRICAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Arpas Eléctricas. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Instalación de arpas eléctricas entre colmenas con distancia de paso de 1.2 a 1.5 metros.",
      "Ajuste del generador de impulsos a 1.6 - 2.0 kV (suficiente para derribar velutina sin electrocutar abejas).",
      "Colocación de bandeja inferior con 3 cm de agua y unas gotas de jabón biodegradable para ahogar ejemplares aturdidos.",
      "Revisión diaria del cableado para retirar insectos carbonizados que descarguen las baterías.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa)."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "PELIGRO ELÉCTRICO: Desconectar el pastor eléctrico antes de cualquier manipulación o deshierbe.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_si||vit_high||api_act_cont||met_bozales||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): BOZALES + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Bozales. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Colocación de bozales de piquera de alambre galvanizado (malla de 5.5 a 6 mm).",
      "Asegurar que el bozal sobresalga al menos 15-20 cm hacia el frente de la piquera.",
      "Verificar que las abejas entren y salgan volando sin detenerse en el exterior del bozal.",
      "Comprobar que los zánganos puedan salir y no obstruyan la rejilla.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa)."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_si||vit_high||api_act_cont||met_koldo||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): TRAMPAS KOLDO-BAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Trampas Koldo-Bas. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Montaje de trampas Koldo-Bas en los frentes de vuelo principales del colmenar.",
      "Comprobación de la selectividad de salida: las abejas escapan por los conos laterales de 5 mm.",
      "Limpieza y retirada periódica de los ejemplares de velutina acumulados en el depósito superior.",
      "Mantener los cebos frescos para maximizar la tasa de atracción.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa)."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_si||vit_high||api_act_cont||met_vectores||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): VECTORES + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Vectores. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Captura viva de 5 a 10 obreras de velutina vigorosas en el piquero.",
      "Adhesión de elemento de marcaje visible (cinta flúor ligera o polvo de tiza fluorescente) bajo protocolo homologado.",
      "Liberación y seguimiento mediante cronometraje del tiempo de ida y retorno para calcular la distancia al nido.",
      "Triangulación del vector para localizar y destruir el nido madre causante de los ataques.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa)."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_si||vit_high||api_act_cont||met_trashum||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): TRASHUMANCIA + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Trashumancia. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Evaluación del nivel de asedio: si la tasa de captura supera 15 velutinas simultáneas por piquera, planificar traslado.",
      "Cierre nocturno de colmenas con malla de ventilación superior.",
      "Traslado a colmenares de alta montaña (>1.000 m s.n.m.) o áreas con nula presión de velutina.",
      "Alimentación de mantenimiento con jarabe denso a la llegada al nuevo asentamiento.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa)."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_si||vit_low||api_act_nido||nido_sec_pas||fin_no_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): NIDO SECUNDARIO PASADO - NO INTERVENIR",
    "summary": "En el entorno del colmenar (VERANO (MAY-SEP)), se ha identificado un nido secundario pasado/abandonado. Estado colmena: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica. / CON MIELADA ACTIVA: Se debe preservar la pureza de la miel sin usar tratamientos químicos residuales en colmena. / COLMENA DEBILITADA (Cría < 6 cuadros): Alto riesgo de asedio, robo de reservas y asfixia en piquera.. El nido no contiene avispas vivas.",
    "actions": [
      "Verificar con prismáticos la ausencia total de obreras en la piquera del nido durante las horas de mayor insolación.",
      "NO aplicar insecticidas ni contratar pértigas: el ciclo de este nido ha concluido.",
      "Prioridad sanitaria urgente: Tratar la Varroa de inmediato con formulaciones autorizadas según temporada.",
      "Enfocar los recursos en la protección física de las piqueras de las colmenas vivas."
    ],
    "preventiveMeasures": [
      "Recordar que las reinas fundadoras no hibernan en el nido de origen, sino en oquedades protegidas del suelo o madera.",
      "Registrar la coordenada geográfica del nido para el histórico de presión del apiario."
    ],
    "safetyWarnings": [
      "No escalar árboles con ramas quebradizas para inspeccionar nidos que ya están inactivos.",
      "ALERTA: Si no se trata la Varroa, la colmena colapsará antes de la llegada del invierno."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_si||vit_low||api_act_nido||nido_emb_pre||fin_eliminar": {
    "title": "APIARIO (VERANO (MAY-SEP)): NEUTRALIZACIÓN DE EMBRIONARIO AÑO",
    "summary": "Localización de embrionario año en el perímetro del apiario durante VERANO (MAY-SEP). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Sí. Fuerza de cría: < 6 cuadros. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Retirada directa al amanecer con bolsa estanca o spray frío, capturando a la reina fundadora.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_si||vit_low||api_act_nido||nido_pri_pre||fin_eliminar": {
    "title": "APIARIO (VERANO (MAY-SEP)): NEUTRALIZACIÓN DE PRIMARIO AÑO",
    "summary": "Localización de primario año en el perímetro del apiario durante VERANO (MAY-SEP). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Sí. Fuerza de cría: < 6 cuadros. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_si||vit_low||api_act_nido||nido_sec_pre||fin_eliminar": {
    "title": "APIARIO (VERANO (MAY-SEP)): NEUTRALIZACIÓN DE SECUNDARIO AÑO",
    "summary": "Localización de secundario año en el perímetro del apiario durante VERANO (MAY-SEP). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Sí. Fuerza de cría: < 6 cuadros. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_si||vit_low||api_act_cont||met_tram_fund||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): TRAMPEO FUNDADORAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Trampeo Fundadoras. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Despliegue perimetral de trampas con atrayente azucarado-alcohólico cada 50 metros en el borde del apiario.",
      "Cebo: 50% cerveza negra/rubia, 25% vino blanco, 25% sirope de frutas rojas o grosella.",
      "Revisión semanal estricta para vaciar capturas y renovar el líquido atrayente.",
      "Cierre o retirada obligatoria de las trampas en cuanto finalice el periodo primaveral de fundadoras.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa).",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_si||vit_low||api_act_cont||met_trampeo||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): TRAMPEO CONTROL + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Trampeo Control. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Colocación de trampas selectivas de control en los laterales del colmenar para desviar la atención de las piqueras.",
      "Uso de atrayentes proteicos (pescado macerado, carne) o hidrocarbonados según la fase de cría del nido.",
      "Control exhaustivo de la no afección a polinizadores autóctonos.",
      "Registro del número de capturas por día y trampa.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa).",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_si||vit_low||api_act_cont||met_arpas||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): ARPAS ELÉCTRICAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Arpas Eléctricas. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Instalación de arpas eléctricas entre colmenas con distancia de paso de 1.2 a 1.5 metros.",
      "Ajuste del generador de impulsos a 1.6 - 2.0 kV (suficiente para derribar velutina sin electrocutar abejas).",
      "Colocación de bandeja inferior con 3 cm de agua y unas gotas de jabón biodegradable para ahogar ejemplares aturdidos.",
      "Revisión diaria del cableado para retirar insectos carbonizados que descarguen las baterías.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa).",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "PELIGRO ELÉCTRICO: Desconectar el pastor eléctrico antes de cualquier manipulación o deshierbe.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_si||vit_low||api_act_cont||met_bozales||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): BOZALES + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Bozales. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Colocación de bozales de piquera de alambre galvanizado (malla de 5.5 a 6 mm).",
      "Asegurar que el bozal sobresalga al menos 15-20 cm hacia el frente de la piquera.",
      "Verificar que las abejas entren y salgan volando sin detenerse en el exterior del bozal.",
      "Comprobar que los zánganos puedan salir y no obstruyan la rejilla.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa).",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_si||vit_low||api_act_cont||met_koldo||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): TRAMPAS KOLDO-BAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Trampas Koldo-Bas. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Montaje de trampas Koldo-Bas en los frentes de vuelo principales del colmenar.",
      "Comprobación de la selectividad de salida: las abejas escapan por los conos laterales de 5 mm.",
      "Limpieza y retirada periódica de los ejemplares de velutina acumulados en el depósito superior.",
      "Mantener los cebos frescos para maximizar la tasa de atracción.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa).",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_si||vit_low||api_act_cont||met_vectores||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): VECTORES + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Vectores. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Captura viva de 5 a 10 obreras de velutina vigorosas en el piquero.",
      "Adhesión de elemento de marcaje visible (cinta flúor ligera o polvo de tiza fluorescente) bajo protocolo homologado.",
      "Liberación y seguimiento mediante cronometraje del tiempo de ida y retorno para calcular la distancia al nido.",
      "Triangulación del vector para localizar y destruir el nido madre causante de los ataques.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa).",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_si||vit_low||api_act_cont||met_trashum||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): TRASHUMANCIA + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Trashumancia. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Evaluación del nivel de asedio: si la tasa de captura supera 15 velutinas simultáneas por piquera, planificar traslado.",
      "Cierre nocturno de colmenas con malla de ventilación superior.",
      "Traslado a colmenares de alta montaña (>1.000 m s.n.m.) o áreas con nula presión de velutina.",
      "Alimentación de mantenimiento con jarabe denso a la llegada al nuevo asentamiento.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa).",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_no||vit_high||api_act_nido||nido_sec_pas||fin_no_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): NIDO SECUNDARIO PASADO - NO INTERVENIR",
    "summary": "En el entorno del colmenar (VERANO (MAY-SEP)), se ha identificado un nido secundario pasado/abandonado. Estado colmena: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica. / SIN MIELADA: Posibilidad de aplicar tratamientos sanitarios autorizados de mayor eficacia y suplementación nutricional. / COLMENA FUERTE (Cría > 6 cuadros): Gran masa de abejas capaz de defender la piquera y generar relevo generacional.. El nido no contiene avispas vivas.",
    "actions": [
      "Verificar con prismáticos la ausencia total de obreras en la piquera del nido durante las horas de mayor insolación.",
      "NO aplicar insecticidas ni contratar pértigas: el ciclo de este nido ha concluido.",
      "Prioridad sanitaria urgente: Tratar la Varroa de inmediato con formulaciones autorizadas según temporada.",
      "Enfocar los recursos en la protección física de las piqueras de las colmenas vivas."
    ],
    "preventiveMeasures": [
      "Recordar que las reinas fundadoras no hibernan en el nido de origen, sino en oquedades protegidas del suelo o madera.",
      "Registrar la coordenada geográfica del nido para el histórico de presión del apiario."
    ],
    "safetyWarnings": [
      "No escalar árboles con ramas quebradizas para inspeccionar nidos que ya están inactivos.",
      "ALERTA: Si no se trata la Varroa, la colmena colapsará antes de la llegada del invierno."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_no||vit_high||api_act_nido||nido_emb_pre||fin_eliminar": {
    "title": "APIARIO (VERANO (MAY-SEP)): NEUTRALIZACIÓN DE EMBRIONARIO AÑO",
    "summary": "Localización de embrionario año en el perímetro del apiario durante VERANO (MAY-SEP). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: No. Fuerza de cría: > 6 cuadros. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Retirada directa al amanecer con bolsa estanca o spray frío, capturando a la reina fundadora.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_no||vit_high||api_act_nido||nido_pri_pre||fin_eliminar": {
    "title": "APIARIO (VERANO (MAY-SEP)): NEUTRALIZACIÓN DE PRIMARIO AÑO",
    "summary": "Localización de primario año en el perímetro del apiario durante VERANO (MAY-SEP). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: No. Fuerza de cría: > 6 cuadros. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_no||vit_high||api_act_nido||nido_sec_pre||fin_eliminar": {
    "title": "APIARIO (VERANO (MAY-SEP)): NEUTRALIZACIÓN DE SECUNDARIO AÑO",
    "summary": "Localización de secundario año en el perímetro del apiario durante VERANO (MAY-SEP). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: No. Fuerza de cría: > 6 cuadros. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_no||vit_high||api_act_cont||met_tram_fund||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): TRAMPEO FUNDADORAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Trampeo Fundadoras. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Despliegue perimetral de trampas con atrayente azucarado-alcohólico cada 50 metros en el borde del apiario.",
      "Cebo: 50% cerveza negra/rubia, 25% vino blanco, 25% sirope de frutas rojas o grosella.",
      "Revisión semanal estricta para vaciar capturas y renovar el líquido atrayente.",
      "Cierre o retirada obligatoria de las trampas en cuanto finalice el periodo primaveral de fundadoras.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_no||vit_high||api_act_cont||met_trampeo||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): TRAMPEO CONTROL + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Trampeo Control. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Colocación de trampas selectivas de control en los laterales del colmenar para desviar la atención de las piqueras.",
      "Uso de atrayentes proteicos (pescado macerado, carne) o hidrocarbonados según la fase de cría del nido.",
      "Control exhaustivo de la no afección a polinizadores autóctonos.",
      "Registro del número de capturas por día y trampa.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_no||vit_high||api_act_cont||met_arpas||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): ARPAS ELÉCTRICAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Arpas Eléctricas. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Instalación de arpas eléctricas entre colmenas con distancia de paso de 1.2 a 1.5 metros.",
      "Ajuste del generador de impulsos a 1.6 - 2.0 kV (suficiente para derribar velutina sin electrocutar abejas).",
      "Colocación de bandeja inferior con 3 cm de agua y unas gotas de jabón biodegradable para ahogar ejemplares aturdidos.",
      "Revisión diaria del cableado para retirar insectos carbonizados que descarguen las baterías.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "PELIGRO ELÉCTRICO: Desconectar el pastor eléctrico antes de cualquier manipulación o deshierbe.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_no||vit_high||api_act_cont||met_bozales||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): BOZALES + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Bozales. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Colocación de bozales de piquera de alambre galvanizado (malla de 5.5 a 6 mm).",
      "Asegurar que el bozal sobresalga al menos 15-20 cm hacia el frente de la piquera.",
      "Verificar que las abejas entren y salgan volando sin detenerse en el exterior del bozal.",
      "Comprobar que los zánganos puedan salir y no obstruyan la rejilla.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_no||vit_high||api_act_cont||met_koldo||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): TRAMPAS KOLDO-BAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Trampas Koldo-Bas. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Montaje de trampas Koldo-Bas en los frentes de vuelo principales del colmenar.",
      "Comprobación de la selectividad de salida: las abejas escapan por los conos laterales de 5 mm.",
      "Limpieza y retirada periódica de los ejemplares de velutina acumulados en el depósito superior.",
      "Mantener los cebos frescos para maximizar la tasa de atracción.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_no||vit_high||api_act_cont||met_vectores||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): VECTORES + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Vectores. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Captura viva de 5 a 10 obreras de velutina vigorosas en el piquero.",
      "Adhesión de elemento de marcaje visible (cinta flúor ligera o polvo de tiza fluorescente) bajo protocolo homologado.",
      "Liberación y seguimiento mediante cronometraje del tiempo de ida y retorno para calcular la distancia al nido.",
      "Triangulación del vector para localizar y destruir el nido madre causante de los ataques.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_no||vit_high||api_act_cont||met_trashum||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): TRASHUMANCIA + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Trashumancia. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Evaluación del nivel de asedio: si la tasa de captura supera 15 velutinas simultáneas por piquera, planificar traslado.",
      "Cierre nocturno de colmenas con malla de ventilación superior.",
      "Traslado a colmenares de alta montaña (>1.000 m s.n.m.) o áreas con nula presión de velutina.",
      "Alimentación de mantenimiento con jarabe denso a la llegada al nuevo asentamiento.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_no||vit_low||api_act_nido||nido_sec_pas||fin_no_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): NIDO SECUNDARIO PASADO - NO INTERVENIR",
    "summary": "En el entorno del colmenar (VERANO (MAY-SEP)), se ha identificado un nido secundario pasado/abandonado. Estado colmena: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica. / SIN MIELADA: Posibilidad de aplicar tratamientos sanitarios autorizados de mayor eficacia y suplementación nutricional. / COLMENA DEBILITADA (Cría < 6 cuadros): Alto riesgo de asedio, robo de reservas y asfixia en piquera.. El nido no contiene avispas vivas.",
    "actions": [
      "Verificar con prismáticos la ausencia total de obreras en la piquera del nido durante las horas de mayor insolación.",
      "NO aplicar insecticidas ni contratar pértigas: el ciclo de este nido ha concluido.",
      "Prioridad sanitaria urgente: Tratar la Varroa de inmediato con formulaciones autorizadas según temporada.",
      "Enfocar los recursos en la protección física de las piqueras de las colmenas vivas."
    ],
    "preventiveMeasures": [
      "Recordar que las reinas fundadoras no hibernan en el nido de origen, sino en oquedades protegidas del suelo o madera.",
      "Registrar la coordenada geográfica del nido para el histórico de presión del apiario."
    ],
    "safetyWarnings": [
      "No escalar árboles con ramas quebradizas para inspeccionar nidos que ya están inactivos.",
      "ALERTA: Si no se trata la Varroa, la colmena colapsará antes de la llegada del invierno."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_no||vit_low||api_act_nido||nido_emb_pre||fin_eliminar": {
    "title": "APIARIO (VERANO (MAY-SEP)): NEUTRALIZACIÓN DE EMBRIONARIO AÑO",
    "summary": "Localización de embrionario año en el perímetro del apiario durante VERANO (MAY-SEP). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: No. Fuerza de cría: < 6 cuadros. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Retirada directa al amanecer con bolsa estanca o spray frío, capturando a la reina fundadora.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_no||vit_low||api_act_nido||nido_pri_pre||fin_eliminar": {
    "title": "APIARIO (VERANO (MAY-SEP)): NEUTRALIZACIÓN DE PRIMARIO AÑO",
    "summary": "Localización de primario año en el perímetro del apiario durante VERANO (MAY-SEP). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: No. Fuerza de cría: < 6 cuadros. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_no||vit_low||api_act_nido||nido_sec_pre||fin_eliminar": {
    "title": "APIARIO (VERANO (MAY-SEP)): NEUTRALIZACIÓN DE SECUNDARIO AÑO",
    "summary": "Localización de secundario año en el perímetro del apiario durante VERANO (MAY-SEP). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: No. Fuerza de cría: < 6 cuadros. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_no||vit_low||api_act_cont||met_tram_fund||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): TRAMPEO FUNDADORAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Trampeo Fundadoras. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Despliegue perimetral de trampas con atrayente azucarado-alcohólico cada 50 metros en el borde del apiario.",
      "Cebo: 50% cerveza negra/rubia, 25% vino blanco, 25% sirope de frutas rojas o grosella.",
      "Revisión semanal estricta para vaciar capturas y renovar el líquido atrayente.",
      "Cierre o retirada obligatoria de las trampas en cuanto finalice el periodo primaveral de fundadoras.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_no||vit_low||api_act_cont||met_trampeo||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): TRAMPEO CONTROL + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Trampeo Control. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Colocación de trampas selectivas de control en los laterales del colmenar para desviar la atención de las piqueras.",
      "Uso de atrayentes proteicos (pescado macerado, carne) o hidrocarbonados según la fase de cría del nido.",
      "Control exhaustivo de la no afección a polinizadores autóctonos.",
      "Registro del número de capturas por día y trampa.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_no||vit_low||api_act_cont||met_arpas||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): ARPAS ELÉCTRICAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Arpas Eléctricas. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Instalación de arpas eléctricas entre colmenas con distancia de paso de 1.2 a 1.5 metros.",
      "Ajuste del generador de impulsos a 1.6 - 2.0 kV (suficiente para derribar velutina sin electrocutar abejas).",
      "Colocación de bandeja inferior con 3 cm de agua y unas gotas de jabón biodegradable para ahogar ejemplares aturdidos.",
      "Revisión diaria del cableado para retirar insectos carbonizados que descarguen las baterías.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "PELIGRO ELÉCTRICO: Desconectar el pastor eléctrico antes de cualquier manipulación o deshierbe.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_no||vit_low||api_act_cont||met_bozales||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): BOZALES + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Bozales. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Colocación de bozales de piquera de alambre galvanizado (malla de 5.5 a 6 mm).",
      "Asegurar que el bozal sobresalga al menos 15-20 cm hacia el frente de la piquera.",
      "Verificar que las abejas entren y salgan volando sin detenerse en el exterior del bozal.",
      "Comprobar que los zánganos puedan salir y no obstruyan la rejilla.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_no||vit_low||api_act_cont||met_koldo||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): TRAMPAS KOLDO-BAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Trampas Koldo-Bas. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Montaje de trampas Koldo-Bas en los frentes de vuelo principales del colmenar.",
      "Comprobación de la selectividad de salida: las abejas escapan por los conos laterales de 5 mm.",
      "Limpieza y retirada periódica de los ejemplares de velutina acumulados en el depósito superior.",
      "Mantener los cebos frescos para maximizar la tasa de atracción.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_no||vit_low||api_act_cont||met_vectores||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): VECTORES + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Vectores. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Captura viva de 5 a 10 obreras de velutina vigorosas en el piquero.",
      "Adhesión de elemento de marcaje visible (cinta flúor ligera o polvo de tiza fluorescente) bajo protocolo homologado.",
      "Liberación y seguimiento mediante cronometraje del tiempo de ida y retorno para calcular la distancia al nido.",
      "Triangulación del vector para localizar y destruir el nido madre causante de los ataques.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_high||miel_no||vit_low||api_act_cont||met_trashum||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): TRASHUMANCIA + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Trashumancia. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Evaluación del nivel de asedio: si la tasa de captura supera 15 velutinas simultáneas por piquera, planificar traslado.",
      "Cierre nocturno de colmenas con malla de ventilación superior.",
      "Traslado a colmenares de alta montaña (>1.000 m s.n.m.) o áreas con nula presión de velutina.",
      "Alimentación de mantenimiento con jarabe denso a la llegada al nuevo asentamiento.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_si||vit_high||api_act_nido||nido_sec_pas||fin_no_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): NIDO SECUNDARIO PASADO - NO INTERVENIR",
    "summary": "En el entorno del colmenar (VERANO (MAY-SEP)), se ha identificado un nido secundario pasado/abandonado. Estado colmena: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa. / CON MIELADA ACTIVA: Se debe preservar la pureza de la miel sin usar tratamientos químicos residuales en colmena. / COLMENA FUERTE (Cría > 6 cuadros): Gran masa de abejas capaz de defender la piquera y generar relevo generacional.. El nido no contiene avispas vivas.",
    "actions": [
      "Verificar con prismáticos la ausencia total de obreras en la piquera del nido durante las horas de mayor insolación.",
      "NO aplicar insecticidas ni contratar pértigas: el ciclo de este nido ha concluido.",
      "Mantener el monitoreo ordinario del colmenar.",
      "Enfocar los recursos en la protección física de las piqueras de las colmenas vivas."
    ],
    "preventiveMeasures": [
      "Recordar que las reinas fundadoras no hibernan en el nido de origen, sino en oquedades protegidas del suelo o madera.",
      "Registrar la coordenada geográfica del nido para el histórico de presión del apiario."
    ],
    "safetyWarnings": [
      "No escalar árboles con ramas quebradizas para inspeccionar nidos que ya están inactivos.",
      "Mantener precauciones estándar de manejo apícola."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_si||vit_high||api_act_nido||nido_emb_pre||fin_eliminar": {
    "title": "APIARIO (VERANO (MAY-SEP)): NEUTRALIZACIÓN DE EMBRIONARIO AÑO",
    "summary": "Localización de embrionario año en el perímetro del apiario durante VERANO (MAY-SEP). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Sí. Fuerza de cría: > 6 cuadros. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Retirada directa al amanecer con bolsa estanca o spray frío, capturando a la reina fundadora.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_si||vit_high||api_act_nido||nido_pri_pre||fin_eliminar": {
    "title": "APIARIO (VERANO (MAY-SEP)): NEUTRALIZACIÓN DE PRIMARIO AÑO",
    "summary": "Localización de primario año en el perímetro del apiario durante VERANO (MAY-SEP). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Sí. Fuerza de cría: > 6 cuadros. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_si||vit_high||api_act_nido||nido_sec_pre||fin_eliminar": {
    "title": "APIARIO (VERANO (MAY-SEP)): NEUTRALIZACIÓN DE SECUNDARIO AÑO",
    "summary": "Localización de secundario año en el perímetro del apiario durante VERANO (MAY-SEP). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Sí. Fuerza de cría: > 6 cuadros. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_si||vit_high||api_act_cont||met_tram_fund||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): TRAMPEO FUNDADORAS",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Trampeo Fundadoras. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Despliegue perimetral de trampas con atrayente azucarado-alcohólico cada 50 metros en el borde del apiario.",
      "Cebo: 50% cerveza negra/rubia, 25% vino blanco, 25% sirope de frutas rojas o grosella.",
      "Revisión semanal estricta para vaciar capturas y renovar el líquido atrayente.",
      "Cierre o retirada obligatoria de las trampas en cuanto finalice el periodo primaveral de fundadoras."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_si||vit_high||api_act_cont||met_trampeo||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): TRAMPEO CONTROL",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Trampeo Control. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Colocación de trampas selectivas de control en los laterales del colmenar para desviar la atención de las piqueras.",
      "Uso de atrayentes proteicos (pescado macerado, carne) o hidrocarbonados según la fase de cría del nido.",
      "Control exhaustivo de la no afección a polinizadores autóctonos.",
      "Registro del número de capturas por día y trampa."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_si||vit_high||api_act_cont||met_arpas||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): ARPAS ELÉCTRICAS",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Arpas Eléctricas. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Instalación de arpas eléctricas entre colmenas con distancia de paso de 1.2 a 1.5 metros.",
      "Ajuste del generador de impulsos a 1.6 - 2.0 kV (suficiente para derribar velutina sin electrocutar abejas).",
      "Colocación de bandeja inferior con 3 cm de agua y unas gotas de jabón biodegradable para ahogar ejemplares aturdidos.",
      "Revisión diaria del cableado para retirar insectos carbonizados que descarguen las baterías."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "PELIGRO ELÉCTRICO: Desconectar el pastor eléctrico antes de cualquier manipulación o deshierbe.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_si||vit_high||api_act_cont||met_bozales||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): BOZALES",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Bozales. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Colocación de bozales de piquera de alambre galvanizado (malla de 5.5 a 6 mm).",
      "Asegurar que el bozal sobresalga al menos 15-20 cm hacia el frente de la piquera.",
      "Verificar que las abejas entren y salgan volando sin detenerse en el exterior del bozal.",
      "Comprobar que los zánganos puedan salir y no obstruyan la rejilla."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_si||vit_high||api_act_cont||met_koldo||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): TRAMPAS KOLDO-BAS",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Trampas Koldo-Bas. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Montaje de trampas Koldo-Bas en los frentes de vuelo principales del colmenar.",
      "Comprobación de la selectividad de salida: las abejas escapan por los conos laterales de 5 mm.",
      "Limpieza y retirada periódica de los ejemplares de velutina acumulados en el depósito superior.",
      "Mantener los cebos frescos para maximizar la tasa de atracción."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_si||vit_high||api_act_cont||met_vectores||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): VECTORES",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Vectores. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Captura viva de 5 a 10 obreras de velutina vigorosas en el piquero.",
      "Adhesión de elemento de marcaje visible (cinta flúor ligera o polvo de tiza fluorescente) bajo protocolo homologado.",
      "Liberación y seguimiento mediante cronometraje del tiempo de ida y retorno para calcular la distancia al nido.",
      "Triangulación del vector para localizar y destruir el nido madre causante de los ataques."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_si||vit_high||api_act_cont||met_trashum||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): TRASHUMANCIA",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Trashumancia. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Evaluación del nivel de asedio: si la tasa de captura supera 15 velutinas simultáneas por piquera, planificar traslado.",
      "Cierre nocturno de colmenas con malla de ventilación superior.",
      "Traslado a colmenares de alta montaña (>1.000 m s.n.m.) o áreas con nula presión de velutina.",
      "Alimentación de mantenimiento con jarabe denso a la llegada al nuevo asentamiento."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_si||vit_low||api_act_nido||nido_sec_pas||fin_no_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): NIDO SECUNDARIO PASADO - NO INTERVENIR",
    "summary": "En el entorno del colmenar (VERANO (MAY-SEP)), se ha identificado un nido secundario pasado/abandonado. Estado colmena: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa. / CON MIELADA ACTIVA: Se debe preservar la pureza de la miel sin usar tratamientos químicos residuales en colmena. / COLMENA DEBILITADA (Cría < 6 cuadros): Alto riesgo de asedio, robo de reservas y asfixia en piquera.. El nido no contiene avispas vivas.",
    "actions": [
      "Verificar con prismáticos la ausencia total de obreras en la piquera del nido durante las horas de mayor insolación.",
      "NO aplicar insecticidas ni contratar pértigas: el ciclo de este nido ha concluido.",
      "Mantener el monitoreo ordinario del colmenar.",
      "Enfocar los recursos en la protección física de las piqueras de las colmenas vivas."
    ],
    "preventiveMeasures": [
      "Recordar que las reinas fundadoras no hibernan en el nido de origen, sino en oquedades protegidas del suelo o madera.",
      "Registrar la coordenada geográfica del nido para el histórico de presión del apiario."
    ],
    "safetyWarnings": [
      "No escalar árboles con ramas quebradizas para inspeccionar nidos que ya están inactivos.",
      "Mantener precauciones estándar de manejo apícola."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_si||vit_low||api_act_nido||nido_emb_pre||fin_eliminar": {
    "title": "APIARIO (VERANO (MAY-SEP)): NEUTRALIZACIÓN DE EMBRIONARIO AÑO",
    "summary": "Localización de embrionario año en el perímetro del apiario durante VERANO (MAY-SEP). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Sí. Fuerza de cría: < 6 cuadros. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Retirada directa al amanecer con bolsa estanca o spray frío, capturando a la reina fundadora.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_si||vit_low||api_act_nido||nido_pri_pre||fin_eliminar": {
    "title": "APIARIO (VERANO (MAY-SEP)): NEUTRALIZACIÓN DE PRIMARIO AÑO",
    "summary": "Localización de primario año en el perímetro del apiario durante VERANO (MAY-SEP). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Sí. Fuerza de cría: < 6 cuadros. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_si||vit_low||api_act_nido||nido_sec_pre||fin_eliminar": {
    "title": "APIARIO (VERANO (MAY-SEP)): NEUTRALIZACIÓN DE SECUNDARIO AÑO",
    "summary": "Localización de secundario año en el perímetro del apiario durante VERANO (MAY-SEP). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Sí. Fuerza de cría: < 6 cuadros. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_si||vit_low||api_act_cont||met_tram_fund||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): TRAMPEO FUNDADORAS",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Trampeo Fundadoras. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Despliegue perimetral de trampas con atrayente azucarado-alcohólico cada 50 metros en el borde del apiario.",
      "Cebo: 50% cerveza negra/rubia, 25% vino blanco, 25% sirope de frutas rojas o grosella.",
      "Revisión semanal estricta para vaciar capturas y renovar el líquido atrayente.",
      "Cierre o retirada obligatoria de las trampas en cuanto finalice el periodo primaveral de fundadoras.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_si||vit_low||api_act_cont||met_trampeo||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): TRAMPEO CONTROL",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Trampeo Control. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Colocación de trampas selectivas de control en los laterales del colmenar para desviar la atención de las piqueras.",
      "Uso de atrayentes proteicos (pescado macerado, carne) o hidrocarbonados según la fase de cría del nido.",
      "Control exhaustivo de la no afección a polinizadores autóctonos.",
      "Registro del número de capturas por día y trampa.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_si||vit_low||api_act_cont||met_arpas||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): ARPAS ELÉCTRICAS",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Arpas Eléctricas. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Instalación de arpas eléctricas entre colmenas con distancia de paso de 1.2 a 1.5 metros.",
      "Ajuste del generador de impulsos a 1.6 - 2.0 kV (suficiente para derribar velutina sin electrocutar abejas).",
      "Colocación de bandeja inferior con 3 cm de agua y unas gotas de jabón biodegradable para ahogar ejemplares aturdidos.",
      "Revisión diaria del cableado para retirar insectos carbonizados que descarguen las baterías.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "PELIGRO ELÉCTRICO: Desconectar el pastor eléctrico antes de cualquier manipulación o deshierbe.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_si||vit_low||api_act_cont||met_bozales||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): BOZALES",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Bozales. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Colocación de bozales de piquera de alambre galvanizado (malla de 5.5 a 6 mm).",
      "Asegurar que el bozal sobresalga al menos 15-20 cm hacia el frente de la piquera.",
      "Verificar que las abejas entren y salgan volando sin detenerse en el exterior del bozal.",
      "Comprobar que los zánganos puedan salir y no obstruyan la rejilla.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_si||vit_low||api_act_cont||met_koldo||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): TRAMPAS KOLDO-BAS",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Trampas Koldo-Bas. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Montaje de trampas Koldo-Bas en los frentes de vuelo principales del colmenar.",
      "Comprobación de la selectividad de salida: las abejas escapan por los conos laterales de 5 mm.",
      "Limpieza y retirada periódica de los ejemplares de velutina acumulados en el depósito superior.",
      "Mantener los cebos frescos para maximizar la tasa de atracción.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_si||vit_low||api_act_cont||met_vectores||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): VECTORES",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Vectores. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Captura viva de 5 a 10 obreras de velutina vigorosas en el piquero.",
      "Adhesión de elemento de marcaje visible (cinta flúor ligera o polvo de tiza fluorescente) bajo protocolo homologado.",
      "Liberación y seguimiento mediante cronometraje del tiempo de ida y retorno para calcular la distancia al nido.",
      "Triangulación del vector para localizar y destruir el nido madre causante de los ataques.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_si||vit_low||api_act_cont||met_trashum||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): TRASHUMANCIA",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Trashumancia. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Evaluación del nivel de asedio: si la tasa de captura supera 15 velutinas simultáneas por piquera, planificar traslado.",
      "Cierre nocturno de colmenas con malla de ventilación superior.",
      "Traslado a colmenares de alta montaña (>1.000 m s.n.m.) o áreas con nula presión de velutina.",
      "Alimentación de mantenimiento con jarabe denso a la llegada al nuevo asentamiento.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_no||vit_high||api_act_nido||nido_sec_pas||fin_no_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): NIDO SECUNDARIO PASADO - NO INTERVENIR",
    "summary": "En el entorno del colmenar (VERANO (MAY-SEP)), se ha identificado un nido secundario pasado/abandonado. Estado colmena: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa. / SIN MIELADA: Posibilidad de aplicar tratamientos sanitarios autorizados de mayor eficacia y suplementación nutricional. / COLMENA FUERTE (Cría > 6 cuadros): Gran masa de abejas capaz de defender la piquera y generar relevo generacional.. El nido no contiene avispas vivas.",
    "actions": [
      "Verificar con prismáticos la ausencia total de obreras en la piquera del nido durante las horas de mayor insolación.",
      "NO aplicar insecticidas ni contratar pértigas: el ciclo de este nido ha concluido.",
      "Mantener el monitoreo ordinario del colmenar.",
      "Enfocar los recursos en la protección física de las piqueras de las colmenas vivas."
    ],
    "preventiveMeasures": [
      "Recordar que las reinas fundadoras no hibernan en el nido de origen, sino en oquedades protegidas del suelo o madera.",
      "Registrar la coordenada geográfica del nido para el histórico de presión del apiario."
    ],
    "safetyWarnings": [
      "No escalar árboles con ramas quebradizas para inspeccionar nidos que ya están inactivos.",
      "Mantener precauciones estándar de manejo apícola."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_no||vit_high||api_act_nido||nido_emb_pre||fin_eliminar": {
    "title": "APIARIO (VERANO (MAY-SEP)): NEUTRALIZACIÓN DE EMBRIONARIO AÑO",
    "summary": "Localización de embrionario año en el perímetro del apiario durante VERANO (MAY-SEP). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: No. Fuerza de cría: > 6 cuadros. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Retirada directa al amanecer con bolsa estanca o spray frío, capturando a la reina fundadora.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_no||vit_high||api_act_nido||nido_pri_pre||fin_eliminar": {
    "title": "APIARIO (VERANO (MAY-SEP)): NEUTRALIZACIÓN DE PRIMARIO AÑO",
    "summary": "Localización de primario año en el perímetro del apiario durante VERANO (MAY-SEP). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: No. Fuerza de cría: > 6 cuadros. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_no||vit_high||api_act_nido||nido_sec_pre||fin_eliminar": {
    "title": "APIARIO (VERANO (MAY-SEP)): NEUTRALIZACIÓN DE SECUNDARIO AÑO",
    "summary": "Localización de secundario año en el perímetro del apiario durante VERANO (MAY-SEP). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: No. Fuerza de cría: > 6 cuadros. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_no||vit_high||api_act_cont||met_tram_fund||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): TRAMPEO FUNDADORAS",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Trampeo Fundadoras. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Despliegue perimetral de trampas con atrayente azucarado-alcohólico cada 50 metros en el borde del apiario.",
      "Cebo: 50% cerveza negra/rubia, 25% vino blanco, 25% sirope de frutas rojas o grosella.",
      "Revisión semanal estricta para vaciar capturas y renovar el líquido atrayente.",
      "Cierre o retirada obligatoria de las trampas en cuanto finalice el periodo primaveral de fundadoras."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_no||vit_high||api_act_cont||met_trampeo||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): TRAMPEO CONTROL",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Trampeo Control. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Colocación de trampas selectivas de control en los laterales del colmenar para desviar la atención de las piqueras.",
      "Uso de atrayentes proteicos (pescado macerado, carne) o hidrocarbonados según la fase de cría del nido.",
      "Control exhaustivo de la no afección a polinizadores autóctonos.",
      "Registro del número de capturas por día y trampa."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_no||vit_high||api_act_cont||met_arpas||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): ARPAS ELÉCTRICAS",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Arpas Eléctricas. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Instalación de arpas eléctricas entre colmenas con distancia de paso de 1.2 a 1.5 metros.",
      "Ajuste del generador de impulsos a 1.6 - 2.0 kV (suficiente para derribar velutina sin electrocutar abejas).",
      "Colocación de bandeja inferior con 3 cm de agua y unas gotas de jabón biodegradable para ahogar ejemplares aturdidos.",
      "Revisión diaria del cableado para retirar insectos carbonizados que descarguen las baterías."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "PELIGRO ELÉCTRICO: Desconectar el pastor eléctrico antes de cualquier manipulación o deshierbe.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_no||vit_high||api_act_cont||met_bozales||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): BOZALES",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Bozales. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Colocación de bozales de piquera de alambre galvanizado (malla de 5.5 a 6 mm).",
      "Asegurar que el bozal sobresalga al menos 15-20 cm hacia el frente de la piquera.",
      "Verificar que las abejas entren y salgan volando sin detenerse en el exterior del bozal.",
      "Comprobar que los zánganos puedan salir y no obstruyan la rejilla."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_no||vit_high||api_act_cont||met_koldo||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): TRAMPAS KOLDO-BAS",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Trampas Koldo-Bas. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Montaje de trampas Koldo-Bas en los frentes de vuelo principales del colmenar.",
      "Comprobación de la selectividad de salida: las abejas escapan por los conos laterales de 5 mm.",
      "Limpieza y retirada periódica de los ejemplares de velutina acumulados en el depósito superior.",
      "Mantener los cebos frescos para maximizar la tasa de atracción."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_no||vit_high||api_act_cont||met_vectores||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): VECTORES",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Vectores. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Captura viva de 5 a 10 obreras de velutina vigorosas en el piquero.",
      "Adhesión de elemento de marcaje visible (cinta flúor ligera o polvo de tiza fluorescente) bajo protocolo homologado.",
      "Liberación y seguimiento mediante cronometraje del tiempo de ida y retorno para calcular la distancia al nido.",
      "Triangulación del vector para localizar y destruir el nido madre causante de los ataques."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_no||vit_high||api_act_cont||met_trashum||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): TRASHUMANCIA",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Trashumancia. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Evaluación del nivel de asedio: si la tasa de captura supera 15 velutinas simultáneas por piquera, planificar traslado.",
      "Cierre nocturno de colmenas con malla de ventilación superior.",
      "Traslado a colmenares de alta montaña (>1.000 m s.n.m.) o áreas con nula presión de velutina.",
      "Alimentación de mantenimiento con jarabe denso a la llegada al nuevo asentamiento."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_no||vit_low||api_act_nido||nido_sec_pas||fin_no_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): NIDO SECUNDARIO PASADO - NO INTERVENIR",
    "summary": "En el entorno del colmenar (VERANO (MAY-SEP)), se ha identificado un nido secundario pasado/abandonado. Estado colmena: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa. / SIN MIELADA: Posibilidad de aplicar tratamientos sanitarios autorizados de mayor eficacia y suplementación nutricional. / COLMENA DEBILITADA (Cría < 6 cuadros): Alto riesgo de asedio, robo de reservas y asfixia en piquera.. El nido no contiene avispas vivas.",
    "actions": [
      "Verificar con prismáticos la ausencia total de obreras en la piquera del nido durante las horas de mayor insolación.",
      "NO aplicar insecticidas ni contratar pértigas: el ciclo de este nido ha concluido.",
      "Mantener el monitoreo ordinario del colmenar.",
      "Enfocar los recursos en la protección física de las piqueras de las colmenas vivas."
    ],
    "preventiveMeasures": [
      "Recordar que las reinas fundadoras no hibernan en el nido de origen, sino en oquedades protegidas del suelo o madera.",
      "Registrar la coordenada geográfica del nido para el histórico de presión del apiario."
    ],
    "safetyWarnings": [
      "No escalar árboles con ramas quebradizas para inspeccionar nidos que ya están inactivos.",
      "Mantener precauciones estándar de manejo apícola."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_no||vit_low||api_act_nido||nido_emb_pre||fin_eliminar": {
    "title": "APIARIO (VERANO (MAY-SEP)): NEUTRALIZACIÓN DE EMBRIONARIO AÑO",
    "summary": "Localización de embrionario año en el perímetro del apiario durante VERANO (MAY-SEP). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: No. Fuerza de cría: < 6 cuadros. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Retirada directa al amanecer con bolsa estanca o spray frío, capturando a la reina fundadora.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_no||vit_low||api_act_nido||nido_pri_pre||fin_eliminar": {
    "title": "APIARIO (VERANO (MAY-SEP)): NEUTRALIZACIÓN DE PRIMARIO AÑO",
    "summary": "Localización de primario año en el perímetro del apiario durante VERANO (MAY-SEP). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: No. Fuerza de cría: < 6 cuadros. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_no||vit_low||api_act_nido||nido_sec_pre||fin_eliminar": {
    "title": "APIARIO (VERANO (MAY-SEP)): NEUTRALIZACIÓN DE SECUNDARIO AÑO",
    "summary": "Localización de secundario año en el perímetro del apiario durante VERANO (MAY-SEP). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: No. Fuerza de cría: < 6 cuadros. Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_no||vit_low||api_act_cont||met_tram_fund||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): TRAMPEO FUNDADORAS",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Trampeo Fundadoras. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Despliegue perimetral de trampas con atrayente azucarado-alcohólico cada 50 metros en el borde del apiario.",
      "Cebo: 50% cerveza negra/rubia, 25% vino blanco, 25% sirope de frutas rojas o grosella.",
      "Revisión semanal estricta para vaciar capturas y renovar el líquido atrayente.",
      "Cierre o retirada obligatoria de las trampas en cuanto finalice el periodo primaveral de fundadoras.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_no||vit_low||api_act_cont||met_trampeo||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): TRAMPEO CONTROL",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Trampeo Control. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Colocación de trampas selectivas de control en los laterales del colmenar para desviar la atención de las piqueras.",
      "Uso de atrayentes proteicos (pescado macerado, carne) o hidrocarbonados según la fase de cría del nido.",
      "Control exhaustivo de la no afección a polinizadores autóctonos.",
      "Registro del número de capturas por día y trampa.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_no||vit_low||api_act_cont||met_arpas||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): ARPAS ELÉCTRICAS",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Arpas Eléctricas. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Instalación de arpas eléctricas entre colmenas con distancia de paso de 1.2 a 1.5 metros.",
      "Ajuste del generador de impulsos a 1.6 - 2.0 kV (suficiente para derribar velutina sin electrocutar abejas).",
      "Colocación de bandeja inferior con 3 cm de agua y unas gotas de jabón biodegradable para ahogar ejemplares aturdidos.",
      "Revisión diaria del cableado para retirar insectos carbonizados que descarguen las baterías.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "PELIGRO ELÉCTRICO: Desconectar el pastor eléctrico antes de cualquier manipulación o deshierbe.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_no||vit_low||api_act_cont||met_bozales||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): BOZALES",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Bozales. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Colocación de bozales de piquera de alambre galvanizado (malla de 5.5 a 6 mm).",
      "Asegurar que el bozal sobresalga al menos 15-20 cm hacia el frente de la piquera.",
      "Verificar que las abejas entren y salgan volando sin detenerse en el exterior del bozal.",
      "Comprobar que los zánganos puedan salir y no obstruyan la rejilla.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_no||vit_low||api_act_cont||met_koldo||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): TRAMPAS KOLDO-BAS",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Trampas Koldo-Bas. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Montaje de trampas Koldo-Bas en los frentes de vuelo principales del colmenar.",
      "Comprobación de la selectividad de salida: las abejas escapan por los conos laterales de 5 mm.",
      "Limpieza y retirada periódica de los ejemplares de velutina acumulados en el depósito superior.",
      "Mantener los cebos frescos para maximizar la tasa de atracción.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_no||vit_low||api_act_cont||met_vectores||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): VECTORES",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Vectores. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Captura viva de 5 a 10 obreras de velutina vigorosas en el piquero.",
      "Adhesión de elemento de marcaje visible (cinta flúor ligera o polvo de tiza fluorescente) bajo protocolo homologado.",
      "Liberación y seguimiento mediante cronometraje del tiempo de ida y retorno para calcular la distancia al nido.",
      "Triangulación del vector para localizar y destruir el nido madre causante de los ataques.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_m_s||var_low||miel_no||vit_low||api_act_cont||met_trashum||fin_actuar": {
    "title": "APIARIO (VERANO (MAY-SEP)): TRASHUMANCIA",
    "summary": "Protocolo integral en colmenar durante VERANO (MAY-SEP). Método principal: Trashumancia. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de expansión de colonias de avispa. Máxima depredación sobre abejas en vuelo. Instalación urgente de arpas eléctricas y bozales de piquera para mitigar el estrés y permitir el pecoreo.",
    "actions": [
      "Evaluación del nivel de asedio: si la tasa de captura supera 15 velutinas simultáneas por piquera, planificar traslado.",
      "Cierre nocturno de colmenas con malla de ventilación superior.",
      "Traslado a colmenares de alta montaña (>1.000 m s.n.m.) o áreas con nula presión de velutina.",
      "Alimentación de mantenimiento con jarabe denso a la llegada al nuevo asentamiento.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_si||vit_high||api_act_nido||nido_sec_pas||fin_no_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): NIDO SECUNDARIO PASADO - NO INTERVENIR",
    "summary": "En el entorno del colmenar (OTOÑO (SEP-NOV)), se ha identificado un nido secundario pasado/abandonado. Estado colmena: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica. / CON MIELADA ACTIVA: Se debe preservar la pureza de la miel sin usar tratamientos químicos residuales en colmena. / COLMENA FUERTE (Cría > 6 cuadros): Gran masa de abejas capaz de defender la piquera y generar relevo generacional.. El nido no contiene avispas vivas.",
    "actions": [
      "Verificar con prismáticos la ausencia total de obreras en la piquera del nido durante las horas de mayor insolación.",
      "NO aplicar insecticidas ni contratar pértigas: el ciclo de este nido ha concluido.",
      "Prioridad sanitaria urgente: Tratar la Varroa de inmediato con formulaciones autorizadas según temporada.",
      "Enfocar los recursos en la protección física de las piqueras de las colmenas vivas."
    ],
    "preventiveMeasures": [
      "Recordar que las reinas fundadoras no hibernan en el nido de origen, sino en oquedades protegidas del suelo o madera.",
      "Registrar la coordenada geográfica del nido para el histórico de presión del apiario."
    ],
    "safetyWarnings": [
      "No escalar árboles con ramas quebradizas para inspeccionar nidos que ya están inactivos.",
      "ALERTA: Si no se trata la Varroa, la colmena colapsará antes de la llegada del invierno."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_si||vit_high||api_act_nido||nido_emb_pre||fin_eliminar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): NEUTRALIZACIÓN DE EMBRIONARIO AÑO",
    "summary": "Localización de embrionario año en el perímetro del apiario durante OTOÑO (SEP-NOV). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Sí. Fuerza de cría: > 6 cuadros. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Retirada directa al amanecer con bolsa estanca o spray frío, capturando a la reina fundadora.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_si||vit_high||api_act_nido||nido_pri_pre||fin_eliminar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): NEUTRALIZACIÓN DE PRIMARIO AÑO",
    "summary": "Localización de primario año en el perímetro del apiario durante OTOÑO (SEP-NOV). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Sí. Fuerza de cría: > 6 cuadros. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_si||vit_high||api_act_nido||nido_sec_pre||fin_eliminar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): NEUTRALIZACIÓN DE SECUNDARIO AÑO",
    "summary": "Localización de secundario año en el perímetro del apiario durante OTOÑO (SEP-NOV). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Sí. Fuerza de cría: > 6 cuadros. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_si||vit_high||api_act_cont||met_tram_fund||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): TRAMPEO FUNDADORAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Trampeo Fundadoras. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Alta. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Despliegue perimetral de trampas con atrayente azucarado-alcohólico cada 50 metros en el borde del apiario.",
      "Cebo: 50% cerveza negra/rubia, 25% vino blanco, 25% sirope de frutas rojas o grosella.",
      "Revisión semanal estricta para vaciar capturas y renovar el líquido atrayente.",
      "Cierre o retirada obligatoria de las trampas en cuanto finalice el periodo primaveral de fundadoras.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa)."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_si||vit_high||api_act_cont||met_trampeo||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): TRAMPEO CONTROL + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Trampeo Control. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Alta. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Colocación de trampas selectivas de control en los laterales del colmenar para desviar la atención de las piqueras.",
      "Uso de atrayentes proteicos (pescado macerado, carne) o hidrocarbonados según la fase de cría del nido.",
      "Control exhaustivo de la no afección a polinizadores autóctonos.",
      "Registro del número de capturas por día y trampa.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa)."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_si||vit_high||api_act_cont||met_arpas||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): ARPAS ELÉCTRICAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Arpas Eléctricas. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Alta. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Instalación de arpas eléctricas entre colmenas con distancia de paso de 1.2 a 1.5 metros.",
      "Ajuste del generador de impulsos a 1.6 - 2.0 kV (suficiente para derribar velutina sin electrocutar abejas).",
      "Colocación de bandeja inferior con 3 cm de agua y unas gotas de jabón biodegradable para ahogar ejemplares aturdidos.",
      "Revisión diaria del cableado para retirar insectos carbonizados que descarguen las baterías.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa)."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "PELIGRO ELÉCTRICO: Desconectar el pastor eléctrico antes de cualquier manipulación o deshierbe.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_si||vit_high||api_act_cont||met_bozales||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): BOZALES + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Bozales. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Alta. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Colocación de bozales de piquera de alambre galvanizado (malla de 5.5 a 6 mm).",
      "Asegurar que el bozal sobresalga al menos 15-20 cm hacia el frente de la piquera.",
      "Verificar que las abejas entren y salgan volando sin detenerse en el exterior del bozal.",
      "Comprobar que los zánganos puedan salir y no obstruyan la rejilla.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa)."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_si||vit_high||api_act_cont||met_koldo||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): TRAMPAS KOLDO-BAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Trampas Koldo-Bas. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Alta. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Montaje de trampas Koldo-Bas en los frentes de vuelo principales del colmenar.",
      "Comprobación de la selectividad de salida: las abejas escapan por los conos laterales de 5 mm.",
      "Limpieza y retirada periódica de los ejemplares de velutina acumulados en el depósito superior.",
      "Mantener los cebos frescos para maximizar la tasa de atracción.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa)."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_si||vit_high||api_act_cont||met_vectores||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): VECTORES + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Vectores. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Alta. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Captura viva de 5 a 10 obreras de velutina vigorosas en el piquero.",
      "Adhesión de elemento de marcaje visible (cinta flúor ligera o polvo de tiza fluorescente) bajo protocolo homologado.",
      "Liberación y seguimiento mediante cronometraje del tiempo de ida y retorno para calcular la distancia al nido.",
      "Triangulación del vector para localizar y destruir el nido madre causante de los ataques.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa)."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_si||vit_high||api_act_cont||met_trashum||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): TRASHUMANCIA + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Trashumancia. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Alta. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Evaluación del nivel de asedio: si la tasa de captura supera 15 velutinas simultáneas por piquera, planificar traslado.",
      "Cierre nocturno de colmenas con malla de ventilación superior.",
      "Traslado a colmenares de alta montaña (>1.000 m s.n.m.) o áreas con nula presión de velutina.",
      "Alimentación de mantenimiento con jarabe denso a la llegada al nuevo asentamiento.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa)."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_si||vit_low||api_act_nido||nido_sec_pas||fin_no_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): NIDO SECUNDARIO PASADO - NO INTERVENIR",
    "summary": "En el entorno del colmenar (OTOÑO (SEP-NOV)), se ha identificado un nido secundario pasado/abandonado. Estado colmena: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica. / CON MIELADA ACTIVA: Se debe preservar la pureza de la miel sin usar tratamientos químicos residuales en colmena. / COLMENA DEBILITADA (Cría < 6 cuadros): Alto riesgo de asedio, robo de reservas y asfixia en piquera.. El nido no contiene avispas vivas.",
    "actions": [
      "Verificar con prismáticos la ausencia total de obreras en la piquera del nido durante las horas de mayor insolación.",
      "NO aplicar insecticidas ni contratar pértigas: el ciclo de este nido ha concluido.",
      "Prioridad sanitaria urgente: Tratar la Varroa de inmediato con formulaciones autorizadas según temporada.",
      "Enfocar los recursos en la protección física de las piqueras de las colmenas vivas."
    ],
    "preventiveMeasures": [
      "Recordar que las reinas fundadoras no hibernan en el nido de origen, sino en oquedades protegidas del suelo o madera.",
      "Registrar la coordenada geográfica del nido para el histórico de presión del apiario."
    ],
    "safetyWarnings": [
      "No escalar árboles con ramas quebradizas para inspeccionar nidos que ya están inactivos.",
      "ALERTA: Si no se trata la Varroa, la colmena colapsará antes de la llegada del invierno."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_si||vit_low||api_act_nido||nido_emb_pre||fin_eliminar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): NEUTRALIZACIÓN DE EMBRIONARIO AÑO",
    "summary": "Localización de embrionario año en el perímetro del apiario durante OTOÑO (SEP-NOV). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Sí. Fuerza de cría: < 6 cuadros. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Retirada directa al amanecer con bolsa estanca o spray frío, capturando a la reina fundadora.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_si||vit_low||api_act_nido||nido_pri_pre||fin_eliminar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): NEUTRALIZACIÓN DE PRIMARIO AÑO",
    "summary": "Localización de primario año en el perímetro del apiario durante OTOÑO (SEP-NOV). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Sí. Fuerza de cría: < 6 cuadros. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_si||vit_low||api_act_nido||nido_sec_pre||fin_eliminar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): NEUTRALIZACIÓN DE SECUNDARIO AÑO",
    "summary": "Localización de secundario año en el perímetro del apiario durante OTOÑO (SEP-NOV). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Sí. Fuerza de cría: < 6 cuadros. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_si||vit_low||api_act_cont||met_tram_fund||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): TRAMPEO FUNDADORAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Trampeo Fundadoras. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Despliegue perimetral de trampas con atrayente azucarado-alcohólico cada 50 metros en el borde del apiario.",
      "Cebo: 50% cerveza negra/rubia, 25% vino blanco, 25% sirope de frutas rojas o grosella.",
      "Revisión semanal estricta para vaciar capturas y renovar el líquido atrayente.",
      "Cierre o retirada obligatoria de las trampas en cuanto finalice el periodo primaveral de fundadoras.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa).",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_si||vit_low||api_act_cont||met_trampeo||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): TRAMPEO CONTROL + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Trampeo Control. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Colocación de trampas selectivas de control en los laterales del colmenar para desviar la atención de las piqueras.",
      "Uso de atrayentes proteicos (pescado macerado, carne) o hidrocarbonados según la fase de cría del nido.",
      "Control exhaustivo de la no afección a polinizadores autóctonos.",
      "Registro del número de capturas por día y trampa.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa).",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_si||vit_low||api_act_cont||met_arpas||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): ARPAS ELÉCTRICAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Arpas Eléctricas. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Instalación de arpas eléctricas entre colmenas con distancia de paso de 1.2 a 1.5 metros.",
      "Ajuste del generador de impulsos a 1.6 - 2.0 kV (suficiente para derribar velutina sin electrocutar abejas).",
      "Colocación de bandeja inferior con 3 cm de agua y unas gotas de jabón biodegradable para ahogar ejemplares aturdidos.",
      "Revisión diaria del cableado para retirar insectos carbonizados que descarguen las baterías.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa).",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "PELIGRO ELÉCTRICO: Desconectar el pastor eléctrico antes de cualquier manipulación o deshierbe.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_si||vit_low||api_act_cont||met_bozales||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): BOZALES + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Bozales. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Colocación de bozales de piquera de alambre galvanizado (malla de 5.5 a 6 mm).",
      "Asegurar que el bozal sobresalga al menos 15-20 cm hacia el frente de la piquera.",
      "Verificar que las abejas entren y salgan volando sin detenerse en el exterior del bozal.",
      "Comprobar que los zánganos puedan salir y no obstruyan la rejilla.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa).",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_si||vit_low||api_act_cont||met_koldo||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): TRAMPAS KOLDO-BAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Trampas Koldo-Bas. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Montaje de trampas Koldo-Bas en los frentes de vuelo principales del colmenar.",
      "Comprobación de la selectividad de salida: las abejas escapan por los conos laterales de 5 mm.",
      "Limpieza y retirada periódica de los ejemplares de velutina acumulados en el depósito superior.",
      "Mantener los cebos frescos para maximizar la tasa de atracción.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa).",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_si||vit_low||api_act_cont||met_vectores||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): VECTORES + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Vectores. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Captura viva de 5 a 10 obreras de velutina vigorosas en el piquero.",
      "Adhesión de elemento de marcaje visible (cinta flúor ligera o polvo de tiza fluorescente) bajo protocolo homologado.",
      "Liberación y seguimiento mediante cronometraje del tiempo de ida y retorno para calcular la distancia al nido.",
      "Triangulación del vector para localizar y destruir el nido madre causante de los ataques.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa).",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_si||vit_low||api_act_cont||met_trashum||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): TRASHUMANCIA + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Trashumancia. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Evaluación del nivel de asedio: si la tasa de captura supera 15 velutinas simultáneas por piquera, planificar traslado.",
      "Cierre nocturno de colmenas con malla de ventilación superior.",
      "Traslado a colmenares de alta montaña (>1.000 m s.n.m.) o áreas con nula presión de velutina.",
      "Alimentación de mantenimiento con jarabe denso a la llegada al nuevo asentamiento.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa).",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_no||vit_high||api_act_nido||nido_sec_pas||fin_no_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): NIDO SECUNDARIO PASADO - NO INTERVENIR",
    "summary": "En el entorno del colmenar (OTOÑO (SEP-NOV)), se ha identificado un nido secundario pasado/abandonado. Estado colmena: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica. / SIN MIELADA: Posibilidad de aplicar tratamientos sanitarios autorizados de mayor eficacia y suplementación nutricional. / COLMENA FUERTE (Cría > 6 cuadros): Gran masa de abejas capaz de defender la piquera y generar relevo generacional.. El nido no contiene avispas vivas.",
    "actions": [
      "Verificar con prismáticos la ausencia total de obreras en la piquera del nido durante las horas de mayor insolación.",
      "NO aplicar insecticidas ni contratar pértigas: el ciclo de este nido ha concluido.",
      "Prioridad sanitaria urgente: Tratar la Varroa de inmediato con formulaciones autorizadas según temporada.",
      "Enfocar los recursos en la protección física de las piqueras de las colmenas vivas."
    ],
    "preventiveMeasures": [
      "Recordar que las reinas fundadoras no hibernan en el nido de origen, sino en oquedades protegidas del suelo o madera.",
      "Registrar la coordenada geográfica del nido para el histórico de presión del apiario."
    ],
    "safetyWarnings": [
      "No escalar árboles con ramas quebradizas para inspeccionar nidos que ya están inactivos.",
      "ALERTA: Si no se trata la Varroa, la colmena colapsará antes de la llegada del invierno."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_no||vit_high||api_act_nido||nido_emb_pre||fin_eliminar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): NEUTRALIZACIÓN DE EMBRIONARIO AÑO",
    "summary": "Localización de embrionario año en el perímetro del apiario durante OTOÑO (SEP-NOV). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: No. Fuerza de cría: > 6 cuadros. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Retirada directa al amanecer con bolsa estanca o spray frío, capturando a la reina fundadora.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_no||vit_high||api_act_nido||nido_pri_pre||fin_eliminar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): NEUTRALIZACIÓN DE PRIMARIO AÑO",
    "summary": "Localización de primario año en el perímetro del apiario durante OTOÑO (SEP-NOV). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: No. Fuerza de cría: > 6 cuadros. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_no||vit_high||api_act_nido||nido_sec_pre||fin_eliminar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): NEUTRALIZACIÓN DE SECUNDARIO AÑO",
    "summary": "Localización de secundario año en el perímetro del apiario durante OTOÑO (SEP-NOV). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: No. Fuerza de cría: > 6 cuadros. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_no||vit_high||api_act_cont||met_tram_fund||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): TRAMPEO FUNDADORAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Trampeo Fundadoras. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Alta. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Despliegue perimetral de trampas con atrayente azucarado-alcohólico cada 50 metros en el borde del apiario.",
      "Cebo: 50% cerveza negra/rubia, 25% vino blanco, 25% sirope de frutas rojas o grosella.",
      "Revisión semanal estricta para vaciar capturas y renovar el líquido atrayente.",
      "Cierre o retirada obligatoria de las trampas en cuanto finalice el periodo primaveral de fundadoras.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_no||vit_high||api_act_cont||met_trampeo||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): TRAMPEO CONTROL + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Trampeo Control. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Alta. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Colocación de trampas selectivas de control en los laterales del colmenar para desviar la atención de las piqueras.",
      "Uso de atrayentes proteicos (pescado macerado, carne) o hidrocarbonados según la fase de cría del nido.",
      "Control exhaustivo de la no afección a polinizadores autóctonos.",
      "Registro del número de capturas por día y trampa.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_no||vit_high||api_act_cont||met_arpas||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): ARPAS ELÉCTRICAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Arpas Eléctricas. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Alta. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Instalación de arpas eléctricas entre colmenas con distancia de paso de 1.2 a 1.5 metros.",
      "Ajuste del generador de impulsos a 1.6 - 2.0 kV (suficiente para derribar velutina sin electrocutar abejas).",
      "Colocación de bandeja inferior con 3 cm de agua y unas gotas de jabón biodegradable para ahogar ejemplares aturdidos.",
      "Revisión diaria del cableado para retirar insectos carbonizados que descarguen las baterías.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "PELIGRO ELÉCTRICO: Desconectar el pastor eléctrico antes de cualquier manipulación o deshierbe.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_no||vit_high||api_act_cont||met_bozales||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): BOZALES + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Bozales. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Alta. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Colocación de bozales de piquera de alambre galvanizado (malla de 5.5 a 6 mm).",
      "Asegurar que el bozal sobresalga al menos 15-20 cm hacia el frente de la piquera.",
      "Verificar que las abejas entren y salgan volando sin detenerse en el exterior del bozal.",
      "Comprobar que los zánganos puedan salir y no obstruyan la rejilla.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_no||vit_high||api_act_cont||met_koldo||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): TRAMPAS KOLDO-BAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Trampas Koldo-Bas. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Alta. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Montaje de trampas Koldo-Bas en los frentes de vuelo principales del colmenar.",
      "Comprobación de la selectividad de salida: las abejas escapan por los conos laterales de 5 mm.",
      "Limpieza y retirada periódica de los ejemplares de velutina acumulados en el depósito superior.",
      "Mantener los cebos frescos para maximizar la tasa de atracción.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_no||vit_high||api_act_cont||met_vectores||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): VECTORES + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Vectores. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Alta. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Captura viva de 5 a 10 obreras de velutina vigorosas en el piquero.",
      "Adhesión de elemento de marcaje visible (cinta flúor ligera o polvo de tiza fluorescente) bajo protocolo homologado.",
      "Liberación y seguimiento mediante cronometraje del tiempo de ida y retorno para calcular la distancia al nido.",
      "Triangulación del vector para localizar y destruir el nido madre causante de los ataques.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_no||vit_high||api_act_cont||met_trashum||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): TRASHUMANCIA + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Trashumancia. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Alta. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Evaluación del nivel de asedio: si la tasa de captura supera 15 velutinas simultáneas por piquera, planificar traslado.",
      "Cierre nocturno de colmenas con malla de ventilación superior.",
      "Traslado a colmenares de alta montaña (>1.000 m s.n.m.) o áreas con nula presión de velutina.",
      "Alimentación de mantenimiento con jarabe denso a la llegada al nuevo asentamiento.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_no||vit_low||api_act_nido||nido_sec_pas||fin_no_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): NIDO SECUNDARIO PASADO - NO INTERVENIR",
    "summary": "En el entorno del colmenar (OTOÑO (SEP-NOV)), se ha identificado un nido secundario pasado/abandonado. Estado colmena: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica. / SIN MIELADA: Posibilidad de aplicar tratamientos sanitarios autorizados de mayor eficacia y suplementación nutricional. / COLMENA DEBILITADA (Cría < 6 cuadros): Alto riesgo de asedio, robo de reservas y asfixia en piquera.. El nido no contiene avispas vivas.",
    "actions": [
      "Verificar con prismáticos la ausencia total de obreras en la piquera del nido durante las horas de mayor insolación.",
      "NO aplicar insecticidas ni contratar pértigas: el ciclo de este nido ha concluido.",
      "Prioridad sanitaria urgente: Tratar la Varroa de inmediato con formulaciones autorizadas según temporada.",
      "Enfocar los recursos en la protección física de las piqueras de las colmenas vivas."
    ],
    "preventiveMeasures": [
      "Recordar que las reinas fundadoras no hibernan en el nido de origen, sino en oquedades protegidas del suelo o madera.",
      "Registrar la coordenada geográfica del nido para el histórico de presión del apiario."
    ],
    "safetyWarnings": [
      "No escalar árboles con ramas quebradizas para inspeccionar nidos que ya están inactivos.",
      "ALERTA: Si no se trata la Varroa, la colmena colapsará antes de la llegada del invierno."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_no||vit_low||api_act_nido||nido_emb_pre||fin_eliminar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): NEUTRALIZACIÓN DE EMBRIONARIO AÑO",
    "summary": "Localización de embrionario año en el perímetro del apiario durante OTOÑO (SEP-NOV). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: No. Fuerza de cría: < 6 cuadros. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Retirada directa al amanecer con bolsa estanca o spray frío, capturando a la reina fundadora.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_no||vit_low||api_act_nido||nido_pri_pre||fin_eliminar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): NEUTRALIZACIÓN DE PRIMARIO AÑO",
    "summary": "Localización de primario año en el perímetro del apiario durante OTOÑO (SEP-NOV). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: No. Fuerza de cría: < 6 cuadros. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_no||vit_low||api_act_nido||nido_sec_pre||fin_eliminar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): NEUTRALIZACIÓN DE SECUNDARIO AÑO",
    "summary": "Localización de secundario año en el perímetro del apiario durante OTOÑO (SEP-NOV). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: No. Fuerza de cría: < 6 cuadros. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_no||vit_low||api_act_cont||met_tram_fund||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): TRAMPEO FUNDADORAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Trampeo Fundadoras. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Despliegue perimetral de trampas con atrayente azucarado-alcohólico cada 50 metros en el borde del apiario.",
      "Cebo: 50% cerveza negra/rubia, 25% vino blanco, 25% sirope de frutas rojas o grosella.",
      "Revisión semanal estricta para vaciar capturas y renovar el líquido atrayente.",
      "Cierre o retirada obligatoria de las trampas en cuanto finalice el periodo primaveral de fundadoras.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_no||vit_low||api_act_cont||met_trampeo||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): TRAMPEO CONTROL + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Trampeo Control. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Colocación de trampas selectivas de control en los laterales del colmenar para desviar la atención de las piqueras.",
      "Uso de atrayentes proteicos (pescado macerado, carne) o hidrocarbonados según la fase de cría del nido.",
      "Control exhaustivo de la no afección a polinizadores autóctonos.",
      "Registro del número de capturas por día y trampa.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_no||vit_low||api_act_cont||met_arpas||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): ARPAS ELÉCTRICAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Arpas Eléctricas. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Instalación de arpas eléctricas entre colmenas con distancia de paso de 1.2 a 1.5 metros.",
      "Ajuste del generador de impulsos a 1.6 - 2.0 kV (suficiente para derribar velutina sin electrocutar abejas).",
      "Colocación de bandeja inferior con 3 cm de agua y unas gotas de jabón biodegradable para ahogar ejemplares aturdidos.",
      "Revisión diaria del cableado para retirar insectos carbonizados que descarguen las baterías.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "PELIGRO ELÉCTRICO: Desconectar el pastor eléctrico antes de cualquier manipulación o deshierbe.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_no||vit_low||api_act_cont||met_bozales||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): BOZALES + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Bozales. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Colocación de bozales de piquera de alambre galvanizado (malla de 5.5 a 6 mm).",
      "Asegurar que el bozal sobresalga al menos 15-20 cm hacia el frente de la piquera.",
      "Verificar que las abejas entren y salgan volando sin detenerse en el exterior del bozal.",
      "Comprobar que los zánganos puedan salir y no obstruyan la rejilla.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_no||vit_low||api_act_cont||met_koldo||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): TRAMPAS KOLDO-BAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Trampas Koldo-Bas. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Montaje de trampas Koldo-Bas en los frentes de vuelo principales del colmenar.",
      "Comprobación de la selectividad de salida: las abejas escapan por los conos laterales de 5 mm.",
      "Limpieza y retirada periódica de los ejemplares de velutina acumulados en el depósito superior.",
      "Mantener los cebos frescos para maximizar la tasa de atracción.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_no||vit_low||api_act_cont||met_vectores||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): VECTORES + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Vectores. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Captura viva de 5 a 10 obreras de velutina vigorosas en el piquero.",
      "Adhesión de elemento de marcaje visible (cinta flúor ligera o polvo de tiza fluorescente) bajo protocolo homologado.",
      "Liberación y seguimiento mediante cronometraje del tiempo de ida y retorno para calcular la distancia al nido.",
      "Triangulación del vector para localizar y destruir el nido madre causante de los ataques.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_high||miel_no||vit_low||api_act_cont||met_trashum||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): TRASHUMANCIA + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Trashumancia. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Evaluación del nivel de asedio: si la tasa de captura supera 15 velutinas simultáneas por piquera, planificar traslado.",
      "Cierre nocturno de colmenas con malla de ventilación superior.",
      "Traslado a colmenares de alta montaña (>1.000 m s.n.m.) o áreas con nula presión de velutina.",
      "Alimentación de mantenimiento con jarabe denso a la llegada al nuevo asentamiento.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_si||vit_high||api_act_nido||nido_sec_pas||fin_no_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): NIDO SECUNDARIO PASADO - NO INTERVENIR",
    "summary": "En el entorno del colmenar (OTOÑO (SEP-NOV)), se ha identificado un nido secundario pasado/abandonado. Estado colmena: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa. / CON MIELADA ACTIVA: Se debe preservar la pureza de la miel sin usar tratamientos químicos residuales en colmena. / COLMENA FUERTE (Cría > 6 cuadros): Gran masa de abejas capaz de defender la piquera y generar relevo generacional.. El nido no contiene avispas vivas.",
    "actions": [
      "Verificar con prismáticos la ausencia total de obreras en la piquera del nido durante las horas de mayor insolación.",
      "NO aplicar insecticidas ni contratar pértigas: el ciclo de este nido ha concluido.",
      "Mantener el monitoreo ordinario del colmenar.",
      "Enfocar los recursos en la protección física de las piqueras de las colmenas vivas."
    ],
    "preventiveMeasures": [
      "Recordar que las reinas fundadoras no hibernan en el nido de origen, sino en oquedades protegidas del suelo o madera.",
      "Registrar la coordenada geográfica del nido para el histórico de presión del apiario."
    ],
    "safetyWarnings": [
      "No escalar árboles con ramas quebradizas para inspeccionar nidos que ya están inactivos.",
      "Mantener precauciones estándar de manejo apícola."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_si||vit_high||api_act_nido||nido_emb_pre||fin_eliminar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): NEUTRALIZACIÓN DE EMBRIONARIO AÑO",
    "summary": "Localización de embrionario año en el perímetro del apiario durante OTOÑO (SEP-NOV). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Sí. Fuerza de cría: > 6 cuadros. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Retirada directa al amanecer con bolsa estanca o spray frío, capturando a la reina fundadora.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_si||vit_high||api_act_nido||nido_pri_pre||fin_eliminar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): NEUTRALIZACIÓN DE PRIMARIO AÑO",
    "summary": "Localización de primario año en el perímetro del apiario durante OTOÑO (SEP-NOV). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Sí. Fuerza de cría: > 6 cuadros. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_si||vit_high||api_act_nido||nido_sec_pre||fin_eliminar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): NEUTRALIZACIÓN DE SECUNDARIO AÑO",
    "summary": "Localización de secundario año en el perímetro del apiario durante OTOÑO (SEP-NOV). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Sí. Fuerza de cría: > 6 cuadros. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_si||vit_high||api_act_cont||met_tram_fund||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): TRAMPEO FUNDADORAS",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Trampeo Fundadoras. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Alta. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Despliegue perimetral de trampas con atrayente azucarado-alcohólico cada 50 metros en el borde del apiario.",
      "Cebo: 50% cerveza negra/rubia, 25% vino blanco, 25% sirope de frutas rojas o grosella.",
      "Revisión semanal estricta para vaciar capturas y renovar el líquido atrayente.",
      "Cierre o retirada obligatoria de las trampas en cuanto finalice el periodo primaveral de fundadoras."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_si||vit_high||api_act_cont||met_trampeo||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): TRAMPEO CONTROL",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Trampeo Control. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Alta. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Colocación de trampas selectivas de control en los laterales del colmenar para desviar la atención de las piqueras.",
      "Uso de atrayentes proteicos (pescado macerado, carne) o hidrocarbonados según la fase de cría del nido.",
      "Control exhaustivo de la no afección a polinizadores autóctonos.",
      "Registro del número de capturas por día y trampa."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_si||vit_high||api_act_cont||met_arpas||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): ARPAS ELÉCTRICAS",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Arpas Eléctricas. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Alta. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Instalación de arpas eléctricas entre colmenas con distancia de paso de 1.2 a 1.5 metros.",
      "Ajuste del generador de impulsos a 1.6 - 2.0 kV (suficiente para derribar velutina sin electrocutar abejas).",
      "Colocación de bandeja inferior con 3 cm de agua y unas gotas de jabón biodegradable para ahogar ejemplares aturdidos.",
      "Revisión diaria del cableado para retirar insectos carbonizados que descarguen las baterías."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "PELIGRO ELÉCTRICO: Desconectar el pastor eléctrico antes de cualquier manipulación o deshierbe.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_si||vit_high||api_act_cont||met_bozales||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): BOZALES",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Bozales. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Alta. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Colocación de bozales de piquera de alambre galvanizado (malla de 5.5 a 6 mm).",
      "Asegurar que el bozal sobresalga al menos 15-20 cm hacia el frente de la piquera.",
      "Verificar que las abejas entren y salgan volando sin detenerse en el exterior del bozal.",
      "Comprobar que los zánganos puedan salir y no obstruyan la rejilla."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_si||vit_high||api_act_cont||met_koldo||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): TRAMPAS KOLDO-BAS",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Trampas Koldo-Bas. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Alta. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Montaje de trampas Koldo-Bas en los frentes de vuelo principales del colmenar.",
      "Comprobación de la selectividad de salida: las abejas escapan por los conos laterales de 5 mm.",
      "Limpieza y retirada periódica de los ejemplares de velutina acumulados en el depósito superior.",
      "Mantener los cebos frescos para maximizar la tasa de atracción."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_si||vit_high||api_act_cont||met_vectores||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): VECTORES",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Vectores. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Alta. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Captura viva de 5 a 10 obreras de velutina vigorosas en el piquero.",
      "Adhesión de elemento de marcaje visible (cinta flúor ligera o polvo de tiza fluorescente) bajo protocolo homologado.",
      "Liberación y seguimiento mediante cronometraje del tiempo de ida y retorno para calcular la distancia al nido.",
      "Triangulación del vector para localizar y destruir el nido madre causante de los ataques."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_si||vit_high||api_act_cont||met_trashum||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): TRASHUMANCIA",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Trashumancia. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Alta. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Evaluación del nivel de asedio: si la tasa de captura supera 15 velutinas simultáneas por piquera, planificar traslado.",
      "Cierre nocturno de colmenas con malla de ventilación superior.",
      "Traslado a colmenares de alta montaña (>1.000 m s.n.m.) o áreas con nula presión de velutina.",
      "Alimentación de mantenimiento con jarabe denso a la llegada al nuevo asentamiento."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_si||vit_low||api_act_nido||nido_sec_pas||fin_no_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): NIDO SECUNDARIO PASADO - NO INTERVENIR",
    "summary": "En el entorno del colmenar (OTOÑO (SEP-NOV)), se ha identificado un nido secundario pasado/abandonado. Estado colmena: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa. / CON MIELADA ACTIVA: Se debe preservar la pureza de la miel sin usar tratamientos químicos residuales en colmena. / COLMENA DEBILITADA (Cría < 6 cuadros): Alto riesgo de asedio, robo de reservas y asfixia en piquera.. El nido no contiene avispas vivas.",
    "actions": [
      "Verificar con prismáticos la ausencia total de obreras en la piquera del nido durante las horas de mayor insolación.",
      "NO aplicar insecticidas ni contratar pértigas: el ciclo de este nido ha concluido.",
      "Mantener el monitoreo ordinario del colmenar.",
      "Enfocar los recursos en la protección física de las piqueras de las colmenas vivas."
    ],
    "preventiveMeasures": [
      "Recordar que las reinas fundadoras no hibernan en el nido de origen, sino en oquedades protegidas del suelo o madera.",
      "Registrar la coordenada geográfica del nido para el histórico de presión del apiario."
    ],
    "safetyWarnings": [
      "No escalar árboles con ramas quebradizas para inspeccionar nidos que ya están inactivos.",
      "Mantener precauciones estándar de manejo apícola."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_si||vit_low||api_act_nido||nido_emb_pre||fin_eliminar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): NEUTRALIZACIÓN DE EMBRIONARIO AÑO",
    "summary": "Localización de embrionario año en el perímetro del apiario durante OTOÑO (SEP-NOV). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Sí. Fuerza de cría: < 6 cuadros. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Retirada directa al amanecer con bolsa estanca o spray frío, capturando a la reina fundadora.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_si||vit_low||api_act_nido||nido_pri_pre||fin_eliminar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): NEUTRALIZACIÓN DE PRIMARIO AÑO",
    "summary": "Localización de primario año en el perímetro del apiario durante OTOÑO (SEP-NOV). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Sí. Fuerza de cría: < 6 cuadros. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_si||vit_low||api_act_nido||nido_sec_pre||fin_eliminar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): NEUTRALIZACIÓN DE SECUNDARIO AÑO",
    "summary": "Localización de secundario año en el perímetro del apiario durante OTOÑO (SEP-NOV). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Sí. Fuerza de cría: < 6 cuadros. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_si||vit_low||api_act_cont||met_tram_fund||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): TRAMPEO FUNDADORAS",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Trampeo Fundadoras. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Despliegue perimetral de trampas con atrayente azucarado-alcohólico cada 50 metros en el borde del apiario.",
      "Cebo: 50% cerveza negra/rubia, 25% vino blanco, 25% sirope de frutas rojas o grosella.",
      "Revisión semanal estricta para vaciar capturas y renovar el líquido atrayente.",
      "Cierre o retirada obligatoria de las trampas en cuanto finalice el periodo primaveral de fundadoras.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_si||vit_low||api_act_cont||met_trampeo||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): TRAMPEO CONTROL",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Trampeo Control. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Colocación de trampas selectivas de control en los laterales del colmenar para desviar la atención de las piqueras.",
      "Uso de atrayentes proteicos (pescado macerado, carne) o hidrocarbonados según la fase de cría del nido.",
      "Control exhaustivo de la no afección a polinizadores autóctonos.",
      "Registro del número de capturas por día y trampa.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_si||vit_low||api_act_cont||met_arpas||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): ARPAS ELÉCTRICAS",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Arpas Eléctricas. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Instalación de arpas eléctricas entre colmenas con distancia de paso de 1.2 a 1.5 metros.",
      "Ajuste del generador de impulsos a 1.6 - 2.0 kV (suficiente para derribar velutina sin electrocutar abejas).",
      "Colocación de bandeja inferior con 3 cm de agua y unas gotas de jabón biodegradable para ahogar ejemplares aturdidos.",
      "Revisión diaria del cableado para retirar insectos carbonizados que descarguen las baterías.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "PELIGRO ELÉCTRICO: Desconectar el pastor eléctrico antes de cualquier manipulación o deshierbe.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_si||vit_low||api_act_cont||met_bozales||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): BOZALES",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Bozales. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Colocación de bozales de piquera de alambre galvanizado (malla de 5.5 a 6 mm).",
      "Asegurar que el bozal sobresalga al menos 15-20 cm hacia el frente de la piquera.",
      "Verificar que las abejas entren y salgan volando sin detenerse en el exterior del bozal.",
      "Comprobar que los zánganos puedan salir y no obstruyan la rejilla.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_si||vit_low||api_act_cont||met_koldo||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): TRAMPAS KOLDO-BAS",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Trampas Koldo-Bas. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Montaje de trampas Koldo-Bas en los frentes de vuelo principales del colmenar.",
      "Comprobación de la selectividad de salida: las abejas escapan por los conos laterales de 5 mm.",
      "Limpieza y retirada periódica de los ejemplares de velutina acumulados en el depósito superior.",
      "Mantener los cebos frescos para maximizar la tasa de atracción.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_si||vit_low||api_act_cont||met_vectores||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): VECTORES",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Vectores. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Captura viva de 5 a 10 obreras de velutina vigorosas en el piquero.",
      "Adhesión de elemento de marcaje visible (cinta flúor ligera o polvo de tiza fluorescente) bajo protocolo homologado.",
      "Liberación y seguimiento mediante cronometraje del tiempo de ida y retorno para calcular la distancia al nido.",
      "Triangulación del vector para localizar y destruir el nido madre causante de los ataques.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_si||vit_low||api_act_cont||met_trashum||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): TRASHUMANCIA",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Trashumancia. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Evaluación del nivel de asedio: si la tasa de captura supera 15 velutinas simultáneas por piquera, planificar traslado.",
      "Cierre nocturno de colmenas con malla de ventilación superior.",
      "Traslado a colmenares de alta montaña (>1.000 m s.n.m.) o áreas con nula presión de velutina.",
      "Alimentación de mantenimiento con jarabe denso a la llegada al nuevo asentamiento.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_no||vit_high||api_act_nido||nido_sec_pas||fin_no_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): NIDO SECUNDARIO PASADO - NO INTERVENIR",
    "summary": "En el entorno del colmenar (OTOÑO (SEP-NOV)), se ha identificado un nido secundario pasado/abandonado. Estado colmena: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa. / SIN MIELADA: Posibilidad de aplicar tratamientos sanitarios autorizados de mayor eficacia y suplementación nutricional. / COLMENA FUERTE (Cría > 6 cuadros): Gran masa de abejas capaz de defender la piquera y generar relevo generacional.. El nido no contiene avispas vivas.",
    "actions": [
      "Verificar con prismáticos la ausencia total de obreras en la piquera del nido durante las horas de mayor insolación.",
      "NO aplicar insecticidas ni contratar pértigas: el ciclo de este nido ha concluido.",
      "Mantener el monitoreo ordinario del colmenar.",
      "Enfocar los recursos en la protección física de las piqueras de las colmenas vivas."
    ],
    "preventiveMeasures": [
      "Recordar que las reinas fundadoras no hibernan en el nido de origen, sino en oquedades protegidas del suelo o madera.",
      "Registrar la coordenada geográfica del nido para el histórico de presión del apiario."
    ],
    "safetyWarnings": [
      "No escalar árboles con ramas quebradizas para inspeccionar nidos que ya están inactivos.",
      "Mantener precauciones estándar de manejo apícola."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_no||vit_high||api_act_nido||nido_emb_pre||fin_eliminar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): NEUTRALIZACIÓN DE EMBRIONARIO AÑO",
    "summary": "Localización de embrionario año en el perímetro del apiario durante OTOÑO (SEP-NOV). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: No. Fuerza de cría: > 6 cuadros. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Retirada directa al amanecer con bolsa estanca o spray frío, capturando a la reina fundadora.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_no||vit_high||api_act_nido||nido_pri_pre||fin_eliminar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): NEUTRALIZACIÓN DE PRIMARIO AÑO",
    "summary": "Localización de primario año en el perímetro del apiario durante OTOÑO (SEP-NOV). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: No. Fuerza de cría: > 6 cuadros. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_no||vit_high||api_act_nido||nido_sec_pre||fin_eliminar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): NEUTRALIZACIÓN DE SECUNDARIO AÑO",
    "summary": "Localización de secundario año en el perímetro del apiario durante OTOÑO (SEP-NOV). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: No. Fuerza de cría: > 6 cuadros. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_no||vit_high||api_act_cont||met_tram_fund||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): TRAMPEO FUNDADORAS",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Trampeo Fundadoras. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Alta. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Despliegue perimetral de trampas con atrayente azucarado-alcohólico cada 50 metros en el borde del apiario.",
      "Cebo: 50% cerveza negra/rubia, 25% vino blanco, 25% sirope de frutas rojas o grosella.",
      "Revisión semanal estricta para vaciar capturas y renovar el líquido atrayente.",
      "Cierre o retirada obligatoria de las trampas en cuanto finalice el periodo primaveral de fundadoras."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_no||vit_high||api_act_cont||met_trampeo||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): TRAMPEO CONTROL",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Trampeo Control. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Alta. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Colocación de trampas selectivas de control en los laterales del colmenar para desviar la atención de las piqueras.",
      "Uso de atrayentes proteicos (pescado macerado, carne) o hidrocarbonados según la fase de cría del nido.",
      "Control exhaustivo de la no afección a polinizadores autóctonos.",
      "Registro del número de capturas por día y trampa."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_no||vit_high||api_act_cont||met_arpas||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): ARPAS ELÉCTRICAS",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Arpas Eléctricas. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Alta. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Instalación de arpas eléctricas entre colmenas con distancia de paso de 1.2 a 1.5 metros.",
      "Ajuste del generador de impulsos a 1.6 - 2.0 kV (suficiente para derribar velutina sin electrocutar abejas).",
      "Colocación de bandeja inferior con 3 cm de agua y unas gotas de jabón biodegradable para ahogar ejemplares aturdidos.",
      "Revisión diaria del cableado para retirar insectos carbonizados que descarguen las baterías."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "PELIGRO ELÉCTRICO: Desconectar el pastor eléctrico antes de cualquier manipulación o deshierbe.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_no||vit_high||api_act_cont||met_bozales||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): BOZALES",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Bozales. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Alta. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Colocación de bozales de piquera de alambre galvanizado (malla de 5.5 a 6 mm).",
      "Asegurar que el bozal sobresalga al menos 15-20 cm hacia el frente de la piquera.",
      "Verificar que las abejas entren y salgan volando sin detenerse en el exterior del bozal.",
      "Comprobar que los zánganos puedan salir y no obstruyan la rejilla."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_no||vit_high||api_act_cont||met_koldo||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): TRAMPAS KOLDO-BAS",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Trampas Koldo-Bas. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Alta. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Montaje de trampas Koldo-Bas en los frentes de vuelo principales del colmenar.",
      "Comprobación de la selectividad de salida: las abejas escapan por los conos laterales de 5 mm.",
      "Limpieza y retirada periódica de los ejemplares de velutina acumulados en el depósito superior.",
      "Mantener los cebos frescos para maximizar la tasa de atracción."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_no||vit_high||api_act_cont||met_vectores||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): VECTORES",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Vectores. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Alta. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Captura viva de 5 a 10 obreras de velutina vigorosas en el piquero.",
      "Adhesión de elemento de marcaje visible (cinta flúor ligera o polvo de tiza fluorescente) bajo protocolo homologado.",
      "Liberación y seguimiento mediante cronometraje del tiempo de ida y retorno para calcular la distancia al nido.",
      "Triangulación del vector para localizar y destruir el nido madre causante de los ataques."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_no||vit_high||api_act_cont||met_trashum||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): TRASHUMANCIA",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Trashumancia. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Alta. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Evaluación del nivel de asedio: si la tasa de captura supera 15 velutinas simultáneas por piquera, planificar traslado.",
      "Cierre nocturno de colmenas con malla de ventilación superior.",
      "Traslado a colmenares de alta montaña (>1.000 m s.n.m.) o áreas con nula presión de velutina.",
      "Alimentación de mantenimiento con jarabe denso a la llegada al nuevo asentamiento."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_no||vit_low||api_act_nido||nido_sec_pas||fin_no_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): NIDO SECUNDARIO PASADO - NO INTERVENIR",
    "summary": "En el entorno del colmenar (OTOÑO (SEP-NOV)), se ha identificado un nido secundario pasado/abandonado. Estado colmena: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa. / SIN MIELADA: Posibilidad de aplicar tratamientos sanitarios autorizados de mayor eficacia y suplementación nutricional. / COLMENA DEBILITADA (Cría < 6 cuadros): Alto riesgo de asedio, robo de reservas y asfixia en piquera.. El nido no contiene avispas vivas.",
    "actions": [
      "Verificar con prismáticos la ausencia total de obreras en la piquera del nido durante las horas de mayor insolación.",
      "NO aplicar insecticidas ni contratar pértigas: el ciclo de este nido ha concluido.",
      "Mantener el monitoreo ordinario del colmenar.",
      "Enfocar los recursos en la protección física de las piqueras de las colmenas vivas."
    ],
    "preventiveMeasures": [
      "Recordar que las reinas fundadoras no hibernan en el nido de origen, sino en oquedades protegidas del suelo o madera.",
      "Registrar la coordenada geográfica del nido para el histórico de presión del apiario."
    ],
    "safetyWarnings": [
      "No escalar árboles con ramas quebradizas para inspeccionar nidos que ya están inactivos.",
      "Mantener precauciones estándar de manejo apícola."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_no||vit_low||api_act_nido||nido_emb_pre||fin_eliminar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): NEUTRALIZACIÓN DE EMBRIONARIO AÑO",
    "summary": "Localización de embrionario año en el perímetro del apiario durante OTOÑO (SEP-NOV). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: No. Fuerza de cría: < 6 cuadros. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Retirada directa al amanecer con bolsa estanca o spray frío, capturando a la reina fundadora.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_no||vit_low||api_act_nido||nido_pri_pre||fin_eliminar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): NEUTRALIZACIÓN DE PRIMARIO AÑO",
    "summary": "Localización de primario año en el perímetro del apiario durante OTOÑO (SEP-NOV). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: No. Fuerza de cría: < 6 cuadros. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_no||vit_low||api_act_nido||nido_sec_pre||fin_eliminar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): NEUTRALIZACIÓN DE SECUNDARIO AÑO",
    "summary": "Localización de secundario año en el perímetro del apiario durante OTOÑO (SEP-NOV). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: No. Fuerza de cría: < 6 cuadros. Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_no||vit_low||api_act_cont||met_tram_fund||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): TRAMPEO FUNDADORAS",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Trampeo Fundadoras. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Despliegue perimetral de trampas con atrayente azucarado-alcohólico cada 50 metros en el borde del apiario.",
      "Cebo: 50% cerveza negra/rubia, 25% vino blanco, 25% sirope de frutas rojas o grosella.",
      "Revisión semanal estricta para vaciar capturas y renovar el líquido atrayente.",
      "Cierre o retirada obligatoria de las trampas en cuanto finalice el periodo primaveral de fundadoras.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_no||vit_low||api_act_cont||met_trampeo||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): TRAMPEO CONTROL",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Trampeo Control. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Colocación de trampas selectivas de control en los laterales del colmenar para desviar la atención de las piqueras.",
      "Uso de atrayentes proteicos (pescado macerado, carne) o hidrocarbonados según la fase de cría del nido.",
      "Control exhaustivo de la no afección a polinizadores autóctonos.",
      "Registro del número de capturas por día y trampa.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_no||vit_low||api_act_cont||met_arpas||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): ARPAS ELÉCTRICAS",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Arpas Eléctricas. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Instalación de arpas eléctricas entre colmenas con distancia de paso de 1.2 a 1.5 metros.",
      "Ajuste del generador de impulsos a 1.6 - 2.0 kV (suficiente para derribar velutina sin electrocutar abejas).",
      "Colocación de bandeja inferior con 3 cm de agua y unas gotas de jabón biodegradable para ahogar ejemplares aturdidos.",
      "Revisión diaria del cableado para retirar insectos carbonizados que descarguen las baterías.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "PELIGRO ELÉCTRICO: Desconectar el pastor eléctrico antes de cualquier manipulación o deshierbe.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_no||vit_low||api_act_cont||met_bozales||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): BOZALES",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Bozales. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Colocación de bozales de piquera de alambre galvanizado (malla de 5.5 a 6 mm).",
      "Asegurar que el bozal sobresalga al menos 15-20 cm hacia el frente de la piquera.",
      "Verificar que las abejas entren y salgan volando sin detenerse en el exterior del bozal.",
      "Comprobar que los zánganos puedan salir y no obstruyan la rejilla.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_no||vit_low||api_act_cont||met_koldo||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): TRAMPAS KOLDO-BAS",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Trampas Koldo-Bas. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Montaje de trampas Koldo-Bas en los frentes de vuelo principales del colmenar.",
      "Comprobación de la selectividad de salida: las abejas escapan por los conos laterales de 5 mm.",
      "Limpieza y retirada periódica de los ejemplares de velutina acumulados en el depósito superior.",
      "Mantener los cebos frescos para maximizar la tasa de atracción.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_no||vit_low||api_act_cont||met_vectores||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): VECTORES",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Vectores. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Captura viva de 5 a 10 obreras de velutina vigorosas en el piquero.",
      "Adhesión de elemento de marcaje visible (cinta flúor ligera o polvo de tiza fluorescente) bajo protocolo homologado.",
      "Liberación y seguimiento mediante cronometraje del tiempo de ida y retorno para calcular la distancia al nido.",
      "Triangulación del vector para localizar y destruir el nido madre causante de los ataques.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_s_n||var_low||miel_no||vit_low||api_act_cont||met_trashum||fin_actuar": {
    "title": "APIARIO (OTOÑO (SEP-NOV)): TRASHUMANCIA",
    "summary": "Protocolo integral en colmenar durante OTOÑO (SEP-NOV). Método principal: Trashumancia. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Pico poblacional y fecundación de nuevas reinas. Depredación voraz sobre reservas proteicas de la colmena. Arpas a máximo rendimiento y trampas selectivas intensivas en piquera.",
    "actions": [
      "Evaluación del nivel de asedio: si la tasa de captura supera 15 velutinas simultáneas por piquera, planificar traslado.",
      "Cierre nocturno de colmenas con malla de ventilación superior.",
      "Traslado a colmenares de alta montaña (>1.000 m s.n.m.) o áreas con nula presión de velutina.",
      "Alimentación de mantenimiento con jarabe denso a la llegada al nuevo asentamiento.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_si||vit_high||api_act_nido||nido_sec_pas||fin_no_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): NIDO SECUNDARIO PASADO - NO INTERVENIR",
    "summary": "En el entorno del colmenar (INVIERNO (DIC-ENE)), se ha identificado un nido secundario pasado/abandonado. Estado colmena: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica. / CON MIELADA ACTIVA: Se debe preservar la pureza de la miel sin usar tratamientos químicos residuales en colmena. / COLMENA FUERTE (Cría > 6 cuadros): Gran masa de abejas capaz de defender la piquera y generar relevo generacional.. El nido no contiene avispas vivas.",
    "actions": [
      "Verificar con prismáticos la ausencia total de obreras en la piquera del nido durante las horas de mayor insolación.",
      "NO aplicar insecticidas ni contratar pértigas: el ciclo de este nido ha concluido.",
      "Prioridad sanitaria urgente: Tratar la Varroa de inmediato con formulaciones autorizadas según temporada.",
      "Enfocar los recursos en la protección física de las piqueras de las colmenas vivas."
    ],
    "preventiveMeasures": [
      "Recordar que las reinas fundadoras no hibernan en el nido de origen, sino en oquedades protegidas del suelo o madera.",
      "Registrar la coordenada geográfica del nido para el histórico de presión del apiario."
    ],
    "safetyWarnings": [
      "No escalar árboles con ramas quebradizas para inspeccionar nidos que ya están inactivos.",
      "ALERTA: Si no se trata la Varroa, la colmena colapsará antes de la llegada del invierno."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_si||vit_high||api_act_nido||nido_emb_pre||fin_eliminar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): NEUTRALIZACIÓN DE EMBRIONARIO AÑO",
    "summary": "Localización de embrionario año en el perímetro del apiario durante INVIERNO (DIC-ENE). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Sí. Fuerza de cría: > 6 cuadros. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Retirada directa al amanecer con bolsa estanca o spray frío, capturando a la reina fundadora.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_si||vit_high||api_act_nido||nido_pri_pre||fin_eliminar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): NEUTRALIZACIÓN DE PRIMARIO AÑO",
    "summary": "Localización de primario año en el perímetro del apiario durante INVIERNO (DIC-ENE). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Sí. Fuerza de cría: > 6 cuadros. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_si||vit_high||api_act_nido||nido_sec_pre||fin_eliminar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): NEUTRALIZACIÓN DE SECUNDARIO AÑO",
    "summary": "Localización de secundario año en el perímetro del apiario durante INVIERNO (DIC-ENE). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Sí. Fuerza de cría: > 6 cuadros. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_si||vit_high||api_act_cont||met_tram_fund||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): TRAMPEO FUNDADORAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Trampeo Fundadoras. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Despliegue perimetral de trampas con atrayente azucarado-alcohólico cada 50 metros en el borde del apiario.",
      "Cebo: 50% cerveza negra/rubia, 25% vino blanco, 25% sirope de frutas rojas o grosella.",
      "Revisión semanal estricta para vaciar capturas y renovar el líquido atrayente.",
      "Cierre o retirada obligatoria de las trampas en cuanto finalice el periodo primaveral de fundadoras.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa)."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_si||vit_high||api_act_cont||met_trampeo||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): TRAMPEO CONTROL + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Trampeo Control. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Colocación de trampas selectivas de control en los laterales del colmenar para desviar la atención de las piqueras.",
      "Uso de atrayentes proteicos (pescado macerado, carne) o hidrocarbonados según la fase de cría del nido.",
      "Control exhaustivo de la no afección a polinizadores autóctonos.",
      "Registro del número de capturas por día y trampa.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa)."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_si||vit_high||api_act_cont||met_arpas||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): ARPAS ELÉCTRICAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Arpas Eléctricas. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Instalación de arpas eléctricas entre colmenas con distancia de paso de 1.2 a 1.5 metros.",
      "Ajuste del generador de impulsos a 1.6 - 2.0 kV (suficiente para derribar velutina sin electrocutar abejas).",
      "Colocación de bandeja inferior con 3 cm de agua y unas gotas de jabón biodegradable para ahogar ejemplares aturdidos.",
      "Revisión diaria del cableado para retirar insectos carbonizados que descarguen las baterías.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa)."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "PELIGRO ELÉCTRICO: Desconectar el pastor eléctrico antes de cualquier manipulación o deshierbe.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_si||vit_high||api_act_cont||met_bozales||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): BOZALES + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Bozales. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Colocación de bozales de piquera de alambre galvanizado (malla de 5.5 a 6 mm).",
      "Asegurar que el bozal sobresalga al menos 15-20 cm hacia el frente de la piquera.",
      "Verificar que las abejas entren y salgan volando sin detenerse en el exterior del bozal.",
      "Comprobar que los zánganos puedan salir y no obstruyan la rejilla.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa)."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_si||vit_high||api_act_cont||met_koldo||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): TRAMPAS KOLDO-BAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Trampas Koldo-Bas. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Montaje de trampas Koldo-Bas en los frentes de vuelo principales del colmenar.",
      "Comprobación de la selectividad de salida: las abejas escapan por los conos laterales de 5 mm.",
      "Limpieza y retirada periódica de los ejemplares de velutina acumulados en el depósito superior.",
      "Mantener los cebos frescos para maximizar la tasa de atracción.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa)."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_si||vit_high||api_act_cont||met_vectores||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): VECTORES + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Vectores. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Captura viva de 5 a 10 obreras de velutina vigorosas en el piquero.",
      "Adhesión de elemento de marcaje visible (cinta flúor ligera o polvo de tiza fluorescente) bajo protocolo homologado.",
      "Liberación y seguimiento mediante cronometraje del tiempo de ida y retorno para calcular la distancia al nido.",
      "Triangulación del vector para localizar y destruir el nido madre causante de los ataques.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa)."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_si||vit_high||api_act_cont||met_trashum||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): TRASHUMANCIA + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Trashumancia. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Evaluación del nivel de asedio: si la tasa de captura supera 15 velutinas simultáneas por piquera, planificar traslado.",
      "Cierre nocturno de colmenas con malla de ventilación superior.",
      "Traslado a colmenares de alta montaña (>1.000 m s.n.m.) o áreas con nula presión de velutina.",
      "Alimentación de mantenimiento con jarabe denso a la llegada al nuevo asentamiento.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa)."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_si||vit_low||api_act_nido||nido_sec_pas||fin_no_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): NIDO SECUNDARIO PASADO - NO INTERVENIR",
    "summary": "En el entorno del colmenar (INVIERNO (DIC-ENE)), se ha identificado un nido secundario pasado/abandonado. Estado colmena: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica. / CON MIELADA ACTIVA: Se debe preservar la pureza de la miel sin usar tratamientos químicos residuales en colmena. / COLMENA DEBILITADA (Cría < 6 cuadros): Alto riesgo de asedio, robo de reservas y asfixia en piquera.. El nido no contiene avispas vivas.",
    "actions": [
      "Verificar con prismáticos la ausencia total de obreras en la piquera del nido durante las horas de mayor insolación.",
      "NO aplicar insecticidas ni contratar pértigas: el ciclo de este nido ha concluido.",
      "Prioridad sanitaria urgente: Tratar la Varroa de inmediato con formulaciones autorizadas según temporada.",
      "Enfocar los recursos en la protección física de las piqueras de las colmenas vivas."
    ],
    "preventiveMeasures": [
      "Recordar que las reinas fundadoras no hibernan en el nido de origen, sino en oquedades protegidas del suelo o madera.",
      "Registrar la coordenada geográfica del nido para el histórico de presión del apiario."
    ],
    "safetyWarnings": [
      "No escalar árboles con ramas quebradizas para inspeccionar nidos que ya están inactivos.",
      "ALERTA: Si no se trata la Varroa, la colmena colapsará antes de la llegada del invierno."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_si||vit_low||api_act_nido||nido_emb_pre||fin_eliminar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): NEUTRALIZACIÓN DE EMBRIONARIO AÑO",
    "summary": "Localización de embrionario año en el perímetro del apiario durante INVIERNO (DIC-ENE). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Sí. Fuerza de cría: < 6 cuadros. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Retirada directa al amanecer con bolsa estanca o spray frío, capturando a la reina fundadora.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_si||vit_low||api_act_nido||nido_pri_pre||fin_eliminar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): NEUTRALIZACIÓN DE PRIMARIO AÑO",
    "summary": "Localización de primario año en el perímetro del apiario durante INVIERNO (DIC-ENE). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Sí. Fuerza de cría: < 6 cuadros. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_si||vit_low||api_act_nido||nido_sec_pre||fin_eliminar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): NEUTRALIZACIÓN DE SECUNDARIO AÑO",
    "summary": "Localización de secundario año en el perímetro del apiario durante INVIERNO (DIC-ENE). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Sí. Fuerza de cría: < 6 cuadros. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_si||vit_low||api_act_cont||met_tram_fund||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): TRAMPEO FUNDADORAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Trampeo Fundadoras. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Despliegue perimetral de trampas con atrayente azucarado-alcohólico cada 50 metros en el borde del apiario.",
      "Cebo: 50% cerveza negra/rubia, 25% vino blanco, 25% sirope de frutas rojas o grosella.",
      "Revisión semanal estricta para vaciar capturas y renovar el líquido atrayente.",
      "Cierre o retirada obligatoria de las trampas en cuanto finalice el periodo primaveral de fundadoras.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa).",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_si||vit_low||api_act_cont||met_trampeo||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): TRAMPEO CONTROL + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Trampeo Control. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Colocación de trampas selectivas de control en los laterales del colmenar para desviar la atención de las piqueras.",
      "Uso de atrayentes proteicos (pescado macerado, carne) o hidrocarbonados según la fase de cría del nido.",
      "Control exhaustivo de la no afección a polinizadores autóctonos.",
      "Registro del número de capturas por día y trampa.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa).",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_si||vit_low||api_act_cont||met_arpas||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): ARPAS ELÉCTRICAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Arpas Eléctricas. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Instalación de arpas eléctricas entre colmenas con distancia de paso de 1.2 a 1.5 metros.",
      "Ajuste del generador de impulsos a 1.6 - 2.0 kV (suficiente para derribar velutina sin electrocutar abejas).",
      "Colocación de bandeja inferior con 3 cm de agua y unas gotas de jabón biodegradable para ahogar ejemplares aturdidos.",
      "Revisión diaria del cableado para retirar insectos carbonizados que descarguen las baterías.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa).",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "PELIGRO ELÉCTRICO: Desconectar el pastor eléctrico antes de cualquier manipulación o deshierbe.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_si||vit_low||api_act_cont||met_bozales||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): BOZALES + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Bozales. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Colocación de bozales de piquera de alambre galvanizado (malla de 5.5 a 6 mm).",
      "Asegurar que el bozal sobresalga al menos 15-20 cm hacia el frente de la piquera.",
      "Verificar que las abejas entren y salgan volando sin detenerse en el exterior del bozal.",
      "Comprobar que los zánganos puedan salir y no obstruyan la rejilla.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa).",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_si||vit_low||api_act_cont||met_koldo||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): TRAMPAS KOLDO-BAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Trampas Koldo-Bas. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Montaje de trampas Koldo-Bas en los frentes de vuelo principales del colmenar.",
      "Comprobación de la selectividad de salida: las abejas escapan por los conos laterales de 5 mm.",
      "Limpieza y retirada periódica de los ejemplares de velutina acumulados en el depósito superior.",
      "Mantener los cebos frescos para maximizar la tasa de atracción.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa).",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_si||vit_low||api_act_cont||met_vectores||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): VECTORES + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Vectores. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Captura viva de 5 a 10 obreras de velutina vigorosas en el piquero.",
      "Adhesión de elemento de marcaje visible (cinta flúor ligera o polvo de tiza fluorescente) bajo protocolo homologado.",
      "Liberación y seguimiento mediante cronometraje del tiempo de ida y retorno para calcular la distancia al nido.",
      "Triangulación del vector para localizar y destruir el nido madre causante de los ataques.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa).",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_si||vit_low||api_act_cont||met_trashum||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): TRASHUMANCIA + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Trashumancia. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Evaluación del nivel de asedio: si la tasa de captura supera 15 velutinas simultáneas por piquera, planificar traslado.",
      "Cierre nocturno de colmenas con malla de ventilación superior.",
      "Traslado a colmenares de alta montaña (>1.000 m s.n.m.) o áreas con nula presión de velutina.",
      "Alimentación de mantenimiento con jarabe denso a la llegada al nuevo asentamiento.",
      "TRATAMIENTO URGENTE DE VARROA CON MIELADA: Utilizar exclusivamente tratamientos autorizados sin plazo de supresión (Ácido Fórmico en difusores MAQS/Formicpro o Ácido Oxálico por sublimación/tiras de celulosa).",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_no||vit_high||api_act_nido||nido_sec_pas||fin_no_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): NIDO SECUNDARIO PASADO - NO INTERVENIR",
    "summary": "En el entorno del colmenar (INVIERNO (DIC-ENE)), se ha identificado un nido secundario pasado/abandonado. Estado colmena: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica. / SIN MIELADA: Posibilidad de aplicar tratamientos sanitarios autorizados de mayor eficacia y suplementación nutricional. / COLMENA FUERTE (Cría > 6 cuadros): Gran masa de abejas capaz de defender la piquera y generar relevo generacional.. El nido no contiene avispas vivas.",
    "actions": [
      "Verificar con prismáticos la ausencia total de obreras en la piquera del nido durante las horas de mayor insolación.",
      "NO aplicar insecticidas ni contratar pértigas: el ciclo de este nido ha concluido.",
      "Prioridad sanitaria urgente: Tratar la Varroa de inmediato con formulaciones autorizadas según temporada.",
      "Enfocar los recursos en la protección física de las piqueras de las colmenas vivas."
    ],
    "preventiveMeasures": [
      "Recordar que las reinas fundadoras no hibernan en el nido de origen, sino en oquedades protegidas del suelo o madera.",
      "Registrar la coordenada geográfica del nido para el histórico de presión del apiario."
    ],
    "safetyWarnings": [
      "No escalar árboles con ramas quebradizas para inspeccionar nidos que ya están inactivos.",
      "ALERTA: Si no se trata la Varroa, la colmena colapsará antes de la llegada del invierno."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_no||vit_high||api_act_nido||nido_emb_pre||fin_eliminar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): NEUTRALIZACIÓN DE EMBRIONARIO AÑO",
    "summary": "Localización de embrionario año en el perímetro del apiario durante INVIERNO (DIC-ENE). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: No. Fuerza de cría: > 6 cuadros. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Retirada directa al amanecer con bolsa estanca o spray frío, capturando a la reina fundadora.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_no||vit_high||api_act_nido||nido_pri_pre||fin_eliminar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): NEUTRALIZACIÓN DE PRIMARIO AÑO",
    "summary": "Localización de primario año en el perímetro del apiario durante INVIERNO (DIC-ENE). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: No. Fuerza de cría: > 6 cuadros. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_no||vit_high||api_act_nido||nido_sec_pre||fin_eliminar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): NEUTRALIZACIÓN DE SECUNDARIO AÑO",
    "summary": "Localización de secundario año en el perímetro del apiario durante INVIERNO (DIC-ENE). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: No. Fuerza de cría: > 6 cuadros. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_no||vit_high||api_act_cont||met_tram_fund||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): TRAMPEO FUNDADORAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Trampeo Fundadoras. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Despliegue perimetral de trampas con atrayente azucarado-alcohólico cada 50 metros en el borde del apiario.",
      "Cebo: 50% cerveza negra/rubia, 25% vino blanco, 25% sirope de frutas rojas o grosella.",
      "Revisión semanal estricta para vaciar capturas y renovar el líquido atrayente.",
      "Cierre o retirada obligatoria de las trampas en cuanto finalice el periodo primaveral de fundadoras.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_no||vit_high||api_act_cont||met_trampeo||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): TRAMPEO CONTROL + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Trampeo Control. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Colocación de trampas selectivas de control en los laterales del colmenar para desviar la atención de las piqueras.",
      "Uso de atrayentes proteicos (pescado macerado, carne) o hidrocarbonados según la fase de cría del nido.",
      "Control exhaustivo de la no afección a polinizadores autóctonos.",
      "Registro del número de capturas por día y trampa.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_no||vit_high||api_act_cont||met_arpas||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): ARPAS ELÉCTRICAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Arpas Eléctricas. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Instalación de arpas eléctricas entre colmenas con distancia de paso de 1.2 a 1.5 metros.",
      "Ajuste del generador de impulsos a 1.6 - 2.0 kV (suficiente para derribar velutina sin electrocutar abejas).",
      "Colocación de bandeja inferior con 3 cm de agua y unas gotas de jabón biodegradable para ahogar ejemplares aturdidos.",
      "Revisión diaria del cableado para retirar insectos carbonizados que descarguen las baterías.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "PELIGRO ELÉCTRICO: Desconectar el pastor eléctrico antes de cualquier manipulación o deshierbe.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_no||vit_high||api_act_cont||met_bozales||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): BOZALES + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Bozales. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Colocación de bozales de piquera de alambre galvanizado (malla de 5.5 a 6 mm).",
      "Asegurar que el bozal sobresalga al menos 15-20 cm hacia el frente de la piquera.",
      "Verificar que las abejas entren y salgan volando sin detenerse en el exterior del bozal.",
      "Comprobar que los zánganos puedan salir y no obstruyan la rejilla.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_no||vit_high||api_act_cont||met_koldo||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): TRAMPAS KOLDO-BAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Trampas Koldo-Bas. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Montaje de trampas Koldo-Bas en los frentes de vuelo principales del colmenar.",
      "Comprobación de la selectividad de salida: las abejas escapan por los conos laterales de 5 mm.",
      "Limpieza y retirada periódica de los ejemplares de velutina acumulados en el depósito superior.",
      "Mantener los cebos frescos para maximizar la tasa de atracción.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_no||vit_high||api_act_cont||met_vectores||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): VECTORES + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Vectores. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Captura viva de 5 a 10 obreras de velutina vigorosas en el piquero.",
      "Adhesión de elemento de marcaje visible (cinta flúor ligera o polvo de tiza fluorescente) bajo protocolo homologado.",
      "Liberación y seguimiento mediante cronometraje del tiempo de ida y retorno para calcular la distancia al nido.",
      "Triangulación del vector para localizar y destruir el nido madre causante de los ataques.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_no||vit_high||api_act_cont||met_trashum||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): TRASHUMANCIA + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Trashumancia. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Evaluación del nivel de asedio: si la tasa de captura supera 15 velutinas simultáneas por piquera, planificar traslado.",
      "Cierre nocturno de colmenas con malla de ventilación superior.",
      "Traslado a colmenares de alta montaña (>1.000 m s.n.m.) o áreas con nula presión de velutina.",
      "Alimentación de mantenimiento con jarabe denso a la llegada al nuevo asentamiento.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_no||vit_low||api_act_nido||nido_sec_pas||fin_no_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): NIDO SECUNDARIO PASADO - NO INTERVENIR",
    "summary": "En el entorno del colmenar (INVIERNO (DIC-ENE)), se ha identificado un nido secundario pasado/abandonado. Estado colmena: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica. / SIN MIELADA: Posibilidad de aplicar tratamientos sanitarios autorizados de mayor eficacia y suplementación nutricional. / COLMENA DEBILITADA (Cría < 6 cuadros): Alto riesgo de asedio, robo de reservas y asfixia en piquera.. El nido no contiene avispas vivas.",
    "actions": [
      "Verificar con prismáticos la ausencia total de obreras en la piquera del nido durante las horas de mayor insolación.",
      "NO aplicar insecticidas ni contratar pértigas: el ciclo de este nido ha concluido.",
      "Prioridad sanitaria urgente: Tratar la Varroa de inmediato con formulaciones autorizadas según temporada.",
      "Enfocar los recursos en la protección física de las piqueras de las colmenas vivas."
    ],
    "preventiveMeasures": [
      "Recordar que las reinas fundadoras no hibernan en el nido de origen, sino en oquedades protegidas del suelo o madera.",
      "Registrar la coordenada geográfica del nido para el histórico de presión del apiario."
    ],
    "safetyWarnings": [
      "No escalar árboles con ramas quebradizas para inspeccionar nidos que ya están inactivos.",
      "ALERTA: Si no se trata la Varroa, la colmena colapsará antes de la llegada del invierno."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_no||vit_low||api_act_nido||nido_emb_pre||fin_eliminar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): NEUTRALIZACIÓN DE EMBRIONARIO AÑO",
    "summary": "Localización de embrionario año en el perímetro del apiario durante INVIERNO (DIC-ENE). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: No. Fuerza de cría: < 6 cuadros. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Retirada directa al amanecer con bolsa estanca o spray frío, capturando a la reina fundadora.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_no||vit_low||api_act_nido||nido_pri_pre||fin_eliminar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): NEUTRALIZACIÓN DE PRIMARIO AÑO",
    "summary": "Localización de primario año en el perímetro del apiario durante INVIERNO (DIC-ENE). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: No. Fuerza de cría: < 6 cuadros. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_no||vit_low||api_act_nido||nido_sec_pre||fin_eliminar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): NEUTRALIZACIÓN DE SECUNDARIO AÑO",
    "summary": "Localización de secundario año en el perímetro del apiario durante INVIERNO (DIC-ENE). Sanidad colmenar: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: No. Fuerza de cría: < 6 cuadros. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Aplicar simultáneamente tratamiento de choque contra Varroa compatible con el estado de mielada.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_no||vit_low||api_act_cont||met_tram_fund||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): TRAMPEO FUNDADORAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Trampeo Fundadoras. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Despliegue perimetral de trampas con atrayente azucarado-alcohólico cada 50 metros en el borde del apiario.",
      "Cebo: 50% cerveza negra/rubia, 25% vino blanco, 25% sirope de frutas rojas o grosella.",
      "Revisión semanal estricta para vaciar capturas y renovar el líquido atrayente.",
      "Cierre o retirada obligatoria de las trampas en cuanto finalice el periodo primaveral de fundadoras.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_no||vit_low||api_act_cont||met_trampeo||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): TRAMPEO CONTROL + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Trampeo Control. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Colocación de trampas selectivas de control en los laterales del colmenar para desviar la atención de las piqueras.",
      "Uso de atrayentes proteicos (pescado macerado, carne) o hidrocarbonados según la fase de cría del nido.",
      "Control exhaustivo de la no afección a polinizadores autóctonos.",
      "Registro del número de capturas por día y trampa.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_no||vit_low||api_act_cont||met_arpas||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): ARPAS ELÉCTRICAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Arpas Eléctricas. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Instalación de arpas eléctricas entre colmenas con distancia de paso de 1.2 a 1.5 metros.",
      "Ajuste del generador de impulsos a 1.6 - 2.0 kV (suficiente para derribar velutina sin electrocutar abejas).",
      "Colocación de bandeja inferior con 3 cm de agua y unas gotas de jabón biodegradable para ahogar ejemplares aturdidos.",
      "Revisión diaria del cableado para retirar insectos carbonizados que descarguen las baterías.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "PELIGRO ELÉCTRICO: Desconectar el pastor eléctrico antes de cualquier manipulación o deshierbe.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_no||vit_low||api_act_cont||met_bozales||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): BOZALES + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Bozales. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Colocación de bozales de piquera de alambre galvanizado (malla de 5.5 a 6 mm).",
      "Asegurar que el bozal sobresalga al menos 15-20 cm hacia el frente de la piquera.",
      "Verificar que las abejas entren y salgan volando sin detenerse en el exterior del bozal.",
      "Comprobar que los zánganos puedan salir y no obstruyan la rejilla.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_no||vit_low||api_act_cont||met_koldo||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): TRAMPAS KOLDO-BAS + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Trampas Koldo-Bas. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Montaje de trampas Koldo-Bas en los frentes de vuelo principales del colmenar.",
      "Comprobación de la selectividad de salida: las abejas escapan por los conos laterales de 5 mm.",
      "Limpieza y retirada periódica de los ejemplares de velutina acumulados en el depósito superior.",
      "Mantener los cebos frescos para maximizar la tasa de atracción.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_no||vit_low||api_act_cont||met_vectores||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): VECTORES + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Vectores. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Captura viva de 5 a 10 obreras de velutina vigorosas en el piquero.",
      "Adhesión de elemento de marcaje visible (cinta flúor ligera o polvo de tiza fluorescente) bajo protocolo homologado.",
      "Liberación y seguimiento mediante cronometraje del tiempo de ida y retorno para calcular la distancia al nido.",
      "Triangulación del vector para localizar y destruir el nido madre causante de los ataques.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_high||miel_no||vit_low||api_act_cont||met_trashum||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): TRASHUMANCIA + TRATAMIENTO VARROA",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Trashumancia. Situación sanitaria: VARROA ALTA (> 2%): Colapso inminente. El estrés por velutina impide a las abejas desparasitarse, multiplicando la carga vírica.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Evaluación del nivel de asedio: si la tasa de captura supera 15 velutinas simultáneas por piquera, planificar traslado.",
      "Cierre nocturno de colmenas con malla de ventilación superior.",
      "Traslado a colmenares de alta montaña (>1.000 m s.n.m.) o áreas con nula presión de velutina.",
      "Alimentación de mantenimiento con jarabe denso a la llegada al nuevo asentamiento.",
      "TRATAMIENTO DE CHOQUE CONTRA VARROA (SIN MIELADA): Aplicar tratamiento acaricida oficial inmediatamente en todas las colmenas del apiario.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "CRÍTICO: La combinación de velutina y Varroa >2% extermina colmenares enteros en menos de 3 semanas si no se ataja la varroosis."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_si||vit_high||api_act_nido||nido_sec_pas||fin_no_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): NIDO SECUNDARIO PASADO - NO INTERVENIR",
    "summary": "En el entorno del colmenar (INVIERNO (DIC-ENE)), se ha identificado un nido secundario pasado/abandonado. Estado colmena: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa. / CON MIELADA ACTIVA: Se debe preservar la pureza de la miel sin usar tratamientos químicos residuales en colmena. / COLMENA FUERTE (Cría > 6 cuadros): Gran masa de abejas capaz de defender la piquera y generar relevo generacional.. El nido no contiene avispas vivas.",
    "actions": [
      "Verificar con prismáticos la ausencia total de obreras en la piquera del nido durante las horas de mayor insolación.",
      "NO aplicar insecticidas ni contratar pértigas: el ciclo de este nido ha concluido.",
      "Mantener el monitoreo ordinario del colmenar.",
      "Enfocar los recursos en la protección física de las piqueras de las colmenas vivas."
    ],
    "preventiveMeasures": [
      "Recordar que las reinas fundadoras no hibernan en el nido de origen, sino en oquedades protegidas del suelo o madera.",
      "Registrar la coordenada geográfica del nido para el histórico de presión del apiario."
    ],
    "safetyWarnings": [
      "No escalar árboles con ramas quebradizas para inspeccionar nidos que ya están inactivos.",
      "Mantener precauciones estándar de manejo apícola."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_si||vit_high||api_act_nido||nido_emb_pre||fin_eliminar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): NEUTRALIZACIÓN DE EMBRIONARIO AÑO",
    "summary": "Localización de embrionario año en el perímetro del apiario durante INVIERNO (DIC-ENE). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Sí. Fuerza de cría: > 6 cuadros. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Retirada directa al amanecer con bolsa estanca o spray frío, capturando a la reina fundadora.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_si||vit_high||api_act_nido||nido_pri_pre||fin_eliminar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): NEUTRALIZACIÓN DE PRIMARIO AÑO",
    "summary": "Localización de primario año en el perímetro del apiario durante INVIERNO (DIC-ENE). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Sí. Fuerza de cría: > 6 cuadros. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_si||vit_high||api_act_nido||nido_sec_pre||fin_eliminar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): NEUTRALIZACIÓN DE SECUNDARIO AÑO",
    "summary": "Localización de secundario año en el perímetro del apiario durante INVIERNO (DIC-ENE). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Sí. Fuerza de cría: > 6 cuadros. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_si||vit_high||api_act_cont||met_tram_fund||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): TRAMPEO FUNDADORAS",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Trampeo Fundadoras. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Despliegue perimetral de trampas con atrayente azucarado-alcohólico cada 50 metros en el borde del apiario.",
      "Cebo: 50% cerveza negra/rubia, 25% vino blanco, 25% sirope de frutas rojas o grosella.",
      "Revisión semanal estricta para vaciar capturas y renovar el líquido atrayente.",
      "Cierre o retirada obligatoria de las trampas en cuanto finalice el periodo primaveral de fundadoras."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_si||vit_high||api_act_cont||met_trampeo||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): TRAMPEO CONTROL",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Trampeo Control. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Colocación de trampas selectivas de control en los laterales del colmenar para desviar la atención de las piqueras.",
      "Uso de atrayentes proteicos (pescado macerado, carne) o hidrocarbonados según la fase de cría del nido.",
      "Control exhaustivo de la no afección a polinizadores autóctonos.",
      "Registro del número de capturas por día y trampa."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_si||vit_high||api_act_cont||met_arpas||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): ARPAS ELÉCTRICAS",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Arpas Eléctricas. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Instalación de arpas eléctricas entre colmenas con distancia de paso de 1.2 a 1.5 metros.",
      "Ajuste del generador de impulsos a 1.6 - 2.0 kV (suficiente para derribar velutina sin electrocutar abejas).",
      "Colocación de bandeja inferior con 3 cm de agua y unas gotas de jabón biodegradable para ahogar ejemplares aturdidos.",
      "Revisión diaria del cableado para retirar insectos carbonizados que descarguen las baterías."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "PELIGRO ELÉCTRICO: Desconectar el pastor eléctrico antes de cualquier manipulación o deshierbe.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_si||vit_high||api_act_cont||met_bozales||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): BOZALES",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Bozales. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Colocación de bozales de piquera de alambre galvanizado (malla de 5.5 a 6 mm).",
      "Asegurar que el bozal sobresalga al menos 15-20 cm hacia el frente de la piquera.",
      "Verificar que las abejas entren y salgan volando sin detenerse en el exterior del bozal.",
      "Comprobar que los zánganos puedan salir y no obstruyan la rejilla."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_si||vit_high||api_act_cont||met_koldo||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): TRAMPAS KOLDO-BAS",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Trampas Koldo-Bas. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Montaje de trampas Koldo-Bas en los frentes de vuelo principales del colmenar.",
      "Comprobación de la selectividad de salida: las abejas escapan por los conos laterales de 5 mm.",
      "Limpieza y retirada periódica de los ejemplares de velutina acumulados en el depósito superior.",
      "Mantener los cebos frescos para maximizar la tasa de atracción."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_si||vit_high||api_act_cont||met_vectores||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): VECTORES",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Vectores. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Captura viva de 5 a 10 obreras de velutina vigorosas en el piquero.",
      "Adhesión de elemento de marcaje visible (cinta flúor ligera o polvo de tiza fluorescente) bajo protocolo homologado.",
      "Liberación y seguimiento mediante cronometraje del tiempo de ida y retorno para calcular la distancia al nido.",
      "Triangulación del vector para localizar y destruir el nido madre causante de los ataques."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_si||vit_high||api_act_cont||met_trashum||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): TRASHUMANCIA",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Trashumancia. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Alta. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Evaluación del nivel de asedio: si la tasa de captura supera 15 velutinas simultáneas por piquera, planificar traslado.",
      "Cierre nocturno de colmenas con malla de ventilación superior.",
      "Traslado a colmenares de alta montaña (>1.000 m s.n.m.) o áreas con nula presión de velutina.",
      "Alimentación de mantenimiento con jarabe denso a la llegada al nuevo asentamiento."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_si||vit_low||api_act_nido||nido_sec_pas||fin_no_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): NIDO SECUNDARIO PASADO - NO INTERVENIR",
    "summary": "En el entorno del colmenar (INVIERNO (DIC-ENE)), se ha identificado un nido secundario pasado/abandonado. Estado colmena: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa. / CON MIELADA ACTIVA: Se debe preservar la pureza de la miel sin usar tratamientos químicos residuales en colmena. / COLMENA DEBILITADA (Cría < 6 cuadros): Alto riesgo de asedio, robo de reservas y asfixia en piquera.. El nido no contiene avispas vivas.",
    "actions": [
      "Verificar con prismáticos la ausencia total de obreras en la piquera del nido durante las horas de mayor insolación.",
      "NO aplicar insecticidas ni contratar pértigas: el ciclo de este nido ha concluido.",
      "Mantener el monitoreo ordinario del colmenar.",
      "Enfocar los recursos en la protección física de las piqueras de las colmenas vivas."
    ],
    "preventiveMeasures": [
      "Recordar que las reinas fundadoras no hibernan en el nido de origen, sino en oquedades protegidas del suelo o madera.",
      "Registrar la coordenada geográfica del nido para el histórico de presión del apiario."
    ],
    "safetyWarnings": [
      "No escalar árboles con ramas quebradizas para inspeccionar nidos que ya están inactivos.",
      "Mantener precauciones estándar de manejo apícola."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_si||vit_low||api_act_nido||nido_emb_pre||fin_eliminar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): NEUTRALIZACIÓN DE EMBRIONARIO AÑO",
    "summary": "Localización de embrionario año en el perímetro del apiario durante INVIERNO (DIC-ENE). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Sí. Fuerza de cría: < 6 cuadros. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Retirada directa al amanecer con bolsa estanca o spray frío, capturando a la reina fundadora.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_si||vit_low||api_act_nido||nido_pri_pre||fin_eliminar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): NEUTRALIZACIÓN DE PRIMARIO AÑO",
    "summary": "Localización de primario año en el perímetro del apiario durante INVIERNO (DIC-ENE). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Sí. Fuerza de cría: < 6 cuadros. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_si||vit_low||api_act_nido||nido_sec_pre||fin_eliminar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): NEUTRALIZACIÓN DE SECUNDARIO AÑO",
    "summary": "Localización de secundario año en el perímetro del apiario durante INVIERNO (DIC-ENE). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Sí. Fuerza de cría: < 6 cuadros. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_si||vit_low||api_act_cont||met_tram_fund||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): TRAMPEO FUNDADORAS",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Trampeo Fundadoras. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Despliegue perimetral de trampas con atrayente azucarado-alcohólico cada 50 metros en el borde del apiario.",
      "Cebo: 50% cerveza negra/rubia, 25% vino blanco, 25% sirope de frutas rojas o grosella.",
      "Revisión semanal estricta para vaciar capturas y renovar el líquido atrayente.",
      "Cierre o retirada obligatoria de las trampas en cuanto finalice el periodo primaveral de fundadoras.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_si||vit_low||api_act_cont||met_trampeo||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): TRAMPEO CONTROL",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Trampeo Control. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Colocación de trampas selectivas de control en los laterales del colmenar para desviar la atención de las piqueras.",
      "Uso de atrayentes proteicos (pescado macerado, carne) o hidrocarbonados según la fase de cría del nido.",
      "Control exhaustivo de la no afección a polinizadores autóctonos.",
      "Registro del número de capturas por día y trampa.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_si||vit_low||api_act_cont||met_arpas||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): ARPAS ELÉCTRICAS",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Arpas Eléctricas. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Instalación de arpas eléctricas entre colmenas con distancia de paso de 1.2 a 1.5 metros.",
      "Ajuste del generador de impulsos a 1.6 - 2.0 kV (suficiente para derribar velutina sin electrocutar abejas).",
      "Colocación de bandeja inferior con 3 cm de agua y unas gotas de jabón biodegradable para ahogar ejemplares aturdidos.",
      "Revisión diaria del cableado para retirar insectos carbonizados que descarguen las baterías.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "PELIGRO ELÉCTRICO: Desconectar el pastor eléctrico antes de cualquier manipulación o deshierbe.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_si||vit_low||api_act_cont||met_bozales||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): BOZALES",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Bozales. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Colocación de bozales de piquera de alambre galvanizado (malla de 5.5 a 6 mm).",
      "Asegurar que el bozal sobresalga al menos 15-20 cm hacia el frente de la piquera.",
      "Verificar que las abejas entren y salgan volando sin detenerse en el exterior del bozal.",
      "Comprobar que los zánganos puedan salir y no obstruyan la rejilla.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_si||vit_low||api_act_cont||met_koldo||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): TRAMPAS KOLDO-BAS",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Trampas Koldo-Bas. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Montaje de trampas Koldo-Bas en los frentes de vuelo principales del colmenar.",
      "Comprobación de la selectividad de salida: las abejas escapan por los conos laterales de 5 mm.",
      "Limpieza y retirada periódica de los ejemplares de velutina acumulados en el depósito superior.",
      "Mantener los cebos frescos para maximizar la tasa de atracción.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_si||vit_low||api_act_cont||met_vectores||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): VECTORES",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Vectores. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Captura viva de 5 a 10 obreras de velutina vigorosas en el piquero.",
      "Adhesión de elemento de marcaje visible (cinta flúor ligera o polvo de tiza fluorescente) bajo protocolo homologado.",
      "Liberación y seguimiento mediante cronometraje del tiempo de ida y retorno para calcular la distancia al nido.",
      "Triangulación del vector para localizar y destruir el nido madre causante de los ataques.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_si||vit_low||api_act_cont||met_trashum||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): TRASHUMANCIA",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Trashumancia. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Presente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Evaluación del nivel de asedio: si la tasa de captura supera 15 velutinas simultáneas por piquera, planificar traslado.",
      "Cierre nocturno de colmenas con malla de ventilación superior.",
      "Traslado a colmenares de alta montaña (>1.000 m s.n.m.) o áreas con nula presión de velutina.",
      "Alimentación de mantenimiento con jarabe denso a la llegada al nuevo asentamiento.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_no||vit_high||api_act_nido||nido_sec_pas||fin_no_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): NIDO SECUNDARIO PASADO - NO INTERVENIR",
    "summary": "En el entorno del colmenar (INVIERNO (DIC-ENE)), se ha identificado un nido secundario pasado/abandonado. Estado colmena: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa. / SIN MIELADA: Posibilidad de aplicar tratamientos sanitarios autorizados de mayor eficacia y suplementación nutricional. / COLMENA FUERTE (Cría > 6 cuadros): Gran masa de abejas capaz de defender la piquera y generar relevo generacional.. El nido no contiene avispas vivas.",
    "actions": [
      "Verificar con prismáticos la ausencia total de obreras en la piquera del nido durante las horas de mayor insolación.",
      "NO aplicar insecticidas ni contratar pértigas: el ciclo de este nido ha concluido.",
      "Mantener el monitoreo ordinario del colmenar.",
      "Enfocar los recursos en la protección física de las piqueras de las colmenas vivas."
    ],
    "preventiveMeasures": [
      "Recordar que las reinas fundadoras no hibernan en el nido de origen, sino en oquedades protegidas del suelo o madera.",
      "Registrar la coordenada geográfica del nido para el histórico de presión del apiario."
    ],
    "safetyWarnings": [
      "No escalar árboles con ramas quebradizas para inspeccionar nidos que ya están inactivos.",
      "Mantener precauciones estándar de manejo apícola."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_no||vit_high||api_act_nido||nido_emb_pre||fin_eliminar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): NEUTRALIZACIÓN DE EMBRIONARIO AÑO",
    "summary": "Localización de embrionario año en el perímetro del apiario durante INVIERNO (DIC-ENE). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: No. Fuerza de cría: > 6 cuadros. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Retirada directa al amanecer con bolsa estanca o spray frío, capturando a la reina fundadora.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_no||vit_high||api_act_nido||nido_pri_pre||fin_eliminar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): NEUTRALIZACIÓN DE PRIMARIO AÑO",
    "summary": "Localización de primario año en el perímetro del apiario durante INVIERNO (DIC-ENE). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: No. Fuerza de cría: > 6 cuadros. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_no||vit_high||api_act_nido||nido_sec_pre||fin_eliminar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): NEUTRALIZACIÓN DE SECUNDARIO AÑO",
    "summary": "Localización de secundario año en el perímetro del apiario durante INVIERNO (DIC-ENE). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: No. Fuerza de cría: > 6 cuadros. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Mantener piqueras vigiladas."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_no||vit_high||api_act_cont||met_tram_fund||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): TRAMPEO FUNDADORAS",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Trampeo Fundadoras. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Despliegue perimetral de trampas con atrayente azucarado-alcohólico cada 50 metros en el borde del apiario.",
      "Cebo: 50% cerveza negra/rubia, 25% vino blanco, 25% sirope de frutas rojas o grosella.",
      "Revisión semanal estricta para vaciar capturas y renovar el líquido atrayente.",
      "Cierre o retirada obligatoria de las trampas en cuanto finalice el periodo primaveral de fundadoras."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_no||vit_high||api_act_cont||met_trampeo||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): TRAMPEO CONTROL",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Trampeo Control. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Colocación de trampas selectivas de control en los laterales del colmenar para desviar la atención de las piqueras.",
      "Uso de atrayentes proteicos (pescado macerado, carne) o hidrocarbonados según la fase de cría del nido.",
      "Control exhaustivo de la no afección a polinizadores autóctonos.",
      "Registro del número de capturas por día y trampa."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_no||vit_high||api_act_cont||met_arpas||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): ARPAS ELÉCTRICAS",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Arpas Eléctricas. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Instalación de arpas eléctricas entre colmenas con distancia de paso de 1.2 a 1.5 metros.",
      "Ajuste del generador de impulsos a 1.6 - 2.0 kV (suficiente para derribar velutina sin electrocutar abejas).",
      "Colocación de bandeja inferior con 3 cm de agua y unas gotas de jabón biodegradable para ahogar ejemplares aturdidos.",
      "Revisión diaria del cableado para retirar insectos carbonizados que descarguen las baterías."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "PELIGRO ELÉCTRICO: Desconectar el pastor eléctrico antes de cualquier manipulación o deshierbe.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_no||vit_high||api_act_cont||met_bozales||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): BOZALES",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Bozales. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Colocación de bozales de piquera de alambre galvanizado (malla de 5.5 a 6 mm).",
      "Asegurar que el bozal sobresalga al menos 15-20 cm hacia el frente de la piquera.",
      "Verificar que las abejas entren y salgan volando sin detenerse en el exterior del bozal.",
      "Comprobar que los zánganos puedan salir y no obstruyan la rejilla."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_no||vit_high||api_act_cont||met_koldo||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): TRAMPAS KOLDO-BAS",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Trampas Koldo-Bas. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Montaje de trampas Koldo-Bas en los frentes de vuelo principales del colmenar.",
      "Comprobación de la selectividad de salida: las abejas escapan por los conos laterales de 5 mm.",
      "Limpieza y retirada periódica de los ejemplares de velutina acumulados en el depósito superior.",
      "Mantener los cebos frescos para maximizar la tasa de atracción."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_no||vit_high||api_act_cont||met_vectores||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): VECTORES",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Vectores. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Captura viva de 5 a 10 obreras de velutina vigorosas en el piquero.",
      "Adhesión de elemento de marcaje visible (cinta flúor ligera o polvo de tiza fluorescente) bajo protocolo homologado.",
      "Liberación y seguimiento mediante cronometraje del tiempo de ida y retorno para calcular la distancia al nido.",
      "Triangulación del vector para localizar y destruir el nido madre causante de los ataques."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_no||vit_high||api_act_cont||met_trashum||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): TRASHUMANCIA",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Trashumancia. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Alta. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Evaluación del nivel de asedio: si la tasa de captura supera 15 velutinas simultáneas por piquera, planificar traslado.",
      "Cierre nocturno de colmenas con malla de ventilación superior.",
      "Traslado a colmenares de alta montaña (>1.000 m s.n.m.) o áreas con nula presión de velutina.",
      "Alimentación de mantenimiento con jarabe denso a la llegada al nuevo asentamiento."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_no||vit_low||api_act_nido||nido_sec_pas||fin_no_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): NIDO SECUNDARIO PASADO - NO INTERVENIR",
    "summary": "En el entorno del colmenar (INVIERNO (DIC-ENE)), se ha identificado un nido secundario pasado/abandonado. Estado colmena: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa. / SIN MIELADA: Posibilidad de aplicar tratamientos sanitarios autorizados de mayor eficacia y suplementación nutricional. / COLMENA DEBILITADA (Cría < 6 cuadros): Alto riesgo de asedio, robo de reservas y asfixia en piquera.. El nido no contiene avispas vivas.",
    "actions": [
      "Verificar con prismáticos la ausencia total de obreras en la piquera del nido durante las horas de mayor insolación.",
      "NO aplicar insecticidas ni contratar pértigas: el ciclo de este nido ha concluido.",
      "Mantener el monitoreo ordinario del colmenar.",
      "Enfocar los recursos en la protección física de las piqueras de las colmenas vivas."
    ],
    "preventiveMeasures": [
      "Recordar que las reinas fundadoras no hibernan en el nido de origen, sino en oquedades protegidas del suelo o madera.",
      "Registrar la coordenada geográfica del nido para el histórico de presión del apiario."
    ],
    "safetyWarnings": [
      "No escalar árboles con ramas quebradizas para inspeccionar nidos que ya están inactivos.",
      "Mantener precauciones estándar de manejo apícola."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_no||vit_low||api_act_nido||nido_emb_pre||fin_eliminar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): NEUTRALIZACIÓN DE EMBRIONARIO AÑO",
    "summary": "Localización de embrionario año en el perímetro del apiario durante INVIERNO (DIC-ENE). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: No. Fuerza de cría: < 6 cuadros. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Retirada directa al amanecer con bolsa estanca o spray frío, capturando a la reina fundadora.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_no||vit_low||api_act_nido||nido_pri_pre||fin_eliminar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): NEUTRALIZACIÓN DE PRIMARIO AÑO",
    "summary": "Localización de primario año en el perímetro del apiario durante INVIERNO (DIC-ENE). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: No. Fuerza de cría: < 6 cuadros. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_no||vit_low||api_act_nido||nido_sec_pre||fin_eliminar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): NEUTRALIZACIÓN DE SECUNDARIO AÑO",
    "summary": "Localización de secundario año en el perímetro del apiario durante INVIERNO (DIC-ENE). Sanidad colmenar: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: No. Fuerza de cría: < 6 cuadros. Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Localizar el nido exacto mediante triangulación visual de las líneas de vuelo de las obreras pecoreadoras.",
      "Notificar al equipo comarcal de retirada o intervenir con pértiga homologada inyectando biocida registrado al atardecer.",
      "Supervisar que no haya caída anormal de abejas por virosis.",
      "Reducir piqueras a 7-8 mm para evitar que las avispas supervivientes saqueen la colmena débil."
    ],
    "preventiveMeasures": [
      "Limpiar zarzas y arbustos alrededor del colmenar para detectar nidos embrionarios tempranos.",
      "Evitar dejar cuadros con restos de miel o cera en los pasillos del colmenar."
    ],
    "safetyWarnings": [
      "Traje de protección de alta densidad (>3 mm de espesor o doble capa) con careta de visión 360°.",
      "Jamás intervenir nidos secundarios activos sin linterna de luz roja y acompañante de seguridad."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_no||vit_low||api_act_cont||met_tram_fund||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): TRAMPEO FUNDADORAS",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Trampeo Fundadoras. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Despliegue perimetral de trampas con atrayente azucarado-alcohólico cada 50 metros en el borde del apiario.",
      "Cebo: 50% cerveza negra/rubia, 25% vino blanco, 25% sirope de frutas rojas o grosella.",
      "Revisión semanal estricta para vaciar capturas y renovar el líquido atrayente.",
      "Cierre o retirada obligatoria de las trampas en cuanto finalice el periodo primaveral de fundadoras.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_no||vit_low||api_act_cont||met_trampeo||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): TRAMPEO CONTROL",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Trampeo Control. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Colocación de trampas selectivas de control en los laterales del colmenar para desviar la atención de las piqueras.",
      "Uso de atrayentes proteicos (pescado macerado, carne) o hidrocarbonados según la fase de cría del nido.",
      "Control exhaustivo de la no afección a polinizadores autóctonos.",
      "Registro del número de capturas por día y trampa.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_no||vit_low||api_act_cont||met_arpas||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): ARPAS ELÉCTRICAS",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Arpas Eléctricas. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Instalación de arpas eléctricas entre colmenas con distancia de paso de 1.2 a 1.5 metros.",
      "Ajuste del generador de impulsos a 1.6 - 2.0 kV (suficiente para derribar velutina sin electrocutar abejas).",
      "Colocación de bandeja inferior con 3 cm de agua y unas gotas de jabón biodegradable para ahogar ejemplares aturdidos.",
      "Revisión diaria del cableado para retirar insectos carbonizados que descarguen las baterías.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "PELIGRO ELÉCTRICO: Desconectar el pastor eléctrico antes de cualquier manipulación o deshierbe.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_no||vit_low||api_act_cont||met_bozales||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): BOZALES",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Bozales. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Colocación de bozales de piquera de alambre galvanizado (malla de 5.5 a 6 mm).",
      "Asegurar que el bozal sobresalga al menos 15-20 cm hacia el frente de la piquera.",
      "Verificar que las abejas entren y salgan volando sin detenerse en el exterior del bozal.",
      "Comprobar que los zánganos puedan salir y no obstruyan la rejilla.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_no||vit_low||api_act_cont||met_koldo||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): TRAMPAS KOLDO-BAS",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Trampas Koldo-Bas. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Montaje de trampas Koldo-Bas en los frentes de vuelo principales del colmenar.",
      "Comprobación de la selectividad de salida: las abejas escapan por los conos laterales de 5 mm.",
      "Limpieza y retirada periódica de los ejemplares de velutina acumulados en el depósito superior.",
      "Mantener los cebos frescos para maximizar la tasa de atracción.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_no||vit_low||api_act_cont||met_vectores||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): VECTORES",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Vectores. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Captura viva de 5 a 10 obreras de velutina vigorosas en el piquero.",
      "Adhesión de elemento de marcaje visible (cinta flúor ligera o polvo de tiza fluorescente) bajo protocolo homologado.",
      "Liberación y seguimiento mediante cronometraje del tiempo de ida y retorno para calcular la distancia al nido.",
      "Triangulación del vector para localizar y destruir el nido madre causante de los ataques.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||apiario||api_d_e||var_low||miel_no||vit_low||api_act_cont||met_trashum||fin_actuar": {
    "title": "APIARIO (INVIERNO (DIC-ENE)): TRASHUMANCIA",
    "summary": "Protocolo integral en colmenar durante INVIERNO (DIC-ENE). Método principal: Trashumancia. Situación sanitaria: VARROA CONTROLADA (< 2%): Nivel de infestación seguro que permite a la colonia resistir la presión externa.. Mielada: Ausente. Vitalidad del núcleo: Baja (<6 cuadros). Fase de senescencia del nido de velutina. Las colmenas deben ser aisladas y preparadas para la invernada. Los nidos secundarios viejos ya están vacíos.",
    "actions": [
      "Evaluación del nivel de asedio: si la tasa de captura supera 15 velutinas simultáneas por piquera, planificar traslado.",
      "Cierre nocturno de colmenas con malla de ventilación superior.",
      "Traslado a colmenares de alta montaña (>1.000 m s.n.m.) o áreas con nula presión de velutina.",
      "Alimentación de mantenimiento con jarabe denso a la llegada al nuevo asentamiento.",
      "APOYO A COLMENAS DEBILES: Si hay bloqueo por estrés y la cría es menor a 6 cuadros, colocar alimentador interior con jarabe de estimulación proteica para recuperar población."
    ],
    "preventiveMeasures": [
      "Mantener el colmenar ordenado, con las colmenas elevadas al menos 30 cm sobre el suelo.",
      "Instalar hierba cortada o grava bajo las piqueras para impedir que las velutinas se oculten al acecho.",
      "No dejar opérculos ni restos de miel en el apiario para no desencadenar pillaje."
    ],
    "safetyWarnings": [
      "Uso riguroso de careta y guantes de apicultor.",
      "Vigilar picaduras múltiples en caso de manipular trampas con insectos vivos."
    ],
    "isLocal": true
  },
  "vespa_velutina||espacio_urbano||urb_f_m||urb_met_ido||act_est_geo||fin_estudio": {
    "title": "ESTUDIO GEOGRÁFICO DE IDONEIDAD ESTACIONAL URBANA",
    "summary": "Evaluación cartográfica y predictiva de la idoneidad térmica y orográfica en entornos urbanos y periurbanos para anticipar zonas críticas de anidación (parques públicos, aleros de edificios, jardines históricos).",
    "actions": [
      "Analizar datos meteorológicos locales (temperaturas mínimas invernales y humedad relativa primaveral).",
      "Cruzar mapas de vegetación caducifolia y fuentes de agua estables con registros históricos de nidos secundarios.",
      "Definir cuadrículas de prioridad alta, media y baja para colocación de trampas de monitoreo municipal.",
      "Publicar pautas vecinales para la detección temprana de nidos embrionarios en aleros y terrazas."
    ],
    "preventiveMeasures": [
      "Poda invernal de ramas bajas en arbolado urbano próximo a aceras.",
      "Sellado de oquedades y cámaras de aire en edificios públicos antes del mes de marzo."
    ],
    "safetyWarnings": [
      "No colocar trampas en patios escolares ni zonas de juego infantil para no concentrar insectos en áreas sensibles.",
      "El personal técnico debe usar chalecos de alta visibilidad durante el muestreo en vía pública."
    ],
    "isLocal": true
  },
  "vespa_velutina||espacio_urbano||urb_f_m||urb_met_nido||nido_sec_pas||fin_no_actuar": {
    "title": "URBANO: NIDO SECUNDARIO PASADO (NO ACTUAR)",
    "summary": "Identificación de un nido secundario de gran tamaño de la temporada anterior o ciclo fenológico concluido en entorno urbano o periurbano. Nido completamente deshabitado que no presenta riesgo biológico activo.",
    "actions": [
      "Confirmar la ausencia absoluta de actividad en la piquera en horas centrales del día mediante prismáticos o cámara térmica.",
      "Informar a la propiedad o vecinos que el nido está muerto y que Vespa velutina NUNCA reutiliza un nido viejo.",
      "Dejar el nido en el árbol para que se degrade naturalmente o sirva de alimento a aves insectívoras (arrendajos, pájaros carpinteros).",
      "Solo retirar físicamente si existe riesgo estructural inminente de desprendimiento sobre aceras o vehículos por tormentas."
    ],
    "preventiveMeasures": [
      "No malgastar recursos municipales ni aplicar insecticidas en nidos vacíos.",
      "Tranquilizar a la ciudadanía explicando el ciclo vital anual de la especie."
    ],
    "safetyWarnings": [
      "No arrojar piedras ni disparar perdigones para destruirlo, pues podría desprender ramas secas.",
      "Si se retira por riesgo de caída, asegurar la zona de paso peatonal."
    ],
    "isLocal": true
  },
  "vespa_velutina||espacio_urbano||urb_f_m||urb_met_nido||nido_emb_pre||fin_eliminar": {
    "title": "URBANO: NEUTRALIZACIÓN DE NIDO EMBRIONARIO DE PRIMAVERA",
    "summary": "Detección de nido incipiente (tamaño de una pelota de golf o pelota de ping-pong) construido por una reina fundadora en aleros de viviendas, persianas, cobertizos o casetas de jardín.",
    "actions": [
      "Localizar el momento en que la reina fundadora se encuentre en el interior del nido (primeras horas del amanecer o última hora del atardecer).",
      "Aproximación con bolsa hermética o bote de boca ancha para atrapar nido y reina simultáneamente.",
      "Alternativamente, aplicar pulverización criogénica o insecticida de derribo directo específico y embolsar.",
      "Retirar el pedúnculo de fijación y limpiar la zona con agua caliente y vinagre para neutralizar feromonas de fijación."
    ],
    "preventiveMeasures": [
      "Instalar mosquiteras en ventanas y tapar respiraderos de chimeneas y buhardillas.",
      "Inspeccionar semanalmente techumbres y pérgolas entre marzo y junio."
    ],
    "safetyWarnings": [
      "Usar gafas de protección y guantes de carnaza.",
      "Asegurarse de neutralizar a la reina fundadora para evitar que reconstruya en las proximidades."
    ],
    "isLocal": true
  },
  "vespa_velutina||espacio_urbano||urb_f_m||urb_met_nido||nido_pri_pre||fin_eliminar": {
    "title": "URBANO: ELIMINACIÓN DE NIDO PRIMARIO ACTIVO",
    "summary": "Nido en fase de transición (tamaño naranja/melón) con reina y primeras generaciones de obreras, ubicado a baja o media altura en garajes, setos urbanos o aleros residenciales.",
    "actions": [
      "Balizar un perímetro de seguridad de al menos 10 metros alrededor del nido.",
      "Avisar a los ocupantes de la vivienda para que cierren ventanas y permanezcan en el interior durante la intervención.",
      "Intervención al anochecer mediante inyección controlada de biocida autorizado o retirada física en saco estanco por operario equipado.",
      "Comprobación a las 24 horas para certificar la ausencia de obreras pecoreadoras residuales."
    ],
    "preventiveMeasures": [
      "Revisión de setos de ciprés, laurel y tuyas antes de realizar tareas de poda en urbanizaciones.",
      "Mantener cerradas las puertas de naves auxiliares y trasteros exteriores."
    ],
    "safetyWarnings": [
      "Uso obligatorio de traje integral de protección específico para velutina con casco y careta rígida.",
      "Prohibido intervenir sin extintor o medidas de seguridad si se utilizan pértigas cerca de tendidos eléctricos urbanos."
    ],
    "isLocal": true
  },
  "vespa_velutina||espacio_urbano||urb_f_m||urb_met_nido||nido_sec_pre||fin_eliminar": {
    "title": "URBANO: ELIMINACIÓN DE NIDO SECUNDARIO DE GRAN VOLUMEN",
    "summary": "Nido de gran tamaño (hasta 1 metro de altura) en copa de árbol urbano o estructura elevada, albergando miles de obreras. Riesgo crítico para la población circundante en parques, plazas o colegios.",
    "actions": [
      "Establecimiento inmediato de cordón de seguridad de 20 a 30 metros de radio por Policía Local o Protección Civil.",
      "Intervención por empresa especializada de control de plagas o bomberos mediante camión cesta o pértiga telescópica de carbono.",
      "Inyección de biocida homologado en la piquera del nido a alta presión en horario de baja actividad.",
      "Retirada del nido transcurridas 48-72 horas para asegurar la eliminación de todas las pecoreadoras retornadas."
    ],
    "preventiveMeasures": [
      "Protocolos de comunicación vecinal para reportes inmediatos a través de la aplicación municipal.",
      "Monitoreo sistemático de copas de plátanos de sombra y sauces en riberas urbanas."
    ],
    "safetyWarnings": [
      "ALTO RIESGO DE ATAQUE MASIVO: El radio de defensa de un nido secundario activo puede superar los 25 metros.",
      "Verificar que no haya personas en balcones cercanos durante la inyección del insecticida."
    ],
    "isLocal": true
  },
  "vespa_velutina||espacio_urbano||urb_f_m||urb_met_cont||cont_trampeo": {
    "title": "GESTIÓN URBANA: TRAMPEO SELECTIVO URBANO",
    "summary": "Aplicación de trampeo selectivo urbano en zonas periféricas, huertos periurbanos o áreas verdes municipales para disminuir la presión de obreras y fundadoras sin alterar el uso público del espacio.",
    "actions": [
      "Distribuir trampas selectivas con cebos de cerveza negra, vino blanco y jarabe en altura (mínimo 2.5 m del suelo).",
      "Revisión y mantenimiento semanal registrando capturas en la base de datos municipal.",
      "Retirada inmediata si se detectan capturas accidentales de mariposas o abejas melíferas."
    ],
    "preventiveMeasures": [
      "Mantener cerrados los contenedores de residuos orgánicos en terrazas de hostelería y mercados.",
      "Informar a la ciudadanía sobre no dejar restos de comida en parques públicos."
    ],
    "safetyWarnings": [
      "Señalización clara en español e idiomas locales: 'Peligro: Trampa de control biológico'.",
      "Manipular trampas siempre con guantes de protección química y biológica."
    ],
    "isLocal": true
  },
  "vespa_velutina||espacio_urbano||urb_f_m||urb_met_cont||cont_vectores": {
    "title": "GESTIÓN URBANA: CONTROL POR VECTORES EN ZONA URBANA",
    "summary": "Aplicación de control por vectores en zona urbana en zonas periféricas, huertos periurbanos o áreas verdes municipales para disminuir la presión de obreras y fundadoras sin alterar el uso público del espacio.",
    "actions": [
      "Capturar obreras en puntos de floración o fruta y colocar marcadores bajo protocolo de investigación municipal.",
      "Revisión y mantenimiento semanal registrando capturas en la base de datos municipal.",
      "Retirada inmediata si se detectan capturas accidentales de mariposas o abejas melíferas."
    ],
    "preventiveMeasures": [
      "Mantener cerrados los contenedores de residuos orgánicos en terrazas de hostelería y mercados.",
      "Informar a la ciudadanía sobre no dejar restos de comida en parques públicos."
    ],
    "safetyWarnings": [
      "Señalización clara en español e idiomas locales: 'Peligro: Trampa de control biológico'.",
      "Manipular trampas siempre con guantes de protección química y biológica."
    ],
    "isLocal": true
  },
  "vespa_velutina||espacio_urbano||urb_f_m||urb_met_cont||cont_loc_nidos": {
    "title": "URBANO: LOCALIZACIÓN DE NIDOS PRIMARIOS Y EMBRIONARIOS (FEB - MAY)",
    "summary": "Prospección precoz y detección sistemática de nidos primarios y embrionarios construidos por reinas fundadoras en el entorno urbano (aleros, terrazas, cajones de persianas, cobertizos y setos). Su detección temprana en primavera evita la formación de colonias secundarias masivas en verano y otoño.",
    "actions": [
      "Inspeccionar minuciosamente estructuras arquitectónicas protegidas: aleros de tejados, cornisas, balcones, cajones de persiana, porches y garajes.",
      "Rastrear reinas en vuelo solitario en horas templadas de mediodía buscando pulpa de madera o agua en jardines, parques y fuentes urbanas.",
      "Revisar la vegetación ornamental densa (setos de tuyas, cipreses, hiedras de muros) a baja y media altura donde suelen nidificar las reinas.",
      "Utilizar pértigas telescópicas con espejo articulado o cámara de inspección para explorar falsos techos y recovecos de difícil acceso.",
      "Georreferenciar el punto exacto en el inventario municipal de plagas para su inmediata neutralización y retirada por los servicios técnicos."
    ],
    "preventiveMeasures": [
      "Sellar grietas, cámaras de ventilación, oquedades en fachadas y accesos a desvanes antes del inicio de la primavera.",
      "Instalar mosquiteras y rejillas metálicas de paso fino (< 2 mm) en chimeneas, bajantes y registros de ventilación.",
      "Fomentar la colaboración vecinal mediante campañas informativas para la revisión comunitaria de trasteros, balcones y terrazas.",
      "Mantener limpios y despejados de enseres acumulados los cobertizos, leñeras urbanas y zonas sombrías de jardines privados."
    ],
    "safetyWarnings": [
      "A pesar del pequeño tamaño del nido embrionario, la reina fundadora es sumamente defensiva y propensa a picar ante vibraciones o golpes directos.",
      "No intentar quemar, aplastar ni usar insecticidas domésticos inflamables cerca de conducciones de gas o fachadas de viviendas habitadas.",
      "Mantener un perímetro mínimo de 3 metros durante la inspección y utilizar gafas de protección ocular y guantes gruesos de seguridad.",
      "Notificar a la brigada municipal o bomberos en caso de nidos en guarderías, colegios o áreas de juego infantil."
    ],
    "isLocal": true
  },
  "vespa_velutina||espacio_urbano||urb_m_s||urb_met_nido||nido_sec_pas||fin_no_actuar": {
    "title": "URBANO: NIDO SECUNDARIO PASADO (NO ACTUAR)",
    "summary": "Identificación de un nido secundario de gran tamaño de la temporada anterior o ciclo fenológico concluido en entorno urbano o periurbano. Nido completamente deshabitado que no presenta riesgo biológico activo.",
    "actions": [
      "Confirmar la ausencia absoluta de actividad en la piquera en horas centrales del día mediante prismáticos o cámara térmica.",
      "Informar a la propiedad o vecinos que el nido está muerto y que Vespa velutina NUNCA reutiliza un nido viejo.",
      "Dejar el nido en el árbol para que se degrade naturalmente o sirva de alimento a aves insectívoras (arrendajos, pájaros carpinteros).",
      "Solo retirar físicamente si existe riesgo estructural inminente de desprendimiento sobre aceras o vehículos por tormentas."
    ],
    "preventiveMeasures": [
      "No malgastar recursos municipales ni aplicar insecticidas en nidos vacíos.",
      "Tranquilizar a la ciudadanía explicando el ciclo vital anual de la especie."
    ],
    "safetyWarnings": [
      "No arrojar piedras ni disparar perdigones para destruirlo, pues podría desprender ramas secas.",
      "Si se retira por riesgo de caída, asegurar la zona de paso peatonal."
    ],
    "isLocal": true
  },
  "vespa_velutina||espacio_urbano||urb_m_s||urb_met_nido||nido_emb_pre||fin_eliminar": {
    "title": "URBANO: NEUTRALIZACIÓN DE NIDO EMBRIONARIO DE PRIMAVERA",
    "summary": "Detección de nido incipiente (tamaño de una pelota de golf o pelota de ping-pong) construido por una reina fundadora en aleros de viviendas, persianas, cobertizos o casetas de jardín.",
    "actions": [
      "Localizar el momento en que la reina fundadora se encuentre en el interior del nido (primeras horas del amanecer o última hora del atardecer).",
      "Aproximación con bolsa hermética o bote de boca ancha para atrapar nido y reina simultáneamente.",
      "Alternativamente, aplicar pulverización criogénica o insecticida de derribo directo específico y embolsar.",
      "Retirar el pedúnculo de fijación y limpiar la zona con agua caliente y vinagre para neutralizar feromonas de fijación."
    ],
    "preventiveMeasures": [
      "Instalar mosquiteras en ventanas y tapar respiraderos de chimeneas y buhardillas.",
      "Inspeccionar semanalmente techumbres y pérgolas entre marzo y junio."
    ],
    "safetyWarnings": [
      "Usar gafas de protección y guantes de carnaza.",
      "Asegurarse de neutralizar a la reina fundadora para evitar que reconstruya en las proximidades."
    ],
    "isLocal": true
  },
  "vespa_velutina||espacio_urbano||urb_m_s||urb_met_nido||nido_pri_pre||fin_eliminar": {
    "title": "URBANO: ELIMINACIÓN DE NIDO PRIMARIO ACTIVO",
    "summary": "Nido en fase de transición (tamaño naranja/melón) con reina y primeras generaciones de obreras, ubicado a baja o media altura en garajes, setos urbanos o aleros residenciales.",
    "actions": [
      "Balizar un perímetro de seguridad de al menos 10 metros alrededor del nido.",
      "Avisar a los ocupantes de la vivienda para que cierren ventanas y permanezcan en el interior durante la intervención.",
      "Intervención al anochecer mediante inyección controlada de biocida autorizado o retirada física en saco estanco por operario equipado.",
      "Comprobación a las 24 horas para certificar la ausencia de obreras pecoreadoras residuales."
    ],
    "preventiveMeasures": [
      "Revisión de setos de ciprés, laurel y tuyas antes de realizar tareas de poda en urbanizaciones.",
      "Mantener cerradas las puertas de naves auxiliares y trasteros exteriores."
    ],
    "safetyWarnings": [
      "Uso obligatorio de traje integral de protección específico para velutina con casco y careta rígida.",
      "Prohibido intervenir sin extintor o medidas de seguridad si se utilizan pértigas cerca de tendidos eléctricos urbanos."
    ],
    "isLocal": true
  },
  "vespa_velutina||espacio_urbano||urb_m_s||urb_met_nido||nido_sec_pre||fin_eliminar": {
    "title": "URBANO: ELIMINACIÓN DE NIDO SECUNDARIO DE GRAN VOLUMEN",
    "summary": "Nido de gran tamaño (hasta 1 metro de altura) en copa de árbol urbano o estructura elevada, albergando miles de obreras. Riesgo crítico para la población circundante en parques, plazas o colegios.",
    "actions": [
      "Establecimiento inmediato de cordón de seguridad de 20 a 30 metros de radio por Policía Local o Protección Civil.",
      "Intervención por empresa especializada de control de plagas o bomberos mediante camión cesta o pértiga telescópica de carbono.",
      "Inyección de biocida homologado en la piquera del nido a alta presión en horario de baja actividad.",
      "Retirada del nido transcurridas 48-72 horas para asegurar la eliminación de todas las pecoreadoras retornadas."
    ],
    "preventiveMeasures": [
      "Protocolos de comunicación vecinal para reportes inmediatos a través de la aplicación municipal.",
      "Monitoreo sistemático de copas de plátanos de sombra y sauces en riberas urbanas."
    ],
    "safetyWarnings": [
      "ALTO RIESGO DE ATAQUE MASIVO: El radio de defensa de un nido secundario activo puede superar los 25 metros.",
      "Verificar que no haya personas en balcones cercanos durante la inyección del insecticida."
    ],
    "isLocal": true
  },
  "vespa_velutina||espacio_urbano||urb_m_s||urb_met_cont||cont_trampeo": {
    "title": "GESTIÓN URBANA: TRAMPEO SELECTIVO URBANO",
    "summary": "Aplicación de trampeo selectivo urbano en zonas periféricas, huertos periurbanos o áreas verdes municipales para disminuir la presión de obreras y fundadoras sin alterar el uso público del espacio.",
    "actions": [
      "Distribuir trampas selectivas con cebos de cerveza negra, vino blanco y jarabe en altura (mínimo 2.5 m del suelo).",
      "Revisión y mantenimiento semanal registrando capturas en la base de datos municipal.",
      "Retirada inmediata si se detectan capturas accidentales de mariposas o abejas melíferas."
    ],
    "preventiveMeasures": [
      "Mantener cerrados los contenedores de residuos orgánicos en terrazas de hostelería y mercados.",
      "Informar a la ciudadanía sobre no dejar restos de comida en parques públicos."
    ],
    "safetyWarnings": [
      "Señalización clara en español e idiomas locales: 'Peligro: Trampa de control biológico'.",
      "Manipular trampas siempre con guantes de protección química y biológica."
    ],
    "isLocal": true
  },
  "vespa_velutina||espacio_urbano||urb_m_s||urb_met_cont||cont_vectores": {
    "title": "GESTIÓN URBANA: CONTROL POR VECTORES EN ZONA URBANA",
    "summary": "Aplicación de control por vectores en zona urbana en zonas periféricas, huertos periurbanos o áreas verdes municipales para disminuir la presión de obreras y fundadoras sin alterar el uso público del espacio.",
    "actions": [
      "Capturar obreras en puntos de floración o fruta y colocar marcadores bajo protocolo de investigación municipal.",
      "Revisión y mantenimiento semanal registrando capturas en la base de datos municipal.",
      "Retirada inmediata si se detectan capturas accidentales de mariposas o abejas melíferas."
    ],
    "preventiveMeasures": [
      "Mantener cerrados los contenedores de residuos orgánicos en terrazas de hostelería y mercados.",
      "Informar a la ciudadanía sobre no dejar restos de comida en parques públicos."
    ],
    "safetyWarnings": [
      "Señalización clara en español e idiomas locales: 'Peligro: Trampa de control biológico'.",
      "Manipular trampas siempre con guantes de protección química y biológica."
    ],
    "isLocal": true
  },
  "vespa_velutina||espacio_urbano||urb_m_s||urb_met_cont||cont_loc_nidos": {
    "title": "URBANO: LOCALIZACIÓN DE NIDOS ACTIVOS EN EXPANSIÓN (MAY - SEP)",
    "summary": "Rastreo, triangulación y detección de nidos activos y secundarios en fase de rápido crecimiento poblacional en el arbolado de parques, plazas públicas y fachadas urbanas. La densidad poblacional humana exige localizar el nido a gran altura antes de que la presión de obreras genere incidentes en la vía pública.",
    "actions": [
      "Triangulación de líneas de vuelo (azimut): cronometrar el retorno de obreras desde fuentes de alimento y agua (fuentes, papeleras, fruterías) hacia la copa de los árboles.",
      "Inspección sistemática con prismáticos de alta definición en arbolado de gran porte (plátanos de sombra, chopos, robles) a partir de 8-15 m de altura.",
      "Seguimiento visual de obreras marcadas con polvo no tóxico o hilo de seda desde terrazas y azoteas con buena visibilidad panorámica.",
      "Uso de cámaras termográficas a primera hora de la mañana para detectar el gradiente térmico de la colonia activa entre el follaje espeso.",
      "Balizamiento preventivo inmediato de la zona inferior a la copa una vez localizado el nido hasta la llegada del equipo de neutralización."
    ],
    "preventiveMeasures": [
      "Mapeo de zonas urbanas prioritarias: registrar arbolado donde históricamente se han instalado nidos en temporadas precedentes.",
      "Control estricto de residuos orgánicos en terrazas de hostelería, contenedores de basura y mercados de abastos al aire libre.",
      "Habilitar canales ágiles de alerta ciudadana (vía app municipal o teléfono de emergencias) con protocolo de triaje y descarte de avispón europeo.",
      "Realizar podas invernales programadas para despejar copas en proximidades a patios escolares y vías peatonales transitadas."
    ],
    "safetyWarnings": [
      "PELIGRO GRAVE: En verano el nido cuenta con miles de obreras con un radio de alarma y ataque coordinado de 10 a 20 metros.",
      "Prohibir estrictamente lanzar piedras, palos, agua a presión o disparar perdigones al nido: desencadena ataques masivos a transeúntes.",
      "Acordonar una zona de exclusión de al menos 15 metros bajo la vertical del nido y avisar a la policía local para desviar el tránsito.",
      "El personal de inspección en proximidad debe portar traje integral certificado contra picadura de avispa asiática (> 3 mm de grosor)."
    ],
    "isLocal": true
  },
  "vespa_velutina||espacio_urbano||urb_s_n||urb_met_nido||nido_sec_pas||fin_no_actuar": {
    "title": "URBANO: NIDO SECUNDARIO PASADO (NO ACTUAR)",
    "summary": "Identificación de un nido secundario de gran tamaño de la temporada anterior o ciclo fenológico concluido en entorno urbano o periurbano. Nido completamente deshabitado que no presenta riesgo biológico activo.",
    "actions": [
      "Confirmar la ausencia absoluta de actividad en la piquera en horas centrales del día mediante prismáticos o cámara térmica.",
      "Informar a la propiedad o vecinos que el nido está muerto y que Vespa velutina NUNCA reutiliza un nido viejo.",
      "Dejar el nido en el árbol para que se degrade naturalmente o sirva de alimento a aves insectívoras (arrendajos, pájaros carpinteros).",
      "Solo retirar físicamente si existe riesgo estructural inminente de desprendimiento sobre aceras o vehículos por tormentas."
    ],
    "preventiveMeasures": [
      "No malgastar recursos municipales ni aplicar insecticidas en nidos vacíos.",
      "Tranquilizar a la ciudadanía explicando el ciclo vital anual de la especie."
    ],
    "safetyWarnings": [
      "No arrojar piedras ni disparar perdigones para destruirlo, pues podría desprender ramas secas.",
      "Si se retira por riesgo de caída, asegurar la zona de paso peatonal."
    ],
    "isLocal": true
  },
  "vespa_velutina||espacio_urbano||urb_s_n||urb_met_nido||nido_emb_pre||fin_eliminar": {
    "title": "URBANO: NEUTRALIZACIÓN DE NIDO EMBRIONARIO DE PRIMAVERA",
    "summary": "Detección de nido incipiente (tamaño de una pelota de golf o pelota de ping-pong) construido por una reina fundadora en aleros de viviendas, persianas, cobertizos o casetas de jardín.",
    "actions": [
      "Localizar el momento en que la reina fundadora se encuentre en el interior del nido (primeras horas del amanecer o última hora del atardecer).",
      "Aproximación con bolsa hermética o bote de boca ancha para atrapar nido y reina simultáneamente.",
      "Alternativamente, aplicar pulverización criogénica o insecticida de derribo directo específico y embolsar.",
      "Retirar el pedúnculo de fijación y limpiar la zona con agua caliente y vinagre para neutralizar feromonas de fijación."
    ],
    "preventiveMeasures": [
      "Instalar mosquiteras en ventanas y tapar respiraderos de chimeneas y buhardillas.",
      "Inspeccionar semanalmente techumbres y pérgolas entre marzo y junio."
    ],
    "safetyWarnings": [
      "Usar gafas de protección y guantes de carnaza.",
      "Asegurarse de neutralizar a la reina fundadora para evitar que reconstruya en las proximidades."
    ],
    "isLocal": true
  },
  "vespa_velutina||espacio_urbano||urb_s_n||urb_met_nido||nido_pri_pre||fin_eliminar": {
    "title": "URBANO: ELIMINACIÓN DE NIDO PRIMARIO ACTIVO",
    "summary": "Nido en fase de transición (tamaño naranja/melón) con reina y primeras generaciones de obreras, ubicado a baja o media altura en garajes, setos urbanos o aleros residenciales.",
    "actions": [
      "Balizar un perímetro de seguridad de al menos 10 metros alrededor del nido.",
      "Avisar a los ocupantes de la vivienda para que cierren ventanas y permanezcan en el interior durante la intervención.",
      "Intervención al anochecer mediante inyección controlada de biocida autorizado o retirada física en saco estanco por operario equipado.",
      "Comprobación a las 24 horas para certificar la ausencia de obreras pecoreadoras residuales."
    ],
    "preventiveMeasures": [
      "Revisión de setos de ciprés, laurel y tuyas antes de realizar tareas de poda en urbanizaciones.",
      "Mantener cerradas las puertas de naves auxiliares y trasteros exteriores."
    ],
    "safetyWarnings": [
      "Uso obligatorio de traje integral de protección específico para velutina con casco y careta rígida.",
      "Prohibido intervenir sin extintor o medidas de seguridad si se utilizan pértigas cerca de tendidos eléctricos urbanos."
    ],
    "isLocal": true
  },
  "vespa_velutina||espacio_urbano||urb_s_n||urb_met_nido||nido_sec_pre||fin_eliminar": {
    "title": "URBANO: ELIMINACIÓN DE NIDO SECUNDARIO DE GRAN VOLUMEN",
    "summary": "Nido de gran tamaño (hasta 1 metro de altura) en copa de árbol urbano o estructura elevada, albergando miles de obreras. Riesgo crítico para la población circundante en parques, plazas o colegios.",
    "actions": [
      "Establecimiento inmediato de cordón de seguridad de 20 a 30 metros de radio por Policía Local o Protección Civil.",
      "Intervención por empresa especializada de control de plagas o bomberos mediante camión cesta o pértiga telescópica de carbono.",
      "Inyección de biocida homologado en la piquera del nido a alta presión en horario de baja actividad.",
      "Retirada del nido transcurridas 48-72 horas para asegurar la eliminación de todas las pecoreadoras retornadas."
    ],
    "preventiveMeasures": [
      "Protocolos de comunicación vecinal para reportes inmediatos a través de la aplicación municipal.",
      "Monitoreo sistemático de copas de plátanos de sombra y sauces en riberas urbanas."
    ],
    "safetyWarnings": [
      "ALTO RIESGO DE ATAQUE MASIVO: El radio de defensa de un nido secundario activo puede superar los 25 metros.",
      "Verificar que no haya personas en balcones cercanos durante la inyección del insecticida."
    ],
    "isLocal": true
  },
  "vespa_velutina||espacio_urbano||urb_s_n||urb_met_cont||cont_trampeo": {
    "title": "GESTIÓN URBANA: TRAMPEO SELECTIVO URBANO",
    "summary": "Aplicación de trampeo selectivo urbano en zonas periféricas, huertos periurbanos o áreas verdes municipales para disminuir la presión de obreras y fundadoras sin alterar el uso público del espacio.",
    "actions": [
      "Distribuir trampas selectivas con cebos de cerveza negra, vino blanco y jarabe en altura (mínimo 2.5 m del suelo).",
      "Revisión y mantenimiento semanal registrando capturas en la base de datos municipal.",
      "Retirada inmediata si se detectan capturas accidentales de mariposas o abejas melíferas."
    ],
    "preventiveMeasures": [
      "Mantener cerrados los contenedores de residuos orgánicos en terrazas de hostelería y mercados.",
      "Informar a la ciudadanía sobre no dejar restos de comida en parques públicos."
    ],
    "safetyWarnings": [
      "Señalización clara en español e idiomas locales: 'Peligro: Trampa de control biológico'.",
      "Manipular trampas siempre con guantes de protección química y biológica."
    ],
    "isLocal": true
  },
  "vespa_velutina||espacio_urbano||urb_s_n||urb_met_cont||cont_vectores": {
    "title": "GESTIÓN URBANA: CONTROL POR VECTORES EN ZONA URBANA",
    "summary": "Aplicación de control por vectores en zona urbana en zonas periféricas, huertos periurbanos o áreas verdes municipales para disminuir la presión de obreras y fundadoras sin alterar el uso público del espacio.",
    "actions": [
      "Capturar obreras en puntos de floración o fruta y colocar marcadores bajo protocolo de investigación municipal.",
      "Revisión y mantenimiento semanal registrando capturas en la base de datos municipal.",
      "Retirada inmediata si se detectan capturas accidentales de mariposas o abejas melíferas."
    ],
    "preventiveMeasures": [
      "Mantener cerrados los contenedores de residuos orgánicos en terrazas de hostelería y mercados.",
      "Informar a la ciudadanía sobre no dejar restos de comida en parques públicos."
    ],
    "safetyWarnings": [
      "Señalización clara en español e idiomas locales: 'Peligro: Trampa de control biológico'.",
      "Manipular trampas siempre con guantes de protección química y biológica."
    ],
    "isLocal": true
  },
  "vespa_velutina||espacio_urbano||urb_s_n||urb_met_cont||cont_loc_nidos": {
    "title": "URBANO: LOCALIZACIÓN DE NIDOS SECUNDARIOS DE OTOÑO (SEP - NOV)",
    "summary": "Detección de grandes nidos secundarios en copas de arbolado urbano, grúas y edificios altos aprovechando la pérdida de follaje otoñal. Es la fase de máximo tamaño colonial y nacimiento de futuras reinas fecundadas, por lo que la localización urgente es crítica para evitar la dispersión reproductiva en el municipio.",
    "actions": [
      "Inspección visual intensiva del arbolado de parques, paseos y alamedas conforme avanza la caída de la hoja (defoliación progresiva).",
      "Observación de chimeneas industriales, torres de telecomunicaciones, grúas de construcción y huecos bajo aleros de edificios altos.",
      "Vuelos de reconocimiento con drones homologados equipados con zoom óptico y sensor infrarrojo para confirmar la actividad biológica del nido.",
      "Evaluación del riesgo de caída de ramas portadoras sobre cableado eléctrico, vías de tren o aceras concurridas.",
      "Priorización de intervenciones: categorizar de emergencia los nidos a menos de 50 metros de centros educativos, hospitales o residencias de ancianos."
    ],
    "preventiveMeasures": [
      "Campañas otoñales de concienciación ciudadana para alertar sobre esferas visibles entre ramas desnudas.",
      "Coordinación interdepartamental entre Parques y Jardines, Policía Local y Servicios de Emergencia para priorizar intervenciones.",
      "Revisión exhaustiva de taludes de vías de tren, márgenes de ríos urbanos y cinturones verdes limítrofes con áreas residenciales.",
      "Actualización continua del GIS municipal para planificar con precisión el trampeo de fundadoras en la primavera siguiente."
    ],
    "safetyWarnings": [
      "MÁXIMO RIESGO DE PICADURAS MÚLTIPLES: La colonia en otoño alberga hasta 5.000-8.000 avispas sumamente irritables ante vibraciones del viento.",
      "Desalojo y corte perimetral de tráfico rodado y peatonal durante las tareas de aproximación, inspección y tratamiento.",
      "Uso riguroso de mono de protección profesional para avispa velutina con casco rígido y ventilación forzada; la ropa ordinaria no protege.",
      "Disponibilidad inmediata de botiquín con autoinyectores de adrenalina y contacto directo con el servicio de urgencias médicas (112)."
    ],
    "isLocal": true
  },
  "vespa_velutina||espacio_urbano||urb_d_e||urb_met_nido||nido_sec_pas||fin_no_actuar": {
    "title": "URBANO: NIDO SECUNDARIO PASADO (NO ACTUAR)",
    "summary": "Identificación de un nido secundario de gran tamaño de la temporada anterior o ciclo fenológico concluido en entorno urbano o periurbano. Nido completamente deshabitado que no presenta riesgo biológico activo.",
    "actions": [
      "Confirmar la ausencia absoluta de actividad en la piquera en horas centrales del día mediante prismáticos o cámara térmica.",
      "Informar a la propiedad o vecinos que el nido está muerto y que Vespa velutina NUNCA reutiliza un nido viejo.",
      "Dejar el nido en el árbol para que se degrade naturalmente o sirva de alimento a aves insectívoras (arrendajos, pájaros carpinteros).",
      "Solo retirar físicamente si existe riesgo estructural inminente de desprendimiento sobre aceras o vehículos por tormentas."
    ],
    "preventiveMeasures": [
      "No malgastar recursos municipales ni aplicar insecticidas en nidos vacíos.",
      "Tranquilizar a la ciudadanía explicando el ciclo vital anual de la especie."
    ],
    "safetyWarnings": [
      "No arrojar piedras ni disparar perdigones para destruirlo, pues podría desprender ramas secas.",
      "Si se retira por riesgo de caída, asegurar la zona de paso peatonal."
    ],
    "isLocal": true
  },
  "vespa_velutina||espacio_urbano||urb_d_e||urb_met_nido||nido_emb_pre||fin_eliminar": {
    "title": "URBANO: NEUTRALIZACIÓN DE NIDO EMBRIONARIO DE PRIMAVERA",
    "summary": "Detección de nido incipiente (tamaño de una pelota de golf o pelota de ping-pong) construido por una reina fundadora en aleros de viviendas, persianas, cobertizos o casetas de jardín.",
    "actions": [
      "Localizar el momento en que la reina fundadora se encuentre en el interior del nido (primeras horas del amanecer o última hora del atardecer).",
      "Aproximación con bolsa hermética o bote de boca ancha para atrapar nido y reina simultáneamente.",
      "Alternativamente, aplicar pulverización criogénica o insecticida de derribo directo específico y embolsar.",
      "Retirar el pedúnculo de fijación y limpiar la zona con agua caliente y vinagre para neutralizar feromonas de fijación."
    ],
    "preventiveMeasures": [
      "Instalar mosquiteras en ventanas y tapar respiraderos de chimeneas y buhardillas.",
      "Inspeccionar semanalmente techumbres y pérgolas entre marzo y junio."
    ],
    "safetyWarnings": [
      "Usar gafas de protección y guantes de carnaza.",
      "Asegurarse de neutralizar a la reina fundadora para evitar que reconstruya en las proximidades."
    ],
    "isLocal": true
  },
  "vespa_velutina||espacio_urbano||urb_d_e||urb_met_nido||nido_pri_pre||fin_eliminar": {
    "title": "URBANO: ELIMINACIÓN DE NIDO PRIMARIO ACTIVO",
    "summary": "Nido en fase de transición (tamaño naranja/melón) con reina y primeras generaciones de obreras, ubicado a baja o media altura en garajes, setos urbanos o aleros residenciales.",
    "actions": [
      "Balizar un perímetro de seguridad de al menos 10 metros alrededor del nido.",
      "Avisar a los ocupantes de la vivienda para que cierren ventanas y permanezcan en el interior durante la intervención.",
      "Intervención al anochecer mediante inyección controlada de biocida autorizado o retirada física en saco estanco por operario equipado.",
      "Comprobación a las 24 horas para certificar la ausencia de obreras pecoreadoras residuales."
    ],
    "preventiveMeasures": [
      "Revisión de setos de ciprés, laurel y tuyas antes de realizar tareas de poda en urbanizaciones.",
      "Mantener cerradas las puertas de naves auxiliares y trasteros exteriores."
    ],
    "safetyWarnings": [
      "Uso obligatorio de traje integral de protección específico para velutina con casco y careta rígida.",
      "Prohibido intervenir sin extintor o medidas de seguridad si se utilizan pértigas cerca de tendidos eléctricos urbanos."
    ],
    "isLocal": true
  },
  "vespa_velutina||espacio_urbano||urb_d_e||urb_met_nido||nido_sec_pre||fin_eliminar": {
    "title": "URBANO: ELIMINACIÓN DE NIDO SECUNDARIO DE GRAN VOLUMEN",
    "summary": "Nido de gran tamaño (hasta 1 metro de altura) en copa de árbol urbano o estructura elevada, albergando miles de obreras. Riesgo crítico para la población circundante en parques, plazas o colegios.",
    "actions": [
      "Establecimiento inmediato de cordón de seguridad de 20 a 30 metros de radio por Policía Local o Protección Civil.",
      "Intervención por empresa especializada de control de plagas o bomberos mediante camión cesta o pértiga telescópica de carbono.",
      "Inyección de biocida homologado en la piquera del nido a alta presión en horario de baja actividad.",
      "Retirada del nido transcurridas 48-72 horas para asegurar la eliminación de todas las pecoreadoras retornadas."
    ],
    "preventiveMeasures": [
      "Protocolos de comunicación vecinal para reportes inmediatos a través de la aplicación municipal.",
      "Monitoreo sistemático de copas de plátanos de sombra y sauces en riberas urbanas."
    ],
    "safetyWarnings": [
      "ALTO RIESGO DE ATAQUE MASIVO: El radio de defensa de un nido secundario activo puede superar los 25 metros.",
      "Verificar que no haya personas en balcones cercanos durante la inyección del insecticida."
    ],
    "isLocal": true
  },
  "vespa_velutina||espacio_urbano||urb_d_e||urb_met_cont||cont_trampeo": {
    "title": "GESTIÓN URBANA: TRAMPEO SELECTIVO URBANO",
    "summary": "Aplicación de trampeo selectivo urbano en zonas periféricas, huertos periurbanos o áreas verdes municipales para disminuir la presión de obreras y fundadoras sin alterar el uso público del espacio.",
    "actions": [
      "Distribuir trampas selectivas con cebos de cerveza negra, vino blanco y jarabe en altura (mínimo 2.5 m del suelo).",
      "Revisión y mantenimiento semanal registrando capturas en la base de datos municipal.",
      "Retirada inmediata si se detectan capturas accidentales de mariposas o abejas melíferas."
    ],
    "preventiveMeasures": [
      "Mantener cerrados los contenedores de residuos orgánicos en terrazas de hostelería y mercados.",
      "Informar a la ciudadanía sobre no dejar restos de comida en parques públicos."
    ],
    "safetyWarnings": [
      "Señalización clara en español e idiomas locales: 'Peligro: Trampa de control biológico'.",
      "Manipular trampas siempre con guantes de protección química y biológica."
    ],
    "isLocal": true
  },
  "vespa_velutina||espacio_urbano||urb_d_e||urb_met_cont||cont_vectores": {
    "title": "GESTIÓN URBANA: CONTROL POR VECTORES EN ZONA URBANA",
    "summary": "Aplicación de control por vectores en zona urbana en zonas periféricas, huertos periurbanos o áreas verdes municipales para disminuir la presión de obreras y fundadoras sin alterar el uso público del espacio.",
    "actions": [
      "Capturar obreras en puntos de floración o fruta y colocar marcadores bajo protocolo de investigación municipal.",
      "Revisión y mantenimiento semanal registrando capturas en la base de datos municipal.",
      "Retirada inmediata si se detectan capturas accidentales de mariposas o abejas melíferas."
    ],
    "preventiveMeasures": [
      "Mantener cerrados los contenedores de residuos orgánicos en terrazas de hostelería y mercados.",
      "Informar a la ciudadanía sobre no dejar restos de comida en parques públicos."
    ],
    "safetyWarnings": [
      "Señalización clara en español e idiomas locales: 'Peligro: Trampa de control biológico'.",
      "Manipular trampas siempre con guantes de protección química y biológica."
    ],
    "isLocal": true
  },
  "vespa_velutina||espacio_urbano||urb_d_e||urb_met_cont||cont_loc_nidos": {
    "title": "URBANO: LOCALIZACIÓN E INSPECCIÓN DE NIDOS INVERNALES (DIC - ENE)",
    "summary": "Censo, inspección y evaluación de nidos secundarios en el arbolado urbano completamente defoliado durante el invierno. La colonia biológica ha muerto o está extinta, pero es necesario certificar la inactividad, geolocalizar la estructura y descartar riesgos de desprendimiento físico sobre la vía pública.",
    "actions": [
      "Censo e inventariado visual sistemático de todos los nidos descubiertos en copas desnudas en calles, avenidas y zonas verdes urbanas.",
      "Comprobación técnica de inactividad con prismáticos o visor térmico en horas soleadas de mediodía (ausencia de tráfico de obreras).",
      "Inspección de la estabilidad mecánica de la rama de anclaje para prevenir la caída del nido empapado por lluvia o nieve sobre peatones o coches.",
      "Registro de coordenadas GPS en la base cartográfica municipal para identificar los corredores de dispersión invernal.",
      "Comunicación y tranquilidad ciudadana: certificar a los vecinos que el nido está inerte y que NUNCA será repoblado en la primavera."
    ],
    "preventiveMeasures": [
      "Aprovechar los operativos de poda municipal de arbolado para sanear ramas secas y retirar nidos inertes que causen alarma social.",
      "Inspeccionar posibles refugios de invernada de reinas (grietas en muros de piedra, leñeras, maceteros grandes, tambores de persiana desocupados).",
      "Planificar las zonas de instalación de trampas selectivas de reinas fundadoras para finales de febrero alrededor de los nidos invernales detectados.",
      "Retirar estructuras inestables situadas justo encima de accesos peatonales o paradas de transporte público."
    ],
    "safetyWarnings": [
      "Peligro de desprendimiento y caída de ramas pesadas o masas de nido degradadas por inclemencias meteorológicas invernales.",
      "En inviernos inusualmente templados, verificar meticulosamente la ausencia total de obreras tardías antes de intervenir sin traje completo.",
      "Cumplimiento estricto de la normativa de trabajos en altura (arnés de seguridad, líneas de vida y plataforma elevadora homologada).",
      "Balizar la zona de caída potencial durante cualquier maniobra de apeo de ramas o desmontaje del nido inerte."
    ],
    "isLocal": true
  },
  "vespa_velutina||espacio_natural||nat_forestal||for_desbroze||act_rev": {
    "title": "PREVENCIÓN LABORAL EN GESTIÓN FORESTAL: TRABAJOS DE DESBROCE MECANIZADO",
    "summary": "Protocolo de seguridad preventiva para operarios forestales durante labores de trabajos de desbroce mecanizado en zonas colonizadas por Vespa velutina. Las vibraciones de maquinaria pesada o motosierras disparan el ataque defensivo de los nidos ocultos en vegetación o copas.",
    "actions": [
      "Inspección visual previa del sotobosque y las copas en un radio de 50 metros antes del encendido de maquinaria.",
      "Verificar ausencia de trasiego de velutinas o entrada/salida de insectos en huecos de troncos o zarzas densas.",
      "Establecer una ruta de evacuación rápida y despejada para la cuadrilla forestal.",
      "En caso de detección de nido, paralizar los trabajos en un radio de 30 metros y notificar a la unidad de retirada oficial."
    ],
    "preventiveMeasures": [
      "Evitar desbroces en días muy calurosos durante las horas de mayor actividad de la avispa.",
      "Equipar las cabinas de tractores y desbrozadoras con cerramientos herméticos o filtros de malla."
    ],
    "safetyWarnings": [
      "PELIGRO MORTAL: La vibración continuada puede provocar ataques simultáneos de cientos de obreras.",
      "Los operarios deben portar traje de protección específico para velutina en el vehículo de cuadrilla y autoinyectores de adrenalina."
    ],
    "isLocal": true
  },
  "vespa_velutina||espacio_natural||nat_forestal||for_tala||act_rev": {
    "title": "PREVENCIÓN LABORAL EN GESTIÓN FORESTAL: TALA Y APEO DE ÁRBOLES",
    "summary": "Protocolo de seguridad preventiva para operarios forestales durante labores de tala y apeo de árboles en zonas colonizadas por Vespa velutina. Las vibraciones de maquinaria pesada o motosierras disparan el ataque defensivo de los nidos ocultos en vegetación o copas.",
    "actions": [
      "Inspección visual previa del sotobosque y las copas en un radio de 50 metros antes del encendido de maquinaria.",
      "Verificar ausencia de trasiego de velutinas o entrada/salida de insectos en huecos de troncos o zarzas densas.",
      "Establecer una ruta de evacuación rápida y despejada para la cuadrilla forestal.",
      "En caso de detección de nido, paralizar los trabajos en un radio de 30 metros y notificar a la unidad de retirada oficial."
    ],
    "preventiveMeasures": [
      "Evitar desbroces en días muy calurosos durante las horas de mayor actividad de la avispa.",
      "Equipar las cabinas de tractores y desbrozadoras con cerramientos herméticos o filtros de malla."
    ],
    "safetyWarnings": [
      "PELIGRO MORTAL: La vibración continuada puede provocar ataques simultáneos de cientos de obreras.",
      "Los operarios deben portar traje de protección específico para velutina en el vehículo de cuadrilla y autoinyectores de adrenalina."
    ],
    "isLocal": true
  },
  "vespa_velutina||espacio_natural||nat_agricola||agr_fruta||act_rev": {
    "title": "PROTECCIÓN AGRÍCOLA EN COSECHA Y RECOGIDA DE FRUTA",
    "summary": "Protocolo técnico para vendimias y recolección de frutales carnosos (manzana, pera, uva, higo). La Vespa velutina daña los frutos maduros para alimentarse de azúcares y genera graves riesgos de picadura a los recolectores manuales.",
    "actions": [
      "Inspección visual de racimos y copas de frutales antes de introducir las manos en el follaje.",
      "Uso obligatorio de guantes anticorte/antipunción y manga larga ajustada en muñecas.",
      "Eliminación o retirada temprana de fruta sobremadura o caída en el suelo que atrae colonias enteras de obreras.",
      "Colocación de trampas selectivas perimetrales con cebo dulce fermentado 2 semanas antes del inicio de la recolección."
    ],
    "preventiveMeasures": [
      "Mantener desbrozada la base de las hileras de frutales para facilitar la detección de frutos caídos.",
      "Evitar colonias de pulgón que generen melaza atractiva en las hojas."
    ],
    "safetyWarnings": [
      "No tocar fruta sin mirar previamente: una avispa escondida dentro de un higo o racimo picará de forma reactiva.",
      "Suspender la recolección en árboles donde se observe concentración anómala de ejemplares."
    ],
    "isLocal": true
  },
  "vespa_velutina||espacio_natural||nat_monitoreo": {
    "title": "MONITOREO Y CENSO AMBIENTAL DE VESPA VELUTINA EN MEDIO NATURAL",
    "summary": "Seguimiento de la densidad y frente de expansión de Vespa velutina en hábitats naturales (bosques de ribera, masa forestal autóctona) para evaluar el impacto sobre la biodiversidad de dípteros, himenópteros y flora.",
    "actions": [
      "Instalación de transectos de trampeo centinela con atrayente azucarado estandarizado cada 500 metros.",
      "Recogida y conteo quincenal de capturas discriminando ejemplares por sexo y casta (reinas/obreras).",
      "Mapeo de la curva de vuelos en Sistemas de Información Geográfica (SIG).",
      "Remisión de datos a centros de investigación ambiental y mesas de sanidad apícola."
    ],
    "preventiveMeasures": [
      "Utilizar líquidos atrayentes con repelentes de abejas y fauna no objetivo (etanol/ácido acético).",
      "Retirar las trampas en épocas de baja actividad para no perjudicar a la entomofauna silvestre."
    ],
    "safetyWarnings": [
      "Señalizar las trampas de monitoreo para evitar curiosos y vandalismo.",
      "Llevar botiquín con antihistamínicos y corticoides durante los trabajos de campo en masa boscosa."
    ],
    "isLocal": true
  },
  "otras_avispas||autoctonas": {
    "title": "PROTECCIÓN Y CONSERVACIÓN DE AVISPAS AUTÓCTONAS",
    "summary": "Identificación y preservación de especies nativas (Vespa crabro, Polistes spp., Vespula vulgaris). Estas especies no representan una plaga invasora y cumplen un papel ecológico esencial como polinizadores y controladores naturales de orugas y parásitos.",
    "actions": [
      "Verificar caracteres morfológicos distintivos (tórax rojizo/pardo y abdomen mayormente amarillo en Vespa crabro).",
      "No instalar trampas de atracción indiscriminada cerca de asentamientos de avispa autóctona.",
      "Informar a los vecinos y apicultores sobre el valor protector de la fauna autóctona frente a la invasión biológica.",
      "En caso de nido en vivienda con personas vulnerables, reubicar o consultar con agentes forestales antes de cualquier eliminación."
    ],
    "preventiveMeasures": [
      "Usar trampas con selectividad de entrada (orificios calibrados de 8.5 mm con conos de salida de 5 mm para especies no diana).",
      "Evitar el uso de biocidas de amplio espectro en jardines y huertos."
    ],
    "safetyWarnings": [
      "No manipular ni molestar los avisperos a menos de 5 metros de distancia.",
      "Vespa crabro posee una picadura dolorosa pero solo ataca si su nido es perturbado directamente."
    ],
    "isLocal": true
  },
  "otras_avispas||invasoras||inv_trampeo": {
    "title": "GESTIÓN DE OTRAS AVISPAS INVASORAS: TRAMPEO SELECTIVO DE CONTENCIÓN",
    "summary": "Protocolo de alerta temprana y erradicación rápida frente a nuevas especies exóticas invasoras (ej. Vespa orientalis, Vespa bicolor). La detección precoz es fundamental para evitar su asentamiento territorial.",
    "actions": [
      "Fotografiar ejemplares capturados y geolocalizar el punto de avistamiento con coordenadas GPS.",
      "Comunicar de inmediato el hallazgo a la Red de Alerta de Especies Invasoras de la comunidad autónoma correspondiente.",
      "Instalar batería perimetral de trampas con cebos proteicos específicos para insectos depredadores.",
      "Inspeccionar oquedades en muros, techumbres y terrenos pedregosos donde suelen anidar estas especies."
    ],
    "preventiveMeasures": [
      "Mantener vigilancia en zonas portuarias, almacenes logísticos y explotaciones agrícolas.",
      "Revisar cargamentos de materias primas y leña importada."
    ],
    "safetyWarnings": [
      "Las colonias de Vespa orientalis son agresivas ante la vibración en tierra.",
      "Usar equipo de protección integral homologado con rejilla metálica facial."
    ],
    "isLocal": true
  },
  "otras_avispas||invasoras||inv_vectores": {
    "title": "GESTIÓN DE OTRAS AVISPAS INVASORAS: METODOLOGÍA DE VECTORES",
    "summary": "Protocolo de alerta temprana y erradicación rápida frente a nuevas especies exóticas invasoras (ej. Vespa orientalis, Vespa bicolor). La detección precoz es fundamental para evitar su asentamiento territorial.",
    "actions": [
      "Fotografiar ejemplares capturados y geolocalizar el punto de avistamiento con coordenadas GPS.",
      "Comunicar de inmediato el hallazgo a la Red de Alerta de Especies Invasoras de la comunidad autónoma correspondiente.",
      "Aplicar técnica de marcaje de vector nodriza bajo estricta supervisión técnica oficial para triangulación del nido.",
      "Inspeccionar oquedades en muros, techumbres y terrenos pedregosos donde suelen anidar estas especies."
    ],
    "preventiveMeasures": [
      "Mantener vigilancia en zonas portuarias, almacenes logísticos y explotaciones agrícolas.",
      "Revisar cargamentos de materias primas y leña importada."
    ],
    "safetyWarnings": [
      "Las colonias de Vespa orientalis son agresivas ante la vibración en tierra.",
      "Usar equipo de protección integral homologado con rejilla metálica facial."
    ],
    "isLocal": true
  }
};
