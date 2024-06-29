class TestPage extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    const shadowRoot = this.shadowRoot;

    shadowRoot.innerHTML = `
      <style>
        /* Gaya untuk elemen host */
        :host {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 300px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f0f0f0;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        /* Gaya untuk judul */
        h1 {
          margin-bottom: 10px;
          color: #333;
          font-weight: 600;
        }

        /* Gaya untuk container */
        .container {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        /* Gaya untuk editor */
        #editor {
          flex-grow: 1;
          padding: 10px;
          border: 1px solid #ccc;
          resize: vertical;
          font-family: Arial, sans-serif;
        }

        /* Gaya untuk tombol */
        #simpan {
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          cursor: pointer;
          margin-top: 10px;
        }
      </style>
      <div class="container">
        <h1>Editor Deskripsi</h1>
        <textarea id="editor" placeholder="Masukkan deskripsi Anda di sini..."></textarea>
        <button id="simpan">Simpan</button>
      </div>
    `;

    const editor = shadowRoot.getElementById('editor');
    const simpanButton = shadowRoot.getElementById('simpan');

    simpanButton.addEventListener('click', () => {
      const deskripsi = editor.value;
      // Simpan deskripsi ke database, local storage, atau tampilkan di elemen lain
      // Contoh:
      console.log("Deskripsi:", deskripsi);
    });
  }
}

customElements.define('test-page', TestPage);