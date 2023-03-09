const cities = {
  skopje: {
    ime: "Skopje",
    attractions: [
      {
        ime: "Fortress of Skopje",
        desc: "Commonly referred as Kale, is the highest point in the city overlooking the river Vardar, is dated 6th century.",
        image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/39/a2/c3.jpg"
      },
      {
        ime: "Canyon Matka",
        desc: "Covering over 5,000 hectares, is one of the most popular outdoor destination in Macedonia, and is home to several medieval monasteries.",
        image: "https://www.mywanderlust.pl/wp-content/uploads/2020/06/matka-canyon-1.jpg"
      },
      {
        ime: "Millennium Cross",
        desc: "Built in 2002 is one of the tallest crosses worldwide towering at 66m tall, is situated on the top of Vodno Mountain.",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/f8/c9/ca/photo0jpg.jpg?w=1200&h=-1&s=1"
      }
    ]
  },
  krusevo: {
    ime: "Krusevo",
    attractions:  [
      {
        ime: "Makedonium-Ilinden Monument",
        desc: "Makedonium monument in Krusevo opened August 2 of 1974,  on the 30th anniversary of the Second Session of Anty-fascist Assembly for the National Liberation of Macedonia.",
        image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTLRQ3176Oqx9o4_vRqpHPH_PJkQBw9yQWbhyVbxmpy6BxA4JIF3aE97R4tvPs29g-cZSwyELt29gnkvp9dKbWzVQ",
      },
      {
        ime: "Memorial House of Tose Proeski",
        desc: "The Memorial House of Macedonia's late pop star Tose Proeski is the famous symbol of Krusevo, It won the first place at the global architecture event",
        image: "https://s.inyourpocket.com/gallery/244374.jpg",
      },
      {
        ime: "Panorama All Seasons Adventure",
        desc: "Panorama plays a crutial part of Krusevo's tourism and offers wide range of activities, starting with Quad Adventures, Adventure Park, Paragliding, Mountain Go-Kart, Winter Safari",
        image: "https://panoramaspa.mk/wp-content/uploads/2019/12/AltoLoungeBar.jpg",
      }
    ]
  },
  veles: {
    ime: "Veles",
    attractions:  [
      {
        ime: "Kostav Solev-Racin Memorial House",
        desc: "The house of the greatest poets between the two World Wars, Kosta Solev Racin, In his memorial house today there are many of his scripts, along with other memories related to his life and work.",
        image: "https://travel2macedonia.com/images/photossights/11096284.jpg",
      },
      {
        ime: "Clock Tower Veles",
        desc: "The Clock Tover in Veles was built in the end of the 18th and the beginning of the 19th centuries it was told it could be heard within a radius of 25km.",
        image: "https://photos.wikimapia.org/p/00/01/30/64/60_big.jpg",
      },
      {
        ime: "Lake Mladost",
        desc: "The artificial Mladost lake, situated 8km north from the town in the surrounding of the Otovica village, represents one of the most visited destinations in the area.",
        image: "https://travel2macedonia.com/images/photossights/210929.jpg",
      }
    ]
  },
  Tetovo: {
    ime: "Tetovo",
    attractions:  [
      {
        ime: "Popova Shapka",
        desc: "Popova Shapka is a mountain found in tetovo ready for the adventure hearts, and ski lovers",
        image: "https://macedoniatimes.news/wp-content/uploads/2020/11/Popova.jpg",
      },
      {
        ime: "Tetovo Fortress",
        desc: "The Tetovo Fortress is a ruined fortress and archaeological site in Tetovo, North Macedonia. Because of its location on a hill called Baltepe, it is also known as Baltepe Fortress. The fortress was built beginning in 1820 under Abdurrahman Pasha, who also reconstructed the Šarena Mosque.",
        image: "https://www.tetova.gov.mk/fotos/11a73e47-a4c7_IMG_3828.JPG",
      },
      {
        ime: "Leshok Monastery St.Atanasij",
        desc: "In its complex are the churches of St. Athanasius of Alexandria and the Holy Mother of God Church. The Church of the Holy Virgin, built in 1326, is an excellent example of Byzantine style and architectural tradition. The church has three layers of frescoes.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Le%C5%A1o%C4%8Dki_na_esen_%284%29.JPG/375px-Le%C5%A1o%C4%8Dki_na_esen_%284%29.JPG",
      }
    ]
  },
  Ohrid: {
    ime: "Ohrid",
    attractions:  [
      {
        ime: "Church of Saint John the Theologian Kaneo",
        desc: "Saint John the Theologian, Kaneo or simply Saint John at Kaneo is a Macedonian Orthodox church situated on the cliff over Kaneo Beach overlooking Lake Ohrid in the city of Ohrid",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Iglesia_San_Juan_Kaneo%2C_Ohrid%2C_Macedonia_del_Norte%2C_2014-04-17%2C_DD_19.jpg",
      },
      {
        ime: "Church of Saint Sophia",
        desc: "The Church of Saint Sophia is a church in Ohrid, North Macedonia. The church is one of the most important monuments of Macedonia, housing architecture and art from the Middle Ages.",
        image: "https://live.staticflickr.com/65535/51395460865_c67b76342c_b.jpg",
      },
      {
        ime: "The Bay of Bones",
        desc: "The museum on water, otherwise known as Bay of Bones, is an archeological complex located at the excavation site of Ploca Micov Kamen, near Gradishte and Pestani along the Ohrid coast. An authentic reconstruction of the pile dwelling settlement, Bay of Bones is a very popular day trip and one of the most attractive destinations in Ohrid and Macedonia.",
        image: "https://i2.wp.com/www.discoveringmacedonia.com/wp-content/uploads/2018/07/Bay-of-Bones-MK-from-above.jpg?w=1000&ssl=12",
      }
    ]
  },
  Kumanovo: {
    ime: "Kumanovo",
    attractions:  [
      {
        ime: "Matejce Monastery",
        desc: "Matejce monastery is dedicated to the Dormition of the Ascension of Holy Mother and is located at an altitude of 999 meters above the sea level. Matejce monastery is currently undergoing one of the toughest periods of its formation and is left on the edge of time.",
        image: "https://sdk.mk/wp-content/uploads/2018/09/matejche1.jpg",
      },
      {
        ime: "Zebrnjak Memorial",
        desc: "Zebrnjak is built during the Serbian occupation of Macedonia (1913-1941). Zebrnjak memorial represents a monument over the Serbian victory against the Ottomans in the First Balkan war in 1912.",
        image: "https://travel2macedonia.com/images/sights/115/zebrnjak.jpg",
      },
      {
        ime: "ASNOM Memorial Complex",
        desc: "The ASNOM memorial center is a building located in the village of Pelince, in the northern part of Macedonia. It was built in 2004 and is a copy of the original building where the first plenary session of the Anti-Fascist Assembly for the People's Liberation of Macedonia (ASNOM) was held, which is located in the Prohor Pchinjski monastery in neighboring Serbia, 2 km from the memorial center.",
        image: "https://travel2macedonia.com/images/photossights/28345093.jpg",
      }
    ]
  },
}
