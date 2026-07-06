let currentCard = null;
let startX = 0;
let currentX = 0;

export function initSwipeLogic(cardElement) {
    currentCard = cardElement;
    
    currentCard.addEventListener('pointerdown', (e) => {
        startX = e.clientX;
        currentCard.style.transition = 'none';
        
        // Listeners for move/end
        document.addEventListener('pointermove', onMove);
        document.addEventListener('pointerup', onEnd);
    });
}

function onMove(e) {
    if (!currentCard) return;
    currentX = e.clientX - startX;
    const rotation = currentX * 0.1;
    currentCard.style.transform = `translateX(${currentX}px) rotate(${rotation}deg)`;
}

function onEnd() {
    document.removeEventListener('pointermove', onMove);
    document.removeEventListener('pointerup', onEnd);
    
    if (!currentCard) return;

    const threshold = window.innerWidth * 0.3; // 30% of screen width to register swipe

    currentCard.style.transition = 'transform 0.3s ease-out';
    
    if (currentX > threshold) {
        // Liked
        currentCard.style.transform = `translateX(${window.innerWidth}px) rotate(30deg)`;
        handleMatch('like');
    } else if (currentX < -threshold) {
        // Passed
        currentCard.style.transform = `translateX(-${window.innerWidth}px) rotate(-30deg)`;
        handleMatch('pass');
    } else {
        // Snap back
        currentCard.style.transform = `translateX(0px) rotate(0deg)`;
    }
    
    currentX = 0;
}

function handleMatch(action) {
    // Save action to Firestore, then fetch next card
    console.log(`User ${action}d the profile.`);
    setTimeout(() => {
        currentCard.remove();
        // Trigger logic to load next profile here
    }, 300);
}