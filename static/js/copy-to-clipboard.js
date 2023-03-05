function copyToClipboard(text) {
const textarea = document.createElement('textarea');
textarea.value = text;
textarea.style.position = 'fixed';
textarea.style.top = '-9999px';
document.body.appendChild(textarea);
textarea.select();
textarea.setSelectionRange(0, textarea.value.length);
document.execCommand('copy');
document.body.removeChild(textarea);

const feedback = document.getElementById('feedback');
feedback.innerText = 'Text copied to clipboard!';
setTimeout(() => {
    feedback.innerText = '';
}, 2000);
}

const copyButton = document.getElementById('copy-button');
const textToCopy = 'info@creativecodingbylynn.nl';

copyButton.addEventListener('click', () => {
copyToClipboard(textToCopy);
});