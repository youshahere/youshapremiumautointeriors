export type ImageKey =
  | "vintage-tufted"
  | "vintage-tan-sunlit"
  | "leather-interior"
  | "vintage-sedan"
  | "jaguar-etype"
  | "classic-dash"
  | "mercedes-dash"
  | "daytime-dash"
  | "bmw-wheel"
  | "classic-convertible"
  | "upholsterer-1953"
  | "accessible-taxi";

export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  credit: { title: string; author: string; license: string; url: string };
};

/**
 * Sample imagery from Wikimedia Commons (CC0 / CC BY / CC BY-SA). None of these are Yousha project photos.
 * Replace with real workshop photography: drop files in /public/images and update `src`, `alt` and `credit`
 * (delete `credit` entries once the photos are the client's own).
 */
export const photos: Record<ImageKey, Photo> = {
  "vintage-tufted": {
    src: "/images/vintage-tufted.jpg",
    alt: "Deep-buttoned, diamond-tufted black leather upholstery lit against a dark background",
    width: 1800,
    height: 1200,
    credit: { title: "Vintage steering wheel couch (Unsplash)", author: "Lazlo Panaflex heiliger_bimbam", license: "CC0", url: "https://commons.wikimedia.org/wiki/File:Vintage_steering_wheel_couch_(Unsplash).jpg" },
  },
  "vintage-tan-sunlit": {
    src: "/images/vintage-tan-sunlit.jpg",
    alt: "Sunlit tan leather seats and wood-rimmed steering wheel inside a classic coupe",
    width: 1800,
    height: 1200,
    credit: { title: "Vintage car interior (Unsplash)", author: "Sean DuBois seandubois", license: "CC0", url: "https://commons.wikimedia.org/wiki/File:Vintage_car_interior_(Unsplash).jpg" },
  },
  "leather-interior": {
    src: "/images/leather-interior.jpg",
    alt: "Tan leather seat and gear gaiter in a classic sports-car cockpit",
    width: 1800,
    height: 1200,
    credit: { title: "Leather car interior (Unsplash)", author: "Pietro De Grandi peter_mc_greats", license: "CC0", url: "https://commons.wikimedia.org/wiki/File:Leather_car_interior_(Unsplash).jpg" },
  },
  "vintage-sedan": {
    src: "/images/vintage-sedan.jpg",
    alt: "Pale blue classic sedan interior with tan leather bench seat and slim steering wheel",
    width: 1800,
    height: 1350,
    credit: { title: "Interior vintage car. (Unsplash VhZwLM6DIdw)", author: "Ryan Tauss ryantauss", license: "CC0", url: "https://commons.wikimedia.org/wiki/File:Interior_vintage_car._(Unsplash_VhZwLM6DIdw).jpg" },
  },
  "jaguar-etype": {
    src: "/images/jaguar-etype.jpg",
    alt: "Classic Jaguar E-Type coupe with red leather interior parked on a paved street",
    width: 1800,
    height: 1142,
    credit: { title: "You've got Jaguar Style (Unsplash)", author: "Clem Onojeghuo clemono2", license: "CC0", url: "https://commons.wikimedia.org/wiki/File:You%27ve_got_Jaguar_Style_(Unsplash).jpg" },
  },
  "classic-dash": {
    src: "/images/classic-dash.jpg",
    alt: "Chrome-spoked steering wheel and red burr dashboard in a classic saloon",
    width: 1800,
    height: 1200,
    credit: { title: "A classic dash (Unsplash)", author: "Clem Onojeghuo clemono2", license: "CC0", url: "https://commons.wikimedia.org/wiki/File:A_classic_dash_(Unsplash).jpg" },
  },
  "mercedes-dash": {
    src: "/images/mercedes-dash.jpg",
    alt: "Steering wheel and dashboard of a modern Mercedes-Benz interior",
    width: 1800,
    height: 1201,
    credit: { title: "Mercedes Benz car (Unsplash)", author: "Oliur Rahman ultralinx", license: "CC0", url: "https://commons.wikimedia.org/wiki/File:Mercedes_Benz_car_(Unsplash).jpg" },
  },
  "daytime-dash": {
    src: "/images/daytime-dash.jpg",
    alt: "Leather steering wheel and dashboard of a sports car in warm daylight",
    width: 1800,
    height: 1200,
    credit: { title: "Car interior during the daytime (Unsplash)", author: "Pietro De Grandi peter_mc_greats", license: "CC0", url: "https://commons.wikimedia.org/wiki/File:Car_interior_during_the_daytime_(Unsplash).jpg" },
  },
  "bmw-wheel": {
    src: "/images/bmw-wheel.jpg",
    alt: "Close view of a black leather steering wheel with BMW badge",
    width: 1800,
    height: 1200,
    credit: { title: "BMW steering wheel (Unsplash)", author: "Mason Jones masonjonesphoto", license: "CC0", url: "https://commons.wikimedia.org/wiki/File:BMW_steering_wheel_(Unsplash).jpg" },
  },
  "classic-convertible": {
    src: "/images/classic-convertible.jpg",
    alt: "Interior of a classic convertible with tan leather seats and sheepskin cover in golden light",
    width: 1202,
    height: 1800,
    credit: { title: "Classic convertible car interior showcasing vintage design during golden hour in a rural setting", author: "Shixart1985", license: "CC BY 2.0", url: "https://commons.wikimedia.org/wiki/File:Classic_convertible_car_interior_showcasing_vintage_design_during_golden_hour_in_a_rural_setting.jpg" },
  },
  "upholsterer-1953": {
    src: "/images/upholsterer-1953.jpg",
    alt: "Black and white photograph of an upholsterer working at a sewing machine in a 1953 workshop",
    width: 1800,
    height: 1426,
    credit: { title: "Upholsterer at work Otahuhu workshops. PHOTOGRAPHER J.F. Le Cren DATE 1953", author: "Archives New Zealand", license: "CC BY 2.0", url: "https://commons.wikimedia.org/wiki/File:Upholsterer_at_work_Otahuhu_workshops._PHOTOGRAPHER_J.F._Le_Cren_DATE_1953.jpg" },
  },
  "accessible-taxi": {
    src: "/images/accessible-taxi.jpg",
    alt: "Wheelchair lift platform lowered at the rear of a wheelchair-accessible taxi",
    width: 1800,
    height: 1350,
    credit: { title: "Wheelchair Accessible Taxi lift platform New Farm Park New Farm P1150239", author: "John Robert McPherson", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Wheelchair_Accessible_Taxi_lift_platform_New_Farm_Park_New_Farm_P1150239.jpg" },
  },
};
