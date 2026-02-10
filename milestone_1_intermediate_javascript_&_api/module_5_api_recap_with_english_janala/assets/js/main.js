// load vocabularies category
const loadVocabulariesCategory = async () => {
  const url = "https://openapi.programming-hero.com/api/levels/all";

  const res = await fetch(url);
  const vocCategoriesData = await res.json();
  displayVocCategories(vocCategoriesData.data);
};

const displayVocCategories = (lessons) => {
  // get the container and empty the container
  const vocabularyContainer = document.getElementById("voccabularyContainer");
  vocabularyContainer.innerHTML = ""; // empty koira dichi

  // loop trought
  lessons.forEach((lesson) => {
    // create an element
    const btnDiv = document.createElement("div");
    // set inside
    btnDiv.innerHTML = `
        <button class="flex items-center gap-1 text-sm font-thin px-2 sm:px-4 py-1 sm:py-2.5 rounded-sm border border-zinc-700 hover:bg-zinc-300">
            <span>
                <i class="ri-booklet-line"></i>
            </span>
            <p>Lesson - ${lesson.level_no}</p>
        </button>
    `;

    // append into container
    vocabularyContainer.appendChild(btnDiv);
  });
};

loadVocabulariesCategory();
