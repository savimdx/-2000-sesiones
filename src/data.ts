import { BenefitItem, BonusItem, DrillItem, TestimonialItem, FAQItem } from './types';

export const CHECKOUT_URL = "https://pay.hotmart.com/E107379450E?checkoutMode=10";

export const HERO_BULLETS = [
  "+2000 sesiones listas para aplicar en el campo",
  "Ejercicios organizados y fáciles de utilizar",
  "Para diferentes edades y niveles de juego",
  "Acceso digital inmediato y de por vida",
  "Material práctico diseñado para entrenadores"
];

export const RECEIVE_CARDS = [
  {
    id: "rec-1",
    tag: "BIBLIOTECA PRINCIPAL",
    title: "Más de 2000 Sesiones Listas para Aplicar",
    description: "Estructuradas paso a paso: desde el calentamiento dinámico hasta la fase principal con tareas evolutivas y la vuelta a la calma.",
    accent: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
  },
  {
    id: "rec-2",
    tag: "ENFOQUE INTEGRAL",
    title: "Tareas Técnicas, Tácticas y Físicas con Balón",
    description: "Desarrolla la técnica individual, la comprensión táctica colectiva, la velocidad de toma de decisiones y la condición física con balón.",
    accent: "bg-amber-500/10 text-amber-400 border-amber-500/30"
  },
  {
    id: "rec-3",
    tag: "ORGANIZACIÓN EXACTA",
    title: "Sesiones Clasificadas por Objetivos Claros",
    description: "Encuentra la tarea perfecta en segundos: posesión, presión alta, transiciones defensa-ataque, repliegue defensivo o definición a portería.",
    accent: "bg-blue-500/10 text-blue-400 border-blue-500/30"
  },
  {
    id: "rec-4",
    tag: "TODAS LAS EDADES",
    title: "Adaptable desde Fútbol Base hasta Equipos Senior",
    description: "Perfecto para escuelas de iniciación, fútbol formativo (infantil, cadete, juvenil) y categorías de competición amateur o federada.",
    accent: "bg-purple-500/10 text-purple-400 border-purple-500/30"
  },
  {
    id: "rec-5",
    tag: "PROGRESIÓN CONTINUA",
    title: "Diferentes Niveles y Variantes de Dificultad",
    description: "Cada sesión incluye reglas de provocación y variantes prácticas para ajustar la intensidad y dificultad al nivel de tu plantilla.",
    accent: "bg-rose-500/10 text-rose-400 border-rose-500/30"
  },
  {
    id: "rec-6",
    tag: "ACCESO TOTAL",
    title: "Descarga Inmediata y Disponibilidad de por Vida",
    description: "Recibe el acceso completo a tu correo electrónico al instante. Sin cuotas mensuales ni suscripciones adicionales.",
    accent: "bg-gold-500/10 text-amber-400 border-amber-500/30"
  }
];

export const BENEFITS: BenefitItem[] = [
  {
    id: "ben-1",
    title: "Ahorra horas de planificación cada semana",
    description: "Planifica tu semana completa de entrenamientos en minutos y deja de perder tiempo buscando ejercicios dispersos en internet y redes sociales."
  },
  {
    id: "ben-2",
    title: "Sesiones listas para cada entrenamiento",
    description: "Ten sesiones estructuradas paso a paso para cada día: calentamiento dinámico, fase principal con tareas evolutivas y vuelta a la calma."
  },
  {
    id: "ben-3",
    title: "Deja de buscar ejercicios aislados sin rumbo",
    description: "Cuenta con una metodología coherente y progresiva en la que cada tarea responde a un objetivo técnico, táctico y físico real en el campo."
  },
  {
    id: "ben-4",
    title: "Variedad constante para motivar a tus jugadores",
    description: "Accede a un repertorio inagotable de tareas dinámicas y competitivas. Tus jugadores nunca volverán a aburrirse ni a repetir la misma rutina."
  },
  {
    id: "ben-5",
    title: "Mejora el rendimiento individual y colectivo",
    description: "Potencia la toma de decisiones rápida, la técnica bajo presión, la sincronización táctica y la intensidad de juego en cada partido."
  },
  {
    id: "ben-6",
    title: "Entrena con mayor organización y profesionalismo",
    description: "Fichas claras, vectoriales y comprensibles para que llegues al terreno de juego con la seguridad y la autoridad de un entrenador de élite."
  }
];

export const BONUSES: BonusItem[] = [
  {
    id: "bon-1",
    number: 1,
    title: "500 Ejercicios Tácticos para Fútbol Base",
    description: "Colección completa de tareas tácticas y situaciones reales de juego adaptadas al desarrollo formativo en etapas de iniciación y fútbol base.",
    originalPrice: 450,
    tag: "TÁCTICA Y FÚTBOL BASE",
    image: "https://i.ibb.co/r26sb2Tg/Chat-GPT-Image-24-de-set-de-2026-10-26-12.png",
    fallbackImage: "/images/bono_250_fiches.webp",
    fallbackSources: [
      "https://i.ibb.co/r26sb2Tg/Chat-GPT-Image-24-de-set-de-2026-10-26-12.png",
      "/images/bono_250_fiches.webp"
    ]
  },
  {
    id: "bon-2",
    number: 2,
    title: "100 Ejercicios con Balón para Desarrollar la Resistencia en Fútbol",
    description: "Mejora la capacidad aeróbica, la potencia y el fondo físico de tus jugadores sin alejar nunca el balón del entrenamiento.",
    originalPrice: 399,
    tag: "RESISTENCIA CON BALÓN",
    image: "https://i.ibb.co/nMhVd9Sv/Chat-GPT-Image-29-de-ago-de-2026-20-28-37.png",
    fallbackImage: "/images/bono_50_physique.webp",
    fallbackSources: [
      "https://i.ibb.co/nMhVd9Sv/Chat-GPT-Image-29-de-ago-de-2026-20-28-37.png",
      "/images/bono_50_physique.webp"
    ]
  },
  {
    id: "bon-3",
    number: 3,
    title: "60 Ejercicios Físicos con Sólo un Pequeño Equipamiento en Fútbol",
    description: "Optimiza cada sesión con conos, picas, aros y escaleras de ritmo para un trabajo físico completo, dinámico y motivador.",
    originalPrice: 350,
    tag: "PEQUEÑO EQUIPAMIENTO",
    image: "https://i.ibb.co/27R0MsBF/Chat-GPT-Image-29-de-ago-de-2026-20-35-08.png",
    fallbackImage: "/images/bono_petit_materiel.webp",
    fallbackSources: [
      "https://i.ibb.co/27R0MsBF/Chat-GPT-Image-29-de-ago-de-2026-20-35-08.png",
      "/images/bono_petit_materiel.webp"
    ]
  },
  {
    id: "bon-4",
    number: 4,
    title: "24 Plantillas de Entrenamientos de Fútbol",
    description: "Hojas de planificación listas para rellenar, organizar semanas completas, registrar alineaciones, cargas de trabajo y objetivos tácticos.",
    originalPrice: 350,
    tag: "PLANIFICACIÓN Y ESTRUCTURA",
    image: "https://i.ibb.co/cX77hXxq/Chat-GPT-Image-29-de-ago-de-2026-20-37-24.png",
    fallbackImage: "/images/bono_10_semaines.webp",
    fallbackSources: [
      "https://i.ibb.co/cX77hXxq/Chat-GPT-Image-29-de-ago-de-2026-20-37-24.png",
      "/images/bono_10_semaines.webp"
    ]
  },
  {
    id: "bon-5",
    number: 5,
    title: "98 Ejercicios de Entrenamiento de Fútbol de la Selección Española",
    description: "Las tareas, rondos de posesión, transiciones y mecanismos de ataque combinativo inspirados en el modelo de juego de la Selección Española.",
    originalPrice: 499,
    tag: "METODOLOGÍA DE ÉLITE",
    image: "https://i.ibb.co/XkkxWdZ5/comprimida.png",
    fallbackImage: "/images/bono_5.webp",
    fallbackSources: [
      "https://i.ibb.co/XkkxWdZ5/comprimida.png",
      "/images/bono_5.webp"
    ]
  },
  {
    id: "bon-6",
    number: 6,
    title: "+1000 Lecciones en Video de Fútbol",
    description: "Accede a una videoteca masiva con más de 1000 tareas y ejercicios explicados en movimiento: circuitos, tareas técnicas y táctica en acción.",
    originalPrice: 799,
    tag: "VIDEOTECA COMPLETA (+1000 VIDEOS)",
    image: "https://i.ibb.co/bg3pg300/Chat-GPT-Image-29-de-ago-de-2026-20-43-32.png",
    fallbackImage: "/images/bono_1000_videos.webp",
    fallbackSources: [
      "https://i.ibb.co/bg3pg300/Chat-GPT-Image-29-de-ago-de-2026-20-43-32.png",
      "/images/bono_1000_videos.webp",
      "/images/bono_1000_videos.png"
    ]
  },
  {
    id: "bon-7",
    number: 7,
    title: "Preparación Física en el Fútbol",
    description: "Manual completo de acondicionamiento físico moderno: fuerza funcional, velocidad, potencia anaeróbica y protocolos de prevención de lesiones.",
    originalPrice: 450,
    tag: "PREPARACIÓN FÍSICA Y SALUD",
    image: "https://i.ibb.co/FLt4HBRX/Chat-GPT-Image-29-de-ago-de-2026-20-46-58.png",
    fallbackImage: "/images/bono_prep_physique.webp",
    fallbackSources: [
      "https://i.ibb.co/FLt4HBRX/Chat-GPT-Image-29-de-ago-de-2026-20-46-58.png",
      "/images/bono_prep_physique.webp"
    ]
  },
  {
    id: "bon-8",
    number: 8,
    title: "Ejercicios y Mandamientos  de Pep Guardiola",
    description: "La metodología táctica del juego de posición, presión inmediata tras pérdida, superioridades numéricas y triangulaciones al tercer hombre.",
    originalPrice: 399,
    tag: "JUEGO DE POSICIÓN Y PRESIÓN",
    image: "https://i.ibb.co/9HCcjhZt/Chat-GPT-Image-24-de-set-de-2026-10-33-16.png",
    fallbackImage: "/images/bono_guardiola.webp",
    fallbackSources: [
      "https://i.ibb.co/9HCcjhZt/Chat-GPT-Image-24-de-set-de-2026-10-33-16.png",
      "/images/bono_guardiola.webp"
    ]
  },
  {
    id: "bon-9",
    number: 9,
    title: "Ejercicios Adicionales de Fútbol Sala",
    description: "Mejora el control en espacios reducidos, la toma de decisiones instantánea, la precisión bajo presión y las combinaciones rápidas del futsal.",
    originalPrice: 399,
    tag: "ESPACIOS REDUCIDOS Y FÚTBOL SALA",
    image: "https://i.ibb.co/j9BFPsdd/Ejercicios-Adicionales-de-F-tbol-Sala.png",
    fallbackImage: "/images/bono_futsal.webp",
    fallbackSources: [
      "https://i.ibb.co/j9BFPsdd/Ejercicios-Adicionales-de-F-tbol-Sala.png",
      "/images/bono_futsal.webp"
    ]
  },
  {
    id: "bon-10",
    number: 10,
    title: "80 Ejercicios Físicos para el Portero de Fútbol",
    description: "Programa de preparación física específico para guardametas: potencia de salto, agilidad, reflejos visuales, juego aéreo y coordinación específica.",
    originalPrice: 450,
    tag: "ESPECIAL ENTRENAMIENTO DE PORTEROS",
    image: "https://i.ibb.co/svDT74sM/Chat-GPT-Image-29-de-ago-de-2026-22-24-02.png",
    fallbackImage: "/images/bono_gardiens.webp",
    fallbackSources: [
      "https://i.ibb.co/svDT74sM/Chat-GPT-Image-29-de-ago-de-2026-22-24-02.png",
      "/images/bono_gardiens.webp"
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Carlos Mendoza",
    role: "Entrenador Fútbol Base - Sub-15",
    quote: "Antes perdía horas preparando entrenamientos y terminaba repitiendo los mismos ejercicios con conos. Con las +2000 sesiones tengo planificada toda la temporada. El ahorro de tiempo es brutal y los chicos están motivadísimos.",
    rating: 5,
    achievement: "✓ 90% de tiempo ahorrado en planificación",
    avatarSeed: "carlos",
    avatarUrl: "/images/testimonial_1.webp"
  },
  {
    id: "test-2",
    name: "Alejandro Ramos",
    role: "Coordinador de Metodología de Club",
    quote: "Supervisar a 8 categorías del club solía ser un desafío constante. Este pack nos permitió armonizar y diversificar los entrenamientos de todos los equipos. Los entrenadores están guiados y el progreso en los partidos es clarísimo.",
    rating: 5,
    achievement: "✓ Metodología unificada en el club",
    avatarSeed: "andres",
    avatarUrl: "/images/testimonial_2.webp"
  },
  {
    id: "test-3",
    name: "Javier Delgado",
    role: "Profesor de Educación Física y Entrenador",
    quote: "El contenido es increíblemente práctico y visual. No hay rodeos teóricos: vas directo al campo sabiendo exactamente cómo organizar el espacio y qué variantes aplicar. Desde la primera sesión mis jugadores lo notaron.",
    rating: 5,
    achievement: "✓ Aplicación práctica inmediata en el campo",
    avatarSeed: "jose",
    avatarUrl: "/images/testimonial_3.webp"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "¿Cómo recibiré las +2000 sesiones?",
    answer: "El acceso es 100% digital e inmediato. Tras confirmar tu pedido, recibirás un correo electrónico con tus credenciales y enlaces directos para consultar o descargar todas las sesiones y bonos en tu móvil, tablet u ordenador, o imprimirlos en papel."
  },
  {
    id: "faq-2",
    question: "¿Las sesiones son adecuadas para diferentes edades?",
    answer: "Sí, totalmente. Las más de 2000 sesiones están organizadas por objetivos y niveles de dificultad con variantes adaptables, lo que permite aplicarlas tanto en etapas formativas (iniciación, benjamín, alevín, infantil) como en juveniles y fútbol senior competitivo."
  },
  {
    id: "faq-3",
    question: "¿Puedo utilizar las sesiones directamente en el campo?",
    answer: "Por supuesto. Cada ficha está diseñada con diagramas vectoriales claros que muestran la posición de los jugadores, conos, porterías y recorridos del balón, con consignas concisas para que puedas aplicarlas al instante en el césped sin perder tiempo."
  },
  {
    id: "faq-4",
    question: "¿Necesito experiencia previa como entrenador?",
    answer: "No es necesaria una amplia experiencia. Cada tarea viene explicada paso a paso, con sus objetivos y variantes pedagógicas, por lo que resulta ideal tanto para formadores que están empezando como para técnicos experimentados que buscan variedad e innovación."
  },
  {
    id: "faq-5",
    question: "¿Cuánto tiempo tendré acceso al material?",
    answer: "El acceso es de por vida. Una vez descargas el pack, es tuyo para siempre. No existe ninguna cuota mensual ni renovación oculta, e incluye acceso gratuito a todas las futuras actualizaciones que se incorporen al contenido."
  },
  {
    id: "faq-6",
    question: "¿Qué incluye exactamente el pack?",
    answer: "Incluye la biblioteca digital con más de 2000 sesiones de entrenamiento completas (calentamientos, fase principal, variantes de intensidad y vuelta a la calma) para trabajar técnica, táctica, preparación física y toma de decisiones, además de los 10 bonos complementarios de alto valor."
  },
  {
    id: "faq-7",
    question: "¿Los bonos están incluidos?",
    answer: "Sí, los 10 bonos exclusivos están 100% incluidos de forma gratuita con la oferta promocional disponible hoy. Se añadirán de forma automática a tu área de descarga al completar tu pedido."
  }
];

export const CREATOR_INFO = {
  name: "Lucian Sánchez",
  role: "Especialista en Metodología Táctica y Entrenador de Fútbol",
  experience: "+30 Años de Experiencia",
  photoUrl: "/images/author.webp",
  bio: [
    "Hola, soy Lucian Sánchez. Con más de 30 años de experiencia formativa y técnica en los campos de fútbol, he reunido y sintetizado toda mi metodología práctica en esta Biblioteca de +2000 Sesiones de Entrenamiento y Recursos Tácticos.",
    "Mi objetivo es entregarte una herramienta 100% aplicable en el terreno de juego para ahorrarte horas de planificación y potenciar el rendimiento y la competitividad de tus jugadores desde el próximo entrenamiento."
  ],
  credentials: [
    "+30 Años de Experiencia en el Terreno de Juego",
    "+2000 Sesiones y Ejercicios Diseñados",
    "+10.000 Entrenadores Capacitados",
    "Metodología 100% Práctica y Probada"
  ]
};

export const DRILLS: DrillItem[] = [
  {
    id: "drill-1",
    category: "Entrenamiento Técnico",
    title: "Circuito de Conducción, Fintas y Cambios de Dirección",
    description: "Ejercicio dinámico de dominio del balón, fintas corporales rápidas frente a obstáculos pasivos (conos) y aceleración tras giro.",
    objective: "Mejorar la agilidad con balón, la conducción interior/exterior del pie y la velocidad de reacción.",
    organization: "Espacio de 15x15 metros. 4 conos alineados a 1,5 metros de distancia y 2 miniporterías de salida.",
    development: [
      "El jugador inicia en el cono de salida conduciendo a ritmo elevado.",
      "Realiza fintas en eslalon corto tocando el balón con ambas piernas entre los conos centrales.",
      "Al llegar al último cono, ejecuta un giro rápido de 180° y acelera 5 metros para definir en miniportería."
    ],
    variations: [
      "Variante 1: Conducción obligatoria exclusivamente con la pierna menos hábil.",
      "Variante 2: Añadir un defensor semiactivo tras los conos para presionar la salida."
    ],
    players: [
      { x: 50, y: 220, team: 'blue', label: "Salida" },
      { x: 120, y: 130, team: 'cone' },
      { x: 180, y: 130, team: 'cone' },
      { x: 240, y: 130, team: 'cone' },
      { x: 300, y: 130, team: 'cone' },
      { x: 200, y: 215, team: 'ball' },
      { x: 350, y: 80, team: 'red', label: "Gol" },
      { x: 350, y: 180, team: 'red', label: "Gol" }
    ],
    lines: [
      { x1: 55, y1: 210, x2: 110, y2: 135, type: 'dribble' },
      { x1: 120, y1: 130, x2: 180, y2: 130, type: 'dribble' },
      { x1: 180, y1: 130, x2: 240, y2: 130, type: 'dribble' },
      { x1: 240, y1: 130, x2: 300, y2: 130, type: 'dribble' },
      { x1: 300, y1: 130, x2: 350, y2: 90, type: 'run' }
    ]
  },
  {
    id: "drill-2",
    category: "Ejercicios de Pase",
    title: "Triángulo de Pases con Apoyo y Salida de Tercer Hombre",
    description: "Circuito fluido enfocado en el pase raso tenso, control orientado y desmarque de ruptura para crear superioridad.",
    objective: "Optimizar el pase al primer toque, el timing de los desmarques y la búsqueda del tercer hombre a la espalda.",
    organization: "Triángulo equilátero de 12 metros de lado delimitado por conos. Grupos de 5 a 6 jugadores con 1 balón.",
    development: [
      "El jugador A transmite con firmeza al jugador B que apoya hacia el interior.",
      "B descarga al primer toque de cara para el jugador C que llega de frente.",
      "C filtra un pase en profundidad para A, que rompe a la espalda del cono de referencia.",
      "Rotación de puestos: A pasa a B, B pasa a C, y C se incorpora a la posición de A."
    ],
    variations: [
      "Variante 1: Juego obligatorio a un solo toque para todos los participantes.",
      "Variante 2: Invertir el sentido de circulación para exigir el uso de la pierna izquierda."
    ],
    players: [
      { x: 80, y: 200, team: 'blue', label: "A" },
      { x: 320, y: 200, team: 'blue', label: "B" },
      { x: 200, y: 60, team: 'blue', label: "C" },
      { x: 100, y: 195, team: 'ball' },
      { x: 200, y: 140, team: 'cone', label: "Referencia" }
    ],
    lines: [
      { x1: 95, y1: 200, x2: 310, y2: 200, type: 'pass' },
      { x1: 320, y1: 190, x2: 210, y2: 70, type: 'pass' },
      { x1: 200, y1: 70, x2: 100, y2: 180, type: 'pass' }
    ]
  },
  {
    id: "drill-3",
    category: "Definición y Remates",
    title: "Pared en Banda y Remate en Zona de Máximo Peligro",
    description: "Secuencia de juego combinado rápido por carriles laterales con llegada al área y definición frente al portero.",
    objective: "Trabajar la precisión del centro al primer toque, el timing de llegada de segunda línea y el remate a puerta.",
    organization: "Medio campo reglamentario con portería principal y guardameta. Conos en carril derecho para el extremo.",
    development: [
      "El mediocentro filtra balón al extremo que rompe en banda derecha.",
      "El extremo combina en pared rápida con el delantero que descarga fuera del área.",
      "El extremo desborda hasta línea de fondo y pone un centro tenso entre el punto de penalti y el área pequeña.",
      "El delantero centro ataca el espacio libre para anticipar y definir al primer toque frente al portero."
    ],
    variations: [
      "Variante 1: El centro debe ser raso para definición de volea o tiro raso colocado.",
      "Variante 2: Añadir un central defensor activo para disputar el duelo en el área."
    ],
    players: [
      { x: 200, y: 230, team: 'blue', label: "Medio" },
      { x: 340, y: 160, team: 'blue', label: "Extremo" },
      { x: 200, y: 120, team: 'blue', label: "Delantero" },
      { x: 200, y: 30, team: 'red', label: "Portero" },
      { x: 195, y: 215, team: 'ball' },
      { x: 180, y: 70, team: 'cone', label: "Defensor" }
    ],
    lines: [
      { x1: 210, y1: 220, x2: 330, y2: 165, type: 'pass' },
      { x1: 335, y1: 155, x2: 215, y2: 125, type: 'pass' },
      { x1: 215, y1: 120, x2: 200, y2: 45, type: 'run' }
    ]
  },
  {
    id: "drill-4",
    category: "Preparación Física",
    title: "Circuito de Coordinación, Agilidad y Velocidad de Esprint",
    description: "Tarea física integrada a alta intensidad enfocada en aceleración fraccionada, cambios de apoyo y potencia explosiva.",
    objective: "Desarrollar la potencia anaeróbica aláctica, velocidad gestual y coordinación motriz en el campo.",
    organization: "Zona de 20x10 metros. Una escalera de agilidad, 4 minivallas de 30 cm de altura y 3 conos en eslalon.",
    development: [
      "El jugador supera la escalera de agilidad a máxima velocidad con apoyos rápidos (dos apoyos por hueco).",
      "Encadena saltos pies juntos por encima de las 4 minivallas.",
      "Realiza un eslalon explosivo entre los 3 conos en diagonal.",
      "Termina con un esprint al 100% de 10 metros hasta la línea de meta."
    ],
    variations: [
      "Variante 1: Cruce de la escalera de agilidad con pasos laterales cruzados.",
      "Variante 2: Colocar un balón al final del eslalon para encadenar con tiro a miniportería."
    ],
    players: [
      { x: 60, y: 220, team: 'blue', label: "Salida" },
      { x: 120, y: 220, team: 'cone', label: "Valla 1" },
      { x: 160, y: 220, team: 'cone', label: "Valla 2" },
      { x: 200, y: 220, team: 'cone', label: "Valla 3" },
      { x: 250, y: 150, team: 'cone', label: "Eslalon" },
      { x: 290, y: 100, team: 'cone', label: "Eslalon" },
      { x: 350, y: 50, team: 'blue', label: "Meta" }
    ],
    lines: [
      { x1: 70, y1: 220, x2: 110, y2: 220, type: 'run' },
      { x1: 200, y1: 220, x2: 240, y2: 160, type: 'run' },
      { x1: 290, y1: 100, x2: 345, y2: 55, type: 'run' }
    ]
  },
  {
    id: "drill-5",
    category: "Ejercicios Tácticos",
    title: "Ataque Rápido 3 contra 2 con Repliegue Defensivo",
    description: "Situación de contraataque en superioridad numérica donde los atacantes deben finalizar antes del repliegue del 3er defensa.",
    objective: "Desarrollar la toma de decisiones rápida en transición ofensiva, fijación de marcas y gestión de inferioridad en bloque.",
    organization: "Espacio de 40x30 metros con dos porterías reglamentarias. 3 atacantes contra 2 defensores iniciales.",
    development: [
      "El poseedor del balón progresa en conducción rápida mientras sus dos compañeros abren las bandas.",
      "Los 2 defensores temporizan perfilando hacia fuera para frenar la progresión central.",
      "Al mismo tiempo, un 3er defensor situado en mediocampo inicia un repliegue defensivo a máxima velocidad.",
      "Los atacantes deben combinar rápido para definir antes de que el repliegue equilibre la situación a 3 vs 3."
    ],
    variations: [
      "Variante 1: Límite de 3 toques por jugador para acelerar la circulación.",
      "Variante 2: Si los defensas recuperan, pueden contraatacar inmediatamente sobre la portería opuesta."
    ],
    players: [
      { x: 100, y: 130, team: 'blue', label: "A1" },
      { x: 80, y: 60, team: 'blue', label: "A2" },
      { x: 80, y: 200, team: 'blue', label: "A3" },
      { x: 260, y: 100, team: 'red', label: "D1" },
      { x: 260, y: 160, team: 'red', label: "D2" },
      { x: 350, y: 130, team: 'red', label: "Portero" },
      { x: 180, y: 50, team: 'red', label: "D3 (Repliegue)" },
      { x: 115, y: 130, team: 'ball' }
    ],
    lines: [
      { x1: 110, y1: 130, x2: 240, y2: 110, type: 'pass' },
      { x1: 80, y1: 60, x2: 200, y2: 80, type: 'run' },
      { x1: 80, y1: 200, x2: 230, y2: 170, type: 'run' }
    ]
  }
];
