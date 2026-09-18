import React, { useState, useMemo } from 'react';
import { 
  FileSpreadsheet, Upload, Download, RefreshCcw, Search, 
  Edit3, Save, Check, X, ShieldAlert, Sparkles, Filter, 
  ExternalLink, Layers, ArrowUpDown, ChevronDown, ChevronUp
} from 'lucide-react';
import { ManagementProtocol, RecommendationMatrix, DecisionPath } from '../types';
import { getAllVolvellePaths, OPTION_LABELS } from '../constants';

interface AdminManagementPanelProps {
  matrix: RecommendationMatrix;
  onUpdateProtocol: (hash: string, updated: ManagementProtocol) => void;
  onRequestReset: () => void;
  onExportExcel: () => void;
  onImportExcel: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isExporting: boolean;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  onLoadPathIntoWheel?: (path: DecisionPath) => void;
}

export const AdminManagementPanel: React.FC<AdminManagementPanelProps> = ({
  matrix,
  onUpdateProtocol,
  onRequestReset,
  onExportExcel,
  onImportExcel,
  isExporting,
  fileInputRef,
  onLoadPathIntoWheel
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState<'all' | 'vespa_velutina' | 'otras_avispas'>('all');
  const [editingHash, setEditingHash] = useState<string | null>(null);
  const [editFormData, setEditFormData] = useState<ManagementProtocol | null>(null);
  const [saveSuccessHash, setSaveSuccessHash] = useState<string | null>(null);

  // Lista de todas las rutas de la matriz
  const allPaths = useMemo(() => getAllVolvellePaths(), []);

  // Filtrado de protocolos
  const filteredPaths = useMemo(() => {
    return allPaths.filter(p => {
      const hash = Object.values(p).filter(Boolean).join('||');
      const protocol = matrix[hash];
      if (!protocol) return false;

      // Filtro de especie
      if (speciesFilter !== 'all') {
        if (p.level1 !== speciesFilter) return false;
      }

      // Filtro de búsqueda por texto
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchesHash = hash.toLowerCase().includes(query);
        const matchesTitle = protocol.title.toLowerCase().includes(query);
        const matchesSummary = protocol.summary.toLowerCase().includes(query);
        const matchesAction = protocol.actions.some(a => a.toLowerCase().includes(query));
        return matchesHash || matchesTitle || matchesSummary || matchesAction;
      }

      return true;
    });
  }, [allPaths, matrix, speciesFilter, searchTerm]);

  const startEditing = (hash: string, protocol: ManagementProtocol) => {
    setEditingHash(hash);
    setEditFormData({
      title: protocol.title,
      summary: protocol.summary,
      actions: [...protocol.actions],
      preventiveMeasures: [...protocol.preventiveMeasures],
      safetyWarnings: [...protocol.safetyWarnings]
    });
  };

  const cancelEditing = () => {
    setEditingHash(null);
    setEditFormData(null);
  };

  const handleSaveProtocol = (hash: string) => {
    if (!editFormData) return;
    onUpdateProtocol(hash, editFormData);
    setEditingHash(null);
    setEditFormData(null);
    setSaveSuccessHash(hash);
    setTimeout(() => setSaveSuccessHash(null), 3000);
  };

  const handleActionChange = (index: number, value: string) => {
    if (!editFormData) return;
    const newActions = [...editFormData.actions];
    newActions[index] = value;
    setEditFormData({ ...editFormData, actions: newActions });
  };

  const handleAddAction = () => {
    if (!editFormData) return;
    setEditFormData({
      ...editFormData,
      actions: [...editFormData.actions, 'Nueva acción operativa']
    });
  };

  const handleRemoveAction = (index: number) => {
    if (!editFormData) return;
    setEditFormData({
      ...editFormData,
      actions: editFormData.actions.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="space-y-6 mb-10 animate-in fade-in duration-300">
      {/* Banner de Herramientas de Administrador */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-700/60">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2.5">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-orange-500 text-white shadow-xs">
                Panel Técnico de Control
              </span>
              <span className="text-xs text-slate-300 font-semibold">
                Gestión Integral de Matriz Base
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              Herramientas de Administrador • 388 Protocolos
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              Como administrador puedes descargar la matriz completa en Excel, importar hojas con correcciones técnicas, restablecer la base oficial o editar directamente cualquier protocolo en la base de datos local.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 flex-shrink-0">
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept=".xlsx,.xls" 
              onChange={onImportExcel} 
            />

            <button 
              onClick={() => fileInputRef.current?.click()} 
              className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-sm backdrop-blur-sm"
              title="Cargar archivo Excel para actualizar protocolos"
            >
              <Upload size={15} className="text-amber-300" />
              <span>Importar Excel</span>
            </button>

            <button 
              onClick={onExportExcel} 
              disabled={isExporting}
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-lg shadow-emerald-950/40 disabled:opacity-50"
              title="Descargar las 388 combinaciones completas en formato Excel"
            >
              <FileSpreadsheet size={15} />
              <span>{isExporting ? 'Generando...' : 'Descargar Excel (388)'}</span>
            </button>

            <a 
              href="/Matriz_Completa_Volvelle_Vespa_Velutina.xlsx" 
              download="Matriz_Completa_Volvelle_Vespa_Velutina.xlsx"
              className="px-3.5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all"
              title="Descarga directa de la plantilla oficial"
            >
              <Download size={14} />
              <span className="hidden sm:inline">Plantilla Base</span>
            </a>

            <button 
              onClick={onRequestReset}
              className="p-2.5 text-rose-300 hover:text-white hover:bg-rose-600/30 border border-rose-500/30 rounded-xl transition-colors"
              title="Restablecer base oficial del Manual Biovesp"
            >
              <RefreshCcw size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Explorador y Editor de la Matriz Base */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
          <div>
            <h3 className="text-base font-black text-slate-900 tracking-tight flex items-center gap-2">
              <Layers size={18} className="text-orange-600" />
              <span>Explorador y Editor de Protocolos de la Matriz</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1 font-medium">
              Mostrando <strong>{filteredPaths.length}</strong> de <strong>{allPaths.length}</strong> combinaciones catalogadas.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Filtro por especie */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
              <button
                onClick={() => setSpeciesFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  speciesFilter === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Todas ({allPaths.length})
              </button>
              <button
                onClick={() => setSpeciesFilter('vespa_velutina')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  speciesFilter === 'vespa_velutina' ? 'bg-orange-600 text-white shadow-xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                V. velutina (385)
              </button>
              <button
                onClick={() => setSpeciesFilter('otras_avispas')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  speciesFilter === 'otras_avispas' ? 'bg-amber-600 text-white shadow-xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Otras avispas (3)
              </button>
            </div>

            {/* Buscador */}
            <div className="relative min-w-[240px]">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por ID, título o acción..."
                className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-slate-900 font-medium"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Lista interactiva con capacidad de edición */}
        <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
          {filteredPaths.slice(0, 50).map((pathObj) => {
            const hash = Object.values(pathObj).filter(Boolean).join('||');
            const protocol = matrix[hash];
            if (!protocol) return null;

            const isCurrentlyEditing = editingHash === hash;
            const isJustSaved = saveSuccessHash === hash;

            return (
              <div 
                key={hash}
                className={`p-4 rounded-2xl border transition-all ${
                  isCurrentlyEditing 
                    ? 'border-orange-500 bg-orange-50/20 shadow-md' 
                    : isJustSaved
                    ? 'border-emerald-500 bg-emerald-50/30'
                    : 'border-slate-200/80 bg-white hover:border-slate-300'
                }`}
              >
                {!isCurrentlyEditing ? (
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="space-y-1 min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                          {hash}
                        </span>
                        {isJustSaved && (
                          <span className="text-[10px] font-black uppercase text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <Check size={12} /> Guardado
                          </span>
                        )}
                      </div>
                      <h4 className="text-xs font-black text-slate-900 leading-snug">
                        {protocol.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 line-clamp-1">
                        {protocol.summary}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      {onLoadPathIntoWheel && (
                        <button
                          onClick={() => onLoadPathIntoWheel(pathObj)}
                          className="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-orange-100 text-slate-600 hover:text-orange-700 text-[10px] font-black uppercase transition-colors flex items-center gap-1"
                          title="Cargar esta combinación en la Rueda Volvelle"
                        >
                          <ExternalLink size={12} />
                          <span>Ver en Rueda</span>
                        </button>
                      )}

                      <button
                        onClick={() => startEditing(hash, protocol)}
                        className="px-3 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-[11px] font-bold transition-all shadow-2xs flex items-center gap-1.5"
                      >
                        <Edit3 size={13} />
                        <span>Editar</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Formulario de edición en línea */
                  <div className="space-y-4 pt-1">
                    <div className="flex items-center justify-between pb-2 border-b border-orange-200">
                      <span className="text-xs font-black text-orange-950 uppercase tracking-wide flex items-center gap-1.5">
                        <Edit3 size={14} className="text-orange-600" />
                        <span>Editando Protocolo: {hash}</span>
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={cancelEditing}
                          className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-500 hover:bg-slate-200/60 transition-colors"
                        >
                          Cancelar
                        </button>
                        <button
                          onClick={() => handleSaveProtocol(hash)}
                          className="px-4 py-1.5 rounded-lg text-xs font-black bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all flex items-center gap-1.5"
                        >
                          <Save size={14} />
                          <span>Guardar Cambios</span>
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                        Título Oficial del Protocolo
                      </label>
                      <input 
                        type="text" 
                        value={editFormData?.title || ''}
                        onChange={(e) => setEditFormData(prev => prev ? { ...prev, title: e.target.value } : null)}
                        className="w-full px-3 py-2 text-xs font-bold text-slate-900 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                        Resumen de Criterio
                      </label>
                      <textarea 
                        rows={2}
                        value={editFormData?.summary || ''}
                        onChange={(e) => setEditFormData(prev => prev ? { ...prev, summary: e.target.value } : null)}
                        className="w-full px-3 py-2 text-xs text-slate-800 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                          Acciones a Tomar para el Control ({editFormData?.actions.length || 0})
                        </label>
                        <button
                          type="button"
                          onClick={handleAddAction}
                          className="text-[10px] font-bold text-orange-600 hover:text-orange-800"
                        >
                          + Añadir Acción
                        </button>
                      </div>
                      <div className="space-y-2">
                        {editFormData?.actions.map((act, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="w-5 h-5 rounded-md bg-orange-600 text-white text-[10px] font-black flex items-center justify-center flex-shrink-0 mt-1">
                              {i + 1}
                            </span>
                            <input 
                              type="text"
                              value={act}
                              onChange={(e) => handleActionChange(i, e.target.value)}
                              className="flex-1 px-3 py-1.5 text-xs text-slate-800 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                            />
                            {editFormData.actions.length > 1 && (
                              <button
                                type="button"
                                onClick={() => handleRemoveAction(i)}
                                className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg transition-colors mt-0.5"
                                title="Eliminar acción"
                              >
                                <X size={14} />
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filteredPaths.length > 50 && (
            <p className="text-center text-xs text-slate-400 font-semibold py-2">
              Mostrando los primeros 50 protocolos coincidentes. Usa el buscador superior para acotar a cualquier ruta específica.
            </p>
          )}

          {filteredPaths.length === 0 && (
            <div className="text-center py-10 text-slate-400">
              <Search size={32} className="mx-auto mb-2 opacity-30" />
              <p className="text-xs font-semibold">No se han encontrado protocolos coincidentes con tu búsqueda.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
