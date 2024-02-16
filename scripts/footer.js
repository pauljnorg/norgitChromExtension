// footer.js
document.addEventListener('DOMContentLoaded', function() {
    // Create footer element
    var footer = document.createElement('footer');
    footer.style.cssText = 'position: fixed; bottom: 0; width: 100%; background-color: #f1f1f1; text-align: center; padding: 10px 0;';

    // Add HTML content for the footer
    footer.innerHTML = `
        <a href="/legal/privacy-policy.html">Privacy Policy</a> |
        <a href="/legal/terms-and-conditions.html">Terms and Conditions</a> |
        <a href="/legal/disclaimer.html">Disclaimer</a> |
        <a href="/legal/contact.html">Contact Us</a>
    `;

    // Append the footer to the body of the document
    document.body.appendChild(footer);
});
