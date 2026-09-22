import React, { useState } from 'react';
import { 
  Box, 
  Cpu, 
  GitBranch, 
  CheckCircle2, 
  ChevronRight, 
  ShieldCheck, 
  Layers, 
  BarChart3, 
  Compass, 
  Terminal, 
  GraduationCap, 
  Sliders, 
  Sparkles,
  ExternalLink,
  ChevronDown,
  Lock,
  ArrowRight
} from 'lucide-react';

export default function App() {
  // Estado para o simulador isométrico interativo
  const [selectedUnits, setSelectedUnits] = useState(4);
  const totalUnits = 16;

  // Estado para FAQ Accordion
  const [openFaq, setOpenFaq] = useState(0);

  // Cálculo de MDC para simplificação matemática
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const divisor = gcd(selectedUnits, totalUnits);
  const simpNum = selectedUnits / divisor;
  const simpDen = totalUnits / divisor;
  const percentage = ((selectedUnits / totalUnits) * 100).toFixed(1);
  const decimal = (selectedUnits / totalUnits).toFixed(2);

  return (
    <div className="min-h-screen bg-charcoal text-snow selection:bg-golden selection:text-charcoal-deep bg-tech-grid relative overflow-x-hidden font-sans">
      
      {/* BARRA SUPERIOR DE TELEMETRIA / STATUS */}
      <aside className="border-b border-grey-border bg-charcoal-deep/90 backdrop-blur text-xs py-2 px-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-mono text-snow-dim">
              <span className="w-2 h-2 rounded-full bg-ember node-pulse" />
              <span>SISTEMA ATIVO</span>
            </span>
            <span className="text-grey hidden sm:inline">|</span>
            <span className="text-snow-subtle hidden sm:inline font-mono">
              TURMA 2026 // MODELAGEM ESPACIAL BNCC
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-golden font-mono">
              VAGAS TÉCNICAS: 14 RESTANTES
            </span>
            <a 
              href="#inscricao" 
              className="text-snow hover:text-golden transition-colors text-xs font-medium underline underline-offset-4"
            >
              Matrícula Direta &rarr;
            </a>
          </div>
        </div>
      </aside>

      {/* CABEÇALHO PRINCIPAL */}
      <header className="border-b border-grey-border bg-charcoal/80 backdrop-blur-md sticky top-[33px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded border border-grey/60 bg-charcoal-surface flex items-center justify-center text-golden group-hover:border-golden transition-colors">
              <Box className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold tracking-tight text-snow text-lg block leading-none">
                CRAFT<span className="text-golden font-mono font-normal">.MATH</span>
              </span>
              <span className="text-[10px] text-grey font-mono uppercase tracking-widest block">
                Arquitetura de Frações
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-snow-dim">
            <a href="#metodologia" className="hover:text-golden transition-colors">Metodologia</a>
            <a href="#simulador" className="hover:text-golden transition-colors">Simulador</a>
            <a href="#publico" className="hover:text-golden transition-colors">Público-Alvo</a>
            <a href="#grade" className="hover:text-golden transition-colors">Grade</a>
            <a href="#faq" className="hover:text-golden transition-colors">Dúvidas</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#inscricao"
              className="inline-flex items-center gap-2 px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider bg-golden text-charcoal-deep hover:bg-golden-hover transition-all duration-200 shadow-sm hover:shadow-technical-glow"
            >
              <span>Matricular-se</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO SECTION: AUTORIDADE & TECNOLOGIA (LAYOUT ASSIMÉTRICO) */}
        <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-grey-border overflow-hidden">
          {/* Linhas de conexão de fundo em SVG decorativo */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="gridPattern" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(122, 125, 125, 0.12)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#gridPattern)" />
              <path 
                d="M 100 150 L 400 150 L 550 300 L 900 300" 
                fill="none" 
                stroke="#7A7D7D" 
                strokeWidth="1.5" 
                strokeDasharray="6 6"
                className="animate-draw-line"
              />
              <circle cx="400" cy="150" r="4" fill="#C90101" />
              <circle cx="550" cy="300" r="4" fill="#C90101" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Lado Esquerdo: Tipografia, Autoridade e Proposta Técnica */}
              <div className="lg:col-span-7 flex flex-col items-start space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-grey-border bg-charcoal-deep text-xs font-mono text-snow-dim">
                  <span className="w-2 h-2 rounded-full bg-ember node-pulse" />
                  <span>SISTEMA COGNITIVO // MODELAGEM ESPACIAL</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-snow tracking-tight leading-[1.12]">
                  A Geometria das{' '}
                  <span className="text-golden underline decoration-golden/40 underline-offset-8">
                    Frações
                  </span>{' '}
                  Modelada com Lógica Espacial.
                </h1>

                <p className="text-base sm:text-lg text-snow-dim font-normal max-w-2xl leading-relaxed">
                  Substitua regras abstratas e decorebas por uma fundamentação técnica visual. 
                  Utilizamos a geometria tridimensional discreta do Minecraft como laboratório prático 
                  para desmistificar proporções, equivalências e álgebra para estudantes, vestibulandos e adultos.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                  <a
                    href="#inscricao"
                    className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded text-sm font-semibold tracking-wide uppercase bg-golden text-charcoal-deep hover:bg-golden-hover transition-all duration-200 shadow-technical-glow"
                  >
                    <span>Iniciar Treinamento Técnico</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="#simulador"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded text-sm font-medium tracking-wide border border-grey-border bg-charcoal-surface/60 hover:bg-charcoal-surface text-snow transition-colors"
                  >
                    <Sliders className="w-4 h-4 text-golden" />
                    <span>Testar Simulador</span>
                  </a>
                </div>

                {/* Métricas e Telemetria de Autoridade */}
                <div className="pt-8 border-t border-grey-border grid grid-cols-3 gap-6 w-full">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold font-mono text-snow">3.400+</div>
                    <div className="text-xs text-grey uppercase tracking-wider font-mono mt-0.5">Alunos Ativos</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold font-mono text-golden">98.4%</div>
                    <div className="text-xs text-grey uppercase tracking-wider font-mono mt-0.5">Retenção Conceitual</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold font-mono text-snow">12 Anos</div>
                    <div className="text-xs text-grey uppercase tracking-wider font-mono mt-0.5">Pesquisa Didática</div>
                  </div>
                </div>
              </div>

              {/* Lado Direito: Foto do Professor & Diagrama Isométrico Wireframe */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-md">
                  
                  {/* Wireframe e Linhas de Conexão ao Redor da Foto */}
                  <svg className="absolute -inset-8 w-[calc(100%+64px)] h-[calc(100%+64px)] pointer-events-none z-20" xmlns="http://www.w3.org/2000/svg">
                    {/* Linha técnica superior */}
                    <path d="M 30 60 L 160 60 L 220 20 L 360 20" fill="none" stroke="#7A7D7D" strokeWidth="1.2" strokeDasharray="4 4" />
                    <circle cx="160" cy="60" r="3.5" fill="#C90101" />
                    <circle cx="220" cy="20" r="3.5" fill="#EB9C00" />

                    {/* Linha técnica inferior */}
                    <path d="M 60 480 L 180 480 L 240 520 L 380 520" fill="none" stroke="#7A7D7D" strokeWidth="1.2" strokeDasharray="4 4" />
                    <circle cx="180" cy="480" r="3.5" fill="#C90101" />
                    <circle cx="240" cy="520" r="3.5" fill="#7A7D7D" />

                    {/* Cubo Isométrico Wireframe Flutuante no Topo Direito */}
                    <g transform="translate(320, 30) scale(0.7)">
                      <path d="M 30 0 L 60 17 L 30 34 L 0 17 Z" fill="rgba(86, 82, 84, 0.6)" stroke="#7A7D7D" strokeWidth="1.2" />
                      <path d="M 0 17 L 30 34 L 30 68 L 0 51 Z" fill="rgba(86, 82, 84, 0.8)" stroke="#7A7D7D" strokeWidth="1.2" />
                      <path d="M 60 17 L 30 34 L 30 68 L 60 51 Z" fill="rgba(63, 60, 62, 0.9)" stroke="#7A7D7D" strokeWidth="1.2" />
                      <circle cx="30" cy="34" r="2.5" fill="#C90101" />
                    </g>

                    {/* Cubo Isométrico Wireframe no Canto Inferior Esquerdo */}
                    <g transform="translate(10, 420) scale(0.65)">
                      <path d="M 30 0 L 60 17 L 30 34 L 0 17 Z" fill="rgba(235, 156, 0, 0.2)" stroke="#EB9C00" strokeWidth="1.2" />
                      <path d="M 0 17 L 30 34 L 30 68 L 0 51 Z" fill="rgba(86, 82, 84, 0.7)" stroke="#7A7D7D" strokeWidth="1.2" />
                      <path d="M 60 17 L 30 34 L 30 68 L 60 51 Z" fill="rgba(63, 60, 62, 0.8)" stroke="#7A7D7D" strokeWidth="1.2" />
                      <circle cx="30" cy="34" r="2.5" fill="#C90101" />
                    </g>
                  </svg>

                  {/* Moldura Técnica da Foto */}
                  <div className="relative rounded border border-grey-border bg-charcoal-deep p-2 shadow-technical overflow-hidden group">
                    <div className="relative rounded overflow-hidden aspect-[3/4] bg-charcoal-surface">
                      <img 
                        src="/assets/professor.jpg" 
                        alt="Prof. Especialista em Matemática e Modelagem Espacial" 
                        className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[0.98]"
                      />
                      {/* Gradiente de fusão inferior no estilo dark mode */}
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-transparent to-transparent opacity-80" />
                    </div>

                    {/* Selo Técnico 01: Identificação do Docente */}
                    <div className="absolute bottom-4 left-4 right-4 bg-charcoal-deep/95 border border-grey-border p-3 rounded backdrop-blur text-xs">
                      <div className="flex items-center justify-between font-mono">
                        <span className="font-semibold text-snow flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-golden" />
                          PROF. FELIPE ROCHA
                        </span>
                        <span className="text-[10px] text-grey">COORD_PEDAGÓGICA</span>
                      </div>
                      <p className="text-[11px] text-snow-dim mt-1 font-normal">
                        Mestre em Educação Matemática • Especialista em Raciocínio Espacial Tridimensional.
                      </p>
                    </div>

                    {/* Selo Técnico Flutuante 02: Node de Telemetria */}
                    <div className="absolute top-4 right-4 bg-charcoal-deep/90 border border-grey-border px-2.5 py-1.5 rounded text-[10px] font-mono text-snow-dim flex items-center gap-1.5 shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-ember node-pulse" />
                      <span>NODE_ISO // 1/4_PROPORÇÃO</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SIMULADOR ANALÍTICO DE FRAÇÕES ISOMÉTRICAS (EDTECH TOOL) */}
        <section id="simulador" className="py-20 border-b border-grey-border bg-charcoal-surface/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-grey-border bg-charcoal-deep text-xs font-mono text-golden mb-3">
                <Terminal className="w-3.5 h-3.5" />
                <span>LABORATÓRIO ANALÍTICO INTERATIVO</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-snow">
                Decomposição de Volume Espacial (16 Unidades Discretas)
              </h2>
              <p className="text-snow-dim text-sm sm:text-base mt-3">
                Interaja com o bloco paramétrico abaixo. Ao modificar a partição discreta, 
                observe o comportamento simultâneo da geometria, fração reduzida e notação analítica.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-charcoal-deep border border-grey-border rounded p-6 sm:p-8 shadow-technical">
              
              {/* Lado Esquerdo: Controles & Projeção Matricial */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <label htmlFor="range-units" className="text-snow-dim">VOLUME PARTICIONADO (V):</label>
                    <span className="text-golden font-bold">{selectedUnits} de 16 blocos</span>
                  </div>
                  <input
                    id="range-units"
                    type="range"
                    min="1"
                    max="16"
                    value={selectedUnits}
                    onChange={(e) => setSelectedUnits(Number(e.target.value))}
                    className="w-full h-2 bg-charcoal-surface rounded-lg appearance-none cursor-pointer accent-golden"
                  />
                </div>

                {/* Predefinições Rápidas de Razão */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono text-grey uppercase tracking-wider block">
                    Razões Padrão de Engenharia:
                  </span>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { label: '1/8 (2u)', val: 2 },
                      { label: '1/4 (4u)', val: 4 },
                      { label: '1/2 (8u)', val: 8 },
                      { label: '3/4 (12u)', val: 12 },
                    ].map((preset) => (
                      <button
                        key={preset.val}
                        type="button"
                        onClick={() => setSelectedUnits(preset.val)}
                        className={`py-1.5 text-xs font-mono rounded border transition-colors ${
                          selectedUnits === preset.val
                            ? 'bg-golden text-charcoal-deep font-semibold border-golden'
                            : 'border-grey-border bg-charcoal-surface/60 text-snow hover:border-grey'
                        }`}
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Painel de Telemetria Analítica */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-grey-border">
                  <div className="p-3 bg-charcoal-surface rounded border border-grey-border/60">
                    <span className="text-[10px] font-mono text-grey block uppercase">Fração Bruta</span>
                    <span className="text-xl font-bold font-mono text-snow">{selectedUnits}/16</span>
                  </div>
                  <div className="p-3 bg-charcoal-surface rounded border border-golden/30">
                    <span className="text-[10px] font-mono text-golden block uppercase">Fração Reduzida</span>
                    <span className="text-xl font-bold font-mono text-golden">{simpNum}/{simpDen}</span>
                  </div>
                  <div className="p-3 bg-charcoal-surface rounded border border-grey-border/60">
                    <span className="text-[10px] font-mono text-grey block uppercase">Densidade (%)</span>
                    <span className="text-xl font-bold font-mono text-snow">{percentage}%</span>
                  </div>
                  <div className="p-3 bg-charcoal-surface rounded border border-grey-border/60">
                    <span className="text-[10px] font-mono text-grey block uppercase">Notação Decimal</span>
                    <span className="text-xl font-bold font-mono text-snow">{decimal}</span>
                  </div>
                </div>

                {/* Nota Didática Estrutural */}
                <div className="p-3.5 bg-charcoal-surface/40 border-l-2 border-golden text-xs text-snow-dim leading-relaxed">
                  <strong>Análise Cognitiva:</strong> O cérebro não processa números abstratos com facilidade, mas 
                  compreende instantaneamente proporções quando enxerga <strong>{selectedUnits} cubos preenchidos</strong> dentro 
                  de uma malha volumétrica de 16. A simplificação para <strong>{simpNum}/{simpDen}</strong> torna-se visualmente incontestável.
                </div>
              </div>

              {/* Lado Direito: Grade Isométrica 4x4 Interativa */}
              <div className="lg:col-span-7 flex flex-col items-center justify-center p-4">
                <div className="w-full max-w-sm">
                  <div className="flex items-center justify-between text-[11px] font-mono text-grey mb-3">
                    <span>MALHA ISOMÉTRICA [MATRIZ 4x4]</span>
                    <span className="text-ember flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-ember" />
                      STATUS: ONLINE
                    </span>
                  </div>

                  {/* Renderização em Grid Matricial Técnico */}
                  <div className="grid grid-cols-4 gap-2 bg-charcoal-surface p-4 rounded border border-grey-border shadow-inner">
                    {Array.from({ length: totalUnits }).map((_, idx) => {
                      const isActive = idx < selectedUnits;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedUnits(idx + 1)}
                          title={`Unidade Discreta ${idx + 1}`}
                          className={`aspect-square rounded flex flex-col items-center justify-center transition-all duration-150 border ${
                            isActive
                              ? 'bg-golden/20 border-golden text-golden shadow-sm scale-[0.98]'
                              : 'bg-charcoal-deep border-grey-border/60 text-grey/40 hover:border-grey'
                          }`}
                        >
                          <Box className={`w-5 h-5 ${isActive ? 'text-golden' : 'text-grey/30'}`} />
                          <span className="text-[9px] font-mono mt-1">u_{idx + 1}</span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono text-grey mt-3">
                    <span>* Clique em qualquer nó da matriz para redefinir o volume</span>
                    <span className="text-golden font-mono">1 BLOC = 1/16 V_TOTAL</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SEÇÃO: COMO FUNCIONA (INFOGRÁFICO TÉCNICO LINE-ART) */}
        <section id="metodologia" className="py-24 border-b border-grey-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-grey-border bg-charcoal-deep text-xs font-mono text-snow-dim mb-3">
                <GitBranch className="w-3.5 h-3.5 text-ember" />
                <span>FLUXO COGNITIVO METODOLÓGICO</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-snow">
                O Método Didático em 4 Fases Estruturadas
              </h2>
              <p className="text-snow-dim text-sm sm:text-base mt-3">
                Um pipeline pedagógico baseado em neurociência educacional, transpondo o raciocínio 
                espacial tridimensional para a álgebra analítica formal.
              </p>
            </div>

            {/* Grid Infográfico com Linha de Conexão Superior */}
            <div className="relative">
              {/* Linha de Conexão Contínua (Desktop) */}
              <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-[2px] bg-grey-border -z-0">
                <div className="absolute top-1/2 -translate-y-1/2 left-0 w-2.5 h-2.5 rounded-full bg-ember" />
                <div className="absolute top-1/2 -translate-y-1/2 left-1/3 w-2.5 h-2.5 rounded-full bg-golden" />
                <div className="absolute top-1/2 -translate-y-1/2 left-2/3 w-2.5 h-2.5 rounded-full bg-grey" />
                <div className="absolute top-1/2 -translate-y-1/2 right-0 w-2.5 h-2.5 rounded-full bg-snow" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                
                {/* Passo 01 */}
                <div className="bg-charcoal-deep border border-grey-border rounded p-6 flex flex-col justify-between hover:border-golden/60 transition-colors group">
                  <div>
                    <div className="w-12 h-12 rounded border border-grey-border bg-charcoal-surface flex items-center justify-center text-golden mb-5 group-hover:border-golden transition-colors">
                      <Layers className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <span className="text-xs font-mono text-grey block uppercase tracking-widest mb-1">Fase 01 // Fundamento</span>
                    <h3 className="text-lg font-bold text-snow mb-2">Decomposição Espacial</h3>
                    <p className="text-xs text-snow-dim leading-relaxed">
                      Compreensão táctil do numerador e denominador através do particionamento de volumes sólidos 
                      (1/1, 1/2, 1/4) em ambientes tridimensionais.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-grey-border/50 text-[11px] font-mono text-golden">
                    [01] Geometria Voxel
                  </div>
                </div>

                {/* Passo 02 */}
                <div className="bg-charcoal-deep border border-grey-border rounded p-6 flex flex-col justify-between hover:border-golden/60 transition-colors group">
                  <div>
                    <div className="w-12 h-12 rounded border border-grey-border bg-charcoal-surface flex items-center justify-center text-golden mb-5 group-hover:border-golden transition-colors">
                      <BarChart3 className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <span className="text-xs font-mono text-grey block uppercase tracking-widest mb-1">Fase 02 // Operações</span>
                    <h3 className="text-lg font-bold text-snow mb-2">Álgebra & Proporções</h3>
                    <p className="text-xs text-snow-dim leading-relaxed">
                      Soma, subtração e multiplicação de frações com denominadores distintos através de 
                      montagem de estruturas proporcionais e simétricas.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-grey-border/50 text-[11px] font-mono text-golden">
                    [02] Equivalência Modular
                  </div>
                </div>

                {/* Passo 03 */}
                <div className="bg-charcoal-deep border border-grey-border rounded p-6 flex flex-col justify-between hover:border-golden/60 transition-colors group">
                  <div>
                    <div className="w-12 h-12 rounded border border-grey-border bg-charcoal-surface flex items-center justify-center text-golden mb-5 group-hover:border-golden transition-colors">
                      <Cpu className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <span className="text-xs font-mono text-grey block uppercase tracking-widest mb-1">Fase 03 // Lógica</span>
                    <h3 className="text-lg font-bold text-snow mb-2">Circuitos de Redstone</h3>
                    <p className="text-xs text-snow-dim leading-relaxed">
                      Portas lógicas booleanas onde a corrente elétrica só é propagada se a simplificação 
                      fracionária for resolvida com absoluta precisão.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-grey-border/50 text-[11px] font-mono text-golden">
                    [03] Feedback Imediato
                  </div>
                </div>

                {/* Passo 04 */}
                <div className="bg-charcoal-deep border border-grey-border rounded p-6 flex flex-col justify-between hover:border-golden/60 transition-colors group">
                  <div>
                    <div className="w-12 h-12 rounded border border-grey-border bg-charcoal-surface flex items-center justify-center text-golden mb-5 group-hover:border-golden transition-colors">
                      <GraduationCap className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <span className="text-xs font-mono text-grey block uppercase tracking-widest mb-1">Fase 04 // Domínio</span>
                    <h3 className="text-lg font-bold text-snow mb-2">Transposição Formal</h3>
                    <p className="text-xs text-snow-dim leading-relaxed">
                      Aplicação direta da intuição espacial adquirida para a resolução de questões do ENEM, 
                      vestibulares, provas acadêmicas e vida prática.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-grey-border/50 text-[11px] font-mono text-golden">
                    [04] Rigor Acadêmico
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO: TODAS AS IDADES (GRID MODULAR POLIDO & APLICAÇÃO PRÁTICA) */}
        <section id="publico" className="py-24 border-b border-grey-border bg-charcoal-surface/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-grey-border bg-charcoal-deep text-xs font-mono text-snow-dim mb-3">
                <Compass className="w-3.5 h-3.5 text-golden" />
                <span>SEGMENTAÇÃO DIDÁTICA EFICIENTE</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-snow">
                Matemática Estrutural para Todas as Etapas da Vida
              </h2>
              <p className="text-snow-dim text-sm sm:text-base mt-3">
                O raciocínio geométrico é universal. Nossa metodologia se adapta aos diferentes 
                objetivos cognitivos sem infantilizar jovens ou constranger adultos.
              </p>
            </div>

            {/* Grid Técnico de 4 Segmentos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-charcoal-deep border border-grey-border p-6 rounded hover:border-grey transition-colors flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-grey mb-3">
                    <span>SEGMENTO 01</span>
                    <span className="text-golden">7 A 12 ANOS</span>
                  </div>
                  <h3 className="text-xl font-bold text-snow mb-2">Ensino Fundamental (Anos Iniciais e Finais)</h3>
                  <p className="text-sm text-snow-dim leading-relaxed mb-4">
                    Eliminação precoce da ansiedade com a matemática. A criança desenvolve autonomia de estudo, 
                    entende o 'porquê' das divisões e projeta uma relação saudável com as ciências exatas para toda a vida escolar.
                  </p>
                </div>
                <div className="space-y-1.5 text-xs text-snow font-mono pt-3 border-t border-grey-border/60">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-golden" />
                    <span>Fim das batalhas diárias para fazer lições de casa</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-golden" />
                    <span>Conceitos abstratos traduzidos para seu jogo favorito</span>
                  </div>
                </div>
              </div>

              <div className="bg-charcoal-deep border border-grey-border p-6 rounded hover:border-grey transition-colors flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-grey mb-3">
                    <span>SEGMENTO 02</span>
                    <span className="text-golden">13 A 18 ANOS</span>
                  </div>
                  <h3 className="text-xl font-bold text-snow mb-2">Vestibulares, ENEM & Ensino Médio</h3>
                  <p className="text-sm text-snow-dim leading-relaxed mb-4">
                    Frações são o gargalo que trava 80% dos estudantes em equações de 1º e 2º grau, 
                    estequiometria na química e vetores na física. Nosso foco é velocidade e cálculo mental estratégico.
                  </p>
                </div>
                <div className="space-y-1.5 text-xs text-snow font-mono pt-3 border-t border-grey-border/60">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-golden" />
                    <span>Resolução de frações complexas em segundos na prova</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-golden" />
                    <span>Base analítica sólida para funções e geometria analítica</span>
                  </div>
                </div>
              </div>

              <div className="bg-charcoal-deep border border-grey-border p-6 rounded hover:border-grey transition-colors flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-grey mb-3">
                    <span>SEGMENTO 03</span>
                    <span className="text-golden">ADULTOS & PAIS</span>
                  </div>
                  <h3 className="text-xl font-bold text-snow mb-2">Apoio Familiar & Conexão Intergeracional</h3>
                  <p className="text-sm text-snow-dim leading-relaxed mb-4">
                    Pais e responsáveis que desejam orientar seus filhos com firmeza e sem vergonha. 
                    Aprenda a linguagem que eles dominam e transforme momentos de frustração em parceria intelectual.
                  </p>
                </div>
                <div className="space-y-1.5 text-xs text-snow font-mono pt-3 border-t border-grey-border/60">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-golden" />
                    <span>Tutoria ativa e qualificada nos estudos em casa</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-golden" />
                    <span>Ambiente maduro, acolhedor e livre de julgamentos</span>
                  </div>
                </div>
              </div>

              <div className="bg-charcoal-deep border border-grey-border p-6 rounded hover:border-grey transition-colors flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-grey mb-3">
                    <span>SEGMENTO 04</span>
                    <span className="text-golden">CONCURSOS & CARREIRA</span>
                  </div>
                  <h3 className="text-xl font-bold text-snow mb-2">Requalificação & Concursos Públicos</h3>
                  <p className="text-sm text-snow-dim leading-relaxed mb-4">
                    Para adultos que necessitam recuperar a proficiência matemática para seleções públicas, 
                    cursos técnicos ou transição de carreira nas áreas de dados, engenharia e finanças.
                  </p>
                </div>
                <div className="space-y-1.5 text-xs text-snow font-mono pt-3 border-t border-grey-border/60">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-golden" />
                    <span>Interpretação matemática ágil em questões de bancas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-golden" />
                    <span>Certificado com carga horária para horas complementares</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Comparativo Técnico Matriz */}
            <div className="mt-12 bg-charcoal-deep border border-grey-border rounded p-6 sm:p-8">
              <h3 className="text-lg font-bold text-snow mb-6 text-center font-mono">
                MATRIZ COMPARATIVA: DIDÁTICA CONVENCIONAL VS. CRAFTMATH EDTECH
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3 p-4 rounded bg-charcoal-surface/40 border border-grey-border/50">
                  <span className="text-xs font-mono text-ember uppercase tracking-wider block">
                    [X] Ensino Abstrato Convencional
                  </span>
                  <ul className="space-y-2 text-xs text-snow-dim">
                    <li>• Regras descontextualizadas ("inverte e multiplica") sem fundamentação física</li>
                    <li>• Sentimento de incapacidade e bloqueio psicológico perante frações</li>
                    <li>• Fixação efêmera voltada apenas para a aprovação na prova do dia seguinte</li>
                  </ul>
                </div>

                <div className="space-y-3 p-4 rounded bg-charcoal-surface/80 border border-golden/50">
                  <span className="text-xs font-mono text-golden uppercase tracking-wider block">
                    [✓] Metodologia Espacial CraftMath
                  </span>
                  <ul className="space-y-2 text-xs text-snow">
                    <li>• Relações volumétricas 3D visíveis: o aluno entende o fundamento estrutural</li>
                    <li>• Ambiente investigativo gamificado onde errar é parte natural da calibragem</li>
                    <li>• Retenção permanente de longo prazo: a intuição geométrica nunca se perde</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GRADE CURRICULAR TÉCNICA */}
        <section id="grade" className="py-20 border-b border-grey-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-grey-border bg-charcoal-deep text-xs font-mono text-snow-dim mb-3">
                <Terminal className="w-3.5 h-3.5 text-golden" />
                <span>MATRIZ CURRICULAR // 40 HORAS CERTIFICADAS</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-snow">
                Conteúdo Programático Completo
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-charcoal-deep border border-grey-border rounded">
                <span className="text-xs font-mono text-golden block mb-1">MÓDULO 01</span>
                <h4 className="text-base font-bold text-snow mb-3">Geometria e Núcleos Fracionários</h4>
                <ul className="text-xs text-snow-dim space-y-2 font-mono">
                  <li>01.1 Espaço Discreto e Dimensões 3D</li>
                  <li>01.2 O Significado Físico do Denominador</li>
                  <li>01.3 Numerador como Vetor de Seleção</li>
                  <li>01.4 Frações Próprias, Impróprias e Aparentes</li>
                </ul>
              </div>

              <div className="p-6 bg-charcoal-deep border border-grey-border rounded">
                <span className="text-xs font-mono text-golden block mb-1">MÓDULO 02</span>
                <h4 className="text-base font-bold text-snow mb-3">Operações e Estruturas Modulares</h4>
                <ul className="text-xs text-snow-dim space-y-2 font-mono">
                  <li>02.1 Adição e Subtração por Volume</li>
                  <li>02.2 MMC Visual via Matrizes Simétricas</li>
                  <li>02.3 Multiplicação Fracionária no Plano</li>
                  <li>02.4 Divisão como Razão de Partição</li>
                </ul>
              </div>

              <div className="p-6 bg-charcoal-deep border border-grey-border rounded">
                <span className="text-xs font-mono text-golden block mb-1">MÓDULO 03</span>
                <h4 className="text-base font-bold text-snow mb-3">Lógica Booleana & Desafios ENEM</h4>
                <ul className="text-xs text-snow-dim space-y-2 font-mono">
                  <li>03.1 Circuitos de Redstone Proporcionais</li>
                  <li>03.2 Resolução de Sistemas Complexos</li>
                  <li>03.3 Transposição para Questões de Vestibulares</li>
                  <li>03.4 Projeto Final: Mestre Construtor</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO DE PREÇOS (MINIMALISTA, CHARCOAL, BORDAS GREY, ALTA CONVERSÃO) */}
        <section id="inscricao" className="py-24 border-b border-grey-border bg-charcoal-deep relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            
            <div className="border border-grey-border rounded-lg bg-charcoal-surface p-8 sm:p-12 shadow-technical relative overflow-hidden">
              {/* Faixa Superior Minimalista */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-grey-border">
                <div>
                  <span className="text-xs font-mono text-golden uppercase tracking-widest block mb-1">
                    PLANO MASTER // ACESSO VITALÍCIO
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-snow">
                    Formação Completa em Frações Espaciais
                  </h2>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-ember/50 bg-ember/10 text-xs font-mono text-snow">
                  <span className="w-2 h-2 rounded-full bg-ember node-pulse" />
                  <span>40% DE DESCONTO APLICADO</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-center">
                {/* Lista de Entregáveis Técnicos */}
                <div className="lg:col-span-7 space-y-3.5 text-sm text-snow-dim">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-golden shrink-0 mt-0.5" />
                    <span><strong>+40 Aulas Técnicas em Alta Definição:</strong> Da fundamentação 3D até a resolução de problemas de vestibulares.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-golden shrink-0 mt-0.5" />
                    <span><strong>Mapas Customizados para Download:</strong> Mundos Minecraft pré-configurados com circuitos e missões pedagógicas.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-golden shrink-0 mt-0.5" />
                    <span><strong>Acesso ao Servidor VIP de Prática:</strong> Ambiente monitorado para resolução colaborativa de problemas matemáticos.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-golden shrink-0 mt-0.5" />
                    <span><strong>Apostila Analítica & Gabaritos Comentados:</strong> Material em PDF de consulta rápida e fixação de conceitos.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-golden shrink-0 mt-0.5" />
                    <span><strong>Certificado de Conclusão Oficial (40h):</strong> Validação de horas complementares acadêmicas.</span>
                  </div>
                </div>

                {/* Bloco de Preço & Call to Action */}
                <div className="lg:col-span-5 bg-charcoal-deep border border-grey-border p-6 rounded flex flex-col items-center text-center">
                  <span className="text-xs text-grey line-through font-mono">De R$ 297,00</span>
                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="text-sm font-mono text-snow-dim">12x de</span>
                    <span className="text-4xl font-extrabold font-mono text-golden tracking-tight">R$ 19,90</span>
                  </div>
                  <span className="text-xs text-snow-dim font-mono mt-1">ou R$ 197,00 à vista no PIX</span>

                  <a
                    href="#checkout"
                    className="w-full mt-6 py-3.5 px-6 rounded text-sm font-bold uppercase tracking-wider bg-golden text-charcoal-deep hover:bg-golden-hover transition-all duration-200 shadow-technical-glow flex items-center justify-center gap-2"
                  >
                    <Lock className="w-4 h-4" />
                    <span>Garantir Minha Vaga</span>
                  </a>

                  <div className="mt-4 flex items-center justify-center gap-2 text-xs text-grey font-mono">
                    <ShieldCheck className="w-4 h-4 text-golden" />
                    <span>7 Dias de Garantia Incondicional</span>
                  </div>
                </div>
              </div>

              {/* Box de Risco Zero */}
              <div className="mt-8 pt-6 border-t border-grey-border/60 flex flex-col sm:flex-row items-center gap-4 text-xs text-snow-dim">
                <div className="w-10 h-10 rounded border border-grey-border bg-charcoal-deep flex items-center justify-center text-golden shrink-0 font-bold font-mono">
                  7D
                </div>
                <p>
                  <strong>Garantia Científica de Satisfação:</strong> Acesse as aulas, explore o simulador e baixe os mapas. 
                  Se em até 7 dias corridos você não constatar uma revolução na compreensão das frações, 
                  reembolsaremos 100% do valor com um único clique.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* SEÇÃO FAQ (PERGUNTAS FREQUENTES MINIMALISTA) */}
        <section id="faq" className="py-24 border-b border-grey-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <span className="text-xs font-mono text-golden uppercase tracking-widest block mb-2">
                ESCLARECIMENTOS TÉCNICOS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-snow">
                Perguntas Frequentes
              </h2>
            </div>

            <div className="space-y-3 font-sans">
              {[
                {
                  q: 'É obrigatório possuir o Minecraft instalado para cursar?',
                  a: 'Não. Todas as demonstrações são gravadas em vídeo de alta definição com visualização completa dos esquemas tridimensionais, e os conceitos podem ser praticados diretamente no nosso simulador analítico web. Caso você já possua o jogo (Java ou Bedrock), fornecemos os mapas para download.'
                },
                {
                  q: 'A metodologia é recomendada para alunos sem habilidade em jogos?',
                  a: 'Sim. Não exigimos nenhuma habilidade motora ou reflexos de jogador. O Minecraft é utilizado estritamente como um software de modelagem espacial de blocos, de forma intuitiva e pedagógica.'
                },
                {
                  q: 'Qual o tempo estimado para concluir o treinamento?',
                  a: 'O curso possui 40 horas de carga horária recomendada. Alunos que dedicam 30 a 45 minutos por dia costumam concluir todos os módulos e desafios em cerca de 3 a 4 semanas.'
                },
                {
                  q: 'Como é emitido o certificado de conclusão?',
                  a: 'Ao finalizar o projeto prático final do Módulo 03, o aluno submete sua solução e recebe automaticamente o Certificado Digital com QR Code de autenticação, válido para comprovação de horas complementares.'
                },
                {
                  q: 'Qual o suporte oferecido em caso de dúvidas conceituais?',
                  a: 'Oferecemos monitoria diária dentro da plataforma e no servidor exclusivo para resolução de problemas e auxílio em exercícios escolares ou de vestibulares.'
                }
              ].map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div 
                    key={index}
                    className="border border-grey-border rounded bg-charcoal-deep transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 text-sm font-semibold text-snow hover:text-golden transition-colors"
                    >
                      <span>{item.q}</span>
                      <ChevronDown className={`w-4 h-4 text-grey transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-golden' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs text-snow-dim leading-relaxed border-t border-grey-border/40 font-normal">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </main>

      {/* RODAPÉ TÉCNICO BLUEPRINT */}
      <footer className="bg-charcoal-deep border-t border-grey-border py-12 text-xs text-snow-subtle font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-grey-border/50">
            <div className="space-y-3 md:col-span-2">
              <div className="flex items-center gap-2">
                <Box className="w-5 h-5 text-golden" />
                <span className="font-bold text-snow text-base tracking-tight font-sans">
                  CRAFT<span className="text-golden font-mono">.MATH</span>
                </span>
              </div>
              <p className="text-xs text-snow-dim max-w-md font-sans">
                Plataforma EdTech dedicada à transposição de conceitos matemáticos abstratos para 
                modelos tridimensionais discretos e lógica espacial.
              </p>
              <div className="text-[11px] text-grey">
                STATUS_KERNEL: 2.4.0-STABLE // TIMEZONE: UTC-03:00
              </div>
            </div>

            <div>
              <span className="text-snow font-bold block mb-3 font-sans">Módulos & Links</span>
              <ul className="space-y-2 text-xs font-sans">
                <li><a href="#metodologia" className="hover:text-golden transition-colors">Metodologia Didática</a></li>
                <li><a href="#simulador" className="hover:text-golden transition-colors">Simulador Isométrico</a></li>
                <li><a href="#publico" className="hover:text-golden transition-colors">Segmentação por Idade</a></li>
                <li><a href="#grade" className="hover:text-golden transition-colors">Grade Curricular</a></li>
                <li><a href="#inscricao" className="hover:text-golden transition-colors">Inscrição com Desconto</a></li>
              </ul>
            </div>

            <div>
              <span className="text-snow font-bold block mb-3 font-sans">Conformidade Legal</span>
              <ul className="space-y-2 text-xs font-sans">
                <li><a href="#" className="hover:text-golden transition-colors">Termos de Serviço</a></li>
                <li><a href="#" className="hover:text-golden transition-colors">Política de Privacidade (LGPD)</a></li>
                <li><a href="#" className="hover:text-golden transition-colors">Validação de Certificados</a></li>
                <li><a href="#" className="hover:text-golden transition-colors">Suporte Pedagógico</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-grey font-sans">
            <p>
              Aviso: CraftMath é uma iniciativa educacional independente. Não somos afiliados, aprovados ou associados à Mojang Studios ou Microsoft Corporation.
            </p>
            <p className="shrink-0 font-mono">
              &copy; 2026 CRAFTMATH // TODOS OS DIREITOS RESERVADOS
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
