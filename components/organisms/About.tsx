"use client";

export default function About() {
	const stats = [
		{ number: '150+', label: 'Proyectos Completados' },
		{ number: '50+', label: 'Clientes Satisfechos' },
		{ number: '5+', label: 'Años de Experiencia' },
		{ number: '24/7', label: 'Soporte Técnico' },
	];

	const values = [
		{
			icon: (
				<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
			),
			title: 'Calidad',
			description: 'Comprometidos con la excelencia en cada proyecto',
		},
		{
			icon: (
				<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
				</svg>
			),
			title: 'Innovación',
			description: 'Usando tecnologías de vanguardia',
		},
		{
			icon: (
				<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
			),
			title: 'Puntualidad',
			description: 'Entregamos en tiempo y forma',
		},
		{
			icon: (
				<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
				</svg>
			),
			title: 'Colaboración',
			description: 'Trabajamos junto a ti en cada paso',
		},
	];

	return (
		<section id="nosotros" className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
			{/* Background effects */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
			</div>

			<div className="relative z-10 container mx-auto px-6">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
						Sobre{' '}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">
							Nosotros
						</span>
					</h2>
					<p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
						Transformamos ideas en experiencias digitales excepcionales
					</p>
					<div className="mt-6 w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full shadow-[0_0_20px_rgba(34,211,238,0.8)]"></div>
				</div>

				<div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
					{/* Left content */}
					<div className="space-y-6">
						<h3 className="text-3xl md:text-4xl font-bold text-white">
							Creamos soluciones digitales que{' '}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
								impulsan tu negocio
							</span>
						</h3>
						<p className="text-lg text-gray-400 leading-relaxed">
							Somos un equipo apasionado de desarrolladores, diseñadores y estrategas digitales dedicados a transformar la presencia online de nuestros clientes.
						</p>
						<p className="text-lg text-gray-400 leading-relaxed">
							Con más de 5 años de experiencia en el mercado, hemos ayudado a decenas de empresas a alcanzar sus objetivos digitales mediante soluciones innovadoras y personalizadas.
						</p>
            
						{/* Values */}
						<div className="grid grid-cols-2 gap-4 pt-6">
							{values.map((value, index) => (
								<div
									key={index}
									className="group p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-xl transition-all duration-300 hover:transform hover:scale-105"
								>
									<div className="flex items-start gap-3">
										<div className="text-cyan-400 group-hover:text-blue-400 transition-colors duration-300">
											{value.icon}
										</div>
										<div>
											<h4 className="text-white font-semibold mb-1">{value.title}</h4>
											<p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
												{value.description}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Right content - Stats */}
					<div className="relative">
						{/* Glow effect */}
						<div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-3xl"></div>
            
						<div className="relative grid grid-cols-2 gap-6">
							{stats.map((stat, index) => (
								<div
									key={index}
									className="group relative"
								>
									{/* Card glow */}
									<div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  
									{/* Card */}
									<div className="relative bg-gray-900/90 backdrop-blur-sm border border-gray-800 group-hover:border-cyan-500/50 rounded-2xl p-8 text-center transition-all duration-300 hover:transform hover:scale-105">
										<div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-3 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">
											{stat.number}
										</div>
										<div className="text-gray-400 font-medium">
											{stat.label}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Mission Statement */}
				<div className="relative group">
					<div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
					<div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 group-hover:border-blue-500/50 rounded-3xl p-12 text-center transition-all duration-300">
						<h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
							Nuestra Misión
						</h3>
						<p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
							Empoderar a las empresas con soluciones digitales innovadoras que no solo cumplan, sino que superen sus expectativas, 
							creando experiencias memorables para sus usuarios y generando un impacto real en su crecimiento.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
