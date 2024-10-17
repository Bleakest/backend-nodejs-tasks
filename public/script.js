document.addEventListener("click", (event) => {
  if (event.target.dataset.type === "remove") {
    const id = event.target.dataset.id;

    remove(id).then(() => {
      event.target.closest(".list-group-item").remove();
    });
  }

  if (event.target.dataset.type === "change") {
    const id = event.target.dataset.id;
    const newValue = prompt("Create new value");
    if (newValue) {
      change(id, newValue);
      const element = document.querySelector(`[data-id='${id}']`);
      element.textContent = newValue;
    }
  }
});

async function change(id, newValue) {
  await fetch(`${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ title: newValue, id }),
  });
}

async function remove(id) {
  await fetch(`/${id}`, { method: "DELETE" });
}
