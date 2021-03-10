let initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 30,
      stars: 4,
      starRating: true,
      promo: 'sale',
      newFurniture: true,
      subcategory: 'featured',
      image:
        'https://s3.amazonaws.com/furniture.retailcatalog.us/products/425521018/small/jerary-queen-upholstered-bed-0.jpg',
      favourite: true,
      hotdeal: false,
      text:
        'Phasellus dui gravida non, posuere egestas a, elementum odio lobortis elit. Sed molestie, nunc justo, hendrerit nunc faucibus eu, leo.',

      quickView: false,

    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      subcategory: 'topSeller',
      image:
        'https://www.happybeds.co.uk/media/catalog/product/cache/2760f187cb7d1bcdeca5818f247800d3/f/e/fenton_grey_ottoman_2.jpg',
      hotdeal: false,
      text:
        'Phasellus dui gravida non, posuere egestas a, elementum odio lobortis elit. Sed molestie, nunc justo, hendrerit nunc faucibus eu, leo.',

      quickView: false,
 
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      subcategory: 'saleOff',
      image:
        'https://images.pexels.com/photos/6284232/pexels-photo-6284232.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      favourite: true,
      hotdeal: false,
      text:
        'Phasellus dui gravida non, posuere egestas a, elementum odio lobortis elit. Sed molestie, nunc justo, hendrerit nunc faucibus eu, leo.',

      quickView: false,

    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      subcategory: 'topRated',
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8YmVkfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
      hotdeal: false,
      text:
        'Phasellus dui gravida non, posuere egestas a, elementum odio lobortis elit. Sed molestie, nunc justo, hendrerit nunc faucibus eu, leo.',

      quickView: false,

    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      subcategory: 'featured',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/811Ah5JX4rL._AC_SL1500_.jpg',
      hotdeal: false,
      text:
        'Phasellus dui gravida non, posuere egestas a, elementum odio lobortis elit. Sed molestie, nunc justo, hendrerit nunc faucibus eu, leo.',
      quickView: false,

    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      subcategory: 'topSeller',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/81S7gVpRgML._AC_SL1500_.jpg',
      hotdeal: false,
      text:
        'Phasellus dui gravida non, posuere egestas a, elementum odio lobortis elit. Sed molestie, nunc justo, hendrerit nunc faucibus eu, leo.',
      quickView: false,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      subcategory: 'saleOff',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/815GfbJE%2BXL._AC_SX679_.jpg',
      hotdeal: false,
      text:
        'Phasellus dui gravida non, posuere egestas a, elementum odio lobortis elit. Sed molestie, nunc justo, hendrerit nunc faucibus eu, leo.',

      quickView: false,

    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      subcategory: 'topRated',
      image:
        'https://content.valuecityfurniture.com/images/product/lydia_gray_twin-daybed-with-trundle_2748355_795887.jpg?akimg=product-img-950x950&ak-trim=false',
      hotdeal: false,
      text:
        'Phasellus dui gravida non, posuere egestas a, elementum odio lobortis elit. Sed molestie, nunc justo, hendrerit nunc faucibus eu, leo.',

      quickView: false,

    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      subcategory: 'featured',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/612cA5lJqML._AC_SL1000_.jpg',
      hotdeal: false,
      text:
        'Phasellus dui gravida non, posuere egestas a, elementum odio lobortis elit. Sed molestie, nunc justo, hendrerit nunc faucibus eu, leo.',

      quickView: false,

    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      subcategory: 'topSeller',
      image:
        'https://www.fortywinks.com.au/getmedia/d12b30d7-70af-4e56-8b5c-0601b754402d/jackson_bed_frame_contour-angle.jpg?width=1200',
      hotdeal: false,
      text:
        'Phasellus dui gravida non, posuere egestas a, elementum odio lobortis elit. Sed molestie, nunc justo, hendrerit nunc faucibus eu, leo.',

      quickView: false,

    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      subcategory: 'saleOff',
      image:
        'https://www.bedknobsherts.co.uk/wp-content/uploads/2019/12/image-emperor-low-footend-wooden-bed-frame.jpg',
      hotdeal: false,
      text:
        'Phasellus dui gravida non, posuere egestas a, elementum odio lobortis elit. Sed molestie, nunc justo, hendrerit nunc faucibus eu, leo.',

      quickView: false,

    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      subcategory: 'topRated',
      image:
        'https://cdn.shopify.com/s/files/1/2660/5202/products/zkfd0a3bsj7hrfqllsyk_1400x.jpg?v=1598896473',
      hotdeal: false,
      text:
        'Phasellus dui gravida non, posuere egestas a, elementum odio lobortis elit. Sed molestie, nunc justo, hendrerit nunc faucibus eu, leo.',

      quickView: false,

    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      subcategory: 'featured',
      image:
        'https://cdn.shopify.com/s/files/1/2513/8850/products/SNZXXXX_Palace_QS_3-Drawer_Bedframe_NA_Lifestyle_Angle-1_1024x@2x.progressive.jpg?v=1599800007',
      hotdeal: false,
      text:
        'Phasellus dui gravida non, posuere egestas a, elementum odio lobortis elit. Sed molestie, nunc justo, hendrerit nunc faucibus eu, leo.',

      quickView: false,

    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      subcategory: 'topSeller',
      image:
        'https://www.noaandnani.co.uk/images/single-bed-dorset-in-white-p81-6200_image.jpg',
      hotdeal: false,
      text:
        'Phasellus dui gravida non, posuere egestas a, elementum odio lobortis elit. Sed molestie, nunc justo, hendrerit nunc faucibus eu, leo.',
      quickView: false,

    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      subcategory: 'saleOff',
      image:
        'https://www.ikea.com/th/en/images/products/slattum-upholstered-bed-frame-knisa-light-grey__0726695_PE735410_S5.JPG?f=s',
      hotdeal: false,
      text:
        'Phasellus dui gravida non, posuere egestas a, elementum odio lobortis elit. Sed molestie, nunc justo, hendrerit nunc faucibus eu, leo.',

      quickView: false,

    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      subcategory: 'topRated',
      image:
        'https://www.ikea.com/de/de/images/products/lauvik-boxbett-hafslo-mittelfest-beige__0419408_PE576296_S5.JPG?f=g',
      hotdeal: false,
      text:
        'Phasellus dui gravida non, posuere egestas a, elementum odio lobortis elit. Sed molestie, nunc justo, hendrerit nunc faucibus eu, leo.',

      quickView: false,

    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      subcategory: 'featured',
      image:
        'https://www.ikea.com/de/de/images/products/kongsfjord-boxspringbett-hyllestad-mittelfest-tustna-djuparp-dunkelgrau__0891309_PE782265_S5.JPG?f=s',
      hotdeal: false,
      text:
        'Phasellus dui gravida non, posuere egestas a, elementum odio lobortis elit. Sed molestie, nunc justo, hendrerit nunc faucibus eu, leo.',

      quickView: false,

    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      subcategory: 'topSeller',
      image:
        'https://www.ikea.com/de/de/images/products/dunvik-boxspringbett-hyllestad-fest-tustna-gunnared-blau__0794070_PE765495_S5.JPG?f=g',
      hotdeal: false,
      text:
        'Phasellus dui gravida non, posuere egestas a, elementum odio lobortis elit. Sed molestie, nunc justo, hendrerit nunc faucibus eu, leo.',

      quickView: false,

    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      subcategory: 'saleOff',
      image:
        'https://res.cloudinary.com/sleepnumber/image/upload/f_auto,q_auto:good/v1612973895/workarea/catalog/product_images/ile-360/postcard_desktop',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      subcategory: 'topRated',
      image:
        'https://www.barkerandstonehouse.co.uk/images/uploaded/zoom/ODEON-HIGHBED_1_Zoom.jpg',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      subcategory: 'featured',
      image:
        'https://www.brunobett.de/img/boxspring/buyslide-schraeg-2019/hg/klassik_hg_mt.jpg?d=1?v=2',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      subcategory: 'topSeller',
      image:
        'https://www.moebel-eins.de/out/pictures/master/product/1/paletti-180-fichte-milieu.jpg',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      subcategory: 'saleOff',
      image: 'https://www.betten.de/img/schubkasten-bett-pasja-wildeiche-geoelt.jpg',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      subcategory: 'topRated',
      image:
        'https://www.boxspring-welt.de/media/catalog/product/cache/1/image/fa765be5305a3720671b9e506079707b/p/a/paula_pale_1.jpg',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'chair-royal-ludwik-1',
      name: 'Chair Royal Ludwik 1',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      subcategory: 'featured',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?cs=srgb&dl=pexels-paula-schmidt-963486.jpg&fm=jpg',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'chair-royal-ludwik-2',
      name: 'Chair Royal Ludwik 2',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      subcategory: 'topSeller',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/116910/pexels-photo-116910.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'chair-royal-ludwik-3',
      name: 'Chair Royal Ludwik 3',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      subcategory: 'saleOff',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'chair-royal-ludwik-4',
      name: 'Chair Royal Ludwik 4',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      subcategory: 'topRated',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'chair-royal-ludwik-5',
      name: 'Chair Royal Ludwik 5',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      subcategory: 'featured',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/105004/pexels-photo-105004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'chair-royal-ludwik-6',
      name: 'Chair Royal Ludwik 6',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      subcategory: 'topSeller',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'chair-royal-ludwik-7',
      name: 'Chair Royal Ludwik 7',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      subcategory: 'saleOff',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'chair-royal-ludwik-8',
      name: 'Chair Royal Ludwik 8',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      subcategory: 'topRated',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/4857774/pexels-photo-4857774.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'chair-royal-ludwik-9',
      name: 'Chair Royal Ludwik 9',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'chair-royal-ludwik-10',
      name: 'Chair Royal Ludwik 10',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/1766485/pexels-photo-1766485.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'chair-royal-ludwik-11',
      name: 'Chair Royal Ludwik 11',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      subcategory: 'topRated',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/2495555/pexels-photo-2495555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'chair-royal-ludwik-12',
      name: 'Chair Royal Ludwik 12',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/1366872/pexels-photo-1366872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'chair-royal-ludwik-13',
      name: 'Chair Royal Ludwik 13',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/2179214/pexels-photo-2179214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotDeal: true,
      quickView: false,
    },
    {
      id: 'chair-royal-ludwik-14',
      name: 'Chair Royal Ludwik 14',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'chair-royal-ludwik-15',
      name: 'Chair Royal Ludwik 15',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/2258083/pexels-photo-2258083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'sofa-empire-classic-1',
      name: 'Sofa Empire Classic 1',
      category: 'sofa',
      price: 42,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'sofa-empire-classic-2',
      name: 'Sofa Empire Classic 2',
      category: 'sofa',
      price: 42,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'sofa-empire-classic-3',
      name: 'Sofa Empire Classic 3',
      category: 'sofa',
      price: 42,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'sofa-empire-classic-4',
      name: 'Sofa Empire Classic 4',
      category: 'sofa',
      price: 42,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotDeal: true,
      quickView: false,
    },
    {
      id: 'sofa-empire-classic-5',
      name: 'Sofa Empire Classic 5',
      category: 'sofa',
      price: 42,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'sofa-empire-classic-6',
      name: 'Sofa Empire Classic 6',
      category: 'sofa',
      price: 42,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'sofa-empire-classic-7',
      name: 'Sofa Empire Classic 7',
      category: 'sofa',
      price: 42,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/698170/pexels-photo-698170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'sofa-empire-classic-8',
      name: 'Sofa Empire Classic 8',
      category: 'sofa',
      price: 42,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/269141/pexels-photo-269141.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'sofa-empire-classic-9',
      name: 'Sofa Empire Classic 9',
      category: 'sofa',
      price: 42,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'sofa-empire-classic-10',
      name: 'Sofa Empire Classic 10',
      category: 'sofa',
      price: 42,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/945669/pexels-photo-945669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'sofa-empire-classic-11',
      name: 'Sofa Empire Classic 11',
      category: 'sofa',
      price: 42,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/133919/pexels-photo-133919.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'sofa-empire-classic-12',
      name: 'Sofa Empire Classic 12',
      category: 'sofa',
      price: 42,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/2986011/pexels-photo-2986011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'table-brooklyn-grey-1',
      name: 'Table Brooklyn Grey 1',
      category: 'table',
      price: 37,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/2451264/pexels-photo-2451264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'table-brooklyn-grey-2',
      name: 'Table Brooklyn Grey 2',
      category: 'table',
      price: 37,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/2098913/pexels-photo-2098913.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'table-brooklyn-grey-3',
      name: 'Table Brooklyn Grey 3',
      category: 'table',
      price: 37,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotDeal: true,
      quickView: false,
    },
    {
      id: 'table-brooklyn-grey-4',
      name: 'Table Brooklyn Grey 4',
      category: 'table',
      price: 37,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/2995012/pexels-photo-2995012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'table-brooklyn-grey-5',
      name: 'Table Brooklyn Grey 5',
      category: 'table',
      price: 37,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/280471/pexels-photo-280471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'table-brooklyn-grey-6',
      name: 'Table Brooklyn Grey 6',
      category: 'table',
      price: 37,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/2092058/pexels-photo-2092058.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'dining-luxxxury-set-1',
      name: 'Dining Luxxxury Set 1',
      category: 'dining',
      price: 100,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/6198663/pexels-photo-6198663.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'dining-luxxxury-set-2',
      name: 'Dining Luxxxury Set 2',
      category: 'dining',
      price: 100,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/6207816/pexels-photo-6207816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'dining-luxxxury-set-3',
      name: 'Dining Luxxxury Set 3',
      category: 'dining',
      price: 100,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'dining-luxxxury-set-4',
      name: 'Dining Luxxxury Set 4',
      category: 'dining',
      price: 100,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/6186507/pexels-photo-6186507.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'dining-luxxxury-set-5',
      name: 'Dining Luxxxury Set 5',
      category: 'dining',
      price: 100,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/6045083/pexels-photo-6045083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'dining-luxxxury-set-6',
      name: 'Dining Luxxxury Set 6',
      category: 'dining',
      price: 100,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/4947749/pexels-photo-4947749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'dining-luxxxury-set-7',
      name: 'Dining Luxxxury Set 7',
      category: 'dining',
      price: 100,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/6180680/pexels-photo-6180680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'dining-luxxxury-set-8',
      name: 'Dining Luxxxury Set 8',
      category: 'dining',
      price: 100,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/6045127/pexels-photo-6045127.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'dining-luxxxury-set-9',
      name: 'Dining Luxxxury Set 9',
      category: 'dining',
      price: 100,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotdeal: false,
      quickView: false,
    },
    {
      id: 'dining-luxxxury-set-10',
      name: 'Dining Luxxxury Set 10',
      category: 'dining',
      price: 100,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/279648/pexels-photo-279648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hotdeal: false,
      quickView: false,
    },
  ],
  brands: [
    {
      id: 'Brand1',
      name: 'Brand1',
      image:
        'https://images.pexels.com/photos/1337386/pexels-photo-1337386.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    },
    {
      id: 'Brand2',
      name: 'Brand2',
      image:
        'https://images.pexels.com/photos/944743/pexels-photo-944743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 'Brand3',
      name: 'Brand3',
      image:
        'https://images.pexels.com/photos/1580625/pexels-photo-1580625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 'Brand4',
      name: 'Brand4',
      image:
        'https://images.pexels.com/photos/351263/pexels-photo-351263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 'Brand5',
      name: 'Brand5',
      image:
        'https://images.pexels.com/photos/176837/pexels-photo-176837.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    },
    {
      id: 'Brand6',
      name: 'Brand6',
      image:
        'https://images.pexels.com/photos/5849569/pexels-photo-5849569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 'Brand7',
      name: 'Brand7',
      image:
        'https://images.pexels.com/photos/243337/pexels-photo-243337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 'Brand8',
      name: 'Brand8',
      image:
        'https://images.pexels.com/photos/2881205/pexels-photo-2881205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 'Brand9',
      name: 'Brand9',
      image:
        'https://images.pexels.com/photos/258174/pexels-photo-258174.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 'Brand10',
      name: 'Brand10',
      image:
        'https://images.pexels.com/photos/4124334/pexels-photo-4124334.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 'Brand11',
      name: 'Brand11',
      image:
        'https://images.pexels.com/photos/1356300/pexels-photo-1356300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 'Brand12',
      name: 'Brand12',
      image:
        'https://images.pexels.com/photos/2255441/pexels-photo-2255441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
  ],
  cart: {
    products: [],
  },
  feedbacks: [
    {
      id: 'Leo Caprio',
      name: 'Leo Caprio',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan consectetur massa in mattis. Proin vel nunc varius, fringilla odio eget, pretium lectus. Aliquam tincidunt turpis vel imperdiet consectetur. Curabitur sodales tortor a nulla eleifend fringilla. Cras et ligula nibh. Aenean viverra congue urna. Morbi interdum est nisi, et rhoncus arcu vestibulum a.',
      position: 'Sales manager',
      image:
        'https://images.pexels.com/photos/1138903/pexels-photo-1138903.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
      id: 'Neli Rose',
      name: 'Neli Rose',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan consectetur massa in mattis. Proin vel nunc varius, fringilla odio eget, pretium lectus. Aliquam tincidunt turpis vel imperdiet consectetur. Curabitur sodales tortor a nulla eleifend fringilla. Cras et ligula nibh. Aenean viverra congue urna. Morbi interdum est nisi, et rhoncus arcu vestibulum a.',
      position: 'Product designer',
      image:
        'https://images.pexels.com/photos/5999928/pexels-photo-5999928.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
      id: 'Caro Moreno',
      name: 'Caro Morendo',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan consectetur massa in mattis. Proin vel nunc varius, fringilla odio eget, pretium lectus. Aliquam tincidunt turpis vel imperdiet consectetur. Curabitur sodales tortor a nulla eleifend fringilla. Cras et ligula nibh. Aenean viverra congue urna. Morbi interdum est nisi, et rhoncus arcu vestibulum a.',
      position: 'Strategic client',
      image:
        'https://images.pexels.com/photos/5324927/pexels-photo-5324927.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
  ],
  galleryCategories: [
    { id: 'featured', name: 'Featured' },
    { id: 'topSeller', name: 'Top seller' },
    { id: 'saleOff', name: 'Sale off' },
    { id: 'topRated', name: 'Top rated' },
  ],
  galleryPromoProduct: {
    link: 'https://cdn.pixabay.com/photo/2020/02/17/08/12/chair-4855824_960_720.jpg',
    category: 'furniture',
    name: 'Bedroom Bed',
    price: '$50.80',
  },
  hotdeals: [],
  hotdeals_slider: [
    {
      id: 'sofa-empire-classic-16',
      name: 'Sofa Empire Classic 16',
      image:
        'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'chair-empire-classic-13',
      name: 'Chair Empire Classic 13',
      category: 'chair',
      price: 42,
      stars: 2,
      image:
        'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'chair-empire-classic-00',
      name: 'Chair Empire Classic 00',
      image:
        'https://cdn.stocksnap.io/img-thumbs/960w/architecture-building_BOCSDFZZQD.jpg',
    },
  ],
  promotion: [
    {
      id: 'sofa',
      category: 'GUEST ROOM',
      product: 'SOFA',
      sale: '-20%',
      image:
        'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
      id: 'chair',
      category: 'OFFICE',
      product: 'CHAIR',
      addInfo: 'COLLECTION',
      sale: '$200',
      image:
        'https://cdn3.sklum.com/de/771580/teill-colors-burostuhl-mit-radern-und-armlehnen.jpg',
    },
    {
      id: 'bed',
      category: 'SPECIAL',
      addInfo: 'COLLECTION',
      sale: 'SAVE UP 40% OF FURNITURE',
      image:
        'https://images.pexels.com/photos/545012/pexels-photo-545012.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
  ],
  blogArticles: [
    {
      id: 1,
      title: 'Witamy na nowej stronie sklepu',
      image:
        'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?cs=srgb&dl=pexels-eric-montanah-1350789.jpg&fm=jpg',
      text:
        'Lorem ipsum sed felis. Integer eu lectus. Nam libero ante, cursus ut, metus. Curabitur ornare dapibus. Aenean augue eget leo facilisis vel, hendrerit wisi. Sed sed turpis. Donec sollicitudin mi. Aliquam nisl. Nulla lobortis semper. Praesent quis orci. Vestibulum ante imperdiet nec, hendrerit nonummy. Nam sit amet, consectetuer vulputate at, elit.',
      author: 'Bill Clinton',
      data: '18.02.2021',
      category: 'modern',
    },
    {
      id: 2,
      title: 'Title of Post 2',
      image: 'https://placeimg.com/640/300/2',
      text:
        'Phasellus dui gravida non, posuere egestas a, elementum odio lobortis elit. Sed molestie, nunc justo, hendrerit nunc faucibus eu, leo. Integer ac nunc commodo ipsum primis in neque. Vestibulum non leo ut nunc ac turpis luctus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur volutpat at, malesuada fames ac risus. Morbi risus dictum lectus dapibus risus ornare tortor orci, in elit. Quisque adipiscing dui porta tellus wisi, mollis neque vitae erat blandit lectus. Nam lacus.',
      author: 'Barack Obama',
      data: '09.12.2020',
      category: 'retro',
    },
  ],
};

const localFavourite = localStorage.getItem('favourite');

if (localFavourite !== null) {
  const favourite = JSON.parse(localFavourite);

  initialState = {
    ...initialState,
    products: initialState.products.map(product => ({
      ...product,
      favourite: favourite.includes(product.id),
    })),
  };
}

export default initialState;
