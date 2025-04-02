
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('businessCardForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        updatePreview();
    });
    
    // Mise à jour en temps réel
    const inputFields = form.querySelectorAll('input, select');
    inputFields.forEach(input => {
        input.addEventListener('input', function() {
            updatePreview();
        });
    });
    
    function updatePreview() {
        const firstName = document.getElementById('firstName').value || 'Kylian';
        const lastName = document.getElementById('lastName').value || 'BAILLY';
        const jobTitle = document.getElementById('jobTitle').value || 'STAGIAIRE';
        const email = document.getElementById('email').value || 'k.bailly@reseauegff.fr';
        const phone = document.getElementById('phone').value || '+33 6 00 00 00 00';
        const website = document.getElementById('website').value || 'www.reseauegff.fr';
        const location = document.getElementById('location').value || 'Paris, France';
        const linkedin = document.getElementById('linkedin').value || '';
        const facebook = document.getElementById('facebook').value || '';
        const twitter = document.getElementById('twitter').value || '';
        const instagram = document.getElementById('instagram').value || '';
        
        // Mise à jour des éléments dans la prévisualisation
        document.getElementById('previewName').textContent = `${firstName} ${lastName}`;
        document.getElementById('previewTitle').textContent = jobTitle;
        document.getElementById('previewEmail').textContent = email;
        document.getElementById('previewEmail').href = `mailto:${email}`;
        document.getElementById('previewPhone').textContent = phone;
        document.getElementById('previewPhone').href = `tel:${phone.replace(/\s+/g, '')}`;
        document.getElementById('previewWebsite').textContent = website;
        document.getElementById('previewWebsite').href = website.startsWith('http') ? website : `https://${website}`;
        document.getElementById('previewLocation').textContent = location;
        
        // Gestion des réseaux sociaux - afficher uniquement si un lien est fourni
        updateSocialIcon('previewLinkedin', linkedin);
        updateSocialIcon('previewFacebook', facebook);
        updateSocialIcon('previewTwitter', twitter);
        updateSocialIcon('previewInstagram', instagram);
        
        // Vérifier si au moins un réseau social est visible
        const socialIcons = document.querySelectorAll('.social-section .social-icon:not(.hidden)');
        const socialSection = document.getElementById('socialSection');
        
        if (socialIcons.length > 0) {
            socialSection.style.display = 'flex';
        } else {
            socialSection.style.display = 'none';
        }
    }
    
    function updateSocialIcon(id, url) {
        const element = document.getElementById(id);
        if (url && url !== '#') {
            element.href = url;
            element.classList.remove('hidden');
        } else {
            element.href = '#';
            element.classList.add('hidden');
        }
    }
    
    // Fonction de téléchargement du HTML
    document.getElementById('downloadBtn').addEventListener('click', function() {
        const firstName = document.getElementById('firstName').value || 'Kylian';
        const lastName = document.getElementById('lastName').value || 'BAILLY';
        const jobTitle = document.getElementById('jobTitle').value || 'STAGIAIRE';
        const email = document.getElementById('email').value || 'k.bailly@reseauegff.fr';
        const phone = document.getElementById('phone').value || '+33 6 00 00 00 00';
        const phoneHref = phone.replace(/\s+/g, '');
        const website = document.getElementById('website').value || 'www.reseauegff.fr';
        const websiteHref = website.startsWith('http') ? website : `https://${website}`;
        const location = document.getElementById('location').value || 'Paris, France';
        const linkedin = document.getElementById('linkedin').value || '#';
        const facebook = document.getElementById('facebook').value || '#';
        const twitter = document.getElementById('twitter').value || '#';
        const instagram = document.getElementById('instagram').value || '#';
        
        // Récupérer le contenu du modèle HTML
        let templateHTML = document.getElementById('cardTemplate').innerHTML;
        
        // Dans la fonction downloadBtn event listener, avant de créer le blob

// Récupérer le style de carte sélectionné
const cardStyle = document.getElementById('cardStyle').value;

// Ajouter une classe de style à la carte dans le template
if (cardStyle !== 'default') {
templateHTML = templateHTML.replace('<div class="card">', `<div class="card ${cardStyle}">`);
}

// Inclure les styles CSS supplémentaires dans le template si un style autre que par défaut est sélectionné
if (cardStyle !== 'default') {
const additionalStyles = document.querySelector('style').textContent;
const styleRegex = new RegExp(`/\\* Styles de cartes alternatifs \\*/(.|\\n)*?\\.card\\.${cardStyle}[^}]*}(.|\\n)*?(?=\\.card\\.|@keyframes|<\/style>)`, 'g');
const matchedStyles = additionalStyles.match(styleRegex);

if (matchedStyles) {
const styleInsertPoint = templateHTML.indexOf('</style>');
templateHTML = templateHTML.substring(0, styleInsertPoint) + matchedStyles[0] + templateHTML.substring(styleInsertPoint);
}
}
        // Remplacer les placeholders par les valeurs réelles
        templateHTML = templateHTML.replace('NAME_PLACEHOLDER', `${firstName} ${lastName}`);
        templateHTML = templateHTML.replace('TITLE_PLACEHOLDER', jobTitle);
        templateHTML = templateHTML.replace(/EMAIL_PLACEHOLDER/g, email);
        templateHTML = templateHTML.replace('PHONE_PLACEHOLDER', phone);
        templateHTML = templateHTML.replace('PHONE_HREF_PLACEHOLDER', phoneHref);
        templateHTML = templateHTML.replace('WEBSITE_PLACEHOLDER', website);
        templateHTML = templateHTML.replace('WEBSITE_HREF_PLACEHOLDER', websiteHref);
        templateHTML = templateHTML.replace('LOCATION_PLACEHOLDER', location);
        
        // Gestion des réseaux sociaux
        templateHTML = templateHTML.replace('LINKEDIN_PLACEHOLDER', linkedin);
        templateHTML = templateHTML.replace('FACEBOOK_PLACEHOLDER', facebook);
        templateHTML = templateHTML.replace('TWITTER_PLACEHOLDER', twitter);
        templateHTML = templateHTML.replace('INSTAGRAM_PLACEHOLDER', instagram);
        
        // Gestion des classes hidden pour les réseaux sociaux
        templateHTML = templateHTML.replace('LINKEDIN_HIDDEN_CLASS', linkedin === '#' ? 'hidden' : '');
        templateHTML = templateHTML.replace('FACEBOOK_HIDDEN_CLASS', facebook === '#' ? 'hidden' : '');
        templateHTML = templateHTML.replace('TWITTER_HIDDEN_CLASS', twitter === '#' ? 'hidden' : '');
        templateHTML = templateHTML.replace('INSTAGRAM_HIDDEN_CLASS', instagram === '#' ? 'hidden' : '');
        
        // Gestion de la section sociale
        if (linkedin === '#' && facebook === '#' && twitter === '#' && instagram === '#') {
            templateHTML = templateHTML.replace('id="socialSectionTemplate"', 'id="socialSectionTemplate" style="display: none;"');
        }
        
        // Remplacer le placeholder du logo par une URL de base64 ou autre URL
        templateHTML = templateHTML.replace('LOGO_URL_PLACEHOLDER', '/api/placeholder/70/70');
        
        // Créer un objet Blob pour le contenu HTML
        const blob = new Blob([templateHTML], { type: 'text/html' });
        
        // Créer une URL pour le Blob
        const blobUrl = URL.createObjectURL(blob);
        
        // Créer un élément <a> pour le téléchargement
        const downloadLink = document.createElement('a');
        downloadLink.href = blobUrl;
        downloadLink.download = `carte_visite_${firstName}_${lastName}.html`;
        
        // Ajouter le lien au document, cliquer dessus puis le supprimer
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        
        // Libérer la ressource URL.createObjectURL
        setTimeout(() => {
            URL.revokeObjectURL(blobUrl);
        }, 100);
    });
    
    document.getElementById('shareBtn').addEventListener('click', function() {
        alert('Fonction de partage simulée. Dans une implémentation réelle, cela permettrait de partager la carte via email ou réseaux sociaux.');
    });
    
    // Initialisation de la prévisualisation
    updatePreview();
});

function applyCardStyle(style) {
const card = document.querySelector('.preview-container .card');

// Supprimer tous les styles de carte existants
card.classList.remove('default', 'light-blue', 'gradient-blue', 'modern');

// Appliquer le nouveau style
if (style) {
card.classList.add(style);
}
}

// Modifier la fonction updatePreview pour inclure le style de carte
function updatePreview() {
// Code existant...
const cardStyle = document.getElementById('cardStyle').value;
applyCardStyle(cardStyle);
// Code existant...
}

// Ajouter un écouteur d'événement pour le changement de style
document.getElementById('cardStyle').addEventListener('change', function() {
updatePreview();
});