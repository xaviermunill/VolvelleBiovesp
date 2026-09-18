
import { GoogleGenAI, Type } from "@google/genai";
import { DecisionPath, ManagementProtocol } from "./types";

const SYSTEM_INSTRUCTION = `
Eres un experto senior en entomología aplicada y gestión de especies invasoras, especializado en Vespa velutina nigrithorax para Biovesp.es.
Tu tarea es generar protocolos técnicos de actuación basados en el "Manual de Gestión Integrada de Vespa velutina V.2.13".

Para cada ruta de decisión que recibas, debes proporcionar:
1. Un título técnico conciso.
2. Un resumen ejecutivo del escenario.
3. Una lista de acciones precisas (paso a paso).
4. Medidas de prevención para evitar la propagación o daños colaterales.
5. Advertencias de seguridad críticas para el operario o el público.

Importante: 
- Si la ruta indica "No actuar", explica científicamente por qué (ej. nido secundario pasado ya abandonado).
- Si la ruta indica "Eliminar", especifica el método más idóneo (biocida, congelación, retirada física) según el entorno (urbano vs apiario).
- Usa un tono profesional, técnico y directo.
`;

export const getManagementProtocol = async (path: DecisionPath): Promise<ManagementProtocol | null> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // Construir prompt descriptivo basado en la ruta
  const prompt = `Genera un protocolo de actuación para la siguiente ruta de decisión técnica:
  - Nivel 1 (Especie): ${path.level1}
  - Nivel 2 (Entorno): ${path.level2}
  - Nivel 3 (Temporalidad): ${path.level3}
  - Nivel 4 (Sanidad/Actividad): ${path.level4}
  - Nivel 5 (Mielada/Detalle): ${path.level5}
  - Nivel 6 (Vitalidad): ${path.level6}
  - Nivel 7 (Acción): ${path.level7}
  - Nivel 8 (Método): ${path.level8}
  - Nivel 9 (Final): ${path.level9}`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            summary: { type: Type.STRING },
            actions: { type: Type.ARRAY, items: { type: Type.STRING } },
            preventiveMeasures: { type: Type.ARRAY, items: { type: Type.STRING } },
            safetyWarnings: { type: Type.ARRAY, items: { type: Type.STRING } },
          },
          required: ["title", "summary", "actions", "preventiveMeasures", "safetyWarnings"],
        },
      },
    });

    const text = response.text;
    if (!text) return null;
    return JSON.parse(text) as ManagementProtocol;
  } catch (error) {
    console.error("Error consultando Gemini:", error);
    return null;
  }
};
