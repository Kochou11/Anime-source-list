let nsfwVerified = false;
let activeTab = 'anime';
let activeSection = 'streaming';

// Combine all data
const data = {
  anime: animeData,
  listing: listingData,
  manga: mangaData,
  novels: novelsData,
  visualNovels: visualNovelsData,
  forum: forumData,
  news: newsData,
  music: musicData,
  development: developmentData,
  nsfw: nsfwData
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


document.addEventListener('DOMContentLoaded', () => {
  activeTab = 'anime';
  activeSection = 'streaming';
  updateUI();
}); 
        



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
