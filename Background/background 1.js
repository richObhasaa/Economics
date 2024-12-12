const canvas = document.getElementById('galaxyCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];
    const numStars = 700;
    // Create a star object
    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * canvas.width;
        this.radius = Math.random() * 1.5;
        this.opacity = Math.random();
        this.color = this.getRandomColor();
      }

      // Generate a random color for the star
      getRandomColor() {
        const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#33FFF3"];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      // Draw the star
      draw() {
        const x = (this.x - canvas.width / 2) * (canvas.width / this.z);
        const y = (this.y - canvas.height / 2) * (canvas.width / this.z);
        const size = this.radius * (canvas.width / this.z);
        ctx.beginPath();
        ctx.arc(x + canvas.width / 2, y + canvas.height / 2, size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        ctx.globalAlpha = 1; // Reset alpha
      }

      // Update star position
      update() {
        this.z -= 2;
        if (this.z <= 0) {
          this.z = canvas.width;
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.radius = Math.random() * 1.5;
          this.opacity = Math.random();
          this.color = this.getRandomColor(); // Assign a new random color
        }
        this.draw();
      }
    }

    // Initialize stars
    for (let i = 0; i < numStars; i++) {
      stars.push(new Star());
    }

    // Animation loop
    function animate() {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => star.update());
      requestAnimationFrame(animate);
    }

    animate();

    // Adjust canvas size on window resize
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars.length = 0;
      for (let i = 0; i < numStars; i++) {
        stars.push(new Star());
      }
    });