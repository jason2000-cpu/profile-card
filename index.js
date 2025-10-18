document.addEventListener('DOMContentLoaded', () => {
    const timeElement = document.querySelector('[data-testid="test-user-time"');
    timeElement.textContent = `Time : ${Date.now()} ms`

    const date = Date.now();

    setInterval(() => {
        timeElement.textContent = `Time : ${Date.now()} ms`;
    }, 1000);
})