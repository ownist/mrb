const handleAddToStorage = () => {
  const name = document.getElementById("name").value;
  const id = document.getElementById("id").value;

  const data = { id, name };
  localStorage.setItem(id, JSON.stringify(data));
};

const storedItem = localStorage.getItem("331558");
console.log(JSON.parse(storedItem));

// clear localStorage
const handleClear = () => {
  localStorage.clear();
};
