 // 1. Data Detail Setiap Proyek
    const projectsData = [
      {
        title: "Authentication Portal",
        desc: "A secure authentication system with role-based access control and custom user dashboard.",
        link: "#"
      },
      {
        title: "DocuTrack Management",
        desc: "An enterprise document tracking platform designed to streamline approval workflows and archiving.",
        link: "#"
      },
      {
        title: "Boarding House Rental System",
        desc: "Developed a web-based boarding house rental platform for managing property listings, bookings, payments, and reviews, with separate access for students, landlords, and administrators.",
        link: "#"
      },
      {
        title: "Empowering Rapid Platform",
        desc: "A high-performance analytics platform built to automate data pipelines and generate real-time reporting.",
        link: "#"
      },
      {
        title: "Analytics Dashboard",
        desc: "A monitoring dashboard for server health, microservices tracking, and automated deployment alerts.",
        link: "#"
      }
    ];

     // 2. Mengambil Elemen HTML
    const cards = document.querySelectorAll('.card');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    // Indeks kartu aktif di tengah (Default kartu ke-3)
    let activeIndex = 4;

    // 3. Fungsi Memperbarui Posisi Kartu dan Teks
    function updateCarousel() {
      cards.forEach((card, index) => {
        const offset = index - activeIndex;

        // Atur atribut data-offset berdasarkan selisih jarak dari kartu aktif
        if (Math.abs(offset) <= 2) {
          card.setAttribute('data-offset', offset);
        } else {
          card.setAttribute('data-offset', 'hidden');
        }
      });
    }

    // 4. Event Listener untuk Tombol Navigasi Kiri & Kanan
    prevBtn.addEventListener('click', () => {
      activeIndex = (activeIndex - 1 + cards.length) % cards.length;
      updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
      activeIndex = (activeIndex + 1) % cards.length;
      updateCarousel();
    });

    // 5. Event Listener saat Kartu Diklik Langsung
    cards.forEach((card, index) => {
      card.addEventListener('click', () => {
        activeIndex = index;
        updateCarousel();
      });
    });

    // Jalankan pertama kali
    updateCarousel();