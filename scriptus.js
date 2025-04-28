document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const ratingValue = document.getElementById('ratingValue');
    const reviewBox = document.getElementById('reviewBox');
    const submitReview = document.getElementById('submitReview');
    const userFeedback = document.getElementById('userFeedback');
    const finalRating = document.getElementById('finalRating');
    const finalReview = document.getElementById('finalReview');
  
    let currentRating = 0;
  
    // Star Rating Logic
    stars.forEach(star => {
      star.addEventListener('click', () => {
        currentRating = star.getAttribute('data-value');
        ratingValue.textContent = currentRating;
  
        // Highlight stars up to the clicked one
        stars.forEach(s => {
          s.classList.toggle('active', s.getAttribute('data-value') <= currentRating);
        });
      });
  
      star.addEventListener('mouseover', () => {
        stars.forEach(s => {
          s.classList.toggle('active', s.getAttribute('data-value') <= star.getAttribute('data-value'));
        });
      });
  
      star.addEventListener('mouseout', () => {
        stars.forEach(s => {
          s.classList.toggle('active', s.getAttribute('data-value') <= currentRating);
        });
      });
    });
  
    // Submit Review Logic
    submitReview.addEventListener('click', () => {
      const reviewText = reviewBox.value.trim();
  
      if (currentRating === 0) {
        alert('Please select a star rating before submitting your review.');
        return;
      }
  
      if (reviewText === '') {
        alert('Please write a review before submitting.');
        return;
      }
  
      // Display feedback
      finalRating.textContent = `${currentRating} star${currentRating > 1 ? 's' : ''}`;
      finalReview.textContent = reviewText;
  
      userFeedback.style.display = 'block';
  
      // Reset inputs
      stars.forEach(star => star.classList.remove('active'));
      currentRating = 0;
      ratingValue.textContent = '0';
      reviewBox.value = '';
    });
  });