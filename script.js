let nsfwVerified = false;
let activeTab = 'anime'; 
let activeSection = 'streaming'; 

        const descriptions = {
            anime: {
                title: "Anime Resources",
                desc: "Everything you need to watch and download anime, from streaming platforms to tracking tools.",
                streaming: {
                    title: "Streaming Platforms",
                    desc: "Legal and free anime streaming websites with vast collections of series and movies."
                },
                downloading: {
                    title: "Download Sources",
                    desc: "Direct download and torrent sources for offline viewing."
                },
                apps: {
                    title: "Anime Apps",
                    desc: "Mobile and desktop applications for watching anime."
                }
            },
            listing: {
                title: "Listing Resources",
                desc: "Comprehensive tools for tracking, discovering, and staying up to date with anime.",
                database: {
                    title: "Anime Databases",
                    desc: "Comprehensive databases for tracking, rating, and discovering new anime."
                },
                schedule: {
                    title: "Schedule & Charts",
                    desc: "Keep track of ongoing and upcoming anime releases."
                }
            },
            manga: {
                title: "Manga Resources",
                desc: "Complete collection of manga reading sites, apps, and tracking tools.",
                reading: {
                    title: "Online Reading",
                    desc: "Web platforms for reading manga online with various language options."
                },
                apps: {
                    title: "Manga Apps",
                    desc: "Mobile and desktop applications for downloading and reading manga."
                }
            },
            novels: {
                title: "Light Novels",
                desc: "Resources for reading and tracking light novels.",
                reading: {
                  title: "Light novel websites",
                  desc: "Sites deticated to reading light novels",
                  
                },
                apps: {
                    title: "Light Novel Apps",
                    desc: "Applications dedicated to reading light novels on various devices."
                }
            },
            forum: {
                title: "Forum Resources",
                desc: "Community platforms for discussing anime, manga, and related topics.",
                discussion: {
                    title: "Discussion Forums",
                    desc: "Popular forums and communities for anime discussions."
                }
            },
         
         news: {
        title:  "News resources",
          desc: "Community platforms for discussing anime, manga, and related topics.",
      animanga: {
        title: "Animanga news",
          desc: "Popular forums and communities for anime discussions."
  }
},   
     development: {
       title: "development",
         desc: "api and packages related to anime",
        development: {
           title: "Development resources ", 
           desc: "API and packages related to anime for metadata and so on"
  }
  
},

     music: {
       title: "music",
         desc: "list of music related to anime",
      music: {
        title: "Music resources",
        desc: "List of anime music related sources "
  }
},
    nsfw: {
      title: "NSFW Content",
      desc: "Age-restricted content with appropriate content warnings.",
     streaming: {
       title: "Adult Anime and JAV Content resources",
       desc: "Adult-oriented anime and jav content websites "
 },
      reading: {
        title: "Adult Manga Content",
        desc: "Age-restricted manga content websites and apps"
},
       database: {
        title: "Adult content tracker and database ",
        desc: "library of gooning hall"
}
}


        };
//Data for sections
        const data = {
          //anime Data
            anime: {
              //streaming resources 
                streaming: [
                    {
                        name: 'AnimePahe',
                        url: 'https://animepahe.com/',
                        desc: 'A medium anime library with a simple player, low data use, easy downloads, but limited dubs, features, no comments, and intrusive ads.',
                        tags: ['Free', 'Sub', 'ADs', 'Redirects'],
                        image: 'https://i.pinimg.com/280x280_RS/2a/c7/b5/2ac7b5b0b304152ee3cd9231b0af3fe9.jpg'
                    },
                    {
                        name: 'Hianime',
                        url: 'https://www.hianime.to',
                        desc: 'A large anime library with soft subtitles, modern design, and reliable streams, but hindered by bad ads and broken subtitle typesetting.(formerly: zoro, aniwatch)',
                        tags: ['Sub', 'Dub', 'HD', 'ADs', 'Pop Up'],
                        image: 'https://cdn2.steamgriddb.com/icon/a0e7be097b3b5eb71d106dd32f2312ac.png'
                    },
                                {
              name: 'animation.filmarchives.jp',
              url: 'https://animation.filmarchives.jp/en/',
              desc: 'It is hosted by the National Film Archive of Japan, an official institution dedicated to preserving and showcasing Japanese film heritage, including animation. ',
              tags: ['Official', 'Archive', 'eductaional'],
              image: 'https://animation.filmarchives.jp/favicon.ico'
            },
            {
              name: 'Crunchyroll',
              url: 'https://www.crunchyroll.com/',
              desc: 'Legal streaming platform with simulcast anime and original content but region-locked, lacks comments, and requires a subscription for most content.',
              tags: ['Official', 'HD', 'Premium', 'region lock'],
              image: 'https://www.crunchyroll.com/build/assets/img/favicons/favicon-v2-96x96.png'
            },


            {
              name: 'Gogoanime',
              url: 'https://gogotaku.info/',
              desc: 'A very large library with easy downloads. However, it has intrusive ads and an old-fashioned interface.(last update: 24 Nov 2024)',
              tags: ['Dub', 'HD', 'Sub', 'No New Episodes'],
              image: 'https://cdn.gogocdn.net/files/gogo/img/favicon.ico'
            },
            
            {
              name: 'miruro',
              url: 'https://www.miruro.tv ',
              desc: 'Scrapes multiple sources and languages with a modern interface and open source but has bad ads. ',
              tags: ['scraper', 'open source', 'modern','ADs'],
              image: 'https://www.miruro.com/icon-512x512_tr.png'
            },
            {
        name: "HIDIVE",
        desc: "Streaming service that delivers simulcasts, fresh dubs, uncensored titles, deep cuts and more.Affordable licensed service with exclusive anime, but region-locked, smaller library, and slightly lower quality.",
        tags: ["licensed" , "simulcast", "affordable"],
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
                    
                ],
                //anime apps resources 
                apps: [
                   {
         name: 'Aniyomi',
          url: 'https://github.com/jmir1/aniyomi',
         desc: 'based  on mihon with anime support for Android.',
         tags: [ 'Open Source', 'extensions', 'tracker'],
          image: 'https://aniyomi.org/img/logo-128px.png'
               },
                    {
                        name: 'animiru',
                        url: 'https://github.com/Quickdesh/Animiru',
                        desc: 'fork of aniyomi without the manga features from Mihon',
                        tags: ['open source', 'tracker','extensions'],
                        image: 'https://aniyomi.org/forks/logo-animiru.webp'
                    },
                    {
                        name: 'miru',
                        url: 'https://github.com/miru-project/miru-app',
                        desc: 'Supports anime, manga, and novels with open extensions, cross platforms(web,windows and android), and open source.',
                        tags: ['extensions ','Open Source', 'cross'],
                        image: 'https://raw.githubusercontent.com/miru-project/miru-app/dev/assets/icon/logo.png'
                    },
                    {
                        name: 'Totoro',
                        url: 'https://github.com/insomniachi/Totoro',
                        desc: 'Supports anime and manga with multiple sources, tracker sync, and open source, but limited to Windows 10+.',
                        tags: ['desktop', 'Open Source','tracker'],
                        image: 'https://raw.githubusercontent.com/insomniachi/Totoro/refs/heads/main/Totoro.WinUI/Assets/Square44x44Logo.altform-lightunplated_targetsize-256.png'
                    }
                    
                ]
            },
            // listing and database 
            listing: {
              //Database resources 
                database: [
                  {
         name: "NovelUpdates",
        desc: "Database and community for translated light novels and web novels.",
       tags: ["Database", "Translations"],
       url: "https://www.novelupdates.com",
       image: "https://www.novelupdates.com/favicon.ico"
          },
                    {
                        name: 'MyAnimeList',
                        url: 'https://myanimelist.net',
                        desc: 'Largest anime & manga database and community.',
                        tags: ['Database', 'Community', 'Reviews'],
                        image: 'https://cdn.myanimelist.net/images/favicon.ico'
                    },
                    {
                        name: 'AniList',
                        url: 'https://anilist.co',
                        desc: 'Modern anime and manga tracking with clean UI and extensive features.',
                        tags: ['Tracking', 'Community', 'Database'],
                        image: 'https://anilist.co/img/icons/favicon-32x32.png'
                    },
                    {
                      name: 'Anidb',
                      url: 'https://anidb.net/',
                      desc: 'AniDB is a comprehensive anime database and tracker offering detailed information, user reviews, and community-driven content organization.',
                      tags: ['Non profit','tracking', 'community'],
                      image: 'https://cdn-eu.anidb.net/css/assets/images/touch/favicon-32x32.png?v=2024-09-10T14-53-20'
                    },
                    {
        name: "Anime-Planet",
        desc: "Anime and manga recommendation database with a friendly community.",
        tags: ["recommendations", "database", "community"],
        link: "https://www.anime-planet.com",
        image: "https://www.anime-planet.com/favicon-32x32.png?v=WGowMEAKpM"
      },
      {
        name: 'Kitsu',
        url: 'https://kitsu.app/',
        desc: 'Anime and manga tracking platform with a social component.',
        tags: ['Tracking', 'Social', 'Database '],
         image: 'https://kitsu.io/favicon.ico'
},

                ],
                // anime schedule resources 
                schedule: [
                    {
                        name: 'LiveChart',
                        url: 'https://livechart.me',
                        desc: 'Comprehensive anime scheduling and tracking platform.',
                        tags: ['Schedule', 'Seasonal', 'Charts'],
                        image: 'https://s.livechart.me/favicon_48x48.png'
                    },
                    {
                        name: 'AniChart',
                        url: 'https://anichart.net',
                        desc: 'Clean interface for seasonal anime charts and schedules.',
                        tags: ['Schedule', 'Seasonal', 'charts'],
                        image: 'https://anichart.net/favicon.ico'
                    },
                    {
                      name: 'Dub calendar ',
                      url: 'https://teamup.com/ksdhpfjcouprnauwda',
                      desc: 'A Teamup calendar for dub release date that is regularly updated and  managed by a single person.',
                      tags: ['Dub', 'calendar',  'schedule'],
                      image: 'https://teamup.com/apple-touch-icon-180x180.png'
                    }
                ]
            },
            // manga data
            manga: {
              // manga reading resources 
                reading: [
                    {
                        name: 'Mangadex',
                        url: 'https://mangadex.org/',
                        desc: 'Community-driven manga reader with multiple language support.',
                        tags: ['Scanlation', 'Multiple Languages'],
                        image: 'https://mangadex.org/favicon.ico'
                    },
                    {
        name: "Manga Plus",
        desc: "Official manga reader app by Shueisha, offering the latest chapters for free.",
        tags: ["Official", "Free", "App", "website"],
        link: "https://mangaplus.shueisha.co.jp",
        image: "https://mangaplus.shueisha.co.jp/img/app_icon.919a13c7.png"
      },
      {
        name: "ComicK",
        desc: "Huge library with diverse languages, advanced manga info, detailed filters, and minimal image compression with a modern and practical UI. NSFW requires login.",
        tags: ["Multiple Languages", "Good UI"],
        url: "https://comick.io/home2",
        image: "https://comick.io/_next/image?url=%2Fstatic%2Ficons%2Funicorn-64-christmas.png&w=144&q=75"
      }
                ],
                //manga apps resources 
                apps: [
                    {
                        name: 'Mihon',
                        url: 'https://github.com/mihonapp/mihon',
                        desc: 'Open-source manga reader for Android with extension support.',
                        tags: ['Android', 'Open Source'],
                        image: 'https://mihon.app/favicon-32x32.png'
                    }
                ]
            },
            // novels data
            novels: {
              // novels reading resources 
              reading: [
                
                {
          name: "Syosetu",
           desc: "Japanese web novel platform hosting many original light novels where amateur writers publish their stories as they write them. Many popular officially published books started out on this website. (Note: the site is in Japanese use google translate to navigate and read.)",
            tags: ["Web-novels", "Japanese", "Original"],
             link: "https://syosetu.com",
           image: "https://static.syosetu.com/view/images/narou.ico?psawph"
},
                ],
                // novels apps resources 
                apps: [
                    {
                        name: 'LNReader',
                        url: 'https://github.com/LNReader/lnreader',
                        desc: 'Light novel reader app with multiple source support.',
                        tags: ['Android', 'Multiple Sources'],
                        image: 'https://raw.githubusercontent.com/LNReader/lnreader/master/.github/readme-images/icon_alt.png'
                    }
                ]
            },
            // forum data
            forum: {
              // forums resources 
                discussion: [
                    {
                        name: 'Reddit r/anime',
                        url: 'https://www.reddit.com/r/anime/',
                        desc: 'The largest anime community on Reddit with active discussions, news updates, and episode threads.',
                        tags: ['Community', 'Discussion', 'News'],
                        image: 'https://cdn-icons-png.flaticon.com/128/3670/3670226.png'
                    },
                    {
                        name: 'MyAnimeList Forums',
                        url: 'https://myanimelist.net/forum/',
                        desc: 'Active forum community with dedicated sections for anime, manga, and general discussions.',
                        tags: ['Community', 'Discussion'],
                        image: 'https://cdn.myanimelist.net/images/favicon.ico'
                    },
                    {
                        name: 'AnimeSuki Forum',
                        url: 'https://forums.animesuki.com/',
                        desc: 'Long-running anime and manga discussion forum with detailed episodic discussions.',
                        tags: ['Discussion', 'Community'],
                        image: 'https://forums.animesuki.com/favicon.ico'
                    }
                ]
            },
            // news data
            news: {
              // news resources 
            animanga: [
    {
      name: 'Anime News Network',
      url: 'https://www.animenewsnetwork.com/',
      desc: 'The go-to site for the latest anime, manga, and gaming news.',
      tags: ['News', 'Reviews', 'Interviews'],
      image: 'https://www.animenewsnetwork.com/favicon.ico',
    },
    {
      name: 'Crunchyroll News',
      url: 'https://www.crunchyroll.com/news',
      desc: 'Latest updates and features from Crunchyroll.',
      tags: ['Streaming', 'News', 'Events'],
      image: 'https://www.crunchyroll.com/build/assets/img/favicons/favicon-v2-96x96.png',
    }
    ]
            },
            // music data
            music: {
              // music resources 
              music: [
                {
                name: 'Animethemes',
                url: 'https://animethemes.moe/',
                desc: 'AnimeThemes is a simple and consistent repository of anime opening and ending themes.',
                tags: ['Music', 'OP', 'ED'],
                image: 'https://animethemes.moe/favicon-32x32.png'
                }
                ]
            },
            // development data
            development: {
              // development resources API and shi
              development: [
              {
         name: 'AniList API',
         url: 'https://anilist.gitbook.io/anilist-apiv2-docs/',
        desc: 'A GraphQL-based API for fetching anime, manga, and user data from AniList.',
      tags: ['API', 'GraphQL', 'Anime'],
       image: 'https://anilist.co/img/icons/favicon-32x32.png'
},
{
                name: 'Consumet API',
                url: 'https://api.consumet.org/',
                desc: 'A free and open-source API for anime, manga, movies, and TV shows.',
                tags: ['API', 'Anime', 'Open Source'],
                image: 'https://camo.githubusercontent.com/0620c04990b737201e7a746b6306f14eeaa823a742e939fa963a228a39631cfb/68747470733a2f2f636f6e73756d65742e6f72672f696d616765732f636f6e73756d65746c6f676f2e706e67'
            },
            {
                name: 'MyAnimeList API',
                url: 'https://myanimelist.net/apiconfig/references/api/v2',
                desc: 'Official REST API for fetching data from MyAnimeList.',
                tags: ['API', 'REST', 'Anime'],
                image: 'https://cdn.myanimelist.net/images/favicon.ico'
            },
            {
                name: 'Jikan API',
                url: 'https://jikan.moe/',
                desc: 'Unofficial & open source MyAnimeList API that provides an easy way to retrieve data.',
                tags: ['API', 'Unofficial', 'open source'],
                image: 'https://jikan.moe/favicon/favicon-32x32.png?v=2'
            },
            {
         name: "Kitsu API",
         desc: "JSON API for the Kitsu anime discovery platform.(kistu.app)",
        tags: ["API", "JSON", "Kitsu"],
          url: "https://kitsu.docs.apiary.io",
       image: 'https://kitsu.io/android-chrome-192x192-6b1404d91a423ea12340f41fc320c149.png'
},
{
        name: "AnimechanAPI",
        desc: "RESTful API serving quality anime quotes. ",
       tags: ["API", "Rest", "Quotes"],
       url: "https://animechan.io/",
      image: 'https://raw.githubusercontent.com/Animechan-API/animechan/main/.github/logo.png'
},
{
      name: "Animethemes API",
       desc: "Official API for animethemes.moe. provides data for OP and ED and OST of anime. ",
      tags: ['Animethemes', 'Official ',  'Music'],
       url: "https://github.com/AnimeThemes/animethemes-api-docs",
      image: "https://animethemes.moe/favicon-32x32.png"
},
{
         name: "Trace.moe API",
        desc: "API for searching anime scenes by image.",
         tags: ["API", "Image-search", "Scene-recognition"],
        url: "https://soruly.github.io/trace.moe-api/#/",
         image: 'https://lh3.googleusercontent.com/ZubuaW1p9VNSkCnFG7wUQzvxgZXP2QTo6tjHSb67emqvi0YtdWckzWPMctWiu_BlxjVNglsASU8p6N9DOoYE58MW=s120'
},
{
          name: "Aniwatch API",
         url: 'https://github.com/ghoshRitesh12/aniwatch-api',
        desc: "Open srouce and Unofficial   API for hianime.to",
       tags: ['Hianime', 'Open source', 'Rest'],
      image: 'https://raw.githubusercontent.com/ghoshRitesh12/aniwatch-api/refs/heads/main/public/img/hianime_v2.png'
}
                ]
            },
            // nsfw data
            nsfw: {
              // nsfw streaming resources 
         streaming: [
               {
             name: 'Hanime',
             url: 'https://hanime.tv',
           desc: 'Adult anime streaming platform with nice interface, reliable player, large library, and long track record, but 1080p requires premium.',
            tags: ['Hentai', 'freemium', 'HD'],
            image: 'https://hanime.tv/favicon.ico'
}
],
      // nsfw reading resources 
       reading: [
            {
           name: 'AsmHentai',
           url: 'https://asmhentai.com/',
          desc: 'Adult manga platform with Long track record and Very Large library.',
          tags: ['Hentai', 'Large library '],
           image: 'https://asmhentai.com/favicon.ico'
}
],
       // nsfw database resources 
          database: [
              {
          name: "jav library", 
         url: "https://www.javlibrary.com/en/",
        desc: "JavLibrary is an online Japanese Adult Video Library. You can search and look up information on Japanese adult videos here. Organize and keep track of what you like by adding it in your favorite list and see the community reviews ",
        tags: ['JAV', 'Reviews', 'Tracker'],
        image: "https://www.javlibrary.com/favicon.ico"
  }
  ],
}
            
        };

        const sections = {
            anime: ['streaming', 'downloading', 'apps'],
            listing: ['database', 'schedule'],
            manga: ['reading', 'apps'],
            novels: ['reading', 'apps'],
            music: ['music'],
            forum: ['discussion'],
            news: ['animanga'],
            development: ['development'],
            nsfw: ['streaming', 'reading', 'database']
        };
        
        const icons = {
    streaming: '<i class="fas fa-play-circle"></i>',
    downloading: '<i class="fas fa-download"></i>',
    apps: '<i class="fab fa-google-play"></i>',
    database: '<i class="fas fa-database"></i>',
    schedule: '<i class="fas fa-calendar-alt"></i>',
    reading: '<i class="fas fa-book-reader"></i>',
    discussion: '<i class="fas fa-comments"></i>',
    animanga: '<i class="fas fa-newspaper"></i>',
    music: '<i class="fa-solid fa-headphones"></i>',
    
    development: '<i class="fa-solid fa-code"></i>',
};


        

        function updateSectionDescription() {
            const sectionDesc = document.getElementById('sectionDesc');
            const currentSection = descriptions[activeTab][activeSection];
            
            sectionDesc.innerHTML = `
                <h2>${currentSection.title}</h2>
                <p>${currentSection.desc}</p>
            `;
        }
        

        function updateSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.innerHTML = sections[activeTab]
        .map(section => `
            <button class="nav-button ${section === activeSection ? 'active' : ''}" 
                    data-section="${section}">
                ${icons[section] || ''} ${section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
        `).join('');

    sidebar.querySelectorAll('.nav-button').forEach(button => {
        button.addEventListener('click', (e) => {
            activeSection = e.target.closest('.nav-button').dataset.section;
            updateUI();
        });
    });
}
      function showAgeVerificationModal() {
     const modal = document.createElement('div');
       modal.className = 'modal-overlay';
       modal.innerHTML = `
      <div class="modal">
       <h2 class="modal-title">Age Verification</h2>
       <div class="modal-content">
       <p>This section contains adult content.  You must be 18 years or older to view this content.</p>
        <p>Are you 18 years or older?</p>
    </div>
       <div class="modal-buttons">
         <button class="modal-button cancel-button">No</button>
       <button class="modal-button confirm-button">Yes, I am 18+</button>
  </div>
</div>
`;

     document.body.appendChild(modal);
      modal.style.display = 'block';

     const confirmButton = modal.querySelector('.confirm-button');
    const cancelButton = modal.querySelector('.cancel-button');

       return new Promise((resolve) => {
      confirmButton.addEventListener('click', () => {
      nsfwVerified = true;
        modal.remove();
         resolve(true);
     });

     cancelButton.addEventListener('click', () => {
       modal.remove();
         resolve(false);
          });
      });
    }

                    function updateContent() {
    const grid = document.getElementById('contentGrid');
    const items = data[activeTab][activeSection] || [];

    grid.innerHTML = items.map((item, index) => `
        <a href="${item.url}" 
           class="card" 
           style="animation-delay: ${index * 0.1}s"
           target="_blank" 
           rel="noopener noreferrer">
                    <div class="card-header">
                        <span class="card-title">
                            <div class="card-image">
                                <img src="${item.image}" alt="${item.name} logo" onerror="this.src='https://via.placeholder.com/24'" />
                            </div>
                            ${item.name}
                        </span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <p class="card-description">${item.desc}</p>
                    <div class="card-tags">
                        ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </a>
            `).join('');
        }

        function updateUI() {
          if (activeTab === 'nsfw' && !nsfwVerified) {
  activeTab = 'anime';
  activeSection = sections[activeTab][0];
}
            updateSectionDescription();
            updateSidebar();
            updateContent();
            
            document.querySelectorAll('.tab').forEach(tab => {
                tab.classList.toggle('active', tab.dataset.tab === activeTab);
            });
        }

        document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', async (e) => {
              const newTab = e.target.closest('.tab').dataset.tab;

              if (newTab === 'nsfw' && !nsfwVerified) {
                const verified = await showAgeVerificationModal();
                if (!verified) {

                  updateUI();
                  return;
                }
              }
              activeTab = newTab;
activeSection = sections[activeTab][0];
updateUI();
    
            });
        });

       document.addEventListener('DOMContentLoaded', () => {
  activeTab = 'anime';
  activeSection = 'streaming';
  updateUI();
}); 
        
