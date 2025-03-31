import { useState } from 'react'

function App() {

  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dati inseriti:", formData);
  };


  return (
    <>
      <h2 class="mb-4">Crea un nuovo post</h2>
      <form>
          <div class="mb-3">
              <label htmlFor="author" className="form-label">Autore</label>
              <input
              type="text"
              className="form-control"
              id="author"
              placeholder="Inserisci il nome dell'autore"
              name="author"
              onChange={handleChange}
              />
          </div>
          
          <div class="mb-3">
              <label htmlFor="title" className="form-label">Titolo</label>
              <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Inserisci il titolo"
              name="title"
              onChange={handleChange}
              />
          </div>
          
          <div class="mb-3">
              <label htmlFor="body" className="form-label">Corpo del Post</label>
              <textarea
              className="form-control"
              id="body"
              rows="5"
              placeholder="Scrivi il contenuto del post"
              name="body"
              onChange={handleChange}></textarea>
          </div>
          
          <div class="form-check form-switch mb-3">
              <input
              className="form-check-input"
              type="checkbox"
              id="public"
              checked={formData.public}
              name="public"
              onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="public">Pubblico</label>
          </div>
          
          <button type="submit" class="btn btn-primary">Pubblica</button>
      </form>
      
    </>
  )
}

export default App
