
export const CULTURAS_GASTRONOMICAS = [
  {
    id: 1,
    nombre: 'Francesa',
    descripcion: 'La cultura gastronómica francesa es conocida en todo el mundo por su exquisitez y sofisticación. La cocina francesa se caracteriza por su énfasis en la calidad de los ingredientes y la meticulosidad en la preparación de cada plato. Desde los famosos croissants y baguettes hasta los deliciosos quesos y vinos, la cocina francesa es una celebración de los sabores refinados y las técnicas culinarias elaboradas.',
    imagen: 'assets/Francesa.jpeg'
  },
  {
    id: 2,
    nombre: 'Mexicana',
    descripcion: 'La cultura gastronómica mexicana es una explosión de sabores y colores. Con una rica herencia indígena y una influencia española, la cocina mexicana ofrece una amplia variedad de platillos picantes y deliciosos. Los tacos, las enchiladas, el guacamole y el chile son solo algunas de las delicias que se pueden encontrar en la cocina mexicana. Además, México es famoso por su tequila y mezcal, que son bebidas tradicionales que acompañan perfectamente las comidas.',
    imagen: 'assets/Mexicana.jpeg'
  },
  {
    id: 3,
    nombre: 'Mediterranea',
    descripcion: 'La cultura gastronómica mediterránea se basa en la dieta tradicional de los países que rodean el Mar Mediterráneo. Esta dieta se caracteriza por ser rica en frutas, verduras, aceite de oliva, pescado y legumbres. Es conocida por ser una de las dietas más saludables del mundo debido a su énfasis en ingredientes frescos y naturales. Los platos mediterráneos como la paella española, la moussaka griega y la pasta italiana son sabrosos y nutritivos.',
    imagen: 'assets/Mediterranea.jpeg'
  },
  {
    id: 4,
    nombre: 'Italiana',
    descripcion: 'La cultura gastronómica italiana es amada en todo el mundo por su simplicidad y sabor auténtico. La cocina italiana se destaca por su uso de ingredientes frescos y de alta calidad. La pizza, la pasta, el risotto y el gelato son algunas de las delicias más conocidas de Italia. Además, el vino italiano es famoso por su variedad y calidad. La comida italiana es una celebración de la familia, la tradición y la pasión por la buena comida.',
    imagen: 'assets/Italiana.jpeg'
  },
  {
    id: 5,
    nombre: 'Japonesa',
    descripcion: 'La cultura gastronómica japonesa es reconocida por su atención al detalle y la presentación artística de sus platos. La cocina japonesa es equilibrada y saludable, con un enfoque en ingredientes frescos y estacionales. El sushi, el sashimi, el ramen y el tempura son algunos de los platos más icónicos de Japón. Además, la ceremonia del té es una parte importante de la cultura japonesa, que refleja la tranquilidad y la estética refinada de la sociedad japonesa.',
    imagen: 'assets/Japonesa.jpeg'
  }
];


export interface ProductoCultural {
  id: number;
  idCultura: number,
  nombre: string;
  descripcion: string;
  imagen: string;
  // Otros campos relevantes
}

export const PRODUCTOS: ProductoCultural[] = [
  {
    id: 1,
    idCultura: 1,
    nombre: 'Croissant',
    descripcion: 'Clásico croissant francés, hojaldrado y delicioso.',
    imagen: 'assets/croissant.jpeg',
    // Otros campos relevantes
  },
  {
    id: 2,
    idCultura: 1,
    nombre: 'Ratatouille',
    descripcion: 'Plato provenzal de verduras asadas con tomate y hierbas provenzales.',
    imagen: 'assets/ratatouille.jpeg',
    // Otros campos relevantes
  },
  {
    id: 3,
    idCultura: 1,
    nombre: 'Coq au Vin',
    descripcion: 'Plato de pollo cocido con vino tinto, champiñones y cebolla.',
    imagen: 'assets/coq-au-vin.jpeg',
    // Otros campos relevantes
  },
  {
    id: 4,
    idCultura: 1,
    nombre: 'Soufflé de Queso',
    descripcion: 'Postre francés ligero y esponjoso con queso gruyère.',
    imagen: 'assets/souffle-queso.jpeg',
    // Otros campos relevantes
  },
  {
    id: 5,
    idCultura: 1,
    nombre: 'Crème Brûlée',
    descripcion: 'Postre de crema horneada con una capa de azúcar caramelizado.',
    imagen: 'assets/creme-brulee.jpeg',
    // Otros campos relevantes
  },
  {
    id: 6,
    idCultura: 2,
    nombre: 'Tamales',
    descripcion: 'Tamales mexicanos rellenos de masa y carne, envueltos en hojas de maíz.',
    imagen: 'assets/tamales.jpeg',
    // Otros campos relevantes
  },
  {
    id: 7,
    idCultura: 2,
    nombre: 'Chiles en Nogada',
    descripcion: 'Plato mexicano con chiles poblanos rellenos de carne, frutas y nueces en salsa de nogada.',
    imagen: 'assets/chiles-en-nogada.jpeg',
    // Otros campos relevantes
  },
  {
    id: 8,
    idCultura: 2,
    nombre: 'Guacamole',
    descripcion: 'Salsa mexicana de aguacate, tomate, cebolla y cilantro.',
    imagen: 'assets/guacamole.jpeg',
    // Otros campos relevantes
  },
  {
    id: 9,
    idCultura: 2,
    nombre: 'Enchiladas',
    descripcion: 'Tortillas rellenas de carne, salsa y queso, típicas de la cocina mexicana.',
    imagen: 'assets/enchiladas.jpeg',
    // Otros campos relevantes
  },
  {
    id: 10,
    idCultura: 2,
    nombre: 'Pozole',
    descripcion: 'Sopa mexicana de maíz hominy con carne y condimentos.',
    imagen: 'assets/pozole.jpeg',
    // Otros campos relevantes
  },
  {
    id: 11,
    idCultura: 3,
    nombre: 'Gazpacho',
    descripcion: 'Sopa fría de tomate, pimiento, pepino y ajo, típica de España.',
    imagen: 'assets/gazpacho.jpeg',
    // Otros campos relevantes
  },
  {
    id: 12,
    idCultura: 3,
    nombre: 'Moussaka',
    descripcion: 'Plato griego de berenjenas, carne picada y bechamel.',
    imagen: 'assets/moussaka.jpeg',
    // Otros campos relevantes
  },
  {
    id: 13,
    idCultura: 3,
    nombre: 'Paella de Mariscos',
    descripcion: 'Paella española con arroz, mariscos y azafrán.',
    imagen: 'assets/paella-mariscos.jpeg',
    // Otros campos relevantes
  },
  {
    id: 14,
    idCultura: 3,
    nombre: 'Tzatziki',
    descripcion: 'Salsa griega de yogur, pepino y ajo, servida con pan de pita.',
    imagen: 'assets/tzatziki.jpeg',
    // Otros campos relevantes
  },
  {
    id: 15,
    idCultura: 3,
    nombre: 'Hummus',
    descripcion: 'Dip de garbanzos, tahini, limón y aceite de oliva, popular en la región mediterránea.',
    imagen: 'assets/hummus.jpeg',
    // Otros campos relevantes
  },
  {
    id: 16,
    idCultura: 4,
    nombre: 'Lasagna',
    descripcion: 'Plato italiano de pasta con carne, salsa de tomate y queso.',
    imagen: 'assets/lasagna.jpeg',
    // Otros campos relevantes
  },
  {
    id: 17,
    idCultura: 4,
    nombre: 'Risotto de Champiñones',
    descripcion: 'Arroz italiano cremoso con champiñones y vino blanco.',
    imagen: 'assets/risotto-champinones.jpeg',
    // Otros campos relevantes
  },
  {
    id: 18,
    idCultura: 4,
    nombre: 'Cannoli',
    descripcion: 'Postre italiano de tubos de masa rellenos de crema de ricotta.',
    imagen: 'assets/cannoli.jpeg',
    // Otros campos relevantes
  },
  {
    id: 19,
    idCultura: 4,
    nombre: 'Focaccia',
    descripcion: 'Pan plano italiano con aceite de oliva y hierbas aromáticas.',
    imagen: 'assets/focaccia.jpeg',
    // Otros campos relevantes
  },
  {
    id: 20,
    idCultura: 4,
    nombre: 'Tiramisú',
    descripcion: 'Postre italiano de capas de bizcocho, mascarpone y café.',
    imagen: 'assets/tiramisu.jpeg',
    // Otros campos relevantes
  },
  {
    id: 21,
    idCultura: 5,
    nombre: 'Tempura',
    descripcion: 'Tempura japonesa de camarones y verduras, frita y crujiente.',
    imagen: 'assets/tempura.jpeg',
    // Otros campos relevantes
  },
  {
    id: 22,
    idCultura: 5,
    nombre: 'Uramaki',
    descripcion: 'Sushi japonés invertido con arroz por fuera y relleno de pescado y aguacate.',
    imagen: 'assets/uramaki.jpeg',
    // Otros campos relevantes
  },
  {
    id: 23,
    idCultura: 5,
    nombre: 'Miso Shiru',
    descripcion: 'Sopa de soja japonesa con tofu y algas, servida caliente.',
    imagen: 'assets/miso-shiru.jpeg',
    // Otros campos relevantes
  },
  {
    id: 24,
    idCultura: 5,
    nombre: 'Gyudon',
    descripcion: 'Tazón de arroz japonés con carne de res y cebolla caramelizada.',
    imagen: 'assets/gyudon.jpeg',
    // Otros campos relevantes
  },
  {
    id: 25,
    idCultura: 5,
    nombre: 'Matcha Latte',
    descripcion: 'Bebida japonesa de té matcha con leche caliente y espuma.',
    imagen: 'assets/matcha-latte.jpeg',
    // Otros campos relevantes
  }
];

export interface Receta {
  id: number;
  nombre: string;
  descripcion: string;
  foto: string; // Ruta de la imagen del plato (puedes usar 'assets' si está en tu proyecto)
  procesoPreparacion: string; // Descripción del proceso de preparación
  video: string;
  culturaGastronomicaId: number; // ID de la cultura gastronómica a la que pertenece la receta
  mostrarDetalles: boolean;
}

export const RECETAS : Receta[] = [
  {
    id: 1,
    nombre: 'Coq au Vin',
    descripcion: 'Clásico plato francés de pollo cocido con vino tinto, champiñones y cebolla.',
    foto: 'assets/coq-au-vin.jpeg',
    procesoPreparacion: '1. Corta el pollo en trozos y marínalo en vino tinto. 2. Cocina el pollo con champiñones y cebolla. 3. Sirve caliente.',
    video: 'https://www.youtube.com/embed/EYPhs7ubMlc?si=dkskVd_dMYAY040Q',
    culturaGastronomicaId: 1, // Francesa
    mostrarDetalles: false,
  },
  {
    id: 2,
    nombre: 'Ratatouille',
    descripcion: 'Plato provenzal de verduras asadas con tomate y hierbas provenzales.',
    foto: 'assets/ratatouille.jpeg',
    procesoPreparacion: '1. Corta y asa verduras como berenjenas, calabacines y tomates. 2. Cocina con hierbas provenzales. 3. Sirve caliente.',
    video: 'https://www.youtube.com/embed/OeCUsncUPfo?si=-Jmi48fGcJurPzDQ',
    culturaGastronomicaId: 1, // Francesa
    mostrarDetalles: false,
  },
  {
    id: 3,
    nombre: 'Croissant',
    descripcion: 'Delicioso croissant francés, hojaldrado y perfecto para el desayuno.',
    foto: 'assets/croissant.jpeg',
    procesoPreparacion: '1. Prepara la masa de croissant. 2. Hornea hasta que estén dorados. 3. Disfruta con café.',
    video: 'https://www.youtube.com/embed/iFjSv5oRKUo?si=xcVqWiIeNUAhay_1',
    culturaGastronomicaId: 1, // Francesa
    mostrarDetalles: false,
  },
  {
    id: 4,
    nombre: 'Quiche Lorraine',
    descripcion: 'Tarta salada francesa con huevos, crema y bacon.',
    foto: 'assets/quiche-lorraine.jpg',
    procesoPreparacion: '1. Prepara la masa de tarta. 2. Mezcla huevos, crema y bacon. 3. Hornea hasta que esté dorado. 4. Sirve caliente o frío.',
    video: 'https://www.youtube.com/embed/h6gD-UkrQSU?si=eJcgm8yoUtNCp8hK',
    culturaGastronomicaId: 1, // Francesa
    mostrarDetalles: false,
  },
  {
    id: 5,
    nombre: 'Tarte Tatin',
    descripcion: 'Pastel de manzana francés caramelizado, ¡una delicia!',
    foto: 'assets/tarte-tatin.jpg',
    procesoPreparacion: '1. Caramelize manzanas en azúcar y mantequilla. 2. Cubra con masa y hornee. 3. Invierta antes de servir.',
    video: 'https://www.youtube.com/embed/cAiQVpjCg0c?si=y9YEQlaRhyMcG1Wb',
    culturaGastronomicaId: 1, // Francesa
    mostrarDetalles: false,
  },
  {
    id: 6,
    nombre: 'Tacos al Pastor',
    descripcion: 'Tacos mexicanos con carne de cerdo marinada y piña, servidos en tortillas de maíz.',
    foto: 'assets/tacos-al-pastor.jpg',
    procesoPreparacion: '1. Marina la carne de cerdo en achiote y especias. 2. Asa la carne y la piña. 3. Sirve en tortillas con cilantro y cebolla.',
    video: 'https://www.youtube.com/embed/zW6TduRY7Ws?si=jJxmUxo2WnYWHCWd',
    culturaGastronomicaId: 2, // Mexicana
    mostrarDetalles: false,
  },
  {
    id: 7,
    nombre: 'Chiles Rellenos',
    descripcion: 'Chiles poblanos rellenos de queso, carne y bañados en salsa de tomate.',
    foto: 'assets/chiles-rellenos.jpg',
    procesoPreparacion: '1. Rellena chiles poblanos con queso y carne. 2. Fríe en masa de huevo. 3. Baña con salsa de tomate. 4. Hornea hasta que estén dorados.',
    video: 'https://www.youtube.com/embed/s5zd1yiZJHw?si=DCECY8p77TJC_vym',
    culturaGastronomicaId: 2, // Mexicana
    mostrarDetalles: false,
  },
  {
    id: 8,
    nombre: 'Sopes',
    descripcion: 'Pequeñas tortillas gruesas con bordes doblados, cubiertas con carne, frijoles y crema.',
    foto: 'assets/sopes.jpg',
    procesoPreparacion: '1. Cocina tortillas gruesas. 2. Agrega frijoles, carne y crema. 3. Sirve con salsa y queso.',
    video: 'https://www.youtube.com/embed/7fSMKsB7EHI?si=W2eMWB8lBWz2zgt7',
    culturaGastronomicaId: 2, // Mexicana
    mostrarDetalles: false,
  },
  {
    id: 9,
    nombre: 'Mole Poblano',
    descripcion: 'Salsa mexicana espesa con chocolate, chiles y especias, servida sobre pollo o pavo.',
    foto: 'assets/mole-poblano.jpg',
    procesoPreparacion: '1. Tuesta chiles y especias. 2. Mezcla con chocolate y caldo. 3. Cocina hasta que espese. 4. Sirve sobre carne.',
    video: 'https://www.youtube.com/embed/X31CsA4C_HQ?si=ATRNF_hkFQGzh3Mi',
    culturaGastronomicaId: 2, // Mexicana
    mostrarDetalles: false,
  },
  {
    id: 10,
    nombre: 'Elote con Queso',
    descripcion: 'Maíz cocido con crema, queso y chile en polvo, una delicia callejera mexicana.',
    foto: 'assets/elote-con-queso.jpg',
    procesoPreparacion: '1. Cocina el maíz. 2. Cubre con crema, queso y chile en polvo. 3. Disfruta en palitos.',
    video: 'https://www.youtube.com/embed/MwNC5xobowo?si=OM3HMXMJ_skQTKcC',
    culturaGastronomicaId: 2, // Mexicana
    mostrarDetalles: false,
  },
  {
    id: 11,
    nombre: 'Paella',
    descripcion: 'Plato español de arroz amarillo con mariscos y pollo, sazonado con azafrán.',
    foto: 'assets/paella-mariscos.jpeg',
    procesoPreparacion: '1. Sofría el pollo y los mariscos. 2. Agregue arroz, azafrán y caldo. 3. Cocine hasta que el arroz esté tierno.',
    video: 'https://www.youtube.com/embed/yBbnqp9r6Rg?si=mK-sk6RfAlQtI8fm',
    culturaGastronomicaId: 3, // Mediterránea
    mostrarDetalles: false,
  },
  {
    id: 12,
    nombre: 'Tabbouleh',
    descripcion: 'Ensalada libanesa de bulgur, tomate, pepino y hierbas frescas, aderezada con limón y aceite de oliva.',
    foto: 'assets/tabbouleh.jpg',
    procesoPreparacion: '1. Remoje el bulgur y mezcle con verduras picadas y hierbas. 2. Aderece con limón y aceite de oliva.',
    video: 'https://www.youtube.com/embed/7yK1XeLTlCs?si=7QeleGNhQxqzKUmH',
    culturaGastronomicaId: 3, // Mediterránea
    mostrarDetalles: false,
  },
  {
    id: 13,
    nombre: 'Hummus',
    descripcion: 'Dip de garbanzos libanés con tahini, ajo y limón, ideal para mojar con pan de pita.',
    foto: 'assets/hummus.jpeg',
    procesoPreparacion: '1. Mezcle garbanzos, tahini, ajo y limón en una licuadora. 2. Sirva con pan de pita.',
    video: 'https://www.youtube.com/embed/CAAY20Zxjhs?si=WGR_qjCOdZIiTywF',
    culturaGastronomicaId: 3, // Mediterránea
    mostrarDetalles: false,
  },
  {
    id: 14,
    nombre: 'Tzatziki',
    descripcion: 'Salsa griega de yogur con pepino, ajo y eneldo, perfecta para acompañar carnes y verduras.',
    foto: 'assets/tzatziki.jpeg',
    procesoPreparacion: '1. Ralle y escurra el pepino. 2. Mezcle con yogur, ajo y eneldo. 3. Refrigere antes de servir.',
    video: 'https://www.youtube.com/embed/3GHlUSVYscE?si=HMXLDdEVpVc9INT_',
    culturaGastronomicaId: 3, // Mediterránea
    mostrarDetalles: false,
  },
  {
    id: 15,
    nombre: 'Gyros',
    descripcion: 'Sándwich griego con carne de cerdo o pollo, acompañado de verduras y salsa de yogur.',
    foto: 'assets/gyros.jpg',
    procesoPreparacion: '1. Cocine la carne con especias. 2. Sirva en pan pita con verduras y salsa de yogur.',
    video: 'https://www.youtube.com/embed/rtMTBihXNEc?si=jfdiJ2YLjZpL1drO',
    culturaGastronomicaId: 3, // Mediterránea
    mostrarDetalles: false,
  },
  {
    id: 16,
    nombre: 'Lasagna',
    descripcion: 'Plato italiano de pasta con carne, salsa de tomate y queso.',
    foto: 'assets/lasagna.jpeg',
    procesoPreparacion: '1. Cocine lasaña en capas con carne, salsa de tomate y queso. 2. Hornee hasta que esté burbujeante y dorado.',
    video: 'https://www.youtube.com/embed/qZbsrFbenJQ?si=KAc7AyPjszZ37bhC',
    culturaGastronomicaId: 4, // Italiana
    mostrarDetalles: false,
  },
  {
    id: 17,
    nombre: 'Risotto de Champiñones',
    descripcion: 'Arroz italiano cremoso con champiñones y vino blanco.',
    foto: 'assets/risotto-champinones.jpeg',
    procesoPreparacion: '1. Cocine arroz con champiñones y vino blanco, agregando caldo caliente. 2. Revuelva hasta que esté cremoso.',
    video: 'https://www.youtube.com/embed/LVFM0Sb-r0E?si=MsZ6IDOVhtGpBGh9',
    culturaGastronomicaId: 4, // Italiana
    mostrarDetalles: false,
  },
  {
    id: 18,
    nombre: 'Cannoli',
    descripcion: 'Postre italiano de tubos de masa rellenos de crema de ricotta.',
    foto: 'assets/cannoli.jpeg',
    procesoPreparacion: '1. Haga masa de cannoli y fría hasta que esté crujiente. 2. Rellene con crema de ricotta y adorne con chocolate.',
    video: 'https://www.youtube.com/embed/y4v-7xmfB3Q?si=ZLLwt1oQfFa967Z-',
    culturaGastronomicaId: 4, // Italiana
    mostrarDetalles: false,
  },
  {
    id: 19,
    nombre: 'Tiramisú',
    descripcion: 'Postre italiano de capas de bizcocho de café empapado en licor y crema de mascarpone.',
    foto: 'assets/tiramisu.jpeg',
    procesoPreparacion: '1. Haga capas de bizcocho, café y crema de mascarpone. 2. Refrigere hasta que esté listo para servir.',
    video: 'https://www.youtube.com/embed/1MwZyaNw-Nc?si=knhPw7TFWWUWmypx',
    culturaGastronomicaId: 4, // Italiana
    mostrarDetalles: false,
  },
  {
    id: 20,
    nombre: 'Panna Cotta',
    descripcion: 'Postre italiano de crema de leche cocida con vainilla y servida con coulis de frutas.',
    foto: 'assets/panna-cotta.jpg',
    procesoPreparacion: '1. Cocine crema de leche con vainilla. 2. Sirva con coulis de frutas y gelatina.',
    video: 'https://www.youtube.com/embed/heWzNEc5Yhk?si=s34_Yf7KftDersyE',
    culturaGastronomicaId: 4, // Italiana
    mostrarDetalles: false,
  },
  {
    id: 21,
    nombre: 'Sushi Nigiri',
    descripcion: 'Bocados de arroz cubiertos con pescado crudo, una delicia japonesa.',
    foto: 'assets/sushi-nigiri.jpg',
    procesoPreparacion: '1. Haga bolas de arroz. 2. Cubra con pescado crudo. 3. Sirva con salsa de soja y wasabi.',
    video: 'https://www.youtube.com/embed/e8_Wgpq1n3Q?si=CWjPfbclWJLKSNWj',
    culturaGastronomicaId: 5, // Japonesa
    mostrarDetalles: false,
  },
  {
    id: 22,
    nombre: 'Tempura',
    descripcion: 'Mariscos y verduras japonesas fritas en masa ligera y crujiente.',
    foto: 'assets/tempura.jpeg',
    procesoPreparacion: '1. Haga una masa ligera y fría los ingredientes hasta que estén dorados y crujientes.',
    video: 'https://www.youtube.com/embed/iVzLe3LLP08?si=mVq0UsFMW-hg0fvY',
    culturaGastronomicaId: 5, // Japonesa
    mostrarDetalles: false,
  },
  {
    id: 23,
    nombre: 'Sashimi',
    descripcion: 'Finas lonchas de pescado crudo, una delicadeza japonesa.',
    foto: 'assets/sashimi.jpg',
    procesoPreparacion: '1. Corte pescado en lonchas finas. 2. Sirva con wasabi y salsa de soja.',
    video: 'https://www.youtube.com/embed/Kv7hVcPYXvc?si=DHdmhE01Uv2r0oQM',
    culturaGastronomicaId: 5, // Japonesa
    mostrarDetalles: false,
  },
  {
    id: 24,
    nombre: 'Miso Soup',
    descripcion: 'Sopa japonesa de pasta de soja fermentada, tofu y algas.',
    foto: 'assets/miso-soup.jpg',
    procesoPreparacion: '1. Haga caldo de miso. 2. Agregue tofu y algas. 3. Sirva caliente.',
    video: 'https://www.youtube.com/embed/1g-sSSsROLM?si=Wy7iGP0Z9hC1gfZ0',
    culturaGastronomicaId: 5, // Japonesa
    mostrarDetalles: false,
  },
  {
    id: 25,
    nombre: 'Matcha Latte',
    descripcion: 'Bebida japonesa de té matcha con leche caliente.',
    foto: 'assets/matcha-latte.jpeg',
    procesoPreparacion: '1. Mezcle té matcha con leche caliente. 2. Sirva caliente o frío.',
    video: 'https://www.youtube.com/embed/nTElIKZUcgM?si=srtlvbux2uvriMQW',
    culturaGastronomicaId: 5, // Japonesa
    mostrarDetalles: false,
  }
];

export interface Restaurante {
  id: number;
  nombre: string;
  ciudad: string;
  pais: string;
  estrellasMichelin?: number;
  fechaConsecucion?: string;
  culturasGastronomicas: number[]; // Lista de IDs de culturas gastronómicas relacionadas
}

export const RESTAURANTES: Restaurante[] = [
  {
    id: 1,
    nombre: 'Le Petit Chef',
    ciudad: 'París',
    pais: 'Francia',
    estrellasMichelin: 3,
    fechaConsecucion: '2022-05-15',
    culturasGastronomicas: [1], // Francia
  },
  {
    id: 2,
    nombre: 'La Taquería',
    ciudad: 'Ciudad de México',
    pais: 'México',
    estrellasMichelin: 0, // No tiene estrellas Michelin
    culturasGastronomicas: [2], // México
  },
  {
    id: 3,
    nombre: 'Sakura Sushi',
    ciudad: 'Tokio',
    pais: 'Japón',
    estrellasMichelin: 2,
    fechaConsecucion: '2021-11-20',
    culturasGastronomicas: [5], // Japonesa
  },
  {
    id: 4,
    nombre: 'Trattoria Italiana',
    ciudad: 'Roma',
    pais: 'Italia',
    estrellasMichelin: 1,
    fechaConsecucion: '2022-02-10',
    culturasGastronomicas: [4], // Italiana
  },
  {
    id: 5,
    nombre: 'Casa Española',
    ciudad: 'Barcelona',
    pais: 'España',
    estrellasMichelin: 2,
    fechaConsecucion: '2021-09-30',
    culturasGastronomicas: [3], // Mediterránea
  },
  {
    id: 6,
    nombre: 'Fusión Asia Latina',
    ciudad: 'Miami',
    pais: 'Estados Unidos',
    estrellasMichelin: 0, // No tiene estrellas Michelin
    culturasGastronomicas: [2, 5], // México y Japonesa
  },
  // Puedes seguir agregando más ejemplos aquí
];

