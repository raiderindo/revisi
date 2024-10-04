document.addEventListener('DOMContentLoaded', function() {
    const signInBtn = document.querySelector('.sign-in .submit');
    const signUpBtn = document.querySelector('.sign-up .submit');
    const switchBtn = document.querySelector('.img-btn');
    const container = document.querySelector('.cont');
  
    // Event ketika tombol Sign In diklik
    signInBtn.addEventListener('click', function() {
      // Logika untuk login bisa ditambahkan di sini
      window.location.href = 'dashboard.html'; // Redirect setelah sign in
    });
  
    // Event ketika tombol Sign Up Now diklik
    signUpBtn.addEventListener('click', function() {
      // Logika untuk sign up bisa ditambahkan di sini
      window.location.href = 'welcome.html'; // Redirect setelah sign up
    });
  
    // Event untuk mengganti antara Sign In dan Sign Up
    switchBtn.addEventListener('click', function() {
      container.classList.toggle('s-signup');
    });
  });
  