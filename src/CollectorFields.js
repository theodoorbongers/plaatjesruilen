import classnames from 'classnames';
import './CollectorFields.css';

const CollectorFields = ({
  lackingFieldValue,
  onChangeLackingFieldValue,
  lackingArray,
  redundantFieldValue,
  onChangeRedundantFieldValue,
  redundantArray,
  possibleTransfersIn,
  transfersIn,
  possibleTransfersOut,
  transfersOut,
}) => (
  <>
    <label>
      <div>Ontbrekende plaatjes: </div>
      <textarea value={lackingFieldValue || ''} onChange={e => onChangeLackingFieldValue(e.target.value)} />
    </label>
    <ul>
      {
        lackingArray?.map((cardNumber, index) => <li className={classnames({ transfer: transfersIn.includes(cardNumber), possibleTransfer: possibleTransfersIn.includes(cardNumber) })}  key={index}>{cardNumber}</li>)
      }
    </ul>

    <label>
      <div>Dubbele plaatjes: </div>
      <textarea value={redundantFieldValue || ''} onChange={e => onChangeRedundantFieldValue(e.target.value)} />
    </label>
    <ul>
      {
        redundantArray?.map((cardNumber, index) => <li className={classnames({ transfer: transfersOut.includes(cardNumber), possibleTransfer: possibleTransfersOut.includes(cardNumber) })} key={index}>{cardNumber}</li>)
      }
    </ul>
  </>
);

export default CollectorFields;
