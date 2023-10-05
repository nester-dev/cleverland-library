export const CLEAR_INPUT = "clear input";

export enum Routes {
  HOME = "/",
  AUTH = "/auth",
  CATEGORY = "/category",
  RULES = "/rules",
  AGREEMENT = "/agreement",
  REGISTRATION = "/registration",
  PROFILE = "/profile",
}

export enum ResponseMessages {
  BOOKING_SUCCESS = "Книга забронирована. Подробности можно посмотреть на странице Профиль",
  ERROR = "Что-то пошло не так. Обновите страницу через некоторое время.",
  BOOKING_CHANGE_SUCCESS = "Изменения успешно сохранены",
  BOOKING_CHANGE_ERROR = "Изменения не были сохранены. Попробуйте позже!",
  BOOKING_CANCEL_SUCCESS = "Бронирование книги успешно отменено!",
  BOOKING_CANCEL_ERROR = "Не удалось снять бронирование книги. Попробуйте позже!",
  AVATAR_UPDATE_SUCCESS = "Фото успешно сохранено!",
  AVATAR_UPDATE_ERROR = "Не удалось обновить фото. Попробуйте позже!",
  PROFILE_UPDATE_SUCCESS = "Учетные данные успешно обновлены!",
  PROFILE_UPDATE_ERROR = "Не удалось обновить учетные данные. Попробуйте позже!",
}

export const TOTAL_FORM_STEPS = 3;
export const DAYS_IN_WEEK = 7;
export const LAST_MONTH = 11;
export const FIRST_MONTH = 0;
