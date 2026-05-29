// ÍNTIMO — Cupertino Premium
document.addEventListener('DOMContentLoaded', main)

const WA_NUMBER = '573153461463'
const WA_MSG = encodeURIComponent('Hola, quiero información sobre un producto del catálogo ÍNTIMO')

function fmtPrice(n) {
  if (n == null) return null
  return '$' + n.toLocaleString('es-CO')
}

// =============================================
// DATA — 76 productos con info completa
// =============================================
const DATA = [
  {id:'juguetes', title:'Juguetes', n:'01', subs:[
    {id:'vib', title:'Vibradores', n:'01', prods:[
      {name:'Vibrador Flesh', price:121000, img:'images/Juguetes/Vibrador Flesh.png',
        desc:'Diseñado para quienes buscan una experiencia más realista. Vibración ajustable. Silicona médica y ABS de alta calidad, suave al tacto y cómodo de usar. Incluye testículos para mejor agarre.',
        features:['Vibración ajustable','Silicona médica + ABS','2 baterías AA (no incluidas)','Resistente a salpicaduras','Longitud insertable: 15 cm','Grosor: 5 cm','Bala vibradora removible']},
      {name:'Vibrador Lengua «El Marranito»', price:120000, img:'images/Juguetes/Vibrador Lengua Dirty Pig.png',
        desc:'El regalo perfecto para consentirte o sorprender a esa persona especial. Diseño mini Kawaii, adorable, discreto y fácil de llevar a cualquier lugar. Silicona y ABS de alta calidad, resistente al agua y muy fácil de limpiar. Carga USB.',
        features:['Diseño mini Kawaii','Color rosa','Silicona + ABS','Resistente al agua','Carga USB','30 min carga / 1h autonomía','Luz indicadora de carga','6 modos de vibración']},
      {name:'Rosa Luxury', price:180000, img:'images/Juguetes/Vibrador Luxury.png',
        desc:'Prepárate para disfrutar una experiencia única. Cabezal con 10 modos de succión que estimulan el clítoris de manera suave y placentera. En el otro extremo, poderosa bala con thrusting que estimula el punto G con movimientos rítmicos. Compacta pero intensa.',
        features:['10 modos de succión','10 modos de thrusting','Estimulación dual clítoris + punto G','Diseño elegante y moderno','Potente, silencioso y cómodo','Múltiples modos personalizables']},
      {name:'Masajeador Vibrador', price:70900, img:'images/Juguetes/Vibrador Masajeador.png',
        desc:'TPE premium suave y flexible. Curvatura ergonómica para estimulación dirigida. Textura con detalles realistas y relieves. Vibración regulable mediante control en la base.',
        features:['TPE premium suave y flexible','Longitud total: 18.5 cm','Diámetro: 3.8 cm','Vibración regulable en base','Curvatura ergonómica','Textura realista con relieves','2 baterías AA','Colores: rosa translúcido o tono piel']},
      {name:'Vibrador Neón', price:98000, img:'images/Juguetes/Vibrador Neon.png',
        desc:'Vibrador realista de silicona con 10 funciones de vibración. Base de ventosa de alta fijación para superficies lisas. Impermeable, ideal para usar en la ducha. Silicona suave al tacto y resistente.',
        features:['10 modos de vibración','Diseño realista','Base ventosa alta fijación','Silicona suave al tacto','Impermeable','Longitud: 17.5 cm']},
      {name:'Vibrador Vincent', price:270000, img:'images/Juguetes/Vibrador Vincent.png',
        desc:'Vibrador tipo conejo con motores duales para estimulación independiente del eje principal y el estimulador de clítoris. 12 modos de vibración. Sistema de control por voz para una experiencia interactiva. Silicona suave, resistente al agua.',
        features:['Tipo conejo','Motores duales','12 modos de vibración','Control independiente de funciones','Control por voz','Silicona suave','Resistente al agua','Diseño ergonómico']},
      {name:'Vibrador EV', price:70900, img:'images/Juguetes/Vibrador Ev.png',
        desc:'Vibrador multivelocidades potente y excitante. Diseño clásico y funcional.',
        features:['Multivelocidad','Largo total: 19 cm','Largo insertable: 16 cm','Ancho: 4 cm']},
      {name:'Vibrador Traslúcido', price:79000, img:'images/Juguetes/Vibrador Translucid Color.png',
        desc:'Vibrador con velocidad variable y diseño translúcido elegante.',
        features:['Velocidad variable','2 baterías AAA','Largo: 17 cm','Ancho: 3.7 cm']},
      {name:'Masajeador Fara', price:80000, img:'images/Juguetes/Masajeador  .png',
        desc:'10 funciones de vibración potentes y silenciosas. Recargable por cable USB. Silicona suave, segura y fácil de limpiar. Cabeza flexible para mayor confort. Ideal para uso individual o en pareja.',
        features:['10 funciones de vibración','Recargable USB','Silicona suave','Cabeza flexible','Uso individual o en pareja']},
    ]},
    {id:'vib-premium', title:'Vibradores Premium', n:'02', prods:[
      {name:'Bala Vibradora Pink', price:69900, img:'images/Juguetes/Bala Vibradora Pink.png',
        desc:'Bala vibradora recargable USB, pequeña y discreta con 10 modos de vibración. Estructura lisa y suave de silicona. Uso externo e interno. Resistente a salpicaduras. Fácil manejo.',
        features:['Uso externo e interno','Resistente a salpicaduras','10 modos de vibración','Recargable USB','Discreta y portátil','Superficie suave y lisa']},
      {name:'Huevo Estimulador APP069', price:189000, img:'images/Juguetes/Huevo Estimulador.png',
        desc:'Diseñado para parejas modernas. Control remoto por aplicación desde cualquier lugar del mundo. Múltiples patrones de vibración ajustables. Tecnología innovadora que combina comodidad, privacidad y placer.',
        features:['Control remoto por app','Múltiples patrones de vibración','Tamaño compacto y discreto','Para parejas a distancia','Tecnología innovadora']},
      {name:'Huevo Vibrador Joanne', price:125000, img:'images/Juguetes/Huevo Vibrador Joanne.png',
        desc:'12 funciones de vibración para explorar diferentes ritmos e intensidades. Inalámbrico, con total comodidad y libertad de movimiento. Potente, práctico y fácil de usar.',
        features:['12 modos de vibración','Inalámbrico','Potente y silencioso','Diferentes intensidades','Diseño moderno y elegante']},
      {name:'Vibrador Premium Ava', price:149900, img:'images/Juguetes/Vibrador Premium Ava.png',
        desc:'Diseño tierno en forma de osito con detalles elegantes. Silicona médica suave, segura y libre de ftalatos. 9 modos de vibración potentes y silenciosos. Recargable USB. Resistente al agua.',
        features:['Diseño osito','Silicona médica libre de ftalatos','9 modos de vibración','Recargable USB','Resistente al agua','Largo: 14 cm | Ancho: 4.2 cm']},
      {name:'Vibrador Princesa Diamond', price:65000, img:'images/Juguetes/Vibrador Princess Diamond.png',
        desc:'Discreta, elegante y perfecta para momentos llenos de placer. Balita vibradora compacta con múltiples velocidades. Diseño práctico y ligero, fácil de llevar a cualquier lugar.',
        features:['Múltiples velocidades','Batería AAA','Diseño práctico y discreto','Largo total: 10 cm','Largo insertable: 8 cm','Diámetro: 2 cm']},
      {name:'Vibrador Regina', price:230000, img:'images/Juguetes/Vibrador Regina.png',
        desc:'Vibrador tipo conejo Pulse Wave de Pretty Love. Silicona suave y sedosa. Sistema de pulsación y vibración intensa. Accesorio de succión para estimulación del clítoris. Batería recargable USB.',
        features:['Sistema Pulse Wave','Pulsación y vibración intensa','Diseño ergonómico curvo','Accesorio de succión','Silicona suave','Recargable USB']},
      {name:'Succionador 12 Velocidades', price:209000, img:'images/Juguetes/Succionador 12 Velocidades.png',
        desc:'12 velocidades de succión potentes y silenciosas. Silicona médica + ABS. Recargable USB. Diseño ergonómico y compacto. Totalmente resistente al agua. Ideal para estimulación del clítoris.',
        features:['12 velocidades de succión','Silicona médica + ABS','Recargable USB','Diseño ergonómico','Waterproof']},
      {name:'Succionador Clítoris Magic', price:220900, img:'images/Juguetes/Succionador de Clítoris Magic.png',
        desc:'Vibrador recargable de succión para estimulación del clítoris con 12 modos. Tacto suave de silicona, el material más noble del mercado erótico. Deja tus momentos de intimidad aún mejores.',
        features:['12 modos de succión','Silicona suave','Recargable','Tacto suave y agradable']},
    ]},
    {id:'mast', title:'Masturbadores y Huevos', n:'03', prods:[
      {name:'Funda High Quality', price:98000, img:'images/Juguetes/Funda Alta Calidad.png',
        desc:'Mejora tus momentos íntimos con esta funda texturizada para mayor estimulación. Diseño cómodo y flexible que se adapta fácilmente. Silicona suave con relieves y texturas que aumentan el placer. Ajuste práctico.',
        features:['Funda texturizada','Silicona suave','Relieves internos','Fácil de colocar','Ajuste adaptable','Reutilizable']},
      {name:'Huevo Vagina Funny Egg', price:38900, img:'images/Juguetes/Huevo Vagina Funny Egg.png',
        desc:'Cada movimiento se amplifica gracias a sus texturas internas. Discreto diseño en forma de huevo con 6 modelos: vagina, boca y ano. Sensación realista. Pequeño, discreto y extremadamente placentero.',
        features:['6 modelos diferentes','Texturas internas únicas','Sensación realista','Discreto y portátil']},
      {name:'Masturbador Doble Double Dong', price:99900, img:'images/Juguetes/Masturbador Doble.png',
        desc:'Disfruta de nuevas sensaciones con textura estimulante y extremos anatómicos. Diseño versátil para una o dos personas al mismo tiempo. Material suave y flexible. Sensación envolvente y placentera.',
        features:['Textura estimulante','Extremos anatómicos','Uso individual o en pareja','Material suave y flexible']},
      {name:'Masturbador RubberWorks', price:125000, img:'images/Juguetes/Masturbador RubberWorks.png',
        desc:'Diseño práctico, cómodo y elegante. Base de ventosa de alta fijación. Compatible con arneses strap-on para uso manos libres. Ideal para principiantes y expertos.',
        features:['Base ventosa alta fijación','Compatible strap-on','Uso manos libres','Longitud: 16.5 cm','Grosor: 3.8 cm']},
      {name:'Vagina Masturbadora', price:88900, img:'images/Juguetes/Vagina Masturbadora.png',
        desc:'Masturbador masculino con vibración, diseño ergonómico y entrada realista tipo vagina. Incluye poderosa bala vibradora extraíble para estimulación adicional. Textura suave y flexible. Ideal solo o en pareja.',
        features:['Vibración incorporada','Diseño ergonómico','Entrada tipo vagina realista','Bala vibradora extraíble','Uso solo o en pareja','Medidas: 18 x 6.5 cm','Pilas bala: 3 x LR44']},
    ]},
    {id:'plugs', title:'Plugs, Bolas y Dildos', n:'04', prods:[
      {name:'Bolas Beads', price:70000, img:'images/Juguetes/Bolas Beads.png',
        desc:'Bolas anales de silicona médica suave y flexible, ideales para estimulación progresiva. Incluyen bala vibradora para intensificar las sensaciones. Base de seguridad tipo barra en O.',
        features:['Silicona médica suave','Bala vibradora incluida','Diseño flexible','Base de seguridad','Largo: 14.5 cm','Ancho: 1.5 a 3.5 cm']},
      {name:'Bolas My Coolest', price:18000, img:'images/Juguetes/Bolas My Coolest.png',
        desc:'Bolas anales con estimulación progresiva. Logra la estimulación y dilatación deseada. Flexibles y cómodas.',
        features:['PVC','Largo: 30 cm','Ancho: 0.5 a 2.5 cm','Flexible']},
      {name:'Enema Anal', price:59000, img:'images/Juguetes/Enema Anal.png',
        desc:'Enema para limpieza vaginal y rectal. Goma de grado médico suave, flexible y resistente. Boquilla removible para fácil limpieza. Te protege de bacterias y reduce el riesgo de infección.',
        features:['Capacidad: 89-120 ml','Uso vaginal y rectal','Goma grado médico','Boquilla removible','Mide 13 cm + boquilla 5.5 cm']},
      {name:'Plug Anal Bunny', price:45900, img:'images/Juguetes/Plug Anal Bunny.png',
        desc:'Acero inoxidable + piel sintética con pompón disponible en Rosa, Blanco, Azul, Gris y Lila. Textura lisa y pulida con tacto frío y elegante. Tamaño pequeño y ergonómico, ideal para principiantes.',
        features:['Acero inoxidable + piel sintética','Tamaño: 7 cm x 3 cm','Pompón: Rosa, Blanco, Azul, Gris, Lila','Textura lisa','Ideal para principiantes','Apto para juegos de rol y fetiches']},
      {name:'Dildo Clear Cock', price:89900, img:'images/Juguetes/Dildo Clear Cock.png',
        desc:'Consolador realista con diseño curvo, textura veteada y cabeza suave. Base de ventosa para superficies lisas o compatible con arnés. Flexible y seguro para la piel.',
        features:['Diseño curvo y veteado','Cabeza suave','Base ventosa','Compatible con arnés','Longitud total: 20 cm','Longitud insertable: 18 cm']},
      {name:'Dildo Vidrio', price:70000, img:'images/Juguetes/Dildo Vidrio.png',
        desc:'Elegante consolador de cristal con detalle de corazón. El cristal puede calentarse o enfriarse para crear sensaciones diferentes. Ideal para estimulación vaginal y anal. Fácil de limpiar.',
        features:['Cristal resistente','Diseño corazón','Uso vaginal y anal','Calienta o enfría','Fácil limpieza']},
      {name:'Dildo Big Purple', price:88900, img:'images/Juguetes/Dildo Big Purple.png',
        desc:'Dildo realista con ventosa y texturas realistas para aumentar el placer. Fuerte ventosa de succión para adherirse a cualquier superficie.',
        features:['PVC natural','Largo: 19.5 cm','Ancho: 4.5 cm','Ventosa de succión','Texturas realistas']},
      {name:'Dildo Flexible', price:80000, img:'images/Juguetes/Dildo Flexible.png',
        desc:'Dildo semi realista con poderosa ventosa para cualquier superficie lisa. Silicona suave con núcleo ergonómico que le permite mantenerse firme. Colores: Rosado, Morado y Transparente.',
        features:['Silicona suave','Ventosa para superficies lisas','Sin testículos','Colores: Rosado, Morado, Transparente']},
      {name:'Dildo Masturbador Realista', price:130000, img:'images/Juguetes/Dildo Masturbador Realista.png',
        desc:'Dildo super realista con testículos. Silicona líquida totalmente hipoalergénica. Espina flexible que te ayudará a alcanzar en todos los ángulos el mayor de los orgasmos.',
        features:['Silicona líquida hipoalergénica','Con testículos','Largo insertable: 15 cm','Largo total: 19 cm','Ancho: 4 cm','Espina flexible']},
    ]},
    {id:'rings', title:'Anillos', n:'05', prods:[
      {name:'Anillo Stay Hard x3', price:35000, img:'images/Juguetes/Anillo Stay Hard x3.png',
        desc:'Kit de 3 anillos de silicona para erecciones más firmes, duraderas y llenas de placer. Suaves, flexibles y fáciles de usar. Perfectos para jugar a solas o en pareja.',
        features:['3 anillos de silicona','Erecciones duraderas','Talla única','Suaves y flexibles','Fáciles de usar']},
      {name:'Anillo Vibrador', price:15000, img:'images/Juguetes/Anillo Vibrador.png',
        desc:'Anillo súper elástico con potente micro estimulador para hacer cosquillas al clítoris o testículos. Orgamos explosivos, divertidos y de larga duración para los dos.',
        features:['TPR','Micro estimulador','Estimula clítoris o testículos','Súper elástico']},
      {name:'Double Ring — Anillo Doble Bala', price:33000, img:'images/Juguetes/AnilloDobleBala.png',
        desc:'Double Ring es un anillo diseñado para satisfacer a ambos en los encuentros sexuales. Sus dos balas vibradoras estimulan testículos al hombre y clítoris a la mujer al mismo tiempo. Placer compartido.',
        features:['Dos balas vibradoras','Estimula testículos y clítoris','Diseño para ambos','Placer en pareja']},
      {name:'Anillo Vibrador Power', price:10000, img:'images/Juguetes/AnilloVibradorPower.png',
        desc:'Su poderosa bala vibradora puede usarse de dos maneras: hacia abajo estimula los testículos, hacia arriba estimula el clítoris. Reutilizable. Éxtasis asegurado.',
        features:['Bala vibradora direccionable','Estimula testículos o clítoris','Reutilizable','Fácil de usar']},
    ]},
    {id:'accesorios', title:'Accesorios', n:'06', prods:[
      {name:'Cinturón Esposas', price:100000, img:'images/Juguetes/Cinturón Esposas.png',
        desc:'Perfecto para juegos de adultos, fiestas y juegos de rol. Cuero y accesorios de metal. Cinturón sexy, esposas y liguero, combinación perfecta. Resistente al agua. Ajustable.',
        features:['Cuero y metal','Ajustable','Colores: Rojo, Negro, Rosado','Resistente al agua','Incluye esposas y liguero']},
      {name:'Esposas Peluche', price:28000, img:'images/Juguetes/Esposas Peluche.png',
        desc:'Esposas de peluche estilo fetish. Estructura metálica resistente con cobertura de peluche suave intercambiable. Sistema de bloqueo estilo policial. Incluye 2 llaves y retén de seguridad.',
        features:['Estructura metálica','Peluche suave intercambiable','Sistema bloqueo seguro','Incluye 2 llaves y retén','Talla única','Ideales para juegos de rol']},
      {name:'Látigo Cuero', price:35900, img:'images/Juguetes/Látigo Cuero.png',
        desc:'Látigo de cuero con apliques de metal, múltiples colas y tamaño ideal. Disponible en Negro y Rojo.',
        features:['Cuero con apliques de metal','Múltiples colas','Colores: Negro y Rojo']},
    ]},
  ]},
  {id:'cosmeticos', title:'Cosméticos', n:'02', subs:[
    {id:'lub', title:'Lubricantes', n:'01', prods:[
      {name:'Lubricante Algodón de Azúcar', price:26000, img:'images/Cosméticos/Lubricantes/Lubricante Algodón de Azúcar.png',
        desc:'Lubricante caliente Cotton Candy 30g. Efecto calor que intensifica la sensibilidad. Delicioso sabor a algodón de azúcar. Textura suave, sedosa y no pegajosa. pH neutro y libre de azúcar. Ideal para explorar nuevas sensaciones.',
        features:['Efecto calor','Sabor algodón de azúcar','Textura suave y sedosa','No pegajoso','Compatible con juguetes','pH neutro','Libre de azúcar','30g']},
      {name:'Lubricante BonBon Bum', price:25000, img:'images/Cosméticos/Lubricantes/Lubricante BonBomBum.png',
        desc:'Lubricante a base de agua con sensación refrescante. pH neutro, humectante, se seca sin dejar residuos. Ideal para usar con condón. 30 ml. Sabores: Bon Bon Bum y neutro.',
        features:['Base agua','Sensación refrescante','pH neutro','Humectante','Sin residuos','Seguro con preservativos','30 ml','Sabores: Bon Bon Bum y neutro']},
      {name:'Lubricante Caliente Comestible', price:25000, img:'images/Cosméticos/Lubricantes/Lubricante Caliente Comestible 80ml.png',
        desc:'Hot Stuff Lubricante Íntimo Caliente 80ml. Sensación caliente que aumenta el placer. Ideal para masajes, juegos y sexo oral. Comestible, saborizado y con aroma suave. Base agua y textura ligera. Sabores surtidos irresistibles.',
        features:['Sensación caliente','Comestible y saborizado','Ideal para masajes y sexo oral','Base agua','Textura ligera','80 ml','Sabores surtidos: fresa, cereza, piña, maracuyá']},
      {name:'Lubricante Chocolate', price:25000, img:'images/Cosméticos/Lubricantes/Lubricante Chocolate.png',
        desc:'Sabor a chocolate que combina placer y frescura. pH neutro, suave con la piel, humectante, se seca sin dejar residuos. Compatible con preservativos. Perfecto para añadir un toque dulce y diferente.',
        features:['Sabor chocolate','pH neutro','Humectante','Sin residuos','Base agua','Seguro con preservativos']},
      {name:'Lubricante Electrizante Coffee', price:38000, img:'images/Cosméticos/Lubricantes/Lubricante Electrizante 3 en 1 Coffee Caramel.png',
        desc:'Electric Feel 3 en 1. Lubrica, efecto caliente y electrizante que intensifica la sensibilidad. Delicioso sabor café caramelo ideal para sexo oral. Base agua, libre de parabenos. Compatible con preservativos y juguetes.',
        features:['Efecto caliente y electrizante','Sabor café caramelo','3 en 1: lubrica, calienta, electriza','Base agua','Sin parabenos','Compatible con preservativos y juguetes']},
      {name:'Lubricante Electrizante Maracuyá', price:38000, img:'images/Cosméticos/Lubricantes/Lubricante Electrizante 3 en 1 Maracuyá.png',
        desc:'Electric Feel 3 en 1. Lubrica, efecto caliente y electrizante que intensifica la sensibilidad. Delicioso sabor maracuyá ideal para sexo oral. Base agua, libre de parabenos. Compatible con preservativos y juguetes.',
        features:['Efecto caliente y electrizante','Sabor maracuyá','3 en 1: lubrica, calienta, electriza','Base agua','Sin parabenos','Compatible con preservativos y juguetes']},
      {name:'Lubricante Garganta Profunda', price:30000, img:'images/Cosméticos/Lubricantes/Lubricante Garganta Profunda.png',
        desc:'Reduce la sensación de rechazo y minimiza reflejos incómodos. Textura suave y ligera que se desliza fácilmente. Sensación refrescante y relajante. Mayor confianza en la intimidad.',
        features:['Reduce reflejos','Textura suave y ligera','Sensación refrescante y relajante','Mayor confianza','Fácil deslizamiento']},
      {name:'Lubricante Neutro Íntimo', price:18000, img:'images/Cosméticos/Lubricantes/Lubricante Neutro Íntimo 20ml.png',
        desc:'Gel Exótico 20ml. Base agua, textura ligera y sedosa que imita los fluidos naturales. Diseñado para ser altamente compatible con las mucosas internas. Tamaño bolsillo, ideal para llevar siempre contigo.',
        features:['Base agua','Textura ligera y sedosa','Compatible con mucosas internas','Tamaño bolsillo 20 ml','Ideal con juguetes']},
      {name:'Lubricante Orgasmen', price:35000, img:'images/Cosméticos/Lubricantes/Lubricante Orgasmen 60ml.png',
        desc:'Lubricante oleoso ideal para ellos. Deliciosa sensación mentolada con rico sabor a cacao suave. Ideal para humectar el miembro viril en juegos previos y masturbación. Textura suave y humectante. Comestible.',
        features:['Oleoso mentolado','Sabor cacao','Comestible','60 ml','Ideal para sexo oral y masturbación','No usar con juguetes de silicona ni preservativos']},
      {name:'Crema Anal Mini', price:15000, img:'images/Cosméticos/Lubricantes/Crema Anal Mini.png',
        desc:'Gel Anal Relax diseñado para facilitar la penetración anal. Con benzocaína para mayor relajación y confort. Ayuda a disminuir la molestia durante la penetración. Compatible con preservativos.',
        features:['Con benzocaína','Relajación y confort','Facilita la penetración anal','Compatible con preservativos','Textura suave']},
      {name:'Lubricante Blueberry', price:28000, img:'images/Cosméticos/Lubricantes/Lubricante Blueberry 30ml.png',
        desc:'Ice Gel de doble sensación: frío al entrar en contacto con la piel y caliente al momento de la fricción. Base agua, apto para juguetería. Ideal para sexo oral. 30 ml. Sabores: Menta, Blueberry, Tutti Frutti, Hierbabuena.',
        features:['Doble sensación frío/caliente','Base agua','Apto con juguetería','Ideal sexo oral','30 ml']},
      {name:'Lubricante Comestible Licor', price:21000, img:'images/Cosméticos/Lubricantes/Lubricante Comestible Licor 40ml.png',
        desc:'Licor Lush 40ml. Calor, sabor y placer en una sola experiencia. Sensación caliente que aumenta el placer. Delicioso sabor a licor. Comestible y seguro. Ideal para juegos previos y sexo oral. Sabores surtidos.',
        features:['Efecto caliente','Sabor a licor','Comestible','Textura suave','40 ml','Sabores surtidos','Ideal para juegos previos']},
      {name:'Lubricante Hierbabuena', price:28000, img:'images/Cosméticos/Lubricantes/Lubricante Hierbabuena 30ml.png',
        desc:'Ice Gel de doble sensación: frío al entrar en contacto con la piel y caliente al momento de la fricción. Base agua, apto para juguetería. Ideal para sexo oral. 30 ml.',
        features:['Doble sensación frío/caliente','Base agua','Apto con juguetería','Ideal sexo oral','30 ml']},
      {name:'Lubricante Silicona Anal', price:35000, img:'images/Cosméticos/Lubricantes/Lubricante Silicona Anal 30ml.png',
        desc:'Lubricante a base de silicona ideal para evitar el dolor en la penetración anal. Efecto retardante para hombres. 29 ml.',
        features:['Base silicona','Efecto retardante','Ideal para penetración anal','29 ml']},
      {name:'Lubricante Tutti Frutti', price:28000, img:'images/Cosméticos/Lubricantes/Lubricante Tutti Frutti 30ml.png',
        desc:'Ice Gel de doble sensación: frío al entrar en contacto con la piel y caliente al momento de la fricción. Base agua, apto para juguetería. Ideal para sexo oral. 30 ml.',
        features:['Doble sensación frío/caliente','Base agua','Apto con juguetería','Ideal sexo oral','30 ml']},
    ]},
    {id:'comestibles', title:'Comestibles', n:'02', prods:[
      {name:'Erotic Balls', price:35000, img:'images/Cosméticos/Comestibles/Erotic Balls.png',
        desc:'Cápsulas afrodisíacas sensuales. Gelatina virgen rellena con aceite afrodisíaco comestible. Ideales para masajes, juegos eróticos y relaciones íntimas. Cápsula se revienta y se esparce el aceite sobre la piel. Estimula y prolonga el placer.',
        features:['Gelatina virgen con aceite afrodisíaco','Comestible','Para sexo vaginal, anal y oral','Masajes eróticos y juegos previos','Estimula y prolonga el placer','Sensación suave, cálida y seductora']},
      {name:'Dulce Polvo Mágico', price:20000, img:'images/Cosméticos/Comestibles/Dulce Polvo Mágico.png',
        desc:'El sexo oral nunca va a volver a ser lo mismo. Polvo comestible para sexo oral con explosiones, pinchazos y estallidos. Dale el máximo placer a tu amante con una experiencia única.',
        features:['Polvo comestible efervescente','Explosión de sabor','Sexo oral','Sensación única de estallidos']},
      {name:'Lubricante para Masajes', price:30000, img:'images/Cosméticos/Comestibles/Lubricante para Masajes 40ml.png',
        desc:'Aceite lubricante para masajes relajantes. Textura suave y deslizante para recorrer cada centímetro del cuerpo. Ideal para jugar, explorar y disfrutar en pareja. Línea Erotic Scence con más de 15 años de experiencia. 40 ml. Fragancias surtidas.',
        features:['Masajes corporales','Sensación suave','Fragancias surtidas','40 ml','Línea Erotic Scence']},
    ]},
    {id:'potenciadores', title:'Potenciadores y Retardantes', n:'03', prods:[
      {name:'Pastilla Emental x10', price:20000, img:'images/Cosméticos/Potenciadores y Retardantes/Pastilla Emental x10.png',
        desc:'EMENTAL — La famosa "píldora del amor". Fórmula natural con L-Arginina, Borojó, Chontaduro, Zinc y vitaminas. Aumenta energía, deseo y rendimiento sexual. Ayuda a lograr erecciones más firmes y duraderas. Ayuda a prevenir la eyaculación precoz. Caja x 6 pastillas. Consumir 1 pastilla 40 minutos antes con abundante agua.',
        features:['Ingredientes naturales: L-Arginina, Borojó, Chontaduro, Zinc y vitaminas','Aumenta energía, deseo y rendimiento','Ayuda a prevenir la eyaculación precoz','Compatible con licor','Caja x 6 pastillas','Consumir 40 min antes con agua']},
      {name:'ZenSativa Retardante', price:38900, img:'images/Cosméticos/Potenciadores y Retardantes/ZenSativa Retardante.png',
        desc:'Disfruta más tiempo con Zensative Retardante. Ayuda a disminuir la sensibilidad masculina, prolongando la relación y aumentando el placer en pareja sin perder la sensación natural. Fácil aplicación y efecto rápido.',
        features:['Ayuda a retrasar la eyaculación','Mayor duración y control','Sensación placentera y segura','Fácil aplicación y efecto rápido','Uso externo únicamente']},
      {name:'Multi Ohh Gel Multiorgásmico', price:29900, img:'images/Cosméticos/Potenciadores y Retardantes/Multiorgásmico en Gel 30ml.png',
        desc:'Multi Ohh de Erotic Scence. Gel multiorgásmico que aumenta la sensibilidad y el placer. Efecto cosquilleo que estimula zonas íntimas con excitación progresiva. Rico sabor a banano. Registro Invima. 30 ml.',
        features:['Efecto estimulante y sensibilizador','Sabor a banano','Textura ligera y suave','30 ml','Registro Invima','Producto seguro']},
      {name:'Minotauro BW Spray Retardante', price:24900, img:'images/Cosméticos/Potenciadores y Retardantes/Retardante en Spray 3ml.png',
        desc:'Minotauro BW Spray Retardante 3ml. Fórmula de rápida acción que ayuda a retrasar la eyaculación sin perder la sensación natural. Mayor control, duración y seguridad. Tamaño práctico y portátil.',
        features:['Ayuda a prolongar la relación','Mayor control y resistencia','Efecto rápido','Fácil aplicación','Tamaño portátil 3ml']},
    ]},
    {id:'feromonas', title:'Féromonas y Cuidado', n:'04', prods:[
      {name:'Extracto Féromonas', price:28900, img:'images/Cosméticos/Extracto Féromonas.png',
        desc:'Despierta atracción, seguridad y magnetismo. Aroma seductor que potencia el encanto natural. Ideal para momentos especiales. Sensación de seguridad y confianza.',
        features:['Aroma seductor y envolvente','Potencia la atracción y el deseo','Ideal para momentos especiales','Sensación de seguridad y confianza']},
      {name:'Gloss con Féromonas', price:34900, img:'images/Cosméticos/Gloss con Féromonas.png',
        desc:'Brilla, seduce y roba miradas. Textura suave, acabado brillante e hidratante. Aroma dulce y envolvente. Potencia tu atractivo natural con feromonas.',
        features:['Efecto brillante e hidratante','Aroma dulce y envolvente','Con feromonas','Labios suaves y luminosos','Ideal para uso diario']},
      {name:'Loción Feromonas', price:39900, img:'images/Cosméticos/Loción con Féromonas.png',
        desc:'Fragancia sensual de Sex Life (Erotic Scence) que estimula los sentidos. Actúa con el calor corporal liberando feromonas naturales. Aumenta la atracción y la confianza personal.',
        features:['Fragancia sensual','Actúa con calor corporal','Feromonas naturales','Aumenta atracción y confianza','Sex Life Erotic Scence']},
      {name:'Delight Pleasure Lubricante Vibrador', price:34900, img:'images/Cosméticos/Lubricante Vibrador.png',
        desc:'Delight Pleasure. Lubricante íntimo con efecto vibrante y cosquilleo que despierta los sentidos. Lubricación sedosa y duradera. Compatible con juguetes y preservativos. No pegajoso. pH íntimo.',
        features:['Efecto vibrante y estimulante','Lubricación sedosa y duradera','Compatible con juguetes y preservativos','No pegajoso','Fórmula pH íntimo']},
      {name:'Desodorante Vaginal', price:30000, img:'images/Cosméticos/Desodorante Vaginal.png',
        desc:'Frescura, seguridad y comodidad durante todo el día. Neutraliza olores sin alterar el equilibrio natural. Fórmula suave para uso íntimo diario.',
        features:['Frescura prolongada','Neutraliza olores','Fórmula suave','Uso íntimo diario','Sensación de limpieza']},
    ]},
  ]},
  {id:'juegos', title:'Juegos', n:'03', subs:[
    {id:'juegos-list', title:'Para Romper la Rutina', n:'01', prods:[
      {name:'Dados Penitencia', price:14900, img:'images/Juegos/Dados Penitencia.png',
        desc:'Convierte cualquier momento en un juego con estos dados eróticos. Cada lanzamiento revela acción, forma y lugar. Ideal para romper la rutina y encender la química en pareja.',
        features:['Ideal para romper la rutina','Juegos divertidos y atrevidos','Perfectos para parejas','Fáciles de usar']},
      {name:'Juego Erótico Escalera', price:50000, img:'images/Juegos/Juego_Erótico.png',
        desc:'La escalera erótica con penitencias salvajes. Ideal para despedidas de soltera y fiestas. Diversión didáctica y entretenida. Diseña, crea e innova con los mejores regalos.',
        features:['Penitencias salvajes','Ideal para despedidas de soltera','Didáctico y entretenido','Para fiestas y reuniones']},
    ]},
  ]},
  {id:'lenceria', title:'Lencería', n:'04', subs:[
    {id:'disfraces', title:'Disfraces y Trajes', n:'01', prods:[
      {name:'Enfermera', img:'images/Lencería/Enfermera.png', desc:'Disfraz de enfermera sensual para juegos de rol.'},
      {name:'Enfermera Dulce', img:'images/Lencería/EnfermeraDulce.png', desc:'Disfraz de enfermera dulce y provocativa.'},
      {name:'Monjita', img:'images/Lencería/Monjita..png', desc:'Disfraz de monjita atrevido para momentos divertidos.'},
      {name:'Traje Sensual', img:'images/Lencería/Traje Sensual.png', desc:'Traje sensual de encaje para ocasiones especiales.'},
      {name:'Colegiala Intelectual', img:'images/Lencería/ColegialaIntelectual.png', desc:'Disfraz de colegiala intelectual y seductora.'},
      {name:'Tanga Pasión Colombia', img:'images/Lencería/Tanga Pasión Colombia.png', desc:'Tanga con diseño exclusivo Pasión Colombia.'},
      {name:'Tanga Mariposa', img:'images/Lencería/Tanga Mariposa.png', desc:'Tanga con delicado diseño de mariposa.'},
      {name:'Tanga Corazón', img:'images/Lencería/Tanga Corazón.png', desc:'Tanga con diseño de corazón, romántica y sensual.'},
    ]},
  ]},
]

function secDesc(id) {
  const m = {juguetes:'Juguetes íntimos seleccionados para el máximo placer',cosmeticos:'Productos de cuidado íntimo para potenciar tu experiencia',juegos:'La excusa perfecta para romper la rutina',lenceria:'Viste la fantasía'}
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
