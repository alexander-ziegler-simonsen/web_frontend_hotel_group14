import React from 'react';

/**
 * Author: Azmi Uslu (s185736)
 * Info: https://www.tabnine.com/code/javascript/classes/react/AppContext.Provider
 *
 * Context - this will  generate a state for the Web-App which is global.
 * Provider - this will give the context for the child-component to consume.
 * Consumer - this will allow the child-component to consume the context.
 * @type {Context<{}>}
 */
export const AppContext = React.createContext({});
export const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;
