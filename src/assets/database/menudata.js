import burgerCheeseburgerImage from './burger_cheeseburger.jpg';
import burgerCheeseburgerMenuImage from './burger_cheeseburger_menu.jpg';
import burgerChickenBurgerImage from './burger_chicken_burger.jpg';
import burgerChickenBurgerMenuImage from './burger_chicken_burger_menu.jpg';
import burgerChickenCheeseburgerImage from './burger_chicken_cheese_burger.jpg';
import burgerDoubleCheeseburgerImage from './burger_double_cheeseburger.jpg';
import burgerDoubleCheeseburgerMenuImage from './burger_double_cheeseburger_menu.jpg';
import burgerHamburgerImage from './burger_hamburger.jpg';
import burgerHamburgerMenuImage from './burger_hamburger_menu.jpg';
import burgerPlasetBurgerImage from './burger_plaset_burger.jpg';
import burgerPlasetBurgerMenuImage from './burger_plaset_burger_menu.jpg';
import burgerTraditionalBurgerImage from './burger_traditional_burger.jpg';
import chickenDonerBoxImage from './chicken_doner_box.jpg';
import chickenNuggetsImage from './chicken_nuggets.jpg';
import chickenSaladImage from './chicken_salad.jpg';
import chickenWingsImage from './chicken_wings.jpg';
import donerBeefImage from './doner_beef.jpg';
import donerBeefMenuImage from './doner_beef_menu.jpg';
import donerChickenImage from './doner_chicken.jpg';
import donerChickenMenuImage from './doner_chicken_menu.jpg';
import durumBeefImage from './durum_beef.jpg';
import durumBeefMenuImage from './durum_beef_menu.jpg';
import durumChickenImage from './durum_chicken.jpg';
import durumChickenMenuImage from './durum_chicken_menu.jpg';
import friesImage from './fries.jpg';
import onionRingsImage from './onion_rings.jpg';
import potatoWedgesImage from './potato_wedges.jpg';
import toastMenuImage from './toast_menu.jpg';
import wrapChickenMenuImage from './wrap_chicken_menu.jpg';
import beefDonerBoxImage from './beef_doner_box.jpg';

const menuData = {
    menu: {
        doner: {
            chicken_doner: {
                title: "Chicken doner",
                description: "пилешко месо, мешана салата, зелка, кромид, морков, кисели краставички, бел сос, лут сос, Andalouse+Samurai Sauce",
                price: 180,
                image: donerChickenImage
            },
            beef_doner: {
                title: "Beef doner",
                description: "телешко месо, мешана салата, зелка, кромид, морков, кисели краставички, бел сос, лут сос, andalouse+samurai Sauce",
                price: 180,
                image: donerBeefImage
            }
        },
        durum: {
            chicken_durum: {
                title: "Chicken durum",
                description: "пилешко месо, мешана салата, зелка, кромид, морков, кисели краставички, бел сос, лут сос, Andalouse+Samurai Sause",
                price: 200,
                image: durumChickenImage
            },
            beef_durum: {
                title: "Beef durum",
                description: "телешко месо, мешана салата, зелка, кромид, морков, кисели краставички, бел сос, лут сос, andalouse+samurai Sause",
                price: 200,
                image: durumBeefImage
            }

        },

        doner_and_durum_menu: {
            beef_doner_menu: {
                title: "Beef Doner Menu",
                description: "телешко месо, мешана салата, ...",
                sizes: {
                    S: {price: 250},
                    M: {price: 280},
                    L: {price: 310},

                },
                image: donerBeefMenuImage
            },
            chicken_doner_menu: {
                title: "Chicken Doner Menu",
                description: "пилешко месо, мешана салата, ...",
                sizes: {
                    S: {price: 250},
                    M: {price: 280},
                    L: {price: 310},
                    // Additional sizes if needed
                },
                image: donerChickenMenuImage
            },
            chicken_wrap_menu: {
                title: "Chicken Wrap Menu",
                description: "пилешки нагетс, ајсберг, домат, мајонез",
                sizes: {
                    S: {price: 270},
                    M: {price: 310},
                    L: {price: 350}
                },
                image: wrapChickenMenuImage
            },
            beef_durum_menu: {
                title: "Beef Durum Menu",
                description: "телешко месо, мешана салата, зелка, кромид, морков, кисели краставички, бел сос, лут сос, аndalouse+samurai Sauce",
                sizes: {
                    S: { price: 280 },
                    M: { price: 320 },
                    L: { price: 360 },
                    XL: { price: 390 },
                    XXL: { price: 430 }
                },
                image: durumBeefMenuImage
            },
            chicken_durum_menu: {
                title: "Chicken Durum Menu",
                description: "пилешко месо, мешана салата, зелка, кромид, морков, кисели краставички, бел сос, лут сос, Andalouse+Samurai Sause",
                sizes: {
                    S: { price: 280 },
                    M: { price: 320 },
                    L: { price: 360 },
                    XL: { price: 390 },
                    XXL: { price: 430 }
                },
                image: durumChickenMenuImage
            }
        },
        snacks: {
            chicken_nuggets: {
                title: "Chicken Nuggets",
                description: "6 pieces or 9 pieces",
                sizes: {
                    "6 pieces": {price: 130},
                    "9 pieces": {price: 150}
                },
                image: chickenNuggetsImage
            },
            chicken_wings: {
                title: "Chicken Wings",
                description: "6 pieces or 9 pieces",
                sizes: {
                    "6 pieces": {price: 150},
                    "9 pieces": {price: 180}
                },
                image: chickenWingsImage
            },
            onion_rings: {
                title: "Onion Rings",
                sizes: {
                    "6 pieces": { price: 80 },
                    "8 pieces": { price: 90 },
                    "10 pieces": { price: 100 }
                },
                image: onionRingsImage
            },
            potato_wedges: {
                title: "Potato Wedges",
                sizes: {
                    M: { price: 80 },
                    L: { price: 100 }
                },
                image: potatoWedgesImage
            },
            fries: {
                title: "Fries",
                sizes: {
                    S: { price: 50 },
                    M: { price: 80 },
                    L: { price: 100 }
                },
                image: friesImage
            }
        },
        burger: {
            chicken_cheese_burger: {
                title: "Chicken Cheese Burger",
                description: "пилешко месо, кашкавал, ајсберг, домат, мајонез",
                price: 180,
                image: burgerChickenCheeseburgerImage
            },
            double_cheesburger: {
                title: "Double Cheeseburger",
                description: "месо, ајсберг, домат, кисели краставички, кашкавал, кромид, кечап, мајонез, giant сос",
                price: 260,
                image: burgerDoubleCheeseburgerImage
            },
            chicken_burger: {
                title: "Chicken Burger",
                description: "пилешко месо, ајсберг, домат, мајонез",
                price: 160,
                image: burgerChickenBurgerImage
            },
            plaset_burger: {
                title: "Plaset Burger",
                description: "месо, ајсберг, домат, кисели краставички, кромид, кечап, мајонез, giant сос",
                price: 270,
                image: burgerPlasetBurgerImage
            },
            hamburger: {
                title: "Hamburger",
                description: "телешко месо, ајсберг, домат, кисели краставички, кромид, кечап, мајонез, giant сос",
                price: 160,
                image: burgerHamburgerImage
            },
            cheeseburger: {
                title: "Cheeseburger",
                description: "месо, кашкавал, ајсберг, домат, кисели краставички, кромид, кечап, мајонез, 'giant' сос",
                price: 180,
                image: burgerCheeseburgerImage
            },
            traditional_burger: {
                title: "Traditional Burger",
                description: "месо, ајсберг, домат, кисели краставички, кромид, кечап, мајонез, giant сос",
                price: 180,
                image: burgerTraditionalBurgerImage
            }
        },
        burger_menu: {
            hamburger_menu: {
                title: "Hamburger Menu",
                description: "телешкo месо, ајсберг, домат, кисели краставички, кромид, кечап, мајонез, giant сос",
                sizes: {
                    S: {price: 220},
                    M: {price: 260},
                    L: {price: 290}
                },
                image: burgerHamburgerMenuImage
            },
            cheeseburger_menu: {
                title: "Cheeseburger Menu",
                description: "месо, кашкавал, ајсберг, домат, кисели краставички, кромид, кечап, мајонез, 'giant' сос",
                sizes: {
                    S: {price: 250},
                    M: {price: 280},
                    L: {price: 310}
                },
                image: burgerCheeseburgerMenuImage
            },
            plaset_burger_menu: {
                title: "Plaset Burger Menu",
                sizes: {
                    M: { price: 380 },
                    L: { price: 410 }
                },
                image: burgerPlasetBurgerMenuImage
            },
            doublecheese_burger_menu: {
                title: "Double Cheeseburger Menu",
                sizes: {
                    M: { price: 370 },
                    L: { price: 380 }
                },
                image: burgerDoubleCheeseburgerMenuImage
            },
            chicken_burger_menu: {
                title: "Chicken Burger Menu",
                sizes: {
                    S: { price: 220 },
                    M: { price: 260 },
                    L: { price: 290 }
                },
                image: burgerChickenBurgerMenuImage
            },
            traditional_burger_menu: {
                title: "Traditional Burger Menu",
                sizes: {
                    M: { price: 210 }
                },
                image: burgerTraditionalBurgerImage
            }
        },
        salads: {
            chicken_salad: {
                title: "Chicken Salad",
                description: "поховано пилешко, марула, домат, пченка, giant сос",
                price: 200,
                image: chickenSaladImage
            }
        },
        toasts: {
            toast_menu: {
                title: "Toast Menu",
                description: "пилешка шунка, кашкавал, мајонез, кечап",
                sizes: {
                    M: { price: 160 }
                },
                image: toastMenuImage
            }
        },
        doner_box: {
            chicken_doner_box: {
                title: "Chicken Doner Box",
                description: "пилешко месо, помфрит, бел сос, лут сос, Andalouse+Samurai Sauce",
                price: 200,
                image: chickenDonerBoxImage
            },
            beef_doner_box: {
                title: "Beef Doner Box",
                description: "телешко месо, помфрит, бел сос, лут сос, Andalouse+Samurai Sauce",
                price: 200,
                image: beefDonerBoxImage
            }
        },
    }
};
export default menuData;