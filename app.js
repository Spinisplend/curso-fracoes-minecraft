/**
 * FraçõesCraft - Script Principal da Landing Page
 * Implementa:
 * 1. Mini-Game Interativo "Laboratório de Frações"
 * 2. Efeitos Sonoros Retrô / Minecraft via Web Audio API (opcional e leve)
 * 3. Efeito 3D Tilt interativo no Hero
 * 4. Navegação por Abas para Todas as Idades
 * 5. Acordeão de FAQ
 * 6. Modal de Demonstração em Vídeo
 * 7. Gerador de partículas de blocos flutuantes
 */

document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initSoundEffects();
  initHeroTilt();
  initFractionLab();
  initAgeTabs();
  initFaqAccordion();
  initVideoModal();
  initMobileMenu();
  initNavbarScroll();
});

/* ==========================================================================
   1. GERADOR DE PARTÍCULAS DE POEIRA DE BLOCOS FLUTUANTES
   ========================================================================== */
function initParticles() {
  const container = document.getElementById('particles-bg');
  if (!container) return;

  const count = 18;
  const colors = ['#EB9C00', '#C90101', '#565254', '#7A7D7D'];

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.floor(Math.random() * 6) + 4;
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.left = `${Math.random() * 100}vw`;
    p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    p.style.animationDuration = `${Math.random() * 12 + 10}s`;
    p.style.animationDelay = `${Math.random() * 8}s`;
    container.appendChild(p);
  }
}

/* ==========================================================================
   2. EFEITOS SONOROS TÁTEIS VIA WEB AUDIO API (100% Nativo, Zero Delay)
   ========================================================================== */
let audioCtx = null;
let soundEnabled = true;

function initSoundEffects() {
  const toggleBtn = document.getElementById('soundToggleBtn');
  const iconOn = document.getElementById('soundIconOn');
  const iconOff = document.getElementById('soundIconOff');

  if (!toggleBtn) return;

  function updateSoundUI() {
    if (soundEnabled) {
      iconOn.classList.remove('hidden');
      iconOff.classList.add('hidden');
      toggleBtn.title = 'Efeitos sonoros ativados (clique para mutar)';
    } else {
      iconOn.classList.add('hidden');
      iconOff.classList.remove('hidden');
      toggleBtn.title = 'Efeitos sonoros desativados (clique para ativar)';
    }
  }

  toggleBtn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    updateSoundUI();
    if (soundEnabled) {
      playSound('pop');
    }
  });

  // Tocar som sutil em todos os botões CTA e interativos
  document.querySelectorAll('.btn, .preset-btn, .chip, .age-tab-btn, .faq-trigger').forEach(el => {
    el.addEventListener('click', () => {
      playSound('click');
    });
  });
}

function playSound(type = 'click') {
  if (!soundEnabled) return;

  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!audioCtx) {
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const now = audioCtx.currentTime;

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (type === 'click') {
      // Pequeno pop estilo bloco de Minecraft
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.08);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === 'pop') {
      // Pop agudo para o slider
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.09);

      gain.gain.setValueAtTime(0.14, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

      osc.start(now);
      osc.stop(now + 0.09);
    } else if (type === 'chime') {
      // Fanfarra curta de conquista
      osc.type = 'square';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
      osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
      osc.frequency.setValueAtTime(1046.50, now + 0.24); // C6

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);

      osc.start(now);
      osc.stop(now + 0.38);
    }
  } catch (e) {
    // Silencioso se navegador bloquear áudio sem interação prévia
  }
}

/* ==========================================================================
   3. EFEITO 3D TILT NO CARD DO HERO
   ========================================================================== */
function initHeroTilt() {
  const card = document.getElementById('heroTiltCard');
  if (!card) return;

  // Apenas ativa se a tela for maior que tablet
  if (window.innerWidth > 992) {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotateX = (-y / (rect.height / 2)) * 8;
      const rotateY = (x / (rect.width / 2)) * 8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      card.style.transition = 'transform 0.4s ease';
    });

    card.addEventListener('mouseenter', () => {
      card.style.transition = 'none';
    });
  }
}

/* ==========================================================================
   4. MINI-GAME: LABORATÓRIO DE FRAÇÕES
   ========================================================================== */
function initFractionLab() {
  const gridContainer = document.getElementById('inventoryGrid');
  const slider = document.getElementById('fractionRange');
  const sliderValText = document.getElementById('fractionFractionText');
  const chestSummaryBadge = document.getElementById('chestSummaryBadge');
  const rawFracEl = document.getElementById('rawFraction');
  const simpFracEl = document.getElementById('simplifiedFraction');
  const percentEl = document.getElementById('percentFraction');
  const decimalEl = document.getElementById('decimalFraction');
  const feedbackText = document.getElementById('labFeedbackText');
  const materialChips = document.getElementById('materialChips');
  const presetButtons = document.querySelectorAll('.preset-btn');

  if (!gridContainer || !slider) return;

  const TOTAL_SLOTS = 16;
  let currentMaterial = 'gold';

  // Cores e estilos dos blocos
  const materialStyles = {
    gold: { name: 'Ouro', color: '#EB9C00', border: '#b37700', text: 'OURO' },
    emerald: { name: 'Esmeralda', color: '#2ecc71', border: '#219653', text: 'ESM' },
    redstone: { name: 'Redstone', color: '#C90101', border: '#8b0000', text: 'RED' },
    brick: { name: 'Tijolo', color: '#b03a2e', border: '#78281f', text: 'TIJ' },
    diamond: { name: 'Diamante', color: '#00cec9', border: '#0984e3', text: 'DIA' }
  };

  // 1. Criar os 16 slots do baú
  gridContainer.innerHTML = '';
  for (let i = 1; i <= TOTAL_SLOTS; i++) {
    const slot = document.createElement('div');
    slot.className = 'inventory-slot';
    slot.dataset.index = i;
    slot.title = `Slot ${i} de ${TOTAL_SLOTS}`;

    // Permitir clicar diretamente no slot para mudar a fração
    slot.addEventListener('click', () => {
      slider.value = i;
      updateLab(i);
      playSound('pop');
    });

    gridContainer.appendChild(slot);
  }

  // 2. Função de cálculo do Máximo Divisor Comum (MDC) para simplificar frações
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  // 3. Atualizar a exibição visual e cálculos
  function updateLab(activeCount) {
    const val = parseInt(activeCount, 10);
    const slots = gridContainer.querySelectorAll('.inventory-slot');

    // Atualizar slots visuais
    slots.forEach((slot, index) => {
      const idx = index + 1;
      if (idx <= val) {
        slot.classList.add('active');
        const style = materialStyles[currentMaterial];
        slot.innerHTML = `
          <div class="block-item" style="background-color: ${style.color}; border-color: ${style.border};">
            ${style.text}
          </div>
        `;
      } else {
        slot.classList.remove('active');
        slot.innerHTML = '';
      }
    });

    // Simplificação matemática
    const divisor = gcd(val, TOTAL_SLOTS);
    const simpNum = val / divisor;
    const simpDen = TOTAL_SLOTS / divisor;

    // Estatísticas numéricas
    const percentage = Math.round((val / TOTAL_SLOTS) * 100);
    const decimal = (val / TOTAL_SLOTS).toFixed(2);

    // Atualizar texto do slider
    sliderValText.textContent = `${val} de ${TOTAL_SLOTS} blocos (${simpNum}/${simpDen})`;
    chestSummaryBadge.textContent = `Fração: ${val}/${TOTAL_SLOTS}`;

    // Atualizar painéis de números
    rawFracEl.innerHTML = `
      <span class="num">${val}</span>
      <span class="divider">/</span>
      <span class="den">${TOTAL_SLOTS}</span>
    `;

    simpFracEl.innerHTML = `
      <span class="num">${simpNum}</span>
      <span class="divider">/</span>
      <span class="den">${simpDen}</span>
    `;

    percentEl.textContent = `${percentage}%`;
    decimalEl.textContent = decimal;

    // Didactic feedback dinâmico
    let explanation = '';
    const matName = materialStyles[currentMaterial].name;

    if (val === 16) {
      explanation = `<strong>Incrível! Você preencheu 16/16 = 1 Inteiro!</strong> Todos os slots de ${matName} foram completados. A fração 16/16 é exatamente igual ao número 1.`;
      playSound('chime');
    } else if (simpNum === 1 && simpDen === 2) {
      explanation = `<strong>Perfeito! 8 de 16 blocos formam exatamente 1/2 (Metade)!</strong> Repare como visualmente 8 blocos cobrem metade do baú. Por isso 8/16 e 1/2 são frações equivalentes!`;
    } else if (simpNum === 1 && simpDen === 4) {
      explanation = `<strong>Muito bem! 4 de 16 é exatamente 1/4 (Um Quarto)!</strong> Divida o baú em 4 partes iguais: cada parte terá 4 blocos de ${matName}.`;
    } else if (simpNum === 3 && simpDen === 4) {
      explanation = `<strong>Ótimo! 12 de 16 representam 3/4 (Três Quartos)!</strong> Você já construiu 75% da sua estrutura de ${matName}, restando apenas 1/4 para completar.`;
    } else if (simpNum === 1 && simpDen === 8) {
      explanation = `<strong>Boa! 2 de 16 simplificam para 1/8 (Um Oitavo)!</strong> Você precisa de 8 conjuntos desse tamanho para fechar o baú inteiro.`;
    } else {
      explanation = `Você selecionou <strong>${val} de 16 blocos</strong> de ${matName}. Ao simplificar dividindo por ${divisor}, encontramos a fração irredutível <strong>${simpNum}/${simpDen}</strong> (${percentage}% do total).`;
    }

    feedbackText.innerHTML = explanation;
  }

  // Event listener do Slider
  slider.addEventListener('input', (e) => {
    updateLab(e.target.value);
    playSound('pop');
  });

  // Event listener dos Botões Pré-definidos
  presetButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetVal = btn.dataset.val;
      slider.value = targetVal;
      updateLab(targetVal);
      playSound('click');
    });
  });

  // Event listener dos Chips de Materiais
  if (materialChips) {
    materialChips.addEventListener('click', (e) => {
      const chip = e.target.closest('.chip');
      if (!chip) return;

      materialChips.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      currentMaterial = chip.dataset.material;
      updateLab(slider.value);
      playSound('click');
    });
  }

  // Inicializar com valor padrão (8 de 16)
  updateLab(slider.value);
}

/* ==========================================================================
   5. NAVEGAÇÃO POR ABAS: PARA TODAS AS IDADES
   ========================================================================== */
function initAgeTabs() {
  const tabButtons = document.querySelectorAll('.age-tab-btn');
  const panels = document.querySelectorAll('.age-panel');

  if (!tabButtons.length || !panels.length) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;

      tabButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });

      panels.forEach(p => {
        p.classList.remove('active');
      });

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const activePanel = document.getElementById(targetId);
      if (activePanel) {
        activePanel.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   6. ACORDEÃO DE PERGUNTAS FREQUENTES (FAQ)
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Fechar outros itens abertos para manter limpo
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherTrigger = otherItem.querySelector('.faq-trigger');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
        }
      });

      // Alternar o item atual
      if (isActive) {
        item.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ==========================================================================
   7. MODAL DE VÍDEO INTERATIVO & PLAYER SIMULADO
   ========================================================================== */
function initVideoModal() {
  const modal = document.getElementById('videoModal');
  const openBtn = document.getElementById('openVideoBtn');
  const heroTrigger = document.getElementById('screenPlayTrigger');
  const closeBtn = document.getElementById('closeVideoModalBtn');
  const playBtn = document.getElementById('ctrlPlayBtn');
  const centerPlay = document.getElementById('stageCenterPlay');
  const progressBar = document.getElementById('ctrlProgressBar');

  if (!modal) return;

  function openModal() {
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden'; // Impede scroll do fundo
    playSound('pop');
  }

  function closeModal() {
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }

  if (openBtn) openBtn.addEventListener('click', openModal);
  if (heroTrigger) heroTrigger.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  // Fechar ao clicar no overlay escuro fora do card
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Fechar com tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hasAttribute('hidden')) {
      closeModal();
    }
  });

  // Player de Vídeo Simulado (Play/Pause e Animação de Barra)
  let isPlaying = false;
  let progress = 35;
  let animTimer = null;

  function togglePlayer() {
    isPlaying = !isPlaying;
    if (isPlaying) {
      playBtn.textContent = '⏸';
      centerPlay.style.display = 'none';
      playSound('pop');

      animTimer = setInterval(() => {
        progress += 0.5;
        if (progress > 100) progress = 0;
        progressBar.style.width = `${progress}%`;
      }, 100);
    } else {
      playBtn.textContent = '▶';
      centerPlay.style.display = 'flex';
      clearInterval(animTimer);
    }
  }

  if (playBtn) playBtn.addEventListener('click', togglePlayer);
  if (centerPlay) centerPlay.addEventListener('click', togglePlayer);
}

/* ==========================================================================
   8. MENU MOBILE
   ========================================================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');

  if (!menuBtn || !navMenu) return;

  menuBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.contains('open');
    if (isOpen) {
      navMenu.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    } else {
      navMenu.classList.add('open');
      menuBtn.setAttribute('aria-expanded', 'true');
    }
  });

  // Fechar menu ao clicar em qualquer link
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ==========================================================================
   9. NAVBAR SCROLL SHADOW
   ========================================================================== */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}
