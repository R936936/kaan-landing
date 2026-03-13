export type Lang = 'en' | 'es'

const t = (en: string, es: string) => ({ en, es })

export const tr = {
  nav: {
    kaan: t('KAAN', 'KAAN'),
    properties: t('Properties', 'Propiedades'),
    howToInvest: t('How to Invest', 'Cómo Invertir'),
    howItWorks: t('How It Works', 'Cómo Funciona'),
    faq: t('FAQ', 'FAQ'),
    getEarlyAccess: t('Get Early Access', 'Acceso Anticipado'),
    buyKaan: t('Buy KAAN', 'Comprar KAAN'),
  },
  hero: {
    eyebrow: t('Tulum · Real Yield · Blockchain', 'Tulum · Rendimiento Real · Blockchain'),
    headline1: t('Earn Riviera Maya.', 'Gana con la Riviera Maya.'),
    headline2: t('From Your Wallet.', 'Desde tu Wallet.'),
    subheadlinePre: t(
      'KAAN tokenizes luxury properties in Tulum and the Riviera Maya.',
      'KAAN tokeniza propiedades de lujo en Tulum y la Riviera Maya.'
    ),
    subheadlineHighlight: t(
      'Every rental night, USDC flows to holders.',
      'Cada noche de renta, USDC llega a los holders.'
    ),
    buyKaan: t('Buy KAAN', 'Comprar KAAN'),
    learnMore: t('Learn More', 'Conoce Más'),
    stats: [
      { value: '$300K+', label: t('Properties', 'Propiedades') },
      { value: '~8% APY', label: t('in USDC', 'en USDC') },
      { value: '300,000', label: t('KAAN Supply', 'Tokens KAAN') },
      { value: '🌴', label: t('Riviera Maya', 'Riviera Maya') },
    ],
  },
  kaan: {
    badge: t('Yield Token', 'Token de Rendimiento'),
    title2: t('— Riviera Maya Yield Token', '— Token de Rendimiento Riviera Maya'),
    subtitle: t(
      'Sky in ancient Mayan. A platform backed by sun, sand, and smart contracts.',
      'Cielo en maya antiguo. Una plataforma respaldada por sol, arena y contratos inteligentes.'
    ),
    features: [
      {
        icon: '🏖️',
        title: t('Real Asset', 'Activo Real'),
        description: t(
          'Property #001: 1-bedroom apartment in Amira District, Tulum — river view with direct beach access. As the portfolio grows, every new property increases yield distributed to KAAN holders.',
          'Propiedad #001: departamento de 1 recámara en Amira District, Tulum — vista al río con acceso directo a la playa. Conforme crece el portafolio, cada nueva propiedad suma rendimiento para los holders de KAAN.'
        ),
      },
      {
        icon: '💰',
        title: t('Real Yield', 'Rendimiento Real'),
        description: t(
          'Monthly USDC distributions from AirBnB and Vrbo rental income, managed by Integra 360 property specialists. No governance tokens, no promises — just rent.',
          'Distribuciones mensuales en USDC del ingreso por renta en AirBnB y Vrbo, gestionado por los especialistas de Integra 360. Sin tokens de gobernanza, sin promesas — solo rentas.'
        ),
      },
      {
        icon: '🔐',
        title: t('Real Blockchain', 'Blockchain Real'),
        description: t(
          'Smart contract on Ethereum. Every distribution is on-chain, auditable, and transparent. You own your yield — no intermediary custody required.',
          'Contrato inteligente en Ethereum. Cada distribución está en cadena, es auditable y transparente. Tu rendimiento es tuyo — sin custodia de terceros.'
        ),
      },
    ],
    tokenomics: t('Tokenomics', 'Tokenomics'),
    tokenomicsRows: [
      { label: t('Total Supply', 'Oferta Total'), value: '300,000 KAAN' },
      { label: t('Token Price', 'Precio por Token'), value: '$1.00 USDC' },
      { label: t('Public Sale', 'Venta Pública'), value: '90,000 KAAN ($90,000)' },
      { label: t('Projected APY', 'APY Proyectado'), value: '~8% in USDC' },
      { label: t('Backing Asset', 'Activo Respaldo'), value: '$300,000 Property' },
      { label: t('Manager', 'Gestor'), value: 'Integra 360' },
    ],
    cta: t('Buy KAAN — Join Early Access', 'Comprar KAAN — Acceso Anticipado'),
    disclaimer: t(
      'Smart contract launch date TBA · Not financial advice',
      'Fecha de lanzamiento TBA · No es asesoría financiera'
    ),
  },
  properties: {
    badge: t('Portfolio', 'Portafolio'),
    title: t('Our Properties', 'Nuestras Propiedades'),
    subtitle: t(
      'KAAN is building the largest tokenized real estate portfolio in Riviera Maya. Every property added means more USDC yield for holders.',
      'KAAN construye el portafolio de bienes raíces tokenizados más grande de la Riviera Maya. Cada propiedad sumada significa más USDC para los holders.'
    ),
    active: t('Active', 'Activo'),
    comingSoon: t('Coming Soon', 'Próximamente'),
    propertyNumber: t('Property', 'Propiedad'),
    viewDetails: t('View Details', 'Ver Detalles'),
    properties: [
      {
        number: '#001',
        name: t('Amira District', 'Amira District'),
        location: t('Tulum, Quintana Roo', 'Tulum, Quintana Roo'),
        details: t('1BR · River View · Beach Access', '1 Rec · Vista al Río · Acceso a Playa'),
        value: '$300,000 USD',
        apy: t('~8% APY in USDC', '~8% APY en USDC'),
        status: 'active' as const,
      },
      {
        number: '#002',
        name: t('Aldea Zama', 'Aldea Zama'),
        location: t('Tulum, Quintana Roo', 'Tulum, Quintana Roo'),
        details: t('2BR · Cenote View · Private Pool', '2 Rec · Vista al Cenote · Piscina Privada'),
        value: t('TBA', 'TBA'),
        apy: t('TBA', 'TBA'),
        status: 'coming' as const,
      },
      {
        number: '#003',
        name: t('Playa del Carmen', 'Playa del Carmen'),
        location: t('Quintana Roo', 'Quintana Roo'),
        details: t('3BR · Beachfront · Rooftop', '3 Rec · Frente al Mar · Rooftop'),
        value: t('TBA', 'TBA'),
        apy: t('TBA', 'TBA'),
        status: 'coming' as const,
      },
    ],
  },
  portfolio: {
    badge: t('Join the Portfolio', 'Únete al Portafolio'),
    title: t(
      'Building the largest tokenized real estate portfolio in Riviera Maya',
      'Construyendo el portafolio de bienes raíces tokenizados más grande de la Riviera Maya'
    ),
    subtitle: t(
      'Every property we add increases the yield distributed to KAAN holders. Be part of the portfolio from day one.',
      'Cada propiedad que sumamos incrementa el rendimiento para los holders de KAAN. Sé parte del portafolio desde el primer día.'
    ),
    stats: [
      { value: '$300K+', label: t('Property Value', 'Valor en Propiedades') },
      { value: '1', label: t('Active Property', 'Propiedad Activa') },
      { value: '2', label: t('Properties Coming Soon', 'Propiedades Próximamente') },
    ],
    emailLabel: t('Get notified when new properties launch', 'Recibe notificaciones de nuevas propiedades'),
    emailPlaceholder: t('your@email.com', 'tu@correo.com'),
    emailButton: t('Join Waitlist', 'Únete a la Lista'),
    note: t('First to know = first to invest.', 'Los primeros en saber, primeros en invertir.'),
  },
  howItWorks: {
    badge: t('Simple Process', 'Proceso Simple'),
    title: t('How It Works', 'Cómo Funciona'),
    subtitle: t(
      'Three steps from wallet to Riviera Maya yield',
      'Tres pasos de tu wallet al rendimiento de la Riviera Maya'
    ),
    steps: [
      {
        icon: '🛒',
        title: t('Buy KAAN', 'Comprar KAAN'),
        description: t(
          'Purchase KAAN tokens at $1.00 USDC each during the public sale. Each token represents fractional ownership across our growing Riviera Maya property portfolio.',
          'Compra tokens KAAN a $1.00 USDC cada uno durante la venta pública. Cada token representa propiedad fraccionada en nuestro portafolio creciente de propiedades en la Riviera Maya.'
        ),
        detail: t('Powered by Ethereum smart contracts', 'Impulsado por contratos inteligentes de Ethereum'),
      },
      {
        icon: '🏡',
        title: t('Riviera Maya Earns', 'Riviera Maya Genera'),
        description: t(
          'Integra 360 manages the properties as premium short-term rentals on AirBnB and Vrbo. Professional hospitality, maximum occupancy.',
          'Integra 360 gestiona las propiedades como rentas premium de corto plazo en AirBnB y Vrbo. Hospitalidad profesional, ocupación máxima.'
        ),
        detail: t('Average ~73% occupancy in Tulum', 'Promedio ~73% de ocupación en Tulum'),
      },
      {
        icon: '💸',
        title: t('Yield Arrives', 'Llega el Rendimiento'),
        description: t(
          'Monthly rental revenue is deposited as USDC directly into the smart contract. Holders claim their proportional share at any time.',
          'Los ingresos mensuales por renta se depositan como USDC directamente en el contrato inteligente. Los holders reclaman su parte proporcional cuando quieran.'
        ),
        detail: t('Target ~8% APY in USDC', 'Objetivo ~8% APY en USDC'),
      },
    ],
    auditNote: t(
      'All smart contracts will be open-source and audited before launch',
      'Todos los contratos inteligentes serán de código abierto y auditados antes del lanzamiento'
    ),
  },
  trust: {
    badge: t('Trust & Transparency', 'Confianza y Transparencia'),
    title: t('Built on Real Foundations', 'Construido sobre Bases Reales'),
    subtitle: t(
      'No promises without proof. Every claim backed by verifiable reality.',
      'Sin promesas sin prueba. Cada afirmación respaldada por la realidad verificable.'
    ),
    pillars: [
      {
        icon: '🏖️',
        title: t('Riviera Maya Focus', 'Enfoque en Riviera Maya'),
        description: t(
          "World's fastest growing luxury real estate market. Tulum and Playa del Carmen attract millions of tourists yearly, driving premium rental demand.",
          'El mercado inmobiliario de lujo de más rápido crecimiento del mundo. Tulum y Playa del Carmen atraen millones de turistas al año, impulsando la demanda de rentas premium.'
        ),
        accent: 'gold' as const,
      },
      {
        icon: '📈',
        title: t('15-25% Annual Appreciation', '15-25% Apreciación Anual'),
        description: t(
          'Tulum property values have grown 15-25% annually over the last 5 years. KAAN tokens are backed by assets in one of the fastest appreciating markets in the world.',
          'Los valores de propiedades en Tulum han crecido un 15-25% anual en los últimos 5 años. Los tokens KAAN están respaldados por activos en uno de los mercados de mayor apreciación del mundo.'
        ),
        accent: 'gold' as const,
      },
      {
        icon: '⛓️',
        title: t('Ethereum Blockchain', 'Blockchain Ethereum'),
        description: t(
          'Smart contracts deployed on Ethereum mainnet. Every transaction, distribution, and ownership record is publicly auditable.',
          'Contratos inteligentes desplegados en la red principal de Ethereum. Cada transacción, distribución y registro de propiedad es públicamente auditable.'
        ),
        accent: 'tulum' as const,
      },
      {
        icon: '🏠',
        title: t('Real Property', 'Propiedad Real'),
        description: t(
          'Amira District, Tulum — a physical apartment with verified title. The token is backed by an asset you can visit and touch.',
          'Amira District, Tulum — un departamento físico con escritura verificada. El token está respaldado por un activo que puedes visitar y tocar.'
        ),
        accent: 'tulum' as const,
      },
    ],
    statsRow: [
      { value: t('2025', '2025'), label: t('Target Launch', 'Lanzamiento') },
      { value: t('Ethereum', 'Ethereum'), label: t('Network', 'Red') },
      { value: t('Pre-launch', 'Pre-lanzamiento'), label: t('Audits', 'Auditorías') },
      { value: t('Self-sovereign', 'Auto-custodia'), label: t('Custody', 'Custodia') },
    ],
  },
  faq: {
    badge: t('Questions', 'Preguntas'),
    title: t('Frequently Asked', 'Preguntas Frecuentes'),
    items: [
      {
        question: t('What is KAAN?', '¿Qué es KAAN?'),
        answer: t(
          'KAAN is a tokenized real estate platform focused on luxury properties in Tulum and the Riviera Maya. "KAAN" means "sky" in ancient Mayan. The platform starts with Property #001 — a 1-bedroom apartment in Amira District, Tulum — and grows into a portfolio of multiple properties. Each KAAN token represents a fractional economic interest in the entire portfolio, entitling holders to a proportional share of rental income paid in USDC.',
          'KAAN es una plataforma de bienes raíces tokenizados enfocada en propiedades de lujo en Tulum y la Riviera Maya. "KAAN" significa "cielo" en maya antiguo. La plataforma comienza con la Propiedad #001 — un departamento de 1 recámara en Amira District, Tulum — y crece hacia un portafolio de múltiples propiedades. Cada token KAAN representa una participación económica fraccionada en todo el portafolio, con derecho a una parte proporcional de los ingresos por renta pagados en USDC.'
        ),
      },
      {
        question: t('How do I receive yield?', '¿Cómo recibo el rendimiento?'),
        answer: t(
          'Monthly rental revenue from KAAN properties is converted to USDC and deposited into a smart contract on Ethereum. As a KAAN holder, you can claim your proportional share at any time directly from the contract — no third-party custody, no waiting period.',
          'Los ingresos mensuales por renta de las propiedades KAAN se convierten a USDC y se depositan en un contrato inteligente en Ethereum. Como holder de KAAN, puedes reclamar tu parte proporcional en cualquier momento directamente del contrato — sin custodia de terceros, sin períodos de espera.'
        ),
      },
      {
        question: t('What is USDC?', '¿Qué es USDC?'),
        answer: t(
          'USDC (USD Coin) is a fully-backed stablecoin pegged 1:1 to the US Dollar, issued by Circle. It is one of the most trusted and regulated digital dollar instruments available. All yield distributions for KAAN are denominated in USDC, meaning your rental income arrives as stable US dollars — not in a volatile crypto asset.',
          'USDC (USD Coin) es una stablecoin totalmente respaldada y anclada 1:1 al Dólar Americano, emitida por Circle. Es uno de los instrumentos de dólar digital más confiables y regulados disponibles. Todas las distribuciones de rendimiento de KAAN están denominadas en USDC, lo que significa que tus ingresos por renta llegan como dólares americanos estables.'
        ),
      },
      {
        question: t('Why Riviera Maya?', '¿Por qué la Riviera Maya?'),
        answer: t(
          "The Riviera Maya is one of the world's fastest-growing luxury real estate markets. Tulum, Playa del Carmen, and Akumal attract over 10 million tourists per year with property values appreciating 15-25% annually. High rental occupancy (averaging ~73% in Tulum) combined with rising property values makes this one of the strongest markets for yield-bearing real estate.",
          'La Riviera Maya es uno de los mercados inmobiliarios de lujo de mayor crecimiento en el mundo. Tulum, Playa del Carmen y Akumal atraen más de 10 millones de turistas al año, con valores de propiedades apreciándose un 15-25% anual. La alta ocupación de rentas (promedio ~73% en Tulum) combinada con el aumento del valor de las propiedades hace de este uno de los mercados más sólidos para bienes raíces con rendimiento.'
        ),
      },
      {
        question: t('Is this regulated?', '¿Está regulado?'),
        answer: t(
          'KAAN is an experimental token currently in development. We are actively working with legal counsel to ensure compliance with applicable securities and digital asset regulations in relevant jurisdictions. This is not financial advice. Always conduct your own research (DYOR) before making any investment decisions.',
          'KAAN es un token experimental actualmente en desarrollo. Trabajamos activamente con asesores legales para garantizar el cumplimiento con las regulaciones de valores y activos digitales aplicables en las jurisdicciones relevantes. Esto no es asesoría financiera. Siempre realiza tu propia investigación (DYOR) antes de tomar decisiones de inversión.'
        ),
      },
      {
        question: t('When does KAAN launch?', '¿Cuándo lanza KAAN?'),
        answer: t(
          'KAAN is targeting a launch in 2025. Smart contracts are under development and will be audited before mainnet deployment. Join the early access list to receive launch notifications, whitelist priority, and pre-sale access.',
          'KAAN tiene como objetivo lanzar en 2025. Los contratos inteligentes están en desarrollo y serán auditados antes del despliegue en la red principal. Únete a la lista de acceso anticipado para recibir notificaciones de lanzamiento, prioridad en la lista blanca y acceso a la preventa.'
        ),
      },
    ],
  },
  footer: {
    description: t(
      'Tokenized real estate platform for the Riviera Maya. Real assets, real blockchain.',
      'Plataforma de bienes raíces tokenizados para la Riviera Maya. Activos reales, blockchain real.'
    ),
    tokensTitle: t('Platform', 'Plataforma'),
    companyTitle: t('Company', 'Empresa'),
    legalTitle: t('Legal', 'Legal'),
    links: {
      kaanToken: t('KAAN Token', 'Token KAAN'),
      properties: t('Properties', 'Propiedades'),
      howItWorks: t('How It Works', 'Cómo Funciona'),
      faq: t('FAQ', 'FAQ'),
      about: t('About', 'Nosotros'),
      contact: t('Contact', 'Contacto'),
      privacy: t('Privacy Policy', 'Política de Privacidad'),
      terms: t('Terms of Use', 'Términos de Uso'),
    },
    cta: {
      title: t('Ready to earn from Riviera Maya?', '¿Listo para ganar con la Riviera Maya?'),
      subtitle: t(
        'Join the early access list — no commitment required.',
        'Únete a la lista de acceso anticipado — sin compromiso.'
      ),
      button: t('Get Early Access', 'Acceso Anticipado'),
    },
    disclaimer: t(
      'KAAN is an experimental token currently in development. Nothing on this website constitutes financial, investment, or legal advice. Cryptocurrencies and tokenized assets involve significant risk, including the potential loss of all invested capital. DYOR (Do Your Own Research). Not available to US persons or residents of restricted jurisdictions.',
      'KAAN es un token experimental actualmente en desarrollo. Nada en este sitio web constituye asesoría financiera, de inversión o legal. Las criptomonedas y los activos tokenizados implican riesgos significativos, incluyendo la posible pérdida total del capital invertido. DYOR (Haz tu Propia Investigación). No disponible para personas de EE.UU. o residentes de jurisdicciones restringidas.'
    ),
    copyright: t('All rights reserved.', 'Todos los derechos reservados.'),
  },
  modal: {
    kaan: {
      title: t('Get Early Access to KAAN', 'Acceso Anticipado a KAAN'),
      subtitle: t(
        'Join the whitelist for priority allocation in the KAAN public sale. Monthly USDC from Riviera Maya rentals — first come, first served.',
        'Únete a la lista blanca para asignación prioritaria en la venta pública de KAAN. USDC mensual de rentas en la Riviera Maya — por orden de llegada.'
      ),
      button: t('Join KAAN Whitelist', 'Unirme a la Lista de KAAN'),
      tag: t('🏖️ KAAN Token', '🏖️ Token KAAN'),
    },
    portfolio: {
      title: t('Join Our Property Waitlist', 'Únete a la Lista de Propiedades'),
      subtitle: t(
        'Be first to know when new properties are added to the KAAN portfolio. New properties mean more yield distributed to holders.',
        'Sé el primero en saber cuando se agreguen nuevas propiedades al portafolio KAAN. Nuevas propiedades significan más rendimiento para los holders.'
      ),
      button: t('Join Property Waitlist', 'Unirme a la Lista de Propiedades'),
      tag: t('🏘️ Portfolio', '🏘️ Portafolio'),
    },
    general: {
      title: t('Get Early Access', 'Acceso Anticipado'),
      subtitle: t(
        'Stay ahead of the KAAN launch. Priority allocation, early pricing, and new property launches delivered to your inbox.',
        'Mantente al frente del lanzamiento de KAAN. Asignación prioritaria, precios anticipados y lanzamientos de nuevas propiedades directo a tu correo.'
      ),
      button: t('Join Waitlist', 'Únete a la Lista'),
      tag: t('🌴 Early Access', '🌴 Acceso Anticipado'),
    },
    success: {
      title: t("You're on the list!", '¡Estás en la lista!'),
      subtitle: t(
        "We'll reach out with launch details, whitelist access, and early pricing.",
        'Te contactaremos con detalles del lanzamiento, acceso a la lista blanca y precios anticipados.'
      ),
      button: t('Got it ✓', 'Entendido ✓'),
    },
    emailLabel: t('Email Address', 'Correo Electrónico'),
    emailPlaceholder: t('you@example.com', 'tu@correo.com'),
    loading: t('Joining...', 'Uniéndome...'),
    noSpam: t(
      'No spam. No selling your data. Unsubscribe anytime.',
      'Sin spam. No vendemos tus datos. Cancela cuando quieras.'
    ),
    errorMsg: t(
      'Please enter a valid email address.',
      'Por favor ingresa un correo electrónico válido.'
    ),
  },
  investmentModels: {
    badge: t('Two Ways to Earn', 'Dos Formas de Ganar'),
    title: t('Two Investment Categories', 'Dos Categorías de Inversión'),
    subtitle: t(
      'KAAN offers two distinct ways to earn from Riviera Maya real estate — choose the strategy that fits your goals.',
      'KAAN ofrece dos formas distintas de ganar con bienes raíces en la Riviera Maya — elige la estrategia que se adapte a tus objetivos.'
    ),
    yield: {
      badge: t('Rental Income', 'Ingreso por Renta'),
      icon: '🏖️',
      title: t('KAAN Yield', 'KAAN Yield'),
      subtitle: t('Earn Monthly USDC from Airbnb & Vrbo', 'Gana USDC Mensual de Airbnb & Vrbo'),
      description: t(
        'Buy KAAN tokens and receive your proportional share of monthly rental income in USDC — directly to your wallet. Fully passive.',
        'Compra tokens KAAN y recibe tu parte proporcional de los ingresos mensuales por renta en USDC — directamente a tu wallet. Completamente pasivo.'
      ),
      steps: [
        t('Buy KAAN tokens at $1.00 USDC each', 'Compra tokens KAAN a $1.00 USDC cada uno'),
        t('Integra 360 manages Airbnb & Vrbo rentals', 'Integra 360 gestiona las rentas de Airbnb & Vrbo'),
        t('Monthly USDC deposited to smart contract', 'USDC mensual depositado al contrato inteligente'),
        t('Claim your share anytime from your wallet', 'Reclama tu parte cuando quieras desde tu wallet'),
      ],
      metric: t('~8% APY', '~8% APY'),
      metricLabel: t('Projected in USDC', 'Proyectado en USDC'),
      tag: t('Passive Income', 'Ingreso Pasivo'),
      cta: t('Join Waitlist', 'Únete a la Lista'),
    },
    equity: {
      badge: t('Property Sale Share', 'Participación en Venta'),
      icon: '📈',
      title: t('KAAN Equity', 'KAAN Equity'),
      subtitle: t('Share in Property Sale Proceeds', 'Participa en las Ganancias de la Venta'),
      description: t(
        'Buy KAAN tokens tied to a specific property. When the property is sold, token holders receive their proportional share of the sale proceeds in USDC.',
        'Compra tokens KAAN vinculados a una propiedad específica. Cuando la propiedad se vende, los holders reciben su parte proporcional de los ingresos de la venta en USDC.'
      ),
      steps: [
        t('Buy KAAN tokens linked to a specific property', 'Compra tokens KAAN vinculados a una propiedad específica'),
        t('Property appreciates as Riviera Maya grows', 'La propiedad se valoriza con el crecimiento de Riviera Maya'),
        t('Sale triggered by vote or market conditions', 'Venta activada por votación o condiciones de mercado'),
        t('USDC sale proceeds distributed proportionally', 'Ingresos de venta en USDC distribuidos proporcionalmente'),
      ],
      metric: t('Capital Appreciation', 'Apreciación de Capital'),
      metricLabel: t('Long-term Riviera Maya growth', 'Crecimiento a largo plazo en Riviera Maya'),
      tag: t('Long-Term Play', 'Inversión a Largo Plazo'),
      cta: t('Learn More', 'Conoce Más'),
    },
  },
}

export type TrType = typeof tr
