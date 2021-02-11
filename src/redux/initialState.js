const initialState = {
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
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://s3.amazonaws.com/furniture.retailcatalog.us/products/425521018/small/jerary-queen-upholstered-bed-0.jpg',
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://www.happybeds.co.uk/media/catalog/product/cache/2760f187cb7d1bcdeca5818f247800d3/f/e/fenton_grey_ottoman_2.jpg',
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://i.postimg.cc/7LN4f1XG/Aurora-Bed-Pink-Value-Flooring-and-Furniture.jpg',
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8YmVkfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/811Ah5JX4rL._AC_SL1500_.jpg',
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/81S7gVpRgML._AC_SL1500_.jpg',
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/815GfbJE%2BXL._AC_SX679_.jpg',
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://content.valuecityfurniture.com/images/product/lydia_gray_twin-daybed-with-trundle_2748355_795887.jpg?akimg=product-img-950x950&ak-trim=false',
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/612cA5lJqML._AC_SL1000_.jpg',
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://www.fortywinks.com.au/getmedia/d12b30d7-70af-4e56-8b5c-0601b754402d/jackson_bed_frame_contour-angle.jpg?width=1200',
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://www.bedknobsherts.co.uk/wp-content/uploads/2019/12/image-emperor-low-footend-wooden-bed-frame.jpg',
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://cdn.shopify.com/s/files/1/2660/5202/products/zkfd0a3bsj7hrfqllsyk_1400x.jpg?v=1598896473',
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://cdn.shopify.com/s/files/1/2513/8850/products/SNZXXXX_Palace_QS_3-Drawer_Bedframe_NA_Lifestyle_Angle-1_1024x@2x.progressive.jpg?v=1599800007',
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://www.noaandnani.co.uk/images/single-bed-dorset-in-white-p81-6200_image.jpg',
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://www.ikea.com/th/en/images/products/slattum-upholstered-bed-frame-knisa-light-grey__0726695_PE735410_S5.JPG?f=s',
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://www.ikea.com/de/de/images/products/lauvik-boxbett-hafslo-mittelfest-beige__0419408_PE576296_S5.JPG?f=g',
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://www.ikea.com/de/de/images/products/kongsfjord-boxspringbett-hyllestad-mittelfest-tustna-djuparp-dunkelgrau__0891309_PE782265_S5.JPG?f=s',
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://www.ikea.com/de/de/images/products/dunvik-boxspringbett-hyllestad-fest-tustna-gunnared-blau__0794070_PE765495_S5.JPG?f=g',
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://res.cloudinary.com/sleepnumber/image/upload/f_auto,q_auto:good/v1612973895/workarea/catalog/product_images/ile-360/postcard_desktop',
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://www.barkerandstonehouse.co.uk/images/uploaded/zoom/ODEON-HIGHBED_1_Zoom.jpg',
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://www.brunobett.de/img/boxspring/buyslide-schraeg-2019/hg/klassik_hg_mt.jpg?d=1?v=2',
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://www.moebel-eins.de/out/pictures/master/product/1/paletti-180-fichte-milieu.jpg',
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: 'https://www.betten.de/img/schubkasten-bett-pasja-wildeiche-geoelt.jpg',
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://www.boxspring-welt.de/media/catalog/product/cache/1/image/fa765be5305a3720671b9e506079707b/p/a/paula_pale_1.jpg',
    },
    {
      id: 'chair-royal-ludwik-1',
      name: 'Chair Royal Ludwik 1',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'chair-royal-ludwik-2',
      name: 'Chair Royal Ludwik 2',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'chair-royal-ludwik-3',
      name: 'Chair Royal Ludwik 3',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'chair-royal-ludwik-4',
      name: 'Chair Royal Ludwik 4',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'chair-royal-ludwik-5',
      name: 'Chair Royal Ludwik 5',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'chair-royal-ludwik-6',
      name: 'Chair Royal Ludwik 6',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'chair-royal-ludwik-7',
      name: 'Chair Royal Ludwik 7',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'chair-royal-ludwik-8',
      name: 'Chair Royal Ludwik 8',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'chair-royal-ludwik-9',
      name: 'Chair Royal Ludwik 9',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'chair-royal-ludwik-10',
      name: 'Chair Royal Ludwik 10',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'chair-royal-ludwik-11',
      name: 'Chair Royal Ludwik 11',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'chair-royal-ludwik-12',
      name: 'Chair Royal Ludwik 12',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'chair-royal-ludwik-13',
      name: 'Chair Royal Ludwik 13',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'chair-royal-ludwik-14',
      name: 'Chair Royal Ludwik 14',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'chair-royal-ludwik-15',
      name: 'Chair Royal Ludwik 15',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'sofa-empire-classic-1',
      name: 'Sofa Empire Classic 1',
      category: 'sofa',
      price: 42,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'sofa-empire-classic-2',
      name: 'Sofa Empire Classic 2',
      category: 'sofa',
      price: 42,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'sofa-empire-classic-3',
      name: 'Sofa Empire Classic 3',
      category: 'sofa',
      price: 42,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'sofa-empire-classic-4',
      name: 'Sofa Empire Classic 4',
      category: 'sofa',
      price: 42,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'sofa-empire-classic-5',
      name: 'Sofa Empire Classic 5',
      category: 'sofa',
      price: 42,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'sofa-empire-classic-6',
      name: 'Sofa Empire Classic 6',
      category: 'sofa',
      price: 42,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'sofa-empire-classic-7',
      name: 'Sofa Empire Classic 7',
      category: 'sofa',
      price: 42,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'sofa-empire-classic-8',
      name: 'Sofa Empire Classic 8',
      category: 'sofa',
      price: 42,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'sofa-empire-classic-9',
      name: 'Sofa Empire Classic 9',
      category: 'sofa',
      price: 42,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'sofa-empire-classic-10',
      name: 'Sofa Empire Classic 10',
      category: 'sofa',
      price: 42,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'sofa-empire-classic-11',
      name: 'Sofa Empire Classic 11',
      category: 'sofa',
      price: 42,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'sofa-empire-classic-12',
      name: 'Sofa Empire Classic 12',
      category: 'sofa',
      price: 42,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'table-brooklyn-grey-1',
      name: 'Table Brooklyn Grey 1',
      category: 'table',
      price: 37,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'table-brooklyn-grey-2',
      name: 'Table Brooklyn Grey 2',
      category: 'table',
      price: 37,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'table-brooklyn-grey-3',
      name: 'Table Brooklyn Grey 3',
      category: 'table',
      price: 37,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'table-brooklyn-grey-4',
      name: 'Table Brooklyn Grey 4',
      category: 'table',
      price: 37,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'table-brooklyn-grey-5',
      name: 'Table Brooklyn Grey 5',
      category: 'table',
      price: 37,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'table-brooklyn-grey-6',
      name: 'Table Brooklyn Grey 6',
      category: 'table',
      price: 37,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'dining-luxxxury-set-1',
      name: 'Dining Luxxxury Set 1',
      category: 'dining',
      price: 100,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'dining-luxxxury-set-2',
      name: 'Dining Luxxxury Set 2',
      category: 'dining',
      price: 100,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'dining-luxxxury-set-3',
      name: 'Dining Luxxxury Set 3',
      category: 'dining',
      price: 100,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'dining-luxxxury-set-4',
      name: 'Dining Luxxxury Set 4',
      category: 'dining',
      price: 100,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'dining-luxxxury-set-5',
      name: 'Dining Luxxxury Set 5',
      category: 'dining',
      price: 100,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'dining-luxxxury-set-6',
      name: 'Dining Luxxxury Set 6',
      category: 'dining',
      price: 100,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'dining-luxxxury-set-7',
      name: 'Dining Luxxxury Set 7',
      category: 'dining',
      price: 100,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'dining-luxxxury-set-8',
      name: 'Dining Luxxxury Set 8',
      category: 'dining',
      price: 100,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'dining-luxxxury-set-9',
      name: 'Dining Luxxxury Set 9',
      category: 'dining',
      price: 100,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'dining-luxxxury-set-10',
      name: 'Dining Luxxxury Set 10',
      category: 'dining',
      price: 100,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
  ],
  cart: {
    products: [],
  },
};

export default initialState;
