// List of technology icons
const icons = [
    'assets/angularjs.png',
    'assets/bootstrap.png',
    'assets/css-3.png',
    'assets/docker.png',
    'assets/figma.png',
    'assets/github1.png',
    'assets/html.png',
    'assets/js.png',
    'assets/nginx.png',
    'assets/nodejs.png',
    'assets/postgre_5968342.png',
    'assets/social.png',
    'assets/stripe.png',
    'assets/typescript.png',
    'assets/web.png',
];

const iconSize = 30; // Size of each icon (width and height)
const minDistance = 50; // Minimum distance between icons

// Function to create a floating icon
function createFloatingIcon(iconSrc) {
    const icon = document.createElement('img');
    icon.src = iconSrc;
    icon.className = 'floating-icon';

    let position = getNonOverlappingPosition();
    icon.style.left = position.x + 'px';
    icon.style.top = position.y + 'px';
    icon.style.animationDuration = (Math.random() * 15 + 10) + 's'; // Random duration between 10-25s

    document.body.appendChild(icon);
}

// Function to get a non-overlapping position for each icon
function getNonOverlappingPosition() {
    let position;
    let attempts = 0;
    const maxAttempts = 1000;

    do {
        position = {
            x: Math.random() * (window.innerWidth - iconSize),
            y: Math.random() * (window.innerHeight - iconSize)
        };
        attempts++;
    } while (isOverlapping(position) && attempts < maxAttempts);

    return position;
}

// Function to check if the new icon position overlaps with existing icons
function isOverlapping(position) {
    const existingIcons = document.querySelectorAll('.floating-icon');
    for (let icon of existingIcons) {
        const rect = icon.getBoundingClientRect();
        const dx = position.x - rect.left;
        const dy = position.y - rect.top;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < minDistance) {
            return true;
        }
    }
    return false;
}

// Create 48 icons (3 of each type) at the start
function initializeIcons() {
    icons.forEach(iconSrc => {
        for (let i = 0; i < 3; i++) {
            createFloatingIcon(iconSrc);
        }
    });
}

// Initialize icons when the window loads
window.addEventListener('load', initializeIcons);