/* =============================================================
   BANCO DE PREGUNTAS — 20 preguntas (matemáticas, lógica, física)

   Cada objeto tiene:
     id          → identificador único
     imageSrc    → ruta a la imagen de la pregunta (reemplaza según necesites)
     imageAlt    → texto alternativo de accesibilidad
     correctIdx  → índice (0-3) de la opción correcta dentro de options[]
     options     → arreglo de 4 respuestas posibles
============================================================= */
const QUESTION_BANK = [
  {
    id: 1,
    imageSrc: "images/q01.png",
    imageAlt: "Pregunta 1: raíz cuadrada de 144",
    correctIdx: 2,
    options: ["Una Serie", "Una Suma parcial", "Una Sucesión", "Un conjunto"]
  },
  {
    id: 2,
    imageSrc: "images/q02.png",
    imageAlt: "Pregunta 2: tren a 120 km/h recorre 360 km",
    correctIdx: 2,
    options: ["aₙ₊₁ < aₙ para todo n positivo", "aₙ₊₁ = aₙ para todo n positivo.", "aₙ₊₁ > aₙ para todo n positivo", "aₙ₊₁ < aₙ para todo n positivo."]
  },
  {
    id: 3,
    imageSrc: "images/q03.png",
    imageAlt: "Pregunta 3: valor de π a dos decimales",
    correctIdx: 3,
    options: ["Criterio básico de comparación", "Criterio de comparación por límite", "Criterio de la razón", "Criterio de la integral"]
  },
  {
    id: 4,
    imageSrc: "images/q04.png",
    imageAlt: "Pregunta 4: lados de un hexágono",
    correctIdx: 1,
    options: ["Una función continua", "La suma de los términos de una sucesión", "Un conjunto de matrices", "Una desigualdad"]
  },
  {
    id: 5,
    imageSrc: "images/q05.png",
    imageAlt: "Pregunta 5: velocidad de la luz en el vacío",
    correctIdx: 1,
    options: ["Razón", "Suma parcial", "Límite lateral", "Integral impropia"]
  },
  {
    id: 6,
    imageSrc: "images/q06.png",
    imageAlt: "Pregunta 6: serie 2, 4, 8, 16, ?",
    correctIdx: 2,
    options: ["Que el valor absoluto de la razón sea mayor o igual a 1 (|r|≥1)", "Que el primer término a sea igual a 0 independientemente del valor de r", "	Que el valor absoluto de la razón sea estrictamente menor que 1 (|r|<1).", "Que la razón r sea un número entero positivo mayor que 1"]
  },
  {
    id: 7,
    imageSrc: "images/q07.png",
    imageAlt: "Pregunta 7: resultado de 15 al cuadrado menos 100",
    correctIdx: 2,
    options: ["Es una serie infinita convergente cuya suma es igual a 1", "Es una serie que puede converger o divergir dependiendo del valor inicial del índice n", "Es una serie infinita divergente", "Es una serie que converge únicamente si se reescribe utilizando fracciones parciales"]
  },
  {
    id: 8,
    imageSrc: "images/q08.png",
    imageAlt: "Pregunta 8: ángulo interior de triángulo equilátero",
    correctIdx: 0,
    options: ["Se expresa como una diferencia de términos, de tal modo que la mayoría de los términos intermedios se cancelan y la suma queda definida por el primer y el último término", "Todos sus términos intermedios se duplican en cada suma parcial sucesiva debido a sus denominadores", "Exige la aplicación obligatoria de la regla de L’Hôpital para cada término individual de la suma parcial", "Su comportamiento de sumas parciales la vuelve idéntica a una serie geométrica divergente"]
  },
  {
    id: 9,
    imageSrc: "images/q09.png",
    imageAlt: "Pregunta 9: primera ley de Newton",
    correctIdx: 3,
    options: [
      "Se concluye con total certeza que la serie es absolutamente convergente",
      "Se concluye que la serie está determinada como estrictamente divergente",
      "El límite se declara como una forma indeterminada que no tiene valor matemático",
      "El criterio no es concluyente; no determina si la serie converge o diverge (se debe usar otra prueba)"
    ]
  },
  {
    id: 10,
    imageSrc: "images/q10.png",
    imageAlt: "Pregunta 10: cantidad de números primos entre 1 y 20",
    correctIdx: 0,
    options: ["La serie de la resta ∑(aₙ-bₙ) es convergente y su suma teórica equivale exactamente a A-B", "La serie de la suma ∑(aₙ+bₙ) forzosamente diverge debido a la acumulación algebraica de términos", "Al multiplicar una de estas series por cualquier constante real c, la nueva serie ∑caₙ tenderá automáticamente a infinito de forma divergente", "El teorema demuestra que el producto término a término ∑(aₙ⋅bₙ) resulta en una serie convergente de valor igual a A⋅B"]
  },
  {
    id: 11,
    imageSrc: "images/q11.png",
    imageAlt: "Pregunta 11: fórmula de la energía cinética",
    correctIdx: 1,
    options: ["-1 < x < 1", "-1 < x < 3", "-2 < x < 2", "0 < x < 3"]
  },
  {
    id: 12,
    imageSrc: "images/q12.png",
    imageAlt: "Pregunta 12: modus ponens — si P implica Q y P es verdadero",
    correctIdx: 1,
    options: ["Diverge", "Converge y su suma es ½", "Converge y su suma es ½ 1", "Converge y su suma es ½ 5"]
  },
  {
    id: 13,
    imageSrc: "images/q13.png",
    imageAlt: "Pregunta 13: integral indefinida de 2x",
    correctIdx: 0,
    options: ["Sₙ = n/4(n+4); la serie converge y su suma es S = ¼", "Sₙ = ¼ - 1/n+3; la serie converge y su suma es S = ¼", "Sₙ = n/n+3; la serie converge y su suma es S = 1", "Sₙ = 1/3-1/n+4; la serie diverge"]
  },
  {
    id: 14,
    imageSrc: "images/q14.png",
    imageAlt: "Pregunta 14: cuántos milímetros hay en un metro",
    correctIdx: 3,
    options: ["aₙ=(-1)ⁿ⁺¹ n/(n+1)²", "aₙ=n/(n+1)²", "aₙ=(-1)ⁿ n/n²", "aₙ=(-1)ⁿ n/(n+1)²"]
  },
  {
    id: 15,
    imageSrc: "images/q15.png",
    imageAlt: "Pregunta 15: secuencia Fibonacci 0,1,1,2,3,5, siguiente número",
    correctIdx: 2,
    options: ["Diverge", "Converge y su suma es 1/7", "Converge y su suma es 1/6", "Converge y su suma es 7/6"]
  },
  {
    id: 16,
    imageSrc: "images/q16.png",
    imageAlt: "Pregunta 16: derivada de la función seno",
    correctIdx: 1,
    options: ["Converge y su suma es 4", "Converge y su suma es  6", "Converge y su suma es 2", "Diverge"]
  },
  {
    id: 17,
    imageSrc: "images/q17.png",
    imageAlt: "Pregunta 17: unidad de medida de la frecuencia",
    correctIdx: 2,
    options: ["Converge y su suma es 3", "Converge y su suma es 0", "Diverge", "Converge y su suma es 1"]
  },
  {
    id: 18,
    imageSrc: "images/q18.png",
    imageAlt: "Pregunta 18: ecuación 3x + 7 = 22, valor de x",
    correctIdx: 1,
    options: ["Diverge porque p>1", "Converge porque p>1", "Diverge porque p<1", "Converge porque p<1"]
  },
  {
    id: 19,
    imageSrc: "images/q19.png",
    imageAlt: "Pregunta 19: área de un círculo con radio 5",
    correctIdx: 1,
    options: ["converge y su suma es 1", "Converge y su suma es 1/2", "Converge y su suma es 0", "Divrge"]
  },
  {
    id: 20,
    imageSrc: "images/q20.png",
    imageAlt: "Pregunta 20: la ley F = ma corresponde a",
    correctIdx: 0,
    options: [
      "Converge y su suma es e/(e-1)",
      "Converge y su suma es e",
      "Converge y su suma es 1/e",
      "Diverge"
    ]
  }
];

const QUESTIONS_PER_QUIZ = 5;
const OPTION_KEYS = ["A", "B", "C", "D"];

/* =============================================================
   ESTADO GLOBAL DEL QUIZ
============================================================= */
let state = {
  questions:    [],  // 5 preguntas aleatorias del intento actual
  current:      0,   // índice de la pregunta activa
  correctCount: 0,
  wrongCount:   0
};

/* =============================================================
   UTILIDADES
============================================================= */

/** Selecciona n elementos únicos y aleatorios de un arreglo */
function pickRandom(arr, n) {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
}

/** Devuelve emoji, título y mensaje según el puntaje obtenido */
function getResultMeta(correct) {
  if (correct === 5) return { emoji: "🏆", title: "¡Perfecto!",        msg: "Dominaste todas las preguntas." };
  if (correct >= 4) return { emoji: "🎉", title: "¡Excelente!",        msg: "Casi perfecto, sigue así." };
  if (correct >= 3) return { emoji: "👍", title: "¡Bien hecho!",       msg: "Buen resultado, puedes mejorar." };
  if (correct >= 2) return { emoji: "📚", title: "Sigue practicando",  msg: "Repasa los temas y vuelve a intentarlo." };
  return             { emoji: "💪", title: "¡Ánimo!",                  msg: "No te rindas, el conocimiento se construye." };
}

/* =============================================================
   HELPERS DE RENDERIZADO
============================================================= */

/** Referencia al contenedor principal */
function getApp() {
  return document.getElementById("app");
}

/**
 * Transición suave entre pantallas:
 * 1. Anima la salida de la pantalla actual
 * 2. La elimina del DOM
 * 3. Renderiza y agrega la nueva pantalla
 */
function transitionTo(renderFn) {
  const app      = getApp();
  const existing = app.querySelector(".screen");

  if (existing) {
    existing.classList.add("leaving");
    existing.addEventListener("animationend", () => {
      existing.remove();
      app.appendChild(renderFn());
    }, { once: true });
  } else {
    app.appendChild(renderFn());
  }
}

/* =============================================================
   PANTALLA 1: INICIO
============================================================= */
function renderStart() {
  const screen = document.createElement("div");
  screen.className = "screen";
  screen.id = "screen-start";

  screen.innerHTML = `
    <div class="card">
      <span class="badge">⚡ Quiz Interactivo</span>
      <h1>Quiz Cálculo Aplicado Unidad III - Sucesiones y Series Infinitas</h1>
      <p class="subtitle">
        Cada intento presenta 5 preguntas seleccionadas aleatoriamente de un banco de 20.
        Responde con cuidado: las preguntas abarcan sucesiones y series infinitas.
      </p>

      <div class="rules-grid">
        <div class="rule-item">
          <span class="rule-icon">🔀</span>
          <div class="rule-text">
            <strong>Preguntas aleatorias</strong>
            5 de 20, sin repetir en el mismo intento.
          </div>
        </div>
        <div class="rule-item">
          <span class="rule-icon">🎯</span>
          <div class="rule-text">
            <strong>Una sola oportunidad</strong>
            Al elegir, no puedes cambiar tu respuesta.
          </div>
        </div>
        <div class="rule-item">
          <span class="rule-icon">✅</span>
          <div class="rule-text">
            <strong>Retroalimentación inmediata</strong>
            Verás si acertaste o fallaste.
          </div>
        </div>
        <div class="rule-item">
          <span class="rule-icon">📊</span>
          <div class="rule-text">
            <strong>Resultados detallados</strong>
            Puntaje, aciertos y porcentaje al final.
          </div>
        </div>
      </div>

      <button class="btn btn-primary btn-full" id="btn-start">
        Empezar cuestionario &nbsp;→
      </button>
    </div>
  `;

  screen.querySelector("#btn-start").addEventListener("click", startQuiz);
  return screen;
}

/* =============================================================
   PANTALLA 2: CUESTIONARIO
============================================================= */
function renderQuiz() {
  const q     = state.questions[state.current];
  const qNum  = state.current + 1;
  const total = QUESTIONS_PER_QUIZ;
  const pct   = ((qNum - 1) / total) * 100; // progreso ANTES de responder

  const screen = document.createElement("div");
  screen.className = "screen";
  screen.id = "screen-quiz";

  screen.innerHTML = `
    <div class="card">

      <!-- Encabezado fijo + contador -->
      <div class="quiz-header">
        <span class="quiz-label">Responda lo que se solicita</span>
        <span class="quiz-counter">Pregunta ${qNum} de ${total}</span>
      </div>

      <!-- Barra de progreso -->
      <div class="progress-track">
        <div class="progress-fill" id="progress-fill" style="width: ${pct}%"></div>
      </div>

      <!-- Imagen de la pregunta -->
      <div class="question-image-wrapper">
        <img
          id="question-img"
          src="${q.imageSrc}"
          alt="${q.imageAlt}"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
        />
        <p class="img-placeholder-label" style="display:none;">
          📷 Imagen de la pregunta ${qNum}<br>
          <small style="opacity:0.6;">Reemplaza la ruta en <code>imageSrc</code> del banco de preguntas.</small>
        </p>
      </div>

      <!-- Opciones de respuesta -->
      <div class="options-list" id="options-list">
        ${q.options.map((opt, i) => `
          <button class="option-btn" data-idx="${i}">
            <span class="option-key">${OPTION_KEYS[i]}</span>
            <span class="option-text">${opt}</span>
          </button>
        `).join("")}
      </div>

      <!-- Botón "Siguiente" (oculto hasta responder) -->
      <button class="btn btn-primary btn-full" id="btn-next">
        ${qNum < total ? "Siguiente pregunta &nbsp;→" : "Ver resultados &nbsp;→"}
      </button>

    </div>
  `;

  /* Anima la barra de progreso hasta el valor real de esta pregunta */
  requestAnimationFrame(() => {
    const fill = screen.querySelector("#progress-fill");
    if (fill) fill.style.width = (qNum / total * 100) + "%";
  });

  /* Asigna el evento de clic a cada opción */
  const optBtns = screen.querySelectorAll(".option-btn");
  optBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const chosen = parseInt(btn.dataset.idx, 10);
      handleAnswer(chosen, optBtns, q.correctIdx);
    });
  });

  /* Botón para avanzar */
  screen.querySelector("#btn-next").addEventListener("click", advanceQuiz);

  return screen;
}

/* =============================================================
   PANTALLA 3: RESULTADOS
============================================================= */
function renderResults() {
  const correct = state.correctCount;
  const wrong   = state.wrongCount;
  const total   = QUESTIONS_PER_QUIZ;
  const score   = correct * 20;                              // máximo 100 pts
  const pct     = Math.round((correct / total) * 100);
  const meta    = getResultMeta(correct);

  /* Perímetro del anillo SVG: 2π × radio(55) ≈ 345 */
  const circumference = 440;
  const offset = circumference - (pct / 100) * circumference;

  const screen = document.createElement("div");
  screen.className = "screen";
  screen.id = "screen-results";

  screen.innerHTML = `
    <div class="card">

      <!-- Encabezado de resultados -->
      <div class="results-header">
        <span class="score-emoji">${meta.emoji}</span>
        <h2>${meta.title}</h2>
        <p>${meta.msg}</p>
      </div>

      <!-- Anillo animado de porcentaje -->
      <div class="score-ring-wrapper">
        <div class="score-ring">
          <svg width="160" height="160" viewBox="0 0 160 160">
            <defs>
              <linearGradient id="ring-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stop-color="#6c63ff"/>
                <stop offset="100%" stop-color="#a78bfa"/>
              </linearGradient>
            </defs>
            <circle class="score-ring-track" cx="80" cy="80" r="70"/>
            <circle class="score-ring-fill" id="ring-fill"
              cx="80" cy="80" r="70"
              style="stroke-dashoffset: ${circumference};"
            />
          </svg>
          <div class="score-ring-label">
            <span class="score-ring-num">${pct}%</span>
            <span class="score-ring-sub">Aciertos</span>
          </div>
        </div>
      </div>

      <!-- Tarjetas de estadísticas -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-label">Total preguntas</div>
          <div class="stat-value">${total}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Puntaje</div>
          <div class="stat-value">${score}<span style="font-size:14px;color:var(--clr-muted)">/100</span></div>
        </div>
        <div class="stat-card stat-correct">
          <div class="stat-label">Correctas</div>
          <div class="stat-value">${correct}</div>
        </div>
        <div class="stat-card stat-wrong">
          <div class="stat-label">Incorrectas</div>
          <div class="stat-value">${wrong}</div>
        </div>
      </div>

      <!-- Botones de acción -->
      <div class="results-actions">
        <button class="btn btn-primary" id="btn-retry">
          🔀&nbsp; Hacer de nuevo el cuestionario
        </button>
        <button class="btn btn-ghost" id="btn-home">
          ← Regresar a la pantalla de inicio
        </button>
      </div>

    </div>
  `;

  /* Anima el anillo con un pequeño retardo para que la transición sea visible */
  requestAnimationFrame(() => {
    const ring = screen.querySelector("#ring-fill");
    if (ring) setTimeout(() => { ring.style.strokeDashoffset = offset; }, 150);
  });

  /* Lanza confeti si el resultado fue 4 o 5 correctas */
  if (correct >= 4) launchConfetti();

  screen.querySelector("#btn-retry").addEventListener("click", startQuiz);
  screen.querySelector("#btn-home").addEventListener("click", () => transitionTo(renderStart));

  return screen;
}

/* =============================================================
   LÓGICA DEL QUIZ
============================================================= */

/** Inicializa un nuevo intento con 5 preguntas aleatorias */
function startQuiz() {
  state.questions    = pickRandom(QUESTION_BANK, QUESTIONS_PER_QUIZ);
  state.current      = 0;
  state.correctCount = 0;
  state.wrongCount   = 0;
  transitionTo(renderQuiz);
}

/** Evalúa la opción elegida y aplica el feedback visual */
function handleAnswer(chosenIdx, optBtns, correctIdx) {
  /* Deshabilita todos los botones para evitar doble respuesta */
  optBtns.forEach(b => (b.disabled = true));

  const isCorrect = chosenIdx === correctIdx;

  /* Marca la opción elegida */
  optBtns[chosenIdx].classList.add(isCorrect ? "correct" : "wrong");

  if (!isCorrect) {
    /* Revela cuál era la respuesta correcta */
    optBtns[correctIdx].classList.add("correct");
    state.wrongCount++;
  } else {
    state.correctCount++;
  }

  /* Muestra el botón "Siguiente" */
  document.getElementById("btn-next").classList.add("visible");
}

/** Avanza a la siguiente pregunta o a los resultados */
function advanceQuiz() {
  state.current++;
  if (state.current < QUESTIONS_PER_QUIZ) {
    transitionTo(renderQuiz);
  } else {
    transitionTo(renderResults);
  }
}

/* =============================================================
   CONFETI (se activa con 4 o 5 aciertos)
============================================================= */
function launchConfetti() {
  const canvas  = document.getElementById("confetti-canvas");
  const ctx     = canvas.getContext("2d");
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ["#6c63ff", "#a78bfa", "#22c55e", "#f59e0b", "#ec4899", "#38bdf8"];
  const pieces = [];

  for (let i = 0; i < 120; i++) {
    pieces.push({
      x:     Math.random() * canvas.width,
      y:     Math.random() * canvas.height - canvas.height,
      r:     Math.random() * 6 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx:    (Math.random() - 0.5) * 3,
      vy:    Math.random() * 3 + 2,
      angle: Math.random() * Math.PI * 2,
      spin:  (Math.random() - 0.5) * 0.2,
      shape: Math.random() > 0.5 ? "rect" : "circle"
    });
  }

  let frame, elapsed = 0;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pieces.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.fillStyle   = p.color;
      ctx.globalAlpha = Math.max(0, 1 - elapsed / 220);

      if (p.shape === "rect") {
        ctx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();

      p.x     += p.vx;
      p.y     += p.vy;
      p.angle += p.spin;
      p.vy    += 0.05; // gravedad
    });

    elapsed++;

    if (elapsed < 260) {
      frame = requestAnimationFrame(draw);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(frame);
    }
  }

  draw();
}

/* =============================================================
   PUNTO DE ENTRADA — arranca mostrando la pantalla de inicio
============================================================= */
transitionTo(renderStart);
