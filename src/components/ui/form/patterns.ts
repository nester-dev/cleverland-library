export const EMAIL_VALIDATION_PATTERN =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const PHONE_VALIDATION_PATTERN =
  /^\+375\s?\(?\d{2}\)?\s?\d{3}-?\d{2}-?\d{2}$/;

export const PASSWORD_VALIDATION_PATTERN = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

export const LOGIN_VALIDATION_PATTERN = /^[a-zA-Z0-9]*$/;

export const DEFAULT_PASSWORD_PATTERN = /^\*{8}$/;
