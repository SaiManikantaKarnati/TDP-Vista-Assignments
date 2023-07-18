async function generateSculptureCards() {
    const gallerySection1 = document.getElementById("gallery1");
    const sculptures = await fetchSculptures();
    sculptures.forEach((artwork) => {
        const sculptureCard = document.createElement("div");
        sculptureCard.classList.add("sclupture-card");
        const scluptureImgLink = document.createElement("a");
        scluptureImgLink.setAttribute("href", artwork.image);
        scluptureImgLink.setAttribute("data-title", artwork.sclupture);
        scluptureImgLink.setAttribute("data-lightbox", "scluptures");
        const sculptureImage = document.createElement("img");
        sculptureImage.src = artwork.image;
        sculptureImage.alt = artwork.sculpture;
        scluptureImgLink.appendChild(sculptureImage);
        sculptureCard.appendChild(scluptureImgLink);
        gallerySection1.appendChild(sculptureCard);
    });
}

async function generatePaintingCards() {
    const gallerySection = document.getElementById("gallery");
    const artworks = await fetchPaintings();
    artworks.forEach((artwork) => {
        const artworkCard = document.createElement("div");
        artworkCard.classList.add("artwork-card");
        const artworkImgLink = document.createElement("a");
        artworkImgLink.setAttribute("href", artwork.image);
        artworkImgLink.setAttribute("data-title", artwork.painting);
        artworkImgLink.setAttribute("data-lightbox", "paintings");
        const artworkImage = document.createElement("img");
        artworkImage.src = artwork.image;
        artworkImage.alt = artwork.painting;
        artworkImgLink.appendChild(artworkImage);
        artworkCard.appendChild(artworkImgLink);
        gallerySection.appendChild(artworkCard);
    })
}

async function fetchSculptures() {
    try {
        const response = await fetch('scluptures.json');
        const sculptures = await response.json();
        return sculptures;
    } catch (error) {
        console.error('Error fetching sculptures:', error);
        return [];
    }
}

async function fetchPaintings() {
    try {
        const response1 = await fetch('artworks.json');
        const artworks = await response1.json();
        return artworks;
    } catch (error) {
        console.error('Error fetching sculptures:', error);
        return [];
    }
}


window.addEventListener("load", async () => {
    await generatePaintingCards();
    await generateSculptureCards();
});