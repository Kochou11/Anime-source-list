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
const statusCache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; 


async function checkSiteStatus(url) {
  const cacheKey = url;
  const cached = statusCache.get(cacheKey);
  
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.status;
  }
  
  try {
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    
    const response = await fetch(url, {
      method: 'HEAD',
      mode: 'no-cors',
      signal: controller.signal,
      cache: 'no-cache'
    });
    
    clearTimeout(timeoutId);
    
    
    const status = 'online';
    statusCache.set(cacheKey, { status, timestamp: Date.now() });
    return status;
  } catch (error) {
    const status = 'offline';
    statusCache.set(cacheKey, { status, timestamp: Date.now() });
    return status;
  }
}



function getStatusBadge(status) {
  const badges = {
    online: '<span class="status-badge status-online"><i class="fas fa-circle"></i> Online</span>',
    offline: '<span class="status-badge status-offline"><i class="fas fa-circle"></i> Offline</span>',
    checking: '<span class="status-badge status-checking"><i class="fas fa-circle"></i> Checking</span>'
  };
  return badges[status] || badges.checking;
}


function updateContentWithStatus() {
  const grid = document.getElementById('contentGrid');
  const items = data[activeTab][activeSection] || [];
  
  const skipStatus = activeTab === 'development';
  
  grid.innerHTML = items.map((item, index) => {
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
         rel="noopener noreferrer"
         data-url="${item.url}"
         data-card-index="${index}">
        <div class="card-header">
          <span class="card-title">
            <div class="card-image">
              <img src="${item.image}" alt="${item.name} logo" onerror="this.src='https://via.placeholder.com/24'" />
            </div>
            ${item.name}
          </span>
          <div class="card-header-right">
            ${!skipStatus ? '<span class="status-badge status-checking" data-status-for="' + index + '"><i class="fas fa-circle"></i> Checking</span>' : ''}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <p class="card-description">${item.desc}</p>
        
        <div class="card-meta">
          <div class="card-tags">
            ${item.tags.map(tag => {
              const isSpecial = ['Popular', 'Best', 'Recommended', 'Hot', 'New', 'Top Pick', 'Official', 'Licensed'].includes(tag);
              return `<span class="tag ${isSpecial ? 'special' : ''}">${tag}</span>`;
            }).join('')}
          </div>
          ${ratingHtml}
        </div>
        
        ${item.note ? `<p class="card-note">${item.note}</p>` : ''}
      </a>
    `;
  }).join('');
  if (!skipStatus) {
    checkAllSiteStatuses(items);
  }
}
                    
function updateUI() {
  if (activeTab === 'nsfw' && !nsfwVerified) {
    activeTab = 'anime';
    activeSection = sections[activeTab][0];
  }
  updateSectionDescription();
  updateSidebar();
  updateContentWithStatus();

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

async function checkAllSiteStatuses(items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const statusBadge = document.querySelector(`[data-status-for="${i}"]`);
    
    if (!statusBadge) continue;
    
    try {
      const status = await checkSiteStatus(item.url);
      statusBadge.className = `status-badge status-${status}`;
      statusBadge.innerHTML = `<i class="fas fa-circle"></i> ${status.charAt(0).toUpperCase() + status.slice(1)}`;
    } catch (error) {
      statusBadge.className = 'status-badge status-unknown';
      statusBadge.innerHTML = '<i class="fas fa-circle"></i> Unknown';
    }
  
    await new Promise(resolve => setTimeout(resolve, 100));
  }
}