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