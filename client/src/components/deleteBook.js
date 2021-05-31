export default function DeleteBook(id) {
  let data = {};
  data.id = id;

  fetch("http://localhost:8000/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), //if you do not want to send any addional data,  replace the complete JSON.stringify(YOUR_ADDITIONAL_DATA) with null
  });
}
