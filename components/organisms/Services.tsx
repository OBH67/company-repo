"use client";

import { useState } from 'react';
import { services } from '../data/servicesData';

export default function Services() {
	const [hoveredCard, setHoveredCard] = useState<number | null>(null);

	return (
		<section id="servicios" className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
			{/* Background effects */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
			</div>

			<div className="relative z-10 container mx-auto px-6">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
						Nuestros{' '}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]">
							Servicios
						</span>
					</h2>
					<p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
						Soluciones digitales completas para impulsar tu negocio al siguiente nivel
					</p>
					<div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)]"></div>
				</div>

				{/* Services Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<div
							key={index}
							onMouseEnter={() => setHoveredCard(index)}
							onMouseLeave={() => setHoveredCard(null)}
							className="group relative"
						>
							{/* Card glow effect */}
							<div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
              
							{/* Card content */}
							<div className="relative h-full bg-gray-900/80 backdrop-blur-sm border border-gray-800 group-hover:border-blue-500/50 rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105">
								{/* Icon */}
								<div className="relative mb-6">
									<div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
									<div className="relative w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center text-blue-400 group-hover:text-cyan-400 transition-colors duration-300 border border-blue-500/30 group-hover:border-cyan-500/50">
										{service.icon}
									</div>
								</div>

								{/* Title */}
								<h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
									{service.title}
								</h3>

								{/* Description */}
								<p className="text-gray-400 mb-6 leading-relaxed">
									{service.description}
								</p>

								{/* Features */}
								<div className="space-y-2">
									{service.features.map((feature, idx) => (
										<div key={idx} className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
											<div className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
											<span>{feature}</span>
										</div>
									))}
								</div>

								{/* Hover indicator */}
								<div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
									</svg>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* CTA Button */}
				<div className="text-center mt-16">
					<button className="relative group overflow-hidden px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
						<div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300"></div>
						<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div className="absolute inset-0 bg-blue-500 blur-xl"></div>
						</div>
						<span className="relative z-10 text-white text-lg drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
							Ver Todos los Servicios
						</span>
						<div className="absolute inset-0 border-2 border-cyan-400/0 group-hover:border-cyan-400/50 rounded-xl transition-all duration-300"></div>
					</button>
				</div>
			</div>
		</section>
	);
}
