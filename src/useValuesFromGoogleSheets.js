import compact from 'lodash.compact';
import memoize from 'lodash.memoize';
import { useEffect } from 'react';

const API_KEY = 'AIzaSyCULqTDCVfoWs8DCOOngNZLtvKbEj2QtMg';
const gapi = global.gapi;

const loadP = (libraries) => new Promise((resolve, reject) => { gapi.load(libraries, { callback: resolve, onerror: reject }) });

const initializeSheetsApi = memoize(async () => {
  await loadP('client');
  await gapi.client.init({
    apiKey: API_KEY,
    discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
    scopes: "https://www.googleapis.com/auth/spreadsheets.readonly",
  });
});

const useValuesFromGoogleSheets = ({ onChangeLackingFieldValue, onChangeRedundantFieldValue, spreadsheetId }) => {
  useEffect(() => {
    (async () => {
      if (!spreadsheetId) {
        return;
      }

      await initializeSheetsApi();
      const { result: spreadsheet } = await gapi.client.sheets.spreadsheets.get({
        spreadsheetId,
        includeGridData: true,
      });
      const lackingSheet = spreadsheet.sheets[0];
      const lackingValues = compact(lackingSheet?.data[0].rowData?.map(row => row.values[0]?.effectiveValue?.numberValue)).sort((x, y) => x - y);
      onChangeLackingFieldValue(lackingValues.join(', '));
      const redundantSheet = spreadsheet.sheets[1];
      const redundantValues = compact(redundantSheet?.data[0].rowData?.map(row => Array(row.values[1]?.effectiveValue?.numberValue ?? 1).fill(row.values[0]?.effectiveValue?.numberValue))).flat().sort((x, y) => x - y);
      onChangeRedundantFieldValue(redundantValues.join(', '));
    })().catch(window.error);
  }, [spreadsheetId, onChangeLackingFieldValue, onChangeRedundantFieldValue]);
}

export default useValuesFromGoogleSheets;
