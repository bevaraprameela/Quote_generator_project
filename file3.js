document.getElementById('generate-quote').addEventListener('click', function() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            const quoteText = data.content;
            const quoteAuthor = data.author;

            document.getElementById('quote').textContent = quoteText;
            document.getElementById('author').textContent = `- ${quoteAuthor}`;

            
            const encodedQuote = encodeURIComponent(`"${quoteText}" - ${quoteAuthor}`);
            document.getElementById('twitter-share').href = `https://twitter.com/intent/tweet?text=${encodedQuote}`;
            document.getElementById('facebook-share').href = `https://www.facebook.com/sharer/sharer.php?u=${encodedQuote}`;
            document.getElementById('whatsapp-share').href = `https://api.whatsapp.com/send?text=${encodedQuote}`;
        })
        .catch(error => console.error('Error fetching quote:', error));
});
