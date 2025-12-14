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
  nsfw: nsfwData,
  misc: miscData,
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
  
  grid.innerHTML = items.map((item, index) => {
    // imprtant
    let ratingHtml = '';
    if (item.rating !== undefined && item.rating !== null) {
      const fullStars = Math.floor(item.rating);
      const hasHalfStar = item.rating % 1 >= 0.5;
      const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
      
      ratingHtml = `
                <div class="card-rating">
                    <div class="stars-container">
                        ${Array(fullStars).fill().map(() => `
                            <svg class="star-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                            </svg>
                        `).join('')}
                        
                        ${hasHalfStar ? `
                            <svg class="star-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill-opacity="0.5"/>
                                <path d="M12 17.27V2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"/>
                            </svg>
                        ` : ''}
                        
                        ${Array(emptyStars).fill().map(() => `
                            <svg class="star-icon empty" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                            </svg>
                        `).join('')}
                    </div>
                    <span class="rating-value">${item.rating.toFixed(1)}</span>
                </div>
            `;
    }
    
    return `
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
                
                <div class="card-meta">
                    <div class="card-tags">
                        ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    ${ratingHtml}
                </div>
                
                ${item.note ? `<p class="card-note">${item.note}</p>` : ''}
            </a>
        `;
  }).join('');
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


  const lastUpdated = new Date(document.lastModified);

  const formattedDate = lastUpdated.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  document.getElementById("lastUpdatedText").textContent =
    `Last updated: ${formattedDate}`;
