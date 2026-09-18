import React, { useState, useEffect, useMemo, useRef } from 'react';
import * as XLSX from 'xlsx';
import DecisionWheel from './components/DecisionWheel';
import ProtocolDisplay from './components/ProtocolDisplay';
import { AdminLoginModal } from './components/AdminLoginModal';
import { AdminManagementPanel } from './components/AdminManagementPanel';
import { DecisionPath, RecommendationMatrix, ManagementProtocol } from './types';
import { STATIC_PROTOCOLS } from './protocolData';
import { analyzeSelection } from './protocolAnalyzer';
import { 
  Bug, RefreshCcw, Database, FileSpreadsheet,
  ChevronRight, AlertCircle, CheckCircle2,
  X, HelpCircle, Loader2, User, Lock, LogOut, ShieldCheck
} from 'lucide-react';
import { 
  OPTION_LABELS, getAllVolvellePaths
} from './constants';

interface ToastState {
  type: 'success' | 'info' | 'error';
  title: string;
  message: string;
}

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<'user' | 'admin'>('user');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    return typeof window !== 'undefined' && sessionStorage.getItem('volvelle_admin_session') === 'true';
  });
  const [showLoginModal, setShowLoginModal] = useState(false);

  const [path, setPath] = useState<DecisionPath>({
    level1: null, level2: null, level3: null, level4: null, 
    level5: null, level6: null, level7: null, level8: null, 
    level9: null, level10: null
  });
  const [matrix, setMatrix] = useState<RecommendationMatrix>(STATIC_PROTOCOLS);
  const [isExporting, setIsExporting] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);
  const [showResetModal, setShowResetModal] = useState(false);
  
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const showToast = (type: 'success' | 'info' | 'error', title: string, message: string) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToast({ type, title, message });
    toastTimeoutRef.current = setTimeout(() => {
      setToast(null);
    }, 5000);
  };

  // Cargar personalizaciones guardadas previamente por el usuario
  useEffect(() => {
    const savedMatrix = localStorage.getItem('vespa_matrix_master');
    if (savedMatrix) {
      try {
        const parsed = JSON.parse(savedMatrix);
        delete parsed['vespa_velutina||espacio_urbano||urb_f_m||urb_met_cont||cont_arpas'];
        delete parsed['vespa_velutina||espacio_urbano||urb_m_s||urb_met_cont||cont_arpas'];
        delete parsed['vespa_velutina||espacio_urbano||urb_s_n||urb_met_cont||cont_arpas'];
        delete parsed['vespa_velutina||espacio_urbano||urb_d_e||urb_met_cont||cont_arpas'];
        setMatrix(prev => ({ ...prev, ...parsed }));
      } catch (e) {
        console.error("Error cargando base de datos guardada", e);
      }
    }
  }, []);

  // Guardar personalizaciones cuando difieren de STATIC_PROTOCOLS
  useEffect(() => {
    const customOnly: RecommendationMatrix = {};
    Object.keys(matrix).forEach(key => {
      const current = matrix[key];
      const original = STATIC_PROTOCOLS[key];
      if (!original || JSON.stringify(current) !== JSON.stringify(original)) {
        customOnly[key] = current;
      }
    });
    localStorage.setItem('vespa_matrix_master', JSON.stringify(customOnly));
  }, [matrix]);

  const getPathHash = (p: DecisionPath) => {
    return Object.values(p).filter(v => v).join('||');
  };

  // Consulta instantánea contra la matriz adjunta (388 protocolos)
  const analysis = useMemo(() => {
    return analyzeSelection(path, matrix);
  }, [path, matrix]);

  const handleSelect = (level: number, id: string) => {
    setPath(prev => {
      const newPath = { ...prev };
      const keys: (keyof DecisionPath)[] = ['level1', 'level2', 'level3', 'level4', 'level5', 'level6', 'level7', 'level8', 'level9', 'level10'];
      const idx = level - 1;
      newPath[keys[idx]] = id;
      for (let i = idx + 1; i < keys.length; i++) newPath[keys[i]] = null;
      return newPath;
    });
  };

  const handleStepClick = (level: number, id: string) => {
    setPath(prev => {
      const newPath = { ...prev };
      const keys: (keyof DecisionPath)[] = ['level1', 'level2', 'level3', 'level4', 'level5', 'level6', 'level7', 'level8', 'level9', 'level10'];
      const idx = level - 1;
      newPath[keys[idx]] = id;
      for (let i = idx + 1; i < keys.length; i++) newPath[keys[i]] = null;
      return newPath;
    });
  };

  const handleResetSelection = () => {
    setPath({
      level1: null, level2: null, level3: null, level4: null, 
      level5: null, level6: null, level7: null, level8: null, 
      level9: null, level10: null
    });
  };

  // Exportar matriz completa (388 combinaciones) con todas las columnas estructuradas
  const exportExcel = () => {
    setIsExporting(true);
    try {
      const allPaths = getAllVolvellePaths();
      const rows = allPaths.map(p => {
        const hash = getPathHash(p);
        const prot = matrix[hash] || STATIC_PROTOCOLS[hash] || {
          title: 'Protocolo en desarrollo',
          summary: 'Medidas no especificadas',
          actions: ['Seguir recomendaciones generales del Manual Biovesp'],
          preventiveMeasures: ['Inspección periódica del entorno'],
          safetyWarnings: ['Usar equipo de protección adecuado si hay proximidad de nidos'],
          isLocal: false
        };

        return {
          'ID_RUTA': hash,
          'ESPECIE': p.level1 ? (OPTION_LABELS[p.level1] || p.level1) : '',
          'ENTORNO': p.level2 ? (OPTION_LABELS[p.level2] || p.level2) : '',
          'TEMPORALIDAD_GESTION': p.level3 ? (OPTION_LABELS[p.level3] || p.level3) : '',
          'SANIDAD_ACTIVIDAD': p.level4 ? (OPTION_LABELS[p.level4] || p.level4) : '',
          'MIELADA_DETALLE': p.level5 ? (OPTION_LABELS[p.level5] || p.level5) : '',
          'VITALIDAD_CRIA': p.level6 ? (OPTION_LABELS[p.level6] || p.level6) : '',
          'ACCION_APIARIO': p.level7 ? (OPTION_LABELS[p.level7] || p.level7) : '',
          'METODO_O_TIPO_NIDO': p.level8 ? (OPTION_LABELS[p.level8] || p.level8) : '',
          'ACCION_FINAL': p.level9 ? (OPTION_LABELS[p.level9] || p.level9) : '',
          'TITULO': prot.title,
          'RESUMEN': prot.summary,
          'ACCIONES': prot.actions.join(' | '),
          'PREVENCION': prot.preventiveMeasures.join(' | '),
          'SEGURIDAD': prot.safetyWarnings.join(' | '),
          'ESTADO': prot.isLocal ? 'Validado Biovesp v2.13' : 'Generado por IA'
        };
      });

      const ws = XLSX.utils.json_to_sheet(rows);
      ws['!cols'] = [
        { wch: 45 }, // ID_RUTA
        { wch: 18 }, // ESPECIE
        { wch: 20 }, // ENTORNO
        { wch: 22 }, // TEMPORALIDAD
        { wch: 20 }, // SANIDAD
        { wch: 18 }, // MIELADA
        { wch: 18 }, // VITALIDAD
        { wch: 24 }, // ACCION_APIARIO
        { wch: 24 }, // METODO_NIDO
        { wch: 16 }, // ACCION_FINAL
        { wch: 50 }, // TITULO
        { wch: 70 }, // RESUMEN
        { wch: 80 }, // ACCIONES
        { wch: 60 }, // PREVENCION
        { wch: 50 }, // SEGURIDAD
        { wch: 24 }, // ESTADO
      ];

      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Base_Total_388_Combinaciones");
      XLSX.writeFile(wb, `Matriz_Volvelle_Vespa_Velutina_388_Combinaciones.xlsx`);
      showToast('success', 'Excel generado', `Se han exportado ${rows.length} protocolos en formato hoja de cálculo (.xlsx).`);
    } catch (e) {
      console.error(e);
      showToast('error', 'Error de exportación', 'No se pudo generar el archivo Excel.');
    } finally {
      setIsExporting(false);
    }
  };

  // Importar Excel revisado por el usuario
  const importExcel = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const wb = XLSX.read(evt.target?.result, { type: 'binary' });
        const firstSheetName = wb.SheetNames[0];
        const data = XLSX.utils.sheet_to_json(wb.Sheets[firstSheetName]) as any[];
        
        let count = 0;
        const newMatrix: RecommendationMatrix = {};

        data.forEach(row => {
          const routeId = row['ID_RUTA'] || row['RUTA_ID'] || row['id_ruta'] || row['ruta_id'];
          if (routeId && typeof routeId === 'string') {
            const rawActions = row['ACCIONES'] || row['Acciones'] || row['acciones'] || '';
            const rawPrev = row['PREVENCION'] || row['Prevencion'] || row['Prevención'] || row['prevencion'] || '';
            const rawWarn = row['SEGURIDAD'] || row['Seguridad'] || row['seguridad'] || '';

            const splitField = (val: string) => {
              if (!val) return [];
              if (val.includes(' | ')) return val.split(' | ').map(s => s.trim()).filter(Boolean);
              if (val.includes('\n')) return val.split('\n').map(s => s.trim()).filter(Boolean);
              return [val.trim()];
            };

            newMatrix[routeId.trim()] = {
              title: row['TITULO'] || row['Titulo'] || row['Título'] || 'Protocolo Técnico',
              summary: row['RESUMEN'] || row['Resumen'] || '',
              actions: splitField(String(rawActions)),
              preventiveMeasures: splitField(String(rawPrev)),
              safetyWarnings: splitField(String(rawWarn)),
              isLocal: true
            };
            count++;
          }
        });

        if (count > 0) {
          setMatrix(prev => ({ ...prev, ...newMatrix }));
          showToast('success', 'Base de datos actualizada', `Se han importado ${count} protocolos revisados correctamente.`);
        } else {
          showToast('error', 'Archivo no reconocido', 'No se encontraron filas con la columna ID_RUTA o RUTA_ID.');
        }
      } catch (err) {
        console.error(err);
        showToast('error', 'Error al leer archivo', 'Comprueba que sea un archivo de Excel (.xlsx o .xls) válido.');
      }
      if (fileInputRef.current) fileInputRef.current.value = '';
    };
    reader.readAsBinaryString(file);
  };

  const resetDatabase = () => {
    setMatrix(STATIC_PROTOCOLS);
    localStorage.removeItem('vespa_matrix_master');
    setShowResetModal(false);
    showToast('info', 'Base restablecida', 'Se han restaurado los 388 protocolos oficiales del Manual Biovesp v2.13.');
  };

  const handleSwitchToUserMode = () => {
    setViewMode('user');
  };

  const handleSwitchToAdminMode = () => {
    if (isAdminAuthenticated) {
      setViewMode('admin');
    } else {
      setShowLoginModal(true);
    }
  };

  const handleLoginSuccess = () => {
    setIsAdminAuthenticated(true);
    setViewMode('admin');
    sessionStorage.setItem('volvelle_admin_session', 'true');
    setShowLoginModal(false);
    showToast('success', 'Sesión de Administrador Iniciada', 'Bienvenido Xavier Munill. Acceso completo para editar y cargar la matriz base.');
  };

  const handleLogoutAdmin = () => {
    setIsAdminAuthenticated(false);
    setViewMode('user');
    sessionStorage.removeItem('volvelle_admin_session');
    showToast('info', 'Sesión Cerrada', 'Has vuelto al modo Usuario estándar.');
  };

  const handleUpdateProtocol = (hash: string, updated: ManagementProtocol) => {
    setMatrix(prev => ({
      ...prev,
      [hash]: { ...updated, isLocal: true }
    }));
    showToast('success', 'Protocolo Actualizado', 'Los cambios se han guardado correctamente en la matriz.');
  };

  const handleLoadPathIntoWheel = (selectedPath: DecisionPath) => {
    setPath(selectedPath);
    const el = document.getElementById('volvelle-container');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    showToast('info', 'Ruta Sincronizada', 'La rueda Volvelle se ha posicionado en esta combinación.');
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20 selection:bg-orange-100">
      {/* Modal de Login de Administrador */}
      <AdminLoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Notificación Toast In-App */}
      {toast && (
        <div className="fixed top-24 right-6 z-[120] max-w-md w-full animate-in fade-in slide-in-from-top-4 duration-300">
          <div className={`rounded-2xl p-4 shadow-xl border flex items-start gap-3 backdrop-blur-md ${
            toast.type === 'success' ? 'bg-emerald-950/90 text-emerald-100 border-emerald-700/50' :
            toast.type === 'error' ? 'bg-rose-950/90 text-rose-100 border-rose-700/50' :
            'bg-slate-900/90 text-slate-100 border-slate-700/50'
          }`}>
            <div className="flex-shrink-0 mt-0.5">
              {toast.type === 'success' && <CheckCircle2 className="text-emerald-400" size={18} />}
              {toast.type === 'error' && <AlertCircle className="text-rose-400" size={18} />}
              {toast.type === 'info' && <HelpCircle className="text-blue-400" size={18} />}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">{toast.title}</h4>
              <p className="text-xs mt-1 text-slate-200 leading-relaxed font-medium">{toast.message}</p>
            </div>
            <button 
              onClick={() => setToast(null)}
              className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Modal de confirmación para restablecer */}
      {showResetModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[130] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-slate-100 space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
              <RefreshCcw size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">¿Restablecer base de datos?</h3>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                Esta acción restaurará la base completa a los 388 protocolos originales del Manual Biovesp v2.13 y descartará cualquier cambio o archivo importado manualmente.
              </p>
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setShowResetModal(false)}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={resetDatabase}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-red-600 hover:bg-red-700 text-white shadow-md shadow-red-200 transition-all"
              >
                Sí, restablecer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cabecera Principal con Pestañas de Modo Usuario / Administrador */}
      <header className="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <a 
              href="https://www.biovesp.es" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-shrink-0 group transition-transform hover:scale-105"
              title="Visitar web oficial Biovesp.es"
            >
              <img 
                src="/logo_biovesp.png" 
                alt="Logo G.O. Biovesp" 
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-2xl shadow-md border border-red-200/80 bg-white p-0.5"
                referrerPolicy="no-referrer" 
              />
            </a>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-base sm:text-xl font-black text-slate-800 tracking-tight leading-none">
                  Gestión integrada de Vespa velutina
                </h1>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300/60">
                  Biovesp v2.13
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-400 font-bold flex items-center gap-1 mt-0.5">
                Biovesp.es • Rueda Volvelle • <Database size={11} className="text-orange-500" /> {Object.keys(matrix).length} Protocolos
              </p>
            </div>
          </div>
          
          {/* Selector de Nivel de Visualización: Usuario / Administrador */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200">
              <button
                onClick={handleSwitchToUserMode}
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                  viewMode === 'user'
                    ? 'bg-orange-600 text-white shadow-sm shadow-orange-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
                title="Modo de consulta general: Volvelle y protocolos"
              >
                <User size={14} />
                <span>Usuario</span>
              </button>

              <button
                onClick={handleSwitchToAdminMode}
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                  viewMode === 'admin'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
                title={isAdminAuthenticated ? 'Panel de edición y carga de matriz' : 'Acceso restringido para edición de matriz'}
              >
                {isAdminAuthenticated ? (
                  <ShieldCheck size={14} className="text-emerald-400" />
                ) : (
                  <Lock size={13} className="text-slate-400" />
                )}
                <span>Administrador</span>
                {isAdminAuthenticated && (
                  <span className="w-2 h-2 rounded-full bg-emerald-400 ml-0.5" />
                )}
              </button>
            </div>

            {isAdminAuthenticated && viewMode === 'admin' && (
              <button
                onClick={handleLogoutAdmin}
                className="p-2 sm:px-3 sm:py-2 rounded-xl border border-slate-200 text-slate-500 hover:text-rose-600 hover:bg-rose-50 text-xs font-bold flex items-center gap-1.5 transition-all"
                title="Cerrar sesión de administrador"
              >
                <LogOut size={14} />
                <span className="hidden sm:inline">Cerrar sesión</span>
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* En Modo Administrador: Panel Completo de Edición y Carga de Matriz */}
        {viewMode === 'admin' && (
          <AdminManagementPanel
            matrix={matrix}
            onUpdateProtocol={handleUpdateProtocol}
            onRequestReset={() => setShowResetModal(true)}
            onExportExcel={exportExcel}
            onImportExcel={importExcel}
            isExporting={isExporting}
            fileInputRef={fileInputRef}
            onLoadPathIntoWheel={handleLoadPathIntoWheel}
          />
        )}

        {/* Sección Principal de Consulta: Rueda Volvelle y Panel de Protocolo */}
        <div id="volvelle-container" className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white rounded-[3rem] p-6 sm:p-8 shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden relative">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">Volvelle de Decisión</h2>
                  <p className="text-xs sm:text-sm text-slate-400 font-medium">Interactúa con los anillos concéntricos para filtrar protocolos</p>
                </div>
                <button 
                  onClick={() => setPath({level1:null,level2:null,level3:null,level4:null,level5:null,level6:null,level7:null,level8:null,level9:null,level10:null})} 
                  className="p-3 bg-slate-50 hover:bg-orange-50 text-slate-400 hover:text-orange-600 rounded-2xl transition-all"
                  title="Limpiar selección"
                >
                  <RefreshCcw size={20} />
                </button>
              </div>

              <DecisionWheel path={path} onSelect={handleSelect} />
              
              <div className="mt-8 sm:mt-10 flex flex-wrap gap-2 justify-center items-center bg-slate-50/50 p-4 sm:p-6 rounded-[2rem] border border-dashed border-slate-200">
                {['level1', 'level2', 'level3', 'level4', 'level5', 'level6', 'level7', 'level8', 'level9'].map((lvl, i) => {
                  const val = path[lvl as keyof DecisionPath];
                  if (!val) return null;
                  return (
                    <React.Fragment key={lvl}>
                      <button
                        onClick={() => handleStepClick(i + 1, val)}
                        className="px-3.5 py-2 bg-white hover:bg-orange-50 text-slate-700 hover:text-orange-700 border border-slate-200 hover:border-orange-300 rounded-xl text-[10px] font-black uppercase flex items-center gap-2 shadow-sm transition-all animate-in zoom-in-50 duration-300 group"
                        title="Clic para volver a este paso"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                        <span>{OPTION_LABELS[val] || val.replace(/_/g, ' ')}</span>
                      </button>
                      {i < 8 && path[`level${i+2}` as keyof DecisionPath] && <ChevronRight size={14} className="text-slate-300" />}
                    </React.Fragment>
                  );
                })}
                {!path.level1 && <span className="text-xs font-bold text-slate-400 uppercase tracking-widest italic">Inicia una selección en el centro del disco</span>}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <ProtocolDisplay 
              analysis={analysis} 
              loading={false}
              onSelectNextOption={handleSelect}
              onStepClick={handleStepClick}
              onResetSelection={handleResetSelection}
            />
          </div>
        </div>
      </main>

      {/* Pie de página con imagen de colaboradores enlazada a www.biovesp.es */}
      <footer id="app-footer" className="mt-16 border-t border-slate-200/80 bg-white py-8 px-4 sm:px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-3">
          <a
            id="footer-biovesp-link"
            href="https://www.biovesp.es"
            target="_blank"
            rel="noopener noreferrer"
            className="group block transition-opacity hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-orange-500/40 rounded-xl p-1.5"
            title="Ir al sitio oficial de Biovesp (www.biovesp.es)"
          >
            <img
              id="footer-logos-img"
              src="/logos_pie_de_pagina.png"
              alt="Grupo Operativo Biovesp - Colaboradores y Entidades Financiadoras"
              className="max-h-16 sm:max-h-20 w-auto object-contain mx-auto transition-transform duration-200 group-hover:scale-[1.01]"
              referrerPolicy="no-referrer"
            />
          </a>
          <div className="text-center text-xs text-slate-400 font-medium">
            <a
              href="https://www.biovesp.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-orange-600 transition-colors underline underline-offset-2 font-semibold"
            >
              www.biovesp.es
            </a>
            {' '}• Grupo Operativo Biovesp • Control biológico integrado de <em>Vespa velutina</em>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
