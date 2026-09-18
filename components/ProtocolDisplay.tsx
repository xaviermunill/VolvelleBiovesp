import React from 'react';
import { 
  CheckCircle2, AlertTriangle, ShieldCheck, FileText, Database, 
  Loader2, Sparkles, ChevronRight, Layers, ArrowRight, RotateCcw,
  Bug, ShieldAlert, Crosshair, Compass, Check
} from 'lucide-react';
import { SelectionAnalysis } from '../protocolAnalyzer';
import { getIconForId } from '../constants';

interface ProtocolDisplayProps {
  analysis: SelectionAnalysis;
  loading: boolean;
  onSelectNextOption?: (level: number, id: string) => void;
  onStepClick?: (level: number, id: string) => void;
  onResetSelection?: () => void;
  onRegenerateAI?: () => void;
  isRegenerating?: boolean;
}

const ProtocolDisplay: React.FC<ProtocolDisplayProps> = ({ 
  analysis, 
  loading, 
  onSelectNextOption,
  onStepClick,
  onResetSelection,
  onRegenerateAI,
  isRegenerating = false
}) => {
  if (loading) {
    return (
      <div className="bg-white rounded-[3rem] shadow-xl border border-slate-100 p-12 flex flex-col items-center justify-center min-h-[520px] text-center space-y-6">
        <div className="relative">
          <Loader2 size={64} className="animate-spin text-orange-600" />
          <Sparkles className="absolute -top-2 -right-2 text-amber-400 animate-pulse" size={24} />
        </div>
        <div>
          <h3 className="text-xl font-black text-slate-800">Actualizando Protocolo</h3>
          <p className="text-sm text-slate-400 mt-2">Sincronizando con la matriz de 388 combinaciones de Biovesp...</p>
        </div>
      </div>
    );
  }

  // Si no hay nada seleccionado aún
  if (analysis.isEmpty) {
    return (
      <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 p-8 flex flex-col justify-between min-h-[580px] animate-in fade-in duration-300">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center">
              <Bug size={24} />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-orange-600">Guía de Inicio</span>
              <h3 className="text-xl font-black text-slate-800">Rueda Volvelle de Decisión</h3>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100 rounded-2xl p-5 mb-6">
            <p className="text-xs text-slate-700 font-medium leading-relaxed">
              Selecciona un botón del volvelle concéntrico o haz clic en las opciones directas de abajo. Cada selección actualizará inmediatamente el <strong>resumen de selección</strong>, propondrá las <strong>acciones a tomar para el control</strong>, recordará los <strong>consejos de prevención</strong> y las <strong>medidas de seguridad</strong> validadas.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Layers size={14} className="text-orange-500" /> Primer paso: Elige la especie
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {analysis.nextOptions?.options.map(opt => (
                <button
                  key={opt.id}
                  onClick={() => onSelectNextOption && onSelectNextOption(1, opt.id)}
                  className="p-4 rounded-2xl border border-slate-200 hover:border-orange-500 bg-white hover:bg-orange-50/50 text-left transition-all shadow-sm hover:shadow-md flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-3.5 h-3.5 rounded-full flex-shrink-0" 
                      style={{ backgroundColor: opt.color }}
                    />
                    <div>
                      <h5 className="text-xs font-black text-slate-800 uppercase tracking-tight">{opt.label}</h5>
                      <span className="text-[10px] text-slate-400 font-semibold">
                        {opt.id === 'vespa_velutina' ? 'Avispa asiática invasora' : 'Especies autóctonas y otras'}
                      </span>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-slate-300 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-[11px] text-slate-500">
          <div className="flex items-start gap-2">
            <ShieldCheck size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
            <p>Basado en el <strong>Manual de Gestión Integrada Biovesp v2.13</strong>.</p>
          </div>
          <div className="flex items-start gap-2">
            <Database size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
            <p>Matriz completa con <strong>388 rutas técnicas</strong> catalogadas.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-right-4 duration-300">
      {/* CABECERA: Resumen de Selección */}
      <div className="p-7 text-white relative bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${
              analysis.isComplete 
                ? 'bg-emerald-500/20 text-emerald-100 border-emerald-300/30' 
                : 'bg-white/20 text-orange-100 border-white/20'
            }`}>
              {analysis.isComplete ? 'Protocolo Final' : `Nivel ${analysis.activeLevelCount} de 9`}
            </span>
            <span className="px-2.5 py-1 bg-black/20 backdrop-blur-md rounded-full text-[10px] font-bold text-amber-200 border border-white/10">
              {analysis.matchingCount} {analysis.matchingCount === 1 ? 'ruta exacta' : 'rutas compatibles'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {onRegenerateAI && (
              <button
                onClick={onRegenerateAI}
                disabled={isRegenerating}
                className="px-3 py-1 bg-black/30 hover:bg-black/40 backdrop-blur-md text-[10px] font-black uppercase rounded-full tracking-wider flex items-center gap-1.5 border border-white/20 transition-all text-white disabled:opacity-50"
                title="Consultar versión técnica alternativa con Gemini"
              >
                {isRegenerating ? <Loader2 size={11} className="animate-spin" /> : <Sparkles size={11} className="text-amber-300" />}
                <span>{isRegenerating ? 'Consultando...' : 'IA Gemini'}</span>
              </button>
            )}
            {onResetSelection && (
              <button
                onClick={onResetSelection}
                className="p-1.5 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors"
                title="Reiniciar selección"
              >
                <RotateCcw size={13} />
              </button>
            )}
          </div>
        </div>

        {/* Título de la Selección */}
        <h2 className="text-xl sm:text-2xl font-black flex items-start gap-3 leading-tight tracking-tight">
          <Crosshair className="text-amber-200 flex-shrink-0 mt-1" size={24} />
          <span>{analysis.summaryTitle}</span>
        </h2>

        {/* Resumen contextual explicativo de la selección */}
        <div className="mt-4 bg-black/15 backdrop-blur-sm rounded-2xl p-4 border border-white/10 text-orange-50 text-xs sm:text-[13px] leading-relaxed font-medium">
          <div className="text-[10px] uppercase font-black tracking-widest text-amber-200 mb-1 flex items-center gap-1.5">
            <FileText size={12} /> Resumen de Selección
          </div>
          {analysis.summaryContext}
        </div>

        {/* Rastro de pasos (Breadcrumbs interactivos) */}
        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          {analysis.selectedSteps.map((step, idx) => (
            <React.Fragment key={step.id}>
              <button
                onClick={() => onStepClick && onStepClick(step.level, step.id)}
                className="px-2.5 py-1 bg-white/20 hover:bg-white/30 rounded-lg text-[10px] font-bold text-white flex items-center gap-1 transition-all border border-white/10 group"
                title={`Volver a ${step.levelName}`}
              >
                <span className="opacity-60">{step.levelName}:</span>
                <span className="underline decoration-dotted underline-offset-2">{step.label}</span>
              </button>
              {idx < analysis.selectedSteps.length - 1 && (
                <ChevronRight size={11} className="text-white/40 flex-shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* CUERPO PRINCIPAL */}
      <div className="p-7 space-y-7">
        
        {/* APARTADO: Opciones de Selección para el Próximo Nivel de Decisión */}
        {analysis.nextOptions ? (
          <section className="bg-gradient-to-br from-amber-50/70 via-orange-50/40 to-slate-50 p-5 sm:p-6 rounded-[2rem] border-2 border-orange-200/90 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3.5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-orange-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm shadow-orange-300">
                  <Compass size={18} className="animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-black text-slate-800 uppercase tracking-tight">
                    Opciones para el Próximo Nivel de Decisión
                  </h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase text-orange-700 bg-orange-100/90 px-2 py-0.5 rounded-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-600 animate-ping" />
                      Nivel {analysis.nextOptions.level}: {analysis.nextOptions.levelName}
                    </span>
                    <span className="text-[10px] text-slate-500 font-semibold">
                      ({analysis.nextOptions.options.length} {analysis.nextOptions.options.length === 1 ? 'opción disponible' : 'opciones disponibles'})
                    </span>
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-bold text-slate-500 hidden sm:block bg-white px-2.5 py-1 rounded-lg border border-slate-200/70 shadow-2xs">
                Pulsa una opción o el anillo de la rueda
              </span>
            </div>

            <p className="text-xs text-slate-600 mb-3 font-medium leading-relaxed">
              Para afinar el protocolo técnico, elige el siguiente criterio en la lista o directamente en el disco concéntrico:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {analysis.nextOptions.options.map(opt => (
                <button
                  key={opt.id}
                  onClick={() => onSelectNextOption && onSelectNextOption(analysis.nextOptions!.level, opt.id)}
                  className="px-3.5 py-3 rounded-2xl bg-white hover:bg-orange-50/80 border-2 border-slate-200/90 hover:border-orange-500 text-left transition-all shadow-xs hover:shadow-md flex items-center justify-between group active:scale-[0.98]"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span 
                      className="w-3.5 h-3.5 rounded-full flex-shrink-0 ring-2 ring-white shadow-xs" 
                      style={{ backgroundColor: opt.color }}
                    />
                    <span className="text-xs sm:text-[13px] font-black text-slate-800 group-hover:text-orange-950 truncate">
                      {opt.label}
                    </span>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-orange-500 text-slate-400 group-hover:text-white flex items-center justify-center transition-all flex-shrink-0 ml-2">
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              ))}
            </div>
          </section>
        ) : (
          <section className="bg-emerald-50/60 p-4 sm:p-5 rounded-[2rem] border border-emerald-200 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                <Check size={18} />
              </div>
              <div>
                <h4 className="text-xs font-black text-emerald-950 uppercase tracking-tight">
                  Nivel Final de Decisión Alcanzado
                </h4>
                <p className="text-[11px] text-emerald-800 font-medium mt-0.5">
                  Esta rama ha completado todas las etapas de decisión del Manual Biovesp v2.13.
                </p>
              </div>
            </div>
            <span className="hidden sm:inline-block text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-white/80 px-2.5 py-1 rounded-full border border-emerald-200">
              Protocolo Validador
            </span>
          </section>
        )}

        {/* BLOQUE 1: Acciones a Tomar para el Control de Vespa velutina */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-black text-slate-800 uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 className="text-orange-600" size={18} />
              <span>Acciones a Tomar para el Control</span>
            </h3>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
              {analysis.isComplete ? 'Protocolo Validador Final' : 'Acciones según opciones a elegir'}
            </span>
          </div>

          {!analysis.isComplete && (
            <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50/60 border border-amber-200/90 mb-4.5 shadow-xs">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-xl bg-amber-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                  <Compass size={16} />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-200/80 text-amber-900 border border-amber-300">
                      Nivel {analysis.activeLevelCount} de 9
                    </span>
                    <span className="text-xs font-black text-amber-950">
                      Selección en curso en la matriz
                    </span>
                  </div>
                  <p className="text-xs text-amber-900 leading-relaxed font-medium">
                    Aún no se ha alcanzado el nivel final de selección de opciones en la matriz. Estas son las <strong>acciones de control que te recomendará el protocolo</strong> según las opciones que vayas escogiendo en el <strong>{analysis.nextOptions?.levelName || 'siguiente paso'}</strong>:
                  </p>
                </div>
              </div>
            </div>
          )}

          {!analysis.isComplete && analysis.actionsByNextOption && analysis.actionsByNextOption.length > 0 && (
            <div className="space-y-3.5 mb-5">
              <div className="flex items-center justify-between">
                <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <span>Acciones específicas si eliges en {analysis.nextOptions?.levelName}:</span>
                </h4>
                <span className="text-[10px] font-bold text-slate-400">
                  {analysis.actionsByNextOption.length} opciones disponibles
                </span>
              </div>

              {analysis.actionsByNextOption.map((optPreview) => {
                const iconNode = getIconForId(optPreview.optionId);
                return (
                  <div 
                    key={optPreview.optionId}
                    className="p-4 rounded-2xl bg-white border-2 border-slate-200/90 hover:border-orange-400 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-100">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span 
                          className="w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0 text-white shadow-xs" 
                          style={{ backgroundColor: optPreview.optionColor }}
                        >
                          {iconNode || <Compass size={14} />}
                        </span>
                        <div className="min-w-0">
                          <span className="text-xs sm:text-sm font-black text-slate-900 block truncate">
                            Si seleccionas: <span className="text-orange-700">{optPreview.optionLabel}</span>
                          </span>
                          <span className="text-[10px] text-slate-400 font-semibold block">
                            {optPreview.matchingCount} {optPreview.matchingCount === 1 ? 'protocolo disponible' : 'protocolos compatibles'}
                          </span>
                        </div>
                      </div>
                      {onSelectNextOption && analysis.nextOptions && (
                        <button
                          onClick={() => onSelectNextOption(analysis.nextOptions!.level, optPreview.optionId)}
                          className="px-3 py-1.5 rounded-xl bg-orange-50 hover:bg-orange-600 text-orange-700 hover:text-white text-[11px] font-black transition-all flex items-center gap-1.5 flex-shrink-0 shadow-2xs hover:shadow-sm"
                          title={`Seleccionar ${optPreview.optionLabel}`}
                        >
                          <span>Elegir</span>
                          <ArrowRight size={13} />
                        </button>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                        Acciones que te recomendará el protocolo:
                      </p>
                      {optPreview.recommendedActions.map((action, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium leading-relaxed bg-slate-50/60 p-2.5 rounded-xl border border-slate-100">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                          <span className="flex-1">{action}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {!analysis.isComplete && analysis.actions && analysis.actions.length > 0 && (
            <div>
              <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-600 mb-2.5">
                Acciones operativas preliminares del nivel actual:
              </h4>
              <div className="space-y-2">
                {analysis.actions.map((action, i) => (
                  <div 
                    key={i} 
                    className="p-3 rounded-2xl bg-orange-50/40 border border-orange-100/80 flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-xl flex items-center justify-center flex-shrink-0 text-[11px] font-black bg-orange-600 text-white shadow-xs mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-xs sm:text-[13px] font-semibold text-slate-700 leading-relaxed pt-0.5">
                      {action}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {analysis.isComplete && (
            <div className="space-y-3">
              {analysis.actions.map((action, i) => (
                <div 
                  key={i} 
                  className="p-3.5 rounded-2xl bg-orange-50/40 border border-orange-100/80 hover:border-orange-200 transition-all flex items-start gap-3.5 group"
                >
                  <span className="w-6 h-6 rounded-xl flex items-center justify-center flex-shrink-0 text-[11px] font-black bg-orange-600 text-white shadow-sm shadow-orange-200 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-xs sm:text-[13px] font-semibold text-slate-700 leading-relaxed pt-0.5">
                    {action}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* BLOQUE 2: Consejos de Prevención */}
        <section>
          <h3 className="text-xs font-black text-slate-800 uppercase tracking-wider flex items-center gap-2 mb-4">
            <ShieldCheck className="text-blue-600" size={18} />
            <span>Consejos de Prevención</span>
          </h3>
          <div className="grid grid-cols-1 gap-2.5">
            {analysis.preventiveMeasures.map((measure, i) => (
              <div 
                key={i} 
                className="bg-slate-50/70 p-3.5 rounded-2xl text-xs sm:text-[12px] font-semibold text-slate-600 border border-slate-100 flex items-start gap-3 hover:border-blue-200 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0 mt-1.5" />
                <span className="leading-relaxed">{measure}</span>
              </div>
            ))}
          </div>
        </section>

        {/* BLOQUE 3: Medidas de Seguridad a Tomar en Cuenta */}
        <section className="bg-red-50/70 p-5 rounded-[2rem] border border-red-100">
          <div className="flex items-center gap-2.5 mb-3 text-red-900">
            <AlertTriangle className="text-red-600 flex-shrink-0" size={19} />
            <h3 className="text-xs font-black uppercase tracking-wider">
              Medidas de Seguridad Críticas en Pantalla
            </h3>
          </div>
          <div className="space-y-2">
            {analysis.safetyWarnings.map((warning, i) => (
              <div key={i} className="text-xs sm:text-[12px] text-red-800 font-bold leading-relaxed flex items-start gap-2">
                <span className="text-red-500 font-black">•</span>
                <span>{warning}</span>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* PIE DE TARJETA */}
      <div className="bg-slate-50 px-7 py-3.5 border-t border-slate-100 text-[10px] text-slate-400 font-bold flex items-center justify-between">
        <span>Manual Biovesp v2.13 • Matriz de 388 combinaciones</span>
        <span className="text-orange-600 font-black flex items-center gap-1">
          <Database size={11} /> {analysis.matchingCount} {analysis.matchingCount === 1 ? 'Protocolo' : 'Rutas'}
        </span>
      </div>
    </div>
  );
};

export default ProtocolDisplay;
