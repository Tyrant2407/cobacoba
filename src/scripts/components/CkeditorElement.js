class CkeditorElement extends HTMLElement {
  constructor() {
    super();
    this.editor = null;
  }

  connectedCallback() {
    this.innerHTML = `
        <div id="editor"></div>
      `;

    if (!window.ClassicEditor) {
      const script = document.createElement('script');
      script.src = 'https://cdn.ckeditor.com/ckeditor5/39.0.1/classic/ckeditor.js';
      script.onload = () => this.initEditor();
      document.head.appendChild(script);
    } else {
      this.initEditor();
    }
  }

  initEditor() {
    ClassicEditor
      .create(this.querySelector('#editor'), {
        toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'],
        heading: {
          options: [
            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
            {
              model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1',
            },
            {
              model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2',
            },
          ],
        },
      })
      .then((editor) => {
        this.editor = editor;
        console.log('Editor is ready to use!', editor);
      })
      .catch((error) => {
        console.error('There was a problem initializing the editor.', error);
      });
  }

  disconnectedCallback() {
    if (this.editor) {
      this.editor.destroy()
        .then(() => {
          this.editor = null;
        })
        .catch((error) => {
          console.error('There was a problem destroying the editor.', error);
        });
    }
  }
}

customElements.define('ckeditor-element', CkeditorElement);
