document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile Menu Toggler ---
  const menuButton = document.getElementById('menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  }

  // --- Flip Card ---
  const flipCard = document.getElementById('flipCard');
  if (flipCard) {
    flipCard.addEventListener('click', () => {
      document.getElementById('cardInner').classList.toggle('flipped');
    });
  }

  // --- Load Calculator (Survey Page) ---
  const calcBtn = document.getElementById('calcBtn');
  if (calcBtn) {
    calcBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const applianceSelect = document.getElementById('appliance');
      const hoursInput = document.getElementById('hours');
      const resultDiv = document.getElementById('result');

      const applianceOption = applianceSelect.options[applianceSelect.selectedIndex];
      if (!applianceOption || !applianceOption.value) {
        resultDiv.textContent = 'Please select an appliance.';
        return;
      }
      const wattage = parseFloat(applianceOption.getAttribute('data-watt'));
      const hours = parseFloat(hoursInput.value);
      if (isNaN(hours) || hours < 0 || hours > 24) {
        resultDiv.textContent = 'Please enter valid hours (0-24).';
        return;
      }
      const dailyWh = wattage * hours;
      const weeklyWh = dailyWh * 7;
      const monthlyWh = dailyWh * 30;

      resultDiv.innerHTML = `
        <p>Estimated consumption:</p>
        <ul class="list-disc list-inside mt-2">
          <li><strong>Daily:</strong> ${dailyWh.toFixed(1)} Wh</li>
          <li><strong>Weekly:</strong> ${(weeklyWh / 1000).toFixed(2)} kWh</li>
          <li><strong>Monthly:</strong> ${(monthlyWh / 1000).toFixed(2)} kWh</li>
        </ul>`;
    });
  }

  // --- Animated Skill Bars (Skills Page) ---
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  if (skillBars.length > 0) {
    const skillObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const level = bar.getAttribute('data-skill-level');
          bar.style.width = level + '%';
          observer.unobserve(bar); // Animate only once
        }
      });
    }, {
      threshold: 0.5
    }); // Trigger when 50% of the bar is visible

    skillBars.forEach(bar => {
      skillObserver.observe(bar);
    });
  }
});