import { useState } from 'react'

function App() {

  //inizializzo la funzione per gestire l'invio del form e il fetch
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Nuovo post inviato con successo!");
    console.log("Dati inseriti:", formData);

    fetch("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", {
      //specifico che sto inviando dati. senza specificarlo, la richiesta predefinita è GET
      method: "POST",
      //specifico che i dati che sto inviando sono in formato JSON, così il server sa come interpretarli
      headers: {
        "Content-Type": "application/json",
      },
      //converto i dati del form (formData) in formato JSON per l'invio
      body: JSON.stringify(formData),
    })
      //attendo la risposta, e se non ci sono errori la converto in JSON
      .then(res => res.json())
      //ora che ho accesso ai dati, posso stamparli in console
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.log("error")
      })
  };

  //impost lo stato di partenza del form inizializzandolo con i valori vuoti nei vari campi
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  });

  //inizializzo la funzione che servirà a registrare i nuovi valori dei campi
  const handleChange = (e) => {
    //estraggo alcuni valori dall'input che ha generato l'evento
    const { name, value, type, checked } = e.target;
    //aggiorno lo stato formData in base all'input che ha cambiato valore
    setFormData({
      //copio tutti i dati già presenti nel form
      ...formData,
      //e setto la condizione della checkbox
      //se l'elemento è una checkbox, React usa il valore della proprietà checked, se è una textarea, usa la proprietà value
      [name]: type === "checkbox" ? checked : value,
    });
  };



  return (
    <>
    <div className="container">
      <h2 className="mb-4">Crea un nuovo post</h2>
      <form onSubmit={handleSubmit}>
          <div className="mb-3">
              <label htmlFor="author" className="form-label">Autore</label>
              <input
              type="text"
              className="form-control"
              id="author"
              placeholder="Inserisci il nome dell'autore"
              name="author"
              //leva il valore dell'input allo stato (formData), così ogni modifica viene registrata
              value={formData.author}
              //ogni volta che l'utente scrive qualcosa. la funzione handleChange viene chiamata per aggiornare il valore
              onChange={handleChange}
              />
          </div>
          
          <div className="mb-3">
              <label htmlFor="title" className="form-label">Titolo</label>
              <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Inserisci il titolo"
              name="title"
              value={formData.title}
              onChange={handleChange}
              />
          </div>
          
          <div className="mb-3">
              <label htmlFor="body" className="form-label">Corpo del post</label>
              <textarea
              className="form-control"
              id="body"
              rows="5"
              placeholder="Scrivi il contenuto del post"
              name="body"
              value={formData.body}
              onChange={handleChange}></textarea>
          </div>
          
          <div className="form-check mb-3">
              <input
              className="form-check-input"
              type="checkbox"
              id="public"
              //se la checkbox viene selezionata, il suo valore diventa true, altrimenti è false
              checked={formData.public}
              name="public"
              onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="public">Pubblico</label>
          </div>
          
          <button type="submit" className="btn btn-primary">Pubblica</button>
      </form>
    </div> 
    </>
  )
}

export default App
