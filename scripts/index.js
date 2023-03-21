const popup = document.querySelector('.popup');
const formElement = popup.querySelector('.popup__container');
const nameInput = formElement.querySelector('.popup__input_name_info');
const jobInput = formElement.querySelector('.popup__input_job_info');
const popupButtonClose = popup.querySelector('.popup__button-close');

const profileBox = document.querySelector('.profile');
const profileEdit = profileBox.querySelector('.profile__button-edit');
const profileTitle = profileBox.querySelector('.profile__info-title');
const profileSubtitle = profileBox.querySelector('.profile__info-subtitle');


function openPopup() {
    popup.classList.add('popup_opened');
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
}


function closePopup() {
    popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closePopup();
}

profileEdit.addEventListener('click', openPopup);
popupButtonClose.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);


