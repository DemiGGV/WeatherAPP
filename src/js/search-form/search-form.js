export default class SearchFormHandler {
  constructor() {
    this.refs = {
      form: document.querySelector(".js-search-form"),
      input: document.querySelector(".js-search-input"),
      button: document.querySelector(".js-search-btn"),
      icons: document.querySelectorAll(".js-search-btn > svg"),
    };
    this.initialize();
  }

  helper(reference, method, handler) {
    if (reference) {
      reference.addEventListener(method, handler.bind(this));
    }
  }

  initialize() {
    this.helper(this.refs.form, "submit", this.handleSubmit);
    this.helper(this.refs.button, "click", this.handleClickBtn);
    this.helper(this.refs.input, "focus", this.handleFocus);
    this.helper(this.refs.input, "blur", this.handleBlur);
    this.helper(this.refs.input, "input", this.handleInput);
  }

  setCrossIcon() {
    this.refs.button.classList.add("js-cross");
    this.refs.icons[0].classList.add("visually-hidden");
    this.refs.icons[1].classList.remove("visually-hidden");
  }
  setMagGlassIcon() {
    this.refs.button.classList.remove("js-cross");
    this.refs.icons[0].classList.remove("visually-hidden");
    this.refs.icons[1].classList.add("visually-hidden");
  }

  handleClickBtn() {
    if (
      this.refs.input.value &&
      this.refs.icons[0].classList.value.includes("visually-hidden")
    ) {
      this.refs.input.value = '';
      this.setMagGlassIcon();
      this.refs.input.blur();
      return;
    }
    if (!this.refs.icons[0].classList.value.includes("visually-hidden")) {
      this.refs.input.blur();
    }
  }

  handleFocus() {
    this.setCrossIcon();
  }

  handleBlur() {
    if (this.refs.input.value) return;
    this.setMagGlassIcon();
  }

  //dynamic entry search query
  handleInput(event) {
    console.log(event.currentTarget.value);
  }

  //submit entered search query
  handleSubmit(event) {
    event.preventDefault();
    const value = event.currentTarget.input.value;
    console.log("searching for:", value);

    //reset form
    event.currentTarget.input.value = "";
    this.refs.input.blur();
  }
}
