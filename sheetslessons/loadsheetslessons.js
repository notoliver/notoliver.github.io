/* data array and size map */
var vids = [
	{
        id: 'wetlandstudio',
        title: 'Wet Land (Hiroshi Yoshimura) Cover + Sheet Music',
        links: [
            {
                url: 'https://youtu.be/Zem8aKrFqzo',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/fTiyi0q37io',
                type: 'original'
            },
            {
                url: 'wetland.pdf',
                type: 'sheetmusic'
            },
            {
                url: 'wetlandkeys.pdf',
                type: 'sheetmusic'
            }
        ]
    },
    {
        id: 'tides',
        title: 'Tides (Men I Trust) Cover + Chords Tutorial',
        links: [
            {
                url: 'https://youtu.be/GIFWmAmjNtw',
                type: 'learn'
            },
            {
                url: 'https://youtu.be/id9abvUtS5s',
                type: 'original'
            },
            {
                url: 'tides.pdf',
                type: 'leadsheet'
            },
            {
                url: 'tidesbass.pdf',
                type: 'btab'
            }
        ]
    },
    {
        id: 'rollwith',
        title: 'I Wanna Roll With You (Connan Mockasin) Cover + Chords',
        links: [
            {
                url: 'https://youtu.be/lQZVZAxCCZc',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/-DnMJxDjauA',
                type: 'original'
            }
        ]
    },
    {
        id: 'goodnight',
        title: 'Good Night (Toshifumi Hinata) Cover',
        links: [
            {
                url: 'https://youtu.be/enFe1PGevWA',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/IISpsvBvV_U',
                type: 'original'
            },
            {
                url: 'goodnight.pdf',
                type: 'gtab'
            }
        ]
    },
    {
        id: 'masteryupa',
        title: 'Master Yupa (Mac DeMarco) Cover + "Production" Tutorial',
        links: [
            {
                url: 'https://youtu.be/az6kXCpMkuM',
                type: 'learn'
            },
            {
                url: 'https://youtu.be/A0nlIdD4Ze0',
                type: 'original'
            }
        ]
    },
    {
        id: 'wetland',
        title: 'Wet Land (Hiroshi Yoshimura) Cover (live from Wetland)',
        links: [
            {
                url: 'https://youtu.be/njgln9-AkNE',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/fTiyi0q37io',
                type: 'original'
            }
        ]
    },
    {
        id: 'foundme',
        title: 'Found Me (Men I Trust) Cover',
        links: [
            {
                url: 'https://youtu.be/lPclgaa0vrg',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/uKMzlzn4Nog',
                type: 'original'
            },
            {
                url: 'foundme.pdf',
                type: 'gtab'
            }
        ]
    },
    {
        id: 'blueandmoody',
        title: 'Blue and Moody Music (Hiroshi Sato) Cover',
        links: [
            {
                url: 'https://youtu.be/y8D5GWGvOl8',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/bQQk4SkmMLY',
                type: 'original'
            },
            {
                url: 'blueandmoody.pdf',
                type: 'leadsheet'
            }
        ]
    },
    {
        id: 'mrsatisfied',
        title: 'Mr. Satisfied (Karl Jenkins) Cover',
        links: [
            {
                url: 'https://youtu.be/RXSwHcoKvGA',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/8GHrfTxq_tA',
                type: 'original'
            },
            {
                url: 'mrsatisfied.pdf',
                type: 'leadsheet'
            }
        ]
    },
    {
        id: 'luckysue',
        title: 'Lucky Sue (Men I Trust) Cover + Chords Tutorial',
        links: [
            {
                url: 'https://youtu.be/RKyyzvxKfIk',
                type: 'learn'
            },
            {
                url: 'https://youtu.be/zIGfy4BMvDg',
                type: 'original'
            },
            {
                url: 'luckysue.pdf',
                type: 'leadsheet'
            },
            {
                url: 'luckysuebass.pdf',
                type: 'btab'
            }
        ]
    },
    {
        id: 'amprental',
        title: 'Amp Rental (Mac DeMarco) Cover',
        links: [
            {
                url: 'https://youtu.be/5HE9W1VLe2E',
                type: 'learn'
            },
            {
                url: 'https://youtu.be/W11TBwr7aRA',
                type: 'original'
            },
            {
                url: 'amprental.pdf',
                type: 'sheetmusic'
            }
        ]
    },
    {
        id: 'alright',
        title: 'Alright (Men I Trust) Cover + Chords Tutorial',
        links: [
            {
                url: 'https://youtu.be/EsH1MpWPZxY',
                type: 'learn'
            },
            {
                url: 'https://youtu.be/yJNkX2ee3pM',
                type: 'original'
            },
            {
                url: 'alrightbass.pdf',
                type: 'btab'
            },
            {
                url: 'alright.pdf',
                type: 'leadsheet'
            }
        ]
    },
    {
        id: 'nostalgiaisland',
        title: 'Nostalgia Island (Tatsuro Yamashita) Cover',
        links: [
            {
                url: 'https://youtu.be/zYAqHYcvKAc',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/52lXg9asnn8',
                type: 'original'
            },
            {
                url: 'nostalgiaisland.pdf',
                type: 'leadsheet'
            }
        ]
    },
    {
        id: 'paperdoll',
        title: 'Paper Doll (Tatsuro Yamashita) Cover',
        links: [
            {
                url: 'https://youtu.be/ihtRlw75vIY',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/h-4pOyPbG6s',
                type: 'original'
            },
            {
                url: 'paperdoll.pdf',
                type: 'leadsheet'
            }
        ]
    },
    {
        id: 'chatdete',
        title: 'Chat D\'Ete (Toshifumi Hinata) Cover',
        links: [
            {
                url: 'https://youtu.be/KplPbg7ob1c',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/AKC-kfVMqcw?t=2091',
                type: 'original'
            },
            {
                url: 'chatdete.pdf',
                type: 'sheetmusic'
            }
        ]
    },
    {
        id: 'sleepnomore',
        title: 'Sleep No More (Crush) Guitar Cover',
        links: [
            {
                url: 'https://youtu.be/DJB8GemMvbI',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/Cv1ymeAe7rY',
                type: 'original'
            },
            {
                url: 'sleepnomore.pdf',
                type: 'leadsheet'
            }
        ]
    },
    {
        id: 'norton',
        title: 'Norton Commander (Men I Trust) Cover + Chords Tutorial',
        links: [
            {
                url: 'https://youtu.be/XVqfnIGLSKM',
                type: 'learn'
            },
            {
                url: 'https://youtu.be/qmVeQEysvtk',
                type: 'original'
            },
            {
                url: 'nortoncommanderbass.pdf',
                type: 'btab'
            },
            {
                url: 'nortoncommander.pdf',
                type: 'leadsheet'
            }
        ]
    },
    {
        id: 'close2u',
        title: 'Close 2 U (Raveena) Instrumental Cover',
        links: [
            {
                url: 'https://youtu.be/3GRBOSfmfbo',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/ojvI_tBsXNQ',
                type: 'original'
            }
        ]
    },
    {
        id: 'otamu',
        title: '\u30AA\u30FC\u30BF\u30E0 - Autumn (Toshifumi Hinata) Cover',
        links: [
            {
                url: 'https://youtu.be/H7wVyxVwTJg',
                type: 'cover'
            },
            {
                url: 'otamu.mp3',
                type: 'original'
            },
            {
                url: 'otamu.pdf',
                type: 'gtab'
            }
        ]
    },
    {
        id: 'supert&t',
        title: 'Super T&T (Animal Crossing: New Leaf) Cover',
        links: [
            {
                url: 'https://youtu.be/a2QEzlEqTkw',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/s4nYGh23GL4',
                type: 'original'
            },
            {
                url: 'supert&t.pdf',
                type: 'leadsheet'
            }
        ]
    },
    {
        id: 'reggiesfirstdate',
        title: 'Reggie\'s First Date (Mac DeMarco) Cover',
        links: [
            {
                url: 'https://youtu.be/y6vsOUNhVQ4',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/CWd4jFKZ06Q',
                type: 'original'
            },
            {
                url: 'reggiesfirstdatebass.pdf',
                type: 'btab'
            },
            {
                url: 'reggiesfirstdateguitar.pdf',
                type: 'gtab'
            }
        ]
    },
    {
        id: '1955.9.30',
        title: '1955.9.30 (Yuji Ohno) Cover + Chords Tutorial',
        links: [
            {
                url: 'https://youtu.be/ffbdnPlL6BA',
                type: 'learn'
            },
            {
                url: 'https://youtu.be/CfD1BcPNIzY?t=2195',
                type: 'original'
            },
            {
                url: '1955.9.30.pdf',
                type: 'leadsheet'
            }
        ]
    },
    {
        id: 'allnightjessesolos',
        title: 'All Night (garage session) (Men I Trust) Jesse Guitar Solo Cover + Transcription',
        links: [
            {
                url: 'https://youtu.be/mvmwUzDVxSM',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/GSipxovUB-4',
                type: 'original'
            },
            {
                url: 'allnightjessesolos.pdf',
                type: 'gtab'
            }
        ]
    },
    {
        id: 'stormy',
        title: 'Stormy (Gabor Szabo) Cover',
        links: [
            {
                url: 'https://youtu.be/E_KGtv8Bblg',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/omZs1q0wnIs',
                type: 'original'
            }
        ]
    },
    {
        id: 'dorian',
        title: 'Dorian (Men I Trust) Piano Cover + Chords/Harmony Lesson',
        links: [
            {
                url: 'https://youtu.be/z-lpruDZHbU',
                type: 'learn'
            },
            {
                url: 'https://youtu.be/4_wKOL20bIM',
                type: 'original'
            },
            {
                url: 'dorian.pdf',
                type: 'leadsheet'
            }
        ]
    },
    {
        id: 'teensex',
        title: 'Teen Sex (infinite bisous) Cover + Chords/Tabs',
        links: [
            {
                url: 'https://youtu.be/BDrncme6pVg',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/TP8u3qImja8',
                type: 'original'
            },
            {
                url: 'teensexbass.pdf',
                type: 'btab'
            },
            {
                url: 'teensexguitar.pdf',
                type: 'gtab'
            }
        ]
    },
    {
        id: 'gosenshi',
        title: 'Gosenshi (Mariya Takeuchi) Guitar Cover + Chords/Comping Tutorial',
        links: [
            {
                url: 'https://youtu.be/F4sSTGECvjI',
                type: 'learn'
            },
            {
                url: 'https://youtu.be/8KMDkEHzL_0',
                type: 'original'
            },
            {
                url: 'gosenshi.pdf',
                type: 'leadsheet'
            }
        ]
    },
    {
        id: 'bnd',
        title: 'B\'nd (Connan Mockasin) Cover',
        links: [
            {
                url: 'https://youtu.be/nRG2AqJSv4M',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/LaPF3yXe8m8',
                type: 'original'
            },
            {
                url: 'bndbass.pdf',
                type: 'btab'
            },
            {
                url: 'bndguitar.pdf',
                type: 'gtab'
            }
        ]
    },
    {
        id: 'babyyouremykind',
        title: 'Baby You\'re My Kind (Blossom Dearie) Cover',
        links: [
            {
                url: 'https://youtu.be/3KvhtoXjc6U',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/6A2AQQEpZcs',
                type: 'original'
            },
            {
                url: 'babyyouremykind.pdf',
                type: 'leadsheet'
            }
        ]
    },
    {
        id: 'froghollow',
        title: 'Frog Hollow (Mac DeMarco) Cover + "Production" Tutorial',
        links: [
            {
                url: 'https://youtu.be/1v5iLA9Bld4',
                type: 'learn'
            },
            {
                url: 'https://youtu.be/PJnK3nAhgMM',
                type: 'original'
            }
        ]
    },
    {
        id: 'daysofsisters',
        title: 'Days Of Sisters (Persona 5) Cover',
        links: [
            {
                url: 'https://youtu.be/VyDayhBNyFA',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/lzffVa0jFwM',
                type: 'original'
            },
            {
                url: 'daysofsisters.pdf',
                type: 'sheetmusic'
            }
        ]
    },
    {
        id: 'plantasia',
        title: 'Plantasia (Mort Garson) Simple Arrangement + Sheet Music',
        links: [
            {
                url: 'https://youtu.be/vM0Jjw4WLR4',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/LkesIsPGlSU',
                type: 'original'
            },
            {
                url: 'plantasia.pdf',
                type: 'leadsheet'
            }
        ]
    },
    {
        id: 'interludeii',
        title: 'Interlude II (Tatsuro Yamashita) Cover',
        links: [
            {
                url: 'https://youtu.be/VFhOFcTbPQ0',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/RLnFGCQQ638',
                type: 'original'
            }
        ]
    },
    {
        id: 'charlottesthong',
        title: 'Charlotte\'s Thong (Connan Mockasin) Live Looping Cover',
        links: [
            {
                url: 'https://youtu.be/GYQOY2bjO0k',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/q2aKW7Cv9oU',
                type: 'original'
            },
            {
                url: 'charlottesthongbass.pdf',
                type: 'btab'
            },
            {
                url: 'charlottesthongguitar.pdf',
                type: 'gtab'
            }
        ]
    },
    {
        id: 'offertorio',
        title: 'Offertorio (Men I Trust) Cover + Intro to 4-Part Harmony',
        links: [
            {
                url: 'https://youtu.be/8HowPW6grfY',
                type: 'learn'
            },
            {
                url: 'https://youtu.be/Zelryjhp5Xo',
                type: 'original'
            },
            {
                url: 'offertorio.pdf',
                type: 'sheetmusic'
            }
        ]
    },
    {
        id: 'blink',
        title: 'Blink (Hiroshi Yoshimura) Ableton Loop Cover',
        links: [
            {
                url: 'https://youtu.be/vxpNZ7-3alU',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/IsjeTzINBcg',
                type: 'original'
            }
        ]
    },
    {
        id: 'poplartree',
        title: 'Poplar Tree (Men I Trust) Piano Cover + Lesson + Sheet Music',
        links: [
            {
                url: 'https://youtu.be/LIlzGuqXIcI',
                type: 'learn'
            },
            {
                url: 'https://youtu.be/ENsPMyiH8Tc',
                type: 'original'
            },
            {
                url: 'poplartree.pdf',
                type: 'sheetmusic'
            }
        ]
    },
    {
        id: 'karappunoisu',
        title: '\u304B\u3089\u3063\u307D\u306E\u6905\u5B50 - The Lonely Chair (Taeko Ohnuki)',
        links: [
            {
                url: 'https://youtu.be/Cu6QAruaHBE',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/jKOma8TQGQc',
                type: 'learn'
            },
            {
                url: 'https://youtu.be/kwh-lz5lqhY',
                type: 'original'
            },
            {
                url: 'karappunoisu.pdf',
                type: 'leadsheet'
            }
        ]
    },
    {
        id: 'youreyes',
        title: 'Your Eyes (Tatsuro Yamashita) Guitar Cover',
        links: [
            {
                url: 'https://youtu.be/n5AX6XjF2L4',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/04HbGyRkN4c',
                type: 'original'
            },
            {
                url: 'youreyes.pdf',
                type: 'leadsheet'
            }
        ]
    },
    {
        id: 'lyricstogo',
        title: 'Lyrics to Go (ATCQ) Piano Cover + Voicings/Reharm Tutorial',
        links: [
            {
                url: 'https://youtu.be/cBiIpzLJ07c',
                type: 'learn'
            },
            {
                url: 'https://youtu.be/YiAHpxg3Isg',
                type: 'original'
            },
            {
                url: 'lyricstogo.pdf',
                type: 'leadsheet'
            }
        ]
    },
    {
        id: 'smallworlds',
        title: 'Small Worlds (Outro) (Mac Miller) Guitar Cover + Tutorial',
        links: [
            {
                url: 'https://youtu.be/h4zrNvQnh40',
                type: 'learn'
            },
            {
                url: 'https://youtu.be/nHc_7yeiLvc?t=205',
                type: 'original'
            },
            {
                url: 'smallworldsoutro.pdf',
                type: 'leadsheet'
            }
        ]
    },
    {
        id: 'firetreasure',
        title: 'Fire Treasure (Yuji Ohno) Guitar Cover + Harmonic Anaylsis',
        links: [
            {
                url: 'https://youtu.be/ukj0jnUrioA',
                type: 'learn'
            },
            {
                url: 'https://youtu.be/crYDsce53CQ',
                type: 'original'
            },
            {
                url: 'firetreasurevariation.pdf',
                type: 'leadsheet'
            }
        ]
    },
    {
        id: 'sheeta',
        title: 'Sheeta (Mac DeMarco) Cover',
        links: [
            {
                url: 'https://youtu.be/DXvVzNXEgeY',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/8qMli8gVMeQ',
                type: 'original'
            },
            {
                url: 'sheetabass.pdf',
                type: 'btab'
            },
            {
                url: 'sheetaguitar.pdf',
                type: 'gtab'
            }
        ]
    },
    {
        id: 'danceonlywithme',
        title: 'Dance Only With Me (Jule Styne/Blossom Dearie) Piano Cover + Harmonic Analysis',
        links: [
            {
                url: 'https://youtu.be/fOgbv9NB1Hw',
                type: 'learn'
            },
            {
                url: 'https://youtu.be/b6UGqvxiZqY',
                type: 'original'
            },
            {
                url: 'danceonlywithme.pdf',
                type: 'leadsheet'
            }
        ]
    },
    {
        id: 'telephonenumber',
        title: 'Telephone Number (Junko Ohashi) Guitar Cover',
        links: [
            {
                url: 'https://youtu.be/W3VZPSr9lec',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/I0JVRcJLea8',
                type: 'original'
            },
            {
                url: 'telephonenumber.pdf',
                type: 'leadsheet'
            }
        ]
    },
    {
        id: 'greyarea',
        title: 'Grey Area (Jerry Paper) Guitar Cover + Chords',
        links: [
            {
                url: 'https://youtu.be/ox7SBwxKWpY',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/CfjzNDD83eY',
                type: 'original'
            }
        ]
    },
    {
        id: 'air',
        title: 'Air (Men I Trust) Hold Music Cover + Harmonic Analysis + Guitar Chords',
        links: [
            {
                url: 'https://youtu.be/gzjhc_eVaPU',
                type: 'learn'
            },
            {
                url: 'https://youtu.be/Kawq6AZrtdQ',
                type: 'original'
            },
            {
                url: 'air.pdf',
                type: 'leadsheet'
            }
        ]
    },
    {
        id: 'allnight',
        title: 'All Night (Men I Trust) Guitar Cover + Chords',
        links: [
            {
                url: 'https://youtu.be/I-2cIEoqMU4',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/hfah_Xe62r0',
                type: 'original'
            },
            {
                url: 'allnight.pdf',
                type: 'gtab'
            }
        ]
    },
    {
        id: 'sundrops',
        title: 'Sundrops (Masayoshi Takanaka) Guitar Cover + Chords Tutorial',
        links: [
            {
                url: 'https://youtu.be/6vmaDVNbMko',
                type: 'learn'
            },
            {
                url: 'https://youtu.be/IqN3V8H_MOY',
                type: 'original'
            },
            {
                url: 'sundrops.pdf',
                type: 'leadsheet'
            }
        ]
    },
    {
        id: 'stakesishigh',
        title: 'Stakes Is High (De La Soul) Piano Cover + Robert Glasper Chords/Voicings Tutorial',
        links: [
            {
                url: 'https://youtu.be/-9JYspCDAqk',
                type: 'learn'
            },
            {
                url: 'https://youtu.be/RWJWKcUooTA',
                type: 'original'
            },
            {
                url: 'stakesishigh.pdf',
                type: 'leadsheet'
            }
        ]
    },
    {
        id: 'youarelikebreeze',
        title: 'You Are Like Breeze Variation (Yuji Ohno) Guitar Cover',
        links: [
            {
                url: 'https://youtu.be/zqcQi9Mi5Fs',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/7EFEuegPxNg',
                type: 'original'
            },
            {
                url: 'youarelikebreezevariation.pdf',
                type: 'leadsheet'
            }
        ]
    },
    {
        id: 'onclejazz',
        title: 'Oncle Jazz (Men I Trust) Piano Cover + Chords Tutorial',
        links: [
            {
                url: 'https://youtu.be/eBlTW_snd5Qs',
                type: 'learn'
            },
            {
                url: 'https://youtu.be/TQnHlYNU__I',
                type: 'original'
            },
            {
                url: 'onclejazz.pdf',
                type: 'leadsheet'
            }
        ]
    },
    {
        id: 'plasticlove',
        title: 'Plastic Love (Mariya Takeuchi) Guitar Cover',
        links: [
            {
                url: 'https://youtu.be/3wlD30vwzDc',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/9Gj47G2e1Jc',
                type: 'original'
            },
            {
                url: 'plasticlove.pdf',
                type: 'leadsheet'
            },
            {
                url: 'plasticloveguitar.pdf',
                type: 'gtab'
            }
        ]
    },
    {
        id: 'chineserestaurant',
        title: 'Chinese Restaurant (Takako Mamiya) Guitar Cover',
        links: [
            {
                url: 'https://youtu.be/DjvFDQ5iQrk',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/BNP5jNzPq98',
                type: 'original'
            },
            {
                url: 'chineserestaurant.pdf',
                type: 'leadsheet'
            }
        ]
    },
    {
        id: 'rickscut2',
        title: 'Rick\'s New Haircut #2 (Mac DeMarco) Cover',
        links: [
            {
                url: 'https://youtu.be/xpFr336RW5w',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/plYBcb-FJ-Q',
                type: 'original'
            },
            {
                url: 'ricksnewhaircut2.pdf',
                type: 'leadsheet'
            }
        ]
    },
    {
        id: 'rickshaircut1',
        title: 'Rick\'s New Haircut #1 (Mac DeMarco) Cover',
        links: [
            {
                url: 'https://youtu.be/rZy7r2ixvOg',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/qXA7oS9Dk7o',
                type: 'original'
            },
            {
                url: 'ricksnewhaircut1.pdf',
                type: 'leadsheet'
            },
            {
                url: 'ricksnewhaircut1bass.pdf',
                type: 'btab'
            },
            {
                url: 'ricksnewhaircut1guitar.pdf',
                type: 'gtab'
            }
        ]
    },
    {
        id: 'wordii',
        title: 'The Word II (Shigeo Sekito) Cover + Solos Transcription',
        links: [
            {
                url: 'https://youtu.be/MM7TwjHS3QE',
                type: 'learn'
            },
            {
                url: 'https://youtu.be/Q8oS_B6IaKE',
                type: 'original'
            },
            {
                url: 'thewordii.pdf',
                type: 'leadsheet'
            }
        ]
    },
    {
        id: 'themarquee',
        title: 'The Marquee - Theater (Animal Crossing: City Folk) Cover + How To Play a Lead Sheet',
        links: [
            {
                url: 'https://youtu.be/8rFcDZOaWFQ',
                type: 'learn'
            },
            {
                url: 'https://youtu.be/z5aafI_5gS0',
                type: 'original'
            },
            {
                url: 'themarqueetheater.pdf',
                type: 'leadsheet'
            }
        ]
    },
    {
        id: 'daysgoby',
        title: 'Days Go By (Men I Trust) Bass Cover',
        links: [
            {
                url: 'https://youtu.be/55NqLuOJxdQQ',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/P1OpymtaLGw',
                type: 'original'
            },
            {
                url: 'daysgoby.pdf',
                type: 'btab'
            }
        ]
    },
    {
        id: 'usedtoloveHER',
        title: 'I Used to Love H.E.R. (Common) Cover',
        links: [
            {
                url: 'https://youtu.be/GBMofxC_u4o',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/2AChGszRGwI?t=45',
                type: 'original'
            },
            {
                url: 'iusedtoloveher.pdf',
                type: 'leadsheet'
            }
        ]
    },
    {
        id: 'headout',
        title: 'Head Out (Mild High Club) Piano Cover',
        links: [
            {
                url: 'https://youtu.be/jULg9tDW3po',
                type: 'learn'
            },
            {
                url: 'https://youtu.be/pL68P88kToU',
                type: 'original'
            },
            {
                url: 'headout.pdf',
                type: 'leadsheet'
            }
        ]
    },
    {
        id: 'talking',
        title: 'Talking (Haruomi Hosono) Cover',
        links: [
            {
                url: 'https://youtu.be/dFYtV13FwUI',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/34UutDrXV2Q',
                type: 'original'
            },
            {
                url: 'talking.pdf',
                type: 'sheetmusic'
            }
        ]
    },
    {
        id: 'autumnleavesyuji',
        title: 'Autumn Leaves (Yuji Ohno Trio) Piano Solos Transcription',
        links: [
            {
                url: 'https://youtu.be/eU5woH6KFA0',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/1gkGdehAMUA?t=78',
                type: 'original'
            },
            {
                url: 'autumnleavesyujisolos.pdf',
                type: 'sheetmusic'
            }
        ]
    },
    {
        id: 'greatchase',
        title: 'Theme From the Great Chase (Yuji Ohno) Cover',
        links: [
            {
                url: 'https://youtu.be/I-iEPCHcxXc',
                type: 'cover'
            },
            {
                url: 'https://youtu.be/KGkwWmaC1-E',
                type: 'original'
            },
            {
                url: 'themefromthegreatchase.pdf',
                type: 'sheetmusic'
            }
        ]
    },
    {
        id: 'nogoodatall',
        title: 'No Good At All (Lucy Rose) Piano Cover + Analysis',
        links: [
            {
                url: 'https://youtu.be/Z_1O3bRrvJY',
                type: 'learn'
            },
            {
                url: 'https://youtu.be/fYgzkOtK_HE',
                type: 'original'
            },
            {
                url: 'nogoodatall.pdf',
                type: 'sheetmusic'
            }
        ]
    },
    {
        id: 'numb',
        title: 'Numb (Men I Trust) Bass Cover + Harmonic Analysis',
        links: [
            {
                url: 'https://youtu.be/ZdCfC8dg8ME',
                type: 'learn'
            },
            {
                url: 'https://youtu.be/xAz_DzPUjrM',
                type: 'original'
            },
            {
                url: 'numb.pdf',
                type: 'leadsheet'
            }
        ]
    }
];

/* #region init values */
var threelinks = ['55','55','55']
var fourlinks = ['55','55','45','45']
var fivelinks = ['50','45','45','45','45']

var sizemap = new Map();
sizemap.set(1,threelinks);
sizemap.set(2,threelinks);
sizemap.set(3,threelinks);
sizemap.set(4,fourlinks);
sizemap.set(5,fivelinks);

var innertext = '';
var temptext=''
/* #endregion */

/* #region iterate through vids, add to output */
for(var i=0;i<vids.length;i++){

    /* init values to use */
    var tempEntry = vids[i];

    /*#region create output */

    /*
    <figure onClick="toggleOverlay('goodnight')">
        <div class = 'bontainer'>
        <img src='thumbnails/goodnight.jpg' alt='goodnight'/>
            <div class='overlay' id='overlaygoodnight'>
                <div>
    */
    temptext += '<figure onClick="toggleOverlay(\''+tempEntry.id+'\')">'
        temptext += '<div class="bontainer">'
        temptext += '<img data-src="thumbnails/'+tempEntry.id+'.jpg" alt="'+tempEntry.id+'" class="lazyload"/>'
            temptext += '<div class="overlay" id="overlay'+tempEntry.id+'">'
                temptext += '<div>'

    /* #region links */
    var elemCount = 0;
    var totalLinks = tempEntry.links.length;

    tempEntry.links.forEach(element => {
        //add output for each link
        if(element.type == 'cover'){
            temptext+='<a href="'+element.url+'" target="_blank" class="icon"><img src="coverwatch.png" alt="ytcover" height="'+sizemap.get(totalLinks)[elemCount]+'"/></a>';
        }
        else if(element.type == 'learn'){
            temptext+='<a href="'+element.url+'" target="_blank" class="icon"><img src="learnwatch.png" alt="ytlearn" height="'+sizemap.get(totalLinks)[elemCount]+'"/></a>';
        }
        else if(element.type == 'original'){
            temptext+='<a href="'+element.url+'" target="_blank" class="icon"><img src="listenoriginal.png" alt="listen" height="'+sizemap.get(totalLinks)[elemCount]+'"/></a>';
        }
        else if(element.type == 'leadsheet'){
            temptext+='<a href="pdfs/'+element.url+'" target="_blank" class="icon"><img src="leadsheet.png" alt="leadsheet" height="'+sizemap.get(totalLinks)[elemCount]+'"/></a>';
        }
        else if(element.type == 'sheetmusic'){
            temptext+='<a href="pdfs/'+element.url+'" target="_blank" class="icon"><img src="sheetmusic.png" alt="sheetmusic" height="'+sizemap.get(totalLinks)[elemCount]+'"/></a>';
        }
        else if(element.type == 'btab'){
            temptext+='<a href="pdfs/'+element.url+'" target="_blank" class="icon"><img src="basstab.png" alt="btab" height="'+sizemap.get(totalLinks)[elemCount]+'"/></a>';
        }
        else if(element.type == 'gtab'){
            temptext+='<a href="pdfs/'+element.url+'" target="_blank" class="icon"><img src="guitartab.png" alt="gtab" height="'+sizemap.get(totalLinks)[elemCount]+'"/></a>';
        }

        //increment current count and add break based on number of links
        elemCount++;
        if(totalLinks <= 3 && elemCount < totalLinks){
            temptext+='<br>'
        }
        else if(totalLinks == 4 && (elemCount == 1 || elemCount == 2)){
            temptext+='<br>'
        }
        else if(totalLinks == 5 && elemCount == 1){
            temptext+='<br>'
        }
    });
    /* #endregion */

    /*
                </div>
            </div>
        </div>
        <figcaption>Good Night (Toshifumi Hinata) Cover</figcaption>
    </figure>
    */
    temptext += '</div></div></div><figcaption>'+tempEntry.title+'</figcaption></figure>'

    /* #endregion */

    /* add to main and reset temp string */
    innertext+=temptext;
    temptext='';
}

/* empty figures for alignment */
if(vids.length%3!=0){
    for(var i=0;i<3-vids.length%3;i++){
        innertext+='<figure><\/figure>';
    }
}

/* #endregion */

/* #region output */
var footer = document.getElementsByClassName('container')[0];
footer.innerHTML = innertext;
/* #endregion */