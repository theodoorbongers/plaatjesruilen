import { useState, useMemo } from 'react';
import { groupBy, orderBy } from 'lodash';
import CollectorFields from './CollectorFields';
import ExchangeInfo from './ExchangeInfo';
import useValuesFromGoogleSheets from './useValuesFromGoogleSheets';
import './App.css';

const queryStringParams = new URLSearchParams(global.location.search);
const spreadsheetId1 = queryStringParams.get('googleSheet1');
const spreadsheetId2 = queryStringParams.get('googleSheet2');

const App = () => {
  const collectorFieldsData1 = useCollectorFieldsData();
  const collectorFieldsData2 = useCollectorFieldsData();
  const exchangeInfo = useExchangeInfo(collectorFieldsData1, collectorFieldsData2);
  useValuesFromGoogleSheets({ ...collectorFieldsData1, spreadsheetId: spreadsheetId1 });
  useValuesFromGoogleSheets({ ...collectorFieldsData2, spreadsheetId: spreadsheetId2 });

  return (
    <>
      <CollectorFields {...collectorFieldsData1} possibleTransfersIn={exchangeInfo.possibleCards2to1} transfersIn={exchangeInfo.cards2to1} possibleTransfersOut={exchangeInfo.possibleCards1to2} transfersOut={exchangeInfo.cards1to2} />
      <CollectorFields {...collectorFieldsData2} possibleTransfersIn={exchangeInfo.possibleCards1to2} transfersIn={exchangeInfo.cards1to2} possibleTransfersOut={exchangeInfo.possibleCards2to1} transfersOut={exchangeInfo.cards2to1} />
      <ExchangeInfo {...exchangeInfo} />
    </>
  );
};

const useCardSetData = () => {
  const [fieldValue, onChangeFieldValue] = useState();
  const cardArray = useMemo(() => (fieldValue ?? '').match(/\d+/g)?.map(match => match).sort((a, b) => a - b), [fieldValue]);
  return [fieldValue, onChangeFieldValue, cardArray];
};

const useCollectorFieldsData = () => {
  const [lackingFieldValue, onChangeLackingFieldValue, lackingArray] = useCardSetData();
  const [redundantFieldValue, onChangeRedundantFieldValue, redundantArray] = useCardSetData();
  const lackingCardSet = new Set(lackingArray);
  const redundantCardCounts = orderBy(Object.entries(groupBy(redundantArray)).map(([card, group]) => [card, group.length]), ([_, count]) => count, 'desc');

  return { lackingFieldValue, onChangeLackingFieldValue, lackingArray, lackingCardSet, redundantFieldValue, onChangeRedundantFieldValue, redundantArray, redundantCardCounts };
};

const useExchangeInfo = (collector1Data, collector2Data) => {
  const possibleCards1to2 = collector1Data.redundantCardCounts.filter(([card]) => collector2Data.lackingCardSet.has(card)).map(([card]) => card);
  const possibleCards2to1 = collector2Data.redundantCardCounts.filter(([card]) => collector1Data.lackingCardSet.has(card)).map(([card]) => card);
  const exchangeCount = Math.min(possibleCards1to2.length, possibleCards2to1.length);
  return {
    possibleCards1to2,
    possibleCards2to1,
    cards1to2: possibleCards1to2.slice(0, exchangeCount),
    cards2to1: possibleCards2to1.slice(0, exchangeCount),
  };
};

export default App;
