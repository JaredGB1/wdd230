
function isBannerDay() {
    const today = new Date();
    let currentDate=new Date(today);
    const dayOfWeek = today.getDay();
    return dayOfWeek >= 1 && dayOfWeek <= 3; 
}
function updateBannerVisibility() {
    const banner = document.getElementById('banner');
    if (isBannerDay()) {
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none';
    }
}

function closeBanner() {
    const banner = document.getElementById('banner');
    banner.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    updateBannerVisibility();
});