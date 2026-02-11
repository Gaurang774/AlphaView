import { ShieldCheck } from 'lucide-react';

interface ConfidenceInsightsProps {
    stats: {
        avg: number;
        high: number;
        medium: number;
        low: number;
    } | null;
}

export default function ConfidenceInsights({ stats }: ConfidenceInsightsProps) {
    if (!stats) return null;

    const sections = [
        { label: 'Very confident', range: '> 90', color: 'bg-blue-600', value: stats.high },
        { label: 'Confident', range: '70-90', color: 'bg-cyan-500', value: stats.medium },
        { label: 'Uncertain', range: '50-70', color: 'bg-amber-400', value: stats.low * 0.5 }, // Simplified logic for legend
        { label: 'Very uncertain', range: '< 50', color: 'bg-orange-600', value: stats.low * 0.5 },
    ];

    return (
        <div className="rounded-xl border border-white/10 bg-black/40 p-3 backdrop-blur-md shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-500 pointer-events-auto select-none">
            <h3 className="text-[10px] font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-2">
                Confidence
            </h3>

            <div className="space-y-1.5">
                {sections.map((s, i) => (
                    <div key={i} className="flex items-center gap-2 text-[10px] font-medium">
                        <div className={`h-2 w-2 rounded-full ${s.color} shrink-0`} />
                        <span className="text-slate-300 truncate">{s.label}</span>
                    </div>
                ))}
            </div>

            <div className="mt-3 pt-2 border-t border-white/5">
                <div className="flex items-center justify-between text-[9px] font-bold uppercase text-slate-500">
                    <span>Avg pLDDT</span>
                    <span className="text-white">{stats.avg.toFixed(1)}</span>
                </div>
            </div>
        </div>
    );
}
