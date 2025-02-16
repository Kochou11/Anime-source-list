const animeData = {
    streaming: [
              {
          name: 'Animekai',
          url: 'https://animekai.to/',
          desc: 'NEW anime site with modern design and a huge library, including old series in good quality. It offers a reliable streaming server with hard-subbed anime and re-encodes for smaller sizes, featuring a mix of Web and Blu-ray releases. No ADs. (Personal favorite)',
          tags: ['Sub', 'Dub', 'Donghua', 'HD'],
          image: 'https://i.ibb.co/rRbSqyFs/favicon-V2.png'
          
        },
        {
          name: 'AnimePahe',
          url: 'https://animepahe.com/',
          desc: 'A medium anime library with a simple player, low data use, easy downloads, but limited dubs, features, no comments, and intrusive ads.',
          tags: ['Free', 'Sub', 'ADs', 'Redirects'],
          image: 'https://i.ibb.co/cKXKQpZH/favicon-V2-2.png'
        },

          {
            name: 'Hianime',
            url: 'https://www.hianime.to',
            desc: 'A large anime library with soft subtitles, modern design, and reliable streams, but hindered by bad ads and broken subtitle typesetting.(formerly: zoro, aniwatch)',
            tags: ['Sub', 'Dub', 'HD', 'ADs', 'Pop Up'],
            image: 'https://cdn2.steamgriddb.com/icon/a0e7be097b3b5eb71d106dd32f2312ac.png'
          },
          {
           name: "AnimeStream",
           url: "https://anime.uniquestream.net/",
           desc: "A basic UI streaming site that scrapes from Crunchyroll, offering the highest video quality with multi-language hard-subs. Requires a DRM-supported browser.",
           tags: ["HD", "Basic UI", "Hard subs", "Scraper"],
           image: "https://i.ibb.co/XfRtLN5Y/favicon-V2-3.png"
          },
          {
            name: "KickAssAnime",
            url: "https://kaa.mx/",
            desc: "A modern site with high video bitrate and soft subtitle support, great for new releases. It has a small library, but missing older titles can be requested through thier server. bad ADs",
            tags: ["Sub", "Dub", "ADs", "HD", "Good UI"],
            image: "https://i.ibb.co/xK5K1Szr/favicon-V2-2.png"
          },
          
          
          {
            name: 'Crunchyroll',
            url: 'https://www.crunchyroll.com/',
            desc: 'Legal streaming platform with simulcast anime and original content but region-locked, lacks comments, and requires a subscription for most content.',
            tags: ['Official', 'HD', 'Premium', 'Region lock'],
            image: 'https://www.crunchyroll.com/build/assets/img/favicons/favicon-v2-96x96.png'
          },


          

          {
            name: 'Miruro',
            url: 'https://www.miruro.tv ',
            desc: 'Scrapes multiple sources and languages with a modern interface and open source but has bad ads. ',
            tags: ['Scraper', 'Open source', 'Good UI', 'ADs'],
            image: 'https://www.miruro.com/icon-512x512_tr.png'
          },
             
         {
  name: 'animation.filmarchives.jp',
  url: 'https://animation.filmarchives.jp/en/',
  desc: 'It is hosted by the National Film Archive of Japan, an official institution dedicated to preserving and showcasing Japanese film heritage, including animation. ',
  tags: ['Official', 'Archive', 'Eductaional'],
  image: 'https://animation.filmarchives.jp/favicon.ico'
},     
          {
            name: "HIDIVE",
            desc: "Streaming service that delivers simulcasts, fresh dubs, uncensored titles, deep cuts and more.Affordable licensed service with exclusive anime, but region-locked, smaller library, and slightly lower quality.",
            tags: ["Licensed", "Simulcast", "Affordable"],
            url: "https://www.hidive.com",
            image: "https://d9hhrg4mnvzow.cloudfront.net/welcome.hidive.com/a601d032-favicon-64x64.png"
          },
          ],
          //downloading resources 
          downloading: [
              {
                name: 'Nyaa',
                url: 'https://nyaa.si/',
                desc: 'The largest anime torrent site with diverse content and high activity but closed registration and basic info.',
                tags: ['Torrent', 'Trusted', 'Closed registration'],
                image: 'https://nyaa.si/static/favicon.png'
                    },
                    {
                      name: "SubsPlease",
                      url: "https://subsplease.org/",
                      desc: "SubsPlease is a fan-driven group dedicated to providing timely English-subtitled anime releases, offering torrents, XDCC downloads, a release schedule, and RSS updates.",
                      tags: ["XDCC", "Torrent","High quality" ],
                      image: "https://i.ibb.co/ch5qM3Hn/favicon-V2.jpg"
                    },
                    {
                      name: "Tokyo Insider",
                      url: "https://tokyoinsider.com/",
                      desc: "TokyoInsider.com is an anime-focused website offering reviews, user ratings, and direct DDL downloads. It is self-hosted and has a large library. Has an outdated UI/UX",
                      tags: ["DDL", "Self Hosted", "Outdated UI"],
                      image: "https://i.ibb.co/zHV9BFWq/favicon-V2-4.png"
                    },

                ],
            //anime apps resources 
            apps: [
              {
                name: 'Aniyomi',
                url: 'https://github.com/jmir1/aniyomi',
                desc: 'based  on mihon with anime support for Android.',
                tags: ['Open Source', 'extensions', 'tracker'],
                image: 'https://aniyomi.org/img/logo-128px.png'
               },
              {
                name: 'animiru',
                url: 'https://github.com/Quickdesh/Animiru',
                desc: 'fork of aniyomi without the manga features from Mihon',
                tags: ['open source', 'tracker', 'extensions'],
                image: 'https://aniyomi.org/forks/logo-animiru.webp'
                    },
              {
                name: 'miru',
                url: 'https://github.com/miru-project/miru-app',
                desc: 'Supports anime, manga, and novels with open extensions, cross platforms(web,windows and android), and open source.',
                tags: ['extensions ', 'Open Source', 'cross'],
                image: 'https://raw.githubusercontent.com/miru-project/miru-app/dev/assets/icon/logo.png'
                    },
              {
                name: 'Totoro',
                url: 'https://github.com/insomniachi/Totoro',
                desc: 'Supports anime and manga with multiple sources, tracker sync, and open source, but limited to Windows 10+.',
                tags: ['desktop', 'Open Source', 'tracker'],
                image: 'https://raw.githubusercontent.com/insomniachi/Totoro/refs/heads/main/Totoro.WinUI/Assets/Square44x44Logo.altform-lightunplated_targetsize-256.png'
                    }

                ]
          };