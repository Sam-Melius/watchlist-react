import { client, checkError } from './client';

export function getUser() {
  return client.auth.session() && client.auth.session().user;
}

export async function signUp(email, password) {
  const response = await client.auth.signUp({ email, password });
  return response.user;
}

export async function signIn(email, password) {
  const response = await client.auth.signIn({ email, password });
  return response.user;
}

export async function logout() {
  await client.auth.signOut();
  return (window.location.href = '../');
}

export async function searchMovies(search) {
  const response = await fetch(`/.netlify/functions/movies-endpoint?searchQuery=${search}`);
  const json = await response.json();
  return json.data.results;
}

export async function addToWatchList(movie) {
  const response = await client
    .from('watchlist')
    .insert(movie);

  return checkError(response);
}

export async function getWatchList() {
  const response = await client
    .from('watchlist')
    .select()
    .order('id');

  return checkError(response);
}

export async function watchMovie(id) {
  const response = await client
    .from('watchlist')
    .update({ watched: true })
    .match({ id })
    .single();

  return checkError(response);
}