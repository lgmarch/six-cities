import {nanoid} from '@reduxjs/toolkit';

export function generateId(length = 10): string {
  return nanoid(length);
}
