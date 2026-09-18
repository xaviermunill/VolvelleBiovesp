
import React from 'react';
import { Bug } from 'lucide-react';
import { DecisionPath, DecisionOption } from '../types';
import { 
  LEVEL_1_OPTIONS, LEVEL_2_OPTIONS, LEVEL_3_MAPPING, 
  LEVEL_4_MAPPING, LEVEL_5_MAPPING, LEVEL_6_MAPPING, 
  LEVEL_7_MAPPING, LEVEL_8_MAPPING, LEVEL_9_MAPPING,
  getIconForId 
} from '../constants';

interface DecisionWheelProps {
  path: DecisionPath;
  onSelect: (level: number, id: string) => void;
}

const DecisionWheel: React.FC<DecisionWheelProps> = ({ path, onSelect }) => {
  const renderCircle = (options: DecisionOption[], radius: number, level: number, isActive: boolean) => {
    if (options.length === 0) return null;

    const totalOptions = options.length;
    const angleStep = 360 / totalOptions;
    const currentSelection = (path as any)[`level${level}`];
    const ringThickness = 24; // Reducido para que quepan 10 niveles
    const textRadius = radius - (ringThickness / 2);

    return (
      <g className={`transition-all duration-700 ${isActive ? 'opacity-100' : 'opacity-[0.03] pointer-events-none'}`}>
        {options.map((opt, i) => {
          const startAngle = i * angleStep;
          const endAngle = (i + 1) * angleStep;
          const isSelected = currentSelection === opt.id;
          
          const x1 = radius * Math.cos((startAngle - 90) * Math.PI / 180);
          const y1 = radius * Math.sin((startAngle - 90) * Math.PI / 180);
          const x2 = radius * Math.cos((endAngle - 90) * Math.PI / 180);
          const y2 = radius * Math.sin((endAngle - 90) * Math.PI / 180);
          
          const innerRadius = radius - ringThickness;
          const ix1 = innerRadius * Math.cos((startAngle - 90) * Math.PI / 180);
          const iy1 = innerRadius * Math.sin((startAngle - 90) * Math.PI / 180);
          const ix2 = innerRadius * Math.cos((endAngle - 90) * Math.PI / 180);
          const iy2 = innerRadius * Math.sin((endAngle - 90) * Math.PI / 180);

          const segmentPath = `
            M ${x1} ${y1}
            A ${radius} ${radius} 0 ${angleStep > 180 ? 1 : 0} 1 ${x2} ${y2}
            L ${ix2} ${iy2}
            A ${innerRadius} ${innerRadius} 0 ${angleStep > 180 ? 1 : 0} 0 ${ix1} ${iy1}
            Z
          `;

          const textPathId = `path-${level}-${opt.id}-${i}`;
          const isBottom = (startAngle + angleStep / 2) > 90 && (startAngle + angleStep / 2) < 270;
          
          let textPathData;
          if (!isBottom) {
            const tx1 = textRadius * Math.cos((startAngle - 90) * Math.PI / 180);
            const ty1 = textRadius * Math.sin((startAngle - 90) * Math.PI / 180);
            const tx2 = textRadius * Math.cos((endAngle - 90) * Math.PI / 180);
            const ty2 = textRadius * Math.sin((endAngle - 90) * Math.PI / 180);
            textPathData = `M ${tx1} ${ty1} A ${textRadius} ${textRadius} 0 0 1 ${tx2} ${ty2}`;
          } else {
            const tx1 = textRadius * Math.cos((endAngle - 90) * Math.PI / 180);
            const ty1 = textRadius * Math.sin((endAngle - 90) * Math.PI / 180);
            const tx2 = textRadius * Math.cos((startAngle - 90) * Math.PI / 180);
            const ty2 = textRadius * Math.sin((startAngle - 90) * Math.PI / 180);
            textPathData = `M ${tx1} ${ty1} A ${textRadius} ${textRadius} 0 0 0 ${tx2} ${ty2}`;
          }

          return (
            <g key={opt.id} className="cursor-pointer group" onClick={() => onSelect(level, opt.id)}>
              <defs><path id={textPathId} d={textPathData} /></defs>
              <path
                d={segmentPath}
                fill={isSelected ? opt.color : '#ffffff'}
                stroke={isSelected ? 'white' : '#f1f5f9'}
                strokeWidth={isSelected ? "1.5" : "0.5"}
                className="transition-all duration-300 group-hover:brightness-95"
              />
              <text
                className={`font-bold tracking-tight pointer-events-none transition-colors duration-300 ${isSelected ? 'fill-white' : 'fill-slate-500'}`}
                fontSize={level < 3 ? "8" : "5.5"}
                dy={isBottom ? "2" : "2.5"}
              >
                <textPath href={`#${textPathId}`} startOffset="50%" textAnchor="middle">
                  {opt.label.toUpperCase()}
                </textPath>
              </text>
            </g>
          );
        })}
      </g>
    );
  };

  const getOptions = (level: number) => {
    switch(level) {
      case 1: return LEVEL_1_OPTIONS;
      case 2: return path.level1 ? LEVEL_2_OPTIONS[path.level1] || [] : [];
      case 3: return path.level2 ? LEVEL_3_MAPPING[path.level2] || [] : [];
      case 4: return path.level3 ? LEVEL_4_MAPPING[path.level3] || [] : [];
      case 5: return path.level4 ? LEVEL_5_MAPPING[path.level4] || [] : [];
      case 6: return path.level5 ? LEVEL_6_MAPPING[path.level5] || [] : [];
      case 7: return path.level6 ? LEVEL_7_MAPPING[path.level6] || [] : [];
      case 8: return path.level7 ? LEVEL_8_MAPPING[path.level7] || [] : [];
      case 9: return path.level8 ? LEVEL_9_MAPPING[path.level8] || [] : [];
      default: return [];
    }
  };

  return (
    <div className="relative w-full max-w-[650px] aspect-square mx-auto flex items-center justify-center">
      <svg viewBox="-320 -320 640 640" className="w-full h-full drop-shadow-xl">
        {/* Renderizado de 10 niveles (9 activos + centro) */}
        {renderCircle(getOptions(9), 315, 9, !!path.level8)}
        {renderCircle(getOptions(8), 291, 8, !!path.level7)}
        {renderCircle(getOptions(7), 267, 7, !!path.level6)}
        {renderCircle(getOptions(6), 243, 6, !!path.level5)}
        {renderCircle(getOptions(5), 219, 5, !!path.level4)}
        {renderCircle(getOptions(4), 195, 4, !!path.level3)}
        {renderCircle(getOptions(3), 171, 3, !!path.level2)}
        {renderCircle(getOptions(2), 147, 2, !!path.level1)}
        {renderCircle(getOptions(1), 123, 1, true)}

        <circle r="99" fill="white" stroke="#f1f5f9" strokeWidth="2" />
        <g transform="translate(0, -5)">
          <Bug size={36} className="mx-auto text-orange-600 opacity-20" />
          <text y="24" textAnchor="middle" fontSize="12" fontWeight="900" fill="#475569" letterSpacing="1">BIOVESP.ES</text>
          <text y="38" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#94a3b8">RUEDA DE DECISIONES</text>
        </g>
      </svg>
    </div>
  );
};

export default DecisionWheel;