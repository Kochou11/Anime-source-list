// Create the FAQ content structure with dropdowns
const faqContent = [
  {
    question: "What is Awesome Anime Sources?",
    answer: "Awesome Anime Sources is a curated collection of resources for anime, manga, light novels, and other related content. We aim to provide a comprehensive directory for enthusiasts to discover quality platforms and services."
  },
  {
    question: "Are these sites legal?",
    answer: "We include a mix of official and unofficial sources. Official platforms are clearly marked. We recommend supporting official releases whenever possible, but understand that not all content is legally available in every region."
  },
  {
    question: "How does the ratings work?",
    answer: "Ratings are given on admin personal preferences, experiences and also from community feedback."
  },
  {
    question: "How do I report a broken link?",
    answer: "You can report broken links by joining our Discord server through the link in the header or footer. There's a dedicated channel for reporting issues with the site."
  },
  {
    question: "How often is the site updated?",
    answer: "We strive to update our listings regularly as new sources emerge and others become unavailable. The community also helps keep our information current through feedback."
  },
  {
    question: "Can I suggest a new resource to add?",
    answer: "Absolutely! We welcome suggestions from the community. Please submit your recommendations through our Discord server or via GitHub with details about why it should be included."
  },
  {
    question: "Is there a way to filter sources by country/region availability?",
    answer: "Currently, we don't have a regional filter system implemented, but we're considering adding this feature in the future to help users find services available in their region."
  },
  
];

// Create modal HTML structure
function createFaqModal() {
  // Create the modal container
  const modalContainer = document.createElement('div');
  modalContainer.className = 'modal-container';
  modalContainer.id = 'faqModal';
  
  // Create the modal content
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';
  
  // Create header
  const modalHeader = document.createElement('div');
  modalHeader.className = 'modal-header';
  
  const modalTitle = document.createElement('h2');
  modalTitle.textContent = 'Frequently Asked Questions';
  
  const closeButton = document.createElement('button');
  closeButton.className = 'close-button';
  closeButton.innerHTML = '&times;';
  closeButton.onclick = function() {
    document.getElementById('faqModal').style.display = 'none';
  };
  
  modalHeader.appendChild(modalTitle);
  modalHeader.appendChild(closeButton);
  
  // Create body with accordion dropdowns
  const modalBody = document.createElement('div');
  modalBody.className = 'modal-body';
  
  // Create FAQ accordions
  faqContent.forEach((item, index) => {
    const accordion = document.createElement('div');
    accordion.className = 'accordion';
    
    const question = document.createElement('div');
    question.className = 'accordion-header';
    question.innerHTML = `<h3>${item.question}</h3><span class="accordion-icon">+</span>`;
    
    const answer = document.createElement('div');
    answer.className = 'accordion-content';
    answer.innerHTML = `<p>${item.answer}</p>`;
    
    accordion.appendChild(question);
    accordion.appendChild(answer);
    
    question.addEventListener('click', function() {
      this.classList.toggle('active');
      
      const icon = this.querySelector('.accordion-icon');
      icon.textContent = icon.textContent === '+' ? '−' : '+';
      
      const content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
    
    modalBody.appendChild(accordion);
  });
  
  // Assemble the modal
  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContainer.appendChild(modalContent);
  
  return modalContainer;
}

// Add CSS for modal and accordions
function addModalStyles() {
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    /* Modal Styles */
    .modal-container {
      display: none;
      position: fixed;
      z-index: 1000;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      overflow: auto;
    }
    
    .modal-content {
      background-color: var(--card);
      margin: 5% auto;
      padding: 0;
      width: 80%;
      max-width: 700px;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
      animation: modalFadeIn 0.3s;
    }
    
    @keyframes modalFadeIn {
      from {opacity: 0; transform: translateY(-20px);}
      to {opacity: 1; transform: translateY(0);}
    }
    
    .modal-header {
      padding: 15px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--border);
      border-radius: 10px 10px 0 0;
    }
    
    .modal-header h2 {
      margin: 0;
      color: var(--primary);
      font-size: 1.5rem;
      
    }
    
    .close-button {
      background: none;
      border: none;
      color: var(--text);
      font-size: 1.5rem;
      cursor: pointer;
      outline: none;
      transition: color 0.3s;
    }
    
    .close-button:hover {
      color: var(--primary);
    }
    
    .modal-body {
      padding: 20px;
      max-height: 70vh;
      overflow-y: auto;
    }
    
    /* Accordion Styles */
    .accordion {
      margin-bottom: 15px;
      border: 1px solid var(--border);
      border-radius: 8px;
      overflow: hidden;
    }
    
    .accordion-header {
      background-color: var(--card-highlight);
      padding: 15px;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: background-color 0.3s;
    }
    
    .accordion-header:hover {
      background-color: var(--hover);
    }
    
    .accordion-header h3 {
      margin: 0;
      font-size: 1.1rem;
      color: var(--text);
    }
    
    .accordion-icon {
      font-size: 1.2rem;
      font-weight: bold;
      color: var(--primary);
    }
    
    .accordion-content {
      padding: 0;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease-out;
      background-color: var(--card);
    }
    
    .accordion-content p {
      padding: 15px;
      margin: 0;
      color: var(--text-secondary);
      line-height: 1.5;
    }
    
    /* Active states */
    .accordion-header.active {
      background-color: var(--hover);
    }
  `;
  
  document.head.appendChild(styleElement);
}

// Initialize FAQ modal functionality
function initFaqModal() {
  // Add modal styles
  addModalStyles();
  
  // Create and append modal to body
  const faqModal = createFaqModal();
  document.body.appendChild(faqModal);
  
  // Add event listener to FAQ link
  const faqLink = document.querySelector('.faq a');
  if (faqLink) {
    faqLink.addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('faqModal').style.display = 'block';
    });
  }
  
  // Close modal when clicking outside of it
  window.addEventListener('click', function(e) {
    if (e.target === document.getElementById('faqModal')) {
      document.getElementById('faqModal').style.display = 'none';
    }
  });
}

// Run initialization when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initFaqModal);