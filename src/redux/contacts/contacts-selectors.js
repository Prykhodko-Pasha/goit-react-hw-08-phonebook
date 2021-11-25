import { createSelector } from '@reduxjs/toolkit';

export const getEntities = state => state.contacts.entities;
export const getFilter = state => state.contacts.filter;
export const getLoading = state => state.contacts.isLoading;
export const getVisibleContacts = createSelector(
  [getEntities, getFilter],
  (items, filter) =>
    items.filter(item => item.name.toLowerCase().includes(filter)),
);
