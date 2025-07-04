import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

// FORMAT DATE TIME
export const formatDateTime = (dateString: Date | string, timeZone: string = Intl.DateTimeFormat().resolvedOptions().timeZone) => {
  const dateTimeOptions: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false, // 24-godzinny format
    timeZone,
  };

  const dateDayOptions: Intl.DateTimeFormatOptions = {
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone,
  };

  const dateOptions: Intl.DateTimeFormatOptions = {
    month: "short",
    year: "numeric",
    day: "numeric",
    timeZone,
  };

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false, // 24-godzinny format
    timeZone,
  };

  const formattedDateTime: string = new Date(dateString).toLocaleString(
    "pl-PL",
    dateTimeOptions
  );

  const formattedDateDay: string = new Date(dateString).toLocaleString(
    "pl-PL",
    dateDayOptions
  );

  const formattedDate: string = new Date(dateString).toLocaleString(
    "pl-PL",
    dateOptions
  );

  const formattedTime: string = new Date(dateString).toLocaleString(
    "pl-PL",
    timeOptions
  );

  return {
    dateTime: formattedDateTime,
    dateDay: formattedDateDay,
    dateOnly: formattedDate,
    timeOnly: formattedTime,
  };
};

export function encryptKey(passkey: string) {
  return btoa(passkey);
}

export function decryptKey(passkey: string) {
  return atob(passkey);
}
