import React from 'react';

// Devopstrio Architecture Blueprints Portal
// Page: Catalog Directory & Blueprint Generator Entry

const BlueprintCatalog = () => {
    return (
        <div className="min-h-screen bg-[#f1f5f9] text-slate-800 font-sans selection:bg-indigo-500/30">
            {/* Header Navigation */}
            <header className="border-b border-slate-200 bg-white sticky top-0 z-50 shadow-sm">
                <div className="max-w-screen-2xl mx-auto px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center font-bold text-white shadow-md shadow-indigo-600/30">
                            AB
                        </div>
                        <h1 className="text-lg font-bold text-slate-900 tracking-tight">Enterprise Architecture</h1>
                    </div>
                    <nav className="flex gap-6 text-sm font-semibold">
                        <a href="#" className="text-indigo-600 border-b-2 border-indigo-600 pb-5 pt-5">Solution Catalog</a>
                        <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors pt-5 pb-5">My Bundles</a>
                        <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors pt-5 pb-5">Governance Rules</a>
                        <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors pt-5 pb-5">Cost Estimator</a>
                    </nav>
                </div>
            </header>

            <main className="max-w-screen-2xl mx-auto px-8 py-8">

                {/* Hero Search */}
                <div className="bg-indigo-900 rounded-3xl p-10 mb-10 shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <h2 className="text-4xl font-extrabold text-white mb-4 relative z-10">Discover Secure-by-Design Solutions</h2>
                    <p className="text-indigo-200 text-lg mb-8 max-w-2xl relative z-10">Select an approved architectural pattern, customize your scale, and immediately download the deployment-ready IaC bundle.</p>

                    <div className="flex gap-4 relative z-10 max-w-3xl">
                        <input type="text" placeholder="Search for 'Kubernetes', 'Databricks', or 'Zero Trust'..." className="flex-1 bg-white rounded-lg px-6 py-4 text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 shadow-lg" />
                        <button className="bg-indigo-500 hover:bg-indigo-400 text-white font-bold px-8 py-4 rounded-lg shadow-lg transition-colors">Search Catalog</button>
                    </div>
                </div>

                {/* Filter Sidebar & Blueprint Grid */}
                <div className="flex gap-8">

                    {/* Filters */}
                    <div className="w-64 shrink-0 flex flex-col gap-6">
                        <div>
                            <h3 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wider">Domains</h3>
                            <div className="space-y-2">
                                {['Cloud Landing Zones', 'Data Platforms', 'AI Foundations', 'App Platforms', 'Security References'].map((t, i) => (
                                    <label key={i} className="flex items-center gap-3 text-sm text-slate-600 hover:text-indigo-600 cursor-pointer">
                                        <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" defaultChecked={i === 0 || i === 3} />
                                        {t}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wider">Cloud Providers</h3>
                            <div className="space-y-2">
                                <label className="flex items-center gap-3 text-sm text-slate-600 cursor-pointer"><input type="checkbox" className="rounded" defaultChecked /> Microsoft Azure</label>
                                <label className="flex items-center gap-3 text-sm text-slate-600 cursor-pointer"><input type="checkbox" className="rounded" /> Amazon Web Services</label>
                            </div>
                        </div>
                    </div>

                    {/* Catalog Grid */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xlg:grid-cols-3 gap-6">

                        {[
                            { title: 'AKS Production Foundation', domain: 'App Platforms', desc: 'Enterprise-grade Zero Trust Kubernetes cluster with isolated network traffic and OPA gatekeepers.', cost: '$650 / mo', img: 'aks' },
                            { title: 'Secure Web App Landing Zone', domain: 'Cloud Landing Zones', desc: 'Front Door WAF + Azure App Service with strict Private Endpoints to PaaS Databases.', cost: '$420 / mo', img: 'app' },
                            { title: 'AI Engineering Medallion Lake', domain: 'Data Platforms', desc: 'Databricks unity catalog paired with ADLS Gen2 for large-scale enterprise data engineering.', cost: '$1,200 / mo', img: 'data' },
                            { title: 'Hub & Spoke Network Core', domain: 'Cloud Landing Zones', desc: 'The baseline Azure networking architecture anchoring all ExpressRoute and Firewall configurations.', cost: '$1,800 / mo', img: 'net' }
                        ].map((bp, idx) => (
                            <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer">
                                {/* Placeholder for Diagram Preview */}
                                <div className="h-40 bg-slate-100 border-b border-slate-200 flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 to-transparent"></div>
                                    <svg className="w-16 h-16 text-indigo-300 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>

                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-indigo-900/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="bg-white text-indigo-900 font-bold px-4 py-2 rounded shadow-lg text-sm">Configure Blueprint</span>
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2 py-1 rounded">{bp.domain}</span>
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-lg mb-2">{bp.title}</h3>
                                    <p className="text-sm text-slate-500 mb-6 flex-1 line-clamp-3">{bp.desc}</p>

                                    <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] uppercase font-bold text-slate-400">Est. Base Cost</span>
                                            <span className="font-bold text-slate-900">{bp.cost}</span>
                                        </div>
                                        <span className="text-indigo-600 p-2 rounded-full hover:bg-indigo-50 transition-colors">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </main>
        </div>
    );
};

export default BlueprintCatalog;
