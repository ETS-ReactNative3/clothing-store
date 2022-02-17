import Category from '../models/category';
import Product from '../models/product';


export const CATEGORIES = [
  new Category("c1", " Pants ", "https://www.pngall.com/wp-content/uploads/2016/04/Jeans-PNG-Images.png"),
  new Category("c2", " T-Shirts ", "https://www.pngall.com/wp-content/uploads/2016/09/Sports-Wear-Free-Download-PNG.png"),
  new Category("c3", "Shoes ","https://www.pngall.com/wp-content/uploads/5/Sylish-Men-Shoes-PNG-Picture.png"),
  new Category("c4", "Hoodies", "https://www.pngall.com/wp-content/uploads/11/Pullover-PNG-Image.png"),
  new Category("c5", "Coats", "https://www.pngall.com/wp-content/uploads/2016/05/Jacket-PNG.png"),
  new Category("c6", "Watches", "https://www.pngall.com/wp-content/uploads/2/Rolex-Watch-PNG-HD-Image.png"),
];

//.........................................  Pants  .........................................

export const PRODUCTS = [
  new Product(
    ["c1"], 
    "NIKE SPORTSWEAR",
    179.90, 
    "https://th.bing.com/th/id/OIF.wEH4r2ssyJfpBEEobtMJew?pid=ImgDet&rs=1", 
    `NIKE SPORTSWEAR CLUB FLEECE PANTS:
    - GENRE : Homme
    - COULEUR : Gris
    - COULEUR DU PRODUIT : Gris
    - TYPE DE VÊTEMENT : Pantalons & collants`,
    [
      `38`, ', ',
      `40`, ', ',
      `42`, ', ',
      `44`, ', ',
      `46`,
    ]
  ),
  new Product(
    ["c1"],
    "MENS ADIDAS PANTS",
    79.90, 
    "https://www.autoviewer.co.uk/wp-content/uploads/2021/12/mens-adidas-pants-core-18-sweatpants-dark-bluewhite_1.jpg",
    `MENS ADIDAS PANTS : 
    The adidas Core18 Sweatpants will be the casual staple for any wardrobe!
    Elastic waistband ensures a comfortable fit.
    Slash hand pockets at side.
    Brand logo on left hip.
    Banded cuffs.`,
    [
      `38`, ', ',
      `40`, ', ',
      `42`, ', ',
      `44`, ', ',
      `46`,
    ]
  ),
  new Product(
    ['c1'],
    "REPLAY Jeans slim fit HYPERFLEX RE-USED ANBASS",
    199.90,
    "https://www.offporter.com/thumb/p-detail/8/46636/p-2-p22-replay-ambassm914y-661wi4-1-p.JPG",
    `REPLAY Jeans slim fit HYPERFLEX RE-USED ANBASS :
    Spedizione Gratuita sopra i 200 $
    Reso entro 14 giorni
    Pagamenti: Paypal - Carte di Credito - American Express - Scalapay - Contrassegno`,
    [
      `38`, ', ',
      `40`, ', ',
      `42`, ', ',
      `44`, ', ',
      `46`,
    ]
  ),
  new Product(
    ['c1'],
    "REPLAY Jeans ANBASS 573 BIO",
    199.90,
    "https://www.offporter.com/thumb/p-detail/8/36220/a-2-a21-replay-anbass-m914y573950-1-p.JPG",
    `REPLAY Jeans ANBASS 573 BIO :
    Spedizione Gratuita sopra i 200 $
    Reso entro 14 giorni
    Pagamenti: Paypal - Carte di Credito - American Express - Scalapay - Contrassegno`,
    [
      `38`, ', ',
      `40`, ', ',
      `42`, ', ',
      `44`, ', ',
      `46`,
    ]
  ),
  new Product(
    ["c1"],
    "★Sold out ★Artistic pattern layered distressed black jeans - 387",
    89.90,
    "https://d2euz5hho4dp59.cloudfront.net/images/companies/1/product/clothing/bottoms/jeans/jean%20387/1.jpg",
    `★Sold out ★Artistic pattern layered distressed black jeans - 387:
    - Crafted from top quality denim.
    - Cool and stylish design.
    - Distressed and ripped, artistic pattern layered inside.
    - Snug slim fit in style.
    - Matches well with any style.`,
    [
      `38`, ', ',
      `40`, ', ',
      `42`, ', ',
      `44`, ', ',
      `46`,
    ]
  ),
  new Product(
    ["c1"],
    "TAPOO Jeans",
    49.90,
    "https://i.pinimg.com/564x/99/31/ac/9931accdf5c8e31192189bec74f4ef99.jpg",
    `TAPOO Jeans :
    TAPOO Zipper Button Back Pockets Male
    Skinny Pants 2017 
    High Quality Breathable Solid Cotton
    Casual Mid Pencil Pants Homme`,
    [
      `38`, ', ',
      `40`, ', ',
      `42`, ', ',
      `44`, ', ',
      `46`,
    ]
  ),

  //.........................................  T-SHIRTS  .........................................

  new Product(
    ["c2"],
    "CAMISETA BLANCA PARA CABALLERO",
    149.90,
    "https://i0.wp.com/imperiamind.com/wp-content/uploads/2021/02/PLAYERA-BLANCA-HOMBRE.jpg?fit=510%2C600&ssl=1",
    `CAMISETA BLANCA PARA CABALLERO :
    - 100% ALGODÓN / COTTON
    - LOS PRODUCTOS QUE ADQUIERES EN LA TIENDA UN 20% ES DONADO PARA APOYAR A
      NIÑAS Y MUJERES EN SITUACIÓN DE RIEZGO A TRAVÉS DE 
      INSTITUCIONES Y ASOCIACIONES CON ESTA NOBLE CAUSA.`,
    [
      `XS`, ', ',
      `S`, ', ',
      `M`, ', ',
      `L`,
    ]
  ),
  new Product(
    ["c2"],
    "★Sold out ★Flower tiger laser printed round t-shirts - 719",
    35.90,
    "https://d2euz5hho4dp59.cloudfront.net/images/detailed/16/main_tee_719.jpg",

    `★Sold out ★Flower tiger laser printed round t-shirts - 719 :
    - Crafted from great quality poly.
    - Cool and stylish design with swag.
    - Snug slim fit in style.
    - Matches well with casual style. Never miss out!`,
    [
      `XS`, ', ',
      `S`, ', ',
      `M`, ', ',
      `L`,
    ]
  ),
  new Product(
    ["c2"],
    "Flower printed t-shirts - 866 ",
    34.90,
    "https://d2euz5hho4dp59.cloudfront.net/images/companies/1/product/clothing/top/tee/tee%20866/1.jpg",
    `Flower printed t-shirts - 866 :
    - Crafted from top quality poly.
    - Cool and stylish design.
    - Comfy fit in style.
    - Matches well with any fashion style.`,
    [
      `XS`, ', ',
      `S`, ', ',
      `M`, ', ',
      `L`,
    ]
  ),
  new Product(
    ["c2"],
    "THE MAGIC6 GEOMETRY T-SHIRT",
    84.90,
    "https://rscottd13.com/wp-content/uploads/2015/12/item-4.jpg",
    `THE MAGIC6 GEOMETRY T-SHIRT :
    - Sed ut perspiciatis
    - Unde omnis iste
    - Ntus error sit
    - Voluptatem accusan
    - Tium doloremque`,
    [
      `XS`, ', ',
      `S`, ', ',
      `M`, ', ',
      `L`,
    ]
  ),
  new Product(
    ["c2"],
    "Puma Evolution Longline T-Shirt",
    129.90,
    "https://i.pinimg.com/564x/83/fb/db/83fbdb9ecfd52e3a3ba21a1f7a82e5db.jpg",
    `Puma Evolution Longline T-Shirt With Back Print | ASOS :
    Shop Puma Evolution Longline T-Shirt With Back Print at ASOS. 
    Order now with multiple payment and delivery options, 
    including free and unlimited next day delivery (Ts&Cs apply).`,
    [
      `XS`, ', ',
      `S`, ', ',
      `M`, ', ',
      `L`,
    ]
  ),
  new Product(
    ["c2"],
    "Abercrombie & Fitch Jeans",
    67.90,
    "https://cdna.lystit.com/520/650/n/photos/farfetch/b7fea15c/diesel-Black-Logo-Print-T-shirt.jpeg",
    `DIESEL Men's Black T Just Division T Shirt:
    Logo Print T-shirt ->
    - Black T-shirt from Diesel. Made of cotton. 
    - Decorated with a logo embroidery trimmed with fabric in white and red
    - Black cotton logo print T-shirt from Diesel featuring a round neck,
    short sleeves and a straight hem. Material:Cotton.`,
    [
      `XS`, ', ',
      `S`, ', ',
      `M`, ', ',
      `L`,
    ]
  ),

  //.........................................  Shoes  .........................................

  new Product(
    ["c3"],
    "Nike Free Run Flyknit 2018 Crimson ",
    76.90,
    "https://www.nikefactorys.us/images/medium/images18/Nike-Free-Run-Flyknit-2018-Crimson-Pulse-Pure-Platinum-Black-Womens-Running-Shoes.jpg",
    `Nike Free Run Flyknit 2018 Crimson :
    - Nike Free RN Flyknit 2018 Women's Running Shoe brings you miles of comfort with a
    Flyknit constructed upper that delivers even more zoned stretch and breathability than before.
    - Made for short runs when you want a barefoot-like feel. 
    - the Nike Free RN Flyknit 2018 Women's Running Shoe is the lightest in the Free RN family.
    - Its sock-like upper has more stretch yarns than previous versions, 
    so it hugs your feet more than ever.`,
    [
      `36`, ', ',
      `38`, ', ',
      `40`, ', ',
      `42`, ', ',
      `44`, ', ',
      `45`,
    ]
  ),
  new Product(
    ["c3"],
    "Nike Men's Zoom Winflo 2 Running Shoe",
    87.90,
    "https://i5.walmartimages.com/asr/fe5ca2d2-0047-44f0-965f-dc779bfefb64_1.322a7e0ea46887491770ce154f54eeea.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    `Nike Men's Zoom Winflo 2 Running Shoe:
    - Shoe Category : Men's Shoes
    - Shoe Size : Shoe Size
    - Gender : Male
    - Color : Black/White/Anthracite
    - Manufacturer Part Number : 807276 001
    - Brand : Nike`,
    [
      `36`, ', ',
      `38`, ', ',
      `40`, ', ',
      `42`, ', ',
      `44`, ', ',
      `45`,
    ]
  ),
  new Product(
    ["c3"],
    "Adidas Men's Swift Run Running Shoes",
    41.90,
    "https://www.highlandcattlefarmstay.com/media/catalog/product/cache/1/small_image/1350x900/9df78eab33525d08d6e5fb8d27136e95/T/J/TJJSLV_3795_761112.jpg", 
    `Adidas Men's Swift Run Running Shoes : 
    Lightweight, breathable upper on the adidas Swift Run
    Classic lace closure
    Reinforced heel for additional support
    Plush EVA foam midsole
    Durable rubber outsole
    The adidas Swift Run is imported`,
    [
      `36`, ', ',
      `38`, ', ',
      `40`, ', ',
      `42`, ', ',
      `44`, ', ',
      `45`,
    ]
  ),
  new Product(
    ["c3"],
    "adidas Zapatillas Running Pulseboost HD",
    119.90,
    "https://www.runnerinn.com/f/13723/137231874/adidas-zapatillas-running-pulseboost-hd.jpg", 
    `adidas Zapatillas Running Pulseboost HD :
    - Tipo de pisada : Neutra
    - Drop : 5-8 mm
    - Color : Negro
    - Peso calzado : Más de 300 g
    - Prestaciones : Detalles reflectantes`,
    [
      `36`, ', ',
      `38`, ', ',
      `40`, ', ',
      `42`, ', ',
      `44`, ', ',
      `45`,
    ]
  ),
  new Product(
    ["c3"],
    "Adidas Green Running Shoes",
    240.90,
    "https://n4.sdlcdn.com/imgs/i/3/b/Adidas-Green-Running-Shoes-SDL959390958-1-20453.jpeg", 
    `Adidas Green Running Shoes : 
    - Color : Green
    - Shoe Weight : Lightweight(300 gms to 599 gms)
    - Manufacturer's Name & Address : ADIDAS
    - SUPC : SDL959390958`,
    [
      `36`, ', ',
      `38`, ', ',
      `40`, ', ',
      `42`, ', ',
      `44`, ', ',
      `45`,
    ]
  ),
  new Product(
    ["c3"],
    "Adidas Orange Running Shoes",
    179.90,
    "https://n3.sdlcdn.com/imgs/c/u/j/Adidas-Orange-Running-Shoes-SDL607558197-1-f4699.jpg", 
    `Adidas Orange Running Shoes:
    - Color : Orange
    - Upper Material : Mesh/Textile
    - Sole Material : Rubber
    - 100 % Original : Yes
    - SUPC : SDL607558197`,
    [
      `36`, ', ',
      `38`, ', ',
      `40`, ', ',
      `42`, ', ',
      `44`, ', ',
      `45`,
    ]
  ),

  //.........................................  Hoodies  .........................................

  new Product(
    ["c4"],
    "adidas Athletics for BEAMS",
    59.90,
    "https://cdn-cms.beams.co.jp/cdn/cms/blog/46199/body_H7SL6m.jpg",
    `adidas Athletics for BEAMS:
    - adidas Athletics for BEAMS / Warm-up Pullover
    - Color : BLACK
    - Size : S to XO
    - Price : ¥9,990+ Tax
    - Item No. : 11-13-3538-154`,
    [
      `XS`, ', ',
      `S`, ', ',
      `M`, ', ',
      `L`,
    ]
  ),
  new Product(
    ["c4"],
    "Black Rhinestone Revenge Hoodie NF",
    48.30,
    "https://pepperstreets.com/wp-content/uploads/2022/02/Pepper-Black-Rhinestone-Revenge-Hoodie.png", 
    `Black Rhinestone Revenge Hoodie NF :
    Buy Black Rhinestone Revenge Hoodie NF
    This hoodie Made To Order, printed one by one so we can control the quality.
    We use newest DTG Technology to print on to Black Rhinestone Revenge Hoodie NF
    Pre-Shrunk 100% cotton, fully machine washable.`,
    [
      `XS`, ', ',
      `S`, ', ',
      `M`, ', ',
      `L`,
    ]
  ),
  new Product(
    ["c4"],
    "NEIGHBORHOOD X CALI THORNHILL DEWITT CTDNH HOODY",
    299.90,
    "https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/3/0/30-08-2018_neighborhood_xcalithornhilldewittctdnhhoody_black_181fpcxn-csm02s-bk_blr_1.jpg", 
    `NEIGHBORHOOD X CALI THORNHILL DEWITT CTDNH HOODY
    - 100% Cotton
    - Fleeceback Jersey
    - Drawstring Hood
    - (Holy Spirit) Dog Print
    - Kangaroo Pouch Pocket
    - (CTD NBHD) Embroidery
    - Ribbed Cuffs & Hem`,
    [
      `XS`, ', ',
      `S`, ', ',
      `M`, ', ',
      `L`,
    ]
  ),
  new Product(
    ["c4"],
    "Mens Fitness Clothing Camo Hoodie Fitted Hooded Sweatshirt",
    13.90,
    "https://bewodaintl.com/wp-content/uploads/2020/10/athletic-apparel-manufacturers-mens-fitness-clothing-hoodie-fitted-hooded-sweatshirt2.jpg", 
    `Mens Fitness Clothing Camo Hoodie :
    - Material : 100% Cotton Fleece
    - Color available : Black, Red, Blue, Grey, White, Green, Yellow, Navy blue, Orange and Custom.
    - Printing : Custom Designing, Printing and Embroidery is Available.
    - Minimum Order Quantity : 50pcs.`,
    [
      `XS`, ', ',
      `S`, ', ',
      `M`, ', ',
      `L`,
    ]
  ),
  new Product(
    ["c4"],
    "2020 Winter Fashion New design Pullover",
    250.90,
    "https://www.tshirt-supplier.com/Uploads/5e10a9b83a65f.jpg", 
    `PULLOVER HOODIES: 
    - Style: 2020 Winter Fashion New design Pullover street wear Hoodies HFCMH009
    - Material: 100% polyester fleece Material
    - Available Colors: 9  colors available  , any other colors can be customized
    - Custom t-shirts labels & hand tags: We make t-shirts labels & hand tags for custom printed t-shirts to promote your own brand`,
    [
      `XS`, ', ',
      `S`, ', ',
      `M`, ', ',
      `L`,
    ]
  ),
  new Product(
    ["c4"],
    "Calvin Klein Jeans",
    84.95,
    "https://www.standout.co.uk/images/product/42308d.jpg",
    `Calvin Klein Jeans : 
    - The Seasonal Monogram Pullover Hoodie from Calvin Klein Jeans comes with kangaroo style pocket,
    featuring a drawstring hood.
    - This hoodie also features elasticated cuffs and hem.
    - Coming in Tawny Sand colour, 
    this hoodie features part embroidered logo graphic on front`,
    [
      `XS`, ', ',
      `S`, ', ',
      `M`, ', ',
      `L`,
    ]
  ),

  //.........................................  Coats  .........................................

  new Product(
    ["c5"],
    "Men's Color Block Hooded PU Leather Jacket",
    56.77,
    "https://imgv2.staticdj.com/abee15c4f6b686278c08ed53b50e9fed_1080x.jpg", 
    `Men's Color Block Hooded PU Leather Jacket :
    - Closure Type : zipper
    - Item Type : Outerwear & Coats
    - Thickness : Thick (Winter)
    - Neckline : Hooded
    - Elasticity : Inelastic
    - Outerwear Type : Jackets 
    - Detachable Part : NONE
    - Lining Material : Polyester
    - Pattern Type : Solid`,
    [
      `XS`, ', ',
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`,
    ]
  ),
  new Product(
    ["c5"],
    "JACKE ENRIQUETA schwarz mit rosa Kunstfell ",
    89.90,
    "https://manzara.b-cdn.net/media/catalog/product/cache/20/thumbnail/600x/7b8fef0172c2eb72dd8fd366c999954c/f/_/f_101_black_pink.jpg",
    `JACKE ENRIQUETA schwarz mit rosa Kunstfell :
    - Schreiben Sie die erste Kundenmeinung
    - JACKE ENRIQUETA schwarz mit rosa Kunstfell
    - Artikel : F112-blackpink
    - Stoff : 100% polyester`,
    [
      `XS`, ', ',
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`,
    ]
  ),
  new Product(
    ["c5"],
    "winter jackets brand",
    64.90,
    "https://packinoneday.com/wp-content/uploads/2022/01/moerdeng-mens-waterproof-ski-jacket-warm-winter-snow-coat-mountain.jpg", 
    `winter jackets brand : 
    In this article, we have gathered for you a list of winter jackets brand,
    so If you are looking for the best winter jackets brand then you just landed in the right place.
    When you looking for a good ideal product, 
    the question you should ask yourself is How can I get a good winter jackets brand.
    But actually, you do not need to be worried about that anymore.
    `,
    [
      `XS`, ', ',
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`,
    ]
  ),
  new Product(
    ["c5"],
    "THE SUIT MEN ",
    100.00,
    "https://i.pinimg.com/564x/a0/42/24/a04224091ccc93d870ec683ec77b4d62.jpg", 
    `THE SUIT MEN :
    - Size Type :	Regular
    - Department :	Men	
    - Type :	Coat	
    - Brand :	Ashwood
    - Outer Shell Material :	sheepskin	
    - Style : duffle`,
    [
      `XS`, ', ',
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`,
    ]
  ),
  new Product(
    ["c5"],
    "jackets for women",
    159.90,
    "https://i.pinimg.com/564x/9e/c8/35/9ec835601f9b067a609c2681dc4ac74a.jpg",
    `jackets for women :
    LADIES BLACK GAP PADDED PUFFA JACKET COAT FUR LINED HOOD
    SIZE M 12/14 #fashion #clothing #shoes
    #accessories #womensclothing
    #coatsjacketsvests (ebay link)`,
    [
      `XS`, ', ',
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`,
    ]
  ),
  new Product(
    ["c5"],
    "Blue Winter Jackets-Diesel W-BELCLES Mens Blue",
    220.00,
    "http://www.lafeedesblogs.com/wp-content/uploads/2018/01/blue-winter-jackets-diesel-w-belcles-mens-blue.jpg",
    `Blue Winter Jackets-Diesel W-BELCLES Mens Blue
    - This standout Diesel X winter jacket features high-performance design and materials.
    - The drawstring hood is trimmed with faux fur.
    - 100% Polyester, Coating 100%Polyurethane
    - Diesel x
    - Zip closure
    - Multiple pockets
    - Lined and padded`,
    [
      `XS`, ', ',
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`,
    ]
  ),
  /////////////////////////////////////////////// ACCESSORIES //////////////////////////////////////////////////////////
  new Product(
    ["c6"],
    "Zegarek Atlantic - męski",
    89.90,
    "https://www.zegarek.net/imageslib/87461.41.45_4m.jpg", 
    `Zegarek Atlantic - męski : 
    - Pasek/Bransoleta : pasek
    - Zapięcie : na sprzączkę
    - Kolor paska/bransolety : czarny
    - Materiał paska/bransolety : skóra naturalna
    - Maksymalny obwód (koperta + pasek) : 20.5 cm
    - Szerokość paska/bransolety przy kopercie : 23 mm`,
    [
      `One Size`
    ]
  ),
  new Product(
    ["c6"],
    "Zegarek Atlantic Classic Sapphire Chronograph - męski",
    349.90,
    "https://www.zegarek.net/imageslib/87461.44.55_4m.jpg",
    `Zegarek Atlantic Classic Sapphire Chronograph - męski :
    - Wodoszczelność : 100 m (10 bar)
    - Kolor koperty : różowe złoto
    - Materiał koperty : stal
    - Kształt koperty : okrągła
    - Zakręcany dekiel : tak
    - Szerokość koperty : 46 mm
    - Grubość koperty : 14.00 mm`,
    [
      `One Size`
    ]
  ),
  new Product(
    ["c6"],
    "Movado",
    1229.90,
    "https://s.yimg.com/aah/movadobaby/movado-bellina-0606978-8.jpg",
    `Movado:
    - With Manufacturer Serial Numbers
    - Swiss Made
    - Mother of Pearl White Dial
    - Index Hour Markers
    - Diamonds Marking the 3, 6, 9 O'Clock
    - Polished Stainless Steel Bezel
    - Date Feature
    - Movado Dot at 12 O'Clock
    - Minute Markers Around the Outer Rim`,
    [
      `One Size`
    ]
  ),
  new Product(
    ["c6"],
    "watch Main Home",
    2050.00,
    "https://i.pinimg.com/564x/7e/db/2f/7edb2fedfe5eafabd8433cd86ccd9619.jpg", 
    `watch Main Home : 
    Tufina Watches • Handmade in Germany Introducing our model of the month, 
     The 'Miami' Edition. This watch was designed to strike, 
     and it's super functional features will make it perfect for your everyday needs. 
     Check it out today here: TufinaWatches.com/collections/miami`,
    [
      `One Size`
    ]
  ),
  new Product(
    ["c6"],
    "Hublot Big Bang Gold Diamonds",
    1130.00,
    "https://i.pinimg.com/564x/03/5d/75/035d75090f93fe1f6b788fe5b7c3a37d.jpg", 
    `Hublot Big Bang Gold Diamonds : 
    Buy now Hublot Big Bang Gold Diamonds 38mm 361.PX.1280.RX.1104 
    Ladies Watches that embodies feminine lines across a range of modern and
    glamorous that suitable for every occasion.
    Visit our website: www.hautehorologe.ae for more hublot watches online.`,
    [
      `One Size`
    ]
  ),
  new Product(
    ["c6"],
    "RELÓGIO PUMA PU102941001 ULTRASIZE",
    128.90,
    "https://compra24h.com.br/image/cache/catalog//B0089TIZ56/PUMA-Mens-PU102941001-Ultrasize-Analog-Display-Left-Handed-BlackWhite-Sport-Watc-0-500x500.jpg", 
    `RELÓGIO PUMA PU102941001 ULTRASIZE : 
    - Marca :	Puma
    - Modelo : PU102941002
    - Movimento	: Analógico
    - Diâmetro do display : 50mm
    - Material do Display : Metal
    - Resistência à água : 100 metros`,
    [
      `One Size`
    ]
  ),
];

export let BASKET = [];
export const COUPONS = [
  {id:"1", coupon:"coupon", discount: 0.30},
  {id:"2", coupon:"coupon1", discount: 0.40},
  {id:"3", coupon:"coupon2", discount: 0.45},
  {id:"4", coupon:"mo14h5", discount: 0.50},
  {id:"5", coupon:"mohamad145", discount: 0.70}
]