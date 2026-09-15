export default function ClinicCross({className}: { className?: string }) {
    return (
        <svg viewBox="0 0 32 32" className={className ?? 'w-5 h-5'} fill="currentColor">
            <rect x="12" y="2" width="8" height="28" rx="2"/>
            <rect x="2" y="12" width="28" height="8" rx="2"/>
        </svg>
    )
}