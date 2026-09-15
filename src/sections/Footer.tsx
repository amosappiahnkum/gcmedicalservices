import {Mail, Phone} from "lucide-react";
import ClinicCross from "@/components/ClinicCross.tsx";
import {QUICK} from "@/utils";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400">
            <div className="max-w-6xl mx-auto px-5 lg:px-8 py-14">
                <div className="grid md:grid-cols-3 gap-10 mb-10">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2.5">
                            <div className="w-9 h-9 rounded-xl bg-teal-600 flex items-center justify-center">
                                <ClinicCross className="w-5 h-5 fill-white"/>
                            </div>
                            <div>
                                <div className="text-white font-bold text-sm">GC Medical Services</div>
                                <div className="text-teal-400 text-[10px] uppercase tracking-wide font-medium">Your
                                    Health. Our Priority.
                                </div>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Providing trusted, comprehensive healthcare with experienced professionals and a commitment
                            to quality patient care.
                        </p>
                        <div className="flex gap-3 pt-1">
                            {(['FB', 'IG', 'TW'] as const).map(label => (
                                <a
                                    key={label}
                                    href="#"
                                    className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-teal-700 flex items-center justify-center transition-colors"
                                    aria-label={`Follow us on ${label}`}
                                >
                                    <span className="text-[9px] font-bold text-gray-400">{label}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h3 className="text-white font-semibold text-sm mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {QUICK.map(q => (
                                <li key={q.href}>
                                    <a href={q.href}
                                       className="text-sm hover:text-teal-400 transition-colors no-underline">
                                        {q.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold text-sm mb-4">Contact</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <Phone size={14} className="text-teal-400 flex-shrink-0"/>
                                <a href="https://wa.me/233247909665" target="_blank" rel="noopener noreferrer"
                                   className="hover:text-teal-400 transition-colors no-underline">
                                    024 790 9665
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={14} className="text-teal-400 flex-shrink-0"/>
                                <a href="https://wa.me/233204917187" target="_blank" rel="noopener noreferrer"
                                   className="hover:text-teal-400 transition-colors no-underline">
                                    020 491 7187
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={14} className="text-teal-400 flex-shrink-0"/>
                                <a href="mailto:gcmedicalservices@outlook.com"
                                   className="hover:text-teal-400 transition-colors no-underline break-all">
                                    gcmedicalservices@outlook.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
                    <span>© {new Date().getFullYear()} GC Medical Services. All rights reserved.</span>
                    <span className="text-gray-600">Powered by DigiHealth care</span>
                </div>
            </div>
        </footer>
    )
}