import throttle from 'lodash.throttle';


const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.feedback-form input'),
};

const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

populateInputTextarea();

// const savedInformation = localStorage.getItem(STORAGE_KEY);
// const parsedSettings = JSON.parse(savedInformation);

function onFormSubmit(e) {
    e.preventDefault();
    
    const email = e.currentTarget.email.value;
    const message = e.currentTarget.message.value;

    const userData = {
      email,
      message,
    };
    
    console.log(userData);
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);

};

function onTextareaInput(e) {

    
    const email = refs.email.value;
    const message = refs.textarea.value;

    const allInformation = {
      email,
      message,
    }; 

    localStorage.setItem(STORAGE_KEY, JSON.stringify(allInformation));
}

function populateInputTextarea() {
    const savedInformation = localStorage.getItem(STORAGE_KEY);

    if (savedInformation) {
        const parsedSettings = JSON.parse(savedInformation);
        
      refs.email.value = parsedSettings.email;
      refs.textarea.value = parsedSettings.message;
    
    }

    }
   