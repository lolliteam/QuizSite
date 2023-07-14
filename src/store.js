import { writable } from 'svelte/store';

export const score = writable(0);
export const startQuiz = writable(false);

export const fname = writable('');
export const lname = writable('');
export const email = writable('');