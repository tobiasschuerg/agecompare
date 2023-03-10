function showImage(element, path, title) {
  var container = document.createElement("div");
  container.classList.add("highlight");

  var label = document.createElement("p");
  container.classList.add("text-center");
  label.textContent = title;

  var enlargedImage = document.createElement("img");
  enlargedImage.src = path;
  enlargedImage.alt = "Enlarged image";
  enlargedImage.style.transition = "opacity 0.3s ease-in-out";

  container.appendChild(enlargedImage);
  container.appendChild(label);

  document.body.appendChild(container);
  setTimeout(function() {
    enlargedImage.style.opacity = "1";
  }, 100);
}

function hideImage(element) {
  var enlargedImage = document.querySelector(".highlight");
  enlargedImage.style.opacity = "0";
  document.body.removeChild(enlargedImage);
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const lazyImage = entry.target;
      lazyImage.src = lazyImage.dataset.src;
      lazyImage.classList.remove('lazy-load');
      observer.unobserve(lazyImage);
    }
  });
});

const lazyImages = document.querySelectorAll('.lazy-load');
lazyImages.forEach(image => {
  observer.observe(image);
});
