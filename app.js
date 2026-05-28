// ÍNTIMO — Cupertino Premium
document.addEventListener('DOMContentLoaded', main)

const WA_NUMBER = '573XXXXXXXXX'
const WA_MSG = encodeURIComponent('Hola, quiero información sobre un producto del catálogo ÍNTIMO')

function fmtPrice(n) {
  if (n == null) return null
  return '$' + n.toLocaleString('es-CO')
}

// =============================================
// DATA — 76 productos
// =============================================
const DATA = [
  {id:'juguetes', title:'Juguetes', n:'01', subs:[
    {id:'vib', title:'Vibradores', n:'01', prods:[
      {name:'Vibrador Flesh', price:121000, img:'images/Juguetes/Vibrador Flesh.png',
        desc:'Diseñado para una experiencia realista con vibración ajustable.',
        features:['Vibración ajustable','Silicona médica + ABS','2 baterías AA','Resistente a salpicaduras','Longitud insertable: 15 cm','Grosor: 5 cm','Bala vibradora removible']},
      {name:'Vibrador Lengua «El Marranito»', price:120000, img:'images/Juguetes/Vibrador Lengua Dirty Pig.png',
        desc:'Mini vibrador kawaii, discreto y fácil de llevar.',
        features:['Diseño mini Kawaii','Silicona + ABS','Resistente al agua','Carga USB','30 min carga / 1h uso','6 modos de vibración']},
      {name:'Rosa Luxury', price:180000, img:'images/Juguetes/Vibrador Luxury.png',
        desc:'Estimulador dual con succión y thrusting.',
        features:['10 modos de succión','10 modos de thrusting','Estimulación dual clítoris + punto G','Diseño elegante','Silencioso y potente']},
      {name:'Masajeador Vibrador', price:70900, img:'images/Juguetes/Vibrador Masajeador.png',
        desc:'Vibración regulable y curvatura ergonómica.',
        features:['TPE premium','18.5 cm x 3.8 cm','Vibración regulable','Curvatura ergonómica','Textura realista','2 baterías AA']},
      {name:'Vibrador Neón', price:98000, img:'images/Juguetes/Vibrador Neon.png',
        desc:'Silicona realista con base ventosa manos libres.',
        features:['10 modos de vibración','Base ventosa alta fijación','Silicona suave','Impermeable','17.5 cm']},
      {name:'Vibrador Vincent', price:270000, img:'images/Juguetes/Vibrador Vincent.png',
        desc:'Conejo con motores duales y control por voz.',
        features:['Tipo conejo','Motores duales','12 modos de vibración','Control por voz','Silicona suave','Resistente al agua']},
      {name:'Vibrador EV', price:70900, img:'images/Juguetes/Vibrador Ev.png',
        desc:'Multivelocidades potente y excitante.',
        features:['19 cm total / 16 cm insertable','4 cm ancho','Multivelocidad']},
      {name:'Vibrador Traslúcido', price:79000, img:'images/Juguetes/Vibrador Translucid Color.png',
        desc:'Velocidad variable con diseño translúcido.',
        features:['Velocidad variable','2 baterías AAA','17 cm x 3.7 cm']},
      {name:'Masajeador Fara', price:80000, img:'images/Juguetes/Masajeador  .png',
        desc:'Recargable con 10 funciones de vibración.',
        features:['10 funciones de vibración','Recargable USB','Silicona suave','Cabeza flexible']},
    ]},
    {id:'vib-premium', title:'Vibradores Premium', n:'02', prods:[
      {name:'Bala Vibradora Pink', price:69900, img:'images/Juguetes/Bala Vibradora Pink.png',
        desc:'Recargable, discreta, 10 modos de vibración.',
        features:['Uso externo e interno','Resistente a salpicaduras','10 modos','Recargable USB']},
      {name:'Huevo Estimulador APP069', price:189000, img:'images/Juguetes/Huevo Estimulador.png',
        desc:'Control remoto por app para parejas.',
        features:['Control por app','Múltiples patrones','Compacto','Para parejas a distancia']},
      {name:'Huevo Vibrador Joanne', price:125000, img:'images/Juguetes/Huevo Vibrador Joanne.png',
        desc:'Inalámbrico con 12 modos de vibración.',
        features:['12 modos de vibración','Inalámbrico','Potente y silencioso']},
      {name:'Vibrador Premium Ava', price:149900, img:'images/Juguetes/Vibrador Premium Ava.png',
        desc:'Diseño osito en silicona médica recargable.',
        features:['Silicona médica libre de ftalatos','9 modos de vibración','Recargable USB','Resistente al agua','14 cm x 4.2 cm']},
      {name:'Vibrador Princesa Diamond', price:65000, img:'images/Juguetes/Vibrador Princess Diamond.png',
        desc:'Balita compacta multivelocidad.',
        features:['Múltiples velocidades','Batería AAA','10 cm total / 8 cm insertable','2 cm diámetro']},
      {name:'Vibrador Regina', price:230000, img:'images/Juguetes/Vibrador Regina.png',
        desc:'Pulse Wave con succión estimulante.',
        features:['Sistema Pulse Wave','Pulsación + vibración','Accesorio de succión','Silicona suave','Recargable USB']},
      {name:'Succionador 12 Velocidades', price:209000, img:'images/Juguetes/Succionador 12 Velocidades.png',
        desc:'Succionador de clítoris potente y silencioso.',
        features:['12 velocidades','Silicona médica + ABS','Recargable USB','Waterproof']},
      {name:'Succionador Clítoris Magic', price:220900, img:'images/Juguetes/Succionador de Clítoris Magic.png',
        desc:'12 modos de succión en silicona suave.',
        features:['12 modos de succión','Silicona suave','Recargable']},
    ]},
    {id:'mast', title:'Masturbadores y Huevos', n:'03', prods:[
      {name:'Funda High Quality', price:98000, img:'images/Juguetes/Funda Alta Calidad.png',
        desc:'Funda texturizada de silicona para mayor estimulación.',
        features:['Texturizada','Silicona suave','Fácil de colocar','Ajustable']},
      {name:'Huevo Vagina Funny Egg', price:38900, img:'images/Juguetes/Huevo Vagina Funny Egg.png',
        desc:'6 modelos: vagina, boca y ano. Texturas internas.',
        features:['6 modelos diferentes','Texturas internas','Sensación realista','Discreto']},
      {name:'Masturbador Doble Double Dong', price:99900, img:'images/Juguetes/Masturbador Doble.png',
        desc:'Textura estimulante para 1 o 2 personas.',
        features:['Textura estimulante','Extremos anatómicos','Uso individual o en pareja']},
      {name:'Masturbador RubberWorks', price:125000, img:'images/Juguetes/Masturbador RubberWorks.png',
        desc:'Base ventosa compatible con arnés strap-on.',
        features:['Base ventosa','Compatible strap-on','Manos libres','16.5 cm x 3.8 cm']},
      {name:'Vagina Masturbadora', price:88900, img:'images/Juguetes/Vagina Masturbadora.png',
        desc:'Con vibración y bala removible.',
        features:['Vibración incorporada','Entrada tipo vagina','Bala vibradora extraíble','18 x 6.5 cm']},
    ]},
    {id:'plugs', title:'Plugs, Bolas y Dildos', n:'04', prods:[
      {name:'Bolas Beads', price:70000, img:'images/Juguetes/Bolas Beads.png',
        desc:'Silicona médica con bala vibradora.',
        features:['Silicona médica','Bala vibradora incluida','14.5 cm','Base seguridad']},
      {name:'Bolas My Coolest', price:18000, img:'images/Juguetes/Bolas My Coolest.png',
        desc:'PVC, estimulación progresiva, 30 cm.',
        features:['PVC','30 cm','Flexible']},
      {name:'Enema Anal', price:59000, img:'images/Juguetes/Enema Anal.png',
        desc:'Limpieza vaginal y rectal. Goma médica.',
        features:['89-120 ml','Uso vaginal y rectal','Goma grado médico','Boquilla removible']},
      {name:'Plug Anal Bunny', price:45900, img:'images/Juguetes/Plug Anal Bunny.png',
        desc:'Acero inoxidable + pompón piel sintética.',
        features:['Acero inoxidable','7 cm x 3 cm','Colores: Rosa, Blanco, Azul, Gris, Lila','Ideal principiantes']},
      {name:'Dildo Clear Cock', price:89900, img:'images/Juguetes/Dildo Clear Cock.png',
        desc:'Realista curvo con base ventosa.',
        features:['Diseño curvo','Base ventosa','20 cm total / 18 cm insertable']},
      {name:'Dildo Vidrio', price:70000, img:'images/Juguetes/Dildo Vidrio.png',
        desc:'Cristal resistente con detalle corazón.',
        features:['Cristal resistente','Uso vaginal y anal','Calienta o enfría']},
      {name:'Dildo Big Purple', price:88900, img:'images/Juguetes/Dildo Big Purple.png',
        desc:'Realista con ventosa, 19.5 cm.',
        features:['PVC natural','19.5 cm x 4.5 cm','Ventosa','Texturas realistas']},
      {name:'Dildo Flexible', price:80000, img:'images/Juguetes/Dildo Flexible.png',
        desc:'Silicona suave con poderosa ventosa.',
        features:['Silicona suave','Ventosa','Rosado, Morado, Transparente']},
      {name:'Dildo Masturbador Realista', price:130000, img:'images/Juguetes/Dildo Masturbador Realista.png',
        desc:'Super realista con testículos. Silicona hipoalergénica.',
        features:['Silicona líquida hipoalergénica','15 cm insertable / 19 cm total','4 cm ancho']},
    ]},
    {id:'rings', title:'Anillos', n:'05', prods:[
      {name:'Anillo Stay Hard x3', price:35000, img:'images/Juguetes/Anillo Stay Hard x3.png',
        desc:'Kit 3 anillos silicona. Erecciones más firmes.',
        features:['3 anillos','Talla única','Suaves y flexibles']},
      {name:'Anillo Vibrador', price:15000, img:'images/Juguetes/Anillo Vibrador.png',
        desc:'Micro estimulador para clítoris o testículos.',
        features:['TPR','Micro estimulador','Elástico']},
    ]},
    {id:'accesorios', title:'Accesorios', n:'06', prods:[
      {name:'Cinturón Esposas', price:100000, img:'images/Juguetes/Cinturón Esposas.png',
        desc:'Cuero + metal. Ajustable. Rojo/Negro/Rosado.',
        features:['Cuero y metal','Ajustable','Colores: Rojo, Negro, Rosado']},
      {name:'Esposas Peluche', price:28000, img:'images/Juguetes/Esposas Peluche.png',
        desc:'Metal + peluche intercambiable. Con llaves.',
        features:['Estructura metálica','Peluche intercambiable','Incluye llaves','Talla única']},
      {name:'Látigo Cuero', price:35900, img:'images/Juguetes/Látigo Cuero.png',
        desc:'Cuero con apliques de metal. Múltiples colas.',
        features:['Cuero + metal','Múltiples colas','Negro y Rojo']},
    ]},
  ]},
  {id:'cosmeticos', title:'Cosméticos', n:'02', subs:[
    {id:'lub', title:'Lubricantes', n:'01', prods:[
      {name:'Lubricante Algodón de Azúcar', price:26000, img:'images/Cosméticos/Lubricantes/Lubricante Algodón de Azúcar.png',
        desc:'Caliente sabor algodón de azúcar. 30g.',
        features:['Efecto calor','Sabor algodón de azúcar','pH neutro','Sin azúcar']},
      {name:'Lubricante BonBomBum', price:25000, img:'images/Cosméticos/Lubricantes/Lubricante BonBomBum.png',
        desc:'Base agua, sensación fresca. 30ml.',
        features:['Base agua','Sensación fresca','pH neutro','Sabores: Bombombum y neutro']},
      {name:'Lubricante Caliente Comestible', price:25000, img:'images/Cosméticos/Lubricantes/Lubricante Caliente Comestible 80ml.png',
        desc:'Hot Stuff 80ml. Caliente, comestible, saborizado.',
        features:['Sensación caliente','Comestible','Base agua','80 ml','Sabores surtidos']},
      {name:'Lubricante Chocolate', price:25000, img:'images/Cosméticos/Lubricantes/Lubricante Chocolate.png',
        desc:'Sabor chocolate. pH neutro. Humectante.',
        features:['Sabor chocolate','pH neutro','Humectante','Seguro con preservativos']},
      {name:'Lubricante Electrizante Coffee', price:38000, img:'images/Cosméticos/Lubricantes/Lubricante Electrizante 3 en 1 Coffee Caramel.png',
        desc:'Electric Feel. Café caramelo. Calor + eléctrico.',
        features:['Caliente + electrizante','Sabor café caramelo','Base agua','Sin parabenos']},
      {name:'Lubricante Electrizante Maracuyá', price:38000, img:'images/Cosméticos/Lubricantes/Lubricante Electrizante 3 en 1 Maracuyá.png',
        desc:'Electric Feel. Maracuyá. 3 en 1.',
        features:['Caliente + electrizante','Sabor maracuyá','Base agua','Sin parabenos']},
      {name:'Lubricante Garganta Profunda', price:30000, img:'images/Cosméticos/Lubricantes/Lubricante Garganta Profunda.png',
        desc:'Reduce reflejos. Refrescante.',
        features:['Reduce reflejos','Textura ligera','Sensación refrescante']},
      {name:'Lubricante Neutro Íntimo', price:18000, img:'images/Cosméticos/Lubricantes/Lubricante Neutro Íntimo 20ml.png',
        desc:'Gel Exótico 20ml. Base agua. Tamaño bolsillo.',
        features:['Base agua','Textura sedosa','20 ml']},
      {name:'Lubricante Orgasmen', price:35000, img:'images/Cosméticos/Lubricantes/Lubricante Orgasmen 60ml.png',
        desc:'Oleoso mentolado sabor cacao. 60ml.',
        features:['Mentolado','Sabor cacao','Comestible','60 ml']},
      {name:'Crema Anal Mini', price:15000, img:'images/Cosméticos/Lubricantes/Crema Anal Mini.png',
        desc:'Gel Anal Relax con benzocaína.',
        features:['Con benzocaína','Relajación','Compatible preservativos']},
      {name:'Lubricante Blueberry', price:28000, img:'images/Cosméticos/Lubricantes/Lubricante Blueberry 30ml.png',
        desc:'Ice Gel. Frío/caliente. 30ml.',
        features:['Doble sensación frío/caliente','Base agua','Apto juguetería','30 ml']},
      {name:'Lubricante Comestible Licor', price:21000, img:'images/Cosméticos/Lubricantes/Lubricante Comestible Licor 40ml.png',
        desc:'Licor Lush 40ml. Caliente sabor licor.',
        features:['Efecto caliente','Sabor licor','Comestible','40 ml']},
      {name:'Lubricante Hierbabuena', price:28000, img:'images/Cosméticos/Lubricantes/Lubricante Hierbabuena 30ml.png',
        desc:'Ice Gel. Frío/caliente hierbabuena. 30ml.',
        features:['Doble sensación frío/caliente','Base agua','30 ml']},
      {name:'Lubricante Silicona Anal', price:35000, img:'images/Cosméticos/Lubricantes/Lubricante Silicona Anal 30ml.png',
        desc:'Base silicona + efecto retardante. 29ml.',
        features:['Base silicona','Efecto retardante','29 ml']},
      {name:'Lubricante Tutti Frutti', price:28000, img:'images/Cosméticos/Lubricantes/Lubricante Tutti Frutti 30ml.png',
        desc:'Ice Gel. Frío/caliente tutti frutti. 30ml.',
        features:['Doble sensación frío/caliente','Base agua','30 ml']},
    ]},
    {id:'comestibles', title:'Comestibles', n:'02', prods:[
      {name:'Erotic Balls', price:35000, img:'images/Cosméticos/Comestibles/Erotic Balls.png',
        desc:'Cápsulas afrodisíacas de aceite comestible.',
        features:['Aceite afrodisíaco','Comestible','Para masajes y juegos']},
      {name:'Dulce Polvo Mágico', price:20000, img:'images/Cosméticos/Comestibles/Dulce Polvo Mágico.png',
        desc:'Polvo efervescente comestible para sexo oral.',
        features:['Efervescente','Sexo oral','Sensación única']},
      {name:'Lubricante para Masajes', price:30000, img:'images/Cosméticos/Comestibles/Lubricante para Masajes 40ml.png',
        desc:'Aceite para masajes. 40ml. Fragancias surtidas.',
        features:['Masajes corporales','Fragancias surtidas','40 ml']},
    ]},
    {id:'potenciadores', title:'Potenciadores y Retardantes', n:'03', prods:[
      {name:'Pastilla Emental x10', img:'images/Cosméticos/Potenciadores y Retardantes/Pastilla Emental x10.png',
        desc:'Pastillas potenciadoras de intensidad.'},
      {name:'ZenSativa Retardante', img:'images/Cosméticos/Potenciadores y Retardantes/ZenSativa Retardante.png',
        desc:'Retardante para mayor control y duración.'},
      {name:'Multiorgásmico en Gel 30ml', img:'images/Cosméticos/Potenciadores y Retardantes/Multiorgásmico en Gel 30ml.png',
        desc:'Gel estimulante multiorgásmico.'},
      {name:'Retardante en Spray 3ml', img:'images/Cosméticos/Potenciadores y Retardantes/Retardante en Spray 3ml.png',
        desc:'Spray retardante de acción rápida.'},
    ]},
    {id:'feromonas', title:'Féromonas y Cuidado', n:'04', prods:[
      {name:'Extracto Féromonas', img:'images/Cosméticos/Extracto Féromonas.png',
        desc:'Extracto para aumentar la atracción.'},
      {name:'Gloss con Féromonas', img:'images/Cosméticos/Gloss con Féromonas.png',
        desc:'Gloss labial con feromonas.'},
      {name:'Gel Íntimo con Féromonas', img:'images/Cosméticos/Loción con Féromonas.png',
        desc:'Gel de cuidado íntimo con feromonas.'},
      {name:'Lubricante Vibrador', img:'images/Cosméticos/Lubricante Vibrador.png',
        desc:'Lubricante especial para vibradores.'},
      {name:'Desodorante Vaginal', img:'images/Cosméticos/Desodorante Vaginal.png',
        desc:'Desodorante para cuidado íntimo femenino.'},
    ]},
  ]},
  {id:'juegos', title:'Juegos', n:'03', subs:[
    {id:'juegos-list', title:'Para Romper la Rutina', n:'01', prods:[
      {name:'Dados Penitencia', img:'images/Juegos/Dados Penitencia.png',
        desc:'Dados eróticos con retos y penitencia.'},
      {name:'Juego Erótico', img:'images/Juegos/Juego_Erótico.png',
        desc:'Cartas y retos para explorar sensaciones.'},
    ]},
  ]},
  {id:'lenceria', title:'Lencería', n:'04', subs:[
    {id:'disfraces', title:'Disfraces y Trajes', n:'01', prods:[
      {name:'Enfermera', img:'images/Lencería/Enfermera.png',
        desc:'Disfraz de enfermera sensual.'},
      {name:'Monjita', img:'images/Lencería/Monjita..png',
        desc:'Disfraz de monjita atrevido.'},
      {name:'Traje Sensual', img:'images/Lencería/Traje Sensual.png',
        desc:'Traje sensual de encaje.'},
      {name:'Tanga Pasión Colombia', img:'images/Lencería/Tanga Pasión Colombia.png',
        desc:'Diseño exclusivo.'},
      {name:'Tanga Mariposa', img:'images/Lencería/Tanga Mariposa.png',
        desc:'Diseño mariposa.'},
      {name:'Tanga Corazón', img:'images/Lencería/Tanga Corazón.png',
        desc:'Diseño corazón.'},
    ]},
  ]},
]

function secDesc(id) {
  const m = {juguetes:'Juguetes íntimos seleccionados para el máximo placer',cosmeticos:'Productos de cuidado íntimo para potenciar tu experiencia',juegos:'La excusa perfecta para romper la rutina,',lenceria:'Viste la fantasía'}
  return m[id]||''
}

function subDesc(id) {
  const m = {vib:'Diseños ergonómicos','vib-premium':'Acabados de lujo',mast:'Placer en solitario',plugs:'Sensibilidad y diseño',rings:'El cómplice perfecto',accesorios:'Explora en pareja',lub:'La base del encuentro',comestibles:'Sabores que despiertan',potenciadores:'Controla el tiempo y la intensidad',feromonas:'Atracción natural','juegos-list':'Cartas, dados y retos',disfraces:'Diseños sensuales'}
  return m[id]||''
}

// =============================================
// RENDER
// =============================================
function render() {
  const app = document.getElementById('app')
  const navLinks = document.getElementById('navLinks')

  DATA.forEach((cat, ci) => {
    // Category section
    const sec = document.createElement('section')
    sec.className = 'category' + (ci === 0 ? ' active' : '')
    sec.id = cat.id

    let html = `
      <div class="section-header">
        <span class="section-number">${cat.n.padStart(2,'0')} — ${cat.title}</span>
        <h2 class="section-title">${cat.title}</h2>
        <p class="section-desc">${secDesc(cat.id)}</p>
      </div>`

    cat.subs.forEach(sub => {
      const count = sub.prods.length
      html += `<div class="sub" id="sub-${sub.id}">`
      html += `
        <div class="sub-header">
          <span class="sub-number">${sub.n.padStart(2,'0')}</span>
          <h3 class="sub-title">${sub.title}</h3>
          <span class="sub-count">${count} productos</span>
        </div>
        <div class="bento-grid">`

      sub.prods.forEach((prod, pi) => {
        const formatted = fmtPrice(prod.price)
        html += `
          <div class="product-card" data-cat="${cat.id}" data-sub="${sub.id}" data-idx="${pi}" style="--i:${pi}">
            <div class="product-image">
              <img src="${prod.img}" alt="${prod.name}" loading="lazy">
            </div>
            <div class="product-info">
              <span class="product-name">${prod.name}</span>
              ${formatted
                ? `<span class="product-price">${formatted}</span>`
                : `<span class="product-price-na">Consultar</span>`}
            </div>
          </div>`
      })

      html += `</div></div>`
    })

    sec.innerHTML = html
    app.appendChild(sec)

    // Nav button
    const btn = document.createElement('button')
    btn.className = 'nav-btn' + (ci === 0 ? ' active' : '')
    btn.dataset.tab = cat.id
    btn.textContent = cat.title
    navLinks.appendChild(btn)
  })
}

// =============================================
// NAV
// =============================================
function initNav() {
  const navLinks = document.getElementById('navLinks')

  navLinks.addEventListener('click', e => {
    const btn = e.target.closest('.nav-btn')
    if (!btn) return
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
    document.querySelectorAll('.category').forEach(v => {
      v.classList.remove('active')
      if (v.id === btn.dataset.tab) {
        v.classList.add('active')
        observeSubs()
      }
    })
  })
}

// =============================================
// MODAL
// =============================================
function initModal() {
  const modal = document.getElementById('modal')
  modal.querySelector('.modal-close').addEventListener('click', () => closeModal(modal))
  modal.querySelector('.modal-backdrop').addEventListener('click', () => closeModal(modal))
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal(modal)
  })

  document.getElementById('app').addEventListener('click', e => {
    const card = e.target.closest('.product-card')
    if (!card) return
    openModal(card)
  })
}

function openModal(card) {
  const idx = parseInt(card.dataset.idx)
  const cat = DATA.find(c => c.id === card.dataset.cat)
  if (!cat) return
  const sub = cat.subs.find(s => s.id === card.dataset.sub)
  if (!sub) return
  const prod = sub.prods[idx]
  if (!prod) return

  const modal = document.getElementById('modal')
  const body = document.getElementById('modalBody')
  const formatted = fmtPrice(prod.price)

  body.innerHTML = `
    <img class="modal-img" src="${prod.img}" alt="${prod.name}">
    <h3 class="modal-name">${prod.name}</h3>
    ${formatted ? `<span class="modal-price">${formatted}</span>` : ''}
    <p class="modal-desc">${prod.desc || ''}</p>
    ${prod.features ? `<ul class="modal-features">${prod.features.map(f => `<li>${f}</li>`).join('')}</ul>` : ''}
    <a class="modal-wa" href="https://wa.me/${WA_NUMBER}?text=${WA_MSG}%0A${encodeURIComponent(prod.name)}" target="_blank" rel="noopener">Consultar por WhatsApp</a>
  `
  modal.classList.add('active')
  document.body.style.overflow = 'hidden'
}

function closeModal(modal) {
  modal.classList.remove('active')
  document.body.style.overflow = ''
}

// =============================================
// REVEAL
// =============================================
function observeSubs() {
  const subs = document.querySelectorAll('.category.active .sub')
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
    })
  }, { threshold:.08, rootMargin:'0px 0px -40px 0px' })
  subs.forEach(s => obs.observe(s))
}

// =============================================
// REDUCED MOTION
// =============================================
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.sub').forEach(el => { el.classList.add('visible'); el.style.transition = 'none' })
}

// =============================================
// INIT
// =============================================
function main() {
  render()
  initNav()
  initModal()
  observeSubs()
}
